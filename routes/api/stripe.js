var express = require("express");
const router = express.Router();
const DeliveryOrderDao = require("../../dao/DeliveryOrder");
const { io } = require("../../socket");
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
            order = await DeliveryOrderDao.updateOrder(order.order_id, {
                payment: {
                    status: 'PAID',
                },
                status: DELIVERY_ORDER_STATUS.CUSTOMER_PAYMENT_SUCCESSFUL
            });
            io.to("orders_" + order.business_id).emit('order_status_change__delivery', order);
            console.log('PaymentIntent was successful!');
            break;
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

module.exports = router;
