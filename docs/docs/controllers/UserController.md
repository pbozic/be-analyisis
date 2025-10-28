# UserController Controller



<!-- DOCGEN:START listUsers -->
### listUsers

**Summary**: Get a list of users

**Description**: Returns a list of users.

**Responses:**
- 200 - successful operation
- 400 - Error occurred while obtaining the user list

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getUsers )

<!-- DOCGEN:END listUsers -->



<!-- DOCGEN:START listPersonalUsers -->
### listPersonalUsers

**Summary**: Get a list of users

**Description**: Returns a list of users.

**Responses:**
- 200 - successful operation
- 400 - Error occurred while obtaining the user list

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getUsers )

<!-- DOCGEN:END listPersonalUsers -->



<!-- DOCGEN:START getUserById -->
### getUserById

**Summary**: Get a user by ID

**Description**: Retrieves detailed information about a specific user by their ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | user_id |  |

**Responses:**
- 200 - Successful operation, returns detailed user information
- 404 - User not found
- 400 - Error retrieving user information

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getUserById )

<!-- DOCGEN:END getUserById -->



<!-- DOCGEN:START me -->
### me

**Summary**: Retrieve authenticated user's information

**Description**: Retrieve the details of the authenticated user by their ID.

**Responses:**
- 200 - Successful operation, returns user info.
- 400 - Error obtaining user information.

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/retrieveUserInformation )

<!-- DOCGEN:END me -->



<!-- DOCGEN:START updateMe -->
### updateMe

**Summary**: Updates the current user's details

**Description**: This endpoint is used to update the current user's details.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200 - User updated successfully. Returns the updated user's details.
- 400 - Error updating user information.

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateMe )

<!-- DOCGEN:END updateMe -->



<!-- DOCGEN:START updateUserByUserId -->
### updateUserByUserId

**Summary**: Updates the current user's details

**Description**: This endpoint is used to update the current user's details.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200 - User updated successfully. Returns the updated user's details.
- 400 - Error updating user information.

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateMe )

<!-- DOCGEN:END updateUserByUserId -->



<!-- DOCGEN:START updatePassword -->
### updatePassword

**Summary**: Updates the current user's password

**Description**: This endpoint is used to update the current user's password.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200 - Password updated successfully. Returns the updated user's details.
- 400 - Error updating user information.

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updatePassword )

<!-- DOCGEN:END updatePassword -->



<!-- DOCGEN:START updateEmail -->
### updateEmail

**Summary**: Updates the current user's email

**Description**: This endpoint is used to update the current user's email.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200 - Email updated successfully. Returns the updated user's details.
- 400 - Error updating user information.

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateEmail )

<!-- DOCGEN:END updateEmail -->



<!-- DOCGEN:START updateProfilePicture -->
### updateProfilePicture

**Summary**: Updates the current user's profile picture

**Description**:  

**Responses:**
- 200 - Profile picture updated successfully
- 400 - Error updating profile picture

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateProfilePicture )

<!-- DOCGEN:END updateProfilePicture -->



<!-- DOCGEN:START updateUserTaxiPreferences -->
### updateUserTaxiPreferences

**Summary**: Updates the current user's taxi preferences

**Description**: This endpoint is used to update the current user's taxi preferences.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200 - Taxi preferences updated successfully. Returns the updated user's details.
- 400 - Error updating user information.

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateUserTaxiPreferences )

<!-- DOCGEN:END updateUserTaxiPreferences -->



<!-- DOCGEN:START updateUserNotificationPreferences -->
### updateUserNotificationPreferences

**Summary**: Updates the current user's notification preferences

**Description**: This endpoint is used to update the current user's notification preferences.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200 - Notification preferences updated successfully. Returns the updated user's details.
- 400 - Error updating user information.

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateUserNotificationPreferences )

<!-- DOCGEN:END updateUserNotificationPreferences -->



<!-- DOCGEN:START updateUserTaxiPushNotifications -->
### updateUserTaxiPushNotifications

**Summary**: Updates the current user's push notification preferences

**Description**: This endpoint is used to update the current user's push notification preferences.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200 - Push notification preferences updated successfully. Returns the updated user's details.
- 400 - Error updating user information.

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateUserTaxiPushNotifications )

<!-- DOCGEN:END updateUserTaxiPushNotifications -->



<!-- DOCGEN:START updateUserTransferPushNotifications -->
### updateUserTransferPushNotifications

**Summary**: Updates the current user's transfer push notification preferences

**Description**: This endpoint is used to update the current user's transfer push notification preferences.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200 - Transfer push notification preferences updated successfully. Returns the updated user's details.
- 400 - Error updating user information.

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateUserTransferPushNotifications )

<!-- DOCGEN:END updateUserTransferPushNotifications -->



<!-- DOCGEN:START updateUserDeliveryPushNotifications -->
### updateUserDeliveryPushNotifications

**Summary**: Updates the current user's delivery push notification preferences

**Description**: This endpoint is used to update the current user's delivery push notification preferences.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200 - Delivery push notification preferences updated successfully. Returns the updated user's details.
- 400 - Error updating user information.

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateUserDeliveryPushNotifications )

<!-- DOCGEN:END updateUserDeliveryPushNotifications -->



<!-- DOCGEN:START updateUserSpicyPreferences -->
### updateUserSpicyPreferences

**Summary**: Updates the current user's spicy preferences

**Description**: This endpoint is used to update the current user's spicy preferences.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200 - Spicy preferences updated successfully. Returns the updated user's details.
- 400 - Error updating user information.

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateUserSpicyPreferences )

<!-- DOCGEN:END updateUserSpicyPreferences -->



<!-- DOCGEN:START updateUserTransferPreferences -->
### updateUserTransferPreferences

**Summary**: Updates the current user's transfer preferences

**Description**: This endpoint is used to update the current user's transfer preferences.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200 - Transfer preferences updated successfully. Returns the updated user's details.
- 400 - Error updating user information.

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateUserTransferPreferences )

<!-- DOCGEN:END updateUserTransferPreferences -->



<!-- DOCGEN:START updateUserRadioPreferences -->
### updateUserRadioPreferences

**Summary**: Updates the current user's radio preferences

**Description**: This endpoint is used to update the current user's radio preferences.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200 - Radio preferences updated successfully. Returns the updated user's details.
- 400 - Error updating user information.

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateUserRadioPreferences )

<!-- DOCGEN:END updateUserRadioPreferences -->



<!-- DOCGEN:START updateUserAllergiesPreferences -->
### updateUserAllergiesPreferences

**Summary**: Updates the current user's allergies preferences

**Description**: This endpoint is used to update the current user's allergies preferences.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200 - Allergies preferences updated successfully. Returns the updated user's details.
- 400 - Error updating user information.

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateUserAllergiesPreferences )

<!-- DOCGEN:END updateUserAllergiesPreferences -->



<!-- DOCGEN:START updateTelephone -->
### updateTelephone

**Summary**: Updates the current user's telephone

**Description**: This endpoint is used to update the current user's telephone.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200 - Telephone updated successfully. Returns the updated user's details.
- 400 - Error updating user information.

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateTelephone )

<!-- DOCGEN:END updateTelephone -->



<!-- DOCGEN:START requestSMSVerification -->
### requestSMSVerification

**Summary**: Requests SMS verification

**Description**: This endpoint is used to request an SMS verification token.

**Responses:**
- 200 - SMS verification requested successfully.
- 400 - Error obtaining user information.

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/requestSMSVerification )

<!-- DOCGEN:END requestSMSVerification -->



<!-- DOCGEN:START verifyMe -->
### verifyMe

**Summary**: Verifies the current user

**Description**: This endpoint is used to verify the current user via a token.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200 - User verified successfully.
- 400 - Invalid token or error obtaining user information.

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/verifyMe )

<!-- DOCGEN:END verifyMe -->



<!-- DOCGEN:START oneSignalId -->
### oneSignalId

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END oneSignalId -->



<!-- DOCGEN:START addAddress -->
### addAddress

**Summary**: Adds an address to the current user

**Description**: This endpoint is used to add an address to the current user.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200 - Address added successfully. Returns the updated user's details.
- 400 - Error adding address.

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addAddress )

<!-- DOCGEN:END addAddress -->



<!-- DOCGEN:START deleteAddress -->
### deleteAddress

**Summary**: Deletes an address from the current user

**Description**: This endpoint is used to delete an address from the current user.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | address_id |  |

**Responses:**
- 200 - Address deleted successfully.
- 400 - Error deleting address.

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deleteAddress )

<!-- DOCGEN:END deleteAddress -->



<!-- DOCGEN:START deleteUserByUserId -->
### deleteUserByUserId

**Summary**: Deletes a user by their ID

**Description**: This endpoint is used to delete a user from the system by their user ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | user_id |  |

**Responses:**
- 200 - User deleted successfully.
- 400 - Error deleting user.
- 404 - User not found.

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deleteUserByUserId )

<!-- DOCGEN:END deleteUserByUserId -->



<!-- DOCGEN:START updateUserActiveByUserId -->
### updateUserActiveByUserId

**Summary**: Updates a user's active field by their ID

**Description**: This endpoint is used to update a user's active field by their ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | user_id |  |

**Request Body:** (optional)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200 - User active field updated successfully.
- 400 - Error updating active field.

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateUserActiveByUserId )

<!-- DOCGEN:END updateUserActiveByUserId -->



<!-- DOCGEN:START updateUserDisabledByUserId -->
### updateUserDisabledByUserId

**Summary**: Disables a user by their ID

**Description**: This endpoint is used to disable a user's account by their user ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | user_id |  |

**Responses:**
- 200 - User disabled successfully.
- 400 - Error disabling user.

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/disableUserByUserId )

<!-- DOCGEN:END updateUserDisabledByUserId -->



<!-- DOCGEN:START softDeleteUserByUserId -->
### softDeleteUserByUserId

**Summary**: Performs a "soft delete" for a user by their ID

**Description**: This endpoint is used to "soft delete" a user's account by their user ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | user_id |  |

**Responses:**
- 200 - User "soft delete" successful.
- 400 - Error soft deleting user.

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/softDeleteUserByUserId )

<!-- DOCGEN:END softDeleteUserByUserId -->



<!-- DOCGEN:START disableMe -->
### disableMe

**Summary**: Disables the current user

**Description**: This endpoint is used to disable the current user.

**Responses:**
- 200 - User disabled successfully. Returns user.
- 400 - Error updating user information.

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/disableMe )

<!-- DOCGEN:END disableMe -->



<!-- DOCGEN:START editAddress -->
### editAddress

**Summary**: Edits an address from the current user

**Description**: This endpoint is used to edit an address from the current user.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | address_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200 - Address edited successfully. Returns the updated user's details.
- 400 - Error editing address.

**Response Content:**

- ⚠️ Could not parse: `200.application/json`
- ⚠️ Could not parse: `400.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/editAddress )

<!-- DOCGEN:END editAddress -->



<!-- DOCGEN:START setPrimaryAddress -->
### setPrimaryAddress

**Summary**: Sets an address as the primary address for the current user

**Description**: This endpoint is used to set an address as the primary address for the current user.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | address_id |  |

**Responses:**
- 200 - Primary address set successfully.
- 400 - Error setting primary address.

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/setPrimaryAddress )

<!-- DOCGEN:END setPrimaryAddress -->



<!-- DOCGEN:START reviewUser -->
### reviewUser

**Summary**: Review a user

**Description**: This endpoint is used add a review of user.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200 - Primary address set successfully.
- 400 - Error setting primary address.

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/reviewUser )

<!-- DOCGEN:END reviewUser -->



<!-- DOCGEN:START getPaymentSheetCredentials -->
### getPaymentSheetCredentials

**Summary**: Get payment sheet credentials for a user

**Description**: This endpoint is used to get Stripe payment sheet credentials for a particular user.

**Responses:**
- 200 - {StripePaymentSheetCredentials}
- 400 - Error obtaining payment sheet credentials

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getPaymentSheetCredentials )

<!-- DOCGEN:END getPaymentSheetCredentials -->



<!-- DOCGEN:START requestToAddFundsToWallet -->
### requestToAddFundsToWallet

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END requestToAddFundsToWallet -->



<!-- DOCGEN:START requestPaymentIntent -->
### requestPaymentIntent

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END requestPaymentIntent -->



<!-- DOCGEN:START confirmPaymentIntent -->
### confirmPaymentIntent

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END confirmPaymentIntent -->



<!-- DOCGEN:START ping -->
### ping

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END ping -->



<!-- DOCGEN:START getSelfScheduledOrders -->
### getSelfScheduledOrders

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getSelfScheduledOrders -->



<!-- DOCGEN:START getMyReviews -->
### getMyReviews

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getMyReviews -->



<!-- DOCGEN:START getReviewsByUserId -->
### getReviewsByUserId

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getReviewsByUserId -->



<!-- DOCGEN:START registerChildUser -->
### registerChildUser

**Summary**: Register a new child user - new user and connected group_user entry

**Description**: This endpoint is used to register a new user and create group_user entry .

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200 - User registered successfully. Returns user info and tokens.
- 400 - Error something went wrong.

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/registerNewUser )

<!-- DOCGEN:END registerChildUser -->



<!-- DOCGEN:START updateChildUserEnabledByGroupUserId -->
### updateChildUserEnabledByGroupUserId

**Summary**: Updates the enabled field of the given child_user_id

**Description**: This endpoint is used to update enabled field of the given child_user_id

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200 - User updated successfully. Returns the updated group_user.
- 400 - Error updating group user enabled status.

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateChildUser )

<!-- DOCGEN:END updateChildUserEnabledByGroupUserId -->



<!-- DOCGEN:START updateChildUserAllowanceByGroupUserId -->
### updateChildUserAllowanceByGroupUserId

**Summary**: Updates the allowance of the given child_user_id for the given service_type

**Description**: This endpoint is used to update the allowance of the given child_user_id for the given service_type

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200 - User allowance updated successfully. Returns the updated group_user.
- 400 - Error updating group user enabled status.

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateChildUserAllowance )

<!-- DOCGEN:END updateChildUserAllowanceByGroupUserId -->



<!-- DOCGEN:START deleteChildUserByGroupUserId -->
### deleteChildUserByGroupUserId

**Summary**: Deletes a group_user by their ID

**Description**: This endpoint is used to delete a child user from the system by their group_user ID.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | group_user_id |  |

**Responses:**
- 200 - User deleted successfully.
- 400 - Error deleting user.
- 404 - User not found.

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deleteChildUserByGroupUserId )

<!-- DOCGEN:END deleteChildUserByGroupUserId -->



<!-- DOCGEN:START getAvailableWalletBalance -->
### getAvailableWalletBalance

**Summary**: Get wallet balance from wallet_funds.

**Description**: This endpoint is used to check available wallet balance for a particular user.

**Responses:**
- 200 - Wallet balance number
- 400 - Error checking wallet balances

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getPaymentSheetCredentials )

<!-- DOCGEN:END getAvailableWalletBalance -->



<!-- DOCGEN:START getFamilyWalletBalanceAndType -->
### getFamilyWalletBalanceAndType

**Summary**: Get family wallet type and minimum between allowance and actual family wallet balance.

**Description**: This endpoint is used to check wallet balance and type for a particular user.

**Responses:**
- 200 - family_wallet_balance number, family_wallet_type
- 400 - Error checking wallet balances

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getPaymentSheetCredentials )

<!-- DOCGEN:END getFamilyWalletBalanceAndType -->



<!-- DOCGEN:START updateWalletBalance -->
### updateWalletBalance

**Summary**: Update wallet balance for a user.

**Description**: This endpoint is used to update the wallet balance for a particular user.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | user_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200 - Wallet balance updated successfully.
- 400 - Error updating wallet balance.

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateWalletBalance )

<!-- DOCGEN:END updateWalletBalance -->



<!-- DOCGEN:START getTransactions -->
### getTransactions

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getTransactions -->



<!-- DOCGEN:START updateUserLanguage -->
### updateUserLanguage

**Summary**: Update the language preference for a user.

**Description**: This endpoint is used to update the language preference for a particular user.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200 - Language updated successfully. Returns the updated user details.
- 400 - Error updating user language.

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateUserLanguage )

<!-- DOCGEN:END updateUserLanguage -->



<!-- DOCGEN:START getUserByReferralCode -->
### getUserByReferralCode

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getUserByReferralCode -->



<!-- DOCGEN:START redeemReferralCode -->
### redeemReferralCode

**Summary**: Redeem a referral code for an existing user

**Description**: This endpoint allows an existing user to redeem a referral code

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200 - Referral code redeemed successfully
- 400 - Error redeeming referral code

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/redeemReferralCode )

<!-- DOCGEN:END redeemReferralCode -->



<!-- DOCGEN:START claimReward -->
### claimReward

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END claimReward -->



<!-- DOCGEN:START getUserCredits -->
### getUserCredits

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getUserCredits -->



<!-- DOCGEN:START getMyActiveOrderIds -->
### getMyActiveOrderIds

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getMyActiveOrderIds -->



<!-- DOCGEN:START getMyActiveOrders -->
### getMyActiveOrders

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getMyActiveOrders -->



<!-- DOCGEN:START getReferral -->
### getReferral

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END getReferral -->



<!-- DOCGEN:START updateMarketingNotifications -->
### updateMarketingNotifications

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END updateMarketingNotifications -->



<!-- DOCGEN:START updateAdsPersonalization -->
### updateAdsPersonalization

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END updateAdsPersonalization -->



<!-- DOCGEN:START updateNewsletter -->
### updateNewsletter

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END updateNewsletter -->



<!-- DOCGEN:START requestData -->
### requestData

**Summary**:  

**Description**:  

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/ )

<!-- DOCGEN:END requestData -->

