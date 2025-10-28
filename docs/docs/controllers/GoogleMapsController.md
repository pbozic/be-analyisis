# GoogleMapsController Controller



<!-- DOCGEN:START geocodeAddress -->
### geocodeAddress

**Summary**: Fetches the geocode information for a given address

**Description**: Retrieves the latitude and longitude coordinates for the provided address using the Google Maps Geocoding API.

**Responses:**
- 200 - Geocode fetched successfully
- 400 - Address is required
- 404 - Location not found
- 500 - Failed to fetch geocode

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getGeocode )

<!-- DOCGEN:END geocodeAddress -->



<!-- DOCGEN:START getPlacePredictions -->
### getPlacePredictions

**Summary**: Fetches address predictions based on user input

**Description**: Retrieves place predictions for a given input text using the Google Maps Places Autocomplete API, filtering results based on a specified location, radius, and country.

**Responses:**
- 200 - Address predictions fetched successfully
- 400 - Invalid input or input too short
- 500 - Failed to fetch predictions

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getPlacePredictions )

<!-- DOCGEN:END getPlacePredictions -->

