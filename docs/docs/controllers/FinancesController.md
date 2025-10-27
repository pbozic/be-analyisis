# FinancesController Controller


<!-- DOCGEN:START createNewFinanceRecord -->
### createNewFinanceRecord

**Summary**: Addnew finance record

**Description**: Addsa new finance record to the database.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addFinances)

<!-- DOCGEN:END createNewFinanceRecord -->

<!-- DOCGEN:START getFinanceRecordById -->
### getFinanceRecordById

**Summary**: Getfinance record by ID

**Description**: Retrievesa finance record by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getFinancesById)

<!-- DOCGEN:END getFinanceRecordById -->

<!-- DOCGEN:START getFinanceRecordByBusinessId -->
### getFinanceRecordByBusinessId

**Summary**: Getfinance record for a company

**Description**: Retrievesthe finance record associated with a specific company by the company's business ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getFinanceRecordByBusinessId)

<!-- DOCGEN:END getFinanceRecordByBusinessId -->

<!-- DOCGEN:START updateFinanceRecord -->
### updateFinanceRecord

**Summary**: Updatefinance record

**Description**: Updatesan existing finance record by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateFinances)

<!-- DOCGEN:END updateFinanceRecord -->

<!-- DOCGEN:START updateAccountNumber -->
### updateAccountNumber

**Summary**: Updateaccount number

**Description**: Updatesthe account number for a specific finance record.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `- The new account number`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateAccountNumber)

<!-- DOCGEN:END updateAccountNumber -->

<!-- DOCGEN:START updateBankName -->
### updateBankName

**Summary**: Updatebank name

**Description**: Updatesthe bank name for a specific finance record.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `- The new bank name`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBankName)

<!-- DOCGEN:END updateBankName -->

<!-- DOCGEN:START updatePaymentPreferences -->
### updatePaymentPreferences

**Summary**: Updatepayment preferences

**Description**: Updatesthe payment preferences for a specific finance record.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `- The new payment preferences`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updatePaymentPreferences)

<!-- DOCGEN:END updatePaymentPreferences -->

<!-- DOCGEN:START deleteFinanceRecord -->
### deleteFinanceRecord

**Summary**: Deletefinance record

**Description**: Deletesa finance record by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deleteFinances)

<!-- DOCGEN:END deleteFinanceRecord -->

<!-- DOCGEN:START createNewFinanceRecord -->
### createNewFinanceRecord

**Summary**: Add new finance record

**Description**: Adds a new finance record to the database.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addFinances )

<!-- DOCGEN:END createNewFinanceRecord -->

<!-- DOCGEN:START getFinanceRecordById -->
### getFinanceRecordById

**Summary**: Get finance record by ID

**Description**: Retrieves a finance record by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getFinancesById )

<!-- DOCGEN:END getFinanceRecordById -->

<!-- DOCGEN:START getFinanceRecordByBusinessId -->
### getFinanceRecordByBusinessId

**Summary**: Get finance record for a company

**Description**: Retrieves the finance record associated with a specific company by the company's business ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getFinanceRecordByBusinessId )

<!-- DOCGEN:END getFinanceRecordByBusinessId -->

<!-- DOCGEN:START updateFinanceRecord -->
### updateFinanceRecord

**Summary**: Update finance record

**Description**: Updates an existing finance record by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateFinances )

<!-- DOCGEN:END updateFinanceRecord -->

<!-- DOCGEN:START updateAccountNumber -->
### updateAccountNumber

**Summary**: Update account number

**Description**: Updates the account number for a specific finance record.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `- The new account number`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateAccountNumber )

<!-- DOCGEN:END updateAccountNumber -->

<!-- DOCGEN:START updateBankName -->
### updateBankName

**Summary**: Update bank name

**Description**: Updates the bank name for a specific finance record.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `- The new bank name`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBankName )

<!-- DOCGEN:END updateBankName -->

<!-- DOCGEN:START updatePaymentPreferences -->
### updatePaymentPreferences

**Summary**: Update payment preferences

**Description**: Updates the payment preferences for a specific finance record.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `- The new payment preferences`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updatePaymentPreferences )

<!-- DOCGEN:END updatePaymentPreferences -->

<!-- DOCGEN:START deleteFinanceRecord -->
### deleteFinanceRecord

**Summary**: Delete finance record

**Description**: Deletes a finance record by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deleteFinances )

<!-- DOCGEN:END deleteFinanceRecord -->

<!-- DOCGEN:START createNewFinanceRecord -->
### createNewFinanceRecord

**Summary**: Add new finance record

**Description**: Adds a new finance record to the database.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addFinances )

<!-- DOCGEN:END createNewFinanceRecord -->

<!-- DOCGEN:START getFinanceRecordById -->
### getFinanceRecordById

**Summary**: Get finance record by ID

**Description**: Retrieves a finance record by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getFinancesById )

<!-- DOCGEN:END getFinanceRecordById -->

<!-- DOCGEN:START getFinanceRecordByBusinessId -->
### getFinanceRecordByBusinessId

**Summary**: Get finance record for a company

**Description**: Retrieves the finance record associated with a specific company by the company's business ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getFinanceRecordByBusinessId )

<!-- DOCGEN:END getFinanceRecordByBusinessId -->

<!-- DOCGEN:START updateFinanceRecord -->
### updateFinanceRecord

**Summary**: Update finance record

**Description**: Updates an existing finance record by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateFinances )

<!-- DOCGEN:END updateFinanceRecord -->

<!-- DOCGEN:START updateAccountNumber -->
### updateAccountNumber

**Summary**: Update account number

**Description**: Updates the account number for a specific finance record.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `- The new account number`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateAccountNumber )

<!-- DOCGEN:END updateAccountNumber -->

<!-- DOCGEN:START updateBankName -->
### updateBankName

**Summary**: Update bank name

**Description**: Updates the bank name for a specific finance record.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `- The new bank name`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBankName )

<!-- DOCGEN:END updateBankName -->

<!-- DOCGEN:START updatePaymentPreferences -->
### updatePaymentPreferences

**Summary**: Update payment preferences

**Description**: Updates the payment preferences for a specific finance record.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `- The new payment preferences`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updatePaymentPreferences )

<!-- DOCGEN:END updatePaymentPreferences -->

<!-- DOCGEN:START deleteFinanceRecord -->
### deleteFinanceRecord

**Summary**: Delete finance record

**Description**: Deletes a finance record by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deleteFinances )

<!-- DOCGEN:END deleteFinanceRecord -->

<!-- DOCGEN:START createNewFinanceRecord -->
### createNewFinanceRecord

**Summary**: Add new finance record

**Description**: Adds a new finance record to the database.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addFinances )

<!-- DOCGEN:END createNewFinanceRecord -->

<!-- DOCGEN:START getFinanceRecordById -->
### getFinanceRecordById

**Summary**: Get finance record by ID

**Description**: Retrieves a finance record by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getFinancesById )

<!-- DOCGEN:END getFinanceRecordById -->

<!-- DOCGEN:START getFinanceRecordByBusinessId -->
### getFinanceRecordByBusinessId

**Summary**: Get finance record for a company

**Description**: Retrieves the finance record associated with a specific company by the company's business ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getFinanceRecordByBusinessId )

<!-- DOCGEN:END getFinanceRecordByBusinessId -->

<!-- DOCGEN:START updateFinanceRecord -->
### updateFinanceRecord

**Summary**: Update finance record

**Description**: Updates an existing finance record by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateFinances )

<!-- DOCGEN:END updateFinanceRecord -->

<!-- DOCGEN:START updateAccountNumber -->
### updateAccountNumber

**Summary**: Update account number

**Description**: Updates the account number for a specific finance record.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `- The new account number`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateAccountNumber )

<!-- DOCGEN:END updateAccountNumber -->

<!-- DOCGEN:START updateBankName -->
### updateBankName

**Summary**: Update bank name

**Description**: Updates the bank name for a specific finance record.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `- The new bank name`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBankName )

<!-- DOCGEN:END updateBankName -->

<!-- DOCGEN:START updatePaymentPreferences -->
### updatePaymentPreferences

**Summary**: Update payment preferences

**Description**: Updates the payment preferences for a specific finance record.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `- The new payment preferences`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updatePaymentPreferences )

<!-- DOCGEN:END updatePaymentPreferences -->

<!-- DOCGEN:START deleteFinanceRecord -->
### deleteFinanceRecord

**Summary**: Delete finance record

**Description**: Deletes a finance record by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deleteFinances )

<!-- DOCGEN:END deleteFinanceRecord -->

<!-- DOCGEN:START createNewFinanceRecord -->
### createNewFinanceRecord

**Summary**: Add new finance record

**Description**: Adds a new finance record to the database.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addFinances )

<!-- DOCGEN:END createNewFinanceRecord -->

<!-- DOCGEN:START getFinanceRecordById -->
### getFinanceRecordById

**Summary**: Get finance record by ID

**Description**: Retrieves a finance record by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getFinancesById )

<!-- DOCGEN:END getFinanceRecordById -->

<!-- DOCGEN:START getFinanceRecordByBusinessId -->
### getFinanceRecordByBusinessId

**Summary**: Get finance record for a company

**Description**: Retrieves the finance record associated with a specific company by the company's business ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getFinanceRecordByBusinessId )

<!-- DOCGEN:END getFinanceRecordByBusinessId -->

<!-- DOCGEN:START updateFinanceRecord -->
### updateFinanceRecord

**Summary**: Update finance record

**Description**: Updates an existing finance record by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateFinances )

<!-- DOCGEN:END updateFinanceRecord -->

<!-- DOCGEN:START updateAccountNumber -->
### updateAccountNumber

**Summary**: Update account number

**Description**: Updates the account number for a specific finance record.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `- The new account number`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateAccountNumber )

<!-- DOCGEN:END updateAccountNumber -->

<!-- DOCGEN:START updateBankName -->
### updateBankName

**Summary**: Update bank name

**Description**: Updates the bank name for a specific finance record.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `- The new bank name`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBankName )

<!-- DOCGEN:END updateBankName -->

<!-- DOCGEN:START updatePaymentPreferences -->
### updatePaymentPreferences

**Summary**: Update payment preferences

**Description**: Updates the payment preferences for a specific finance record.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `- The new payment preferences`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updatePaymentPreferences )

<!-- DOCGEN:END updatePaymentPreferences -->

<!-- DOCGEN:START deleteFinanceRecord -->
### deleteFinanceRecord

**Summary**: Delete finance record

**Description**: Deletes a finance record by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deleteFinances )

<!-- DOCGEN:END deleteFinanceRecord -->

<!-- DOCGEN:START createNewFinanceRecord -->
### createNewFinanceRecord

**Summary**: Add new finance record

**Description**: Adds a new finance record to the database.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addFinances )

<!-- DOCGEN:END createNewFinanceRecord -->

<!-- DOCGEN:START getFinanceRecordById -->
### getFinanceRecordById

**Summary**: Get finance record by ID

**Description**: Retrieves a finance record by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getFinancesById )

<!-- DOCGEN:END getFinanceRecordById -->

<!-- DOCGEN:START getFinanceRecordByBusinessId -->
### getFinanceRecordByBusinessId

**Summary**: Get finance record for a company

**Description**: Retrieves the finance record associated with a specific company by the company's business ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getFinanceRecordByBusinessId )

<!-- DOCGEN:END getFinanceRecordByBusinessId -->

<!-- DOCGEN:START updateFinanceRecord -->
### updateFinanceRecord

**Summary**: Update finance record

**Description**: Updates an existing finance record by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateFinances )

<!-- DOCGEN:END updateFinanceRecord -->

<!-- DOCGEN:START updateAccountNumber -->
### updateAccountNumber

**Summary**: Update account number

**Description**: Updates the account number for a specific finance record.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `- The new account number`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateAccountNumber )

<!-- DOCGEN:END updateAccountNumber -->

<!-- DOCGEN:START updateBankName -->
### updateBankName

**Summary**: Update bank name

**Description**: Updates the bank name for a specific finance record.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `- The new bank name`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBankName )

<!-- DOCGEN:END updateBankName -->

<!-- DOCGEN:START updatePaymentPreferences -->
### updatePaymentPreferences

**Summary**: Update payment preferences

**Description**: Updates the payment preferences for a specific finance record.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `- The new payment preferences`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updatePaymentPreferences )

<!-- DOCGEN:END updatePaymentPreferences -->

<!-- DOCGEN:START deleteFinanceRecord -->
### deleteFinanceRecord

**Summary**: Delete finance record

**Description**: Deletes a finance record by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deleteFinances )

<!-- DOCGEN:END deleteFinanceRecord -->

<!-- DOCGEN:START createNewFinanceRecord -->
### createNewFinanceRecord

**Summary**: Add new finance record

**Description**: Adds a new finance record to the database.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addFinances )

<!-- DOCGEN:END createNewFinanceRecord -->

<!-- DOCGEN:START getFinanceRecordById -->
### getFinanceRecordById

**Summary**: Get finance record by ID

**Description**: Retrieves a finance record by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getFinancesById )

<!-- DOCGEN:END getFinanceRecordById -->

<!-- DOCGEN:START getFinanceRecordByBusinessId -->
### getFinanceRecordByBusinessId

**Summary**: Get finance record for a company

**Description**: Retrieves the finance record associated with a specific company by the company's business ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getFinanceRecordByBusinessId )

<!-- DOCGEN:END getFinanceRecordByBusinessId -->

<!-- DOCGEN:START updateFinanceRecord -->
### updateFinanceRecord

**Summary**: Update finance record

**Description**: Updates an existing finance record by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateFinances )

<!-- DOCGEN:END updateFinanceRecord -->

<!-- DOCGEN:START updateAccountNumber -->
### updateAccountNumber

**Summary**: Update account number

**Description**: Updates the account number for a specific finance record.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `- The new account number`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateAccountNumber )

<!-- DOCGEN:END updateAccountNumber -->

<!-- DOCGEN:START updateBankName -->
### updateBankName

**Summary**: Update bank name

**Description**: Updates the bank name for a specific finance record.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `- The new bank name`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBankName )

<!-- DOCGEN:END updateBankName -->

<!-- DOCGEN:START updatePaymentPreferences -->
### updatePaymentPreferences

**Summary**: Update payment preferences

**Description**: Updates the payment preferences for a specific finance record.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `- The new payment preferences`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updatePaymentPreferences )

<!-- DOCGEN:END updatePaymentPreferences -->

<!-- DOCGEN:START deleteFinanceRecord -->
### deleteFinanceRecord

**Summary**: Delete finance record

**Description**: Deletes a finance record by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deleteFinances )

<!-- DOCGEN:END deleteFinanceRecord -->

<!-- DOCGEN:START createNewFinanceRecord -->
### createNewFinanceRecord

**Summary**: Add new finance record

**Description**: Adds a new finance record to the database.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addFinances )

<!-- DOCGEN:END createNewFinanceRecord -->

<!-- DOCGEN:START getFinanceRecordById -->
### getFinanceRecordById

**Summary**: Get finance record by ID

**Description**: Retrieves a finance record by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getFinancesById )

<!-- DOCGEN:END getFinanceRecordById -->

<!-- DOCGEN:START getFinanceRecordByBusinessId -->
### getFinanceRecordByBusinessId

**Summary**: Get finance record for a company

**Description**: Retrieves the finance record associated with a specific company by the company's business ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getFinanceRecordByBusinessId )

<!-- DOCGEN:END getFinanceRecordByBusinessId -->

<!-- DOCGEN:START updateFinanceRecord -->
### updateFinanceRecord

**Summary**: Update finance record

**Description**: Updates an existing finance record by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateFinances )

<!-- DOCGEN:END updateFinanceRecord -->

<!-- DOCGEN:START updateAccountNumber -->
### updateAccountNumber

**Summary**: Update account number

**Description**: Updates the account number for a specific finance record.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `- The new account number`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateAccountNumber )

<!-- DOCGEN:END updateAccountNumber -->

<!-- DOCGEN:START updateBankName -->
### updateBankName

**Summary**: Update bank name

**Description**: Updates the bank name for a specific finance record.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `- The new bank name`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBankName )

<!-- DOCGEN:END updateBankName -->

<!-- DOCGEN:START updatePaymentPreferences -->
### updatePaymentPreferences

**Summary**: Update payment preferences

**Description**: Updates the payment preferences for a specific finance record.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `- The new payment preferences`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updatePaymentPreferences )

<!-- DOCGEN:END updatePaymentPreferences -->

<!-- DOCGEN:START deleteFinanceRecord -->
### deleteFinanceRecord

**Summary**: Delete finance record

**Description**: Deletes a finance record by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deleteFinances )

<!-- DOCGEN:END deleteFinanceRecord -->

<!-- DOCGEN:START createNewFinanceRecord -->
### createNewFinanceRecord

**Summary**: Add new finance record

**Description**: Adds a new finance record to the database.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addFinances )

<!-- DOCGEN:END createNewFinanceRecord -->

<!-- DOCGEN:START getFinanceRecordById -->
### getFinanceRecordById

**Summary**: Get finance record by ID

**Description**: Retrieves a finance record by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getFinancesById )

<!-- DOCGEN:END getFinanceRecordById -->

<!-- DOCGEN:START getFinanceRecordByBusinessId -->
### getFinanceRecordByBusinessId

**Summary**: Get finance record for a company

**Description**: Retrieves the finance record associated with a specific company by the company's business ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getFinanceRecordByBusinessId )

<!-- DOCGEN:END getFinanceRecordByBusinessId -->

<!-- DOCGEN:START updateFinanceRecord -->
### updateFinanceRecord

**Summary**: Update finance record

**Description**: Updates an existing finance record by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateFinances )

<!-- DOCGEN:END updateFinanceRecord -->

<!-- DOCGEN:START updateAccountNumber -->
### updateAccountNumber

**Summary**: Update account number

**Description**: Updates the account number for a specific finance record.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `- The new account number`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateAccountNumber )

<!-- DOCGEN:END updateAccountNumber -->

<!-- DOCGEN:START updateBankName -->
### updateBankName

**Summary**: Update bank name

**Description**: Updates the bank name for a specific finance record.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `- The new bank name`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBankName )

<!-- DOCGEN:END updateBankName -->

<!-- DOCGEN:START updatePaymentPreferences -->
### updatePaymentPreferences

**Summary**: Update payment preferences

**Description**: Updates the payment preferences for a specific finance record.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `- The new payment preferences`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updatePaymentPreferences )

<!-- DOCGEN:END updatePaymentPreferences -->

<!-- DOCGEN:START deleteFinanceRecord -->
### deleteFinanceRecord

**Summary**: Delete finance record

**Description**: Deletes a finance record by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deleteFinances )

<!-- DOCGEN:END deleteFinanceRecord -->

<!-- DOCGEN:START createNewFinanceRecord -->
### createNewFinanceRecord

**Summary**: Add new finance record

**Description**: Adds a new finance record to the database.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addFinances )

<!-- DOCGEN:END createNewFinanceRecord -->

<!-- DOCGEN:START getFinanceRecordById -->
### getFinanceRecordById

**Summary**: Get finance record by ID

**Description**: Retrieves a finance record by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getFinancesById )

<!-- DOCGEN:END getFinanceRecordById -->

<!-- DOCGEN:START getFinanceRecordByBusinessId -->
### getFinanceRecordByBusinessId

**Summary**: Get finance record for a company

**Description**: Retrieves the finance record associated with a specific company by the company's business ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getFinanceRecordByBusinessId )

<!-- DOCGEN:END getFinanceRecordByBusinessId -->

<!-- DOCGEN:START updateFinanceRecord -->
### updateFinanceRecord

**Summary**: Update finance record

**Description**: Updates an existing finance record by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateFinances )

<!-- DOCGEN:END updateFinanceRecord -->

<!-- DOCGEN:START updateAccountNumber -->
### updateAccountNumber

**Summary**: Update account number

**Description**: Updates the account number for a specific finance record.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `- The new account number`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateAccountNumber )

<!-- DOCGEN:END updateAccountNumber -->

<!-- DOCGEN:START updateBankName -->
### updateBankName

**Summary**: Update bank name

**Description**: Updates the bank name for a specific finance record.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `- The new bank name`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBankName )

<!-- DOCGEN:END updateBankName -->

<!-- DOCGEN:START updatePaymentPreferences -->
### updatePaymentPreferences

**Summary**: Update payment preferences

**Description**: Updates the payment preferences for a specific finance record.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `- The new payment preferences`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updatePaymentPreferences )

<!-- DOCGEN:END updatePaymentPreferences -->

<!-- DOCGEN:START deleteFinanceRecord -->
### deleteFinanceRecord

**Summary**: Delete finance record

**Description**: Deletes a finance record by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deleteFinances )

<!-- DOCGEN:END deleteFinanceRecord -->

<!-- DOCGEN:START createNewFinanceRecord -->
### createNewFinanceRecord

**Summary**: Add new finance record

**Description**: Adds a new finance record to the database.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addFinances )

<!-- DOCGEN:END createNewFinanceRecord -->

<!-- DOCGEN:START getFinanceRecordById -->
### getFinanceRecordById

**Summary**: Get finance record by ID

**Description**: Retrieves a finance record by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getFinancesById )

<!-- DOCGEN:END getFinanceRecordById -->

<!-- DOCGEN:START getFinanceRecordByBusinessId -->
### getFinanceRecordByBusinessId

**Summary**: Get finance record for a company

**Description**: Retrieves the finance record associated with a specific company by the company's business ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getFinanceRecordByBusinessId )

<!-- DOCGEN:END getFinanceRecordByBusinessId -->

<!-- DOCGEN:START updateFinanceRecord -->
### updateFinanceRecord

**Summary**: Update finance record

**Description**: Updates an existing finance record by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateFinances )

<!-- DOCGEN:END updateFinanceRecord -->

<!-- DOCGEN:START updateAccountNumber -->
### updateAccountNumber

**Summary**: Update account number

**Description**: Updates the account number for a specific finance record.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `- The new account number`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateAccountNumber )

<!-- DOCGEN:END updateAccountNumber -->

<!-- DOCGEN:START updateBankName -->
### updateBankName

**Summary**: Update bank name

**Description**: Updates the bank name for a specific finance record.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `- The new bank name`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBankName )

<!-- DOCGEN:END updateBankName -->

<!-- DOCGEN:START updatePaymentPreferences -->
### updatePaymentPreferences

**Summary**: Update payment preferences

**Description**: Updates the payment preferences for a specific finance record.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `- The new payment preferences`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updatePaymentPreferences )

<!-- DOCGEN:END updatePaymentPreferences -->

<!-- DOCGEN:START deleteFinanceRecord -->
### deleteFinanceRecord

**Summary**: Delete finance record

**Description**: Deletes a finance record by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deleteFinances )

<!-- DOCGEN:END deleteFinanceRecord -->

<!-- DOCGEN:START createNewFinanceRecord -->
### createNewFinanceRecord

**Summary**: Add new finance record

**Description**: Adds a new finance record to the database.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addFinances )

<!-- DOCGEN:END createNewFinanceRecord -->

<!-- DOCGEN:START getFinanceRecordById -->
### getFinanceRecordById

**Summary**: Get finance record by ID

**Description**: Retrieves a finance record by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getFinancesById )

<!-- DOCGEN:END getFinanceRecordById -->

<!-- DOCGEN:START getFinanceRecordByBusinessId -->
### getFinanceRecordByBusinessId

**Summary**: Get finance record for a company

**Description**: Retrieves the finance record associated with a specific company by the company's business ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getFinanceRecordByBusinessId )

<!-- DOCGEN:END getFinanceRecordByBusinessId -->

<!-- DOCGEN:START updateFinanceRecord -->
### updateFinanceRecord

**Summary**: Update finance record

**Description**: Updates an existing finance record by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateFinances )

<!-- DOCGEN:END updateFinanceRecord -->

<!-- DOCGEN:START updateAccountNumber -->
### updateAccountNumber

**Summary**: Update account number

**Description**: Updates the account number for a specific finance record.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `- The new account number`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateAccountNumber )

<!-- DOCGEN:END updateAccountNumber -->

<!-- DOCGEN:START updateBankName -->
### updateBankName

**Summary**: Update bank name

**Description**: Updates the bank name for a specific finance record.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `- The new bank name`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBankName )

<!-- DOCGEN:END updateBankName -->

<!-- DOCGEN:START updatePaymentPreferences -->
### updatePaymentPreferences

**Summary**: Update payment preferences

**Description**: Updates the payment preferences for a specific finance record.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `- The new payment preferences`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updatePaymentPreferences )

<!-- DOCGEN:END updatePaymentPreferences -->

<!-- DOCGEN:START deleteFinanceRecord -->
### deleteFinanceRecord

**Summary**: Delete finance record

**Description**: Deletes a finance record by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deleteFinances )

<!-- DOCGEN:END deleteFinanceRecord -->

<!-- DOCGEN:START createNewFinanceRecord -->
### createNewFinanceRecord

**Summary**: Add new finance record

**Description**: Adds a new finance record to the database.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addFinances )

<!-- DOCGEN:END createNewFinanceRecord -->

<!-- DOCGEN:START getFinanceRecordById -->
### getFinanceRecordById

**Summary**: Get finance record by ID

**Description**: Retrieves a finance record by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getFinancesById )

<!-- DOCGEN:END getFinanceRecordById -->

<!-- DOCGEN:START getFinanceRecordByBusinessId -->
### getFinanceRecordByBusinessId

**Summary**: Get finance record for a company

**Description**: Retrieves the finance record associated with a specific company by the company's business ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getFinanceRecordByBusinessId )

<!-- DOCGEN:END getFinanceRecordByBusinessId -->

<!-- DOCGEN:START updateFinanceRecord -->
### updateFinanceRecord

**Summary**: Update finance record

**Description**: Updates an existing finance record by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateFinances )

<!-- DOCGEN:END updateFinanceRecord -->

<!-- DOCGEN:START updateAccountNumber -->
### updateAccountNumber

**Summary**: Update account number

**Description**: Updates the account number for a specific finance record.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `- The new account number`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateAccountNumber )

<!-- DOCGEN:END updateAccountNumber -->

<!-- DOCGEN:START updateBankName -->
### updateBankName

**Summary**: Update bank name

**Description**: Updates the bank name for a specific finance record.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `- The new bank name`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBankName )

<!-- DOCGEN:END updateBankName -->

<!-- DOCGEN:START updatePaymentPreferences -->
### updatePaymentPreferences

**Summary**: Update payment preferences

**Description**: Updates the payment preferences for a specific finance record.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `- The new payment preferences`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updatePaymentPreferences )

<!-- DOCGEN:END updatePaymentPreferences -->

<!-- DOCGEN:START deleteFinanceRecord -->
### deleteFinanceRecord

**Summary**: Delete finance record

**Description**: Deletes a finance record by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deleteFinances )

<!-- DOCGEN:END deleteFinanceRecord -->

<!-- DOCGEN:START createNewFinanceRecord -->
### createNewFinanceRecord

**Summary**: Add new finance record

**Description**: Adds a new finance record to the database.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addFinances )

<!-- DOCGEN:END createNewFinanceRecord -->

<!-- DOCGEN:START getFinanceRecordById -->
### getFinanceRecordById

**Summary**: Get finance record by ID

**Description**: Retrieves a finance record by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getFinancesById )

<!-- DOCGEN:END getFinanceRecordById -->

<!-- DOCGEN:START getFinanceRecordByBusinessId -->
### getFinanceRecordByBusinessId

**Summary**: Get finance record for a company

**Description**: Retrieves the finance record associated with a specific company by the company's business ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getFinanceRecordByBusinessId )

<!-- DOCGEN:END getFinanceRecordByBusinessId -->

<!-- DOCGEN:START updateFinanceRecord -->
### updateFinanceRecord

**Summary**: Update finance record

**Description**: Updates an existing finance record by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateFinances )

<!-- DOCGEN:END updateFinanceRecord -->

<!-- DOCGEN:START updateAccountNumber -->
### updateAccountNumber

**Summary**: Update account number

**Description**: Updates the account number for a specific finance record.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `- The new account number`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateAccountNumber )

<!-- DOCGEN:END updateAccountNumber -->

<!-- DOCGEN:START updateBankName -->
### updateBankName

**Summary**: Update bank name

**Description**: Updates the bank name for a specific finance record.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `- The new bank name`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBankName )

<!-- DOCGEN:END updateBankName -->

<!-- DOCGEN:START updatePaymentPreferences -->
### updatePaymentPreferences

**Summary**: Update payment preferences

**Description**: Updates the payment preferences for a specific finance record.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `- The new payment preferences`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updatePaymentPreferences )

<!-- DOCGEN:END updatePaymentPreferences -->

<!-- DOCGEN:START deleteFinanceRecord -->
### deleteFinanceRecord

**Summary**: Delete finance record

**Description**: Deletes a finance record by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deleteFinances )

<!-- DOCGEN:END deleteFinanceRecord -->

<!-- DOCGEN:START createNewFinanceRecord -->
### createNewFinanceRecord

**Summary**: Add new finance record

**Description**: Adds a new finance record to the database.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addFinances )

<!-- DOCGEN:END createNewFinanceRecord -->

<!-- DOCGEN:START getFinanceRecordById -->
### getFinanceRecordById

**Summary**: Get finance record by ID

**Description**: Retrieves a finance record by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getFinancesById )

<!-- DOCGEN:END getFinanceRecordById -->

<!-- DOCGEN:START getFinanceRecordByBusinessId -->
### getFinanceRecordByBusinessId

**Summary**: Get finance record for a company

**Description**: Retrieves the finance record associated with a specific company by the company's business ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getFinanceRecordByBusinessId )

<!-- DOCGEN:END getFinanceRecordByBusinessId -->

<!-- DOCGEN:START updateFinanceRecord -->
### updateFinanceRecord

**Summary**: Update finance record

**Description**: Updates an existing finance record by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateFinances )

<!-- DOCGEN:END updateFinanceRecord -->

<!-- DOCGEN:START updateAccountNumber -->
### updateAccountNumber

**Summary**: Update account number

**Description**: Updates the account number for a specific finance record.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `- The new account number`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateAccountNumber )

<!-- DOCGEN:END updateAccountNumber -->

<!-- DOCGEN:START updateBankName -->
### updateBankName

**Summary**: Update bank name

**Description**: Updates the bank name for a specific finance record.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `- The new bank name`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBankName )

<!-- DOCGEN:END updateBankName -->

<!-- DOCGEN:START updatePaymentPreferences -->
### updatePaymentPreferences

**Summary**: Update payment preferences

**Description**: Updates the payment preferences for a specific finance record.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `- The new payment preferences`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updatePaymentPreferences )

<!-- DOCGEN:END updatePaymentPreferences -->

<!-- DOCGEN:START deleteFinanceRecord -->
### deleteFinanceRecord

**Summary**: Delete finance record

**Description**: Deletes a finance record by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deleteFinances )

<!-- DOCGEN:END deleteFinanceRecord -->

<!-- DOCGEN:START createNewFinanceRecord -->
### createNewFinanceRecord

**Summary**: Add new finance record

**Description**: Adds a new finance record to the database.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addFinances )

<!-- DOCGEN:END createNewFinanceRecord -->

<!-- DOCGEN:START getFinanceRecordById -->
### getFinanceRecordById

**Summary**: Get finance record by ID

**Description**: Retrieves a finance record by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getFinancesById )

<!-- DOCGEN:END getFinanceRecordById -->

<!-- DOCGEN:START getFinanceRecordByBusinessId -->
### getFinanceRecordByBusinessId

**Summary**: Get finance record for a company

**Description**: Retrieves the finance record associated with a specific company by the company's business ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getFinanceRecordByBusinessId )

<!-- DOCGEN:END getFinanceRecordByBusinessId -->

<!-- DOCGEN:START updateFinanceRecord -->
### updateFinanceRecord

**Summary**: Update finance record

**Description**: Updates an existing finance record by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateFinances )

<!-- DOCGEN:END updateFinanceRecord -->

<!-- DOCGEN:START updateAccountNumber -->
### updateAccountNumber

**Summary**: Update account number

**Description**: Updates the account number for a specific finance record.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `- The new account number`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateAccountNumber )

<!-- DOCGEN:END updateAccountNumber -->

<!-- DOCGEN:START updateBankName -->
### updateBankName

**Summary**: Update bank name

**Description**: Updates the bank name for a specific finance record.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `- The new bank name`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBankName )

<!-- DOCGEN:END updateBankName -->

<!-- DOCGEN:START updatePaymentPreferences -->
### updatePaymentPreferences

**Summary**: Update payment preferences

**Description**: Updates the payment preferences for a specific finance record.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `- The new payment preferences`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updatePaymentPreferences )

<!-- DOCGEN:END updatePaymentPreferences -->

<!-- DOCGEN:START deleteFinanceRecord -->
### deleteFinanceRecord

**Summary**: Delete finance record

**Description**: Deletes a finance record by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deleteFinances )

<!-- DOCGEN:END deleteFinanceRecord -->

<!-- DOCGEN:START createNewFinanceRecord -->
### createNewFinanceRecord

**Summary**: Add new finance record

**Description**: Adds a new finance record to the database.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addFinances )

<!-- DOCGEN:END createNewFinanceRecord -->

<!-- DOCGEN:START getFinanceRecordById -->
### getFinanceRecordById

**Summary**: Get finance record by ID

**Description**: Retrieves a finance record by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getFinancesById )

<!-- DOCGEN:END getFinanceRecordById -->

<!-- DOCGEN:START getFinanceRecordByBusinessId -->
### getFinanceRecordByBusinessId

**Summary**: Get finance record for a company

**Description**: Retrieves the finance record associated with a specific company by the company's business ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getFinanceRecordByBusinessId )

<!-- DOCGEN:END getFinanceRecordByBusinessId -->

<!-- DOCGEN:START updateFinanceRecord -->
### updateFinanceRecord

**Summary**: Update finance record

**Description**: Updates an existing finance record by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateFinances )

<!-- DOCGEN:END updateFinanceRecord -->

<!-- DOCGEN:START updateAccountNumber -->
### updateAccountNumber

**Summary**: Update account number

**Description**: Updates the account number for a specific finance record.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `- The new account number`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateAccountNumber )

<!-- DOCGEN:END updateAccountNumber -->

<!-- DOCGEN:START updateBankName -->
### updateBankName

**Summary**: Update bank name

**Description**: Updates the bank name for a specific finance record.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `- The new bank name`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBankName )

<!-- DOCGEN:END updateBankName -->

<!-- DOCGEN:START updatePaymentPreferences -->
### updatePaymentPreferences

**Summary**: Update payment preferences

**Description**: Updates the payment preferences for a specific finance record.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `- The new payment preferences`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updatePaymentPreferences )

<!-- DOCGEN:END updatePaymentPreferences -->

<!-- DOCGEN:START deleteFinanceRecord -->
### deleteFinanceRecord

**Summary**: Delete finance record

**Description**: Deletes a finance record by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deleteFinances )

<!-- DOCGEN:END deleteFinanceRecord -->

<!-- DOCGEN:START createNewFinanceRecord -->
### createNewFinanceRecord

**Summary**: Add new finance record

**Description**: Adds a new finance record to the database.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addFinances )

<!-- DOCGEN:END createNewFinanceRecord -->

<!-- DOCGEN:START getFinanceRecordById -->
### getFinanceRecordById

**Summary**: Get finance record by ID

**Description**: Retrieves a finance record by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getFinancesById )

<!-- DOCGEN:END getFinanceRecordById -->

<!-- DOCGEN:START getFinanceRecordByBusinessId -->
### getFinanceRecordByBusinessId

**Summary**: Get finance record for a company

**Description**: Retrieves the finance record associated with a specific company by the company's business ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getFinanceRecordByBusinessId )

<!-- DOCGEN:END getFinanceRecordByBusinessId -->

<!-- DOCGEN:START updateFinanceRecord -->
### updateFinanceRecord

**Summary**: Update finance record

**Description**: Updates an existing finance record by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateFinances )

<!-- DOCGEN:END updateFinanceRecord -->

<!-- DOCGEN:START updateAccountNumber -->
### updateAccountNumber

**Summary**: Update account number

**Description**: Updates the account number for a specific finance record.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `- The new account number`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateAccountNumber )

<!-- DOCGEN:END updateAccountNumber -->

<!-- DOCGEN:START updateBankName -->
### updateBankName

**Summary**: Update bank name

**Description**: Updates the bank name for a specific finance record.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `- The new bank name`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBankName )

<!-- DOCGEN:END updateBankName -->

<!-- DOCGEN:START updatePaymentPreferences -->
### updatePaymentPreferences

**Summary**: Update payment preferences

**Description**: Updates the payment preferences for a specific finance record.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `- The new payment preferences`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updatePaymentPreferences )

<!-- DOCGEN:END updatePaymentPreferences -->

<!-- DOCGEN:START deleteFinanceRecord -->
### deleteFinanceRecord

**Summary**: Delete finance record

**Description**: Deletes a finance record by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deleteFinances )

<!-- DOCGEN:END deleteFinanceRecord -->

<!-- DOCGEN:START createNewFinanceRecord -->
### createNewFinanceRecord

**Summary**: Add new finance record

**Description**: Adds a new finance record to the database.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addFinances )

<!-- DOCGEN:END createNewFinanceRecord -->

<!-- DOCGEN:START getFinanceRecordById -->
### getFinanceRecordById

**Summary**: Get finance record by ID

**Description**: Retrieves a finance record by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getFinancesById )

<!-- DOCGEN:END getFinanceRecordById -->

<!-- DOCGEN:START getFinanceRecordByBusinessId -->
### getFinanceRecordByBusinessId

**Summary**: Get finance record for a company

**Description**: Retrieves the finance record associated with a specific company by the company's business ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getFinanceRecordByBusinessId )

<!-- DOCGEN:END getFinanceRecordByBusinessId -->

<!-- DOCGEN:START updateFinanceRecord -->
### updateFinanceRecord

**Summary**: Update finance record

**Description**: Updates an existing finance record by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateFinances )

<!-- DOCGEN:END updateFinanceRecord -->

<!-- DOCGEN:START updateAccountNumber -->
### updateAccountNumber

**Summary**: Update account number

**Description**: Updates the account number for a specific finance record.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `- The new account number`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateAccountNumber )

<!-- DOCGEN:END updateAccountNumber -->

<!-- DOCGEN:START updateBankName -->
### updateBankName

**Summary**: Update bank name

**Description**: Updates the bank name for a specific finance record.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `- The new bank name`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBankName )

<!-- DOCGEN:END updateBankName -->

<!-- DOCGEN:START updatePaymentPreferences -->
### updatePaymentPreferences

**Summary**: Update payment preferences

**Description**: Updates the payment preferences for a specific finance record.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `- The new payment preferences`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updatePaymentPreferences )

<!-- DOCGEN:END updatePaymentPreferences -->

<!-- DOCGEN:START deleteFinanceRecord -->
### deleteFinanceRecord

**Summary**: Delete finance record

**Description**: Deletes a finance record by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deleteFinances )

<!-- DOCGEN:END deleteFinanceRecord -->

<!-- DOCGEN:START createNewFinanceRecord -->
### createNewFinanceRecord

**Summary**: Add new finance record

**Description**: Adds a new finance record to the database.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addFinances )

<!-- DOCGEN:END createNewFinanceRecord -->

<!-- DOCGEN:START getFinanceRecordById -->
### getFinanceRecordById

**Summary**: Get finance record by ID

**Description**: Retrieves a finance record by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getFinancesById )

<!-- DOCGEN:END getFinanceRecordById -->

<!-- DOCGEN:START getFinanceRecordByBusinessId -->
### getFinanceRecordByBusinessId

**Summary**: Get finance record for a company

**Description**: Retrieves the finance record associated with a specific company by the company's business ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getFinanceRecordByBusinessId )

<!-- DOCGEN:END getFinanceRecordByBusinessId -->

<!-- DOCGEN:START updateFinanceRecord -->
### updateFinanceRecord

**Summary**: Update finance record

**Description**: Updates an existing finance record by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateFinances )

<!-- DOCGEN:END updateFinanceRecord -->

<!-- DOCGEN:START updateAccountNumber -->
### updateAccountNumber

**Summary**: Update account number

**Description**: Updates the account number for a specific finance record.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `- The new account number`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateAccountNumber )

<!-- DOCGEN:END updateAccountNumber -->

<!-- DOCGEN:START updateBankName -->
### updateBankName

**Summary**: Update bank name

**Description**: Updates the bank name for a specific finance record.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `- The new bank name`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBankName )

<!-- DOCGEN:END updateBankName -->

<!-- DOCGEN:START updatePaymentPreferences -->
### updatePaymentPreferences

**Summary**: Update payment preferences

**Description**: Updates the payment preferences for a specific finance record.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `- The new payment preferences`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updatePaymentPreferences )

<!-- DOCGEN:END updatePaymentPreferences -->

<!-- DOCGEN:START deleteFinanceRecord -->
### deleteFinanceRecord

**Summary**: Delete finance record

**Description**: Deletes a finance record by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deleteFinances )

<!-- DOCGEN:END deleteFinanceRecord -->

<!-- DOCGEN:START createNewFinanceRecord -->
### createNewFinanceRecord

**Summary**: Add new finance record

**Description**: Adds a new finance record to the database.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addFinances )

<!-- DOCGEN:END createNewFinanceRecord -->

<!-- DOCGEN:START getFinanceRecordById -->
### getFinanceRecordById

**Summary**: Get finance record by ID

**Description**: Retrieves a finance record by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getFinancesById )

<!-- DOCGEN:END getFinanceRecordById -->

<!-- DOCGEN:START getFinanceRecordByBusinessId -->
### getFinanceRecordByBusinessId

**Summary**: Get finance record for a company

**Description**: Retrieves the finance record associated with a specific company by the company's business ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getFinanceRecordByBusinessId )

<!-- DOCGEN:END getFinanceRecordByBusinessId -->

<!-- DOCGEN:START updateFinanceRecord -->
### updateFinanceRecord

**Summary**: Update finance record

**Description**: Updates an existing finance record by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateFinances )

<!-- DOCGEN:END updateFinanceRecord -->

<!-- DOCGEN:START updateAccountNumber -->
### updateAccountNumber

**Summary**: Update account number

**Description**: Updates the account number for a specific finance record.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `- The new account number`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateAccountNumber )

<!-- DOCGEN:END updateAccountNumber -->

<!-- DOCGEN:START updateBankName -->
### updateBankName

**Summary**: Update bank name

**Description**: Updates the bank name for a specific finance record.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `- The new bank name`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBankName )

<!-- DOCGEN:END updateBankName -->

<!-- DOCGEN:START updatePaymentPreferences -->
### updatePaymentPreferences

**Summary**: Update payment preferences

**Description**: Updates the payment preferences for a specific finance record.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `- The new payment preferences`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updatePaymentPreferences )

<!-- DOCGEN:END updatePaymentPreferences -->

<!-- DOCGEN:START deleteFinanceRecord -->
### deleteFinanceRecord

**Summary**: Delete finance record

**Description**: Deletes a finance record by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deleteFinances )

<!-- DOCGEN:END deleteFinanceRecord -->

<!-- DOCGEN:START createNewFinanceRecord -->
### createNewFinanceRecord

**Summary**: Add new finance record

**Description**: Adds a new finance record to the database.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addFinances )

<!-- DOCGEN:END createNewFinanceRecord -->

<!-- DOCGEN:START getFinanceRecordById -->
### getFinanceRecordById

**Summary**: Get finance record by ID

**Description**: Retrieves a finance record by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getFinancesById )

<!-- DOCGEN:END getFinanceRecordById -->

<!-- DOCGEN:START getFinanceRecordByBusinessId -->
### getFinanceRecordByBusinessId

**Summary**: Get finance record for a company

**Description**: Retrieves the finance record associated with a specific company by the company's business ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getFinanceRecordByBusinessId )

<!-- DOCGEN:END getFinanceRecordByBusinessId -->

<!-- DOCGEN:START updateFinanceRecord -->
### updateFinanceRecord

**Summary**: Update finance record

**Description**: Updates an existing finance record by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateFinances )

<!-- DOCGEN:END updateFinanceRecord -->

<!-- DOCGEN:START updateAccountNumber -->
### updateAccountNumber

**Summary**: Update account number

**Description**: Updates the account number for a specific finance record.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `- The new account number`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateAccountNumber )

<!-- DOCGEN:END updateAccountNumber -->

<!-- DOCGEN:START updateBankName -->
### updateBankName

**Summary**: Update bank name

**Description**: Updates the bank name for a specific finance record.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `- The new bank name`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBankName )

<!-- DOCGEN:END updateBankName -->

<!-- DOCGEN:START updatePaymentPreferences -->
### updatePaymentPreferences

**Summary**: Update payment preferences

**Description**: Updates the payment preferences for a specific finance record.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `- The new payment preferences`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updatePaymentPreferences )

<!-- DOCGEN:END updatePaymentPreferences -->

<!-- DOCGEN:START deleteFinanceRecord -->
### deleteFinanceRecord

**Summary**: Delete finance record

**Description**: Deletes a finance record by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deleteFinances )

<!-- DOCGEN:END deleteFinanceRecord -->

<!-- DOCGEN:START createNewFinanceRecord -->
### createNewFinanceRecord

**Summary**: Add new finance record

**Description**: Adds a new finance record to the database.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addFinances )

<!-- DOCGEN:END createNewFinanceRecord -->

<!-- DOCGEN:START getFinanceRecordById -->
### getFinanceRecordById

**Summary**: Get finance record by ID

**Description**: Retrieves a finance record by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getFinancesById )

<!-- DOCGEN:END getFinanceRecordById -->

<!-- DOCGEN:START getFinanceRecordByBusinessId -->
### getFinanceRecordByBusinessId

**Summary**: Get finance record for a company

**Description**: Retrieves the finance record associated with a specific company by the company's business ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getFinanceRecordByBusinessId )

<!-- DOCGEN:END getFinanceRecordByBusinessId -->

<!-- DOCGEN:START updateFinanceRecord -->
### updateFinanceRecord

**Summary**: Update finance record

**Description**: Updates an existing finance record by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateFinances )

<!-- DOCGEN:END updateFinanceRecord -->

<!-- DOCGEN:START updateAccountNumber -->
### updateAccountNumber

**Summary**: Update account number

**Description**: Updates the account number for a specific finance record.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `- The new account number`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateAccountNumber )

<!-- DOCGEN:END updateAccountNumber -->

<!-- DOCGEN:START updateBankName -->
### updateBankName

**Summary**: Update bank name

**Description**: Updates the bank name for a specific finance record.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `- The new bank name`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBankName )

<!-- DOCGEN:END updateBankName -->

<!-- DOCGEN:START updatePaymentPreferences -->
### updatePaymentPreferences

**Summary**: Update payment preferences

**Description**: Updates the payment preferences for a specific finance record.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `- The new payment preferences`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updatePaymentPreferences )

<!-- DOCGEN:END updatePaymentPreferences -->

<!-- DOCGEN:START deleteFinanceRecord -->
### deleteFinanceRecord

**Summary**: Delete finance record

**Description**: Deletes a finance record by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deleteFinances )

<!-- DOCGEN:END deleteFinanceRecord -->

<!-- DOCGEN:START createNewFinanceRecord -->
### createNewFinanceRecord

**Summary**: Add new finance record

**Description**: Adds a new finance record to the database.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addFinances )

<!-- DOCGEN:END createNewFinanceRecord -->

<!-- DOCGEN:START getFinanceRecordById -->
### getFinanceRecordById

**Summary**: Get finance record by ID

**Description**: Retrieves a finance record by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getFinancesById )

<!-- DOCGEN:END getFinanceRecordById -->

<!-- DOCGEN:START getFinanceRecordByBusinessId -->
### getFinanceRecordByBusinessId

**Summary**: Get finance record for a company

**Description**: Retrieves the finance record associated with a specific company by the company's business ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getFinanceRecordByBusinessId )

<!-- DOCGEN:END getFinanceRecordByBusinessId -->

<!-- DOCGEN:START updateFinanceRecord -->
### updateFinanceRecord

**Summary**: Update finance record

**Description**: Updates an existing finance record by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateFinances )

<!-- DOCGEN:END updateFinanceRecord -->

<!-- DOCGEN:START updateAccountNumber -->
### updateAccountNumber

**Summary**: Update account number

**Description**: Updates the account number for a specific finance record.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `- The new account number`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateAccountNumber )

<!-- DOCGEN:END updateAccountNumber -->

<!-- DOCGEN:START updateBankName -->
### updateBankName

**Summary**: Update bank name

**Description**: Updates the bank name for a specific finance record.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `- The new bank name`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBankName )

<!-- DOCGEN:END updateBankName -->

<!-- DOCGEN:START updatePaymentPreferences -->
### updatePaymentPreferences

**Summary**: Update payment preferences

**Description**: Updates the payment preferences for a specific finance record.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `- The new payment preferences`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updatePaymentPreferences )

<!-- DOCGEN:END updatePaymentPreferences -->

<!-- DOCGEN:START deleteFinanceRecord -->
### deleteFinanceRecord

**Summary**: Delete finance record

**Description**: Deletes a finance record by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deleteFinances )

<!-- DOCGEN:END deleteFinanceRecord -->

<!-- DOCGEN:START createNewFinanceRecord -->
### createNewFinanceRecord

**Summary**: Add new finance record

**Description**: Adds a new finance record to the database.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addFinances )

<!-- DOCGEN:END createNewFinanceRecord -->

<!-- DOCGEN:START getFinanceRecordById -->
### getFinanceRecordById

**Summary**: Get finance record by ID

**Description**: Retrieves a finance record by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getFinancesById )

<!-- DOCGEN:END getFinanceRecordById -->

<!-- DOCGEN:START getFinanceRecordByBusinessId -->
### getFinanceRecordByBusinessId

**Summary**: Get finance record for a company

**Description**: Retrieves the finance record associated with a specific company by the company's business ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getFinanceRecordByBusinessId )

<!-- DOCGEN:END getFinanceRecordByBusinessId -->

<!-- DOCGEN:START updateFinanceRecord -->
### updateFinanceRecord

**Summary**: Update finance record

**Description**: Updates an existing finance record by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateFinances )

<!-- DOCGEN:END updateFinanceRecord -->

<!-- DOCGEN:START updateAccountNumber -->
### updateAccountNumber

**Summary**: Update account number

**Description**: Updates the account number for a specific finance record.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `- The new account number`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateAccountNumber )

<!-- DOCGEN:END updateAccountNumber -->

<!-- DOCGEN:START updateBankName -->
### updateBankName

**Summary**: Update bank name

**Description**: Updates the bank name for a specific finance record.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `- The new bank name`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBankName )

<!-- DOCGEN:END updateBankName -->

<!-- DOCGEN:START updatePaymentPreferences -->
### updatePaymentPreferences

**Summary**: Update payment preferences

**Description**: Updates the payment preferences for a specific finance record.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `- The new payment preferences`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updatePaymentPreferences )

<!-- DOCGEN:END updatePaymentPreferences -->

<!-- DOCGEN:START deleteFinanceRecord -->
### deleteFinanceRecord

**Summary**: Delete finance record

**Description**: Deletes a finance record by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deleteFinances )

<!-- DOCGEN:END deleteFinanceRecord -->

<!-- DOCGEN:START createNewFinanceRecord -->
### createNewFinanceRecord

**Summary**: Add new finance record

**Description**: Adds a new finance record to the database.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addFinances )

<!-- DOCGEN:END createNewFinanceRecord -->

<!-- DOCGEN:START getFinanceRecordById -->
### getFinanceRecordById

**Summary**: Get finance record by ID

**Description**: Retrieves a finance record by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getFinancesById )

<!-- DOCGEN:END getFinanceRecordById -->

<!-- DOCGEN:START getFinanceRecordByBusinessId -->
### getFinanceRecordByBusinessId

**Summary**: Get finance record for a company

**Description**: Retrieves the finance record associated with a specific company by the company's business ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getFinanceRecordByBusinessId )

<!-- DOCGEN:END getFinanceRecordByBusinessId -->

<!-- DOCGEN:START updateFinanceRecord -->
### updateFinanceRecord

**Summary**: Update finance record

**Description**: Updates an existing finance record by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateFinances )

<!-- DOCGEN:END updateFinanceRecord -->

<!-- DOCGEN:START updateAccountNumber -->
### updateAccountNumber

**Summary**: Update account number

**Description**: Updates the account number for a specific finance record.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `- The new account number`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateAccountNumber )

<!-- DOCGEN:END updateAccountNumber -->

<!-- DOCGEN:START updateBankName -->
### updateBankName

**Summary**: Update bank name

**Description**: Updates the bank name for a specific finance record.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `- The new bank name`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBankName )

<!-- DOCGEN:END updateBankName -->

<!-- DOCGEN:START updatePaymentPreferences -->
### updatePaymentPreferences

**Summary**: Update payment preferences

**Description**: Updates the payment preferences for a specific finance record.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `- The new payment preferences`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updatePaymentPreferences )

<!-- DOCGEN:END updatePaymentPreferences -->

<!-- DOCGEN:START deleteFinanceRecord -->
### deleteFinanceRecord

**Summary**: Delete finance record

**Description**: Deletes a finance record by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deleteFinances )

<!-- DOCGEN:END deleteFinanceRecord -->

<!-- DOCGEN:START createNewFinanceRecord -->
### createNewFinanceRecord

**Summary**: Add new finance record

**Description**: Adds a new finance record to the database.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addFinances )

<!-- DOCGEN:END createNewFinanceRecord -->

<!-- DOCGEN:START getFinanceRecordById -->
### getFinanceRecordById

**Summary**: Get finance record by ID

**Description**: Retrieves a finance record by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getFinancesById )

<!-- DOCGEN:END getFinanceRecordById -->

<!-- DOCGEN:START getFinanceRecordByBusinessId -->
### getFinanceRecordByBusinessId

**Summary**: Get finance record for a company

**Description**: Retrieves the finance record associated with a specific company by the company's business ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getFinanceRecordByBusinessId )

<!-- DOCGEN:END getFinanceRecordByBusinessId -->

<!-- DOCGEN:START updateFinanceRecord -->
### updateFinanceRecord

**Summary**: Update finance record

**Description**: Updates an existing finance record by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateFinances )

<!-- DOCGEN:END updateFinanceRecord -->

<!-- DOCGEN:START updateAccountNumber -->
### updateAccountNumber

**Summary**: Update account number

**Description**: Updates the account number for a specific finance record.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `- The new account number`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateAccountNumber )

<!-- DOCGEN:END updateAccountNumber -->

<!-- DOCGEN:START updateBankName -->
### updateBankName

**Summary**: Update bank name

**Description**: Updates the bank name for a specific finance record.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `- The new bank name`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBankName )

<!-- DOCGEN:END updateBankName -->

<!-- DOCGEN:START updatePaymentPreferences -->
### updatePaymentPreferences

**Summary**: Update payment preferences

**Description**: Updates the payment preferences for a specific finance record.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `- The new payment preferences`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updatePaymentPreferences )

<!-- DOCGEN:END updatePaymentPreferences -->

<!-- DOCGEN:START deleteFinanceRecord -->
### deleteFinanceRecord

**Summary**: Delete finance record

**Description**: Deletes a finance record by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deleteFinances )

<!-- DOCGEN:END deleteFinanceRecord -->

<!-- DOCGEN:START createNewFinanceRecord -->
### createNewFinanceRecord

**Summary**: Add new finance record

**Description**: Adds a new finance record to the database.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addFinances )

<!-- DOCGEN:END createNewFinanceRecord -->

<!-- DOCGEN:START getFinanceRecordById -->
### getFinanceRecordById

**Summary**: Get finance record by ID

**Description**: Retrieves a finance record by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getFinancesById )

<!-- DOCGEN:END getFinanceRecordById -->

<!-- DOCGEN:START getFinanceRecordByBusinessId -->
### getFinanceRecordByBusinessId

**Summary**: Get finance record for a company

**Description**: Retrieves the finance record associated with a specific company by the company's business ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getFinanceRecordByBusinessId )

<!-- DOCGEN:END getFinanceRecordByBusinessId -->

<!-- DOCGEN:START updateFinanceRecord -->
### updateFinanceRecord

**Summary**: Update finance record

**Description**: Updates an existing finance record by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateFinances )

<!-- DOCGEN:END updateFinanceRecord -->

<!-- DOCGEN:START updateAccountNumber -->
### updateAccountNumber

**Summary**: Update account number

**Description**: Updates the account number for a specific finance record.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `- The new account number`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateAccountNumber )

<!-- DOCGEN:END updateAccountNumber -->

<!-- DOCGEN:START updateBankName -->
### updateBankName

**Summary**: Update bank name

**Description**: Updates the bank name for a specific finance record.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `- The new bank name`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBankName )

<!-- DOCGEN:END updateBankName -->

<!-- DOCGEN:START updatePaymentPreferences -->
### updatePaymentPreferences

**Summary**: Update payment preferences

**Description**: Updates the payment preferences for a specific finance record.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `- The new payment preferences`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updatePaymentPreferences )

<!-- DOCGEN:END updatePaymentPreferences -->

<!-- DOCGEN:START deleteFinanceRecord -->
### deleteFinanceRecord

**Summary**: Delete finance record

**Description**: Deletes a finance record by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deleteFinances )

<!-- DOCGEN:END deleteFinanceRecord -->

<!-- DOCGEN:START createNewFinanceRecord -->
### createNewFinanceRecord

**Summary**: Add new finance record

**Description**: Adds a new finance record to the database.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addFinances )

<!-- DOCGEN:END createNewFinanceRecord -->

<!-- DOCGEN:START getFinanceRecordById -->
### getFinanceRecordById

**Summary**: Get finance record by ID

**Description**: Retrieves a finance record by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getFinancesById )

<!-- DOCGEN:END getFinanceRecordById -->

<!-- DOCGEN:START getFinanceRecordByBusinessId -->
### getFinanceRecordByBusinessId

**Summary**: Get finance record for a company

**Description**: Retrieves the finance record associated with a specific company by the company's business ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getFinanceRecordByBusinessId )

<!-- DOCGEN:END getFinanceRecordByBusinessId -->

<!-- DOCGEN:START updateFinanceRecord -->
### updateFinanceRecord

**Summary**: Update finance record

**Description**: Updates an existing finance record by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateFinances )

<!-- DOCGEN:END updateFinanceRecord -->

<!-- DOCGEN:START updateAccountNumber -->
### updateAccountNumber

**Summary**: Update account number

**Description**: Updates the account number for a specific finance record.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `- The new account number`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateAccountNumber )

<!-- DOCGEN:END updateAccountNumber -->

<!-- DOCGEN:START updateBankName -->
### updateBankName

**Summary**: Update bank name

**Description**: Updates the bank name for a specific finance record.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `- The new bank name`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBankName )

<!-- DOCGEN:END updateBankName -->

<!-- DOCGEN:START updatePaymentPreferences -->
### updatePaymentPreferences

**Summary**: Update payment preferences

**Description**: Updates the payment preferences for a specific finance record.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `- The new payment preferences`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updatePaymentPreferences )

<!-- DOCGEN:END updatePaymentPreferences -->

<!-- DOCGEN:START deleteFinanceRecord -->
### deleteFinanceRecord

**Summary**: Delete finance record

**Description**: Deletes a finance record by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deleteFinances )

<!-- DOCGEN:END deleteFinanceRecord -->

<!-- DOCGEN:START createNewFinanceRecord -->
### createNewFinanceRecord

**Summary**: Add new finance record

**Description**: Adds a new finance record to the database.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addFinances )

<!-- DOCGEN:END createNewFinanceRecord -->

<!-- DOCGEN:START getFinanceRecordById -->
### getFinanceRecordById

**Summary**: Get finance record by ID

**Description**: Retrieves a finance record by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getFinancesById )

<!-- DOCGEN:END getFinanceRecordById -->

<!-- DOCGEN:START getFinanceRecordByBusinessId -->
### getFinanceRecordByBusinessId

**Summary**: Get finance record for a company

**Description**: Retrieves the finance record associated with a specific company by the company's business ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getFinanceRecordByBusinessId )

<!-- DOCGEN:END getFinanceRecordByBusinessId -->

<!-- DOCGEN:START updateFinanceRecord -->
### updateFinanceRecord

**Summary**: Update finance record

**Description**: Updates an existing finance record by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateFinances )

<!-- DOCGEN:END updateFinanceRecord -->

<!-- DOCGEN:START updateAccountNumber -->
### updateAccountNumber

**Summary**: Update account number

**Description**: Updates the account number for a specific finance record.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `- The new account number`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateAccountNumber )

<!-- DOCGEN:END updateAccountNumber -->

<!-- DOCGEN:START updateBankName -->
### updateBankName

**Summary**: Update bank name

**Description**: Updates the bank name for a specific finance record.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `- The new bank name`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBankName )

<!-- DOCGEN:END updateBankName -->

<!-- DOCGEN:START updatePaymentPreferences -->
### updatePaymentPreferences

**Summary**: Update payment preferences

**Description**: Updates the payment preferences for a specific finance record.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `- The new payment preferences`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updatePaymentPreferences )

<!-- DOCGEN:END updatePaymentPreferences -->

<!-- DOCGEN:START deleteFinanceRecord -->
### deleteFinanceRecord

**Summary**: Delete finance record

**Description**: Deletes a finance record by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deleteFinances )

<!-- DOCGEN:END deleteFinanceRecord -->

<!-- DOCGEN:START createNewFinanceRecord -->
### createNewFinanceRecord

**Summary**: Add new finance record

**Description**: Adds a new finance record to the database.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addFinances )

<!-- DOCGEN:END createNewFinanceRecord -->

<!-- DOCGEN:START getFinanceRecordById -->
### getFinanceRecordById

**Summary**: Get finance record by ID

**Description**: Retrieves a finance record by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getFinancesById )

<!-- DOCGEN:END getFinanceRecordById -->

<!-- DOCGEN:START getFinanceRecordByBusinessId -->
### getFinanceRecordByBusinessId

**Summary**: Get finance record for a company

**Description**: Retrieves the finance record associated with a specific company by the company's business ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getFinanceRecordByBusinessId )

<!-- DOCGEN:END getFinanceRecordByBusinessId -->

<!-- DOCGEN:START updateFinanceRecord -->
### updateFinanceRecord

**Summary**: Update finance record

**Description**: Updates an existing finance record by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateFinances )

<!-- DOCGEN:END updateFinanceRecord -->

<!-- DOCGEN:START updateAccountNumber -->
### updateAccountNumber

**Summary**: Update account number

**Description**: Updates the account number for a specific finance record.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `- The new account number`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateAccountNumber )

<!-- DOCGEN:END updateAccountNumber -->

<!-- DOCGEN:START updateBankName -->
### updateBankName

**Summary**: Update bank name

**Description**: Updates the bank name for a specific finance record.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `- The new bank name`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBankName )

<!-- DOCGEN:END updateBankName -->

<!-- DOCGEN:START updatePaymentPreferences -->
### updatePaymentPreferences

**Summary**: Update payment preferences

**Description**: Updates the payment preferences for a specific finance record.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `- The new payment preferences`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updatePaymentPreferences )

<!-- DOCGEN:END updatePaymentPreferences -->

<!-- DOCGEN:START deleteFinanceRecord -->
### deleteFinanceRecord

**Summary**: Delete finance record

**Description**: Deletes a finance record by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deleteFinances )

<!-- DOCGEN:END deleteFinanceRecord -->

<!-- DOCGEN:START createNewFinanceRecord -->
### createNewFinanceRecord

**Summary**: Add new finance record

**Description**: Adds a new finance record to the database.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addFinances )

<!-- DOCGEN:END createNewFinanceRecord -->

<!-- DOCGEN:START getFinanceRecordById -->
### getFinanceRecordById

**Summary**: Get finance record by ID

**Description**: Retrieves a finance record by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getFinancesById )

<!-- DOCGEN:END getFinanceRecordById -->

<!-- DOCGEN:START getFinanceRecordByBusinessId -->
### getFinanceRecordByBusinessId

**Summary**: Get finance record for a company

**Description**: Retrieves the finance record associated with a specific company by the company's business ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getFinanceRecordByBusinessId )

<!-- DOCGEN:END getFinanceRecordByBusinessId -->

<!-- DOCGEN:START updateFinanceRecord -->
### updateFinanceRecord

**Summary**: Update finance record

**Description**: Updates an existing finance record by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateFinances )

<!-- DOCGEN:END updateFinanceRecord -->

<!-- DOCGEN:START updateAccountNumber -->
### updateAccountNumber

**Summary**: Update account number

**Description**: Updates the account number for a specific finance record.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `- The new account number`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateAccountNumber )

<!-- DOCGEN:END updateAccountNumber -->

<!-- DOCGEN:START updateBankName -->
### updateBankName

**Summary**: Update bank name

**Description**: Updates the bank name for a specific finance record.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `- The new bank name`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBankName )

<!-- DOCGEN:END updateBankName -->

<!-- DOCGEN:START updatePaymentPreferences -->
### updatePaymentPreferences

**Summary**: Update payment preferences

**Description**: Updates the payment preferences for a specific finance record.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `- The new payment preferences`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updatePaymentPreferences )

<!-- DOCGEN:END updatePaymentPreferences -->

<!-- DOCGEN:START deleteFinanceRecord -->
### deleteFinanceRecord

**Summary**: Delete finance record

**Description**: Deletes a finance record by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deleteFinances )

<!-- DOCGEN:END deleteFinanceRecord -->

<!-- DOCGEN:START createNewFinanceRecord -->
### createNewFinanceRecord

**Summary**: Add new finance record

**Description**: Adds a new finance record to the database.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addFinances )

<!-- DOCGEN:END createNewFinanceRecord -->

<!-- DOCGEN:START getFinanceRecordById -->
### getFinanceRecordById

**Summary**: Get finance record by ID

**Description**: Retrieves a finance record by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getFinancesById )

<!-- DOCGEN:END getFinanceRecordById -->

<!-- DOCGEN:START getFinanceRecordByBusinessId -->
### getFinanceRecordByBusinessId

**Summary**: Get finance record for a company

**Description**: Retrieves the finance record associated with a specific company by the company's business ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getFinanceRecordByBusinessId )

<!-- DOCGEN:END getFinanceRecordByBusinessId -->

<!-- DOCGEN:START updateFinanceRecord -->
### updateFinanceRecord

**Summary**: Update finance record

**Description**: Updates an existing finance record by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateFinances )

<!-- DOCGEN:END updateFinanceRecord -->

<!-- DOCGEN:START updateAccountNumber -->
### updateAccountNumber

**Summary**: Update account number

**Description**: Updates the account number for a specific finance record.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `- The new account number`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateAccountNumber )

<!-- DOCGEN:END updateAccountNumber -->

<!-- DOCGEN:START updateBankName -->
### updateBankName

**Summary**: Update bank name

**Description**: Updates the bank name for a specific finance record.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `- The new bank name`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBankName )

<!-- DOCGEN:END updateBankName -->

<!-- DOCGEN:START updatePaymentPreferences -->
### updatePaymentPreferences

**Summary**: Update payment preferences

**Description**: Updates the payment preferences for a specific finance record.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `- The new payment preferences`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updatePaymentPreferences )

<!-- DOCGEN:END updatePaymentPreferences -->

<!-- DOCGEN:START deleteFinanceRecord -->
### deleteFinanceRecord

**Summary**: Delete finance record

**Description**: Deletes a finance record by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deleteFinances )

<!-- DOCGEN:END deleteFinanceRecord -->

<!-- DOCGEN:START createNewFinanceRecord -->
### createNewFinanceRecord

**Summary**: Add new finance record

**Description**: Adds a new finance record to the database.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addFinances )

<!-- DOCGEN:END createNewFinanceRecord -->

<!-- DOCGEN:START getFinanceRecordById -->
### getFinanceRecordById

**Summary**: Get finance record by ID

**Description**: Retrieves a finance record by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getFinancesById )

<!-- DOCGEN:END getFinanceRecordById -->

<!-- DOCGEN:START getFinanceRecordByBusinessId -->
### getFinanceRecordByBusinessId

**Summary**: Get finance record for a company

**Description**: Retrieves the finance record associated with a specific company by the company's business ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getFinanceRecordByBusinessId )

<!-- DOCGEN:END getFinanceRecordByBusinessId -->

<!-- DOCGEN:START updateFinanceRecord -->
### updateFinanceRecord

**Summary**: Update finance record

**Description**: Updates an existing finance record by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateFinances )

<!-- DOCGEN:END updateFinanceRecord -->

<!-- DOCGEN:START updateAccountNumber -->
### updateAccountNumber

**Summary**: Update account number

**Description**: Updates the account number for a specific finance record.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `- The new account number`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateAccountNumber )

<!-- DOCGEN:END updateAccountNumber -->

<!-- DOCGEN:START updateBankName -->
### updateBankName

**Summary**: Update bank name

**Description**: Updates the bank name for a specific finance record.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `- The new bank name`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBankName )

<!-- DOCGEN:END updateBankName -->

<!-- DOCGEN:START updatePaymentPreferences -->
### updatePaymentPreferences

**Summary**: Update payment preferences

**Description**: Updates the payment preferences for a specific finance record.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `- The new payment preferences`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updatePaymentPreferences )

<!-- DOCGEN:END updatePaymentPreferences -->

<!-- DOCGEN:START deleteFinanceRecord -->
### deleteFinanceRecord

**Summary**: Delete finance record

**Description**: Deletes a finance record by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deleteFinances )

<!-- DOCGEN:END deleteFinanceRecord -->

<!-- DOCGEN:START createNewFinanceRecord -->
### createNewFinanceRecord

**Summary**: Add new finance record

**Description**: Adds a new finance record to the database.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addFinances )

<!-- DOCGEN:END createNewFinanceRecord -->

<!-- DOCGEN:START getFinanceRecordById -->
### getFinanceRecordById

**Summary**: Get finance record by ID

**Description**: Retrieves a finance record by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getFinancesById )

<!-- DOCGEN:END getFinanceRecordById -->

<!-- DOCGEN:START getFinanceRecordByBusinessId -->
### getFinanceRecordByBusinessId

**Summary**: Get finance record for a company

**Description**: Retrieves the finance record associated with a specific company by the company's business ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getFinanceRecordByBusinessId )

<!-- DOCGEN:END getFinanceRecordByBusinessId -->

<!-- DOCGEN:START updateFinanceRecord -->
### updateFinanceRecord

**Summary**: Update finance record

**Description**: Updates an existing finance record by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateFinances )

<!-- DOCGEN:END updateFinanceRecord -->

<!-- DOCGEN:START updateAccountNumber -->
### updateAccountNumber

**Summary**: Update account number

**Description**: Updates the account number for a specific finance record.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `- The new account number`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateAccountNumber )

<!-- DOCGEN:END updateAccountNumber -->

<!-- DOCGEN:START updateBankName -->
### updateBankName

**Summary**: Update bank name

**Description**: Updates the bank name for a specific finance record.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `- The new bank name`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBankName )

<!-- DOCGEN:END updateBankName -->

<!-- DOCGEN:START updatePaymentPreferences -->
### updatePaymentPreferences

**Summary**: Update payment preferences

**Description**: Updates the payment preferences for a specific finance record.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `- The new payment preferences`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updatePaymentPreferences )

<!-- DOCGEN:END updatePaymentPreferences -->

<!-- DOCGEN:START deleteFinanceRecord -->
### deleteFinanceRecord

**Summary**: Delete finance record

**Description**: Deletes a finance record by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deleteFinances )

<!-- DOCGEN:END deleteFinanceRecord -->

<!-- DOCGEN:START createNewFinanceRecord -->
### createNewFinanceRecord

**Summary**: Add new finance record

**Description**: Adds a new finance record to the database.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addFinances )

<!-- DOCGEN:END createNewFinanceRecord -->

<!-- DOCGEN:START getFinanceRecordById -->
### getFinanceRecordById

**Summary**: Get finance record by ID

**Description**: Retrieves a finance record by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getFinancesById )

<!-- DOCGEN:END getFinanceRecordById -->

<!-- DOCGEN:START getFinanceRecordByBusinessId -->
### getFinanceRecordByBusinessId

**Summary**: Get finance record for a company

**Description**: Retrieves the finance record associated with a specific company by the company's business ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Responses:**
- 200
- 404
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getFinanceRecordByBusinessId )

<!-- DOCGEN:END getFinanceRecordByBusinessId -->

<!-- DOCGEN:START updateFinanceRecord -->
### updateFinanceRecord

**Summary**: Update finance record

**Description**: Updates an existing finance record by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateFinances )

<!-- DOCGEN:END updateFinanceRecord -->

<!-- DOCGEN:START updateAccountNumber -->
### updateAccountNumber

**Summary**: Update account number

**Description**: Updates the account number for a specific finance record.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `- The new account number`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateAccountNumber )

<!-- DOCGEN:END updateAccountNumber -->

<!-- DOCGEN:START updateBankName -->
### updateBankName

**Summary**: Update bank name

**Description**: Updates the bank name for a specific finance record.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `- The new bank name`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBankName )

<!-- DOCGEN:END updateBankName -->

<!-- DOCGEN:START updatePaymentPreferences -->
### updatePaymentPreferences

**Summary**: Update payment preferences

**Description**: Updates the payment preferences for a specific finance record.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `- The new payment preferences`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updatePaymentPreferences )

<!-- DOCGEN:END updatePaymentPreferences -->

<!-- DOCGEN:START deleteFinanceRecord -->
### deleteFinanceRecord

**Summary**: Delete finance record

**Description**: Deletes a finance record by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | finance_id |  |

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deleteFinances )

<!-- DOCGEN:END deleteFinanceRecord -->
