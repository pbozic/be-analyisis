# Ad DAO

<!-- DOCGEN:START listAds -->

### listAds

**Description**: List all ads including analytics.

**Returns**: {Promise<object[]>} - A promise resolving to an array of ads.

<!-- DOCGEN:END listAds -->

<!-- DOCGEN:START createAd -->

### createAd

**Description**: Create a new ad.

**Parameters**:

- ad: {object} - Ad payload to create.

**Returns**: {Promise<object>} - The created ad.

<!-- DOCGEN:END createAd -->

<!-- DOCGEN:START findAdByIdFull -->

### findAdByIdFull

**Description**: Find a single ad by ID, including analytics and image file data.

**Parameters**:

- id: {string} - Ad ID.

**Returns**: {Promise<object|null>} - The ad record or null if not found.

<!-- DOCGEN:END findAdByIdFull -->

<!-- DOCGEN:START findAdById -->

### findAdById

**Description**: Find a single ad by ID.

**Parameters**:

- id: {string} - Ad ID.

**Returns**: {Promise<object|null>} - The ad record or null if not found.

<!-- DOCGEN:END findAdById -->

<!-- DOCGEN:START editAd -->

### editAd

**Description**: Update an existing ad by ID.

**Parameters**:

- id: {string} - Ad ID.
- ad: {object} - Partial ad fields to update.

**Returns**: {Promise<object>} - The updated ad.

<!-- DOCGEN:END editAd -->

<!-- DOCGEN:START findAdsByUserId -->

### findAdsByUserId

**Description**: List ads created by a user.

**Parameters**:

- userId: {string} - User ID.

**Returns**: {Promise<object[]>} - Matching ads.

<!-- DOCGEN:END findAdsByUserId -->

<!-- DOCGEN:START findAdsByBusinessId -->

### findAdsByBusinessId

**Description**: List ads for a business.

**Parameters**:

- businessId: {string} - Business ID.

**Returns**: {Promise<object[]>} - Matching ads.

<!-- DOCGEN:END findAdsByBusinessId -->

<!-- DOCGEN:START findAdsByCategory -->

### findAdsByCategory

**Description**: List active ads by category (single or multiple).

**Parameters**:

- categories: {string|string[]} - Category or categories to filter by.

**Returns**: {Promise<object[]>} - Matching active ads.

<!-- DOCGEN:END findAdsByCategory -->

<!-- DOCGEN:START markAdInactive -->

### markAdInactive

**Description**: Mark an ad as inactive.

**Parameters**:

- id: {string} - Ad ID.

**Returns**: {Promise<object>} - The updated ad.

<!-- DOCGEN:END markAdInactive -->

<!-- DOCGEN:START markAdActive -->

### markAdActive

**Description**: Mark an ad as active.

**Parameters**:

- id: {string} - Ad ID.

**Returns**: {Promise<object>} - The updated ad.

<!-- DOCGEN:END markAdActive -->

<!-- DOCGEN:START deleteAd -->

### deleteAd

**Description**: Soft delete an ad by setting deleted_at.

**Parameters**:

- id: {string} - Ad ID.

**Returns**: {Promise<object>} - The updated ad.

<!-- DOCGEN:END deleteAd -->

<!-- DOCGEN:START listActiveAds -->

### listActiveAds

**Description**: List all active ads.

**Returns**: {Promise<object[]>} - Matching active ads.

<!-- DOCGEN:END listActiveAds -->
