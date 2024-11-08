const fs = require("fs");
const Holidays = require('date-holidays');

function sleep(ms) {new Promise((resolve) => setTimeout(resolve, ms))}
const validateUserInput = (fields) => {
    for (let i in fields) {
        if (!fields[i]) {
            return false;
        }
    }
    return true;
}

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
        const distance = haversineDistance(currentLocation, location);
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

const hd = new Holidays('SI'); // 'SI' is the country code for Slovenia
function isTodayHoliday() {
    const now = new Date();
    const today = now.toISOString().split('T')[0]; // Get today's date in 'YYYY-MM-DD' format
    const holiday = hd.isHoliday(today); // Check if today is a holiday
    return holiday !== null; // Returns true if today is a holiday, otherwise false
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

function calculateTotalEarnings(completedOrders, type) {
    if (completedOrders && completedOrders.length > 0) {
        let todaysEarnings = 0;
        let weeklyEarnings = 0;
        let monthlyEarnings = 0;
        let totalEarnings = 0;

        const now = new Date();
        const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0);
        const endOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59);

        completedOrders.forEach(order => {
            const timeline = order.timeline
            const timestamp = timeline?.find(entry => entry.status === type)?.location?.timestamp;
            if (timestamp) {
                const orderDate = new Date(timestamp);
                const daysDiff = Math.floor((now - orderDate) / (1000 * 60 * 60 * 24));
                const weeksDiff = Math.floor(daysDiff / 7);
                const monthsDiff = Math.floor(daysDiff / 30);
                let orderAmount = 0;
                if (type === "TAXI_COMPLETED") {
                    orderAmount = parseFloat(order.payment.price) || 0;
                } else {
                    const totalItemsPrice = order.items.reduce((sum, item) => sum + parseFloat(item.price || 0), 0)
                    orderAmount = (totalItemsPrice - parseFloat(order.details.delivery_cost)) || 0;
                }
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
    console.log("Error calculating total earnings:", completedOrders.length);
    return {
        todaysEarnings: 0,
        weeklyEarnings: 0,
        monthlyEarnings: 0,
        totalEarnings: 0
    };
}

let range = n => Array.from(Array(n).keys())
module.exports = {
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
    calculateTotalEarnings
}