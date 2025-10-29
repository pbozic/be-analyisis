# StoresController Controller

<!-- DOCGEN:START setStoreOnline -->
### setStoreOnline

**Summary**: Toggle a store's online status

**Description**: Sets a store's online flag.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 500

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`
- Status: 500, Type: `unknown`, Content-Type: `application/json`, Example: `The error object`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/setStoreOnline )

<!-- DOCGEN:END setStoreOnline -->

<!-- DOCGEN:START setStoreOverwhelmed -->
### setStoreOverwhelmed

**Summary**: Toggle a store's overwhelmed status

**Description**: Sets a store's overwhelmed flag.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 500

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`
- Status: 500, Type: `unknown`, Content-Type: `application/json`, Example: `The error object`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/setStoreOverwhelmed )

<!-- DOCGEN:END setStoreOverwhelmed -->

<!-- DOCGEN:START disableStore -->
### disableStore

**Summary**: Disable a store

**Description**: Sets a store's enabled flag to false and online flag to false.

**Responses:**
- 200
- 500

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`
- Status: 500, Type: `unknown`, Content-Type: `application/json`, Example: `The error object`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/disableStore )

<!-- DOCGEN:END disableStore -->

<!-- DOCGEN:START enableStore -->
### enableStore

**Summary**: Enable a store

**Description**: Sets a store's enabled flag to true.

**Responses:**
- 200
- 500

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`
- Status: 500, Type: `unknown`, Content-Type: `application/json`, Example: `The error object`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/enableStore )

<!-- DOCGEN:END enableStore -->

