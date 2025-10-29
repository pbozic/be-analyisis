# Finances DAO

<!-- DOCGEN:START addFinances -->
### addFinances

**Description**: Create a finances record.

**Parameters**:
- financeData: {object} - Finance payload (account_holder, account_number, etc.).

**Returns**: {Promise<object>} - Created finances.

<!-- DOCGEN:END addFinances -->

<!-- DOCGEN:START getFinancesByAccountNumber -->
### getFinancesByAccountNumber

**Description**: Find a finance record by account number.

**Parameters**:
- account_number: {string} - Account number.

**Returns**: {Promise<object|null>} - Finances or null.

<!-- DOCGEN:END getFinancesByAccountNumber -->

<!-- DOCGEN:START getFinancesById -->
### getFinancesById

**Description**: Get a finances record by id.

**Parameters**:
- finance_id: {string} - Finance ID.

**Returns**: {Promise<object|null>} - Finances or null.

<!-- DOCGEN:END getFinancesById -->

<!-- DOCGEN:START updateFinances -->
### updateFinances

**Description**: Update a finances record by id.

**Parameters**:
- finance_id: {string} - Finance ID.
- updateData: {object} - Fields to update.

**Returns**: {Promise<object>} - Updated finances.

<!-- DOCGEN:END updateFinances -->

<!-- DOCGEN:START updateAccountHolder -->
### updateAccountHolder

**Description**: Update the account holder name.

**Parameters**:
- finance_id: {string} - Finance ID.
- accountHolder: {string} - New account holder name.

**Returns**: {Promise<object>} - Updated finances.

<!-- DOCGEN:END updateAccountHolder -->

<!-- DOCGEN:START updateAccountNumber -->
### updateAccountNumber

**Description**: Update the account number.

**Parameters**:
- finance_id: {string} - Finance ID.
- accountNumber: {string} - Account number.

**Returns**: {Promise<object>} - Updated finances.

<!-- DOCGEN:END updateAccountNumber -->

<!-- DOCGEN:START updateBankName -->
### updateBankName

**Description**: Update the bank name.

**Parameters**:
- finance_id: {string} - Finance ID.
- bankName: {string} - Bank name.

**Returns**: {Promise<object>} - Updated finances.

<!-- DOCGEN:END updateBankName -->

<!-- DOCGEN:START updatePaymentPreferences -->
### updatePaymentPreferences

**Description**: Update the payment_preferences JSON field.

**Parameters**:
- finance_id: {string} - Finance ID.
- paymentPreferences: {object} - Preferences JSON.

**Returns**: {Promise<object>} - Updated finances.

<!-- DOCGEN:END updatePaymentPreferences -->

<!-- DOCGEN:START deleteFinances -->
### deleteFinances

**Description**: Delete a finances record by id.

**Parameters**:
- finance_id: {string} - Finance ID.

**Returns**: {Promise<object>} - Deleted finances.

<!-- DOCGEN:END deleteFinances -->

<!-- DOCGEN:START linkFinancesToBusiness -->
### linkFinancesToBusiness

**Description**: Link a finances record to a business.

**Parameters**:
- businessId: {string} - Business ID.
- financeId: {string} - Finance ID.

**Returns**: {Promise<object>} - Updated business.

<!-- DOCGEN:END linkFinancesToBusiness -->

<!-- DOCGEN:START unlinkFinancesFromBusiness -->
### unlinkFinancesFromBusiness

**Description**: Unlink finances from a business.

**Parameters**:
- businessId: {string} - Business ID.

**Returns**: {Promise<object>} - Updated business.

<!-- DOCGEN:END unlinkFinancesFromBusiness -->

<!-- DOCGEN:START getFinanceRecordByBusinessId -->
### getFinanceRecordByBusinessId

**Description**: Get finances for a given business id.

**Parameters**:
- business_id: {string} - Business ID.

**Returns**: {Promise<object|null>} - Finances or null.

<!-- DOCGEN:END getFinanceRecordByBusinessId -->

