# BusinessUsersController Controller

<!-- DOCGEN:START getAllBusinessUsers -->

### getAllBusinessUsers

**Summary**: Get a list of all business users

**Description**: Returns a list of all business users.

**Responses:**

- 200 - successful operation
- 400 - Error occurred while obtaining the business user list

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`
- Status: 400, Type: `unknown`, Content-Type: `application/json`, Example: `The error object`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAllBusinessUsers)

<!-- DOCGEN:END getAllBusinessUsers -->

<!-- DOCGEN:START getBusinessUserByUserId -->

### getBusinessUserByUserId

**Summary**: Get a business user based on user ID

**Description**: Returns a business user.

**Responses:**

- 200 - successful operation
- 400 - Error occurred while obtaining the business user

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`
- Status: 400, Type: `unknown`, Content-Type: `application/json`, Example: `The error object`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessUsersByUserId)

<!-- DOCGEN:END getBusinessUserByUserId -->

<!-- DOCGEN:START getBusinessUsersByBusinessId -->

### getBusinessUsersByBusinessId

**Summary**: Get business users by business ID

**Description**: Returns a list of business users for a specific business ID.

**Parameters:**

| Name      | In   | Type        | Description |
| --------- | ---- | ----------- | ----------- |
| undefined | path | business_id |             |

**Responses:**

- 200 - successful operation
- 400 - Error occurred while obtaining the business user list

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`
- Status: 400, Type: `unknown`, Content-Type: `application/json`, Example: `The error object`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessUsersByBusinessId)

<!-- DOCGEN:END getBusinessUsersByBusinessId -->

<!-- DOCGEN:START getBusinessUsersByBusinessType -->

### getBusinessUsersByBusinessType

**Summary**: Get business users by business type

**Description**: Returns a list of business users for a specific business type.

**Parameters:**

| Name      | In   | Type | Description |
| --------- | ---- | ---- | ----------- |
| undefined | path | type |             |

**Responses:**

- 200 - successful operation
- 400 - Error occurred while obtaining the business user list

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`
- Status: 400, Type: `unknown`, Content-Type: `application/json`, Example: `The error object`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessUsersByBusinessType)

<!-- DOCGEN:END getBusinessUsersByBusinessType -->

<!-- DOCGEN:START getAllBusinessUsersForBusinessByCompanyRole -->

### getAllBusinessUsersForBusinessByCompanyRole

**Summary**: Get business users by business ID and company role

**Description**: Returns a list of business users for a specific business ID and company role.

**Parameters:**

| Name      | In   | Type         | Description |
| --------- | ---- | ------------ | ----------- |
| undefined | path | business_id  |             |
| undefined | path | company_role |             |

**Responses:**

- 200 - successful operation
- 400 - Error occurred while obtaining the business user list

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`
- Status: 400, Type: `unknown`, Content-Type: `application/json`, Example: `The error object`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAllBusinessUsersForBusinessByCompanyRole)

<!-- DOCGEN:END getAllBusinessUsersForBusinessByCompanyRole -->

<!-- DOCGEN:START createBusinessUser -->

### createBusinessUser

**Summary**: Create a new business user

**Description**: Creates a new business user and links it to a business.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**

- 201 - Business user created successfully. Returns the created business user.
- 400 - Error creating business user.

**Response Content:**

- Status: 201, Type: `unknown`, Content-Type: `application/json`
- Status: 400, Type: `unknown`, Content-Type: `application/json`, Example: `The error object`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createBusinessUser)

<!-- DOCGEN:END createBusinessUser -->

<!-- DOCGEN:START removeBusinessUser -->

### removeBusinessUser

**Summary**: Remove a business user

**Description**: Removes a business user by their ID.

**Parameters:**

| Name      | In   | Type              | Description |
| --------- | ---- | ----------------- | ----------- |
| undefined | path | business_users_id |             |

**Responses:**

- 200 - Business user removed successfully.
- 400 - Error removing business user.

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`
- Status: 400, Type: `unknown`, Content-Type: `application/json`, Example: `The error object`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/removeBusinessUser)

<!-- DOCGEN:END removeBusinessUser -->

<!-- DOCGEN:START addOperatingAddress -->

### addOperatingAddress

**Summary**: Adds an operating address to a business user

**Description**: This endpoint is used to add an operating address to a business user.

**Parameters:**

| Name      | In   | Type              | Description |
| --------- | ---- | ----------------- | ----------- |
| undefined | path | business_users_id |             |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**

- 200 - Address added successfully. Returns the updated business user's details.
- 400 - Error adding address.

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`
- Status: 400, Type: `unknown`, Content-Type: `application/json`, Example: `The error object`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addOperatingAddress)

<!-- DOCGEN:END addOperatingAddress -->

<!-- DOCGEN:START updateCompanyRole -->

### updateCompanyRole

**Summary**: Update the company role of a business user

**Description**: Updates the company role of a specific business user.

**Parameters:**

| Name      | In   | Type              | Description |
| --------- | ---- | ----------------- | ----------- |
| undefined | path | business_users_id |             |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**

- 200 - Company role updated successfully
- 400 - Error updating company role

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`
- Status: 400, Type: `unknown`, Content-Type: `application/json`, Example: `The error object`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateCompanyRole)

<!-- DOCGEN:END updateCompanyRole -->

<!-- DOCGEN:START updateBusinessUserOnlineStatus -->

### updateBusinessUserOnlineStatus

**Summary**: Update the online status of a business user

**Description**: Updates the online status of a specific business user.

**Parameters:**

| Name      | In   | Type              | Description |
| --------- | ---- | ----------------- | ----------- |
| undefined | path | business_users_id |             |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**

- 200 - Company role updated successfully
- 400 - Error updating company role

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`
- Status: 400, Type: `unknown`, Content-Type: `application/json`, Example: `The error object`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessUserOnlineStatus)

<!-- DOCGEN:END updateBusinessUserOnlineStatus -->

<!-- DOCGEN:START getBusinessGroupsByBusinessId -->

### getBusinessGroupsByBusinessId

**Summary**: Get nested group_users by business ID

**Description**: Retrieves a list of user_id:group_users pairs for a specific business.

**Parameters:**

| Name      | In   | Type        | Description |
| --------- | ---- | ----------- | ----------- |
| undefined | path | business_id |             |

**Responses:**

- 200 - Successful operation, returns an array containing all business_user user_ids for given business id and their respective child_users[]
- 400 - Error occurred while obtaining the menu list

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`
- Status: 400, Type: `unknown`, Content-Type: `application/json`, Example: `The error object`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getGroupUsersByParentId)

<!-- DOCGEN:END getBusinessGroupsByBusinessId -->

<!-- DOCGEN:START setAllowance -->

### setAllowance

**Summary**: Updates the allowance of the given child_user_id for the given service_type

**Description**: This endpoint is used to update the allowance of the given child_user_id for the given service_type

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**

- 200 - User allowance updated successfully. Returns the updated group_user.
- 400 - Error updating group user enabled status.

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`
- Status: 400, Type: `unknown`, Content-Type: `application/json`, Example: `The error object`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateChildUserAllowance)

<!-- DOCGEN:END setAllowance -->
