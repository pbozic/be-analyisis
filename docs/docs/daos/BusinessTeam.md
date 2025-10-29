# BusinessTeam DAO

<!-- DOCGEN:START createBusinessTeam -->
### createBusinessTeam

**Description**: Creates a new business team

**Parameters**:
- data: {Object} - The business team data

**Returns**: {Promise} - Created business team

<!-- DOCGEN:END createBusinessTeam -->

<!-- DOCGEN:START updateBusinessTeam -->
### updateBusinessTeam

**Description**: Updates an existing business team

**Parameters**:
- data: {Object} - The business team data with id

**Returns**: {Promise} - Updated business team

<!-- DOCGEN:END updateBusinessTeam -->

<!-- DOCGEN:START addUserToTeam -->
### addUserToTeam

**Description**: Add a user to a business team

**Parameters**:
- business_teams_id: {string} - The ID of the business team
- user_id: {string} - The ID of the user to add

**Returns**: {Promise} - Updated user

<!-- DOCGEN:END addUserToTeam -->

<!-- DOCGEN:START removeUserFromTeam -->
### removeUserFromTeam

**Description**: Remove a user from a business team

**Parameters**:
- user_id: {string} - The ID of the user to remove

**Returns**: {Promise} - Updated business team

<!-- DOCGEN:END removeUserFromTeam -->

<!-- DOCGEN:START moveUserToTeam -->
### moveUserToTeam

**Description**: Move a user from their current team (if any) to a new team

**Parameters**:
- user_id: {string} - The ID of the user to move
- new_team_id: {string} - The ID of the team to move the user to

**Returns**: {Promise} - Updated new business team

<!-- DOCGEN:END moveUserToTeam -->

<!-- DOCGEN:START getBusinessTeamById -->
### getBusinessTeamById

**Description**: Retrieves a business team by its ID

**Parameters**:
- business_teams_id: {string} - The ID of the business team

**Returns**: {Promise} - Business team with associated users

<!-- DOCGEN:END getBusinessTeamById -->

<!-- DOCGEN:START getBusinessTeamsForBusinessId -->
### getBusinessTeamsForBusinessId

**Description**: Retrieves all business teams for a specific business

**Parameters**:
- business_id: {string} - The ID of the business

**Returns**: {Promise} - Array of business teams with associated users

<!-- DOCGEN:END getBusinessTeamsForBusinessId -->

<!-- DOCGEN:START deleteBusinessTeam -->
### deleteBusinessTeam

**Description**: Deletes a business team by its ID

**Parameters**:
- business_teams_id: {string} - The ID of the business team to delete

**Returns**: {Promise} - Deleted business team

<!-- DOCGEN:END deleteBusinessTeam -->

