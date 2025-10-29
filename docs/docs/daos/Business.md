# Business DAO

<!-- DOCGEN:START getBusinesses -->
### getBusinesses

**Description**: Get a list of businesses with optional query/include arguments.

**Parameters**:
- args: {object} - Additional Prisma query arguments (where, orderBy, include, etc.).

**Returns**: {Promise<object[]>} - A promise resolving to an array of business records.

<!-- DOCGEN:END getBusinesses -->

<!-- DOCGEN:START getBusinessById -->
### getBusinessById

**Description**: Get a single business by its ID with rich related data.

**Parameters**:
- business_id: {string} - The ID of the business to retrieve.

**Returns**: {Promise<object|null>} - A promise resolving to the business record or null if not found.

<!-- DOCGEN:END getBusinessById -->

<!-- DOCGEN:START getBusinessAdminDataById -->
### getBusinessAdminDataById

**Description**: Get a business by ID with admin-focused related data (users, words, promos, etc.).

**Parameters**:
- business_id: {string} - The ID of the business to retrieve.

**Returns**: {Promise<object|null>} - A promise resolving to the business record or null if not found.

<!-- DOCGEN:END getBusinessAdminDataById -->

<!-- DOCGEN:START getBusinessesForSearchById -->
### getBusinessesForSearchById

**Description**: Get multiple businesses by IDs optimized for search results (selected fields only).

**Parameters**:
- business_id: {string|string[]} - A single ID or array of business IDs.

**Returns**: {Promise<object[]>} - A promise resolving to a list of business search records.

<!-- DOCGEN:END getBusinessesForSearchById -->

<!-- DOCGEN:START getBusinessForSearchById -->
### getBusinessForSearchById

**Description**: Get a single business by ID optimized for search display (selected fields only).

**Parameters**:
- business_id: {string} - The ID of the business to retrieve.

**Returns**: {Promise<object|null>} - A promise resolving to the business search record or null if not found.

<!-- DOCGEN:END getBusinessForSearchById -->

<!-- DOCGEN:START getBusinessByEmail -->
### getBusinessByEmail

**Description**: Find a business by its email address.

**Parameters**:
- email: {string} - The email address to search by.

**Returns**: {Promise<object|null>} - A promise resolving to the business or null if not found.

<!-- DOCGEN:END getBusinessByEmail -->

<!-- DOCGEN:START getBusinessByTelephone -->
### getBusinessByTelephone

**Description**: Find a business by its telephone number.

**Parameters**:
- telephone_number: {string} - The full telephone number to search by.

**Returns**: {Promise<object|null>} - A promise resolving to the business or null if not found.

<!-- DOCGEN:END getBusinessByTelephone -->

<!-- DOCGEN:START getBusinessesByNameSearch -->
### getBusinessesByNameSearch

**Description**: Search businesses by name (case-insensitive contains).

**Parameters**:
- search: {string} - The search term to match against business names.

**Returns**: {Promise<object[]>} - A promise resolving to matching businesses.

<!-- DOCGEN:END getBusinessesByNameSearch -->

<!-- DOCGEN:START getBusinessesByGroupName -->
### getBusinessesByGroupName

**Description**: Search businesses by group name (case-insensitive contains).

**Parameters**:
- search: {string} - The search term to match against business group names.

**Returns**: {Promise<object[]>} - A promise resolving to matching businesses.

<!-- DOCGEN:END getBusinessesByGroupName -->

<!-- DOCGEN:START getBusinessesByTypeMainInformation -->
### getBusinessesByTypeMainInformation

**Description**: List businesses by type(s), returning only main information.

**Parameters**:
- type: {string|string[]} - One or more business types.

**Returns**: {Promise<object[]>} - A promise resolving to matching businesses.

<!-- DOCGEN:END getBusinessesByTypeMainInformation -->

<!-- DOCGEN:START getBusinessesByType -->
### getBusinessesByType

**Description**: List businesses by type(s) with rich related data, optionally filtered by extra args.

**Parameters**:
- type: {string|string[]} - One or more business types.
- args?: {object} - Additional Prisma where/ordering filters.

**Returns**: {Promise<object[]>} - A promise resolving to matching businesses with related data.

<!-- DOCGEN:END getBusinessesByType -->

<!-- DOCGEN:START getParentBusiness -->
### getParentBusiness

**Description**: Get the parent business for a given business ID.

**Parameters**:
- business_id: {string} - The child business ID.

**Returns**: {Promise<object|null>} - A promise resolving to the parent business or null.

<!-- DOCGEN:END getParentBusiness -->

<!-- DOCGEN:START getChildBusinesses -->
### getChildBusinesses

**Description**: Get all child businesses for a parent business ID.

**Parameters**:
- parent_business_id: {string} - The parent business ID.

**Returns**: {Promise<object[]>} - A promise resolving to child businesses.

<!-- DOCGEN:END getChildBusinesses -->

<!-- DOCGEN:START getFinanceRecordByBusinessId -->
### getFinanceRecordByBusinessId

**Description**: Retrieve the finance record associated with a business.

**Parameters**:
- business_id: {string} - The business ID.

**Returns**: {Promise<object|null>} - A promise resolving to the finance record or null if none exists.

<!-- DOCGEN:END getFinanceRecordByBusinessId -->

<!-- DOCGEN:START updateBusiness -->
### updateBusiness

**Description**: Update a business with provided data (certain protected fields are stripped).

**Parameters**:
- business_id: {string} - The business ID to update.
- businessD: {object} - Partial business data to update.

**Returns**: {Promise<object>} - A promise resolving to the updated business.

<!-- DOCGEN:END updateBusiness -->

<!-- DOCGEN:START updateBusinessFinances -->
### updateBusinessFinances

**Description**: Update the finances entity linked to a business.

**Parameters**:
- business_id: {string} - The business ID whose finance record should be updated.
- financesData: {object} - Fields to update on the finance record.

**Returns**: {Promise<object>} - A promise resolving to the updated finance record.

<!-- DOCGEN:END updateBusinessFinances -->

<!-- DOCGEN:START updateBusinessType -->
### updateBusinessType

**Description**: Update the business type.

**Parameters**:
- business_id: {string} - The business ID.
- type: {string} - New business type.

**Returns**: {Promise<object>} - A promise resolving to the updated business.

<!-- DOCGEN:END updateBusinessType -->

<!-- DOCGEN:START updateIsBusinessUnit -->
### updateIsBusinessUnit

**Description**: Update whether the business is a business unit.

**Parameters**:
- business_id: {string} - The business ID.
- is_business_unit: {boolean} - New flag value.

**Returns**: {Promise<object>} - A promise resolving to the updated business.

<!-- DOCGEN:END updateIsBusinessUnit -->

<!-- DOCGEN:START updateBusinessGroupName -->
### updateBusinessGroupName

**Description**: Update the business group name.

**Parameters**:
- business_id: {string} - The business ID.
- business_group_name: {string} - The new group name.

**Returns**: {Promise<object>} - A promise resolving to the updated business.

<!-- DOCGEN:END updateBusinessGroupName -->

<!-- DOCGEN:START updateBusinessEmail -->
### updateBusinessEmail

**Description**: Update the business email.

**Parameters**:
- business_id: {string} - The business ID.
- email: {string} - The new email.

**Returns**: {Promise<object>} - A promise resolving to the updated business.

<!-- DOCGEN:END updateBusinessEmail -->

<!-- DOCGEN:START updateBusinessTelephone -->
### updateBusinessTelephone

**Description**: Update the business telephone information.

**Parameters**:
- business_id: {string} - The business ID.
- telephone: {string} - Formatted telephone string.
- telephone_code: {string} - Country/area code.
- telephone_number: {string} - Raw number without code.

**Returns**: {Promise<object>} - A promise resolving to the updated business.

<!-- DOCGEN:END updateBusinessTelephone -->

<!-- DOCGEN:START updateBusinessWorkingHours -->
### updateBusinessWorkingHours

**Description**: Update the business working hours JSON.

**Parameters**:
- business_id: {string} - The business ID.
- working_hours: {object} - Working hours object.

**Returns**: {Promise<object>} - A promise resolving to the updated business.

<!-- DOCGEN:END updateBusinessWorkingHours -->

<!-- DOCGEN:START updateRestaurantOverwhelmed -->
### updateRestaurantOverwhelmed

**Description**: Update the restaurant_overwhelmed flag for a business.

**Parameters**:
- business_id: {string} - The business ID.
- restaurant_overwhelmed: {boolean} - Whether the restaurant is overwhelmed.

**Returns**: {Promise<object>} - A promise resolving to the updated business.

<!-- DOCGEN:END updateRestaurantOverwhelmed -->

<!-- DOCGEN:START updateBusinessIsNew -->
### updateBusinessIsNew

**Description**: Update the "new" flag for a business.

**Parameters**:
- business_id: {string} - The business ID.
- isNew: {boolean} - Whether the business is new.

**Returns**: {Promise<object>} - A promise resolving to the updated business.

<!-- DOCGEN:END updateBusinessIsNew -->

<!-- DOCGEN:START updateBusinessIsPopular -->
### updateBusinessIsPopular

**Description**: Update the "popular" flag for a business.

**Parameters**:
- business_id: {string} - The business ID.
- popular: {boolean} - Whether the business is popular.

**Returns**: {Promise<object>} - A promise resolving to the updated business.

<!-- DOCGEN:END updateBusinessIsPopular -->

<!-- DOCGEN:START createNewBusiness -->
### createNewBusiness

**Description**: Create a new business.

**Parameters**:
- business: {object} - The business data to create.
- tx?: {object} - Optional Prisma transaction/client to use.

**Returns**: {Promise<object>} - A promise resolving to the created business.

<!-- DOCGEN:END createNewBusiness -->

<!-- DOCGEN:START deleteBusiness -->
### deleteBusiness

**Description**: Delete a business by ID.

**Parameters**:
- business_id: {string} - The ID of the business to delete.

**Returns**: {Promise<object>} - A promise resolving to the deleted business.

<!-- DOCGEN:END deleteBusiness -->

<!-- DOCGEN:START updateParentBusiness -->
### updateParentBusiness

**Description**: Set the parent business for a business.

**Parameters**:
- business_id: {string} - Child business ID.
- parent_business_id: {string} - Parent business ID.

**Returns**: {Promise<object>} - A promise resolving to the updated business.

<!-- DOCGEN:END updateParentBusiness -->

<!-- DOCGEN:START removeParentBusiness -->
### removeParentBusiness

**Description**: Remove the parent relationship from a business.

**Parameters**:
- business_id: {string} - The business ID.

**Returns**: {Promise<object>} - A promise resolving to the updated business.

<!-- DOCGEN:END removeParentBusiness -->

<!-- DOCGEN:START addBusinessAddress -->
### addBusinessAddress

**Description**: Add or connect an address to a business (upsert address by unique fields).

**Parameters**:
- business_id: {string} - The business ID.
- addressData: {object} - Address fields used for upsert and connect.

**Returns**: {Promise<object>} - A promise resolving to the updated business.

<!-- DOCGEN:END addBusinessAddress -->

<!-- DOCGEN:START addDeliveryAddress -->
### addDeliveryAddress

**Description**: Add or connect a delivery address to a business (upsert address by unique fields).

**Parameters**:
- business_id: {string} - The business ID.
- addressData: {object} - Address fields used for upsert and connect.

**Returns**: {Promise<object>} - A promise resolving to the updated business.

<!-- DOCGEN:END addDeliveryAddress -->

<!-- DOCGEN:START updateBusinessAddress -->
### updateBusinessAddress

**Description**: Update a business's main address by creating or using an existing address.

**Parameters**:
- business_id: {string} - The business ID.
- address: {object} - Address data to add/connect.

**Returns**: {Promise<object>} - A promise resolving to the updated business.

<!-- DOCGEN:END updateBusinessAddress -->

<!-- DOCGEN:START updateBusinessDeliveryAddress -->
### updateBusinessDeliveryAddress

**Description**: Update a business's delivery address by creating or using an existing address.

**Parameters**:
- business_id: {string} - The business ID.
- deliveryAddress: {object} - Address data to add/connect as delivery address.

**Returns**: {Promise<object>} - A promise resolving to the updated business.

<!-- DOCGEN:END updateBusinessDeliveryAddress -->

<!-- DOCGEN:START removeBusinessDeliveryAddress -->
### removeBusinessDeliveryAddress

**Description**: Remove the delivery address relationship from a business.

**Parameters**:
- business_id: {string} - The business ID.

**Returns**: {Promise<object>} - A promise resolving to the updated business.

<!-- DOCGEN:END removeBusinessDeliveryAddress -->

<!-- DOCGEN:START addScheduledUserSortingType -->
### addScheduledUserSortingType

**Description**: Set the scheduled users sorting type for daily meals.

**Parameters**:
- type: {string} - Sorting type identifier.
- businessId: {string} - The business ID.

**Returns**: {Promise<object>} - A promise resolving to the updated business.

<!-- DOCGEN:END addScheduledUserSortingType -->

<!-- DOCGEN:START manualSortScheduledUsers -->
### manualSortScheduledUsers

**Description**: Manually set the order of scheduled users for a business.

**Parameters**:
- sorted_users?: {string[]} - Ordered list of user IDs.
- businessId: {string} - The business ID.

**Returns**: {Promise<object>} - A promise resolving to the updated business.

<!-- DOCGEN:END manualSortScheduledUsers -->

<!-- DOCGEN:START getBusinessStripeByBusinessId -->
### getBusinessStripeByBusinessId

**Description**: Get the Stripe account ID for a business.

**Parameters**:
- business_id: {string} - The business ID.

**Returns**: {Promise<string|null>} - A promise resolving to the Stripe account ID or null.

<!-- DOCGEN:END getBusinessStripeByBusinessId -->

<!-- DOCGEN:START getStripeIdsForAllBusinesses -->
### getStripeIdsForAllBusinesses

**Description**: Retrieves the Stripe account IDs for all businesses from the database.

**Returns**: {Promise<Array<{ business_id: number, stripe_account_id: string }>>} - A promise that resolves to an array of objects containing business IDs and their corresponding Stripe account IDs.

<!-- DOCGEN:END getStripeIdsForAllBusinesses -->

<!-- DOCGEN:START activateBusiness -->
### activateBusiness

**Description**: Activate a business and record an UNSUSPEND account action.

**Parameters**:
- business_id: {string} - The business ID to activate.
- action_creator_user_id: {string} - The user ID performing the action.
- reason: {string} - Reason for activation change.

**Returns**: {Promise<object>} - A promise resolving to the updated business.

<!-- DOCGEN:END activateBusiness -->

<!-- DOCGEN:START deactivateBusiness -->
### deactivateBusiness

**Description**: Deactivate a business and record a SUSPEND account action.

**Parameters**:
- business_id: {string} - The business ID to deactivate.
- action_creator_user_id: {string} - The user ID performing the action.
- reason: {string} - Reason for deactivation.

**Returns**: {Promise<object>} - A promise resolving to the updated business.

<!-- DOCGEN:END deactivateBusiness -->

<!-- DOCGEN:START getScheduledUsersByBusinessId -->
### getScheduledUsersByBusinessId

**Description**: Get users scheduled for daily meals for a given business (based on daily_users_sorted).

**Parameters**:
- businessId: {string} - The business ID.

**Returns**: {Promise<object[]>} - A promise resolving to an array of user records with addresses.

<!-- DOCGEN:END getScheduledUsersByBusinessId -->

<!-- DOCGEN:START getPurchaseOrderLimit -->
### getPurchaseOrderLimit

**Description**: Calculate the remaining purchase order limit amount for the current month.

Aggregates this month's taxi orders linked to the business's users/clients and
subtracts from the business.purchase_order_limit_amount.

**Parameters**:
- business_id: {string} - The business ID.

**Returns**: {Promise<number>} - A promise resolving to the remaining amount (>= 0).

<!-- DOCGEN:END getPurchaseOrderLimit -->

