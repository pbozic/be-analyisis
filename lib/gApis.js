require('dotenv').config();
const { Client } = require('@googlemaps/google-maps-services-js');

// Replace 'YOUR_API_KEY' with your actual Google Maps API key
const apiKey = process.env.GOOGLE_API_KEY;
const client = new Client({});

async function distanceBetweenTwoPoints(origin, destination, mode = 'driving', departureTime = new Date()) {
   // console.log("origin", origin);
    console.info("destination", destination);
    /*console.log("params", {
        origins: [{ lat: origin.latitude, lng: origin.longitude }],
        destinations: [{ lat: destination.latitude, lng: destination.longitude }],
        key: apiKey,
        mode,
        departureTime: departureTime.getTime(),
        traffic_model: 'best_guess',
    });*/

    const response = await client.distancematrix({
        params: {
            origins: [{ lat: origin.latitude, lng: origin.longitude }],
            destinations: [{ lat: destination.latitude, lng: destination.longitude }],
            key: apiKey,
            mode,
            departure_time: departureTime.getTime(),
            traffic_model: 'best_guess',
        },
    });
    const distance = response.data.rows[0].elements[0].distance.text;
    const duration = response.data.rows[0].elements[0].duration.text;
    return {
        result: response.data,
        distance,
        duration,
    };

}

async function addressFromCoordinates(lat,lng) {
    if (!lat || !lng) {
        throw Error('Latitude and longitude are required');
    }

    const response = await client.reverseGeocode({
        params: {
            latlng: `${lat},${lng}`,
            key: apiKey,
        },
    });
    const address = response.data.results[0]?.formatted_address;
    if (address) {
        return address
    } else {
        throw Error('No address in gmaps response');
    }
}

module.exports = {
    apiKey,
    client,
    distanceBetweenTwoPoints,
    addressFromCoordinates
};