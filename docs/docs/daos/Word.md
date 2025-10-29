# Word DAO

<!-- DOCGEN:START createWord -->
### createWord

**Description**: Create a new word with its translations.

**Parameters**:
- word: {object}
- category_id: {string}
- translations: {object[]}

**Returns**: {Promise<object>} - Newly created word with translations.

<!-- DOCGEN:END createWord -->

<!-- DOCGEN:START updateWord -->
### updateWord

**Description**: Update an existing word and its translations.

**Parameters**:
- id: {string}
- word: {object}
- categories_id: {string}
- translations: {object[]}

**Returns**: {Promise<object>} - Updated word with translations.

<!-- DOCGEN:END updateWord -->

<!-- DOCGEN:START deleteWord -->
### deleteWord

**Description**: Delete a word by id.

**Parameters**:
- id: {string}

**Returns**: {Promise<object>} - Deleted word.

<!-- DOCGEN:END deleteWord -->

<!-- DOCGEN:START getWordById -->
### getWordById

**Description**: Get a word by id.

**Parameters**:
- id: {string}

**Returns**: {Promise<object>} - Found word.

<!-- DOCGEN:END getWordById -->

<!-- DOCGEN:START getAllWords -->
### getAllWords

**Description**: Get all words with their translations and categories.

**Returns**: {Promise<object[]>} - List of words with translations and categories.

<!-- DOCGEN:END getAllWords -->

<!-- DOCGEN:START getAllWordsByCategory -->
### getAllWordsByCategory

**Description**: Get all words by category.

**Parameters**:
- category: {string}

**Returns**: {Promise<object[]>} - List of words in the category.

<!-- DOCGEN:END getAllWordsByCategory -->

<!-- DOCGEN:START removeCategoryFromWord -->
### removeCategoryFromWord

**Description**: Remove category from a word.

**Parameters**:
- id: {string}

**Returns**: {Promise<object>} - Updated word.

<!-- DOCGEN:END removeCategoryFromWord -->

<!-- DOCGEN:START addCategoryToWord -->
### addCategoryToWord

**Description**: Add category to a word.

**Parameters**:
- id: {string}
- category: {string}

**Returns**: {Promise<object>} - Updated word.

<!-- DOCGEN:END addCategoryToWord -->

<!-- DOCGEN:START createWordBuy -->
### createWordBuy

**Description**: Create a word buy entry.

**Parameters**:
- args: {object}

**Returns**: {Promise<object>} - Created word buy.

<!-- DOCGEN:END createWordBuy -->

<!-- DOCGEN:START updateUserSubscription -->
### updateUserSubscription

<!-- DOCGEN:END updateUserSubscription -->

<!-- DOCGEN:START createPrice -->
### createPrice

<!-- DOCGEN:END createPrice -->

<!-- DOCGEN:START createWordBuySubscription -->
### createWordBuySubscription

<!-- DOCGEN:END createWordBuySubscription -->

<!-- DOCGEN:START addStripeSubToWordBuy -->
### addStripeSubToWordBuy

**Description**: Add Stripe subscription ID to word buy.

**Parameters**:
- id: {string}
- stripe_subscription_id: {string}

**Returns**: {Promise<object>} - Updated word buy.

<!-- DOCGEN:END addStripeSubToWordBuy -->

<!-- DOCGEN:START getWordBuyById -->
### getWordBuyById

**Description**: Get a word buy by id.

**Parameters**:
- id: {string}

**Returns**: {Promise<object>} - Found word buy.

<!-- DOCGEN:END getWordBuyById -->

<!-- DOCGEN:START getAllWordBuys -->
### getAllWordBuys

**Description**: Get all word buys.

**Returns**: {Promise<object[]>} - Found word buys.

<!-- DOCGEN:END getAllWordBuys -->

<!-- DOCGEN:START getAllWordBuysByWord -->
### getAllWordBuysByWord

**Description**: Get all word buys by word.

**Parameters**:
- word: {string}

**Returns**: {Promise<object[]>} - Found word buys.

<!-- DOCGEN:END getAllWordBuysByWord -->

<!-- DOCGEN:START getAllWordBuysByBusiness -->
### getAllWordBuysByBusiness

**Description**: * Get all word buys by business.

**Parameters**:
- business: {string}
- whereObj: {object}

**Returns**: {Promise<object[]>} - Found word buys.

<!-- DOCGEN:END getAllWordBuysByBusiness -->

<!-- DOCGEN:START getActiveWordBuysByBusiness -->
### getActiveWordBuysByBusiness

**Description**: Get active word buys by business.

**Parameters**:
- business: {string}

**Returns**: {Promise<object[]>} - Found word buys.

<!-- DOCGEN:END getActiveWordBuysByBusiness -->

<!-- DOCGEN:START deleteWordBuy -->
### deleteWordBuy

**Description**: Delete a word buy (soft delete).

**Parameters**:
- word_buy_id: {string}

**Returns**: {Promise<object>} - Updated word buy.

<!-- DOCGEN:END deleteWordBuy -->

<!-- DOCGEN:START updateWordBuy -->
### updateWordBuy

**Description**: Update a word buy.

**Parameters**:
- id: {string}
- data: {object}

**Returns**: {Promise<object>} - Updated word buy.

<!-- DOCGEN:END updateWordBuy -->

