# GoogleMapsController Controller

<!-- DOCGEN:START geocodeAddress -->
### geocodeAddress

**Summary**: Fetches the geocode information for a given address

**Description**: Retrieves the latitude and longitude coordinates for the provided address using the Google Maps Geocoding API.

**Responses:**
- 200
- 400
- 404
- 500

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`, Example: `- The geocode details including latitude and longitude`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getGeocode )

<!-- DOCGEN:END geocodeAddress -->

<!-- DOCGEN:START getPlacePredictions -->
### getPlacePredictions

**Summary**: Fetches address predictions based on user input

**Description**: Retrieves place predictions for a given input text using the Google Maps Places Autocomplete API, filtering results based on a specified location, radius, and country.

**Responses:**
- 200
- 400
- 500

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`, Example: `- The list of address predictions with modified descriptions`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getPlacePredictions )

<!-- DOCGEN:END getPlacePredictions -->

