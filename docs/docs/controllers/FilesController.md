# FilesController Controller

<!-- DOCGEN:START createFile -->

### createFile

**Summary**: Create a file

**Description**: Creates a new file record and uploads its content to S3.

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**

- 200
- 500

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createFile)

<!-- DOCGEN:END createFile -->

<!-- DOCGEN:START updateFileById -->

### updateFileById

**Summary**: Update a file by ID

**Description**: Updates file metadata and replaces its content in S3.

**Parameters:**

| Name      | In   | Type    | Description |
| --------- | ---- | ------- | ----------- |
| undefined | path | file_id |             |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**

- 200
- 404
- 500

**Response Content:**

- Status: 200, Type: `unknown`, Content-Type: `application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateFileById)

<!-- DOCGEN:END updateFileById -->
