# BusinessTeamController Controller

<!-- DOCGEN:START getBusinessTeamsByBusinessId -->
### getBusinessTeamsByBusinessId

**Summary**: Get all business teams for a business

**Description**: Retrieves all business teams that belong to a given business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Responses:**
- 200
- 500

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessTeamsByBusinessId )

<!-- DOCGEN:END getBusinessTeamsByBusinessId -->

<!-- DOCGEN:START getBusinessTeamById -->
### getBusinessTeamById

**Summary**: Get a business team by ID

**Description**: Retrieves a single business team by its ID including users.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_teams_id |  |

**Responses:**
- 200
- 404
- 500

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getBusinessTeamById )

<!-- DOCGEN:END getBusinessTeamById -->

<!-- DOCGEN:START createBusinessTeam -->
### createBusinessTeam

**Summary**: Create a new business team

**Description**: Creates a new business team; optionally assigns initial users.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 500

**Response Content:**

- Status: 201, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createBusinessTeam )

<!-- DOCGEN:END createBusinessTeam -->

<!-- DOCGEN:START updateBusinessTeam -->
### updateBusinessTeam

**Summary**: Update an existing business team

**Description**: Updates fields such as team name or limit per person.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_teams_id |  |

**Request Body:** (optional)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 404
- 500

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateBusinessTeam )

<!-- DOCGEN:END updateBusinessTeam -->

<!-- DOCGEN:START editBusinessTeamUsers -->
### editBusinessTeamUsers

**Summary**: Update users in a business team

**Description**: Adds and/or removes users from the specified business team.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_teams_id |  |

**Request Body:** (optional)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400
- 404
- 500

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/editBusinessTeamUsers )

<!-- DOCGEN:END editBusinessTeamUsers -->

<!-- DOCGEN:START setBusinessTeamLimit -->
### setBusinessTeamLimit

**Summary**: Update team limit per person

**Description**: Updates the limit_per_person value for the team.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_teams_id |  |

**Request Body:** (optional)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 404
- 500

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/setBusinessTeamLimit )

<!-- DOCGEN:END setBusinessTeamLimit -->

<!-- DOCGEN:START setBusinessTeamName -->
### setBusinessTeamName

**Summary**: Update team name

**Description**: Updates the team_name for the business team.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_teams_id |  |

**Request Body:** (optional)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 404
- 500

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/setBusinessTeamName )

<!-- DOCGEN:END setBusinessTeamName -->

<!-- DOCGEN:START deleteBusinessTeam -->
### deleteBusinessTeam

**Summary**: Delete a business team

**Description**: Deletes the specified business team.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_teams_id |  |

**Responses:**
- 200
- 500

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/deleteBusinessTeam )

<!-- DOCGEN:END deleteBusinessTeam -->

<!-- DOCGEN:START addUserToTeam -->
### addUserToTeam

**Summary**: Add an unassigned user to a business team

**Description**: Adds a user to the specified team.

**Request Body:** (optional)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400
- 404
- 500

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/addUserToTeam )

<!-- DOCGEN:END addUserToTeam -->

<!-- DOCGEN:START removeUserFromTeam -->
### removeUserFromTeam

**Summary**: Remove a user from a business team

**Description**: Removes a user from their current business team.

**Responses:**
- 200
- 400
- 404
- 500

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/removeUserFromTeam )

<!-- DOCGEN:END removeUserFromTeam -->

<!-- DOCGEN:START moveUserToTeam -->
### moveUserToTeam

**Summary**: Move a user to a different business team

**Description**: Moves a user from their current team (if any) to a new team.

**Request Body:** (optional)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400
- 404
- 500

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/moveUserToTeam )

<!-- DOCGEN:END moveUserToTeam -->

