# Document DAO

<!-- DOCGEN:START getDocuments -->
### getDocuments

**Description**: Get all documents with their files.

**Returns**: {Promise<object[]>} - Array of documents.

<!-- DOCGEN:END getDocuments -->

<!-- DOCGEN:START getDocumentById -->
### getDocumentById

**Description**: Get a document by ID with files included.

**Parameters**:
- documentId: {string} - Document ID.

**Returns**: {Promise<object|null>} - Document or null.

<!-- DOCGEN:END getDocumentById -->

<!-- DOCGEN:START getDocumentsForBusiness -->
### getDocumentsForBusiness

**Description**: Get documents linked to a business.

**Parameters**:
- businessId: {string} - Business ID.

**Returns**: {Promise<object[]>} - Array of documents.

<!-- DOCGEN:END getDocumentsForBusiness -->

<!-- DOCGEN:START getDocumentsForDeliveryPerson -->
### getDocumentsForDeliveryPerson

**Description**: Get documents linked to a delivery person.

**Parameters**:
- deliveryPersonId: {string} - Delivery person ID.

**Returns**: {Promise<object[]>} - Array of documents.

<!-- DOCGEN:END getDocumentsForDeliveryPerson -->

<!-- DOCGEN:START getDocumentsForDriver -->
### getDocumentsForDriver

**Description**: Get documents linked to a driver.

**Parameters**:
- driverId: {string} - Driver ID.

**Returns**: {Promise<object[]>} - Array of documents.

<!-- DOCGEN:END getDocumentsForDriver -->

<!-- DOCGEN:START getDocumentsForUser -->
### getDocumentsForUser

**Description**: Get documents linked to a user.

**Parameters**:
- userId: {string} - User ID.

**Returns**: {Promise<object[]>} - Array of documents.

<!-- DOCGEN:END getDocumentsForUser -->

<!-- DOCGEN:START getDocumentsForVehicle -->
### getDocumentsForVehicle

**Description**: Get documents linked to a vehicle.

**Parameters**:
- vehicleId: {string} - Vehicle ID.

**Returns**: {Promise<object[]>} - Array of documents.

<!-- DOCGEN:END getDocumentsForVehicle -->

<!-- DOCGEN:START getDocumentsByType -->
### getDocumentsByType

**Description**: Get documents by document type.

**Parameters**:
- documentType: {string} - Document type.

**Returns**: {Promise<object[]>} - Array of documents.

<!-- DOCGEN:END getDocumentsByType -->

<!-- DOCGEN:START getDocumentsForUserByType -->
### getDocumentsForUserByType

**Description**: Get documents for a user filtered by type.

**Parameters**:
- userId: {string} - User ID.
- documentType: {string} - Document type.

**Returns**: {Promise<object[]>} - Array of documents.

<!-- DOCGEN:END getDocumentsForUserByType -->

<!-- DOCGEN:START getDocumentsForBusinessByType -->
### getDocumentsForBusinessByType

**Description**: Get documents for a business filtered by type.

**Parameters**:
- businessId: {string} - Business ID.
- documentType: {string} - Document type.

**Returns**: {Promise<object[]>} - Array of documents.

<!-- DOCGEN:END getDocumentsForBusinessByType -->

<!-- DOCGEN:START getDocumentsForDriverByType -->
### getDocumentsForDriverByType

**Description**: Get documents for a driver filtered by type.

**Parameters**:
- driverId: {string} - Driver ID.
- documentType: {string} - Document type.

**Returns**: {Promise<object[]>} - Array of documents.

<!-- DOCGEN:END getDocumentsForDriverByType -->

<!-- DOCGEN:START getDocumentsForDeliveryPersonByType -->
### getDocumentsForDeliveryPersonByType

**Description**: Get documents for a delivery person filtered by type.

**Parameters**:
- deliveryPersonId: {string} - Delivery person ID.
- documentType: {string} - Document type.

**Returns**: {Promise<object[]>} - Array of documents.

<!-- DOCGEN:END getDocumentsForDeliveryPersonByType -->

<!-- DOCGEN:START getDocumentsForVehicleByType -->
### getDocumentsForVehicleByType

**Description**: Get documents for a vehicle filtered by type.

**Parameters**:
- vehicleId: {string} - Vehicle ID.
- documentType: {string} - Document type.

**Returns**: {Promise<object[]>} - Array of documents.

<!-- DOCGEN:END getDocumentsForVehicleByType -->

<!-- DOCGEN:START findDocumentByTypeAndDeliveryDriverId -->
### findDocumentByTypeAndDeliveryDriverId

**Description**: Find a single document by type and delivery driver ID.

**Parameters**:
- documentType: {string} - Document type.
- deliveryDriverId: {string} - Delivery driver ID.

**Returns**: {Promise<object|null>} - Document or null.

<!-- DOCGEN:END findDocumentByTypeAndDeliveryDriverId -->

<!-- DOCGEN:START findDocumentByTypeAndDriverId -->
### findDocumentByTypeAndDriverId

**Description**: Find a single document by type and driver ID.

**Parameters**:
- documentType: {string} - Document type.
- driverId: {string} - Driver ID.

**Returns**: {Promise<object|null>} - Document or null.

<!-- DOCGEN:END findDocumentByTypeAndDriverId -->

<!-- DOCGEN:START createDocument -->
### createDocument

**Description**: Create a document (sets public=true for selected types) with optional files.

**Parameters**:
- documentData: {object} - Document payload.
- filesData?: {object[]} - Files to create for the document.

**Returns**: {Promise<object>} - Created document with files.

<!-- DOCGEN:END createDocument -->

<!-- DOCGEN:START updateDocumentExpirationDate -->
### updateDocumentExpirationDate

**Description**: Update a document's expiration_date.

**Parameters**:
- documentId: {string} - Document ID.
- expirationDate: {string|Date} - New expiration date.

**Returns**: {Promise<object>} - Updated document.

<!-- DOCGEN:END updateDocumentExpirationDate -->

<!-- DOCGEN:START updateDocumentIssueDate -->
### updateDocumentIssueDate

**Description**: Update a document's issue_date.

**Parameters**:
- documentId: {string} - Document ID.
- issueDate: {string|Date} - Issue date.

**Returns**: {Promise<object>} - Updated document.

<!-- DOCGEN:END updateDocumentIssueDate -->

<!-- DOCGEN:START updateDocumentFiles -->
### updateDocumentFiles

**Description**: Replace a document's files with new ones.

**Parameters**:
- documentId: {string} - Document ID.
- filesData: {object[]} - New files to create.

**Returns**: {Promise<object>} - Updated document with files.

<!-- DOCGEN:END updateDocumentFiles -->

<!-- DOCGEN:START updateDocumentAdditionalInfo -->
### updateDocumentAdditionalInfo

**Description**: Update a document's additional_info JSON field.

**Parameters**:
- documentId: {string} - Document ID.
- jsonData: {object} - JSON payload.

**Returns**: {Promise<object>} - Updated document.

<!-- DOCGEN:END updateDocumentAdditionalInfo -->

<!-- DOCGEN:START linkDocumentToUser -->
### linkDocumentToUser

**Description**: Link a document to a user.

**Parameters**:
- documentId: {string} - Document ID.
- userId: {string} - User ID.

**Returns**: {Promise<object>} - Updated document.

<!-- DOCGEN:END linkDocumentToUser -->

<!-- DOCGEN:START linkDocumentToTransaction -->
### linkDocumentToTransaction

**Description**: Link a document to a transaction.

**Parameters**:
- documentId: {string} - Document ID.
- transactionId: {string} - Transaction ID.

**Returns**: {Promise<object>} - Updated document.

<!-- DOCGEN:END linkDocumentToTransaction -->

<!-- DOCGEN:START linkDocumentToVehicle -->
### linkDocumentToVehicle

**Description**: Link a document to a vehicle.

**Parameters**:
- documentId: {string} - Document ID.
- vehicleId: {string} - Vehicle ID.

**Returns**: {Promise<object>} - Updated document.

<!-- DOCGEN:END linkDocumentToVehicle -->

<!-- DOCGEN:START linkDocumentToMenuItem -->
### linkDocumentToMenuItem

**Description**: Link a document to a menu item.

**Parameters**:
- documentId: {string} - Document ID.
- menuItemId: {string} - Menu item ID.

**Returns**: {Promise<object>} - Updated document.

<!-- DOCGEN:END linkDocumentToMenuItem -->

<!-- DOCGEN:START linkDocumentToLostItem -->
### linkDocumentToLostItem

**Description**: Link a document to a lost item.

**Parameters**:
- documentId: {string} - Document ID.
- lostItemId: {string} - Lost item ID.

**Returns**: {Promise<object>} - Updated document.

<!-- DOCGEN:END linkDocumentToLostItem -->

<!-- DOCGEN:START linkDocumentToDriver -->
### linkDocumentToDriver

**Description**: Link a document to a driver.

**Parameters**:
- documentId: {string} - Document ID.
- driverId: {string} - Driver ID.

**Returns**: {Promise<object>} - Updated document.

<!-- DOCGEN:END linkDocumentToDriver -->

<!-- DOCGEN:START linkDocumentToBusiness -->
### linkDocumentToBusiness

**Description**: Link a document to a business.

**Parameters**:
- documentId: {string} - Document ID.
- businessId: {string} - Business ID.

**Returns**: {Promise<object>} - Updated document.

<!-- DOCGEN:END linkDocumentToBusiness -->

<!-- DOCGEN:START linkDocumentToDeliveryDriver -->
### linkDocumentToDeliveryDriver

**Description**: Link a document to a delivery driver.

**Parameters**:
- documentId: {string} - Document ID.
- deliveryDriverId: {string} - Delivery driver ID.

**Returns**: {Promise<object>} - Updated document.

<!-- DOCGEN:END linkDocumentToDeliveryDriver -->

<!-- DOCGEN:START deleteDocument -->
### deleteDocument

**Description**: Delete a document and all its files by document ID.

**Parameters**:
- documentId: {string} - Document ID.

**Returns**: {Promise<void>} - Resolves when deletion completes.

<!-- DOCGEN:END deleteDocument -->

<!-- DOCGEN:START deleteDocumentsAndFiles -->
### deleteDocumentsAndFiles

**Description**: Delete all documents and files linked via a specific field and id.

**Parameters**:
- field: {string} - Field name on documents (e.g., 'user_id').
- id: {string} - The identifier value to match.

**Returns**: {Promise<void>} - Resolves when deletion completes.

<!-- DOCGEN:END deleteDocumentsAndFiles -->

<!-- DOCGEN:START deleteDocumentsAndFilesByDocumentId -->
### deleteDocumentsAndFilesByDocumentId

**Description**: Delete all documents and files by exact document_id and document_type.

**Parameters**:
- documentType: {string} - Document type.
- documentId: {string} - Document ID.

**Returns**: {Promise<void>} - Resolves when deletion completes.

<!-- DOCGEN:END deleteDocumentsAndFilesByDocumentId -->

<!-- DOCGEN:START getLastDocumentByTypeAndBusinessId -->
### getLastDocumentByTypeAndBusinessId

**Description**: Get the most recently created document of a given type for a business.

**Parameters**:
- type: {string} - Document type.
- business_id: {string} - Business ID.

**Returns**: {Promise<object|null>} - Latest matching document or null.

<!-- DOCGEN:END getLastDocumentByTypeAndBusinessId -->

<!-- DOCGEN:START updateDocumentByDocumentId -->
### updateDocumentByDocumentId

**Description**: Update a document's fields by document_id.

**Parameters**:
- documentId: {string} - Document ID.
- updateData: {object} - Fields to update.

**Returns**: {Promise<object>} - Updated document.

<!-- DOCGEN:END updateDocumentByDocumentId -->

