# TutorialsController Controller

<!-- DOCGEN:START listTutorials -->
### listTutorials

**Summary**: List tutorials with current user's status

**Description**: Returns all tutorials with status for the current epoch for the authenticated user.

**Responses:**
- 200

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/listTutorialsWithStatus )

<!-- DOCGEN:END listTutorials -->

<!-- DOCGEN:START resetTutorials -->
### resetTutorials

**Summary**: Reset tutorials by incrementing epoch for the authenticated user

**Description**: Increments user_tutorial_state.epoch which resets per-tutorial statuses for next run.

**Responses:**
- 200

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/resetTutorials )

<!-- DOCGEN:END resetTutorials -->

<!-- DOCGEN:START setTutorialStatus -->
### setTutorialStatus

**Summary**: Set a tutorial status for the authenticated user

**Description**: Upserts user_tutorials for the current epoch and given tutorial key.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/setTutorialStatus )

<!-- DOCGEN:END setTutorialStatus -->
