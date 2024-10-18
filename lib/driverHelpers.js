const { ping } = require('../controllers/UserController');
const DeliveryDriverDao = require('../dao/DeliveryDriver');
const DriverDao = require('../dao/Driver');
const OneSignal = require('../lib/oneSignal');
const { UserSockets, io } = require('../socket');
const { TAXI_ORDER_STATUS } = require("./constants");
const { formatDistanceTimeTravelled } = require("./helpersLib");

async function checkPingStatus() {
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

function filterOrdersByDateRange(orders, startDate, endDate) {
    if (!startDate && !endDate) {
        return orders;
    }

    return orders.filter(order => {
        const timeline = order.timeline;
        const completedTimestamp = timeline.find(entry => entry.status === "TAXI_COMPLETED")?.location?.timestamp;

        if (completedTimestamp) {
            const orderDate = new Date(completedTimestamp);
            return orderDate >= new Date(startDate) && orderDate <= new Date(endDate);
        }
        return false;
    });
}

function calculateTotalDriversEarnings(completedOrders) {
    if (completedOrders && completedOrders.length > 0) {
        let todaysEarnings = 0;
        let weeklyEarnings = 0;
        let monthlyEarnings = 0;
        let totalEarnings = 0;

        const now = new Date();
        const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0);
        const endOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59);

        completedOrders.forEach(order => {
            const timeline = order.timeline.find(item => item.status === TAXI_ORDER_STATUS.COMPLETED);
            const timestamp = timeline?.location?.timestamp;

            if (timestamp) {
                const orderDate = new Date(timestamp);
                const daysDiff = Math.floor((now - orderDate) / (1000 * 60 * 60 * 24));
                const weeksDiff = Math.floor(daysDiff / 7);
                const monthsDiff = Math.floor(daysDiff / 30);

                const orderAmount = parseFloat(order.payment.price) || 0;

                totalEarnings += orderAmount;

                if (orderDate >= startOfDay && orderDate <= endOfDay) {
                    todaysEarnings += orderAmount;
                }

                if (weeksDiff === 0) {
                    weeklyEarnings += orderAmount;
                }

                if (monthsDiff === 0) {
                    monthlyEarnings += orderAmount;
                }
            }
        });

        return {
            todaysEarnings: todaysEarnings,
            weeklyEarnings: weeklyEarnings,
            monthlyEarnings: monthlyEarnings,
            totalEarnings: totalEarnings
        };
    }
    console.log("Error calculating drivers earnings:", completedOrders.length);
    return {
        todaysEarnings: 0,
        weeklyEarnings: 0,
        monthlyEarnings: 0,
        totalEarnings: 0
    };
}

function calculateDriversEarnings(driverOrders, driver) {
    if (driverOrders && driverOrders.length > 0) {
        const totalEarnings = driverOrders.reduce((sum, order) => {
            return sum + parseFloat(order.payment.price || 0);
        }, 0);

        const numberOfRides = driverOrders.length;

        // Calculate the total duration in minutes from "TAXI_ACCEPTED" to "TAXI_COMPLETED"
        const totalDurationInMinutes = driverOrders.reduce((sum, order) => {
            const timeline = order.timeline; // Assuming the timeline is part of the order object
            const acceptedTimestamp = timeline.find(entry => entry.status === "TAXI_ACCEPTED")?.location?.timestamp;
            const completedTimestamp = timeline.find(entry => entry.status === "TAXI_COMPLETED")?.location?.timestamp;

            if (acceptedTimestamp && completedTimestamp) {
                const start = new Date(acceptedTimestamp);
                const end = new Date(completedTimestamp);
                const durationInMinutes = (end - start) / (1000 * 60); // Convert milliseconds to minutes
                return sum + durationInMinutes;
            }

            return sum; // No valid timeline or timestamps found
        }, 0);

        // Convert total duration from minutes to hours
        const totalDurationInHours = totalDurationInMinutes / 60;

        const hourlyEarnings = totalDurationInHours > 0 ? (totalEarnings / totalDurationInHours).toFixed(2) : '0.00';

        const distance = driverOrders.reduce((totalDistance, order) => {
            return totalDistance + parseFloat(order.payment.distance || 0);
        }, 0);

        const hours = Math.floor(totalDurationInMinutes / 60);
        const minutes = Math.floor(totalDurationInMinutes % 60);

        const distanceTimeTravelled = formatDistanceTimeTravelled(distance, hours, minutes);
        const [distance_travelled, time_travelled] = distanceTimeTravelled.split('/');

        return {
            is_online: driver?.online,
            license_plate: driver?.vehicles[0]?.license_plate,
            driver: `${driver?.user?.first_name} ${driver?.user?.last_name}`,
            total_earnings: `€${totalEarnings.toFixed(2)}`,
            number_of_rides: numberOfRides,
            hourly_earnings: `${hourlyEarnings} €/h`,
            distance_travelled: distance_travelled.trim(),
            time_travelled: time_travelled.trim(),
            earnings_fee: `€${(totalEarnings * 0.10).toFixed(2)}`
        };
    } else {
        return {
            is_online: driver?.online,
            license_plate: driver?.vehicles[0]?.license_plate,
            driver: `${driver?.user?.first_name} ${driver?.user?.last_name}`,
            total_earnings: '€0.00',
            number_of_rides: 0,
            hourly_earnings: '0.00 €/h',
            distance_travelled: '0 km',
            time_travelled: '0 min',
            earnings_fee: '€0.00'
        };
    }
}

module.exports = {
    checkPingStatus,
    filterOrdersByDateRange,
    calculateTotalDriversEarnings,
    calculateDriversEarnings
}