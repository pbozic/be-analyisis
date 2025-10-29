# OrderLobbyItem DAO

<!-- DOCGEN:START areItemsEqual -->
### areItemsEqual

**Description**: Compare two order lobby items for equality of menu_item_id, customer_note, extras and sides (order-insensitive arrays).

**Parameters**:
- item1: {object} - First item.
- item2: {object} - Second item.

**Returns**: {boolean} - True if items are equal.

<!-- DOCGEN:END areItemsEqual -->

<!-- DOCGEN:START arraysEqual -->
### arraysEqual

<!-- DOCGEN:END arraysEqual -->

<!-- DOCGEN:START createOrderLobbyItem -->
### createOrderLobbyItem

**Description**: Create a new order lobby item.

**Parameters**:
- order_lobby_item_data: {object} - Item payload.

**Returns**: {Promise<object>} - Created item.

<!-- DOCGEN:END createOrderLobbyItem -->

<!-- DOCGEN:START updateOrderLobbyItem -->
### updateOrderLobbyItem

**Description**: Update an order lobby item by id.

**Parameters**:
- order_lobby_items_id: {string} - Order lobby item ID.
- order_lobby_items: {object} - Fields to update.

**Returns**: {Promise<object>} - Updated item.

<!-- DOCGEN:END updateOrderLobbyItem -->

<!-- DOCGEN:START updateOrderLobbyItemQuantity -->
### updateOrderLobbyItemQuantity

**Description**: Update the quantity of an order lobby item.

**Parameters**:
- order_lobby_items_id: {string} - Order lobby item ID.
- quantity: {number} - New quantity.

**Returns**: {Promise<object>} - Updated item.

<!-- DOCGEN:END updateOrderLobbyItemQuantity -->

<!-- DOCGEN:START getOrderLobbyItemsByLobbyId -->
### getOrderLobbyItemsByLobbyId

**Description**: Get order lobby items by lobby id.

**Parameters**:
- order_lobbies_id: {string} - Order lobby ID.

**Returns**: {Promise<object[]>} - Items.

<!-- DOCGEN:END getOrderLobbyItemsByLobbyId -->

<!-- DOCGEN:START getOrderLobbyItemsByLobbyAndUserId -->
### getOrderLobbyItemsByLobbyAndUserId

**Description**: Get order lobby items by lobby id and user id.

**Parameters**:
- order_lobbies_id: {string} - Order lobby ID.
- user_id: {string} - User ID.

**Returns**: {Promise<object[]>} - Items.

<!-- DOCGEN:END getOrderLobbyItemsByLobbyAndUserId -->

<!-- DOCGEN:START deleteOrderLobbyItem -->
### deleteOrderLobbyItem

**Description**: Delete an order lobby item by id.

**Parameters**:
- order_lobby_items_id: {string} - Order lobby item ID.

**Returns**: {Promise<object>} - Deleted item.

<!-- DOCGEN:END deleteOrderLobbyItem -->

<!-- DOCGEN:START deleteOrderLobbyItemsForUserInLobby -->
### deleteOrderLobbyItemsForUserInLobby

**Description**: Deletes all order lobby items for a specific user in a specific lobby

**Parameters**:
- user_id: {string} - The ID of the user
- order_lobbies_id: {string} - The ID of the order lobby

**Returns**: {Promise<Object>} - Result of the delete operation

<!-- DOCGEN:END deleteOrderLobbyItemsForUserInLobby -->

