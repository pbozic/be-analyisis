# User DAO

<!-- DOCGEN:START getUsers -->
### getUsers

**Description**: Get users with optional prisma args and child/parent includes.

**Parameters**:
- args: {object} - Prisma findMany args.

**Returns**: {Promise<object[]>} - Users.

<!-- DOCGEN:END getUsers -->

<!-- DOCGEN:START getUserById -->
### getUserById

**Description**: Get a user by id including business user and address info.

**Parameters**:
- user_id: {string} - User ID.
- args: {object} - Additional Prisma args to merge.

**Returns**: {Promise<object|null>} - User or null.

<!-- DOCGEN:END getUserById -->

<!-- DOCGEN:START getUserByReferralCode -->
### getUserByReferralCode

**Description**: Get a user by referral code.

**Parameters**:
- code: {string} - Referral code.
- args: {object} - Additional Prisma args.

**Returns**: {Promise<object|null>} - User or null.

<!-- DOCGEN:END getUserByReferralCode -->

<!-- DOCGEN:START getScheduledUsers -->
### getScheduledUsers

**Description**: Get scheduled daily meal users, ordered by merchant daily_users_sorted if configured.

**Returns**: {Promise<object[]>} - Scheduled users with addresses.

<!-- DOCGEN:END getScheduledUsers -->

<!-- DOCGEN:START getUserByEmailOrTelephone -->
### getUserByEmailOrTelephone

**Description**: Find a user by matching email or telephone fields.

**Parameters**:
- query: {string} - Email or telephone to match.
- args: {object} - Additional Prisma args.

**Returns**: {Promise<object|null>} - User or null.

<!-- DOCGEN:END getUserByEmailOrTelephone -->

<!-- DOCGEN:START getUserByEmail -->
### getUserByEmail

**Description**: Find a user by email.

**Parameters**:
- query: {string} - Email.
- args: {object} - Additional Prisma args.

**Returns**: {Promise<object|null>} - User or null.

<!-- DOCGEN:END getUserByEmail -->

<!-- DOCGEN:START getUserByTelephone -->
### getUserByTelephone

**Description**: Find a user by telephone.

**Parameters**:
- query: {string} - Telephone string.
- args: {object} - Additional Prisma args.

**Returns**: {Promise<object|null>} - User or null.

<!-- DOCGEN:END getUserByTelephone -->

<!-- DOCGEN:START getUserByResetToken -->
### getUserByResetToken

**Description**: Get reset token row with included user by token string.

**Parameters**:
- resetToken: {string} - Reset token.
- args: {object} - Additional Prisma args.

**Returns**: {Promise<object|null>} - Token row or null.

<!-- DOCGEN:END getUserByResetToken -->

<!-- DOCGEN:START getUser -->
### getUser

**Description**: Get a user by unique email.

**Parameters**:
- email: {string} - Email.
- args: {object} - Additional Prisma args.

**Returns**: {Promise<object|null>} - User or null.

<!-- DOCGEN:END getUser -->

<!-- DOCGEN:START updateUser -->
### updateUser

**Description**: Update user general fields (excludes email, password, telephone, addresses, role).

**Parameters**:
- user_id: {string} - User ID.
- user: {object} - Fields to update.

**Returns**: {Promise<object>} - Updated user.

<!-- DOCGEN:END updateUser -->

<!-- DOCGEN:START updateScheduledUser -->
### updateScheduledUser

**Description**: Update user including adding address include for scheduled users.

**Parameters**:
- user_id: {string} - User ID.
- user: {object} - Fields to update.

**Returns**: {Promise<object>} - Updated user with addresses included.

<!-- DOCGEN:END updateScheduledUser -->

<!-- DOCGEN:START updateEmail -->
### updateEmail

**Description**: Update user email.

**Parameters**:
- user_id: {string} - User ID.
- email: {string} - New email.

**Returns**: {Promise<object>} - Updated user.

<!-- DOCGEN:END updateEmail -->

<!-- DOCGEN:START updateTelephone -->
### updateTelephone

**Description**: Update user telephone fields.

**Parameters**:
- user_id: {string} - User ID.
- telephone: {object} - Telephone fields (telephone, telephone_code, telephone_number).

**Returns**: {Promise<object>} - Updated user.

<!-- DOCGEN:END updateTelephone -->

<!-- DOCGEN:START updateUserPassword -->
### updateUserPassword

**Description**: Update user password (hashed upstream).

**Parameters**:
- user_id: {string} - User ID.
- password: {string} - Hashed password.

**Returns**: {Promise<object>} - Updated user.

<!-- DOCGEN:END updateUserPassword -->

<!-- DOCGEN:START updateUserType -->
### updateUserType

**Description**: Update user role.

**Parameters**:
- user_id: {string} - User ID.
- user_role: {string} - Role enum value.

**Returns**: {Promise<object>} - Updated user.

<!-- DOCGEN:END updateUserType -->

<!-- DOCGEN:START updateUserTaxiPreferences -->
### updateUserTaxiPreferences

**Description**: Update taxi preferences JSON for user.

**Parameters**:
- user_id: {string} - User ID.
- taxiPreferences: {object} - JSON preferences.

**Returns**: {Promise<object>} - Updated user.

<!-- DOCGEN:END updateUserTaxiPreferences -->

<!-- DOCGEN:START updateUserDateOfBirth -->
### updateUserDateOfBirth

**Description**: Update user's date of birth.

**Parameters**:
- user_id: {string} - User ID.
- dateOfBirth: {string|Date} - Date of birth.

**Returns**: {Promise<object>} - Updated user.

<!-- DOCGEN:END updateUserDateOfBirth -->

<!-- DOCGEN:START updateUserDisabled -->
### updateUserDisabled

**Description**: Suspend/unsuspend user and log account action in a transaction.

**Parameters**:
- user_id: {string} - User ID.
- disabled: {boolean} - Disabled flag.
- action_creator_user_id: {string} - Admin user ID.
- reason: {string} - Reason text.

**Returns**: {Promise<object>} - Updated user.

<!-- DOCGEN:END updateUserDisabled -->

<!-- DOCGEN:START updateUserNotificationPreferences -->
### updateUserNotificationPreferences

**Description**: Update general notification preferences JSON.

**Parameters**:
- user_id: {string} - User ID.
- notificationPreferences: {object} - Preferences JSON.

**Returns**: {Promise<object>} - Updated user.

<!-- DOCGEN:END updateUserNotificationPreferences -->

<!-- DOCGEN:START updateUserTaxiPushNotifications -->
### updateUserTaxiPushNotifications

**Description**: Update taxi push notification preferences JSON.

**Parameters**:
- user_id: {string} - User ID.
- pushNotificationPreferences: {object} - Preferences JSON.

**Returns**: {Promise<object>} - Updated user.

<!-- DOCGEN:END updateUserTaxiPushNotifications -->

<!-- DOCGEN:START updateUserTransferPushNotifications -->
### updateUserTransferPushNotifications

**Description**: Update transfer push notification preferences JSON.

**Parameters**:
- user_id: {string} - User ID.
- pushNotificationPreferences: {object} - Preferences JSON.

**Returns**: {Promise<object>} - Updated user.

<!-- DOCGEN:END updateUserTransferPushNotifications -->

<!-- DOCGEN:START updateUserDeliveryPushNotifications -->
### updateUserDeliveryPushNotifications

**Description**: Update delivery push notification preferences JSON.

**Parameters**:
- user_id: {string} - User ID.
- pushNotificationPreferences: {object} - Preferences JSON.

**Returns**: {Promise<object>} - Updated user.

<!-- DOCGEN:END updateUserDeliveryPushNotifications -->

<!-- DOCGEN:START updateUserSpicyPreferences -->
### updateUserSpicyPreferences

**Description**: Update spicy preferences JSON.

**Parameters**:
- user_id: {string} - User ID.
- spicyPreferences: {object} - Preferences JSON.

**Returns**: {Promise<object>} - Updated user.

<!-- DOCGEN:END updateUserSpicyPreferences -->

<!-- DOCGEN:START updateUserTransferPreferences -->
### updateUserTransferPreferences

**Description**: Update transfer preferences JSON.

**Parameters**:
- user_id: {string} - User ID.
- transfer_preferences: {object} - Preferences JSON.

**Returns**: {Promise<object>} - Updated user.

<!-- DOCGEN:END updateUserTransferPreferences -->

<!-- DOCGEN:START updateUserRadioPreferences -->
### updateUserRadioPreferences

**Description**: Update radio preferences JSON.

**Parameters**:
- user_id: {string} - User ID.
- radioPreferences: {object} - Preferences JSON.

**Returns**: {Promise<object>} - Updated user.

<!-- DOCGEN:END updateUserRadioPreferences -->

<!-- DOCGEN:START updateUserAllergiesPreferences -->
### updateUserAllergiesPreferences

**Description**: Update allergies preferences JSON.

**Parameters**:
- user_id: {string} - User ID.
- allergiesPreferences: {object} - Preferences JSON.

**Returns**: {Promise<object>} - Updated user.

<!-- DOCGEN:END updateUserAllergiesPreferences -->

<!-- DOCGEN:START updateUserTelephoneVerified -->
### updateUserTelephoneVerified

**Description**: Set phone verified flag.

**Parameters**:
- user_id: {string} - User ID.
- telephoneVerified: {boolean} - Verified flag.

**Returns**: {Promise<object>} - Updated user.

<!-- DOCGEN:END updateUserTelephoneVerified -->

<!-- DOCGEN:START createNewUser -->
### createNewUser

**Description**: Create a new user; optionally hash password and enforce unique email; drivers inactive by default.

**Parameters**:
- user: {object} - User payload.
- hashPassword?: {boolean} - Whether to hash user.password.
- tx?: {object} - Prisma transaction/client.

**Returns**: {Promise<object>} - Created user with relations.

<!-- DOCGEN:END createNewUser -->

<!-- DOCGEN:START deleteUserByUserId -->
### deleteUserByUserId

**Description**: Delete user by id.

**Parameters**:
- userId: {string} - User ID.

**Returns**: {Promise<object>} - Deleted user.

<!-- DOCGEN:END deleteUserByUserId -->

<!-- DOCGEN:START updateWalletBalance -->
### updateWalletBalance

**Description**: Create wallet funds record for a user and optionally attach documents and upload files to S3.

**Parameters**:
- userId: {string} - User ID.
- amount: {number} - Amount in currency units (not cents).
- documents: {object[]} - Optional documents array with base64 files to persist.

**Returns**: {Promise<object>} - Created wallet funds transaction.

<!-- DOCGEN:END updateWalletBalance -->

<!-- DOCGEN:START getTransactions -->
### getTransactions

**Description**: Get transactions for a user.

**Parameters**:
- userId: {string} - User ID.

**Returns**: {Promise<object[]>} - Transactions.

<!-- DOCGEN:END getTransactions -->

<!-- DOCGEN:START updateUserLanguage -->
### updateUserLanguage

**Description**: Update user's language preference.

**Parameters**:
- user_id: {string} - User ID.
- language: {string} - Language code.

**Returns**: {Promise<object>} - Updated user.

<!-- DOCGEN:END updateUserLanguage -->

<!-- DOCGEN:START wipeUserPersonalData -->
### wipeUserPersonalData

**Description**: Anonymize user's personal data and mark phone as unverified.

**Parameters**:
- user_id: {string} - User ID.

**Returns**: {Promise<object>} - Updated user.

<!-- DOCGEN:END wipeUserPersonalData -->

<!-- DOCGEN:START updateUserActive -->
### updateUserActive

**Description**: Activate/deactivate user and log account action in a transaction.

**Parameters**:
- user_id: {string} - User ID.
- active: {boolean} - Active flag.
- action_creator_user_id: {string} - Admin user ID.
- reason: {string} - Reason text.

**Returns**: {Promise<object>} - Updated user.

<!-- DOCGEN:END updateUserActive -->

<!-- DOCGEN:START updateStripeCustomerId -->
### updateStripeCustomerId

**Description**: Set Stripe customer id for user.

**Parameters**:
- user_id: {string} - User ID.
- customer_id: {string} - Stripe customer id.

**Returns**: {Promise<object>} - Updated user.

<!-- DOCGEN:END updateStripeCustomerId -->

<!-- DOCGEN:START addCredits -->
### addCredits

**Description**: Update user credit fields.

**Parameters**:
- user_id: {string} - User ID.
- updateData: {object} - Fields to update.

**Returns**: {Promise<object>} - Updated user.

<!-- DOCGEN:END addCredits -->

<!-- DOCGEN:START updateUserMarketingNotifications -->
### updateUserMarketingNotifications

**Description**: Toggle marketing push notification preference.

**Parameters**:
- user_id: {string} - User ID.
- data: {boolean} - New value.

**Returns**: {Promise<object>} - Updated user.

<!-- DOCGEN:END updateUserMarketingNotifications -->

<!-- DOCGEN:START updateUserAdsPersonalization -->
### updateUserAdsPersonalization

**Description**: Toggle ads personalization preference.

**Parameters**:
- user_id: {string} - User ID.
- data: {boolean} - New value.

**Returns**: {Promise<object>} - Updated user.

<!-- DOCGEN:END updateUserAdsPersonalization -->

<!-- DOCGEN:START updateUserNewsletter -->
### updateUserNewsletter

**Description**: Toggle newsletter subscription.

**Parameters**:
- user_id: {string} - User ID.
- data: {boolean} - New value.

**Returns**: {Promise<object>} - Updated user.

<!-- DOCGEN:END updateUserNewsletter -->

<!-- DOCGEN:START linkRolesToUser -->
### linkRolesToUser

**Description**: Link one or more role rows to a user (supports transaction client).

**Parameters**:
- user_id: {string} - User ID.
- roles: {object[]} - Role payloads to create and link.
- tx?: {object} - Prisma transaction/client.

**Returns**: {Promise<object[]>} - Created role rows.

<!-- DOCGEN:END linkRolesToUser -->

