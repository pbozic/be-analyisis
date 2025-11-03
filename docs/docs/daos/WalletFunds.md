# WalletFunds DAO

<!-- DOCGEN:START createWalletFunds -->

### createWalletFunds

**Description**: Create wallet funds entry and associated transaction.

**Parameters**:

- user_id: {string}
- amount_cents: {number}
- charge_id: {string|null}
- transaction_type: {string}

**Returns**: {Promise<Transaction>}

<!-- DOCGEN:END createWalletFunds -->

<!-- DOCGEN:START getAvailableWalletFunds -->

### getAvailableWalletFunds

**Description**: Get available wallet funds for a user by type.

**Parameters**:

- userId: {string}
- funds_type: {string}

**Returns**: {Promise<WalletFunds[]>}

<!-- DOCGEN:END getAvailableWalletFunds -->

<!-- DOCGEN:START getReservedWalletFunds -->

### getReservedWalletFunds

**Description**: Get reserved wallet funds for a user by order and reserve type.

**Parameters**:

- userId: {string}
- order_id: {string}
- reserveType: {string}

**Returns**: {Promise<WalletFunds[]>}

<!-- DOCGEN:END getReservedWalletFunds -->

<!-- DOCGEN:START getAllReservedWalletFunds -->

### getAllReservedWalletFunds

**Description**: Get all reserved wallet funds.

**Returns**: {Promise<WalletFunds[]>}

<!-- DOCGEN:END getAllReservedWalletFunds -->

<!-- DOCGEN:START deleteWalletFunds -->

### deleteWalletFunds

**Description**: Delete wallet funds by ID.

**Parameters**:

- wallet_funds_id: {string}

<!-- DOCGEN:END deleteWalletFunds -->

<!-- DOCGEN:START subtractFunds -->

### subtractFunds

**Description**: Subtract funds from wallet funds entry and create associated transaction.

**Parameters**:

- walletFundsId: {string}
- amount: {number}
- order_id: {string|null}
- service_type: {string|null}

**Returns**: {Promise<WalletFunds>}

<!-- DOCGEN:END subtractFunds -->

<!-- DOCGEN:START reserveFunds -->

### reserveFunds

**Description**: Reserve funds from a wallet funds entry.

**Parameters**:

- walletFundsId: {string}
- reserveAmount: {number}
- orderId: {string}
- reserveType: {string}

**Returns**: {Promise<WalletFunds>}

<!-- DOCGEN:END reserveFunds -->

<!-- DOCGEN:START releaseFunds -->

### releaseFunds

**Description**: Release reserved funds back to available wallet funds.

**Parameters**:

- walletFundsId: {string}
- releaseAmount: {number}

<!-- DOCGEN:END releaseFunds -->

<!-- DOCGEN:START getAvailableWalletBalance -->

### getAvailableWalletBalance

**Description**: Get available wallet balance for a user.

**Parameters**:

- userId: {string}

**Returns**: {Promise<number>}

<!-- DOCGEN:END getAvailableWalletBalance -->

<!-- DOCGEN:START getAvailableWalletBalanceGroupedByType -->

### getAvailableWalletBalanceGroupedByType

**Description**: Get available wallet balance grouped by type for a user.

**Parameters**:

- userId: {string}

**Returns**: {Promise<object>} - Key-value pairs of type and balance.

<!-- DOCGEN:END getAvailableWalletBalanceGroupedByType -->

<!-- DOCGEN:START createCredit -->

### createCredit

**Description**: Create credit wallet funds entry.

**Parameters**:

- data: {object}

**Returns**: {Promise<WalletFunds>}

<!-- DOCGEN:END createCredit -->

<!-- DOCGEN:START convertCashbacksToCredit -->

### convertCashbacksToCredit

**Description**: Convert pending cashbacks to credit wallet funds entry.

**Parameters**:

- data: {object}
- pendingCashbacks: {object[]}
- expiryDate: {Date}

**Returns**: {Promise<WalletFunds>}

<!-- DOCGEN:END convertCashbacksToCredit -->

<!-- DOCGEN:START expireOutdatedCredits -->

### expireOutdatedCredits

**Description**: Expire outdated credits.

**Returns**: {Promise<number>} - The number of expired credits.

<!-- DOCGEN:END expireOutdatedCredits -->

<!-- DOCGEN:START findCreditsExpiringInDays -->

### findCreditsExpiringInDays

**Description**: Find credits expiring in a given number of days.

**Parameters**:

- days: {number}

**Returns**: {Promise<WalletFunds[]>}

<!-- DOCGEN:END findCreditsExpiringInDays -->

<!-- DOCGEN:START getAvailableCreditsByType -->

### getAvailableCreditsByType

**Description**: Get available credits by type for a user.

**Parameters**:

- userId: {string}
- type: {string}

**Returns**: {Promise<WalletFunds[]>}

<!-- DOCGEN:END getAvailableCreditsByType -->

<!-- DOCGEN:START getAvailableCreditsForOrder -->

### getAvailableCreditsForOrder

**Description**: Get available credits for order by type for a user.

**Parameters**:

- userId: {string}
- type: {string}

**Returns**: {Promise<WalletFunds[]>}

<!-- DOCGEN:END getAvailableCreditsForOrder -->

<!-- DOCGEN:START getReservedCredits -->

### getReservedCredits

**Description**: Get reserved credits for order by type for a user.

**Parameters**:

- userId: {string}
- orderId: {string}
- reserveType: {string}

**Returns**: {Promise<WalletFunds[]>}

<!-- DOCGEN:END getReservedCredits -->

<!-- DOCGEN:START getExpiredCredits -->

### getExpiredCredits

**Description**: Get expired credits for a user by type.

**Parameters**:

- userId: {string}
- type: {string}

**Returns**: {Promise<WalletFunds[]>}

<!-- DOCGEN:END getExpiredCredits -->
