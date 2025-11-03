# BusinessController Controller

<!-- DOCGEN:START activateBusiness -->

### activateBusiness

**Summary**: Activate a business

**Description**: Activates a business.

**Responses:**

- 200 - successful operation
- 400 - Error occurred while obtaining the business list

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`
- Status: 400, Type: `unknown`, Content-Type: `application/json`, Example: `The error object`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/activateBusiness)

<!-- DOCGEN:END activateBusiness -->

<!-- DOCGEN:START deactivateBusiness -->

### deactivateBusiness

**Summary**: Deactivate a business

**Description**: Deactivates a business.

**Responses:**

- 200 - successful operation
- 400 - Error occurred while obtaining the business list

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`
- Status: 400, Type: `unknown`, Content-Type: `application/json`, Example: `The error object`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deactivateBusiness)

<!-- DOCGEN:END deactivateBusiness -->

**Summary**: Get a list of businesses

**Description**: Returns a list of businesses.

**Responses:**

- 200
- 400

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`
- Status: 400, Type: `unknown`, Content-Type: `application/json`, Example: `The error object`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessesByType)

<!-- DOCGEN:END listBusinesses -->

<!-- DOCGEN:START getBusinessesByIds -->

### getBusinessesByIds

**Summary**: Get a list of businesses business_ids

**Description**: Returns a list of businesses.

**Responses:**

- 200 - successful operation
- 400 - Error occurred while obtaining the business list

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`
- Status: 400, Type: `unknown`, Content-Type: `application/json`, Example: `The error object`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessesByIds)

<!-- DOCGEN:END getBusinessesByIds -->

<!-- DOCGEN:START searchBusinesses -->

### searchBusinesses

**Summary**: Get a list of businesses by query, location, categories, radius, etc.

**Description**: Returns a list of businesses filtered by search criteria.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**

- 200 - successful operation
- 400 - Error occurred while obtaining the business list

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`
- Status: 400, Type: `unknown`, Content-Type: `application/json`, Example: `The error object`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessesSearch)

<!-- DOCGEN:END searchBusinesses -->

<!-- DOCGEN:START listMerchantBusinesses -->

### listMerchantBusinesses

**Summary**: List all merchant businesses

**Description**: Retrieves a list of all businesses classified as merchants.

**Responses:**

- 200 - Successful operation, returns a list of merchant businesses
- 400 - Error occurred while obtaining the merchant business list

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listMerchantBusinesses)

<!-- DOCGEN:END listMerchantBusinesses -->

<!-- DOCGEN:START listPromoSectionsWithMerchants -->

### listPromoSectionsWithMerchants

**Summary**: List all merchant businesses grouped by promoSections

**Description**: Retrieves a list of all businesses classified as merchants.

**Responses:**

- 200 - Successful operation, returns a list of merchant businesses
- 400 - Error occurred while obtaining the merchant business list

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listMerchantBusinesses)

<!-- DOCGEN:END listPromoSectionsWithMerchants -->

<!-- DOCGEN:START listMerchantBusinessesWithDailyMeals -->

### listMerchantBusinessesWithDailyMeals

**Summary**: List all merchant businesses offering daily meals

**Description**: Retrieves a list of all businesses classified as merchants that offer daily meals.

**Responses:**

- 200 - Successful operation, returns a list of merchant businesses offering daily meals
- 400 - Error occurred while obtaining the merchant business list

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listMerchantBusinessesWithDailyMeals)

<!-- DOCGEN:END listMerchantBusinessesWithDailyMeals -->

<!-- DOCGEN:START listMerchantBusinessesMainInfo -->

### listMerchantBusinessesMainInfo

**Summary**: List all merchant businesses offering daily meals

**Description**: Retrieves a list of all businesses classified as merchants that offer daily meals.

**Responses:**

- 200 - Successful operation, returns a list of merchant businesses offering daily meals
- 400 - Error occurred while obtaining the merchant business list

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listMerchantBusinessesWithDailyMeals)

<!-- DOCGEN:END listMerchantBusinessesMainInfo -->

<!-- DOCGEN:START listTransferBusinessesMainInfo -->

### listTransferBusinessesMainInfo

**Summary**: List all transfer businesses (main info only)

**Description**: Retrieves a list of all transfer businesses

**Responses:**

- 200 - Successful operation, returns a list of transfer businesses
- 400 - Error occurred while obtaining the transfer businesses list

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listTransferBusinessesMainInfo)

<!-- DOCGEN:END listTransferBusinessesMainInfo -->

<!-- DOCGEN:START listTransferBusinesses -->

### listTransferBusinesses

**Summary**: List all taxi businesses

**Description**: Retrieves a list of all businesses classified as taxis (TRANSFER).

**Responses:**

- 200 - Successful operation, returns a list of taxi businesses
- 400 - Error occurred while obtaining the taxi business list

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listTaxiBusinesses)

<!-- DOCGEN:END listTransferBusinesses -->

<!-- DOCGEN:START getBusinessById -->

### getBusinessById

**Summary**: Get a business by ID

**Description**: Retrieves detailed information about a specific business by its ID.

**Parameters:**

| Name      | In   | Type        | Description |
| --------- | ---- | ----------- | ----------- |
| undefined | path | business_id |             |

**Responses:**

- 200 - Successful operation, returns detailed business information
- 404 - Business not found
- 400 - Error retrieving business information

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessById)

<!-- DOCGEN:END getBusinessById -->

<!-- DOCGEN:START getBusinessAdminDataById -->

### getBusinessAdminDataById

**Summary**: Get a business by ID including admin data

**Description**: Retrieves detailed information about a specific business by its ID, including data an admin can see.

**Parameters:**

| Name      | In   | Type        | Description |
| --------- | ---- | ----------- | ----------- |
| undefined | path | business_id |             |

**Responses:**

- 200 - Successful operation, returns detailed business information
- 404 - Business not found
- 400 - Error retrieving business information

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessAdminDataById)

<!-- DOCGEN:END getBusinessAdminDataById -->

<!-- DOCGEN:START getBusinessForSearchById -->

### getBusinessForSearchById

**Summary**: Get a business for search by ID

**Description**: Retrieves detailed information about a specific business by its ID.

**Parameters:**

| Name      | In   | Type        | Description |
| --------- | ---- | ----------- | ----------- |
| undefined | path | business_id |             |

**Responses:**

- 200 - Successful operation, returns detailed business information
- 404 - Business not found
- 400 - Error retrieving business information

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessForSearchById)

<!-- DOCGEN:END getBusinessForSearchById -->

<!-- DOCGEN:START getParentBusiness -->

### getParentBusiness

**Summary**: Get parent business

**Description**: Retrieves the parent business of a specific business by its ID.

**Parameters:**

| Name      | In   | Type        | Description |
| --------- | ---- | ----------- | ----------- |
| undefined | path | business_id |             |

**Responses:**

- 200 - Successful operation, returns parent business information
- 404 - Parent business not found
- 400 - Error retrieving parent business information

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getParentBusiness)

<!-- DOCGEN:END getParentBusiness -->

<!-- DOCGEN:START getChildBusinesses -->

### getChildBusinesses

**Summary**: List child businesses

**Description**: Retrieves a list of child businesses for a specific parent business ID.

**Parameters:**

| Name      | In   | Type               | Description |
| --------- | ---- | ------------------ | ----------- |
| undefined | path | parent_business_id |             |

**Responses:**

- 200 - Successful operation, returns a list of child businesses
- 400 - Error retrieving child businesses information

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getChildBusinesses)

<!-- DOCGEN:END getChildBusinesses -->

<!-- DOCGEN:START createNewBusiness -->

### createNewBusiness

**Summary**: Create a new business

**Description**: Creates a new business with the provided details.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**

- 201 - Business created successfully
- 400 - Error creating new business

**Response Content:**

- Status: 201, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewBusiness)

<!-- DOCGEN:END createNewBusiness -->

<!-- DOCGEN:START update -->

### update

**Summary**: Updates the business details

**Description**: This endpoint is used to update the business details.

**Parameters:**

| Name      | In   | Type       | Description |
| --------- | ---- | ---------- | ----------- |
| undefined | path | businessId |             |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**

- 200 - Business updated successfully. Returns the updated business details.
- 400 - Error updating business information.

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusiness)

<!-- DOCGEN:END update -->

<!-- DOCGEN:START updateBusinessType -->

### updateBusinessType

**Summary**: Updates a business's type

**Description**: This endpoint is used to update a business's type.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**

- 200 - Type updated successfully. Returns the updated business details.
- 400 - Error updating business information.

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessType)

<!-- DOCGEN:END updateBusinessType -->

<!-- DOCGEN:START updateIsBusinessUnit -->

### updateIsBusinessUnit

**Summary**: Updates the business unit status

**Description**: This endpoint is used to update whether a business is considered a business unit.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**

- 200 - Business unit status updated successfully. Returns the updated business details.
- 400 - Error updating business information.

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateIsBusinessUnit)

<!-- DOCGEN:END updateIsBusinessUnit -->

<!-- DOCGEN:START updateBusinessGroupName -->

### updateBusinessGroupName

**Summary**: Updates a business's group name

**Description**: This endpoint is used to update a business's group name.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**

- 200 - Group name updated successfully. Returns the updated business details.
- 400 - Error updating business information.

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessGroupName)

<!-- DOCGEN:END updateBusinessGroupName -->

<!-- DOCGEN:START updateBusinessEmail -->

### updateBusinessEmail

**Summary**: Updates a business's email

**Description**: This endpoint is used to update a business's email address.

**Parameters:**

| Name      | In   | Type        | Description |
| --------- | ---- | ----------- | ----------- |
| undefined | path | business_id |             |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**

- 200 - Email updated successfully. Returns the updated business details.
- 400 - Error updating business information.

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessEmail)

<!-- DOCGEN:END updateBusinessEmail -->

<!-- DOCGEN:START updateBusinessTelephone -->

### updateBusinessTelephone

**Summary**: Updates a business's telephone

**Description**: This endpoint is used to update a business's telephone number.

**Parameters:**

| Name      | In   | Type        | Description |
| --------- | ---- | ----------- | ----------- |
| undefined | path | business_id |             |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**

- 200 - Telephone updated successfully. Returns the updated business details.
- 400 - Error updating business information.

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessTelephone)

<!-- DOCGEN:END updateBusinessTelephone -->

<!-- DOCGEN:START updateBusinessWorkingHours -->

### updateBusinessWorkingHours

**Summary**: Updates a business's working hours

**Description**: This endpoint is used to update a business's working hours.

**Parameters:**

| Name      | In   | Type        | Description |
| --------- | ---- | ----------- | ----------- |
| undefined | path | business_id |             |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**

- 200 - Working hours updated successfully. Returns the updated business details.
- 400 - Error updating business information.

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessWorkingHours)

<!-- DOCGEN:END updateBusinessWorkingHours -->

<!-- DOCGEN:START updateRestaurantOverwhelmed -->

### updateRestaurantOverwhelmed

**Summary**: Updates the overwhelmed status of a restaurant

**Description**: This endpoint is used to update whether a restaurant is considered overwhelmed.

**Parameters:**

| Name      | In   | Type        | Description |
| --------- | ---- | ----------- | ----------- |
| undefined | path | business_id |             |

**Request Body:** (optional)
Type: `application/json`
Content-Type: `application/json`

**Responses:**

- 200 - Overwhelmed status updated successfully. Returns the updated restaurant details.
- 400 - Error updating restaurant information.

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateRestaurantOverwhelmed)

<!-- DOCGEN:END updateRestaurantOverwhelmed -->

<!-- DOCGEN:START updateBusinessIsNew -->

### updateBusinessIsNew

**Summary**: Updates the new status of a business

**Description**: This endpoint is used to update whether a business is considered new.

**Parameters:**

| Name      | In   | Type        | Description |
| --------- | ---- | ----------- | ----------- |
| undefined | path | business_id |             |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**

- 200 - New status updated successfully. Returns the updated business details.
- 400 - Error updating business information.

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessIsNew)

<!-- DOCGEN:END updateBusinessIsNew -->

<!-- DOCGEN:START updateBusinessIsPopular -->

### updateBusinessIsPopular

**Summary**: Updates the popularity status of a business

**Description**: This endpoint is used to update whether a business is considered popular.

**Parameters:**

| Name      | In   | Type        | Description |
| --------- | ---- | ----------- | ----------- |
| undefined | path | business_id |             |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**

- 200 - Popularity status updated successfully. Returns the updated business details.
- 400 - Error updating business information.

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessIsPopular)

<!-- DOCGEN:END updateBusinessIsPopular -->

<!-- DOCGEN:START getBusinessesByGroupName -->

### getBusinessesByGroupName

**Summary**: Search for businesses by business group name

**Description**: Retrieves businesses whose business group names contain the given search term, case-insensitively.

**Responses:**

- 200 - Successful operation, returns a list of matching businesses
- 400 - Error occurred while searching for businesses by group name

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessesByGroupName)

<!-- DOCGEN:END getBusinessesByGroupName -->

<!-- DOCGEN:START getBusinessesByNameSearch -->

### getBusinessesByNameSearch

**Summary**: Search for businesses by name

**Description**: Retrieves businesses whose names contain the given search term, case-insensitively.

**Responses:**

- 200 - Successful operation, returns a list of matching businesses
- 400 - Error occurred while searching for businesses by name

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessesByNameSearch)

<!-- DOCGEN:END getBusinessesByNameSearch -->

<!-- DOCGEN:START addBusinessAddress -->

### addBusinessAddress

**Summary**: Add an address to a business

**Description**: Adds an address to a specific business.

**Parameters:**

| Name      | In   | Type        | Description |
| --------- | ---- | ----------- | ----------- |
| undefined | path | business_id |             |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**

- 200 - Address added successfully
- 400 - Error adding address

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addBusinessAddress)

<!-- DOCGEN:END addBusinessAddress -->

<!-- DOCGEN:START addDeliveryAddress -->

### addDeliveryAddress

**Summary**: Add a delivery address to a business

**Description**: Adds a delivery address to a specific business.

**Parameters:**

| Name      | In   | Type        | Description |
| --------- | ---- | ----------- | ----------- |
| undefined | path | business_id |             |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**

- 200 - Delivery address added successfully
- 400 - Error adding delivery address

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addDeliveryAddress)

<!-- DOCGEN:END addDeliveryAddress -->

<!-- DOCGEN:START updateParentBusinessId -->

### updateParentBusinessId

**Summary**: Update parent business

**Description**: Updates the parent business of a specific business by its ID.

**Parameters:**

| Name      | In   | Type        | Description |
| --------- | ---- | ----------- | ----------- |
| undefined | path | business_id |             |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**

- 200 - Parent business updated successfully
- 400 - Error updating parent business

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateParentBusiness)

<!-- DOCGEN:END updateParentBusinessId -->

<!-- DOCGEN:START updateBusinessAddress -->

### updateBusinessAddress

**Summary**: Updates a business's address

**Description**: This endpoint is used to update a business's primary address.

**Parameters:**

| Name      | In   | Type        | Description |
| --------- | ---- | ----------- | ----------- |
| undefined | path | business_id |             |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**

- 200 - Address updated successfully. Returns the updated business details.
- 400 - Error updating business address.

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessAddress)

<!-- DOCGEN:END updateBusinessAddress -->

<!-- DOCGEN:START updateBusinessDeliveryAddress -->

### updateBusinessDeliveryAddress

**Summary**: Updates a business's delivery address

**Description**: This endpoint is used to update a business's delivery address.

**Parameters:**

| Name      | In   | Type        | Description |
| --------- | ---- | ----------- | ----------- |
| undefined | path | business_id |             |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**

- 200 - Delivery address updated successfully. Returns the updated business details.
- 400 - Error updating business delivery address.

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessDeliveryAddress)

<!-- DOCGEN:END updateBusinessDeliveryAddress -->

<!-- DOCGEN:START deleteBusiness -->

### deleteBusiness

**Summary**: Delete a business

**Description**: Deletes a business by its ID.

**Parameters:**

| Name      | In   | Type        | Description |
| --------- | ---- | ----------- | ----------- |
| undefined | path | business_id |             |

**Responses:**

- 200 - Business deleted successfully
- 400 - Error deleting business

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deleteBusiness)

<!-- DOCGEN:END deleteBusiness -->

<!-- DOCGEN:START removeParentBusinessId -->

### removeParentBusinessId

**Summary**: Remove a child business from its parent

**Description**: Clears the parent business association for a given child business.

**Parameters:**

| Name      | In   | Type        | Description |
| --------- | ---- | ----------- | ----------- |
| undefined | path | business_id |             |

**Responses:**

- 200 - Child business removed from parent successfully
- 400 - Error removing parent business from business

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/removeChildBusiness)

<!-- DOCGEN:END removeParentBusinessId -->

<!-- DOCGEN:START reviewBusiness -->

### reviewBusiness

**Summary**: Review a business

**Description**: This endpoint is used add a review of business.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**

- 200 - Primary address set successfully.
- 400 - Error setting primary address.

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/reviewBusiness)

<!-- DOCGEN:END reviewBusiness -->

<!-- DOCGEN:START createPaymentIntent -->

### createPaymentIntent

**Summary**: Create a payment intent

**Description**: This endpoint is used to create a payment intent.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**

- 200 - Payment Intent created successfully.
- 400 - Error creating payment intent.

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createPaymentIntent)

<!-- DOCGEN:END createPaymentIntent -->

<!-- DOCGEN:START manualSortScheduledUsers -->

### manualSortScheduledUsers

**Summary**: Manually sort scheduled users

**Description**: This endpoint is used to manually sort scheduled users.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**

- 200 - Users sorted successfully.
- 400 - Error sorting users.

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/manualSortScheduledUsers)

<!-- DOCGEN:END manualSortScheduledUsers -->

<!-- DOCGEN:START addScheduledUserSortingType -->

### addScheduledUserSortingType

**Summary**: Add sorting type for scheduled users

**Description**: This endpoint is used to add the sorting type for scheduled users.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**

- 200 - Sorting type added successfully.
- 400 - Error adding sorting type.

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addScheduledUserSortingType)

<!-- DOCGEN:END addScheduledUserSortingType -->

<!-- DOCGEN:START getBusinessEarnings -->

### getBusinessEarnings

**Summary**: Get earnings for a specific business

**Description**: Retrieves earnings data for a specific business based on the provided business ID and date range.

**Parameters:**

| Name      | In   | Type        | Description |
| --------- | ---- | ----------- | ----------- |
| undefined | path | business_id |             |

**Responses:**

- 200 - Successful operation, returns the earnings data for the specified business
- 400 - Missing required parameters
- 404 - Business not found or no earnings data available

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`
- Status: 400, Type: `unknown`, Content-Type: `application/json`, Example: `The error object`
- Status: 404, Type: `unknown`, Content-Type: `application/json`, Example: `The error object`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessEarnings)

<!-- DOCGEN:END getBusinessEarnings -->

<!-- DOCGEN:START getAllBusinessesEarnings -->

### getAllBusinessesEarnings

**Summary**: Get earnings for all businesses

**Description**: Retrieves earnings data for all businesses of type MERCHANT based on the provided date range.

**Responses:**

- 200 - Successful operation, returns the earnings data for all businesses
- 400 - Missing required parameters

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`
- Status: 400, Type: `unknown`, Content-Type: `application/json`, Example: `The error object`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAllBusinessesEarnings)

<!-- DOCGEN:END getAllBusinessesEarnings -->

<!-- DOCGEN:START getTotalEarnings -->

### getTotalEarnings

**Summary**: Get total earnings for completed delivery orders

**Description**: Retrieves the total earnings from all completed delivery orders.

**Responses:**

- 200 - Successful operation, returns the total earnings
- 400 - Error retrieving total earnings

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`
- Status: 400, Type: `unknown`, Content-Type: `application/json`, Example: `The error object`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getTotalEarnings)

<!-- DOCGEN:END getTotalEarnings -->

<!-- DOCGEN:START getBusinessTotalEarnings -->

### getBusinessTotalEarnings

**Summary**: Get total earnings for a specific business

**Description**: Retrieves the total earnings of a specific business based on completed orders.

**Parameters:**

| Name      | In   | Type        | Description |
| --------- | ---- | ----------- | ----------- |
| undefined | path | business_id |             |

**Responses:**

- 200 - Successful operation, returns total earnings for the specified business
- 404 - Business not found
- 400 - Error retrieving business' total earnings

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessTotalEarnings)

<!-- DOCGEN:END getBusinessTotalEarnings -->

<!-- DOCGEN:START editBusiness -->

### editBusiness

**Summary**: Edit business details

**Description**: This endpoint is used to update multiple details of a business, including address, delivery address, finances, and other specific data.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**

- 200 - Business updated successfully. Returns the updated business details.
- 400 - Error updating business information.

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/editBusiness)

<!-- DOCGEN:END editBusiness -->

<!-- DOCGEN:START getLocalLocations -->

### getLocalLocations

**Summary**: Get local locations with address_id

**Description**: Retrieves all local locations that have an associated address_id.

**Responses:**

- 200 - Successful operation, returns the list of local locations with address_id
- 400 - Error retrieving local locations

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`
- Status: 400, Type: `unknown`, Content-Type: `application/json`, Example: `The error object`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getLocalLocations)

<!-- DOCGEN:END getLocalLocations -->

<!-- DOCGEN:START createBusinessLocalLocation -->

### createBusinessLocalLocation

**Summary**: Create a new local location for a business

**Description**: Creates a new local location for a business with the specified local_location_id and time.

**Parameters:**

| Name      | In   | Type        | Description |
| --------- | ---- | ----------- | ----------- |
| undefined | path | business_id |             |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**

- 201 - Local location created successfully.
- 400 - Missing required fields in the request body
- 500 - Error creating local location

**Response Content:**

- Status: 201, Type: `unknown`, Content-Type: `application/json`
- Status: 400, Type: `unknown`, Content-Type: `application/json`, Example: `The error object`
- Status: 500, Type: `unknown`, Content-Type: `application/json`, Example: `The error object`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createBusinessLocalLocation)

<!-- DOCGEN:END createBusinessLocalLocation -->

<!-- DOCGEN:START updateBusinessLocalLocation -->

### updateBusinessLocalLocation

**Summary**: Update a local location for a business

**Description**: Updates the time of a local location for a business with the specified location_id.

**Parameters:**

| Name      | In   | Type        | Description |
| --------- | ---- | ----------- | ----------- |
| undefined | path | location_id |             |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**

- 200 - Local location updated successfully.
- 400 - Missing required fields in the request body
- 500 - Error updating local location

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`
- Status: 400, Type: `unknown`, Content-Type: `application/json`, Example: `The error object`
- Status: 500, Type: `unknown`, Content-Type: `application/json`, Example: `The error object`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessLocalLocation)

<!-- DOCGEN:END updateBusinessLocalLocation -->

<!-- DOCGEN:START getBusinessPromoSectionsAnalytics -->

### getBusinessPromoSectionsAnalytics

**Summary**: Promo analytics for sections

**Description**: Returns promo analytics for sections for a business and time period, including purchased promo sections.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**

- 200 - successful operation
- 400 - Invalid request
- 401 - Unauthorized

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessPromoSectionsAnalytics)

<!-- DOCGEN:END getBusinessPromoSectionsAnalytics -->

<!-- DOCGEN:START getBusinessPromoWordsAnalytics -->

### getBusinessPromoWordsAnalytics

**Summary**: Promo analytics for words

**Description**: Returns promo analytics for words for a business and time period, including purchased words.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**

- 200 - successful operation
- 400 - Invalid request
- 401 - Unauthorized

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessPromoWordsAnalytics)

<!-- DOCGEN:END getBusinessPromoWordsAnalytics -->

<!-- DOCGEN:START createBusinessType -->

### createBusinessType

**Summary**: Create a new business type

**Description**: Creates a new business_type row.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**

- 200
- 500

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createBusinessType)

<!-- DOCGEN:END createBusinessType -->

<!-- DOCGEN:START setBusinessTypesForBusiness -->

### setBusinessTypesForBusiness

**Summary**: Replace all business types for a business

**Description**: Sets the list of type_ids for a given business using junction table business_to_types.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**

- 200
- 500

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/setBusinessTypes)

<!-- DOCGEN:END setBusinessTypesForBusiness -->

<!-- DOCGEN:START getBusinessReviewsById -->

### getBusinessReviewsById

**Summary**: Get business reviews

**Description**: Retrieves reviews for a business, including author and target details.

**Parameters:**

| Name      | In   | Type        | Description |
| --------- | ---- | ----------- | ----------- |
| undefined | path | business_id |             |

**Responses:**

- 200
- 500

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessReviewsById)

<!-- DOCGEN:END getBusinessReviewsById -->

<!-- DOCGEN:START getBusinessStripeStatusByBusinessId -->

### getBusinessStripeStatusByBusinessId

**Summary**: Get Stripe account active status

**Description**: Returns whether the business's Stripe account is active.

**Parameters:**

| Name      | In   | Type        | Description |
| --------- | ---- | ----------- | ----------- |
| undefined | path | business_id |             |

**Responses:**

- 200
- 500

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessStripeStatusByBusinessId)

<!-- DOCGEN:END getBusinessStripeStatusByBusinessId -->

<!-- DOCGEN:START generateBusinessStripeByBusinessId -->

### generateBusinessStripeByBusinessId

**Summary**: Generate Stripe onboarding link

**Description**: Creates or retrieves a Stripe account and returns an onboarding link.

**Parameters:**

| Name      | In   | Type        | Description |
| --------- | ---- | ----------- | ----------- |
| undefined | path | business_id |             |

**Responses:**

- 200
- 400
- 500

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/generateBusinessStripeByBusinessId)

<!-- DOCGEN:END generateBusinessStripeByBusinessId -->

<!-- DOCGEN:START getBusynessFactorsBusinessIdList -->

### getBusynessFactorsBusinessIdList

**Summary**: Get busyness factors for businesses

**Description**: Returns a busyness factor per business ID based on in-progress orders.

**Responses:**

- 200
- 400
- 500

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusynessFactorsBusinessIdList)

<!-- DOCGEN:END getBusynessFactorsBusinessIdList -->

<!-- DOCGEN:START addBusinessToFavorites -->

### addBusinessToFavorites

**Summary**: Add a business to the authenticated user's favorites

**Description**: Adds the given business to the user's favorites list.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**

- 200
- 400
- 500

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addBusinessToFavorites)

<!-- DOCGEN:END addBusinessToFavorites -->

<!-- DOCGEN:START removeBusinessFromFavorites -->

### removeBusinessFromFavorites

**Summary**: Remove a business from the authenticated user's favorites

**Description**: Removes the specified favorite entry from the user's favorites list.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**

- 200
- 400
- 500

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/removeBusinessFromFavorites)

<!-- DOCGEN:END removeBusinessFromFavorites -->

<!-- DOCGEN:START getFavoriteBusinesses -->

### getFavoriteBusinesses

**Summary**: List authenticated user's favorite businesses

**Description**: Returns favorite businesses for the current user, optionally filtered by business type.

**Parameters:**

| Name      | In   | Type | Description |
| --------- | ---- | ---- | ----------- |
| undefined | path | type |             |

**Responses:**

- 200
- 500

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getFavoriteBusinesses)

<!-- DOCGEN:END getFavoriteBusinesses -->

<!-- DOCGEN:START getScheduledUsersByBusinessId -->

### getScheduledUsersByBusinessId

**Summary**: List scheduled users for a business

**Description**: Retrieves users scheduled for daily meals for the given business.

**Parameters:**

| Name      | In   | Type        | Description |
| --------- | ---- | ----------- | ----------- |
| undefined | path | business_id |             |

**Responses:**

- 200
- 400

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getScheduledUsersByBusinessId)

<!-- DOCGEN:END getScheduledUsersByBusinessId -->

<!-- DOCGEN:START createScoringPointsHandler -->

### createScoringPointsHandler

**Summary**: Create scoring points

**Description**: Creates scoring points for the authenticated business user for a delivery or taxi order.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**

- 201
- 400
- 500

**Response Content:**

- Status: 201, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createScoringPoints)

<!-- DOCGEN:END createScoringPointsHandler -->

<!-- DOCGEN:START getPurchaseOrderLimit -->

### getPurchaseOrderLimit

**Summary**: Get remaining purchase order limit amount for current month

**Description**: Returns the remaining purchase order limit for the specified business based on taxi orders this month.

**Parameters:**

| Name      | In   | Type        | Description |
| --------- | ---- | ----------- | ----------- |
| undefined | path | business_id |             |

**Responses:**

- 200
- 400
- 500

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getPurchaseOrderLimit)

<!-- DOCGEN:END getPurchaseOrderLimit -->

<!-- DOCGEN:START removeBusinessPaymentMethod -->

### removeBusinessPaymentMethod

**Summary**: Remove a payment method from the business

**Description**: Detaches the specified payment method from the Stripe customer of the business of the current user.

**Parameters:**

| Name      | In   | Type  | Description |
| --------- | ---- | ----- | ----------- |
| undefined | path | pm_id |             |

**Responses:**

- 200
- 400

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/removeBusinessPaymentMethod)

<!-- DOCGEN:END removeBusinessPaymentMethod -->

<!-- DOCGEN:START getBusinessOverallAnalytics -->

### getBusinessOverallAnalytics

**Summary**: Get overall business analytics

**Description**: Retrieves overall analytics for the authenticated business user, including revenue, orders, customer types, and promo analytics.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**

- 200
- 401

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`
- Status: 401, Type: `unknown`, Content-Type: `application/json`, Example: `The error object`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessOverallAnalytics)

<!-- DOCGEN:END getBusinessOverallAnalytics -->

<!-- DOCGEN:START getBusinessPromoAdsAnalytics -->

### getBusinessPromoAdsAnalytics

**Summary**: Promo analytics for ads

**Description**: Returns promo analytics for ads for a business and time period, including purchased ads if applicable.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**

- 200
- 400
- 401

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessPromoAdsAnalytics)

<!-- DOCGEN:END getBusinessPromoAdsAnalytics -->

<!-- DOCGEN:START confirmBusinessPremise -->

### confirmBusinessPremise

**Summary**: Confirm business premise registration (admin)

**Description**: Sets is_registered=true and registered_at=now for the given business premise.

**Parameters:**

| Name      | In   | Type                | Description |
| --------- | ---- | ------------------- | ----------- |
| undefined | path | business_premise_id |             |

**Responses:**

- 200

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/confirmBusinessPremise)

<!-- DOCGEN:END confirmBusinessPremise -->
