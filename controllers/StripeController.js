const dotenv = require("dotenv");
dotenv.config();

const DeliveryOrderDao = require("../dao/DeliveryOrder");
const UsersDao = require("../dao/User");
const { io, UserSockets } = require("../socket");
const stripe = require("../lib/stripe");
const BusinessDao = require("../dao/Business");
const PromoDao = require("../dao/Promo");
const ProductDao = require("../dao/Product");
const WalletFundsHelpers = require("../lib/WalletFundsHelpers");
const { DELIVERY_ORDER_STATUS } = require("../lib/constants");
const { calculateDeliveryOrderPaymentCuts } = require("../lib/deliveryHelpers");
const WalletFundsDao = require("../dao/WalletFunds");

async function handlePaymentIntentSuccess(paymentIntent) {
	switch (paymentIntent.metadata.type) {
		case "wallet_topup":
			console.log("wallet_topup", paymentIntent);
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
		case "order_payment":
			let order = await DeliveryOrderDao.getOrder(paymentIntent.metadata.order_id);
			const restaurant_stripe = await BusinessDao.getBusinessStripeByBusinessId(order.business_id)

			const {PLATFORM_CREDIT_CUT, MERCHANT_CREDIT_CUT} = await calculateDeliveryOrderPaymentCuts(order)

			if (paymentIntent.metadata?.merchant_cut > 0) {
				const transferRestaurant = await stripe.splitCutFromPaymentIntent(
					paymentIntent,
					restaurant_stripe,
					parseFloat(paymentIntent.metadata.merchant_cut),
				);
			}

			if (PLATFORM_CREDIT_CUT>0) {
				const transferedCreditsPlatform = await WalletFundsHelpers.transferReservedCreditsForOrder(order.user_id, "platform", PLATFORM_CREDIT_CUT, order.order_id, "delivery");
			}
			if (MERCHANT_CREDIT_CUT>0) {
				const transferedCreditsMerchant = await WalletFundsHelpers.transferReservedCreditsForOrder(order.user_id, restaurant_stripe, MERCHANT_CREDIT_CUT, order.order_id, "delivery");
			}
			//any remaining reserved funds are meant for delivery driver and should be handled on order completion

			order = await DeliveryOrderDao.updateOrder(order.order_id, {
				payment: {
					...order.payment,
					status: "PAID",
				},
			});
			order = await DeliveryOrderDao.updateOrderStatus(order.order_id, DELIVERY_ORDER_STATUS.CUSTOMER_PAYMENT_SUCCESSFUL);
			order = await DeliveryOrderDao.updateOrderStatus(order.order_id, DELIVERY_ORDER_STATUS.MERCHANT_ACCEPTED);
			order = await DeliveryOrderDao.updateOrderStatus(order.order_id, DELIVERY_ORDER_STATUS.MERCHANT_PREPARING);
			if(paymentIntent?.metadata?.preparation_time){
				order = await DeliveryOrderDao.updateOrderPickupTime(
					order.order_id,
					new Date(Date.now() + paymentIntent.metadata.preparation_time * 60000)
				);
				io.to("order_" + order.order_id).emit("order_pickup_time", order);
			}
			io.to("order_" + order.order_id).emit("order_status_change__delivery", order);

			console.log("PaymentIntent was successful!");
			break;
	}
}
async function handlePaymentIntentFaliure(paymentIntent) {
	console.log("PaymentIntent failed!");
	switch (paymentIntent.metadata.type) {
		case "wallet_topup":
			break;
		case "order_payment":
			let order = await DeliveryOrderDao.getOrder(paymentIntent.metadata.order_id);
			order = await DeliveryOrderDao.updateOrder(order.order_id, {
				payment: {
					...order.payment,
					status: "UNPAID",
				},
			});
			order = await DeliveryOrderDao.updateOrderStatus(order.order_id, DELIVERY_ORDER_STATUS.CUSTOMER_PAYMENT_FAILED);
			io.to("order_" + order.order_id).emit("order_status_change__delivery", order);
			order = await DeliveryOrderDao.updateOrderStatus(order.order_id, DELIVERY_ORDER_STATUS.FAIL);
			io.to("order_" + order.order_id).emit("order_status_change__delivery", order);
			await WalletFundsHelpers.releaseReservedWalletFundsForOrder(order.user_id,order.order_id)

			break;
	}
}

async function handleChargeUpdate(charge) {
	switch (charge.metadata.type) {
		case "wallet_topup":
			if (charge.status === "succeeded" && charge.balance_transaction !== null) {
				//The amount in the charge is in the given currency, whereas the amount after conversion to Eur is stored in the balance transaction connected to the charge.
				const charge_balance_transaction = await stripe.client.balanceTransactions.retrieve(
					charge.balance_transaction,
				);
				console.info(charge_balance_transaction);
				const amount_in_eur_cents = charge_balance_transaction.amount;

				await WalletFundsDao.createWalletFunds(charge.metadata.user_id, amount_in_eur_cents, charge.id)//UsersDao.addToWalletBalance(charge.metadata.user_id, amount_in_eur_cents, charge.id);
				if (UserSockets.get(charge.metadata.user_id)) {
					const wallet_balance = await WalletFundsDao.getAvailableWalletBalance(charge.metadata.user_id);
					UserSockets.get(charge.metadata.user_id).emit("wallet_balance_change", wallet_balance);
				}
			}
			break;
	}
}

async function handleSessionCompleted(session) {
	if (session.metadata.type === "promo_section") {
		await handlePromoSectionBuy(session);
	}
    if (session.metadata.type === "word_buys") {
        await handleWordBuysSubscription(session);
    }
}
async function handleWordBuysSubscription(session) {
    console.log("Handling word_buys subscription", session);
    // Get new expiration date
    const newExpiresAt = new Date(session.current_period_end * 1000);

    // Update `expires_at` in all word_buys linked to this subscription
    await prisma.word_buy.updateMany({
        where: { stripe_subscription_id: session.id },
        data: { expires_at: newExpiresAt },
    });
    await prisma.business.updateMany({
        where: { word_buy_stripe_subscription_id: session.id },
        data: { word_buy_stripe_subscription_id: null }
    });
    console.log("Updated expires_at for all word_buys in subscription:", session.id);
}
async function handlePromoSectionBuy(session) {
	//TODO: Add the promo section buy to the database
	await PromoDao.createPromoSectionBuy({
	    promo_sections_id: session.metadata.promo_sections_id,
	    business_id: session.metadata.business_id,
	    tier: session.metadata.tier
	});
}
async function handleWebhook(req, res) {
	let event;
	try {
		event = stripe.client.webhooks.constructEvent(req.rawBody, req.headers["stripe-signature"], process.env.STRIPE_WEBHOOK_SECRET);
	} catch (err) {
		console.error("Webhook signature verification failed.", err.message);
		return res.status(400).send(`Webhook Error: ${err.message}`);
	}
	let data = event.data.object;
	let paymentIntent;
	console.info("WEBHOOK", event.type);
	// Handle the event
	switch (event.type) {
		case "payment_intent.succeeded":
			paymentIntent = event.data.object;
			handlePaymentIntentSuccess(paymentIntent);
			break;
		case "payment_intent.payment_failed":
			paymentIntent = event.data.object;
			console.log("FAIL", paymentIntent);
			handlePaymentIntentFaliure(paymentIntent);
			break;
		case "charge.succeeded":
			paymentIntent = event.data.object;
			break;
		case "charge.updated":
			console.log(event.data.object);
			handleChargeUpdate(event.data.object);
			break;

		/*** PRODUCT EVENTS ***/
		case "product.created":
            let product = await ProductDao.getProductByStripeId(data.id);
            if (!product) {
                product = await ProductDao.createProduct({
                    name: data.name,
                    description: data.description,
                    stripe_product_id: data.id,
                });
            }
			console.log(`Product added: ${data.name}`);
			break;

		case "product.updated":
            let updatedProduct = await ProductDao.getProductByStripeId(data.id);
            if (!updatedProduct) {
                updatedProduct = await ProductDao.createProduct({
                    name: data.name,
                    description: data.description,
                    stripe_product_id: data.id,
                });
            } else {
                updatedProduct = await ProductDao.updateProduct({
                    name: data.name,
                    description: data.description,
                    stripe_product_id: data.id,
                });
            }
			console.log(`Product updated: ${data.name}`);
			break;

		case "product.deleted":
			let deletedProduct = await ProductDao.getProductByStripeId(data.id);
            if (deletedProduct) {
                await ProductDao.deleteProduct(data.id);
            }
			console.log(`Product deleted: ${data.id}`);
			break;

		/*** PRICE EVENTS ***/
		case "price.created":
			let price = await ProductDao.getPriceByStripeId(data.id);
            if (!price) {
                price = await ProductDao.createPrice({
                    amount: data.unit_amount,
                    currency: data.currency,
                    stripe_price_id: data.id,
                    stripe_product_id: data.product,
                });
            }
			console.log(`Price added: ${data.unit_amount / 100} ${data.currency}`);
			break;

		case "price.updated":
            let updatedPrice = await ProductDao.getPriceByStripeId(data.id);
            if (!updatedPrice) {
                updatedPrice = await ProductDao.createPrice({
                    amount: data.unit_amount,
                    currency: data.currency,
                    stripe_price_id: data.id,
                    stripe_product_id: data.product,
                });
            } else {
                updatedPrice = await ProductDao.updatePrice({
                    amount: data.unit_amount,
                    currency: data.currency,
                    stripe_price_id: data.id,
                    stripe_product_id: data.product,
                });
            }
			console.log(`Price updated: ${data.unit_amount / 100} ${data.currency}`);
			break;

		case "price.deleted":
            let deletedPrice = await ProductDao.getPriceByStripeId(data.id);
            if (deletedPrice) {
                await ProductDao.deletePrice(data.id);
            }
			console.log(`Price deleted: ${data.id}`);
			break;
		// ... handle other event types
		case "checkout.session.completed":
			handleSessionCompleted(data);
        case "invoice.paid":
		case "customer.subscription.updated": {
			const subscription = event.data.object;
            if (subscription.metadata.type === "word_buys") {
                console.log(`Updating word_buys for subscription ${subscription.id}`);

                // Get new expiration date
                const newExpiresAt = new Date(subscription.current_period_end * 1000);
    
                // Update `expires_at` in all word_buys linked to this subscription
                await prisma.word_buy.updateMany({
                    where: { stripe_subscription_id: subscription.id },
                    data: { expires_at: newExpiresAt },
                });
                await prisma.business.updateMany({
                    where: { word_buy_stripe_subscription_id: subscription.id },
                    data: { word_buy_stripe_subscription_id: null }
                });
                console.log("Updated expires_at for all word_buys in subscription:", subscription.id);
            }

			
			break;
		}

		case "customer.subscription.deleted": {
			const subscription = event.data.object;
            if (subscription.metadata.type === "word_buys") {
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

                console.log("Subscription deleted, word_buys marked as deleted:", subscription.id);
            }
			break;
		}
		default:
			console.log(`Unhandled event type ${event.type}`);
	}

	res.json({ received: true });
}

module.exports = {
	handleWebhook,
};
