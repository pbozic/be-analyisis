# OrderLobbyController Controller

<!-- DOCGEN:START createLobby -->

### createLobby

**Summary**: Create a new order lobby

**Description**: Creates a new order lobby and assigns users with per-user limits.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**

- 200
- 500

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createLobby)

<!-- DOCGEN:END createLobby -->

<!-- DOCGEN:START submitLobby -->

### submitLobby

**Summary**: Submit the order lobby and generate a delivery order

**Description**: Submits an existing order lobby and creates a delivery order.

**Parameters:**

| Name      | In   | Type             | Description |
| --------- | ---- | ---------------- | ----------- |
| undefined | path | order_lobbies_id |             |

**Request Body:** (optional)
Type: `application/json`
Content-Type: `application/json`

**Responses:**

- 200
- 500

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/submitLobby)

<!-- DOCGEN:END submitLobby -->

<!-- DOCGEN:START setLobbyUsersWithLimits -->

### setLobbyUsersWithLimits

**Summary**: Set the users and their limits for an order lobby

**Description**: Adds/removes users and sets updated limits for the lobby.

**Parameters:**

| Name      | In   | Type             | Description |
| --------- | ---- | ---------------- | ----------- |
| undefined | path | order_lobbies_id |             |

**Request Body:** (optional)
Type: `application/json`
Content-Type: `application/json`

**Responses:**

- 200
- 404
- 500

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/setLobbyUsersWithLimits)

<!-- DOCGEN:END setLobbyUsersWithLimits -->

<!-- DOCGEN:START setUserOrderLobbyItems -->

### setUserOrderLobbyItems

**Summary**: Set user-specific order lobby items

**Description**: Creates, updates, or deletes items for the authenticated user in the lobby.

**Parameters:**

| Name      | In   | Type             | Description |
| --------- | ---- | ---------------- | ----------- |
| undefined | path | order_lobbies_id |             |

**Request Body:** (optional)
Type: `application/json`
Content-Type: `application/json`

**Responses:**

- 200
- 404
- 500

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/setUserOrderLobbyItems)

<!-- DOCGEN:END setUserOrderLobbyItems -->

<!-- DOCGEN:START cancelLobby -->

### cancelLobby

**Summary**: Cancel an order lobby

**Description**: Cancels an order lobby and removes all users with their items.

**Parameters:**

| Name      | In   | Type             | Description |
| --------- | ---- | ---------------- | ----------- |
| undefined | path | order_lobbies_id |             |

**Responses:**

- 200
- 404
- 500

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/cancelLobby)

<!-- DOCGEN:END cancelLobby -->

<!-- DOCGEN:START deleteUserFromLobby -->

### deleteUserFromLobby

**Summary**: Delete a user from an order lobby

**Description**: Removes a specific user from the lobby and notifies them.

**Parameters:**

| Name      | In   | Type             | Description |
| --------- | ---- | ---------------- | ----------- |
| undefined | path | order_lobbies_id |             |
| undefined | path | user_id          |             |

**Responses:**

- 200
- 404
- 500

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deleteUserFromLobby)

<!-- DOCGEN:END deleteUserFromLobby -->

<!-- DOCGEN:START getOrderLobbyById -->

### getOrderLobbyById

**Summary**: Get an order lobby by ID

**Description**: Retrieves the lobby with users and their profile pictures.

**Parameters:**

| Name      | In   | Type             | Description |
| --------- | ---- | ---------------- | ----------- |
| undefined | path | order_lobbies_id |             |

**Responses:**

- 200
- 404
- 500

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getOrderLobbyById)

<!-- DOCGEN:END getOrderLobbyById -->

<!-- DOCGEN:START getActiveOrderLobbiesByBusinessId -->

### getActiveOrderLobbiesByBusinessId

**Summary**: Get active order lobbies by business ID

**Description**: Retrieves a list of active order lobbies for a business.

**Parameters:**

| Name      | In   | Type        | Description |
| --------- | ---- | ----------- | ----------- |
| undefined | path | business_id |             |

**Responses:**

- 200
- 204
- 500

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getActiveOrderLobbiesByBusinessId)

<!-- DOCGEN:END getActiveOrderLobbiesByBusinessId -->

<!-- DOCGEN:START getOrderLobbiesByUserId -->

### getOrderLobbiesByUserId

**Summary**: Get order lobbies for a user

**Description**: Retrieves order lobbies where the user participates.

**Parameters:**

| Name      | In   | Type    | Description |
| --------- | ---- | ------- | ----------- |
| undefined | path | user_id |             |

**Responses:**

- 200
- 204
- 500

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getOrderLobbiesByUserId)

<!-- DOCGEN:END getOrderLobbiesByUserId -->
