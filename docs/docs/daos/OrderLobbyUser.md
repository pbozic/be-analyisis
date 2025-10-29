# OrderLobbyUser DAO

<!-- DOCGEN:START createOrderLobbyUser -->
### createOrderLobbyUser

**Description**: Creates a new order lobby user

**Parameters**:
- user_id: {string} - The ID of the user
- order_lobbies_id: {string} - The ID of the order lobby
- limit: {number} - The spending limit for the user in the lobby

**Returns**: {Promise<Object>} - Created order lobby user with user details

<!-- DOCGEN:END createOrderLobbyUser -->

<!-- DOCGEN:START getOrderLobbyUsersInOrderLobby -->
### getOrderLobbyUsersInOrderLobby

**Description**: Retrieves all users in a given order lobby

**Parameters**:
- order_lobbies_id: {string} - The ID of the order lobby

**Returns**: {Promise<Array>} - List of users in the order lobby

<!-- DOCGEN:END getOrderLobbyUsersInOrderLobby -->

<!-- DOCGEN:START updateOrderLobbyUserLimit -->
### updateOrderLobbyUserLimit

**Description**: Updates the spending limit for an order lobby user

**Parameters**:
- order_lobby_users_id: {string} - The ID of the order lobby user entry
- newLimit: {number} - The new spending limit

**Returns**: {Promise<Object>} - Updated order lobby user with user details

<!-- DOCGEN:END updateOrderLobbyUserLimit -->

<!-- DOCGEN:START deleteOrderLobbyUserWithItems -->
### deleteOrderLobbyUserWithItems

**Description**: Deletes an order lobby user and all their associated items in a transaction

**Parameters**:
- user_id: {string} - The ID of the user
- order_lobbies_id: {string} - The ID of the order lobby users entry

**Returns**: {Promise<Object>} - Result of the transaction containing deleted user and items

<!-- DOCGEN:END deleteOrderLobbyUserWithItems -->

