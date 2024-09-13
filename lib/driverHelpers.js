const { ping } = require('../controllers/UserController');
const DeliveryDriverDao = require('../dao/DeliveryDriver');
const DriverDao = require('../dao/Driver');
const OneSignal = require('../lib/oneSignal');
const { UserSockets, io } = require('../socket');

async function chekPingStatus() {
    console.log('Checking ping status');
   let deliveryDrivers = await DeliveryDriverDao.getDeliveryDrivers({
    // where last ping > 10 minutes ago
    where: {
        last_ping_at: {
            lte: new Date(new Date() - 10 * 60 * 1000)
        },
        online: true,
        on_order: false
    },
    include: {
        user: true
    }
   });
   let drivers = await DriverDao.getDrivers({
    // where last ping > 10 minutes ago
    where: {
        last_ping_at: {
            lte: new Date(new Date() - 10 * 60 * 1000)
        },
        online: true,
        on_order: false
    },
    include: {
        user: true
    }
   });

   let allDrivers = [...deliveryDrivers, ...drivers];
   console.log("All drivers", allDrivers);
   for (let driver of allDrivers) {
        //if ping is more than 20 minutes ago {
        
        if (driver.last_ping_at < new Date(new Date() - 40 * 60 * 1000)) {
            const userSocket = UserSockets.get(driver.user_id);
            if (userSocket) {
                io.to(userSocket).emit('driver-offline');
            }
            if (driver.delivery_driver_id) {
                await DeliveryDriverDao.updateDeliveryDriver(driver.delivery_driver_id, {
                    online: false
                });
                // send notification to delivery driver
               
                io.emit('driver_unavailable', driver.delivery_driver_id);
            }
            if (driver.driver_id) {
                await DriverDao.updateDriver(driver.driver_id, {
                    online: false
                });
                // send notification to driver
                io.emit('driver_unavailable', driver.driver_id);
            }
            await OneSignal.sendNotificationToUser("Klikni Driver", "You are now offline, please open KlikniApp", driver.user.user_id);
            continue;
          
        }
            // send notification to driver
         if (driver.last_ping_at < new Date(new Date() - 20 * 60 * 1000)) {
            if (driver.is_inactive) {
                continue;
            }
            if (driver.delivery_driver_id) {
                await DeliveryDriverDao.updateDeliveryDriver(driver.delivery_driver_id, {
                    is_inactive: true
                });
                // send notification to delivery driver
            }
            if (driver.driver_id) {
                await DriverDao.updateDriver(driver.driver_id, {
                    is_inactive: true
                });
            }
            // send notification to driver
            //TODO: send notification to driver
            await OneSignal.sendNotificationToUser("Klikni Driver", "You are inactive, please open KlikniApp", driver.user.user_id);
         }
    };

}
module.exports = {
    chekPingStatus
}