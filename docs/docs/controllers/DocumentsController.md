# DocumentsController Controller


<!-- DOCGEN:START listDocuments -->
### listDocuments

**Summary**: Getall documents

**Description**: Retrievesall documents in the system. Intended for admin usage.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocuments)

<!-- DOCGEN:END listDocuments -->

<!-- DOCGEN:START getDocumentById -->
### getDocumentById

**Summary**: Geta document by ID

**Description**: Retrievesa specific document by its ID. Useful for detailed document viewing.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentById)

<!-- DOCGEN:END getDocumentById -->

<!-- DOCGEN:START getDocumentsForUser -->
### getDocumentsForUser

**Summary**: Getdocuments for a user

**Description**: Retrievesall documents associated with a specific user.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | userId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForUser)

<!-- DOCGEN:END getDocumentsForUser -->

<!-- DOCGEN:START getDocumentsForBusiness -->
### getDocumentsForBusiness

**Summary**: Getdocuments for a business

**Description**: Retrievesall documents associated with a specific business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | businessId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForBusiness)

<!-- DOCGEN:END getDocumentsForBusiness -->

<!-- DOCGEN:START getDocumentsForDeliveryPerson -->
### getDocumentsForDeliveryPerson

**Summary**: Getdocuments for a delivery person

**Description**: Retrievesall documents associated with a specific delivery person.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | deliveryPersonId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForDeliveryPerson)

<!-- DOCGEN:END getDocumentsForDeliveryPerson -->

<!-- DOCGEN:START getDocumentsForDriver -->
### getDocumentsForDriver

**Summary**: Getdocuments for a driver

**Description**: Retrievesall documents associated with a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driverId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForDriver)

<!-- DOCGEN:END getDocumentsForDriver -->

<!-- DOCGEN:START getDocumentsForVehicle -->
### getDocumentsForVehicle

**Summary**: Getdocuments for a vehicle

**Description**: Retrievesall documents associated with a specific vehicle.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicleId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForVehicle)

<!-- DOCGEN:END getDocumentsForVehicle -->

<!-- DOCGEN:START getDocumentsByDocumentType -->
### getDocumentsByDocumentType

**Summary**: Getdocuments by type

**Description**: Retrievesdocuments of a specific type across all entities.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | documentType |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsByType)

<!-- DOCGEN:END getDocumentsByDocumentType -->

<!-- DOCGEN:START getDocumentsForBusinessByDocumentType -->
### getDocumentsForBusinessByDocumentType

**Summary**: Getdocuments for a business by type

**Description**: Retrievesdocuments of a specific type associated with a business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | businessId |  |
| undefined | path | documentType |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForBusinessByType)

<!-- DOCGEN:END getDocumentsForBusinessByDocumentType -->

<!-- DOCGEN:START getDocumentsForUserByDocumentType -->
### getDocumentsForUserByDocumentType

**Summary**: Getdocuments for a user by type

**Description**: Retrievesdocuments of a specific type associated with a user.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_type |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForUserByDocumentType)

<!-- DOCGEN:END getDocumentsForUserByDocumentType -->

<!-- DOCGEN:START getDocumentsForDriverByDocumentType -->
### getDocumentsForDriverByDocumentType

**Summary**: Getdocuments for a driver by type

**Description**: Retrievesdocuments of a specific type associated with a driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driverId |  |
| undefined | path | documentType |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForDriverByType)

<!-- DOCGEN:END getDocumentsForDriverByDocumentType -->

<!-- DOCGEN:START getDocumentsForDeliveryPersonByDocumentType -->
### getDocumentsForDeliveryPersonByDocumentType

**Summary**: Getdocuments for a delivery person by type

**Description**: Retrievesdocuments of a specific type associated with a delivery person.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | deliveryPersonId |  |
| undefined | path | documentType |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForDeliveryPersonByType)

<!-- DOCGEN:END getDocumentsForDeliveryPersonByDocumentType -->

<!-- DOCGEN:START getDocumentsForVehicleByDocumentType -->
### getDocumentsForVehicleByDocumentType

**Summary**: Getdocuments for a vehicle by type

**Description**: Retrievesdocuments of a specific type associated with a vehicle.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicleId |  |
| undefined | path | documentType |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForVehicleByType)

<!-- DOCGEN:END getDocumentsForVehicleByDocumentType -->

<!-- DOCGEN:START createUserDocument -->
### createUserDocument

**Summary**: Createa document for a user

**Description**: Createsa new document and links it to a specific user.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | user_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createUserDocument)

<!-- DOCGEN:END createUserDocument -->

<!-- DOCGEN:START createBusinessDocument -->
### createBusinessDocument

**Summary**: Createa document for a business

**Description**: Createsa new document and links it to a specific business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createBusinessDocument)

<!-- DOCGEN:END createBusinessDocument -->

<!-- DOCGEN:START createDriverDocument -->
### createDriverDocument

**Summary**: Createa document for a driver

**Description**: Createsa new document and links it to a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createDriverDocument)

<!-- DOCGEN:END createDriverDocument -->

<!-- DOCGEN:START createVehicleDocument -->
### createVehicleDocument

**Summary**: Createa document for a vehicle

**Description**: Createsa new document and links it to a specific vehicle.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicle_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createVehicleDocument)

<!-- DOCGEN:END createVehicleDocument -->

<!-- DOCGEN:START createDeliveryPersonDocument -->
### createDeliveryPersonDocument

**Summary**: Createa document for a delivery person

**Description**: Createsa new document and links it to a specific delivery person.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_person_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createDeliveryPersonDocument)

<!-- DOCGEN:END createDeliveryPersonDocument -->

<!-- DOCGEN:START updateDocumentExpirationDate -->
### updateDocumentExpirationDate

**Summary**: Updatedocument's expiration date

**Description**: Updatesthe expiration date of a specific document.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDocumentExpirationDate)

<!-- DOCGEN:END updateDocumentExpirationDate -->

<!-- DOCGEN:START updateDocumentIssueDate -->
### updateDocumentIssueDate

**Summary**: Updatedocument's issue date

**Description**: Updatesthe issue date of a specific document.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDocumentIssueDate)

<!-- DOCGEN:END updateDocumentIssueDate -->

<!-- DOCGEN:START updateDocumentFiles -->
### updateDocumentFiles

**Summary**: Updatedocument's files

**Description**: Updatesthe files associated with a specific document.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDocumentFiles)

<!-- DOCGEN:END updateDocumentFiles -->

<!-- DOCGEN:START updateDocumentAdditionalInfo -->
### updateDocumentAdditionalInfo

**Summary**: Updatedocument's additional info

**Description**: Updatesthe additional information of a specific document.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDocumentAdditionalInfo)

<!-- DOCGEN:END updateDocumentAdditionalInfo -->

<!-- DOCGEN:START listDocuments -->
### listDocuments

**Summary**: Get all documents

**Description**: Retrieves all documents in the system. Intended for admin usage.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocuments )

<!-- DOCGEN:END listDocuments -->

<!-- DOCGEN:START getDocumentById -->
### getDocumentById

**Summary**: Get a document by ID

**Description**: Retrieves a specific document by its ID. Useful for detailed document viewing.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentById )

<!-- DOCGEN:END getDocumentById -->

<!-- DOCGEN:START getDocumentsForUser -->
### getDocumentsForUser

**Summary**: Get documents for a user

**Description**: Retrieves all documents associated with a specific user.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | userId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForUser )

<!-- DOCGEN:END getDocumentsForUser -->

<!-- DOCGEN:START getDocumentsForBusiness -->
### getDocumentsForBusiness

**Summary**: Get documents for a business

**Description**: Retrieves all documents associated with a specific business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | businessId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForBusiness )

<!-- DOCGEN:END getDocumentsForBusiness -->

<!-- DOCGEN:START getDocumentsForDeliveryPerson -->
### getDocumentsForDeliveryPerson

**Summary**: Get documents for a delivery person

**Description**: Retrieves all documents associated with a specific delivery person.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | deliveryPersonId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForDeliveryPerson )

<!-- DOCGEN:END getDocumentsForDeliveryPerson -->

<!-- DOCGEN:START getDocumentsForDriver -->
### getDocumentsForDriver

**Summary**: Get documents for a driver

**Description**: Retrieves all documents associated with a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driverId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForDriver )

<!-- DOCGEN:END getDocumentsForDriver -->

<!-- DOCGEN:START getDocumentsForVehicle -->
### getDocumentsForVehicle

**Summary**: Get documents for a vehicle

**Description**: Retrieves all documents associated with a specific vehicle.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicleId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForVehicle )

<!-- DOCGEN:END getDocumentsForVehicle -->

<!-- DOCGEN:START getDocumentsByDocumentType -->
### getDocumentsByDocumentType

**Summary**: Get documents by type

**Description**: Retrieves documents of a specific type across all entities.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | documentType |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsByType )

<!-- DOCGEN:END getDocumentsByDocumentType -->

<!-- DOCGEN:START getDocumentsForBusinessByDocumentType -->
### getDocumentsForBusinessByDocumentType

**Summary**: Get documents for a business by type

**Description**: Retrieves documents of a specific type associated with a business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | businessId |  |
| undefined | path | documentType |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForBusinessByType )

<!-- DOCGEN:END getDocumentsForBusinessByDocumentType -->

<!-- DOCGEN:START getDocumentsForUserByDocumentType -->
### getDocumentsForUserByDocumentType

**Summary**: Get documents for a user by type

**Description**: Retrieves documents of a specific type associated with a user.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_type |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForUserByDocumentType )

<!-- DOCGEN:END getDocumentsForUserByDocumentType -->

<!-- DOCGEN:START getDocumentsForDriverByDocumentType -->
### getDocumentsForDriverByDocumentType

**Summary**: Get documents for a driver by type

**Description**: Retrieves documents of a specific type associated with a driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driverId |  |
| undefined | path | documentType |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForDriverByType )

<!-- DOCGEN:END getDocumentsForDriverByDocumentType -->

<!-- DOCGEN:START getDocumentsForDeliveryPersonByDocumentType -->
### getDocumentsForDeliveryPersonByDocumentType

**Summary**: Get documents for a delivery person by type

**Description**: Retrieves documents of a specific type associated with a delivery person.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | deliveryPersonId |  |
| undefined | path | documentType |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForDeliveryPersonByType )

<!-- DOCGEN:END getDocumentsForDeliveryPersonByDocumentType -->

<!-- DOCGEN:START getDocumentsForVehicleByDocumentType -->
### getDocumentsForVehicleByDocumentType

**Summary**: Get documents for a vehicle by type

**Description**: Retrieves documents of a specific type associated with a vehicle.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicleId |  |
| undefined | path | documentType |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForVehicleByType )

<!-- DOCGEN:END getDocumentsForVehicleByDocumentType -->

<!-- DOCGEN:START createUserDocument -->
### createUserDocument

**Summary**: Create a document for a user

**Description**: Creates a new document and links it to a specific user.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | user_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createUserDocument )

<!-- DOCGEN:END createUserDocument -->

<!-- DOCGEN:START createBusinessDocument -->
### createBusinessDocument

**Summary**: Create a document for a business

**Description**: Creates a new document and links it to a specific business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createBusinessDocument )

<!-- DOCGEN:END createBusinessDocument -->

<!-- DOCGEN:START createDriverDocument -->
### createDriverDocument

**Summary**: Create a document for a driver

**Description**: Creates a new document and links it to a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createDriverDocument )

<!-- DOCGEN:END createDriverDocument -->

<!-- DOCGEN:START createVehicleDocument -->
### createVehicleDocument

**Summary**: Create a document for a vehicle

**Description**: Creates a new document and links it to a specific vehicle.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicle_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createVehicleDocument )

<!-- DOCGEN:END createVehicleDocument -->

<!-- DOCGEN:START createDeliveryPersonDocument -->
### createDeliveryPersonDocument

**Summary**: Create a document for a delivery person

**Description**: Creates a new document and links it to a specific delivery person.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_person_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createDeliveryPersonDocument )

<!-- DOCGEN:END createDeliveryPersonDocument -->

<!-- DOCGEN:START updateDocumentExpirationDate -->
### updateDocumentExpirationDate

**Summary**: Update document's expiration date

**Description**: Updates the expiration date of a specific document.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDocumentExpirationDate )

<!-- DOCGEN:END updateDocumentExpirationDate -->

<!-- DOCGEN:START updateDocumentIssueDate -->
### updateDocumentIssueDate

**Summary**: Update document's issue date

**Description**: Updates the issue date of a specific document.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDocumentIssueDate )

<!-- DOCGEN:END updateDocumentIssueDate -->

<!-- DOCGEN:START updateDocumentFiles -->
### updateDocumentFiles

**Summary**: Update document's files

**Description**: Updates the files associated with a specific document.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDocumentFiles )

<!-- DOCGEN:END updateDocumentFiles -->

<!-- DOCGEN:START updateDocumentAdditionalInfo -->
### updateDocumentAdditionalInfo

**Summary**: Update document's additional info

**Description**: Updates the additional information of a specific document.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDocumentAdditionalInfo )

<!-- DOCGEN:END updateDocumentAdditionalInfo -->

<!-- DOCGEN:START listDocuments -->
### listDocuments

**Summary**: Get all documents

**Description**: Retrieves all documents in the system. Intended for admin usage.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocuments )

<!-- DOCGEN:END listDocuments -->

<!-- DOCGEN:START getDocumentById -->
### getDocumentById

**Summary**: Get a document by ID

**Description**: Retrieves a specific document by its ID. Useful for detailed document viewing.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentById )

<!-- DOCGEN:END getDocumentById -->

<!-- DOCGEN:START getDocumentsForUser -->
### getDocumentsForUser

**Summary**: Get documents for a user

**Description**: Retrieves all documents associated with a specific user.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | userId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForUser )

<!-- DOCGEN:END getDocumentsForUser -->

<!-- DOCGEN:START getDocumentsForBusiness -->
### getDocumentsForBusiness

**Summary**: Get documents for a business

**Description**: Retrieves all documents associated with a specific business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | businessId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForBusiness )

<!-- DOCGEN:END getDocumentsForBusiness -->

<!-- DOCGEN:START getDocumentsForDeliveryPerson -->
### getDocumentsForDeliveryPerson

**Summary**: Get documents for a delivery person

**Description**: Retrieves all documents associated with a specific delivery person.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | deliveryPersonId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForDeliveryPerson )

<!-- DOCGEN:END getDocumentsForDeliveryPerson -->

<!-- DOCGEN:START getDocumentsForDriver -->
### getDocumentsForDriver

**Summary**: Get documents for a driver

**Description**: Retrieves all documents associated with a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driverId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForDriver )

<!-- DOCGEN:END getDocumentsForDriver -->

<!-- DOCGEN:START getDocumentsForVehicle -->
### getDocumentsForVehicle

**Summary**: Get documents for a vehicle

**Description**: Retrieves all documents associated with a specific vehicle.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicleId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForVehicle )

<!-- DOCGEN:END getDocumentsForVehicle -->

<!-- DOCGEN:START getDocumentsByDocumentType -->
### getDocumentsByDocumentType

**Summary**: Get documents by type

**Description**: Retrieves documents of a specific type across all entities.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | documentType |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsByType )

<!-- DOCGEN:END getDocumentsByDocumentType -->

<!-- DOCGEN:START getDocumentsForBusinessByDocumentType -->
### getDocumentsForBusinessByDocumentType

**Summary**: Get documents for a business by type

**Description**: Retrieves documents of a specific type associated with a business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | businessId |  |
| undefined | path | documentType |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForBusinessByType )

<!-- DOCGEN:END getDocumentsForBusinessByDocumentType -->

<!-- DOCGEN:START getDocumentsForUserByDocumentType -->
### getDocumentsForUserByDocumentType

**Summary**: Get documents for a user by type

**Description**: Retrieves documents of a specific type associated with a user.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_type |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForUserByDocumentType )

<!-- DOCGEN:END getDocumentsForUserByDocumentType -->

<!-- DOCGEN:START getDocumentsForDriverByDocumentType -->
### getDocumentsForDriverByDocumentType

**Summary**: Get documents for a driver by type

**Description**: Retrieves documents of a specific type associated with a driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driverId |  |
| undefined | path | documentType |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForDriverByType )

<!-- DOCGEN:END getDocumentsForDriverByDocumentType -->

<!-- DOCGEN:START getDocumentsForDeliveryPersonByDocumentType -->
### getDocumentsForDeliveryPersonByDocumentType

**Summary**: Get documents for a delivery person by type

**Description**: Retrieves documents of a specific type associated with a delivery person.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | deliveryPersonId |  |
| undefined | path | documentType |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForDeliveryPersonByType )

<!-- DOCGEN:END getDocumentsForDeliveryPersonByDocumentType -->

<!-- DOCGEN:START getDocumentsForVehicleByDocumentType -->
### getDocumentsForVehicleByDocumentType

**Summary**: Get documents for a vehicle by type

**Description**: Retrieves documents of a specific type associated with a vehicle.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicleId |  |
| undefined | path | documentType |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForVehicleByType )

<!-- DOCGEN:END getDocumentsForVehicleByDocumentType -->

<!-- DOCGEN:START createUserDocument -->
### createUserDocument

**Summary**: Create a document for a user

**Description**: Creates a new document and links it to a specific user.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | user_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createUserDocument )

<!-- DOCGEN:END createUserDocument -->

<!-- DOCGEN:START createBusinessDocument -->
### createBusinessDocument

**Summary**: Create a document for a business

**Description**: Creates a new document and links it to a specific business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createBusinessDocument )

<!-- DOCGEN:END createBusinessDocument -->

<!-- DOCGEN:START createDriverDocument -->
### createDriverDocument

**Summary**: Create a document for a driver

**Description**: Creates a new document and links it to a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createDriverDocument )

<!-- DOCGEN:END createDriverDocument -->

<!-- DOCGEN:START createVehicleDocument -->
### createVehicleDocument

**Summary**: Create a document for a vehicle

**Description**: Creates a new document and links it to a specific vehicle.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicle_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createVehicleDocument )

<!-- DOCGEN:END createVehicleDocument -->

<!-- DOCGEN:START createDeliveryPersonDocument -->
### createDeliveryPersonDocument

**Summary**: Create a document for a delivery person

**Description**: Creates a new document and links it to a specific delivery person.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_person_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createDeliveryPersonDocument )

<!-- DOCGEN:END createDeliveryPersonDocument -->

<!-- DOCGEN:START updateDocumentExpirationDate -->
### updateDocumentExpirationDate

**Summary**: Update document's expiration date

**Description**: Updates the expiration date of a specific document.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDocumentExpirationDate )

<!-- DOCGEN:END updateDocumentExpirationDate -->

<!-- DOCGEN:START updateDocumentIssueDate -->
### updateDocumentIssueDate

**Summary**: Update document's issue date

**Description**: Updates the issue date of a specific document.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDocumentIssueDate )

<!-- DOCGEN:END updateDocumentIssueDate -->

<!-- DOCGEN:START updateDocumentFiles -->
### updateDocumentFiles

**Summary**: Update document's files

**Description**: Updates the files associated with a specific document.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDocumentFiles )

<!-- DOCGEN:END updateDocumentFiles -->

<!-- DOCGEN:START updateDocumentAdditionalInfo -->
### updateDocumentAdditionalInfo

**Summary**: Update document's additional info

**Description**: Updates the additional information of a specific document.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDocumentAdditionalInfo )

<!-- DOCGEN:END updateDocumentAdditionalInfo -->

<!-- DOCGEN:START listDocuments -->
### listDocuments

**Summary**: Get all documents

**Description**: Retrieves all documents in the system. Intended for admin usage.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocuments )

<!-- DOCGEN:END listDocuments -->

<!-- DOCGEN:START getDocumentById -->
### getDocumentById

**Summary**: Get a document by ID

**Description**: Retrieves a specific document by its ID. Useful for detailed document viewing.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentById )

<!-- DOCGEN:END getDocumentById -->

<!-- DOCGEN:START getDocumentsForUser -->
### getDocumentsForUser

**Summary**: Get documents for a user

**Description**: Retrieves all documents associated with a specific user.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | userId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForUser )

<!-- DOCGEN:END getDocumentsForUser -->

<!-- DOCGEN:START getDocumentsForBusiness -->
### getDocumentsForBusiness

**Summary**: Get documents for a business

**Description**: Retrieves all documents associated with a specific business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | businessId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForBusiness )

<!-- DOCGEN:END getDocumentsForBusiness -->

<!-- DOCGEN:START getDocumentsForDeliveryPerson -->
### getDocumentsForDeliveryPerson

**Summary**: Get documents for a delivery person

**Description**: Retrieves all documents associated with a specific delivery person.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | deliveryPersonId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForDeliveryPerson )

<!-- DOCGEN:END getDocumentsForDeliveryPerson -->

<!-- DOCGEN:START getDocumentsForDriver -->
### getDocumentsForDriver

**Summary**: Get documents for a driver

**Description**: Retrieves all documents associated with a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driverId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForDriver )

<!-- DOCGEN:END getDocumentsForDriver -->

<!-- DOCGEN:START getDocumentsForVehicle -->
### getDocumentsForVehicle

**Summary**: Get documents for a vehicle

**Description**: Retrieves all documents associated with a specific vehicle.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicleId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForVehicle )

<!-- DOCGEN:END getDocumentsForVehicle -->

<!-- DOCGEN:START getDocumentsByDocumentType -->
### getDocumentsByDocumentType

**Summary**: Get documents by type

**Description**: Retrieves documents of a specific type across all entities.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | documentType |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsByType )

<!-- DOCGEN:END getDocumentsByDocumentType -->

<!-- DOCGEN:START getDocumentsForBusinessByDocumentType -->
### getDocumentsForBusinessByDocumentType

**Summary**: Get documents for a business by type

**Description**: Retrieves documents of a specific type associated with a business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | businessId |  |
| undefined | path | documentType |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForBusinessByType )

<!-- DOCGEN:END getDocumentsForBusinessByDocumentType -->

<!-- DOCGEN:START getDocumentsForUserByDocumentType -->
### getDocumentsForUserByDocumentType

**Summary**: Get documents for a user by type

**Description**: Retrieves documents of a specific type associated with a user.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_type |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForUserByDocumentType )

<!-- DOCGEN:END getDocumentsForUserByDocumentType -->

<!-- DOCGEN:START getDocumentsForDriverByDocumentType -->
### getDocumentsForDriverByDocumentType

**Summary**: Get documents for a driver by type

**Description**: Retrieves documents of a specific type associated with a driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driverId |  |
| undefined | path | documentType |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForDriverByType )

<!-- DOCGEN:END getDocumentsForDriverByDocumentType -->

<!-- DOCGEN:START getDocumentsForDeliveryPersonByDocumentType -->
### getDocumentsForDeliveryPersonByDocumentType

**Summary**: Get documents for a delivery person by type

**Description**: Retrieves documents of a specific type associated with a delivery person.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | deliveryPersonId |  |
| undefined | path | documentType |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForDeliveryPersonByType )

<!-- DOCGEN:END getDocumentsForDeliveryPersonByDocumentType -->

<!-- DOCGEN:START getDocumentsForVehicleByDocumentType -->
### getDocumentsForVehicleByDocumentType

**Summary**: Get documents for a vehicle by type

**Description**: Retrieves documents of a specific type associated with a vehicle.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicleId |  |
| undefined | path | documentType |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForVehicleByType )

<!-- DOCGEN:END getDocumentsForVehicleByDocumentType -->

<!-- DOCGEN:START createUserDocument -->
### createUserDocument

**Summary**: Create a document for a user

**Description**: Creates a new document and links it to a specific user.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | user_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createUserDocument )

<!-- DOCGEN:END createUserDocument -->

<!-- DOCGEN:START createBusinessDocument -->
### createBusinessDocument

**Summary**: Create a document for a business

**Description**: Creates a new document and links it to a specific business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createBusinessDocument )

<!-- DOCGEN:END createBusinessDocument -->

<!-- DOCGEN:START createDriverDocument -->
### createDriverDocument

**Summary**: Create a document for a driver

**Description**: Creates a new document and links it to a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createDriverDocument )

<!-- DOCGEN:END createDriverDocument -->

<!-- DOCGEN:START createVehicleDocument -->
### createVehicleDocument

**Summary**: Create a document for a vehicle

**Description**: Creates a new document and links it to a specific vehicle.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicle_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createVehicleDocument )

<!-- DOCGEN:END createVehicleDocument -->

<!-- DOCGEN:START createDeliveryPersonDocument -->
### createDeliveryPersonDocument

**Summary**: Create a document for a delivery person

**Description**: Creates a new document and links it to a specific delivery person.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_person_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createDeliveryPersonDocument )

<!-- DOCGEN:END createDeliveryPersonDocument -->

<!-- DOCGEN:START updateDocumentExpirationDate -->
### updateDocumentExpirationDate

**Summary**: Update document's expiration date

**Description**: Updates the expiration date of a specific document.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDocumentExpirationDate )

<!-- DOCGEN:END updateDocumentExpirationDate -->

<!-- DOCGEN:START updateDocumentIssueDate -->
### updateDocumentIssueDate

**Summary**: Update document's issue date

**Description**: Updates the issue date of a specific document.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDocumentIssueDate )

<!-- DOCGEN:END updateDocumentIssueDate -->

<!-- DOCGEN:START updateDocumentFiles -->
### updateDocumentFiles

**Summary**: Update document's files

**Description**: Updates the files associated with a specific document.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDocumentFiles )

<!-- DOCGEN:END updateDocumentFiles -->

<!-- DOCGEN:START updateDocumentAdditionalInfo -->
### updateDocumentAdditionalInfo

**Summary**: Update document's additional info

**Description**: Updates the additional information of a specific document.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDocumentAdditionalInfo )

<!-- DOCGEN:END updateDocumentAdditionalInfo -->

<!-- DOCGEN:START listDocuments -->
### listDocuments

**Summary**: Get all documents

**Description**: Retrieves all documents in the system. Intended for admin usage.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocuments )

<!-- DOCGEN:END listDocuments -->

<!-- DOCGEN:START getDocumentById -->
### getDocumentById

**Summary**: Get a document by ID

**Description**: Retrieves a specific document by its ID. Useful for detailed document viewing.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentById )

<!-- DOCGEN:END getDocumentById -->

<!-- DOCGEN:START getDocumentsForUser -->
### getDocumentsForUser

**Summary**: Get documents for a user

**Description**: Retrieves all documents associated with a specific user.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | userId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForUser )

<!-- DOCGEN:END getDocumentsForUser -->

<!-- DOCGEN:START getDocumentsForBusiness -->
### getDocumentsForBusiness

**Summary**: Get documents for a business

**Description**: Retrieves all documents associated with a specific business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | businessId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForBusiness )

<!-- DOCGEN:END getDocumentsForBusiness -->

<!-- DOCGEN:START getDocumentsForDeliveryPerson -->
### getDocumentsForDeliveryPerson

**Summary**: Get documents for a delivery person

**Description**: Retrieves all documents associated with a specific delivery person.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | deliveryPersonId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForDeliveryPerson )

<!-- DOCGEN:END getDocumentsForDeliveryPerson -->

<!-- DOCGEN:START getDocumentsForDriver -->
### getDocumentsForDriver

**Summary**: Get documents for a driver

**Description**: Retrieves all documents associated with a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driverId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForDriver )

<!-- DOCGEN:END getDocumentsForDriver -->

<!-- DOCGEN:START getDocumentsForVehicle -->
### getDocumentsForVehicle

**Summary**: Get documents for a vehicle

**Description**: Retrieves all documents associated with a specific vehicle.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicleId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForVehicle )

<!-- DOCGEN:END getDocumentsForVehicle -->

<!-- DOCGEN:START getDocumentsByDocumentType -->
### getDocumentsByDocumentType

**Summary**: Get documents by type

**Description**: Retrieves documents of a specific type across all entities.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | documentType |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsByType )

<!-- DOCGEN:END getDocumentsByDocumentType -->

<!-- DOCGEN:START getDocumentsForBusinessByDocumentType -->
### getDocumentsForBusinessByDocumentType

**Summary**: Get documents for a business by type

**Description**: Retrieves documents of a specific type associated with a business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | businessId |  |
| undefined | path | documentType |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForBusinessByType )

<!-- DOCGEN:END getDocumentsForBusinessByDocumentType -->

<!-- DOCGEN:START getDocumentsForUserByDocumentType -->
### getDocumentsForUserByDocumentType

**Summary**: Get documents for a user by type

**Description**: Retrieves documents of a specific type associated with a user.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_type |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForUserByDocumentType )

<!-- DOCGEN:END getDocumentsForUserByDocumentType -->

<!-- DOCGEN:START getDocumentsForDriverByDocumentType -->
### getDocumentsForDriverByDocumentType

**Summary**: Get documents for a driver by type

**Description**: Retrieves documents of a specific type associated with a driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driverId |  |
| undefined | path | documentType |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForDriverByType )

<!-- DOCGEN:END getDocumentsForDriverByDocumentType -->

<!-- DOCGEN:START getDocumentsForDeliveryPersonByDocumentType -->
### getDocumentsForDeliveryPersonByDocumentType

**Summary**: Get documents for a delivery person by type

**Description**: Retrieves documents of a specific type associated with a delivery person.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | deliveryPersonId |  |
| undefined | path | documentType |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForDeliveryPersonByType )

<!-- DOCGEN:END getDocumentsForDeliveryPersonByDocumentType -->

<!-- DOCGEN:START getDocumentsForVehicleByDocumentType -->
### getDocumentsForVehicleByDocumentType

**Summary**: Get documents for a vehicle by type

**Description**: Retrieves documents of a specific type associated with a vehicle.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicleId |  |
| undefined | path | documentType |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForVehicleByType )

<!-- DOCGEN:END getDocumentsForVehicleByDocumentType -->

<!-- DOCGEN:START createUserDocument -->
### createUserDocument

**Summary**: Create a document for a user

**Description**: Creates a new document and links it to a specific user.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | user_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createUserDocument )

<!-- DOCGEN:END createUserDocument -->

<!-- DOCGEN:START createBusinessDocument -->
### createBusinessDocument

**Summary**: Create a document for a business

**Description**: Creates a new document and links it to a specific business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createBusinessDocument )

<!-- DOCGEN:END createBusinessDocument -->

<!-- DOCGEN:START createDriverDocument -->
### createDriverDocument

**Summary**: Create a document for a driver

**Description**: Creates a new document and links it to a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createDriverDocument )

<!-- DOCGEN:END createDriverDocument -->

<!-- DOCGEN:START createVehicleDocument -->
### createVehicleDocument

**Summary**: Create a document for a vehicle

**Description**: Creates a new document and links it to a specific vehicle.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicle_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createVehicleDocument )

<!-- DOCGEN:END createVehicleDocument -->

<!-- DOCGEN:START createDeliveryPersonDocument -->
### createDeliveryPersonDocument

**Summary**: Create a document for a delivery person

**Description**: Creates a new document and links it to a specific delivery person.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_person_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createDeliveryPersonDocument )

<!-- DOCGEN:END createDeliveryPersonDocument -->

<!-- DOCGEN:START updateDocumentExpirationDate -->
### updateDocumentExpirationDate

**Summary**: Update document's expiration date

**Description**: Updates the expiration date of a specific document.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDocumentExpirationDate )

<!-- DOCGEN:END updateDocumentExpirationDate -->

<!-- DOCGEN:START updateDocumentIssueDate -->
### updateDocumentIssueDate

**Summary**: Update document's issue date

**Description**: Updates the issue date of a specific document.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDocumentIssueDate )

<!-- DOCGEN:END updateDocumentIssueDate -->

<!-- DOCGEN:START updateDocumentFiles -->
### updateDocumentFiles

**Summary**: Update document's files

**Description**: Updates the files associated with a specific document.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDocumentFiles )

<!-- DOCGEN:END updateDocumentFiles -->

<!-- DOCGEN:START updateDocumentAdditionalInfo -->
### updateDocumentAdditionalInfo

**Summary**: Update document's additional info

**Description**: Updates the additional information of a specific document.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDocumentAdditionalInfo )

<!-- DOCGEN:END updateDocumentAdditionalInfo -->

<!-- DOCGEN:START listDocuments -->
### listDocuments

**Summary**: Get all documents

**Description**: Retrieves all documents in the system. Intended for admin usage.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocuments )

<!-- DOCGEN:END listDocuments -->

<!-- DOCGEN:START getDocumentById -->
### getDocumentById

**Summary**: Get a document by ID

**Description**: Retrieves a specific document by its ID. Useful for detailed document viewing.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentById )

<!-- DOCGEN:END getDocumentById -->

<!-- DOCGEN:START getDocumentsForUser -->
### getDocumentsForUser

**Summary**: Get documents for a user

**Description**: Retrieves all documents associated with a specific user.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | userId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForUser )

<!-- DOCGEN:END getDocumentsForUser -->

<!-- DOCGEN:START getDocumentsForBusiness -->
### getDocumentsForBusiness

**Summary**: Get documents for a business

**Description**: Retrieves all documents associated with a specific business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | businessId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForBusiness )

<!-- DOCGEN:END getDocumentsForBusiness -->

<!-- DOCGEN:START getDocumentsForDeliveryPerson -->
### getDocumentsForDeliveryPerson

**Summary**: Get documents for a delivery person

**Description**: Retrieves all documents associated with a specific delivery person.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | deliveryPersonId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForDeliveryPerson )

<!-- DOCGEN:END getDocumentsForDeliveryPerson -->

<!-- DOCGEN:START getDocumentsForDriver -->
### getDocumentsForDriver

**Summary**: Get documents for a driver

**Description**: Retrieves all documents associated with a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driverId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForDriver )

<!-- DOCGEN:END getDocumentsForDriver -->

<!-- DOCGEN:START getDocumentsForVehicle -->
### getDocumentsForVehicle

**Summary**: Get documents for a vehicle

**Description**: Retrieves all documents associated with a specific vehicle.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicleId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForVehicle )

<!-- DOCGEN:END getDocumentsForVehicle -->

<!-- DOCGEN:START getDocumentsByDocumentType -->
### getDocumentsByDocumentType

**Summary**: Get documents by type

**Description**: Retrieves documents of a specific type across all entities.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | documentType |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsByType )

<!-- DOCGEN:END getDocumentsByDocumentType -->

<!-- DOCGEN:START getDocumentsForBusinessByDocumentType -->
### getDocumentsForBusinessByDocumentType

**Summary**: Get documents for a business by type

**Description**: Retrieves documents of a specific type associated with a business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | businessId |  |
| undefined | path | documentType |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForBusinessByType )

<!-- DOCGEN:END getDocumentsForBusinessByDocumentType -->

<!-- DOCGEN:START getDocumentsForUserByDocumentType -->
### getDocumentsForUserByDocumentType

**Summary**: Get documents for a user by type

**Description**: Retrieves documents of a specific type associated with a user.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_type |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForUserByDocumentType )

<!-- DOCGEN:END getDocumentsForUserByDocumentType -->

<!-- DOCGEN:START getDocumentsForDriverByDocumentType -->
### getDocumentsForDriverByDocumentType

**Summary**: Get documents for a driver by type

**Description**: Retrieves documents of a specific type associated with a driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driverId |  |
| undefined | path | documentType |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForDriverByType )

<!-- DOCGEN:END getDocumentsForDriverByDocumentType -->

<!-- DOCGEN:START getDocumentsForDeliveryPersonByDocumentType -->
### getDocumentsForDeliveryPersonByDocumentType

**Summary**: Get documents for a delivery person by type

**Description**: Retrieves documents of a specific type associated with a delivery person.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | deliveryPersonId |  |
| undefined | path | documentType |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForDeliveryPersonByType )

<!-- DOCGEN:END getDocumentsForDeliveryPersonByDocumentType -->

<!-- DOCGEN:START getDocumentsForVehicleByDocumentType -->
### getDocumentsForVehicleByDocumentType

**Summary**: Get documents for a vehicle by type

**Description**: Retrieves documents of a specific type associated with a vehicle.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicleId |  |
| undefined | path | documentType |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForVehicleByType )

<!-- DOCGEN:END getDocumentsForVehicleByDocumentType -->

<!-- DOCGEN:START createUserDocument -->
### createUserDocument

**Summary**: Create a document for a user

**Description**: Creates a new document and links it to a specific user.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | user_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createUserDocument )

<!-- DOCGEN:END createUserDocument -->

<!-- DOCGEN:START createBusinessDocument -->
### createBusinessDocument

**Summary**: Create a document for a business

**Description**: Creates a new document and links it to a specific business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createBusinessDocument )

<!-- DOCGEN:END createBusinessDocument -->

<!-- DOCGEN:START createDriverDocument -->
### createDriverDocument

**Summary**: Create a document for a driver

**Description**: Creates a new document and links it to a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createDriverDocument )

<!-- DOCGEN:END createDriverDocument -->

<!-- DOCGEN:START createVehicleDocument -->
### createVehicleDocument

**Summary**: Create a document for a vehicle

**Description**: Creates a new document and links it to a specific vehicle.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicle_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createVehicleDocument )

<!-- DOCGEN:END createVehicleDocument -->

<!-- DOCGEN:START createDeliveryPersonDocument -->
### createDeliveryPersonDocument

**Summary**: Create a document for a delivery person

**Description**: Creates a new document and links it to a specific delivery person.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_person_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createDeliveryPersonDocument )

<!-- DOCGEN:END createDeliveryPersonDocument -->

<!-- DOCGEN:START updateDocumentExpirationDate -->
### updateDocumentExpirationDate

**Summary**: Update document's expiration date

**Description**: Updates the expiration date of a specific document.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDocumentExpirationDate )

<!-- DOCGEN:END updateDocumentExpirationDate -->

<!-- DOCGEN:START updateDocumentIssueDate -->
### updateDocumentIssueDate

**Summary**: Update document's issue date

**Description**: Updates the issue date of a specific document.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDocumentIssueDate )

<!-- DOCGEN:END updateDocumentIssueDate -->

<!-- DOCGEN:START updateDocumentFiles -->
### updateDocumentFiles

**Summary**: Update document's files

**Description**: Updates the files associated with a specific document.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDocumentFiles )

<!-- DOCGEN:END updateDocumentFiles -->

<!-- DOCGEN:START updateDocumentAdditionalInfo -->
### updateDocumentAdditionalInfo

**Summary**: Update document's additional info

**Description**: Updates the additional information of a specific document.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDocumentAdditionalInfo )

<!-- DOCGEN:END updateDocumentAdditionalInfo -->

<!-- DOCGEN:START listDocuments -->
### listDocuments

**Summary**: Get all documents

**Description**: Retrieves all documents in the system. Intended for admin usage.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocuments )

<!-- DOCGEN:END listDocuments -->

<!-- DOCGEN:START getDocumentById -->
### getDocumentById

**Summary**: Get a document by ID

**Description**: Retrieves a specific document by its ID. Useful for detailed document viewing.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentById )

<!-- DOCGEN:END getDocumentById -->

<!-- DOCGEN:START getDocumentsForUser -->
### getDocumentsForUser

**Summary**: Get documents for a user

**Description**: Retrieves all documents associated with a specific user.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | userId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForUser )

<!-- DOCGEN:END getDocumentsForUser -->

<!-- DOCGEN:START getDocumentsForBusiness -->
### getDocumentsForBusiness

**Summary**: Get documents for a business

**Description**: Retrieves all documents associated with a specific business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | businessId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForBusiness )

<!-- DOCGEN:END getDocumentsForBusiness -->

<!-- DOCGEN:START getDocumentsForDeliveryPerson -->
### getDocumentsForDeliveryPerson

**Summary**: Get documents for a delivery person

**Description**: Retrieves all documents associated with a specific delivery person.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | deliveryPersonId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForDeliveryPerson )

<!-- DOCGEN:END getDocumentsForDeliveryPerson -->

<!-- DOCGEN:START getDocumentsForDriver -->
### getDocumentsForDriver

**Summary**: Get documents for a driver

**Description**: Retrieves all documents associated with a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driverId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForDriver )

<!-- DOCGEN:END getDocumentsForDriver -->

<!-- DOCGEN:START getDocumentsForVehicle -->
### getDocumentsForVehicle

**Summary**: Get documents for a vehicle

**Description**: Retrieves all documents associated with a specific vehicle.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicleId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForVehicle )

<!-- DOCGEN:END getDocumentsForVehicle -->

<!-- DOCGEN:START getDocumentsByDocumentType -->
### getDocumentsByDocumentType

**Summary**: Get documents by type

**Description**: Retrieves documents of a specific type across all entities.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | documentType |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsByType )

<!-- DOCGEN:END getDocumentsByDocumentType -->

<!-- DOCGEN:START getDocumentsForBusinessByDocumentType -->
### getDocumentsForBusinessByDocumentType

**Summary**: Get documents for a business by type

**Description**: Retrieves documents of a specific type associated with a business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | businessId |  |
| undefined | path | documentType |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForBusinessByType )

<!-- DOCGEN:END getDocumentsForBusinessByDocumentType -->

<!-- DOCGEN:START getDocumentsForUserByDocumentType -->
### getDocumentsForUserByDocumentType

**Summary**: Get documents for a user by type

**Description**: Retrieves documents of a specific type associated with a user.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_type |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForUserByDocumentType )

<!-- DOCGEN:END getDocumentsForUserByDocumentType -->

<!-- DOCGEN:START getDocumentsForDriverByDocumentType -->
### getDocumentsForDriverByDocumentType

**Summary**: Get documents for a driver by type

**Description**: Retrieves documents of a specific type associated with a driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driverId |  |
| undefined | path | documentType |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForDriverByType )

<!-- DOCGEN:END getDocumentsForDriverByDocumentType -->

<!-- DOCGEN:START getDocumentsForDeliveryPersonByDocumentType -->
### getDocumentsForDeliveryPersonByDocumentType

**Summary**: Get documents for a delivery person by type

**Description**: Retrieves documents of a specific type associated with a delivery person.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | deliveryPersonId |  |
| undefined | path | documentType |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForDeliveryPersonByType )

<!-- DOCGEN:END getDocumentsForDeliveryPersonByDocumentType -->

<!-- DOCGEN:START getDocumentsForVehicleByDocumentType -->
### getDocumentsForVehicleByDocumentType

**Summary**: Get documents for a vehicle by type

**Description**: Retrieves documents of a specific type associated with a vehicle.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicleId |  |
| undefined | path | documentType |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForVehicleByType )

<!-- DOCGEN:END getDocumentsForVehicleByDocumentType -->

<!-- DOCGEN:START createUserDocument -->
### createUserDocument

**Summary**: Create a document for a user

**Description**: Creates a new document and links it to a specific user.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | user_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createUserDocument )

<!-- DOCGEN:END createUserDocument -->

<!-- DOCGEN:START createBusinessDocument -->
### createBusinessDocument

**Summary**: Create a document for a business

**Description**: Creates a new document and links it to a specific business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createBusinessDocument )

<!-- DOCGEN:END createBusinessDocument -->

<!-- DOCGEN:START createDriverDocument -->
### createDriverDocument

**Summary**: Create a document for a driver

**Description**: Creates a new document and links it to a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createDriverDocument )

<!-- DOCGEN:END createDriverDocument -->

<!-- DOCGEN:START createVehicleDocument -->
### createVehicleDocument

**Summary**: Create a document for a vehicle

**Description**: Creates a new document and links it to a specific vehicle.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicle_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createVehicleDocument )

<!-- DOCGEN:END createVehicleDocument -->

<!-- DOCGEN:START createDeliveryPersonDocument -->
### createDeliveryPersonDocument

**Summary**: Create a document for a delivery person

**Description**: Creates a new document and links it to a specific delivery person.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_person_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createDeliveryPersonDocument )

<!-- DOCGEN:END createDeliveryPersonDocument -->

<!-- DOCGEN:START updateDocumentExpirationDate -->
### updateDocumentExpirationDate

**Summary**: Update document's expiration date

**Description**: Updates the expiration date of a specific document.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDocumentExpirationDate )

<!-- DOCGEN:END updateDocumentExpirationDate -->

<!-- DOCGEN:START updateDocumentIssueDate -->
### updateDocumentIssueDate

**Summary**: Update document's issue date

**Description**: Updates the issue date of a specific document.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDocumentIssueDate )

<!-- DOCGEN:END updateDocumentIssueDate -->

<!-- DOCGEN:START updateDocumentFiles -->
### updateDocumentFiles

**Summary**: Update document's files

**Description**: Updates the files associated with a specific document.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDocumentFiles )

<!-- DOCGEN:END updateDocumentFiles -->

<!-- DOCGEN:START updateDocumentAdditionalInfo -->
### updateDocumentAdditionalInfo

**Summary**: Update document's additional info

**Description**: Updates the additional information of a specific document.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDocumentAdditionalInfo )

<!-- DOCGEN:END updateDocumentAdditionalInfo -->

<!-- DOCGEN:START listDocuments -->
### listDocuments

**Summary**: Get all documents

**Description**: Retrieves all documents in the system. Intended for admin usage.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocuments )

<!-- DOCGEN:END listDocuments -->

<!-- DOCGEN:START getDocumentById -->
### getDocumentById

**Summary**: Get a document by ID

**Description**: Retrieves a specific document by its ID. Useful for detailed document viewing.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentById )

<!-- DOCGEN:END getDocumentById -->

<!-- DOCGEN:START getDocumentsForUser -->
### getDocumentsForUser

**Summary**: Get documents for a user

**Description**: Retrieves all documents associated with a specific user.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | userId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForUser )

<!-- DOCGEN:END getDocumentsForUser -->

<!-- DOCGEN:START getDocumentsForBusiness -->
### getDocumentsForBusiness

**Summary**: Get documents for a business

**Description**: Retrieves all documents associated with a specific business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | businessId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForBusiness )

<!-- DOCGEN:END getDocumentsForBusiness -->

<!-- DOCGEN:START getDocumentsForDeliveryPerson -->
### getDocumentsForDeliveryPerson

**Summary**: Get documents for a delivery person

**Description**: Retrieves all documents associated with a specific delivery person.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | deliveryPersonId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForDeliveryPerson )

<!-- DOCGEN:END getDocumentsForDeliveryPerson -->

<!-- DOCGEN:START getDocumentsForDriver -->
### getDocumentsForDriver

**Summary**: Get documents for a driver

**Description**: Retrieves all documents associated with a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driverId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForDriver )

<!-- DOCGEN:END getDocumentsForDriver -->

<!-- DOCGEN:START getDocumentsForVehicle -->
### getDocumentsForVehicle

**Summary**: Get documents for a vehicle

**Description**: Retrieves all documents associated with a specific vehicle.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicleId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForVehicle )

<!-- DOCGEN:END getDocumentsForVehicle -->

<!-- DOCGEN:START getDocumentsByDocumentType -->
### getDocumentsByDocumentType

**Summary**: Get documents by type

**Description**: Retrieves documents of a specific type across all entities.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | documentType |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsByType )

<!-- DOCGEN:END getDocumentsByDocumentType -->

<!-- DOCGEN:START getDocumentsForBusinessByDocumentType -->
### getDocumentsForBusinessByDocumentType

**Summary**: Get documents for a business by type

**Description**: Retrieves documents of a specific type associated with a business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | businessId |  |
| undefined | path | documentType |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForBusinessByType )

<!-- DOCGEN:END getDocumentsForBusinessByDocumentType -->

<!-- DOCGEN:START getDocumentsForUserByDocumentType -->
### getDocumentsForUserByDocumentType

**Summary**: Get documents for a user by type

**Description**: Retrieves documents of a specific type associated with a user.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_type |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForUserByDocumentType )

<!-- DOCGEN:END getDocumentsForUserByDocumentType -->

<!-- DOCGEN:START getDocumentsForDriverByDocumentType -->
### getDocumentsForDriverByDocumentType

**Summary**: Get documents for a driver by type

**Description**: Retrieves documents of a specific type associated with a driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driverId |  |
| undefined | path | documentType |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForDriverByType )

<!-- DOCGEN:END getDocumentsForDriverByDocumentType -->

<!-- DOCGEN:START getDocumentsForDeliveryPersonByDocumentType -->
### getDocumentsForDeliveryPersonByDocumentType

**Summary**: Get documents for a delivery person by type

**Description**: Retrieves documents of a specific type associated with a delivery person.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | deliveryPersonId |  |
| undefined | path | documentType |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForDeliveryPersonByType )

<!-- DOCGEN:END getDocumentsForDeliveryPersonByDocumentType -->

<!-- DOCGEN:START getDocumentsForVehicleByDocumentType -->
### getDocumentsForVehicleByDocumentType

**Summary**: Get documents for a vehicle by type

**Description**: Retrieves documents of a specific type associated with a vehicle.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicleId |  |
| undefined | path | documentType |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForVehicleByType )

<!-- DOCGEN:END getDocumentsForVehicleByDocumentType -->

<!-- DOCGEN:START createUserDocument -->
### createUserDocument

**Summary**: Create a document for a user

**Description**: Creates a new document and links it to a specific user.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | user_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createUserDocument )

<!-- DOCGEN:END createUserDocument -->

<!-- DOCGEN:START createBusinessDocument -->
### createBusinessDocument

**Summary**: Create a document for a business

**Description**: Creates a new document and links it to a specific business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createBusinessDocument )

<!-- DOCGEN:END createBusinessDocument -->

<!-- DOCGEN:START createDriverDocument -->
### createDriverDocument

**Summary**: Create a document for a driver

**Description**: Creates a new document and links it to a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createDriverDocument )

<!-- DOCGEN:END createDriverDocument -->

<!-- DOCGEN:START createVehicleDocument -->
### createVehicleDocument

**Summary**: Create a document for a vehicle

**Description**: Creates a new document and links it to a specific vehicle.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicle_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createVehicleDocument )

<!-- DOCGEN:END createVehicleDocument -->

<!-- DOCGEN:START createDeliveryPersonDocument -->
### createDeliveryPersonDocument

**Summary**: Create a document for a delivery person

**Description**: Creates a new document and links it to a specific delivery person.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_person_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createDeliveryPersonDocument )

<!-- DOCGEN:END createDeliveryPersonDocument -->

<!-- DOCGEN:START updateDocumentExpirationDate -->
### updateDocumentExpirationDate

**Summary**: Update document's expiration date

**Description**: Updates the expiration date of a specific document.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDocumentExpirationDate )

<!-- DOCGEN:END updateDocumentExpirationDate -->

<!-- DOCGEN:START updateDocumentIssueDate -->
### updateDocumentIssueDate

**Summary**: Update document's issue date

**Description**: Updates the issue date of a specific document.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDocumentIssueDate )

<!-- DOCGEN:END updateDocumentIssueDate -->

<!-- DOCGEN:START updateDocumentFiles -->
### updateDocumentFiles

**Summary**: Update document's files

**Description**: Updates the files associated with a specific document.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDocumentFiles )

<!-- DOCGEN:END updateDocumentFiles -->

<!-- DOCGEN:START updateDocumentAdditionalInfo -->
### updateDocumentAdditionalInfo

**Summary**: Update document's additional info

**Description**: Updates the additional information of a specific document.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDocumentAdditionalInfo )

<!-- DOCGEN:END updateDocumentAdditionalInfo -->

<!-- DOCGEN:START listDocuments -->
### listDocuments

**Summary**: Get all documents

**Description**: Retrieves all documents in the system. Intended for admin usage.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocuments )

<!-- DOCGEN:END listDocuments -->

<!-- DOCGEN:START getDocumentById -->
### getDocumentById

**Summary**: Get a document by ID

**Description**: Retrieves a specific document by its ID. Useful for detailed document viewing.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentById )

<!-- DOCGEN:END getDocumentById -->

<!-- DOCGEN:START getDocumentsForUser -->
### getDocumentsForUser

**Summary**: Get documents for a user

**Description**: Retrieves all documents associated with a specific user.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | userId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForUser )

<!-- DOCGEN:END getDocumentsForUser -->

<!-- DOCGEN:START getDocumentsForBusiness -->
### getDocumentsForBusiness

**Summary**: Get documents for a business

**Description**: Retrieves all documents associated with a specific business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | businessId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForBusiness )

<!-- DOCGEN:END getDocumentsForBusiness -->

<!-- DOCGEN:START getDocumentsForDeliveryPerson -->
### getDocumentsForDeliveryPerson

**Summary**: Get documents for a delivery person

**Description**: Retrieves all documents associated with a specific delivery person.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | deliveryPersonId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForDeliveryPerson )

<!-- DOCGEN:END getDocumentsForDeliveryPerson -->

<!-- DOCGEN:START getDocumentsForDriver -->
### getDocumentsForDriver

**Summary**: Get documents for a driver

**Description**: Retrieves all documents associated with a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driverId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForDriver )

<!-- DOCGEN:END getDocumentsForDriver -->

<!-- DOCGEN:START getDocumentsForVehicle -->
### getDocumentsForVehicle

**Summary**: Get documents for a vehicle

**Description**: Retrieves all documents associated with a specific vehicle.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicleId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForVehicle )

<!-- DOCGEN:END getDocumentsForVehicle -->

<!-- DOCGEN:START getDocumentsByDocumentType -->
### getDocumentsByDocumentType

**Summary**: Get documents by type

**Description**: Retrieves documents of a specific type across all entities.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | documentType |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsByType )

<!-- DOCGEN:END getDocumentsByDocumentType -->

<!-- DOCGEN:START getDocumentsForBusinessByDocumentType -->
### getDocumentsForBusinessByDocumentType

**Summary**: Get documents for a business by type

**Description**: Retrieves documents of a specific type associated with a business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | businessId |  |
| undefined | path | documentType |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForBusinessByType )

<!-- DOCGEN:END getDocumentsForBusinessByDocumentType -->

<!-- DOCGEN:START getDocumentsForUserByDocumentType -->
### getDocumentsForUserByDocumentType

**Summary**: Get documents for a user by type

**Description**: Retrieves documents of a specific type associated with a user.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_type |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForUserByDocumentType )

<!-- DOCGEN:END getDocumentsForUserByDocumentType -->

<!-- DOCGEN:START getDocumentsForDriverByDocumentType -->
### getDocumentsForDriverByDocumentType

**Summary**: Get documents for a driver by type

**Description**: Retrieves documents of a specific type associated with a driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driverId |  |
| undefined | path | documentType |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForDriverByType )

<!-- DOCGEN:END getDocumentsForDriverByDocumentType -->

<!-- DOCGEN:START getDocumentsForDeliveryPersonByDocumentType -->
### getDocumentsForDeliveryPersonByDocumentType

**Summary**: Get documents for a delivery person by type

**Description**: Retrieves documents of a specific type associated with a delivery person.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | deliveryPersonId |  |
| undefined | path | documentType |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForDeliveryPersonByType )

<!-- DOCGEN:END getDocumentsForDeliveryPersonByDocumentType -->

<!-- DOCGEN:START getDocumentsForVehicleByDocumentType -->
### getDocumentsForVehicleByDocumentType

**Summary**: Get documents for a vehicle by type

**Description**: Retrieves documents of a specific type associated with a vehicle.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicleId |  |
| undefined | path | documentType |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForVehicleByType )

<!-- DOCGEN:END getDocumentsForVehicleByDocumentType -->

<!-- DOCGEN:START createUserDocument -->
### createUserDocument

**Summary**: Create a document for a user

**Description**: Creates a new document and links it to a specific user.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | user_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createUserDocument )

<!-- DOCGEN:END createUserDocument -->

<!-- DOCGEN:START createBusinessDocument -->
### createBusinessDocument

**Summary**: Create a document for a business

**Description**: Creates a new document and links it to a specific business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createBusinessDocument )

<!-- DOCGEN:END createBusinessDocument -->

<!-- DOCGEN:START createDriverDocument -->
### createDriverDocument

**Summary**: Create a document for a driver

**Description**: Creates a new document and links it to a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createDriverDocument )

<!-- DOCGEN:END createDriverDocument -->

<!-- DOCGEN:START createVehicleDocument -->
### createVehicleDocument

**Summary**: Create a document for a vehicle

**Description**: Creates a new document and links it to a specific vehicle.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicle_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createVehicleDocument )

<!-- DOCGEN:END createVehicleDocument -->

<!-- DOCGEN:START createDeliveryPersonDocument -->
### createDeliveryPersonDocument

**Summary**: Create a document for a delivery person

**Description**: Creates a new document and links it to a specific delivery person.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_person_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createDeliveryPersonDocument )

<!-- DOCGEN:END createDeliveryPersonDocument -->

<!-- DOCGEN:START updateDocumentExpirationDate -->
### updateDocumentExpirationDate

**Summary**: Update document's expiration date

**Description**: Updates the expiration date of a specific document.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDocumentExpirationDate )

<!-- DOCGEN:END updateDocumentExpirationDate -->

<!-- DOCGEN:START updateDocumentIssueDate -->
### updateDocumentIssueDate

**Summary**: Update document's issue date

**Description**: Updates the issue date of a specific document.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDocumentIssueDate )

<!-- DOCGEN:END updateDocumentIssueDate -->

<!-- DOCGEN:START updateDocumentFiles -->
### updateDocumentFiles

**Summary**: Update document's files

**Description**: Updates the files associated with a specific document.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDocumentFiles )

<!-- DOCGEN:END updateDocumentFiles -->

<!-- DOCGEN:START updateDocumentAdditionalInfo -->
### updateDocumentAdditionalInfo

**Summary**: Update document's additional info

**Description**: Updates the additional information of a specific document.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDocumentAdditionalInfo )

<!-- DOCGEN:END updateDocumentAdditionalInfo -->

<!-- DOCGEN:START listDocuments -->
### listDocuments

**Summary**: Get all documents

**Description**: Retrieves all documents in the system. Intended for admin usage.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocuments )

<!-- DOCGEN:END listDocuments -->

<!-- DOCGEN:START getDocumentById -->
### getDocumentById

**Summary**: Get a document by ID

**Description**: Retrieves a specific document by its ID. Useful for detailed document viewing.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentById )

<!-- DOCGEN:END getDocumentById -->

<!-- DOCGEN:START getDocumentsForUser -->
### getDocumentsForUser

**Summary**: Get documents for a user

**Description**: Retrieves all documents associated with a specific user.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | userId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForUser )

<!-- DOCGEN:END getDocumentsForUser -->

<!-- DOCGEN:START getDocumentsForBusiness -->
### getDocumentsForBusiness

**Summary**: Get documents for a business

**Description**: Retrieves all documents associated with a specific business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | businessId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForBusiness )

<!-- DOCGEN:END getDocumentsForBusiness -->

<!-- DOCGEN:START getDocumentsForDeliveryPerson -->
### getDocumentsForDeliveryPerson

**Summary**: Get documents for a delivery person

**Description**: Retrieves all documents associated with a specific delivery person.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | deliveryPersonId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForDeliveryPerson )

<!-- DOCGEN:END getDocumentsForDeliveryPerson -->

<!-- DOCGEN:START getDocumentsForDriver -->
### getDocumentsForDriver

**Summary**: Get documents for a driver

**Description**: Retrieves all documents associated with a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driverId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForDriver )

<!-- DOCGEN:END getDocumentsForDriver -->

<!-- DOCGEN:START getDocumentsForVehicle -->
### getDocumentsForVehicle

**Summary**: Get documents for a vehicle

**Description**: Retrieves all documents associated with a specific vehicle.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicleId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForVehicle )

<!-- DOCGEN:END getDocumentsForVehicle -->

<!-- DOCGEN:START getDocumentsByDocumentType -->
### getDocumentsByDocumentType

**Summary**: Get documents by type

**Description**: Retrieves documents of a specific type across all entities.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | documentType |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsByType )

<!-- DOCGEN:END getDocumentsByDocumentType -->

<!-- DOCGEN:START getDocumentsForBusinessByDocumentType -->
### getDocumentsForBusinessByDocumentType

**Summary**: Get documents for a business by type

**Description**: Retrieves documents of a specific type associated with a business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | businessId |  |
| undefined | path | documentType |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForBusinessByType )

<!-- DOCGEN:END getDocumentsForBusinessByDocumentType -->

<!-- DOCGEN:START getDocumentsForUserByDocumentType -->
### getDocumentsForUserByDocumentType

**Summary**: Get documents for a user by type

**Description**: Retrieves documents of a specific type associated with a user.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_type |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForUserByDocumentType )

<!-- DOCGEN:END getDocumentsForUserByDocumentType -->

<!-- DOCGEN:START getDocumentsForDriverByDocumentType -->
### getDocumentsForDriverByDocumentType

**Summary**: Get documents for a driver by type

**Description**: Retrieves documents of a specific type associated with a driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driverId |  |
| undefined | path | documentType |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForDriverByType )

<!-- DOCGEN:END getDocumentsForDriverByDocumentType -->

<!-- DOCGEN:START getDocumentsForDeliveryPersonByDocumentType -->
### getDocumentsForDeliveryPersonByDocumentType

**Summary**: Get documents for a delivery person by type

**Description**: Retrieves documents of a specific type associated with a delivery person.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | deliveryPersonId |  |
| undefined | path | documentType |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForDeliveryPersonByType )

<!-- DOCGEN:END getDocumentsForDeliveryPersonByDocumentType -->

<!-- DOCGEN:START getDocumentsForVehicleByDocumentType -->
### getDocumentsForVehicleByDocumentType

**Summary**: Get documents for a vehicle by type

**Description**: Retrieves documents of a specific type associated with a vehicle.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicleId |  |
| undefined | path | documentType |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForVehicleByType )

<!-- DOCGEN:END getDocumentsForVehicleByDocumentType -->

<!-- DOCGEN:START createUserDocument -->
### createUserDocument

**Summary**: Create a document for a user

**Description**: Creates a new document and links it to a specific user.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | user_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createUserDocument )

<!-- DOCGEN:END createUserDocument -->

<!-- DOCGEN:START createBusinessDocument -->
### createBusinessDocument

**Summary**: Create a document for a business

**Description**: Creates a new document and links it to a specific business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createBusinessDocument )

<!-- DOCGEN:END createBusinessDocument -->

<!-- DOCGEN:START createDriverDocument -->
### createDriverDocument

**Summary**: Create a document for a driver

**Description**: Creates a new document and links it to a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createDriverDocument )

<!-- DOCGEN:END createDriverDocument -->

<!-- DOCGEN:START createVehicleDocument -->
### createVehicleDocument

**Summary**: Create a document for a vehicle

**Description**: Creates a new document and links it to a specific vehicle.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicle_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createVehicleDocument )

<!-- DOCGEN:END createVehicleDocument -->

<!-- DOCGEN:START createDeliveryPersonDocument -->
### createDeliveryPersonDocument

**Summary**: Create a document for a delivery person

**Description**: Creates a new document and links it to a specific delivery person.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_person_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createDeliveryPersonDocument )

<!-- DOCGEN:END createDeliveryPersonDocument -->

<!-- DOCGEN:START updateDocumentExpirationDate -->
### updateDocumentExpirationDate

**Summary**: Update document's expiration date

**Description**: Updates the expiration date of a specific document.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDocumentExpirationDate )

<!-- DOCGEN:END updateDocumentExpirationDate -->

<!-- DOCGEN:START updateDocumentIssueDate -->
### updateDocumentIssueDate

**Summary**: Update document's issue date

**Description**: Updates the issue date of a specific document.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDocumentIssueDate )

<!-- DOCGEN:END updateDocumentIssueDate -->

<!-- DOCGEN:START updateDocumentFiles -->
### updateDocumentFiles

**Summary**: Update document's files

**Description**: Updates the files associated with a specific document.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDocumentFiles )

<!-- DOCGEN:END updateDocumentFiles -->

<!-- DOCGEN:START updateDocumentAdditionalInfo -->
### updateDocumentAdditionalInfo

**Summary**: Update document's additional info

**Description**: Updates the additional information of a specific document.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDocumentAdditionalInfo )

<!-- DOCGEN:END updateDocumentAdditionalInfo -->

<!-- DOCGEN:START listDocuments -->
### listDocuments

**Summary**: Get all documents

**Description**: Retrieves all documents in the system. Intended for admin usage.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocuments )

<!-- DOCGEN:END listDocuments -->

<!-- DOCGEN:START getDocumentById -->
### getDocumentById

**Summary**: Get a document by ID

**Description**: Retrieves a specific document by its ID. Useful for detailed document viewing.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentById )

<!-- DOCGEN:END getDocumentById -->

<!-- DOCGEN:START getDocumentsForUser -->
### getDocumentsForUser

**Summary**: Get documents for a user

**Description**: Retrieves all documents associated with a specific user.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | userId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForUser )

<!-- DOCGEN:END getDocumentsForUser -->

<!-- DOCGEN:START getDocumentsForBusiness -->
### getDocumentsForBusiness

**Summary**: Get documents for a business

**Description**: Retrieves all documents associated with a specific business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | businessId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForBusiness )

<!-- DOCGEN:END getDocumentsForBusiness -->

<!-- DOCGEN:START getDocumentsForDeliveryPerson -->
### getDocumentsForDeliveryPerson

**Summary**: Get documents for a delivery person

**Description**: Retrieves all documents associated with a specific delivery person.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | deliveryPersonId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForDeliveryPerson )

<!-- DOCGEN:END getDocumentsForDeliveryPerson -->

<!-- DOCGEN:START getDocumentsForDriver -->
### getDocumentsForDriver

**Summary**: Get documents for a driver

**Description**: Retrieves all documents associated with a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driverId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForDriver )

<!-- DOCGEN:END getDocumentsForDriver -->

<!-- DOCGEN:START getDocumentsForVehicle -->
### getDocumentsForVehicle

**Summary**: Get documents for a vehicle

**Description**: Retrieves all documents associated with a specific vehicle.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicleId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForVehicle )

<!-- DOCGEN:END getDocumentsForVehicle -->

<!-- DOCGEN:START getDocumentsByDocumentType -->
### getDocumentsByDocumentType

**Summary**: Get documents by type

**Description**: Retrieves documents of a specific type across all entities.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | documentType |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsByType )

<!-- DOCGEN:END getDocumentsByDocumentType -->

<!-- DOCGEN:START getDocumentsForBusinessByDocumentType -->
### getDocumentsForBusinessByDocumentType

**Summary**: Get documents for a business by type

**Description**: Retrieves documents of a specific type associated with a business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | businessId |  |
| undefined | path | documentType |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForBusinessByType )

<!-- DOCGEN:END getDocumentsForBusinessByDocumentType -->

<!-- DOCGEN:START getDocumentsForUserByDocumentType -->
### getDocumentsForUserByDocumentType

**Summary**: Get documents for a user by type

**Description**: Retrieves documents of a specific type associated with a user.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_type |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForUserByDocumentType )

<!-- DOCGEN:END getDocumentsForUserByDocumentType -->

<!-- DOCGEN:START getDocumentsForDriverByDocumentType -->
### getDocumentsForDriverByDocumentType

**Summary**: Get documents for a driver by type

**Description**: Retrieves documents of a specific type associated with a driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driverId |  |
| undefined | path | documentType |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForDriverByType )

<!-- DOCGEN:END getDocumentsForDriverByDocumentType -->

<!-- DOCGEN:START getDocumentsForDeliveryPersonByDocumentType -->
### getDocumentsForDeliveryPersonByDocumentType

**Summary**: Get documents for a delivery person by type

**Description**: Retrieves documents of a specific type associated with a delivery person.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | deliveryPersonId |  |
| undefined | path | documentType |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForDeliveryPersonByType )

<!-- DOCGEN:END getDocumentsForDeliveryPersonByDocumentType -->

<!-- DOCGEN:START getDocumentsForVehicleByDocumentType -->
### getDocumentsForVehicleByDocumentType

**Summary**: Get documents for a vehicle by type

**Description**: Retrieves documents of a specific type associated with a vehicle.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicleId |  |
| undefined | path | documentType |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForVehicleByType )

<!-- DOCGEN:END getDocumentsForVehicleByDocumentType -->

<!-- DOCGEN:START createUserDocument -->
### createUserDocument

**Summary**: Create a document for a user

**Description**: Creates a new document and links it to a specific user.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | user_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createUserDocument )

<!-- DOCGEN:END createUserDocument -->

<!-- DOCGEN:START createBusinessDocument -->
### createBusinessDocument

**Summary**: Create a document for a business

**Description**: Creates a new document and links it to a specific business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createBusinessDocument )

<!-- DOCGEN:END createBusinessDocument -->

<!-- DOCGEN:START createDriverDocument -->
### createDriverDocument

**Summary**: Create a document for a driver

**Description**: Creates a new document and links it to a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createDriverDocument )

<!-- DOCGEN:END createDriverDocument -->

<!-- DOCGEN:START createVehicleDocument -->
### createVehicleDocument

**Summary**: Create a document for a vehicle

**Description**: Creates a new document and links it to a specific vehicle.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicle_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createVehicleDocument )

<!-- DOCGEN:END createVehicleDocument -->

<!-- DOCGEN:START createDeliveryPersonDocument -->
### createDeliveryPersonDocument

**Summary**: Create a document for a delivery person

**Description**: Creates a new document and links it to a specific delivery person.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_person_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createDeliveryPersonDocument )

<!-- DOCGEN:END createDeliveryPersonDocument -->

<!-- DOCGEN:START updateDocumentExpirationDate -->
### updateDocumentExpirationDate

**Summary**: Update document's expiration date

**Description**: Updates the expiration date of a specific document.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDocumentExpirationDate )

<!-- DOCGEN:END updateDocumentExpirationDate -->

<!-- DOCGEN:START updateDocumentIssueDate -->
### updateDocumentIssueDate

**Summary**: Update document's issue date

**Description**: Updates the issue date of a specific document.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDocumentIssueDate )

<!-- DOCGEN:END updateDocumentIssueDate -->

<!-- DOCGEN:START updateDocumentFiles -->
### updateDocumentFiles

**Summary**: Update document's files

**Description**: Updates the files associated with a specific document.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDocumentFiles )

<!-- DOCGEN:END updateDocumentFiles -->

<!-- DOCGEN:START updateDocumentAdditionalInfo -->
### updateDocumentAdditionalInfo

**Summary**: Update document's additional info

**Description**: Updates the additional information of a specific document.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDocumentAdditionalInfo )

<!-- DOCGEN:END updateDocumentAdditionalInfo -->

<!-- DOCGEN:START listDocuments -->
### listDocuments

**Summary**: Get all documents

**Description**: Retrieves all documents in the system. Intended for admin usage.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocuments )

<!-- DOCGEN:END listDocuments -->

<!-- DOCGEN:START getDocumentById -->
### getDocumentById

**Summary**: Get a document by ID

**Description**: Retrieves a specific document by its ID. Useful for detailed document viewing.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentById )

<!-- DOCGEN:END getDocumentById -->

<!-- DOCGEN:START getDocumentsForUser -->
### getDocumentsForUser

**Summary**: Get documents for a user

**Description**: Retrieves all documents associated with a specific user.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | userId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForUser )

<!-- DOCGEN:END getDocumentsForUser -->

<!-- DOCGEN:START getDocumentsForBusiness -->
### getDocumentsForBusiness

**Summary**: Get documents for a business

**Description**: Retrieves all documents associated with a specific business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | businessId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForBusiness )

<!-- DOCGEN:END getDocumentsForBusiness -->

<!-- DOCGEN:START getDocumentsForDeliveryPerson -->
### getDocumentsForDeliveryPerson

**Summary**: Get documents for a delivery person

**Description**: Retrieves all documents associated with a specific delivery person.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | deliveryPersonId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForDeliveryPerson )

<!-- DOCGEN:END getDocumentsForDeliveryPerson -->

<!-- DOCGEN:START getDocumentsForDriver -->
### getDocumentsForDriver

**Summary**: Get documents for a driver

**Description**: Retrieves all documents associated with a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driverId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForDriver )

<!-- DOCGEN:END getDocumentsForDriver -->

<!-- DOCGEN:START getDocumentsForVehicle -->
### getDocumentsForVehicle

**Summary**: Get documents for a vehicle

**Description**: Retrieves all documents associated with a specific vehicle.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicleId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForVehicle )

<!-- DOCGEN:END getDocumentsForVehicle -->

<!-- DOCGEN:START getDocumentsByDocumentType -->
### getDocumentsByDocumentType

**Summary**: Get documents by type

**Description**: Retrieves documents of a specific type across all entities.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | documentType |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsByType )

<!-- DOCGEN:END getDocumentsByDocumentType -->

<!-- DOCGEN:START getDocumentsForBusinessByDocumentType -->
### getDocumentsForBusinessByDocumentType

**Summary**: Get documents for a business by type

**Description**: Retrieves documents of a specific type associated with a business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | businessId |  |
| undefined | path | documentType |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForBusinessByType )

<!-- DOCGEN:END getDocumentsForBusinessByDocumentType -->

<!-- DOCGEN:START getDocumentsForUserByDocumentType -->
### getDocumentsForUserByDocumentType

**Summary**: Get documents for a user by type

**Description**: Retrieves documents of a specific type associated with a user.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_type |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForUserByDocumentType )

<!-- DOCGEN:END getDocumentsForUserByDocumentType -->

<!-- DOCGEN:START getDocumentsForDriverByDocumentType -->
### getDocumentsForDriverByDocumentType

**Summary**: Get documents for a driver by type

**Description**: Retrieves documents of a specific type associated with a driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driverId |  |
| undefined | path | documentType |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForDriverByType )

<!-- DOCGEN:END getDocumentsForDriverByDocumentType -->

<!-- DOCGEN:START getDocumentsForDeliveryPersonByDocumentType -->
### getDocumentsForDeliveryPersonByDocumentType

**Summary**: Get documents for a delivery person by type

**Description**: Retrieves documents of a specific type associated with a delivery person.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | deliveryPersonId |  |
| undefined | path | documentType |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForDeliveryPersonByType )

<!-- DOCGEN:END getDocumentsForDeliveryPersonByDocumentType -->

<!-- DOCGEN:START getDocumentsForVehicleByDocumentType -->
### getDocumentsForVehicleByDocumentType

**Summary**: Get documents for a vehicle by type

**Description**: Retrieves documents of a specific type associated with a vehicle.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicleId |  |
| undefined | path | documentType |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForVehicleByType )

<!-- DOCGEN:END getDocumentsForVehicleByDocumentType -->

<!-- DOCGEN:START createUserDocument -->
### createUserDocument

**Summary**: Create a document for a user

**Description**: Creates a new document and links it to a specific user.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | user_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createUserDocument )

<!-- DOCGEN:END createUserDocument -->

<!-- DOCGEN:START createBusinessDocument -->
### createBusinessDocument

**Summary**: Create a document for a business

**Description**: Creates a new document and links it to a specific business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createBusinessDocument )

<!-- DOCGEN:END createBusinessDocument -->

<!-- DOCGEN:START createDriverDocument -->
### createDriverDocument

**Summary**: Create a document for a driver

**Description**: Creates a new document and links it to a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createDriverDocument )

<!-- DOCGEN:END createDriverDocument -->

<!-- DOCGEN:START createVehicleDocument -->
### createVehicleDocument

**Summary**: Create a document for a vehicle

**Description**: Creates a new document and links it to a specific vehicle.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicle_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createVehicleDocument )

<!-- DOCGEN:END createVehicleDocument -->

<!-- DOCGEN:START createDeliveryPersonDocument -->
### createDeliveryPersonDocument

**Summary**: Create a document for a delivery person

**Description**: Creates a new document and links it to a specific delivery person.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_person_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createDeliveryPersonDocument )

<!-- DOCGEN:END createDeliveryPersonDocument -->

<!-- DOCGEN:START updateDocumentExpirationDate -->
### updateDocumentExpirationDate

**Summary**: Update document's expiration date

**Description**: Updates the expiration date of a specific document.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDocumentExpirationDate )

<!-- DOCGEN:END updateDocumentExpirationDate -->

<!-- DOCGEN:START updateDocumentIssueDate -->
### updateDocumentIssueDate

**Summary**: Update document's issue date

**Description**: Updates the issue date of a specific document.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDocumentIssueDate )

<!-- DOCGEN:END updateDocumentIssueDate -->

<!-- DOCGEN:START updateDocumentFiles -->
### updateDocumentFiles

**Summary**: Update document's files

**Description**: Updates the files associated with a specific document.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDocumentFiles )

<!-- DOCGEN:END updateDocumentFiles -->

<!-- DOCGEN:START updateDocumentAdditionalInfo -->
### updateDocumentAdditionalInfo

**Summary**: Update document's additional info

**Description**: Updates the additional information of a specific document.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDocumentAdditionalInfo )

<!-- DOCGEN:END updateDocumentAdditionalInfo -->

<!-- DOCGEN:START listDocuments -->
### listDocuments

**Summary**: Get all documents

**Description**: Retrieves all documents in the system. Intended for admin usage.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocuments )

<!-- DOCGEN:END listDocuments -->

<!-- DOCGEN:START getDocumentById -->
### getDocumentById

**Summary**: Get a document by ID

**Description**: Retrieves a specific document by its ID. Useful for detailed document viewing.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentById )

<!-- DOCGEN:END getDocumentById -->

<!-- DOCGEN:START getDocumentsForUser -->
### getDocumentsForUser

**Summary**: Get documents for a user

**Description**: Retrieves all documents associated with a specific user.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | userId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForUser )

<!-- DOCGEN:END getDocumentsForUser -->

<!-- DOCGEN:START getDocumentsForBusiness -->
### getDocumentsForBusiness

**Summary**: Get documents for a business

**Description**: Retrieves all documents associated with a specific business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | businessId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForBusiness )

<!-- DOCGEN:END getDocumentsForBusiness -->

<!-- DOCGEN:START getDocumentsForDeliveryPerson -->
### getDocumentsForDeliveryPerson

**Summary**: Get documents for a delivery person

**Description**: Retrieves all documents associated with a specific delivery person.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | deliveryPersonId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForDeliveryPerson )

<!-- DOCGEN:END getDocumentsForDeliveryPerson -->

<!-- DOCGEN:START getDocumentsForDriver -->
### getDocumentsForDriver

**Summary**: Get documents for a driver

**Description**: Retrieves all documents associated with a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driverId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForDriver )

<!-- DOCGEN:END getDocumentsForDriver -->

<!-- DOCGEN:START getDocumentsForVehicle -->
### getDocumentsForVehicle

**Summary**: Get documents for a vehicle

**Description**: Retrieves all documents associated with a specific vehicle.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicleId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForVehicle )

<!-- DOCGEN:END getDocumentsForVehicle -->

<!-- DOCGEN:START getDocumentsByDocumentType -->
### getDocumentsByDocumentType

**Summary**: Get documents by type

**Description**: Retrieves documents of a specific type across all entities.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | documentType |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsByType )

<!-- DOCGEN:END getDocumentsByDocumentType -->

<!-- DOCGEN:START getDocumentsForBusinessByDocumentType -->
### getDocumentsForBusinessByDocumentType

**Summary**: Get documents for a business by type

**Description**: Retrieves documents of a specific type associated with a business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | businessId |  |
| undefined | path | documentType |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForBusinessByType )

<!-- DOCGEN:END getDocumentsForBusinessByDocumentType -->

<!-- DOCGEN:START getDocumentsForUserByDocumentType -->
### getDocumentsForUserByDocumentType

**Summary**: Get documents for a user by type

**Description**: Retrieves documents of a specific type associated with a user.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_type |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForUserByDocumentType )

<!-- DOCGEN:END getDocumentsForUserByDocumentType -->

<!-- DOCGEN:START getDocumentsForDriverByDocumentType -->
### getDocumentsForDriverByDocumentType

**Summary**: Get documents for a driver by type

**Description**: Retrieves documents of a specific type associated with a driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driverId |  |
| undefined | path | documentType |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForDriverByType )

<!-- DOCGEN:END getDocumentsForDriverByDocumentType -->

<!-- DOCGEN:START getDocumentsForDeliveryPersonByDocumentType -->
### getDocumentsForDeliveryPersonByDocumentType

**Summary**: Get documents for a delivery person by type

**Description**: Retrieves documents of a specific type associated with a delivery person.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | deliveryPersonId |  |
| undefined | path | documentType |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForDeliveryPersonByType )

<!-- DOCGEN:END getDocumentsForDeliveryPersonByDocumentType -->

<!-- DOCGEN:START getDocumentsForVehicleByDocumentType -->
### getDocumentsForVehicleByDocumentType

**Summary**: Get documents for a vehicle by type

**Description**: Retrieves documents of a specific type associated with a vehicle.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicleId |  |
| undefined | path | documentType |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForVehicleByType )

<!-- DOCGEN:END getDocumentsForVehicleByDocumentType -->

<!-- DOCGEN:START createUserDocument -->
### createUserDocument

**Summary**: Create a document for a user

**Description**: Creates a new document and links it to a specific user.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | user_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createUserDocument )

<!-- DOCGEN:END createUserDocument -->

<!-- DOCGEN:START createBusinessDocument -->
### createBusinessDocument

**Summary**: Create a document for a business

**Description**: Creates a new document and links it to a specific business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createBusinessDocument )

<!-- DOCGEN:END createBusinessDocument -->

<!-- DOCGEN:START createDriverDocument -->
### createDriverDocument

**Summary**: Create a document for a driver

**Description**: Creates a new document and links it to a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createDriverDocument )

<!-- DOCGEN:END createDriverDocument -->

<!-- DOCGEN:START createVehicleDocument -->
### createVehicleDocument

**Summary**: Create a document for a vehicle

**Description**: Creates a new document and links it to a specific vehicle.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicle_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createVehicleDocument )

<!-- DOCGEN:END createVehicleDocument -->

<!-- DOCGEN:START createDeliveryPersonDocument -->
### createDeliveryPersonDocument

**Summary**: Create a document for a delivery person

**Description**: Creates a new document and links it to a specific delivery person.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_person_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createDeliveryPersonDocument )

<!-- DOCGEN:END createDeliveryPersonDocument -->

<!-- DOCGEN:START updateDocumentExpirationDate -->
### updateDocumentExpirationDate

**Summary**: Update document's expiration date

**Description**: Updates the expiration date of a specific document.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDocumentExpirationDate )

<!-- DOCGEN:END updateDocumentExpirationDate -->

<!-- DOCGEN:START updateDocumentIssueDate -->
### updateDocumentIssueDate

**Summary**: Update document's issue date

**Description**: Updates the issue date of a specific document.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDocumentIssueDate )

<!-- DOCGEN:END updateDocumentIssueDate -->

<!-- DOCGEN:START updateDocumentFiles -->
### updateDocumentFiles

**Summary**: Update document's files

**Description**: Updates the files associated with a specific document.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDocumentFiles )

<!-- DOCGEN:END updateDocumentFiles -->

<!-- DOCGEN:START updateDocumentAdditionalInfo -->
### updateDocumentAdditionalInfo

**Summary**: Update document's additional info

**Description**: Updates the additional information of a specific document.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDocumentAdditionalInfo )

<!-- DOCGEN:END updateDocumentAdditionalInfo -->

<!-- DOCGEN:START listDocuments -->
### listDocuments

**Summary**: Get all documents

**Description**: Retrieves all documents in the system. Intended for admin usage.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocuments )

<!-- DOCGEN:END listDocuments -->

<!-- DOCGEN:START getDocumentById -->
### getDocumentById

**Summary**: Get a document by ID

**Description**: Retrieves a specific document by its ID. Useful for detailed document viewing.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentById )

<!-- DOCGEN:END getDocumentById -->

<!-- DOCGEN:START getDocumentsForUser -->
### getDocumentsForUser

**Summary**: Get documents for a user

**Description**: Retrieves all documents associated with a specific user.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | userId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForUser )

<!-- DOCGEN:END getDocumentsForUser -->

<!-- DOCGEN:START getDocumentsForBusiness -->
### getDocumentsForBusiness

**Summary**: Get documents for a business

**Description**: Retrieves all documents associated with a specific business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | businessId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForBusiness )

<!-- DOCGEN:END getDocumentsForBusiness -->

<!-- DOCGEN:START getDocumentsForDeliveryPerson -->
### getDocumentsForDeliveryPerson

**Summary**: Get documents for a delivery person

**Description**: Retrieves all documents associated with a specific delivery person.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | deliveryPersonId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForDeliveryPerson )

<!-- DOCGEN:END getDocumentsForDeliveryPerson -->

<!-- DOCGEN:START getDocumentsForDriver -->
### getDocumentsForDriver

**Summary**: Get documents for a driver

**Description**: Retrieves all documents associated with a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driverId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForDriver )

<!-- DOCGEN:END getDocumentsForDriver -->

<!-- DOCGEN:START getDocumentsForVehicle -->
### getDocumentsForVehicle

**Summary**: Get documents for a vehicle

**Description**: Retrieves all documents associated with a specific vehicle.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicleId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForVehicle )

<!-- DOCGEN:END getDocumentsForVehicle -->

<!-- DOCGEN:START getDocumentsByDocumentType -->
### getDocumentsByDocumentType

**Summary**: Get documents by type

**Description**: Retrieves documents of a specific type across all entities.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | documentType |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsByType )

<!-- DOCGEN:END getDocumentsByDocumentType -->

<!-- DOCGEN:START getDocumentsForBusinessByDocumentType -->
### getDocumentsForBusinessByDocumentType

**Summary**: Get documents for a business by type

**Description**: Retrieves documents of a specific type associated with a business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | businessId |  |
| undefined | path | documentType |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForBusinessByType )

<!-- DOCGEN:END getDocumentsForBusinessByDocumentType -->

<!-- DOCGEN:START getDocumentsForUserByDocumentType -->
### getDocumentsForUserByDocumentType

**Summary**: Get documents for a user by type

**Description**: Retrieves documents of a specific type associated with a user.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_type |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForUserByDocumentType )

<!-- DOCGEN:END getDocumentsForUserByDocumentType -->

<!-- DOCGEN:START getDocumentsForDriverByDocumentType -->
### getDocumentsForDriverByDocumentType

**Summary**: Get documents for a driver by type

**Description**: Retrieves documents of a specific type associated with a driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driverId |  |
| undefined | path | documentType |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForDriverByType )

<!-- DOCGEN:END getDocumentsForDriverByDocumentType -->

<!-- DOCGEN:START getDocumentsForDeliveryPersonByDocumentType -->
### getDocumentsForDeliveryPersonByDocumentType

**Summary**: Get documents for a delivery person by type

**Description**: Retrieves documents of a specific type associated with a delivery person.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | deliveryPersonId |  |
| undefined | path | documentType |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForDeliveryPersonByType )

<!-- DOCGEN:END getDocumentsForDeliveryPersonByDocumentType -->

<!-- DOCGEN:START getDocumentsForVehicleByDocumentType -->
### getDocumentsForVehicleByDocumentType

**Summary**: Get documents for a vehicle by type

**Description**: Retrieves documents of a specific type associated with a vehicle.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicleId |  |
| undefined | path | documentType |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForVehicleByType )

<!-- DOCGEN:END getDocumentsForVehicleByDocumentType -->

<!-- DOCGEN:START createUserDocument -->
### createUserDocument

**Summary**: Create a document for a user

**Description**: Creates a new document and links it to a specific user.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | user_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createUserDocument )

<!-- DOCGEN:END createUserDocument -->

<!-- DOCGEN:START createBusinessDocument -->
### createBusinessDocument

**Summary**: Create a document for a business

**Description**: Creates a new document and links it to a specific business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createBusinessDocument )

<!-- DOCGEN:END createBusinessDocument -->

<!-- DOCGEN:START createDriverDocument -->
### createDriverDocument

**Summary**: Create a document for a driver

**Description**: Creates a new document and links it to a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createDriverDocument )

<!-- DOCGEN:END createDriverDocument -->

<!-- DOCGEN:START createVehicleDocument -->
### createVehicleDocument

**Summary**: Create a document for a vehicle

**Description**: Creates a new document and links it to a specific vehicle.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicle_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createVehicleDocument )

<!-- DOCGEN:END createVehicleDocument -->

<!-- DOCGEN:START createDeliveryPersonDocument -->
### createDeliveryPersonDocument

**Summary**: Create a document for a delivery person

**Description**: Creates a new document and links it to a specific delivery person.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_person_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createDeliveryPersonDocument )

<!-- DOCGEN:END createDeliveryPersonDocument -->

<!-- DOCGEN:START updateDocumentExpirationDate -->
### updateDocumentExpirationDate

**Summary**: Update document's expiration date

**Description**: Updates the expiration date of a specific document.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDocumentExpirationDate )

<!-- DOCGEN:END updateDocumentExpirationDate -->

<!-- DOCGEN:START updateDocumentIssueDate -->
### updateDocumentIssueDate

**Summary**: Update document's issue date

**Description**: Updates the issue date of a specific document.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDocumentIssueDate )

<!-- DOCGEN:END updateDocumentIssueDate -->

<!-- DOCGEN:START updateDocumentFiles -->
### updateDocumentFiles

**Summary**: Update document's files

**Description**: Updates the files associated with a specific document.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDocumentFiles )

<!-- DOCGEN:END updateDocumentFiles -->

<!-- DOCGEN:START updateDocumentAdditionalInfo -->
### updateDocumentAdditionalInfo

**Summary**: Update document's additional info

**Description**: Updates the additional information of a specific document.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDocumentAdditionalInfo )

<!-- DOCGEN:END updateDocumentAdditionalInfo -->

<!-- DOCGEN:START listDocuments -->
### listDocuments

**Summary**: Get all documents

**Description**: Retrieves all documents in the system. Intended for admin usage.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocuments )

<!-- DOCGEN:END listDocuments -->

<!-- DOCGEN:START getDocumentById -->
### getDocumentById

**Summary**: Get a document by ID

**Description**: Retrieves a specific document by its ID. Useful for detailed document viewing.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentById )

<!-- DOCGEN:END getDocumentById -->

<!-- DOCGEN:START getDocumentsForUser -->
### getDocumentsForUser

**Summary**: Get documents for a user

**Description**: Retrieves all documents associated with a specific user.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | userId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForUser )

<!-- DOCGEN:END getDocumentsForUser -->

<!-- DOCGEN:START getDocumentsForBusiness -->
### getDocumentsForBusiness

**Summary**: Get documents for a business

**Description**: Retrieves all documents associated with a specific business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | businessId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForBusiness )

<!-- DOCGEN:END getDocumentsForBusiness -->

<!-- DOCGEN:START getDocumentsForDeliveryPerson -->
### getDocumentsForDeliveryPerson

**Summary**: Get documents for a delivery person

**Description**: Retrieves all documents associated with a specific delivery person.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | deliveryPersonId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForDeliveryPerson )

<!-- DOCGEN:END getDocumentsForDeliveryPerson -->

<!-- DOCGEN:START getDocumentsForDriver -->
### getDocumentsForDriver

**Summary**: Get documents for a driver

**Description**: Retrieves all documents associated with a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driverId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForDriver )

<!-- DOCGEN:END getDocumentsForDriver -->

<!-- DOCGEN:START getDocumentsForVehicle -->
### getDocumentsForVehicle

**Summary**: Get documents for a vehicle

**Description**: Retrieves all documents associated with a specific vehicle.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicleId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForVehicle )

<!-- DOCGEN:END getDocumentsForVehicle -->

<!-- DOCGEN:START getDocumentsByDocumentType -->
### getDocumentsByDocumentType

**Summary**: Get documents by type

**Description**: Retrieves documents of a specific type across all entities.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | documentType |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsByType )

<!-- DOCGEN:END getDocumentsByDocumentType -->

<!-- DOCGEN:START getDocumentsForBusinessByDocumentType -->
### getDocumentsForBusinessByDocumentType

**Summary**: Get documents for a business by type

**Description**: Retrieves documents of a specific type associated with a business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | businessId |  |
| undefined | path | documentType |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForBusinessByType )

<!-- DOCGEN:END getDocumentsForBusinessByDocumentType -->

<!-- DOCGEN:START getDocumentsForUserByDocumentType -->
### getDocumentsForUserByDocumentType

**Summary**: Get documents for a user by type

**Description**: Retrieves documents of a specific type associated with a user.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_type |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForUserByDocumentType )

<!-- DOCGEN:END getDocumentsForUserByDocumentType -->

<!-- DOCGEN:START getDocumentsForDriverByDocumentType -->
### getDocumentsForDriverByDocumentType

**Summary**: Get documents for a driver by type

**Description**: Retrieves documents of a specific type associated with a driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driverId |  |
| undefined | path | documentType |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForDriverByType )

<!-- DOCGEN:END getDocumentsForDriverByDocumentType -->

<!-- DOCGEN:START getDocumentsForDeliveryPersonByDocumentType -->
### getDocumentsForDeliveryPersonByDocumentType

**Summary**: Get documents for a delivery person by type

**Description**: Retrieves documents of a specific type associated with a delivery person.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | deliveryPersonId |  |
| undefined | path | documentType |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForDeliveryPersonByType )

<!-- DOCGEN:END getDocumentsForDeliveryPersonByDocumentType -->

<!-- DOCGEN:START getDocumentsForVehicleByDocumentType -->
### getDocumentsForVehicleByDocumentType

**Summary**: Get documents for a vehicle by type

**Description**: Retrieves documents of a specific type associated with a vehicle.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicleId |  |
| undefined | path | documentType |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForVehicleByType )

<!-- DOCGEN:END getDocumentsForVehicleByDocumentType -->

<!-- DOCGEN:START createUserDocument -->
### createUserDocument

**Summary**: Create a document for a user

**Description**: Creates a new document and links it to a specific user.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | user_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createUserDocument )

<!-- DOCGEN:END createUserDocument -->

<!-- DOCGEN:START createBusinessDocument -->
### createBusinessDocument

**Summary**: Create a document for a business

**Description**: Creates a new document and links it to a specific business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createBusinessDocument )

<!-- DOCGEN:END createBusinessDocument -->

<!-- DOCGEN:START createDriverDocument -->
### createDriverDocument

**Summary**: Create a document for a driver

**Description**: Creates a new document and links it to a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createDriverDocument )

<!-- DOCGEN:END createDriverDocument -->

<!-- DOCGEN:START createVehicleDocument -->
### createVehicleDocument

**Summary**: Create a document for a vehicle

**Description**: Creates a new document and links it to a specific vehicle.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicle_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createVehicleDocument )

<!-- DOCGEN:END createVehicleDocument -->

<!-- DOCGEN:START createDeliveryPersonDocument -->
### createDeliveryPersonDocument

**Summary**: Create a document for a delivery person

**Description**: Creates a new document and links it to a specific delivery person.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_person_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createDeliveryPersonDocument )

<!-- DOCGEN:END createDeliveryPersonDocument -->

<!-- DOCGEN:START updateDocumentExpirationDate -->
### updateDocumentExpirationDate

**Summary**: Update document's expiration date

**Description**: Updates the expiration date of a specific document.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDocumentExpirationDate )

<!-- DOCGEN:END updateDocumentExpirationDate -->

<!-- DOCGEN:START updateDocumentIssueDate -->
### updateDocumentIssueDate

**Summary**: Update document's issue date

**Description**: Updates the issue date of a specific document.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDocumentIssueDate )

<!-- DOCGEN:END updateDocumentIssueDate -->

<!-- DOCGEN:START updateDocumentFiles -->
### updateDocumentFiles

**Summary**: Update document's files

**Description**: Updates the files associated with a specific document.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDocumentFiles )

<!-- DOCGEN:END updateDocumentFiles -->

<!-- DOCGEN:START updateDocumentAdditionalInfo -->
### updateDocumentAdditionalInfo

**Summary**: Update document's additional info

**Description**: Updates the additional information of a specific document.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDocumentAdditionalInfo )

<!-- DOCGEN:END updateDocumentAdditionalInfo -->

<!-- DOCGEN:START listDocuments -->
### listDocuments

**Summary**: Get all documents

**Description**: Retrieves all documents in the system. Intended for admin usage.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocuments )

<!-- DOCGEN:END listDocuments -->

<!-- DOCGEN:START getDocumentById -->
### getDocumentById

**Summary**: Get a document by ID

**Description**: Retrieves a specific document by its ID. Useful for detailed document viewing.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentById )

<!-- DOCGEN:END getDocumentById -->

<!-- DOCGEN:START getDocumentsForUser -->
### getDocumentsForUser

**Summary**: Get documents for a user

**Description**: Retrieves all documents associated with a specific user.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | userId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForUser )

<!-- DOCGEN:END getDocumentsForUser -->

<!-- DOCGEN:START getDocumentsForBusiness -->
### getDocumentsForBusiness

**Summary**: Get documents for a business

**Description**: Retrieves all documents associated with a specific business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | businessId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForBusiness )

<!-- DOCGEN:END getDocumentsForBusiness -->

<!-- DOCGEN:START getDocumentsForDeliveryPerson -->
### getDocumentsForDeliveryPerson

**Summary**: Get documents for a delivery person

**Description**: Retrieves all documents associated with a specific delivery person.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | deliveryPersonId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForDeliveryPerson )

<!-- DOCGEN:END getDocumentsForDeliveryPerson -->

<!-- DOCGEN:START getDocumentsForDriver -->
### getDocumentsForDriver

**Summary**: Get documents for a driver

**Description**: Retrieves all documents associated with a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driverId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForDriver )

<!-- DOCGEN:END getDocumentsForDriver -->

<!-- DOCGEN:START getDocumentsForVehicle -->
### getDocumentsForVehicle

**Summary**: Get documents for a vehicle

**Description**: Retrieves all documents associated with a specific vehicle.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicleId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForVehicle )

<!-- DOCGEN:END getDocumentsForVehicle -->

<!-- DOCGEN:START getDocumentsByDocumentType -->
### getDocumentsByDocumentType

**Summary**: Get documents by type

**Description**: Retrieves documents of a specific type across all entities.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | documentType |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsByType )

<!-- DOCGEN:END getDocumentsByDocumentType -->

<!-- DOCGEN:START getDocumentsForBusinessByDocumentType -->
### getDocumentsForBusinessByDocumentType

**Summary**: Get documents for a business by type

**Description**: Retrieves documents of a specific type associated with a business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | businessId |  |
| undefined | path | documentType |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForBusinessByType )

<!-- DOCGEN:END getDocumentsForBusinessByDocumentType -->

<!-- DOCGEN:START getDocumentsForUserByDocumentType -->
### getDocumentsForUserByDocumentType

**Summary**: Get documents for a user by type

**Description**: Retrieves documents of a specific type associated with a user.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_type |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForUserByDocumentType )

<!-- DOCGEN:END getDocumentsForUserByDocumentType -->

<!-- DOCGEN:START getDocumentsForDriverByDocumentType -->
### getDocumentsForDriverByDocumentType

**Summary**: Get documents for a driver by type

**Description**: Retrieves documents of a specific type associated with a driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driverId |  |
| undefined | path | documentType |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForDriverByType )

<!-- DOCGEN:END getDocumentsForDriverByDocumentType -->

<!-- DOCGEN:START getDocumentsForDeliveryPersonByDocumentType -->
### getDocumentsForDeliveryPersonByDocumentType

**Summary**: Get documents for a delivery person by type

**Description**: Retrieves documents of a specific type associated with a delivery person.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | deliveryPersonId |  |
| undefined | path | documentType |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForDeliveryPersonByType )

<!-- DOCGEN:END getDocumentsForDeliveryPersonByDocumentType -->

<!-- DOCGEN:START getDocumentsForVehicleByDocumentType -->
### getDocumentsForVehicleByDocumentType

**Summary**: Get documents for a vehicle by type

**Description**: Retrieves documents of a specific type associated with a vehicle.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicleId |  |
| undefined | path | documentType |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForVehicleByType )

<!-- DOCGEN:END getDocumentsForVehicleByDocumentType -->

<!-- DOCGEN:START createUserDocument -->
### createUserDocument

**Summary**: Create a document for a user

**Description**: Creates a new document and links it to a specific user.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | user_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createUserDocument )

<!-- DOCGEN:END createUserDocument -->

<!-- DOCGEN:START createBusinessDocument -->
### createBusinessDocument

**Summary**: Create a document for a business

**Description**: Creates a new document and links it to a specific business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createBusinessDocument )

<!-- DOCGEN:END createBusinessDocument -->

<!-- DOCGEN:START createDriverDocument -->
### createDriverDocument

**Summary**: Create a document for a driver

**Description**: Creates a new document and links it to a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createDriverDocument )

<!-- DOCGEN:END createDriverDocument -->

<!-- DOCGEN:START createVehicleDocument -->
### createVehicleDocument

**Summary**: Create a document for a vehicle

**Description**: Creates a new document and links it to a specific vehicle.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicle_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createVehicleDocument )

<!-- DOCGEN:END createVehicleDocument -->

<!-- DOCGEN:START createDeliveryPersonDocument -->
### createDeliveryPersonDocument

**Summary**: Create a document for a delivery person

**Description**: Creates a new document and links it to a specific delivery person.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_person_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createDeliveryPersonDocument )

<!-- DOCGEN:END createDeliveryPersonDocument -->

<!-- DOCGEN:START updateDocumentExpirationDate -->
### updateDocumentExpirationDate

**Summary**: Update document's expiration date

**Description**: Updates the expiration date of a specific document.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDocumentExpirationDate )

<!-- DOCGEN:END updateDocumentExpirationDate -->

<!-- DOCGEN:START updateDocumentIssueDate -->
### updateDocumentIssueDate

**Summary**: Update document's issue date

**Description**: Updates the issue date of a specific document.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDocumentIssueDate )

<!-- DOCGEN:END updateDocumentIssueDate -->

<!-- DOCGEN:START updateDocumentFiles -->
### updateDocumentFiles

**Summary**: Update document's files

**Description**: Updates the files associated with a specific document.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDocumentFiles )

<!-- DOCGEN:END updateDocumentFiles -->

<!-- DOCGEN:START updateDocumentAdditionalInfo -->
### updateDocumentAdditionalInfo

**Summary**: Update document's additional info

**Description**: Updates the additional information of a specific document.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDocumentAdditionalInfo )

<!-- DOCGEN:END updateDocumentAdditionalInfo -->

<!-- DOCGEN:START listDocuments -->
### listDocuments

**Summary**: Get all documents

**Description**: Retrieves all documents in the system. Intended for admin usage.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocuments )

<!-- DOCGEN:END listDocuments -->

<!-- DOCGEN:START getDocumentById -->
### getDocumentById

**Summary**: Get a document by ID

**Description**: Retrieves a specific document by its ID. Useful for detailed document viewing.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentById )

<!-- DOCGEN:END getDocumentById -->

<!-- DOCGEN:START getDocumentsForUser -->
### getDocumentsForUser

**Summary**: Get documents for a user

**Description**: Retrieves all documents associated with a specific user.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | userId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForUser )

<!-- DOCGEN:END getDocumentsForUser -->

<!-- DOCGEN:START getDocumentsForBusiness -->
### getDocumentsForBusiness

**Summary**: Get documents for a business

**Description**: Retrieves all documents associated with a specific business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | businessId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForBusiness )

<!-- DOCGEN:END getDocumentsForBusiness -->

<!-- DOCGEN:START getDocumentsForDeliveryPerson -->
### getDocumentsForDeliveryPerson

**Summary**: Get documents for a delivery person

**Description**: Retrieves all documents associated with a specific delivery person.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | deliveryPersonId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForDeliveryPerson )

<!-- DOCGEN:END getDocumentsForDeliveryPerson -->

<!-- DOCGEN:START getDocumentsForDriver -->
### getDocumentsForDriver

**Summary**: Get documents for a driver

**Description**: Retrieves all documents associated with a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driverId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForDriver )

<!-- DOCGEN:END getDocumentsForDriver -->

<!-- DOCGEN:START getDocumentsForVehicle -->
### getDocumentsForVehicle

**Summary**: Get documents for a vehicle

**Description**: Retrieves all documents associated with a specific vehicle.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicleId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForVehicle )

<!-- DOCGEN:END getDocumentsForVehicle -->

<!-- DOCGEN:START getDocumentsByDocumentType -->
### getDocumentsByDocumentType

**Summary**: Get documents by type

**Description**: Retrieves documents of a specific type across all entities.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | documentType |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsByType )

<!-- DOCGEN:END getDocumentsByDocumentType -->

<!-- DOCGEN:START getDocumentsForBusinessByDocumentType -->
### getDocumentsForBusinessByDocumentType

**Summary**: Get documents for a business by type

**Description**: Retrieves documents of a specific type associated with a business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | businessId |  |
| undefined | path | documentType |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForBusinessByType )

<!-- DOCGEN:END getDocumentsForBusinessByDocumentType -->

<!-- DOCGEN:START getDocumentsForUserByDocumentType -->
### getDocumentsForUserByDocumentType

**Summary**: Get documents for a user by type

**Description**: Retrieves documents of a specific type associated with a user.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_type |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForUserByDocumentType )

<!-- DOCGEN:END getDocumentsForUserByDocumentType -->

<!-- DOCGEN:START getDocumentsForDriverByDocumentType -->
### getDocumentsForDriverByDocumentType

**Summary**: Get documents for a driver by type

**Description**: Retrieves documents of a specific type associated with a driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driverId |  |
| undefined | path | documentType |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForDriverByType )

<!-- DOCGEN:END getDocumentsForDriverByDocumentType -->

<!-- DOCGEN:START getDocumentsForDeliveryPersonByDocumentType -->
### getDocumentsForDeliveryPersonByDocumentType

**Summary**: Get documents for a delivery person by type

**Description**: Retrieves documents of a specific type associated with a delivery person.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | deliveryPersonId |  |
| undefined | path | documentType |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForDeliveryPersonByType )

<!-- DOCGEN:END getDocumentsForDeliveryPersonByDocumentType -->

<!-- DOCGEN:START getDocumentsForVehicleByDocumentType -->
### getDocumentsForVehicleByDocumentType

**Summary**: Get documents for a vehicle by type

**Description**: Retrieves documents of a specific type associated with a vehicle.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicleId |  |
| undefined | path | documentType |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForVehicleByType )

<!-- DOCGEN:END getDocumentsForVehicleByDocumentType -->

<!-- DOCGEN:START createUserDocument -->
### createUserDocument

**Summary**: Create a document for a user

**Description**: Creates a new document and links it to a specific user.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | user_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createUserDocument )

<!-- DOCGEN:END createUserDocument -->

<!-- DOCGEN:START createBusinessDocument -->
### createBusinessDocument

**Summary**: Create a document for a business

**Description**: Creates a new document and links it to a specific business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createBusinessDocument )

<!-- DOCGEN:END createBusinessDocument -->

<!-- DOCGEN:START createDriverDocument -->
### createDriverDocument

**Summary**: Create a document for a driver

**Description**: Creates a new document and links it to a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createDriverDocument )

<!-- DOCGEN:END createDriverDocument -->

<!-- DOCGEN:START createVehicleDocument -->
### createVehicleDocument

**Summary**: Create a document for a vehicle

**Description**: Creates a new document and links it to a specific vehicle.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicle_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createVehicleDocument )

<!-- DOCGEN:END createVehicleDocument -->

<!-- DOCGEN:START createDeliveryPersonDocument -->
### createDeliveryPersonDocument

**Summary**: Create a document for a delivery person

**Description**: Creates a new document and links it to a specific delivery person.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_person_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createDeliveryPersonDocument )

<!-- DOCGEN:END createDeliveryPersonDocument -->

<!-- DOCGEN:START updateDocumentExpirationDate -->
### updateDocumentExpirationDate

**Summary**: Update document's expiration date

**Description**: Updates the expiration date of a specific document.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDocumentExpirationDate )

<!-- DOCGEN:END updateDocumentExpirationDate -->

<!-- DOCGEN:START updateDocumentIssueDate -->
### updateDocumentIssueDate

**Summary**: Update document's issue date

**Description**: Updates the issue date of a specific document.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDocumentIssueDate )

<!-- DOCGEN:END updateDocumentIssueDate -->

<!-- DOCGEN:START updateDocumentFiles -->
### updateDocumentFiles

**Summary**: Update document's files

**Description**: Updates the files associated with a specific document.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDocumentFiles )

<!-- DOCGEN:END updateDocumentFiles -->

<!-- DOCGEN:START updateDocumentAdditionalInfo -->
### updateDocumentAdditionalInfo

**Summary**: Update document's additional info

**Description**: Updates the additional information of a specific document.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDocumentAdditionalInfo )

<!-- DOCGEN:END updateDocumentAdditionalInfo -->

<!-- DOCGEN:START listDocuments -->
### listDocuments

**Summary**: Get all documents

**Description**: Retrieves all documents in the system. Intended for admin usage.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocuments )

<!-- DOCGEN:END listDocuments -->

<!-- DOCGEN:START getDocumentById -->
### getDocumentById

**Summary**: Get a document by ID

**Description**: Retrieves a specific document by its ID. Useful for detailed document viewing.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentById )

<!-- DOCGEN:END getDocumentById -->

<!-- DOCGEN:START getDocumentsForUser -->
### getDocumentsForUser

**Summary**: Get documents for a user

**Description**: Retrieves all documents associated with a specific user.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | userId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForUser )

<!-- DOCGEN:END getDocumentsForUser -->

<!-- DOCGEN:START getDocumentsForBusiness -->
### getDocumentsForBusiness

**Summary**: Get documents for a business

**Description**: Retrieves all documents associated with a specific business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | businessId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForBusiness )

<!-- DOCGEN:END getDocumentsForBusiness -->

<!-- DOCGEN:START getDocumentsForDeliveryPerson -->
### getDocumentsForDeliveryPerson

**Summary**: Get documents for a delivery person

**Description**: Retrieves all documents associated with a specific delivery person.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | deliveryPersonId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForDeliveryPerson )

<!-- DOCGEN:END getDocumentsForDeliveryPerson -->

<!-- DOCGEN:START getDocumentsForDriver -->
### getDocumentsForDriver

**Summary**: Get documents for a driver

**Description**: Retrieves all documents associated with a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driverId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForDriver )

<!-- DOCGEN:END getDocumentsForDriver -->

<!-- DOCGEN:START getDocumentsForVehicle -->
### getDocumentsForVehicle

**Summary**: Get documents for a vehicle

**Description**: Retrieves all documents associated with a specific vehicle.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicleId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForVehicle )

<!-- DOCGEN:END getDocumentsForVehicle -->

<!-- DOCGEN:START getDocumentsByDocumentType -->
### getDocumentsByDocumentType

**Summary**: Get documents by type

**Description**: Retrieves documents of a specific type across all entities.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | documentType |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsByType )

<!-- DOCGEN:END getDocumentsByDocumentType -->

<!-- DOCGEN:START getDocumentsForBusinessByDocumentType -->
### getDocumentsForBusinessByDocumentType

**Summary**: Get documents for a business by type

**Description**: Retrieves documents of a specific type associated with a business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | businessId |  |
| undefined | path | documentType |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForBusinessByType )

<!-- DOCGEN:END getDocumentsForBusinessByDocumentType -->

<!-- DOCGEN:START getDocumentsForUserByDocumentType -->
### getDocumentsForUserByDocumentType

**Summary**: Get documents for a user by type

**Description**: Retrieves documents of a specific type associated with a user.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_type |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForUserByDocumentType )

<!-- DOCGEN:END getDocumentsForUserByDocumentType -->

<!-- DOCGEN:START getDocumentsForDriverByDocumentType -->
### getDocumentsForDriverByDocumentType

**Summary**: Get documents for a driver by type

**Description**: Retrieves documents of a specific type associated with a driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driverId |  |
| undefined | path | documentType |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForDriverByType )

<!-- DOCGEN:END getDocumentsForDriverByDocumentType -->

<!-- DOCGEN:START getDocumentsForDeliveryPersonByDocumentType -->
### getDocumentsForDeliveryPersonByDocumentType

**Summary**: Get documents for a delivery person by type

**Description**: Retrieves documents of a specific type associated with a delivery person.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | deliveryPersonId |  |
| undefined | path | documentType |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForDeliveryPersonByType )

<!-- DOCGEN:END getDocumentsForDeliveryPersonByDocumentType -->

<!-- DOCGEN:START getDocumentsForVehicleByDocumentType -->
### getDocumentsForVehicleByDocumentType

**Summary**: Get documents for a vehicle by type

**Description**: Retrieves documents of a specific type associated with a vehicle.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicleId |  |
| undefined | path | documentType |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForVehicleByType )

<!-- DOCGEN:END getDocumentsForVehicleByDocumentType -->

<!-- DOCGEN:START createUserDocument -->
### createUserDocument

**Summary**: Create a document for a user

**Description**: Creates a new document and links it to a specific user.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | user_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createUserDocument )

<!-- DOCGEN:END createUserDocument -->

<!-- DOCGEN:START createBusinessDocument -->
### createBusinessDocument

**Summary**: Create a document for a business

**Description**: Creates a new document and links it to a specific business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createBusinessDocument )

<!-- DOCGEN:END createBusinessDocument -->

<!-- DOCGEN:START createDriverDocument -->
### createDriverDocument

**Summary**: Create a document for a driver

**Description**: Creates a new document and links it to a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createDriverDocument )

<!-- DOCGEN:END createDriverDocument -->

<!-- DOCGEN:START createVehicleDocument -->
### createVehicleDocument

**Summary**: Create a document for a vehicle

**Description**: Creates a new document and links it to a specific vehicle.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicle_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createVehicleDocument )

<!-- DOCGEN:END createVehicleDocument -->

<!-- DOCGEN:START createDeliveryPersonDocument -->
### createDeliveryPersonDocument

**Summary**: Create a document for a delivery person

**Description**: Creates a new document and links it to a specific delivery person.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_person_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createDeliveryPersonDocument )

<!-- DOCGEN:END createDeliveryPersonDocument -->

<!-- DOCGEN:START updateDocumentExpirationDate -->
### updateDocumentExpirationDate

**Summary**: Update document's expiration date

**Description**: Updates the expiration date of a specific document.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDocumentExpirationDate )

<!-- DOCGEN:END updateDocumentExpirationDate -->

<!-- DOCGEN:START updateDocumentIssueDate -->
### updateDocumentIssueDate

**Summary**: Update document's issue date

**Description**: Updates the issue date of a specific document.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDocumentIssueDate )

<!-- DOCGEN:END updateDocumentIssueDate -->

<!-- DOCGEN:START updateDocumentFiles -->
### updateDocumentFiles

**Summary**: Update document's files

**Description**: Updates the files associated with a specific document.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDocumentFiles )

<!-- DOCGEN:END updateDocumentFiles -->

<!-- DOCGEN:START updateDocumentAdditionalInfo -->
### updateDocumentAdditionalInfo

**Summary**: Update document's additional info

**Description**: Updates the additional information of a specific document.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDocumentAdditionalInfo )

<!-- DOCGEN:END updateDocumentAdditionalInfo -->

<!-- DOCGEN:START listDocuments -->
### listDocuments

**Summary**: Get all documents

**Description**: Retrieves all documents in the system. Intended for admin usage.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocuments )

<!-- DOCGEN:END listDocuments -->

<!-- DOCGEN:START getDocumentById -->
### getDocumentById

**Summary**: Get a document by ID

**Description**: Retrieves a specific document by its ID. Useful for detailed document viewing.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentById )

<!-- DOCGEN:END getDocumentById -->

<!-- DOCGEN:START getDocumentsForUser -->
### getDocumentsForUser

**Summary**: Get documents for a user

**Description**: Retrieves all documents associated with a specific user.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | userId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForUser )

<!-- DOCGEN:END getDocumentsForUser -->

<!-- DOCGEN:START getDocumentsForBusiness -->
### getDocumentsForBusiness

**Summary**: Get documents for a business

**Description**: Retrieves all documents associated with a specific business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | businessId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForBusiness )

<!-- DOCGEN:END getDocumentsForBusiness -->

<!-- DOCGEN:START getDocumentsForDeliveryPerson -->
### getDocumentsForDeliveryPerson

**Summary**: Get documents for a delivery person

**Description**: Retrieves all documents associated with a specific delivery person.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | deliveryPersonId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForDeliveryPerson )

<!-- DOCGEN:END getDocumentsForDeliveryPerson -->

<!-- DOCGEN:START getDocumentsForDriver -->
### getDocumentsForDriver

**Summary**: Get documents for a driver

**Description**: Retrieves all documents associated with a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driverId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForDriver )

<!-- DOCGEN:END getDocumentsForDriver -->

<!-- DOCGEN:START getDocumentsForVehicle -->
### getDocumentsForVehicle

**Summary**: Get documents for a vehicle

**Description**: Retrieves all documents associated with a specific vehicle.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicleId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForVehicle )

<!-- DOCGEN:END getDocumentsForVehicle -->

<!-- DOCGEN:START getDocumentsByDocumentType -->
### getDocumentsByDocumentType

**Summary**: Get documents by type

**Description**: Retrieves documents of a specific type across all entities.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | documentType |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsByType )

<!-- DOCGEN:END getDocumentsByDocumentType -->

<!-- DOCGEN:START getDocumentsForBusinessByDocumentType -->
### getDocumentsForBusinessByDocumentType

**Summary**: Get documents for a business by type

**Description**: Retrieves documents of a specific type associated with a business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | businessId |  |
| undefined | path | documentType |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForBusinessByType )

<!-- DOCGEN:END getDocumentsForBusinessByDocumentType -->

<!-- DOCGEN:START getDocumentsForUserByDocumentType -->
### getDocumentsForUserByDocumentType

**Summary**: Get documents for a user by type

**Description**: Retrieves documents of a specific type associated with a user.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_type |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForUserByDocumentType )

<!-- DOCGEN:END getDocumentsForUserByDocumentType -->

<!-- DOCGEN:START getDocumentsForDriverByDocumentType -->
### getDocumentsForDriverByDocumentType

**Summary**: Get documents for a driver by type

**Description**: Retrieves documents of a specific type associated with a driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driverId |  |
| undefined | path | documentType |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForDriverByType )

<!-- DOCGEN:END getDocumentsForDriverByDocumentType -->

<!-- DOCGEN:START getDocumentsForDeliveryPersonByDocumentType -->
### getDocumentsForDeliveryPersonByDocumentType

**Summary**: Get documents for a delivery person by type

**Description**: Retrieves documents of a specific type associated with a delivery person.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | deliveryPersonId |  |
| undefined | path | documentType |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForDeliveryPersonByType )

<!-- DOCGEN:END getDocumentsForDeliveryPersonByDocumentType -->

<!-- DOCGEN:START getDocumentsForVehicleByDocumentType -->
### getDocumentsForVehicleByDocumentType

**Summary**: Get documents for a vehicle by type

**Description**: Retrieves documents of a specific type associated with a vehicle.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicleId |  |
| undefined | path | documentType |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForVehicleByType )

<!-- DOCGEN:END getDocumentsForVehicleByDocumentType -->

<!-- DOCGEN:START createUserDocument -->
### createUserDocument

**Summary**: Create a document for a user

**Description**: Creates a new document and links it to a specific user.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | user_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createUserDocument )

<!-- DOCGEN:END createUserDocument -->

<!-- DOCGEN:START createBusinessDocument -->
### createBusinessDocument

**Summary**: Create a document for a business

**Description**: Creates a new document and links it to a specific business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createBusinessDocument )

<!-- DOCGEN:END createBusinessDocument -->

<!-- DOCGEN:START createDriverDocument -->
### createDriverDocument

**Summary**: Create a document for a driver

**Description**: Creates a new document and links it to a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createDriverDocument )

<!-- DOCGEN:END createDriverDocument -->

<!-- DOCGEN:START createVehicleDocument -->
### createVehicleDocument

**Summary**: Create a document for a vehicle

**Description**: Creates a new document and links it to a specific vehicle.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicle_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createVehicleDocument )

<!-- DOCGEN:END createVehicleDocument -->

<!-- DOCGEN:START createDeliveryPersonDocument -->
### createDeliveryPersonDocument

**Summary**: Create a document for a delivery person

**Description**: Creates a new document and links it to a specific delivery person.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_person_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createDeliveryPersonDocument )

<!-- DOCGEN:END createDeliveryPersonDocument -->

<!-- DOCGEN:START updateDocumentExpirationDate -->
### updateDocumentExpirationDate

**Summary**: Update document's expiration date

**Description**: Updates the expiration date of a specific document.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDocumentExpirationDate )

<!-- DOCGEN:END updateDocumentExpirationDate -->

<!-- DOCGEN:START updateDocumentIssueDate -->
### updateDocumentIssueDate

**Summary**: Update document's issue date

**Description**: Updates the issue date of a specific document.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDocumentIssueDate )

<!-- DOCGEN:END updateDocumentIssueDate -->

<!-- DOCGEN:START updateDocumentFiles -->
### updateDocumentFiles

**Summary**: Update document's files

**Description**: Updates the files associated with a specific document.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDocumentFiles )

<!-- DOCGEN:END updateDocumentFiles -->

<!-- DOCGEN:START updateDocumentAdditionalInfo -->
### updateDocumentAdditionalInfo

**Summary**: Update document's additional info

**Description**: Updates the additional information of a specific document.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDocumentAdditionalInfo )

<!-- DOCGEN:END updateDocumentAdditionalInfo -->

<!-- DOCGEN:START listDocuments -->
### listDocuments

**Summary**: Get all documents

**Description**: Retrieves all documents in the system. Intended for admin usage.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocuments )

<!-- DOCGEN:END listDocuments -->

<!-- DOCGEN:START getDocumentById -->
### getDocumentById

**Summary**: Get a document by ID

**Description**: Retrieves a specific document by its ID. Useful for detailed document viewing.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentById )

<!-- DOCGEN:END getDocumentById -->

<!-- DOCGEN:START getDocumentsForUser -->
### getDocumentsForUser

**Summary**: Get documents for a user

**Description**: Retrieves all documents associated with a specific user.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | userId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForUser )

<!-- DOCGEN:END getDocumentsForUser -->

<!-- DOCGEN:START getDocumentsForBusiness -->
### getDocumentsForBusiness

**Summary**: Get documents for a business

**Description**: Retrieves all documents associated with a specific business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | businessId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForBusiness )

<!-- DOCGEN:END getDocumentsForBusiness -->

<!-- DOCGEN:START getDocumentsForDeliveryPerson -->
### getDocumentsForDeliveryPerson

**Summary**: Get documents for a delivery person

**Description**: Retrieves all documents associated with a specific delivery person.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | deliveryPersonId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForDeliveryPerson )

<!-- DOCGEN:END getDocumentsForDeliveryPerson -->

<!-- DOCGEN:START getDocumentsForDriver -->
### getDocumentsForDriver

**Summary**: Get documents for a driver

**Description**: Retrieves all documents associated with a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driverId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForDriver )

<!-- DOCGEN:END getDocumentsForDriver -->

<!-- DOCGEN:START getDocumentsForVehicle -->
### getDocumentsForVehicle

**Summary**: Get documents for a vehicle

**Description**: Retrieves all documents associated with a specific vehicle.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicleId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForVehicle )

<!-- DOCGEN:END getDocumentsForVehicle -->

<!-- DOCGEN:START getDocumentsByDocumentType -->
### getDocumentsByDocumentType

**Summary**: Get documents by type

**Description**: Retrieves documents of a specific type across all entities.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | documentType |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsByType )

<!-- DOCGEN:END getDocumentsByDocumentType -->

<!-- DOCGEN:START getDocumentsForBusinessByDocumentType -->
### getDocumentsForBusinessByDocumentType

**Summary**: Get documents for a business by type

**Description**: Retrieves documents of a specific type associated with a business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | businessId |  |
| undefined | path | documentType |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForBusinessByType )

<!-- DOCGEN:END getDocumentsForBusinessByDocumentType -->

<!-- DOCGEN:START getDocumentsForUserByDocumentType -->
### getDocumentsForUserByDocumentType

**Summary**: Get documents for a user by type

**Description**: Retrieves documents of a specific type associated with a user.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_type |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForUserByDocumentType )

<!-- DOCGEN:END getDocumentsForUserByDocumentType -->

<!-- DOCGEN:START getDocumentsForDriverByDocumentType -->
### getDocumentsForDriverByDocumentType

**Summary**: Get documents for a driver by type

**Description**: Retrieves documents of a specific type associated with a driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driverId |  |
| undefined | path | documentType |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForDriverByType )

<!-- DOCGEN:END getDocumentsForDriverByDocumentType -->

<!-- DOCGEN:START getDocumentsForDeliveryPersonByDocumentType -->
### getDocumentsForDeliveryPersonByDocumentType

**Summary**: Get documents for a delivery person by type

**Description**: Retrieves documents of a specific type associated with a delivery person.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | deliveryPersonId |  |
| undefined | path | documentType |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForDeliveryPersonByType )

<!-- DOCGEN:END getDocumentsForDeliveryPersonByDocumentType -->

<!-- DOCGEN:START getDocumentsForVehicleByDocumentType -->
### getDocumentsForVehicleByDocumentType

**Summary**: Get documents for a vehicle by type

**Description**: Retrieves documents of a specific type associated with a vehicle.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicleId |  |
| undefined | path | documentType |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForVehicleByType )

<!-- DOCGEN:END getDocumentsForVehicleByDocumentType -->

<!-- DOCGEN:START createUserDocument -->
### createUserDocument

**Summary**: Create a document for a user

**Description**: Creates a new document and links it to a specific user.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | user_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createUserDocument )

<!-- DOCGEN:END createUserDocument -->

<!-- DOCGEN:START createBusinessDocument -->
### createBusinessDocument

**Summary**: Create a document for a business

**Description**: Creates a new document and links it to a specific business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createBusinessDocument )

<!-- DOCGEN:END createBusinessDocument -->

<!-- DOCGEN:START createDriverDocument -->
### createDriverDocument

**Summary**: Create a document for a driver

**Description**: Creates a new document and links it to a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createDriverDocument )

<!-- DOCGEN:END createDriverDocument -->

<!-- DOCGEN:START createVehicleDocument -->
### createVehicleDocument

**Summary**: Create a document for a vehicle

**Description**: Creates a new document and links it to a specific vehicle.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicle_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createVehicleDocument )

<!-- DOCGEN:END createVehicleDocument -->

<!-- DOCGEN:START createDeliveryPersonDocument -->
### createDeliveryPersonDocument

**Summary**: Create a document for a delivery person

**Description**: Creates a new document and links it to a specific delivery person.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_person_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createDeliveryPersonDocument )

<!-- DOCGEN:END createDeliveryPersonDocument -->

<!-- DOCGEN:START updateDocumentExpirationDate -->
### updateDocumentExpirationDate

**Summary**: Update document's expiration date

**Description**: Updates the expiration date of a specific document.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDocumentExpirationDate )

<!-- DOCGEN:END updateDocumentExpirationDate -->

<!-- DOCGEN:START updateDocumentIssueDate -->
### updateDocumentIssueDate

**Summary**: Update document's issue date

**Description**: Updates the issue date of a specific document.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDocumentIssueDate )

<!-- DOCGEN:END updateDocumentIssueDate -->

<!-- DOCGEN:START updateDocumentFiles -->
### updateDocumentFiles

**Summary**: Update document's files

**Description**: Updates the files associated with a specific document.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDocumentFiles )

<!-- DOCGEN:END updateDocumentFiles -->

<!-- DOCGEN:START updateDocumentAdditionalInfo -->
### updateDocumentAdditionalInfo

**Summary**: Update document's additional info

**Description**: Updates the additional information of a specific document.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDocumentAdditionalInfo )

<!-- DOCGEN:END updateDocumentAdditionalInfo -->

<!-- DOCGEN:START listDocuments -->
### listDocuments

**Summary**: Get all documents

**Description**: Retrieves all documents in the system. Intended for admin usage.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocuments )

<!-- DOCGEN:END listDocuments -->

<!-- DOCGEN:START getDocumentById -->
### getDocumentById

**Summary**: Get a document by ID

**Description**: Retrieves a specific document by its ID. Useful for detailed document viewing.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentById )

<!-- DOCGEN:END getDocumentById -->

<!-- DOCGEN:START getDocumentsForUser -->
### getDocumentsForUser

**Summary**: Get documents for a user

**Description**: Retrieves all documents associated with a specific user.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | userId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForUser )

<!-- DOCGEN:END getDocumentsForUser -->

<!-- DOCGEN:START getDocumentsForBusiness -->
### getDocumentsForBusiness

**Summary**: Get documents for a business

**Description**: Retrieves all documents associated with a specific business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | businessId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForBusiness )

<!-- DOCGEN:END getDocumentsForBusiness -->

<!-- DOCGEN:START getDocumentsForDeliveryPerson -->
### getDocumentsForDeliveryPerson

**Summary**: Get documents for a delivery person

**Description**: Retrieves all documents associated with a specific delivery person.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | deliveryPersonId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForDeliveryPerson )

<!-- DOCGEN:END getDocumentsForDeliveryPerson -->

<!-- DOCGEN:START getDocumentsForDriver -->
### getDocumentsForDriver

**Summary**: Get documents for a driver

**Description**: Retrieves all documents associated with a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driverId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForDriver )

<!-- DOCGEN:END getDocumentsForDriver -->

<!-- DOCGEN:START getDocumentsForVehicle -->
### getDocumentsForVehicle

**Summary**: Get documents for a vehicle

**Description**: Retrieves all documents associated with a specific vehicle.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicleId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForVehicle )

<!-- DOCGEN:END getDocumentsForVehicle -->

<!-- DOCGEN:START getDocumentsByDocumentType -->
### getDocumentsByDocumentType

**Summary**: Get documents by type

**Description**: Retrieves documents of a specific type across all entities.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | documentType |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsByType )

<!-- DOCGEN:END getDocumentsByDocumentType -->

<!-- DOCGEN:START getDocumentsForBusinessByDocumentType -->
### getDocumentsForBusinessByDocumentType

**Summary**: Get documents for a business by type

**Description**: Retrieves documents of a specific type associated with a business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | businessId |  |
| undefined | path | documentType |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForBusinessByType )

<!-- DOCGEN:END getDocumentsForBusinessByDocumentType -->

<!-- DOCGEN:START getDocumentsForUserByDocumentType -->
### getDocumentsForUserByDocumentType

**Summary**: Get documents for a user by type

**Description**: Retrieves documents of a specific type associated with a user.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_type |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForUserByDocumentType )

<!-- DOCGEN:END getDocumentsForUserByDocumentType -->

<!-- DOCGEN:START getDocumentsForDriverByDocumentType -->
### getDocumentsForDriverByDocumentType

**Summary**: Get documents for a driver by type

**Description**: Retrieves documents of a specific type associated with a driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driverId |  |
| undefined | path | documentType |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForDriverByType )

<!-- DOCGEN:END getDocumentsForDriverByDocumentType -->

<!-- DOCGEN:START getDocumentsForDeliveryPersonByDocumentType -->
### getDocumentsForDeliveryPersonByDocumentType

**Summary**: Get documents for a delivery person by type

**Description**: Retrieves documents of a specific type associated with a delivery person.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | deliveryPersonId |  |
| undefined | path | documentType |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForDeliveryPersonByType )

<!-- DOCGEN:END getDocumentsForDeliveryPersonByDocumentType -->

<!-- DOCGEN:START getDocumentsForVehicleByDocumentType -->
### getDocumentsForVehicleByDocumentType

**Summary**: Get documents for a vehicle by type

**Description**: Retrieves documents of a specific type associated with a vehicle.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicleId |  |
| undefined | path | documentType |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForVehicleByType )

<!-- DOCGEN:END getDocumentsForVehicleByDocumentType -->

<!-- DOCGEN:START createUserDocument -->
### createUserDocument

**Summary**: Create a document for a user

**Description**: Creates a new document and links it to a specific user.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | user_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createUserDocument )

<!-- DOCGEN:END createUserDocument -->

<!-- DOCGEN:START createBusinessDocument -->
### createBusinessDocument

**Summary**: Create a document for a business

**Description**: Creates a new document and links it to a specific business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createBusinessDocument )

<!-- DOCGEN:END createBusinessDocument -->

<!-- DOCGEN:START createDriverDocument -->
### createDriverDocument

**Summary**: Create a document for a driver

**Description**: Creates a new document and links it to a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createDriverDocument )

<!-- DOCGEN:END createDriverDocument -->

<!-- DOCGEN:START createVehicleDocument -->
### createVehicleDocument

**Summary**: Create a document for a vehicle

**Description**: Creates a new document and links it to a specific vehicle.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicle_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createVehicleDocument )

<!-- DOCGEN:END createVehicleDocument -->

<!-- DOCGEN:START createDeliveryPersonDocument -->
### createDeliveryPersonDocument

**Summary**: Create a document for a delivery person

**Description**: Creates a new document and links it to a specific delivery person.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_person_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createDeliveryPersonDocument )

<!-- DOCGEN:END createDeliveryPersonDocument -->

<!-- DOCGEN:START updateDocumentExpirationDate -->
### updateDocumentExpirationDate

**Summary**: Update document's expiration date

**Description**: Updates the expiration date of a specific document.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDocumentExpirationDate )

<!-- DOCGEN:END updateDocumentExpirationDate -->

<!-- DOCGEN:START updateDocumentIssueDate -->
### updateDocumentIssueDate

**Summary**: Update document's issue date

**Description**: Updates the issue date of a specific document.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDocumentIssueDate )

<!-- DOCGEN:END updateDocumentIssueDate -->

<!-- DOCGEN:START updateDocumentFiles -->
### updateDocumentFiles

**Summary**: Update document's files

**Description**: Updates the files associated with a specific document.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDocumentFiles )

<!-- DOCGEN:END updateDocumentFiles -->

<!-- DOCGEN:START updateDocumentAdditionalInfo -->
### updateDocumentAdditionalInfo

**Summary**: Update document's additional info

**Description**: Updates the additional information of a specific document.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDocumentAdditionalInfo )

<!-- DOCGEN:END updateDocumentAdditionalInfo -->

<!-- DOCGEN:START listDocuments -->
### listDocuments

**Summary**: Get all documents

**Description**: Retrieves all documents in the system. Intended for admin usage.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocuments )

<!-- DOCGEN:END listDocuments -->

<!-- DOCGEN:START getDocumentById -->
### getDocumentById

**Summary**: Get a document by ID

**Description**: Retrieves a specific document by its ID. Useful for detailed document viewing.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentById )

<!-- DOCGEN:END getDocumentById -->

<!-- DOCGEN:START getDocumentsForUser -->
### getDocumentsForUser

**Summary**: Get documents for a user

**Description**: Retrieves all documents associated with a specific user.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | userId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForUser )

<!-- DOCGEN:END getDocumentsForUser -->

<!-- DOCGEN:START getDocumentsForBusiness -->
### getDocumentsForBusiness

**Summary**: Get documents for a business

**Description**: Retrieves all documents associated with a specific business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | businessId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForBusiness )

<!-- DOCGEN:END getDocumentsForBusiness -->

<!-- DOCGEN:START getDocumentsForDeliveryPerson -->
### getDocumentsForDeliveryPerson

**Summary**: Get documents for a delivery person

**Description**: Retrieves all documents associated with a specific delivery person.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | deliveryPersonId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForDeliveryPerson )

<!-- DOCGEN:END getDocumentsForDeliveryPerson -->

<!-- DOCGEN:START getDocumentsForDriver -->
### getDocumentsForDriver

**Summary**: Get documents for a driver

**Description**: Retrieves all documents associated with a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driverId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForDriver )

<!-- DOCGEN:END getDocumentsForDriver -->

<!-- DOCGEN:START getDocumentsForVehicle -->
### getDocumentsForVehicle

**Summary**: Get documents for a vehicle

**Description**: Retrieves all documents associated with a specific vehicle.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicleId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForVehicle )

<!-- DOCGEN:END getDocumentsForVehicle -->

<!-- DOCGEN:START getDocumentsByDocumentType -->
### getDocumentsByDocumentType

**Summary**: Get documents by type

**Description**: Retrieves documents of a specific type across all entities.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | documentType |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsByType )

<!-- DOCGEN:END getDocumentsByDocumentType -->

<!-- DOCGEN:START getDocumentsForBusinessByDocumentType -->
### getDocumentsForBusinessByDocumentType

**Summary**: Get documents for a business by type

**Description**: Retrieves documents of a specific type associated with a business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | businessId |  |
| undefined | path | documentType |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForBusinessByType )

<!-- DOCGEN:END getDocumentsForBusinessByDocumentType -->

<!-- DOCGEN:START getDocumentsForUserByDocumentType -->
### getDocumentsForUserByDocumentType

**Summary**: Get documents for a user by type

**Description**: Retrieves documents of a specific type associated with a user.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_type |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForUserByDocumentType )

<!-- DOCGEN:END getDocumentsForUserByDocumentType -->

<!-- DOCGEN:START getDocumentsForDriverByDocumentType -->
### getDocumentsForDriverByDocumentType

**Summary**: Get documents for a driver by type

**Description**: Retrieves documents of a specific type associated with a driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driverId |  |
| undefined | path | documentType |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForDriverByType )

<!-- DOCGEN:END getDocumentsForDriverByDocumentType -->

<!-- DOCGEN:START getDocumentsForDeliveryPersonByDocumentType -->
### getDocumentsForDeliveryPersonByDocumentType

**Summary**: Get documents for a delivery person by type

**Description**: Retrieves documents of a specific type associated with a delivery person.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | deliveryPersonId |  |
| undefined | path | documentType |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForDeliveryPersonByType )

<!-- DOCGEN:END getDocumentsForDeliveryPersonByDocumentType -->

<!-- DOCGEN:START getDocumentsForVehicleByDocumentType -->
### getDocumentsForVehicleByDocumentType

**Summary**: Get documents for a vehicle by type

**Description**: Retrieves documents of a specific type associated with a vehicle.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicleId |  |
| undefined | path | documentType |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForVehicleByType )

<!-- DOCGEN:END getDocumentsForVehicleByDocumentType -->

<!-- DOCGEN:START createUserDocument -->
### createUserDocument

**Summary**: Create a document for a user

**Description**: Creates a new document and links it to a specific user.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | user_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createUserDocument )

<!-- DOCGEN:END createUserDocument -->

<!-- DOCGEN:START createBusinessDocument -->
### createBusinessDocument

**Summary**: Create a document for a business

**Description**: Creates a new document and links it to a specific business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createBusinessDocument )

<!-- DOCGEN:END createBusinessDocument -->

<!-- DOCGEN:START createDriverDocument -->
### createDriverDocument

**Summary**: Create a document for a driver

**Description**: Creates a new document and links it to a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createDriverDocument )

<!-- DOCGEN:END createDriverDocument -->

<!-- DOCGEN:START createVehicleDocument -->
### createVehicleDocument

**Summary**: Create a document for a vehicle

**Description**: Creates a new document and links it to a specific vehicle.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicle_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createVehicleDocument )

<!-- DOCGEN:END createVehicleDocument -->

<!-- DOCGEN:START createDeliveryPersonDocument -->
### createDeliveryPersonDocument

**Summary**: Create a document for a delivery person

**Description**: Creates a new document and links it to a specific delivery person.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_person_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createDeliveryPersonDocument )

<!-- DOCGEN:END createDeliveryPersonDocument -->

<!-- DOCGEN:START updateDocumentExpirationDate -->
### updateDocumentExpirationDate

**Summary**: Update document's expiration date

**Description**: Updates the expiration date of a specific document.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDocumentExpirationDate )

<!-- DOCGEN:END updateDocumentExpirationDate -->

<!-- DOCGEN:START updateDocumentIssueDate -->
### updateDocumentIssueDate

**Summary**: Update document's issue date

**Description**: Updates the issue date of a specific document.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDocumentIssueDate )

<!-- DOCGEN:END updateDocumentIssueDate -->

<!-- DOCGEN:START updateDocumentFiles -->
### updateDocumentFiles

**Summary**: Update document's files

**Description**: Updates the files associated with a specific document.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDocumentFiles )

<!-- DOCGEN:END updateDocumentFiles -->

<!-- DOCGEN:START updateDocumentAdditionalInfo -->
### updateDocumentAdditionalInfo

**Summary**: Update document's additional info

**Description**: Updates the additional information of a specific document.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDocumentAdditionalInfo )

<!-- DOCGEN:END updateDocumentAdditionalInfo -->

<!-- DOCGEN:START listDocuments -->
### listDocuments

**Summary**: Get all documents

**Description**: Retrieves all documents in the system. Intended for admin usage.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocuments )

<!-- DOCGEN:END listDocuments -->

<!-- DOCGEN:START getDocumentById -->
### getDocumentById

**Summary**: Get a document by ID

**Description**: Retrieves a specific document by its ID. Useful for detailed document viewing.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentById )

<!-- DOCGEN:END getDocumentById -->

<!-- DOCGEN:START getDocumentsForUser -->
### getDocumentsForUser

**Summary**: Get documents for a user

**Description**: Retrieves all documents associated with a specific user.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | userId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForUser )

<!-- DOCGEN:END getDocumentsForUser -->

<!-- DOCGEN:START getDocumentsForBusiness -->
### getDocumentsForBusiness

**Summary**: Get documents for a business

**Description**: Retrieves all documents associated with a specific business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | businessId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForBusiness )

<!-- DOCGEN:END getDocumentsForBusiness -->

<!-- DOCGEN:START getDocumentsForDeliveryPerson -->
### getDocumentsForDeliveryPerson

**Summary**: Get documents for a delivery person

**Description**: Retrieves all documents associated with a specific delivery person.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | deliveryPersonId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForDeliveryPerson )

<!-- DOCGEN:END getDocumentsForDeliveryPerson -->

<!-- DOCGEN:START getDocumentsForDriver -->
### getDocumentsForDriver

**Summary**: Get documents for a driver

**Description**: Retrieves all documents associated with a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driverId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForDriver )

<!-- DOCGEN:END getDocumentsForDriver -->

<!-- DOCGEN:START getDocumentsForVehicle -->
### getDocumentsForVehicle

**Summary**: Get documents for a vehicle

**Description**: Retrieves all documents associated with a specific vehicle.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicleId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForVehicle )

<!-- DOCGEN:END getDocumentsForVehicle -->

<!-- DOCGEN:START getDocumentsByDocumentType -->
### getDocumentsByDocumentType

**Summary**: Get documents by type

**Description**: Retrieves documents of a specific type across all entities.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | documentType |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsByType )

<!-- DOCGEN:END getDocumentsByDocumentType -->

<!-- DOCGEN:START getDocumentsForBusinessByDocumentType -->
### getDocumentsForBusinessByDocumentType

**Summary**: Get documents for a business by type

**Description**: Retrieves documents of a specific type associated with a business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | businessId |  |
| undefined | path | documentType |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForBusinessByType )

<!-- DOCGEN:END getDocumentsForBusinessByDocumentType -->

<!-- DOCGEN:START getDocumentsForUserByDocumentType -->
### getDocumentsForUserByDocumentType

**Summary**: Get documents for a user by type

**Description**: Retrieves documents of a specific type associated with a user.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_type |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForUserByDocumentType )

<!-- DOCGEN:END getDocumentsForUserByDocumentType -->

<!-- DOCGEN:START getDocumentsForDriverByDocumentType -->
### getDocumentsForDriverByDocumentType

**Summary**: Get documents for a driver by type

**Description**: Retrieves documents of a specific type associated with a driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driverId |  |
| undefined | path | documentType |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForDriverByType )

<!-- DOCGEN:END getDocumentsForDriverByDocumentType -->

<!-- DOCGEN:START getDocumentsForDeliveryPersonByDocumentType -->
### getDocumentsForDeliveryPersonByDocumentType

**Summary**: Get documents for a delivery person by type

**Description**: Retrieves documents of a specific type associated with a delivery person.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | deliveryPersonId |  |
| undefined | path | documentType |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForDeliveryPersonByType )

<!-- DOCGEN:END getDocumentsForDeliveryPersonByDocumentType -->

<!-- DOCGEN:START getDocumentsForVehicleByDocumentType -->
### getDocumentsForVehicleByDocumentType

**Summary**: Get documents for a vehicle by type

**Description**: Retrieves documents of a specific type associated with a vehicle.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicleId |  |
| undefined | path | documentType |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForVehicleByType )

<!-- DOCGEN:END getDocumentsForVehicleByDocumentType -->

<!-- DOCGEN:START createUserDocument -->
### createUserDocument

**Summary**: Create a document for a user

**Description**: Creates a new document and links it to a specific user.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | user_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createUserDocument )

<!-- DOCGEN:END createUserDocument -->

<!-- DOCGEN:START createBusinessDocument -->
### createBusinessDocument

**Summary**: Create a document for a business

**Description**: Creates a new document and links it to a specific business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createBusinessDocument )

<!-- DOCGEN:END createBusinessDocument -->

<!-- DOCGEN:START createDriverDocument -->
### createDriverDocument

**Summary**: Create a document for a driver

**Description**: Creates a new document and links it to a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createDriverDocument )

<!-- DOCGEN:END createDriverDocument -->

<!-- DOCGEN:START createVehicleDocument -->
### createVehicleDocument

**Summary**: Create a document for a vehicle

**Description**: Creates a new document and links it to a specific vehicle.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicle_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createVehicleDocument )

<!-- DOCGEN:END createVehicleDocument -->

<!-- DOCGEN:START createDeliveryPersonDocument -->
### createDeliveryPersonDocument

**Summary**: Create a document for a delivery person

**Description**: Creates a new document and links it to a specific delivery person.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_person_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createDeliveryPersonDocument )

<!-- DOCGEN:END createDeliveryPersonDocument -->

<!-- DOCGEN:START updateDocumentExpirationDate -->
### updateDocumentExpirationDate

**Summary**: Update document's expiration date

**Description**: Updates the expiration date of a specific document.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDocumentExpirationDate )

<!-- DOCGEN:END updateDocumentExpirationDate -->

<!-- DOCGEN:START updateDocumentIssueDate -->
### updateDocumentIssueDate

**Summary**: Update document's issue date

**Description**: Updates the issue date of a specific document.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDocumentIssueDate )

<!-- DOCGEN:END updateDocumentIssueDate -->

<!-- DOCGEN:START updateDocumentFiles -->
### updateDocumentFiles

**Summary**: Update document's files

**Description**: Updates the files associated with a specific document.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDocumentFiles )

<!-- DOCGEN:END updateDocumentFiles -->

<!-- DOCGEN:START updateDocumentAdditionalInfo -->
### updateDocumentAdditionalInfo

**Summary**: Update document's additional info

**Description**: Updates the additional information of a specific document.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDocumentAdditionalInfo )

<!-- DOCGEN:END updateDocumentAdditionalInfo -->

<!-- DOCGEN:START listDocuments -->
### listDocuments

**Summary**: Get all documents

**Description**: Retrieves all documents in the system. Intended for admin usage.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocuments )

<!-- DOCGEN:END listDocuments -->

<!-- DOCGEN:START getDocumentById -->
### getDocumentById

**Summary**: Get a document by ID

**Description**: Retrieves a specific document by its ID. Useful for detailed document viewing.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentById )

<!-- DOCGEN:END getDocumentById -->

<!-- DOCGEN:START getDocumentsForUser -->
### getDocumentsForUser

**Summary**: Get documents for a user

**Description**: Retrieves all documents associated with a specific user.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | userId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForUser )

<!-- DOCGEN:END getDocumentsForUser -->

<!-- DOCGEN:START getDocumentsForBusiness -->
### getDocumentsForBusiness

**Summary**: Get documents for a business

**Description**: Retrieves all documents associated with a specific business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | businessId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForBusiness )

<!-- DOCGEN:END getDocumentsForBusiness -->

<!-- DOCGEN:START getDocumentsForDeliveryPerson -->
### getDocumentsForDeliveryPerson

**Summary**: Get documents for a delivery person

**Description**: Retrieves all documents associated with a specific delivery person.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | deliveryPersonId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForDeliveryPerson )

<!-- DOCGEN:END getDocumentsForDeliveryPerson -->

<!-- DOCGEN:START getDocumentsForDriver -->
### getDocumentsForDriver

**Summary**: Get documents for a driver

**Description**: Retrieves all documents associated with a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driverId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForDriver )

<!-- DOCGEN:END getDocumentsForDriver -->

<!-- DOCGEN:START getDocumentsForVehicle -->
### getDocumentsForVehicle

**Summary**: Get documents for a vehicle

**Description**: Retrieves all documents associated with a specific vehicle.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicleId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForVehicle )

<!-- DOCGEN:END getDocumentsForVehicle -->

<!-- DOCGEN:START getDocumentsByDocumentType -->
### getDocumentsByDocumentType

**Summary**: Get documents by type

**Description**: Retrieves documents of a specific type across all entities.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | documentType |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsByType )

<!-- DOCGEN:END getDocumentsByDocumentType -->

<!-- DOCGEN:START getDocumentsForBusinessByDocumentType -->
### getDocumentsForBusinessByDocumentType

**Summary**: Get documents for a business by type

**Description**: Retrieves documents of a specific type associated with a business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | businessId |  |
| undefined | path | documentType |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForBusinessByType )

<!-- DOCGEN:END getDocumentsForBusinessByDocumentType -->

<!-- DOCGEN:START getDocumentsForUserByDocumentType -->
### getDocumentsForUserByDocumentType

**Summary**: Get documents for a user by type

**Description**: Retrieves documents of a specific type associated with a user.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_type |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForUserByDocumentType )

<!-- DOCGEN:END getDocumentsForUserByDocumentType -->

<!-- DOCGEN:START getDocumentsForDriverByDocumentType -->
### getDocumentsForDriverByDocumentType

**Summary**: Get documents for a driver by type

**Description**: Retrieves documents of a specific type associated with a driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driverId |  |
| undefined | path | documentType |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForDriverByType )

<!-- DOCGEN:END getDocumentsForDriverByDocumentType -->

<!-- DOCGEN:START getDocumentsForDeliveryPersonByDocumentType -->
### getDocumentsForDeliveryPersonByDocumentType

**Summary**: Get documents for a delivery person by type

**Description**: Retrieves documents of a specific type associated with a delivery person.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | deliveryPersonId |  |
| undefined | path | documentType |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForDeliveryPersonByType )

<!-- DOCGEN:END getDocumentsForDeliveryPersonByDocumentType -->

<!-- DOCGEN:START getDocumentsForVehicleByDocumentType -->
### getDocumentsForVehicleByDocumentType

**Summary**: Get documents for a vehicle by type

**Description**: Retrieves documents of a specific type associated with a vehicle.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicleId |  |
| undefined | path | documentType |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForVehicleByType )

<!-- DOCGEN:END getDocumentsForVehicleByDocumentType -->

<!-- DOCGEN:START createUserDocument -->
### createUserDocument

**Summary**: Create a document for a user

**Description**: Creates a new document and links it to a specific user.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | user_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createUserDocument )

<!-- DOCGEN:END createUserDocument -->

<!-- DOCGEN:START createBusinessDocument -->
### createBusinessDocument

**Summary**: Create a document for a business

**Description**: Creates a new document and links it to a specific business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createBusinessDocument )

<!-- DOCGEN:END createBusinessDocument -->

<!-- DOCGEN:START createDriverDocument -->
### createDriverDocument

**Summary**: Create a document for a driver

**Description**: Creates a new document and links it to a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createDriverDocument )

<!-- DOCGEN:END createDriverDocument -->

<!-- DOCGEN:START createVehicleDocument -->
### createVehicleDocument

**Summary**: Create a document for a vehicle

**Description**: Creates a new document and links it to a specific vehicle.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicle_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createVehicleDocument )

<!-- DOCGEN:END createVehicleDocument -->

<!-- DOCGEN:START createDeliveryPersonDocument -->
### createDeliveryPersonDocument

**Summary**: Create a document for a delivery person

**Description**: Creates a new document and links it to a specific delivery person.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_person_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createDeliveryPersonDocument )

<!-- DOCGEN:END createDeliveryPersonDocument -->

<!-- DOCGEN:START updateDocumentExpirationDate -->
### updateDocumentExpirationDate

**Summary**: Update document's expiration date

**Description**: Updates the expiration date of a specific document.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDocumentExpirationDate )

<!-- DOCGEN:END updateDocumentExpirationDate -->

<!-- DOCGEN:START updateDocumentIssueDate -->
### updateDocumentIssueDate

**Summary**: Update document's issue date

**Description**: Updates the issue date of a specific document.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDocumentIssueDate )

<!-- DOCGEN:END updateDocumentIssueDate -->

<!-- DOCGEN:START updateDocumentFiles -->
### updateDocumentFiles

**Summary**: Update document's files

**Description**: Updates the files associated with a specific document.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDocumentFiles )

<!-- DOCGEN:END updateDocumentFiles -->

<!-- DOCGEN:START updateDocumentAdditionalInfo -->
### updateDocumentAdditionalInfo

**Summary**: Update document's additional info

**Description**: Updates the additional information of a specific document.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDocumentAdditionalInfo )

<!-- DOCGEN:END updateDocumentAdditionalInfo -->

<!-- DOCGEN:START listDocuments -->
### listDocuments

**Summary**: Get all documents

**Description**: Retrieves all documents in the system. Intended for admin usage.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocuments )

<!-- DOCGEN:END listDocuments -->

<!-- DOCGEN:START getDocumentById -->
### getDocumentById

**Summary**: Get a document by ID

**Description**: Retrieves a specific document by its ID. Useful for detailed document viewing.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentById )

<!-- DOCGEN:END getDocumentById -->

<!-- DOCGEN:START getDocumentsForUser -->
### getDocumentsForUser

**Summary**: Get documents for a user

**Description**: Retrieves all documents associated with a specific user.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | userId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForUser )

<!-- DOCGEN:END getDocumentsForUser -->

<!-- DOCGEN:START getDocumentsForBusiness -->
### getDocumentsForBusiness

**Summary**: Get documents for a business

**Description**: Retrieves all documents associated with a specific business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | businessId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForBusiness )

<!-- DOCGEN:END getDocumentsForBusiness -->

<!-- DOCGEN:START getDocumentsForDeliveryPerson -->
### getDocumentsForDeliveryPerson

**Summary**: Get documents for a delivery person

**Description**: Retrieves all documents associated with a specific delivery person.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | deliveryPersonId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForDeliveryPerson )

<!-- DOCGEN:END getDocumentsForDeliveryPerson -->

<!-- DOCGEN:START getDocumentsForDriver -->
### getDocumentsForDriver

**Summary**: Get documents for a driver

**Description**: Retrieves all documents associated with a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driverId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForDriver )

<!-- DOCGEN:END getDocumentsForDriver -->

<!-- DOCGEN:START getDocumentsForVehicle -->
### getDocumentsForVehicle

**Summary**: Get documents for a vehicle

**Description**: Retrieves all documents associated with a specific vehicle.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicleId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForVehicle )

<!-- DOCGEN:END getDocumentsForVehicle -->

<!-- DOCGEN:START getDocumentsByDocumentType -->
### getDocumentsByDocumentType

**Summary**: Get documents by type

**Description**: Retrieves documents of a specific type across all entities.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | documentType |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsByType )

<!-- DOCGEN:END getDocumentsByDocumentType -->

<!-- DOCGEN:START getDocumentsForBusinessByDocumentType -->
### getDocumentsForBusinessByDocumentType

**Summary**: Get documents for a business by type

**Description**: Retrieves documents of a specific type associated with a business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | businessId |  |
| undefined | path | documentType |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForBusinessByType )

<!-- DOCGEN:END getDocumentsForBusinessByDocumentType -->

<!-- DOCGEN:START getDocumentsForUserByDocumentType -->
### getDocumentsForUserByDocumentType

**Summary**: Get documents for a user by type

**Description**: Retrieves documents of a specific type associated with a user.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_type |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForUserByDocumentType )

<!-- DOCGEN:END getDocumentsForUserByDocumentType -->

<!-- DOCGEN:START getDocumentsForDriverByDocumentType -->
### getDocumentsForDriverByDocumentType

**Summary**: Get documents for a driver by type

**Description**: Retrieves documents of a specific type associated with a driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driverId |  |
| undefined | path | documentType |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForDriverByType )

<!-- DOCGEN:END getDocumentsForDriverByDocumentType -->

<!-- DOCGEN:START getDocumentsForDeliveryPersonByDocumentType -->
### getDocumentsForDeliveryPersonByDocumentType

**Summary**: Get documents for a delivery person by type

**Description**: Retrieves documents of a specific type associated with a delivery person.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | deliveryPersonId |  |
| undefined | path | documentType |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForDeliveryPersonByType )

<!-- DOCGEN:END getDocumentsForDeliveryPersonByDocumentType -->

<!-- DOCGEN:START getDocumentsForVehicleByDocumentType -->
### getDocumentsForVehicleByDocumentType

**Summary**: Get documents for a vehicle by type

**Description**: Retrieves documents of a specific type associated with a vehicle.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicleId |  |
| undefined | path | documentType |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForVehicleByType )

<!-- DOCGEN:END getDocumentsForVehicleByDocumentType -->

<!-- DOCGEN:START createUserDocument -->
### createUserDocument

**Summary**: Create a document for a user

**Description**: Creates a new document and links it to a specific user.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | user_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createUserDocument )

<!-- DOCGEN:END createUserDocument -->

<!-- DOCGEN:START createBusinessDocument -->
### createBusinessDocument

**Summary**: Create a document for a business

**Description**: Creates a new document and links it to a specific business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createBusinessDocument )

<!-- DOCGEN:END createBusinessDocument -->

<!-- DOCGEN:START createDriverDocument -->
### createDriverDocument

**Summary**: Create a document for a driver

**Description**: Creates a new document and links it to a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createDriverDocument )

<!-- DOCGEN:END createDriverDocument -->

<!-- DOCGEN:START createVehicleDocument -->
### createVehicleDocument

**Summary**: Create a document for a vehicle

**Description**: Creates a new document and links it to a specific vehicle.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicle_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createVehicleDocument )

<!-- DOCGEN:END createVehicleDocument -->

<!-- DOCGEN:START createDeliveryPersonDocument -->
### createDeliveryPersonDocument

**Summary**: Create a document for a delivery person

**Description**: Creates a new document and links it to a specific delivery person.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_person_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createDeliveryPersonDocument )

<!-- DOCGEN:END createDeliveryPersonDocument -->

<!-- DOCGEN:START updateDocumentExpirationDate -->
### updateDocumentExpirationDate

**Summary**: Update document's expiration date

**Description**: Updates the expiration date of a specific document.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDocumentExpirationDate )

<!-- DOCGEN:END updateDocumentExpirationDate -->

<!-- DOCGEN:START updateDocumentIssueDate -->
### updateDocumentIssueDate

**Summary**: Update document's issue date

**Description**: Updates the issue date of a specific document.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDocumentIssueDate )

<!-- DOCGEN:END updateDocumentIssueDate -->

<!-- DOCGEN:START updateDocumentFiles -->
### updateDocumentFiles

**Summary**: Update document's files

**Description**: Updates the files associated with a specific document.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDocumentFiles )

<!-- DOCGEN:END updateDocumentFiles -->

<!-- DOCGEN:START updateDocumentAdditionalInfo -->
### updateDocumentAdditionalInfo

**Summary**: Update document's additional info

**Description**: Updates the additional information of a specific document.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDocumentAdditionalInfo )

<!-- DOCGEN:END updateDocumentAdditionalInfo -->

<!-- DOCGEN:START listDocuments -->
### listDocuments

**Summary**: Get all documents

**Description**: Retrieves all documents in the system. Intended for admin usage.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocuments )

<!-- DOCGEN:END listDocuments -->

<!-- DOCGEN:START getDocumentById -->
### getDocumentById

**Summary**: Get a document by ID

**Description**: Retrieves a specific document by its ID. Useful for detailed document viewing.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentById )

<!-- DOCGEN:END getDocumentById -->

<!-- DOCGEN:START getDocumentsForUser -->
### getDocumentsForUser

**Summary**: Get documents for a user

**Description**: Retrieves all documents associated with a specific user.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | userId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForUser )

<!-- DOCGEN:END getDocumentsForUser -->

<!-- DOCGEN:START getDocumentsForBusiness -->
### getDocumentsForBusiness

**Summary**: Get documents for a business

**Description**: Retrieves all documents associated with a specific business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | businessId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForBusiness )

<!-- DOCGEN:END getDocumentsForBusiness -->

<!-- DOCGEN:START getDocumentsForDeliveryPerson -->
### getDocumentsForDeliveryPerson

**Summary**: Get documents for a delivery person

**Description**: Retrieves all documents associated with a specific delivery person.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | deliveryPersonId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForDeliveryPerson )

<!-- DOCGEN:END getDocumentsForDeliveryPerson -->

<!-- DOCGEN:START getDocumentsForDriver -->
### getDocumentsForDriver

**Summary**: Get documents for a driver

**Description**: Retrieves all documents associated with a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driverId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForDriver )

<!-- DOCGEN:END getDocumentsForDriver -->

<!-- DOCGEN:START getDocumentsForVehicle -->
### getDocumentsForVehicle

**Summary**: Get documents for a vehicle

**Description**: Retrieves all documents associated with a specific vehicle.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicleId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForVehicle )

<!-- DOCGEN:END getDocumentsForVehicle -->

<!-- DOCGEN:START getDocumentsByDocumentType -->
### getDocumentsByDocumentType

**Summary**: Get documents by type

**Description**: Retrieves documents of a specific type across all entities.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | documentType |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsByType )

<!-- DOCGEN:END getDocumentsByDocumentType -->

<!-- DOCGEN:START getDocumentsForBusinessByDocumentType -->
### getDocumentsForBusinessByDocumentType

**Summary**: Get documents for a business by type

**Description**: Retrieves documents of a specific type associated with a business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | businessId |  |
| undefined | path | documentType |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForBusinessByType )

<!-- DOCGEN:END getDocumentsForBusinessByDocumentType -->

<!-- DOCGEN:START getDocumentsForUserByDocumentType -->
### getDocumentsForUserByDocumentType

**Summary**: Get documents for a user by type

**Description**: Retrieves documents of a specific type associated with a user.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_type |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForUserByDocumentType )

<!-- DOCGEN:END getDocumentsForUserByDocumentType -->

<!-- DOCGEN:START getDocumentsForDriverByDocumentType -->
### getDocumentsForDriverByDocumentType

**Summary**: Get documents for a driver by type

**Description**: Retrieves documents of a specific type associated with a driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driverId |  |
| undefined | path | documentType |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForDriverByType )

<!-- DOCGEN:END getDocumentsForDriverByDocumentType -->

<!-- DOCGEN:START getDocumentsForDeliveryPersonByDocumentType -->
### getDocumentsForDeliveryPersonByDocumentType

**Summary**: Get documents for a delivery person by type

**Description**: Retrieves documents of a specific type associated with a delivery person.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | deliveryPersonId |  |
| undefined | path | documentType |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForDeliveryPersonByType )

<!-- DOCGEN:END getDocumentsForDeliveryPersonByDocumentType -->

<!-- DOCGEN:START getDocumentsForVehicleByDocumentType -->
### getDocumentsForVehicleByDocumentType

**Summary**: Get documents for a vehicle by type

**Description**: Retrieves documents of a specific type associated with a vehicle.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicleId |  |
| undefined | path | documentType |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForVehicleByType )

<!-- DOCGEN:END getDocumentsForVehicleByDocumentType -->

<!-- DOCGEN:START createUserDocument -->
### createUserDocument

**Summary**: Create a document for a user

**Description**: Creates a new document and links it to a specific user.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | user_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createUserDocument )

<!-- DOCGEN:END createUserDocument -->

<!-- DOCGEN:START createBusinessDocument -->
### createBusinessDocument

**Summary**: Create a document for a business

**Description**: Creates a new document and links it to a specific business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createBusinessDocument )

<!-- DOCGEN:END createBusinessDocument -->

<!-- DOCGEN:START createDriverDocument -->
### createDriverDocument

**Summary**: Create a document for a driver

**Description**: Creates a new document and links it to a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createDriverDocument )

<!-- DOCGEN:END createDriverDocument -->

<!-- DOCGEN:START createVehicleDocument -->
### createVehicleDocument

**Summary**: Create a document for a vehicle

**Description**: Creates a new document and links it to a specific vehicle.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicle_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createVehicleDocument )

<!-- DOCGEN:END createVehicleDocument -->

<!-- DOCGEN:START createDeliveryPersonDocument -->
### createDeliveryPersonDocument

**Summary**: Create a document for a delivery person

**Description**: Creates a new document and links it to a specific delivery person.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_person_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createDeliveryPersonDocument )

<!-- DOCGEN:END createDeliveryPersonDocument -->

<!-- DOCGEN:START updateDocumentExpirationDate -->
### updateDocumentExpirationDate

**Summary**: Update document's expiration date

**Description**: Updates the expiration date of a specific document.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDocumentExpirationDate )

<!-- DOCGEN:END updateDocumentExpirationDate -->

<!-- DOCGEN:START updateDocumentIssueDate -->
### updateDocumentIssueDate

**Summary**: Update document's issue date

**Description**: Updates the issue date of a specific document.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDocumentIssueDate )

<!-- DOCGEN:END updateDocumentIssueDate -->

<!-- DOCGEN:START updateDocumentFiles -->
### updateDocumentFiles

**Summary**: Update document's files

**Description**: Updates the files associated with a specific document.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDocumentFiles )

<!-- DOCGEN:END updateDocumentFiles -->

<!-- DOCGEN:START updateDocumentAdditionalInfo -->
### updateDocumentAdditionalInfo

**Summary**: Update document's additional info

**Description**: Updates the additional information of a specific document.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDocumentAdditionalInfo )

<!-- DOCGEN:END updateDocumentAdditionalInfo -->

<!-- DOCGEN:START listDocuments -->
### listDocuments

**Summary**: Get all documents

**Description**: Retrieves all documents in the system. Intended for admin usage.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocuments )

<!-- DOCGEN:END listDocuments -->

<!-- DOCGEN:START getDocumentById -->
### getDocumentById

**Summary**: Get a document by ID

**Description**: Retrieves a specific document by its ID. Useful for detailed document viewing.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentById )

<!-- DOCGEN:END getDocumentById -->

<!-- DOCGEN:START getDocumentsForUser -->
### getDocumentsForUser

**Summary**: Get documents for a user

**Description**: Retrieves all documents associated with a specific user.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | userId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForUser )

<!-- DOCGEN:END getDocumentsForUser -->

<!-- DOCGEN:START getDocumentsForBusiness -->
### getDocumentsForBusiness

**Summary**: Get documents for a business

**Description**: Retrieves all documents associated with a specific business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | businessId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForBusiness )

<!-- DOCGEN:END getDocumentsForBusiness -->

<!-- DOCGEN:START getDocumentsForDeliveryPerson -->
### getDocumentsForDeliveryPerson

**Summary**: Get documents for a delivery person

**Description**: Retrieves all documents associated with a specific delivery person.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | deliveryPersonId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForDeliveryPerson )

<!-- DOCGEN:END getDocumentsForDeliveryPerson -->

<!-- DOCGEN:START getDocumentsForDriver -->
### getDocumentsForDriver

**Summary**: Get documents for a driver

**Description**: Retrieves all documents associated with a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driverId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForDriver )

<!-- DOCGEN:END getDocumentsForDriver -->

<!-- DOCGEN:START getDocumentsForVehicle -->
### getDocumentsForVehicle

**Summary**: Get documents for a vehicle

**Description**: Retrieves all documents associated with a specific vehicle.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicleId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForVehicle )

<!-- DOCGEN:END getDocumentsForVehicle -->

<!-- DOCGEN:START getDocumentsByDocumentType -->
### getDocumentsByDocumentType

**Summary**: Get documents by type

**Description**: Retrieves documents of a specific type across all entities.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | documentType |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsByType )

<!-- DOCGEN:END getDocumentsByDocumentType -->

<!-- DOCGEN:START getDocumentsForBusinessByDocumentType -->
### getDocumentsForBusinessByDocumentType

**Summary**: Get documents for a business by type

**Description**: Retrieves documents of a specific type associated with a business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | businessId |  |
| undefined | path | documentType |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForBusinessByType )

<!-- DOCGEN:END getDocumentsForBusinessByDocumentType -->

<!-- DOCGEN:START getDocumentsForUserByDocumentType -->
### getDocumentsForUserByDocumentType

**Summary**: Get documents for a user by type

**Description**: Retrieves documents of a specific type associated with a user.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_type |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForUserByDocumentType )

<!-- DOCGEN:END getDocumentsForUserByDocumentType -->

<!-- DOCGEN:START getDocumentsForDriverByDocumentType -->
### getDocumentsForDriverByDocumentType

**Summary**: Get documents for a driver by type

**Description**: Retrieves documents of a specific type associated with a driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driverId |  |
| undefined | path | documentType |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForDriverByType )

<!-- DOCGEN:END getDocumentsForDriverByDocumentType -->

<!-- DOCGEN:START getDocumentsForDeliveryPersonByDocumentType -->
### getDocumentsForDeliveryPersonByDocumentType

**Summary**: Get documents for a delivery person by type

**Description**: Retrieves documents of a specific type associated with a delivery person.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | deliveryPersonId |  |
| undefined | path | documentType |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForDeliveryPersonByType )

<!-- DOCGEN:END getDocumentsForDeliveryPersonByDocumentType -->

<!-- DOCGEN:START getDocumentsForVehicleByDocumentType -->
### getDocumentsForVehicleByDocumentType

**Summary**: Get documents for a vehicle by type

**Description**: Retrieves documents of a specific type associated with a vehicle.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicleId |  |
| undefined | path | documentType |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForVehicleByType )

<!-- DOCGEN:END getDocumentsForVehicleByDocumentType -->

<!-- DOCGEN:START createUserDocument -->
### createUserDocument

**Summary**: Create a document for a user

**Description**: Creates a new document and links it to a specific user.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | user_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createUserDocument )

<!-- DOCGEN:END createUserDocument -->

<!-- DOCGEN:START createBusinessDocument -->
### createBusinessDocument

**Summary**: Create a document for a business

**Description**: Creates a new document and links it to a specific business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createBusinessDocument )

<!-- DOCGEN:END createBusinessDocument -->

<!-- DOCGEN:START createDriverDocument -->
### createDriverDocument

**Summary**: Create a document for a driver

**Description**: Creates a new document and links it to a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createDriverDocument )

<!-- DOCGEN:END createDriverDocument -->

<!-- DOCGEN:START createVehicleDocument -->
### createVehicleDocument

**Summary**: Create a document for a vehicle

**Description**: Creates a new document and links it to a specific vehicle.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicle_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createVehicleDocument )

<!-- DOCGEN:END createVehicleDocument -->

<!-- DOCGEN:START createDeliveryPersonDocument -->
### createDeliveryPersonDocument

**Summary**: Create a document for a delivery person

**Description**: Creates a new document and links it to a specific delivery person.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_person_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createDeliveryPersonDocument )

<!-- DOCGEN:END createDeliveryPersonDocument -->

<!-- DOCGEN:START updateDocumentExpirationDate -->
### updateDocumentExpirationDate

**Summary**: Update document's expiration date

**Description**: Updates the expiration date of a specific document.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDocumentExpirationDate )

<!-- DOCGEN:END updateDocumentExpirationDate -->

<!-- DOCGEN:START updateDocumentIssueDate -->
### updateDocumentIssueDate

**Summary**: Update document's issue date

**Description**: Updates the issue date of a specific document.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDocumentIssueDate )

<!-- DOCGEN:END updateDocumentIssueDate -->

<!-- DOCGEN:START updateDocumentFiles -->
### updateDocumentFiles

**Summary**: Update document's files

**Description**: Updates the files associated with a specific document.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDocumentFiles )

<!-- DOCGEN:END updateDocumentFiles -->

<!-- DOCGEN:START updateDocumentAdditionalInfo -->
### updateDocumentAdditionalInfo

**Summary**: Update document's additional info

**Description**: Updates the additional information of a specific document.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDocumentAdditionalInfo )

<!-- DOCGEN:END updateDocumentAdditionalInfo -->

<!-- DOCGEN:START listDocuments -->
### listDocuments

**Summary**: Get all documents

**Description**: Retrieves all documents in the system. Intended for admin usage.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocuments )

<!-- DOCGEN:END listDocuments -->

<!-- DOCGEN:START getDocumentById -->
### getDocumentById

**Summary**: Get a document by ID

**Description**: Retrieves a specific document by its ID. Useful for detailed document viewing.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentById )

<!-- DOCGEN:END getDocumentById -->

<!-- DOCGEN:START getDocumentsForUser -->
### getDocumentsForUser

**Summary**: Get documents for a user

**Description**: Retrieves all documents associated with a specific user.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | userId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForUser )

<!-- DOCGEN:END getDocumentsForUser -->

<!-- DOCGEN:START getDocumentsForBusiness -->
### getDocumentsForBusiness

**Summary**: Get documents for a business

**Description**: Retrieves all documents associated with a specific business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | businessId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForBusiness )

<!-- DOCGEN:END getDocumentsForBusiness -->

<!-- DOCGEN:START getDocumentsForDeliveryPerson -->
### getDocumentsForDeliveryPerson

**Summary**: Get documents for a delivery person

**Description**: Retrieves all documents associated with a specific delivery person.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | deliveryPersonId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForDeliveryPerson )

<!-- DOCGEN:END getDocumentsForDeliveryPerson -->

<!-- DOCGEN:START getDocumentsForDriver -->
### getDocumentsForDriver

**Summary**: Get documents for a driver

**Description**: Retrieves all documents associated with a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driverId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForDriver )

<!-- DOCGEN:END getDocumentsForDriver -->

<!-- DOCGEN:START getDocumentsForVehicle -->
### getDocumentsForVehicle

**Summary**: Get documents for a vehicle

**Description**: Retrieves all documents associated with a specific vehicle.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicleId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForVehicle )

<!-- DOCGEN:END getDocumentsForVehicle -->

<!-- DOCGEN:START getDocumentsByDocumentType -->
### getDocumentsByDocumentType

**Summary**: Get documents by type

**Description**: Retrieves documents of a specific type across all entities.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | documentType |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsByType )

<!-- DOCGEN:END getDocumentsByDocumentType -->

<!-- DOCGEN:START getDocumentsForBusinessByDocumentType -->
### getDocumentsForBusinessByDocumentType

**Summary**: Get documents for a business by type

**Description**: Retrieves documents of a specific type associated with a business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | businessId |  |
| undefined | path | documentType |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForBusinessByType )

<!-- DOCGEN:END getDocumentsForBusinessByDocumentType -->

<!-- DOCGEN:START getDocumentsForUserByDocumentType -->
### getDocumentsForUserByDocumentType

**Summary**: Get documents for a user by type

**Description**: Retrieves documents of a specific type associated with a user.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_type |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForUserByDocumentType )

<!-- DOCGEN:END getDocumentsForUserByDocumentType -->

<!-- DOCGEN:START getDocumentsForDriverByDocumentType -->
### getDocumentsForDriverByDocumentType

**Summary**: Get documents for a driver by type

**Description**: Retrieves documents of a specific type associated with a driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driverId |  |
| undefined | path | documentType |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForDriverByType )

<!-- DOCGEN:END getDocumentsForDriverByDocumentType -->

<!-- DOCGEN:START getDocumentsForDeliveryPersonByDocumentType -->
### getDocumentsForDeliveryPersonByDocumentType

**Summary**: Get documents for a delivery person by type

**Description**: Retrieves documents of a specific type associated with a delivery person.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | deliveryPersonId |  |
| undefined | path | documentType |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForDeliveryPersonByType )

<!-- DOCGEN:END getDocumentsForDeliveryPersonByDocumentType -->

<!-- DOCGEN:START getDocumentsForVehicleByDocumentType -->
### getDocumentsForVehicleByDocumentType

**Summary**: Get documents for a vehicle by type

**Description**: Retrieves documents of a specific type associated with a vehicle.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicleId |  |
| undefined | path | documentType |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForVehicleByType )

<!-- DOCGEN:END getDocumentsForVehicleByDocumentType -->

<!-- DOCGEN:START createUserDocument -->
### createUserDocument

**Summary**: Create a document for a user

**Description**: Creates a new document and links it to a specific user.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | user_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createUserDocument )

<!-- DOCGEN:END createUserDocument -->

<!-- DOCGEN:START createBusinessDocument -->
### createBusinessDocument

**Summary**: Create a document for a business

**Description**: Creates a new document and links it to a specific business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createBusinessDocument )

<!-- DOCGEN:END createBusinessDocument -->

<!-- DOCGEN:START createDriverDocument -->
### createDriverDocument

**Summary**: Create a document for a driver

**Description**: Creates a new document and links it to a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createDriverDocument )

<!-- DOCGEN:END createDriverDocument -->

<!-- DOCGEN:START createVehicleDocument -->
### createVehicleDocument

**Summary**: Create a document for a vehicle

**Description**: Creates a new document and links it to a specific vehicle.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicle_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createVehicleDocument )

<!-- DOCGEN:END createVehicleDocument -->

<!-- DOCGEN:START createDeliveryPersonDocument -->
### createDeliveryPersonDocument

**Summary**: Create a document for a delivery person

**Description**: Creates a new document and links it to a specific delivery person.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_person_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createDeliveryPersonDocument )

<!-- DOCGEN:END createDeliveryPersonDocument -->

<!-- DOCGEN:START updateDocumentExpirationDate -->
### updateDocumentExpirationDate

**Summary**: Update document's expiration date

**Description**: Updates the expiration date of a specific document.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDocumentExpirationDate )

<!-- DOCGEN:END updateDocumentExpirationDate -->

<!-- DOCGEN:START updateDocumentIssueDate -->
### updateDocumentIssueDate

**Summary**: Update document's issue date

**Description**: Updates the issue date of a specific document.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDocumentIssueDate )

<!-- DOCGEN:END updateDocumentIssueDate -->

<!-- DOCGEN:START updateDocumentFiles -->
### updateDocumentFiles

**Summary**: Update document's files

**Description**: Updates the files associated with a specific document.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDocumentFiles )

<!-- DOCGEN:END updateDocumentFiles -->

<!-- DOCGEN:START updateDocumentAdditionalInfo -->
### updateDocumentAdditionalInfo

**Summary**: Update document's additional info

**Description**: Updates the additional information of a specific document.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDocumentAdditionalInfo )

<!-- DOCGEN:END updateDocumentAdditionalInfo -->

<!-- DOCGEN:START listDocuments -->
### listDocuments

**Summary**: Get all documents

**Description**: Retrieves all documents in the system. Intended for admin usage.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocuments )

<!-- DOCGEN:END listDocuments -->

<!-- DOCGEN:START getDocumentById -->
### getDocumentById

**Summary**: Get a document by ID

**Description**: Retrieves a specific document by its ID. Useful for detailed document viewing.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentById )

<!-- DOCGEN:END getDocumentById -->

<!-- DOCGEN:START getDocumentsForUser -->
### getDocumentsForUser

**Summary**: Get documents for a user

**Description**: Retrieves all documents associated with a specific user.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | userId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForUser )

<!-- DOCGEN:END getDocumentsForUser -->

<!-- DOCGEN:START getDocumentsForBusiness -->
### getDocumentsForBusiness

**Summary**: Get documents for a business

**Description**: Retrieves all documents associated with a specific business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | businessId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForBusiness )

<!-- DOCGEN:END getDocumentsForBusiness -->

<!-- DOCGEN:START getDocumentsForDeliveryPerson -->
### getDocumentsForDeliveryPerson

**Summary**: Get documents for a delivery person

**Description**: Retrieves all documents associated with a specific delivery person.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | deliveryPersonId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForDeliveryPerson )

<!-- DOCGEN:END getDocumentsForDeliveryPerson -->

<!-- DOCGEN:START getDocumentsForDriver -->
### getDocumentsForDriver

**Summary**: Get documents for a driver

**Description**: Retrieves all documents associated with a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driverId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForDriver )

<!-- DOCGEN:END getDocumentsForDriver -->

<!-- DOCGEN:START getDocumentsForVehicle -->
### getDocumentsForVehicle

**Summary**: Get documents for a vehicle

**Description**: Retrieves all documents associated with a specific vehicle.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicleId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForVehicle )

<!-- DOCGEN:END getDocumentsForVehicle -->

<!-- DOCGEN:START getDocumentsByDocumentType -->
### getDocumentsByDocumentType

**Summary**: Get documents by type

**Description**: Retrieves documents of a specific type across all entities.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | documentType |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsByType )

<!-- DOCGEN:END getDocumentsByDocumentType -->

<!-- DOCGEN:START getDocumentsForBusinessByDocumentType -->
### getDocumentsForBusinessByDocumentType

**Summary**: Get documents for a business by type

**Description**: Retrieves documents of a specific type associated with a business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | businessId |  |
| undefined | path | documentType |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForBusinessByType )

<!-- DOCGEN:END getDocumentsForBusinessByDocumentType -->

<!-- DOCGEN:START getDocumentsForUserByDocumentType -->
### getDocumentsForUserByDocumentType

**Summary**: Get documents for a user by type

**Description**: Retrieves documents of a specific type associated with a user.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_type |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForUserByDocumentType )

<!-- DOCGEN:END getDocumentsForUserByDocumentType -->

<!-- DOCGEN:START getDocumentsForDriverByDocumentType -->
### getDocumentsForDriverByDocumentType

**Summary**: Get documents for a driver by type

**Description**: Retrieves documents of a specific type associated with a driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driverId |  |
| undefined | path | documentType |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForDriverByType )

<!-- DOCGEN:END getDocumentsForDriverByDocumentType -->

<!-- DOCGEN:START getDocumentsForDeliveryPersonByDocumentType -->
### getDocumentsForDeliveryPersonByDocumentType

**Summary**: Get documents for a delivery person by type

**Description**: Retrieves documents of a specific type associated with a delivery person.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | deliveryPersonId |  |
| undefined | path | documentType |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForDeliveryPersonByType )

<!-- DOCGEN:END getDocumentsForDeliveryPersonByDocumentType -->

<!-- DOCGEN:START getDocumentsForVehicleByDocumentType -->
### getDocumentsForVehicleByDocumentType

**Summary**: Get documents for a vehicle by type

**Description**: Retrieves documents of a specific type associated with a vehicle.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicleId |  |
| undefined | path | documentType |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForVehicleByType )

<!-- DOCGEN:END getDocumentsForVehicleByDocumentType -->

<!-- DOCGEN:START createUserDocument -->
### createUserDocument

**Summary**: Create a document for a user

**Description**: Creates a new document and links it to a specific user.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | user_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createUserDocument )

<!-- DOCGEN:END createUserDocument -->

<!-- DOCGEN:START createBusinessDocument -->
### createBusinessDocument

**Summary**: Create a document for a business

**Description**: Creates a new document and links it to a specific business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createBusinessDocument )

<!-- DOCGEN:END createBusinessDocument -->

<!-- DOCGEN:START createDriverDocument -->
### createDriverDocument

**Summary**: Create a document for a driver

**Description**: Creates a new document and links it to a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createDriverDocument )

<!-- DOCGEN:END createDriverDocument -->

<!-- DOCGEN:START createVehicleDocument -->
### createVehicleDocument

**Summary**: Create a document for a vehicle

**Description**: Creates a new document and links it to a specific vehicle.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicle_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createVehicleDocument )

<!-- DOCGEN:END createVehicleDocument -->

<!-- DOCGEN:START createDeliveryPersonDocument -->
### createDeliveryPersonDocument

**Summary**: Create a document for a delivery person

**Description**: Creates a new document and links it to a specific delivery person.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_person_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createDeliveryPersonDocument )

<!-- DOCGEN:END createDeliveryPersonDocument -->

<!-- DOCGEN:START updateDocumentExpirationDate -->
### updateDocumentExpirationDate

**Summary**: Update document's expiration date

**Description**: Updates the expiration date of a specific document.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDocumentExpirationDate )

<!-- DOCGEN:END updateDocumentExpirationDate -->

<!-- DOCGEN:START updateDocumentIssueDate -->
### updateDocumentIssueDate

**Summary**: Update document's issue date

**Description**: Updates the issue date of a specific document.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDocumentIssueDate )

<!-- DOCGEN:END updateDocumentIssueDate -->

<!-- DOCGEN:START updateDocumentFiles -->
### updateDocumentFiles

**Summary**: Update document's files

**Description**: Updates the files associated with a specific document.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDocumentFiles )

<!-- DOCGEN:END updateDocumentFiles -->

<!-- DOCGEN:START updateDocumentAdditionalInfo -->
### updateDocumentAdditionalInfo

**Summary**: Update document's additional info

**Description**: Updates the additional information of a specific document.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDocumentAdditionalInfo )

<!-- DOCGEN:END updateDocumentAdditionalInfo -->

<!-- DOCGEN:START listDocuments -->
### listDocuments

**Summary**: Get all documents

**Description**: Retrieves all documents in the system. Intended for admin usage.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocuments )

<!-- DOCGEN:END listDocuments -->

<!-- DOCGEN:START getDocumentById -->
### getDocumentById

**Summary**: Get a document by ID

**Description**: Retrieves a specific document by its ID. Useful for detailed document viewing.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentById )

<!-- DOCGEN:END getDocumentById -->

<!-- DOCGEN:START getDocumentsForUser -->
### getDocumentsForUser

**Summary**: Get documents for a user

**Description**: Retrieves all documents associated with a specific user.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | userId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForUser )

<!-- DOCGEN:END getDocumentsForUser -->

<!-- DOCGEN:START getDocumentsForBusiness -->
### getDocumentsForBusiness

**Summary**: Get documents for a business

**Description**: Retrieves all documents associated with a specific business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | businessId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForBusiness )

<!-- DOCGEN:END getDocumentsForBusiness -->

<!-- DOCGEN:START getDocumentsForDeliveryPerson -->
### getDocumentsForDeliveryPerson

**Summary**: Get documents for a delivery person

**Description**: Retrieves all documents associated with a specific delivery person.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | deliveryPersonId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForDeliveryPerson )

<!-- DOCGEN:END getDocumentsForDeliveryPerson -->

<!-- DOCGEN:START getDocumentsForDriver -->
### getDocumentsForDriver

**Summary**: Get documents for a driver

**Description**: Retrieves all documents associated with a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driverId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForDriver )

<!-- DOCGEN:END getDocumentsForDriver -->

<!-- DOCGEN:START getDocumentsForVehicle -->
### getDocumentsForVehicle

**Summary**: Get documents for a vehicle

**Description**: Retrieves all documents associated with a specific vehicle.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicleId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForVehicle )

<!-- DOCGEN:END getDocumentsForVehicle -->

<!-- DOCGEN:START getDocumentsByDocumentType -->
### getDocumentsByDocumentType

**Summary**: Get documents by type

**Description**: Retrieves documents of a specific type across all entities.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | documentType |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsByType )

<!-- DOCGEN:END getDocumentsByDocumentType -->

<!-- DOCGEN:START getDocumentsForBusinessByDocumentType -->
### getDocumentsForBusinessByDocumentType

**Summary**: Get documents for a business by type

**Description**: Retrieves documents of a specific type associated with a business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | businessId |  |
| undefined | path | documentType |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForBusinessByType )

<!-- DOCGEN:END getDocumentsForBusinessByDocumentType -->

<!-- DOCGEN:START getDocumentsForUserByDocumentType -->
### getDocumentsForUserByDocumentType

**Summary**: Get documents for a user by type

**Description**: Retrieves documents of a specific type associated with a user.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_type |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForUserByDocumentType )

<!-- DOCGEN:END getDocumentsForUserByDocumentType -->

<!-- DOCGEN:START getDocumentsForDriverByDocumentType -->
### getDocumentsForDriverByDocumentType

**Summary**: Get documents for a driver by type

**Description**: Retrieves documents of a specific type associated with a driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driverId |  |
| undefined | path | documentType |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForDriverByType )

<!-- DOCGEN:END getDocumentsForDriverByDocumentType -->

<!-- DOCGEN:START getDocumentsForDeliveryPersonByDocumentType -->
### getDocumentsForDeliveryPersonByDocumentType

**Summary**: Get documents for a delivery person by type

**Description**: Retrieves documents of a specific type associated with a delivery person.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | deliveryPersonId |  |
| undefined | path | documentType |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForDeliveryPersonByType )

<!-- DOCGEN:END getDocumentsForDeliveryPersonByDocumentType -->

<!-- DOCGEN:START getDocumentsForVehicleByDocumentType -->
### getDocumentsForVehicleByDocumentType

**Summary**: Get documents for a vehicle by type

**Description**: Retrieves documents of a specific type associated with a vehicle.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicleId |  |
| undefined | path | documentType |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForVehicleByType )

<!-- DOCGEN:END getDocumentsForVehicleByDocumentType -->

<!-- DOCGEN:START createUserDocument -->
### createUserDocument

**Summary**: Create a document for a user

**Description**: Creates a new document and links it to a specific user.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | user_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createUserDocument )

<!-- DOCGEN:END createUserDocument -->

<!-- DOCGEN:START createBusinessDocument -->
### createBusinessDocument

**Summary**: Create a document for a business

**Description**: Creates a new document and links it to a specific business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createBusinessDocument )

<!-- DOCGEN:END createBusinessDocument -->

<!-- DOCGEN:START createDriverDocument -->
### createDriverDocument

**Summary**: Create a document for a driver

**Description**: Creates a new document and links it to a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createDriverDocument )

<!-- DOCGEN:END createDriverDocument -->

<!-- DOCGEN:START createVehicleDocument -->
### createVehicleDocument

**Summary**: Create a document for a vehicle

**Description**: Creates a new document and links it to a specific vehicle.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicle_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createVehicleDocument )

<!-- DOCGEN:END createVehicleDocument -->

<!-- DOCGEN:START createDeliveryPersonDocument -->
### createDeliveryPersonDocument

**Summary**: Create a document for a delivery person

**Description**: Creates a new document and links it to a specific delivery person.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_person_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createDeliveryPersonDocument )

<!-- DOCGEN:END createDeliveryPersonDocument -->

<!-- DOCGEN:START updateDocumentExpirationDate -->
### updateDocumentExpirationDate

**Summary**: Update document's expiration date

**Description**: Updates the expiration date of a specific document.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDocumentExpirationDate )

<!-- DOCGEN:END updateDocumentExpirationDate -->

<!-- DOCGEN:START updateDocumentIssueDate -->
### updateDocumentIssueDate

**Summary**: Update document's issue date

**Description**: Updates the issue date of a specific document.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDocumentIssueDate )

<!-- DOCGEN:END updateDocumentIssueDate -->

<!-- DOCGEN:START updateDocumentFiles -->
### updateDocumentFiles

**Summary**: Update document's files

**Description**: Updates the files associated with a specific document.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDocumentFiles )

<!-- DOCGEN:END updateDocumentFiles -->

<!-- DOCGEN:START updateDocumentAdditionalInfo -->
### updateDocumentAdditionalInfo

**Summary**: Update document's additional info

**Description**: Updates the additional information of a specific document.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDocumentAdditionalInfo )

<!-- DOCGEN:END updateDocumentAdditionalInfo -->

<!-- DOCGEN:START listDocuments -->
### listDocuments

**Summary**: Get all documents

**Description**: Retrieves all documents in the system. Intended for admin usage.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocuments )

<!-- DOCGEN:END listDocuments -->

<!-- DOCGEN:START getDocumentById -->
### getDocumentById

**Summary**: Get a document by ID

**Description**: Retrieves a specific document by its ID. Useful for detailed document viewing.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentById )

<!-- DOCGEN:END getDocumentById -->

<!-- DOCGEN:START getDocumentsForUser -->
### getDocumentsForUser

**Summary**: Get documents for a user

**Description**: Retrieves all documents associated with a specific user.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | userId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForUser )

<!-- DOCGEN:END getDocumentsForUser -->

<!-- DOCGEN:START getDocumentsForBusiness -->
### getDocumentsForBusiness

**Summary**: Get documents for a business

**Description**: Retrieves all documents associated with a specific business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | businessId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForBusiness )

<!-- DOCGEN:END getDocumentsForBusiness -->

<!-- DOCGEN:START getDocumentsForDeliveryPerson -->
### getDocumentsForDeliveryPerson

**Summary**: Get documents for a delivery person

**Description**: Retrieves all documents associated with a specific delivery person.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | deliveryPersonId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForDeliveryPerson )

<!-- DOCGEN:END getDocumentsForDeliveryPerson -->

<!-- DOCGEN:START getDocumentsForDriver -->
### getDocumentsForDriver

**Summary**: Get documents for a driver

**Description**: Retrieves all documents associated with a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driverId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForDriver )

<!-- DOCGEN:END getDocumentsForDriver -->

<!-- DOCGEN:START getDocumentsForVehicle -->
### getDocumentsForVehicle

**Summary**: Get documents for a vehicle

**Description**: Retrieves all documents associated with a specific vehicle.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicleId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForVehicle )

<!-- DOCGEN:END getDocumentsForVehicle -->

<!-- DOCGEN:START getDocumentsByDocumentType -->
### getDocumentsByDocumentType

**Summary**: Get documents by type

**Description**: Retrieves documents of a specific type across all entities.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | documentType |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsByType )

<!-- DOCGEN:END getDocumentsByDocumentType -->

<!-- DOCGEN:START getDocumentsForBusinessByDocumentType -->
### getDocumentsForBusinessByDocumentType

**Summary**: Get documents for a business by type

**Description**: Retrieves documents of a specific type associated with a business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | businessId |  |
| undefined | path | documentType |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForBusinessByType )

<!-- DOCGEN:END getDocumentsForBusinessByDocumentType -->

<!-- DOCGEN:START getDocumentsForUserByDocumentType -->
### getDocumentsForUserByDocumentType

**Summary**: Get documents for a user by type

**Description**: Retrieves documents of a specific type associated with a user.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_type |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForUserByDocumentType )

<!-- DOCGEN:END getDocumentsForUserByDocumentType -->

<!-- DOCGEN:START getDocumentsForDriverByDocumentType -->
### getDocumentsForDriverByDocumentType

**Summary**: Get documents for a driver by type

**Description**: Retrieves documents of a specific type associated with a driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driverId |  |
| undefined | path | documentType |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForDriverByType )

<!-- DOCGEN:END getDocumentsForDriverByDocumentType -->

<!-- DOCGEN:START getDocumentsForDeliveryPersonByDocumentType -->
### getDocumentsForDeliveryPersonByDocumentType

**Summary**: Get documents for a delivery person by type

**Description**: Retrieves documents of a specific type associated with a delivery person.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | deliveryPersonId |  |
| undefined | path | documentType |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForDeliveryPersonByType )

<!-- DOCGEN:END getDocumentsForDeliveryPersonByDocumentType -->

<!-- DOCGEN:START getDocumentsForVehicleByDocumentType -->
### getDocumentsForVehicleByDocumentType

**Summary**: Get documents for a vehicle by type

**Description**: Retrieves documents of a specific type associated with a vehicle.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicleId |  |
| undefined | path | documentType |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForVehicleByType )

<!-- DOCGEN:END getDocumentsForVehicleByDocumentType -->

<!-- DOCGEN:START createUserDocument -->
### createUserDocument

**Summary**: Create a document for a user

**Description**: Creates a new document and links it to a specific user.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | user_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createUserDocument )

<!-- DOCGEN:END createUserDocument -->

<!-- DOCGEN:START createBusinessDocument -->
### createBusinessDocument

**Summary**: Create a document for a business

**Description**: Creates a new document and links it to a specific business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createBusinessDocument )

<!-- DOCGEN:END createBusinessDocument -->

<!-- DOCGEN:START createDriverDocument -->
### createDriverDocument

**Summary**: Create a document for a driver

**Description**: Creates a new document and links it to a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createDriverDocument )

<!-- DOCGEN:END createDriverDocument -->

<!-- DOCGEN:START createVehicleDocument -->
### createVehicleDocument

**Summary**: Create a document for a vehicle

**Description**: Creates a new document and links it to a specific vehicle.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicle_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createVehicleDocument )

<!-- DOCGEN:END createVehicleDocument -->

<!-- DOCGEN:START createDeliveryPersonDocument -->
### createDeliveryPersonDocument

**Summary**: Create a document for a delivery person

**Description**: Creates a new document and links it to a specific delivery person.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_person_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createDeliveryPersonDocument )

<!-- DOCGEN:END createDeliveryPersonDocument -->

<!-- DOCGEN:START updateDocumentExpirationDate -->
### updateDocumentExpirationDate

**Summary**: Update document's expiration date

**Description**: Updates the expiration date of a specific document.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDocumentExpirationDate )

<!-- DOCGEN:END updateDocumentExpirationDate -->

<!-- DOCGEN:START updateDocumentIssueDate -->
### updateDocumentIssueDate

**Summary**: Update document's issue date

**Description**: Updates the issue date of a specific document.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDocumentIssueDate )

<!-- DOCGEN:END updateDocumentIssueDate -->

<!-- DOCGEN:START updateDocumentFiles -->
### updateDocumentFiles

**Summary**: Update document's files

**Description**: Updates the files associated with a specific document.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDocumentFiles )

<!-- DOCGEN:END updateDocumentFiles -->

<!-- DOCGEN:START updateDocumentAdditionalInfo -->
### updateDocumentAdditionalInfo

**Summary**: Update document's additional info

**Description**: Updates the additional information of a specific document.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDocumentAdditionalInfo )

<!-- DOCGEN:END updateDocumentAdditionalInfo -->

<!-- DOCGEN:START listDocuments -->
### listDocuments

**Summary**: Get all documents

**Description**: Retrieves all documents in the system. Intended for admin usage.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocuments )

<!-- DOCGEN:END listDocuments -->

<!-- DOCGEN:START getDocumentById -->
### getDocumentById

**Summary**: Get a document by ID

**Description**: Retrieves a specific document by its ID. Useful for detailed document viewing.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentById )

<!-- DOCGEN:END getDocumentById -->

<!-- DOCGEN:START getDocumentsForUser -->
### getDocumentsForUser

**Summary**: Get documents for a user

**Description**: Retrieves all documents associated with a specific user.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | userId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForUser )

<!-- DOCGEN:END getDocumentsForUser -->

<!-- DOCGEN:START getDocumentsForBusiness -->
### getDocumentsForBusiness

**Summary**: Get documents for a business

**Description**: Retrieves all documents associated with a specific business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | businessId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForBusiness )

<!-- DOCGEN:END getDocumentsForBusiness -->

<!-- DOCGEN:START getDocumentsForDeliveryPerson -->
### getDocumentsForDeliveryPerson

**Summary**: Get documents for a delivery person

**Description**: Retrieves all documents associated with a specific delivery person.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | deliveryPersonId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForDeliveryPerson )

<!-- DOCGEN:END getDocumentsForDeliveryPerson -->

<!-- DOCGEN:START getDocumentsForDriver -->
### getDocumentsForDriver

**Summary**: Get documents for a driver

**Description**: Retrieves all documents associated with a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driverId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForDriver )

<!-- DOCGEN:END getDocumentsForDriver -->

<!-- DOCGEN:START getDocumentsForVehicle -->
### getDocumentsForVehicle

**Summary**: Get documents for a vehicle

**Description**: Retrieves all documents associated with a specific vehicle.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicleId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForVehicle )

<!-- DOCGEN:END getDocumentsForVehicle -->

<!-- DOCGEN:START getDocumentsByDocumentType -->
### getDocumentsByDocumentType

**Summary**: Get documents by type

**Description**: Retrieves documents of a specific type across all entities.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | documentType |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsByType )

<!-- DOCGEN:END getDocumentsByDocumentType -->

<!-- DOCGEN:START getDocumentsForBusinessByDocumentType -->
### getDocumentsForBusinessByDocumentType

**Summary**: Get documents for a business by type

**Description**: Retrieves documents of a specific type associated with a business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | businessId |  |
| undefined | path | documentType |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForBusinessByType )

<!-- DOCGEN:END getDocumentsForBusinessByDocumentType -->

<!-- DOCGEN:START getDocumentsForUserByDocumentType -->
### getDocumentsForUserByDocumentType

**Summary**: Get documents for a user by type

**Description**: Retrieves documents of a specific type associated with a user.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_type |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForUserByDocumentType )

<!-- DOCGEN:END getDocumentsForUserByDocumentType -->

<!-- DOCGEN:START getDocumentsForDriverByDocumentType -->
### getDocumentsForDriverByDocumentType

**Summary**: Get documents for a driver by type

**Description**: Retrieves documents of a specific type associated with a driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driverId |  |
| undefined | path | documentType |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForDriverByType )

<!-- DOCGEN:END getDocumentsForDriverByDocumentType -->

<!-- DOCGEN:START getDocumentsForDeliveryPersonByDocumentType -->
### getDocumentsForDeliveryPersonByDocumentType

**Summary**: Get documents for a delivery person by type

**Description**: Retrieves documents of a specific type associated with a delivery person.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | deliveryPersonId |  |
| undefined | path | documentType |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForDeliveryPersonByType )

<!-- DOCGEN:END getDocumentsForDeliveryPersonByDocumentType -->

<!-- DOCGEN:START getDocumentsForVehicleByDocumentType -->
### getDocumentsForVehicleByDocumentType

**Summary**: Get documents for a vehicle by type

**Description**: Retrieves documents of a specific type associated with a vehicle.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicleId |  |
| undefined | path | documentType |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForVehicleByType )

<!-- DOCGEN:END getDocumentsForVehicleByDocumentType -->

<!-- DOCGEN:START createUserDocument -->
### createUserDocument

**Summary**: Create a document for a user

**Description**: Creates a new document and links it to a specific user.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | user_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createUserDocument )

<!-- DOCGEN:END createUserDocument -->

<!-- DOCGEN:START createBusinessDocument -->
### createBusinessDocument

**Summary**: Create a document for a business

**Description**: Creates a new document and links it to a specific business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createBusinessDocument )

<!-- DOCGEN:END createBusinessDocument -->

<!-- DOCGEN:START createDriverDocument -->
### createDriverDocument

**Summary**: Create a document for a driver

**Description**: Creates a new document and links it to a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createDriverDocument )

<!-- DOCGEN:END createDriverDocument -->

<!-- DOCGEN:START createVehicleDocument -->
### createVehicleDocument

**Summary**: Create a document for a vehicle

**Description**: Creates a new document and links it to a specific vehicle.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicle_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createVehicleDocument )

<!-- DOCGEN:END createVehicleDocument -->

<!-- DOCGEN:START createDeliveryPersonDocument -->
### createDeliveryPersonDocument

**Summary**: Create a document for a delivery person

**Description**: Creates a new document and links it to a specific delivery person.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_person_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createDeliveryPersonDocument )

<!-- DOCGEN:END createDeliveryPersonDocument -->

<!-- DOCGEN:START updateDocumentExpirationDate -->
### updateDocumentExpirationDate

**Summary**: Update document's expiration date

**Description**: Updates the expiration date of a specific document.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDocumentExpirationDate )

<!-- DOCGEN:END updateDocumentExpirationDate -->

<!-- DOCGEN:START updateDocumentIssueDate -->
### updateDocumentIssueDate

**Summary**: Update document's issue date

**Description**: Updates the issue date of a specific document.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDocumentIssueDate )

<!-- DOCGEN:END updateDocumentIssueDate -->

<!-- DOCGEN:START updateDocumentFiles -->
### updateDocumentFiles

**Summary**: Update document's files

**Description**: Updates the files associated with a specific document.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDocumentFiles )

<!-- DOCGEN:END updateDocumentFiles -->

<!-- DOCGEN:START updateDocumentAdditionalInfo -->
### updateDocumentAdditionalInfo

**Summary**: Update document's additional info

**Description**: Updates the additional information of a specific document.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDocumentAdditionalInfo )

<!-- DOCGEN:END updateDocumentAdditionalInfo -->

<!-- DOCGEN:START listDocuments -->
### listDocuments

**Summary**: Get all documents

**Description**: Retrieves all documents in the system. Intended for admin usage.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocuments )

<!-- DOCGEN:END listDocuments -->

<!-- DOCGEN:START getDocumentById -->
### getDocumentById

**Summary**: Get a document by ID

**Description**: Retrieves a specific document by its ID. Useful for detailed document viewing.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentById )

<!-- DOCGEN:END getDocumentById -->

<!-- DOCGEN:START getDocumentsForUser -->
### getDocumentsForUser

**Summary**: Get documents for a user

**Description**: Retrieves all documents associated with a specific user.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | userId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForUser )

<!-- DOCGEN:END getDocumentsForUser -->

<!-- DOCGEN:START getDocumentsForBusiness -->
### getDocumentsForBusiness

**Summary**: Get documents for a business

**Description**: Retrieves all documents associated with a specific business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | businessId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForBusiness )

<!-- DOCGEN:END getDocumentsForBusiness -->

<!-- DOCGEN:START getDocumentsForDeliveryPerson -->
### getDocumentsForDeliveryPerson

**Summary**: Get documents for a delivery person

**Description**: Retrieves all documents associated with a specific delivery person.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | deliveryPersonId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForDeliveryPerson )

<!-- DOCGEN:END getDocumentsForDeliveryPerson -->

<!-- DOCGEN:START getDocumentsForDriver -->
### getDocumentsForDriver

**Summary**: Get documents for a driver

**Description**: Retrieves all documents associated with a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driverId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForDriver )

<!-- DOCGEN:END getDocumentsForDriver -->

<!-- DOCGEN:START getDocumentsForVehicle -->
### getDocumentsForVehicle

**Summary**: Get documents for a vehicle

**Description**: Retrieves all documents associated with a specific vehicle.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicleId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForVehicle )

<!-- DOCGEN:END getDocumentsForVehicle -->

<!-- DOCGEN:START getDocumentsByDocumentType -->
### getDocumentsByDocumentType

**Summary**: Get documents by type

**Description**: Retrieves documents of a specific type across all entities.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | documentType |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsByType )

<!-- DOCGEN:END getDocumentsByDocumentType -->

<!-- DOCGEN:START getDocumentsForBusinessByDocumentType -->
### getDocumentsForBusinessByDocumentType

**Summary**: Get documents for a business by type

**Description**: Retrieves documents of a specific type associated with a business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | businessId |  |
| undefined | path | documentType |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForBusinessByType )

<!-- DOCGEN:END getDocumentsForBusinessByDocumentType -->

<!-- DOCGEN:START getDocumentsForUserByDocumentType -->
### getDocumentsForUserByDocumentType

**Summary**: Get documents for a user by type

**Description**: Retrieves documents of a specific type associated with a user.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_type |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForUserByDocumentType )

<!-- DOCGEN:END getDocumentsForUserByDocumentType -->

<!-- DOCGEN:START getDocumentsForDriverByDocumentType -->
### getDocumentsForDriverByDocumentType

**Summary**: Get documents for a driver by type

**Description**: Retrieves documents of a specific type associated with a driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driverId |  |
| undefined | path | documentType |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForDriverByType )

<!-- DOCGEN:END getDocumentsForDriverByDocumentType -->

<!-- DOCGEN:START getDocumentsForDeliveryPersonByDocumentType -->
### getDocumentsForDeliveryPersonByDocumentType

**Summary**: Get documents for a delivery person by type

**Description**: Retrieves documents of a specific type associated with a delivery person.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | deliveryPersonId |  |
| undefined | path | documentType |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForDeliveryPersonByType )

<!-- DOCGEN:END getDocumentsForDeliveryPersonByDocumentType -->

<!-- DOCGEN:START getDocumentsForVehicleByDocumentType -->
### getDocumentsForVehicleByDocumentType

**Summary**: Get documents for a vehicle by type

**Description**: Retrieves documents of a specific type associated with a vehicle.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicleId |  |
| undefined | path | documentType |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForVehicleByType )

<!-- DOCGEN:END getDocumentsForVehicleByDocumentType -->

<!-- DOCGEN:START createUserDocument -->
### createUserDocument

**Summary**: Create a document for a user

**Description**: Creates a new document and links it to a specific user.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | user_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createUserDocument )

<!-- DOCGEN:END createUserDocument -->

<!-- DOCGEN:START createBusinessDocument -->
### createBusinessDocument

**Summary**: Create a document for a business

**Description**: Creates a new document and links it to a specific business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createBusinessDocument )

<!-- DOCGEN:END createBusinessDocument -->

<!-- DOCGEN:START createDriverDocument -->
### createDriverDocument

**Summary**: Create a document for a driver

**Description**: Creates a new document and links it to a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createDriverDocument )

<!-- DOCGEN:END createDriverDocument -->

<!-- DOCGEN:START createVehicleDocument -->
### createVehicleDocument

**Summary**: Create a document for a vehicle

**Description**: Creates a new document and links it to a specific vehicle.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicle_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createVehicleDocument )

<!-- DOCGEN:END createVehicleDocument -->

<!-- DOCGEN:START createDeliveryPersonDocument -->
### createDeliveryPersonDocument

**Summary**: Create a document for a delivery person

**Description**: Creates a new document and links it to a specific delivery person.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_person_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createDeliveryPersonDocument )

<!-- DOCGEN:END createDeliveryPersonDocument -->

<!-- DOCGEN:START updateDocumentExpirationDate -->
### updateDocumentExpirationDate

**Summary**: Update document's expiration date

**Description**: Updates the expiration date of a specific document.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDocumentExpirationDate )

<!-- DOCGEN:END updateDocumentExpirationDate -->

<!-- DOCGEN:START updateDocumentIssueDate -->
### updateDocumentIssueDate

**Summary**: Update document's issue date

**Description**: Updates the issue date of a specific document.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDocumentIssueDate )

<!-- DOCGEN:END updateDocumentIssueDate -->

<!-- DOCGEN:START updateDocumentFiles -->
### updateDocumentFiles

**Summary**: Update document's files

**Description**: Updates the files associated with a specific document.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDocumentFiles )

<!-- DOCGEN:END updateDocumentFiles -->

<!-- DOCGEN:START updateDocumentAdditionalInfo -->
### updateDocumentAdditionalInfo

**Summary**: Update document's additional info

**Description**: Updates the additional information of a specific document.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDocumentAdditionalInfo )

<!-- DOCGEN:END updateDocumentAdditionalInfo -->

<!-- DOCGEN:START listDocuments -->
### listDocuments

**Summary**: Get all documents

**Description**: Retrieves all documents in the system. Intended for admin usage.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocuments )

<!-- DOCGEN:END listDocuments -->

<!-- DOCGEN:START getDocumentById -->
### getDocumentById

**Summary**: Get a document by ID

**Description**: Retrieves a specific document by its ID. Useful for detailed document viewing.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentById )

<!-- DOCGEN:END getDocumentById -->

<!-- DOCGEN:START getDocumentsForUser -->
### getDocumentsForUser

**Summary**: Get documents for a user

**Description**: Retrieves all documents associated with a specific user.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | userId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForUser )

<!-- DOCGEN:END getDocumentsForUser -->

<!-- DOCGEN:START getDocumentsForBusiness -->
### getDocumentsForBusiness

**Summary**: Get documents for a business

**Description**: Retrieves all documents associated with a specific business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | businessId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForBusiness )

<!-- DOCGEN:END getDocumentsForBusiness -->

<!-- DOCGEN:START getDocumentsForDeliveryPerson -->
### getDocumentsForDeliveryPerson

**Summary**: Get documents for a delivery person

**Description**: Retrieves all documents associated with a specific delivery person.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | deliveryPersonId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForDeliveryPerson )

<!-- DOCGEN:END getDocumentsForDeliveryPerson -->

<!-- DOCGEN:START getDocumentsForDriver -->
### getDocumentsForDriver

**Summary**: Get documents for a driver

**Description**: Retrieves all documents associated with a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driverId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForDriver )

<!-- DOCGEN:END getDocumentsForDriver -->

<!-- DOCGEN:START getDocumentsForVehicle -->
### getDocumentsForVehicle

**Summary**: Get documents for a vehicle

**Description**: Retrieves all documents associated with a specific vehicle.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicleId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForVehicle )

<!-- DOCGEN:END getDocumentsForVehicle -->

<!-- DOCGEN:START getDocumentsByDocumentType -->
### getDocumentsByDocumentType

**Summary**: Get documents by type

**Description**: Retrieves documents of a specific type across all entities.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | documentType |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsByType )

<!-- DOCGEN:END getDocumentsByDocumentType -->

<!-- DOCGEN:START getDocumentsForBusinessByDocumentType -->
### getDocumentsForBusinessByDocumentType

**Summary**: Get documents for a business by type

**Description**: Retrieves documents of a specific type associated with a business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | businessId |  |
| undefined | path | documentType |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForBusinessByType )

<!-- DOCGEN:END getDocumentsForBusinessByDocumentType -->

<!-- DOCGEN:START getDocumentsForUserByDocumentType -->
### getDocumentsForUserByDocumentType

**Summary**: Get documents for a user by type

**Description**: Retrieves documents of a specific type associated with a user.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_type |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForUserByDocumentType )

<!-- DOCGEN:END getDocumentsForUserByDocumentType -->

<!-- DOCGEN:START getDocumentsForDriverByDocumentType -->
### getDocumentsForDriverByDocumentType

**Summary**: Get documents for a driver by type

**Description**: Retrieves documents of a specific type associated with a driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driverId |  |
| undefined | path | documentType |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForDriverByType )

<!-- DOCGEN:END getDocumentsForDriverByDocumentType -->

<!-- DOCGEN:START getDocumentsForDeliveryPersonByDocumentType -->
### getDocumentsForDeliveryPersonByDocumentType

**Summary**: Get documents for a delivery person by type

**Description**: Retrieves documents of a specific type associated with a delivery person.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | deliveryPersonId |  |
| undefined | path | documentType |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForDeliveryPersonByType )

<!-- DOCGEN:END getDocumentsForDeliveryPersonByDocumentType -->

<!-- DOCGEN:START getDocumentsForVehicleByDocumentType -->
### getDocumentsForVehicleByDocumentType

**Summary**: Get documents for a vehicle by type

**Description**: Retrieves documents of a specific type associated with a vehicle.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicleId |  |
| undefined | path | documentType |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForVehicleByType )

<!-- DOCGEN:END getDocumentsForVehicleByDocumentType -->

<!-- DOCGEN:START createUserDocument -->
### createUserDocument

**Summary**: Create a document for a user

**Description**: Creates a new document and links it to a specific user.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | user_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createUserDocument )

<!-- DOCGEN:END createUserDocument -->

<!-- DOCGEN:START createBusinessDocument -->
### createBusinessDocument

**Summary**: Create a document for a business

**Description**: Creates a new document and links it to a specific business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createBusinessDocument )

<!-- DOCGEN:END createBusinessDocument -->

<!-- DOCGEN:START createDriverDocument -->
### createDriverDocument

**Summary**: Create a document for a driver

**Description**: Creates a new document and links it to a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createDriverDocument )

<!-- DOCGEN:END createDriverDocument -->

<!-- DOCGEN:START createVehicleDocument -->
### createVehicleDocument

**Summary**: Create a document for a vehicle

**Description**: Creates a new document and links it to a specific vehicle.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicle_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createVehicleDocument )

<!-- DOCGEN:END createVehicleDocument -->

<!-- DOCGEN:START createDeliveryPersonDocument -->
### createDeliveryPersonDocument

**Summary**: Create a document for a delivery person

**Description**: Creates a new document and links it to a specific delivery person.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_person_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createDeliveryPersonDocument )

<!-- DOCGEN:END createDeliveryPersonDocument -->

<!-- DOCGEN:START updateDocumentExpirationDate -->
### updateDocumentExpirationDate

**Summary**: Update document's expiration date

**Description**: Updates the expiration date of a specific document.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDocumentExpirationDate )

<!-- DOCGEN:END updateDocumentExpirationDate -->

<!-- DOCGEN:START updateDocumentIssueDate -->
### updateDocumentIssueDate

**Summary**: Update document's issue date

**Description**: Updates the issue date of a specific document.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDocumentIssueDate )

<!-- DOCGEN:END updateDocumentIssueDate -->

<!-- DOCGEN:START updateDocumentFiles -->
### updateDocumentFiles

**Summary**: Update document's files

**Description**: Updates the files associated with a specific document.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDocumentFiles )

<!-- DOCGEN:END updateDocumentFiles -->

<!-- DOCGEN:START updateDocumentAdditionalInfo -->
### updateDocumentAdditionalInfo

**Summary**: Update document's additional info

**Description**: Updates the additional information of a specific document.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDocumentAdditionalInfo )

<!-- DOCGEN:END updateDocumentAdditionalInfo -->

<!-- DOCGEN:START listDocuments -->
### listDocuments

**Summary**: Get all documents

**Description**: Retrieves all documents in the system. Intended for admin usage.

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocuments )

<!-- DOCGEN:END listDocuments -->

<!-- DOCGEN:START getDocumentById -->
### getDocumentById

**Summary**: Get a document by ID

**Description**: Retrieves a specific document by its ID. Useful for detailed document viewing.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_id |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentById )

<!-- DOCGEN:END getDocumentById -->

<!-- DOCGEN:START getDocumentsForUser -->
### getDocumentsForUser

**Summary**: Get documents for a user

**Description**: Retrieves all documents associated with a specific user.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | userId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForUser )

<!-- DOCGEN:END getDocumentsForUser -->

<!-- DOCGEN:START getDocumentsForBusiness -->
### getDocumentsForBusiness

**Summary**: Get documents for a business

**Description**: Retrieves all documents associated with a specific business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | businessId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForBusiness )

<!-- DOCGEN:END getDocumentsForBusiness -->

<!-- DOCGEN:START getDocumentsForDeliveryPerson -->
### getDocumentsForDeliveryPerson

**Summary**: Get documents for a delivery person

**Description**: Retrieves all documents associated with a specific delivery person.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | deliveryPersonId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForDeliveryPerson )

<!-- DOCGEN:END getDocumentsForDeliveryPerson -->

<!-- DOCGEN:START getDocumentsForDriver -->
### getDocumentsForDriver

**Summary**: Get documents for a driver

**Description**: Retrieves all documents associated with a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driverId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForDriver )

<!-- DOCGEN:END getDocumentsForDriver -->

<!-- DOCGEN:START getDocumentsForVehicle -->
### getDocumentsForVehicle

**Summary**: Get documents for a vehicle

**Description**: Retrieves all documents associated with a specific vehicle.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicleId |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForVehicle )

<!-- DOCGEN:END getDocumentsForVehicle -->

<!-- DOCGEN:START getDocumentsByDocumentType -->
### getDocumentsByDocumentType

**Summary**: Get documents by type

**Description**: Retrieves documents of a specific type across all entities.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | documentType |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsByType )

<!-- DOCGEN:END getDocumentsByDocumentType -->

<!-- DOCGEN:START getDocumentsForBusinessByDocumentType -->
### getDocumentsForBusinessByDocumentType

**Summary**: Get documents for a business by type

**Description**: Retrieves documents of a specific type associated with a business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | businessId |  |
| undefined | path | documentType |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForBusinessByType )

<!-- DOCGEN:END getDocumentsForBusinessByDocumentType -->

<!-- DOCGEN:START getDocumentsForUserByDocumentType -->
### getDocumentsForUserByDocumentType

**Summary**: Get documents for a user by type

**Description**: Retrieves documents of a specific type associated with a user.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_type |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForUserByDocumentType )

<!-- DOCGEN:END getDocumentsForUserByDocumentType -->

<!-- DOCGEN:START getDocumentsForDriverByDocumentType -->
### getDocumentsForDriverByDocumentType

**Summary**: Get documents for a driver by type

**Description**: Retrieves documents of a specific type associated with a driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driverId |  |
| undefined | path | documentType |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForDriverByType )

<!-- DOCGEN:END getDocumentsForDriverByDocumentType -->

<!-- DOCGEN:START getDocumentsForDeliveryPersonByDocumentType -->
### getDocumentsForDeliveryPersonByDocumentType

**Summary**: Get documents for a delivery person by type

**Description**: Retrieves documents of a specific type associated with a delivery person.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | deliveryPersonId |  |
| undefined | path | documentType |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForDeliveryPersonByType )

<!-- DOCGEN:END getDocumentsForDeliveryPersonByDocumentType -->

<!-- DOCGEN:START getDocumentsForVehicleByDocumentType -->
### getDocumentsForVehicleByDocumentType

**Summary**: Get documents for a vehicle by type

**Description**: Retrieves documents of a specific type associated with a vehicle.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicleId |  |
| undefined | path | documentType |  |

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/getDocumentsForVehicleByType )

<!-- DOCGEN:END getDocumentsForVehicleByDocumentType -->

<!-- DOCGEN:START createUserDocument -->
### createUserDocument

**Summary**: Create a document for a user

**Description**: Creates a new document and links it to a specific user.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | user_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createUserDocument )

<!-- DOCGEN:END createUserDocument -->

<!-- DOCGEN:START createBusinessDocument -->
### createBusinessDocument

**Summary**: Create a document for a business

**Description**: Creates a new document and links it to a specific business.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | business_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createBusinessDocument )

<!-- DOCGEN:END createBusinessDocument -->

<!-- DOCGEN:START createDriverDocument -->
### createDriverDocument

**Summary**: Create a document for a driver

**Description**: Creates a new document and links it to a specific driver.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | driver_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createDriverDocument )

<!-- DOCGEN:END createDriverDocument -->

<!-- DOCGEN:START createVehicleDocument -->
### createVehicleDocument

**Summary**: Create a document for a vehicle

**Description**: Creates a new document and links it to a specific vehicle.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | vehicle_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createVehicleDocument )

<!-- DOCGEN:END createVehicleDocument -->

<!-- DOCGEN:START createDeliveryPersonDocument -->
### createDeliveryPersonDocument

**Summary**: Create a document for a delivery person

**Description**: Creates a new document and links it to a specific delivery person.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | delivery_person_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 201
- 400

**Response Content:**

- ⚠️ Could not parse: `201.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/createDeliveryPersonDocument )

<!-- DOCGEN:END createDeliveryPersonDocument -->

<!-- DOCGEN:START updateDocumentExpirationDate -->
### updateDocumentExpirationDate

**Summary**: Update document's expiration date

**Description**: Updates the expiration date of a specific document.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDocumentExpirationDate )

<!-- DOCGEN:END updateDocumentExpirationDate -->

<!-- DOCGEN:START updateDocumentIssueDate -->
### updateDocumentIssueDate

**Summary**: Update document's issue date

**Description**: Updates the issue date of a specific document.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDocumentIssueDate )

<!-- DOCGEN:END updateDocumentIssueDate -->

<!-- DOCGEN:START updateDocumentFiles -->
### updateDocumentFiles

**Summary**: Update document's files

**Description**: Updates the files associated with a specific document.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDocumentFiles )

<!-- DOCGEN:END updateDocumentFiles -->

<!-- DOCGEN:START updateDocumentAdditionalInfo -->
### updateDocumentAdditionalInfo

**Summary**: Update document's additional info

**Description**: Updates the additional information of a specific document.

**Parameters:**

| Name | In | Type | Description |
|------|----|------|-------------|
| undefined | path | document_id |  |

**Request Body:** (required)
Type: `application/json`
Content-Type: `application/json`

**Responses:**
- 200
- 400

**Response Content:**

- ⚠️ Could not parse: `200.application/json`

🔗 [Swagger Operation](/swagger/openApiConfig.yaml#operation/updateDocumentAdditionalInfo )

<!-- DOCGEN:END updateDocumentAdditionalInfo -->
