# ScoringPoints DAO

<!-- DOCGEN:START createScoringPoints -->

### createScoringPoints

**Description**: Create scoring points entry linked to business and optionally user and orders.

**Parameters**:

- business_id: {string} - Business ID.
- user_id: {string|null} - User ID (optional).
- delivery_order_id: {string|null} - Delivery order ID (optional).
- taxi_order_id: {string|null} - Taxi order ID (optional).
- points: {number} - Number of points (positive/negative if isPenalty).
- isPenalty: {boolean} - Whether points are a penalty.
- reason: {string} - Reason text.

**Returns**: {Promise<object>} - Created scoring_points row.

<!-- DOCGEN:END createScoringPoints -->

<!-- DOCGEN:START getScoringPointsById -->

### getScoringPointsById

**Description**: Get scoring points by id with related entities.

**Parameters**:

- scoring_points_id: {string} - Scoring points ID.

**Returns**: {Promise<object|null>} - Row or null.

<!-- DOCGEN:END getScoringPointsById -->

<!-- DOCGEN:START getScoringPointsByUserId -->

### getScoringPointsByUserId

**Description**: Get scoring points for a user ordered by delivery_order_id.

**Parameters**:

- user_id: {string} - User ID.

**Returns**: {Promise<object[]>} - Rows with related entities.

<!-- DOCGEN:END getScoringPointsByUserId -->

<!-- DOCGEN:START getScoringPointsByBusinessId -->

### getScoringPointsByBusinessId

**Description**: Get scoring points for a business ordered by delivery_order_id.

**Parameters**:

- business_id: {string} - Business ID.

**Returns**: {Promise<object[]>} - Rows with related entities.

<!-- DOCGEN:END getScoringPointsByBusinessId -->

<!-- DOCGEN:START updateScoringPoints -->

### updateScoringPoints

**Description**: Update a scoring points row and return with related entities.

**Parameters**:

- scoring_points_id: {string} - Scoring points ID.
- data: {object} - Fields to update.

**Returns**: {Promise<object>} - Updated row.

<!-- DOCGEN:END updateScoringPoints -->

<!-- DOCGEN:START deleteScoringPoints -->

### deleteScoringPoints

**Description**: Delete a scoring points row by id.

**Parameters**:

- scoring_points_id: {string} - Scoring points ID.

**Returns**: {Promise<void>} - Resolves when deleted.

<!-- DOCGEN:END deleteScoringPoints -->
