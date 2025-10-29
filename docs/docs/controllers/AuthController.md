# AuthController Controller

<!-- DOCGEN:START getScheduledUsers -->
### getScheduledUsers

**Summary**: Get scheduled users

**Description**: Fetches all scheduled users.

**Responses:**
- 200
- 500

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getScheduledUsers )

<!-- DOCGEN:END getScheduledUsers -->

<!-- DOCGEN:START login -->
### login

**Summary**: User login

**Description**: Verifies user credentials and returns access and refresh tokens on success.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400
- 500

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/loginUser )

<!-- DOCGEN:END login -->

<!-- DOCGEN:START register -->
### register

**Summary**: Register a new user

**Description**: Registers a new user and returns user info with tokens.

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

**Summary**: Refresh access token

**Description**: Refreshes the user's access and refresh tokens.

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

**Description**: Generates and sends a password reset token to the user via email or SMS.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

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

**Summary**: Update a scheduled user's details

**Description**: Updates a scheduled user's data and addresses.

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

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | email |  |

**Responses:**
- 200

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/checkEmailAvailability )

<!-- DOCGEN:END checkEmailAvailability -->

<!-- DOCGEN:START checkTelephoneAvailability -->
### checkTelephoneAvailability

**Summary**: Check if a telephone number is already taken

**Description**: Checks if the provided telephone is already registered in the system.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | telephone |  |

**Responses:**
- 200

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/checkTelephoneAvailability )

<!-- DOCGEN:END checkTelephoneAvailability -->

<!-- DOCGEN:START getMunicipalitiesWithLicenseRequirements -->
### getMunicipalitiesWithLicenseRequirements

**Summary**: List municipalities requiring license

**Description**: Returns municipalities where requires_license is true.

**Responses:**
- 200
- 400

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getMunicipalitiesWithLicenseRequirements )

<!-- DOCGEN:END getMunicipalitiesWithLicenseRequirements -->

<!-- DOCGEN:START authenticateRegistrationSession -->
### authenticateRegistrationSession

**Summary**: Authenticate registration session

**Description**: Authenticates user credentials and generates a registration session token.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400
- 500

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/authenticateRegistrationSession )

<!-- DOCGEN:END authenticateRegistrationSession -->

