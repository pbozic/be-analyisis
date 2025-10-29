# UserFavoriteBusiness DAO

<!-- DOCGEN:START addFavoriteBusiness -->
### addFavoriteBusiness

**Description**: Add a favorite business for a user.

**Parameters**:
- user_id: {string}
- business_id: {string}
- business_type: {string}

**Returns**: {Promise<UserFavoriteBusiness>}

<!-- DOCGEN:END addFavoriteBusiness -->

<!-- DOCGEN:START removeFavoriteBusiness -->
### removeFavoriteBusiness

**Description**: Remove a favorite business for a user.

**Parameters**:
- user_favorite_businesses_id: {string}

**Returns**: {Promise<UserFavoriteBusiness>}

<!-- DOCGEN:END removeFavoriteBusiness -->

<!-- DOCGEN:START getFavoriteBusinesses -->
### getFavoriteBusinesses

**Description**: Get favorite businesses for a user, optionally filtered by business type.

**Parameters**:
- user_id: {string}
- business_type: {string|null}

**Returns**: {Promise<UserFavoriteBusiness[]>}

<!-- DOCGEN:END getFavoriteBusinesses -->

