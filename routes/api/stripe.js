var express = require("express");
const router = express.Router();
const DeliveryOrderDao = require("../../dao/DeliveryOrder");
const UsersDao = require("../../dao/User");
const { io } = require("../../socket");
const StripeController = require("../../controllers/StripeController");
async function handlePaymentIntentSuccess(paymentIntent) {
    switch (paymentIntent.type) { 
        case 'wallet_topup':
            UsersDao.addToWalletBalance(paymentIntent.metadata.user_id, paymentIntent.amount / 100);
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
router.post("/webhook", StripeController.handleWebhook);

module.exports = router;
