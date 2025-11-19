import dotenv from 'dotenv';
import Stripe from 'stripe';
import type { Request, Response } from 'express';
import { SUBSCRIPTION_STATUS, DELIVERY_ORDER_STATUS, ORDER_TYPE, TAXI_ORDER_STATUS, MODULE } from '@prisma/client';
import { Socket } from 'socket.io';

import DeliveryOrderDao from '../dao/DeliveryOrder.js';
import socket from '../socket.js';
import stripe from '../lib/stripe.js';
import BusinessDao from '../dao/Business.js';
import PromoDao from '../dao/Promo.js';
import UserDao from '../dao/User.js';
import WalletFundsHelpers from '../lib/WalletFundsHelpers.js';
import { SERVICE_TYPE } from '../lib/constants.js';
import { calculateDeliveryOrderPaymentCuts, handleStockSync } from '../lib/deliveryHelpers.js';
import WalletFundsDao from '../dao/WalletFunds.js';
import TaxiOrderDao from '../dao/TaxiOrder.js';
import PaymentHelpers from '../lib/paymentHelpers.ts';
import dailyMealHelpers from '../lib/dailyMealHelpers.ts';
import prisma from '../prisma/prisma.js';
import DailyMealDao from '../dao/DailyMealDao.ts';
import PaymentDao from '../dao/Payment.ts';
import elasticsearch from '../elasticsearch/index.js';
import { AuthenticatedRequest } from '../types/validatedRequest.ts';
import { DeliveryOrderDetail } from '../schemas/dto/DeliveryOrders/deliveryOrder.dto.ts';

dotenv.config();

type RequestWithRawBody = Request & { rawBody: string | Buffer<ArrayBufferLike> };

const { businessIndex } = elasticsearch;
const { io, UserSockets, SocketStore } = socket;

/**
 * Handles successful payment intents based on their metadata type.
 * @param {Stripe.PaymentIntent} paymentIntent - The Stripe PaymentIntent object.
 * @returns {Promise<void>}
 */
async function handlePaymentIntentSuccess(paymentIntent: Stripe.PaymentIntent): Promise<void> {
	switch ((paymentIntent.metadata as Stripe.Metadata).type) {
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
			const orderType = (paymentIntent.metadata as Stripe.Metadata).order_type;
			if (orderType === ORDER_TYPE.DELIVERY) {
				let order = await DeliveryOrderDao.getOrder(
					(paymentIntent.metadata as Stripe.Metadata).order_id as string
				);

				const business = await BusinessDao.getBusinessById(order?.business?.business_id as string);
				const restaurant_stripe = business?.stripe_account_id as string;
				const { PLATFORM_CREDIT_CUT, MERCHANT_CREDIT_CUT } = await calculateDeliveryOrderPaymentCuts(
					order as DeliveryOrderDetail
				);

				const merchantCutRaw = (paymentIntent.metadata as Stripe.Metadata)?.merchant_cut;
				if (merchantCutRaw && parseFloat(merchantCutRaw) > 0) {
					await stripe.splitCutFromPaymentIntent(
						paymentIntent,
						restaurant_stripe,
						parseFloat(merchantCutRaw)
					);
				}

				if (PLATFORM_CREDIT_CUT > 0) {
					await WalletFundsHelpers.transferReservedCreditsForOrder(
						order?.user_id as string,
						'platform',
						PLATFORM_CREDIT_CUT,
						order?.order_id as string,
						SERVICE_TYPE.DELIVERY
					);
				}
				if (MERCHANT_CREDIT_CUT > 0) {
					await WalletFundsHelpers.transferReservedCreditsForOrder(
						order?.user_id as string,
						restaurant_stripe,
						MERCHANT_CREDIT_CUT,
						order?.order_id as string,
						SERVICE_TYPE.DELIVERY
					);
				}

				// any remaining reserved funds are meant for delivery driver and should be handled on order completion
				order = await DeliveryOrderDao.updateOrder(order?.order_id as string, {
					payment: { ...order?.payment, status: 'PAID' },
				});
				order = await DeliveryOrderDao.updateOrderStatus(
					order?.order_id as string,
					DELIVERY_ORDER_STATUS.CUSTOMER_PAYMENT_SUCCESSFUL
				);
				if (order?.module_type === MODULE.STORES) {
					order = await DeliveryOrderDao.updateOrderStatus(
						order?.order_id as string,
						DELIVERY_ORDER_STATUS.MERCHANT_READY_FOR_PICKUP
					);
					// handle stock sync if the business is a merchant
					await handleStockSync(order);
				} else {
					order = await DeliveryOrderDao.updateOrderStatus(
						order?.order_id as string,
						DELIVERY_ORDER_STATUS.MERCHANT_ACCEPTED
					);
					order = await DeliveryOrderDao.updateOrderStatus(
						order?.order_id as string,
						DELIVERY_ORDER_STATUS.MERCHANT_PREPARING
					);
				}
				(io as Socket).to('order_' + order?.order_id).emit('order_status_change__delivery', order);
			} else if (orderType === ORDER_TYPE.TRANSFER_PRIVATE) {
				let order = await TaxiOrderDao.getOrder((paymentIntent.metadata as Stripe.Metadata).order_id as string);
				// any reserved funds are meant to be transferred on order completion
				order = await TaxiOrderDao.updateOrder(order?.order_id as string, {
					payment: { ...order?.payment, status: 'PAID' },
				});
				order = await TaxiOrderDao.updateOrderStatus(order?.order_id as string, TAXI_ORDER_STATUS.PENDING);
				(io as Socket).to('order_' + order?.order_id).emit('order_status_change__taxi', order);
			}
			break;
		}
		case 'daily_meals_subscription_payment': {
			await PaymentDao.getPaymentByGroupedId(paymentIntent.transfer_group as string);
			const updated_sub = await dailyMealHelpers.activateSubscriptionById(paymentIntent.transfer_group as string);
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

			// const buyId = (paymentIntent.metadata as Stripe.Metadata)?.promo_sections_buy_id;
			// const duration = parseInt((paymentIntent.metadata as Stripe.Metadata)?.duration || '0', 10) || 0;
			// if (!buyId) break;
			// const promoBuy = await PromoDao.getPromoSectionBuyByPaymentIntentId(paymentIntent.id);
			// if (!promoBuy) break;
			// const now = new Date();
			// const expires = new Date(now.getTime() + duration * 24 * 60 * 60 * 1000);
			// await PromoDao.updatePromoSectionBuy(promoBuy.promo_sections_buy_id, {
			// 	paid: true,
			// 	active_at: now.toISOString(),
			// 	expires_at: expires.toISOString(),
			// });
			break;
		}
		case 'promo_section_bulk': {
			try {
				const idsRaw = (paymentIntent.metadata as Stripe.Metadata).promo_section_buy_ids;
				const businessId = (paymentIntent.metadata as Stripe.Metadata).business_id;
				if (!idsRaw) break;
				let ids: string[] = [];
				try {
					ids = JSON.parse(idsRaw) as string[];
				} catch {
					ids = [];
				}
				if (!Array.isArray(ids) || ids.length === 0) break;
				const now = new Date();
				const buys = await prisma.promo_sections_buy.findMany({
					where: { promo_sections_buy_id: { in: ids } },
				});
				for (const b of buys) {
					const exists = await prisma.promo_sections_buy.findFirst({
						where: { promo_sections_id: b.promo_sections_id, business_id: businessId, paid: true },
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
	}
}
/**
 * Handles failed payment intents based on their metadata type.
 * @param {Stripe.PaymentIntent} paymentIntent - The Stripe PaymentIntent object.
 * @returns {Promise<void>}
 */
async function handlePaymentIntentFaliure(paymentIntent: Stripe.PaymentIntent): Promise<void> {
	console.log('PaymentIntent failed!');
	let order:
		| Awaited<ReturnType<typeof DeliveryOrderDao.getOrder>>
		| Awaited<ReturnType<typeof TaxiOrderDao.getOrder>>;
	switch ((paymentIntent.metadata as Stripe.Metadata).type) {
		case 'wallet_topup':
			break;
		case 'order_payment': {
			switch ((paymentIntent.metadata as Stripe.Metadata).order_type) {
				case ORDER_TYPE.DELIVERY: {
					order = await DeliveryOrderDao.getOrder(
						(paymentIntent.metadata as Stripe.Metadata).order_id as string
					);
					order = await DeliveryOrderDao.updateOrder(order?.order_id as string, {
						payment: { ...order?.payment, status: 'UNPAID' },
					});
					order = await DeliveryOrderDao.updateOrderStatus(
						order?.order_id as string,
						DELIVERY_ORDER_STATUS.CUSTOMER_PAYMENT_FAILED
					);
					(io as Socket).to('order_' + order?.order_id).emit('order_status_change__delivery', order);
					order = await DeliveryOrderDao.updateOrderStatus(
						order?.order_id as string,
						DELIVERY_ORDER_STATUS.ORDER_FINISHED_FAIL
					);
					(io as Socket).to('order_' + order?.order_id).emit('order_status_change__delivery', order);
					SocketStore.closeRoom(`order_${order?.order_id}`);
					await WalletFundsHelpers.releaseReservedWalletFundsForOrder(
						order?.user_id as string,
						order?.order_id as string
					);
					break;
				}
				case ORDER_TYPE.TRANSFER_PRIVATE: {
					order = await TaxiOrderDao.getOrder((paymentIntent.metadata as Stripe.Metadata).order_id as string);
					// Keeping original flow parity with JS version
					order = await DeliveryOrderDao.updateOrder(order?.order_id as string, {
						payment: { ...order?.payment, status: 'UNPAID' },
					});
					order = await DeliveryOrderDao.updateOrderStatus(
						order?.order_id as string,
						TAXI_ORDER_STATUS.CUSTOMER_CANCELED
					);
					(io as Socket).to('order_' + order?.order_id).emit('order_status_change__delivery', order);
					SocketStore.closeRoom(`order_${order?.order_id}`);
					await WalletFundsHelpers.releaseReservedWalletFundsForOrder(
						order?.user_id as string,
						order?.order_id as string
					);
					break;
				}
			}
			break;
		}
		case 'daily_meals_subscription_payment': {
			const payment = await PaymentDao.getPaymentByGroupedId(paymentIntent.transfer_group as string);
			const updated_sub = await DailyMealDao.updateSubscriptionStatus(
				paymentIntent.transfer_group as string,
				SUBSCRIPTION_STATUS.FAILED
			);
			if (!updated_sub) {
				console.warn(
					'No DM subscriptions found after transfers for grouped_id: ',
					paymentIntent.transfer_group
				);
			}
			if (payment) await PaymentHelpers.handlePaymentRefund(payment);
			break;
		}
	}
}
/**
 * Handles charge updates based on their metadata type.
 * @param {Stripe.Charge} charge - The Stripe Charge object.
 * @returns {Promise<void>}
 */
export async function handleChargeUpdate(charge: Stripe.Charge): Promise<void> {
	switch ((charge.metadata as Stripe.Metadata).type) {
		case 'wallet_topup':
			if (charge.status === 'succeeded' && charge.balance_transaction !== null) {
				const charge_balance_transaction = await stripe.client.balanceTransactions.retrieve(
					charge.balance_transaction as string
				);
				console.info(charge_balance_transaction);
				const amount_in_eur_cents = charge_balance_transaction.amount;
				await WalletFundsDao.createWalletFunds(
					(charge.metadata as Stripe.Metadata).user_id as string,
					amount_in_eur_cents,
					charge.id
				);
				if (UserSockets.get((charge.metadata as Stripe.Metadata).user_id as string)) {
					const wallet_balance = await WalletFundsDao.getAvailableWalletBalance(
						(charge.metadata as Stripe.Metadata).user_id as string
					);
					UserSockets.get((charge.metadata as Stripe.Metadata).user_id as string)!.emit(
						'wallet_balance_change',
						wallet_balance
					);
				}
			}
			break;
	}
}
/**
 * Handles completed checkout sessions based on their metadata type.
 * @param {Stripe.Checkout.Session} session - The Stripe Checkout Session object.
 * @returns {Promise<void>}
 */
async function handleSessionCompleted(session: Stripe.Checkout.Session): Promise<void> {
	if ((session.metadata as Stripe.Metadata).type === 'promo_section') {
		await handlePromoSectionBuy(session);
	}
	if ((session.metadata as Stripe.Metadata).type === 'word_buys') {
		await handleWordBuysSubscription(session);
	}
}
/**
 * Handles word buys subscription updates.
 * @param {Stripe.Checkout.Session | Stripe.Subscription} session - The Stripe Checkout Session or Subscription object.
 * @returns {Promise<void>}
 */
async function handleWordBuysSubscription(session: Stripe.Checkout.Session | Stripe.Subscription): Promise<void> {
	if ('current_period_end' in session) {
		const newExpiresAt = new Date(session.current_period_end * 1000);
		await prisma.word_buy.updateMany({
			where: { stripe_subscription_id: session.id },
			data: { expires_at: newExpiresAt },
		});
		await prisma.business.updateMany({
			where: { word_buy_stripe_subscription_id: session.id },
			data: { word_buy_stripe_subscription_id: null },
		});
		console.log('Updated expires_at for all word_buys in subscription:', session.id);
	} else {
		const subId = typeof session.subscription === 'string' ? session.subscription : session.subscription?.id;
		if (!subId) return;
		const subscription = await stripe.client.subscriptions.retrieve(subId);
		const newExpiresAt = new Date(subscription.current_period_end * 1000);
		await prisma.word_buy.updateMany({
			where: { stripe_subscription_id: subscription.id },
			data: { expires_at: newExpiresAt },
		});
		await prisma.business.updateMany({
			where: { word_buy_stripe_subscription_id: subscription.id },
			data: { word_buy_stripe_subscription_id: null },
		});
		console.log('Updated expires_at for all word_buys in subscription:', subscription.id);
	}
}
/**
 * Handles promo section buy updates.
 * @param {Stripe.Checkout.Session} session - The Stripe Checkout Session object.
 * @returns {Promise<void>}
 */
async function handlePromoSectionBuy(session: Stripe.Checkout.Session): Promise<void> {
	await PromoDao.createPromoSectionBuy(
		(session.metadata as Stripe.Metadata).business_id as string,
		(session.metadata as Stripe.Metadata).promo_sections_id as string,
		parseInt((session.metadata as Stripe.Metadata).tier as string, 10)
	);
}

/**
 * POST /stripe/webhook
 * @tag Stripe
 * @summary Stripe webhook handler
 * @description Handles Stripe webhook events for payments, subscriptions, and related updates.
 * @operationId handleStripeWebhook
 * @bodyContent {StripeEventResponse} application/json
 * @response 200 - Webhook processed successfully
 * @responseContent {StripeWebhookResponse} 200.application/json
 * @response 400 - Webhook signature verification failed
 * @prisma_model delivery_orders
 * @prisma_model taxi_orders
 * @prisma_model word_buy
 * @prisma_model business
 * @prisma_model promo_sections_buy
 */
async function handleWebhook(req: Request, res: Response): Promise<void> {
	let event: Stripe.Event;
	try {
		event = stripe.client.webhooks.constructEvent(
			(req as RequestWithRawBody).rawBody,
			req.headers['stripe-signature'] as string,
			process.env.STRIPE_WEBHOOK_SECRET as string
		);
	} catch (err: unknown) {
		const message = err instanceof Error ? err.message : 'Unknown error';
		console.error('Webhook signature verification failed.', message);
		res.status(400).send(`Webhook Error: ${message}`);
		return;
	}
	try {
		const type = event.type;
		let paymentIntent: Stripe.PaymentIntent;
		console.info('WEBHOOK', type);
		switch (type) {
			case 'payment_intent.succeeded':
				paymentIntent = event.data.object as Stripe.PaymentIntent;
				await handlePaymentIntentSuccess(paymentIntent);
				break;
			case 'payment_intent.payment_failed':
				paymentIntent = event.data.object as Stripe.PaymentIntent;
				console.log('FAIL', paymentIntent);
				await handlePaymentIntentFaliure(paymentIntent);
				break;
			case 'payment_intent.amount_capturable_updated': {
				paymentIntent = event.data.object as Stripe.PaymentIntent;
				const { amount_capturable, metadata } = paymentIntent;
				const {
					order_id,
					order_type,
					type: metaType,
				} = (metadata || {}) as Stripe.Metadata & {
					order_id?: string;
					order_type?: string;
					type?: string;
				};
				switch (metaType) {
					case 'order_payment':
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
								(io as Socket).to('orders_' + order.business?.business_id).emit('new_order', order);
								(io as Socket)
									.to('orders_' + order.order_id)
									.emit('order_status_change__delivery', order);
								console.log(`Processed order ${order_id} into PENDING state.`);
							} catch (err) {
								console.error(`Failed to process order ${paymentIntent.id} into PENDING state: `, err);
							}
						}
						break;
					case 'daily_meals_subscription_payment':
						try {
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
				// handled via charge.updated
				break;
			case 'charge.updated':
				await handleChargeUpdate(event.data.object as Stripe.Charge);
				break;
			case 'checkout.session.completed':
				await handleSessionCompleted(event.data.object as Stripe.Checkout.Session);
				break;
			case 'customer.subscription.created':
			case 'customer.subscription.updated': {
				const subscription = event.data.object as Stripe.Subscription;
				if ((subscription.metadata as Stripe.Metadata)?.type === 'word_buys') {
					console.log(`Updating word_buys for subscription ${subscription.id}`);
					const newExpiresAt = new Date(subscription.current_period_end * 1000);
					await prisma.word_buy.updateMany({
						where: { stripe_subscription_id: subscription.id },
						data: { expires_at: newExpiresAt, paid: true, active_at: new Date() },
					});
					console.log('Updated expires_at for all word_buy in subscription:', subscription.id);
					businessIndex((subscription.metadata as Stripe.Metadata).business_id);
				}
				break;
			}
			case 'customer.subscription.deleted': {
				const subscription = event.data.object as Stripe.Subscription;
				if ((subscription.metadata as Stripe.Metadata)?.type === 'word_buys') {
					await prisma.word_buy.updateMany({
						where: { stripe_subscription_id: subscription.id },
						data: { stripe_subscription_id: null },
					});
					await prisma.business.updateMany({
						where: { word_buy_stripe_subscription_id: subscription.id },
						data: { word_buy_stripe_subscription_id: null },
					});
					console.log('Subscription deleted, word_buys marked as deleted:', subscription.id);
				}
				break;
			}
			case 'subscription_schedule.released': {
				const schedule = event.data.object as Stripe.SubscriptionSchedule;
				const subscriptionId =
					typeof schedule.subscription === 'string' ? schedule.subscription : schedule.subscription?.id;
				if (!subscriptionId) break;
				const wordBuys = await prisma.word_buy.findMany({
					where: {
						stripe_subscription_id: subscriptionId,
						pending_price: { not: null },
						pending_stripe_price_id: { not: null },
					},
				});
				for (const wb of wordBuys) {
					await prisma.word_buy.update({
						where: { word_buy_id: wb.word_buy_id },
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
				console.log(`Unhandled event type ${type}`);
		}
		res.json({ received: true });
	} catch (error: unknown) {
		console.error(`Error handling webhook event ${event.type}: ${String(error)}`);
		// Don't throw; just log to avoid webhook retries storm without response
	}
}

/**
 * DELETE /me/remove-payment-method/:pm_id
 * @tag Users
 * @summary Remove a payment method from the authenticated user's Stripe customer account
 * @description Removes the specified Stripe payment method from the authenticated user's Stripe customer account. Returns the updated list of payment methods.
 * @operationId removePaymentMethod
 * @pathParam {string} pm_id - The Stripe payment method ID to remove
 * @response 200 - Payment method removed successfully, returns updated payment methods
 * @responseContent {SuccessMessage} 200.application/json
 * @response 400 - Error removing payment method
 * @response 401 - Unauthorized
 * @prisma_model users
 */
async function removePaymentMethod(req: AuthenticatedRequest, res: Response): Promise<void> {
	try {
		const { pm_id } = req.params as { pm_id?: string };
		if (!pm_id) {
			res.status(400).json({ error: 'Missing payment method ID' });
			return;
		}
		const user_id = req.user?.user_id;
		if (!user_id) {
			res.status(401).json({ error: 'Unauthorized' });
			return;
		}
		const user = await UserDao.getUserById(user_id);
		if (!user?.stripe_customer_id) {
			res.status(400).json({ error: 'User does not have a Stripe customer ID' });
			return;
		}
		const paymentMethods = await stripe.getPaymentMethods(user.stripe_customer_id);
		const hasPaymentMethod = paymentMethods.some((pm) => pm.id === pm_id);
		if (!hasPaymentMethod) {
			res.status(400).json({ error: 'Payment method not found for this user' });
			return;
		}
		await stripe.client.paymentMethods.detach(pm_id);
		const updatedPaymentMethods = await stripe.getPaymentMethods(user.stripe_customer_id);
		res.status(200).json({
			message: 'Payment method removed successfully',
			paymentMethods: updatedPaymentMethods,
		});
	} catch (error) {
		console.error('Error removing payment method:', error);
		res.status(400).json({ error: 'Error removing payment method' });
	}
}

export { handleWebhook };
export { removePaymentMethod };
export default {
	handleWebhook,
	removePaymentMethod,
};
