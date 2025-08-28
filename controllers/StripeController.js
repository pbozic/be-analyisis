import dotenv from 'dotenv';
import { SUBSCRIPTION_STATUS } from '@prisma/client';

import DeliveryOrderDao from '../dao/DeliveryOrder.js';
import socket from '../socket.js';
import stripe from '../lib/stripe.js';
import BusinessDao from '../dao/Business.js';
import PromoDao from '../dao/Promo.js';
import UserDao from '../dao/User.js';
import WalletFundsHelpers from '../lib/WalletFundsHelpers.js';
import { DELIVERY_ORDER_STATUS, SERVICE_TYPE, ORDER_TYPE, TAXI_ORDER_STATUS } from '../lib/constants.js';
import { calculateDeliveryOrderPaymentCuts } from '../lib/deliveryHelpers.js';
import WalletFundsDao from '../dao/WalletFunds.js';
import TaxiOrderDao from '../dao/TaxiOrder.js';
import PaymentHelpers from '../lib/paymentHelpers.ts';
import dailyMealHelpers from '../lib/dailyMealHelpers.ts';
import { handleStockSync } from './DeliveryOrderController.js';
import { BUSINESS_TYPE } from '../lib/constants.js';
import prisma from '../prisma/prisma.js';
import DailyMealDao from '../dao/DailyMealDao.ts';
import PaymentDao from '../dao/Payment.ts';

dotenv.config();
const { io, UserSockets, SocketStore } = socket;
async function handlePaymentIntentSuccess(paymentIntent) {
	switch (paymentIntent.metadata.type) {
		case 'wallet_topup':
			console.log('wallet_topup', paymentIntent);
			// //The amount in the charge is in the given currency, whereas the amount after conversion to Eur is stored in the balance transaction connected to the charge.
			// const pi_latest_charge = await stripe.client.charges.retrieve(paymentIntent.latest_charge, {
			//     expand: ['balance_transaction'],
			// });
			// console.info(pi_latest_charge)
			// const amount_in_eur_cents= pi_latest_charge.balance_transaction.amount
			//
			// await UsersDao.addToWalletBalance(paymentIntent.metadata.user_id, amount_in_eur_cents, paymentIntent.latest_charge);
			// if (UserSockets.get(paymentIntent.metadata.user_id)) {
			//     let user = await UsersDao.getUserById(paymentIntent.metadata.user_id);
			//     console.log("user", user.user_id)
			//     UserSockets.get(user.user_id).emit('wallet_balance_change', user.wallet_balance);
			// }
			break;
		case 'order_payment': {
			if (paymentIntent.metadata.order_type === ORDER_TYPE.DELIVERY) {
				let order = await DeliveryOrderDao.getOrder(paymentIntent.metadata.order_id);

				let business = await BusinessDao.getBusinessById(order.business_id);
				console.log('Accept business type', business?.type);
				const restaurant_stripe = business.stripe_account_id;
				const { PLATFORM_CREDIT_CUT, MERCHANT_CREDIT_CUT } = await calculateDeliveryOrderPaymentCuts(order);
				if (paymentIntent.metadata?.merchant_cut > 0) {
					const transferRestaurant = await stripe.splitCutFromPaymentIntent(
						paymentIntent,
						restaurant_stripe,
						parseFloat(paymentIntent.metadata.merchant_cut)
					);
				}
				if (PLATFORM_CREDIT_CUT > 0) {
					const transferedCreditsPlatform = await WalletFundsHelpers.transferReservedCreditsForOrder(
						order.user_id,
						'platform',
						PLATFORM_CREDIT_CUT,
						order.order_id,
						SERVICE_TYPE.DELIVERY
					);
				}
				if (MERCHANT_CREDIT_CUT > 0) {
					const transferedCreditsMerchant = await WalletFundsHelpers.transferReservedCreditsForOrder(
						order.user_id,
						restaurant_stripe,
						MERCHANT_CREDIT_CUT,
						order.order_id,
						SERVICE_TYPE.DELIVERY
					);
				}
				//any remaining reserved funds are meant for delivery driver and should be handled on order completion
				order = await DeliveryOrderDao.updateOrder(order.order_id, {
					payment: {
						...order.payment,
						status: 'PAID',
					},
				});
				order = await DeliveryOrderDao.updateOrderStatus(
					order.order_id,
					DELIVERY_ORDER_STATUS.CUSTOMER_PAYMENT_SUCCESSFUL
				);
				if ([BUSINESS_TYPE.MERCHANT, BUSINESS_TYPE.LOCAL].includes(business?.type)) {
					order = await DeliveryOrderDao.updateOrderStatus(
						order.order_id,
						DELIVERY_ORDER_STATUS.MERCHANT_READY_FOR_PICKUP
					);
					// handle stock sync if the business is a merchant
					await handleStockSync(order);
				} else {
					order = await DeliveryOrderDao.updateOrderStatus(
						order.order_id,
						DELIVERY_ORDER_STATUS.MERCHANT_ACCEPTED
					);
					order = await DeliveryOrderDao.updateOrderStatus(
						order.order_id,
						DELIVERY_ORDER_STATUS.MERCHANT_PREPARING
					);
				}
				// if(paymentIntent?.metadata?.preparation_time){
				// 	order = await DeliveryOrderDao.updateOrderPickupTime(order.order_id, paymentIntent.metadata.preparation_time);
				// 	io.to("order_" + order.order_id).emit("order_pickup_time", order);
				// }
				io.to('order_' + order.order_id).emit('order_status_change__delivery', order);
			} else if (paymentIntent.metadata.order_type === ORDER_TYPE.TRANSFER_PRIVATE) {
				let order = await TaxiOrderDao.getOrder(paymentIntent.metadata.order_id);
				//any reserved funds are meant to be transfered on order completion
				order = await TaxiOrderDao.updateOrder(order.order_id, {
					payment: {
						...order.payment,
						status: 'PAID',
					},
				});
				order = await TaxiOrderDao.updateOrderStatus(order.order_id, TAXI_ORDER_STATUS.PENDING);
				io.to('order_' + order.order_id).emit('order_status_change__taxi', order);
			}
			console.log('PaymentIntent was successful!');
			break;
		}
		case 'daily_meals_subscription_payment': {
			let payment = await PaymentDao.getPaymentByGroupedId(paymentIntent.transfer_group);
			const updated_sub = await dailyMealHelpers.activateSubscriptionById(paymentIntent.transfer_group);
			if (!updated_sub) {
				console.warn(
					'No DM subscriptions found after transfers for grouped_id: ',
					paymentIntent.transfer_group
				);
			}
			break;
		}
		case 'promo_section': {
			// Legacy single promo section flow (kept for backward compatibility). Expect metadata: promo_sections_buy_id & duration
			const buyId = paymentIntent.metadata?.promo_sections_buy_id;
			const duration = parseInt(paymentIntent.metadata?.duration || '0', 10) || 0;
			if (!buyId) break;
			const promoBuy = await PromoDao.getPromoSectionBuyByStripeIntentId(paymentIntent.id);
			if (!promoBuy) break;
			const now = new Date();
			const expires = new Date(now.getTime() + duration * 24 * 60 * 60 * 1000);
			await PromoDao.updatePromoSectionBuy(promoBuy.promo_sections_buy_id, {
				paid: true,
				active_at: now,
				expires_at: expires,
			});
			break;
		}
		case 'promo_section_bulk': {
			try {
				const idsRaw = paymentIntent.metadata.promo_section_buy_ids;
				const businessId = paymentIntent.metadata.business_id;
				if (!idsRaw) break;
				let ids = [];
				try {
					ids = JSON.parse(idsRaw);
				} catch {
					ids = [];
				}
				if (!Array.isArray(ids) || ids.length === 0) break;
				const now = new Date();
				const buys = await prisma.promo_sections_buy.findMany({
					where: { promo_sections_buy_id: { in: ids } },
				});
				for (const b of buys) {
					// check if promo_buy already exists (if exists update now to exists.expires_at)
					const exists = await prisma.promo_sections_buy.findFirst({
						where: { promo_sections_buy_id: b.promo_sections_buy_id, business_id: businessId, paid: true },
						orderBy: { expires_at: 'desc' },
					});
					const starts = exists ? new Date(exists.expires_at) : now;
					const expires = new Date(starts.getTime() + (b.duration || 0) * 24 * 60 * 60 * 1000);
					await prisma.promo_sections_buy.update({
						where: { promo_sections_buy_id: b.promo_sections_buy_id },
						data: { paid: true, active_at: starts, expires_at: expires },
					});
				}
				console.info('Activated promo section buys', ids);
			} catch (err) {
				console.error('Failed to activate promo_section_bulk buys', err);
			}
			break;
		}
		// case 'word_buy': {
		// 	const invoice = event.data.object;
		// 	const subId = invoice.subscription;
		// 	if (!subId) return res.json({ received: true });

		// 	// 1) Find your word_buy record by subscription ID
		// 	const wb = await prisma.word_buy.findFirst({
		// 		where: { stripe_subscription_id: subId },
		// 	});
		// 	if (!wb) {
		// 		// not one of ours
		// 		return res.json({ received: true });
		// 	}

		// 	// 2) Extract the billing period from the first line item
		// 	const line = invoice.lines.data[0];
		// 	if (!line?.period) {
		// 		console.error('No period info on invoice line for subscription:', subId);
		// 		return res.json({ received: true });
		// 	}

		// 	const periodStart = new Date(line.period.start * 1000);
		// 	const periodEnd = new Date(line.period.end * 1000);

		// 	// 3) Decide if this is the first payment or a renewal
		// 	const isFirstPayment = !wb.paid;

		// 	// 4) Build the update payload
		// 	const updateData = {
		// 		paid: true,
		// 		expires_at: periodEnd,
		// 	};
		// 	if (isFirstPayment) {
		// 		updateData.active_at = periodStart;
		// 	}

		// 	// 5) Persist updates
		// 	await prisma.word_buy.update({
		// 		where: { word_buy_id: wb.word_buy_id },
		// 		data: updateData,
		// 	});
		// }
	}
}
async function handlePaymentIntentFaliure(paymentIntent) {
	console.log('PaymentIntent failed!');
	let order;
	switch (paymentIntent.metadata.type) {
		case 'wallet_topup':
			break;
		case 'order_payment':
			{
				switch (paymentIntent.metadata.order_type) {
					case ORDER_TYPE.DELIVERY:
						order = await DeliveryOrderDao.getOrder(paymentIntent.metadata.order_id);
						order = await DeliveryOrderDao.updateOrder(order.order_id, {
							payment: {
								...order.payment,
								status: 'UNPAID',
							},
						});
						order = await DeliveryOrderDao.updateOrderStatus(
							order.order_id,
							DELIVERY_ORDER_STATUS.CUSTOMER_PAYMENT_FAILED
						);
						io.to('order_' + order.order_id).emit('order_status_change__delivery', order);
						order = await DeliveryOrderDao.updateOrderStatus(order.order_id, DELIVERY_ORDER_STATUS.FAIL);
						io.to('order_' + order.order_id).emit('order_status_change__delivery', order);
						SocketStore.closeRoom(`order_${order.order_id}`);
						await WalletFundsHelpers.releaseReservedWalletFundsForOrder(order.user_id, order.order_id);
						break;
					case ORDER_TYPE.TRANSFER_PRIVATE:
						order = await TaxiOrderDao.getOrder(paymentIntent.metadata.order_id);
						order = await DeliveryOrderDao.updateOrder(order.order_id, {
							payment: {
								...order.payment,
								status: 'UNPAID',
							},
						});
						order = await DeliveryOrderDao.updateOrderStatus(
							order.order_id,
							TAXI_ORDER_STATUS.CUSTOMER_CANCELED
						);
						io.to('order_' + order.order_id).emit('order_status_change__delivery', order);
						SocketStore.closeRoom(`order_${order.order_id}`);
						await WalletFundsHelpers.releaseReservedWalletFundsForOrder(order.user_id, order.order_id);
						break;
				}
			}
			break;
		case 'daily_meals_subscription_payment': {
			//TODO: Marcel fix this
			let payment = await PaymentDao.getPaymentByGroupedId(paymentIntent.transfer_group);
			//TODO: handle dm failed
			const updated_subs = await DailyMealDao.updateSubscriptionStatus(
				paymentIntent.transfer_group,
				SUBSCRIPTION_STATUS.FAILED
			);
			if (!updated_subs || updated_subs.length === 0) {
				console.warn(
					'No DM subscriptions found after transfers for grouped_id: ',
					paymentIntent.transfer_group
				);
			}
			await PaymentHelpers.handlePaymentRefund(payment);
			break;
		}
	}
}
export async function handleChargeUpdate(charge) {
	switch (charge.metadata.type) {
		case 'wallet_topup':
			if (charge.status === 'succeeded' && charge.balance_transaction !== null) {
				//The amount in the charge is in the given currency, whereas the amount after conversion to Eur is stored in the balance transaction connected to the charge.
				const charge_balance_transaction = await stripe.client.balanceTransactions.retrieve(
					charge.balance_transaction
				);
				console.info(charge_balance_transaction);
				const amount_in_eur_cents = charge_balance_transaction.amount;
				await WalletFundsDao.createWalletFunds(charge.metadata.user_id, amount_in_eur_cents, charge.id); //UsersDao.addToWalletBalance(charge.metadata.user_id, amount_in_eur_cents, charge.id);
				if (UserSockets.get(charge.metadata.user_id)) {
					const wallet_balance = await WalletFundsDao.getAvailableWalletBalance(charge.metadata.user_id);
					UserSockets.get(charge.metadata.user_id).emit('wallet_balance_change', wallet_balance);
				}
			}
			break;
	}
}
async function handleSessionCompleted(session) {
	if (session.metadata.type === 'promo_section') {
		await handlePromoSectionBuy(session);
	}
	if (session.metadata.type === 'word_buys') {
		await handleWordBuysSubscription(session);
	}
}
async function handleWordBuysSubscription(session) {
	console.log('Handling word_buys subscription', session);
	// Get new expiration date
	const newExpiresAt = new Date(session.current_period_end * 1000);
	// Update `expires_at` in all word_buys linked to this subscription
	await prisma.word_buy.updateMany({
		where: { stripe_subscription_id: session.id },
		data: { expires_at: newExpiresAt },
	});
	await prisma.business.updateMany({
		where: { word_buy_stripe_subscription_id: session.id },
		data: { word_buy_stripe_subscription_id: null },
	});
	console.log('Updated expires_at for all word_buys in subscription:', session.id);
}
async function handlePromoSectionBuy(session) {
	//TODO: Add the promo section buy to the database
	await PromoDao.createPromoSectionBuy({
		promo_sections_id: session.metadata.promo_sections_id,
		business_id: session.metadata.business_id,
		tier: session.metadata.tier,
	});
}
async function handleWebhook(req, res) {
	let event;
	try {
		event = stripe.client.webhooks.constructEvent(
			req.rawBody,
			req.headers['stripe-signature'],
			process.env.STRIPE_WEBHOOK_SECRET
		);
	} catch (err) {
		console.error('Webhook signature verification failed.', err.message);
		return res.status(400).send(`Webhook Error: ${err.message}`);
	}
	try {
		let data = event.data.object;
		let paymentIntent;
		console.info('WEBHOOK', event.type);
		// Handle the event
		switch (event.type) {
			case 'payment_intent.succeeded':
				paymentIntent = event.data.object;
				handlePaymentIntentSuccess(paymentIntent);
				break;
			case 'payment_intent.payment_failed':
				paymentIntent = event.data.object;
				console.log('FAIL', paymentIntent);
				handlePaymentIntentFaliure(paymentIntent);
				break;
			case 'payment_intent.amount_capturable_updated': {
				paymentIntent = event.data.object;
				const { amount_capturable, metadata: { order_id, order_type, type } = {} } = paymentIntent;
				switch (type) {
					case 'order_payment':
						// Check if conditions are met
						if (amount_capturable > 0 && order_id && order_type === 'TRANSFER_PRIVATE') {
							try {
								await stripe.client.paymentIntents.capture(paymentIntent.id);
								console.log(`Captured PaymentIntent for order ${order_id}`);
							} catch (err) {
								console.error(`Failed to capture PaymentIntent ${paymentIntent.id}:`, err);
							}
						} else if (amount_capturable > 0 && order_id && order_type === 'DELIVERY') {
							try {
								const order = await DeliveryOrderDao.updateOrderStatus(
									order_id,
									DELIVERY_ORDER_STATUS.PENDING
								);
								io.to('orders_' + order.business_id).emit('new_order', order);
								io.to('orders_' + order.order_id).emit('order_status_change__delivery', order);
								console.log(`Processed order ${order_id} into PENDING state.`);
							} catch (err) {
								console.error(`Failed to process order ${paymentIntent.id} into PENDING state: `, err);
							}
						}
						break;
					case 'daily_meals_subscription_payment':
						try {
							// await stripe.client.paymentIntents.capture(paymentIntent.id);
							console.log(`Captured PaymentIntent for order ${order_id}`);
						} catch (err) {
							console.error(`Failed to capture PaymentIntent ${paymentIntent.id}:`, err);
						}
						break;

					case 'wallet_topup':
						break;
					default:
						console.error('Unsupported payment_intent.metadata.type');
						break;
				}

				break;
			}
			case 'charge.succeeded':
				paymentIntent = event.data.object;
				break;
			case 'charge.updated':
				console.log(event.data.object);
				handleChargeUpdate(event.data.object);
				break;
			/*** PRODUCT EVENTS ***/

			/*** PRICE EVENTS ***/

			// ... handle other event types
			case 'checkout.session.completed':
				handleSessionCompleted(data);
				break;
			case 'customer.subscription.created':
			case 'customer.subscription.updated': {
				const subscription = event.data.object;
				if (subscription.metadata.type === 'word_buy') {
					console.log(`Updating word_buys for subscription ${subscription.id}`);
					// Get new expiration date
					const newExpiresAt = new Date(subscription.current_period_end * 1000);
					// Update `expires_at` in all word_buys linked to this subscription
					await prisma.word_buy.updateMany({
						where: { stripe_subscription_id: subscription.id },
						data: { expires_at: newExpiresAt },
					});
					console.log('Updated expires_at for all word_buy in subscription:', subscription.id);
				}
				break;
			}
			case 'customer.subscription.deleted': {
				const subscription = event.data.object;
				if (subscription.metadata.type === 'word_buys') {
					// Remove subscription ID from `word_buys` and set `deleted_at`
					await prisma.word_buy.updateMany({
						where: { stripe_subscription_id: subscription.id },
						data: { stripe_subscription_id: null },
					});
					// Also update business record to remove subscription
					await prisma.business.updateMany({
						where: { word_buy_stripe_subscription_id: subscription.id },
						data: { word_buy_stripe_subscription_id: null },
					});
					console.log('Subscription deleted, word_buys marked as deleted:', subscription.id);
				}
				break;
			}
			case 'subscription_schedule.released': {
				const schedule = event.data.object;

				// schedule.subscription gives you the active subscription ID
				const subscriptionId = schedule.subscription;

				// Update all downgraded word_buys
				const wordBuys = await prisma.word_buy.findMany({
					where: {
						stripe_subscription_id: subscriptionId,
						pending_price: { not: null },
						pending_stripe_price_id: { not: null },
					},
				});

				for (const wb of wordBuys) {
					await prisma.word_buy.update({
						where: { word_buy_id: wb.id },
						data: {
							price: wb.pending_price,
							stripe_price_id: wb.pending_price_id,
							pending_price: null,
							pending_stripe_price_id: null,
						},
					});
				}

				break;
			}
			default:
				console.log(`Unhandled event type ${event.type}`);
		}
		res.json({ received: true });
	} catch (error) {
		console.error(`Error handling webhook event ${event.type}: ${error}`);
	}
}

/**
 *
 * - DELETE /me/remove-payment-method/:pm_id
 * - @tag Users
 * - @summary Remove a payment method from the authenticated user's Stripe customer account
 * - @description Removes the specified Stripe payment method from the authenticated user's Stripe customer account. Returns the updated list of payment methods.
 * - @operationId removePaymentMethod
 * - @pathParam {string} pm_id - The Stripe payment method ID to remove
 * - @response 200 - Payment method removed successfully, returns updated payment methods
 * - @responseContent {object} 200.application/json
 * - @responseExample 200.application/json {
 *     "message": "Payment method removed successfully",
 *     "paymentMethods": [
 *       {
 *         "id": "pm_1...",
 *         "card": { "brand": "visa", "last4": "4242" }
 *       }
 *     ]
 *   }
 * - @response 400 - Error removing payment method
 * - @responseContent {object} 400.application/json
 * - @prisma_model users
 */

async function removePaymentMethod(req, res) {
	try {
		const { pm_id } = req.params;
		if (!pm_id) {
			return res.status(400).json({ error: 'Missing payment method ID' });
		}
		const user = await UserDao.getUserById(req.user.user_id);
		if (!user?.stripe_customer_id) {
			return res.status(400).json({ error: 'User does not have a Stripe customer ID' });
		}
		// List all payment methods for the customer
		const paymentMethods = await stripe.getPaymentMethods(user.stripe_customer_id);
		const hasPaymentMethod = paymentMethods.some((pm) => pm.id === pm_id);
		if (!hasPaymentMethod) {
			return res.status(400).json({ error: 'Payment method not found for this user' });
		}
		await stripe.client.paymentMethods.detach(pm_id);
		// Return updated payment methods
		const updatedPaymentMethods = await stripe.getPaymentMethods(user.stripe_customer_id);
		return res.status(200).json({
			message: 'Payment method removed successfully',
			paymentMethods: updatedPaymentMethods,
		});
	} catch (error) {
		console.error('Error removing payment method:', error);
		return res.status(400).json({ error: 'Error removing payment method' });
	}
}

export { handleWebhook };
export { removePaymentMethod };
export default {
	handleWebhook,
	removePaymentMethod,
};
