# AuthController Controller

<!-- DOCGEN:START getScheduledUsers -->
### getScheduledUsers

**Summary**: Get scheduled users

**Description**: This function fetches all scheduled users.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 500

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getScheduledUsers )

<!-- DOCGEN:END getScheduledUsers -->

<!-- DOCGEN:START login -->
### login

**Summary**: User login procedure.

**Description**: This verifies the user's credentials and responds with an access token and refresh token if successful.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400
- 500

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/loginUser. )

<!-- DOCGEN:END login -->

<!-- DOCGEN:START register -->
### register

**Summary**: Register a new user

**Description**: This endpoint is used to register a new user.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/registerNewUser )

<!-- DOCGEN:END register -->

<!-- DOCGEN:START refreshToken -->
### refreshToken

**Summary**: Refreshes the user's access token

**Description**: This endpoint is used to refresh the user's access and refresh tokens.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400
- 401

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/refreshToken )

<!-- DOCGEN:END refreshToken -->

<!-- DOCGEN:START requestPasswordReset -->
### requestPasswordReset

**Summary**: Request a password reset

**Description**: This endpoint is used to request a password reset. It will generate and send a password reset token to the user.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/requestPasswordReset )

<!-- DOCGEN:END requestPasswordReset -->

<!-- DOCGEN:START registerTaxiService -->
### registerTaxiService

**Summary**: Register a new taxi service

**Description**: Creates a new business, multiple taxi, vehicles, and optionally finances and documents, and links them together.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- Status: 201, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/registerTaxiService )

<!-- DOCGEN:END registerTaxiService -->

<!-- DOCGEN:START registerDeliveryService -->
### registerDeliveryService

**Summary**: Register a new delivery service

**Description**: Creates a new business, multiple delivery drivers, vehicles, and optionally finances and documents, and links them together.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- Status: 201, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/registerDeliveryService )

<!-- DOCGEN:END registerDeliveryService -->

<!-- DOCGEN:START registerMerchantService -->
### registerMerchantService

**Summary**: Register a new merchant service

**Description**: Creates a new business, optionally business users, finances, and documents, and links them together.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- Status: 201, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/registerMerchantService )

<!-- DOCGEN:END registerMerchantService -->

<!-- DOCGEN:START registerBusiness -->
### registerBusiness

**Summary**: Register a new business

**Description**: Creates a new business, optionally business users, finances, and documents, and links them together.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- Status: 201, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/registerBusiness )

<!-- DOCGEN:END registerBusiness -->

<!-- DOCGEN:START createScheduledUser -->
### createScheduledUser

**Summary**: Create a new scheduled user.

**Description**: This created new scheduled user.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 500

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createScheduledUser )

<!-- DOCGEN:END createScheduledUser -->

<!-- DOCGEN:START updateScheduledUser -->
### updateScheduledUser

**Summary**: Updates a scheduled user's details

**Description**: This endpoint is used to update a scheduled user's details.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateScheduledUser )

<!-- DOCGEN:END updateScheduledUser -->

<!-- DOCGEN:START checkEmailAvailability -->
### checkEmailAvailability

**Summary**: Check if an email is already taken

**Description**: Checks if the provided email is already registered in the system.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/checkEmailAvailability )

<!-- DOCGEN:END checkEmailAvailability -->

<!-- DOCGEN:START checkTelephoneAvailability -->
### checkTelephoneAvailability

**Summary**: Check if a telephone number is already taken

**Description**: Checks if the provided telephone number is already registered in the system.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/checkTelephoneAvailability )

<!-- DOCGEN:END checkTelephoneAvailability -->
