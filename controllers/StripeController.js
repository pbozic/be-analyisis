const dotenv = require('dotenv');
dotenv.config();

const DeliveryOrderDao = require('../dao/DeliveryOrder');
const UsersDao = require('../dao/User');
const {io, UserSockets} = require('../socket');
const stripe = require('../lib/stripe')
const BusinessDao = require("../dao/Business");
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

async function handlePaymentIntentSuccess(paymentIntent) {
    switch (paymentIntent.metadata.type) { 
        case 'wallet_topup':
            console.log("wallet_topup", paymentIntent)
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
        case 'order_payment':
            let order = await DeliveryOrderDao.getOrder(paymentIntent.metadata.order_id);
            if(paymentIntent.metadata?.merchant_cut) {
                const business = await BusinessDao.getBusinessById(order.details.business_id);
                const transferRestaurant = await stripe.splitCutFromPaymentIntent(
                    paymentIntent,
                    business.stripe_account_id,
                    parseFloat(paymentIntent.metadata.merchant_cut),
                );
            }
            order = await DeliveryOrderDao.updateOrder(order.order_id, {
                payment: {
                    ...order.payment,
                    status: 'PAID',
                },
                // status: "CUSTOMER_PAYMENT_SUCCESSFUL"
            });
            
            console.log('PaymentIntent was successful!');
            break;
    }
   
}
async function handlePaymentIntentFaliure(paymentIntent) {
    switch (paymentIntent.metadata.type) { 
        case 'wallet_topup':
            break;
        case 'order_payment':
            let order = await DeliveryOrderDao.getOrder(paymentIntent.metadata.order_id);
            order = await DeliveryOrderDao.updateOrder(order.order_id, {
                payment: {
                    ...order.payment,
                    status: 'UNPAID',
                },
                status: "CUSTOMER_PAYMENT_FAILED"
            });
            io.to("orders_" + order.business_id).emit('order_status_change_delivery', order);
            console.log('PaymentIntent failed!');
            break;
    }
   
}

async function handleChargeUpdate(charge) {
    switch (charge.metadata.type) {
        case 'wallet_topup':
            if(charge.status==='succeeded' && charge.balance_transaction!==null) {
                //The amount in the charge is in the given currency, whereas the amount after conversion to Eur is stored in the balance transaction connected to the charge.
                const charge_balance_transaction = await stripe.client.balanceTransactions.retrieve(charge.balance_transaction);
                console.info(charge_balance_transaction)
                const amount_in_eur_cents= charge_balance_transaction.amount

                await UsersDao.addToWalletBalance(charge.metadata.user_id, amount_in_eur_cents, charge.id);
                if (UserSockets.get(charge.metadata.user_id)) {
                    let user = await UsersDao.getUserById(charge.metadata.user_id);
                    console.log("user", user.user_id)
                    UserSockets.get(user.user_id).emit('wallet_balance_change', user.wallet_balance);
                }
            }
            break;
    }

}


async function handleWebhook(req, res) {
    let event;
    try {
        event = stripe.webhooks.constructEvent(req.body, req.headers['stripe-signature'], webhookSecret);
    } catch (err) {
        console.error('Webhook signature verification failed.', err.message);
        return res.status(400).send(`Webhook Error: ${err.message}`);
    }
    let data = event.data.object;
    let paymentIntent;
    let order;
    console.log("WEBHOOK", event.type)
    // Handle the event
    switch (event.type) {
        case 'payment_intent.succeeded':
            paymentIntent = event.data.object;
            handlePaymentIntentSuccess(paymentIntent);
            break;
        case 'payment_intent.payment_failed':
            paymentIntent = event.data.object;
            console.log("FAIL", paymentIntent)
            handlePaymentIntentFaliure(paymentIntent);
            break;
        case 'payment_intent.amount_capturable_updated':
            console.log('payment_intent.amount_capturable_updated')
            paymentIntent = event.data.object;
            order = await DeliveryOrderDao.getOrder(paymentIntent.metadata.order_id);
            if (paymentIntent.amount === paymentIntent.amount_capturable) {
                order = await DeliveryOrderDao.updateOrder(order.order_id, {
                    payment: {
                        ...order.payment,
                        status: 'PAID',
                    },
                    status: "CUSTOMER_PAYMENT_SUCCESSFUL"
                });
            }
            io.to("orders_" + order.business_id).emit('new_order', order);
            break;
        case 'charge.succeeded':
            paymentIntent = event.data.object;
            break;
        case 'charge.updated':
            console.log(event.data.object)
            handleChargeUpdate(event.data.object);
            break;
            
              /*** PRODUCT EVENTS ***/
        case 'product.created':
            await StripeDao.createProduct({
                name: data.name,
                description: data.description || '',
                stripe_product_id: data.id
            });
            console.log(`Product added: ${data.name}`);
            break;

        case 'product.updated':
            await StripeDao.updateProductByStripeId(data.id, {
                name: data.name,
                description: data.description || '',
            });
            console.log(`Product updated: ${data.name}`);
            break;

        case 'product.deleted':
            await StripeDao.deleteProductByStripeId(data.id);
            console.log(`Product deleted: ${data.id}`);
            break;

        /*** PRICE EVENTS ***/
        case 'price.created':
            await StripeDao.createPrice({
                amount: data.unit_amount / 100,
                currency: data.currency,
                stripe_price_id: data.id,
                stripe_product_id: data.product
            });
            console.log(`Price added: ${data.unit_amount / 100} ${data.currency}`);
            break;

        case 'price.updated':
            await StripeDao.updatePriceByStripeId(data.id, {
                amount: data.unit_amount / 100,
                currency: data.currency,
            });
            console.log(`Price updated: ${data.unit_amount / 100} ${data.currency}`);
            break;

        case 'price.deleted':
            await StripeDao.deletePriceByStripeId(data.id);
            console.log(`Price deleted: ${data.id}`);
            break;
        // ... handle other event types
        default:
            console.log(`Unhandled event type ${event.type}`);
    }
    
    res.json({received: true});
}

module.exports = {
    handleWebhook
}