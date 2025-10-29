# Product DAO

<!-- DOCGEN:START createProduct -->
### createProduct

**Description**: Create a local product record mirroring a Stripe product, if not already existing.

**Parameters**:
- product: {object} - Product payload (name, description, stripe_product_id, currency?).

**Returns**: {Promise<object>} - The existing or newly created product.

<!-- DOCGEN:END createProduct -->

<!-- DOCGEN:START createPrice -->
### createPrice

**Description**: Create a local price record mirroring a Stripe price, if not already existing.

**Parameters**:
- price: {object} - Price payload (amount, currency?, stripe_price_id, stripe_product_id).

**Returns**: {Promise<object>} - The existing or newly created price.

<!-- DOCGEN:END createPrice -->

<!-- DOCGEN:START getProductByStripeId -->
### getProductByStripeId

**Description**: Get a local product by Stripe product ID.

**Parameters**:
- stripe_product_id: {string} - Stripe product ID.

**Returns**: {Promise<object|null>} - The product or null.

<!-- DOCGEN:END getProductByStripeId -->

<!-- DOCGEN:START getPriceByStripeId -->
### getPriceByStripeId

**Description**: Get a local price by Stripe price ID.

**Parameters**:
- stripe_price_id: {string} - Stripe price ID.

**Returns**: {Promise<object|null>} - The price or null.

<!-- DOCGEN:END getPriceByStripeId -->

<!-- DOCGEN:START getProduct -->
### getProduct

**Description**: Get a local product by its local_product_id.

**Parameters**:
- product_id: {string} - Local product ID.

**Returns**: {Promise<object|null>} - The product or null.

<!-- DOCGEN:END getProduct -->

<!-- DOCGEN:START getPrice -->
### getPrice

**Description**: Get a local price by its local_price_id.

**Parameters**:
- price_id: {string} - Local price ID.

**Returns**: {Promise<object|null>} - The price or null.

<!-- DOCGEN:END getPrice -->

<!-- DOCGEN:START updateProductByStripeId -->
### updateProductByStripeId

**Description**: Update a local product's metadata by its Stripe product ID.

**Parameters**:
- stripe_product_id: {string} - Stripe product ID.
- product: {object} - Partial fields (name, description).

**Returns**: {Promise<object>} - The updated product.

<!-- DOCGEN:END updateProductByStripeId -->

<!-- DOCGEN:START updatePriceByStripeId -->
### updatePriceByStripeId

**Description**: Update a local price by its Stripe price ID.

**Parameters**:
- stripe_price_id: {string} - Stripe price ID.
- price: {object} - Partial fields (amount, currency?).

**Returns**: {Promise<object>} - The updated price.

<!-- DOCGEN:END updatePriceByStripeId -->

<!-- DOCGEN:START deleteProductByStripeId -->
### deleteProductByStripeId

**Description**: Delete a local product by its Stripe product ID.

**Parameters**:
- stripe_product_id: {string} - Stripe product ID.

**Returns**: {Promise<object>} - The deleted product.

<!-- DOCGEN:END deleteProductByStripeId -->

<!-- DOCGEN:START deletePriceByStripeId -->
### deletePriceByStripeId

**Description**: Delete a local price by its Stripe price ID.

**Parameters**:
- stripe_price_id: {string} - Stripe price ID.

**Returns**: {Promise<object>} - The deleted price.

<!-- DOCGEN:END deletePriceByStripeId -->

<!-- DOCGEN:START getPricesByProductId -->
### getPricesByProductId

**Description**: List local prices by local product ID.

**Parameters**:
- product_id: {string} - Local product ID.

**Returns**: {Promise<object[]>} - Array of prices.

<!-- DOCGEN:END getPricesByProductId -->

<!-- DOCGEN:START getPricesByStripeProductId -->
### getPricesByStripeProductId

**Description**: List local prices by Stripe product ID.

**Parameters**:
- stripe_product_id: {string} - Stripe product ID.

**Returns**: {Promise<object[]>} - Array of prices.

<!-- DOCGEN:END getPricesByStripeProductId -->

