# OverwatchController Controller

<!-- DOCGEN:START getOrdersWithPagination -->

### getOrdersWithPagination

**Summary**: Get orders with pagination.

**Description**: This fetches orders with pagination.

**Responses:**

- 200 - Successful operation. Returns a list of orders in the response body.
- 500 - Server error. Returns error message "Error something went wrong..." if any exception is encountered during execution.

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getOrdersWithPagination)

<!-- DOCGEN:END getOrdersWithPagination -->

<!-- DOCGEN:START setDriversActivitySettings -->

### setDriversActivitySettings

**Summary**: Update driver activity settings

**Description**: Updates existing driver activity settings or creates new ones if they don't exist

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**

- 200 - Settings updated successfully
- 400 - Invalid request data
- 500 - Server error while updating settings

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDriverActivitySettings)

<!-- DOCGEN:END setDriversActivitySettings -->

<!-- DOCGEN:START getDriversActivitySettings -->

### getDriversActivitySettings

**Summary**: Get active driver activity settings

**Description**: Retrieves the most recently created active driver activity settings.

**Responses:**

- 200
- 500

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDriverActivitySettings)

<!-- DOCGEN:END getDriversActivitySettings -->
