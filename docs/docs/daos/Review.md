# Review DAO

<!-- DOCGEN:START createReviewableBusiness -->
### createReviewableBusiness

**Description**: Ensure a business has a reviewable; creates and connects if missing.

**Parameters**:
- bussines_id: {string} - Business ID.

**Returns**: {Promise<object>} - Created reviewable row.

<!-- DOCGEN:END createReviewableBusiness -->

<!-- DOCGEN:START createReviewableUser -->
### createReviewableUser

**Description**: Ensure a user has a reviewable; creates and connects if missing.

**Parameters**:
- user_id: {string} - User ID.

**Returns**: {Promise<object>} - Created reviewable row.

<!-- DOCGEN:END createReviewableUser -->

<!-- DOCGEN:START createReview -->
### createReview

**Description**: Create a review record.

**Parameters**:
- review: {object} - Review payload (author_id, reviewable_id, rating, comment, feedback).

**Returns**: {Promise<object>} - Created review.

<!-- DOCGEN:END createReview -->

<!-- DOCGEN:START getReviewsByUserId -->
### getReviewsByUserId

**Description**: Get reviews authored by a user.

**Parameters**:
- user_id: {string} - Author user ID.

**Returns**: {Promise<object[]>} - Reviews.

<!-- DOCGEN:END getReviewsByUserId -->

<!-- DOCGEN:START ensureDriverReviewable -->
### ensureDriverReviewable

**Description**: Get or create a reviewable for a driver and return its id.

**Parameters**:
- driver_id: {string} - Driver ID.

**Returns**: {Promise<string>} - reviewable_id

<!-- DOCGEN:END ensureDriverReviewable -->

<!-- DOCGEN:START ensureBookingReviewable -->
### ensureBookingReviewable

**Description**: Get or create a reviewable for a booking and return its id.

**Parameters**:
- booking_id: {string} - Booking ID.

**Returns**: {Promise<string>} - reviewable_id

<!-- DOCGEN:END ensureBookingReviewable -->

<!-- DOCGEN:START ensureReservationModuleReviewable -->
### ensureReservationModuleReviewable

**Description**: Get or create a reviewable for a reservation module and return its id.

**Parameters**:
- reservation_module_id: {string} - Reservation module ID.

**Returns**: {Promise<string>} - reviewable_id

<!-- DOCGEN:END ensureReservationModuleReviewable -->

<!-- DOCGEN:START ensureTransportModuleReviewable -->
### ensureTransportModuleReviewable

**Description**: Get or create a reviewable for a transport module and return its id.

**Parameters**:
- transport_module_id: {string} - Transport module ID.

**Returns**: {Promise<string>} - reviewable_id

<!-- DOCGEN:END ensureTransportModuleReviewable -->

<!-- DOCGEN:START ensureStoresReviewable -->
### ensureStoresReviewable

**Description**: Get or create a reviewable for a store and return its id.

**Parameters**:
- stores_id: {string} - Stores ID.

**Returns**: {Promise<string>} - reviewable_id

<!-- DOCGEN:END ensureStoresReviewable -->

<!-- DOCGEN:START ensureFoodDrinksReviewable -->
### ensureFoodDrinksReviewable

**Description**: Get or create a reviewable for a food_drinks entry and return its id.

**Parameters**:
- food_drinks_id: {string} - Food and drinks ID.

**Returns**: {Promise<string>} - reviewable_id

<!-- DOCGEN:END ensureFoodDrinksReviewable -->

<!-- DOCGEN:START reviewDriver -->
### reviewDriver

<!-- DOCGEN:END reviewDriver -->

<!-- DOCGEN:START reviewBooking -->
### reviewBooking

<!-- DOCGEN:END reviewBooking -->

<!-- DOCGEN:START reviewReservationBusiness -->
### reviewReservationBusiness

<!-- DOCGEN:END reviewReservationBusiness -->

<!-- DOCGEN:START reviewTransportBusiness -->
### reviewTransportBusiness

<!-- DOCGEN:END reviewTransportBusiness -->

<!-- DOCGEN:START reviewStore -->
### reviewStore

<!-- DOCGEN:END reviewStore -->

<!-- DOCGEN:START reviewFoodDrinks -->
### reviewFoodDrinks

<!-- DOCGEN:END reviewFoodDrinks -->

<!-- DOCGEN:START getReviewsForDriver -->
### getReviewsForDriver

<!-- DOCGEN:END getReviewsForDriver -->

