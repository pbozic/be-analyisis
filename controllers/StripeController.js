const e = require('cors');
const DeliveryOrderDao = require('../dao/DeliveryOrder');
const UsersDao = require('../dao/User');

async function handlePaymentIntentSuccess(paymentIntent) {
    switch (paymentIntent.metadata.type) { 
        case 'wallet_topup':
            console.log("wallet_topup", paymentIntent)
            
            await UsersDao.addToWalletBalance(paymentIntent.metadata.user_id, paymentIntent.amount / 100);
            break;
        case 'order_payment':
            let order = await DeliveryOrderDao.getOrder(paymentIntent.metadata.order_id);
            order = await DeliveryOrderDao.updateOrder(order.order_id, {
                payment: {
                    status: 'PAID',
                },
                status: "CUSTOMER_PAYMENT_SUCCESSFUL"
            });
            io.to("orders_" + order.business_id).emit('order_status_change_delivery', order);
            console.log('PaymentIntent was successful!');
            break;
    }
   
}
async function handlePaymentIntentFaliure(paymentIntent) {
    switch (paymentIntent.type) { 
        case 'wallet_topup':
            break;
        case 'order_payment':
            order = await DeliveryOrderDao.getOrder(paymentIntent.metadata.order_id);
            order = await DeliveryOrderDao.updateOrder(order.order_id, {
                payment: {
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
    console.log("event", event);
    // Handle the event
    switch (event.type) {
        case 'payment_intent.succeeded':
            paymentIntent = event.data.object;
            handlePaymentIntentSuccess(paymentIntent);
            break;
        case 'payment_intent.payment_failed':
            paymentIntent = event.data.object;
            handlePaymentIntentFaliure(paymentIntent);
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