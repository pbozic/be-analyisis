# FinancesController Controller

<!-- DOCGEN:START createNewFinanceRecord -->

### createNewFinanceRecord

**Summary**: Add new finance record

**Description**: Adds a new finance record to the database.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**

- 201 - Finance record added successfully
- 400 - Error adding finance record

**Response Content:**

- Status: 201, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addFinances)

<!-- DOCGEN:END createNewFinanceRecord -->

<!-- DOCGEN:START getFinanceRecordById -->

### getFinanceRecordById

**Summary**: Get finance record by ID

**Description**: Retrieves a finance record by its ID.

**Parameters:**

| Name      | In   | Type       | Description |
| --------- | ---- | ---------- | ----------- |
| undefined | path | finance_id |             |

**Responses:**

- 200 - Successful operation, returns finance record
- 404 - Finance record not found
- 400 - Error retrieving finance record

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getFinancesById)

<!-- DOCGEN:END getFinanceRecordById -->

<!-- DOCGEN:START getFinanceRecordByBusinessId -->

### getFinanceRecordByBusinessId

**Summary**: Get finance record for a company

**Description**: Retrieves the finance record associated with a specific company by the company's business ID.

**Parameters:**

| Name      | In   | Type        | Description |
| --------- | ---- | ----------- | ----------- |
| undefined | path | business_id |             |

**Responses:**

- 200 - Successful operation, returns finance record
- 404 - Finance record not found for the specified business
- 400 - Error retrieving finance record for the business

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getFinanceRecordByBusinessId)

<!-- DOCGEN:END getFinanceRecordByBusinessId -->

<!-- DOCGEN:START updateFinanceRecord -->

### updateFinanceRecord

**Summary**: Update finance record

**Description**: Updates an existing finance record by its ID.

**Parameters:**

| Name      | In   | Type       | Description |
| --------- | ---- | ---------- | ----------- |
| undefined | path | finance_id |             |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**

- 200 - Finance record updated successfully
- 400 - Error updating finance record

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateFinances)

<!-- DOCGEN:END updateFinanceRecord -->

<!-- DOCGEN:START updateAccountNumber -->

### updateAccountNumber

**Summary**: Update account number

**Description**: Updates the account number for a specific finance record.

**Parameters:**

| Name      | In   | Type       | Description |
| --------- | ---- | ---------- | ----------- |
| undefined | path | finance_id |             |

**Request Body:** (required)
Type: `application/json`
Content-Type: `- The new account number`

**Responses:**

- 200 - Account number updated successfully
- 400 - Error updating account number

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateAccountNumber)

<!-- DOCGEN:END updateAccountNumber -->

<!-- DOCGEN:START updateBankName -->

### updateBankName

**Summary**: Update bank name

**Description**: Updates the bank name for a specific finance record.

**Parameters:**

| Name      | In   | Type       | Description |
| --------- | ---- | ---------- | ----------- |
| undefined | path | finance_id |             |

**Request Body:** (required)
Type: `application/json`
Content-Type: `- The new bank name`

**Responses:**

- 200 - Bank name updated successfully
- 400 - Error updating bank name

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBankName)

<!-- DOCGEN:END updateBankName -->

<!-- DOCGEN:START updatePaymentPreferences -->

### updatePaymentPreferences

**Summary**: Update payment preferences

**Description**: Updates the payment preferences for a specific finance record.

**Parameters:**

| Name      | In   | Type       | Description |
| --------- | ---- | ---------- | ----------- |
| undefined | path | finance_id |             |

**Request Body:** (required)
Type: `application/json`
Content-Type: `- The new payment preferences`

**Responses:**

- 200 - Payment preferences updated successfully
- 400 - Error updating payment preferences

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updatePaymentPreferences)

<!-- DOCGEN:END updatePaymentPreferences -->

<!-- DOCGEN:START deleteFinanceRecord -->

### deleteFinanceRecord

**Summary**: Delete finance record

**Description**: Deletes a finance record by its ID.

**Parameters:**

| Name      | In   | Type       | Description |
| --------- | ---- | ---------- | ----------- |
| undefined | path | finance_id |             |

**Responses:**

- 200 - Finance record deleted successfully
- 400 - Error deleting finance record

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deleteFinances)

<!-- DOCGEN:END deleteFinanceRecord -->
