# BusinessClient Controller


<!-- DOCGEN:START getAllBusinessClients -->
### getAllBusinessClients

**Summary**: Get a list of all business clients

**Description**: Returns a list of all business clients.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAllBusinessClients )

<!-- DOCGEN:END getAllBusinessClients -->

<!-- DOCGEN:START getBusinessClientById -->
### getBusinessClientById

**Summary**: Get a business client by ID

**Description**: Returns a business client.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_clients_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessClientById )

<!-- DOCGEN:END getBusinessClientById -->

<!-- DOCGEN:START getBusinessClientsByBusinessId -->
### getBusinessClientsByBusinessId

**Summary**: Get business clients by business ID

**Description**: Returns a list of business clients for a specific business ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessClientsByBusinessId )

<!-- DOCGEN:END getBusinessClientsByBusinessId -->

<!-- DOCGEN:START createBusinessClient -->
### createBusinessClient

**Summary**: Create a new business client

**Description**: Creates a new business client and links it to a business.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createBusinessClient )

<!-- DOCGEN:END createBusinessClient -->

<!-- DOCGEN:START updateBusinessClient -->
### updateBusinessClient

**Summary**: Update a business client

**Description**: Updates a business client's information.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_clients_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400
- 404

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessClient )

<!-- DOCGEN:END updateBusinessClient -->

<!-- DOCGEN:START removeBusinessClient -->
### removeBusinessClient

**Summary**: Remove a business client

**Description**: Removes a business client by their ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_clients_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/removeBusinessClient )

<!-- DOCGEN:END removeBusinessClient -->
