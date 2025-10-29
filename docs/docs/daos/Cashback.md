# Cashback DAO

<!-- DOCGEN:START createCashback -->
### createCashback

**Description**: Create a cashback entry.

**Parameters**:
- data: {object} - Cashback payload (user_id, amount, type, status, order links, etc.).

**Returns**: {Promise<object>} - Created cashback.

<!-- DOCGEN:END createCashback -->

<!-- DOCGEN:START getUserCashbackHistory -->
### getUserCashbackHistory

**Description**: Get a user's cashback history ordered by earned_at desc.

**Parameters**:
- user_id: {string} - User ID.

**Returns**: {Promise<object[]>} - Cashback entries with taxi/delivery order includes.

<!-- DOCGEN:END getUserCashbackHistory -->

<!-- DOCGEN:START getPendingUserCashbackByType -->
### getPendingUserCashbackByType

**Description**: Get pending cashback for a user by type ordered by earned_at asc.

**Parameters**:
- user_id: {string} - User ID.
- type: {string} - Cashback type (CASHBACK_TYPE enum).

**Returns**: {Promise<object[]>} - Pending cashback entries.

<!-- DOCGEN:END getPendingUserCashbackByType -->

