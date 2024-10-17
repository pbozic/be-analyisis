const fs = require("fs");
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

    return distanceStr && timeStr ? `${distanceStr}/${timeStr}` : distanceStr || timeStr;
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
    formatDistanceTimeTravelled
}