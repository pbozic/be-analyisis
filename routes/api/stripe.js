var express = require("express");
const router = express.Router();
const DeliveryOrderDao = require("../../dao/DeliveryOrder");
const UsersDao = require("../../dao/User");
const { io } = require("../../socket");
<<<<<<< HEAD
const StripeController = require("../../controllers/StripeController");
async function handlePaymentIntentSuccess(paymentIntent) {
    switch (paymentIntent.type) { 
        case 'wallet_topup':
            UsersDao.addToWalletBalance(paymentIntent.metadata.user_id, paymentIntent.amount / 100);
            break;
        case 'order_payment':
            let order = await DeliveryOrderDao.getOrder(paymentIntent.metadata.order_id);
=======
const { DELIVERY_ORDER_STATUS } = require("../../lib/constants");

router.post("/webhook", async (req, res) => {
    const event = req.body;
    let paymentIntent;
    let order;
    // Handle the event
    switch (event.type) {
        
    
        case 'payment_intent.succeeded':
            paymentIntent = event.data.object;
            order = await DeliveryOrderDao.getOrder(paymentIntent.metadata.order_id);
>>>>>>> 724ec9c9b0093ae4132c55bdce6e156e94abb190
            order = await DeliveryOrderDao.updateOrder(order.order_id, {
                payment: {
                    status: 'PAID',
                },
                status: DELIVERY_ORDER_STATUS.CUSTOMER_PAYMENT_SUCCESSFUL
            });
            io.to("orders_" + order.business_id).emit('order_status_change__delivery', order);
            console.log('PaymentIntent was successful!');
            break;
<<<<<<< HEAD
    }
   
}
router.post("/webhook", StripeController.handleWebhook);
=======
        case 'payment_intent.payment_failed':
            paymentIntent = event.data.object;
            order = await DeliveryOrderDao.getOrder(paymentIntent.metadata.order_id);
            order = await DeliveryOrderDao.updateOrder(order.order_id, {
                payment: {
                    status: 'UNPAID',
                },
                status: DELIVERY_ORDER_STATUS.CUSTOMER_PAYMENT_FAILED
            });
            io.to("orders_" + order.business_id).emit('order_status_change__delivery', order);
            console.log('PaymentIntent failed!');
        break;
        // ... handle other event types
        default:
            console.log(`Unhandled event type ${event.type}`);
    }
    
    res.json({received: true});
});
>>>>>>> 724ec9c9b0093ae4132c55bdce6e156e94abb190

module.exports = router;
