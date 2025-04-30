require('dotenv').config();
const { Client } = require('@googlemaps/google-maps-services-js');

// Replace 'YOUR_API_KEY' with your actual Google Maps API key
const apiKey = process.env.GOOGLE_API_KEY;
const client = new Client({});

async function distanceBetweenTwoPoints(origin, destination, mode = 'driving', departureTime, traffic_model) {
   // console.log("origin", origin);
    const params = {
        origins: [{ lat: origin.latitude, lng: origin.longitude }],
        destinations: [{ lat: destination.latitude, lng: destination.longitude }],
        key: apiKey,
        mode,
    };
    
    if (departureTime) {
        params.departure_time = departureTime.getTime();
    }
    if (traffic_model) {
        params.traffic_model = traffic_model;
    }
    
    const response = await client.distancematrix({ params });

    const distance = response.data.rows[0].elements[0].distance.text;
    const duration = response.data.rows[0].elements[0].duration.text;
    
    return {
        result: response.data,
        distance,
        distanceM: response.data.rows[0].elements[0].distance.value,
        durationS: response.data.rows[0].elements[0].duration.value,
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