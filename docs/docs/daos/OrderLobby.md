# OrderLobby DAO

<!-- DOCGEN:START createOrderLobby -->

### createOrderLobby

**Description**: Creates a new order lobby

**Parameters**:

- data: {Object} - The order lobby data
- data.lobby_name: {string} - Name of the lobby
- data.lobby_description: {string} - Description of the lobby
- data.business_id: {string} - ID of the associated business
- data.restaurant_id: {string} - ID of the associated restaurant
- data.creator_id: {string} - ID of the user who created the lobby

**Returns**: {Promise<Object>} - Created order lobby

<!-- DOCGEN:END createOrderLobby -->

<!-- DOCGEN:START getOrderLobbyById -->

### getOrderLobbyById

**Description**: Retrieves an order lobby by its ID

**Parameters**:

- orderLobbiesId: {string} - The ID of the order lobby

**Returns**: {Promise<Object>} - Order lobby with its items and users

<!-- DOCGEN:END getOrderLobbyById -->

<!-- DOCGEN:START getAllOrderLobbies -->

### getAllOrderLobbies

**Description**: Retrieves all order lobbies

**Returns**: {Promise<Array>} - Array of all order lobbies with their items, users, and delivery orders

<!-- DOCGEN:END getAllOrderLobbies -->

<!-- DOCGEN:START getOrderLobbiesForBusiness -->

### getOrderLobbiesForBusiness

**Description**: Retrieves all order lobbies for a specific business

**Parameters**:

- business_id: {string} - The ID of the business

**Returns**: {Promise<Array>} - Array of order lobbies associated with the business

<!-- DOCGEN:END getOrderLobbiesForBusiness -->

<!-- DOCGEN:START getActiveOrderLobbiesByUserID -->

### getActiveOrderLobbiesByUserID

**Description**: Retrieves active order lobbies for a specific user

**Parameters**:

- userId: {string} - The ID of the user

**Returns**: {Promise<Array>} - Array of active order lobbies the user is part of

<!-- DOCGEN:END getActiveOrderLobbiesByUserID -->

<!-- DOCGEN:START updateOrderLobby -->

### updateOrderLobby

**Description**: Updates an order lobby

**Parameters**:

- orderLobbiesId: {string} - The ID of the order lobby to update
- data: {Object} - The update data

**Returns**: {Promise<Object>} - Updated order lobby

<!-- DOCGEN:END updateOrderLobby -->

<!-- DOCGEN:START setOrderLobbyActive -->

### setOrderLobbyActive

**Description**: Sets the active status of an order lobby

**Parameters**:

- orderLobbiesId: {string} - The ID of the order lobby
- active: {boolean} - The active status to set

**Returns**: {Promise<Object>} - Updated order lobby

<!-- DOCGEN:END setOrderLobbyActive -->

<!-- DOCGEN:START deleteOrderLobby -->

### deleteOrderLobby

**Description**: Deletes an order lobby

**Parameters**:

- orderLobbiesId: {string} - The ID of the order lobby to delete

**Returns**: {Promise<Object>} - Deleted order lobby

<!-- DOCGEN:END deleteOrderLobby -->

<!-- DOCGEN:START editUsersInOrderLobby -->

### editUsersInOrderLobby

**Description**: Replace users in an order lobby with a new set and limits in a transaction.

**Parameters**:

- orderLobbiesId: {string} - Order lobby ID.
- users: {object} - Map of user_id to limit.

**Returns**: {Promise<object>} - Updated order lobby with users and basic user fields.

<!-- DOCGEN:END editUsersInOrderLobby -->

<!-- DOCGEN:START getAllActiveOrderLobbiesByBusinessId -->

### getAllActiveOrderLobbiesByBusinessId

**Description**: Get all active order lobbies for a business including items and users.

**Parameters**:

- businessId: {string} - Business ID.

**Returns**: {Promise<object[]>} - Active order lobbies.

<!-- DOCGEN:END getAllActiveOrderLobbiesByBusinessId -->

<!-- DOCGEN:START getOrderLobbiesByUserId -->

### getOrderLobbiesByUserId

**Description**: Get active order lobbies that a user participates in including items and users.

**Parameters**:

- userId: {string} - User ID.

**Returns**: {Promise<object[]>} - Order lobbies.

<!-- DOCGEN:END getOrderLobbiesByUserId -->
