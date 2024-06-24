var express = require("express");
const router = express.Router();
const DeliveryOrderDao = require("../../dao/DeliveryOrder");
const { io } = require("../../socket");

router.post("/webhook", async (req, res) => {
    const event = req.body;
    let paymentIntent;
    let order;
    // Handle the event
    switch (event.type) {
        
    
        case 'payment_intent.succeeded':
            paymentIntent = event.data.object;
            order = await DeliveryOrderDao.getOrder(paymentIntent.metadata.order_id);
            order = await DeliveryOrderDao.updateOrder(order.order_id, {
                payment: {
                    status: 'PAID',
                },
                status: "CUSTOMER_PAYMENT_SUCCESSFUL"
            });
            io.to("orders_" + order.business_id).emit('order_status_change_delivery', order);
            console.log('PaymentIntent was successful!');
        case 'payment_intent.payment_failed':
            paymentIntent = event.data.object;
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
        // ... handle other event types
        default:
            nsole.log(`Unhandled event type ${event.type}`);
    }
    
    response.json({received: true});
});

module.exports = router;
