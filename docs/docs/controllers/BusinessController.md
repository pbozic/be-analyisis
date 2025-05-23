# BusinessController Controller


<!-- DOCGEN:START activateBusiness -->
### activateBusiness

**Summary**: Activatea business

**Description**: Activatesa business.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/activateBusiness)

<!-- DOCGEN:END activateBusiness -->

<!-- DOCGEN:START deactivateBusiness -->
### deactivateBusiness

**Summary**: Deactivatea business

**Description**: Deactivatesa business.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deactivateBusiness)

<!-- DOCGEN:END deactivateBusiness -->

<!-- DOCGEN:START listBusinesses -->
### listBusinesses

**Summary**: Geta list of businesses

**Description**: Returnsa list of businesses.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinesses)

<!-- DOCGEN:END listBusinesses -->

<!-- DOCGEN:START getBusinessesByIds -->
### getBusinessesByIds

**Summary**: Geta list of businesses business_ids

**Description**: Returnsa list of businesses.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessesByIds)

<!-- DOCGEN:END getBusinessesByIds -->

<!-- DOCGEN:START searchBusinesses -->
### searchBusinesses

**Summary**: Geta list of businesses by query, location and categories

**Description**: Returnsa list of businesses.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessesSearch)

<!-- DOCGEN:END searchBusinesses -->

<!-- DOCGEN:START listMerchantBusinesses -->
### listMerchantBusinesses

**Summary**: Listall merchant businesses

**Description**: Retrievesa list of all businesses classified as merchants.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listMerchantBusinesses)

<!-- DOCGEN:END listMerchantBusinesses -->

<!-- DOCGEN:START listPromoSectionsWithMerchants -->
### listPromoSectionsWithMerchants

**Summary**: Listall merchant businesses grouped by promoSections

**Description**: Retrievesa list of all businesses classified as merchants.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listMerchantBusinesses)

<!-- DOCGEN:END listPromoSectionsWithMerchants -->

<!-- DOCGEN:START listMerchantBusinessesWithDailyMeals -->
### listMerchantBusinessesWithDailyMeals

**Summary**: Listall merchant businesses offering daily meals

**Description**: Retrievesa list of all businesses classified as merchants that offer daily meals.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listMerchantBusinessesWithDailyMeals)

<!-- DOCGEN:END listMerchantBusinessesWithDailyMeals -->

<!-- DOCGEN:START listMerchantBusinessesMainInfo -->
### listMerchantBusinessesMainInfo

**Summary**: Listall merchant businesses offering daily meals

**Description**: Retrievesa list of all businesses classified as merchants that offer daily meals.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listMerchantBusinessesWithDailyMeals)

<!-- DOCGEN:END listMerchantBusinessesMainInfo -->

<!-- DOCGEN:START listTransferBusinessesMainInfo -->
### listTransferBusinessesMainInfo

**Summary**: Listall transfer businesses (main info only)

**Description**: Retrievesa list of all transfer businesses

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listTransferBusinessesMainInfo)

<!-- DOCGEN:END listTransferBusinessesMainInfo -->

<!-- DOCGEN:START listTransferBusinesses -->
### listTransferBusinesses

**Summary**: Listall taxi businesses

**Description**: Retrievesa list of all businesses classified as taxis (TRANSFER).

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listTaxiBusinesses)

<!-- DOCGEN:END listTransferBusinesses -->

<!-- DOCGEN:START getBusinessById -->
### getBusinessById

**Summary**: Geta business by ID

**Description**: Retrievesdetailed information about a specific business by its ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessById)

<!-- DOCGEN:END getBusinessById -->

<!-- DOCGEN:START getBusinessAdminDataById -->
### getBusinessAdminDataById

**Summary**: Geta business by ID including admin data

**Description**: Retrievesdetailed information about a specific business by its ID, including data an admin can see.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessAdminDataById)

<!-- DOCGEN:END getBusinessAdminDataById -->

<!-- DOCGEN:START getBusinessForSearchById -->
### getBusinessForSearchById

**Summary**: Geta business for search by ID

**Description**: Retrievesdetailed information about a specific business by its ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessForSearchById)

<!-- DOCGEN:END getBusinessForSearchById -->

<!-- DOCGEN:START getParentBusiness -->
### getParentBusiness

**Summary**: Getparent business

**Description**: Retrievesthe parent business of a specific business by its ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getParentBusiness)

<!-- DOCGEN:END getParentBusiness -->

<!-- DOCGEN:START getChildBusinesses -->
### getChildBusinesses

**Summary**: Listchild businesses

**Description**: Retrievesa list of child businesses for a specific parent business ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | parent_business_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getChildBusinesses)

<!-- DOCGEN:END getChildBusinesses -->

<!-- DOCGEN:START createNewBusiness -->
### createNewBusiness

**Summary**: Createa new business

**Description**: Createsa new business with the provided details.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewBusiness)

<!-- DOCGEN:END createNewBusiness -->

<!-- DOCGEN:START update -->
### update

**Summary**: Updatesthe business details

**Description**: Thisendpoint is used to update the business details.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | businessId |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusiness)

<!-- DOCGEN:END update -->

<!-- DOCGEN:START updateBusinessType -->
### updateBusinessType

**Summary**: Updatesa business's type

**Description**: Thisendpoint is used to update a business's type.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessType)

<!-- DOCGEN:END updateBusinessType -->

<!-- DOCGEN:START updateIsBusinessUnit -->
### updateIsBusinessUnit

**Summary**: Updatesthe business unit status

**Description**: Thisendpoint is used to update whether a business is considered a business unit.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateIsBusinessUnit)

<!-- DOCGEN:END updateIsBusinessUnit -->

<!-- DOCGEN:START updateBusinessGroupName -->
### updateBusinessGroupName

**Summary**: Updatesa business's group name

**Description**: Thisendpoint is used to update a business's group name.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessGroupName)

<!-- DOCGEN:END updateBusinessGroupName -->

<!-- DOCGEN:START updateBusinessEmail -->
### updateBusinessEmail

**Summary**: Updatesa business's email

**Description**: Thisendpoint is used to update a business's email address.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessEmail)

<!-- DOCGEN:END updateBusinessEmail -->

<!-- DOCGEN:START updateBusinessTelephone -->
### updateBusinessTelephone

**Summary**: Updatesa business's telephone

**Description**: Thisendpoint is used to update a business's telephone number.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessTelephone)

<!-- DOCGEN:END updateBusinessTelephone -->

<!-- DOCGEN:START updateBusinessWorkingHours -->
### updateBusinessWorkingHours

**Summary**: Updatesa business's working hours

**Description**: Thisendpoint is used to update a business's working hours.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessWorkingHours)

<!-- DOCGEN:END updateBusinessWorkingHours -->

<!-- DOCGEN:START updateRestaurantOverwhelmed -->
### updateRestaurantOverwhelmed

**Summary**: Updatesthe overwhelmed status of a restaurant

**Description**: Thisendpoint is used to update whether a restaurant is considered overwhelmed.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (optional)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateRestaurantOverwhelmed)

<!-- DOCGEN:END updateRestaurantOverwhelmed -->

<!-- DOCGEN:START updateBusinessIsNew -->
### updateBusinessIsNew

**Summary**: Updatesthe new status of a business

**Description**: Thisendpoint is used to update whether a business is considered new.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessIsNew)

<!-- DOCGEN:END updateBusinessIsNew -->

<!-- DOCGEN:START updateBusinessIsPopular -->
### updateBusinessIsPopular

**Summary**: Updatesthe popularity status of a business

**Description**: Thisendpoint is used to update whether a business is considered popular.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessIsPopular)

<!-- DOCGEN:END updateBusinessIsPopular -->

<!-- DOCGEN:START getBusinessesByGroupName -->
### getBusinessesByGroupName

**Summary**: Searchfor businesses by business group name

**Description**: Retrievesbusinesses whose business group names contain the given search term, case-insensitively.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessesByGroupName)

<!-- DOCGEN:END getBusinessesByGroupName -->

<!-- DOCGEN:START getBusinessesByNameSearch -->
### getBusinessesByNameSearch

**Summary**: Searchfor businesses by name

**Description**: Retrievesbusinesses whose names contain the given search term, case-insensitively.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessesByNameSearch)

<!-- DOCGEN:END getBusinessesByNameSearch -->

<!-- DOCGEN:START addBusinessAddress -->
### addBusinessAddress

**Summary**: Addan address to a business

**Description**: Addsan address to a specific business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addBusinessAddress)

<!-- DOCGEN:END addBusinessAddress -->

<!-- DOCGEN:START addDeliveryAddress -->
### addDeliveryAddress

**Summary**: Adda delivery address to a business

**Description**: Addsa delivery address to a specific business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addDeliveryAddress)

<!-- DOCGEN:END addDeliveryAddress -->

<!-- DOCGEN:START updateParentBusinessId -->
### updateParentBusinessId

**Summary**: Updateparent business

**Description**: Updatesthe parent business of a specific business by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateParentBusiness)

<!-- DOCGEN:END updateParentBusinessId -->

<!-- DOCGEN:START updateBusinessAddress -->
### updateBusinessAddress

**Summary**: Updatesa business's address

**Description**: Thisendpoint is used to update a business's primary address.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessAddress)

<!-- DOCGEN:END updateBusinessAddress -->

<!-- DOCGEN:START updateBusinessDeliveryAddress -->
### updateBusinessDeliveryAddress

**Summary**: Updatesa business's delivery address

**Description**: Thisendpoint is used to update a business's delivery address.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessDeliveryAddress)

<!-- DOCGEN:END updateBusinessDeliveryAddress -->

<!-- DOCGEN:START deleteBusiness -->
### deleteBusiness

**Summary**: Deletea business

**Description**: Deletesa business by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deleteBusiness)

<!-- DOCGEN:END deleteBusiness -->

<!-- DOCGEN:START removeParentBusinessId -->
### removeParentBusinessId

**Summary**: Removea child business from its parent

**Description**: Clearsthe parent business association for a given child business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/removeChildBusiness)

<!-- DOCGEN:END removeParentBusinessId -->

<!-- DOCGEN:START reviewBusiness -->
### reviewBusiness

**Summary**: Reviewa business

**Description**: Thisendpoint is used add a review of business.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/reviewBusiness)

<!-- DOCGEN:END reviewBusiness -->

<!-- DOCGEN:START confirmBusinessReview -->
### confirmBusinessReview

<!-- DOCGEN:END confirmBusinessReview -->

<!-- DOCGEN:START createPaymentIntent -->
### createPaymentIntent

**Summary**: Createa payment intent

**Description**: Thisendpoint is used to create a payment intent.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createPaymentIntent)

<!-- DOCGEN:END createPaymentIntent -->

<!-- DOCGEN:START manualSortScheduledUsers -->
### manualSortScheduledUsers

**Summary**: Manuallysort scheduled users

**Description**: Thisendpoint is used to manually sort scheduled users.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/manualSortScheduledUsers)

<!-- DOCGEN:END manualSortScheduledUsers -->

<!-- DOCGEN:START addScheduledUserSortingType -->
### addScheduledUserSortingType

**Summary**: Addsorting type for scheduled users

**Description**: Thisendpoint is used to add the sorting type for scheduled users.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addScheduledUserSortingType)

<!-- DOCGEN:END addScheduledUserSortingType -->

<!-- DOCGEN:START getBusinessEarnings -->
### getBusinessEarnings

**Summary**: Getearnings for a specific business

**Description**: Retrievesearnings data for a specific business based on the provided business ID and date range.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Responses:**
- 200
- 400
- 404

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`
- ⚠️ Could not parse: `404.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessEarnings)

<!-- DOCGEN:END getBusinessEarnings -->

<!-- DOCGEN:START getAllBusinessesEarnings -->
### getAllBusinessesEarnings

**Summary**: Getearnings for all businesses

**Description**: Retrievesearnings data for all businesses of type MERCHANT based on the provided date range.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAllBusinessesEarnings)

<!-- DOCGEN:END getAllBusinessesEarnings -->

<!-- DOCGEN:START getTotalEarnings -->
### getTotalEarnings

**Summary**: Gettotal earnings for completed delivery orders

**Description**: Retrievesthe total earnings from all completed delivery orders.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getTotalEarnings)

<!-- DOCGEN:END getTotalEarnings -->

<!-- DOCGEN:START getBusinessTotalEarnings -->
### getBusinessTotalEarnings

**Summary**: Gettotal earnings for a specific business

**Description**: Retrievesthe total earnings of a specific business based on completed orders.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessTotalEarnings)

<!-- DOCGEN:END getBusinessTotalEarnings -->

<!-- DOCGEN:START getBusinessReviewsById -->
### getBusinessReviewsById

<!-- DOCGEN:END getBusinessReviewsById -->

<!-- DOCGEN:START editBusiness -->
### editBusiness

**Summary**: Editbusiness details

**Description**: Thisendpoint is used to update multiple details of a business, including address, delivery address, finances, and other specific data.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/editBusiness)

<!-- DOCGEN:END editBusiness -->

<!-- DOCGEN:START getBusinessStripeStatusByBusinessId -->
### getBusinessStripeStatusByBusinessId

<!-- DOCGEN:END getBusinessStripeStatusByBusinessId -->

<!-- DOCGEN:START generateBusinessStripeByBusinessId -->
### generateBusinessStripeByBusinessId

<!-- DOCGEN:END generateBusinessStripeByBusinessId -->

<!-- DOCGEN:START onboardingEnd -->
### onboardingEnd

<!-- DOCGEN:END onboardingEnd -->

<!-- DOCGEN:START getBusynessFactorsBusinessIdList -->
### getBusynessFactorsBusinessIdList

<!-- DOCGEN:END getBusynessFactorsBusinessIdList -->

<!-- DOCGEN:START addBusinessToFavorites -->
### addBusinessToFavorites

<!-- DOCGEN:END addBusinessToFavorites -->

<!-- DOCGEN:START removeBusinessFromFavorites -->
### removeBusinessFromFavorites

<!-- DOCGEN:END removeBusinessFromFavorites -->

<!-- DOCGEN:START getFavoriteBusinesses -->
### getFavoriteBusinesses

<!-- DOCGEN:END getFavoriteBusinesses -->

<!-- DOCGEN:START getScheduledUsersByBusinessId -->
### getScheduledUsersByBusinessId

<!-- DOCGEN:END getScheduledUsersByBusinessId -->

<!-- DOCGEN:START createScoringPointsHandler -->
### createScoringPointsHandler

<!-- DOCGEN:END createScoringPointsHandler -->

<!-- DOCGEN:START getPurchaseOrderLimit -->
### getPurchaseOrderLimit

<!-- DOCGEN:END getPurchaseOrderLimit -->

<!-- DOCGEN:START activateBusiness -->
### activateBusiness

**Summary**: Activate a business

**Description**: Activates a business.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/activateBusiness )

<!-- DOCGEN:END activateBusiness -->

<!-- DOCGEN:START deactivateBusiness -->
### deactivateBusiness

**Summary**: Deactivate a business

**Description**: Deactivates a business.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deactivateBusiness )

<!-- DOCGEN:END deactivateBusiness -->

<!-- DOCGEN:START listBusinesses -->
### listBusinesses

**Summary**: Get a list of businesses

**Description**: Returns a list of businesses.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinesses )

<!-- DOCGEN:END listBusinesses -->

<!-- DOCGEN:START getBusinessesByIds -->
### getBusinessesByIds

**Summary**: Get a list of businesses business_ids

**Description**: Returns a list of businesses.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessesByIds )

<!-- DOCGEN:END getBusinessesByIds -->

<!-- DOCGEN:START searchBusinesses -->
### searchBusinesses

**Summary**: Get a list of businesses by query, location and categories

**Description**: Returns a list of businesses.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessesSearch )

<!-- DOCGEN:END searchBusinesses -->

<!-- DOCGEN:START listMerchantBusinesses -->
### listMerchantBusinesses

**Summary**: List all merchant businesses

**Description**: Retrieves a list of all businesses classified as merchants.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listMerchantBusinesses )

<!-- DOCGEN:END listMerchantBusinesses -->

<!-- DOCGEN:START listPromoSectionsWithMerchants -->
### listPromoSectionsWithMerchants

**Summary**: List all merchant businesses grouped by promoSections

**Description**: Retrieves a list of all businesses classified as merchants.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listMerchantBusinesses )

<!-- DOCGEN:END listPromoSectionsWithMerchants -->

<!-- DOCGEN:START listMerchantBusinessesWithDailyMeals -->
### listMerchantBusinessesWithDailyMeals

**Summary**: List all merchant businesses offering daily meals

**Description**: Retrieves a list of all businesses classified as merchants that offer daily meals.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listMerchantBusinessesWithDailyMeals )

<!-- DOCGEN:END listMerchantBusinessesWithDailyMeals -->

<!-- DOCGEN:START listMerchantBusinessesMainInfo -->
### listMerchantBusinessesMainInfo

**Summary**: List all merchant businesses offering daily meals

**Description**: Retrieves a list of all businesses classified as merchants that offer daily meals.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listMerchantBusinessesWithDailyMeals )

<!-- DOCGEN:END listMerchantBusinessesMainInfo -->

<!-- DOCGEN:START listTransferBusinessesMainInfo -->
### listTransferBusinessesMainInfo

**Summary**: List all transfer businesses (main info only)

**Description**: Retrieves a list of all transfer businesses

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listTransferBusinessesMainInfo )

<!-- DOCGEN:END listTransferBusinessesMainInfo -->

<!-- DOCGEN:START listTransferBusinesses -->
### listTransferBusinesses

**Summary**: List all taxi businesses

**Description**: Retrieves a list of all businesses classified as taxis (TRANSFER).

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listTaxiBusinesses )

<!-- DOCGEN:END listTransferBusinesses -->

<!-- DOCGEN:START getBusinessById -->
### getBusinessById

**Summary**: Get a business by ID

**Description**: Retrieves detailed information about a specific business by its ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessById )

<!-- DOCGEN:END getBusinessById -->

<!-- DOCGEN:START getBusinessAdminDataById -->
### getBusinessAdminDataById

**Summary**: Get a business by ID including admin data

**Description**: Retrieves detailed information about a specific business by its ID, including data an admin can see.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessAdminDataById )

<!-- DOCGEN:END getBusinessAdminDataById -->

<!-- DOCGEN:START getBusinessForSearchById -->
### getBusinessForSearchById

**Summary**: Get a business for search by ID

**Description**: Retrieves detailed information about a specific business by its ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessForSearchById )

<!-- DOCGEN:END getBusinessForSearchById -->

<!-- DOCGEN:START getParentBusiness -->
### getParentBusiness

**Summary**: Get parent business

**Description**: Retrieves the parent business of a specific business by its ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getParentBusiness )

<!-- DOCGEN:END getParentBusiness -->

<!-- DOCGEN:START getChildBusinesses -->
### getChildBusinesses

**Summary**: List child businesses

**Description**: Retrieves a list of child businesses for a specific parent business ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | parent_business_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getChildBusinesses )

<!-- DOCGEN:END getChildBusinesses -->

<!-- DOCGEN:START createNewBusiness -->
### createNewBusiness

**Summary**: Create a new business

**Description**: Creates a new business with the provided details.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewBusiness )

<!-- DOCGEN:END createNewBusiness -->

<!-- DOCGEN:START update -->
### update

**Summary**: Updates the business details

**Description**: This endpoint is used to update the business details.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | businessId |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusiness )

<!-- DOCGEN:END update -->

<!-- DOCGEN:START updateBusinessType -->
### updateBusinessType

**Summary**: Updates a business's type

**Description**: This endpoint is used to update a business's type.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessType )

<!-- DOCGEN:END updateBusinessType -->

<!-- DOCGEN:START updateIsBusinessUnit -->
### updateIsBusinessUnit

**Summary**: Updates the business unit status

**Description**: This endpoint is used to update whether a business is considered a business unit.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateIsBusinessUnit )

<!-- DOCGEN:END updateIsBusinessUnit -->

<!-- DOCGEN:START updateBusinessGroupName -->
### updateBusinessGroupName

**Summary**: Updates a business's group name

**Description**: This endpoint is used to update a business's group name.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessGroupName )

<!-- DOCGEN:END updateBusinessGroupName -->

<!-- DOCGEN:START updateBusinessEmail -->
### updateBusinessEmail

**Summary**: Updates a business's email

**Description**: This endpoint is used to update a business's email address.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessEmail )

<!-- DOCGEN:END updateBusinessEmail -->

<!-- DOCGEN:START updateBusinessTelephone -->
### updateBusinessTelephone

**Summary**: Updates a business's telephone

**Description**: This endpoint is used to update a business's telephone number.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessTelephone )

<!-- DOCGEN:END updateBusinessTelephone -->

<!-- DOCGEN:START updateBusinessWorkingHours -->
### updateBusinessWorkingHours

**Summary**: Updates a business's working hours

**Description**: This endpoint is used to update a business's working hours.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessWorkingHours )

<!-- DOCGEN:END updateBusinessWorkingHours -->

<!-- DOCGEN:START updateRestaurantOverwhelmed -->
### updateRestaurantOverwhelmed

**Summary**: Updates the overwhelmed status of a restaurant

**Description**: This endpoint is used to update whether a restaurant is considered overwhelmed.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (optional)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateRestaurantOverwhelmed )

<!-- DOCGEN:END updateRestaurantOverwhelmed -->

<!-- DOCGEN:START updateBusinessIsNew -->
### updateBusinessIsNew

**Summary**: Updates the new status of a business

**Description**: This endpoint is used to update whether a business is considered new.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessIsNew )

<!-- DOCGEN:END updateBusinessIsNew -->

<!-- DOCGEN:START updateBusinessIsPopular -->
### updateBusinessIsPopular

**Summary**: Updates the popularity status of a business

**Description**: This endpoint is used to update whether a business is considered popular.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessIsPopular )

<!-- DOCGEN:END updateBusinessIsPopular -->

<!-- DOCGEN:START getBusinessesByGroupName -->
### getBusinessesByGroupName

**Summary**: Search for businesses by business group name

**Description**: Retrieves businesses whose business group names contain the given search term, case-insensitively.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessesByGroupName )

<!-- DOCGEN:END getBusinessesByGroupName -->

<!-- DOCGEN:START getBusinessesByNameSearch -->
### getBusinessesByNameSearch

**Summary**: Search for businesses by name

**Description**: Retrieves businesses whose names contain the given search term, case-insensitively.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessesByNameSearch )

<!-- DOCGEN:END getBusinessesByNameSearch -->

<!-- DOCGEN:START addBusinessAddress -->
### addBusinessAddress

**Summary**: Add an address to a business

**Description**: Adds an address to a specific business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addBusinessAddress )

<!-- DOCGEN:END addBusinessAddress -->

<!-- DOCGEN:START addDeliveryAddress -->
### addDeliveryAddress

**Summary**: Add a delivery address to a business

**Description**: Adds a delivery address to a specific business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addDeliveryAddress )

<!-- DOCGEN:END addDeliveryAddress -->

<!-- DOCGEN:START updateParentBusinessId -->
### updateParentBusinessId

**Summary**: Update parent business

**Description**: Updates the parent business of a specific business by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateParentBusiness )

<!-- DOCGEN:END updateParentBusinessId -->

<!-- DOCGEN:START updateBusinessAddress -->
### updateBusinessAddress

**Summary**: Updates a business's address

**Description**: This endpoint is used to update a business's primary address.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessAddress )

<!-- DOCGEN:END updateBusinessAddress -->

<!-- DOCGEN:START updateBusinessDeliveryAddress -->
### updateBusinessDeliveryAddress

**Summary**: Updates a business's delivery address

**Description**: This endpoint is used to update a business's delivery address.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessDeliveryAddress )

<!-- DOCGEN:END updateBusinessDeliveryAddress -->

<!-- DOCGEN:START deleteBusiness -->
### deleteBusiness

**Summary**: Delete a business

**Description**: Deletes a business by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deleteBusiness )

<!-- DOCGEN:END deleteBusiness -->

<!-- DOCGEN:START removeParentBusinessId -->
### removeParentBusinessId

**Summary**: Remove a child business from its parent

**Description**: Clears the parent business association for a given child business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/removeChildBusiness )

<!-- DOCGEN:END removeParentBusinessId -->

<!-- DOCGEN:START reviewBusiness -->
### reviewBusiness

**Summary**: Review a business

**Description**: This endpoint is used add a review of business.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/reviewBusiness )

<!-- DOCGEN:END reviewBusiness -->

<!-- DOCGEN:START confirmBusinessReview -->
### confirmBusinessReview

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END confirmBusinessReview -->

<!-- DOCGEN:START createPaymentIntent -->
### createPaymentIntent

**Summary**: Create a payment intent

**Description**: This endpoint is used to create a payment intent.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createPaymentIntent )

<!-- DOCGEN:END createPaymentIntent -->

<!-- DOCGEN:START manualSortScheduledUsers -->
### manualSortScheduledUsers

**Summary**: Manually sort scheduled users

**Description**: This endpoint is used to manually sort scheduled users.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/manualSortScheduledUsers )

<!-- DOCGEN:END manualSortScheduledUsers -->

<!-- DOCGEN:START addScheduledUserSortingType -->
### addScheduledUserSortingType

**Summary**: Add sorting type for scheduled users

**Description**: This endpoint is used to add the sorting type for scheduled users.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addScheduledUserSortingType )

<!-- DOCGEN:END addScheduledUserSortingType -->

<!-- DOCGEN:START getBusinessEarnings -->
### getBusinessEarnings

**Summary**: Get earnings for a specific business

**Description**: Retrieves earnings data for a specific business based on the provided business ID and date range.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Responses:**
- 200
- 400
- 404

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`
- ⚠️ Could not parse: `404.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessEarnings )

<!-- DOCGEN:END getBusinessEarnings -->

<!-- DOCGEN:START getAllBusinessesEarnings -->
### getAllBusinessesEarnings

**Summary**: Get earnings for all businesses

**Description**: Retrieves earnings data for all businesses of type MERCHANT based on the provided date range.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAllBusinessesEarnings )

<!-- DOCGEN:END getAllBusinessesEarnings -->

<!-- DOCGEN:START getTotalEarnings -->
### getTotalEarnings

**Summary**: Get total earnings for completed delivery orders

**Description**: Retrieves the total earnings from all completed delivery orders.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getTotalEarnings )

<!-- DOCGEN:END getTotalEarnings -->

<!-- DOCGEN:START getBusinessTotalEarnings -->
### getBusinessTotalEarnings

**Summary**: Get total earnings for a specific business

**Description**: Retrieves the total earnings of a specific business based on completed orders.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessTotalEarnings )

<!-- DOCGEN:END getBusinessTotalEarnings -->

<!-- DOCGEN:START getBusinessReviewsById -->
### getBusinessReviewsById

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getBusinessReviewsById -->

<!-- DOCGEN:START editBusiness -->
### editBusiness

**Summary**: Edit business details

**Description**: This endpoint is used to update multiple details of a business, including address, delivery address, finances, and other specific data.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/editBusiness )

<!-- DOCGEN:END editBusiness -->

<!-- DOCGEN:START getBusinessStripeStatusByBusinessId -->
### getBusinessStripeStatusByBusinessId

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getBusinessStripeStatusByBusinessId -->

<!-- DOCGEN:START generateBusinessStripeByBusinessId -->
### generateBusinessStripeByBusinessId

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END generateBusinessStripeByBusinessId -->

<!-- DOCGEN:START onboardingEnd -->
### onboardingEnd

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END onboardingEnd -->

<!-- DOCGEN:START getBusynessFactorsBusinessIdList -->
### getBusynessFactorsBusinessIdList

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getBusynessFactorsBusinessIdList -->

<!-- DOCGEN:START addBusinessToFavorites -->
### addBusinessToFavorites

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END addBusinessToFavorites -->

<!-- DOCGEN:START removeBusinessFromFavorites -->
### removeBusinessFromFavorites

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END removeBusinessFromFavorites -->

<!-- DOCGEN:START getFavoriteBusinesses -->
### getFavoriteBusinesses

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getFavoriteBusinesses -->

<!-- DOCGEN:START getScheduledUsersByBusinessId -->
### getScheduledUsersByBusinessId

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getScheduledUsersByBusinessId -->

<!-- DOCGEN:START createScoringPointsHandler -->
### createScoringPointsHandler

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END createScoringPointsHandler -->

<!-- DOCGEN:START getPurchaseOrderLimit -->
### getPurchaseOrderLimit

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getPurchaseOrderLimit -->

<!-- DOCGEN:START activateBusiness -->
### activateBusiness

**Summary**: Activate a business

**Description**: Activates a business.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/activateBusiness )

<!-- DOCGEN:END activateBusiness -->

<!-- DOCGEN:START deactivateBusiness -->
### deactivateBusiness

**Summary**: Deactivate a business

**Description**: Deactivates a business.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deactivateBusiness )

<!-- DOCGEN:END deactivateBusiness -->

<!-- DOCGEN:START listBusinesses -->
### listBusinesses

**Summary**: Get a list of businesses

**Description**: Returns a list of businesses.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinesses )

<!-- DOCGEN:END listBusinesses -->

<!-- DOCGEN:START getBusinessesByIds -->
### getBusinessesByIds

**Summary**: Get a list of businesses business_ids

**Description**: Returns a list of businesses.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessesByIds )

<!-- DOCGEN:END getBusinessesByIds -->

<!-- DOCGEN:START searchBusinesses -->
### searchBusinesses

**Summary**: Get a list of businesses by query, location and categories

**Description**: Returns a list of businesses.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessesSearch )

<!-- DOCGEN:END searchBusinesses -->

<!-- DOCGEN:START listMerchantBusinesses -->
### listMerchantBusinesses

**Summary**: List all merchant businesses

**Description**: Retrieves a list of all businesses classified as merchants.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listMerchantBusinesses )

<!-- DOCGEN:END listMerchantBusinesses -->

<!-- DOCGEN:START listPromoSectionsWithMerchants -->
### listPromoSectionsWithMerchants

**Summary**: List all merchant businesses grouped by promoSections

**Description**: Retrieves a list of all businesses classified as merchants.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listMerchantBusinesses )

<!-- DOCGEN:END listPromoSectionsWithMerchants -->

<!-- DOCGEN:START listMerchantBusinessesWithDailyMeals -->
### listMerchantBusinessesWithDailyMeals

**Summary**: List all merchant businesses offering daily meals

**Description**: Retrieves a list of all businesses classified as merchants that offer daily meals.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listMerchantBusinessesWithDailyMeals )

<!-- DOCGEN:END listMerchantBusinessesWithDailyMeals -->

<!-- DOCGEN:START listMerchantBusinessesMainInfo -->
### listMerchantBusinessesMainInfo

**Summary**: List all merchant businesses offering daily meals

**Description**: Retrieves a list of all businesses classified as merchants that offer daily meals.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listMerchantBusinessesWithDailyMeals )

<!-- DOCGEN:END listMerchantBusinessesMainInfo -->

<!-- DOCGEN:START listTransferBusinessesMainInfo -->
### listTransferBusinessesMainInfo

**Summary**: List all transfer businesses (main info only)

**Description**: Retrieves a list of all transfer businesses

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listTransferBusinessesMainInfo )

<!-- DOCGEN:END listTransferBusinessesMainInfo -->

<!-- DOCGEN:START listTransferBusinesses -->
### listTransferBusinesses

**Summary**: List all taxi businesses

**Description**: Retrieves a list of all businesses classified as taxis (TRANSFER).

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listTaxiBusinesses )

<!-- DOCGEN:END listTransferBusinesses -->

<!-- DOCGEN:START getBusinessById -->
### getBusinessById

**Summary**: Get a business by ID

**Description**: Retrieves detailed information about a specific business by its ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessById )

<!-- DOCGEN:END getBusinessById -->

<!-- DOCGEN:START getBusinessAdminDataById -->
### getBusinessAdminDataById

**Summary**: Get a business by ID including admin data

**Description**: Retrieves detailed information about a specific business by its ID, including data an admin can see.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessAdminDataById )

<!-- DOCGEN:END getBusinessAdminDataById -->

<!-- DOCGEN:START getBusinessForSearchById -->
### getBusinessForSearchById

**Summary**: Get a business for search by ID

**Description**: Retrieves detailed information about a specific business by its ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessForSearchById )

<!-- DOCGEN:END getBusinessForSearchById -->

<!-- DOCGEN:START getParentBusiness -->
### getParentBusiness

**Summary**: Get parent business

**Description**: Retrieves the parent business of a specific business by its ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getParentBusiness )

<!-- DOCGEN:END getParentBusiness -->

<!-- DOCGEN:START getChildBusinesses -->
### getChildBusinesses

**Summary**: List child businesses

**Description**: Retrieves a list of child businesses for a specific parent business ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | parent_business_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getChildBusinesses )

<!-- DOCGEN:END getChildBusinesses -->

<!-- DOCGEN:START createNewBusiness -->
### createNewBusiness

**Summary**: Create a new business

**Description**: Creates a new business with the provided details.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewBusiness )

<!-- DOCGEN:END createNewBusiness -->

<!-- DOCGEN:START update -->
### update

**Summary**: Updates the business details

**Description**: This endpoint is used to update the business details.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | businessId |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusiness )

<!-- DOCGEN:END update -->

<!-- DOCGEN:START updateBusinessType -->
### updateBusinessType

**Summary**: Updates a business's type

**Description**: This endpoint is used to update a business's type.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessType )

<!-- DOCGEN:END updateBusinessType -->

<!-- DOCGEN:START updateIsBusinessUnit -->
### updateIsBusinessUnit

**Summary**: Updates the business unit status

**Description**: This endpoint is used to update whether a business is considered a business unit.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateIsBusinessUnit )

<!-- DOCGEN:END updateIsBusinessUnit -->

<!-- DOCGEN:START updateBusinessGroupName -->
### updateBusinessGroupName

**Summary**: Updates a business's group name

**Description**: This endpoint is used to update a business's group name.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessGroupName )

<!-- DOCGEN:END updateBusinessGroupName -->

<!-- DOCGEN:START updateBusinessEmail -->
### updateBusinessEmail

**Summary**: Updates a business's email

**Description**: This endpoint is used to update a business's email address.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessEmail )

<!-- DOCGEN:END updateBusinessEmail -->

<!-- DOCGEN:START updateBusinessTelephone -->
### updateBusinessTelephone

**Summary**: Updates a business's telephone

**Description**: This endpoint is used to update a business's telephone number.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessTelephone )

<!-- DOCGEN:END updateBusinessTelephone -->

<!-- DOCGEN:START updateBusinessWorkingHours -->
### updateBusinessWorkingHours

**Summary**: Updates a business's working hours

**Description**: This endpoint is used to update a business's working hours.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessWorkingHours )

<!-- DOCGEN:END updateBusinessWorkingHours -->

<!-- DOCGEN:START updateRestaurantOverwhelmed -->
### updateRestaurantOverwhelmed

**Summary**: Updates the overwhelmed status of a restaurant

**Description**: This endpoint is used to update whether a restaurant is considered overwhelmed.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (optional)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateRestaurantOverwhelmed )

<!-- DOCGEN:END updateRestaurantOverwhelmed -->

<!-- DOCGEN:START updateBusinessIsNew -->
### updateBusinessIsNew

**Summary**: Updates the new status of a business

**Description**: This endpoint is used to update whether a business is considered new.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessIsNew )

<!-- DOCGEN:END updateBusinessIsNew -->

<!-- DOCGEN:START updateBusinessIsPopular -->
### updateBusinessIsPopular

**Summary**: Updates the popularity status of a business

**Description**: This endpoint is used to update whether a business is considered popular.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessIsPopular )

<!-- DOCGEN:END updateBusinessIsPopular -->

<!-- DOCGEN:START getBusinessesByGroupName -->
### getBusinessesByGroupName

**Summary**: Search for businesses by business group name

**Description**: Retrieves businesses whose business group names contain the given search term, case-insensitively.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessesByGroupName )

<!-- DOCGEN:END getBusinessesByGroupName -->

<!-- DOCGEN:START getBusinessesByNameSearch -->
### getBusinessesByNameSearch

**Summary**: Search for businesses by name

**Description**: Retrieves businesses whose names contain the given search term, case-insensitively.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessesByNameSearch )

<!-- DOCGEN:END getBusinessesByNameSearch -->

<!-- DOCGEN:START addBusinessAddress -->
### addBusinessAddress

**Summary**: Add an address to a business

**Description**: Adds an address to a specific business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addBusinessAddress )

<!-- DOCGEN:END addBusinessAddress -->

<!-- DOCGEN:START addDeliveryAddress -->
### addDeliveryAddress

**Summary**: Add a delivery address to a business

**Description**: Adds a delivery address to a specific business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addDeliveryAddress )

<!-- DOCGEN:END addDeliveryAddress -->

<!-- DOCGEN:START updateParentBusinessId -->
### updateParentBusinessId

**Summary**: Update parent business

**Description**: Updates the parent business of a specific business by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateParentBusiness )

<!-- DOCGEN:END updateParentBusinessId -->

<!-- DOCGEN:START updateBusinessAddress -->
### updateBusinessAddress

**Summary**: Updates a business's address

**Description**: This endpoint is used to update a business's primary address.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessAddress )

<!-- DOCGEN:END updateBusinessAddress -->

<!-- DOCGEN:START updateBusinessDeliveryAddress -->
### updateBusinessDeliveryAddress

**Summary**: Updates a business's delivery address

**Description**: This endpoint is used to update a business's delivery address.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessDeliveryAddress )

<!-- DOCGEN:END updateBusinessDeliveryAddress -->

<!-- DOCGEN:START deleteBusiness -->
### deleteBusiness

**Summary**: Delete a business

**Description**: Deletes a business by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deleteBusiness )

<!-- DOCGEN:END deleteBusiness -->

<!-- DOCGEN:START removeParentBusinessId -->
### removeParentBusinessId

**Summary**: Remove a child business from its parent

**Description**: Clears the parent business association for a given child business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/removeChildBusiness )

<!-- DOCGEN:END removeParentBusinessId -->

<!-- DOCGEN:START reviewBusiness -->
### reviewBusiness

**Summary**: Review a business

**Description**: This endpoint is used add a review of business.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/reviewBusiness )

<!-- DOCGEN:END reviewBusiness -->

<!-- DOCGEN:START confirmBusinessReview -->
### confirmBusinessReview

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END confirmBusinessReview -->

<!-- DOCGEN:START createPaymentIntent -->
### createPaymentIntent

**Summary**: Create a payment intent

**Description**: This endpoint is used to create a payment intent.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createPaymentIntent )

<!-- DOCGEN:END createPaymentIntent -->

<!-- DOCGEN:START manualSortScheduledUsers -->
### manualSortScheduledUsers

**Summary**: Manually sort scheduled users

**Description**: This endpoint is used to manually sort scheduled users.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/manualSortScheduledUsers )

<!-- DOCGEN:END manualSortScheduledUsers -->

<!-- DOCGEN:START addScheduledUserSortingType -->
### addScheduledUserSortingType

**Summary**: Add sorting type for scheduled users

**Description**: This endpoint is used to add the sorting type for scheduled users.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addScheduledUserSortingType )

<!-- DOCGEN:END addScheduledUserSortingType -->

<!-- DOCGEN:START getBusinessEarnings -->
### getBusinessEarnings

**Summary**: Get earnings for a specific business

**Description**: Retrieves earnings data for a specific business based on the provided business ID and date range.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Responses:**
- 200
- 400
- 404

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`
- ⚠️ Could not parse: `404.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessEarnings )

<!-- DOCGEN:END getBusinessEarnings -->

<!-- DOCGEN:START getAllBusinessesEarnings -->
### getAllBusinessesEarnings

**Summary**: Get earnings for all businesses

**Description**: Retrieves earnings data for all businesses of type MERCHANT based on the provided date range.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAllBusinessesEarnings )

<!-- DOCGEN:END getAllBusinessesEarnings -->

<!-- DOCGEN:START getTotalEarnings -->
### getTotalEarnings

**Summary**: Get total earnings for completed delivery orders

**Description**: Retrieves the total earnings from all completed delivery orders.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getTotalEarnings )

<!-- DOCGEN:END getTotalEarnings -->

<!-- DOCGEN:START getBusinessTotalEarnings -->
### getBusinessTotalEarnings

**Summary**: Get total earnings for a specific business

**Description**: Retrieves the total earnings of a specific business based on completed orders.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessTotalEarnings )

<!-- DOCGEN:END getBusinessTotalEarnings -->

<!-- DOCGEN:START getBusinessReviewsById -->
### getBusinessReviewsById

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getBusinessReviewsById -->

<!-- DOCGEN:START editBusiness -->
### editBusiness

**Summary**: Edit business details

**Description**: This endpoint is used to update multiple details of a business, including address, delivery address, finances, and other specific data.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/editBusiness )

<!-- DOCGEN:END editBusiness -->

<!-- DOCGEN:START getBusinessStripeStatusByBusinessId -->
### getBusinessStripeStatusByBusinessId

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getBusinessStripeStatusByBusinessId -->

<!-- DOCGEN:START generateBusinessStripeByBusinessId -->
### generateBusinessStripeByBusinessId

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END generateBusinessStripeByBusinessId -->

<!-- DOCGEN:START onboardingEnd -->
### onboardingEnd

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END onboardingEnd -->

<!-- DOCGEN:START getBusynessFactorsBusinessIdList -->
### getBusynessFactorsBusinessIdList

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getBusynessFactorsBusinessIdList -->

<!-- DOCGEN:START addBusinessToFavorites -->
### addBusinessToFavorites

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END addBusinessToFavorites -->

<!-- DOCGEN:START removeBusinessFromFavorites -->
### removeBusinessFromFavorites

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END removeBusinessFromFavorites -->

<!-- DOCGEN:START getFavoriteBusinesses -->
### getFavoriteBusinesses

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getFavoriteBusinesses -->

<!-- DOCGEN:START getScheduledUsersByBusinessId -->
### getScheduledUsersByBusinessId

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getScheduledUsersByBusinessId -->

<!-- DOCGEN:START createScoringPointsHandler -->
### createScoringPointsHandler

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END createScoringPointsHandler -->

<!-- DOCGEN:START getPurchaseOrderLimit -->
### getPurchaseOrderLimit

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getPurchaseOrderLimit -->

<!-- DOCGEN:START activateBusiness -->
### activateBusiness

**Summary**: Activate a business

**Description**: Activates a business.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/activateBusiness )

<!-- DOCGEN:END activateBusiness -->

<!-- DOCGEN:START deactivateBusiness -->
### deactivateBusiness

**Summary**: Deactivate a business

**Description**: Deactivates a business.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deactivateBusiness )

<!-- DOCGEN:END deactivateBusiness -->

<!-- DOCGEN:START listBusinesses -->
### listBusinesses

**Summary**: Get a list of businesses

**Description**: Returns a list of businesses.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinesses )

<!-- DOCGEN:END listBusinesses -->

<!-- DOCGEN:START getBusinessesByIds -->
### getBusinessesByIds

**Summary**: Get a list of businesses business_ids

**Description**: Returns a list of businesses.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessesByIds )

<!-- DOCGEN:END getBusinessesByIds -->

<!-- DOCGEN:START searchBusinesses -->
### searchBusinesses

**Summary**: Get a list of businesses by query, location and categories

**Description**: Returns a list of businesses.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessesSearch )

<!-- DOCGEN:END searchBusinesses -->

<!-- DOCGEN:START listMerchantBusinesses -->
### listMerchantBusinesses

**Summary**: List all merchant businesses

**Description**: Retrieves a list of all businesses classified as merchants.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listMerchantBusinesses )

<!-- DOCGEN:END listMerchantBusinesses -->

<!-- DOCGEN:START listPromoSectionsWithMerchants -->
### listPromoSectionsWithMerchants

**Summary**: List all merchant businesses grouped by promoSections

**Description**: Retrieves a list of all businesses classified as merchants.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listMerchantBusinesses )

<!-- DOCGEN:END listPromoSectionsWithMerchants -->

<!-- DOCGEN:START listMerchantBusinessesWithDailyMeals -->
### listMerchantBusinessesWithDailyMeals

**Summary**: List all merchant businesses offering daily meals

**Description**: Retrieves a list of all businesses classified as merchants that offer daily meals.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listMerchantBusinessesWithDailyMeals )

<!-- DOCGEN:END listMerchantBusinessesWithDailyMeals -->

<!-- DOCGEN:START listMerchantBusinessesMainInfo -->
### listMerchantBusinessesMainInfo

**Summary**: List all merchant businesses offering daily meals

**Description**: Retrieves a list of all businesses classified as merchants that offer daily meals.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listMerchantBusinessesWithDailyMeals )

<!-- DOCGEN:END listMerchantBusinessesMainInfo -->

<!-- DOCGEN:START listTransferBusinessesMainInfo -->
### listTransferBusinessesMainInfo

**Summary**: List all transfer businesses (main info only)

**Description**: Retrieves a list of all transfer businesses

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listTransferBusinessesMainInfo )

<!-- DOCGEN:END listTransferBusinessesMainInfo -->

<!-- DOCGEN:START listTransferBusinesses -->
### listTransferBusinesses

**Summary**: List all taxi businesses

**Description**: Retrieves a list of all businesses classified as taxis (TRANSFER).

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listTaxiBusinesses )

<!-- DOCGEN:END listTransferBusinesses -->

<!-- DOCGEN:START getBusinessById -->
### getBusinessById

**Summary**: Get a business by ID

**Description**: Retrieves detailed information about a specific business by its ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessById )

<!-- DOCGEN:END getBusinessById -->

<!-- DOCGEN:START getBusinessAdminDataById -->
### getBusinessAdminDataById

**Summary**: Get a business by ID including admin data

**Description**: Retrieves detailed information about a specific business by its ID, including data an admin can see.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessAdminDataById )

<!-- DOCGEN:END getBusinessAdminDataById -->

<!-- DOCGEN:START getBusinessForSearchById -->
### getBusinessForSearchById

**Summary**: Get a business for search by ID

**Description**: Retrieves detailed information about a specific business by its ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessForSearchById )

<!-- DOCGEN:END getBusinessForSearchById -->

<!-- DOCGEN:START getParentBusiness -->
### getParentBusiness

**Summary**: Get parent business

**Description**: Retrieves the parent business of a specific business by its ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getParentBusiness )

<!-- DOCGEN:END getParentBusiness -->

<!-- DOCGEN:START getChildBusinesses -->
### getChildBusinesses

**Summary**: List child businesses

**Description**: Retrieves a list of child businesses for a specific parent business ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | parent_business_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getChildBusinesses )

<!-- DOCGEN:END getChildBusinesses -->

<!-- DOCGEN:START createNewBusiness -->
### createNewBusiness

**Summary**: Create a new business

**Description**: Creates a new business with the provided details.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewBusiness )

<!-- DOCGEN:END createNewBusiness -->

<!-- DOCGEN:START update -->
### update

**Summary**: Updates the business details

**Description**: This endpoint is used to update the business details.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | businessId |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusiness )

<!-- DOCGEN:END update -->

<!-- DOCGEN:START updateBusinessType -->
### updateBusinessType

**Summary**: Updates a business's type

**Description**: This endpoint is used to update a business's type.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessType )

<!-- DOCGEN:END updateBusinessType -->

<!-- DOCGEN:START updateIsBusinessUnit -->
### updateIsBusinessUnit

**Summary**: Updates the business unit status

**Description**: This endpoint is used to update whether a business is considered a business unit.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateIsBusinessUnit )

<!-- DOCGEN:END updateIsBusinessUnit -->

<!-- DOCGEN:START updateBusinessGroupName -->
### updateBusinessGroupName

**Summary**: Updates a business's group name

**Description**: This endpoint is used to update a business's group name.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessGroupName )

<!-- DOCGEN:END updateBusinessGroupName -->

<!-- DOCGEN:START updateBusinessEmail -->
### updateBusinessEmail

**Summary**: Updates a business's email

**Description**: This endpoint is used to update a business's email address.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessEmail )

<!-- DOCGEN:END updateBusinessEmail -->

<!-- DOCGEN:START updateBusinessTelephone -->
### updateBusinessTelephone

**Summary**: Updates a business's telephone

**Description**: This endpoint is used to update a business's telephone number.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessTelephone )

<!-- DOCGEN:END updateBusinessTelephone -->

<!-- DOCGEN:START updateBusinessWorkingHours -->
### updateBusinessWorkingHours

**Summary**: Updates a business's working hours

**Description**: This endpoint is used to update a business's working hours.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessWorkingHours )

<!-- DOCGEN:END updateBusinessWorkingHours -->

<!-- DOCGEN:START updateRestaurantOverwhelmed -->
### updateRestaurantOverwhelmed

**Summary**: Updates the overwhelmed status of a restaurant

**Description**: This endpoint is used to update whether a restaurant is considered overwhelmed.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (optional)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateRestaurantOverwhelmed )

<!-- DOCGEN:END updateRestaurantOverwhelmed -->

<!-- DOCGEN:START updateBusinessIsNew -->
### updateBusinessIsNew

**Summary**: Updates the new status of a business

**Description**: This endpoint is used to update whether a business is considered new.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessIsNew )

<!-- DOCGEN:END updateBusinessIsNew -->

<!-- DOCGEN:START updateBusinessIsPopular -->
### updateBusinessIsPopular

**Summary**: Updates the popularity status of a business

**Description**: This endpoint is used to update whether a business is considered popular.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessIsPopular )

<!-- DOCGEN:END updateBusinessIsPopular -->

<!-- DOCGEN:START getBusinessesByGroupName -->
### getBusinessesByGroupName

**Summary**: Search for businesses by business group name

**Description**: Retrieves businesses whose business group names contain the given search term, case-insensitively.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessesByGroupName )

<!-- DOCGEN:END getBusinessesByGroupName -->

<!-- DOCGEN:START getBusinessesByNameSearch -->
### getBusinessesByNameSearch

**Summary**: Search for businesses by name

**Description**: Retrieves businesses whose names contain the given search term, case-insensitively.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessesByNameSearch )

<!-- DOCGEN:END getBusinessesByNameSearch -->

<!-- DOCGEN:START addBusinessAddress -->
### addBusinessAddress

**Summary**: Add an address to a business

**Description**: Adds an address to a specific business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addBusinessAddress )

<!-- DOCGEN:END addBusinessAddress -->

<!-- DOCGEN:START addDeliveryAddress -->
### addDeliveryAddress

**Summary**: Add a delivery address to a business

**Description**: Adds a delivery address to a specific business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addDeliveryAddress )

<!-- DOCGEN:END addDeliveryAddress -->

<!-- DOCGEN:START updateParentBusinessId -->
### updateParentBusinessId

**Summary**: Update parent business

**Description**: Updates the parent business of a specific business by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateParentBusiness )

<!-- DOCGEN:END updateParentBusinessId -->

<!-- DOCGEN:START updateBusinessAddress -->
### updateBusinessAddress

**Summary**: Updates a business's address

**Description**: This endpoint is used to update a business's primary address.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessAddress )

<!-- DOCGEN:END updateBusinessAddress -->

<!-- DOCGEN:START updateBusinessDeliveryAddress -->
### updateBusinessDeliveryAddress

**Summary**: Updates a business's delivery address

**Description**: This endpoint is used to update a business's delivery address.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessDeliveryAddress )

<!-- DOCGEN:END updateBusinessDeliveryAddress -->

<!-- DOCGEN:START deleteBusiness -->
### deleteBusiness

**Summary**: Delete a business

**Description**: Deletes a business by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deleteBusiness )

<!-- DOCGEN:END deleteBusiness -->

<!-- DOCGEN:START removeParentBusinessId -->
### removeParentBusinessId

**Summary**: Remove a child business from its parent

**Description**: Clears the parent business association for a given child business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/removeChildBusiness )

<!-- DOCGEN:END removeParentBusinessId -->

<!-- DOCGEN:START reviewBusiness -->
### reviewBusiness

**Summary**: Review a business

**Description**: This endpoint is used add a review of business.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/reviewBusiness )

<!-- DOCGEN:END reviewBusiness -->

<!-- DOCGEN:START confirmBusinessReview -->
### confirmBusinessReview

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END confirmBusinessReview -->

<!-- DOCGEN:START createPaymentIntent -->
### createPaymentIntent

**Summary**: Create a payment intent

**Description**: This endpoint is used to create a payment intent.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createPaymentIntent )

<!-- DOCGEN:END createPaymentIntent -->

<!-- DOCGEN:START manualSortScheduledUsers -->
### manualSortScheduledUsers

**Summary**: Manually sort scheduled users

**Description**: This endpoint is used to manually sort scheduled users.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/manualSortScheduledUsers )

<!-- DOCGEN:END manualSortScheduledUsers -->

<!-- DOCGEN:START addScheduledUserSortingType -->
### addScheduledUserSortingType

**Summary**: Add sorting type for scheduled users

**Description**: This endpoint is used to add the sorting type for scheduled users.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addScheduledUserSortingType )

<!-- DOCGEN:END addScheduledUserSortingType -->

<!-- DOCGEN:START getBusinessEarnings -->
### getBusinessEarnings

**Summary**: Get earnings for a specific business

**Description**: Retrieves earnings data for a specific business based on the provided business ID and date range.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Responses:**
- 200
- 400
- 404

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`
- ⚠️ Could not parse: `404.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessEarnings )

<!-- DOCGEN:END getBusinessEarnings -->

<!-- DOCGEN:START getAllBusinessesEarnings -->
### getAllBusinessesEarnings

**Summary**: Get earnings for all businesses

**Description**: Retrieves earnings data for all businesses of type MERCHANT based on the provided date range.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAllBusinessesEarnings )

<!-- DOCGEN:END getAllBusinessesEarnings -->

<!-- DOCGEN:START getTotalEarnings -->
### getTotalEarnings

**Summary**: Get total earnings for completed delivery orders

**Description**: Retrieves the total earnings from all completed delivery orders.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getTotalEarnings )

<!-- DOCGEN:END getTotalEarnings -->

<!-- DOCGEN:START getBusinessTotalEarnings -->
### getBusinessTotalEarnings

**Summary**: Get total earnings for a specific business

**Description**: Retrieves the total earnings of a specific business based on completed orders.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessTotalEarnings )

<!-- DOCGEN:END getBusinessTotalEarnings -->

<!-- DOCGEN:START getBusinessReviewsById -->
### getBusinessReviewsById

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getBusinessReviewsById -->

<!-- DOCGEN:START editBusiness -->
### editBusiness

**Summary**: Edit business details

**Description**: This endpoint is used to update multiple details of a business, including address, delivery address, finances, and other specific data.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/editBusiness )

<!-- DOCGEN:END editBusiness -->

<!-- DOCGEN:START getBusinessStripeStatusByBusinessId -->
### getBusinessStripeStatusByBusinessId

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getBusinessStripeStatusByBusinessId -->

<!-- DOCGEN:START generateBusinessStripeByBusinessId -->
### generateBusinessStripeByBusinessId

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END generateBusinessStripeByBusinessId -->

<!-- DOCGEN:START onboardingEnd -->
### onboardingEnd

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END onboardingEnd -->

<!-- DOCGEN:START getBusynessFactorsBusinessIdList -->
### getBusynessFactorsBusinessIdList

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getBusynessFactorsBusinessIdList -->

<!-- DOCGEN:START addBusinessToFavorites -->
### addBusinessToFavorites

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END addBusinessToFavorites -->

<!-- DOCGEN:START removeBusinessFromFavorites -->
### removeBusinessFromFavorites

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END removeBusinessFromFavorites -->

<!-- DOCGEN:START getFavoriteBusinesses -->
### getFavoriteBusinesses

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getFavoriteBusinesses -->

<!-- DOCGEN:START getScheduledUsersByBusinessId -->
### getScheduledUsersByBusinessId

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getScheduledUsersByBusinessId -->

<!-- DOCGEN:START createScoringPointsHandler -->
### createScoringPointsHandler

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END createScoringPointsHandler -->

<!-- DOCGEN:START getPurchaseOrderLimit -->
### getPurchaseOrderLimit

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getPurchaseOrderLimit -->

<!-- DOCGEN:START activateBusiness -->
### activateBusiness

**Summary**: Activate a business

**Description**: Activates a business.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/activateBusiness )

<!-- DOCGEN:END activateBusiness -->

<!-- DOCGEN:START deactivateBusiness -->
### deactivateBusiness

**Summary**: Deactivate a business

**Description**: Deactivates a business.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deactivateBusiness )

<!-- DOCGEN:END deactivateBusiness -->

<!-- DOCGEN:START listBusinesses -->
### listBusinesses

**Summary**: Get a list of businesses

**Description**: Returns a list of businesses.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinesses )

<!-- DOCGEN:END listBusinesses -->

<!-- DOCGEN:START getBusinessesByIds -->
### getBusinessesByIds

**Summary**: Get a list of businesses business_ids

**Description**: Returns a list of businesses.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessesByIds )

<!-- DOCGEN:END getBusinessesByIds -->

<!-- DOCGEN:START searchBusinesses -->
### searchBusinesses

**Summary**: Get a list of businesses by query, location and categories

**Description**: Returns a list of businesses.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessesSearch )

<!-- DOCGEN:END searchBusinesses -->

<!-- DOCGEN:START listMerchantBusinesses -->
### listMerchantBusinesses

**Summary**: List all merchant businesses

**Description**: Retrieves a list of all businesses classified as merchants.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listMerchantBusinesses )

<!-- DOCGEN:END listMerchantBusinesses -->

<!-- DOCGEN:START listPromoSectionsWithMerchants -->
### listPromoSectionsWithMerchants

**Summary**: List all merchant businesses grouped by promoSections

**Description**: Retrieves a list of all businesses classified as merchants.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listMerchantBusinesses )

<!-- DOCGEN:END listPromoSectionsWithMerchants -->

<!-- DOCGEN:START listMerchantBusinessesWithDailyMeals -->
### listMerchantBusinessesWithDailyMeals

**Summary**: List all merchant businesses offering daily meals

**Description**: Retrieves a list of all businesses classified as merchants that offer daily meals.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listMerchantBusinessesWithDailyMeals )

<!-- DOCGEN:END listMerchantBusinessesWithDailyMeals -->

<!-- DOCGEN:START listMerchantBusinessesMainInfo -->
### listMerchantBusinessesMainInfo

**Summary**: List all merchant businesses offering daily meals

**Description**: Retrieves a list of all businesses classified as merchants that offer daily meals.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listMerchantBusinessesWithDailyMeals )

<!-- DOCGEN:END listMerchantBusinessesMainInfo -->

<!-- DOCGEN:START listTransferBusinessesMainInfo -->
### listTransferBusinessesMainInfo

**Summary**: List all transfer businesses (main info only)

**Description**: Retrieves a list of all transfer businesses

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listTransferBusinessesMainInfo )

<!-- DOCGEN:END listTransferBusinessesMainInfo -->

<!-- DOCGEN:START listTransferBusinesses -->
### listTransferBusinesses

**Summary**: List all taxi businesses

**Description**: Retrieves a list of all businesses classified as taxis (TRANSFER).

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listTaxiBusinesses )

<!-- DOCGEN:END listTransferBusinesses -->

<!-- DOCGEN:START getBusinessById -->
### getBusinessById

**Summary**: Get a business by ID

**Description**: Retrieves detailed information about a specific business by its ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessById )

<!-- DOCGEN:END getBusinessById -->

<!-- DOCGEN:START getBusinessAdminDataById -->
### getBusinessAdminDataById

**Summary**: Get a business by ID including admin data

**Description**: Retrieves detailed information about a specific business by its ID, including data an admin can see.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessAdminDataById )

<!-- DOCGEN:END getBusinessAdminDataById -->

<!-- DOCGEN:START getBusinessForSearchById -->
### getBusinessForSearchById

**Summary**: Get a business for search by ID

**Description**: Retrieves detailed information about a specific business by its ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessForSearchById )

<!-- DOCGEN:END getBusinessForSearchById -->

<!-- DOCGEN:START getParentBusiness -->
### getParentBusiness

**Summary**: Get parent business

**Description**: Retrieves the parent business of a specific business by its ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getParentBusiness )

<!-- DOCGEN:END getParentBusiness -->

<!-- DOCGEN:START getChildBusinesses -->
### getChildBusinesses

**Summary**: List child businesses

**Description**: Retrieves a list of child businesses for a specific parent business ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | parent_business_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getChildBusinesses )

<!-- DOCGEN:END getChildBusinesses -->

<!-- DOCGEN:START createNewBusiness -->
### createNewBusiness

**Summary**: Create a new business

**Description**: Creates a new business with the provided details.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewBusiness )

<!-- DOCGEN:END createNewBusiness -->

<!-- DOCGEN:START update -->
### update

**Summary**: Updates the business details

**Description**: This endpoint is used to update the business details.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | businessId |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusiness )

<!-- DOCGEN:END update -->

<!-- DOCGEN:START updateBusinessType -->
### updateBusinessType

**Summary**: Updates a business's type

**Description**: This endpoint is used to update a business's type.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessType )

<!-- DOCGEN:END updateBusinessType -->

<!-- DOCGEN:START updateIsBusinessUnit -->
### updateIsBusinessUnit

**Summary**: Updates the business unit status

**Description**: This endpoint is used to update whether a business is considered a business unit.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateIsBusinessUnit )

<!-- DOCGEN:END updateIsBusinessUnit -->

<!-- DOCGEN:START updateBusinessGroupName -->
### updateBusinessGroupName

**Summary**: Updates a business's group name

**Description**: This endpoint is used to update a business's group name.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessGroupName )

<!-- DOCGEN:END updateBusinessGroupName -->

<!-- DOCGEN:START updateBusinessEmail -->
### updateBusinessEmail

**Summary**: Updates a business's email

**Description**: This endpoint is used to update a business's email address.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessEmail )

<!-- DOCGEN:END updateBusinessEmail -->

<!-- DOCGEN:START updateBusinessTelephone -->
### updateBusinessTelephone

**Summary**: Updates a business's telephone

**Description**: This endpoint is used to update a business's telephone number.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessTelephone )

<!-- DOCGEN:END updateBusinessTelephone -->

<!-- DOCGEN:START updateBusinessWorkingHours -->
### updateBusinessWorkingHours

**Summary**: Updates a business's working hours

**Description**: This endpoint is used to update a business's working hours.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessWorkingHours )

<!-- DOCGEN:END updateBusinessWorkingHours -->

<!-- DOCGEN:START updateRestaurantOverwhelmed -->
### updateRestaurantOverwhelmed

**Summary**: Updates the overwhelmed status of a restaurant

**Description**: This endpoint is used to update whether a restaurant is considered overwhelmed.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (optional)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateRestaurantOverwhelmed )

<!-- DOCGEN:END updateRestaurantOverwhelmed -->

<!-- DOCGEN:START updateBusinessIsNew -->
### updateBusinessIsNew

**Summary**: Updates the new status of a business

**Description**: This endpoint is used to update whether a business is considered new.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessIsNew )

<!-- DOCGEN:END updateBusinessIsNew -->

<!-- DOCGEN:START updateBusinessIsPopular -->
### updateBusinessIsPopular

**Summary**: Updates the popularity status of a business

**Description**: This endpoint is used to update whether a business is considered popular.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessIsPopular )

<!-- DOCGEN:END updateBusinessIsPopular -->

<!-- DOCGEN:START getBusinessesByGroupName -->
### getBusinessesByGroupName

**Summary**: Search for businesses by business group name

**Description**: Retrieves businesses whose business group names contain the given search term, case-insensitively.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessesByGroupName )

<!-- DOCGEN:END getBusinessesByGroupName -->

<!-- DOCGEN:START getBusinessesByNameSearch -->
### getBusinessesByNameSearch

**Summary**: Search for businesses by name

**Description**: Retrieves businesses whose names contain the given search term, case-insensitively.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessesByNameSearch )

<!-- DOCGEN:END getBusinessesByNameSearch -->

<!-- DOCGEN:START addBusinessAddress -->
### addBusinessAddress

**Summary**: Add an address to a business

**Description**: Adds an address to a specific business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addBusinessAddress )

<!-- DOCGEN:END addBusinessAddress -->

<!-- DOCGEN:START addDeliveryAddress -->
### addDeliveryAddress

**Summary**: Add a delivery address to a business

**Description**: Adds a delivery address to a specific business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addDeliveryAddress )

<!-- DOCGEN:END addDeliveryAddress -->

<!-- DOCGEN:START updateParentBusinessId -->
### updateParentBusinessId

**Summary**: Update parent business

**Description**: Updates the parent business of a specific business by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateParentBusiness )

<!-- DOCGEN:END updateParentBusinessId -->

<!-- DOCGEN:START updateBusinessAddress -->
### updateBusinessAddress

**Summary**: Updates a business's address

**Description**: This endpoint is used to update a business's primary address.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessAddress )

<!-- DOCGEN:END updateBusinessAddress -->

<!-- DOCGEN:START updateBusinessDeliveryAddress -->
### updateBusinessDeliveryAddress

**Summary**: Updates a business's delivery address

**Description**: This endpoint is used to update a business's delivery address.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessDeliveryAddress )

<!-- DOCGEN:END updateBusinessDeliveryAddress -->

<!-- DOCGEN:START deleteBusiness -->
### deleteBusiness

**Summary**: Delete a business

**Description**: Deletes a business by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deleteBusiness )

<!-- DOCGEN:END deleteBusiness -->

<!-- DOCGEN:START removeParentBusinessId -->
### removeParentBusinessId

**Summary**: Remove a child business from its parent

**Description**: Clears the parent business association for a given child business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/removeChildBusiness )

<!-- DOCGEN:END removeParentBusinessId -->

<!-- DOCGEN:START reviewBusiness -->
### reviewBusiness

**Summary**: Review a business

**Description**: This endpoint is used add a review of business.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/reviewBusiness )

<!-- DOCGEN:END reviewBusiness -->

<!-- DOCGEN:START confirmBusinessReview -->
### confirmBusinessReview

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END confirmBusinessReview -->

<!-- DOCGEN:START createPaymentIntent -->
### createPaymentIntent

**Summary**: Create a payment intent

**Description**: This endpoint is used to create a payment intent.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createPaymentIntent )

<!-- DOCGEN:END createPaymentIntent -->

<!-- DOCGEN:START manualSortScheduledUsers -->
### manualSortScheduledUsers

**Summary**: Manually sort scheduled users

**Description**: This endpoint is used to manually sort scheduled users.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/manualSortScheduledUsers )

<!-- DOCGEN:END manualSortScheduledUsers -->

<!-- DOCGEN:START addScheduledUserSortingType -->
### addScheduledUserSortingType

**Summary**: Add sorting type for scheduled users

**Description**: This endpoint is used to add the sorting type for scheduled users.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addScheduledUserSortingType )

<!-- DOCGEN:END addScheduledUserSortingType -->

<!-- DOCGEN:START getBusinessEarnings -->
### getBusinessEarnings

**Summary**: Get earnings for a specific business

**Description**: Retrieves earnings data for a specific business based on the provided business ID and date range.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Responses:**
- 200
- 400
- 404

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`
- ⚠️ Could not parse: `404.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessEarnings )

<!-- DOCGEN:END getBusinessEarnings -->

<!-- DOCGEN:START getAllBusinessesEarnings -->
### getAllBusinessesEarnings

**Summary**: Get earnings for all businesses

**Description**: Retrieves earnings data for all businesses of type MERCHANT based on the provided date range.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAllBusinessesEarnings )

<!-- DOCGEN:END getAllBusinessesEarnings -->

<!-- DOCGEN:START getTotalEarnings -->
### getTotalEarnings

**Summary**: Get total earnings for completed delivery orders

**Description**: Retrieves the total earnings from all completed delivery orders.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getTotalEarnings )

<!-- DOCGEN:END getTotalEarnings -->

<!-- DOCGEN:START getBusinessTotalEarnings -->
### getBusinessTotalEarnings

**Summary**: Get total earnings for a specific business

**Description**: Retrieves the total earnings of a specific business based on completed orders.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessTotalEarnings )

<!-- DOCGEN:END getBusinessTotalEarnings -->

<!-- DOCGEN:START getBusinessReviewsById -->
### getBusinessReviewsById

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getBusinessReviewsById -->

<!-- DOCGEN:START editBusiness -->
### editBusiness

**Summary**: Edit business details

**Description**: This endpoint is used to update multiple details of a business, including address, delivery address, finances, and other specific data.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/editBusiness )

<!-- DOCGEN:END editBusiness -->

<!-- DOCGEN:START getBusinessStripeStatusByBusinessId -->
### getBusinessStripeStatusByBusinessId

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getBusinessStripeStatusByBusinessId -->

<!-- DOCGEN:START generateBusinessStripeByBusinessId -->
### generateBusinessStripeByBusinessId

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END generateBusinessStripeByBusinessId -->

<!-- DOCGEN:START onboardingEnd -->
### onboardingEnd

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END onboardingEnd -->

<!-- DOCGEN:START getBusynessFactorsBusinessIdList -->
### getBusynessFactorsBusinessIdList

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getBusynessFactorsBusinessIdList -->

<!-- DOCGEN:START addBusinessToFavorites -->
### addBusinessToFavorites

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END addBusinessToFavorites -->

<!-- DOCGEN:START removeBusinessFromFavorites -->
### removeBusinessFromFavorites

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END removeBusinessFromFavorites -->

<!-- DOCGEN:START getFavoriteBusinesses -->
### getFavoriteBusinesses

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getFavoriteBusinesses -->

<!-- DOCGEN:START getScheduledUsersByBusinessId -->
### getScheduledUsersByBusinessId

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getScheduledUsersByBusinessId -->

<!-- DOCGEN:START createScoringPointsHandler -->
### createScoringPointsHandler

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END createScoringPointsHandler -->

<!-- DOCGEN:START getPurchaseOrderLimit -->
### getPurchaseOrderLimit

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getPurchaseOrderLimit -->

<!-- DOCGEN:START activateBusiness -->
### activateBusiness

**Summary**: Activate a business

**Description**: Activates a business.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/activateBusiness )

<!-- DOCGEN:END activateBusiness -->

<!-- DOCGEN:START deactivateBusiness -->
### deactivateBusiness

**Summary**: Deactivate a business

**Description**: Deactivates a business.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deactivateBusiness )

<!-- DOCGEN:END deactivateBusiness -->

<!-- DOCGEN:START listBusinesses -->
### listBusinesses

**Summary**: Get a list of businesses

**Description**: Returns a list of businesses.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinesses )

<!-- DOCGEN:END listBusinesses -->

<!-- DOCGEN:START getBusinessesByIds -->
### getBusinessesByIds

**Summary**: Get a list of businesses business_ids

**Description**: Returns a list of businesses.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessesByIds )

<!-- DOCGEN:END getBusinessesByIds -->

<!-- DOCGEN:START searchBusinesses -->
### searchBusinesses

**Summary**: Get a list of businesses by query, location and categories

**Description**: Returns a list of businesses.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessesSearch )

<!-- DOCGEN:END searchBusinesses -->

<!-- DOCGEN:START listMerchantBusinesses -->
### listMerchantBusinesses

**Summary**: List all merchant businesses

**Description**: Retrieves a list of all businesses classified as merchants.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listMerchantBusinesses )

<!-- DOCGEN:END listMerchantBusinesses -->

<!-- DOCGEN:START listPromoSectionsWithMerchants -->
### listPromoSectionsWithMerchants

**Summary**: List all merchant businesses grouped by promoSections

**Description**: Retrieves a list of all businesses classified as merchants.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listMerchantBusinesses )

<!-- DOCGEN:END listPromoSectionsWithMerchants -->

<!-- DOCGEN:START listMerchantBusinessesWithDailyMeals -->
### listMerchantBusinessesWithDailyMeals

**Summary**: List all merchant businesses offering daily meals

**Description**: Retrieves a list of all businesses classified as merchants that offer daily meals.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listMerchantBusinessesWithDailyMeals )

<!-- DOCGEN:END listMerchantBusinessesWithDailyMeals -->

<!-- DOCGEN:START listMerchantBusinessesMainInfo -->
### listMerchantBusinessesMainInfo

**Summary**: List all merchant businesses offering daily meals

**Description**: Retrieves a list of all businesses classified as merchants that offer daily meals.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listMerchantBusinessesWithDailyMeals )

<!-- DOCGEN:END listMerchantBusinessesMainInfo -->

<!-- DOCGEN:START listTransferBusinessesMainInfo -->
### listTransferBusinessesMainInfo

**Summary**: List all transfer businesses (main info only)

**Description**: Retrieves a list of all transfer businesses

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listTransferBusinessesMainInfo )

<!-- DOCGEN:END listTransferBusinessesMainInfo -->

<!-- DOCGEN:START listTransferBusinesses -->
### listTransferBusinesses

**Summary**: List all taxi businesses

**Description**: Retrieves a list of all businesses classified as taxis (TRANSFER).

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listTaxiBusinesses )

<!-- DOCGEN:END listTransferBusinesses -->

<!-- DOCGEN:START getBusinessById -->
### getBusinessById

**Summary**: Get a business by ID

**Description**: Retrieves detailed information about a specific business by its ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessById )

<!-- DOCGEN:END getBusinessById -->

<!-- DOCGEN:START getBusinessAdminDataById -->
### getBusinessAdminDataById

**Summary**: Get a business by ID including admin data

**Description**: Retrieves detailed information about a specific business by its ID, including data an admin can see.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessAdminDataById )

<!-- DOCGEN:END getBusinessAdminDataById -->

<!-- DOCGEN:START getBusinessForSearchById -->
### getBusinessForSearchById

**Summary**: Get a business for search by ID

**Description**: Retrieves detailed information about a specific business by its ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessForSearchById )

<!-- DOCGEN:END getBusinessForSearchById -->

<!-- DOCGEN:START getParentBusiness -->
### getParentBusiness

**Summary**: Get parent business

**Description**: Retrieves the parent business of a specific business by its ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getParentBusiness )

<!-- DOCGEN:END getParentBusiness -->

<!-- DOCGEN:START getChildBusinesses -->
### getChildBusinesses

**Summary**: List child businesses

**Description**: Retrieves a list of child businesses for a specific parent business ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | parent_business_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getChildBusinesses )

<!-- DOCGEN:END getChildBusinesses -->

<!-- DOCGEN:START createNewBusiness -->
### createNewBusiness

**Summary**: Create a new business

**Description**: Creates a new business with the provided details.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewBusiness )

<!-- DOCGEN:END createNewBusiness -->

<!-- DOCGEN:START update -->
### update

**Summary**: Updates the business details

**Description**: This endpoint is used to update the business details.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | businessId |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusiness )

<!-- DOCGEN:END update -->

<!-- DOCGEN:START updateBusinessType -->
### updateBusinessType

**Summary**: Updates a business's type

**Description**: This endpoint is used to update a business's type.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessType )

<!-- DOCGEN:END updateBusinessType -->

<!-- DOCGEN:START updateIsBusinessUnit -->
### updateIsBusinessUnit

**Summary**: Updates the business unit status

**Description**: This endpoint is used to update whether a business is considered a business unit.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateIsBusinessUnit )

<!-- DOCGEN:END updateIsBusinessUnit -->

<!-- DOCGEN:START updateBusinessGroupName -->
### updateBusinessGroupName

**Summary**: Updates a business's group name

**Description**: This endpoint is used to update a business's group name.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessGroupName )

<!-- DOCGEN:END updateBusinessGroupName -->

<!-- DOCGEN:START updateBusinessEmail -->
### updateBusinessEmail

**Summary**: Updates a business's email

**Description**: This endpoint is used to update a business's email address.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessEmail )

<!-- DOCGEN:END updateBusinessEmail -->

<!-- DOCGEN:START updateBusinessTelephone -->
### updateBusinessTelephone

**Summary**: Updates a business's telephone

**Description**: This endpoint is used to update a business's telephone number.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessTelephone )

<!-- DOCGEN:END updateBusinessTelephone -->

<!-- DOCGEN:START updateBusinessWorkingHours -->
### updateBusinessWorkingHours

**Summary**: Updates a business's working hours

**Description**: This endpoint is used to update a business's working hours.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessWorkingHours )

<!-- DOCGEN:END updateBusinessWorkingHours -->

<!-- DOCGEN:START updateRestaurantOverwhelmed -->
### updateRestaurantOverwhelmed

**Summary**: Updates the overwhelmed status of a restaurant

**Description**: This endpoint is used to update whether a restaurant is considered overwhelmed.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (optional)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateRestaurantOverwhelmed )

<!-- DOCGEN:END updateRestaurantOverwhelmed -->

<!-- DOCGEN:START updateBusinessIsNew -->
### updateBusinessIsNew

**Summary**: Updates the new status of a business

**Description**: This endpoint is used to update whether a business is considered new.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessIsNew )

<!-- DOCGEN:END updateBusinessIsNew -->

<!-- DOCGEN:START updateBusinessIsPopular -->
### updateBusinessIsPopular

**Summary**: Updates the popularity status of a business

**Description**: This endpoint is used to update whether a business is considered popular.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessIsPopular )

<!-- DOCGEN:END updateBusinessIsPopular -->

<!-- DOCGEN:START getBusinessesByGroupName -->
### getBusinessesByGroupName

**Summary**: Search for businesses by business group name

**Description**: Retrieves businesses whose business group names contain the given search term, case-insensitively.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessesByGroupName )

<!-- DOCGEN:END getBusinessesByGroupName -->

<!-- DOCGEN:START getBusinessesByNameSearch -->
### getBusinessesByNameSearch

**Summary**: Search for businesses by name

**Description**: Retrieves businesses whose names contain the given search term, case-insensitively.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessesByNameSearch )

<!-- DOCGEN:END getBusinessesByNameSearch -->

<!-- DOCGEN:START addBusinessAddress -->
### addBusinessAddress

**Summary**: Add an address to a business

**Description**: Adds an address to a specific business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addBusinessAddress )

<!-- DOCGEN:END addBusinessAddress -->

<!-- DOCGEN:START addDeliveryAddress -->
### addDeliveryAddress

**Summary**: Add a delivery address to a business

**Description**: Adds a delivery address to a specific business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addDeliveryAddress )

<!-- DOCGEN:END addDeliveryAddress -->

<!-- DOCGEN:START updateParentBusinessId -->
### updateParentBusinessId

**Summary**: Update parent business

**Description**: Updates the parent business of a specific business by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateParentBusiness )

<!-- DOCGEN:END updateParentBusinessId -->

<!-- DOCGEN:START updateBusinessAddress -->
### updateBusinessAddress

**Summary**: Updates a business's address

**Description**: This endpoint is used to update a business's primary address.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessAddress )

<!-- DOCGEN:END updateBusinessAddress -->

<!-- DOCGEN:START updateBusinessDeliveryAddress -->
### updateBusinessDeliveryAddress

**Summary**: Updates a business's delivery address

**Description**: This endpoint is used to update a business's delivery address.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessDeliveryAddress )

<!-- DOCGEN:END updateBusinessDeliveryAddress -->

<!-- DOCGEN:START deleteBusiness -->
### deleteBusiness

**Summary**: Delete a business

**Description**: Deletes a business by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deleteBusiness )

<!-- DOCGEN:END deleteBusiness -->

<!-- DOCGEN:START removeParentBusinessId -->
### removeParentBusinessId

**Summary**: Remove a child business from its parent

**Description**: Clears the parent business association for a given child business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/removeChildBusiness )

<!-- DOCGEN:END removeParentBusinessId -->

<!-- DOCGEN:START reviewBusiness -->
### reviewBusiness

**Summary**: Review a business

**Description**: This endpoint is used add a review of business.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/reviewBusiness )

<!-- DOCGEN:END reviewBusiness -->

<!-- DOCGEN:START confirmBusinessReview -->
### confirmBusinessReview

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END confirmBusinessReview -->

<!-- DOCGEN:START createPaymentIntent -->
### createPaymentIntent

**Summary**: Create a payment intent

**Description**: This endpoint is used to create a payment intent.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createPaymentIntent )

<!-- DOCGEN:END createPaymentIntent -->

<!-- DOCGEN:START manualSortScheduledUsers -->
### manualSortScheduledUsers

**Summary**: Manually sort scheduled users

**Description**: This endpoint is used to manually sort scheduled users.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/manualSortScheduledUsers )

<!-- DOCGEN:END manualSortScheduledUsers -->

<!-- DOCGEN:START addScheduledUserSortingType -->
### addScheduledUserSortingType

**Summary**: Add sorting type for scheduled users

**Description**: This endpoint is used to add the sorting type for scheduled users.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addScheduledUserSortingType )

<!-- DOCGEN:END addScheduledUserSortingType -->

<!-- DOCGEN:START getBusinessEarnings -->
### getBusinessEarnings

**Summary**: Get earnings for a specific business

**Description**: Retrieves earnings data for a specific business based on the provided business ID and date range.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Responses:**
- 200
- 400
- 404

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`
- ⚠️ Could not parse: `404.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessEarnings )

<!-- DOCGEN:END getBusinessEarnings -->

<!-- DOCGEN:START getAllBusinessesEarnings -->
### getAllBusinessesEarnings

**Summary**: Get earnings for all businesses

**Description**: Retrieves earnings data for all businesses of type MERCHANT based on the provided date range.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAllBusinessesEarnings )

<!-- DOCGEN:END getAllBusinessesEarnings -->

<!-- DOCGEN:START getTotalEarnings -->
### getTotalEarnings

**Summary**: Get total earnings for completed delivery orders

**Description**: Retrieves the total earnings from all completed delivery orders.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getTotalEarnings )

<!-- DOCGEN:END getTotalEarnings -->

<!-- DOCGEN:START getBusinessTotalEarnings -->
### getBusinessTotalEarnings

**Summary**: Get total earnings for a specific business

**Description**: Retrieves the total earnings of a specific business based on completed orders.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessTotalEarnings )

<!-- DOCGEN:END getBusinessTotalEarnings -->

<!-- DOCGEN:START getBusinessReviewsById -->
### getBusinessReviewsById

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getBusinessReviewsById -->

<!-- DOCGEN:START editBusiness -->
### editBusiness

**Summary**: Edit business details

**Description**: This endpoint is used to update multiple details of a business, including address, delivery address, finances, and other specific data.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/editBusiness )

<!-- DOCGEN:END editBusiness -->

<!-- DOCGEN:START getBusinessStripeStatusByBusinessId -->
### getBusinessStripeStatusByBusinessId

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getBusinessStripeStatusByBusinessId -->

<!-- DOCGEN:START generateBusinessStripeByBusinessId -->
### generateBusinessStripeByBusinessId

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END generateBusinessStripeByBusinessId -->

<!-- DOCGEN:START onboardingEnd -->
### onboardingEnd

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END onboardingEnd -->

<!-- DOCGEN:START getBusynessFactorsBusinessIdList -->
### getBusynessFactorsBusinessIdList

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getBusynessFactorsBusinessIdList -->

<!-- DOCGEN:START addBusinessToFavorites -->
### addBusinessToFavorites

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END addBusinessToFavorites -->

<!-- DOCGEN:START removeBusinessFromFavorites -->
### removeBusinessFromFavorites

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END removeBusinessFromFavorites -->

<!-- DOCGEN:START getFavoriteBusinesses -->
### getFavoriteBusinesses

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getFavoriteBusinesses -->

<!-- DOCGEN:START getScheduledUsersByBusinessId -->
### getScheduledUsersByBusinessId

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getScheduledUsersByBusinessId -->

<!-- DOCGEN:START createScoringPointsHandler -->
### createScoringPointsHandler

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END createScoringPointsHandler -->

<!-- DOCGEN:START getPurchaseOrderLimit -->
### getPurchaseOrderLimit

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getPurchaseOrderLimit -->

<!-- DOCGEN:START activateBusiness -->
### activateBusiness

**Summary**: Activate a business

**Description**: Activates a business.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/activateBusiness )

<!-- DOCGEN:END activateBusiness -->

<!-- DOCGEN:START deactivateBusiness -->
### deactivateBusiness

**Summary**: Deactivate a business

**Description**: Deactivates a business.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deactivateBusiness )

<!-- DOCGEN:END deactivateBusiness -->

<!-- DOCGEN:START listBusinesses -->
### listBusinesses

**Summary**: Get a list of businesses

**Description**: Returns a list of businesses.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinesses )

<!-- DOCGEN:END listBusinesses -->

<!-- DOCGEN:START getBusinessesByIds -->
### getBusinessesByIds

**Summary**: Get a list of businesses business_ids

**Description**: Returns a list of businesses.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessesByIds )

<!-- DOCGEN:END getBusinessesByIds -->

<!-- DOCGEN:START searchBusinesses -->
### searchBusinesses

**Summary**: Get a list of businesses by query, location and categories

**Description**: Returns a list of businesses.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessesSearch )

<!-- DOCGEN:END searchBusinesses -->

<!-- DOCGEN:START listMerchantBusinesses -->
### listMerchantBusinesses

**Summary**: List all merchant businesses

**Description**: Retrieves a list of all businesses classified as merchants.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listMerchantBusinesses )

<!-- DOCGEN:END listMerchantBusinesses -->

<!-- DOCGEN:START listPromoSectionsWithMerchants -->
### listPromoSectionsWithMerchants

**Summary**: List all merchant businesses grouped by promoSections

**Description**: Retrieves a list of all businesses classified as merchants.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listMerchantBusinesses )

<!-- DOCGEN:END listPromoSectionsWithMerchants -->

<!-- DOCGEN:START listMerchantBusinessesWithDailyMeals -->
### listMerchantBusinessesWithDailyMeals

**Summary**: List all merchant businesses offering daily meals

**Description**: Retrieves a list of all businesses classified as merchants that offer daily meals.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listMerchantBusinessesWithDailyMeals )

<!-- DOCGEN:END listMerchantBusinessesWithDailyMeals -->

<!-- DOCGEN:START listMerchantBusinessesMainInfo -->
### listMerchantBusinessesMainInfo

**Summary**: List all merchant businesses offering daily meals

**Description**: Retrieves a list of all businesses classified as merchants that offer daily meals.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listMerchantBusinessesWithDailyMeals )

<!-- DOCGEN:END listMerchantBusinessesMainInfo -->

<!-- DOCGEN:START listTransferBusinessesMainInfo -->
### listTransferBusinessesMainInfo

**Summary**: List all transfer businesses (main info only)

**Description**: Retrieves a list of all transfer businesses

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listTransferBusinessesMainInfo )

<!-- DOCGEN:END listTransferBusinessesMainInfo -->

<!-- DOCGEN:START listTransferBusinesses -->
### listTransferBusinesses

**Summary**: List all taxi businesses

**Description**: Retrieves a list of all businesses classified as taxis (TRANSFER).

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listTaxiBusinesses )

<!-- DOCGEN:END listTransferBusinesses -->

<!-- DOCGEN:START getBusinessById -->
### getBusinessById

**Summary**: Get a business by ID

**Description**: Retrieves detailed information about a specific business by its ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessById )

<!-- DOCGEN:END getBusinessById -->

<!-- DOCGEN:START getBusinessAdminDataById -->
### getBusinessAdminDataById

**Summary**: Get a business by ID including admin data

**Description**: Retrieves detailed information about a specific business by its ID, including data an admin can see.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessAdminDataById )

<!-- DOCGEN:END getBusinessAdminDataById -->

<!-- DOCGEN:START getBusinessForSearchById -->
### getBusinessForSearchById

**Summary**: Get a business for search by ID

**Description**: Retrieves detailed information about a specific business by its ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessForSearchById )

<!-- DOCGEN:END getBusinessForSearchById -->

<!-- DOCGEN:START getParentBusiness -->
### getParentBusiness

**Summary**: Get parent business

**Description**: Retrieves the parent business of a specific business by its ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getParentBusiness )

<!-- DOCGEN:END getParentBusiness -->

<!-- DOCGEN:START getChildBusinesses -->
### getChildBusinesses

**Summary**: List child businesses

**Description**: Retrieves a list of child businesses for a specific parent business ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | parent_business_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getChildBusinesses )

<!-- DOCGEN:END getChildBusinesses -->

<!-- DOCGEN:START createNewBusiness -->
### createNewBusiness

**Summary**: Create a new business

**Description**: Creates a new business with the provided details.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewBusiness )

<!-- DOCGEN:END createNewBusiness -->

<!-- DOCGEN:START update -->
### update

**Summary**: Updates the business details

**Description**: This endpoint is used to update the business details.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | businessId |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusiness )

<!-- DOCGEN:END update -->

<!-- DOCGEN:START updateBusinessType -->
### updateBusinessType

**Summary**: Updates a business's type

**Description**: This endpoint is used to update a business's type.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessType )

<!-- DOCGEN:END updateBusinessType -->

<!-- DOCGEN:START updateIsBusinessUnit -->
### updateIsBusinessUnit

**Summary**: Updates the business unit status

**Description**: This endpoint is used to update whether a business is considered a business unit.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateIsBusinessUnit )

<!-- DOCGEN:END updateIsBusinessUnit -->

<!-- DOCGEN:START updateBusinessGroupName -->
### updateBusinessGroupName

**Summary**: Updates a business's group name

**Description**: This endpoint is used to update a business's group name.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessGroupName )

<!-- DOCGEN:END updateBusinessGroupName -->

<!-- DOCGEN:START updateBusinessEmail -->
### updateBusinessEmail

**Summary**: Updates a business's email

**Description**: This endpoint is used to update a business's email address.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessEmail )

<!-- DOCGEN:END updateBusinessEmail -->

<!-- DOCGEN:START updateBusinessTelephone -->
### updateBusinessTelephone

**Summary**: Updates a business's telephone

**Description**: This endpoint is used to update a business's telephone number.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessTelephone )

<!-- DOCGEN:END updateBusinessTelephone -->

<!-- DOCGEN:START updateBusinessWorkingHours -->
### updateBusinessWorkingHours

**Summary**: Updates a business's working hours

**Description**: This endpoint is used to update a business's working hours.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessWorkingHours )

<!-- DOCGEN:END updateBusinessWorkingHours -->

<!-- DOCGEN:START updateRestaurantOverwhelmed -->
### updateRestaurantOverwhelmed

**Summary**: Updates the overwhelmed status of a restaurant

**Description**: This endpoint is used to update whether a restaurant is considered overwhelmed.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (optional)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateRestaurantOverwhelmed )

<!-- DOCGEN:END updateRestaurantOverwhelmed -->

<!-- DOCGEN:START updateBusinessIsNew -->
### updateBusinessIsNew

**Summary**: Updates the new status of a business

**Description**: This endpoint is used to update whether a business is considered new.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessIsNew )

<!-- DOCGEN:END updateBusinessIsNew -->

<!-- DOCGEN:START updateBusinessIsPopular -->
### updateBusinessIsPopular

**Summary**: Updates the popularity status of a business

**Description**: This endpoint is used to update whether a business is considered popular.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessIsPopular )

<!-- DOCGEN:END updateBusinessIsPopular -->

<!-- DOCGEN:START getBusinessesByGroupName -->
### getBusinessesByGroupName

**Summary**: Search for businesses by business group name

**Description**: Retrieves businesses whose business group names contain the given search term, case-insensitively.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessesByGroupName )

<!-- DOCGEN:END getBusinessesByGroupName -->

<!-- DOCGEN:START getBusinessesByNameSearch -->
### getBusinessesByNameSearch

**Summary**: Search for businesses by name

**Description**: Retrieves businesses whose names contain the given search term, case-insensitively.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessesByNameSearch )

<!-- DOCGEN:END getBusinessesByNameSearch -->

<!-- DOCGEN:START addBusinessAddress -->
### addBusinessAddress

**Summary**: Add an address to a business

**Description**: Adds an address to a specific business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addBusinessAddress )

<!-- DOCGEN:END addBusinessAddress -->

<!-- DOCGEN:START addDeliveryAddress -->
### addDeliveryAddress

**Summary**: Add a delivery address to a business

**Description**: Adds a delivery address to a specific business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addDeliveryAddress )

<!-- DOCGEN:END addDeliveryAddress -->

<!-- DOCGEN:START updateParentBusinessId -->
### updateParentBusinessId

**Summary**: Update parent business

**Description**: Updates the parent business of a specific business by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateParentBusiness )

<!-- DOCGEN:END updateParentBusinessId -->

<!-- DOCGEN:START updateBusinessAddress -->
### updateBusinessAddress

**Summary**: Updates a business's address

**Description**: This endpoint is used to update a business's primary address.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessAddress )

<!-- DOCGEN:END updateBusinessAddress -->

<!-- DOCGEN:START updateBusinessDeliveryAddress -->
### updateBusinessDeliveryAddress

**Summary**: Updates a business's delivery address

**Description**: This endpoint is used to update a business's delivery address.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessDeliveryAddress )

<!-- DOCGEN:END updateBusinessDeliveryAddress -->

<!-- DOCGEN:START deleteBusiness -->
### deleteBusiness

**Summary**: Delete a business

**Description**: Deletes a business by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deleteBusiness )

<!-- DOCGEN:END deleteBusiness -->

<!-- DOCGEN:START removeParentBusinessId -->
### removeParentBusinessId

**Summary**: Remove a child business from its parent

**Description**: Clears the parent business association for a given child business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/removeChildBusiness )

<!-- DOCGEN:END removeParentBusinessId -->

<!-- DOCGEN:START reviewBusiness -->
### reviewBusiness

**Summary**: Review a business

**Description**: This endpoint is used add a review of business.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/reviewBusiness )

<!-- DOCGEN:END reviewBusiness -->

<!-- DOCGEN:START confirmBusinessReview -->
### confirmBusinessReview

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END confirmBusinessReview -->

<!-- DOCGEN:START createPaymentIntent -->
### createPaymentIntent

**Summary**: Create a payment intent

**Description**: This endpoint is used to create a payment intent.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createPaymentIntent )

<!-- DOCGEN:END createPaymentIntent -->

<!-- DOCGEN:START manualSortScheduledUsers -->
### manualSortScheduledUsers

**Summary**: Manually sort scheduled users

**Description**: This endpoint is used to manually sort scheduled users.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/manualSortScheduledUsers )

<!-- DOCGEN:END manualSortScheduledUsers -->

<!-- DOCGEN:START addScheduledUserSortingType -->
### addScheduledUserSortingType

**Summary**: Add sorting type for scheduled users

**Description**: This endpoint is used to add the sorting type for scheduled users.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addScheduledUserSortingType )

<!-- DOCGEN:END addScheduledUserSortingType -->

<!-- DOCGEN:START getBusinessEarnings -->
### getBusinessEarnings

**Summary**: Get earnings for a specific business

**Description**: Retrieves earnings data for a specific business based on the provided business ID and date range.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Responses:**
- 200
- 400
- 404

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`
- ⚠️ Could not parse: `404.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessEarnings )

<!-- DOCGEN:END getBusinessEarnings -->

<!-- DOCGEN:START getAllBusinessesEarnings -->
### getAllBusinessesEarnings

**Summary**: Get earnings for all businesses

**Description**: Retrieves earnings data for all businesses of type MERCHANT based on the provided date range.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAllBusinessesEarnings )

<!-- DOCGEN:END getAllBusinessesEarnings -->

<!-- DOCGEN:START getTotalEarnings -->
### getTotalEarnings

**Summary**: Get total earnings for completed delivery orders

**Description**: Retrieves the total earnings from all completed delivery orders.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getTotalEarnings )

<!-- DOCGEN:END getTotalEarnings -->

<!-- DOCGEN:START getBusinessTotalEarnings -->
### getBusinessTotalEarnings

**Summary**: Get total earnings for a specific business

**Description**: Retrieves the total earnings of a specific business based on completed orders.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessTotalEarnings )

<!-- DOCGEN:END getBusinessTotalEarnings -->

<!-- DOCGEN:START getBusinessReviewsById -->
### getBusinessReviewsById

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getBusinessReviewsById -->

<!-- DOCGEN:START editBusiness -->
### editBusiness

**Summary**: Edit business details

**Description**: This endpoint is used to update multiple details of a business, including address, delivery address, finances, and other specific data.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/editBusiness )

<!-- DOCGEN:END editBusiness -->

<!-- DOCGEN:START getBusinessStripeStatusByBusinessId -->
### getBusinessStripeStatusByBusinessId

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getBusinessStripeStatusByBusinessId -->

<!-- DOCGEN:START generateBusinessStripeByBusinessId -->
### generateBusinessStripeByBusinessId

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END generateBusinessStripeByBusinessId -->

<!-- DOCGEN:START onboardingEnd -->
### onboardingEnd

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END onboardingEnd -->

<!-- DOCGEN:START getBusynessFactorsBusinessIdList -->
### getBusynessFactorsBusinessIdList

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getBusynessFactorsBusinessIdList -->

<!-- DOCGEN:START addBusinessToFavorites -->
### addBusinessToFavorites

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END addBusinessToFavorites -->

<!-- DOCGEN:START removeBusinessFromFavorites -->
### removeBusinessFromFavorites

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END removeBusinessFromFavorites -->

<!-- DOCGEN:START getFavoriteBusinesses -->
### getFavoriteBusinesses

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getFavoriteBusinesses -->

<!-- DOCGEN:START getScheduledUsersByBusinessId -->
### getScheduledUsersByBusinessId

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getScheduledUsersByBusinessId -->

<!-- DOCGEN:START createScoringPointsHandler -->
### createScoringPointsHandler

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END createScoringPointsHandler -->

<!-- DOCGEN:START getPurchaseOrderLimit -->
### getPurchaseOrderLimit

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getPurchaseOrderLimit -->

<!-- DOCGEN:START activateBusiness -->
### activateBusiness

**Summary**: Activate a business

**Description**: Activates a business.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/activateBusiness )

<!-- DOCGEN:END activateBusiness -->

<!-- DOCGEN:START deactivateBusiness -->
### deactivateBusiness

**Summary**: Deactivate a business

**Description**: Deactivates a business.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deactivateBusiness )

<!-- DOCGEN:END deactivateBusiness -->

<!-- DOCGEN:START listBusinesses -->
### listBusinesses

**Summary**: Get a list of businesses

**Description**: Returns a list of businesses.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinesses )

<!-- DOCGEN:END listBusinesses -->

<!-- DOCGEN:START getBusinessesByIds -->
### getBusinessesByIds

**Summary**: Get a list of businesses business_ids

**Description**: Returns a list of businesses.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessesByIds )

<!-- DOCGEN:END getBusinessesByIds -->

<!-- DOCGEN:START searchBusinesses -->
### searchBusinesses

**Summary**: Get a list of businesses by query, location and categories

**Description**: Returns a list of businesses.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessesSearch )

<!-- DOCGEN:END searchBusinesses -->

<!-- DOCGEN:START listMerchantBusinesses -->
### listMerchantBusinesses

**Summary**: List all merchant businesses

**Description**: Retrieves a list of all businesses classified as merchants.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listMerchantBusinesses )

<!-- DOCGEN:END listMerchantBusinesses -->

<!-- DOCGEN:START listPromoSectionsWithMerchants -->
### listPromoSectionsWithMerchants

**Summary**: List all merchant businesses grouped by promoSections

**Description**: Retrieves a list of all businesses classified as merchants.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listMerchantBusinesses )

<!-- DOCGEN:END listPromoSectionsWithMerchants -->

<!-- DOCGEN:START listMerchantBusinessesWithDailyMeals -->
### listMerchantBusinessesWithDailyMeals

**Summary**: List all merchant businesses offering daily meals

**Description**: Retrieves a list of all businesses classified as merchants that offer daily meals.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listMerchantBusinessesWithDailyMeals )

<!-- DOCGEN:END listMerchantBusinessesWithDailyMeals -->

<!-- DOCGEN:START listMerchantBusinessesMainInfo -->
### listMerchantBusinessesMainInfo

**Summary**: List all merchant businesses offering daily meals

**Description**: Retrieves a list of all businesses classified as merchants that offer daily meals.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listMerchantBusinessesWithDailyMeals )

<!-- DOCGEN:END listMerchantBusinessesMainInfo -->

<!-- DOCGEN:START listTransferBusinessesMainInfo -->
### listTransferBusinessesMainInfo

**Summary**: List all transfer businesses (main info only)

**Description**: Retrieves a list of all transfer businesses

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listTransferBusinessesMainInfo )

<!-- DOCGEN:END listTransferBusinessesMainInfo -->

<!-- DOCGEN:START listTransferBusinesses -->
### listTransferBusinesses

**Summary**: List all taxi businesses

**Description**: Retrieves a list of all businesses classified as taxis (TRANSFER).

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listTaxiBusinesses )

<!-- DOCGEN:END listTransferBusinesses -->

<!-- DOCGEN:START getBusinessById -->
### getBusinessById

**Summary**: Get a business by ID

**Description**: Retrieves detailed information about a specific business by its ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessById )

<!-- DOCGEN:END getBusinessById -->

<!-- DOCGEN:START getBusinessAdminDataById -->
### getBusinessAdminDataById

**Summary**: Get a business by ID including admin data

**Description**: Retrieves detailed information about a specific business by its ID, including data an admin can see.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessAdminDataById )

<!-- DOCGEN:END getBusinessAdminDataById -->

<!-- DOCGEN:START getBusinessForSearchById -->
### getBusinessForSearchById

**Summary**: Get a business for search by ID

**Description**: Retrieves detailed information about a specific business by its ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessForSearchById )

<!-- DOCGEN:END getBusinessForSearchById -->

<!-- DOCGEN:START getParentBusiness -->
### getParentBusiness

**Summary**: Get parent business

**Description**: Retrieves the parent business of a specific business by its ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getParentBusiness )

<!-- DOCGEN:END getParentBusiness -->

<!-- DOCGEN:START getChildBusinesses -->
### getChildBusinesses

**Summary**: List child businesses

**Description**: Retrieves a list of child businesses for a specific parent business ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | parent_business_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getChildBusinesses )

<!-- DOCGEN:END getChildBusinesses -->

<!-- DOCGEN:START createNewBusiness -->
### createNewBusiness

**Summary**: Create a new business

**Description**: Creates a new business with the provided details.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewBusiness )

<!-- DOCGEN:END createNewBusiness -->

<!-- DOCGEN:START update -->
### update

**Summary**: Updates the business details

**Description**: This endpoint is used to update the business details.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | businessId |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusiness )

<!-- DOCGEN:END update -->

<!-- DOCGEN:START updateBusinessType -->
### updateBusinessType

**Summary**: Updates a business's type

**Description**: This endpoint is used to update a business's type.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessType )

<!-- DOCGEN:END updateBusinessType -->

<!-- DOCGEN:START updateIsBusinessUnit -->
### updateIsBusinessUnit

**Summary**: Updates the business unit status

**Description**: This endpoint is used to update whether a business is considered a business unit.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateIsBusinessUnit )

<!-- DOCGEN:END updateIsBusinessUnit -->

<!-- DOCGEN:START updateBusinessGroupName -->
### updateBusinessGroupName

**Summary**: Updates a business's group name

**Description**: This endpoint is used to update a business's group name.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessGroupName )

<!-- DOCGEN:END updateBusinessGroupName -->

<!-- DOCGEN:START updateBusinessEmail -->
### updateBusinessEmail

**Summary**: Updates a business's email

**Description**: This endpoint is used to update a business's email address.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessEmail )

<!-- DOCGEN:END updateBusinessEmail -->

<!-- DOCGEN:START updateBusinessTelephone -->
### updateBusinessTelephone

**Summary**: Updates a business's telephone

**Description**: This endpoint is used to update a business's telephone number.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessTelephone )

<!-- DOCGEN:END updateBusinessTelephone -->

<!-- DOCGEN:START updateBusinessWorkingHours -->
### updateBusinessWorkingHours

**Summary**: Updates a business's working hours

**Description**: This endpoint is used to update a business's working hours.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessWorkingHours )

<!-- DOCGEN:END updateBusinessWorkingHours -->

<!-- DOCGEN:START updateRestaurantOverwhelmed -->
### updateRestaurantOverwhelmed

**Summary**: Updates the overwhelmed status of a restaurant

**Description**: This endpoint is used to update whether a restaurant is considered overwhelmed.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (optional)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateRestaurantOverwhelmed )

<!-- DOCGEN:END updateRestaurantOverwhelmed -->

<!-- DOCGEN:START updateBusinessIsNew -->
### updateBusinessIsNew

**Summary**: Updates the new status of a business

**Description**: This endpoint is used to update whether a business is considered new.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessIsNew )

<!-- DOCGEN:END updateBusinessIsNew -->

<!-- DOCGEN:START updateBusinessIsPopular -->
### updateBusinessIsPopular

**Summary**: Updates the popularity status of a business

**Description**: This endpoint is used to update whether a business is considered popular.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessIsPopular )

<!-- DOCGEN:END updateBusinessIsPopular -->

<!-- DOCGEN:START getBusinessesByGroupName -->
### getBusinessesByGroupName

**Summary**: Search for businesses by business group name

**Description**: Retrieves businesses whose business group names contain the given search term, case-insensitively.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessesByGroupName )

<!-- DOCGEN:END getBusinessesByGroupName -->

<!-- DOCGEN:START getBusinessesByNameSearch -->
### getBusinessesByNameSearch

**Summary**: Search for businesses by name

**Description**: Retrieves businesses whose names contain the given search term, case-insensitively.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessesByNameSearch )

<!-- DOCGEN:END getBusinessesByNameSearch -->

<!-- DOCGEN:START addBusinessAddress -->
### addBusinessAddress

**Summary**: Add an address to a business

**Description**: Adds an address to a specific business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addBusinessAddress )

<!-- DOCGEN:END addBusinessAddress -->

<!-- DOCGEN:START addDeliveryAddress -->
### addDeliveryAddress

**Summary**: Add a delivery address to a business

**Description**: Adds a delivery address to a specific business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addDeliveryAddress )

<!-- DOCGEN:END addDeliveryAddress -->

<!-- DOCGEN:START updateParentBusinessId -->
### updateParentBusinessId

**Summary**: Update parent business

**Description**: Updates the parent business of a specific business by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateParentBusiness )

<!-- DOCGEN:END updateParentBusinessId -->

<!-- DOCGEN:START updateBusinessAddress -->
### updateBusinessAddress

**Summary**: Updates a business's address

**Description**: This endpoint is used to update a business's primary address.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessAddress )

<!-- DOCGEN:END updateBusinessAddress -->

<!-- DOCGEN:START updateBusinessDeliveryAddress -->
### updateBusinessDeliveryAddress

**Summary**: Updates a business's delivery address

**Description**: This endpoint is used to update a business's delivery address.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessDeliveryAddress )

<!-- DOCGEN:END updateBusinessDeliveryAddress -->

<!-- DOCGEN:START deleteBusiness -->
### deleteBusiness

**Summary**: Delete a business

**Description**: Deletes a business by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deleteBusiness )

<!-- DOCGEN:END deleteBusiness -->

<!-- DOCGEN:START removeParentBusinessId -->
### removeParentBusinessId

**Summary**: Remove a child business from its parent

**Description**: Clears the parent business association for a given child business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/removeChildBusiness )

<!-- DOCGEN:END removeParentBusinessId -->

<!-- DOCGEN:START reviewBusiness -->
### reviewBusiness

**Summary**: Review a business

**Description**: This endpoint is used add a review of business.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/reviewBusiness )

<!-- DOCGEN:END reviewBusiness -->

<!-- DOCGEN:START confirmBusinessReview -->
### confirmBusinessReview

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END confirmBusinessReview -->

<!-- DOCGEN:START createPaymentIntent -->
### createPaymentIntent

**Summary**: Create a payment intent

**Description**: This endpoint is used to create a payment intent.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createPaymentIntent )

<!-- DOCGEN:END createPaymentIntent -->

<!-- DOCGEN:START manualSortScheduledUsers -->
### manualSortScheduledUsers

**Summary**: Manually sort scheduled users

**Description**: This endpoint is used to manually sort scheduled users.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/manualSortScheduledUsers )

<!-- DOCGEN:END manualSortScheduledUsers -->

<!-- DOCGEN:START addScheduledUserSortingType -->
### addScheduledUserSortingType

**Summary**: Add sorting type for scheduled users

**Description**: This endpoint is used to add the sorting type for scheduled users.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addScheduledUserSortingType )

<!-- DOCGEN:END addScheduledUserSortingType -->

<!-- DOCGEN:START getBusinessEarnings -->
### getBusinessEarnings

**Summary**: Get earnings for a specific business

**Description**: Retrieves earnings data for a specific business based on the provided business ID and date range.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Responses:**
- 200
- 400
- 404

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`
- ⚠️ Could not parse: `404.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessEarnings )

<!-- DOCGEN:END getBusinessEarnings -->

<!-- DOCGEN:START getAllBusinessesEarnings -->
### getAllBusinessesEarnings

**Summary**: Get earnings for all businesses

**Description**: Retrieves earnings data for all businesses of type MERCHANT based on the provided date range.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAllBusinessesEarnings )

<!-- DOCGEN:END getAllBusinessesEarnings -->

<!-- DOCGEN:START getTotalEarnings -->
### getTotalEarnings

**Summary**: Get total earnings for completed delivery orders

**Description**: Retrieves the total earnings from all completed delivery orders.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getTotalEarnings )

<!-- DOCGEN:END getTotalEarnings -->

<!-- DOCGEN:START getBusinessTotalEarnings -->
### getBusinessTotalEarnings

**Summary**: Get total earnings for a specific business

**Description**: Retrieves the total earnings of a specific business based on completed orders.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessTotalEarnings )

<!-- DOCGEN:END getBusinessTotalEarnings -->

<!-- DOCGEN:START getBusinessReviewsById -->
### getBusinessReviewsById

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getBusinessReviewsById -->

<!-- DOCGEN:START editBusiness -->
### editBusiness

**Summary**: Edit business details

**Description**: This endpoint is used to update multiple details of a business, including address, delivery address, finances, and other specific data.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/editBusiness )

<!-- DOCGEN:END editBusiness -->

<!-- DOCGEN:START getBusinessStripeStatusByBusinessId -->
### getBusinessStripeStatusByBusinessId

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getBusinessStripeStatusByBusinessId -->

<!-- DOCGEN:START generateBusinessStripeByBusinessId -->
### generateBusinessStripeByBusinessId

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END generateBusinessStripeByBusinessId -->

<!-- DOCGEN:START onboardingEnd -->
### onboardingEnd

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END onboardingEnd -->

<!-- DOCGEN:START getBusynessFactorsBusinessIdList -->
### getBusynessFactorsBusinessIdList

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getBusynessFactorsBusinessIdList -->

<!-- DOCGEN:START addBusinessToFavorites -->
### addBusinessToFavorites

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END addBusinessToFavorites -->

<!-- DOCGEN:START removeBusinessFromFavorites -->
### removeBusinessFromFavorites

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END removeBusinessFromFavorites -->

<!-- DOCGEN:START getFavoriteBusinesses -->
### getFavoriteBusinesses

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getFavoriteBusinesses -->

<!-- DOCGEN:START getScheduledUsersByBusinessId -->
### getScheduledUsersByBusinessId

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getScheduledUsersByBusinessId -->

<!-- DOCGEN:START createScoringPointsHandler -->
### createScoringPointsHandler

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END createScoringPointsHandler -->

<!-- DOCGEN:START getPurchaseOrderLimit -->
### getPurchaseOrderLimit

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getPurchaseOrderLimit -->

<!-- DOCGEN:START activateBusiness -->
### activateBusiness

**Summary**: Activate a business

**Description**: Activates a business.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/activateBusiness )

<!-- DOCGEN:END activateBusiness -->

<!-- DOCGEN:START deactivateBusiness -->
### deactivateBusiness

**Summary**: Deactivate a business

**Description**: Deactivates a business.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deactivateBusiness )

<!-- DOCGEN:END deactivateBusiness -->

<!-- DOCGEN:START listBusinesses -->
### listBusinesses

**Summary**: Get a list of businesses

**Description**: Returns a list of businesses.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinesses )

<!-- DOCGEN:END listBusinesses -->

<!-- DOCGEN:START getBusinessesByIds -->
### getBusinessesByIds

**Summary**: Get a list of businesses business_ids

**Description**: Returns a list of businesses.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessesByIds )

<!-- DOCGEN:END getBusinessesByIds -->

<!-- DOCGEN:START searchBusinesses -->
### searchBusinesses

**Summary**: Get a list of businesses by query, location and categories

**Description**: Returns a list of businesses.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessesSearch )

<!-- DOCGEN:END searchBusinesses -->

<!-- DOCGEN:START listMerchantBusinesses -->
### listMerchantBusinesses

**Summary**: List all merchant businesses

**Description**: Retrieves a list of all businesses classified as merchants.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listMerchantBusinesses )

<!-- DOCGEN:END listMerchantBusinesses -->

<!-- DOCGEN:START listPromoSectionsWithMerchants -->
### listPromoSectionsWithMerchants

**Summary**: List all merchant businesses grouped by promoSections

**Description**: Retrieves a list of all businesses classified as merchants.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listMerchantBusinesses )

<!-- DOCGEN:END listPromoSectionsWithMerchants -->

<!-- DOCGEN:START listMerchantBusinessesWithDailyMeals -->
### listMerchantBusinessesWithDailyMeals

**Summary**: List all merchant businesses offering daily meals

**Description**: Retrieves a list of all businesses classified as merchants that offer daily meals.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listMerchantBusinessesWithDailyMeals )

<!-- DOCGEN:END listMerchantBusinessesWithDailyMeals -->

<!-- DOCGEN:START listMerchantBusinessesMainInfo -->
### listMerchantBusinessesMainInfo

**Summary**: List all merchant businesses offering daily meals

**Description**: Retrieves a list of all businesses classified as merchants that offer daily meals.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listMerchantBusinessesWithDailyMeals )

<!-- DOCGEN:END listMerchantBusinessesMainInfo -->

<!-- DOCGEN:START listTransferBusinessesMainInfo -->
### listTransferBusinessesMainInfo

**Summary**: List all transfer businesses (main info only)

**Description**: Retrieves a list of all transfer businesses

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listTransferBusinessesMainInfo )

<!-- DOCGEN:END listTransferBusinessesMainInfo -->

<!-- DOCGEN:START listTransferBusinesses -->
### listTransferBusinesses

**Summary**: List all taxi businesses

**Description**: Retrieves a list of all businesses classified as taxis (TRANSFER).

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listTaxiBusinesses )

<!-- DOCGEN:END listTransferBusinesses -->

<!-- DOCGEN:START getBusinessById -->
### getBusinessById

**Summary**: Get a business by ID

**Description**: Retrieves detailed information about a specific business by its ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessById )

<!-- DOCGEN:END getBusinessById -->

<!-- DOCGEN:START getBusinessAdminDataById -->
### getBusinessAdminDataById

**Summary**: Get a business by ID including admin data

**Description**: Retrieves detailed information about a specific business by its ID, including data an admin can see.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessAdminDataById )

<!-- DOCGEN:END getBusinessAdminDataById -->

<!-- DOCGEN:START getBusinessForSearchById -->
### getBusinessForSearchById

**Summary**: Get a business for search by ID

**Description**: Retrieves detailed information about a specific business by its ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessForSearchById )

<!-- DOCGEN:END getBusinessForSearchById -->

<!-- DOCGEN:START getParentBusiness -->
### getParentBusiness

**Summary**: Get parent business

**Description**: Retrieves the parent business of a specific business by its ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getParentBusiness )

<!-- DOCGEN:END getParentBusiness -->

<!-- DOCGEN:START getChildBusinesses -->
### getChildBusinesses

**Summary**: List child businesses

**Description**: Retrieves a list of child businesses for a specific parent business ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | parent_business_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getChildBusinesses )

<!-- DOCGEN:END getChildBusinesses -->

<!-- DOCGEN:START createNewBusiness -->
### createNewBusiness

**Summary**: Create a new business

**Description**: Creates a new business with the provided details.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewBusiness )

<!-- DOCGEN:END createNewBusiness -->

<!-- DOCGEN:START update -->
### update

**Summary**: Updates the business details

**Description**: This endpoint is used to update the business details.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | businessId |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusiness )

<!-- DOCGEN:END update -->

<!-- DOCGEN:START updateBusinessType -->
### updateBusinessType

**Summary**: Updates a business's type

**Description**: This endpoint is used to update a business's type.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessType )

<!-- DOCGEN:END updateBusinessType -->

<!-- DOCGEN:START updateIsBusinessUnit -->
### updateIsBusinessUnit

**Summary**: Updates the business unit status

**Description**: This endpoint is used to update whether a business is considered a business unit.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateIsBusinessUnit )

<!-- DOCGEN:END updateIsBusinessUnit -->

<!-- DOCGEN:START updateBusinessGroupName -->
### updateBusinessGroupName

**Summary**: Updates a business's group name

**Description**: This endpoint is used to update a business's group name.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessGroupName )

<!-- DOCGEN:END updateBusinessGroupName -->

<!-- DOCGEN:START updateBusinessEmail -->
### updateBusinessEmail

**Summary**: Updates a business's email

**Description**: This endpoint is used to update a business's email address.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessEmail )

<!-- DOCGEN:END updateBusinessEmail -->

<!-- DOCGEN:START updateBusinessTelephone -->
### updateBusinessTelephone

**Summary**: Updates a business's telephone

**Description**: This endpoint is used to update a business's telephone number.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessTelephone )

<!-- DOCGEN:END updateBusinessTelephone -->

<!-- DOCGEN:START updateBusinessWorkingHours -->
### updateBusinessWorkingHours

**Summary**: Updates a business's working hours

**Description**: This endpoint is used to update a business's working hours.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessWorkingHours )

<!-- DOCGEN:END updateBusinessWorkingHours -->

<!-- DOCGEN:START updateRestaurantOverwhelmed -->
### updateRestaurantOverwhelmed

**Summary**: Updates the overwhelmed status of a restaurant

**Description**: This endpoint is used to update whether a restaurant is considered overwhelmed.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (optional)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateRestaurantOverwhelmed )

<!-- DOCGEN:END updateRestaurantOverwhelmed -->

<!-- DOCGEN:START updateBusinessIsNew -->
### updateBusinessIsNew

**Summary**: Updates the new status of a business

**Description**: This endpoint is used to update whether a business is considered new.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessIsNew )

<!-- DOCGEN:END updateBusinessIsNew -->

<!-- DOCGEN:START updateBusinessIsPopular -->
### updateBusinessIsPopular

**Summary**: Updates the popularity status of a business

**Description**: This endpoint is used to update whether a business is considered popular.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessIsPopular )

<!-- DOCGEN:END updateBusinessIsPopular -->

<!-- DOCGEN:START getBusinessesByGroupName -->
### getBusinessesByGroupName

**Summary**: Search for businesses by business group name

**Description**: Retrieves businesses whose business group names contain the given search term, case-insensitively.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessesByGroupName )

<!-- DOCGEN:END getBusinessesByGroupName -->

<!-- DOCGEN:START getBusinessesByNameSearch -->
### getBusinessesByNameSearch

**Summary**: Search for businesses by name

**Description**: Retrieves businesses whose names contain the given search term, case-insensitively.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessesByNameSearch )

<!-- DOCGEN:END getBusinessesByNameSearch -->

<!-- DOCGEN:START addBusinessAddress -->
### addBusinessAddress

**Summary**: Add an address to a business

**Description**: Adds an address to a specific business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addBusinessAddress )

<!-- DOCGEN:END addBusinessAddress -->

<!-- DOCGEN:START addDeliveryAddress -->
### addDeliveryAddress

**Summary**: Add a delivery address to a business

**Description**: Adds a delivery address to a specific business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addDeliveryAddress )

<!-- DOCGEN:END addDeliveryAddress -->

<!-- DOCGEN:START updateParentBusinessId -->
### updateParentBusinessId

**Summary**: Update parent business

**Description**: Updates the parent business of a specific business by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateParentBusiness )

<!-- DOCGEN:END updateParentBusinessId -->

<!-- DOCGEN:START updateBusinessAddress -->
### updateBusinessAddress

**Summary**: Updates a business's address

**Description**: This endpoint is used to update a business's primary address.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessAddress )

<!-- DOCGEN:END updateBusinessAddress -->

<!-- DOCGEN:START updateBusinessDeliveryAddress -->
### updateBusinessDeliveryAddress

**Summary**: Updates a business's delivery address

**Description**: This endpoint is used to update a business's delivery address.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessDeliveryAddress )

<!-- DOCGEN:END updateBusinessDeliveryAddress -->

<!-- DOCGEN:START deleteBusiness -->
### deleteBusiness

**Summary**: Delete a business

**Description**: Deletes a business by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deleteBusiness )

<!-- DOCGEN:END deleteBusiness -->

<!-- DOCGEN:START removeParentBusinessId -->
### removeParentBusinessId

**Summary**: Remove a child business from its parent

**Description**: Clears the parent business association for a given child business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/removeChildBusiness )

<!-- DOCGEN:END removeParentBusinessId -->

<!-- DOCGEN:START reviewBusiness -->
### reviewBusiness

**Summary**: Review a business

**Description**: This endpoint is used add a review of business.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/reviewBusiness )

<!-- DOCGEN:END reviewBusiness -->

<!-- DOCGEN:START confirmBusinessReview -->
### confirmBusinessReview

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END confirmBusinessReview -->

<!-- DOCGEN:START createPaymentIntent -->
### createPaymentIntent

**Summary**: Create a payment intent

**Description**: This endpoint is used to create a payment intent.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createPaymentIntent )

<!-- DOCGEN:END createPaymentIntent -->

<!-- DOCGEN:START manualSortScheduledUsers -->
### manualSortScheduledUsers

**Summary**: Manually sort scheduled users

**Description**: This endpoint is used to manually sort scheduled users.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/manualSortScheduledUsers )

<!-- DOCGEN:END manualSortScheduledUsers -->

<!-- DOCGEN:START addScheduledUserSortingType -->
### addScheduledUserSortingType

**Summary**: Add sorting type for scheduled users

**Description**: This endpoint is used to add the sorting type for scheduled users.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addScheduledUserSortingType )

<!-- DOCGEN:END addScheduledUserSortingType -->

<!-- DOCGEN:START getBusinessEarnings -->
### getBusinessEarnings

**Summary**: Get earnings for a specific business

**Description**: Retrieves earnings data for a specific business based on the provided business ID and date range.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Responses:**
- 200
- 400
- 404

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`
- ⚠️ Could not parse: `404.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessEarnings )

<!-- DOCGEN:END getBusinessEarnings -->

<!-- DOCGEN:START getAllBusinessesEarnings -->
### getAllBusinessesEarnings

**Summary**: Get earnings for all businesses

**Description**: Retrieves earnings data for all businesses of type MERCHANT based on the provided date range.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAllBusinessesEarnings )

<!-- DOCGEN:END getAllBusinessesEarnings -->

<!-- DOCGEN:START getTotalEarnings -->
### getTotalEarnings

**Summary**: Get total earnings for completed delivery orders

**Description**: Retrieves the total earnings from all completed delivery orders.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getTotalEarnings )

<!-- DOCGEN:END getTotalEarnings -->

<!-- DOCGEN:START getBusinessTotalEarnings -->
### getBusinessTotalEarnings

**Summary**: Get total earnings for a specific business

**Description**: Retrieves the total earnings of a specific business based on completed orders.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessTotalEarnings )

<!-- DOCGEN:END getBusinessTotalEarnings -->

<!-- DOCGEN:START getBusinessReviewsById -->
### getBusinessReviewsById

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getBusinessReviewsById -->

<!-- DOCGEN:START editBusiness -->
### editBusiness

**Summary**: Edit business details

**Description**: This endpoint is used to update multiple details of a business, including address, delivery address, finances, and other specific data.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/editBusiness )

<!-- DOCGEN:END editBusiness -->

<!-- DOCGEN:START getBusinessStripeStatusByBusinessId -->
### getBusinessStripeStatusByBusinessId

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getBusinessStripeStatusByBusinessId -->

<!-- DOCGEN:START generateBusinessStripeByBusinessId -->
### generateBusinessStripeByBusinessId

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END generateBusinessStripeByBusinessId -->

<!-- DOCGEN:START onboardingEnd -->
### onboardingEnd

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END onboardingEnd -->

<!-- DOCGEN:START getBusynessFactorsBusinessIdList -->
### getBusynessFactorsBusinessIdList

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getBusynessFactorsBusinessIdList -->

<!-- DOCGEN:START addBusinessToFavorites -->
### addBusinessToFavorites

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END addBusinessToFavorites -->

<!-- DOCGEN:START removeBusinessFromFavorites -->
### removeBusinessFromFavorites

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END removeBusinessFromFavorites -->

<!-- DOCGEN:START getFavoriteBusinesses -->
### getFavoriteBusinesses

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getFavoriteBusinesses -->

<!-- DOCGEN:START getScheduledUsersByBusinessId -->
### getScheduledUsersByBusinessId

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getScheduledUsersByBusinessId -->

<!-- DOCGEN:START createScoringPointsHandler -->
### createScoringPointsHandler

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END createScoringPointsHandler -->

<!-- DOCGEN:START getPurchaseOrderLimit -->
### getPurchaseOrderLimit

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getPurchaseOrderLimit -->

<!-- DOCGEN:START activateBusiness -->
### activateBusiness

**Summary**: Activate a business

**Description**: Activates a business.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/activateBusiness )

<!-- DOCGEN:END activateBusiness -->

<!-- DOCGEN:START deactivateBusiness -->
### deactivateBusiness

**Summary**: Deactivate a business

**Description**: Deactivates a business.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deactivateBusiness )

<!-- DOCGEN:END deactivateBusiness -->

<!-- DOCGEN:START listBusinesses -->
### listBusinesses

**Summary**: Get a list of businesses

**Description**: Returns a list of businesses.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinesses )

<!-- DOCGEN:END listBusinesses -->

<!-- DOCGEN:START getBusinessesByIds -->
### getBusinessesByIds

**Summary**: Get a list of businesses business_ids

**Description**: Returns a list of businesses.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessesByIds )

<!-- DOCGEN:END getBusinessesByIds -->

<!-- DOCGEN:START searchBusinesses -->
### searchBusinesses

**Summary**: Get a list of businesses by query, location and categories

**Description**: Returns a list of businesses.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessesSearch )

<!-- DOCGEN:END searchBusinesses -->

<!-- DOCGEN:START listMerchantBusinesses -->
### listMerchantBusinesses

**Summary**: List all merchant businesses

**Description**: Retrieves a list of all businesses classified as merchants.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listMerchantBusinesses )

<!-- DOCGEN:END listMerchantBusinesses -->

<!-- DOCGEN:START listPromoSectionsWithMerchants -->
### listPromoSectionsWithMerchants

**Summary**: List all merchant businesses grouped by promoSections

**Description**: Retrieves a list of all businesses classified as merchants.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listMerchantBusinesses )

<!-- DOCGEN:END listPromoSectionsWithMerchants -->

<!-- DOCGEN:START listMerchantBusinessesWithDailyMeals -->
### listMerchantBusinessesWithDailyMeals

**Summary**: List all merchant businesses offering daily meals

**Description**: Retrieves a list of all businesses classified as merchants that offer daily meals.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listMerchantBusinessesWithDailyMeals )

<!-- DOCGEN:END listMerchantBusinessesWithDailyMeals -->

<!-- DOCGEN:START listMerchantBusinessesMainInfo -->
### listMerchantBusinessesMainInfo

**Summary**: List all merchant businesses offering daily meals

**Description**: Retrieves a list of all businesses classified as merchants that offer daily meals.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listMerchantBusinessesWithDailyMeals )

<!-- DOCGEN:END listMerchantBusinessesMainInfo -->

<!-- DOCGEN:START listTransferBusinessesMainInfo -->
### listTransferBusinessesMainInfo

**Summary**: List all transfer businesses (main info only)

**Description**: Retrieves a list of all transfer businesses

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listTransferBusinessesMainInfo )

<!-- DOCGEN:END listTransferBusinessesMainInfo -->

<!-- DOCGEN:START listTransferBusinesses -->
### listTransferBusinesses

**Summary**: List all taxi businesses

**Description**: Retrieves a list of all businesses classified as taxis (TRANSFER).

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listTaxiBusinesses )

<!-- DOCGEN:END listTransferBusinesses -->

<!-- DOCGEN:START getBusinessById -->
### getBusinessById

**Summary**: Get a business by ID

**Description**: Retrieves detailed information about a specific business by its ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessById )

<!-- DOCGEN:END getBusinessById -->

<!-- DOCGEN:START getBusinessAdminDataById -->
### getBusinessAdminDataById

**Summary**: Get a business by ID including admin data

**Description**: Retrieves detailed information about a specific business by its ID, including data an admin can see.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessAdminDataById )

<!-- DOCGEN:END getBusinessAdminDataById -->

<!-- DOCGEN:START getBusinessForSearchById -->
### getBusinessForSearchById

**Summary**: Get a business for search by ID

**Description**: Retrieves detailed information about a specific business by its ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessForSearchById )

<!-- DOCGEN:END getBusinessForSearchById -->

<!-- DOCGEN:START getParentBusiness -->
### getParentBusiness

**Summary**: Get parent business

**Description**: Retrieves the parent business of a specific business by its ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getParentBusiness )

<!-- DOCGEN:END getParentBusiness -->

<!-- DOCGEN:START getChildBusinesses -->
### getChildBusinesses

**Summary**: List child businesses

**Description**: Retrieves a list of child businesses for a specific parent business ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | parent_business_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getChildBusinesses )

<!-- DOCGEN:END getChildBusinesses -->

<!-- DOCGEN:START createNewBusiness -->
### createNewBusiness

**Summary**: Create a new business

**Description**: Creates a new business with the provided details.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewBusiness )

<!-- DOCGEN:END createNewBusiness -->

<!-- DOCGEN:START update -->
### update

**Summary**: Updates the business details

**Description**: This endpoint is used to update the business details.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | businessId |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusiness )

<!-- DOCGEN:END update -->

<!-- DOCGEN:START updateBusinessType -->
### updateBusinessType

**Summary**: Updates a business's type

**Description**: This endpoint is used to update a business's type.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessType )

<!-- DOCGEN:END updateBusinessType -->

<!-- DOCGEN:START updateIsBusinessUnit -->
### updateIsBusinessUnit

**Summary**: Updates the business unit status

**Description**: This endpoint is used to update whether a business is considered a business unit.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateIsBusinessUnit )

<!-- DOCGEN:END updateIsBusinessUnit -->

<!-- DOCGEN:START updateBusinessGroupName -->
### updateBusinessGroupName

**Summary**: Updates a business's group name

**Description**: This endpoint is used to update a business's group name.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessGroupName )

<!-- DOCGEN:END updateBusinessGroupName -->

<!-- DOCGEN:START updateBusinessEmail -->
### updateBusinessEmail

**Summary**: Updates a business's email

**Description**: This endpoint is used to update a business's email address.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessEmail )

<!-- DOCGEN:END updateBusinessEmail -->

<!-- DOCGEN:START updateBusinessTelephone -->
### updateBusinessTelephone

**Summary**: Updates a business's telephone

**Description**: This endpoint is used to update a business's telephone number.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessTelephone )

<!-- DOCGEN:END updateBusinessTelephone -->

<!-- DOCGEN:START updateBusinessWorkingHours -->
### updateBusinessWorkingHours

**Summary**: Updates a business's working hours

**Description**: This endpoint is used to update a business's working hours.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessWorkingHours )

<!-- DOCGEN:END updateBusinessWorkingHours -->

<!-- DOCGEN:START updateRestaurantOverwhelmed -->
### updateRestaurantOverwhelmed

**Summary**: Updates the overwhelmed status of a restaurant

**Description**: This endpoint is used to update whether a restaurant is considered overwhelmed.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (optional)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateRestaurantOverwhelmed )

<!-- DOCGEN:END updateRestaurantOverwhelmed -->

<!-- DOCGEN:START updateBusinessIsNew -->
### updateBusinessIsNew

**Summary**: Updates the new status of a business

**Description**: This endpoint is used to update whether a business is considered new.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessIsNew )

<!-- DOCGEN:END updateBusinessIsNew -->

<!-- DOCGEN:START updateBusinessIsPopular -->
### updateBusinessIsPopular

**Summary**: Updates the popularity status of a business

**Description**: This endpoint is used to update whether a business is considered popular.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessIsPopular )

<!-- DOCGEN:END updateBusinessIsPopular -->

<!-- DOCGEN:START getBusinessesByGroupName -->
### getBusinessesByGroupName

**Summary**: Search for businesses by business group name

**Description**: Retrieves businesses whose business group names contain the given search term, case-insensitively.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessesByGroupName )

<!-- DOCGEN:END getBusinessesByGroupName -->

<!-- DOCGEN:START getBusinessesByNameSearch -->
### getBusinessesByNameSearch

**Summary**: Search for businesses by name

**Description**: Retrieves businesses whose names contain the given search term, case-insensitively.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessesByNameSearch )

<!-- DOCGEN:END getBusinessesByNameSearch -->

<!-- DOCGEN:START addBusinessAddress -->
### addBusinessAddress

**Summary**: Add an address to a business

**Description**: Adds an address to a specific business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addBusinessAddress )

<!-- DOCGEN:END addBusinessAddress -->

<!-- DOCGEN:START addDeliveryAddress -->
### addDeliveryAddress

**Summary**: Add a delivery address to a business

**Description**: Adds a delivery address to a specific business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addDeliveryAddress )

<!-- DOCGEN:END addDeliveryAddress -->

<!-- DOCGEN:START updateParentBusinessId -->
### updateParentBusinessId

**Summary**: Update parent business

**Description**: Updates the parent business of a specific business by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateParentBusiness )

<!-- DOCGEN:END updateParentBusinessId -->

<!-- DOCGEN:START updateBusinessAddress -->
### updateBusinessAddress

**Summary**: Updates a business's address

**Description**: This endpoint is used to update a business's primary address.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessAddress )

<!-- DOCGEN:END updateBusinessAddress -->

<!-- DOCGEN:START updateBusinessDeliveryAddress -->
### updateBusinessDeliveryAddress

**Summary**: Updates a business's delivery address

**Description**: This endpoint is used to update a business's delivery address.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessDeliveryAddress )

<!-- DOCGEN:END updateBusinessDeliveryAddress -->

<!-- DOCGEN:START deleteBusiness -->
### deleteBusiness

**Summary**: Delete a business

**Description**: Deletes a business by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deleteBusiness )

<!-- DOCGEN:END deleteBusiness -->

<!-- DOCGEN:START removeParentBusinessId -->
### removeParentBusinessId

**Summary**: Remove a child business from its parent

**Description**: Clears the parent business association for a given child business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/removeChildBusiness )

<!-- DOCGEN:END removeParentBusinessId -->

<!-- DOCGEN:START reviewBusiness -->
### reviewBusiness

**Summary**: Review a business

**Description**: This endpoint is used add a review of business.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/reviewBusiness )

<!-- DOCGEN:END reviewBusiness -->

<!-- DOCGEN:START confirmBusinessReview -->
### confirmBusinessReview

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END confirmBusinessReview -->

<!-- DOCGEN:START createPaymentIntent -->
### createPaymentIntent

**Summary**: Create a payment intent

**Description**: This endpoint is used to create a payment intent.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createPaymentIntent )

<!-- DOCGEN:END createPaymentIntent -->

<!-- DOCGEN:START manualSortScheduledUsers -->
### manualSortScheduledUsers

**Summary**: Manually sort scheduled users

**Description**: This endpoint is used to manually sort scheduled users.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/manualSortScheduledUsers )

<!-- DOCGEN:END manualSortScheduledUsers -->

<!-- DOCGEN:START addScheduledUserSortingType -->
### addScheduledUserSortingType

**Summary**: Add sorting type for scheduled users

**Description**: This endpoint is used to add the sorting type for scheduled users.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addScheduledUserSortingType )

<!-- DOCGEN:END addScheduledUserSortingType -->

<!-- DOCGEN:START getBusinessEarnings -->
### getBusinessEarnings

**Summary**: Get earnings for a specific business

**Description**: Retrieves earnings data for a specific business based on the provided business ID and date range.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Responses:**
- 200
- 400
- 404

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`
- ⚠️ Could not parse: `404.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessEarnings )

<!-- DOCGEN:END getBusinessEarnings -->

<!-- DOCGEN:START getAllBusinessesEarnings -->
### getAllBusinessesEarnings

**Summary**: Get earnings for all businesses

**Description**: Retrieves earnings data for all businesses of type MERCHANT based on the provided date range.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAllBusinessesEarnings )

<!-- DOCGEN:END getAllBusinessesEarnings -->

<!-- DOCGEN:START getTotalEarnings -->
### getTotalEarnings

**Summary**: Get total earnings for completed delivery orders

**Description**: Retrieves the total earnings from all completed delivery orders.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getTotalEarnings )

<!-- DOCGEN:END getTotalEarnings -->

<!-- DOCGEN:START getBusinessTotalEarnings -->
### getBusinessTotalEarnings

**Summary**: Get total earnings for a specific business

**Description**: Retrieves the total earnings of a specific business based on completed orders.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessTotalEarnings )

<!-- DOCGEN:END getBusinessTotalEarnings -->

<!-- DOCGEN:START getBusinessReviewsById -->
### getBusinessReviewsById

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getBusinessReviewsById -->

<!-- DOCGEN:START editBusiness -->
### editBusiness

**Summary**: Edit business details

**Description**: This endpoint is used to update multiple details of a business, including address, delivery address, finances, and other specific data.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/editBusiness )

<!-- DOCGEN:END editBusiness -->

<!-- DOCGEN:START getBusinessStripeStatusByBusinessId -->
### getBusinessStripeStatusByBusinessId

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getBusinessStripeStatusByBusinessId -->

<!-- DOCGEN:START generateBusinessStripeByBusinessId -->
### generateBusinessStripeByBusinessId

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END generateBusinessStripeByBusinessId -->

<!-- DOCGEN:START onboardingEnd -->
### onboardingEnd

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END onboardingEnd -->

<!-- DOCGEN:START getBusynessFactorsBusinessIdList -->
### getBusynessFactorsBusinessIdList

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getBusynessFactorsBusinessIdList -->

<!-- DOCGEN:START addBusinessToFavorites -->
### addBusinessToFavorites

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END addBusinessToFavorites -->

<!-- DOCGEN:START removeBusinessFromFavorites -->
### removeBusinessFromFavorites

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END removeBusinessFromFavorites -->

<!-- DOCGEN:START getFavoriteBusinesses -->
### getFavoriteBusinesses

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getFavoriteBusinesses -->

<!-- DOCGEN:START getScheduledUsersByBusinessId -->
### getScheduledUsersByBusinessId

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getScheduledUsersByBusinessId -->

<!-- DOCGEN:START createScoringPointsHandler -->
### createScoringPointsHandler

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END createScoringPointsHandler -->

<!-- DOCGEN:START getPurchaseOrderLimit -->
### getPurchaseOrderLimit

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getPurchaseOrderLimit -->

<!-- DOCGEN:START activateBusiness -->
### activateBusiness

**Summary**: Activate a business

**Description**: Activates a business.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/activateBusiness )

<!-- DOCGEN:END activateBusiness -->

<!-- DOCGEN:START deactivateBusiness -->
### deactivateBusiness

**Summary**: Deactivate a business

**Description**: Deactivates a business.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deactivateBusiness )

<!-- DOCGEN:END deactivateBusiness -->

<!-- DOCGEN:START listBusinesses -->
### listBusinesses

**Summary**: Get a list of businesses

**Description**: Returns a list of businesses.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinesses )

<!-- DOCGEN:END listBusinesses -->

<!-- DOCGEN:START getBusinessesByIds -->
### getBusinessesByIds

**Summary**: Get a list of businesses business_ids

**Description**: Returns a list of businesses.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessesByIds )

<!-- DOCGEN:END getBusinessesByIds -->

<!-- DOCGEN:START searchBusinesses -->
### searchBusinesses

**Summary**: Get a list of businesses by query, location and categories

**Description**: Returns a list of businesses.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessesSearch )

<!-- DOCGEN:END searchBusinesses -->

<!-- DOCGEN:START listMerchantBusinesses -->
### listMerchantBusinesses

**Summary**: List all merchant businesses

**Description**: Retrieves a list of all businesses classified as merchants.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listMerchantBusinesses )

<!-- DOCGEN:END listMerchantBusinesses -->

<!-- DOCGEN:START listPromoSectionsWithMerchants -->
### listPromoSectionsWithMerchants

**Summary**: List all merchant businesses grouped by promoSections

**Description**: Retrieves a list of all businesses classified as merchants.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listMerchantBusinesses )

<!-- DOCGEN:END listPromoSectionsWithMerchants -->

<!-- DOCGEN:START listMerchantBusinessesWithDailyMeals -->
### listMerchantBusinessesWithDailyMeals

**Summary**: List all merchant businesses offering daily meals

**Description**: Retrieves a list of all businesses classified as merchants that offer daily meals.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listMerchantBusinessesWithDailyMeals )

<!-- DOCGEN:END listMerchantBusinessesWithDailyMeals -->

<!-- DOCGEN:START listMerchantBusinessesMainInfo -->
### listMerchantBusinessesMainInfo

**Summary**: List all merchant businesses offering daily meals

**Description**: Retrieves a list of all businesses classified as merchants that offer daily meals.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listMerchantBusinessesWithDailyMeals )

<!-- DOCGEN:END listMerchantBusinessesMainInfo -->

<!-- DOCGEN:START listTransferBusinessesMainInfo -->
### listTransferBusinessesMainInfo

**Summary**: List all transfer businesses (main info only)

**Description**: Retrieves a list of all transfer businesses

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listTransferBusinessesMainInfo )

<!-- DOCGEN:END listTransferBusinessesMainInfo -->

<!-- DOCGEN:START listTransferBusinesses -->
### listTransferBusinesses

**Summary**: List all taxi businesses

**Description**: Retrieves a list of all businesses classified as taxis (TRANSFER).

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listTaxiBusinesses )

<!-- DOCGEN:END listTransferBusinesses -->

<!-- DOCGEN:START getBusinessById -->
### getBusinessById

**Summary**: Get a business by ID

**Description**: Retrieves detailed information about a specific business by its ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessById )

<!-- DOCGEN:END getBusinessById -->

<!-- DOCGEN:START getBusinessAdminDataById -->
### getBusinessAdminDataById

**Summary**: Get a business by ID including admin data

**Description**: Retrieves detailed information about a specific business by its ID, including data an admin can see.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessAdminDataById )

<!-- DOCGEN:END getBusinessAdminDataById -->

<!-- DOCGEN:START getBusinessForSearchById -->
### getBusinessForSearchById

**Summary**: Get a business for search by ID

**Description**: Retrieves detailed information about a specific business by its ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessForSearchById )

<!-- DOCGEN:END getBusinessForSearchById -->

<!-- DOCGEN:START getParentBusiness -->
### getParentBusiness

**Summary**: Get parent business

**Description**: Retrieves the parent business of a specific business by its ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getParentBusiness )

<!-- DOCGEN:END getParentBusiness -->

<!-- DOCGEN:START getChildBusinesses -->
### getChildBusinesses

**Summary**: List child businesses

**Description**: Retrieves a list of child businesses for a specific parent business ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | parent_business_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getChildBusinesses )

<!-- DOCGEN:END getChildBusinesses -->

<!-- DOCGEN:START createNewBusiness -->
### createNewBusiness

**Summary**: Create a new business

**Description**: Creates a new business with the provided details.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewBusiness )

<!-- DOCGEN:END createNewBusiness -->

<!-- DOCGEN:START update -->
### update

**Summary**: Updates the business details

**Description**: This endpoint is used to update the business details.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | businessId |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusiness )

<!-- DOCGEN:END update -->

<!-- DOCGEN:START updateBusinessType -->
### updateBusinessType

**Summary**: Updates a business's type

**Description**: This endpoint is used to update a business's type.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessType )

<!-- DOCGEN:END updateBusinessType -->

<!-- DOCGEN:START updateIsBusinessUnit -->
### updateIsBusinessUnit

**Summary**: Updates the business unit status

**Description**: This endpoint is used to update whether a business is considered a business unit.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateIsBusinessUnit )

<!-- DOCGEN:END updateIsBusinessUnit -->

<!-- DOCGEN:START updateBusinessGroupName -->
### updateBusinessGroupName

**Summary**: Updates a business's group name

**Description**: This endpoint is used to update a business's group name.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessGroupName )

<!-- DOCGEN:END updateBusinessGroupName -->

<!-- DOCGEN:START updateBusinessEmail -->
### updateBusinessEmail

**Summary**: Updates a business's email

**Description**: This endpoint is used to update a business's email address.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessEmail )

<!-- DOCGEN:END updateBusinessEmail -->

<!-- DOCGEN:START updateBusinessTelephone -->
### updateBusinessTelephone

**Summary**: Updates a business's telephone

**Description**: This endpoint is used to update a business's telephone number.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessTelephone )

<!-- DOCGEN:END updateBusinessTelephone -->

<!-- DOCGEN:START updateBusinessWorkingHours -->
### updateBusinessWorkingHours

**Summary**: Updates a business's working hours

**Description**: This endpoint is used to update a business's working hours.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessWorkingHours )

<!-- DOCGEN:END updateBusinessWorkingHours -->

<!-- DOCGEN:START updateRestaurantOverwhelmed -->
### updateRestaurantOverwhelmed

**Summary**: Updates the overwhelmed status of a restaurant

**Description**: This endpoint is used to update whether a restaurant is considered overwhelmed.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (optional)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateRestaurantOverwhelmed )

<!-- DOCGEN:END updateRestaurantOverwhelmed -->

<!-- DOCGEN:START updateBusinessIsNew -->
### updateBusinessIsNew

**Summary**: Updates the new status of a business

**Description**: This endpoint is used to update whether a business is considered new.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessIsNew )

<!-- DOCGEN:END updateBusinessIsNew -->

<!-- DOCGEN:START updateBusinessIsPopular -->
### updateBusinessIsPopular

**Summary**: Updates the popularity status of a business

**Description**: This endpoint is used to update whether a business is considered popular.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessIsPopular )

<!-- DOCGEN:END updateBusinessIsPopular -->

<!-- DOCGEN:START getBusinessesByGroupName -->
### getBusinessesByGroupName

**Summary**: Search for businesses by business group name

**Description**: Retrieves businesses whose business group names contain the given search term, case-insensitively.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessesByGroupName )

<!-- DOCGEN:END getBusinessesByGroupName -->

<!-- DOCGEN:START getBusinessesByNameSearch -->
### getBusinessesByNameSearch

**Summary**: Search for businesses by name

**Description**: Retrieves businesses whose names contain the given search term, case-insensitively.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessesByNameSearch )

<!-- DOCGEN:END getBusinessesByNameSearch -->

<!-- DOCGEN:START addBusinessAddress -->
### addBusinessAddress

**Summary**: Add an address to a business

**Description**: Adds an address to a specific business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addBusinessAddress )

<!-- DOCGEN:END addBusinessAddress -->

<!-- DOCGEN:START addDeliveryAddress -->
### addDeliveryAddress

**Summary**: Add a delivery address to a business

**Description**: Adds a delivery address to a specific business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addDeliveryAddress )

<!-- DOCGEN:END addDeliveryAddress -->

<!-- DOCGEN:START updateParentBusinessId -->
### updateParentBusinessId

**Summary**: Update parent business

**Description**: Updates the parent business of a specific business by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateParentBusiness )

<!-- DOCGEN:END updateParentBusinessId -->

<!-- DOCGEN:START updateBusinessAddress -->
### updateBusinessAddress

**Summary**: Updates a business's address

**Description**: This endpoint is used to update a business's primary address.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessAddress )

<!-- DOCGEN:END updateBusinessAddress -->

<!-- DOCGEN:START updateBusinessDeliveryAddress -->
### updateBusinessDeliveryAddress

**Summary**: Updates a business's delivery address

**Description**: This endpoint is used to update a business's delivery address.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessDeliveryAddress )

<!-- DOCGEN:END updateBusinessDeliveryAddress -->

<!-- DOCGEN:START deleteBusiness -->
### deleteBusiness

**Summary**: Delete a business

**Description**: Deletes a business by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deleteBusiness )

<!-- DOCGEN:END deleteBusiness -->

<!-- DOCGEN:START removeParentBusinessId -->
### removeParentBusinessId

**Summary**: Remove a child business from its parent

**Description**: Clears the parent business association for a given child business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/removeChildBusiness )

<!-- DOCGEN:END removeParentBusinessId -->

<!-- DOCGEN:START reviewBusiness -->
### reviewBusiness

**Summary**: Review a business

**Description**: This endpoint is used add a review of business.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/reviewBusiness )

<!-- DOCGEN:END reviewBusiness -->

<!-- DOCGEN:START confirmBusinessReview -->
### confirmBusinessReview

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END confirmBusinessReview -->

<!-- DOCGEN:START createPaymentIntent -->
### createPaymentIntent

**Summary**: Create a payment intent

**Description**: This endpoint is used to create a payment intent.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createPaymentIntent )

<!-- DOCGEN:END createPaymentIntent -->

<!-- DOCGEN:START manualSortScheduledUsers -->
### manualSortScheduledUsers

**Summary**: Manually sort scheduled users

**Description**: This endpoint is used to manually sort scheduled users.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/manualSortScheduledUsers )

<!-- DOCGEN:END manualSortScheduledUsers -->

<!-- DOCGEN:START addScheduledUserSortingType -->
### addScheduledUserSortingType

**Summary**: Add sorting type for scheduled users

**Description**: This endpoint is used to add the sorting type for scheduled users.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addScheduledUserSortingType )

<!-- DOCGEN:END addScheduledUserSortingType -->

<!-- DOCGEN:START getBusinessEarnings -->
### getBusinessEarnings

**Summary**: Get earnings for a specific business

**Description**: Retrieves earnings data for a specific business based on the provided business ID and date range.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Responses:**
- 200
- 400
- 404

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`
- ⚠️ Could not parse: `404.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessEarnings )

<!-- DOCGEN:END getBusinessEarnings -->

<!-- DOCGEN:START getAllBusinessesEarnings -->
### getAllBusinessesEarnings

**Summary**: Get earnings for all businesses

**Description**: Retrieves earnings data for all businesses of type MERCHANT based on the provided date range.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAllBusinessesEarnings )

<!-- DOCGEN:END getAllBusinessesEarnings -->

<!-- DOCGEN:START getTotalEarnings -->
### getTotalEarnings

**Summary**: Get total earnings for completed delivery orders

**Description**: Retrieves the total earnings from all completed delivery orders.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getTotalEarnings )

<!-- DOCGEN:END getTotalEarnings -->

<!-- DOCGEN:START getBusinessTotalEarnings -->
### getBusinessTotalEarnings

**Summary**: Get total earnings for a specific business

**Description**: Retrieves the total earnings of a specific business based on completed orders.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessTotalEarnings )

<!-- DOCGEN:END getBusinessTotalEarnings -->

<!-- DOCGEN:START getBusinessReviewsById -->
### getBusinessReviewsById

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getBusinessReviewsById -->

<!-- DOCGEN:START editBusiness -->
### editBusiness

**Summary**: Edit business details

**Description**: This endpoint is used to update multiple details of a business, including address, delivery address, finances, and other specific data.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/editBusiness )

<!-- DOCGEN:END editBusiness -->

<!-- DOCGEN:START getBusinessStripeStatusByBusinessId -->
### getBusinessStripeStatusByBusinessId

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getBusinessStripeStatusByBusinessId -->

<!-- DOCGEN:START generateBusinessStripeByBusinessId -->
### generateBusinessStripeByBusinessId

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END generateBusinessStripeByBusinessId -->

<!-- DOCGEN:START onboardingEnd -->
### onboardingEnd

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END onboardingEnd -->

<!-- DOCGEN:START getBusynessFactorsBusinessIdList -->
### getBusynessFactorsBusinessIdList

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getBusynessFactorsBusinessIdList -->

<!-- DOCGEN:START addBusinessToFavorites -->
### addBusinessToFavorites

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END addBusinessToFavorites -->

<!-- DOCGEN:START removeBusinessFromFavorites -->
### removeBusinessFromFavorites

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END removeBusinessFromFavorites -->

<!-- DOCGEN:START getFavoriteBusinesses -->
### getFavoriteBusinesses

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getFavoriteBusinesses -->

<!-- DOCGEN:START getScheduledUsersByBusinessId -->
### getScheduledUsersByBusinessId

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getScheduledUsersByBusinessId -->

<!-- DOCGEN:START createScoringPointsHandler -->
### createScoringPointsHandler

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END createScoringPointsHandler -->

<!-- DOCGEN:START getPurchaseOrderLimit -->
### getPurchaseOrderLimit

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getPurchaseOrderLimit -->

<!-- DOCGEN:START activateBusiness -->
### activateBusiness

**Summary**: Activate a business

**Description**: Activates a business.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/activateBusiness )

<!-- DOCGEN:END activateBusiness -->

<!-- DOCGEN:START deactivateBusiness -->
### deactivateBusiness

**Summary**: Deactivate a business

**Description**: Deactivates a business.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deactivateBusiness )

<!-- DOCGEN:END deactivateBusiness -->

<!-- DOCGEN:START listBusinesses -->
### listBusinesses

**Summary**: Get a list of businesses

**Description**: Returns a list of businesses.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinesses )

<!-- DOCGEN:END listBusinesses -->

<!-- DOCGEN:START getBusinessesByIds -->
### getBusinessesByIds

**Summary**: Get a list of businesses business_ids

**Description**: Returns a list of businesses.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessesByIds )

<!-- DOCGEN:END getBusinessesByIds -->

<!-- DOCGEN:START searchBusinesses -->
### searchBusinesses

**Summary**: Get a list of businesses by query, location and categories

**Description**: Returns a list of businesses.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessesSearch )

<!-- DOCGEN:END searchBusinesses -->

<!-- DOCGEN:START listMerchantBusinesses -->
### listMerchantBusinesses

**Summary**: List all merchant businesses

**Description**: Retrieves a list of all businesses classified as merchants.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listMerchantBusinesses )

<!-- DOCGEN:END listMerchantBusinesses -->

<!-- DOCGEN:START listPromoSectionsWithMerchants -->
### listPromoSectionsWithMerchants

**Summary**: List all merchant businesses grouped by promoSections

**Description**: Retrieves a list of all businesses classified as merchants.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listMerchantBusinesses )

<!-- DOCGEN:END listPromoSectionsWithMerchants -->

<!-- DOCGEN:START listMerchantBusinessesWithDailyMeals -->
### listMerchantBusinessesWithDailyMeals

**Summary**: List all merchant businesses offering daily meals

**Description**: Retrieves a list of all businesses classified as merchants that offer daily meals.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listMerchantBusinessesWithDailyMeals )

<!-- DOCGEN:END listMerchantBusinessesWithDailyMeals -->

<!-- DOCGEN:START listMerchantBusinessesMainInfo -->
### listMerchantBusinessesMainInfo

**Summary**: List all merchant businesses offering daily meals

**Description**: Retrieves a list of all businesses classified as merchants that offer daily meals.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listMerchantBusinessesWithDailyMeals )

<!-- DOCGEN:END listMerchantBusinessesMainInfo -->

<!-- DOCGEN:START listTransferBusinessesMainInfo -->
### listTransferBusinessesMainInfo

**Summary**: List all transfer businesses (main info only)

**Description**: Retrieves a list of all transfer businesses

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listTransferBusinessesMainInfo )

<!-- DOCGEN:END listTransferBusinessesMainInfo -->

<!-- DOCGEN:START listTransferBusinesses -->
### listTransferBusinesses

**Summary**: List all taxi businesses

**Description**: Retrieves a list of all businesses classified as taxis (TRANSFER).

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listTaxiBusinesses )

<!-- DOCGEN:END listTransferBusinesses -->

<!-- DOCGEN:START getBusinessById -->
### getBusinessById

**Summary**: Get a business by ID

**Description**: Retrieves detailed information about a specific business by its ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessById )

<!-- DOCGEN:END getBusinessById -->

<!-- DOCGEN:START getBusinessAdminDataById -->
### getBusinessAdminDataById

**Summary**: Get a business by ID including admin data

**Description**: Retrieves detailed information about a specific business by its ID, including data an admin can see.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessAdminDataById )

<!-- DOCGEN:END getBusinessAdminDataById -->

<!-- DOCGEN:START getBusinessForSearchById -->
### getBusinessForSearchById

**Summary**: Get a business for search by ID

**Description**: Retrieves detailed information about a specific business by its ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessForSearchById )

<!-- DOCGEN:END getBusinessForSearchById -->

<!-- DOCGEN:START getParentBusiness -->
### getParentBusiness

**Summary**: Get parent business

**Description**: Retrieves the parent business of a specific business by its ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getParentBusiness )

<!-- DOCGEN:END getParentBusiness -->

<!-- DOCGEN:START getChildBusinesses -->
### getChildBusinesses

**Summary**: List child businesses

**Description**: Retrieves a list of child businesses for a specific parent business ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | parent_business_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getChildBusinesses )

<!-- DOCGEN:END getChildBusinesses -->

<!-- DOCGEN:START createNewBusiness -->
### createNewBusiness

**Summary**: Create a new business

**Description**: Creates a new business with the provided details.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewBusiness )

<!-- DOCGEN:END createNewBusiness -->

<!-- DOCGEN:START update -->
### update

**Summary**: Updates the business details

**Description**: This endpoint is used to update the business details.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | businessId |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusiness )

<!-- DOCGEN:END update -->

<!-- DOCGEN:START updateBusinessType -->
### updateBusinessType

**Summary**: Updates a business's type

**Description**: This endpoint is used to update a business's type.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessType )

<!-- DOCGEN:END updateBusinessType -->

<!-- DOCGEN:START updateIsBusinessUnit -->
### updateIsBusinessUnit

**Summary**: Updates the business unit status

**Description**: This endpoint is used to update whether a business is considered a business unit.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateIsBusinessUnit )

<!-- DOCGEN:END updateIsBusinessUnit -->

<!-- DOCGEN:START updateBusinessGroupName -->
### updateBusinessGroupName

**Summary**: Updates a business's group name

**Description**: This endpoint is used to update a business's group name.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessGroupName )

<!-- DOCGEN:END updateBusinessGroupName -->

<!-- DOCGEN:START updateBusinessEmail -->
### updateBusinessEmail

**Summary**: Updates a business's email

**Description**: This endpoint is used to update a business's email address.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessEmail )

<!-- DOCGEN:END updateBusinessEmail -->

<!-- DOCGEN:START updateBusinessTelephone -->
### updateBusinessTelephone

**Summary**: Updates a business's telephone

**Description**: This endpoint is used to update a business's telephone number.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessTelephone )

<!-- DOCGEN:END updateBusinessTelephone -->

<!-- DOCGEN:START updateBusinessWorkingHours -->
### updateBusinessWorkingHours

**Summary**: Updates a business's working hours

**Description**: This endpoint is used to update a business's working hours.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessWorkingHours )

<!-- DOCGEN:END updateBusinessWorkingHours -->

<!-- DOCGEN:START updateRestaurantOverwhelmed -->
### updateRestaurantOverwhelmed

**Summary**: Updates the overwhelmed status of a restaurant

**Description**: This endpoint is used to update whether a restaurant is considered overwhelmed.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (optional)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateRestaurantOverwhelmed )

<!-- DOCGEN:END updateRestaurantOverwhelmed -->

<!-- DOCGEN:START updateBusinessIsNew -->
### updateBusinessIsNew

**Summary**: Updates the new status of a business

**Description**: This endpoint is used to update whether a business is considered new.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessIsNew )

<!-- DOCGEN:END updateBusinessIsNew -->

<!-- DOCGEN:START updateBusinessIsPopular -->
### updateBusinessIsPopular

**Summary**: Updates the popularity status of a business

**Description**: This endpoint is used to update whether a business is considered popular.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessIsPopular )

<!-- DOCGEN:END updateBusinessIsPopular -->

<!-- DOCGEN:START getBusinessesByGroupName -->
### getBusinessesByGroupName

**Summary**: Search for businesses by business group name

**Description**: Retrieves businesses whose business group names contain the given search term, case-insensitively.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessesByGroupName )

<!-- DOCGEN:END getBusinessesByGroupName -->

<!-- DOCGEN:START getBusinessesByNameSearch -->
### getBusinessesByNameSearch

**Summary**: Search for businesses by name

**Description**: Retrieves businesses whose names contain the given search term, case-insensitively.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessesByNameSearch )

<!-- DOCGEN:END getBusinessesByNameSearch -->

<!-- DOCGEN:START addBusinessAddress -->
### addBusinessAddress

**Summary**: Add an address to a business

**Description**: Adds an address to a specific business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addBusinessAddress )

<!-- DOCGEN:END addBusinessAddress -->

<!-- DOCGEN:START addDeliveryAddress -->
### addDeliveryAddress

**Summary**: Add a delivery address to a business

**Description**: Adds a delivery address to a specific business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addDeliveryAddress )

<!-- DOCGEN:END addDeliveryAddress -->

<!-- DOCGEN:START updateParentBusinessId -->
### updateParentBusinessId

**Summary**: Update parent business

**Description**: Updates the parent business of a specific business by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateParentBusiness )

<!-- DOCGEN:END updateParentBusinessId -->

<!-- DOCGEN:START updateBusinessAddress -->
### updateBusinessAddress

**Summary**: Updates a business's address

**Description**: This endpoint is used to update a business's primary address.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessAddress )

<!-- DOCGEN:END updateBusinessAddress -->

<!-- DOCGEN:START updateBusinessDeliveryAddress -->
### updateBusinessDeliveryAddress

**Summary**: Updates a business's delivery address

**Description**: This endpoint is used to update a business's delivery address.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessDeliveryAddress )

<!-- DOCGEN:END updateBusinessDeliveryAddress -->

<!-- DOCGEN:START deleteBusiness -->
### deleteBusiness

**Summary**: Delete a business

**Description**: Deletes a business by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deleteBusiness )

<!-- DOCGEN:END deleteBusiness -->

<!-- DOCGEN:START removeParentBusinessId -->
### removeParentBusinessId

**Summary**: Remove a child business from its parent

**Description**: Clears the parent business association for a given child business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/removeChildBusiness )

<!-- DOCGEN:END removeParentBusinessId -->

<!-- DOCGEN:START reviewBusiness -->
### reviewBusiness

**Summary**: Review a business

**Description**: This endpoint is used add a review of business.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/reviewBusiness )

<!-- DOCGEN:END reviewBusiness -->

<!-- DOCGEN:START confirmBusinessReview -->
### confirmBusinessReview

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END confirmBusinessReview -->

<!-- DOCGEN:START createPaymentIntent -->
### createPaymentIntent

**Summary**: Create a payment intent

**Description**: This endpoint is used to create a payment intent.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createPaymentIntent )

<!-- DOCGEN:END createPaymentIntent -->

<!-- DOCGEN:START manualSortScheduledUsers -->
### manualSortScheduledUsers

**Summary**: Manually sort scheduled users

**Description**: This endpoint is used to manually sort scheduled users.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/manualSortScheduledUsers )

<!-- DOCGEN:END manualSortScheduledUsers -->

<!-- DOCGEN:START addScheduledUserSortingType -->
### addScheduledUserSortingType

**Summary**: Add sorting type for scheduled users

**Description**: This endpoint is used to add the sorting type for scheduled users.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addScheduledUserSortingType )

<!-- DOCGEN:END addScheduledUserSortingType -->

<!-- DOCGEN:START getBusinessEarnings -->
### getBusinessEarnings

**Summary**: Get earnings for a specific business

**Description**: Retrieves earnings data for a specific business based on the provided business ID and date range.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Responses:**
- 200
- 400
- 404

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`
- ⚠️ Could not parse: `404.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessEarnings )

<!-- DOCGEN:END getBusinessEarnings -->

<!-- DOCGEN:START getAllBusinessesEarnings -->
### getAllBusinessesEarnings

**Summary**: Get earnings for all businesses

**Description**: Retrieves earnings data for all businesses of type MERCHANT based on the provided date range.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAllBusinessesEarnings )

<!-- DOCGEN:END getAllBusinessesEarnings -->

<!-- DOCGEN:START getTotalEarnings -->
### getTotalEarnings

**Summary**: Get total earnings for completed delivery orders

**Description**: Retrieves the total earnings from all completed delivery orders.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getTotalEarnings )

<!-- DOCGEN:END getTotalEarnings -->

<!-- DOCGEN:START getBusinessTotalEarnings -->
### getBusinessTotalEarnings

**Summary**: Get total earnings for a specific business

**Description**: Retrieves the total earnings of a specific business based on completed orders.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessTotalEarnings )

<!-- DOCGEN:END getBusinessTotalEarnings -->

<!-- DOCGEN:START getBusinessReviewsById -->
### getBusinessReviewsById

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getBusinessReviewsById -->

<!-- DOCGEN:START editBusiness -->
### editBusiness

**Summary**: Edit business details

**Description**: This endpoint is used to update multiple details of a business, including address, delivery address, finances, and other specific data.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/editBusiness )

<!-- DOCGEN:END editBusiness -->

<!-- DOCGEN:START getBusinessStripeStatusByBusinessId -->
### getBusinessStripeStatusByBusinessId

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getBusinessStripeStatusByBusinessId -->

<!-- DOCGEN:START generateBusinessStripeByBusinessId -->
### generateBusinessStripeByBusinessId

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END generateBusinessStripeByBusinessId -->

<!-- DOCGEN:START onboardingEnd -->
### onboardingEnd

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END onboardingEnd -->

<!-- DOCGEN:START getBusynessFactorsBusinessIdList -->
### getBusynessFactorsBusinessIdList

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getBusynessFactorsBusinessIdList -->

<!-- DOCGEN:START addBusinessToFavorites -->
### addBusinessToFavorites

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END addBusinessToFavorites -->

<!-- DOCGEN:START removeBusinessFromFavorites -->
### removeBusinessFromFavorites

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END removeBusinessFromFavorites -->

<!-- DOCGEN:START getFavoriteBusinesses -->
### getFavoriteBusinesses

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getFavoriteBusinesses -->

<!-- DOCGEN:START getScheduledUsersByBusinessId -->
### getScheduledUsersByBusinessId

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getScheduledUsersByBusinessId -->

<!-- DOCGEN:START createScoringPointsHandler -->
### createScoringPointsHandler

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END createScoringPointsHandler -->

<!-- DOCGEN:START getPurchaseOrderLimit -->
### getPurchaseOrderLimit

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getPurchaseOrderLimit -->

<!-- DOCGEN:START activateBusiness -->
### activateBusiness

**Summary**: Activate a business

**Description**: Activates a business.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/activateBusiness )

<!-- DOCGEN:END activateBusiness -->

<!-- DOCGEN:START deactivateBusiness -->
### deactivateBusiness

**Summary**: Deactivate a business

**Description**: Deactivates a business.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deactivateBusiness )

<!-- DOCGEN:END deactivateBusiness -->

<!-- DOCGEN:START listBusinesses -->
### listBusinesses

**Summary**: Get a list of businesses

**Description**: Returns a list of businesses.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinesses )

<!-- DOCGEN:END listBusinesses -->

<!-- DOCGEN:START getBusinessesByIds -->
### getBusinessesByIds

**Summary**: Get a list of businesses business_ids

**Description**: Returns a list of businesses.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessesByIds )

<!-- DOCGEN:END getBusinessesByIds -->

<!-- DOCGEN:START searchBusinesses -->
### searchBusinesses

**Summary**: Get a list of businesses by query, location and categories

**Description**: Returns a list of businesses.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessesSearch )

<!-- DOCGEN:END searchBusinesses -->

<!-- DOCGEN:START listMerchantBusinesses -->
### listMerchantBusinesses

**Summary**: List all merchant businesses

**Description**: Retrieves a list of all businesses classified as merchants.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listMerchantBusinesses )

<!-- DOCGEN:END listMerchantBusinesses -->

<!-- DOCGEN:START listPromoSectionsWithMerchants -->
### listPromoSectionsWithMerchants

**Summary**: List all merchant businesses grouped by promoSections

**Description**: Retrieves a list of all businesses classified as merchants.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listMerchantBusinesses )

<!-- DOCGEN:END listPromoSectionsWithMerchants -->

<!-- DOCGEN:START listMerchantBusinessesWithDailyMeals -->
### listMerchantBusinessesWithDailyMeals

**Summary**: List all merchant businesses offering daily meals

**Description**: Retrieves a list of all businesses classified as merchants that offer daily meals.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listMerchantBusinessesWithDailyMeals )

<!-- DOCGEN:END listMerchantBusinessesWithDailyMeals -->

<!-- DOCGEN:START listMerchantBusinessesMainInfo -->
### listMerchantBusinessesMainInfo

**Summary**: List all merchant businesses offering daily meals

**Description**: Retrieves a list of all businesses classified as merchants that offer daily meals.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listMerchantBusinessesWithDailyMeals )

<!-- DOCGEN:END listMerchantBusinessesMainInfo -->

<!-- DOCGEN:START listTransferBusinessesMainInfo -->
### listTransferBusinessesMainInfo

**Summary**: List all transfer businesses (main info only)

**Description**: Retrieves a list of all transfer businesses

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listTransferBusinessesMainInfo )

<!-- DOCGEN:END listTransferBusinessesMainInfo -->

<!-- DOCGEN:START listTransferBusinesses -->
### listTransferBusinesses

**Summary**: List all taxi businesses

**Description**: Retrieves a list of all businesses classified as taxis (TRANSFER).

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listTaxiBusinesses )

<!-- DOCGEN:END listTransferBusinesses -->

<!-- DOCGEN:START getBusinessById -->
### getBusinessById

**Summary**: Get a business by ID

**Description**: Retrieves detailed information about a specific business by its ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessById )

<!-- DOCGEN:END getBusinessById -->

<!-- DOCGEN:START getBusinessAdminDataById -->
### getBusinessAdminDataById

**Summary**: Get a business by ID including admin data

**Description**: Retrieves detailed information about a specific business by its ID, including data an admin can see.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessAdminDataById )

<!-- DOCGEN:END getBusinessAdminDataById -->

<!-- DOCGEN:START getBusinessForSearchById -->
### getBusinessForSearchById

**Summary**: Get a business for search by ID

**Description**: Retrieves detailed information about a specific business by its ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessForSearchById )

<!-- DOCGEN:END getBusinessForSearchById -->

<!-- DOCGEN:START getParentBusiness -->
### getParentBusiness

**Summary**: Get parent business

**Description**: Retrieves the parent business of a specific business by its ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getParentBusiness )

<!-- DOCGEN:END getParentBusiness -->

<!-- DOCGEN:START getChildBusinesses -->
### getChildBusinesses

**Summary**: List child businesses

**Description**: Retrieves a list of child businesses for a specific parent business ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | parent_business_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getChildBusinesses )

<!-- DOCGEN:END getChildBusinesses -->

<!-- DOCGEN:START createNewBusiness -->
### createNewBusiness

**Summary**: Create a new business

**Description**: Creates a new business with the provided details.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewBusiness )

<!-- DOCGEN:END createNewBusiness -->

<!-- DOCGEN:START update -->
### update

**Summary**: Updates the business details

**Description**: This endpoint is used to update the business details.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | businessId |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusiness )

<!-- DOCGEN:END update -->

<!-- DOCGEN:START updateBusinessType -->
### updateBusinessType

**Summary**: Updates a business's type

**Description**: This endpoint is used to update a business's type.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessType )

<!-- DOCGEN:END updateBusinessType -->

<!-- DOCGEN:START updateIsBusinessUnit -->
### updateIsBusinessUnit

**Summary**: Updates the business unit status

**Description**: This endpoint is used to update whether a business is considered a business unit.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateIsBusinessUnit )

<!-- DOCGEN:END updateIsBusinessUnit -->

<!-- DOCGEN:START updateBusinessGroupName -->
### updateBusinessGroupName

**Summary**: Updates a business's group name

**Description**: This endpoint is used to update a business's group name.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessGroupName )

<!-- DOCGEN:END updateBusinessGroupName -->

<!-- DOCGEN:START updateBusinessEmail -->
### updateBusinessEmail

**Summary**: Updates a business's email

**Description**: This endpoint is used to update a business's email address.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessEmail )

<!-- DOCGEN:END updateBusinessEmail -->

<!-- DOCGEN:START updateBusinessTelephone -->
### updateBusinessTelephone

**Summary**: Updates a business's telephone

**Description**: This endpoint is used to update a business's telephone number.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessTelephone )

<!-- DOCGEN:END updateBusinessTelephone -->

<!-- DOCGEN:START updateBusinessWorkingHours -->
### updateBusinessWorkingHours

**Summary**: Updates a business's working hours

**Description**: This endpoint is used to update a business's working hours.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessWorkingHours )

<!-- DOCGEN:END updateBusinessWorkingHours -->

<!-- DOCGEN:START updateRestaurantOverwhelmed -->
### updateRestaurantOverwhelmed

**Summary**: Updates the overwhelmed status of a restaurant

**Description**: This endpoint is used to update whether a restaurant is considered overwhelmed.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (optional)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateRestaurantOverwhelmed )

<!-- DOCGEN:END updateRestaurantOverwhelmed -->

<!-- DOCGEN:START updateBusinessIsNew -->
### updateBusinessIsNew

**Summary**: Updates the new status of a business

**Description**: This endpoint is used to update whether a business is considered new.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessIsNew )

<!-- DOCGEN:END updateBusinessIsNew -->

<!-- DOCGEN:START updateBusinessIsPopular -->
### updateBusinessIsPopular

**Summary**: Updates the popularity status of a business

**Description**: This endpoint is used to update whether a business is considered popular.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessIsPopular )

<!-- DOCGEN:END updateBusinessIsPopular -->

<!-- DOCGEN:START getBusinessesByGroupName -->
### getBusinessesByGroupName

**Summary**: Search for businesses by business group name

**Description**: Retrieves businesses whose business group names contain the given search term, case-insensitively.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessesByGroupName )

<!-- DOCGEN:END getBusinessesByGroupName -->

<!-- DOCGEN:START getBusinessesByNameSearch -->
### getBusinessesByNameSearch

**Summary**: Search for businesses by name

**Description**: Retrieves businesses whose names contain the given search term, case-insensitively.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessesByNameSearch )

<!-- DOCGEN:END getBusinessesByNameSearch -->

<!-- DOCGEN:START addBusinessAddress -->
### addBusinessAddress

**Summary**: Add an address to a business

**Description**: Adds an address to a specific business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addBusinessAddress )

<!-- DOCGEN:END addBusinessAddress -->

<!-- DOCGEN:START addDeliveryAddress -->
### addDeliveryAddress

**Summary**: Add a delivery address to a business

**Description**: Adds a delivery address to a specific business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addDeliveryAddress )

<!-- DOCGEN:END addDeliveryAddress -->

<!-- DOCGEN:START updateParentBusinessId -->
### updateParentBusinessId

**Summary**: Update parent business

**Description**: Updates the parent business of a specific business by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateParentBusiness )

<!-- DOCGEN:END updateParentBusinessId -->

<!-- DOCGEN:START updateBusinessAddress -->
### updateBusinessAddress

**Summary**: Updates a business's address

**Description**: This endpoint is used to update a business's primary address.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessAddress )

<!-- DOCGEN:END updateBusinessAddress -->

<!-- DOCGEN:START updateBusinessDeliveryAddress -->
### updateBusinessDeliveryAddress

**Summary**: Updates a business's delivery address

**Description**: This endpoint is used to update a business's delivery address.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessDeliveryAddress )

<!-- DOCGEN:END updateBusinessDeliveryAddress -->

<!-- DOCGEN:START deleteBusiness -->
### deleteBusiness

**Summary**: Delete a business

**Description**: Deletes a business by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deleteBusiness )

<!-- DOCGEN:END deleteBusiness -->

<!-- DOCGEN:START removeParentBusinessId -->
### removeParentBusinessId

**Summary**: Remove a child business from its parent

**Description**: Clears the parent business association for a given child business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/removeChildBusiness )

<!-- DOCGEN:END removeParentBusinessId -->

<!-- DOCGEN:START reviewBusiness -->
### reviewBusiness

**Summary**: Review a business

**Description**: This endpoint is used add a review of business.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/reviewBusiness )

<!-- DOCGEN:END reviewBusiness -->

<!-- DOCGEN:START confirmBusinessReview -->
### confirmBusinessReview

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END confirmBusinessReview -->

<!-- DOCGEN:START createPaymentIntent -->
### createPaymentIntent

**Summary**: Create a payment intent

**Description**: This endpoint is used to create a payment intent.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createPaymentIntent )

<!-- DOCGEN:END createPaymentIntent -->

<!-- DOCGEN:START manualSortScheduledUsers -->
### manualSortScheduledUsers

**Summary**: Manually sort scheduled users

**Description**: This endpoint is used to manually sort scheduled users.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/manualSortScheduledUsers )

<!-- DOCGEN:END manualSortScheduledUsers -->

<!-- DOCGEN:START addScheduledUserSortingType -->
### addScheduledUserSortingType

**Summary**: Add sorting type for scheduled users

**Description**: This endpoint is used to add the sorting type for scheduled users.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addScheduledUserSortingType )

<!-- DOCGEN:END addScheduledUserSortingType -->

<!-- DOCGEN:START getBusinessEarnings -->
### getBusinessEarnings

**Summary**: Get earnings for a specific business

**Description**: Retrieves earnings data for a specific business based on the provided business ID and date range.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Responses:**
- 200
- 400
- 404

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`
- ⚠️ Could not parse: `404.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessEarnings )

<!-- DOCGEN:END getBusinessEarnings -->

<!-- DOCGEN:START getAllBusinessesEarnings -->
### getAllBusinessesEarnings

**Summary**: Get earnings for all businesses

**Description**: Retrieves earnings data for all businesses of type MERCHANT based on the provided date range.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAllBusinessesEarnings )

<!-- DOCGEN:END getAllBusinessesEarnings -->

<!-- DOCGEN:START getTotalEarnings -->
### getTotalEarnings

**Summary**: Get total earnings for completed delivery orders

**Description**: Retrieves the total earnings from all completed delivery orders.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getTotalEarnings )

<!-- DOCGEN:END getTotalEarnings -->

<!-- DOCGEN:START getBusinessTotalEarnings -->
### getBusinessTotalEarnings

**Summary**: Get total earnings for a specific business

**Description**: Retrieves the total earnings of a specific business based on completed orders.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessTotalEarnings )

<!-- DOCGEN:END getBusinessTotalEarnings -->

<!-- DOCGEN:START getBusinessReviewsById -->
### getBusinessReviewsById

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getBusinessReviewsById -->

<!-- DOCGEN:START editBusiness -->
### editBusiness

**Summary**: Edit business details

**Description**: This endpoint is used to update multiple details of a business, including address, delivery address, finances, and other specific data.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/editBusiness )

<!-- DOCGEN:END editBusiness -->

<!-- DOCGEN:START getBusinessStripeStatusByBusinessId -->
### getBusinessStripeStatusByBusinessId

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getBusinessStripeStatusByBusinessId -->

<!-- DOCGEN:START generateBusinessStripeByBusinessId -->
### generateBusinessStripeByBusinessId

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END generateBusinessStripeByBusinessId -->

<!-- DOCGEN:START onboardingEnd -->
### onboardingEnd

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END onboardingEnd -->

<!-- DOCGEN:START getBusynessFactorsBusinessIdList -->
### getBusynessFactorsBusinessIdList

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getBusynessFactorsBusinessIdList -->

<!-- DOCGEN:START addBusinessToFavorites -->
### addBusinessToFavorites

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END addBusinessToFavorites -->

<!-- DOCGEN:START removeBusinessFromFavorites -->
### removeBusinessFromFavorites

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END removeBusinessFromFavorites -->

<!-- DOCGEN:START getFavoriteBusinesses -->
### getFavoriteBusinesses

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getFavoriteBusinesses -->

<!-- DOCGEN:START getScheduledUsersByBusinessId -->
### getScheduledUsersByBusinessId

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getScheduledUsersByBusinessId -->

<!-- DOCGEN:START createScoringPointsHandler -->
### createScoringPointsHandler

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END createScoringPointsHandler -->

<!-- DOCGEN:START getPurchaseOrderLimit -->
### getPurchaseOrderLimit

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getPurchaseOrderLimit -->

<!-- DOCGEN:START activateBusiness -->
### activateBusiness

**Summary**: Activate a business

**Description**: Activates a business.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/activateBusiness )

<!-- DOCGEN:END activateBusiness -->

<!-- DOCGEN:START deactivateBusiness -->
### deactivateBusiness

**Summary**: Deactivate a business

**Description**: Deactivates a business.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deactivateBusiness )

<!-- DOCGEN:END deactivateBusiness -->

<!-- DOCGEN:START listBusinesses -->
### listBusinesses

**Summary**: Get a list of businesses

**Description**: Returns a list of businesses.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinesses )

<!-- DOCGEN:END listBusinesses -->

<!-- DOCGEN:START getBusinessesByIds -->
### getBusinessesByIds

**Summary**: Get a list of businesses business_ids

**Description**: Returns a list of businesses.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessesByIds )

<!-- DOCGEN:END getBusinessesByIds -->

<!-- DOCGEN:START searchBusinesses -->
### searchBusinesses

**Summary**: Get a list of businesses by query, location and categories

**Description**: Returns a list of businesses.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessesSearch )

<!-- DOCGEN:END searchBusinesses -->

<!-- DOCGEN:START listMerchantBusinesses -->
### listMerchantBusinesses

**Summary**: List all merchant businesses

**Description**: Retrieves a list of all businesses classified as merchants.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listMerchantBusinesses )

<!-- DOCGEN:END listMerchantBusinesses -->

<!-- DOCGEN:START listPromoSectionsWithMerchants -->
### listPromoSectionsWithMerchants

**Summary**: List all merchant businesses grouped by promoSections

**Description**: Retrieves a list of all businesses classified as merchants.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listMerchantBusinesses )

<!-- DOCGEN:END listPromoSectionsWithMerchants -->

<!-- DOCGEN:START listMerchantBusinessesWithDailyMeals -->
### listMerchantBusinessesWithDailyMeals

**Summary**: List all merchant businesses offering daily meals

**Description**: Retrieves a list of all businesses classified as merchants that offer daily meals.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listMerchantBusinessesWithDailyMeals )

<!-- DOCGEN:END listMerchantBusinessesWithDailyMeals -->

<!-- DOCGEN:START listMerchantBusinessesMainInfo -->
### listMerchantBusinessesMainInfo

**Summary**: List all merchant businesses offering daily meals

**Description**: Retrieves a list of all businesses classified as merchants that offer daily meals.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listMerchantBusinessesWithDailyMeals )

<!-- DOCGEN:END listMerchantBusinessesMainInfo -->

<!-- DOCGEN:START listTransferBusinessesMainInfo -->
### listTransferBusinessesMainInfo

**Summary**: List all transfer businesses (main info only)

**Description**: Retrieves a list of all transfer businesses

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listTransferBusinessesMainInfo )

<!-- DOCGEN:END listTransferBusinessesMainInfo -->

<!-- DOCGEN:START listTransferBusinesses -->
### listTransferBusinesses

**Summary**: List all taxi businesses

**Description**: Retrieves a list of all businesses classified as taxis (TRANSFER).

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listTaxiBusinesses )

<!-- DOCGEN:END listTransferBusinesses -->

<!-- DOCGEN:START getBusinessById -->
### getBusinessById

**Summary**: Get a business by ID

**Description**: Retrieves detailed information about a specific business by its ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessById )

<!-- DOCGEN:END getBusinessById -->

<!-- DOCGEN:START getBusinessAdminDataById -->
### getBusinessAdminDataById

**Summary**: Get a business by ID including admin data

**Description**: Retrieves detailed information about a specific business by its ID, including data an admin can see.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessAdminDataById )

<!-- DOCGEN:END getBusinessAdminDataById -->

<!-- DOCGEN:START getBusinessForSearchById -->
### getBusinessForSearchById

**Summary**: Get a business for search by ID

**Description**: Retrieves detailed information about a specific business by its ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessForSearchById )

<!-- DOCGEN:END getBusinessForSearchById -->

<!-- DOCGEN:START getParentBusiness -->
### getParentBusiness

**Summary**: Get parent business

**Description**: Retrieves the parent business of a specific business by its ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getParentBusiness )

<!-- DOCGEN:END getParentBusiness -->

<!-- DOCGEN:START getChildBusinesses -->
### getChildBusinesses

**Summary**: List child businesses

**Description**: Retrieves a list of child businesses for a specific parent business ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | parent_business_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getChildBusinesses )

<!-- DOCGEN:END getChildBusinesses -->

<!-- DOCGEN:START createNewBusiness -->
### createNewBusiness

**Summary**: Create a new business

**Description**: Creates a new business with the provided details.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewBusiness )

<!-- DOCGEN:END createNewBusiness -->

<!-- DOCGEN:START update -->
### update

**Summary**: Updates the business details

**Description**: This endpoint is used to update the business details.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | businessId |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusiness )

<!-- DOCGEN:END update -->

<!-- DOCGEN:START updateBusinessType -->
### updateBusinessType

**Summary**: Updates a business's type

**Description**: This endpoint is used to update a business's type.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessType )

<!-- DOCGEN:END updateBusinessType -->

<!-- DOCGEN:START updateIsBusinessUnit -->
### updateIsBusinessUnit

**Summary**: Updates the business unit status

**Description**: This endpoint is used to update whether a business is considered a business unit.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateIsBusinessUnit )

<!-- DOCGEN:END updateIsBusinessUnit -->

<!-- DOCGEN:START updateBusinessGroupName -->
### updateBusinessGroupName

**Summary**: Updates a business's group name

**Description**: This endpoint is used to update a business's group name.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessGroupName )

<!-- DOCGEN:END updateBusinessGroupName -->

<!-- DOCGEN:START updateBusinessEmail -->
### updateBusinessEmail

**Summary**: Updates a business's email

**Description**: This endpoint is used to update a business's email address.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessEmail )

<!-- DOCGEN:END updateBusinessEmail -->

<!-- DOCGEN:START updateBusinessTelephone -->
### updateBusinessTelephone

**Summary**: Updates a business's telephone

**Description**: This endpoint is used to update a business's telephone number.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessTelephone )

<!-- DOCGEN:END updateBusinessTelephone -->

<!-- DOCGEN:START updateBusinessWorkingHours -->
### updateBusinessWorkingHours

**Summary**: Updates a business's working hours

**Description**: This endpoint is used to update a business's working hours.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessWorkingHours )

<!-- DOCGEN:END updateBusinessWorkingHours -->

<!-- DOCGEN:START updateRestaurantOverwhelmed -->
### updateRestaurantOverwhelmed

**Summary**: Updates the overwhelmed status of a restaurant

**Description**: This endpoint is used to update whether a restaurant is considered overwhelmed.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (optional)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateRestaurantOverwhelmed )

<!-- DOCGEN:END updateRestaurantOverwhelmed -->

<!-- DOCGEN:START updateBusinessIsNew -->
### updateBusinessIsNew

**Summary**: Updates the new status of a business

**Description**: This endpoint is used to update whether a business is considered new.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessIsNew )

<!-- DOCGEN:END updateBusinessIsNew -->

<!-- DOCGEN:START updateBusinessIsPopular -->
### updateBusinessIsPopular

**Summary**: Updates the popularity status of a business

**Description**: This endpoint is used to update whether a business is considered popular.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessIsPopular )

<!-- DOCGEN:END updateBusinessIsPopular -->

<!-- DOCGEN:START getBusinessesByGroupName -->
### getBusinessesByGroupName

**Summary**: Search for businesses by business group name

**Description**: Retrieves businesses whose business group names contain the given search term, case-insensitively.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessesByGroupName )

<!-- DOCGEN:END getBusinessesByGroupName -->

<!-- DOCGEN:START getBusinessesByNameSearch -->
### getBusinessesByNameSearch

**Summary**: Search for businesses by name

**Description**: Retrieves businesses whose names contain the given search term, case-insensitively.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessesByNameSearch )

<!-- DOCGEN:END getBusinessesByNameSearch -->

<!-- DOCGEN:START addBusinessAddress -->
### addBusinessAddress

**Summary**: Add an address to a business

**Description**: Adds an address to a specific business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addBusinessAddress )

<!-- DOCGEN:END addBusinessAddress -->

<!-- DOCGEN:START addDeliveryAddress -->
### addDeliveryAddress

**Summary**: Add a delivery address to a business

**Description**: Adds a delivery address to a specific business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addDeliveryAddress )

<!-- DOCGEN:END addDeliveryAddress -->

<!-- DOCGEN:START updateParentBusinessId -->
### updateParentBusinessId

**Summary**: Update parent business

**Description**: Updates the parent business of a specific business by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateParentBusiness )

<!-- DOCGEN:END updateParentBusinessId -->

<!-- DOCGEN:START updateBusinessAddress -->
### updateBusinessAddress

**Summary**: Updates a business's address

**Description**: This endpoint is used to update a business's primary address.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessAddress )

<!-- DOCGEN:END updateBusinessAddress -->

<!-- DOCGEN:START updateBusinessDeliveryAddress -->
### updateBusinessDeliveryAddress

**Summary**: Updates a business's delivery address

**Description**: This endpoint is used to update a business's delivery address.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessDeliveryAddress )

<!-- DOCGEN:END updateBusinessDeliveryAddress -->

<!-- DOCGEN:START deleteBusiness -->
### deleteBusiness

**Summary**: Delete a business

**Description**: Deletes a business by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deleteBusiness )

<!-- DOCGEN:END deleteBusiness -->

<!-- DOCGEN:START removeParentBusinessId -->
### removeParentBusinessId

**Summary**: Remove a child business from its parent

**Description**: Clears the parent business association for a given child business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/removeChildBusiness )

<!-- DOCGEN:END removeParentBusinessId -->

<!-- DOCGEN:START reviewBusiness -->
### reviewBusiness

**Summary**: Review a business

**Description**: This endpoint is used add a review of business.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/reviewBusiness )

<!-- DOCGEN:END reviewBusiness -->

<!-- DOCGEN:START confirmBusinessReview -->
### confirmBusinessReview

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END confirmBusinessReview -->

<!-- DOCGEN:START createPaymentIntent -->
### createPaymentIntent

**Summary**: Create a payment intent

**Description**: This endpoint is used to create a payment intent.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createPaymentIntent )

<!-- DOCGEN:END createPaymentIntent -->

<!-- DOCGEN:START manualSortScheduledUsers -->
### manualSortScheduledUsers

**Summary**: Manually sort scheduled users

**Description**: This endpoint is used to manually sort scheduled users.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/manualSortScheduledUsers )

<!-- DOCGEN:END manualSortScheduledUsers -->

<!-- DOCGEN:START addScheduledUserSortingType -->
### addScheduledUserSortingType

**Summary**: Add sorting type for scheduled users

**Description**: This endpoint is used to add the sorting type for scheduled users.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addScheduledUserSortingType )

<!-- DOCGEN:END addScheduledUserSortingType -->

<!-- DOCGEN:START getBusinessEarnings -->
### getBusinessEarnings

**Summary**: Get earnings for a specific business

**Description**: Retrieves earnings data for a specific business based on the provided business ID and date range.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Responses:**
- 200
- 400
- 404

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`
- ⚠️ Could not parse: `404.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessEarnings )

<!-- DOCGEN:END getBusinessEarnings -->

<!-- DOCGEN:START getAllBusinessesEarnings -->
### getAllBusinessesEarnings

**Summary**: Get earnings for all businesses

**Description**: Retrieves earnings data for all businesses of type MERCHANT based on the provided date range.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAllBusinessesEarnings )

<!-- DOCGEN:END getAllBusinessesEarnings -->

<!-- DOCGEN:START getTotalEarnings -->
### getTotalEarnings

**Summary**: Get total earnings for completed delivery orders

**Description**: Retrieves the total earnings from all completed delivery orders.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getTotalEarnings )

<!-- DOCGEN:END getTotalEarnings -->

<!-- DOCGEN:START getBusinessTotalEarnings -->
### getBusinessTotalEarnings

**Summary**: Get total earnings for a specific business

**Description**: Retrieves the total earnings of a specific business based on completed orders.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessTotalEarnings )

<!-- DOCGEN:END getBusinessTotalEarnings -->

<!-- DOCGEN:START getBusinessReviewsById -->
### getBusinessReviewsById

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getBusinessReviewsById -->

<!-- DOCGEN:START editBusiness -->
### editBusiness

**Summary**: Edit business details

**Description**: This endpoint is used to update multiple details of a business, including address, delivery address, finances, and other specific data.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/editBusiness )

<!-- DOCGEN:END editBusiness -->

<!-- DOCGEN:START getBusinessStripeStatusByBusinessId -->
### getBusinessStripeStatusByBusinessId

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getBusinessStripeStatusByBusinessId -->

<!-- DOCGEN:START generateBusinessStripeByBusinessId -->
### generateBusinessStripeByBusinessId

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END generateBusinessStripeByBusinessId -->

<!-- DOCGEN:START onboardingEnd -->
### onboardingEnd

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END onboardingEnd -->

<!-- DOCGEN:START getBusynessFactorsBusinessIdList -->
### getBusynessFactorsBusinessIdList

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getBusynessFactorsBusinessIdList -->

<!-- DOCGEN:START addBusinessToFavorites -->
### addBusinessToFavorites

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END addBusinessToFavorites -->

<!-- DOCGEN:START removeBusinessFromFavorites -->
### removeBusinessFromFavorites

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END removeBusinessFromFavorites -->

<!-- DOCGEN:START getFavoriteBusinesses -->
### getFavoriteBusinesses

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getFavoriteBusinesses -->

<!-- DOCGEN:START getScheduledUsersByBusinessId -->
### getScheduledUsersByBusinessId

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getScheduledUsersByBusinessId -->

<!-- DOCGEN:START createScoringPointsHandler -->
### createScoringPointsHandler

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END createScoringPointsHandler -->

<!-- DOCGEN:START getPurchaseOrderLimit -->
### getPurchaseOrderLimit

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getPurchaseOrderLimit -->

<!-- DOCGEN:START activateBusiness -->
### activateBusiness

**Summary**: Activate a business

**Description**: Activates a business.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/activateBusiness )

<!-- DOCGEN:END activateBusiness -->

<!-- DOCGEN:START deactivateBusiness -->
### deactivateBusiness

**Summary**: Deactivate a business

**Description**: Deactivates a business.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deactivateBusiness )

<!-- DOCGEN:END deactivateBusiness -->

<!-- DOCGEN:START listBusinesses -->
### listBusinesses

**Summary**: Get a list of businesses

**Description**: Returns a list of businesses.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinesses )

<!-- DOCGEN:END listBusinesses -->

<!-- DOCGEN:START getBusinessesByIds -->
### getBusinessesByIds

**Summary**: Get a list of businesses business_ids

**Description**: Returns a list of businesses.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessesByIds )

<!-- DOCGEN:END getBusinessesByIds -->

<!-- DOCGEN:START searchBusinesses -->
### searchBusinesses

**Summary**: Get a list of businesses by query, location and categories

**Description**: Returns a list of businesses.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessesSearch )

<!-- DOCGEN:END searchBusinesses -->

<!-- DOCGEN:START listMerchantBusinesses -->
### listMerchantBusinesses

**Summary**: List all merchant businesses

**Description**: Retrieves a list of all businesses classified as merchants.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listMerchantBusinesses )

<!-- DOCGEN:END listMerchantBusinesses -->

<!-- DOCGEN:START listPromoSectionsWithMerchants -->
### listPromoSectionsWithMerchants

**Summary**: List all merchant businesses grouped by promoSections

**Description**: Retrieves a list of all businesses classified as merchants.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listMerchantBusinesses )

<!-- DOCGEN:END listPromoSectionsWithMerchants -->

<!-- DOCGEN:START listMerchantBusinessesWithDailyMeals -->
### listMerchantBusinessesWithDailyMeals

**Summary**: List all merchant businesses offering daily meals

**Description**: Retrieves a list of all businesses classified as merchants that offer daily meals.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listMerchantBusinessesWithDailyMeals )

<!-- DOCGEN:END listMerchantBusinessesWithDailyMeals -->

<!-- DOCGEN:START listMerchantBusinessesMainInfo -->
### listMerchantBusinessesMainInfo

**Summary**: List all merchant businesses offering daily meals

**Description**: Retrieves a list of all businesses classified as merchants that offer daily meals.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listMerchantBusinessesWithDailyMeals )

<!-- DOCGEN:END listMerchantBusinessesMainInfo -->

<!-- DOCGEN:START listTransferBusinessesMainInfo -->
### listTransferBusinessesMainInfo

**Summary**: List all transfer businesses (main info only)

**Description**: Retrieves a list of all transfer businesses

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listTransferBusinessesMainInfo )

<!-- DOCGEN:END listTransferBusinessesMainInfo -->

<!-- DOCGEN:START listTransferBusinesses -->
### listTransferBusinesses

**Summary**: List all taxi businesses

**Description**: Retrieves a list of all businesses classified as taxis (TRANSFER).

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listTaxiBusinesses )

<!-- DOCGEN:END listTransferBusinesses -->

<!-- DOCGEN:START getBusinessById -->
### getBusinessById

**Summary**: Get a business by ID

**Description**: Retrieves detailed information about a specific business by its ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessById )

<!-- DOCGEN:END getBusinessById -->

<!-- DOCGEN:START getBusinessAdminDataById -->
### getBusinessAdminDataById

**Summary**: Get a business by ID including admin data

**Description**: Retrieves detailed information about a specific business by its ID, including data an admin can see.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessAdminDataById )

<!-- DOCGEN:END getBusinessAdminDataById -->

<!-- DOCGEN:START getBusinessForSearchById -->
### getBusinessForSearchById

**Summary**: Get a business for search by ID

**Description**: Retrieves detailed information about a specific business by its ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessForSearchById )

<!-- DOCGEN:END getBusinessForSearchById -->

<!-- DOCGEN:START getParentBusiness -->
### getParentBusiness

**Summary**: Get parent business

**Description**: Retrieves the parent business of a specific business by its ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getParentBusiness )

<!-- DOCGEN:END getParentBusiness -->

<!-- DOCGEN:START getChildBusinesses -->
### getChildBusinesses

**Summary**: List child businesses

**Description**: Retrieves a list of child businesses for a specific parent business ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | parent_business_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getChildBusinesses )

<!-- DOCGEN:END getChildBusinesses -->

<!-- DOCGEN:START createNewBusiness -->
### createNewBusiness

**Summary**: Create a new business

**Description**: Creates a new business with the provided details.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewBusiness )

<!-- DOCGEN:END createNewBusiness -->

<!-- DOCGEN:START update -->
### update

**Summary**: Updates the business details

**Description**: This endpoint is used to update the business details.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | businessId |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusiness )

<!-- DOCGEN:END update -->

<!-- DOCGEN:START updateBusinessType -->
### updateBusinessType

**Summary**: Updates a business's type

**Description**: This endpoint is used to update a business's type.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessType )

<!-- DOCGEN:END updateBusinessType -->

<!-- DOCGEN:START updateIsBusinessUnit -->
### updateIsBusinessUnit

**Summary**: Updates the business unit status

**Description**: This endpoint is used to update whether a business is considered a business unit.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateIsBusinessUnit )

<!-- DOCGEN:END updateIsBusinessUnit -->

<!-- DOCGEN:START updateBusinessGroupName -->
### updateBusinessGroupName

**Summary**: Updates a business's group name

**Description**: This endpoint is used to update a business's group name.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessGroupName )

<!-- DOCGEN:END updateBusinessGroupName -->

<!-- DOCGEN:START updateBusinessEmail -->
### updateBusinessEmail

**Summary**: Updates a business's email

**Description**: This endpoint is used to update a business's email address.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessEmail )

<!-- DOCGEN:END updateBusinessEmail -->

<!-- DOCGEN:START updateBusinessTelephone -->
### updateBusinessTelephone

**Summary**: Updates a business's telephone

**Description**: This endpoint is used to update a business's telephone number.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessTelephone )

<!-- DOCGEN:END updateBusinessTelephone -->

<!-- DOCGEN:START updateBusinessWorkingHours -->
### updateBusinessWorkingHours

**Summary**: Updates a business's working hours

**Description**: This endpoint is used to update a business's working hours.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessWorkingHours )

<!-- DOCGEN:END updateBusinessWorkingHours -->

<!-- DOCGEN:START updateRestaurantOverwhelmed -->
### updateRestaurantOverwhelmed

**Summary**: Updates the overwhelmed status of a restaurant

**Description**: This endpoint is used to update whether a restaurant is considered overwhelmed.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (optional)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateRestaurantOverwhelmed )

<!-- DOCGEN:END updateRestaurantOverwhelmed -->

<!-- DOCGEN:START updateBusinessIsNew -->
### updateBusinessIsNew

**Summary**: Updates the new status of a business

**Description**: This endpoint is used to update whether a business is considered new.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessIsNew )

<!-- DOCGEN:END updateBusinessIsNew -->

<!-- DOCGEN:START updateBusinessIsPopular -->
### updateBusinessIsPopular

**Summary**: Updates the popularity status of a business

**Description**: This endpoint is used to update whether a business is considered popular.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessIsPopular )

<!-- DOCGEN:END updateBusinessIsPopular -->

<!-- DOCGEN:START getBusinessesByGroupName -->
### getBusinessesByGroupName

**Summary**: Search for businesses by business group name

**Description**: Retrieves businesses whose business group names contain the given search term, case-insensitively.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessesByGroupName )

<!-- DOCGEN:END getBusinessesByGroupName -->

<!-- DOCGEN:START getBusinessesByNameSearch -->
### getBusinessesByNameSearch

**Summary**: Search for businesses by name

**Description**: Retrieves businesses whose names contain the given search term, case-insensitively.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessesByNameSearch )

<!-- DOCGEN:END getBusinessesByNameSearch -->

<!-- DOCGEN:START addBusinessAddress -->
### addBusinessAddress

**Summary**: Add an address to a business

**Description**: Adds an address to a specific business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addBusinessAddress )

<!-- DOCGEN:END addBusinessAddress -->

<!-- DOCGEN:START addDeliveryAddress -->
### addDeliveryAddress

**Summary**: Add a delivery address to a business

**Description**: Adds a delivery address to a specific business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addDeliveryAddress )

<!-- DOCGEN:END addDeliveryAddress -->

<!-- DOCGEN:START updateParentBusinessId -->
### updateParentBusinessId

**Summary**: Update parent business

**Description**: Updates the parent business of a specific business by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateParentBusiness )

<!-- DOCGEN:END updateParentBusinessId -->

<!-- DOCGEN:START updateBusinessAddress -->
### updateBusinessAddress

**Summary**: Updates a business's address

**Description**: This endpoint is used to update a business's primary address.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessAddress )

<!-- DOCGEN:END updateBusinessAddress -->

<!-- DOCGEN:START updateBusinessDeliveryAddress -->
### updateBusinessDeliveryAddress

**Summary**: Updates a business's delivery address

**Description**: This endpoint is used to update a business's delivery address.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessDeliveryAddress )

<!-- DOCGEN:END updateBusinessDeliveryAddress -->

<!-- DOCGEN:START deleteBusiness -->
### deleteBusiness

**Summary**: Delete a business

**Description**: Deletes a business by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deleteBusiness )

<!-- DOCGEN:END deleteBusiness -->

<!-- DOCGEN:START removeParentBusinessId -->
### removeParentBusinessId

**Summary**: Remove a child business from its parent

**Description**: Clears the parent business association for a given child business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/removeChildBusiness )

<!-- DOCGEN:END removeParentBusinessId -->

<!-- DOCGEN:START reviewBusiness -->
### reviewBusiness

**Summary**: Review a business

**Description**: This endpoint is used add a review of business.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/reviewBusiness )

<!-- DOCGEN:END reviewBusiness -->

<!-- DOCGEN:START confirmBusinessReview -->
### confirmBusinessReview

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END confirmBusinessReview -->

<!-- DOCGEN:START createPaymentIntent -->
### createPaymentIntent

**Summary**: Create a payment intent

**Description**: This endpoint is used to create a payment intent.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createPaymentIntent )

<!-- DOCGEN:END createPaymentIntent -->

<!-- DOCGEN:START manualSortScheduledUsers -->
### manualSortScheduledUsers

**Summary**: Manually sort scheduled users

**Description**: This endpoint is used to manually sort scheduled users.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/manualSortScheduledUsers )

<!-- DOCGEN:END manualSortScheduledUsers -->

<!-- DOCGEN:START addScheduledUserSortingType -->
### addScheduledUserSortingType

**Summary**: Add sorting type for scheduled users

**Description**: This endpoint is used to add the sorting type for scheduled users.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addScheduledUserSortingType )

<!-- DOCGEN:END addScheduledUserSortingType -->

<!-- DOCGEN:START getBusinessEarnings -->
### getBusinessEarnings

**Summary**: Get earnings for a specific business

**Description**: Retrieves earnings data for a specific business based on the provided business ID and date range.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Responses:**
- 200
- 400
- 404

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`
- ⚠️ Could not parse: `404.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessEarnings )

<!-- DOCGEN:END getBusinessEarnings -->

<!-- DOCGEN:START getAllBusinessesEarnings -->
### getAllBusinessesEarnings

**Summary**: Get earnings for all businesses

**Description**: Retrieves earnings data for all businesses of type MERCHANT based on the provided date range.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAllBusinessesEarnings )

<!-- DOCGEN:END getAllBusinessesEarnings -->

<!-- DOCGEN:START getTotalEarnings -->
### getTotalEarnings

**Summary**: Get total earnings for completed delivery orders

**Description**: Retrieves the total earnings from all completed delivery orders.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getTotalEarnings )

<!-- DOCGEN:END getTotalEarnings -->

<!-- DOCGEN:START getBusinessTotalEarnings -->
### getBusinessTotalEarnings

**Summary**: Get total earnings for a specific business

**Description**: Retrieves the total earnings of a specific business based on completed orders.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessTotalEarnings )

<!-- DOCGEN:END getBusinessTotalEarnings -->

<!-- DOCGEN:START getBusinessReviewsById -->
### getBusinessReviewsById

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getBusinessReviewsById -->

<!-- DOCGEN:START editBusiness -->
### editBusiness

**Summary**: Edit business details

**Description**: This endpoint is used to update multiple details of a business, including address, delivery address, finances, and other specific data.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/editBusiness )

<!-- DOCGEN:END editBusiness -->

<!-- DOCGEN:START getBusinessStripeStatusByBusinessId -->
### getBusinessStripeStatusByBusinessId

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getBusinessStripeStatusByBusinessId -->

<!-- DOCGEN:START generateBusinessStripeByBusinessId -->
### generateBusinessStripeByBusinessId

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END generateBusinessStripeByBusinessId -->

<!-- DOCGEN:START onboardingEnd -->
### onboardingEnd

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END onboardingEnd -->

<!-- DOCGEN:START getBusynessFactorsBusinessIdList -->
### getBusynessFactorsBusinessIdList

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getBusynessFactorsBusinessIdList -->

<!-- DOCGEN:START addBusinessToFavorites -->
### addBusinessToFavorites

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END addBusinessToFavorites -->

<!-- DOCGEN:START removeBusinessFromFavorites -->
### removeBusinessFromFavorites

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END removeBusinessFromFavorites -->

<!-- DOCGEN:START getFavoriteBusinesses -->
### getFavoriteBusinesses

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getFavoriteBusinesses -->

<!-- DOCGEN:START getScheduledUsersByBusinessId -->
### getScheduledUsersByBusinessId

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getScheduledUsersByBusinessId -->

<!-- DOCGEN:START createScoringPointsHandler -->
### createScoringPointsHandler

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END createScoringPointsHandler -->

<!-- DOCGEN:START getPurchaseOrderLimit -->
### getPurchaseOrderLimit

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getPurchaseOrderLimit -->

<!-- DOCGEN:START activateBusiness -->
### activateBusiness

**Summary**: Activate a business

**Description**: Activates a business.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/activateBusiness )

<!-- DOCGEN:END activateBusiness -->

<!-- DOCGEN:START deactivateBusiness -->
### deactivateBusiness

**Summary**: Deactivate a business

**Description**: Deactivates a business.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deactivateBusiness )

<!-- DOCGEN:END deactivateBusiness -->

<!-- DOCGEN:START listBusinesses -->
### listBusinesses

**Summary**: Get a list of businesses

**Description**: Returns a list of businesses.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinesses )

<!-- DOCGEN:END listBusinesses -->

<!-- DOCGEN:START getBusinessesByIds -->
### getBusinessesByIds

**Summary**: Get a list of businesses business_ids

**Description**: Returns a list of businesses.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessesByIds )

<!-- DOCGEN:END getBusinessesByIds -->

<!-- DOCGEN:START searchBusinesses -->
### searchBusinesses

**Summary**: Get a list of businesses by query, location and categories

**Description**: Returns a list of businesses.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessesSearch )

<!-- DOCGEN:END searchBusinesses -->

<!-- DOCGEN:START listMerchantBusinesses -->
### listMerchantBusinesses

**Summary**: List all merchant businesses

**Description**: Retrieves a list of all businesses classified as merchants.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listMerchantBusinesses )

<!-- DOCGEN:END listMerchantBusinesses -->

<!-- DOCGEN:START listPromoSectionsWithMerchants -->
### listPromoSectionsWithMerchants

**Summary**: List all merchant businesses grouped by promoSections

**Description**: Retrieves a list of all businesses classified as merchants.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listMerchantBusinesses )

<!-- DOCGEN:END listPromoSectionsWithMerchants -->

<!-- DOCGEN:START listMerchantBusinessesWithDailyMeals -->
### listMerchantBusinessesWithDailyMeals

**Summary**: List all merchant businesses offering daily meals

**Description**: Retrieves a list of all businesses classified as merchants that offer daily meals.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listMerchantBusinessesWithDailyMeals )

<!-- DOCGEN:END listMerchantBusinessesWithDailyMeals -->

<!-- DOCGEN:START listMerchantBusinessesMainInfo -->
### listMerchantBusinessesMainInfo

**Summary**: List all merchant businesses offering daily meals

**Description**: Retrieves a list of all businesses classified as merchants that offer daily meals.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listMerchantBusinessesWithDailyMeals )

<!-- DOCGEN:END listMerchantBusinessesMainInfo -->

<!-- DOCGEN:START listTransferBusinessesMainInfo -->
### listTransferBusinessesMainInfo

**Summary**: List all transfer businesses (main info only)

**Description**: Retrieves a list of all transfer businesses

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listTransferBusinessesMainInfo )

<!-- DOCGEN:END listTransferBusinessesMainInfo -->

<!-- DOCGEN:START listTransferBusinesses -->
### listTransferBusinesses

**Summary**: List all taxi businesses

**Description**: Retrieves a list of all businesses classified as taxis (TRANSFER).

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listTaxiBusinesses )

<!-- DOCGEN:END listTransferBusinesses -->

<!-- DOCGEN:START getBusinessById -->
### getBusinessById

**Summary**: Get a business by ID

**Description**: Retrieves detailed information about a specific business by its ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessById )

<!-- DOCGEN:END getBusinessById -->

<!-- DOCGEN:START getBusinessAdminDataById -->
### getBusinessAdminDataById

**Summary**: Get a business by ID including admin data

**Description**: Retrieves detailed information about a specific business by its ID, including data an admin can see.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessAdminDataById )

<!-- DOCGEN:END getBusinessAdminDataById -->

<!-- DOCGEN:START getBusinessForSearchById -->
### getBusinessForSearchById

**Summary**: Get a business for search by ID

**Description**: Retrieves detailed information about a specific business by its ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessForSearchById )

<!-- DOCGEN:END getBusinessForSearchById -->

<!-- DOCGEN:START getParentBusiness -->
### getParentBusiness

**Summary**: Get parent business

**Description**: Retrieves the parent business of a specific business by its ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getParentBusiness )

<!-- DOCGEN:END getParentBusiness -->

<!-- DOCGEN:START getChildBusinesses -->
### getChildBusinesses

**Summary**: List child businesses

**Description**: Retrieves a list of child businesses for a specific parent business ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | parent_business_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getChildBusinesses )

<!-- DOCGEN:END getChildBusinesses -->

<!-- DOCGEN:START createNewBusiness -->
### createNewBusiness

**Summary**: Create a new business

**Description**: Creates a new business with the provided details.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewBusiness )

<!-- DOCGEN:END createNewBusiness -->

<!-- DOCGEN:START update -->
### update

**Summary**: Updates the business details

**Description**: This endpoint is used to update the business details.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | businessId |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusiness )

<!-- DOCGEN:END update -->

<!-- DOCGEN:START updateBusinessType -->
### updateBusinessType

**Summary**: Updates a business's type

**Description**: This endpoint is used to update a business's type.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessType )

<!-- DOCGEN:END updateBusinessType -->

<!-- DOCGEN:START updateIsBusinessUnit -->
### updateIsBusinessUnit

**Summary**: Updates the business unit status

**Description**: This endpoint is used to update whether a business is considered a business unit.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateIsBusinessUnit )

<!-- DOCGEN:END updateIsBusinessUnit -->

<!-- DOCGEN:START updateBusinessGroupName -->
### updateBusinessGroupName

**Summary**: Updates a business's group name

**Description**: This endpoint is used to update a business's group name.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessGroupName )

<!-- DOCGEN:END updateBusinessGroupName -->

<!-- DOCGEN:START updateBusinessEmail -->
### updateBusinessEmail

**Summary**: Updates a business's email

**Description**: This endpoint is used to update a business's email address.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessEmail )

<!-- DOCGEN:END updateBusinessEmail -->

<!-- DOCGEN:START updateBusinessTelephone -->
### updateBusinessTelephone

**Summary**: Updates a business's telephone

**Description**: This endpoint is used to update a business's telephone number.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessTelephone )

<!-- DOCGEN:END updateBusinessTelephone -->

<!-- DOCGEN:START updateBusinessWorkingHours -->
### updateBusinessWorkingHours

**Summary**: Updates a business's working hours

**Description**: This endpoint is used to update a business's working hours.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessWorkingHours )

<!-- DOCGEN:END updateBusinessWorkingHours -->

<!-- DOCGEN:START updateRestaurantOverwhelmed -->
### updateRestaurantOverwhelmed

**Summary**: Updates the overwhelmed status of a restaurant

**Description**: This endpoint is used to update whether a restaurant is considered overwhelmed.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (optional)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateRestaurantOverwhelmed )

<!-- DOCGEN:END updateRestaurantOverwhelmed -->

<!-- DOCGEN:START updateBusinessIsNew -->
### updateBusinessIsNew

**Summary**: Updates the new status of a business

**Description**: This endpoint is used to update whether a business is considered new.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessIsNew )

<!-- DOCGEN:END updateBusinessIsNew -->

<!-- DOCGEN:START updateBusinessIsPopular -->
### updateBusinessIsPopular

**Summary**: Updates the popularity status of a business

**Description**: This endpoint is used to update whether a business is considered popular.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessIsPopular )

<!-- DOCGEN:END updateBusinessIsPopular -->

<!-- DOCGEN:START getBusinessesByGroupName -->
### getBusinessesByGroupName

**Summary**: Search for businesses by business group name

**Description**: Retrieves businesses whose business group names contain the given search term, case-insensitively.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessesByGroupName )

<!-- DOCGEN:END getBusinessesByGroupName -->

<!-- DOCGEN:START getBusinessesByNameSearch -->
### getBusinessesByNameSearch

**Summary**: Search for businesses by name

**Description**: Retrieves businesses whose names contain the given search term, case-insensitively.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessesByNameSearch )

<!-- DOCGEN:END getBusinessesByNameSearch -->

<!-- DOCGEN:START addBusinessAddress -->
### addBusinessAddress

**Summary**: Add an address to a business

**Description**: Adds an address to a specific business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addBusinessAddress )

<!-- DOCGEN:END addBusinessAddress -->

<!-- DOCGEN:START addDeliveryAddress -->
### addDeliveryAddress

**Summary**: Add a delivery address to a business

**Description**: Adds a delivery address to a specific business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addDeliveryAddress )

<!-- DOCGEN:END addDeliveryAddress -->

<!-- DOCGEN:START updateParentBusinessId -->
### updateParentBusinessId

**Summary**: Update parent business

**Description**: Updates the parent business of a specific business by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateParentBusiness )

<!-- DOCGEN:END updateParentBusinessId -->

<!-- DOCGEN:START updateBusinessAddress -->
### updateBusinessAddress

**Summary**: Updates a business's address

**Description**: This endpoint is used to update a business's primary address.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessAddress )

<!-- DOCGEN:END updateBusinessAddress -->

<!-- DOCGEN:START updateBusinessDeliveryAddress -->
### updateBusinessDeliveryAddress

**Summary**: Updates a business's delivery address

**Description**: This endpoint is used to update a business's delivery address.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessDeliveryAddress )

<!-- DOCGEN:END updateBusinessDeliveryAddress -->

<!-- DOCGEN:START deleteBusiness -->
### deleteBusiness

**Summary**: Delete a business

**Description**: Deletes a business by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deleteBusiness )

<!-- DOCGEN:END deleteBusiness -->

<!-- DOCGEN:START removeParentBusinessId -->
### removeParentBusinessId

**Summary**: Remove a child business from its parent

**Description**: Clears the parent business association for a given child business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/removeChildBusiness )

<!-- DOCGEN:END removeParentBusinessId -->

<!-- DOCGEN:START reviewBusiness -->
### reviewBusiness

**Summary**: Review a business

**Description**: This endpoint is used add a review of business.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/reviewBusiness )

<!-- DOCGEN:END reviewBusiness -->

<!-- DOCGEN:START confirmBusinessReview -->
### confirmBusinessReview

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END confirmBusinessReview -->

<!-- DOCGEN:START createPaymentIntent -->
### createPaymentIntent

**Summary**: Create a payment intent

**Description**: This endpoint is used to create a payment intent.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createPaymentIntent )

<!-- DOCGEN:END createPaymentIntent -->

<!-- DOCGEN:START manualSortScheduledUsers -->
### manualSortScheduledUsers

**Summary**: Manually sort scheduled users

**Description**: This endpoint is used to manually sort scheduled users.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/manualSortScheduledUsers )

<!-- DOCGEN:END manualSortScheduledUsers -->

<!-- DOCGEN:START addScheduledUserSortingType -->
### addScheduledUserSortingType

**Summary**: Add sorting type for scheduled users

**Description**: This endpoint is used to add the sorting type for scheduled users.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addScheduledUserSortingType )

<!-- DOCGEN:END addScheduledUserSortingType -->

<!-- DOCGEN:START getBusinessEarnings -->
### getBusinessEarnings

**Summary**: Get earnings for a specific business

**Description**: Retrieves earnings data for a specific business based on the provided business ID and date range.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Responses:**
- 200
- 400
- 404

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`
- ⚠️ Could not parse: `404.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessEarnings )

<!-- DOCGEN:END getBusinessEarnings -->

<!-- DOCGEN:START getAllBusinessesEarnings -->
### getAllBusinessesEarnings

**Summary**: Get earnings for all businesses

**Description**: Retrieves earnings data for all businesses of type MERCHANT based on the provided date range.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAllBusinessesEarnings )

<!-- DOCGEN:END getAllBusinessesEarnings -->

<!-- DOCGEN:START getTotalEarnings -->
### getTotalEarnings

**Summary**: Get total earnings for completed delivery orders

**Description**: Retrieves the total earnings from all completed delivery orders.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getTotalEarnings )

<!-- DOCGEN:END getTotalEarnings -->

<!-- DOCGEN:START getBusinessTotalEarnings -->
### getBusinessTotalEarnings

**Summary**: Get total earnings for a specific business

**Description**: Retrieves the total earnings of a specific business based on completed orders.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessTotalEarnings )

<!-- DOCGEN:END getBusinessTotalEarnings -->

<!-- DOCGEN:START getBusinessReviewsById -->
### getBusinessReviewsById

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getBusinessReviewsById -->

<!-- DOCGEN:START editBusiness -->
### editBusiness

**Summary**: Edit business details

**Description**: This endpoint is used to update multiple details of a business, including address, delivery address, finances, and other specific data.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/editBusiness )

<!-- DOCGEN:END editBusiness -->

<!-- DOCGEN:START getBusinessStripeStatusByBusinessId -->
### getBusinessStripeStatusByBusinessId

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getBusinessStripeStatusByBusinessId -->

<!-- DOCGEN:START generateBusinessStripeByBusinessId -->
### generateBusinessStripeByBusinessId

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END generateBusinessStripeByBusinessId -->

<!-- DOCGEN:START onboardingEnd -->
### onboardingEnd

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END onboardingEnd -->

<!-- DOCGEN:START getBusynessFactorsBusinessIdList -->
### getBusynessFactorsBusinessIdList

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getBusynessFactorsBusinessIdList -->

<!-- DOCGEN:START addBusinessToFavorites -->
### addBusinessToFavorites

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END addBusinessToFavorites -->

<!-- DOCGEN:START removeBusinessFromFavorites -->
### removeBusinessFromFavorites

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END removeBusinessFromFavorites -->

<!-- DOCGEN:START getFavoriteBusinesses -->
### getFavoriteBusinesses

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getFavoriteBusinesses -->

<!-- DOCGEN:START getScheduledUsersByBusinessId -->
### getScheduledUsersByBusinessId

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getScheduledUsersByBusinessId -->

<!-- DOCGEN:START createScoringPointsHandler -->
### createScoringPointsHandler

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END createScoringPointsHandler -->

<!-- DOCGEN:START getPurchaseOrderLimit -->
### getPurchaseOrderLimit

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getPurchaseOrderLimit -->

<!-- DOCGEN:START activateBusiness -->
### activateBusiness

**Summary**: Activate a business

**Description**: Activates a business.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/activateBusiness )

<!-- DOCGEN:END activateBusiness -->

<!-- DOCGEN:START deactivateBusiness -->
### deactivateBusiness

**Summary**: Deactivate a business

**Description**: Deactivates a business.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deactivateBusiness )

<!-- DOCGEN:END deactivateBusiness -->

<!-- DOCGEN:START listBusinesses -->
### listBusinesses

**Summary**: Get a list of businesses

**Description**: Returns a list of businesses.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinesses )

<!-- DOCGEN:END listBusinesses -->

<!-- DOCGEN:START getBusinessesByIds -->
### getBusinessesByIds

**Summary**: Get a list of businesses business_ids

**Description**: Returns a list of businesses.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessesByIds )

<!-- DOCGEN:END getBusinessesByIds -->

<!-- DOCGEN:START searchBusinesses -->
### searchBusinesses

**Summary**: Get a list of businesses by query, location and categories

**Description**: Returns a list of businesses.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessesSearch )

<!-- DOCGEN:END searchBusinesses -->

<!-- DOCGEN:START listMerchantBusinesses -->
### listMerchantBusinesses

**Summary**: List all merchant businesses

**Description**: Retrieves a list of all businesses classified as merchants.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listMerchantBusinesses )

<!-- DOCGEN:END listMerchantBusinesses -->

<!-- DOCGEN:START listPromoSectionsWithMerchants -->
### listPromoSectionsWithMerchants

**Summary**: List all merchant businesses grouped by promoSections

**Description**: Retrieves a list of all businesses classified as merchants.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listMerchantBusinesses )

<!-- DOCGEN:END listPromoSectionsWithMerchants -->

<!-- DOCGEN:START listMerchantBusinessesWithDailyMeals -->
### listMerchantBusinessesWithDailyMeals

**Summary**: List all merchant businesses offering daily meals

**Description**: Retrieves a list of all businesses classified as merchants that offer daily meals.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listMerchantBusinessesWithDailyMeals )

<!-- DOCGEN:END listMerchantBusinessesWithDailyMeals -->

<!-- DOCGEN:START listMerchantBusinessesMainInfo -->
### listMerchantBusinessesMainInfo

**Summary**: List all merchant businesses offering daily meals

**Description**: Retrieves a list of all businesses classified as merchants that offer daily meals.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listMerchantBusinessesWithDailyMeals )

<!-- DOCGEN:END listMerchantBusinessesMainInfo -->

<!-- DOCGEN:START listTransferBusinessesMainInfo -->
### listTransferBusinessesMainInfo

**Summary**: List all transfer businesses (main info only)

**Description**: Retrieves a list of all transfer businesses

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listTransferBusinessesMainInfo )

<!-- DOCGEN:END listTransferBusinessesMainInfo -->

<!-- DOCGEN:START listTransferBusinesses -->
### listTransferBusinesses

**Summary**: List all taxi businesses

**Description**: Retrieves a list of all businesses classified as taxis (TRANSFER).

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listTaxiBusinesses )

<!-- DOCGEN:END listTransferBusinesses -->

<!-- DOCGEN:START getBusinessById -->
### getBusinessById

**Summary**: Get a business by ID

**Description**: Retrieves detailed information about a specific business by its ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessById )

<!-- DOCGEN:END getBusinessById -->

<!-- DOCGEN:START getBusinessAdminDataById -->
### getBusinessAdminDataById

**Summary**: Get a business by ID including admin data

**Description**: Retrieves detailed information about a specific business by its ID, including data an admin can see.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessAdminDataById )

<!-- DOCGEN:END getBusinessAdminDataById -->

<!-- DOCGEN:START getBusinessForSearchById -->
### getBusinessForSearchById

**Summary**: Get a business for search by ID

**Description**: Retrieves detailed information about a specific business by its ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessForSearchById )

<!-- DOCGEN:END getBusinessForSearchById -->

<!-- DOCGEN:START getParentBusiness -->
### getParentBusiness

**Summary**: Get parent business

**Description**: Retrieves the parent business of a specific business by its ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getParentBusiness )

<!-- DOCGEN:END getParentBusiness -->

<!-- DOCGEN:START getChildBusinesses -->
### getChildBusinesses

**Summary**: List child businesses

**Description**: Retrieves a list of child businesses for a specific parent business ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | parent_business_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getChildBusinesses )

<!-- DOCGEN:END getChildBusinesses -->

<!-- DOCGEN:START createNewBusiness -->
### createNewBusiness

**Summary**: Create a new business

**Description**: Creates a new business with the provided details.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewBusiness )

<!-- DOCGEN:END createNewBusiness -->

<!-- DOCGEN:START update -->
### update

**Summary**: Updates the business details

**Description**: This endpoint is used to update the business details.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | businessId |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusiness )

<!-- DOCGEN:END update -->

<!-- DOCGEN:START updateBusinessType -->
### updateBusinessType

**Summary**: Updates a business's type

**Description**: This endpoint is used to update a business's type.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessType )

<!-- DOCGEN:END updateBusinessType -->

<!-- DOCGEN:START updateIsBusinessUnit -->
### updateIsBusinessUnit

**Summary**: Updates the business unit status

**Description**: This endpoint is used to update whether a business is considered a business unit.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateIsBusinessUnit )

<!-- DOCGEN:END updateIsBusinessUnit -->

<!-- DOCGEN:START updateBusinessGroupName -->
### updateBusinessGroupName

**Summary**: Updates a business's group name

**Description**: This endpoint is used to update a business's group name.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessGroupName )

<!-- DOCGEN:END updateBusinessGroupName -->

<!-- DOCGEN:START updateBusinessEmail -->
### updateBusinessEmail

**Summary**: Updates a business's email

**Description**: This endpoint is used to update a business's email address.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessEmail )

<!-- DOCGEN:END updateBusinessEmail -->

<!-- DOCGEN:START updateBusinessTelephone -->
### updateBusinessTelephone

**Summary**: Updates a business's telephone

**Description**: This endpoint is used to update a business's telephone number.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessTelephone )

<!-- DOCGEN:END updateBusinessTelephone -->

<!-- DOCGEN:START updateBusinessWorkingHours -->
### updateBusinessWorkingHours

**Summary**: Updates a business's working hours

**Description**: This endpoint is used to update a business's working hours.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessWorkingHours )

<!-- DOCGEN:END updateBusinessWorkingHours -->

<!-- DOCGEN:START updateRestaurantOverwhelmed -->
### updateRestaurantOverwhelmed

**Summary**: Updates the overwhelmed status of a restaurant

**Description**: This endpoint is used to update whether a restaurant is considered overwhelmed.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (optional)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateRestaurantOverwhelmed )

<!-- DOCGEN:END updateRestaurantOverwhelmed -->

<!-- DOCGEN:START updateBusinessIsNew -->
### updateBusinessIsNew

**Summary**: Updates the new status of a business

**Description**: This endpoint is used to update whether a business is considered new.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessIsNew )

<!-- DOCGEN:END updateBusinessIsNew -->

<!-- DOCGEN:START updateBusinessIsPopular -->
### updateBusinessIsPopular

**Summary**: Updates the popularity status of a business

**Description**: This endpoint is used to update whether a business is considered popular.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessIsPopular )

<!-- DOCGEN:END updateBusinessIsPopular -->

<!-- DOCGEN:START getBusinessesByGroupName -->
### getBusinessesByGroupName

**Summary**: Search for businesses by business group name

**Description**: Retrieves businesses whose business group names contain the given search term, case-insensitively.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessesByGroupName )

<!-- DOCGEN:END getBusinessesByGroupName -->

<!-- DOCGEN:START getBusinessesByNameSearch -->
### getBusinessesByNameSearch

**Summary**: Search for businesses by name

**Description**: Retrieves businesses whose names contain the given search term, case-insensitively.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessesByNameSearch )

<!-- DOCGEN:END getBusinessesByNameSearch -->

<!-- DOCGEN:START addBusinessAddress -->
### addBusinessAddress

**Summary**: Add an address to a business

**Description**: Adds an address to a specific business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addBusinessAddress )

<!-- DOCGEN:END addBusinessAddress -->

<!-- DOCGEN:START addDeliveryAddress -->
### addDeliveryAddress

**Summary**: Add a delivery address to a business

**Description**: Adds a delivery address to a specific business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addDeliveryAddress )

<!-- DOCGEN:END addDeliveryAddress -->

<!-- DOCGEN:START updateParentBusinessId -->
### updateParentBusinessId

**Summary**: Update parent business

**Description**: Updates the parent business of a specific business by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateParentBusiness )

<!-- DOCGEN:END updateParentBusinessId -->

<!-- DOCGEN:START updateBusinessAddress -->
### updateBusinessAddress

**Summary**: Updates a business's address

**Description**: This endpoint is used to update a business's primary address.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessAddress )

<!-- DOCGEN:END updateBusinessAddress -->

<!-- DOCGEN:START updateBusinessDeliveryAddress -->
### updateBusinessDeliveryAddress

**Summary**: Updates a business's delivery address

**Description**: This endpoint is used to update a business's delivery address.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessDeliveryAddress )

<!-- DOCGEN:END updateBusinessDeliveryAddress -->

<!-- DOCGEN:START deleteBusiness -->
### deleteBusiness

**Summary**: Delete a business

**Description**: Deletes a business by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deleteBusiness )

<!-- DOCGEN:END deleteBusiness -->

<!-- DOCGEN:START removeParentBusinessId -->
### removeParentBusinessId

**Summary**: Remove a child business from its parent

**Description**: Clears the parent business association for a given child business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/removeChildBusiness )

<!-- DOCGEN:END removeParentBusinessId -->

<!-- DOCGEN:START reviewBusiness -->
### reviewBusiness

**Summary**: Review a business

**Description**: This endpoint is used add a review of business.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/reviewBusiness )

<!-- DOCGEN:END reviewBusiness -->

<!-- DOCGEN:START confirmBusinessReview -->
### confirmBusinessReview

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END confirmBusinessReview -->

<!-- DOCGEN:START createPaymentIntent -->
### createPaymentIntent

**Summary**: Create a payment intent

**Description**: This endpoint is used to create a payment intent.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createPaymentIntent )

<!-- DOCGEN:END createPaymentIntent -->

<!-- DOCGEN:START manualSortScheduledUsers -->
### manualSortScheduledUsers

**Summary**: Manually sort scheduled users

**Description**: This endpoint is used to manually sort scheduled users.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/manualSortScheduledUsers )

<!-- DOCGEN:END manualSortScheduledUsers -->

<!-- DOCGEN:START addScheduledUserSortingType -->
### addScheduledUserSortingType

**Summary**: Add sorting type for scheduled users

**Description**: This endpoint is used to add the sorting type for scheduled users.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addScheduledUserSortingType )

<!-- DOCGEN:END addScheduledUserSortingType -->

<!-- DOCGEN:START getBusinessEarnings -->
### getBusinessEarnings

**Summary**: Get earnings for a specific business

**Description**: Retrieves earnings data for a specific business based on the provided business ID and date range.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Responses:**
- 200
- 400
- 404

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`
- ⚠️ Could not parse: `404.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessEarnings )

<!-- DOCGEN:END getBusinessEarnings -->

<!-- DOCGEN:START getAllBusinessesEarnings -->
### getAllBusinessesEarnings

**Summary**: Get earnings for all businesses

**Description**: Retrieves earnings data for all businesses of type MERCHANT based on the provided date range.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAllBusinessesEarnings )

<!-- DOCGEN:END getAllBusinessesEarnings -->

<!-- DOCGEN:START getTotalEarnings -->
### getTotalEarnings

**Summary**: Get total earnings for completed delivery orders

**Description**: Retrieves the total earnings from all completed delivery orders.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getTotalEarnings )

<!-- DOCGEN:END getTotalEarnings -->

<!-- DOCGEN:START getBusinessTotalEarnings -->
### getBusinessTotalEarnings

**Summary**: Get total earnings for a specific business

**Description**: Retrieves the total earnings of a specific business based on completed orders.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessTotalEarnings )

<!-- DOCGEN:END getBusinessTotalEarnings -->

<!-- DOCGEN:START getBusinessReviewsById -->
### getBusinessReviewsById

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getBusinessReviewsById -->

<!-- DOCGEN:START editBusiness -->
### editBusiness

**Summary**: Edit business details

**Description**: This endpoint is used to update multiple details of a business, including address, delivery address, finances, and other specific data.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/editBusiness )

<!-- DOCGEN:END editBusiness -->

<!-- DOCGEN:START getBusinessStripeStatusByBusinessId -->
### getBusinessStripeStatusByBusinessId

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getBusinessStripeStatusByBusinessId -->

<!-- DOCGEN:START generateBusinessStripeByBusinessId -->
### generateBusinessStripeByBusinessId

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END generateBusinessStripeByBusinessId -->

<!-- DOCGEN:START onboardingEnd -->
### onboardingEnd

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END onboardingEnd -->

<!-- DOCGEN:START getBusynessFactorsBusinessIdList -->
### getBusynessFactorsBusinessIdList

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getBusynessFactorsBusinessIdList -->

<!-- DOCGEN:START addBusinessToFavorites -->
### addBusinessToFavorites

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END addBusinessToFavorites -->

<!-- DOCGEN:START removeBusinessFromFavorites -->
### removeBusinessFromFavorites

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END removeBusinessFromFavorites -->

<!-- DOCGEN:START getFavoriteBusinesses -->
### getFavoriteBusinesses

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getFavoriteBusinesses -->

<!-- DOCGEN:START getScheduledUsersByBusinessId -->
### getScheduledUsersByBusinessId

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getScheduledUsersByBusinessId -->

<!-- DOCGEN:START createScoringPointsHandler -->
### createScoringPointsHandler

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END createScoringPointsHandler -->

<!-- DOCGEN:START getPurchaseOrderLimit -->
### getPurchaseOrderLimit

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getPurchaseOrderLimit -->

<!-- DOCGEN:START activateBusiness -->
### activateBusiness

**Summary**: Activate a business

**Description**: Activates a business.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/activateBusiness )

<!-- DOCGEN:END activateBusiness -->

<!-- DOCGEN:START deactivateBusiness -->
### deactivateBusiness

**Summary**: Deactivate a business

**Description**: Deactivates a business.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deactivateBusiness )

<!-- DOCGEN:END deactivateBusiness -->

<!-- DOCGEN:START listBusinesses -->
### listBusinesses

**Summary**: Get a list of businesses

**Description**: Returns a list of businesses.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinesses )

<!-- DOCGEN:END listBusinesses -->

<!-- DOCGEN:START getBusinessesByIds -->
### getBusinessesByIds

**Summary**: Get a list of businesses business_ids

**Description**: Returns a list of businesses.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessesByIds )

<!-- DOCGEN:END getBusinessesByIds -->

<!-- DOCGEN:START searchBusinesses -->
### searchBusinesses

**Summary**: Get a list of businesses by query, location and categories

**Description**: Returns a list of businesses.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessesSearch )

<!-- DOCGEN:END searchBusinesses -->

<!-- DOCGEN:START listMerchantBusinesses -->
### listMerchantBusinesses

**Summary**: List all merchant businesses

**Description**: Retrieves a list of all businesses classified as merchants.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listMerchantBusinesses )

<!-- DOCGEN:END listMerchantBusinesses -->

<!-- DOCGEN:START listPromoSectionsWithMerchants -->
### listPromoSectionsWithMerchants

**Summary**: List all merchant businesses grouped by promoSections

**Description**: Retrieves a list of all businesses classified as merchants.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listMerchantBusinesses )

<!-- DOCGEN:END listPromoSectionsWithMerchants -->

<!-- DOCGEN:START listMerchantBusinessesWithDailyMeals -->
### listMerchantBusinessesWithDailyMeals

**Summary**: List all merchant businesses offering daily meals

**Description**: Retrieves a list of all businesses classified as merchants that offer daily meals.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listMerchantBusinessesWithDailyMeals )

<!-- DOCGEN:END listMerchantBusinessesWithDailyMeals -->

<!-- DOCGEN:START listMerchantBusinessesMainInfo -->
### listMerchantBusinessesMainInfo

**Summary**: List all merchant businesses offering daily meals

**Description**: Retrieves a list of all businesses classified as merchants that offer daily meals.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listMerchantBusinessesWithDailyMeals )

<!-- DOCGEN:END listMerchantBusinessesMainInfo -->

<!-- DOCGEN:START listTransferBusinessesMainInfo -->
### listTransferBusinessesMainInfo

**Summary**: List all transfer businesses (main info only)

**Description**: Retrieves a list of all transfer businesses

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listTransferBusinessesMainInfo )

<!-- DOCGEN:END listTransferBusinessesMainInfo -->

<!-- DOCGEN:START listTransferBusinesses -->
### listTransferBusinesses

**Summary**: List all taxi businesses

**Description**: Retrieves a list of all businesses classified as taxis (TRANSFER).

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listTaxiBusinesses )

<!-- DOCGEN:END listTransferBusinesses -->

<!-- DOCGEN:START getBusinessById -->
### getBusinessById

**Summary**: Get a business by ID

**Description**: Retrieves detailed information about a specific business by its ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessById )

<!-- DOCGEN:END getBusinessById -->

<!-- DOCGEN:START getBusinessAdminDataById -->
### getBusinessAdminDataById

**Summary**: Get a business by ID including admin data

**Description**: Retrieves detailed information about a specific business by its ID, including data an admin can see.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessAdminDataById )

<!-- DOCGEN:END getBusinessAdminDataById -->

<!-- DOCGEN:START getBusinessForSearchById -->
### getBusinessForSearchById

**Summary**: Get a business for search by ID

**Description**: Retrieves detailed information about a specific business by its ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessForSearchById )

<!-- DOCGEN:END getBusinessForSearchById -->

<!-- DOCGEN:START getParentBusiness -->
### getParentBusiness

**Summary**: Get parent business

**Description**: Retrieves the parent business of a specific business by its ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getParentBusiness )

<!-- DOCGEN:END getParentBusiness -->

<!-- DOCGEN:START getChildBusinesses -->
### getChildBusinesses

**Summary**: List child businesses

**Description**: Retrieves a list of child businesses for a specific parent business ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | parent_business_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getChildBusinesses )

<!-- DOCGEN:END getChildBusinesses -->

<!-- DOCGEN:START createNewBusiness -->
### createNewBusiness

**Summary**: Create a new business

**Description**: Creates a new business with the provided details.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewBusiness )

<!-- DOCGEN:END createNewBusiness -->

<!-- DOCGEN:START update -->
### update

**Summary**: Updates the business details

**Description**: This endpoint is used to update the business details.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | businessId |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusiness )

<!-- DOCGEN:END update -->

<!-- DOCGEN:START updateBusinessType -->
### updateBusinessType

**Summary**: Updates a business's type

**Description**: This endpoint is used to update a business's type.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessType )

<!-- DOCGEN:END updateBusinessType -->

<!-- DOCGEN:START updateIsBusinessUnit -->
### updateIsBusinessUnit

**Summary**: Updates the business unit status

**Description**: This endpoint is used to update whether a business is considered a business unit.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateIsBusinessUnit )

<!-- DOCGEN:END updateIsBusinessUnit -->

<!-- DOCGEN:START updateBusinessGroupName -->
### updateBusinessGroupName

**Summary**: Updates a business's group name

**Description**: This endpoint is used to update a business's group name.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessGroupName )

<!-- DOCGEN:END updateBusinessGroupName -->

<!-- DOCGEN:START updateBusinessEmail -->
### updateBusinessEmail

**Summary**: Updates a business's email

**Description**: This endpoint is used to update a business's email address.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessEmail )

<!-- DOCGEN:END updateBusinessEmail -->

<!-- DOCGEN:START updateBusinessTelephone -->
### updateBusinessTelephone

**Summary**: Updates a business's telephone

**Description**: This endpoint is used to update a business's telephone number.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessTelephone )

<!-- DOCGEN:END updateBusinessTelephone -->

<!-- DOCGEN:START updateBusinessWorkingHours -->
### updateBusinessWorkingHours

**Summary**: Updates a business's working hours

**Description**: This endpoint is used to update a business's working hours.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessWorkingHours )

<!-- DOCGEN:END updateBusinessWorkingHours -->

<!-- DOCGEN:START updateRestaurantOverwhelmed -->
### updateRestaurantOverwhelmed

**Summary**: Updates the overwhelmed status of a restaurant

**Description**: This endpoint is used to update whether a restaurant is considered overwhelmed.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (optional)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateRestaurantOverwhelmed )

<!-- DOCGEN:END updateRestaurantOverwhelmed -->

<!-- DOCGEN:START updateBusinessIsNew -->
### updateBusinessIsNew

**Summary**: Updates the new status of a business

**Description**: This endpoint is used to update whether a business is considered new.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessIsNew )

<!-- DOCGEN:END updateBusinessIsNew -->

<!-- DOCGEN:START updateBusinessIsPopular -->
### updateBusinessIsPopular

**Summary**: Updates the popularity status of a business

**Description**: This endpoint is used to update whether a business is considered popular.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessIsPopular )

<!-- DOCGEN:END updateBusinessIsPopular -->

<!-- DOCGEN:START getBusinessesByGroupName -->
### getBusinessesByGroupName

**Summary**: Search for businesses by business group name

**Description**: Retrieves businesses whose business group names contain the given search term, case-insensitively.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessesByGroupName )

<!-- DOCGEN:END getBusinessesByGroupName -->

<!-- DOCGEN:START getBusinessesByNameSearch -->
### getBusinessesByNameSearch

**Summary**: Search for businesses by name

**Description**: Retrieves businesses whose names contain the given search term, case-insensitively.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessesByNameSearch )

<!-- DOCGEN:END getBusinessesByNameSearch -->

<!-- DOCGEN:START addBusinessAddress -->
### addBusinessAddress

**Summary**: Add an address to a business

**Description**: Adds an address to a specific business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addBusinessAddress )

<!-- DOCGEN:END addBusinessAddress -->

<!-- DOCGEN:START addDeliveryAddress -->
### addDeliveryAddress

**Summary**: Add a delivery address to a business

**Description**: Adds a delivery address to a specific business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addDeliveryAddress )

<!-- DOCGEN:END addDeliveryAddress -->

<!-- DOCGEN:START updateParentBusinessId -->
### updateParentBusinessId

**Summary**: Update parent business

**Description**: Updates the parent business of a specific business by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateParentBusiness )

<!-- DOCGEN:END updateParentBusinessId -->

<!-- DOCGEN:START updateBusinessAddress -->
### updateBusinessAddress

**Summary**: Updates a business's address

**Description**: This endpoint is used to update a business's primary address.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessAddress )

<!-- DOCGEN:END updateBusinessAddress -->

<!-- DOCGEN:START updateBusinessDeliveryAddress -->
### updateBusinessDeliveryAddress

**Summary**: Updates a business's delivery address

**Description**: This endpoint is used to update a business's delivery address.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessDeliveryAddress )

<!-- DOCGEN:END updateBusinessDeliveryAddress -->

<!-- DOCGEN:START deleteBusiness -->
### deleteBusiness

**Summary**: Delete a business

**Description**: Deletes a business by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deleteBusiness )

<!-- DOCGEN:END deleteBusiness -->

<!-- DOCGEN:START removeParentBusinessId -->
### removeParentBusinessId

**Summary**: Remove a child business from its parent

**Description**: Clears the parent business association for a given child business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/removeChildBusiness )

<!-- DOCGEN:END removeParentBusinessId -->

<!-- DOCGEN:START reviewBusiness -->
### reviewBusiness

**Summary**: Review a business

**Description**: This endpoint is used add a review of business.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/reviewBusiness )

<!-- DOCGEN:END reviewBusiness -->

<!-- DOCGEN:START confirmBusinessReview -->
### confirmBusinessReview

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END confirmBusinessReview -->

<!-- DOCGEN:START createPaymentIntent -->
### createPaymentIntent

**Summary**: Create a payment intent

**Description**: This endpoint is used to create a payment intent.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createPaymentIntent )

<!-- DOCGEN:END createPaymentIntent -->

<!-- DOCGEN:START manualSortScheduledUsers -->
### manualSortScheduledUsers

**Summary**: Manually sort scheduled users

**Description**: This endpoint is used to manually sort scheduled users.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/manualSortScheduledUsers )

<!-- DOCGEN:END manualSortScheduledUsers -->

<!-- DOCGEN:START addScheduledUserSortingType -->
### addScheduledUserSortingType

**Summary**: Add sorting type for scheduled users

**Description**: This endpoint is used to add the sorting type for scheduled users.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addScheduledUserSortingType )

<!-- DOCGEN:END addScheduledUserSortingType -->

<!-- DOCGEN:START getBusinessEarnings -->
### getBusinessEarnings

**Summary**: Get earnings for a specific business

**Description**: Retrieves earnings data for a specific business based on the provided business ID and date range.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Responses:**
- 200
- 400
- 404

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`
- ⚠️ Could not parse: `404.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessEarnings )

<!-- DOCGEN:END getBusinessEarnings -->

<!-- DOCGEN:START getAllBusinessesEarnings -->
### getAllBusinessesEarnings

**Summary**: Get earnings for all businesses

**Description**: Retrieves earnings data for all businesses of type MERCHANT based on the provided date range.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAllBusinessesEarnings )

<!-- DOCGEN:END getAllBusinessesEarnings -->

<!-- DOCGEN:START getTotalEarnings -->
### getTotalEarnings

**Summary**: Get total earnings for completed delivery orders

**Description**: Retrieves the total earnings from all completed delivery orders.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getTotalEarnings )

<!-- DOCGEN:END getTotalEarnings -->

<!-- DOCGEN:START getBusinessTotalEarnings -->
### getBusinessTotalEarnings

**Summary**: Get total earnings for a specific business

**Description**: Retrieves the total earnings of a specific business based on completed orders.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessTotalEarnings )

<!-- DOCGEN:END getBusinessTotalEarnings -->

<!-- DOCGEN:START getBusinessReviewsById -->
### getBusinessReviewsById

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getBusinessReviewsById -->

<!-- DOCGEN:START editBusiness -->
### editBusiness

**Summary**: Edit business details

**Description**: This endpoint is used to update multiple details of a business, including address, delivery address, finances, and other specific data.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/editBusiness )

<!-- DOCGEN:END editBusiness -->

<!-- DOCGEN:START getBusinessStripeStatusByBusinessId -->
### getBusinessStripeStatusByBusinessId

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getBusinessStripeStatusByBusinessId -->

<!-- DOCGEN:START generateBusinessStripeByBusinessId -->
### generateBusinessStripeByBusinessId

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END generateBusinessStripeByBusinessId -->

<!-- DOCGEN:START onboardingEnd -->
### onboardingEnd

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END onboardingEnd -->

<!-- DOCGEN:START getBusynessFactorsBusinessIdList -->
### getBusynessFactorsBusinessIdList

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getBusynessFactorsBusinessIdList -->

<!-- DOCGEN:START addBusinessToFavorites -->
### addBusinessToFavorites

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END addBusinessToFavorites -->

<!-- DOCGEN:START removeBusinessFromFavorites -->
### removeBusinessFromFavorites

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END removeBusinessFromFavorites -->

<!-- DOCGEN:START getFavoriteBusinesses -->
### getFavoriteBusinesses

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getFavoriteBusinesses -->

<!-- DOCGEN:START getScheduledUsersByBusinessId -->
### getScheduledUsersByBusinessId

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getScheduledUsersByBusinessId -->

<!-- DOCGEN:START createScoringPointsHandler -->
### createScoringPointsHandler

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END createScoringPointsHandler -->

<!-- DOCGEN:START getPurchaseOrderLimit -->
### getPurchaseOrderLimit

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getPurchaseOrderLimit -->

<!-- DOCGEN:START activateBusiness -->
### activateBusiness

**Summary**: Activate a business

**Description**: Activates a business.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/activateBusiness )

<!-- DOCGEN:END activateBusiness -->

<!-- DOCGEN:START deactivateBusiness -->
### deactivateBusiness

**Summary**: Deactivate a business

**Description**: Deactivates a business.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deactivateBusiness )

<!-- DOCGEN:END deactivateBusiness -->

<!-- DOCGEN:START listBusinesses -->
### listBusinesses

**Summary**: Get a list of businesses

**Description**: Returns a list of businesses.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinesses )

<!-- DOCGEN:END listBusinesses -->

<!-- DOCGEN:START getBusinessesByIds -->
### getBusinessesByIds

**Summary**: Get a list of businesses business_ids

**Description**: Returns a list of businesses.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessesByIds )

<!-- DOCGEN:END getBusinessesByIds -->

<!-- DOCGEN:START searchBusinesses -->
### searchBusinesses

**Summary**: Get a list of businesses by query, location and categories

**Description**: Returns a list of businesses.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessesSearch )

<!-- DOCGEN:END searchBusinesses -->

<!-- DOCGEN:START listMerchantBusinesses -->
### listMerchantBusinesses

**Summary**: List all merchant businesses

**Description**: Retrieves a list of all businesses classified as merchants.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listMerchantBusinesses )

<!-- DOCGEN:END listMerchantBusinesses -->

<!-- DOCGEN:START listPromoSectionsWithMerchants -->
### listPromoSectionsWithMerchants

**Summary**: List all merchant businesses grouped by promoSections

**Description**: Retrieves a list of all businesses classified as merchants.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listMerchantBusinesses )

<!-- DOCGEN:END listPromoSectionsWithMerchants -->

<!-- DOCGEN:START listMerchantBusinessesWithDailyMeals -->
### listMerchantBusinessesWithDailyMeals

**Summary**: List all merchant businesses offering daily meals

**Description**: Retrieves a list of all businesses classified as merchants that offer daily meals.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listMerchantBusinessesWithDailyMeals )

<!-- DOCGEN:END listMerchantBusinessesWithDailyMeals -->

<!-- DOCGEN:START listMerchantBusinessesMainInfo -->
### listMerchantBusinessesMainInfo

**Summary**: List all merchant businesses offering daily meals

**Description**: Retrieves a list of all businesses classified as merchants that offer daily meals.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listMerchantBusinessesWithDailyMeals )

<!-- DOCGEN:END listMerchantBusinessesMainInfo -->

<!-- DOCGEN:START listTransferBusinessesMainInfo -->
### listTransferBusinessesMainInfo

**Summary**: List all transfer businesses (main info only)

**Description**: Retrieves a list of all transfer businesses

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listTransferBusinessesMainInfo )

<!-- DOCGEN:END listTransferBusinessesMainInfo -->

<!-- DOCGEN:START listTransferBusinesses -->
### listTransferBusinesses

**Summary**: List all taxi businesses

**Description**: Retrieves a list of all businesses classified as taxis (TRANSFER).

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listTaxiBusinesses )

<!-- DOCGEN:END listTransferBusinesses -->

<!-- DOCGEN:START getBusinessById -->
### getBusinessById

**Summary**: Get a business by ID

**Description**: Retrieves detailed information about a specific business by its ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessById )

<!-- DOCGEN:END getBusinessById -->

<!-- DOCGEN:START getBusinessAdminDataById -->
### getBusinessAdminDataById

**Summary**: Get a business by ID including admin data

**Description**: Retrieves detailed information about a specific business by its ID, including data an admin can see.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessAdminDataById )

<!-- DOCGEN:END getBusinessAdminDataById -->

<!-- DOCGEN:START getBusinessForSearchById -->
### getBusinessForSearchById

**Summary**: Get a business for search by ID

**Description**: Retrieves detailed information about a specific business by its ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessForSearchById )

<!-- DOCGEN:END getBusinessForSearchById -->

<!-- DOCGEN:START getParentBusiness -->
### getParentBusiness

**Summary**: Get parent business

**Description**: Retrieves the parent business of a specific business by its ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getParentBusiness )

<!-- DOCGEN:END getParentBusiness -->

<!-- DOCGEN:START getChildBusinesses -->
### getChildBusinesses

**Summary**: List child businesses

**Description**: Retrieves a list of child businesses for a specific parent business ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | parent_business_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getChildBusinesses )

<!-- DOCGEN:END getChildBusinesses -->

<!-- DOCGEN:START createNewBusiness -->
### createNewBusiness

**Summary**: Create a new business

**Description**: Creates a new business with the provided details.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewBusiness )

<!-- DOCGEN:END createNewBusiness -->

<!-- DOCGEN:START update -->
### update

**Summary**: Updates the business details

**Description**: This endpoint is used to update the business details.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | businessId |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusiness )

<!-- DOCGEN:END update -->

<!-- DOCGEN:START updateBusinessType -->
### updateBusinessType

**Summary**: Updates a business's type

**Description**: This endpoint is used to update a business's type.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessType )

<!-- DOCGEN:END updateBusinessType -->

<!-- DOCGEN:START updateIsBusinessUnit -->
### updateIsBusinessUnit

**Summary**: Updates the business unit status

**Description**: This endpoint is used to update whether a business is considered a business unit.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateIsBusinessUnit )

<!-- DOCGEN:END updateIsBusinessUnit -->

<!-- DOCGEN:START updateBusinessGroupName -->
### updateBusinessGroupName

**Summary**: Updates a business's group name

**Description**: This endpoint is used to update a business's group name.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessGroupName )

<!-- DOCGEN:END updateBusinessGroupName -->

<!-- DOCGEN:START updateBusinessEmail -->
### updateBusinessEmail

**Summary**: Updates a business's email

**Description**: This endpoint is used to update a business's email address.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessEmail )

<!-- DOCGEN:END updateBusinessEmail -->

<!-- DOCGEN:START updateBusinessTelephone -->
### updateBusinessTelephone

**Summary**: Updates a business's telephone

**Description**: This endpoint is used to update a business's telephone number.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessTelephone )

<!-- DOCGEN:END updateBusinessTelephone -->

<!-- DOCGEN:START updateBusinessWorkingHours -->
### updateBusinessWorkingHours

**Summary**: Updates a business's working hours

**Description**: This endpoint is used to update a business's working hours.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessWorkingHours )

<!-- DOCGEN:END updateBusinessWorkingHours -->

<!-- DOCGEN:START updateRestaurantOverwhelmed -->
### updateRestaurantOverwhelmed

**Summary**: Updates the overwhelmed status of a restaurant

**Description**: This endpoint is used to update whether a restaurant is considered overwhelmed.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (optional)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateRestaurantOverwhelmed )

<!-- DOCGEN:END updateRestaurantOverwhelmed -->

<!-- DOCGEN:START updateBusinessIsNew -->
### updateBusinessIsNew

**Summary**: Updates the new status of a business

**Description**: This endpoint is used to update whether a business is considered new.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessIsNew )

<!-- DOCGEN:END updateBusinessIsNew -->

<!-- DOCGEN:START updateBusinessIsPopular -->
### updateBusinessIsPopular

**Summary**: Updates the popularity status of a business

**Description**: This endpoint is used to update whether a business is considered popular.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessIsPopular )

<!-- DOCGEN:END updateBusinessIsPopular -->

<!-- DOCGEN:START getBusinessesByGroupName -->
### getBusinessesByGroupName

**Summary**: Search for businesses by business group name

**Description**: Retrieves businesses whose business group names contain the given search term, case-insensitively.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessesByGroupName )

<!-- DOCGEN:END getBusinessesByGroupName -->

<!-- DOCGEN:START getBusinessesByNameSearch -->
### getBusinessesByNameSearch

**Summary**: Search for businesses by name

**Description**: Retrieves businesses whose names contain the given search term, case-insensitively.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessesByNameSearch )

<!-- DOCGEN:END getBusinessesByNameSearch -->

<!-- DOCGEN:START addBusinessAddress -->
### addBusinessAddress

**Summary**: Add an address to a business

**Description**: Adds an address to a specific business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addBusinessAddress )

<!-- DOCGEN:END addBusinessAddress -->

<!-- DOCGEN:START addDeliveryAddress -->
### addDeliveryAddress

**Summary**: Add a delivery address to a business

**Description**: Adds a delivery address to a specific business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addDeliveryAddress )

<!-- DOCGEN:END addDeliveryAddress -->

<!-- DOCGEN:START updateParentBusinessId -->
### updateParentBusinessId

**Summary**: Update parent business

**Description**: Updates the parent business of a specific business by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateParentBusiness )

<!-- DOCGEN:END updateParentBusinessId -->

<!-- DOCGEN:START updateBusinessAddress -->
### updateBusinessAddress

**Summary**: Updates a business's address

**Description**: This endpoint is used to update a business's primary address.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessAddress )

<!-- DOCGEN:END updateBusinessAddress -->

<!-- DOCGEN:START updateBusinessDeliveryAddress -->
### updateBusinessDeliveryAddress

**Summary**: Updates a business's delivery address

**Description**: This endpoint is used to update a business's delivery address.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessDeliveryAddress )

<!-- DOCGEN:END updateBusinessDeliveryAddress -->

<!-- DOCGEN:START deleteBusiness -->
### deleteBusiness

**Summary**: Delete a business

**Description**: Deletes a business by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deleteBusiness )

<!-- DOCGEN:END deleteBusiness -->

<!-- DOCGEN:START removeParentBusinessId -->
### removeParentBusinessId

**Summary**: Remove a child business from its parent

**Description**: Clears the parent business association for a given child business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/removeChildBusiness )

<!-- DOCGEN:END removeParentBusinessId -->

<!-- DOCGEN:START reviewBusiness -->
### reviewBusiness

**Summary**: Review a business

**Description**: This endpoint is used add a review of business.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/reviewBusiness )

<!-- DOCGEN:END reviewBusiness -->

<!-- DOCGEN:START confirmBusinessReview -->
### confirmBusinessReview

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END confirmBusinessReview -->

<!-- DOCGEN:START createPaymentIntent -->
### createPaymentIntent

**Summary**: Create a payment intent

**Description**: This endpoint is used to create a payment intent.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createPaymentIntent )

<!-- DOCGEN:END createPaymentIntent -->

<!-- DOCGEN:START manualSortScheduledUsers -->
### manualSortScheduledUsers

**Summary**: Manually sort scheduled users

**Description**: This endpoint is used to manually sort scheduled users.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/manualSortScheduledUsers )

<!-- DOCGEN:END manualSortScheduledUsers -->

<!-- DOCGEN:START addScheduledUserSortingType -->
### addScheduledUserSortingType

**Summary**: Add sorting type for scheduled users

**Description**: This endpoint is used to add the sorting type for scheduled users.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addScheduledUserSortingType )

<!-- DOCGEN:END addScheduledUserSortingType -->

<!-- DOCGEN:START getBusinessEarnings -->
### getBusinessEarnings

**Summary**: Get earnings for a specific business

**Description**: Retrieves earnings data for a specific business based on the provided business ID and date range.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Responses:**
- 200
- 400
- 404

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`
- ⚠️ Could not parse: `404.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessEarnings )

<!-- DOCGEN:END getBusinessEarnings -->

<!-- DOCGEN:START getAllBusinessesEarnings -->
### getAllBusinessesEarnings

**Summary**: Get earnings for all businesses

**Description**: Retrieves earnings data for all businesses of type MERCHANT based on the provided date range.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAllBusinessesEarnings )

<!-- DOCGEN:END getAllBusinessesEarnings -->

<!-- DOCGEN:START getTotalEarnings -->
### getTotalEarnings

**Summary**: Get total earnings for completed delivery orders

**Description**: Retrieves the total earnings from all completed delivery orders.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getTotalEarnings )

<!-- DOCGEN:END getTotalEarnings -->

<!-- DOCGEN:START getBusinessTotalEarnings -->
### getBusinessTotalEarnings

**Summary**: Get total earnings for a specific business

**Description**: Retrieves the total earnings of a specific business based on completed orders.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessTotalEarnings )

<!-- DOCGEN:END getBusinessTotalEarnings -->

<!-- DOCGEN:START getBusinessReviewsById -->
### getBusinessReviewsById

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getBusinessReviewsById -->

<!-- DOCGEN:START editBusiness -->
### editBusiness

**Summary**: Edit business details

**Description**: This endpoint is used to update multiple details of a business, including address, delivery address, finances, and other specific data.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/editBusiness )

<!-- DOCGEN:END editBusiness -->

<!-- DOCGEN:START getBusinessStripeStatusByBusinessId -->
### getBusinessStripeStatusByBusinessId

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getBusinessStripeStatusByBusinessId -->

<!-- DOCGEN:START generateBusinessStripeByBusinessId -->
### generateBusinessStripeByBusinessId

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END generateBusinessStripeByBusinessId -->

<!-- DOCGEN:START onboardingEnd -->
### onboardingEnd

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END onboardingEnd -->

<!-- DOCGEN:START getBusynessFactorsBusinessIdList -->
### getBusynessFactorsBusinessIdList

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getBusynessFactorsBusinessIdList -->

<!-- DOCGEN:START addBusinessToFavorites -->
### addBusinessToFavorites

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END addBusinessToFavorites -->

<!-- DOCGEN:START removeBusinessFromFavorites -->
### removeBusinessFromFavorites

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END removeBusinessFromFavorites -->

<!-- DOCGEN:START getFavoriteBusinesses -->
### getFavoriteBusinesses

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getFavoriteBusinesses -->

<!-- DOCGEN:START getScheduledUsersByBusinessId -->
### getScheduledUsersByBusinessId

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getScheduledUsersByBusinessId -->

<!-- DOCGEN:START createScoringPointsHandler -->
### createScoringPointsHandler

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END createScoringPointsHandler -->

<!-- DOCGEN:START getPurchaseOrderLimit -->
### getPurchaseOrderLimit

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getPurchaseOrderLimit -->

<!-- DOCGEN:START activateBusiness -->
### activateBusiness

**Summary**: Activate a business

**Description**: Activates a business.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/activateBusiness )

<!-- DOCGEN:END activateBusiness -->

<!-- DOCGEN:START deactivateBusiness -->
### deactivateBusiness

**Summary**: Deactivate a business

**Description**: Deactivates a business.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deactivateBusiness )

<!-- DOCGEN:END deactivateBusiness -->

<!-- DOCGEN:START listBusinesses -->
### listBusinesses

**Summary**: Get a list of businesses

**Description**: Returns a list of businesses.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinesses )

<!-- DOCGEN:END listBusinesses -->

<!-- DOCGEN:START getBusinessesByIds -->
### getBusinessesByIds

**Summary**: Get a list of businesses business_ids

**Description**: Returns a list of businesses.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessesByIds )

<!-- DOCGEN:END getBusinessesByIds -->

<!-- DOCGEN:START searchBusinesses -->
### searchBusinesses

**Summary**: Get a list of businesses by query, location and categories

**Description**: Returns a list of businesses.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessesSearch )

<!-- DOCGEN:END searchBusinesses -->

<!-- DOCGEN:START listMerchantBusinesses -->
### listMerchantBusinesses

**Summary**: List all merchant businesses

**Description**: Retrieves a list of all businesses classified as merchants.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listMerchantBusinesses )

<!-- DOCGEN:END listMerchantBusinesses -->

<!-- DOCGEN:START listPromoSectionsWithMerchants -->
### listPromoSectionsWithMerchants

**Summary**: List all merchant businesses grouped by promoSections

**Description**: Retrieves a list of all businesses classified as merchants.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listMerchantBusinesses )

<!-- DOCGEN:END listPromoSectionsWithMerchants -->

<!-- DOCGEN:START listMerchantBusinessesWithDailyMeals -->
### listMerchantBusinessesWithDailyMeals

**Summary**: List all merchant businesses offering daily meals

**Description**: Retrieves a list of all businesses classified as merchants that offer daily meals.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listMerchantBusinessesWithDailyMeals )

<!-- DOCGEN:END listMerchantBusinessesWithDailyMeals -->

<!-- DOCGEN:START listMerchantBusinessesMainInfo -->
### listMerchantBusinessesMainInfo

**Summary**: List all merchant businesses offering daily meals

**Description**: Retrieves a list of all businesses classified as merchants that offer daily meals.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listMerchantBusinessesWithDailyMeals )

<!-- DOCGEN:END listMerchantBusinessesMainInfo -->

<!-- DOCGEN:START listTransferBusinessesMainInfo -->
### listTransferBusinessesMainInfo

**Summary**: List all transfer businesses (main info only)

**Description**: Retrieves a list of all transfer businesses

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listTransferBusinessesMainInfo )

<!-- DOCGEN:END listTransferBusinessesMainInfo -->

<!-- DOCGEN:START listTransferBusinesses -->
### listTransferBusinesses

**Summary**: List all taxi businesses

**Description**: Retrieves a list of all businesses classified as taxis (TRANSFER).

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listTaxiBusinesses )

<!-- DOCGEN:END listTransferBusinesses -->

<!-- DOCGEN:START getBusinessById -->
### getBusinessById

**Summary**: Get a business by ID

**Description**: Retrieves detailed information about a specific business by its ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessById )

<!-- DOCGEN:END getBusinessById -->

<!-- DOCGEN:START getBusinessAdminDataById -->
### getBusinessAdminDataById

**Summary**: Get a business by ID including admin data

**Description**: Retrieves detailed information about a specific business by its ID, including data an admin can see.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessAdminDataById )

<!-- DOCGEN:END getBusinessAdminDataById -->

<!-- DOCGEN:START getBusinessForSearchById -->
### getBusinessForSearchById

**Summary**: Get a business for search by ID

**Description**: Retrieves detailed information about a specific business by its ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessForSearchById )

<!-- DOCGEN:END getBusinessForSearchById -->

<!-- DOCGEN:START getParentBusiness -->
### getParentBusiness

**Summary**: Get parent business

**Description**: Retrieves the parent business of a specific business by its ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getParentBusiness )

<!-- DOCGEN:END getParentBusiness -->

<!-- DOCGEN:START getChildBusinesses -->
### getChildBusinesses

**Summary**: List child businesses

**Description**: Retrieves a list of child businesses for a specific parent business ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | parent_business_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getChildBusinesses )

<!-- DOCGEN:END getChildBusinesses -->

<!-- DOCGEN:START createNewBusiness -->
### createNewBusiness

**Summary**: Create a new business

**Description**: Creates a new business with the provided details.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewBusiness )

<!-- DOCGEN:END createNewBusiness -->

<!-- DOCGEN:START update -->
### update

**Summary**: Updates the business details

**Description**: This endpoint is used to update the business details.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | businessId |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusiness )

<!-- DOCGEN:END update -->

<!-- DOCGEN:START updateBusinessType -->
### updateBusinessType

**Summary**: Updates a business's type

**Description**: This endpoint is used to update a business's type.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessType )

<!-- DOCGEN:END updateBusinessType -->

<!-- DOCGEN:START updateIsBusinessUnit -->
### updateIsBusinessUnit

**Summary**: Updates the business unit status

**Description**: This endpoint is used to update whether a business is considered a business unit.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateIsBusinessUnit )

<!-- DOCGEN:END updateIsBusinessUnit -->

<!-- DOCGEN:START updateBusinessGroupName -->
### updateBusinessGroupName

**Summary**: Updates a business's group name

**Description**: This endpoint is used to update a business's group name.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessGroupName )

<!-- DOCGEN:END updateBusinessGroupName -->

<!-- DOCGEN:START updateBusinessEmail -->
### updateBusinessEmail

**Summary**: Updates a business's email

**Description**: This endpoint is used to update a business's email address.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessEmail )

<!-- DOCGEN:END updateBusinessEmail -->

<!-- DOCGEN:START updateBusinessTelephone -->
### updateBusinessTelephone

**Summary**: Updates a business's telephone

**Description**: This endpoint is used to update a business's telephone number.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessTelephone )

<!-- DOCGEN:END updateBusinessTelephone -->

<!-- DOCGEN:START updateBusinessWorkingHours -->
### updateBusinessWorkingHours

**Summary**: Updates a business's working hours

**Description**: This endpoint is used to update a business's working hours.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessWorkingHours )

<!-- DOCGEN:END updateBusinessWorkingHours -->

<!-- DOCGEN:START updateRestaurantOverwhelmed -->
### updateRestaurantOverwhelmed

**Summary**: Updates the overwhelmed status of a restaurant

**Description**: This endpoint is used to update whether a restaurant is considered overwhelmed.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (optional)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateRestaurantOverwhelmed )

<!-- DOCGEN:END updateRestaurantOverwhelmed -->

<!-- DOCGEN:START updateBusinessIsNew -->
### updateBusinessIsNew

**Summary**: Updates the new status of a business

**Description**: This endpoint is used to update whether a business is considered new.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessIsNew )

<!-- DOCGEN:END updateBusinessIsNew -->

<!-- DOCGEN:START updateBusinessIsPopular -->
### updateBusinessIsPopular

**Summary**: Updates the popularity status of a business

**Description**: This endpoint is used to update whether a business is considered popular.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessIsPopular )

<!-- DOCGEN:END updateBusinessIsPopular -->

<!-- DOCGEN:START getBusinessesByGroupName -->
### getBusinessesByGroupName

**Summary**: Search for businesses by business group name

**Description**: Retrieves businesses whose business group names contain the given search term, case-insensitively.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessesByGroupName )

<!-- DOCGEN:END getBusinessesByGroupName -->

<!-- DOCGEN:START getBusinessesByNameSearch -->
### getBusinessesByNameSearch

**Summary**: Search for businesses by name

**Description**: Retrieves businesses whose names contain the given search term, case-insensitively.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessesByNameSearch )

<!-- DOCGEN:END getBusinessesByNameSearch -->

<!-- DOCGEN:START addBusinessAddress -->
### addBusinessAddress

**Summary**: Add an address to a business

**Description**: Adds an address to a specific business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addBusinessAddress )

<!-- DOCGEN:END addBusinessAddress -->

<!-- DOCGEN:START addDeliveryAddress -->
### addDeliveryAddress

**Summary**: Add a delivery address to a business

**Description**: Adds a delivery address to a specific business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addDeliveryAddress )

<!-- DOCGEN:END addDeliveryAddress -->

<!-- DOCGEN:START updateParentBusinessId -->
### updateParentBusinessId

**Summary**: Update parent business

**Description**: Updates the parent business of a specific business by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateParentBusiness )

<!-- DOCGEN:END updateParentBusinessId -->

<!-- DOCGEN:START updateBusinessAddress -->
### updateBusinessAddress

**Summary**: Updates a business's address

**Description**: This endpoint is used to update a business's primary address.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessAddress )

<!-- DOCGEN:END updateBusinessAddress -->

<!-- DOCGEN:START updateBusinessDeliveryAddress -->
### updateBusinessDeliveryAddress

**Summary**: Updates a business's delivery address

**Description**: This endpoint is used to update a business's delivery address.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessDeliveryAddress )

<!-- DOCGEN:END updateBusinessDeliveryAddress -->

<!-- DOCGEN:START deleteBusiness -->
### deleteBusiness

**Summary**: Delete a business

**Description**: Deletes a business by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deleteBusiness )

<!-- DOCGEN:END deleteBusiness -->

<!-- DOCGEN:START removeParentBusinessId -->
### removeParentBusinessId

**Summary**: Remove a child business from its parent

**Description**: Clears the parent business association for a given child business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/removeChildBusiness )

<!-- DOCGEN:END removeParentBusinessId -->

<!-- DOCGEN:START reviewBusiness -->
### reviewBusiness

**Summary**: Review a business

**Description**: This endpoint is used add a review of business.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/reviewBusiness )

<!-- DOCGEN:END reviewBusiness -->

<!-- DOCGEN:START confirmBusinessReview -->
### confirmBusinessReview

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END confirmBusinessReview -->

<!-- DOCGEN:START createPaymentIntent -->
### createPaymentIntent

**Summary**: Create a payment intent

**Description**: This endpoint is used to create a payment intent.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createPaymentIntent )

<!-- DOCGEN:END createPaymentIntent -->

<!-- DOCGEN:START manualSortScheduledUsers -->
### manualSortScheduledUsers

**Summary**: Manually sort scheduled users

**Description**: This endpoint is used to manually sort scheduled users.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/manualSortScheduledUsers )

<!-- DOCGEN:END manualSortScheduledUsers -->

<!-- DOCGEN:START addScheduledUserSortingType -->
### addScheduledUserSortingType

**Summary**: Add sorting type for scheduled users

**Description**: This endpoint is used to add the sorting type for scheduled users.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addScheduledUserSortingType )

<!-- DOCGEN:END addScheduledUserSortingType -->

<!-- DOCGEN:START getBusinessEarnings -->
### getBusinessEarnings

**Summary**: Get earnings for a specific business

**Description**: Retrieves earnings data for a specific business based on the provided business ID and date range.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Responses:**
- 200
- 400
- 404

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`
- ⚠️ Could not parse: `404.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessEarnings )

<!-- DOCGEN:END getBusinessEarnings -->

<!-- DOCGEN:START getAllBusinessesEarnings -->
### getAllBusinessesEarnings

**Summary**: Get earnings for all businesses

**Description**: Retrieves earnings data for all businesses of type MERCHANT based on the provided date range.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAllBusinessesEarnings )

<!-- DOCGEN:END getAllBusinessesEarnings -->

<!-- DOCGEN:START getTotalEarnings -->
### getTotalEarnings

**Summary**: Get total earnings for completed delivery orders

**Description**: Retrieves the total earnings from all completed delivery orders.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getTotalEarnings )

<!-- DOCGEN:END getTotalEarnings -->

<!-- DOCGEN:START getBusinessTotalEarnings -->
### getBusinessTotalEarnings

**Summary**: Get total earnings for a specific business

**Description**: Retrieves the total earnings of a specific business based on completed orders.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessTotalEarnings )

<!-- DOCGEN:END getBusinessTotalEarnings -->

<!-- DOCGEN:START getBusinessReviewsById -->
### getBusinessReviewsById

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getBusinessReviewsById -->

<!-- DOCGEN:START editBusiness -->
### editBusiness

**Summary**: Edit business details

**Description**: This endpoint is used to update multiple details of a business, including address, delivery address, finances, and other specific data.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/editBusiness )

<!-- DOCGEN:END editBusiness -->

<!-- DOCGEN:START getBusinessStripeStatusByBusinessId -->
### getBusinessStripeStatusByBusinessId

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getBusinessStripeStatusByBusinessId -->

<!-- DOCGEN:START generateBusinessStripeByBusinessId -->
### generateBusinessStripeByBusinessId

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END generateBusinessStripeByBusinessId -->

<!-- DOCGEN:START onboardingEnd -->
### onboardingEnd

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END onboardingEnd -->

<!-- DOCGEN:START getBusynessFactorsBusinessIdList -->
### getBusynessFactorsBusinessIdList

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getBusynessFactorsBusinessIdList -->

<!-- DOCGEN:START addBusinessToFavorites -->
### addBusinessToFavorites

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END addBusinessToFavorites -->

<!-- DOCGEN:START removeBusinessFromFavorites -->
### removeBusinessFromFavorites

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END removeBusinessFromFavorites -->

<!-- DOCGEN:START getFavoriteBusinesses -->
### getFavoriteBusinesses

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getFavoriteBusinesses -->

<!-- DOCGEN:START getScheduledUsersByBusinessId -->
### getScheduledUsersByBusinessId

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getScheduledUsersByBusinessId -->

<!-- DOCGEN:START createScoringPointsHandler -->
### createScoringPointsHandler

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END createScoringPointsHandler -->

<!-- DOCGEN:START getPurchaseOrderLimit -->
### getPurchaseOrderLimit

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getPurchaseOrderLimit -->

<!-- DOCGEN:START activateBusiness -->
### activateBusiness

**Summary**: Activate a business

**Description**: Activates a business.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/activateBusiness )

<!-- DOCGEN:END activateBusiness -->

<!-- DOCGEN:START deactivateBusiness -->
### deactivateBusiness

**Summary**: Deactivate a business

**Description**: Deactivates a business.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deactivateBusiness )

<!-- DOCGEN:END deactivateBusiness -->

<!-- DOCGEN:START listBusinesses -->
### listBusinesses

**Summary**: Get a list of businesses

**Description**: Returns a list of businesses.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinesses )

<!-- DOCGEN:END listBusinesses -->

<!-- DOCGEN:START getBusinessesByIds -->
### getBusinessesByIds

**Summary**: Get a list of businesses business_ids

**Description**: Returns a list of businesses.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessesByIds )

<!-- DOCGEN:END getBusinessesByIds -->

<!-- DOCGEN:START searchBusinesses -->
### searchBusinesses

**Summary**: Get a list of businesses by query, location and categories

**Description**: Returns a list of businesses.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessesSearch )

<!-- DOCGEN:END searchBusinesses -->

<!-- DOCGEN:START listMerchantBusinesses -->
### listMerchantBusinesses

**Summary**: List all merchant businesses

**Description**: Retrieves a list of all businesses classified as merchants.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listMerchantBusinesses )

<!-- DOCGEN:END listMerchantBusinesses -->

<!-- DOCGEN:START listPromoSectionsWithMerchants -->
### listPromoSectionsWithMerchants

**Summary**: List all merchant businesses grouped by promoSections

**Description**: Retrieves a list of all businesses classified as merchants.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listMerchantBusinesses )

<!-- DOCGEN:END listPromoSectionsWithMerchants -->

<!-- DOCGEN:START listMerchantBusinessesWithDailyMeals -->
### listMerchantBusinessesWithDailyMeals

**Summary**: List all merchant businesses offering daily meals

**Description**: Retrieves a list of all businesses classified as merchants that offer daily meals.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listMerchantBusinessesWithDailyMeals )

<!-- DOCGEN:END listMerchantBusinessesWithDailyMeals -->

<!-- DOCGEN:START listMerchantBusinessesMainInfo -->
### listMerchantBusinessesMainInfo

**Summary**: List all merchant businesses offering daily meals

**Description**: Retrieves a list of all businesses classified as merchants that offer daily meals.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listMerchantBusinessesWithDailyMeals )

<!-- DOCGEN:END listMerchantBusinessesMainInfo -->

<!-- DOCGEN:START listTransferBusinessesMainInfo -->
### listTransferBusinessesMainInfo

**Summary**: List all transfer businesses (main info only)

**Description**: Retrieves a list of all transfer businesses

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listTransferBusinessesMainInfo )

<!-- DOCGEN:END listTransferBusinessesMainInfo -->

<!-- DOCGEN:START listTransferBusinesses -->
### listTransferBusinesses

**Summary**: List all taxi businesses

**Description**: Retrieves a list of all businesses classified as taxis (TRANSFER).

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listTaxiBusinesses )

<!-- DOCGEN:END listTransferBusinesses -->

<!-- DOCGEN:START getBusinessById -->
### getBusinessById

**Summary**: Get a business by ID

**Description**: Retrieves detailed information about a specific business by its ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessById )

<!-- DOCGEN:END getBusinessById -->

<!-- DOCGEN:START getBusinessAdminDataById -->
### getBusinessAdminDataById

**Summary**: Get a business by ID including admin data

**Description**: Retrieves detailed information about a specific business by its ID, including data an admin can see.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessAdminDataById )

<!-- DOCGEN:END getBusinessAdminDataById -->

<!-- DOCGEN:START getBusinessForSearchById -->
### getBusinessForSearchById

**Summary**: Get a business for search by ID

**Description**: Retrieves detailed information about a specific business by its ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessForSearchById )

<!-- DOCGEN:END getBusinessForSearchById -->

<!-- DOCGEN:START getParentBusiness -->
### getParentBusiness

**Summary**: Get parent business

**Description**: Retrieves the parent business of a specific business by its ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getParentBusiness )

<!-- DOCGEN:END getParentBusiness -->

<!-- DOCGEN:START getChildBusinesses -->
### getChildBusinesses

**Summary**: List child businesses

**Description**: Retrieves a list of child businesses for a specific parent business ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | parent_business_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getChildBusinesses )

<!-- DOCGEN:END getChildBusinesses -->

<!-- DOCGEN:START createNewBusiness -->
### createNewBusiness

**Summary**: Create a new business

**Description**: Creates a new business with the provided details.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewBusiness )

<!-- DOCGEN:END createNewBusiness -->

<!-- DOCGEN:START update -->
### update

**Summary**: Updates the business details

**Description**: This endpoint is used to update the business details.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | businessId |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusiness )

<!-- DOCGEN:END update -->

<!-- DOCGEN:START updateBusinessType -->
### updateBusinessType

**Summary**: Updates a business's type

**Description**: This endpoint is used to update a business's type.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessType )

<!-- DOCGEN:END updateBusinessType -->

<!-- DOCGEN:START updateIsBusinessUnit -->
### updateIsBusinessUnit

**Summary**: Updates the business unit status

**Description**: This endpoint is used to update whether a business is considered a business unit.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateIsBusinessUnit )

<!-- DOCGEN:END updateIsBusinessUnit -->

<!-- DOCGEN:START updateBusinessGroupName -->
### updateBusinessGroupName

**Summary**: Updates a business's group name

**Description**: This endpoint is used to update a business's group name.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessGroupName )

<!-- DOCGEN:END updateBusinessGroupName -->

<!-- DOCGEN:START updateBusinessEmail -->
### updateBusinessEmail

**Summary**: Updates a business's email

**Description**: This endpoint is used to update a business's email address.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessEmail )

<!-- DOCGEN:END updateBusinessEmail -->

<!-- DOCGEN:START updateBusinessTelephone -->
### updateBusinessTelephone

**Summary**: Updates a business's telephone

**Description**: This endpoint is used to update a business's telephone number.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessTelephone )

<!-- DOCGEN:END updateBusinessTelephone -->

<!-- DOCGEN:START updateBusinessWorkingHours -->
### updateBusinessWorkingHours

**Summary**: Updates a business's working hours

**Description**: This endpoint is used to update a business's working hours.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessWorkingHours )

<!-- DOCGEN:END updateBusinessWorkingHours -->

<!-- DOCGEN:START updateRestaurantOverwhelmed -->
### updateRestaurantOverwhelmed

**Summary**: Updates the overwhelmed status of a restaurant

**Description**: This endpoint is used to update whether a restaurant is considered overwhelmed.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (optional)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateRestaurantOverwhelmed )

<!-- DOCGEN:END updateRestaurantOverwhelmed -->

<!-- DOCGEN:START updateBusinessIsNew -->
### updateBusinessIsNew

**Summary**: Updates the new status of a business

**Description**: This endpoint is used to update whether a business is considered new.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessIsNew )

<!-- DOCGEN:END updateBusinessIsNew -->

<!-- DOCGEN:START updateBusinessIsPopular -->
### updateBusinessIsPopular

**Summary**: Updates the popularity status of a business

**Description**: This endpoint is used to update whether a business is considered popular.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessIsPopular )

<!-- DOCGEN:END updateBusinessIsPopular -->

<!-- DOCGEN:START getBusinessesByGroupName -->
### getBusinessesByGroupName

**Summary**: Search for businesses by business group name

**Description**: Retrieves businesses whose business group names contain the given search term, case-insensitively.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessesByGroupName )

<!-- DOCGEN:END getBusinessesByGroupName -->

<!-- DOCGEN:START getBusinessesByNameSearch -->
### getBusinessesByNameSearch

**Summary**: Search for businesses by name

**Description**: Retrieves businesses whose names contain the given search term, case-insensitively.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessesByNameSearch )

<!-- DOCGEN:END getBusinessesByNameSearch -->

<!-- DOCGEN:START addBusinessAddress -->
### addBusinessAddress

**Summary**: Add an address to a business

**Description**: Adds an address to a specific business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addBusinessAddress )

<!-- DOCGEN:END addBusinessAddress -->

<!-- DOCGEN:START addDeliveryAddress -->
### addDeliveryAddress

**Summary**: Add a delivery address to a business

**Description**: Adds a delivery address to a specific business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addDeliveryAddress )

<!-- DOCGEN:END addDeliveryAddress -->

<!-- DOCGEN:START updateParentBusinessId -->
### updateParentBusinessId

**Summary**: Update parent business

**Description**: Updates the parent business of a specific business by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateParentBusiness )

<!-- DOCGEN:END updateParentBusinessId -->

<!-- DOCGEN:START updateBusinessAddress -->
### updateBusinessAddress

**Summary**: Updates a business's address

**Description**: This endpoint is used to update a business's primary address.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessAddress )

<!-- DOCGEN:END updateBusinessAddress -->

<!-- DOCGEN:START updateBusinessDeliveryAddress -->
### updateBusinessDeliveryAddress

**Summary**: Updates a business's delivery address

**Description**: This endpoint is used to update a business's delivery address.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessDeliveryAddress )

<!-- DOCGEN:END updateBusinessDeliveryAddress -->

<!-- DOCGEN:START deleteBusiness -->
### deleteBusiness

**Summary**: Delete a business

**Description**: Deletes a business by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deleteBusiness )

<!-- DOCGEN:END deleteBusiness -->

<!-- DOCGEN:START removeParentBusinessId -->
### removeParentBusinessId

**Summary**: Remove a child business from its parent

**Description**: Clears the parent business association for a given child business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/removeChildBusiness )

<!-- DOCGEN:END removeParentBusinessId -->

<!-- DOCGEN:START reviewBusiness -->
### reviewBusiness

**Summary**: Review a business

**Description**: This endpoint is used add a review of business.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/reviewBusiness )

<!-- DOCGEN:END reviewBusiness -->

<!-- DOCGEN:START confirmBusinessReview -->
### confirmBusinessReview

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END confirmBusinessReview -->

<!-- DOCGEN:START createPaymentIntent -->
### createPaymentIntent

**Summary**: Create a payment intent

**Description**: This endpoint is used to create a payment intent.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createPaymentIntent )

<!-- DOCGEN:END createPaymentIntent -->

<!-- DOCGEN:START manualSortScheduledUsers -->
### manualSortScheduledUsers

**Summary**: Manually sort scheduled users

**Description**: This endpoint is used to manually sort scheduled users.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/manualSortScheduledUsers )

<!-- DOCGEN:END manualSortScheduledUsers -->

<!-- DOCGEN:START addScheduledUserSortingType -->
### addScheduledUserSortingType

**Summary**: Add sorting type for scheduled users

**Description**: This endpoint is used to add the sorting type for scheduled users.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addScheduledUserSortingType )

<!-- DOCGEN:END addScheduledUserSortingType -->

<!-- DOCGEN:START getBusinessEarnings -->
### getBusinessEarnings

**Summary**: Get earnings for a specific business

**Description**: Retrieves earnings data for a specific business based on the provided business ID and date range.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Responses:**
- 200
- 400
- 404

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`
- ⚠️ Could not parse: `404.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessEarnings )

<!-- DOCGEN:END getBusinessEarnings -->

<!-- DOCGEN:START getAllBusinessesEarnings -->
### getAllBusinessesEarnings

**Summary**: Get earnings for all businesses

**Description**: Retrieves earnings data for all businesses of type MERCHANT based on the provided date range.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAllBusinessesEarnings )

<!-- DOCGEN:END getAllBusinessesEarnings -->

<!-- DOCGEN:START getTotalEarnings -->
### getTotalEarnings

**Summary**: Get total earnings for completed delivery orders

**Description**: Retrieves the total earnings from all completed delivery orders.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getTotalEarnings )

<!-- DOCGEN:END getTotalEarnings -->

<!-- DOCGEN:START getBusinessTotalEarnings -->
### getBusinessTotalEarnings

**Summary**: Get total earnings for a specific business

**Description**: Retrieves the total earnings of a specific business based on completed orders.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessTotalEarnings )

<!-- DOCGEN:END getBusinessTotalEarnings -->

<!-- DOCGEN:START getBusinessReviewsById -->
### getBusinessReviewsById

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getBusinessReviewsById -->

<!-- DOCGEN:START editBusiness -->
### editBusiness

**Summary**: Edit business details

**Description**: This endpoint is used to update multiple details of a business, including address, delivery address, finances, and other specific data.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/editBusiness )

<!-- DOCGEN:END editBusiness -->

<!-- DOCGEN:START getBusinessStripeStatusByBusinessId -->
### getBusinessStripeStatusByBusinessId

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getBusinessStripeStatusByBusinessId -->

<!-- DOCGEN:START generateBusinessStripeByBusinessId -->
### generateBusinessStripeByBusinessId

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END generateBusinessStripeByBusinessId -->

<!-- DOCGEN:START onboardingEnd -->
### onboardingEnd

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END onboardingEnd -->

<!-- DOCGEN:START getBusynessFactorsBusinessIdList -->
### getBusynessFactorsBusinessIdList

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getBusynessFactorsBusinessIdList -->

<!-- DOCGEN:START addBusinessToFavorites -->
### addBusinessToFavorites

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END addBusinessToFavorites -->

<!-- DOCGEN:START removeBusinessFromFavorites -->
### removeBusinessFromFavorites

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END removeBusinessFromFavorites -->

<!-- DOCGEN:START getFavoriteBusinesses -->
### getFavoriteBusinesses

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getFavoriteBusinesses -->

<!-- DOCGEN:START getScheduledUsersByBusinessId -->
### getScheduledUsersByBusinessId

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getScheduledUsersByBusinessId -->

<!-- DOCGEN:START createScoringPointsHandler -->
### createScoringPointsHandler

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END createScoringPointsHandler -->

<!-- DOCGEN:START getPurchaseOrderLimit -->
### getPurchaseOrderLimit

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getPurchaseOrderLimit -->

<!-- DOCGEN:START activateBusiness -->
### activateBusiness

**Summary**: Activate a business

**Description**: Activates a business.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/activateBusiness )

<!-- DOCGEN:END activateBusiness -->

<!-- DOCGEN:START deactivateBusiness -->
### deactivateBusiness

**Summary**: Deactivate a business

**Description**: Deactivates a business.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deactivateBusiness )

<!-- DOCGEN:END deactivateBusiness -->

<!-- DOCGEN:START listBusinesses -->
### listBusinesses

**Summary**: Get a list of businesses

**Description**: Returns a list of businesses.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinesses )

<!-- DOCGEN:END listBusinesses -->

<!-- DOCGEN:START getBusinessesByIds -->
### getBusinessesByIds

**Summary**: Get a list of businesses business_ids

**Description**: Returns a list of businesses.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessesByIds )

<!-- DOCGEN:END getBusinessesByIds -->

<!-- DOCGEN:START searchBusinesses -->
### searchBusinesses

**Summary**: Get a list of businesses by query, location and categories

**Description**: Returns a list of businesses.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessesSearch )

<!-- DOCGEN:END searchBusinesses -->

<!-- DOCGEN:START listMerchantBusinesses -->
### listMerchantBusinesses

**Summary**: List all merchant businesses

**Description**: Retrieves a list of all businesses classified as merchants.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listMerchantBusinesses )

<!-- DOCGEN:END listMerchantBusinesses -->

<!-- DOCGEN:START listPromoSectionsWithMerchants -->
### listPromoSectionsWithMerchants

**Summary**: List all merchant businesses grouped by promoSections

**Description**: Retrieves a list of all businesses classified as merchants.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listMerchantBusinesses )

<!-- DOCGEN:END listPromoSectionsWithMerchants -->

<!-- DOCGEN:START listMerchantBusinessesWithDailyMeals -->
### listMerchantBusinessesWithDailyMeals

**Summary**: List all merchant businesses offering daily meals

**Description**: Retrieves a list of all businesses classified as merchants that offer daily meals.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listMerchantBusinessesWithDailyMeals )

<!-- DOCGEN:END listMerchantBusinessesWithDailyMeals -->

<!-- DOCGEN:START listMerchantBusinessesMainInfo -->
### listMerchantBusinessesMainInfo

**Summary**: List all merchant businesses offering daily meals

**Description**: Retrieves a list of all businesses classified as merchants that offer daily meals.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listMerchantBusinessesWithDailyMeals )

<!-- DOCGEN:END listMerchantBusinessesMainInfo -->

<!-- DOCGEN:START listTransferBusinessesMainInfo -->
### listTransferBusinessesMainInfo

**Summary**: List all transfer businesses (main info only)

**Description**: Retrieves a list of all transfer businesses

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listTransferBusinessesMainInfo )

<!-- DOCGEN:END listTransferBusinessesMainInfo -->

<!-- DOCGEN:START listTransferBusinesses -->
### listTransferBusinesses

**Summary**: List all taxi businesses

**Description**: Retrieves a list of all businesses classified as taxis (TRANSFER).

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listTaxiBusinesses )

<!-- DOCGEN:END listTransferBusinesses -->

<!-- DOCGEN:START getBusinessById -->
### getBusinessById

**Summary**: Get a business by ID

**Description**: Retrieves detailed information about a specific business by its ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessById )

<!-- DOCGEN:END getBusinessById -->

<!-- DOCGEN:START getBusinessAdminDataById -->
### getBusinessAdminDataById

**Summary**: Get a business by ID including admin data

**Description**: Retrieves detailed information about a specific business by its ID, including data an admin can see.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessAdminDataById )

<!-- DOCGEN:END getBusinessAdminDataById -->

<!-- DOCGEN:START getBusinessForSearchById -->
### getBusinessForSearchById

**Summary**: Get a business for search by ID

**Description**: Retrieves detailed information about a specific business by its ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessForSearchById )

<!-- DOCGEN:END getBusinessForSearchById -->

<!-- DOCGEN:START getParentBusiness -->
### getParentBusiness

**Summary**: Get parent business

**Description**: Retrieves the parent business of a specific business by its ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getParentBusiness )

<!-- DOCGEN:END getParentBusiness -->

<!-- DOCGEN:START getChildBusinesses -->
### getChildBusinesses

**Summary**: List child businesses

**Description**: Retrieves a list of child businesses for a specific parent business ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | parent_business_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getChildBusinesses )

<!-- DOCGEN:END getChildBusinesses -->

<!-- DOCGEN:START createNewBusiness -->
### createNewBusiness

**Summary**: Create a new business

**Description**: Creates a new business with the provided details.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewBusiness )

<!-- DOCGEN:END createNewBusiness -->

<!-- DOCGEN:START update -->
### update

**Summary**: Updates the business details

**Description**: This endpoint is used to update the business details.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | businessId |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusiness )

<!-- DOCGEN:END update -->

<!-- DOCGEN:START updateBusinessType -->
### updateBusinessType

**Summary**: Updates a business's type

**Description**: This endpoint is used to update a business's type.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessType )

<!-- DOCGEN:END updateBusinessType -->

<!-- DOCGEN:START updateIsBusinessUnit -->
### updateIsBusinessUnit

**Summary**: Updates the business unit status

**Description**: This endpoint is used to update whether a business is considered a business unit.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateIsBusinessUnit )

<!-- DOCGEN:END updateIsBusinessUnit -->

<!-- DOCGEN:START updateBusinessGroupName -->
### updateBusinessGroupName

**Summary**: Updates a business's group name

**Description**: This endpoint is used to update a business's group name.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessGroupName )

<!-- DOCGEN:END updateBusinessGroupName -->

<!-- DOCGEN:START updateBusinessEmail -->
### updateBusinessEmail

**Summary**: Updates a business's email

**Description**: This endpoint is used to update a business's email address.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessEmail )

<!-- DOCGEN:END updateBusinessEmail -->

<!-- DOCGEN:START updateBusinessTelephone -->
### updateBusinessTelephone

**Summary**: Updates a business's telephone

**Description**: This endpoint is used to update a business's telephone number.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessTelephone )

<!-- DOCGEN:END updateBusinessTelephone -->

<!-- DOCGEN:START updateBusinessWorkingHours -->
### updateBusinessWorkingHours

**Summary**: Updates a business's working hours

**Description**: This endpoint is used to update a business's working hours.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessWorkingHours )

<!-- DOCGEN:END updateBusinessWorkingHours -->

<!-- DOCGEN:START updateRestaurantOverwhelmed -->
### updateRestaurantOverwhelmed

**Summary**: Updates the overwhelmed status of a restaurant

**Description**: This endpoint is used to update whether a restaurant is considered overwhelmed.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (optional)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateRestaurantOverwhelmed )

<!-- DOCGEN:END updateRestaurantOverwhelmed -->

<!-- DOCGEN:START updateBusinessIsNew -->
### updateBusinessIsNew

**Summary**: Updates the new status of a business

**Description**: This endpoint is used to update whether a business is considered new.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessIsNew )

<!-- DOCGEN:END updateBusinessIsNew -->

<!-- DOCGEN:START updateBusinessIsPopular -->
### updateBusinessIsPopular

**Summary**: Updates the popularity status of a business

**Description**: This endpoint is used to update whether a business is considered popular.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessIsPopular )

<!-- DOCGEN:END updateBusinessIsPopular -->

<!-- DOCGEN:START getBusinessesByGroupName -->
### getBusinessesByGroupName

**Summary**: Search for businesses by business group name

**Description**: Retrieves businesses whose business group names contain the given search term, case-insensitively.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessesByGroupName )

<!-- DOCGEN:END getBusinessesByGroupName -->

<!-- DOCGEN:START getBusinessesByNameSearch -->
### getBusinessesByNameSearch

**Summary**: Search for businesses by name

**Description**: Retrieves businesses whose names contain the given search term, case-insensitively.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessesByNameSearch )

<!-- DOCGEN:END getBusinessesByNameSearch -->

<!-- DOCGEN:START addBusinessAddress -->
### addBusinessAddress

**Summary**: Add an address to a business

**Description**: Adds an address to a specific business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addBusinessAddress )

<!-- DOCGEN:END addBusinessAddress -->

<!-- DOCGEN:START addDeliveryAddress -->
### addDeliveryAddress

**Summary**: Add a delivery address to a business

**Description**: Adds a delivery address to a specific business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addDeliveryAddress )

<!-- DOCGEN:END addDeliveryAddress -->

<!-- DOCGEN:START updateParentBusinessId -->
### updateParentBusinessId

**Summary**: Update parent business

**Description**: Updates the parent business of a specific business by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateParentBusiness )

<!-- DOCGEN:END updateParentBusinessId -->

<!-- DOCGEN:START updateBusinessAddress -->
### updateBusinessAddress

**Summary**: Updates a business's address

**Description**: This endpoint is used to update a business's primary address.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessAddress )

<!-- DOCGEN:END updateBusinessAddress -->

<!-- DOCGEN:START updateBusinessDeliveryAddress -->
### updateBusinessDeliveryAddress

**Summary**: Updates a business's delivery address

**Description**: This endpoint is used to update a business's delivery address.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessDeliveryAddress )

<!-- DOCGEN:END updateBusinessDeliveryAddress -->

<!-- DOCGEN:START deleteBusiness -->
### deleteBusiness

**Summary**: Delete a business

**Description**: Deletes a business by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deleteBusiness )

<!-- DOCGEN:END deleteBusiness -->

<!-- DOCGEN:START removeParentBusinessId -->
### removeParentBusinessId

**Summary**: Remove a child business from its parent

**Description**: Clears the parent business association for a given child business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/removeChildBusiness )

<!-- DOCGEN:END removeParentBusinessId -->

<!-- DOCGEN:START reviewBusiness -->
### reviewBusiness

**Summary**: Review a business

**Description**: This endpoint is used add a review of business.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/reviewBusiness )

<!-- DOCGEN:END reviewBusiness -->

<!-- DOCGEN:START confirmBusinessReview -->
### confirmBusinessReview

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END confirmBusinessReview -->

<!-- DOCGEN:START createPaymentIntent -->
### createPaymentIntent

**Summary**: Create a payment intent

**Description**: This endpoint is used to create a payment intent.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createPaymentIntent )

<!-- DOCGEN:END createPaymentIntent -->

<!-- DOCGEN:START manualSortScheduledUsers -->
### manualSortScheduledUsers

**Summary**: Manually sort scheduled users

**Description**: This endpoint is used to manually sort scheduled users.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/manualSortScheduledUsers )

<!-- DOCGEN:END manualSortScheduledUsers -->

<!-- DOCGEN:START addScheduledUserSortingType -->
### addScheduledUserSortingType

**Summary**: Add sorting type for scheduled users

**Description**: This endpoint is used to add the sorting type for scheduled users.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addScheduledUserSortingType )

<!-- DOCGEN:END addScheduledUserSortingType -->

<!-- DOCGEN:START getBusinessEarnings -->
### getBusinessEarnings

**Summary**: Get earnings for a specific business

**Description**: Retrieves earnings data for a specific business based on the provided business ID and date range.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Responses:**
- 200
- 400
- 404

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`
- ⚠️ Could not parse: `404.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessEarnings )

<!-- DOCGEN:END getBusinessEarnings -->

<!-- DOCGEN:START getAllBusinessesEarnings -->
### getAllBusinessesEarnings

**Summary**: Get earnings for all businesses

**Description**: Retrieves earnings data for all businesses of type MERCHANT based on the provided date range.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAllBusinessesEarnings )

<!-- DOCGEN:END getAllBusinessesEarnings -->

<!-- DOCGEN:START getTotalEarnings -->
### getTotalEarnings

**Summary**: Get total earnings for completed delivery orders

**Description**: Retrieves the total earnings from all completed delivery orders.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getTotalEarnings )

<!-- DOCGEN:END getTotalEarnings -->

<!-- DOCGEN:START getBusinessTotalEarnings -->
### getBusinessTotalEarnings

**Summary**: Get total earnings for a specific business

**Description**: Retrieves the total earnings of a specific business based on completed orders.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessTotalEarnings )

<!-- DOCGEN:END getBusinessTotalEarnings -->

<!-- DOCGEN:START getBusinessReviewsById -->
### getBusinessReviewsById

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getBusinessReviewsById -->

<!-- DOCGEN:START editBusiness -->
### editBusiness

**Summary**: Edit business details

**Description**: This endpoint is used to update multiple details of a business, including address, delivery address, finances, and other specific data.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/editBusiness )

<!-- DOCGEN:END editBusiness -->

<!-- DOCGEN:START getBusinessStripeStatusByBusinessId -->
### getBusinessStripeStatusByBusinessId

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getBusinessStripeStatusByBusinessId -->

<!-- DOCGEN:START generateBusinessStripeByBusinessId -->
### generateBusinessStripeByBusinessId

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END generateBusinessStripeByBusinessId -->

<!-- DOCGEN:START onboardingEnd -->
### onboardingEnd

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END onboardingEnd -->

<!-- DOCGEN:START getBusynessFactorsBusinessIdList -->
### getBusynessFactorsBusinessIdList

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getBusynessFactorsBusinessIdList -->

<!-- DOCGEN:START addBusinessToFavorites -->
### addBusinessToFavorites

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END addBusinessToFavorites -->

<!-- DOCGEN:START removeBusinessFromFavorites -->
### removeBusinessFromFavorites

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END removeBusinessFromFavorites -->

<!-- DOCGEN:START getFavoriteBusinesses -->
### getFavoriteBusinesses

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getFavoriteBusinesses -->

<!-- DOCGEN:START getScheduledUsersByBusinessId -->
### getScheduledUsersByBusinessId

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getScheduledUsersByBusinessId -->

<!-- DOCGEN:START createScoringPointsHandler -->
### createScoringPointsHandler

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END createScoringPointsHandler -->

<!-- DOCGEN:START getPurchaseOrderLimit -->
### getPurchaseOrderLimit

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getPurchaseOrderLimit -->

<!-- DOCGEN:START activateBusiness -->
### activateBusiness

**Summary**: Activate a business

**Description**: Activates a business.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/activateBusiness )

<!-- DOCGEN:END activateBusiness -->

<!-- DOCGEN:START deactivateBusiness -->
### deactivateBusiness

**Summary**: Deactivate a business

**Description**: Deactivates a business.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deactivateBusiness )

<!-- DOCGEN:END deactivateBusiness -->

<!-- DOCGEN:START listBusinesses -->
### listBusinesses

**Summary**: Get a list of businesses

**Description**: Returns a list of businesses.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinesses )

<!-- DOCGEN:END listBusinesses -->

<!-- DOCGEN:START getBusinessesByIds -->
### getBusinessesByIds

**Summary**: Get a list of businesses business_ids

**Description**: Returns a list of businesses.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessesByIds )

<!-- DOCGEN:END getBusinessesByIds -->

<!-- DOCGEN:START searchBusinesses -->
### searchBusinesses

**Summary**: Get a list of businesses by query, location and categories

**Description**: Returns a list of businesses.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessesSearch )

<!-- DOCGEN:END searchBusinesses -->

<!-- DOCGEN:START listMerchantBusinesses -->
### listMerchantBusinesses

**Summary**: List all merchant businesses

**Description**: Retrieves a list of all businesses classified as merchants.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listMerchantBusinesses )

<!-- DOCGEN:END listMerchantBusinesses -->

<!-- DOCGEN:START listPromoSectionsWithMerchants -->
### listPromoSectionsWithMerchants

**Summary**: List all merchant businesses grouped by promoSections

**Description**: Retrieves a list of all businesses classified as merchants.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listMerchantBusinesses )

<!-- DOCGEN:END listPromoSectionsWithMerchants -->

<!-- DOCGEN:START listMerchantBusinessesWithDailyMeals -->
### listMerchantBusinessesWithDailyMeals

**Summary**: List all merchant businesses offering daily meals

**Description**: Retrieves a list of all businesses classified as merchants that offer daily meals.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listMerchantBusinessesWithDailyMeals )

<!-- DOCGEN:END listMerchantBusinessesWithDailyMeals -->

<!-- DOCGEN:START listMerchantBusinessesMainInfo -->
### listMerchantBusinessesMainInfo

**Summary**: List all merchant businesses offering daily meals

**Description**: Retrieves a list of all businesses classified as merchants that offer daily meals.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listMerchantBusinessesWithDailyMeals )

<!-- DOCGEN:END listMerchantBusinessesMainInfo -->

<!-- DOCGEN:START listTransferBusinessesMainInfo -->
### listTransferBusinessesMainInfo

**Summary**: List all transfer businesses (main info only)

**Description**: Retrieves a list of all transfer businesses

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listTransferBusinessesMainInfo )

<!-- DOCGEN:END listTransferBusinessesMainInfo -->

<!-- DOCGEN:START listTransferBusinesses -->
### listTransferBusinesses

**Summary**: List all taxi businesses

**Description**: Retrieves a list of all businesses classified as taxis (TRANSFER).

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listTaxiBusinesses )

<!-- DOCGEN:END listTransferBusinesses -->

<!-- DOCGEN:START getBusinessById -->
### getBusinessById

**Summary**: Get a business by ID

**Description**: Retrieves detailed information about a specific business by its ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessById )

<!-- DOCGEN:END getBusinessById -->

<!-- DOCGEN:START getBusinessAdminDataById -->
### getBusinessAdminDataById

**Summary**: Get a business by ID including admin data

**Description**: Retrieves detailed information about a specific business by its ID, including data an admin can see.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessAdminDataById )

<!-- DOCGEN:END getBusinessAdminDataById -->

<!-- DOCGEN:START getBusinessForSearchById -->
### getBusinessForSearchById

**Summary**: Get a business for search by ID

**Description**: Retrieves detailed information about a specific business by its ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessForSearchById )

<!-- DOCGEN:END getBusinessForSearchById -->

<!-- DOCGEN:START getParentBusiness -->
### getParentBusiness

**Summary**: Get parent business

**Description**: Retrieves the parent business of a specific business by its ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getParentBusiness )

<!-- DOCGEN:END getParentBusiness -->

<!-- DOCGEN:START getChildBusinesses -->
### getChildBusinesses

**Summary**: List child businesses

**Description**: Retrieves a list of child businesses for a specific parent business ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | parent_business_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getChildBusinesses )

<!-- DOCGEN:END getChildBusinesses -->

<!-- DOCGEN:START createNewBusiness -->
### createNewBusiness

**Summary**: Create a new business

**Description**: Creates a new business with the provided details.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewBusiness )

<!-- DOCGEN:END createNewBusiness -->

<!-- DOCGEN:START update -->
### update

**Summary**: Updates the business details

**Description**: This endpoint is used to update the business details.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | businessId |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusiness )

<!-- DOCGEN:END update -->

<!-- DOCGEN:START updateBusinessType -->
### updateBusinessType

**Summary**: Updates a business's type

**Description**: This endpoint is used to update a business's type.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessType )

<!-- DOCGEN:END updateBusinessType -->

<!-- DOCGEN:START updateIsBusinessUnit -->
### updateIsBusinessUnit

**Summary**: Updates the business unit status

**Description**: This endpoint is used to update whether a business is considered a business unit.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateIsBusinessUnit )

<!-- DOCGEN:END updateIsBusinessUnit -->

<!-- DOCGEN:START updateBusinessGroupName -->
### updateBusinessGroupName

**Summary**: Updates a business's group name

**Description**: This endpoint is used to update a business's group name.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessGroupName )

<!-- DOCGEN:END updateBusinessGroupName -->

<!-- DOCGEN:START updateBusinessEmail -->
### updateBusinessEmail

**Summary**: Updates a business's email

**Description**: This endpoint is used to update a business's email address.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessEmail )

<!-- DOCGEN:END updateBusinessEmail -->

<!-- DOCGEN:START updateBusinessTelephone -->
### updateBusinessTelephone

**Summary**: Updates a business's telephone

**Description**: This endpoint is used to update a business's telephone number.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessTelephone )

<!-- DOCGEN:END updateBusinessTelephone -->

<!-- DOCGEN:START updateBusinessWorkingHours -->
### updateBusinessWorkingHours

**Summary**: Updates a business's working hours

**Description**: This endpoint is used to update a business's working hours.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessWorkingHours )

<!-- DOCGEN:END updateBusinessWorkingHours -->

<!-- DOCGEN:START updateRestaurantOverwhelmed -->
### updateRestaurantOverwhelmed

**Summary**: Updates the overwhelmed status of a restaurant

**Description**: This endpoint is used to update whether a restaurant is considered overwhelmed.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (optional)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateRestaurantOverwhelmed )

<!-- DOCGEN:END updateRestaurantOverwhelmed -->

<!-- DOCGEN:START updateBusinessIsNew -->
### updateBusinessIsNew

**Summary**: Updates the new status of a business

**Description**: This endpoint is used to update whether a business is considered new.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessIsNew )

<!-- DOCGEN:END updateBusinessIsNew -->

<!-- DOCGEN:START updateBusinessIsPopular -->
### updateBusinessIsPopular

**Summary**: Updates the popularity status of a business

**Description**: This endpoint is used to update whether a business is considered popular.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessIsPopular )

<!-- DOCGEN:END updateBusinessIsPopular -->

<!-- DOCGEN:START getBusinessesByGroupName -->
### getBusinessesByGroupName

**Summary**: Search for businesses by business group name

**Description**: Retrieves businesses whose business group names contain the given search term, case-insensitively.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessesByGroupName )

<!-- DOCGEN:END getBusinessesByGroupName -->

<!-- DOCGEN:START getBusinessesByNameSearch -->
### getBusinessesByNameSearch

**Summary**: Search for businesses by name

**Description**: Retrieves businesses whose names contain the given search term, case-insensitively.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessesByNameSearch )

<!-- DOCGEN:END getBusinessesByNameSearch -->

<!-- DOCGEN:START addBusinessAddress -->
### addBusinessAddress

**Summary**: Add an address to a business

**Description**: Adds an address to a specific business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addBusinessAddress )

<!-- DOCGEN:END addBusinessAddress -->

<!-- DOCGEN:START addDeliveryAddress -->
### addDeliveryAddress

**Summary**: Add a delivery address to a business

**Description**: Adds a delivery address to a specific business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addDeliveryAddress )

<!-- DOCGEN:END addDeliveryAddress -->

<!-- DOCGEN:START updateParentBusinessId -->
### updateParentBusinessId

**Summary**: Update parent business

**Description**: Updates the parent business of a specific business by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateParentBusiness )

<!-- DOCGEN:END updateParentBusinessId -->

<!-- DOCGEN:START updateBusinessAddress -->
### updateBusinessAddress

**Summary**: Updates a business's address

**Description**: This endpoint is used to update a business's primary address.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessAddress )

<!-- DOCGEN:END updateBusinessAddress -->

<!-- DOCGEN:START updateBusinessDeliveryAddress -->
### updateBusinessDeliveryAddress

**Summary**: Updates a business's delivery address

**Description**: This endpoint is used to update a business's delivery address.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessDeliveryAddress )

<!-- DOCGEN:END updateBusinessDeliveryAddress -->

<!-- DOCGEN:START deleteBusiness -->
### deleteBusiness

**Summary**: Delete a business

**Description**: Deletes a business by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deleteBusiness )

<!-- DOCGEN:END deleteBusiness -->

<!-- DOCGEN:START removeParentBusinessId -->
### removeParentBusinessId

**Summary**: Remove a child business from its parent

**Description**: Clears the parent business association for a given child business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/removeChildBusiness )

<!-- DOCGEN:END removeParentBusinessId -->

<!-- DOCGEN:START reviewBusiness -->
### reviewBusiness

**Summary**: Review a business

**Description**: This endpoint is used add a review of business.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/reviewBusiness )

<!-- DOCGEN:END reviewBusiness -->

<!-- DOCGEN:START confirmBusinessReview -->
### confirmBusinessReview

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END confirmBusinessReview -->

<!-- DOCGEN:START createPaymentIntent -->
### createPaymentIntent

**Summary**: Create a payment intent

**Description**: This endpoint is used to create a payment intent.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createPaymentIntent )

<!-- DOCGEN:END createPaymentIntent -->

<!-- DOCGEN:START manualSortScheduledUsers -->
### manualSortScheduledUsers

**Summary**: Manually sort scheduled users

**Description**: This endpoint is used to manually sort scheduled users.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/manualSortScheduledUsers )

<!-- DOCGEN:END manualSortScheduledUsers -->

<!-- DOCGEN:START addScheduledUserSortingType -->
### addScheduledUserSortingType

**Summary**: Add sorting type for scheduled users

**Description**: This endpoint is used to add the sorting type for scheduled users.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addScheduledUserSortingType )

<!-- DOCGEN:END addScheduledUserSortingType -->

<!-- DOCGEN:START getBusinessEarnings -->
### getBusinessEarnings

**Summary**: Get earnings for a specific business

**Description**: Retrieves earnings data for a specific business based on the provided business ID and date range.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Responses:**
- 200
- 400
- 404

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`
- ⚠️ Could not parse: `404.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessEarnings )

<!-- DOCGEN:END getBusinessEarnings -->

<!-- DOCGEN:START getAllBusinessesEarnings -->
### getAllBusinessesEarnings

**Summary**: Get earnings for all businesses

**Description**: Retrieves earnings data for all businesses of type MERCHANT based on the provided date range.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAllBusinessesEarnings )

<!-- DOCGEN:END getAllBusinessesEarnings -->

<!-- DOCGEN:START getTotalEarnings -->
### getTotalEarnings

**Summary**: Get total earnings for completed delivery orders

**Description**: Retrieves the total earnings from all completed delivery orders.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getTotalEarnings )

<!-- DOCGEN:END getTotalEarnings -->

<!-- DOCGEN:START getBusinessTotalEarnings -->
### getBusinessTotalEarnings

**Summary**: Get total earnings for a specific business

**Description**: Retrieves the total earnings of a specific business based on completed orders.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessTotalEarnings )

<!-- DOCGEN:END getBusinessTotalEarnings -->

<!-- DOCGEN:START getBusinessReviewsById -->
### getBusinessReviewsById

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getBusinessReviewsById -->

<!-- DOCGEN:START editBusiness -->
### editBusiness

**Summary**: Edit business details

**Description**: This endpoint is used to update multiple details of a business, including address, delivery address, finances, and other specific data.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/editBusiness )

<!-- DOCGEN:END editBusiness -->

<!-- DOCGEN:START getBusinessStripeStatusByBusinessId -->
### getBusinessStripeStatusByBusinessId

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getBusinessStripeStatusByBusinessId -->

<!-- DOCGEN:START generateBusinessStripeByBusinessId -->
### generateBusinessStripeByBusinessId

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END generateBusinessStripeByBusinessId -->

<!-- DOCGEN:START onboardingEnd -->
### onboardingEnd

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END onboardingEnd -->

<!-- DOCGEN:START getBusynessFactorsBusinessIdList -->
### getBusynessFactorsBusinessIdList

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getBusynessFactorsBusinessIdList -->

<!-- DOCGEN:START addBusinessToFavorites -->
### addBusinessToFavorites

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END addBusinessToFavorites -->

<!-- DOCGEN:START removeBusinessFromFavorites -->
### removeBusinessFromFavorites

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END removeBusinessFromFavorites -->

<!-- DOCGEN:START getFavoriteBusinesses -->
### getFavoriteBusinesses

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getFavoriteBusinesses -->

<!-- DOCGEN:START getScheduledUsersByBusinessId -->
### getScheduledUsersByBusinessId

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getScheduledUsersByBusinessId -->

<!-- DOCGEN:START createScoringPointsHandler -->
### createScoringPointsHandler

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END createScoringPointsHandler -->

<!-- DOCGEN:START getPurchaseOrderLimit -->
### getPurchaseOrderLimit

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getPurchaseOrderLimit -->

<!-- DOCGEN:START activateBusiness -->
### activateBusiness

**Summary**: Activate a business

**Description**: Activates a business.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/activateBusiness )

<!-- DOCGEN:END activateBusiness -->

<!-- DOCGEN:START deactivateBusiness -->
### deactivateBusiness

**Summary**: Deactivate a business

**Description**: Deactivates a business.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deactivateBusiness )

<!-- DOCGEN:END deactivateBusiness -->

<!-- DOCGEN:START listBusinesses -->
### listBusinesses

**Summary**: Get a list of businesses

**Description**: Returns a list of businesses.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinesses )

<!-- DOCGEN:END listBusinesses -->

<!-- DOCGEN:START getBusinessesByIds -->
### getBusinessesByIds

**Summary**: Get a list of businesses business_ids

**Description**: Returns a list of businesses.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessesByIds )

<!-- DOCGEN:END getBusinessesByIds -->

<!-- DOCGEN:START searchBusinesses -->
### searchBusinesses

**Summary**: Get a list of businesses by query, location and categories

**Description**: Returns a list of businesses.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessesSearch )

<!-- DOCGEN:END searchBusinesses -->

<!-- DOCGEN:START listMerchantBusinesses -->
### listMerchantBusinesses

**Summary**: List all merchant businesses

**Description**: Retrieves a list of all businesses classified as merchants.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listMerchantBusinesses )

<!-- DOCGEN:END listMerchantBusinesses -->

<!-- DOCGEN:START listPromoSectionsWithMerchants -->
### listPromoSectionsWithMerchants

**Summary**: List all merchant businesses grouped by promoSections

**Description**: Retrieves a list of all businesses classified as merchants.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listMerchantBusinesses )

<!-- DOCGEN:END listPromoSectionsWithMerchants -->

<!-- DOCGEN:START listMerchantBusinessesWithDailyMeals -->
### listMerchantBusinessesWithDailyMeals

**Summary**: List all merchant businesses offering daily meals

**Description**: Retrieves a list of all businesses classified as merchants that offer daily meals.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listMerchantBusinessesWithDailyMeals )

<!-- DOCGEN:END listMerchantBusinessesWithDailyMeals -->

<!-- DOCGEN:START listMerchantBusinessesMainInfo -->
### listMerchantBusinessesMainInfo

**Summary**: List all merchant businesses offering daily meals

**Description**: Retrieves a list of all businesses classified as merchants that offer daily meals.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listMerchantBusinessesWithDailyMeals )

<!-- DOCGEN:END listMerchantBusinessesMainInfo -->

<!-- DOCGEN:START listTransferBusinessesMainInfo -->
### listTransferBusinessesMainInfo

**Summary**: List all transfer businesses (main info only)

**Description**: Retrieves a list of all transfer businesses

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listTransferBusinessesMainInfo )

<!-- DOCGEN:END listTransferBusinessesMainInfo -->

<!-- DOCGEN:START listTransferBusinesses -->
### listTransferBusinesses

**Summary**: List all taxi businesses

**Description**: Retrieves a list of all businesses classified as taxis (TRANSFER).

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listTaxiBusinesses )

<!-- DOCGEN:END listTransferBusinesses -->

<!-- DOCGEN:START getBusinessById -->
### getBusinessById

**Summary**: Get a business by ID

**Description**: Retrieves detailed information about a specific business by its ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessById )

<!-- DOCGEN:END getBusinessById -->

<!-- DOCGEN:START getBusinessAdminDataById -->
### getBusinessAdminDataById

**Summary**: Get a business by ID including admin data

**Description**: Retrieves detailed information about a specific business by its ID, including data an admin can see.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessAdminDataById )

<!-- DOCGEN:END getBusinessAdminDataById -->

<!-- DOCGEN:START getBusinessForSearchById -->
### getBusinessForSearchById

**Summary**: Get a business for search by ID

**Description**: Retrieves detailed information about a specific business by its ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessForSearchById )

<!-- DOCGEN:END getBusinessForSearchById -->

<!-- DOCGEN:START getParentBusiness -->
### getParentBusiness

**Summary**: Get parent business

**Description**: Retrieves the parent business of a specific business by its ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getParentBusiness )

<!-- DOCGEN:END getParentBusiness -->

<!-- DOCGEN:START getChildBusinesses -->
### getChildBusinesses

**Summary**: List child businesses

**Description**: Retrieves a list of child businesses for a specific parent business ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | parent_business_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getChildBusinesses )

<!-- DOCGEN:END getChildBusinesses -->

<!-- DOCGEN:START createNewBusiness -->
### createNewBusiness

**Summary**: Create a new business

**Description**: Creates a new business with the provided details.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewBusiness )

<!-- DOCGEN:END createNewBusiness -->

<!-- DOCGEN:START update -->
### update

**Summary**: Updates the business details

**Description**: This endpoint is used to update the business details.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | businessId |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusiness )

<!-- DOCGEN:END update -->

<!-- DOCGEN:START updateBusinessType -->
### updateBusinessType

**Summary**: Updates a business's type

**Description**: This endpoint is used to update a business's type.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessType )

<!-- DOCGEN:END updateBusinessType -->

<!-- DOCGEN:START updateIsBusinessUnit -->
### updateIsBusinessUnit

**Summary**: Updates the business unit status

**Description**: This endpoint is used to update whether a business is considered a business unit.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateIsBusinessUnit )

<!-- DOCGEN:END updateIsBusinessUnit -->

<!-- DOCGEN:START updateBusinessGroupName -->
### updateBusinessGroupName

**Summary**: Updates a business's group name

**Description**: This endpoint is used to update a business's group name.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessGroupName )

<!-- DOCGEN:END updateBusinessGroupName -->

<!-- DOCGEN:START updateBusinessEmail -->
### updateBusinessEmail

**Summary**: Updates a business's email

**Description**: This endpoint is used to update a business's email address.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessEmail )

<!-- DOCGEN:END updateBusinessEmail -->

<!-- DOCGEN:START updateBusinessTelephone -->
### updateBusinessTelephone

**Summary**: Updates a business's telephone

**Description**: This endpoint is used to update a business's telephone number.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessTelephone )

<!-- DOCGEN:END updateBusinessTelephone -->

<!-- DOCGEN:START updateBusinessWorkingHours -->
### updateBusinessWorkingHours

**Summary**: Updates a business's working hours

**Description**: This endpoint is used to update a business's working hours.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessWorkingHours )

<!-- DOCGEN:END updateBusinessWorkingHours -->

<!-- DOCGEN:START updateRestaurantOverwhelmed -->
### updateRestaurantOverwhelmed

**Summary**: Updates the overwhelmed status of a restaurant

**Description**: This endpoint is used to update whether a restaurant is considered overwhelmed.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (optional)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateRestaurantOverwhelmed )

<!-- DOCGEN:END updateRestaurantOverwhelmed -->

<!-- DOCGEN:START updateBusinessIsNew -->
### updateBusinessIsNew

**Summary**: Updates the new status of a business

**Description**: This endpoint is used to update whether a business is considered new.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessIsNew )

<!-- DOCGEN:END updateBusinessIsNew -->

<!-- DOCGEN:START updateBusinessIsPopular -->
### updateBusinessIsPopular

**Summary**: Updates the popularity status of a business

**Description**: This endpoint is used to update whether a business is considered popular.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessIsPopular )

<!-- DOCGEN:END updateBusinessIsPopular -->

<!-- DOCGEN:START getBusinessesByGroupName -->
### getBusinessesByGroupName

**Summary**: Search for businesses by business group name

**Description**: Retrieves businesses whose business group names contain the given search term, case-insensitively.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessesByGroupName )

<!-- DOCGEN:END getBusinessesByGroupName -->

<!-- DOCGEN:START getBusinessesByNameSearch -->
### getBusinessesByNameSearch

**Summary**: Search for businesses by name

**Description**: Retrieves businesses whose names contain the given search term, case-insensitively.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessesByNameSearch )

<!-- DOCGEN:END getBusinessesByNameSearch -->

<!-- DOCGEN:START addBusinessAddress -->
### addBusinessAddress

**Summary**: Add an address to a business

**Description**: Adds an address to a specific business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addBusinessAddress )

<!-- DOCGEN:END addBusinessAddress -->

<!-- DOCGEN:START addDeliveryAddress -->
### addDeliveryAddress

**Summary**: Add a delivery address to a business

**Description**: Adds a delivery address to a specific business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addDeliveryAddress )

<!-- DOCGEN:END addDeliveryAddress -->

<!-- DOCGEN:START updateParentBusinessId -->
### updateParentBusinessId

**Summary**: Update parent business

**Description**: Updates the parent business of a specific business by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateParentBusiness )

<!-- DOCGEN:END updateParentBusinessId -->

<!-- DOCGEN:START updateBusinessAddress -->
### updateBusinessAddress

**Summary**: Updates a business's address

**Description**: This endpoint is used to update a business's primary address.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessAddress )

<!-- DOCGEN:END updateBusinessAddress -->

<!-- DOCGEN:START updateBusinessDeliveryAddress -->
### updateBusinessDeliveryAddress

**Summary**: Updates a business's delivery address

**Description**: This endpoint is used to update a business's delivery address.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessDeliveryAddress )

<!-- DOCGEN:END updateBusinessDeliveryAddress -->

<!-- DOCGEN:START deleteBusiness -->
### deleteBusiness

**Summary**: Delete a business

**Description**: Deletes a business by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deleteBusiness )

<!-- DOCGEN:END deleteBusiness -->

<!-- DOCGEN:START removeParentBusinessId -->
### removeParentBusinessId

**Summary**: Remove a child business from its parent

**Description**: Clears the parent business association for a given child business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/removeChildBusiness )

<!-- DOCGEN:END removeParentBusinessId -->

<!-- DOCGEN:START reviewBusiness -->
### reviewBusiness

**Summary**: Review a business

**Description**: This endpoint is used add a review of business.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/reviewBusiness )

<!-- DOCGEN:END reviewBusiness -->

<!-- DOCGEN:START confirmBusinessReview -->
### confirmBusinessReview

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END confirmBusinessReview -->

<!-- DOCGEN:START createPaymentIntent -->
### createPaymentIntent

**Summary**: Create a payment intent

**Description**: This endpoint is used to create a payment intent.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createPaymentIntent )

<!-- DOCGEN:END createPaymentIntent -->

<!-- DOCGEN:START manualSortScheduledUsers -->
### manualSortScheduledUsers

**Summary**: Manually sort scheduled users

**Description**: This endpoint is used to manually sort scheduled users.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/manualSortScheduledUsers )

<!-- DOCGEN:END manualSortScheduledUsers -->

<!-- DOCGEN:START addScheduledUserSortingType -->
### addScheduledUserSortingType

**Summary**: Add sorting type for scheduled users

**Description**: This endpoint is used to add the sorting type for scheduled users.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addScheduledUserSortingType )

<!-- DOCGEN:END addScheduledUserSortingType -->

<!-- DOCGEN:START getBusinessEarnings -->
### getBusinessEarnings

**Summary**: Get earnings for a specific business

**Description**: Retrieves earnings data for a specific business based on the provided business ID and date range.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Responses:**
- 200
- 400
- 404

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`
- ⚠️ Could not parse: `404.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessEarnings )

<!-- DOCGEN:END getBusinessEarnings -->

<!-- DOCGEN:START getAllBusinessesEarnings -->
### getAllBusinessesEarnings

**Summary**: Get earnings for all businesses

**Description**: Retrieves earnings data for all businesses of type MERCHANT based on the provided date range.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAllBusinessesEarnings )

<!-- DOCGEN:END getAllBusinessesEarnings -->

<!-- DOCGEN:START getTotalEarnings -->
### getTotalEarnings

**Summary**: Get total earnings for completed delivery orders

**Description**: Retrieves the total earnings from all completed delivery orders.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getTotalEarnings )

<!-- DOCGEN:END getTotalEarnings -->

<!-- DOCGEN:START getBusinessTotalEarnings -->
### getBusinessTotalEarnings

**Summary**: Get total earnings for a specific business

**Description**: Retrieves the total earnings of a specific business based on completed orders.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessTotalEarnings )

<!-- DOCGEN:END getBusinessTotalEarnings -->

<!-- DOCGEN:START getBusinessReviewsById -->
### getBusinessReviewsById

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getBusinessReviewsById -->

<!-- DOCGEN:START editBusiness -->
### editBusiness

**Summary**: Edit business details

**Description**: This endpoint is used to update multiple details of a business, including address, delivery address, finances, and other specific data.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/editBusiness )

<!-- DOCGEN:END editBusiness -->

<!-- DOCGEN:START getBusinessStripeStatusByBusinessId -->
### getBusinessStripeStatusByBusinessId

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getBusinessStripeStatusByBusinessId -->

<!-- DOCGEN:START generateBusinessStripeByBusinessId -->
### generateBusinessStripeByBusinessId

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END generateBusinessStripeByBusinessId -->

<!-- DOCGEN:START onboardingEnd -->
### onboardingEnd

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END onboardingEnd -->

<!-- DOCGEN:START getBusynessFactorsBusinessIdList -->
### getBusynessFactorsBusinessIdList

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getBusynessFactorsBusinessIdList -->

<!-- DOCGEN:START addBusinessToFavorites -->
### addBusinessToFavorites

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END addBusinessToFavorites -->

<!-- DOCGEN:START removeBusinessFromFavorites -->
### removeBusinessFromFavorites

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END removeBusinessFromFavorites -->

<!-- DOCGEN:START getFavoriteBusinesses -->
### getFavoriteBusinesses

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getFavoriteBusinesses -->

<!-- DOCGEN:START getScheduledUsersByBusinessId -->
### getScheduledUsersByBusinessId

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getScheduledUsersByBusinessId -->

<!-- DOCGEN:START createScoringPointsHandler -->
### createScoringPointsHandler

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END createScoringPointsHandler -->

<!-- DOCGEN:START getPurchaseOrderLimit -->
### getPurchaseOrderLimit

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getPurchaseOrderLimit -->

<!-- DOCGEN:START activateBusiness -->
### activateBusiness

**Summary**: Activate a business

**Description**: Activates a business.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/activateBusiness )

<!-- DOCGEN:END activateBusiness -->

<!-- DOCGEN:START deactivateBusiness -->
### deactivateBusiness

**Summary**: Deactivate a business

**Description**: Deactivates a business.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deactivateBusiness )

<!-- DOCGEN:END deactivateBusiness -->

<!-- DOCGEN:START listBusinesses -->
### listBusinesses

**Summary**: Get a list of businesses

**Description**: Returns a list of businesses.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinesses )

<!-- DOCGEN:END listBusinesses -->

<!-- DOCGEN:START getBusinessesByIds -->
### getBusinessesByIds

**Summary**: Get a list of businesses business_ids

**Description**: Returns a list of businesses.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessesByIds )

<!-- DOCGEN:END getBusinessesByIds -->

<!-- DOCGEN:START searchBusinesses -->
### searchBusinesses

**Summary**: Get a list of businesses by query, location and categories

**Description**: Returns a list of businesses.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessesSearch )

<!-- DOCGEN:END searchBusinesses -->

<!-- DOCGEN:START listMerchantBusinesses -->
### listMerchantBusinesses

**Summary**: List all merchant businesses

**Description**: Retrieves a list of all businesses classified as merchants.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listMerchantBusinesses )

<!-- DOCGEN:END listMerchantBusinesses -->

<!-- DOCGEN:START listPromoSectionsWithMerchants -->
### listPromoSectionsWithMerchants

**Summary**: List all merchant businesses grouped by promoSections

**Description**: Retrieves a list of all businesses classified as merchants.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listMerchantBusinesses )

<!-- DOCGEN:END listPromoSectionsWithMerchants -->

<!-- DOCGEN:START listMerchantBusinessesWithDailyMeals -->
### listMerchantBusinessesWithDailyMeals

**Summary**: List all merchant businesses offering daily meals

**Description**: Retrieves a list of all businesses classified as merchants that offer daily meals.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listMerchantBusinessesWithDailyMeals )

<!-- DOCGEN:END listMerchantBusinessesWithDailyMeals -->

<!-- DOCGEN:START listMerchantBusinessesMainInfo -->
### listMerchantBusinessesMainInfo

**Summary**: List all merchant businesses offering daily meals

**Description**: Retrieves a list of all businesses classified as merchants that offer daily meals.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listMerchantBusinessesWithDailyMeals )

<!-- DOCGEN:END listMerchantBusinessesMainInfo -->

<!-- DOCGEN:START listTransferBusinessesMainInfo -->
### listTransferBusinessesMainInfo

**Summary**: List all transfer businesses (main info only)

**Description**: Retrieves a list of all transfer businesses

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listTransferBusinessesMainInfo )

<!-- DOCGEN:END listTransferBusinessesMainInfo -->

<!-- DOCGEN:START listTransferBusinesses -->
### listTransferBusinesses

**Summary**: List all taxi businesses

**Description**: Retrieves a list of all businesses classified as taxis (TRANSFER).

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listTaxiBusinesses )

<!-- DOCGEN:END listTransferBusinesses -->

<!-- DOCGEN:START getBusinessById -->
### getBusinessById

**Summary**: Get a business by ID

**Description**: Retrieves detailed information about a specific business by its ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessById )

<!-- DOCGEN:END getBusinessById -->

<!-- DOCGEN:START getBusinessAdminDataById -->
### getBusinessAdminDataById

**Summary**: Get a business by ID including admin data

**Description**: Retrieves detailed information about a specific business by its ID, including data an admin can see.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessAdminDataById )

<!-- DOCGEN:END getBusinessAdminDataById -->

<!-- DOCGEN:START getBusinessForSearchById -->
### getBusinessForSearchById

**Summary**: Get a business for search by ID

**Description**: Retrieves detailed information about a specific business by its ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessForSearchById )

<!-- DOCGEN:END getBusinessForSearchById -->

<!-- DOCGEN:START getParentBusiness -->
### getParentBusiness

**Summary**: Get parent business

**Description**: Retrieves the parent business of a specific business by its ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getParentBusiness )

<!-- DOCGEN:END getParentBusiness -->

<!-- DOCGEN:START getChildBusinesses -->
### getChildBusinesses

**Summary**: List child businesses

**Description**: Retrieves a list of child businesses for a specific parent business ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | parent_business_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getChildBusinesses )

<!-- DOCGEN:END getChildBusinesses -->

<!-- DOCGEN:START createNewBusiness -->
### createNewBusiness

**Summary**: Create a new business

**Description**: Creates a new business with the provided details.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewBusiness )

<!-- DOCGEN:END createNewBusiness -->

<!-- DOCGEN:START update -->
### update

**Summary**: Updates the business details

**Description**: This endpoint is used to update the business details.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | businessId |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusiness )

<!-- DOCGEN:END update -->

<!-- DOCGEN:START updateBusinessType -->
### updateBusinessType

**Summary**: Updates a business's type

**Description**: This endpoint is used to update a business's type.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessType )

<!-- DOCGEN:END updateBusinessType -->

<!-- DOCGEN:START updateIsBusinessUnit -->
### updateIsBusinessUnit

**Summary**: Updates the business unit status

**Description**: This endpoint is used to update whether a business is considered a business unit.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateIsBusinessUnit )

<!-- DOCGEN:END updateIsBusinessUnit -->

<!-- DOCGEN:START updateBusinessGroupName -->
### updateBusinessGroupName

**Summary**: Updates a business's group name

**Description**: This endpoint is used to update a business's group name.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessGroupName )

<!-- DOCGEN:END updateBusinessGroupName -->

<!-- DOCGEN:START updateBusinessEmail -->
### updateBusinessEmail

**Summary**: Updates a business's email

**Description**: This endpoint is used to update a business's email address.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessEmail )

<!-- DOCGEN:END updateBusinessEmail -->

<!-- DOCGEN:START updateBusinessTelephone -->
### updateBusinessTelephone

**Summary**: Updates a business's telephone

**Description**: This endpoint is used to update a business's telephone number.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessTelephone )

<!-- DOCGEN:END updateBusinessTelephone -->

<!-- DOCGEN:START updateBusinessWorkingHours -->
### updateBusinessWorkingHours

**Summary**: Updates a business's working hours

**Description**: This endpoint is used to update a business's working hours.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessWorkingHours )

<!-- DOCGEN:END updateBusinessWorkingHours -->

<!-- DOCGEN:START updateRestaurantOverwhelmed -->
### updateRestaurantOverwhelmed

**Summary**: Updates the overwhelmed status of a restaurant

**Description**: This endpoint is used to update whether a restaurant is considered overwhelmed.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (optional)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateRestaurantOverwhelmed )

<!-- DOCGEN:END updateRestaurantOverwhelmed -->

<!-- DOCGEN:START updateBusinessIsNew -->
### updateBusinessIsNew

**Summary**: Updates the new status of a business

**Description**: This endpoint is used to update whether a business is considered new.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessIsNew )

<!-- DOCGEN:END updateBusinessIsNew -->

<!-- DOCGEN:START updateBusinessIsPopular -->
### updateBusinessIsPopular

**Summary**: Updates the popularity status of a business

**Description**: This endpoint is used to update whether a business is considered popular.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessIsPopular )

<!-- DOCGEN:END updateBusinessIsPopular -->

<!-- DOCGEN:START getBusinessesByGroupName -->
### getBusinessesByGroupName

**Summary**: Search for businesses by business group name

**Description**: Retrieves businesses whose business group names contain the given search term, case-insensitively.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessesByGroupName )

<!-- DOCGEN:END getBusinessesByGroupName -->

<!-- DOCGEN:START getBusinessesByNameSearch -->
### getBusinessesByNameSearch

**Summary**: Search for businesses by name

**Description**: Retrieves businesses whose names contain the given search term, case-insensitively.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessesByNameSearch )

<!-- DOCGEN:END getBusinessesByNameSearch -->

<!-- DOCGEN:START addBusinessAddress -->
### addBusinessAddress

**Summary**: Add an address to a business

**Description**: Adds an address to a specific business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addBusinessAddress )

<!-- DOCGEN:END addBusinessAddress -->

<!-- DOCGEN:START addDeliveryAddress -->
### addDeliveryAddress

**Summary**: Add a delivery address to a business

**Description**: Adds a delivery address to a specific business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addDeliveryAddress )

<!-- DOCGEN:END addDeliveryAddress -->

<!-- DOCGEN:START updateParentBusinessId -->
### updateParentBusinessId

**Summary**: Update parent business

**Description**: Updates the parent business of a specific business by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateParentBusiness )

<!-- DOCGEN:END updateParentBusinessId -->

<!-- DOCGEN:START updateBusinessAddress -->
### updateBusinessAddress

**Summary**: Updates a business's address

**Description**: This endpoint is used to update a business's primary address.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessAddress )

<!-- DOCGEN:END updateBusinessAddress -->

<!-- DOCGEN:START updateBusinessDeliveryAddress -->
### updateBusinessDeliveryAddress

**Summary**: Updates a business's delivery address

**Description**: This endpoint is used to update a business's delivery address.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessDeliveryAddress )

<!-- DOCGEN:END updateBusinessDeliveryAddress -->

<!-- DOCGEN:START deleteBusiness -->
### deleteBusiness

**Summary**: Delete a business

**Description**: Deletes a business by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deleteBusiness )

<!-- DOCGEN:END deleteBusiness -->

<!-- DOCGEN:START removeParentBusinessId -->
### removeParentBusinessId

**Summary**: Remove a child business from its parent

**Description**: Clears the parent business association for a given child business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/removeChildBusiness )

<!-- DOCGEN:END removeParentBusinessId -->

<!-- DOCGEN:START reviewBusiness -->
### reviewBusiness

**Summary**: Review a business

**Description**: This endpoint is used add a review of business.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/reviewBusiness )

<!-- DOCGEN:END reviewBusiness -->

<!-- DOCGEN:START confirmBusinessReview -->
### confirmBusinessReview

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END confirmBusinessReview -->

<!-- DOCGEN:START createPaymentIntent -->
### createPaymentIntent

**Summary**: Create a payment intent

**Description**: This endpoint is used to create a payment intent.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createPaymentIntent )

<!-- DOCGEN:END createPaymentIntent -->

<!-- DOCGEN:START manualSortScheduledUsers -->
### manualSortScheduledUsers

**Summary**: Manually sort scheduled users

**Description**: This endpoint is used to manually sort scheduled users.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/manualSortScheduledUsers )

<!-- DOCGEN:END manualSortScheduledUsers -->

<!-- DOCGEN:START addScheduledUserSortingType -->
### addScheduledUserSortingType

**Summary**: Add sorting type for scheduled users

**Description**: This endpoint is used to add the sorting type for scheduled users.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addScheduledUserSortingType )

<!-- DOCGEN:END addScheduledUserSortingType -->

<!-- DOCGEN:START getBusinessEarnings -->
### getBusinessEarnings

**Summary**: Get earnings for a specific business

**Description**: Retrieves earnings data for a specific business based on the provided business ID and date range.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Responses:**
- 200
- 400
- 404

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`
- ⚠️ Could not parse: `404.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessEarnings )

<!-- DOCGEN:END getBusinessEarnings -->

<!-- DOCGEN:START getAllBusinessesEarnings -->
### getAllBusinessesEarnings

**Summary**: Get earnings for all businesses

**Description**: Retrieves earnings data for all businesses of type MERCHANT based on the provided date range.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAllBusinessesEarnings )

<!-- DOCGEN:END getAllBusinessesEarnings -->

<!-- DOCGEN:START getTotalEarnings -->
### getTotalEarnings

**Summary**: Get total earnings for completed delivery orders

**Description**: Retrieves the total earnings from all completed delivery orders.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getTotalEarnings )

<!-- DOCGEN:END getTotalEarnings -->

<!-- DOCGEN:START getBusinessTotalEarnings -->
### getBusinessTotalEarnings

**Summary**: Get total earnings for a specific business

**Description**: Retrieves the total earnings of a specific business based on completed orders.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessTotalEarnings )

<!-- DOCGEN:END getBusinessTotalEarnings -->

<!-- DOCGEN:START getBusinessReviewsById -->
### getBusinessReviewsById

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getBusinessReviewsById -->

<!-- DOCGEN:START editBusiness -->
### editBusiness

**Summary**: Edit business details

**Description**: This endpoint is used to update multiple details of a business, including address, delivery address, finances, and other specific data.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/editBusiness )

<!-- DOCGEN:END editBusiness -->

<!-- DOCGEN:START getBusinessStripeStatusByBusinessId -->
### getBusinessStripeStatusByBusinessId

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getBusinessStripeStatusByBusinessId -->

<!-- DOCGEN:START generateBusinessStripeByBusinessId -->
### generateBusinessStripeByBusinessId

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END generateBusinessStripeByBusinessId -->

<!-- DOCGEN:START onboardingEnd -->
### onboardingEnd

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END onboardingEnd -->

<!-- DOCGEN:START getBusynessFactorsBusinessIdList -->
### getBusynessFactorsBusinessIdList

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getBusynessFactorsBusinessIdList -->

<!-- DOCGEN:START addBusinessToFavorites -->
### addBusinessToFavorites

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END addBusinessToFavorites -->

<!-- DOCGEN:START removeBusinessFromFavorites -->
### removeBusinessFromFavorites

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END removeBusinessFromFavorites -->

<!-- DOCGEN:START getFavoriteBusinesses -->
### getFavoriteBusinesses

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getFavoriteBusinesses -->

<!-- DOCGEN:START getScheduledUsersByBusinessId -->
### getScheduledUsersByBusinessId

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getScheduledUsersByBusinessId -->

<!-- DOCGEN:START createScoringPointsHandler -->
### createScoringPointsHandler

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END createScoringPointsHandler -->

<!-- DOCGEN:START getPurchaseOrderLimit -->
### getPurchaseOrderLimit

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getPurchaseOrderLimit -->

<!-- DOCGEN:START activateBusiness -->
### activateBusiness

**Summary**: Activate a business

**Description**: Activates a business.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/activateBusiness )

<!-- DOCGEN:END activateBusiness -->

<!-- DOCGEN:START deactivateBusiness -->
### deactivateBusiness

**Summary**: Deactivate a business

**Description**: Deactivates a business.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deactivateBusiness )

<!-- DOCGEN:END deactivateBusiness -->

<!-- DOCGEN:START listBusinesses -->
### listBusinesses

**Summary**: Get a list of businesses

**Description**: Returns a list of businesses.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinesses )

<!-- DOCGEN:END listBusinesses -->

<!-- DOCGEN:START getBusinessesByIds -->
### getBusinessesByIds

**Summary**: Get a list of businesses business_ids

**Description**: Returns a list of businesses.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessesByIds )

<!-- DOCGEN:END getBusinessesByIds -->

<!-- DOCGEN:START searchBusinesses -->
### searchBusinesses

**Summary**: Get a list of businesses by query, location and categories

**Description**: Returns a list of businesses.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessesSearch )

<!-- DOCGEN:END searchBusinesses -->

<!-- DOCGEN:START listMerchantBusinesses -->
### listMerchantBusinesses

**Summary**: List all merchant businesses

**Description**: Retrieves a list of all businesses classified as merchants.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listMerchantBusinesses )

<!-- DOCGEN:END listMerchantBusinesses -->

<!-- DOCGEN:START listPromoSectionsWithMerchants -->
### listPromoSectionsWithMerchants

**Summary**: List all merchant businesses grouped by promoSections

**Description**: Retrieves a list of all businesses classified as merchants.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listMerchantBusinesses )

<!-- DOCGEN:END listPromoSectionsWithMerchants -->

<!-- DOCGEN:START listMerchantBusinessesWithDailyMeals -->
### listMerchantBusinessesWithDailyMeals

**Summary**: List all merchant businesses offering daily meals

**Description**: Retrieves a list of all businesses classified as merchants that offer daily meals.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listMerchantBusinessesWithDailyMeals )

<!-- DOCGEN:END listMerchantBusinessesWithDailyMeals -->

<!-- DOCGEN:START listMerchantBusinessesMainInfo -->
### listMerchantBusinessesMainInfo

**Summary**: List all merchant businesses offering daily meals

**Description**: Retrieves a list of all businesses classified as merchants that offer daily meals.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listMerchantBusinessesWithDailyMeals )

<!-- DOCGEN:END listMerchantBusinessesMainInfo -->

<!-- DOCGEN:START listTransferBusinessesMainInfo -->
### listTransferBusinessesMainInfo

**Summary**: List all transfer businesses (main info only)

**Description**: Retrieves a list of all transfer businesses

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listTransferBusinessesMainInfo )

<!-- DOCGEN:END listTransferBusinessesMainInfo -->

<!-- DOCGEN:START listTransferBusinesses -->
### listTransferBusinesses

**Summary**: List all taxi businesses

**Description**: Retrieves a list of all businesses classified as taxis (TRANSFER).

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listTaxiBusinesses )

<!-- DOCGEN:END listTransferBusinesses -->

<!-- DOCGEN:START getBusinessById -->
### getBusinessById

**Summary**: Get a business by ID

**Description**: Retrieves detailed information about a specific business by its ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessById )

<!-- DOCGEN:END getBusinessById -->

<!-- DOCGEN:START getBusinessAdminDataById -->
### getBusinessAdminDataById

**Summary**: Get a business by ID including admin data

**Description**: Retrieves detailed information about a specific business by its ID, including data an admin can see.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessAdminDataById )

<!-- DOCGEN:END getBusinessAdminDataById -->

<!-- DOCGEN:START getBusinessForSearchById -->
### getBusinessForSearchById

**Summary**: Get a business for search by ID

**Description**: Retrieves detailed information about a specific business by its ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessForSearchById )

<!-- DOCGEN:END getBusinessForSearchById -->

<!-- DOCGEN:START getParentBusiness -->
### getParentBusiness

**Summary**: Get parent business

**Description**: Retrieves the parent business of a specific business by its ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getParentBusiness )

<!-- DOCGEN:END getParentBusiness -->

<!-- DOCGEN:START getChildBusinesses -->
### getChildBusinesses

**Summary**: List child businesses

**Description**: Retrieves a list of child businesses for a specific parent business ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | parent_business_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getChildBusinesses )

<!-- DOCGEN:END getChildBusinesses -->

<!-- DOCGEN:START createNewBusiness -->
### createNewBusiness

**Summary**: Create a new business

**Description**: Creates a new business with the provided details.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewBusiness )

<!-- DOCGEN:END createNewBusiness -->

<!-- DOCGEN:START update -->
### update

**Summary**: Updates the business details

**Description**: This endpoint is used to update the business details.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | businessId |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusiness )

<!-- DOCGEN:END update -->

<!-- DOCGEN:START updateBusinessType -->
### updateBusinessType

**Summary**: Updates a business's type

**Description**: This endpoint is used to update a business's type.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessType )

<!-- DOCGEN:END updateBusinessType -->

<!-- DOCGEN:START updateIsBusinessUnit -->
### updateIsBusinessUnit

**Summary**: Updates the business unit status

**Description**: This endpoint is used to update whether a business is considered a business unit.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateIsBusinessUnit )

<!-- DOCGEN:END updateIsBusinessUnit -->

<!-- DOCGEN:START updateBusinessGroupName -->
### updateBusinessGroupName

**Summary**: Updates a business's group name

**Description**: This endpoint is used to update a business's group name.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessGroupName )

<!-- DOCGEN:END updateBusinessGroupName -->

<!-- DOCGEN:START updateBusinessEmail -->
### updateBusinessEmail

**Summary**: Updates a business's email

**Description**: This endpoint is used to update a business's email address.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessEmail )

<!-- DOCGEN:END updateBusinessEmail -->

<!-- DOCGEN:START updateBusinessTelephone -->
### updateBusinessTelephone

**Summary**: Updates a business's telephone

**Description**: This endpoint is used to update a business's telephone number.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessTelephone )

<!-- DOCGEN:END updateBusinessTelephone -->

<!-- DOCGEN:START updateBusinessWorkingHours -->
### updateBusinessWorkingHours

**Summary**: Updates a business's working hours

**Description**: This endpoint is used to update a business's working hours.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessWorkingHours )

<!-- DOCGEN:END updateBusinessWorkingHours -->

<!-- DOCGEN:START updateRestaurantOverwhelmed -->
### updateRestaurantOverwhelmed

**Summary**: Updates the overwhelmed status of a restaurant

**Description**: This endpoint is used to update whether a restaurant is considered overwhelmed.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (optional)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateRestaurantOverwhelmed )

<!-- DOCGEN:END updateRestaurantOverwhelmed -->

<!-- DOCGEN:START updateBusinessIsNew -->
### updateBusinessIsNew

**Summary**: Updates the new status of a business

**Description**: This endpoint is used to update whether a business is considered new.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessIsNew )

<!-- DOCGEN:END updateBusinessIsNew -->

<!-- DOCGEN:START updateBusinessIsPopular -->
### updateBusinessIsPopular

**Summary**: Updates the popularity status of a business

**Description**: This endpoint is used to update whether a business is considered popular.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessIsPopular )

<!-- DOCGEN:END updateBusinessIsPopular -->

<!-- DOCGEN:START getBusinessesByGroupName -->
### getBusinessesByGroupName

**Summary**: Search for businesses by business group name

**Description**: Retrieves businesses whose business group names contain the given search term, case-insensitively.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessesByGroupName )

<!-- DOCGEN:END getBusinessesByGroupName -->

<!-- DOCGEN:START getBusinessesByNameSearch -->
### getBusinessesByNameSearch

**Summary**: Search for businesses by name

**Description**: Retrieves businesses whose names contain the given search term, case-insensitively.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessesByNameSearch )

<!-- DOCGEN:END getBusinessesByNameSearch -->

<!-- DOCGEN:START addBusinessAddress -->
### addBusinessAddress

**Summary**: Add an address to a business

**Description**: Adds an address to a specific business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addBusinessAddress )

<!-- DOCGEN:END addBusinessAddress -->

<!-- DOCGEN:START addDeliveryAddress -->
### addDeliveryAddress

**Summary**: Add a delivery address to a business

**Description**: Adds a delivery address to a specific business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addDeliveryAddress )

<!-- DOCGEN:END addDeliveryAddress -->

<!-- DOCGEN:START updateParentBusinessId -->
### updateParentBusinessId

**Summary**: Update parent business

**Description**: Updates the parent business of a specific business by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateParentBusiness )

<!-- DOCGEN:END updateParentBusinessId -->

<!-- DOCGEN:START updateBusinessAddress -->
### updateBusinessAddress

**Summary**: Updates a business's address

**Description**: This endpoint is used to update a business's primary address.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessAddress )

<!-- DOCGEN:END updateBusinessAddress -->

<!-- DOCGEN:START updateBusinessDeliveryAddress -->
### updateBusinessDeliveryAddress

**Summary**: Updates a business's delivery address

**Description**: This endpoint is used to update a business's delivery address.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessDeliveryAddress )

<!-- DOCGEN:END updateBusinessDeliveryAddress -->

<!-- DOCGEN:START deleteBusiness -->
### deleteBusiness

**Summary**: Delete a business

**Description**: Deletes a business by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deleteBusiness )

<!-- DOCGEN:END deleteBusiness -->

<!-- DOCGEN:START removeParentBusinessId -->
### removeParentBusinessId

**Summary**: Remove a child business from its parent

**Description**: Clears the parent business association for a given child business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/removeChildBusiness )

<!-- DOCGEN:END removeParentBusinessId -->

<!-- DOCGEN:START reviewBusiness -->
### reviewBusiness

**Summary**: Review a business

**Description**: This endpoint is used add a review of business.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/reviewBusiness )

<!-- DOCGEN:END reviewBusiness -->

<!-- DOCGEN:START confirmBusinessReview -->
### confirmBusinessReview

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END confirmBusinessReview -->

<!-- DOCGEN:START createPaymentIntent -->
### createPaymentIntent

**Summary**: Create a payment intent

**Description**: This endpoint is used to create a payment intent.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createPaymentIntent )

<!-- DOCGEN:END createPaymentIntent -->

<!-- DOCGEN:START manualSortScheduledUsers -->
### manualSortScheduledUsers

**Summary**: Manually sort scheduled users

**Description**: This endpoint is used to manually sort scheduled users.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/manualSortScheduledUsers )

<!-- DOCGEN:END manualSortScheduledUsers -->

<!-- DOCGEN:START addScheduledUserSortingType -->
### addScheduledUserSortingType

**Summary**: Add sorting type for scheduled users

**Description**: This endpoint is used to add the sorting type for scheduled users.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addScheduledUserSortingType )

<!-- DOCGEN:END addScheduledUserSortingType -->

<!-- DOCGEN:START getBusinessEarnings -->
### getBusinessEarnings

**Summary**: Get earnings for a specific business

**Description**: Retrieves earnings data for a specific business based on the provided business ID and date range.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Responses:**
- 200
- 400
- 404

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`
- ⚠️ Could not parse: `404.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessEarnings )

<!-- DOCGEN:END getBusinessEarnings -->

<!-- DOCGEN:START getAllBusinessesEarnings -->
### getAllBusinessesEarnings

**Summary**: Get earnings for all businesses

**Description**: Retrieves earnings data for all businesses of type MERCHANT based on the provided date range.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAllBusinessesEarnings )

<!-- DOCGEN:END getAllBusinessesEarnings -->

<!-- DOCGEN:START getTotalEarnings -->
### getTotalEarnings

**Summary**: Get total earnings for completed delivery orders

**Description**: Retrieves the total earnings from all completed delivery orders.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getTotalEarnings )

<!-- DOCGEN:END getTotalEarnings -->

<!-- DOCGEN:START getBusinessTotalEarnings -->
### getBusinessTotalEarnings

**Summary**: Get total earnings for a specific business

**Description**: Retrieves the total earnings of a specific business based on completed orders.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessTotalEarnings )

<!-- DOCGEN:END getBusinessTotalEarnings -->

<!-- DOCGEN:START getBusinessReviewsById -->
### getBusinessReviewsById

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getBusinessReviewsById -->

<!-- DOCGEN:START editBusiness -->
### editBusiness

**Summary**: Edit business details

**Description**: This endpoint is used to update multiple details of a business, including address, delivery address, finances, and other specific data.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/editBusiness )

<!-- DOCGEN:END editBusiness -->

<!-- DOCGEN:START getBusinessStripeStatusByBusinessId -->
### getBusinessStripeStatusByBusinessId

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getBusinessStripeStatusByBusinessId -->

<!-- DOCGEN:START generateBusinessStripeByBusinessId -->
### generateBusinessStripeByBusinessId

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END generateBusinessStripeByBusinessId -->

<!-- DOCGEN:START onboardingEnd -->
### onboardingEnd

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END onboardingEnd -->

<!-- DOCGEN:START getBusynessFactorsBusinessIdList -->
### getBusynessFactorsBusinessIdList

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getBusynessFactorsBusinessIdList -->

<!-- DOCGEN:START addBusinessToFavorites -->
### addBusinessToFavorites

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END addBusinessToFavorites -->

<!-- DOCGEN:START removeBusinessFromFavorites -->
### removeBusinessFromFavorites

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END removeBusinessFromFavorites -->

<!-- DOCGEN:START getFavoriteBusinesses -->
### getFavoriteBusinesses

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getFavoriteBusinesses -->

<!-- DOCGEN:START getScheduledUsersByBusinessId -->
### getScheduledUsersByBusinessId

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getScheduledUsersByBusinessId -->

<!-- DOCGEN:START createScoringPointsHandler -->
### createScoringPointsHandler

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END createScoringPointsHandler -->

<!-- DOCGEN:START getPurchaseOrderLimit -->
### getPurchaseOrderLimit

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getPurchaseOrderLimit -->

<!-- DOCGEN:START activateBusiness -->
### activateBusiness

**Summary**: Activate a business

**Description**: Activates a business.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/activateBusiness )

<!-- DOCGEN:END activateBusiness -->

<!-- DOCGEN:START deactivateBusiness -->
### deactivateBusiness

**Summary**: Deactivate a business

**Description**: Deactivates a business.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deactivateBusiness )

<!-- DOCGEN:END deactivateBusiness -->

<!-- DOCGEN:START listBusinesses -->
### listBusinesses

**Summary**: Get a list of businesses

**Description**: Returns a list of businesses.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinesses )

<!-- DOCGEN:END listBusinesses -->

<!-- DOCGEN:START getBusinessesByIds -->
### getBusinessesByIds

**Summary**: Get a list of businesses business_ids

**Description**: Returns a list of businesses.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessesByIds )

<!-- DOCGEN:END getBusinessesByIds -->

<!-- DOCGEN:START searchBusinesses -->
### searchBusinesses

**Summary**: Get a list of businesses by query, location and categories

**Description**: Returns a list of businesses.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessesSearch )

<!-- DOCGEN:END searchBusinesses -->

<!-- DOCGEN:START listMerchantBusinesses -->
### listMerchantBusinesses

**Summary**: List all merchant businesses

**Description**: Retrieves a list of all businesses classified as merchants.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listMerchantBusinesses )

<!-- DOCGEN:END listMerchantBusinesses -->

<!-- DOCGEN:START listPromoSectionsWithMerchants -->
### listPromoSectionsWithMerchants

**Summary**: List all merchant businesses grouped by promoSections

**Description**: Retrieves a list of all businesses classified as merchants.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listMerchantBusinesses )

<!-- DOCGEN:END listPromoSectionsWithMerchants -->

<!-- DOCGEN:START listMerchantBusinessesWithDailyMeals -->
### listMerchantBusinessesWithDailyMeals

**Summary**: List all merchant businesses offering daily meals

**Description**: Retrieves a list of all businesses classified as merchants that offer daily meals.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listMerchantBusinessesWithDailyMeals )

<!-- DOCGEN:END listMerchantBusinessesWithDailyMeals -->

<!-- DOCGEN:START listMerchantBusinessesMainInfo -->
### listMerchantBusinessesMainInfo

**Summary**: List all merchant businesses offering daily meals

**Description**: Retrieves a list of all businesses classified as merchants that offer daily meals.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listMerchantBusinessesWithDailyMeals )

<!-- DOCGEN:END listMerchantBusinessesMainInfo -->

<!-- DOCGEN:START listTransferBusinessesMainInfo -->
### listTransferBusinessesMainInfo

**Summary**: List all transfer businesses (main info only)

**Description**: Retrieves a list of all transfer businesses

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listTransferBusinessesMainInfo )

<!-- DOCGEN:END listTransferBusinessesMainInfo -->

<!-- DOCGEN:START listTransferBusinesses -->
### listTransferBusinesses

**Summary**: List all taxi businesses

**Description**: Retrieves a list of all businesses classified as taxis (TRANSFER).

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listTaxiBusinesses )

<!-- DOCGEN:END listTransferBusinesses -->

<!-- DOCGEN:START getBusinessById -->
### getBusinessById

**Summary**: Get a business by ID

**Description**: Retrieves detailed information about a specific business by its ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessById )

<!-- DOCGEN:END getBusinessById -->

<!-- DOCGEN:START getBusinessAdminDataById -->
### getBusinessAdminDataById

**Summary**: Get a business by ID including admin data

**Description**: Retrieves detailed information about a specific business by its ID, including data an admin can see.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessAdminDataById )

<!-- DOCGEN:END getBusinessAdminDataById -->

<!-- DOCGEN:START getBusinessForSearchById -->
### getBusinessForSearchById

**Summary**: Get a business for search by ID

**Description**: Retrieves detailed information about a specific business by its ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessForSearchById )

<!-- DOCGEN:END getBusinessForSearchById -->

<!-- DOCGEN:START getParentBusiness -->
### getParentBusiness

**Summary**: Get parent business

**Description**: Retrieves the parent business of a specific business by its ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getParentBusiness )

<!-- DOCGEN:END getParentBusiness -->

<!-- DOCGEN:START getChildBusinesses -->
### getChildBusinesses

**Summary**: List child businesses

**Description**: Retrieves a list of child businesses for a specific parent business ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | parent_business_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getChildBusinesses )

<!-- DOCGEN:END getChildBusinesses -->

<!-- DOCGEN:START createNewBusiness -->
### createNewBusiness

**Summary**: Create a new business

**Description**: Creates a new business with the provided details.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewBusiness )

<!-- DOCGEN:END createNewBusiness -->

<!-- DOCGEN:START update -->
### update

**Summary**: Updates the business details

**Description**: This endpoint is used to update the business details.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | businessId |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusiness )

<!-- DOCGEN:END update -->

<!-- DOCGEN:START updateBusinessType -->
### updateBusinessType

**Summary**: Updates a business's type

**Description**: This endpoint is used to update a business's type.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessType )

<!-- DOCGEN:END updateBusinessType -->

<!-- DOCGEN:START updateIsBusinessUnit -->
### updateIsBusinessUnit

**Summary**: Updates the business unit status

**Description**: This endpoint is used to update whether a business is considered a business unit.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateIsBusinessUnit )

<!-- DOCGEN:END updateIsBusinessUnit -->

<!-- DOCGEN:START updateBusinessGroupName -->
### updateBusinessGroupName

**Summary**: Updates a business's group name

**Description**: This endpoint is used to update a business's group name.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessGroupName )

<!-- DOCGEN:END updateBusinessGroupName -->

<!-- DOCGEN:START updateBusinessEmail -->
### updateBusinessEmail

**Summary**: Updates a business's email

**Description**: This endpoint is used to update a business's email address.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessEmail )

<!-- DOCGEN:END updateBusinessEmail -->

<!-- DOCGEN:START updateBusinessTelephone -->
### updateBusinessTelephone

**Summary**: Updates a business's telephone

**Description**: This endpoint is used to update a business's telephone number.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessTelephone )

<!-- DOCGEN:END updateBusinessTelephone -->

<!-- DOCGEN:START updateBusinessWorkingHours -->
### updateBusinessWorkingHours

**Summary**: Updates a business's working hours

**Description**: This endpoint is used to update a business's working hours.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessWorkingHours )

<!-- DOCGEN:END updateBusinessWorkingHours -->

<!-- DOCGEN:START updateRestaurantOverwhelmed -->
### updateRestaurantOverwhelmed

**Summary**: Updates the overwhelmed status of a restaurant

**Description**: This endpoint is used to update whether a restaurant is considered overwhelmed.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (optional)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateRestaurantOverwhelmed )

<!-- DOCGEN:END updateRestaurantOverwhelmed -->

<!-- DOCGEN:START updateBusinessIsNew -->
### updateBusinessIsNew

**Summary**: Updates the new status of a business

**Description**: This endpoint is used to update whether a business is considered new.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessIsNew )

<!-- DOCGEN:END updateBusinessIsNew -->

<!-- DOCGEN:START updateBusinessIsPopular -->
### updateBusinessIsPopular

**Summary**: Updates the popularity status of a business

**Description**: This endpoint is used to update whether a business is considered popular.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessIsPopular )

<!-- DOCGEN:END updateBusinessIsPopular -->

<!-- DOCGEN:START getBusinessesByGroupName -->
### getBusinessesByGroupName

**Summary**: Search for businesses by business group name

**Description**: Retrieves businesses whose business group names contain the given search term, case-insensitively.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessesByGroupName )

<!-- DOCGEN:END getBusinessesByGroupName -->

<!-- DOCGEN:START getBusinessesByNameSearch -->
### getBusinessesByNameSearch

**Summary**: Search for businesses by name

**Description**: Retrieves businesses whose names contain the given search term, case-insensitively.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessesByNameSearch )

<!-- DOCGEN:END getBusinessesByNameSearch -->

<!-- DOCGEN:START addBusinessAddress -->
### addBusinessAddress

**Summary**: Add an address to a business

**Description**: Adds an address to a specific business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addBusinessAddress )

<!-- DOCGEN:END addBusinessAddress -->

<!-- DOCGEN:START addDeliveryAddress -->
### addDeliveryAddress

**Summary**: Add a delivery address to a business

**Description**: Adds a delivery address to a specific business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addDeliveryAddress )

<!-- DOCGEN:END addDeliveryAddress -->

<!-- DOCGEN:START updateParentBusinessId -->
### updateParentBusinessId

**Summary**: Update parent business

**Description**: Updates the parent business of a specific business by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateParentBusiness )

<!-- DOCGEN:END updateParentBusinessId -->

<!-- DOCGEN:START updateBusinessAddress -->
### updateBusinessAddress

**Summary**: Updates a business's address

**Description**: This endpoint is used to update a business's primary address.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessAddress )

<!-- DOCGEN:END updateBusinessAddress -->

<!-- DOCGEN:START updateBusinessDeliveryAddress -->
### updateBusinessDeliveryAddress

**Summary**: Updates a business's delivery address

**Description**: This endpoint is used to update a business's delivery address.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessDeliveryAddress )

<!-- DOCGEN:END updateBusinessDeliveryAddress -->

<!-- DOCGEN:START deleteBusiness -->
### deleteBusiness

**Summary**: Delete a business

**Description**: Deletes a business by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deleteBusiness )

<!-- DOCGEN:END deleteBusiness -->

<!-- DOCGEN:START removeParentBusinessId -->
### removeParentBusinessId

**Summary**: Remove a child business from its parent

**Description**: Clears the parent business association for a given child business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/removeChildBusiness )

<!-- DOCGEN:END removeParentBusinessId -->

<!-- DOCGEN:START reviewBusiness -->
### reviewBusiness

**Summary**: Review a business

**Description**: This endpoint is used add a review of business.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/reviewBusiness )

<!-- DOCGEN:END reviewBusiness -->

<!-- DOCGEN:START confirmBusinessReview -->
### confirmBusinessReview

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END confirmBusinessReview -->

<!-- DOCGEN:START createPaymentIntent -->
### createPaymentIntent

**Summary**: Create a payment intent

**Description**: This endpoint is used to create a payment intent.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createPaymentIntent )

<!-- DOCGEN:END createPaymentIntent -->

<!-- DOCGEN:START manualSortScheduledUsers -->
### manualSortScheduledUsers

**Summary**: Manually sort scheduled users

**Description**: This endpoint is used to manually sort scheduled users.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/manualSortScheduledUsers )

<!-- DOCGEN:END manualSortScheduledUsers -->

<!-- DOCGEN:START addScheduledUserSortingType -->
### addScheduledUserSortingType

**Summary**: Add sorting type for scheduled users

**Description**: This endpoint is used to add the sorting type for scheduled users.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addScheduledUserSortingType )

<!-- DOCGEN:END addScheduledUserSortingType -->

<!-- DOCGEN:START getBusinessEarnings -->
### getBusinessEarnings

**Summary**: Get earnings for a specific business

**Description**: Retrieves earnings data for a specific business based on the provided business ID and date range.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Responses:**
- 200
- 400
- 404

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`
- ⚠️ Could not parse: `404.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessEarnings )

<!-- DOCGEN:END getBusinessEarnings -->

<!-- DOCGEN:START getAllBusinessesEarnings -->
### getAllBusinessesEarnings

**Summary**: Get earnings for all businesses

**Description**: Retrieves earnings data for all businesses of type MERCHANT based on the provided date range.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAllBusinessesEarnings )

<!-- DOCGEN:END getAllBusinessesEarnings -->

<!-- DOCGEN:START getTotalEarnings -->
### getTotalEarnings

**Summary**: Get total earnings for completed delivery orders

**Description**: Retrieves the total earnings from all completed delivery orders.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getTotalEarnings )

<!-- DOCGEN:END getTotalEarnings -->

<!-- DOCGEN:START getBusinessTotalEarnings -->
### getBusinessTotalEarnings

**Summary**: Get total earnings for a specific business

**Description**: Retrieves the total earnings of a specific business based on completed orders.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessTotalEarnings )

<!-- DOCGEN:END getBusinessTotalEarnings -->

<!-- DOCGEN:START getBusinessReviewsById -->
### getBusinessReviewsById

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getBusinessReviewsById -->

<!-- DOCGEN:START editBusiness -->
### editBusiness

**Summary**: Edit business details

**Description**: This endpoint is used to update multiple details of a business, including address, delivery address, finances, and other specific data.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/editBusiness )

<!-- DOCGEN:END editBusiness -->

<!-- DOCGEN:START getBusinessStripeStatusByBusinessId -->
### getBusinessStripeStatusByBusinessId

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getBusinessStripeStatusByBusinessId -->

<!-- DOCGEN:START generateBusinessStripeByBusinessId -->
### generateBusinessStripeByBusinessId

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END generateBusinessStripeByBusinessId -->

<!-- DOCGEN:START onboardingEnd -->
### onboardingEnd

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END onboardingEnd -->

<!-- DOCGEN:START getBusynessFactorsBusinessIdList -->
### getBusynessFactorsBusinessIdList

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getBusynessFactorsBusinessIdList -->

<!-- DOCGEN:START addBusinessToFavorites -->
### addBusinessToFavorites

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END addBusinessToFavorites -->

<!-- DOCGEN:START removeBusinessFromFavorites -->
### removeBusinessFromFavorites

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END removeBusinessFromFavorites -->

<!-- DOCGEN:START getFavoriteBusinesses -->
### getFavoriteBusinesses

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getFavoriteBusinesses -->

<!-- DOCGEN:START getScheduledUsersByBusinessId -->
### getScheduledUsersByBusinessId

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getScheduledUsersByBusinessId -->

<!-- DOCGEN:START createScoringPointsHandler -->
### createScoringPointsHandler

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END createScoringPointsHandler -->

<!-- DOCGEN:START getPurchaseOrderLimit -->
### getPurchaseOrderLimit

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getPurchaseOrderLimit -->

<!-- DOCGEN:START activateBusiness -->
### activateBusiness

**Summary**: Activate a business

**Description**: Activates a business.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/activateBusiness )

<!-- DOCGEN:END activateBusiness -->

<!-- DOCGEN:START deactivateBusiness -->
### deactivateBusiness

**Summary**: Deactivate a business

**Description**: Deactivates a business.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deactivateBusiness )

<!-- DOCGEN:END deactivateBusiness -->

<!-- DOCGEN:START listBusinesses -->
### listBusinesses

**Summary**: Get a list of businesses

**Description**: Returns a list of businesses.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinesses )

<!-- DOCGEN:END listBusinesses -->

<!-- DOCGEN:START getBusinessesByIds -->
### getBusinessesByIds

**Summary**: Get a list of businesses business_ids

**Description**: Returns a list of businesses.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessesByIds )

<!-- DOCGEN:END getBusinessesByIds -->

<!-- DOCGEN:START searchBusinesses -->
### searchBusinesses

**Summary**: Get a list of businesses by query, location and categories

**Description**: Returns a list of businesses.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessesSearch )

<!-- DOCGEN:END searchBusinesses -->

<!-- DOCGEN:START listMerchantBusinesses -->
### listMerchantBusinesses

**Summary**: List all merchant businesses

**Description**: Retrieves a list of all businesses classified as merchants.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listMerchantBusinesses )

<!-- DOCGEN:END listMerchantBusinesses -->

<!-- DOCGEN:START listPromoSectionsWithMerchants -->
### listPromoSectionsWithMerchants

**Summary**: List all merchant businesses grouped by promoSections

**Description**: Retrieves a list of all businesses classified as merchants.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listMerchantBusinesses )

<!-- DOCGEN:END listPromoSectionsWithMerchants -->

<!-- DOCGEN:START listMerchantBusinessesWithDailyMeals -->
### listMerchantBusinessesWithDailyMeals

**Summary**: List all merchant businesses offering daily meals

**Description**: Retrieves a list of all businesses classified as merchants that offer daily meals.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listMerchantBusinessesWithDailyMeals )

<!-- DOCGEN:END listMerchantBusinessesWithDailyMeals -->

<!-- DOCGEN:START listMerchantBusinessesMainInfo -->
### listMerchantBusinessesMainInfo

**Summary**: List all merchant businesses offering daily meals

**Description**: Retrieves a list of all businesses classified as merchants that offer daily meals.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listMerchantBusinessesWithDailyMeals )

<!-- DOCGEN:END listMerchantBusinessesMainInfo -->

<!-- DOCGEN:START listTransferBusinessesMainInfo -->
### listTransferBusinessesMainInfo

**Summary**: List all transfer businesses (main info only)

**Description**: Retrieves a list of all transfer businesses

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listTransferBusinessesMainInfo )

<!-- DOCGEN:END listTransferBusinessesMainInfo -->

<!-- DOCGEN:START listTransferBusinesses -->
### listTransferBusinesses

**Summary**: List all taxi businesses

**Description**: Retrieves a list of all businesses classified as taxis (TRANSFER).

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listTaxiBusinesses )

<!-- DOCGEN:END listTransferBusinesses -->

<!-- DOCGEN:START getBusinessById -->
### getBusinessById

**Summary**: Get a business by ID

**Description**: Retrieves detailed information about a specific business by its ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessById )

<!-- DOCGEN:END getBusinessById -->

<!-- DOCGEN:START getBusinessAdminDataById -->
### getBusinessAdminDataById

**Summary**: Get a business by ID including admin data

**Description**: Retrieves detailed information about a specific business by its ID, including data an admin can see.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessAdminDataById )

<!-- DOCGEN:END getBusinessAdminDataById -->

<!-- DOCGEN:START getBusinessForSearchById -->
### getBusinessForSearchById

**Summary**: Get a business for search by ID

**Description**: Retrieves detailed information about a specific business by its ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessForSearchById )

<!-- DOCGEN:END getBusinessForSearchById -->

<!-- DOCGEN:START getParentBusiness -->
### getParentBusiness

**Summary**: Get parent business

**Description**: Retrieves the parent business of a specific business by its ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getParentBusiness )

<!-- DOCGEN:END getParentBusiness -->

<!-- DOCGEN:START getChildBusinesses -->
### getChildBusinesses

**Summary**: List child businesses

**Description**: Retrieves a list of child businesses for a specific parent business ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | parent_business_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getChildBusinesses )

<!-- DOCGEN:END getChildBusinesses -->

<!-- DOCGEN:START createNewBusiness -->
### createNewBusiness

**Summary**: Create a new business

**Description**: Creates a new business with the provided details.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewBusiness )

<!-- DOCGEN:END createNewBusiness -->

<!-- DOCGEN:START update -->
### update

**Summary**: Updates the business details

**Description**: This endpoint is used to update the business details.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | businessId |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusiness )

<!-- DOCGEN:END update -->

<!-- DOCGEN:START updateBusinessType -->
### updateBusinessType

**Summary**: Updates a business's type

**Description**: This endpoint is used to update a business's type.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessType )

<!-- DOCGEN:END updateBusinessType -->

<!-- DOCGEN:START updateIsBusinessUnit -->
### updateIsBusinessUnit

**Summary**: Updates the business unit status

**Description**: This endpoint is used to update whether a business is considered a business unit.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateIsBusinessUnit )

<!-- DOCGEN:END updateIsBusinessUnit -->

<!-- DOCGEN:START updateBusinessGroupName -->
### updateBusinessGroupName

**Summary**: Updates a business's group name

**Description**: This endpoint is used to update a business's group name.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessGroupName )

<!-- DOCGEN:END updateBusinessGroupName -->

<!-- DOCGEN:START updateBusinessEmail -->
### updateBusinessEmail

**Summary**: Updates a business's email

**Description**: This endpoint is used to update a business's email address.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessEmail )

<!-- DOCGEN:END updateBusinessEmail -->

<!-- DOCGEN:START updateBusinessTelephone -->
### updateBusinessTelephone

**Summary**: Updates a business's telephone

**Description**: This endpoint is used to update a business's telephone number.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessTelephone )

<!-- DOCGEN:END updateBusinessTelephone -->

<!-- DOCGEN:START updateBusinessWorkingHours -->
### updateBusinessWorkingHours

**Summary**: Updates a business's working hours

**Description**: This endpoint is used to update a business's working hours.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessWorkingHours )

<!-- DOCGEN:END updateBusinessWorkingHours -->

<!-- DOCGEN:START updateRestaurantOverwhelmed -->
### updateRestaurantOverwhelmed

**Summary**: Updates the overwhelmed status of a restaurant

**Description**: This endpoint is used to update whether a restaurant is considered overwhelmed.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (optional)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateRestaurantOverwhelmed )

<!-- DOCGEN:END updateRestaurantOverwhelmed -->

<!-- DOCGEN:START updateBusinessIsNew -->
### updateBusinessIsNew

**Summary**: Updates the new status of a business

**Description**: This endpoint is used to update whether a business is considered new.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessIsNew )

<!-- DOCGEN:END updateBusinessIsNew -->

<!-- DOCGEN:START updateBusinessIsPopular -->
### updateBusinessIsPopular

**Summary**: Updates the popularity status of a business

**Description**: This endpoint is used to update whether a business is considered popular.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessIsPopular )

<!-- DOCGEN:END updateBusinessIsPopular -->

<!-- DOCGEN:START getBusinessesByGroupName -->
### getBusinessesByGroupName

**Summary**: Search for businesses by business group name

**Description**: Retrieves businesses whose business group names contain the given search term, case-insensitively.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessesByGroupName )

<!-- DOCGEN:END getBusinessesByGroupName -->

<!-- DOCGEN:START getBusinessesByNameSearch -->
### getBusinessesByNameSearch

**Summary**: Search for businesses by name

**Description**: Retrieves businesses whose names contain the given search term, case-insensitively.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessesByNameSearch )

<!-- DOCGEN:END getBusinessesByNameSearch -->

<!-- DOCGEN:START addBusinessAddress -->
### addBusinessAddress

**Summary**: Add an address to a business

**Description**: Adds an address to a specific business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addBusinessAddress )

<!-- DOCGEN:END addBusinessAddress -->

<!-- DOCGEN:START addDeliveryAddress -->
### addDeliveryAddress

**Summary**: Add a delivery address to a business

**Description**: Adds a delivery address to a specific business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addDeliveryAddress )

<!-- DOCGEN:END addDeliveryAddress -->

<!-- DOCGEN:START updateParentBusinessId -->
### updateParentBusinessId

**Summary**: Update parent business

**Description**: Updates the parent business of a specific business by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateParentBusiness )

<!-- DOCGEN:END updateParentBusinessId -->

<!-- DOCGEN:START updateBusinessAddress -->
### updateBusinessAddress

**Summary**: Updates a business's address

**Description**: This endpoint is used to update a business's primary address.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessAddress )

<!-- DOCGEN:END updateBusinessAddress -->

<!-- DOCGEN:START updateBusinessDeliveryAddress -->
### updateBusinessDeliveryAddress

**Summary**: Updates a business's delivery address

**Description**: This endpoint is used to update a business's delivery address.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessDeliveryAddress )

<!-- DOCGEN:END updateBusinessDeliveryAddress -->

<!-- DOCGEN:START deleteBusiness -->
### deleteBusiness

**Summary**: Delete a business

**Description**: Deletes a business by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deleteBusiness )

<!-- DOCGEN:END deleteBusiness -->

<!-- DOCGEN:START removeParentBusinessId -->
### removeParentBusinessId

**Summary**: Remove a child business from its parent

**Description**: Clears the parent business association for a given child business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/removeChildBusiness )

<!-- DOCGEN:END removeParentBusinessId -->

<!-- DOCGEN:START reviewBusiness -->
### reviewBusiness

**Summary**: Review a business

**Description**: This endpoint is used add a review of business.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/reviewBusiness )

<!-- DOCGEN:END reviewBusiness -->

<!-- DOCGEN:START confirmBusinessReview -->
### confirmBusinessReview

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END confirmBusinessReview -->

<!-- DOCGEN:START createPaymentIntent -->
### createPaymentIntent

**Summary**: Create a payment intent

**Description**: This endpoint is used to create a payment intent.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createPaymentIntent )

<!-- DOCGEN:END createPaymentIntent -->

<!-- DOCGEN:START manualSortScheduledUsers -->
### manualSortScheduledUsers

**Summary**: Manually sort scheduled users

**Description**: This endpoint is used to manually sort scheduled users.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/manualSortScheduledUsers )

<!-- DOCGEN:END manualSortScheduledUsers -->

<!-- DOCGEN:START addScheduledUserSortingType -->
### addScheduledUserSortingType

**Summary**: Add sorting type for scheduled users

**Description**: This endpoint is used to add the sorting type for scheduled users.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addScheduledUserSortingType )

<!-- DOCGEN:END addScheduledUserSortingType -->

<!-- DOCGEN:START getBusinessEarnings -->
### getBusinessEarnings

**Summary**: Get earnings for a specific business

**Description**: Retrieves earnings data for a specific business based on the provided business ID and date range.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Responses:**
- 200
- 400
- 404

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`
- ⚠️ Could not parse: `404.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessEarnings )

<!-- DOCGEN:END getBusinessEarnings -->

<!-- DOCGEN:START getAllBusinessesEarnings -->
### getAllBusinessesEarnings

**Summary**: Get earnings for all businesses

**Description**: Retrieves earnings data for all businesses of type MERCHANT based on the provided date range.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAllBusinessesEarnings )

<!-- DOCGEN:END getAllBusinessesEarnings -->

<!-- DOCGEN:START getTotalEarnings -->
### getTotalEarnings

**Summary**: Get total earnings for completed delivery orders

**Description**: Retrieves the total earnings from all completed delivery orders.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getTotalEarnings )

<!-- DOCGEN:END getTotalEarnings -->

<!-- DOCGEN:START getBusinessTotalEarnings -->
### getBusinessTotalEarnings

**Summary**: Get total earnings for a specific business

**Description**: Retrieves the total earnings of a specific business based on completed orders.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessTotalEarnings )

<!-- DOCGEN:END getBusinessTotalEarnings -->

<!-- DOCGEN:START getBusinessReviewsById -->
### getBusinessReviewsById

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getBusinessReviewsById -->

<!-- DOCGEN:START editBusiness -->
### editBusiness

**Summary**: Edit business details

**Description**: This endpoint is used to update multiple details of a business, including address, delivery address, finances, and other specific data.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/editBusiness )

<!-- DOCGEN:END editBusiness -->

<!-- DOCGEN:START getBusinessStripeStatusByBusinessId -->
### getBusinessStripeStatusByBusinessId

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getBusinessStripeStatusByBusinessId -->

<!-- DOCGEN:START generateBusinessStripeByBusinessId -->
### generateBusinessStripeByBusinessId

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END generateBusinessStripeByBusinessId -->

<!-- DOCGEN:START onboardingEnd -->
### onboardingEnd

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END onboardingEnd -->

<!-- DOCGEN:START getBusynessFactorsBusinessIdList -->
### getBusynessFactorsBusinessIdList

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getBusynessFactorsBusinessIdList -->

<!-- DOCGEN:START addBusinessToFavorites -->
### addBusinessToFavorites

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END addBusinessToFavorites -->

<!-- DOCGEN:START removeBusinessFromFavorites -->
### removeBusinessFromFavorites

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END removeBusinessFromFavorites -->

<!-- DOCGEN:START getFavoriteBusinesses -->
### getFavoriteBusinesses

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getFavoriteBusinesses -->

<!-- DOCGEN:START getScheduledUsersByBusinessId -->
### getScheduledUsersByBusinessId

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getScheduledUsersByBusinessId -->

<!-- DOCGEN:START createScoringPointsHandler -->
### createScoringPointsHandler

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END createScoringPointsHandler -->

<!-- DOCGEN:START getPurchaseOrderLimit -->
### getPurchaseOrderLimit

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getPurchaseOrderLimit -->

<!-- DOCGEN:START activateBusiness -->
### activateBusiness

**Summary**: Activate a business

**Description**: Activates a business.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/activateBusiness )

<!-- DOCGEN:END activateBusiness -->

<!-- DOCGEN:START deactivateBusiness -->
### deactivateBusiness

**Summary**: Deactivate a business

**Description**: Deactivates a business.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deactivateBusiness )

<!-- DOCGEN:END deactivateBusiness -->

<!-- DOCGEN:START listBusinesses -->
### listBusinesses

**Summary**: Get a list of businesses

**Description**: Returns a list of businesses.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinesses )

<!-- DOCGEN:END listBusinesses -->

<!-- DOCGEN:START getBusinessesByIds -->
### getBusinessesByIds

**Summary**: Get a list of businesses business_ids

**Description**: Returns a list of businesses.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessesByIds )

<!-- DOCGEN:END getBusinessesByIds -->

<!-- DOCGEN:START searchBusinesses -->
### searchBusinesses

**Summary**: Get a list of businesses by query, location and categories

**Description**: Returns a list of businesses.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessesSearch )

<!-- DOCGEN:END searchBusinesses -->

<!-- DOCGEN:START listMerchantBusinesses -->
### listMerchantBusinesses

**Summary**: List all merchant businesses

**Description**: Retrieves a list of all businesses classified as merchants.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listMerchantBusinesses )

<!-- DOCGEN:END listMerchantBusinesses -->

<!-- DOCGEN:START listPromoSectionsWithMerchants -->
### listPromoSectionsWithMerchants

**Summary**: List all merchant businesses grouped by promoSections

**Description**: Retrieves a list of all businesses classified as merchants.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listMerchantBusinesses )

<!-- DOCGEN:END listPromoSectionsWithMerchants -->

<!-- DOCGEN:START listMerchantBusinessesWithDailyMeals -->
### listMerchantBusinessesWithDailyMeals

**Summary**: List all merchant businesses offering daily meals

**Description**: Retrieves a list of all businesses classified as merchants that offer daily meals.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listMerchantBusinessesWithDailyMeals )

<!-- DOCGEN:END listMerchantBusinessesWithDailyMeals -->

<!-- DOCGEN:START listMerchantBusinessesMainInfo -->
### listMerchantBusinessesMainInfo

**Summary**: List all merchant businesses offering daily meals

**Description**: Retrieves a list of all businesses classified as merchants that offer daily meals.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listMerchantBusinessesWithDailyMeals )

<!-- DOCGEN:END listMerchantBusinessesMainInfo -->

<!-- DOCGEN:START listTransferBusinessesMainInfo -->
### listTransferBusinessesMainInfo

**Summary**: List all transfer businesses (main info only)

**Description**: Retrieves a list of all transfer businesses

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listTransferBusinessesMainInfo )

<!-- DOCGEN:END listTransferBusinessesMainInfo -->

<!-- DOCGEN:START listTransferBusinesses -->
### listTransferBusinesses

**Summary**: List all taxi businesses

**Description**: Retrieves a list of all businesses classified as taxis (TRANSFER).

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listTaxiBusinesses )

<!-- DOCGEN:END listTransferBusinesses -->

<!-- DOCGEN:START getBusinessById -->
### getBusinessById

**Summary**: Get a business by ID

**Description**: Retrieves detailed information about a specific business by its ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessById )

<!-- DOCGEN:END getBusinessById -->

<!-- DOCGEN:START getBusinessAdminDataById -->
### getBusinessAdminDataById

**Summary**: Get a business by ID including admin data

**Description**: Retrieves detailed information about a specific business by its ID, including data an admin can see.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessAdminDataById )

<!-- DOCGEN:END getBusinessAdminDataById -->

<!-- DOCGEN:START getBusinessForSearchById -->
### getBusinessForSearchById

**Summary**: Get a business for search by ID

**Description**: Retrieves detailed information about a specific business by its ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessForSearchById )

<!-- DOCGEN:END getBusinessForSearchById -->

<!-- DOCGEN:START getParentBusiness -->
### getParentBusiness

**Summary**: Get parent business

**Description**: Retrieves the parent business of a specific business by its ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getParentBusiness )

<!-- DOCGEN:END getParentBusiness -->

<!-- DOCGEN:START getChildBusinesses -->
### getChildBusinesses

**Summary**: List child businesses

**Description**: Retrieves a list of child businesses for a specific parent business ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | parent_business_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getChildBusinesses )

<!-- DOCGEN:END getChildBusinesses -->

<!-- DOCGEN:START createNewBusiness -->
### createNewBusiness

**Summary**: Create a new business

**Description**: Creates a new business with the provided details.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewBusiness )

<!-- DOCGEN:END createNewBusiness -->

<!-- DOCGEN:START update -->
### update

**Summary**: Updates the business details

**Description**: This endpoint is used to update the business details.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | businessId |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusiness )

<!-- DOCGEN:END update -->

<!-- DOCGEN:START updateBusinessType -->
### updateBusinessType

**Summary**: Updates a business's type

**Description**: This endpoint is used to update a business's type.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessType )

<!-- DOCGEN:END updateBusinessType -->

<!-- DOCGEN:START updateIsBusinessUnit -->
### updateIsBusinessUnit

**Summary**: Updates the business unit status

**Description**: This endpoint is used to update whether a business is considered a business unit.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateIsBusinessUnit )

<!-- DOCGEN:END updateIsBusinessUnit -->

<!-- DOCGEN:START updateBusinessGroupName -->
### updateBusinessGroupName

**Summary**: Updates a business's group name

**Description**: This endpoint is used to update a business's group name.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessGroupName )

<!-- DOCGEN:END updateBusinessGroupName -->

<!-- DOCGEN:START updateBusinessEmail -->
### updateBusinessEmail

**Summary**: Updates a business's email

**Description**: This endpoint is used to update a business's email address.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessEmail )

<!-- DOCGEN:END updateBusinessEmail -->

<!-- DOCGEN:START updateBusinessTelephone -->
### updateBusinessTelephone

**Summary**: Updates a business's telephone

**Description**: This endpoint is used to update a business's telephone number.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessTelephone )

<!-- DOCGEN:END updateBusinessTelephone -->

<!-- DOCGEN:START updateBusinessWorkingHours -->
### updateBusinessWorkingHours

**Summary**: Updates a business's working hours

**Description**: This endpoint is used to update a business's working hours.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessWorkingHours )

<!-- DOCGEN:END updateBusinessWorkingHours -->

<!-- DOCGEN:START updateRestaurantOverwhelmed -->
### updateRestaurantOverwhelmed

**Summary**: Updates the overwhelmed status of a restaurant

**Description**: This endpoint is used to update whether a restaurant is considered overwhelmed.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (optional)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateRestaurantOverwhelmed )

<!-- DOCGEN:END updateRestaurantOverwhelmed -->

<!-- DOCGEN:START updateBusinessIsNew -->
### updateBusinessIsNew

**Summary**: Updates the new status of a business

**Description**: This endpoint is used to update whether a business is considered new.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessIsNew )

<!-- DOCGEN:END updateBusinessIsNew -->

<!-- DOCGEN:START updateBusinessIsPopular -->
### updateBusinessIsPopular

**Summary**: Updates the popularity status of a business

**Description**: This endpoint is used to update whether a business is considered popular.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessIsPopular )

<!-- DOCGEN:END updateBusinessIsPopular -->

<!-- DOCGEN:START getBusinessesByGroupName -->
### getBusinessesByGroupName

**Summary**: Search for businesses by business group name

**Description**: Retrieves businesses whose business group names contain the given search term, case-insensitively.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessesByGroupName )

<!-- DOCGEN:END getBusinessesByGroupName -->

<!-- DOCGEN:START getBusinessesByNameSearch -->
### getBusinessesByNameSearch

**Summary**: Search for businesses by name

**Description**: Retrieves businesses whose names contain the given search term, case-insensitively.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessesByNameSearch )

<!-- DOCGEN:END getBusinessesByNameSearch -->

<!-- DOCGEN:START addBusinessAddress -->
### addBusinessAddress

**Summary**: Add an address to a business

**Description**: Adds an address to a specific business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addBusinessAddress )

<!-- DOCGEN:END addBusinessAddress -->

<!-- DOCGEN:START addDeliveryAddress -->
### addDeliveryAddress

**Summary**: Add a delivery address to a business

**Description**: Adds a delivery address to a specific business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addDeliveryAddress )

<!-- DOCGEN:END addDeliveryAddress -->

<!-- DOCGEN:START updateParentBusinessId -->
### updateParentBusinessId

**Summary**: Update parent business

**Description**: Updates the parent business of a specific business by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateParentBusiness )

<!-- DOCGEN:END updateParentBusinessId -->

<!-- DOCGEN:START updateBusinessAddress -->
### updateBusinessAddress

**Summary**: Updates a business's address

**Description**: This endpoint is used to update a business's primary address.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessAddress )

<!-- DOCGEN:END updateBusinessAddress -->

<!-- DOCGEN:START updateBusinessDeliveryAddress -->
### updateBusinessDeliveryAddress

**Summary**: Updates a business's delivery address

**Description**: This endpoint is used to update a business's delivery address.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessDeliveryAddress )

<!-- DOCGEN:END updateBusinessDeliveryAddress -->

<!-- DOCGEN:START deleteBusiness -->
### deleteBusiness

**Summary**: Delete a business

**Description**: Deletes a business by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deleteBusiness )

<!-- DOCGEN:END deleteBusiness -->

<!-- DOCGEN:START removeParentBusinessId -->
### removeParentBusinessId

**Summary**: Remove a child business from its parent

**Description**: Clears the parent business association for a given child business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/removeChildBusiness )

<!-- DOCGEN:END removeParentBusinessId -->

<!-- DOCGEN:START reviewBusiness -->
### reviewBusiness

**Summary**: Review a business

**Description**: This endpoint is used add a review of business.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/reviewBusiness )

<!-- DOCGEN:END reviewBusiness -->

<!-- DOCGEN:START confirmBusinessReview -->
### confirmBusinessReview

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END confirmBusinessReview -->

<!-- DOCGEN:START createPaymentIntent -->
### createPaymentIntent

**Summary**: Create a payment intent

**Description**: This endpoint is used to create a payment intent.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createPaymentIntent )

<!-- DOCGEN:END createPaymentIntent -->

<!-- DOCGEN:START manualSortScheduledUsers -->
### manualSortScheduledUsers

**Summary**: Manually sort scheduled users

**Description**: This endpoint is used to manually sort scheduled users.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/manualSortScheduledUsers )

<!-- DOCGEN:END manualSortScheduledUsers -->

<!-- DOCGEN:START addScheduledUserSortingType -->
### addScheduledUserSortingType

**Summary**: Add sorting type for scheduled users

**Description**: This endpoint is used to add the sorting type for scheduled users.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addScheduledUserSortingType )

<!-- DOCGEN:END addScheduledUserSortingType -->

<!-- DOCGEN:START getBusinessEarnings -->
### getBusinessEarnings

**Summary**: Get earnings for a specific business

**Description**: Retrieves earnings data for a specific business based on the provided business ID and date range.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Responses:**
- 200
- 400
- 404

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`
- ⚠️ Could not parse: `404.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessEarnings )

<!-- DOCGEN:END getBusinessEarnings -->

<!-- DOCGEN:START getAllBusinessesEarnings -->
### getAllBusinessesEarnings

**Summary**: Get earnings for all businesses

**Description**: Retrieves earnings data for all businesses of type MERCHANT based on the provided date range.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAllBusinessesEarnings )

<!-- DOCGEN:END getAllBusinessesEarnings -->

<!-- DOCGEN:START getTotalEarnings -->
### getTotalEarnings

**Summary**: Get total earnings for completed delivery orders

**Description**: Retrieves the total earnings from all completed delivery orders.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getTotalEarnings )

<!-- DOCGEN:END getTotalEarnings -->

<!-- DOCGEN:START getBusinessTotalEarnings -->
### getBusinessTotalEarnings

**Summary**: Get total earnings for a specific business

**Description**: Retrieves the total earnings of a specific business based on completed orders.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessTotalEarnings )

<!-- DOCGEN:END getBusinessTotalEarnings -->

<!-- DOCGEN:START getBusinessReviewsById -->
### getBusinessReviewsById

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getBusinessReviewsById -->

<!-- DOCGEN:START editBusiness -->
### editBusiness

**Summary**: Edit business details

**Description**: This endpoint is used to update multiple details of a business, including address, delivery address, finances, and other specific data.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/editBusiness )

<!-- DOCGEN:END editBusiness -->

<!-- DOCGEN:START getBusinessStripeStatusByBusinessId -->
### getBusinessStripeStatusByBusinessId

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getBusinessStripeStatusByBusinessId -->

<!-- DOCGEN:START generateBusinessStripeByBusinessId -->
### generateBusinessStripeByBusinessId

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END generateBusinessStripeByBusinessId -->

<!-- DOCGEN:START onboardingEnd -->
### onboardingEnd

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END onboardingEnd -->

<!-- DOCGEN:START getBusynessFactorsBusinessIdList -->
### getBusynessFactorsBusinessIdList

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getBusynessFactorsBusinessIdList -->

<!-- DOCGEN:START addBusinessToFavorites -->
### addBusinessToFavorites

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END addBusinessToFavorites -->

<!-- DOCGEN:START removeBusinessFromFavorites -->
### removeBusinessFromFavorites

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END removeBusinessFromFavorites -->

<!-- DOCGEN:START getFavoriteBusinesses -->
### getFavoriteBusinesses

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getFavoriteBusinesses -->

<!-- DOCGEN:START getScheduledUsersByBusinessId -->
### getScheduledUsersByBusinessId

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getScheduledUsersByBusinessId -->

<!-- DOCGEN:START createScoringPointsHandler -->
### createScoringPointsHandler

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END createScoringPointsHandler -->

<!-- DOCGEN:START getPurchaseOrderLimit -->
### getPurchaseOrderLimit

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getPurchaseOrderLimit -->

<!-- DOCGEN:START activateBusiness -->
### activateBusiness

**Summary**: Activate a business

**Description**: Activates a business.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/activateBusiness )

<!-- DOCGEN:END activateBusiness -->

<!-- DOCGEN:START deactivateBusiness -->
### deactivateBusiness

**Summary**: Deactivate a business

**Description**: Deactivates a business.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deactivateBusiness )

<!-- DOCGEN:END deactivateBusiness -->

<!-- DOCGEN:START listBusinesses -->
### listBusinesses

**Summary**: Get a list of businesses

**Description**: Returns a list of businesses.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinesses )

<!-- DOCGEN:END listBusinesses -->

<!-- DOCGEN:START getBusinessesByIds -->
### getBusinessesByIds

**Summary**: Get a list of businesses business_ids

**Description**: Returns a list of businesses.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessesByIds )

<!-- DOCGEN:END getBusinessesByIds -->

<!-- DOCGEN:START searchBusinesses -->
### searchBusinesses

**Summary**: Get a list of businesses by query, location and categories

**Description**: Returns a list of businesses.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessesSearch )

<!-- DOCGEN:END searchBusinesses -->

<!-- DOCGEN:START listMerchantBusinesses -->
### listMerchantBusinesses

**Summary**: List all merchant businesses

**Description**: Retrieves a list of all businesses classified as merchants.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listMerchantBusinesses )

<!-- DOCGEN:END listMerchantBusinesses -->

<!-- DOCGEN:START listPromoSectionsWithMerchants -->
### listPromoSectionsWithMerchants

**Summary**: List all merchant businesses grouped by promoSections

**Description**: Retrieves a list of all businesses classified as merchants.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listMerchantBusinesses )

<!-- DOCGEN:END listPromoSectionsWithMerchants -->

<!-- DOCGEN:START listMerchantBusinessesWithDailyMeals -->
### listMerchantBusinessesWithDailyMeals

**Summary**: List all merchant businesses offering daily meals

**Description**: Retrieves a list of all businesses classified as merchants that offer daily meals.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listMerchantBusinessesWithDailyMeals )

<!-- DOCGEN:END listMerchantBusinessesWithDailyMeals -->

<!-- DOCGEN:START listMerchantBusinessesMainInfo -->
### listMerchantBusinessesMainInfo

**Summary**: List all merchant businesses offering daily meals

**Description**: Retrieves a list of all businesses classified as merchants that offer daily meals.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listMerchantBusinessesWithDailyMeals )

<!-- DOCGEN:END listMerchantBusinessesMainInfo -->

<!-- DOCGEN:START listTransferBusinessesMainInfo -->
### listTransferBusinessesMainInfo

**Summary**: List all transfer businesses (main info only)

**Description**: Retrieves a list of all transfer businesses

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listTransferBusinessesMainInfo )

<!-- DOCGEN:END listTransferBusinessesMainInfo -->

<!-- DOCGEN:START listTransferBusinesses -->
### listTransferBusinesses

**Summary**: List all taxi businesses

**Description**: Retrieves a list of all businesses classified as taxis (TRANSFER).

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listTaxiBusinesses )

<!-- DOCGEN:END listTransferBusinesses -->

<!-- DOCGEN:START getBusinessById -->
### getBusinessById

**Summary**: Get a business by ID

**Description**: Retrieves detailed information about a specific business by its ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessById )

<!-- DOCGEN:END getBusinessById -->

<!-- DOCGEN:START getBusinessAdminDataById -->
### getBusinessAdminDataById

**Summary**: Get a business by ID including admin data

**Description**: Retrieves detailed information about a specific business by its ID, including data an admin can see.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessAdminDataById )

<!-- DOCGEN:END getBusinessAdminDataById -->

<!-- DOCGEN:START getBusinessForSearchById -->
### getBusinessForSearchById

**Summary**: Get a business for search by ID

**Description**: Retrieves detailed information about a specific business by its ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessForSearchById )

<!-- DOCGEN:END getBusinessForSearchById -->

<!-- DOCGEN:START getParentBusiness -->
### getParentBusiness

**Summary**: Get parent business

**Description**: Retrieves the parent business of a specific business by its ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getParentBusiness )

<!-- DOCGEN:END getParentBusiness -->

<!-- DOCGEN:START getChildBusinesses -->
### getChildBusinesses

**Summary**: List child businesses

**Description**: Retrieves a list of child businesses for a specific parent business ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | parent_business_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getChildBusinesses )

<!-- DOCGEN:END getChildBusinesses -->

<!-- DOCGEN:START createNewBusiness -->
### createNewBusiness

**Summary**: Create a new business

**Description**: Creates a new business with the provided details.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewBusiness )

<!-- DOCGEN:END createNewBusiness -->

<!-- DOCGEN:START update -->
### update

**Summary**: Updates the business details

**Description**: This endpoint is used to update the business details.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | businessId |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusiness )

<!-- DOCGEN:END update -->

<!-- DOCGEN:START updateBusinessType -->
### updateBusinessType

**Summary**: Updates a business's type

**Description**: This endpoint is used to update a business's type.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessType )

<!-- DOCGEN:END updateBusinessType -->

<!-- DOCGEN:START updateIsBusinessUnit -->
### updateIsBusinessUnit

**Summary**: Updates the business unit status

**Description**: This endpoint is used to update whether a business is considered a business unit.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateIsBusinessUnit )

<!-- DOCGEN:END updateIsBusinessUnit -->

<!-- DOCGEN:START updateBusinessGroupName -->
### updateBusinessGroupName

**Summary**: Updates a business's group name

**Description**: This endpoint is used to update a business's group name.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessGroupName )

<!-- DOCGEN:END updateBusinessGroupName -->

<!-- DOCGEN:START updateBusinessEmail -->
### updateBusinessEmail

**Summary**: Updates a business's email

**Description**: This endpoint is used to update a business's email address.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessEmail )

<!-- DOCGEN:END updateBusinessEmail -->

<!-- DOCGEN:START updateBusinessTelephone -->
### updateBusinessTelephone

**Summary**: Updates a business's telephone

**Description**: This endpoint is used to update a business's telephone number.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessTelephone )

<!-- DOCGEN:END updateBusinessTelephone -->

<!-- DOCGEN:START updateBusinessWorkingHours -->
### updateBusinessWorkingHours

**Summary**: Updates a business's working hours

**Description**: This endpoint is used to update a business's working hours.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessWorkingHours )

<!-- DOCGEN:END updateBusinessWorkingHours -->

<!-- DOCGEN:START updateRestaurantOverwhelmed -->
### updateRestaurantOverwhelmed

**Summary**: Updates the overwhelmed status of a restaurant

**Description**: This endpoint is used to update whether a restaurant is considered overwhelmed.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (optional)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateRestaurantOverwhelmed )

<!-- DOCGEN:END updateRestaurantOverwhelmed -->

<!-- DOCGEN:START updateBusinessIsNew -->
### updateBusinessIsNew

**Summary**: Updates the new status of a business

**Description**: This endpoint is used to update whether a business is considered new.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessIsNew )

<!-- DOCGEN:END updateBusinessIsNew -->

<!-- DOCGEN:START updateBusinessIsPopular -->
### updateBusinessIsPopular

**Summary**: Updates the popularity status of a business

**Description**: This endpoint is used to update whether a business is considered popular.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessIsPopular )

<!-- DOCGEN:END updateBusinessIsPopular -->

<!-- DOCGEN:START getBusinessesByGroupName -->
### getBusinessesByGroupName

**Summary**: Search for businesses by business group name

**Description**: Retrieves businesses whose business group names contain the given search term, case-insensitively.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessesByGroupName )

<!-- DOCGEN:END getBusinessesByGroupName -->

<!-- DOCGEN:START getBusinessesByNameSearch -->
### getBusinessesByNameSearch

**Summary**: Search for businesses by name

**Description**: Retrieves businesses whose names contain the given search term, case-insensitively.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessesByNameSearch )

<!-- DOCGEN:END getBusinessesByNameSearch -->

<!-- DOCGEN:START addBusinessAddress -->
### addBusinessAddress

**Summary**: Add an address to a business

**Description**: Adds an address to a specific business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addBusinessAddress )

<!-- DOCGEN:END addBusinessAddress -->

<!-- DOCGEN:START addDeliveryAddress -->
### addDeliveryAddress

**Summary**: Add a delivery address to a business

**Description**: Adds a delivery address to a specific business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addDeliveryAddress )

<!-- DOCGEN:END addDeliveryAddress -->

<!-- DOCGEN:START updateParentBusinessId -->
### updateParentBusinessId

**Summary**: Update parent business

**Description**: Updates the parent business of a specific business by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateParentBusiness )

<!-- DOCGEN:END updateParentBusinessId -->

<!-- DOCGEN:START updateBusinessAddress -->
### updateBusinessAddress

**Summary**: Updates a business's address

**Description**: This endpoint is used to update a business's primary address.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessAddress )

<!-- DOCGEN:END updateBusinessAddress -->

<!-- DOCGEN:START updateBusinessDeliveryAddress -->
### updateBusinessDeliveryAddress

**Summary**: Updates a business's delivery address

**Description**: This endpoint is used to update a business's delivery address.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessDeliveryAddress )

<!-- DOCGEN:END updateBusinessDeliveryAddress -->

<!-- DOCGEN:START deleteBusiness -->
### deleteBusiness

**Summary**: Delete a business

**Description**: Deletes a business by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deleteBusiness )

<!-- DOCGEN:END deleteBusiness -->

<!-- DOCGEN:START removeParentBusinessId -->
### removeParentBusinessId

**Summary**: Remove a child business from its parent

**Description**: Clears the parent business association for a given child business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/removeChildBusiness )

<!-- DOCGEN:END removeParentBusinessId -->

<!-- DOCGEN:START reviewBusiness -->
### reviewBusiness

**Summary**: Review a business

**Description**: This endpoint is used add a review of business.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/reviewBusiness )

<!-- DOCGEN:END reviewBusiness -->

<!-- DOCGEN:START confirmBusinessReview -->
### confirmBusinessReview

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END confirmBusinessReview -->

<!-- DOCGEN:START createPaymentIntent -->
### createPaymentIntent

**Summary**: Create a payment intent

**Description**: This endpoint is used to create a payment intent.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createPaymentIntent )

<!-- DOCGEN:END createPaymentIntent -->

<!-- DOCGEN:START manualSortScheduledUsers -->
### manualSortScheduledUsers

**Summary**: Manually sort scheduled users

**Description**: This endpoint is used to manually sort scheduled users.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/manualSortScheduledUsers )

<!-- DOCGEN:END manualSortScheduledUsers -->

<!-- DOCGEN:START addScheduledUserSortingType -->
### addScheduledUserSortingType

**Summary**: Add sorting type for scheduled users

**Description**: This endpoint is used to add the sorting type for scheduled users.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addScheduledUserSortingType )

<!-- DOCGEN:END addScheduledUserSortingType -->

<!-- DOCGEN:START getBusinessEarnings -->
### getBusinessEarnings

**Summary**: Get earnings for a specific business

**Description**: Retrieves earnings data for a specific business based on the provided business ID and date range.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Responses:**
- 200
- 400
- 404

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`
- ⚠️ Could not parse: `404.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessEarnings )

<!-- DOCGEN:END getBusinessEarnings -->

<!-- DOCGEN:START getAllBusinessesEarnings -->
### getAllBusinessesEarnings

**Summary**: Get earnings for all businesses

**Description**: Retrieves earnings data for all businesses of type MERCHANT based on the provided date range.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAllBusinessesEarnings )

<!-- DOCGEN:END getAllBusinessesEarnings -->

<!-- DOCGEN:START getTotalEarnings -->
### getTotalEarnings

**Summary**: Get total earnings for completed delivery orders

**Description**: Retrieves the total earnings from all completed delivery orders.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getTotalEarnings )

<!-- DOCGEN:END getTotalEarnings -->

<!-- DOCGEN:START getBusinessTotalEarnings -->
### getBusinessTotalEarnings

**Summary**: Get total earnings for a specific business

**Description**: Retrieves the total earnings of a specific business based on completed orders.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessTotalEarnings )

<!-- DOCGEN:END getBusinessTotalEarnings -->

<!-- DOCGEN:START getBusinessReviewsById -->
### getBusinessReviewsById

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getBusinessReviewsById -->

<!-- DOCGEN:START editBusiness -->
### editBusiness

**Summary**: Edit business details

**Description**: This endpoint is used to update multiple details of a business, including address, delivery address, finances, and other specific data.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/editBusiness )

<!-- DOCGEN:END editBusiness -->

<!-- DOCGEN:START getBusinessStripeStatusByBusinessId -->
### getBusinessStripeStatusByBusinessId

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getBusinessStripeStatusByBusinessId -->

<!-- DOCGEN:START generateBusinessStripeByBusinessId -->
### generateBusinessStripeByBusinessId

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END generateBusinessStripeByBusinessId -->

<!-- DOCGEN:START onboardingEnd -->
### onboardingEnd

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END onboardingEnd -->

<!-- DOCGEN:START getBusynessFactorsBusinessIdList -->
### getBusynessFactorsBusinessIdList

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getBusynessFactorsBusinessIdList -->

<!-- DOCGEN:START addBusinessToFavorites -->
### addBusinessToFavorites

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END addBusinessToFavorites -->

<!-- DOCGEN:START removeBusinessFromFavorites -->
### removeBusinessFromFavorites

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END removeBusinessFromFavorites -->

<!-- DOCGEN:START getFavoriteBusinesses -->
### getFavoriteBusinesses

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getFavoriteBusinesses -->

<!-- DOCGEN:START getScheduledUsersByBusinessId -->
### getScheduledUsersByBusinessId

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getScheduledUsersByBusinessId -->

<!-- DOCGEN:START createScoringPointsHandler -->
### createScoringPointsHandler

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END createScoringPointsHandler -->

<!-- DOCGEN:START getPurchaseOrderLimit -->
### getPurchaseOrderLimit

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getPurchaseOrderLimit -->

<!-- DOCGEN:START activateBusiness -->
### activateBusiness

**Summary**: Activate a business

**Description**: Activates a business.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/activateBusiness )

<!-- DOCGEN:END activateBusiness -->

<!-- DOCGEN:START deactivateBusiness -->
### deactivateBusiness

**Summary**: Deactivate a business

**Description**: Deactivates a business.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deactivateBusiness )

<!-- DOCGEN:END deactivateBusiness -->

<!-- DOCGEN:START listBusinesses -->
### listBusinesses

**Summary**: Get a list of businesses

**Description**: Returns a list of businesses.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinesses )

<!-- DOCGEN:END listBusinesses -->

<!-- DOCGEN:START getBusinessesByIds -->
### getBusinessesByIds

**Summary**: Get a list of businesses business_ids

**Description**: Returns a list of businesses.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessesByIds )

<!-- DOCGEN:END getBusinessesByIds -->

<!-- DOCGEN:START searchBusinesses -->
### searchBusinesses

**Summary**: Get a list of businesses by query, location and categories

**Description**: Returns a list of businesses.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessesSearch )

<!-- DOCGEN:END searchBusinesses -->

<!-- DOCGEN:START listMerchantBusinesses -->
### listMerchantBusinesses

**Summary**: List all merchant businesses

**Description**: Retrieves a list of all businesses classified as merchants.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listMerchantBusinesses )

<!-- DOCGEN:END listMerchantBusinesses -->

<!-- DOCGEN:START listPromoSectionsWithMerchants -->
### listPromoSectionsWithMerchants

**Summary**: List all merchant businesses grouped by promoSections

**Description**: Retrieves a list of all businesses classified as merchants.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listMerchantBusinesses )

<!-- DOCGEN:END listPromoSectionsWithMerchants -->

<!-- DOCGEN:START listMerchantBusinessesWithDailyMeals -->
### listMerchantBusinessesWithDailyMeals

**Summary**: List all merchant businesses offering daily meals

**Description**: Retrieves a list of all businesses classified as merchants that offer daily meals.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listMerchantBusinessesWithDailyMeals )

<!-- DOCGEN:END listMerchantBusinessesWithDailyMeals -->

<!-- DOCGEN:START listMerchantBusinessesMainInfo -->
### listMerchantBusinessesMainInfo

**Summary**: List all merchant businesses offering daily meals

**Description**: Retrieves a list of all businesses classified as merchants that offer daily meals.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listMerchantBusinessesWithDailyMeals )

<!-- DOCGEN:END listMerchantBusinessesMainInfo -->

<!-- DOCGEN:START listTransferBusinessesMainInfo -->
### listTransferBusinessesMainInfo

**Summary**: List all transfer businesses (main info only)

**Description**: Retrieves a list of all transfer businesses

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listTransferBusinessesMainInfo )

<!-- DOCGEN:END listTransferBusinessesMainInfo -->

<!-- DOCGEN:START listTransferBusinesses -->
### listTransferBusinesses

**Summary**: List all taxi businesses

**Description**: Retrieves a list of all businesses classified as taxis (TRANSFER).

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listTaxiBusinesses )

<!-- DOCGEN:END listTransferBusinesses -->

<!-- DOCGEN:START getBusinessById -->
### getBusinessById

**Summary**: Get a business by ID

**Description**: Retrieves detailed information about a specific business by its ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessById )

<!-- DOCGEN:END getBusinessById -->

<!-- DOCGEN:START getBusinessAdminDataById -->
### getBusinessAdminDataById

**Summary**: Get a business by ID including admin data

**Description**: Retrieves detailed information about a specific business by its ID, including data an admin can see.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessAdminDataById )

<!-- DOCGEN:END getBusinessAdminDataById -->

<!-- DOCGEN:START getBusinessForSearchById -->
### getBusinessForSearchById

**Summary**: Get a business for search by ID

**Description**: Retrieves detailed information about a specific business by its ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessForSearchById )

<!-- DOCGEN:END getBusinessForSearchById -->

<!-- DOCGEN:START getParentBusiness -->
### getParentBusiness

**Summary**: Get parent business

**Description**: Retrieves the parent business of a specific business by its ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getParentBusiness )

<!-- DOCGEN:END getParentBusiness -->

<!-- DOCGEN:START getChildBusinesses -->
### getChildBusinesses

**Summary**: List child businesses

**Description**: Retrieves a list of child businesses for a specific parent business ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | parent_business_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getChildBusinesses )

<!-- DOCGEN:END getChildBusinesses -->

<!-- DOCGEN:START createNewBusiness -->
### createNewBusiness

**Summary**: Create a new business

**Description**: Creates a new business with the provided details.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewBusiness )

<!-- DOCGEN:END createNewBusiness -->

<!-- DOCGEN:START update -->
### update

**Summary**: Updates the business details

**Description**: This endpoint is used to update the business details.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | businessId |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusiness )

<!-- DOCGEN:END update -->

<!-- DOCGEN:START updateBusinessType -->
### updateBusinessType

**Summary**: Updates a business's type

**Description**: This endpoint is used to update a business's type.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessType )

<!-- DOCGEN:END updateBusinessType -->

<!-- DOCGEN:START updateIsBusinessUnit -->
### updateIsBusinessUnit

**Summary**: Updates the business unit status

**Description**: This endpoint is used to update whether a business is considered a business unit.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateIsBusinessUnit )

<!-- DOCGEN:END updateIsBusinessUnit -->

<!-- DOCGEN:START updateBusinessGroupName -->
### updateBusinessGroupName

**Summary**: Updates a business's group name

**Description**: This endpoint is used to update a business's group name.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessGroupName )

<!-- DOCGEN:END updateBusinessGroupName -->

<!-- DOCGEN:START updateBusinessEmail -->
### updateBusinessEmail

**Summary**: Updates a business's email

**Description**: This endpoint is used to update a business's email address.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessEmail )

<!-- DOCGEN:END updateBusinessEmail -->

<!-- DOCGEN:START updateBusinessTelephone -->
### updateBusinessTelephone

**Summary**: Updates a business's telephone

**Description**: This endpoint is used to update a business's telephone number.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessTelephone )

<!-- DOCGEN:END updateBusinessTelephone -->

<!-- DOCGEN:START updateBusinessWorkingHours -->
### updateBusinessWorkingHours

**Summary**: Updates a business's working hours

**Description**: This endpoint is used to update a business's working hours.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessWorkingHours )

<!-- DOCGEN:END updateBusinessWorkingHours -->

<!-- DOCGEN:START updateRestaurantOverwhelmed -->
### updateRestaurantOverwhelmed

**Summary**: Updates the overwhelmed status of a restaurant

**Description**: This endpoint is used to update whether a restaurant is considered overwhelmed.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (optional)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateRestaurantOverwhelmed )

<!-- DOCGEN:END updateRestaurantOverwhelmed -->

<!-- DOCGEN:START updateBusinessIsNew -->
### updateBusinessIsNew

**Summary**: Updates the new status of a business

**Description**: This endpoint is used to update whether a business is considered new.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessIsNew )

<!-- DOCGEN:END updateBusinessIsNew -->

<!-- DOCGEN:START updateBusinessIsPopular -->
### updateBusinessIsPopular

**Summary**: Updates the popularity status of a business

**Description**: This endpoint is used to update whether a business is considered popular.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessIsPopular )

<!-- DOCGEN:END updateBusinessIsPopular -->

<!-- DOCGEN:START getBusinessesByGroupName -->
### getBusinessesByGroupName

**Summary**: Search for businesses by business group name

**Description**: Retrieves businesses whose business group names contain the given search term, case-insensitively.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessesByGroupName )

<!-- DOCGEN:END getBusinessesByGroupName -->

<!-- DOCGEN:START getBusinessesByNameSearch -->
### getBusinessesByNameSearch

**Summary**: Search for businesses by name

**Description**: Retrieves businesses whose names contain the given search term, case-insensitively.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessesByNameSearch )

<!-- DOCGEN:END getBusinessesByNameSearch -->

<!-- DOCGEN:START addBusinessAddress -->
### addBusinessAddress

**Summary**: Add an address to a business

**Description**: Adds an address to a specific business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addBusinessAddress )

<!-- DOCGEN:END addBusinessAddress -->

<!-- DOCGEN:START addDeliveryAddress -->
### addDeliveryAddress

**Summary**: Add a delivery address to a business

**Description**: Adds a delivery address to a specific business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addDeliveryAddress )

<!-- DOCGEN:END addDeliveryAddress -->

<!-- DOCGEN:START updateParentBusinessId -->
### updateParentBusinessId

**Summary**: Update parent business

**Description**: Updates the parent business of a specific business by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateParentBusiness )

<!-- DOCGEN:END updateParentBusinessId -->

<!-- DOCGEN:START updateBusinessAddress -->
### updateBusinessAddress

**Summary**: Updates a business's address

**Description**: This endpoint is used to update a business's primary address.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessAddress )

<!-- DOCGEN:END updateBusinessAddress -->

<!-- DOCGEN:START updateBusinessDeliveryAddress -->
### updateBusinessDeliveryAddress

**Summary**: Updates a business's delivery address

**Description**: This endpoint is used to update a business's delivery address.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessDeliveryAddress )

<!-- DOCGEN:END updateBusinessDeliveryAddress -->

<!-- DOCGEN:START deleteBusiness -->
### deleteBusiness

**Summary**: Delete a business

**Description**: Deletes a business by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deleteBusiness )

<!-- DOCGEN:END deleteBusiness -->

<!-- DOCGEN:START removeParentBusinessId -->
### removeParentBusinessId

**Summary**: Remove a child business from its parent

**Description**: Clears the parent business association for a given child business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/removeChildBusiness )

<!-- DOCGEN:END removeParentBusinessId -->

<!-- DOCGEN:START reviewBusiness -->
### reviewBusiness

**Summary**: Review a business

**Description**: This endpoint is used add a review of business.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/reviewBusiness )

<!-- DOCGEN:END reviewBusiness -->

<!-- DOCGEN:START confirmBusinessReview -->
### confirmBusinessReview

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END confirmBusinessReview -->

<!-- DOCGEN:START createPaymentIntent -->
### createPaymentIntent

**Summary**: Create a payment intent

**Description**: This endpoint is used to create a payment intent.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createPaymentIntent )

<!-- DOCGEN:END createPaymentIntent -->

<!-- DOCGEN:START manualSortScheduledUsers -->
### manualSortScheduledUsers

**Summary**: Manually sort scheduled users

**Description**: This endpoint is used to manually sort scheduled users.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/manualSortScheduledUsers )

<!-- DOCGEN:END manualSortScheduledUsers -->

<!-- DOCGEN:START addScheduledUserSortingType -->
### addScheduledUserSortingType

**Summary**: Add sorting type for scheduled users

**Description**: This endpoint is used to add the sorting type for scheduled users.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addScheduledUserSortingType )

<!-- DOCGEN:END addScheduledUserSortingType -->

<!-- DOCGEN:START getBusinessEarnings -->
### getBusinessEarnings

**Summary**: Get earnings for a specific business

**Description**: Retrieves earnings data for a specific business based on the provided business ID and date range.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Responses:**
- 200
- 400
- 404

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`
- ⚠️ Could not parse: `404.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessEarnings )

<!-- DOCGEN:END getBusinessEarnings -->

<!-- DOCGEN:START getAllBusinessesEarnings -->
### getAllBusinessesEarnings

**Summary**: Get earnings for all businesses

**Description**: Retrieves earnings data for all businesses of type MERCHANT based on the provided date range.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAllBusinessesEarnings )

<!-- DOCGEN:END getAllBusinessesEarnings -->

<!-- DOCGEN:START getTotalEarnings -->
### getTotalEarnings

**Summary**: Get total earnings for completed delivery orders

**Description**: Retrieves the total earnings from all completed delivery orders.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getTotalEarnings )

<!-- DOCGEN:END getTotalEarnings -->

<!-- DOCGEN:START getBusinessTotalEarnings -->
### getBusinessTotalEarnings

**Summary**: Get total earnings for a specific business

**Description**: Retrieves the total earnings of a specific business based on completed orders.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessTotalEarnings )

<!-- DOCGEN:END getBusinessTotalEarnings -->

<!-- DOCGEN:START getBusinessReviewsById -->
### getBusinessReviewsById

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getBusinessReviewsById -->

<!-- DOCGEN:START editBusiness -->
### editBusiness

**Summary**: Edit business details

**Description**: This endpoint is used to update multiple details of a business, including address, delivery address, finances, and other specific data.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/editBusiness )

<!-- DOCGEN:END editBusiness -->

<!-- DOCGEN:START getBusinessStripeStatusByBusinessId -->
### getBusinessStripeStatusByBusinessId

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getBusinessStripeStatusByBusinessId -->

<!-- DOCGEN:START generateBusinessStripeByBusinessId -->
### generateBusinessStripeByBusinessId

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END generateBusinessStripeByBusinessId -->

<!-- DOCGEN:START onboardingEnd -->
### onboardingEnd

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END onboardingEnd -->

<!-- DOCGEN:START getBusynessFactorsBusinessIdList -->
### getBusynessFactorsBusinessIdList

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getBusynessFactorsBusinessIdList -->

<!-- DOCGEN:START addBusinessToFavorites -->
### addBusinessToFavorites

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END addBusinessToFavorites -->

<!-- DOCGEN:START removeBusinessFromFavorites -->
### removeBusinessFromFavorites

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END removeBusinessFromFavorites -->

<!-- DOCGEN:START getFavoriteBusinesses -->
### getFavoriteBusinesses

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getFavoriteBusinesses -->

<!-- DOCGEN:START getScheduledUsersByBusinessId -->
### getScheduledUsersByBusinessId

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getScheduledUsersByBusinessId -->

<!-- DOCGEN:START createScoringPointsHandler -->
### createScoringPointsHandler

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END createScoringPointsHandler -->

<!-- DOCGEN:START getPurchaseOrderLimit -->
### getPurchaseOrderLimit

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getPurchaseOrderLimit -->

<!-- DOCGEN:START activateBusiness -->
### activateBusiness

**Summary**: Activate a business

**Description**: Activates a business.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/activateBusiness )

<!-- DOCGEN:END activateBusiness -->

<!-- DOCGEN:START deactivateBusiness -->
### deactivateBusiness

**Summary**: Deactivate a business

**Description**: Deactivates a business.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deactivateBusiness )

<!-- DOCGEN:END deactivateBusiness -->

<!-- DOCGEN:START listBusinesses -->
### listBusinesses

**Summary**: Get a list of businesses

**Description**: Returns a list of businesses.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinesses )

<!-- DOCGEN:END listBusinesses -->

<!-- DOCGEN:START getBusinessesByIds -->
### getBusinessesByIds

**Summary**: Get a list of businesses business_ids

**Description**: Returns a list of businesses.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessesByIds )

<!-- DOCGEN:END getBusinessesByIds -->

<!-- DOCGEN:START searchBusinesses -->
### searchBusinesses

**Summary**: Get a list of businesses by query, location and categories

**Description**: Returns a list of businesses.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessesSearch )

<!-- DOCGEN:END searchBusinesses -->

<!-- DOCGEN:START listMerchantBusinesses -->
### listMerchantBusinesses

**Summary**: List all merchant businesses

**Description**: Retrieves a list of all businesses classified as merchants.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listMerchantBusinesses )

<!-- DOCGEN:END listMerchantBusinesses -->

<!-- DOCGEN:START listPromoSectionsWithMerchants -->
### listPromoSectionsWithMerchants

**Summary**: List all merchant businesses grouped by promoSections

**Description**: Retrieves a list of all businesses classified as merchants.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listMerchantBusinesses )

<!-- DOCGEN:END listPromoSectionsWithMerchants -->

<!-- DOCGEN:START listMerchantBusinessesWithDailyMeals -->
### listMerchantBusinessesWithDailyMeals

**Summary**: List all merchant businesses offering daily meals

**Description**: Retrieves a list of all businesses classified as merchants that offer daily meals.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listMerchantBusinessesWithDailyMeals )

<!-- DOCGEN:END listMerchantBusinessesWithDailyMeals -->

<!-- DOCGEN:START listMerchantBusinessesMainInfo -->
### listMerchantBusinessesMainInfo

**Summary**: List all merchant businesses offering daily meals

**Description**: Retrieves a list of all businesses classified as merchants that offer daily meals.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listMerchantBusinessesWithDailyMeals )

<!-- DOCGEN:END listMerchantBusinessesMainInfo -->

<!-- DOCGEN:START listTransferBusinessesMainInfo -->
### listTransferBusinessesMainInfo

**Summary**: List all transfer businesses (main info only)

**Description**: Retrieves a list of all transfer businesses

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listTransferBusinessesMainInfo )

<!-- DOCGEN:END listTransferBusinessesMainInfo -->

<!-- DOCGEN:START listTransferBusinesses -->
### listTransferBusinesses

**Summary**: List all taxi businesses

**Description**: Retrieves a list of all businesses classified as taxis (TRANSFER).

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listTaxiBusinesses )

<!-- DOCGEN:END listTransferBusinesses -->

<!-- DOCGEN:START getBusinessById -->
### getBusinessById

**Summary**: Get a business by ID

**Description**: Retrieves detailed information about a specific business by its ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessById )

<!-- DOCGEN:END getBusinessById -->

<!-- DOCGEN:START getBusinessAdminDataById -->
### getBusinessAdminDataById

**Summary**: Get a business by ID including admin data

**Description**: Retrieves detailed information about a specific business by its ID, including data an admin can see.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessAdminDataById )

<!-- DOCGEN:END getBusinessAdminDataById -->

<!-- DOCGEN:START getBusinessForSearchById -->
### getBusinessForSearchById

**Summary**: Get a business for search by ID

**Description**: Retrieves detailed information about a specific business by its ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessForSearchById )

<!-- DOCGEN:END getBusinessForSearchById -->

<!-- DOCGEN:START getParentBusiness -->
### getParentBusiness

**Summary**: Get parent business

**Description**: Retrieves the parent business of a specific business by its ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getParentBusiness )

<!-- DOCGEN:END getParentBusiness -->

<!-- DOCGEN:START getChildBusinesses -->
### getChildBusinesses

**Summary**: List child businesses

**Description**: Retrieves a list of child businesses for a specific parent business ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | parent_business_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getChildBusinesses )

<!-- DOCGEN:END getChildBusinesses -->

<!-- DOCGEN:START createNewBusiness -->
### createNewBusiness

**Summary**: Create a new business

**Description**: Creates a new business with the provided details.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewBusiness )

<!-- DOCGEN:END createNewBusiness -->

<!-- DOCGEN:START update -->
### update

**Summary**: Updates the business details

**Description**: This endpoint is used to update the business details.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | businessId |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusiness )

<!-- DOCGEN:END update -->

<!-- DOCGEN:START updateBusinessType -->
### updateBusinessType

**Summary**: Updates a business's type

**Description**: This endpoint is used to update a business's type.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessType )

<!-- DOCGEN:END updateBusinessType -->

<!-- DOCGEN:START updateIsBusinessUnit -->
### updateIsBusinessUnit

**Summary**: Updates the business unit status

**Description**: This endpoint is used to update whether a business is considered a business unit.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateIsBusinessUnit )

<!-- DOCGEN:END updateIsBusinessUnit -->

<!-- DOCGEN:START updateBusinessGroupName -->
### updateBusinessGroupName

**Summary**: Updates a business's group name

**Description**: This endpoint is used to update a business's group name.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessGroupName )

<!-- DOCGEN:END updateBusinessGroupName -->

<!-- DOCGEN:START updateBusinessEmail -->
### updateBusinessEmail

**Summary**: Updates a business's email

**Description**: This endpoint is used to update a business's email address.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessEmail )

<!-- DOCGEN:END updateBusinessEmail -->

<!-- DOCGEN:START updateBusinessTelephone -->
### updateBusinessTelephone

**Summary**: Updates a business's telephone

**Description**: This endpoint is used to update a business's telephone number.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessTelephone )

<!-- DOCGEN:END updateBusinessTelephone -->

<!-- DOCGEN:START updateBusinessWorkingHours -->
### updateBusinessWorkingHours

**Summary**: Updates a business's working hours

**Description**: This endpoint is used to update a business's working hours.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessWorkingHours )

<!-- DOCGEN:END updateBusinessWorkingHours -->

<!-- DOCGEN:START updateRestaurantOverwhelmed -->
### updateRestaurantOverwhelmed

**Summary**: Updates the overwhelmed status of a restaurant

**Description**: This endpoint is used to update whether a restaurant is considered overwhelmed.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (optional)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateRestaurantOverwhelmed )

<!-- DOCGEN:END updateRestaurantOverwhelmed -->

<!-- DOCGEN:START updateBusinessIsNew -->
### updateBusinessIsNew

**Summary**: Updates the new status of a business

**Description**: This endpoint is used to update whether a business is considered new.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessIsNew )

<!-- DOCGEN:END updateBusinessIsNew -->

<!-- DOCGEN:START updateBusinessIsPopular -->
### updateBusinessIsPopular

**Summary**: Updates the popularity status of a business

**Description**: This endpoint is used to update whether a business is considered popular.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessIsPopular )

<!-- DOCGEN:END updateBusinessIsPopular -->

<!-- DOCGEN:START getBusinessesByGroupName -->
### getBusinessesByGroupName

**Summary**: Search for businesses by business group name

**Description**: Retrieves businesses whose business group names contain the given search term, case-insensitively.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessesByGroupName )

<!-- DOCGEN:END getBusinessesByGroupName -->

<!-- DOCGEN:START getBusinessesByNameSearch -->
### getBusinessesByNameSearch

**Summary**: Search for businesses by name

**Description**: Retrieves businesses whose names contain the given search term, case-insensitively.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessesByNameSearch )

<!-- DOCGEN:END getBusinessesByNameSearch -->

<!-- DOCGEN:START addBusinessAddress -->
### addBusinessAddress

**Summary**: Add an address to a business

**Description**: Adds an address to a specific business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addBusinessAddress )

<!-- DOCGEN:END addBusinessAddress -->

<!-- DOCGEN:START addDeliveryAddress -->
### addDeliveryAddress

**Summary**: Add a delivery address to a business

**Description**: Adds a delivery address to a specific business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addDeliveryAddress )

<!-- DOCGEN:END addDeliveryAddress -->

<!-- DOCGEN:START updateParentBusinessId -->
### updateParentBusinessId

**Summary**: Update parent business

**Description**: Updates the parent business of a specific business by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateParentBusiness )

<!-- DOCGEN:END updateParentBusinessId -->

<!-- DOCGEN:START updateBusinessAddress -->
### updateBusinessAddress

**Summary**: Updates a business's address

**Description**: This endpoint is used to update a business's primary address.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessAddress )

<!-- DOCGEN:END updateBusinessAddress -->

<!-- DOCGEN:START updateBusinessDeliveryAddress -->
### updateBusinessDeliveryAddress

**Summary**: Updates a business's delivery address

**Description**: This endpoint is used to update a business's delivery address.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessDeliveryAddress )

<!-- DOCGEN:END updateBusinessDeliveryAddress -->

<!-- DOCGEN:START deleteBusiness -->
### deleteBusiness

**Summary**: Delete a business

**Description**: Deletes a business by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deleteBusiness )

<!-- DOCGEN:END deleteBusiness -->

<!-- DOCGEN:START removeParentBusinessId -->
### removeParentBusinessId

**Summary**: Remove a child business from its parent

**Description**: Clears the parent business association for a given child business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/removeChildBusiness )

<!-- DOCGEN:END removeParentBusinessId -->

<!-- DOCGEN:START reviewBusiness -->
### reviewBusiness

**Summary**: Review a business

**Description**: This endpoint is used add a review of business.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/reviewBusiness )

<!-- DOCGEN:END reviewBusiness -->

<!-- DOCGEN:START confirmBusinessReview -->
### confirmBusinessReview

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END confirmBusinessReview -->

<!-- DOCGEN:START createPaymentIntent -->
### createPaymentIntent

**Summary**: Create a payment intent

**Description**: This endpoint is used to create a payment intent.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createPaymentIntent )

<!-- DOCGEN:END createPaymentIntent -->

<!-- DOCGEN:START manualSortScheduledUsers -->
### manualSortScheduledUsers

**Summary**: Manually sort scheduled users

**Description**: This endpoint is used to manually sort scheduled users.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/manualSortScheduledUsers )

<!-- DOCGEN:END manualSortScheduledUsers -->

<!-- DOCGEN:START addScheduledUserSortingType -->
### addScheduledUserSortingType

**Summary**: Add sorting type for scheduled users

**Description**: This endpoint is used to add the sorting type for scheduled users.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addScheduledUserSortingType )

<!-- DOCGEN:END addScheduledUserSortingType -->

<!-- DOCGEN:START getBusinessEarnings -->
### getBusinessEarnings

**Summary**: Get earnings for a specific business

**Description**: Retrieves earnings data for a specific business based on the provided business ID and date range.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Responses:**
- 200
- 400
- 404

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`
- ⚠️ Could not parse: `404.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessEarnings )

<!-- DOCGEN:END getBusinessEarnings -->

<!-- DOCGEN:START getAllBusinessesEarnings -->
### getAllBusinessesEarnings

**Summary**: Get earnings for all businesses

**Description**: Retrieves earnings data for all businesses of type MERCHANT based on the provided date range.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAllBusinessesEarnings )

<!-- DOCGEN:END getAllBusinessesEarnings -->

<!-- DOCGEN:START getTotalEarnings -->
### getTotalEarnings

**Summary**: Get total earnings for completed delivery orders

**Description**: Retrieves the total earnings from all completed delivery orders.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getTotalEarnings )

<!-- DOCGEN:END getTotalEarnings -->

<!-- DOCGEN:START getBusinessTotalEarnings -->
### getBusinessTotalEarnings

**Summary**: Get total earnings for a specific business

**Description**: Retrieves the total earnings of a specific business based on completed orders.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessTotalEarnings )

<!-- DOCGEN:END getBusinessTotalEarnings -->

<!-- DOCGEN:START getBusinessReviewsById -->
### getBusinessReviewsById

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getBusinessReviewsById -->

<!-- DOCGEN:START editBusiness -->
### editBusiness

**Summary**: Edit business details

**Description**: This endpoint is used to update multiple details of a business, including address, delivery address, finances, and other specific data.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/editBusiness )

<!-- DOCGEN:END editBusiness -->

<!-- DOCGEN:START getBusinessStripeStatusByBusinessId -->
### getBusinessStripeStatusByBusinessId

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getBusinessStripeStatusByBusinessId -->

<!-- DOCGEN:START generateBusinessStripeByBusinessId -->
### generateBusinessStripeByBusinessId

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END generateBusinessStripeByBusinessId -->

<!-- DOCGEN:START onboardingEnd -->
### onboardingEnd

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END onboardingEnd -->

<!-- DOCGEN:START getBusynessFactorsBusinessIdList -->
### getBusynessFactorsBusinessIdList

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getBusynessFactorsBusinessIdList -->

<!-- DOCGEN:START addBusinessToFavorites -->
### addBusinessToFavorites

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END addBusinessToFavorites -->

<!-- DOCGEN:START removeBusinessFromFavorites -->
### removeBusinessFromFavorites

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END removeBusinessFromFavorites -->

<!-- DOCGEN:START getFavoriteBusinesses -->
### getFavoriteBusinesses

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getFavoriteBusinesses -->

<!-- DOCGEN:START getScheduledUsersByBusinessId -->
### getScheduledUsersByBusinessId

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getScheduledUsersByBusinessId -->

<!-- DOCGEN:START createScoringPointsHandler -->
### createScoringPointsHandler

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END createScoringPointsHandler -->

<!-- DOCGEN:START getPurchaseOrderLimit -->
### getPurchaseOrderLimit

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getPurchaseOrderLimit -->

<!-- DOCGEN:START activateBusiness -->
### activateBusiness

**Summary**: Activate a business

**Description**: Activates a business.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/activateBusiness )

<!-- DOCGEN:END activateBusiness -->

<!-- DOCGEN:START deactivateBusiness -->
### deactivateBusiness

**Summary**: Deactivate a business

**Description**: Deactivates a business.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deactivateBusiness )

<!-- DOCGEN:END deactivateBusiness -->

<!-- DOCGEN:START listBusinesses -->
### listBusinesses

**Summary**: Get a list of businesses

**Description**: Returns a list of businesses.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinesses )

<!-- DOCGEN:END listBusinesses -->

<!-- DOCGEN:START getBusinessesByIds -->
### getBusinessesByIds

**Summary**: Get a list of businesses business_ids

**Description**: Returns a list of businesses.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessesByIds )

<!-- DOCGEN:END getBusinessesByIds -->

<!-- DOCGEN:START searchBusinesses -->
### searchBusinesses

**Summary**: Get a list of businesses by query, location and categories

**Description**: Returns a list of businesses.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessesSearch )

<!-- DOCGEN:END searchBusinesses -->

<!-- DOCGEN:START listMerchantBusinesses -->
### listMerchantBusinesses

**Summary**: List all merchant businesses

**Description**: Retrieves a list of all businesses classified as merchants.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listMerchantBusinesses )

<!-- DOCGEN:END listMerchantBusinesses -->

<!-- DOCGEN:START listPromoSectionsWithMerchants -->
### listPromoSectionsWithMerchants

**Summary**: List all merchant businesses grouped by promoSections

**Description**: Retrieves a list of all businesses classified as merchants.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listMerchantBusinesses )

<!-- DOCGEN:END listPromoSectionsWithMerchants -->

<!-- DOCGEN:START listMerchantBusinessesWithDailyMeals -->
### listMerchantBusinessesWithDailyMeals

**Summary**: List all merchant businesses offering daily meals

**Description**: Retrieves a list of all businesses classified as merchants that offer daily meals.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listMerchantBusinessesWithDailyMeals )

<!-- DOCGEN:END listMerchantBusinessesWithDailyMeals -->

<!-- DOCGEN:START listMerchantBusinessesMainInfo -->
### listMerchantBusinessesMainInfo

**Summary**: List all merchant businesses offering daily meals

**Description**: Retrieves a list of all businesses classified as merchants that offer daily meals.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listMerchantBusinessesWithDailyMeals )

<!-- DOCGEN:END listMerchantBusinessesMainInfo -->

<!-- DOCGEN:START listTransferBusinessesMainInfo -->
### listTransferBusinessesMainInfo

**Summary**: List all transfer businesses (main info only)

**Description**: Retrieves a list of all transfer businesses

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listTransferBusinessesMainInfo )

<!-- DOCGEN:END listTransferBusinessesMainInfo -->

<!-- DOCGEN:START listTransferBusinesses -->
### listTransferBusinesses

**Summary**: List all taxi businesses

**Description**: Retrieves a list of all businesses classified as taxis (TRANSFER).

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listTaxiBusinesses )

<!-- DOCGEN:END listTransferBusinesses -->

<!-- DOCGEN:START getBusinessById -->
### getBusinessById

**Summary**: Get a business by ID

**Description**: Retrieves detailed information about a specific business by its ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessById )

<!-- DOCGEN:END getBusinessById -->

<!-- DOCGEN:START getBusinessAdminDataById -->
### getBusinessAdminDataById

**Summary**: Get a business by ID including admin data

**Description**: Retrieves detailed information about a specific business by its ID, including data an admin can see.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessAdminDataById )

<!-- DOCGEN:END getBusinessAdminDataById -->

<!-- DOCGEN:START getBusinessForSearchById -->
### getBusinessForSearchById

**Summary**: Get a business for search by ID

**Description**: Retrieves detailed information about a specific business by its ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessForSearchById )

<!-- DOCGEN:END getBusinessForSearchById -->

<!-- DOCGEN:START getParentBusiness -->
### getParentBusiness

**Summary**: Get parent business

**Description**: Retrieves the parent business of a specific business by its ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getParentBusiness )

<!-- DOCGEN:END getParentBusiness -->

<!-- DOCGEN:START getChildBusinesses -->
### getChildBusinesses

**Summary**: List child businesses

**Description**: Retrieves a list of child businesses for a specific parent business ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | parent_business_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getChildBusinesses )

<!-- DOCGEN:END getChildBusinesses -->

<!-- DOCGEN:START createNewBusiness -->
### createNewBusiness

**Summary**: Create a new business

**Description**: Creates a new business with the provided details.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewBusiness )

<!-- DOCGEN:END createNewBusiness -->

<!-- DOCGEN:START update -->
### update

**Summary**: Updates the business details

**Description**: This endpoint is used to update the business details.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | businessId |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusiness )

<!-- DOCGEN:END update -->

<!-- DOCGEN:START updateBusinessType -->
### updateBusinessType

**Summary**: Updates a business's type

**Description**: This endpoint is used to update a business's type.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessType )

<!-- DOCGEN:END updateBusinessType -->

<!-- DOCGEN:START updateIsBusinessUnit -->
### updateIsBusinessUnit

**Summary**: Updates the business unit status

**Description**: This endpoint is used to update whether a business is considered a business unit.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateIsBusinessUnit )

<!-- DOCGEN:END updateIsBusinessUnit -->

<!-- DOCGEN:START updateBusinessGroupName -->
### updateBusinessGroupName

**Summary**: Updates a business's group name

**Description**: This endpoint is used to update a business's group name.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessGroupName )

<!-- DOCGEN:END updateBusinessGroupName -->

<!-- DOCGEN:START updateBusinessEmail -->
### updateBusinessEmail

**Summary**: Updates a business's email

**Description**: This endpoint is used to update a business's email address.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessEmail )

<!-- DOCGEN:END updateBusinessEmail -->

<!-- DOCGEN:START updateBusinessTelephone -->
### updateBusinessTelephone

**Summary**: Updates a business's telephone

**Description**: This endpoint is used to update a business's telephone number.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessTelephone )

<!-- DOCGEN:END updateBusinessTelephone -->

<!-- DOCGEN:START updateBusinessWorkingHours -->
### updateBusinessWorkingHours

**Summary**: Updates a business's working hours

**Description**: This endpoint is used to update a business's working hours.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessWorkingHours )

<!-- DOCGEN:END updateBusinessWorkingHours -->

<!-- DOCGEN:START updateRestaurantOverwhelmed -->
### updateRestaurantOverwhelmed

**Summary**: Updates the overwhelmed status of a restaurant

**Description**: This endpoint is used to update whether a restaurant is considered overwhelmed.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (optional)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateRestaurantOverwhelmed )

<!-- DOCGEN:END updateRestaurantOverwhelmed -->

<!-- DOCGEN:START updateBusinessIsNew -->
### updateBusinessIsNew

**Summary**: Updates the new status of a business

**Description**: This endpoint is used to update whether a business is considered new.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessIsNew )

<!-- DOCGEN:END updateBusinessIsNew -->

<!-- DOCGEN:START updateBusinessIsPopular -->
### updateBusinessIsPopular

**Summary**: Updates the popularity status of a business

**Description**: This endpoint is used to update whether a business is considered popular.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessIsPopular )

<!-- DOCGEN:END updateBusinessIsPopular -->

<!-- DOCGEN:START getBusinessesByGroupName -->
### getBusinessesByGroupName

**Summary**: Search for businesses by business group name

**Description**: Retrieves businesses whose business group names contain the given search term, case-insensitively.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessesByGroupName )

<!-- DOCGEN:END getBusinessesByGroupName -->

<!-- DOCGEN:START getBusinessesByNameSearch -->
### getBusinessesByNameSearch

**Summary**: Search for businesses by name

**Description**: Retrieves businesses whose names contain the given search term, case-insensitively.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessesByNameSearch )

<!-- DOCGEN:END getBusinessesByNameSearch -->

<!-- DOCGEN:START addBusinessAddress -->
### addBusinessAddress

**Summary**: Add an address to a business

**Description**: Adds an address to a specific business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addBusinessAddress )

<!-- DOCGEN:END addBusinessAddress -->

<!-- DOCGEN:START addDeliveryAddress -->
### addDeliveryAddress

**Summary**: Add a delivery address to a business

**Description**: Adds a delivery address to a specific business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addDeliveryAddress )

<!-- DOCGEN:END addDeliveryAddress -->

<!-- DOCGEN:START updateParentBusinessId -->
### updateParentBusinessId

**Summary**: Update parent business

**Description**: Updates the parent business of a specific business by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateParentBusiness )

<!-- DOCGEN:END updateParentBusinessId -->

<!-- DOCGEN:START updateBusinessAddress -->
### updateBusinessAddress

**Summary**: Updates a business's address

**Description**: This endpoint is used to update a business's primary address.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessAddress )

<!-- DOCGEN:END updateBusinessAddress -->

<!-- DOCGEN:START updateBusinessDeliveryAddress -->
### updateBusinessDeliveryAddress

**Summary**: Updates a business's delivery address

**Description**: This endpoint is used to update a business's delivery address.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessDeliveryAddress )

<!-- DOCGEN:END updateBusinessDeliveryAddress -->

<!-- DOCGEN:START deleteBusiness -->
### deleteBusiness

**Summary**: Delete a business

**Description**: Deletes a business by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deleteBusiness )

<!-- DOCGEN:END deleteBusiness -->

<!-- DOCGEN:START removeParentBusinessId -->
### removeParentBusinessId

**Summary**: Remove a child business from its parent

**Description**: Clears the parent business association for a given child business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/removeChildBusiness )

<!-- DOCGEN:END removeParentBusinessId -->

<!-- DOCGEN:START reviewBusiness -->
### reviewBusiness

**Summary**: Review a business

**Description**: This endpoint is used add a review of business.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/reviewBusiness )

<!-- DOCGEN:END reviewBusiness -->

<!-- DOCGEN:START confirmBusinessReview -->
### confirmBusinessReview

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END confirmBusinessReview -->

<!-- DOCGEN:START createPaymentIntent -->
### createPaymentIntent

**Summary**: Create a payment intent

**Description**: This endpoint is used to create a payment intent.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createPaymentIntent )

<!-- DOCGEN:END createPaymentIntent -->

<!-- DOCGEN:START manualSortScheduledUsers -->
### manualSortScheduledUsers

**Summary**: Manually sort scheduled users

**Description**: This endpoint is used to manually sort scheduled users.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/manualSortScheduledUsers )

<!-- DOCGEN:END manualSortScheduledUsers -->

<!-- DOCGEN:START addScheduledUserSortingType -->
### addScheduledUserSortingType

**Summary**: Add sorting type for scheduled users

**Description**: This endpoint is used to add the sorting type for scheduled users.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addScheduledUserSortingType )

<!-- DOCGEN:END addScheduledUserSortingType -->

<!-- DOCGEN:START getBusinessEarnings -->
### getBusinessEarnings

**Summary**: Get earnings for a specific business

**Description**: Retrieves earnings data for a specific business based on the provided business ID and date range.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Responses:**
- 200
- 400
- 404

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`
- ⚠️ Could not parse: `404.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessEarnings )

<!-- DOCGEN:END getBusinessEarnings -->

<!-- DOCGEN:START getAllBusinessesEarnings -->
### getAllBusinessesEarnings

**Summary**: Get earnings for all businesses

**Description**: Retrieves earnings data for all businesses of type MERCHANT based on the provided date range.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAllBusinessesEarnings )

<!-- DOCGEN:END getAllBusinessesEarnings -->

<!-- DOCGEN:START getTotalEarnings -->
### getTotalEarnings

**Summary**: Get total earnings for completed delivery orders

**Description**: Retrieves the total earnings from all completed delivery orders.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getTotalEarnings )

<!-- DOCGEN:END getTotalEarnings -->

<!-- DOCGEN:START getBusinessTotalEarnings -->
### getBusinessTotalEarnings

**Summary**: Get total earnings for a specific business

**Description**: Retrieves the total earnings of a specific business based on completed orders.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessTotalEarnings )

<!-- DOCGEN:END getBusinessTotalEarnings -->

<!-- DOCGEN:START getBusinessReviewsById -->
### getBusinessReviewsById

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getBusinessReviewsById -->

<!-- DOCGEN:START editBusiness -->
### editBusiness

**Summary**: Edit business details

**Description**: This endpoint is used to update multiple details of a business, including address, delivery address, finances, and other specific data.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/editBusiness )

<!-- DOCGEN:END editBusiness -->

<!-- DOCGEN:START getBusinessStripeStatusByBusinessId -->
### getBusinessStripeStatusByBusinessId

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getBusinessStripeStatusByBusinessId -->

<!-- DOCGEN:START generateBusinessStripeByBusinessId -->
### generateBusinessStripeByBusinessId

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END generateBusinessStripeByBusinessId -->

<!-- DOCGEN:START onboardingEnd -->
### onboardingEnd

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END onboardingEnd -->

<!-- DOCGEN:START getBusynessFactorsBusinessIdList -->
### getBusynessFactorsBusinessIdList

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getBusynessFactorsBusinessIdList -->

<!-- DOCGEN:START addBusinessToFavorites -->
### addBusinessToFavorites

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END addBusinessToFavorites -->

<!-- DOCGEN:START removeBusinessFromFavorites -->
### removeBusinessFromFavorites

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END removeBusinessFromFavorites -->

<!-- DOCGEN:START getFavoriteBusinesses -->
### getFavoriteBusinesses

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getFavoriteBusinesses -->

<!-- DOCGEN:START getScheduledUsersByBusinessId -->
### getScheduledUsersByBusinessId

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getScheduledUsersByBusinessId -->

<!-- DOCGEN:START createScoringPointsHandler -->
### createScoringPointsHandler

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END createScoringPointsHandler -->

<!-- DOCGEN:START getPurchaseOrderLimit -->
### getPurchaseOrderLimit

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getPurchaseOrderLimit -->

<!-- DOCGEN:START activateBusiness -->
### activateBusiness

**Summary**: Activate a business

**Description**: Activates a business.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/activateBusiness )

<!-- DOCGEN:END activateBusiness -->

<!-- DOCGEN:START deactivateBusiness -->
### deactivateBusiness

**Summary**: Deactivate a business

**Description**: Deactivates a business.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deactivateBusiness )

<!-- DOCGEN:END deactivateBusiness -->

<!-- DOCGEN:START listBusinesses -->
### listBusinesses

**Summary**: Get a list of businesses

**Description**: Returns a list of businesses.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinesses )

<!-- DOCGEN:END listBusinesses -->

<!-- DOCGEN:START getBusinessesByIds -->
### getBusinessesByIds

**Summary**: Get a list of businesses business_ids

**Description**: Returns a list of businesses.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessesByIds )

<!-- DOCGEN:END getBusinessesByIds -->

<!-- DOCGEN:START searchBusinesses -->
### searchBusinesses

**Summary**: Get a list of businesses by query, location and categories

**Description**: Returns a list of businesses.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessesSearch )

<!-- DOCGEN:END searchBusinesses -->

<!-- DOCGEN:START listMerchantBusinesses -->
### listMerchantBusinesses

**Summary**: List all merchant businesses

**Description**: Retrieves a list of all businesses classified as merchants.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listMerchantBusinesses )

<!-- DOCGEN:END listMerchantBusinesses -->

<!-- DOCGEN:START listPromoSectionsWithMerchants -->
### listPromoSectionsWithMerchants

**Summary**: List all merchant businesses grouped by promoSections

**Description**: Retrieves a list of all businesses classified as merchants.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listMerchantBusinesses )

<!-- DOCGEN:END listPromoSectionsWithMerchants -->

<!-- DOCGEN:START listMerchantBusinessesWithDailyMeals -->
### listMerchantBusinessesWithDailyMeals

**Summary**: List all merchant businesses offering daily meals

**Description**: Retrieves a list of all businesses classified as merchants that offer daily meals.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listMerchantBusinessesWithDailyMeals )

<!-- DOCGEN:END listMerchantBusinessesWithDailyMeals -->

<!-- DOCGEN:START listMerchantBusinessesMainInfo -->
### listMerchantBusinessesMainInfo

**Summary**: List all merchant businesses offering daily meals

**Description**: Retrieves a list of all businesses classified as merchants that offer daily meals.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listMerchantBusinessesWithDailyMeals )

<!-- DOCGEN:END listMerchantBusinessesMainInfo -->

<!-- DOCGEN:START listTransferBusinessesMainInfo -->
### listTransferBusinessesMainInfo

**Summary**: List all transfer businesses (main info only)

**Description**: Retrieves a list of all transfer businesses

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listTransferBusinessesMainInfo )

<!-- DOCGEN:END listTransferBusinessesMainInfo -->

<!-- DOCGEN:START listTransferBusinesses -->
### listTransferBusinesses

**Summary**: List all taxi businesses

**Description**: Retrieves a list of all businesses classified as taxis (TRANSFER).

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listTaxiBusinesses )

<!-- DOCGEN:END listTransferBusinesses -->

<!-- DOCGEN:START getBusinessById -->
### getBusinessById

**Summary**: Get a business by ID

**Description**: Retrieves detailed information about a specific business by its ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessById )

<!-- DOCGEN:END getBusinessById -->

<!-- DOCGEN:START getBusinessAdminDataById -->
### getBusinessAdminDataById

**Summary**: Get a business by ID including admin data

**Description**: Retrieves detailed information about a specific business by its ID, including data an admin can see.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessAdminDataById )

<!-- DOCGEN:END getBusinessAdminDataById -->

<!-- DOCGEN:START getBusinessForSearchById -->
### getBusinessForSearchById

**Summary**: Get a business for search by ID

**Description**: Retrieves detailed information about a specific business by its ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessForSearchById )

<!-- DOCGEN:END getBusinessForSearchById -->

<!-- DOCGEN:START getParentBusiness -->
### getParentBusiness

**Summary**: Get parent business

**Description**: Retrieves the parent business of a specific business by its ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getParentBusiness )

<!-- DOCGEN:END getParentBusiness -->

<!-- DOCGEN:START getChildBusinesses -->
### getChildBusinesses

**Summary**: List child businesses

**Description**: Retrieves a list of child businesses for a specific parent business ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | parent_business_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getChildBusinesses )

<!-- DOCGEN:END getChildBusinesses -->

<!-- DOCGEN:START createNewBusiness -->
### createNewBusiness

**Summary**: Create a new business

**Description**: Creates a new business with the provided details.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewBusiness )

<!-- DOCGEN:END createNewBusiness -->

<!-- DOCGEN:START update -->
### update

**Summary**: Updates the business details

**Description**: This endpoint is used to update the business details.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | businessId |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusiness )

<!-- DOCGEN:END update -->

<!-- DOCGEN:START updateBusinessType -->
### updateBusinessType

**Summary**: Updates a business's type

**Description**: This endpoint is used to update a business's type.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessType )

<!-- DOCGEN:END updateBusinessType -->

<!-- DOCGEN:START updateIsBusinessUnit -->
### updateIsBusinessUnit

**Summary**: Updates the business unit status

**Description**: This endpoint is used to update whether a business is considered a business unit.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateIsBusinessUnit )

<!-- DOCGEN:END updateIsBusinessUnit -->

<!-- DOCGEN:START updateBusinessGroupName -->
### updateBusinessGroupName

**Summary**: Updates a business's group name

**Description**: This endpoint is used to update a business's group name.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessGroupName )

<!-- DOCGEN:END updateBusinessGroupName -->

<!-- DOCGEN:START updateBusinessEmail -->
### updateBusinessEmail

**Summary**: Updates a business's email

**Description**: This endpoint is used to update a business's email address.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessEmail )

<!-- DOCGEN:END updateBusinessEmail -->

<!-- DOCGEN:START updateBusinessTelephone -->
### updateBusinessTelephone

**Summary**: Updates a business's telephone

**Description**: This endpoint is used to update a business's telephone number.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessTelephone )

<!-- DOCGEN:END updateBusinessTelephone -->

<!-- DOCGEN:START updateBusinessWorkingHours -->
### updateBusinessWorkingHours

**Summary**: Updates a business's working hours

**Description**: This endpoint is used to update a business's working hours.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessWorkingHours )

<!-- DOCGEN:END updateBusinessWorkingHours -->

<!-- DOCGEN:START updateRestaurantOverwhelmed -->
### updateRestaurantOverwhelmed

**Summary**: Updates the overwhelmed status of a restaurant

**Description**: This endpoint is used to update whether a restaurant is considered overwhelmed.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (optional)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateRestaurantOverwhelmed )

<!-- DOCGEN:END updateRestaurantOverwhelmed -->

<!-- DOCGEN:START updateBusinessIsNew -->
### updateBusinessIsNew

**Summary**: Updates the new status of a business

**Description**: This endpoint is used to update whether a business is considered new.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessIsNew )

<!-- DOCGEN:END updateBusinessIsNew -->

<!-- DOCGEN:START updateBusinessIsPopular -->
### updateBusinessIsPopular

**Summary**: Updates the popularity status of a business

**Description**: This endpoint is used to update whether a business is considered popular.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessIsPopular )

<!-- DOCGEN:END updateBusinessIsPopular -->

<!-- DOCGEN:START getBusinessesByGroupName -->
### getBusinessesByGroupName

**Summary**: Search for businesses by business group name

**Description**: Retrieves businesses whose business group names contain the given search term, case-insensitively.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessesByGroupName )

<!-- DOCGEN:END getBusinessesByGroupName -->

<!-- DOCGEN:START getBusinessesByNameSearch -->
### getBusinessesByNameSearch

**Summary**: Search for businesses by name

**Description**: Retrieves businesses whose names contain the given search term, case-insensitively.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessesByNameSearch )

<!-- DOCGEN:END getBusinessesByNameSearch -->

<!-- DOCGEN:START addBusinessAddress -->
### addBusinessAddress

**Summary**: Add an address to a business

**Description**: Adds an address to a specific business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addBusinessAddress )

<!-- DOCGEN:END addBusinessAddress -->

<!-- DOCGEN:START addDeliveryAddress -->
### addDeliveryAddress

**Summary**: Add a delivery address to a business

**Description**: Adds a delivery address to a specific business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addDeliveryAddress )

<!-- DOCGEN:END addDeliveryAddress -->

<!-- DOCGEN:START updateParentBusinessId -->
### updateParentBusinessId

**Summary**: Update parent business

**Description**: Updates the parent business of a specific business by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateParentBusiness )

<!-- DOCGEN:END updateParentBusinessId -->

<!-- DOCGEN:START updateBusinessAddress -->
### updateBusinessAddress

**Summary**: Updates a business's address

**Description**: This endpoint is used to update a business's primary address.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessAddress )

<!-- DOCGEN:END updateBusinessAddress -->

<!-- DOCGEN:START updateBusinessDeliveryAddress -->
### updateBusinessDeliveryAddress

**Summary**: Updates a business's delivery address

**Description**: This endpoint is used to update a business's delivery address.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessDeliveryAddress )

<!-- DOCGEN:END updateBusinessDeliveryAddress -->

<!-- DOCGEN:START deleteBusiness -->
### deleteBusiness

**Summary**: Delete a business

**Description**: Deletes a business by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deleteBusiness )

<!-- DOCGEN:END deleteBusiness -->

<!-- DOCGEN:START removeParentBusinessId -->
### removeParentBusinessId

**Summary**: Remove a child business from its parent

**Description**: Clears the parent business association for a given child business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/removeChildBusiness )

<!-- DOCGEN:END removeParentBusinessId -->

<!-- DOCGEN:START reviewBusiness -->
### reviewBusiness

**Summary**: Review a business

**Description**: This endpoint is used add a review of business.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/reviewBusiness )

<!-- DOCGEN:END reviewBusiness -->

<!-- DOCGEN:START confirmBusinessReview -->
### confirmBusinessReview

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END confirmBusinessReview -->

<!-- DOCGEN:START createPaymentIntent -->
### createPaymentIntent

**Summary**: Create a payment intent

**Description**: This endpoint is used to create a payment intent.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createPaymentIntent )

<!-- DOCGEN:END createPaymentIntent -->

<!-- DOCGEN:START manualSortScheduledUsers -->
### manualSortScheduledUsers

**Summary**: Manually sort scheduled users

**Description**: This endpoint is used to manually sort scheduled users.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/manualSortScheduledUsers )

<!-- DOCGEN:END manualSortScheduledUsers -->

<!-- DOCGEN:START addScheduledUserSortingType -->
### addScheduledUserSortingType

**Summary**: Add sorting type for scheduled users

**Description**: This endpoint is used to add the sorting type for scheduled users.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addScheduledUserSortingType )

<!-- DOCGEN:END addScheduledUserSortingType -->

<!-- DOCGEN:START getBusinessEarnings -->
### getBusinessEarnings

**Summary**: Get earnings for a specific business

**Description**: Retrieves earnings data for a specific business based on the provided business ID and date range.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Responses:**
- 200
- 400
- 404

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`
- ⚠️ Could not parse: `404.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessEarnings )

<!-- DOCGEN:END getBusinessEarnings -->

<!-- DOCGEN:START getAllBusinessesEarnings -->
### getAllBusinessesEarnings

**Summary**: Get earnings for all businesses

**Description**: Retrieves earnings data for all businesses of type MERCHANT based on the provided date range.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAllBusinessesEarnings )

<!-- DOCGEN:END getAllBusinessesEarnings -->

<!-- DOCGEN:START getTotalEarnings -->
### getTotalEarnings

**Summary**: Get total earnings for completed delivery orders

**Description**: Retrieves the total earnings from all completed delivery orders.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getTotalEarnings )

<!-- DOCGEN:END getTotalEarnings -->

<!-- DOCGEN:START getBusinessTotalEarnings -->
### getBusinessTotalEarnings

**Summary**: Get total earnings for a specific business

**Description**: Retrieves the total earnings of a specific business based on completed orders.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessTotalEarnings )

<!-- DOCGEN:END getBusinessTotalEarnings -->

<!-- DOCGEN:START getBusinessReviewsById -->
### getBusinessReviewsById

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getBusinessReviewsById -->

<!-- DOCGEN:START editBusiness -->
### editBusiness

**Summary**: Edit business details

**Description**: This endpoint is used to update multiple details of a business, including address, delivery address, finances, and other specific data.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/editBusiness )

<!-- DOCGEN:END editBusiness -->

<!-- DOCGEN:START getBusinessStripeStatusByBusinessId -->
### getBusinessStripeStatusByBusinessId

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getBusinessStripeStatusByBusinessId -->

<!-- DOCGEN:START generateBusinessStripeByBusinessId -->
### generateBusinessStripeByBusinessId

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END generateBusinessStripeByBusinessId -->

<!-- DOCGEN:START onboardingEnd -->
### onboardingEnd

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END onboardingEnd -->

<!-- DOCGEN:START getBusynessFactorsBusinessIdList -->
### getBusynessFactorsBusinessIdList

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getBusynessFactorsBusinessIdList -->

<!-- DOCGEN:START addBusinessToFavorites -->
### addBusinessToFavorites

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END addBusinessToFavorites -->

<!-- DOCGEN:START removeBusinessFromFavorites -->
### removeBusinessFromFavorites

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END removeBusinessFromFavorites -->

<!-- DOCGEN:START getFavoriteBusinesses -->
### getFavoriteBusinesses

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getFavoriteBusinesses -->

<!-- DOCGEN:START getScheduledUsersByBusinessId -->
### getScheduledUsersByBusinessId

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getScheduledUsersByBusinessId -->

<!-- DOCGEN:START createScoringPointsHandler -->
### createScoringPointsHandler

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END createScoringPointsHandler -->

<!-- DOCGEN:START getPurchaseOrderLimit -->
### getPurchaseOrderLimit

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getPurchaseOrderLimit -->

<!-- DOCGEN:START activateBusiness -->
### activateBusiness

**Summary**: Activate a business

**Description**: Activates a business.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/activateBusiness )

<!-- DOCGEN:END activateBusiness -->

<!-- DOCGEN:START deactivateBusiness -->
### deactivateBusiness

**Summary**: Deactivate a business

**Description**: Deactivates a business.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deactivateBusiness )

<!-- DOCGEN:END deactivateBusiness -->

<!-- DOCGEN:START listBusinesses -->
### listBusinesses

**Summary**: Get a list of businesses

**Description**: Returns a list of businesses.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinesses )

<!-- DOCGEN:END listBusinesses -->

<!-- DOCGEN:START getBusinessesByIds -->
### getBusinessesByIds

**Summary**: Get a list of businesses business_ids

**Description**: Returns a list of businesses.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessesByIds )

<!-- DOCGEN:END getBusinessesByIds -->

<!-- DOCGEN:START searchBusinesses -->
### searchBusinesses

**Summary**: Get a list of businesses by query, location and categories

**Description**: Returns a list of businesses.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessesSearch )

<!-- DOCGEN:END searchBusinesses -->

<!-- DOCGEN:START listMerchantBusinesses -->
### listMerchantBusinesses

**Summary**: List all merchant businesses

**Description**: Retrieves a list of all businesses classified as merchants.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listMerchantBusinesses )

<!-- DOCGEN:END listMerchantBusinesses -->

<!-- DOCGEN:START listPromoSectionsWithMerchants -->
### listPromoSectionsWithMerchants

**Summary**: List all merchant businesses grouped by promoSections

**Description**: Retrieves a list of all businesses classified as merchants.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listMerchantBusinesses )

<!-- DOCGEN:END listPromoSectionsWithMerchants -->

<!-- DOCGEN:START listMerchantBusinessesWithDailyMeals -->
### listMerchantBusinessesWithDailyMeals

**Summary**: List all merchant businesses offering daily meals

**Description**: Retrieves a list of all businesses classified as merchants that offer daily meals.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listMerchantBusinessesWithDailyMeals )

<!-- DOCGEN:END listMerchantBusinessesWithDailyMeals -->

<!-- DOCGEN:START listMerchantBusinessesMainInfo -->
### listMerchantBusinessesMainInfo

**Summary**: List all merchant businesses offering daily meals

**Description**: Retrieves a list of all businesses classified as merchants that offer daily meals.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listMerchantBusinessesWithDailyMeals )

<!-- DOCGEN:END listMerchantBusinessesMainInfo -->

<!-- DOCGEN:START listTransferBusinessesMainInfo -->
### listTransferBusinessesMainInfo

**Summary**: List all transfer businesses (main info only)

**Description**: Retrieves a list of all transfer businesses

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listTransferBusinessesMainInfo )

<!-- DOCGEN:END listTransferBusinessesMainInfo -->

<!-- DOCGEN:START listTransferBusinesses -->
### listTransferBusinesses

**Summary**: List all taxi businesses

**Description**: Retrieves a list of all businesses classified as taxis (TRANSFER).

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listTaxiBusinesses )

<!-- DOCGEN:END listTransferBusinesses -->

<!-- DOCGEN:START getBusinessById -->
### getBusinessById

**Summary**: Get a business by ID

**Description**: Retrieves detailed information about a specific business by its ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessById )

<!-- DOCGEN:END getBusinessById -->

<!-- DOCGEN:START getBusinessAdminDataById -->
### getBusinessAdminDataById

**Summary**: Get a business by ID including admin data

**Description**: Retrieves detailed information about a specific business by its ID, including data an admin can see.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessAdminDataById )

<!-- DOCGEN:END getBusinessAdminDataById -->

<!-- DOCGEN:START getBusinessForSearchById -->
### getBusinessForSearchById

**Summary**: Get a business for search by ID

**Description**: Retrieves detailed information about a specific business by its ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessForSearchById )

<!-- DOCGEN:END getBusinessForSearchById -->

<!-- DOCGEN:START getParentBusiness -->
### getParentBusiness

**Summary**: Get parent business

**Description**: Retrieves the parent business of a specific business by its ID.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getParentBusiness )

<!-- DOCGEN:END getParentBusiness -->

<!-- DOCGEN:START getChildBusinesses -->
### getChildBusinesses

**Summary**: List child businesses

**Description**: Retrieves a list of child businesses for a specific parent business ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | parent_business_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getChildBusinesses )

<!-- DOCGEN:END getChildBusinesses -->

<!-- DOCGEN:START createNewBusiness -->
### createNewBusiness

**Summary**: Create a new business

**Description**: Creates a new business with the provided details.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createNewBusiness )

<!-- DOCGEN:END createNewBusiness -->

<!-- DOCGEN:START update -->
### update

**Summary**: Updates the business details

**Description**: This endpoint is used to update the business details.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | businessId |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusiness )

<!-- DOCGEN:END update -->

<!-- DOCGEN:START updateBusinessType -->
### updateBusinessType

**Summary**: Updates a business's type

**Description**: This endpoint is used to update a business's type.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessType )

<!-- DOCGEN:END updateBusinessType -->

<!-- DOCGEN:START updateIsBusinessUnit -->
### updateIsBusinessUnit

**Summary**: Updates the business unit status

**Description**: This endpoint is used to update whether a business is considered a business unit.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateIsBusinessUnit )

<!-- DOCGEN:END updateIsBusinessUnit -->

<!-- DOCGEN:START updateBusinessGroupName -->
### updateBusinessGroupName

**Summary**: Updates a business's group name

**Description**: This endpoint is used to update a business's group name.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessGroupName )

<!-- DOCGEN:END updateBusinessGroupName -->

<!-- DOCGEN:START updateBusinessEmail -->
### updateBusinessEmail

**Summary**: Updates a business's email

**Description**: This endpoint is used to update a business's email address.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessEmail )

<!-- DOCGEN:END updateBusinessEmail -->

<!-- DOCGEN:START updateBusinessTelephone -->
### updateBusinessTelephone

**Summary**: Updates a business's telephone

**Description**: This endpoint is used to update a business's telephone number.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessTelephone )

<!-- DOCGEN:END updateBusinessTelephone -->

<!-- DOCGEN:START updateBusinessWorkingHours -->
### updateBusinessWorkingHours

**Summary**: Updates a business's working hours

**Description**: This endpoint is used to update a business's working hours.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessWorkingHours )

<!-- DOCGEN:END updateBusinessWorkingHours -->

<!-- DOCGEN:START updateRestaurantOverwhelmed -->
### updateRestaurantOverwhelmed

**Summary**: Updates the overwhelmed status of a restaurant

**Description**: This endpoint is used to update whether a restaurant is considered overwhelmed.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (optional)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateRestaurantOverwhelmed )

<!-- DOCGEN:END updateRestaurantOverwhelmed -->

<!-- DOCGEN:START updateBusinessIsNew -->
### updateBusinessIsNew

**Summary**: Updates the new status of a business

**Description**: This endpoint is used to update whether a business is considered new.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessIsNew )

<!-- DOCGEN:END updateBusinessIsNew -->

<!-- DOCGEN:START updateBusinessIsPopular -->
### updateBusinessIsPopular

**Summary**: Updates the popularity status of a business

**Description**: This endpoint is used to update whether a business is considered popular.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessIsPopular )

<!-- DOCGEN:END updateBusinessIsPopular -->

<!-- DOCGEN:START getBusinessesByGroupName -->
### getBusinessesByGroupName

**Summary**: Search for businesses by business group name

**Description**: Retrieves businesses whose business group names contain the given search term, case-insensitively.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessesByGroupName )

<!-- DOCGEN:END getBusinessesByGroupName -->

<!-- DOCGEN:START getBusinessesByNameSearch -->
### getBusinessesByNameSearch

**Summary**: Search for businesses by name

**Description**: Retrieves businesses whose names contain the given search term, case-insensitively.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessesByNameSearch )

<!-- DOCGEN:END getBusinessesByNameSearch -->

<!-- DOCGEN:START addBusinessAddress -->
### addBusinessAddress

**Summary**: Add an address to a business

**Description**: Adds an address to a specific business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addBusinessAddress )

<!-- DOCGEN:END addBusinessAddress -->

<!-- DOCGEN:START addDeliveryAddress -->
### addDeliveryAddress

**Summary**: Add a delivery address to a business

**Description**: Adds a delivery address to a specific business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addDeliveryAddress )

<!-- DOCGEN:END addDeliveryAddress -->

<!-- DOCGEN:START updateParentBusinessId -->
### updateParentBusinessId

**Summary**: Update parent business

**Description**: Updates the parent business of a specific business by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateParentBusiness )

<!-- DOCGEN:END updateParentBusinessId -->

<!-- DOCGEN:START updateBusinessAddress -->
### updateBusinessAddress

**Summary**: Updates a business's address

**Description**: This endpoint is used to update a business's primary address.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessAddress )

<!-- DOCGEN:END updateBusinessAddress -->

<!-- DOCGEN:START updateBusinessDeliveryAddress -->
### updateBusinessDeliveryAddress

**Summary**: Updates a business's delivery address

**Description**: This endpoint is used to update a business's delivery address.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessDeliveryAddress )

<!-- DOCGEN:END updateBusinessDeliveryAddress -->

<!-- DOCGEN:START deleteBusiness -->
### deleteBusiness

**Summary**: Delete a business

**Description**: Deletes a business by its ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deleteBusiness )

<!-- DOCGEN:END deleteBusiness -->

<!-- DOCGEN:START removeParentBusinessId -->
### removeParentBusinessId

**Summary**: Remove a child business from its parent

**Description**: Clears the parent business association for a given child business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/removeChildBusiness )

<!-- DOCGEN:END removeParentBusinessId -->

<!-- DOCGEN:START reviewBusiness -->
### reviewBusiness

**Summary**: Review a business

**Description**: This endpoint is used add a review of business.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/reviewBusiness )

<!-- DOCGEN:END reviewBusiness -->

<!-- DOCGEN:START confirmBusinessReview -->
### confirmBusinessReview

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END confirmBusinessReview -->

<!-- DOCGEN:START createPaymentIntent -->
### createPaymentIntent

**Summary**: Create a payment intent

**Description**: This endpoint is used to create a payment intent.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createPaymentIntent )

<!-- DOCGEN:END createPaymentIntent -->

<!-- DOCGEN:START manualSortScheduledUsers -->
### manualSortScheduledUsers

**Summary**: Manually sort scheduled users

**Description**: This endpoint is used to manually sort scheduled users.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/manualSortScheduledUsers )

<!-- DOCGEN:END manualSortScheduledUsers -->

<!-- DOCGEN:START addScheduledUserSortingType -->
### addScheduledUserSortingType

**Summary**: Add sorting type for scheduled users

**Description**: This endpoint is used to add the sorting type for scheduled users.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addScheduledUserSortingType )

<!-- DOCGEN:END addScheduledUserSortingType -->

<!-- DOCGEN:START getBusinessEarnings -->
### getBusinessEarnings

**Summary**: Get earnings for a specific business

**Description**: Retrieves earnings data for a specific business based on the provided business ID and date range.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Responses:**
- 200
- 400
- 404

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`
- ⚠️ Could not parse: `404.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessEarnings )

<!-- DOCGEN:END getBusinessEarnings -->

<!-- DOCGEN:START getAllBusinessesEarnings -->
### getAllBusinessesEarnings

**Summary**: Get earnings for all businesses

**Description**: Retrieves earnings data for all businesses of type MERCHANT based on the provided date range.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getAllBusinessesEarnings )

<!-- DOCGEN:END getAllBusinessesEarnings -->

<!-- DOCGEN:START getTotalEarnings -->
### getTotalEarnings

**Summary**: Get total earnings for completed delivery orders

**Description**: Retrieves the total earnings from all completed delivery orders.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getTotalEarnings )

<!-- DOCGEN:END getTotalEarnings -->

<!-- DOCGEN:START getBusinessTotalEarnings -->
### getBusinessTotalEarnings

**Summary**: Get total earnings for a specific business

**Description**: Retrieves the total earnings of a specific business based on completed orders.

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

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessTotalEarnings )

<!-- DOCGEN:END getBusinessTotalEarnings -->

<!-- DOCGEN:START getBusinessReviewsById -->
### getBusinessReviewsById

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getBusinessReviewsById -->

<!-- DOCGEN:START editBusiness -->
### editBusiness

**Summary**: Edit business details

**Description**: This endpoint is used to update multiple details of a business, including address, delivery address, finances, and other specific data.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/editBusiness )

<!-- DOCGEN:END editBusiness -->

<!-- DOCGEN:START getBusinessStripeStatusByBusinessId -->
### getBusinessStripeStatusByBusinessId

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getBusinessStripeStatusByBusinessId -->

<!-- DOCGEN:START generateBusinessStripeByBusinessId -->
### generateBusinessStripeByBusinessId

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END generateBusinessStripeByBusinessId -->

<!-- DOCGEN:START onboardingEnd -->
### onboardingEnd

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END onboardingEnd -->

<!-- DOCGEN:START getBusynessFactorsBusinessIdList -->
### getBusynessFactorsBusinessIdList

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getBusynessFactorsBusinessIdList -->

<!-- DOCGEN:START addBusinessToFavorites -->
### addBusinessToFavorites

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END addBusinessToFavorites -->

<!-- DOCGEN:START removeBusinessFromFavorites -->
### removeBusinessFromFavorites

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END removeBusinessFromFavorites -->

<!-- DOCGEN:START getFavoriteBusinesses -->
### getFavoriteBusinesses

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getFavoriteBusinesses -->

<!-- DOCGEN:START getScheduledUsersByBusinessId -->
### getScheduledUsersByBusinessId

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getScheduledUsersByBusinessId -->

<!-- DOCGEN:START createScoringPointsHandler -->
### createScoringPointsHandler

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END createScoringPointsHandler -->

<!-- DOCGEN:START getPurchaseOrderLimit -->
### getPurchaseOrderLimit

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getPurchaseOrderLimit -->
