require('dotenv').config();
const { Client } = require('@googlemaps/google-maps-services-js');

// Replace 'YOUR_API_KEY' with your actual Google Maps API key
const apiKey = process.env.GOOGLE_API_KEY;
const client = new Client({});

async function distanceBetweenTwoPoints(origin, destination, mode = 'driving', departureTime = new Date()) {
   // console.log("origin", origin);
    //console.log("destination", destination);
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
async function geocodeAddress(req, res) {
    const { address } = req.body;

    if (!address) {
        return res.status(400).json({ error: 'Address is required' });
    }

    try {
        const response = await client.geocode({
            params: {
                address: address,
                key: apiKey,
            },
        });
        const location = response.data.results[0]?.geometry.location;
        const formattedAddress = response.data.results[0]?.formatted_address;
        if (location) {
            const addressData = {
                address: formattedAddress,
                coordinates: {
                    latitude: location.lat,
                    longitude: location.lng,
                },
            };

            return res.status(200).json({ addressData });
        } else {
            return res.status(404).json({ error: 'Location not found' });
        }
    } catch (error) {
        console.error('Error fetching geocode:', error.response?.data || error.message || error);
        return res.status(500).json({ error: 'Failed to fetch geocode' });
    }
}


module.exports = {
    apiKey,
    client,
    distanceBetweenTwoPoints,
    geocodeAddress
};