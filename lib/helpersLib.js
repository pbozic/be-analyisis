const fs = require("fs");
const Holidays = require('date-holidays');
const { VEHICLE_CLASS, DELIVERY_ORDER_STATUS } = require("./constants");

function sleep(ms) {new Promise((resolve) => setTimeout(resolve, ms))}
const validateUserInput = (fields) => {
    for (let i in fields) {
        if (!fields[i]) {
            return false;
        }
    }
    return true;
}

const buildWhereObject = (queryWhere) => {
    const where = {};

    if (queryWhere.preferences) {
        const { adults, children_under_140, fixedPrice, isAbove, isBelow } = queryWhere.preferences;
        if (adults !== undefined) {
            where.preferences = {
                path: ['adults'],
                equals: parseInt(adults),
            };
        }
        if (children_under_140 !== undefined) {
            where.preferences = {
                ...where.preferences,
                path: ['children_under_140'],
                equals: parseInt(children_under_140),
            };
        }
        if (fixedPrice !== undefined) {
            where.payment = {
                ...where.preferences,
                path: ['price'],
                equals: parseFloat(fixedPrice),
            };
        }
        if (isAbove !== undefined) {
            where.payment = {
                ...where.payment,
                path: ['price'],
                gt: parseFloat(isAbove),
            };
        }
        if (isBelow !== undefined) {
            where.payment = {
                ...where.payment,
                path: ['price'],
                lt: parseFloat(isBelow),
            };
        }
    }
    if (queryWhere.rideRequirements) {
        const selectedRequirements = Object.keys(queryWhere.rideRequirements).filter(req => queryWhere.rideRequirements[req]);
        if (selectedRequirements.length > 0) {
            selectedRequirements.forEach(req => {
                where.preferences = {
                    ...where.preferences,
                    path: ['ride_requirements', req],
                    equals: true
                };
            });
        }
    }
    if (queryWhere.driver_id) {
        where.driver_id = queryWhere.driver_id;
    }
    if (queryWhere.status) {
        where.status = Array.isArray(queryWhere.status) ? { in: queryWhere.status } : queryWhere.status;
    }
    return where;
};

const jsonParse = (item) => {
    let value = item;
    try {
        item = JSON.parse(item);
    } catch (e) {
        item = value;
    }
    return item;
}

const displayValidFromMenuFormat = (date) => {
    let d = new Date(date);
    let day = d.getDate();
    let month = d.getMonth() + 1;
    let year = d.getFullYear();
    console.log("DATE:", date, `${day}. ${month}. ${year}`);
    return `${day}. ${month}. ${year}`;
};
const displayPrice = (price) => {
    return displayDecimalValue(Number(price).toFixed(2));
}

const displayDecimalValue = (price) => {
    return price.toString().replace(".", ",");
}

function getImageInBase64(imagePath) {
    if (!!imagePath) {
        let imageFileType = imagePath.substring(imagePath.lastIndexOf(".") + 1);
        let base64Prefix = `data:image/${imageFileType};charset=utf-8;base64,`;
        let image = fs.readFileSync(path.join(__dirname, imagePath));
        return base64Prefix + Buffer.from(image).toString('base64');
    }
    return null;
}

const parseMimeType = (fileExt) => {
    if (!fileExt) {
        return null;
    }
    if (fileExt.includes('.pdf')) {
        return 'application/pdf'
    }
}

const haversineDistance = (coords1, coords2) => {
    const toRad = (x) => (x * Math.PI) / 180;
    const R = 6371; // Radius of Earth in kilometers

    const dLat = toRad(coords2.latitude - coords1.latitude);
    const dLon = toRad(coords2.longitude - coords1.longitude);

    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(toRad(coords1.latitude)) * Math.cos(toRad(coords2.latitude)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c; // Distance in kilometers
    return distance;
};

const findNearestLocation = (currentLocation, locations) => {
    if (locations.length === 0) return null;

    return locations.reduce((nearest, location) => {
        const distance = haversineDistance(currentLocation.coordinates, location.coordinates);
        if (!nearest || distance < nearest.distance) {
            return { location, distance };
        }
        return nearest;
    }, null).location;
};

const sortLocationsByNearestNeighbor = (locations) => {
    if (locations.length <= 2) return locations;

    const startLocation = locations[0];
    const remainingLocations = locations.slice(1);
    const sortedRoute = [startLocation];
    let currentLocation = startLocation;

    while (remainingLocations.length > 0) {
        // Use the helper function to find the nearest location
        const nearestLocation = findNearestLocation(currentLocation, remainingLocations);

        // Add the nearest location to the route
        sortedRoute.push(nearestLocation);

        // Update the current location and remove the nearest location from the remaining locations
        currentLocation = nearestLocation;
        remainingLocations.splice(remainingLocations.indexOf(nearestLocation), 1);
    }

    return sortedRoute;
};

// Haversine formula to calculate distance between two points (in kilometers)
const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371; // Radius of the Earth in km
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;
    return distance;
}

// Function to calculate time difference in minutes
const calculateTimeDifference = (time1, time2) => {
    const diffMs = Math.abs(new Date(time2) - new Date(time1));
    const diffMinutes = diffMs / (1000 * 60);
    return diffMinutes;
}

function formatDistanceTimeTravelled(distance, hours, minutes) {
    let distanceStr = distance > 0 ? `${distance.toFixed(2)} km` : '';
    let timeStr = '';

    if (hours > 0) {
        timeStr += `${hours}h`;
    }
    if (minutes > 0) {
        timeStr += ` ${minutes}min`;
    }

    return [distanceStr, timeStr];
}

const hd = new Holidays('SI');
function isTodayHoliday() {
    const now = new Date();
    const today = now.toISOString().split('T')[0]; // Get today's date in 'YYYY-MM-DD' format
    const holiday = hd.isHoliday(today);
    return holiday !== null;
}

function isBusinessOpen(working_hours) {
    const now = new Date();
    let currentDay = now.toLocaleString('en-US', { weekday: 'long' }).toLowerCase().substring(0, 3);
    const currentTime = now.toTimeString().split(' ')[0];
    if (isTodayHoliday()) {
        currentDay = 'holidays';
    }
    if (working_hours[currentDay]) {
        const workingHours = working_hours[currentDay];
        // Check each time range for the current day
        for (const range of workingHours) {
            const [startTime, endTime] = range;
            if (currentTime >= startTime && currentTime <= endTime) {
                return true;
            }
        }
    }
    return false; // Business is closed
}

function calculateBusinessEarnings(orders, business) {
    if (orders && orders.length > 0) {
        const totalEarnings = orders.reduce((sum, order) => {
            const totalItemsPrice = order.items.reduce((itemSum, item) => {
                return itemSum + parseFloat(item.price || 0);
            }, 0);
            return (sum + (totalItemsPrice - parseFloat(order.details.delivery_cost))) || 0;
        }, 0);

        // Calculate the total duration in minutes from "DELIVERY_ACCEPTED" to "DELIVERY_COMPLETED"
        const totalDurationInMinutes = orders.reduce((sum, order) => {
            const timeline = order.timeline; // Assuming the timeline is part of the order object
            const acceptedTimestamp = timeline.find(entry => entry.status === "DELIVERY_ACCEPTED")?.location?.timestamp;
            const completedTimestamp = timeline.find(entry => entry.status === "DELIVERY_COMPLETED")?.location?.timestamp;

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

        const distance = orders.reduce((totalDistance, order) => {
            return totalDistance + parseFloat(order.details.distance || 0);
        }, 0);

        const hours = Math.floor(totalDurationInMinutes / 60);
        const minutes = Math.floor(totalDurationInMinutes % 60);
        const distanceTimeTravelled = formatDistanceTimeTravelled(distance, hours, minutes);
        const [distance_travelled, time_travelled] = distanceTimeTravelled;

        return {
            are_open: isBusinessOpen(business.working_hours),
            business: business.name,
            total_earnings: `€${totalEarnings.toFixed(2)}`,
            number_of_orders: orders.length,
            hourly_earnings: `${hourlyEarnings} €/h`,
            distance_travelled: distance_travelled !== '' ? distance_travelled : '0 km',
            time_travelled: time_travelled !== '' ? time_travelled : '0 min',
            earnings_fee: `€${(totalEarnings * 0.10).toFixed(2)}`
        };
    } else {
        console.log("error in calculateBusinessEarnings! completedOrders length:", orders?.length || 0);
        return {
            are_open: isBusinessOpen(business.working_hours),
            business: business.name,
            total_earnings: '€0.00',
            number_of_orders: 0,
            distance_travelled: '0 km',
            time_travelled: '0 min',
            hourly_earnings: '0.00 €/h',
            earnings_fee: '€0.00'
        };
    }
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
        const [distance_travelled, time_travelled] = distanceTimeTravelled;

        return {
            is_online: driver?.online,
            license_plate: driver?.vehicles[0]?.license_plate,
            driver: `${driver?.user?.first_name} ${driver?.user?.last_name}`,
            total_earnings: `€${totalEarnings.toFixed(2)}`,
            number_of_rides: numberOfRides,
            hourly_earnings: `${hourlyEarnings} €/h`,
            distance_travelled: distance_travelled !== '' ? distance_travelled : '0 km',
            time_travelled: time_travelled !== '' ? time_travelled : '0 min',
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

function calculateDeliveryDriversEarnings(driverOrders, driver) {
    if (driverOrders && driverOrders.length > 0) {
        const totalEarnings = driverOrders.reduce((sum, order) => {
            return sum + (parseFloat(order.details?.delivery_earnings) || 0) + (parseFloat(order.details?.delivery_cost) || 0);
        }, 0);

        const numberOfRides = driverOrders.length;

        // Calculate the total duration in minutes from "DELIVERY_ACCEPTED" to "DELIVERY_COMPLETED"
        const totalDurationInMinutes = driverOrders.reduce((sum, order) => {
            const timeline = order.timeline; // Assuming the timeline is part of the order object
            const acceptedTimestamp = timeline.findLast(entry => entry.status === DELIVERY_ORDER_STATUS.DELIVERY_ACCEPTED)?.location?.timestamp;
            const completedTimestamp = timeline.findLast(entry => entry.status === DELIVERY_ORDER_STATUS.DELIVERY_COMPLETED)?.location?.timestamp;

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
            return totalDistance + parseFloat(order.details?.distance || 0);
        }, 0);

        const hours = Math.floor(totalDurationInMinutes / 60);
        const minutes = Math.floor(totalDurationInMinutes % 60);

        const distanceTimeTravelled = formatDistanceTimeTravelled(distance, hours, minutes);
        const [distance_travelled, time_travelled] = distanceTimeTravelled;

        return {
            is_online: driver?.online,
            license_plate: driver?.vehicles[0]?.license_plate || '/',
            driver: `${driver?.user?.first_name} ${driver?.user?.last_name}`,
            total_earnings: `€${totalEarnings.toFixed(2)}`,
            number_of_rides: numberOfRides,
            hourly_earnings: `${hourlyEarnings} €/h`,
            distance_travelled: distance_travelled !== '' ? distance_travelled : '0 km',
            time_travelled: time_travelled !== '' ? time_travelled : '0 min',
            earnings_fee: `€${(totalEarnings * 0.10).toFixed(2)}`
        };
    } else {
        return {
            is_online: driver?.online,
            license_plate: driver?.vehicles[0]?.license_plate || '/',
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

function calculateTotalEarnings(completedOrders, type, delivery_driver = false, detailed = false) {
    if (completedOrders && completedOrders.length > 0) {
        let todaysEarnings = 0;
        let weeklyEarnings = 0;
        let monthlyEarnings = 0;
        let totalEarnings = 0;

        const now = new Date();
        const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0);
        const endOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59);

        const earningsByDate = completedOrders.reduce((acc, order) => {
            //const timeline = order.timeline
            //const timestamp = timeline?.find(entry => entry.status === type)?.location?.timestamp;
            //if (timestamp) {
            const orderDate = new Date(order.updated_at);
            const daysDiff = Math.floor((now - orderDate) / (1000 * 60 * 60 * 24));
            const weeksDiff = Math.floor(daysDiff / 7);
            const monthsDiff = Math.floor(daysDiff / 30);
            let orderAmount = 0;
            if (type === "TAXI_COMPLETED") {
                orderAmount = parseFloat(order.payment?.price) || 0;
                if (order.preferences?.vehicle_class !== VEHICLE_CLASS.PRIVATE_DRIVER) {
                    orderAmount += parseFloat(order.payment.extras?.price) || 0;
                }
            } else if (delivery_driver) {
                orderAmount = (parseFloat(order.details?.delivery_earnings) || 0) + (parseFloat(order.details?.delivery_cost) || 0);
            } else {
                const totalItemsPrice = order.items.reduce((sum, item) => sum + parseFloat(item.price) || 0, 0)
                orderAmount = (totalItemsPrice - parseFloat(order.details?.provider_delivery_cost)) || 0;
            }
            if (!detailed) {
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
            } else {
                const date = orderDate.toISOString().slice(0, 10);
                if (!acc[date]) {
                    acc[date] = 0;
                }
                acc[date] += orderAmount;
                return acc;
            }
        }, {});
        return !detailed ? {
            todaysEarnings: todaysEarnings,
            weeklyEarnings: weeklyEarnings,
            monthlyEarnings: monthlyEarnings,
            totalEarnings: totalEarnings
        } : earningsByDate;
    }
    console.log("Error calculating total earnings, completed orders length:", completedOrders.length);
    return !detailed ? {
        todaysEarnings: 0,
        weeklyEarnings: 0,
        monthlyEarnings: 0,
        totalEarnings: 0
    } : {};
}

function todaysEarnings(orders, type) {
    let todaysEarnings = 0;
    if (orders && orders.length > 0) {
        orders.forEach(order => {
            const timeline = order.timeline.find(item => item.status === type);
            const timestamp = timeline?.location?.timestamp;

            if (timestamp) {
                if (type === 'TAXI_COMPLETED') {
                    todaysEarnings += parseFloat(order.payment?.price) || 0;
                    if (order.preferences?.vehicle_class !== VEHICLE_CLASS.PRIVATE_DRIVER) {
                        todaysEarnings += parseFloat(order.payment.extras?.price) || 0;
                    }
                } else {
                    todaysEarnings += (parseFloat(order.details?.delivery_earnings) || 0) + (parseFloat(order.details?.delivery_cost) || 0);
                }
            }
        });
    } else {
        console.log("Error calculating today's earnings:", orders.length);
    }
    return todaysEarnings;
}

function parseTelephone(telephone) {
    if (telephone && !telephone.includes('@') && telephone.startsWith('0')) {
        return telephone.replace(/\s+/g, '').replace(/^0/, '+386');
    }
    return telephone;
}

let range = n => Array.from(Array(n).keys())

function calculatePrivateDriverFee(distance) {
    if (distance <= 10) return 40;
    else if (distance <= 20) return 60;
    else if (distance <= 30) return 80;
    else if (distance <= 40) return 100;
    else if (distance <= 60) return 120;
    else if (distance <= 70) return 140;
    else if (distance <= 80) return 160;
    else if (distance <= 100) return 180;
    else if (distance <= 120) return 200;
    else if (distance <= 150) return 250;
    else return 0;
}

module.exports = {
    buildWhereObject,
    validateUserInput,
    jsonParse,
    displayDecimalValue,
    displayPrice,
    displayValidFromMenuFormat,
    parseMimeType,
    haversineDistance,
    findNearestLocation,
    sortLocationsByNearestNeighbor,
    sleep,
    range,
    calculateDistance,
    calculateTimeDifference,
    calculateBusinessEarnings,
    calculateDriversEarnings,
    calculateDeliveryDriversEarnings,
    calculateTotalEarnings,
    todaysEarnings,
    parseTelephone,
    calculatePrivateDriverFee,
}