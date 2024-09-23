const e = require('cors');
const DeliveryOrderDao = require('../dao/DeliveryOrder');
const UsersDao = require('../dao/User');
const {io, UserSockets} = require('../socket');


async function handlePaymentIntentSuccess(paymentIntent) {
    switch (paymentIntent.metadata.type) { 
        case 'wallet_topup':
            console.log("wallet_topup", paymentIntent)
            
            await UsersDao.addToWalletBalance(paymentIntent.metadata.user_id, paymentIntent.amount / 100);
            if (UserSockets.get(paymentIntent.metadata.user_id)) {
                let user = await UsersDao.getUserById(paymentIntent.metadata.user_id);
                UserSockets.get(paymentIntent.metadata.user_id).emit('wallet_balance_change', user.wallet_balance);
            }
            break;
        case 'order_payment':
            // let order = await DeliveryOrderDao.getOrder(paymentIntent.metadata.order_id);
            // order = await DeliveryOrderDao.updateOrder(order.order_id, {
            //     payment: {
            //         ...order.payment,
            //         status: 'PAID',
            //     },
            //     status: "CUSTOMER_PAYMENT_SUCCESSFUL"
            // });
            
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

async function handleWebhook(req, res) {
    const event = req.body;
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
        // ... handle other event types
        default:
            console.log(`Unhandled event type ${event.type}`);
    }
    
    res.json({received: true});
}

module.exports = {
    handleWebhook
}