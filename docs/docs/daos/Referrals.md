# Referrals DAO

<!-- DOCGEN:START createReferral -->

### createReferral

**Description**: Create a referral linking referrer and referred users with a referral code.

**Parameters**:

- referrerUserId: {string} - Referrer user ID.
- referredUserId: {string} - Referred user ID.
- referralCode: {string} - Referral code used.

**Returns**: {Promise<object>} - Created referral with referrer included.

<!-- DOCGEN:END createReferral -->

<!-- DOCGEN:START getReferralByReferralId -->

### getReferralByReferralId

**Description**: Get a referral by its referral_id.

**Parameters**:

- referralId: {string} - Referral ID.

**Returns**: {Promise<object|null>} - Referral or null.

<!-- DOCGEN:END getReferralByReferralId -->

<!-- DOCGEN:START updateReferralConditionsMet -->

### updateReferralConditionsMet

**Description**: Update whether referral conditions are met.

**Parameters**:

- referralId: {string} - Referral ID.
- conditionsMet: {boolean} - Conditions met flag.

**Returns**: {Promise<object>} - Updated referral.

<!-- DOCGEN:END updateReferralConditionsMet -->

<!-- DOCGEN:START updateReferralRewardClaimed -->

### updateReferralRewardClaimed

**Description**: Update whether the referral reward has been claimed.

**Parameters**:

- referralId: {string} - Referral ID.
- claimed: {boolean} - Reward claimed flag.

**Returns**: {Promise<object>} - Updated referral.

<!-- DOCGEN:END updateReferralRewardClaimed -->

<!-- DOCGEN:START getReferralByReferredUserId -->

### getReferralByReferredUserId

**Description**: Get a referral by referred_user_id with referrer and referred included.

**Parameters**:

- referredUserId: {string} - Referred user ID.

**Returns**: {Promise<object|null>} - Referral or null.

<!-- DOCGEN:END getReferralByReferredUserId -->

<!-- DOCGEN:START getReferralsByReferrerUserId -->

### getReferralsByReferrerUserId

**Description**: Get referrals initiated by a referrer; includes referred user.

**Parameters**:

- referrerUserId: {string} - Referrer user ID.

**Returns**: {Promise<object[]>} - Referrals.

<!-- DOCGEN:END getReferralsByReferrerUserId -->
