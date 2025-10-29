# BusinessUsers DAO

<!-- DOCGEN:START getAllBusinessUsers -->
### getAllBusinessUsers

**Description**: Get all business_user relations with included user and business.

**Returns**: {Promise<object[]>} - A promise resolving to an array of business_users records.

<!-- DOCGEN:END getAllBusinessUsers -->

<!-- DOCGEN:START getBusinessUserByUserId -->
### getBusinessUserByUserId

**Description**: Get the business_user relation for a given user, with related business context.

**Parameters**:
- userId: {string} - The user ID to search by.

**Returns**: {Promise<object|null>} - A promise resolving to the business_user record or null.

<!-- DOCGEN:END getBusinessUserByUserId -->

<!-- DOCGEN:START getBusinessUsersByBusinessId -->
### getBusinessUsersByBusinessId

**Description**: List business users for a specific business.

**Parameters**:
- business_id: {string} - The business ID.

**Returns**: {Promise<object[]>} - A promise resolving to matching business_users with users included.

<!-- DOCGEN:END getBusinessUsersByBusinessId -->

<!-- DOCGEN:START getBusinessUsersByBusinessType -->
### getBusinessUsersByBusinessType

**Description**: List businesses of a given type including their business users.

**Parameters**:
- type: {string} - The business type.

**Returns**: {Promise<object[]>} - A promise resolving to businesses with nested business_users and users.

<!-- DOCGEN:END getBusinessUsersByBusinessType -->

<!-- DOCGEN:START getAllBusinessUsersForBusinessByCompanyRole -->
### getAllBusinessUsersForBusinessByCompanyRole

**Description**: Get all business users for a business filtered by company role.

**Parameters**:
- business_id: {string} - The business ID.
- company_role: {string} - The role to filter by.

**Returns**: {Promise<object[]>} - A promise resolving to business_users records with users included.

<!-- DOCGEN:END getAllBusinessUsersForBusinessByCompanyRole -->

<!-- DOCGEN:START createBusinessUser -->
### createBusinessUser

**Description**: Create a business_user relation, optionally creating a new user and Stripe customer.

**Parameters**:
- userData: {object} - Payload containing user data and role.
- business_id: {string} - The business to attach the user to.
- createNewUser?: {boolean} - Whether to create a new user or link an existing one.
- tx?: {object} - Optional Prisma transaction/client to use.

**Returns**: {Promise<{user: object, businessUser: object}>} - The created/linked user and business_user relation.

<!-- DOCGEN:END createBusinessUser -->

<!-- DOCGEN:START removeBusinessUser -->
### removeBusinessUser

**Description**: Remove a business_user relation by its ID.

**Parameters**:
- business_users_id: {string} - The relation ID.

**Returns**: {Promise<object>} - The deleted business_user record.

<!-- DOCGEN:END removeBusinessUser -->

<!-- DOCGEN:START updateBusinessUser -->
### updateBusinessUser

**Description**: Update a business_user relation.

**Parameters**:
- business_users_id: {string} - The relation ID.
- updates: {object} - Partial fields to update.

**Returns**: {Promise<object>} - The updated business_user record.

<!-- DOCGEN:END updateBusinessUser -->

<!-- DOCGEN:START updateCompanyRole -->
### updateCompanyRole

**Description**: Update the company role for a business_user relation.

**Parameters**:
- business_users_id: {string} - The relation ID.
- company_role: {string} - The new company role.

**Returns**: {Promise<object>} - The updated business_user record.

<!-- DOCGEN:END updateCompanyRole -->

<!-- DOCGEN:START addOperatingAddress -->
### addOperatingAddress

**Description**: Set the operating address for a business_user relation.

**Parameters**:
- business_users_id: {string} - The relation ID.
- address_id: {string} - The address ID to connect.

**Returns**: {Promise<object>} - The updated business_user record.

<!-- DOCGEN:END addOperatingAddress -->

<!-- DOCGEN:START updateBusinessUserOnlineStatus -->
### updateBusinessUserOnlineStatus

**Description**: Update online status for a business_user (e.g., delivery driver online flag).

**Parameters**:
- business_users_id: {string} - The relation ID.
- online: {boolean} - New online flag value.

**Returns**: {Promise<object>} - The updated business_user record with business included.

<!-- DOCGEN:END updateBusinessUserOnlineStatus -->

<!-- DOCGEN:START updateAllowance -->
### updateAllowance

**Description**: Upsert and update allowance amounts for a business_user based on service type.

**Parameters**:
- business_users_id: {string} - The relation ID.
- wallet: {number} - Wallet amount limit.
- purchase_order: {number} - Purchase order amount limit.
- type: {string} - Service type (TAXI, TRANSFER, DELIVERY, ANY).

**Returns**: {Promise<object>} - The business_user with populated allowance.

<!-- DOCGEN:END updateAllowance -->

