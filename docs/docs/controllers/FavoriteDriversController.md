# FavoriteDriversController Controller

<!-- DOCGEN:START addFavoriteDriver -->
### addFavoriteDriver

**Summary**: Add a driver to the authenticated user's favorites

**Description**: Creates or ensures a record in user_favorite_drivers.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addFavoriteDriver )

<!-- DOCGEN:END addFavoriteDriver -->

<!-- DOCGEN:START removeFavoriteDriver -->
### removeFavoriteDriver

**Summary**: Remove a driver from the authenticated user's favorites

**Description**: Deletes a record in user_favorite_drivers by composite key.

**Responses:**
- 200

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/removeFavoriteDriver )

<!-- DOCGEN:END removeFavoriteDriver -->

<!-- DOCGEN:START listFavoriteDrivers -->
### listFavoriteDrivers

**Summary**: List the authenticated user's favorite drivers

**Description**: Lists user_favorite_drivers for the user including driver data.

**Responses:**
- 200

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listFavoriteDrivers )

<!-- DOCGEN:END listFavoriteDrivers -->
