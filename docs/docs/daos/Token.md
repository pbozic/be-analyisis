# Token DAO

<!-- DOCGEN:START getPasswordToken -->
### getPasswordToken

**Description**: Find an active password reset token by token string.

**Parameters**:
- token: {string} - Token string.

**Returns**: {Promise<object|null>} - Token row or null.

<!-- DOCGEN:END getPasswordToken -->

<!-- DOCGEN:START getActiveSMSToken -->
### getActiveSMSToken

**Description**: Get the active SMS verification token for a user (if any).

**Parameters**:
- user: {object} - User object with user_id.

**Returns**: {Promise<object|null>} - Active token or null.

<!-- DOCGEN:END getActiveSMSToken -->

<!-- DOCGEN:START updateToken -->
### updateToken

**Description**: Update a token by id.

**Parameters**:
- token_id: {string} - Token ID.
- data: {object} - Fields to update.

**Returns**: {Promise<object>} - Updated token.

<!-- DOCGEN:END updateToken -->

<!-- DOCGEN:START saveSMSToken -->
### saveSMSToken

**Description**: Save a PHONE_VERIFICATION token for a user, deactivating previous ones.

**Parameters**:
- token: {object} - Token payload (user_id, token, expires_at).

**Returns**: {Promise<object>} - Created token.

<!-- DOCGEN:END saveSMSToken -->

<!-- DOCGEN:START savePasswordResetToken -->
### savePasswordResetToken

**Description**: Save a PASSWORD_RESET token for a user, deactivating previous ones.

**Parameters**:
- token: {object} - Token payload (user_id, token, expires_at).

**Returns**: {Promise<object>} - Created token.

<!-- DOCGEN:END savePasswordResetToken -->

<!-- DOCGEN:START generateSMSVerificationToken -->
### generateSMSVerificationToken

**Description**: Generate and persist a new SMS verification token for a user.

**Parameters**:
- user: {object} - User object with user_id.

**Returns**: {Promise<object>} - Created token.

<!-- DOCGEN:END generateSMSVerificationToken -->

<!-- DOCGEN:START generatePaswordResetToken -->
### generatePaswordResetToken

**Description**: Generate a unique password reset token and persist it for a user.

**Parameters**:
- user: {object} - User object with user_id.

**Returns**: {Promise<object>} - Created token.

<!-- DOCGEN:END generatePaswordResetToken -->

<!-- DOCGEN:START generateRegistrationSessionToken -->
### generateRegistrationSessionToken

**Description**: Generate a short-lived BUSINESS_REGISTRATION session token for a user.

**Parameters**:
- user: {object} - User object with user_id.

**Returns**: {Promise<object>} - Created token.

<!-- DOCGEN:END generateRegistrationSessionToken -->

<!-- DOCGEN:START validateRegistrationSessionToken -->
### validateRegistrationSessionToken

**Description**: Validate a BUSINESS_REGISTRATION token string and return token including user->business_users->business.

**Parameters**:
- tokenString: {string} - Token string to validate.

**Returns**: {Promise<object|null>} - Token row or null if invalid/expired.

<!-- DOCGEN:END validateRegistrationSessionToken -->

