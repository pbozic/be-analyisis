require("dotenv").config();
const DocumentDao = require("../dao/Document");

/**
 * GET /documents
 * @tag Documents
 * @summary Get all documents
 * @description Retrieves all documents in the system. Intended for admin usage.
 * @operationId getDocuments
 * @response 200 - Successful operation, returns all documents
 * @responseContent {Document[]} 200.application/json
 * @response 400 - Error retrieving documents
 */
async function listDocuments(req, res) {
	try {
		const documents = await DocumentDao.getDocuments();
		res.status(200).json(documents);
	} catch (error) {
		console.error("Error getting all documents:", error);
		res.status(400).json({ error: error.message });
	}
}

/**
 * GET /documents/:documentId
 * @tag Documents
 * @summary Get a document by ID
 * @description Retrieves a specific document by its ID. Useful for detailed document viewing.
 * @operationId getDocumentById
 * @pathParam {string} document_id - The ID of the document to retrieve
 * @response 200 - Successful operation, returns the document
 * @responseContent {Document} 200.application/json
 * @response 400 - Error retrieving the document
 */
async function getDocumentById(req, res) {
	try {
		const { document_id } = req.params;
		const document = await DocumentDao.getDocumentById(document_id);
		if (document) {
			res.status(200).json(document);
		} else {
			res.status(404).json({ message: "Document not found" });
		}
	} catch (error) {
		console.error("Error getting document by ID:", error);
		res.status(400).json({ error: error.message });
	}
}


/**
 * GET /documents/users/:userId
 * @tag Documents
 * @summary Get documents for a user
 * @description Retrieves all documents associated with a specific user.
 * @operationId getDocumentsForUser
 * @pathParam {string} userId - The ID of the user
 * @response 200 - Successful operation, returns documents
 * @responseContent {Document[]} 200.application/json
 * @response 400 - Error retrieving documents
 */
async function getDocumentsForUser(req, res) {
	try {
		const { user_id } = req.params;
		const documents = await DocumentDao.getDocumentsForUser(user_id);
		res.status(200).json(documents);
	} catch (error) {
		console.error("Error getting documents for user:", error);
		res.status(400).json({ error: error.message });
	}
}

/**
 * GET /documents/businesses/:businessId
 * @tag Documents
 * @summary Get documents for a business
 * @description Retrieves all documents associated with a specific business.
 * @operationId getDocumentsForBusiness
 * @pathParam {string} businessId - The ID of the business
 * @response 200 - Successful operation, returns documents
 * @responseContent {Document[]} 200.application/json
 * @response 400 - Error retrieving documents
 */
async function getDocumentsForBusiness(req, res) {
	try {
		const { business_id } = req.params;
		const documents = await DocumentDao.getDocumentsForBusiness(business_id);
		res.status(200).json(documents);
	} catch (error) {
		console.error("Error getting documents for business:", error);
		res.status(400).json({ error: error.message });
	}
}

/**
 * GET /documents/deliveryPersons/:deliveryPersonId
 * @tag Documents
 * @summary Get documents for a delivery person
 * @description Retrieves all documents associated with a specific delivery person.
 * @operationId getDocumentsForDeliveryPerson
 * @pathParam {string} deliveryPersonId - The ID of the delivery person
 * @response 200 - Successful operation, returns documents
 * @responseContent {Document[]} 200.application/json
 * @response 400 - Error retrieving documents
 */
async function getDocumentsForDeliveryPerson(req, res) {
	try {
		const { delivery_person_id } = req.params;
		const documents = await DocumentDao.getDocumentsForDeliveryPerson(delivery_person_id);
		res.status(200).json(documents);
	} catch (error) {
		console.error("Error getting documents for delivery person:", error);
		res.status(400).json({ error: error.message });
	}
}

/**
 * GET /documents/drivers/:driverId
 * @tag Documents
 * @summary Get documents for a driver
 * @description Retrieves all documents associated with a specific driver.
 * @operationId getDocumentsForDriver
 * @pathParam {string} driverId - The ID of the driver
 * @response 200 - Successful operation, returns documents
 * @responseContent {Document[]} 200.application/json
 * @response 400 - Error retrieving documents
 */
async function getDocumentsForDriver(req, res) {
	try {
		const { driver_id } = req.params;
		const documents = await DocumentDao.getDocumentsForDriver(driver_id);
		res.status(200).json(documents);
	} catch (error) {
		console.error("Error getting documents for driver:", error);
		res.status(400).json({ error: error.message });
	}
}

/**
 * GET /documents/vehicles/:vehicleId
 * @tag Documents
 * @summary Get documents for a vehicle
 * @description Retrieves all documents associated with a specific vehicle.
 * @operationId getDocumentsForVehicle
 * @pathParam {string} vehicleId - The ID of the vehicle
 * @response 200 - Successful operation, returns documents
 * @responseContent {Document[]} 200.application/json
 * @response 400 - Error retrieving documents
 */
async function getDocumentsForVehicle(req, res) {
	try {
		const { vehicle_id } = req.params;
		const documents = await DocumentDao.getDocumentsForVehicle(vehicle_id);
		res.status(200).json(documents);
	} catch (error) {
		console.error("Error getting documents for vehicle:", error);
		res.status(400).json({ error: error.message });
	}
}

/**
 * GET /documents/type/:documentType
 * @tag Documents
 * @summary Get documents by type
 * @description Retrieves documents of a specific type across all entities.
 * @operationId getDocumentsByType
 * @pathParam {string} documentType - The type of the documents to retrieve
 * @response 200 - Successful operation, returns documents
 * @responseContent {Document[]} 200.application/json
 * @response 400 - Error retrieving documents
 */
async function getDocumentsByDocumentType(req, res) {
	try {
		const { document_type } = req.params;
		const documents = await DocumentDao.getDocumentsByType(document_type);
		res.status(200).json(documents);
	} catch (error) {
		console.error("Error getting documents by type:", error);
		res.status(400).json({ error: "Error retrieving documents", detail: error.message });
	}
}

/**
 * GET /documents/business/:businessId/documents/type/:documentType
 * @tag Documents
 * @summary Get documents for a business by type
 * @description Retrieves documents of a specific type associated with a business.
 * @operationId getDocumentsForBusinessByType
 * @pathParam {string} businessId - The ID of the business
 * @pathParam {string} documentType - The type of the documents
 * @response 200 - Successful operation, returns documents
 * @responseContent {Document[]} 200.application/json
 * @response 400 - Error retrieving documents
 */
async function getDocumentsForBusinessByDocumentType(req, res) {
	try {
		const { business_id, document_type } = req.params;
		const documents = await DocumentDao.getDocumentsForBusinessByType(business_id, document_type);
		res.status(200).json(documents);
	} catch (error) {
		console.error("Error getting documents for business by type:", error);
		res.status(400).json({ error: "Error retrieving documents", detail: error.message });
	}
}

/**
 * GET /documents/user/type/:document_type
 * @tag Documents
 * @summary Get documents for a user by type
 * @description Retrieves documents of a specific type associated with a user.
 * @operationId getDocumentsForUserByDocumentType
 * @pathParam {string} document_type - The type of the documents
 * @response 200 - Successful operation, returns documents
 * @responseContent {Document[]} 200.application/json
 * @response 400 - Error retrieving documents
 */
async function getDocumentsForUserByDocumentType(req, res) {
	try {
		const { document_type } = req.params;
		const documents = await DocumentDao.getDocumentsForUserByType(req.user.user_id, document_type);
		res.status(200).json(documents);
	} catch (error) {
		console.error("Error getting documents for user by type:", error);
		res.status(400).json({ error: "Error retrieving documents", detail: error.message });
	}
}

/**
 * GET /documents/drivers/:driverId/documents/type/:documentType
 * @tag Documents
 * @summary Get documents for a driver by type
 * @description Retrieves documents of a specific type associated with a driver.
 * @operationId getDocumentsForDriverByType
 * @pathParam {string} driverId - The ID of the driver
 * @pathParam {string} documentType - The type of the documents
 * @response 200 - Successful operation, returns documents
 * @responseContent {Document[]} 200.application/json
 * @response 400 - Error retrieving documents
 */
async function getDocumentsForDriverByDocumentType(req, res) {
	try {
		const { driver_id, document_type } = req.params;
		const documents = await DocumentDao.getDocumentsForDriverByType(driver_id, document_type);
		res.status(200).json(documents);
	} catch (error) {
		console.error("Error getting documents for driver by type:", error);
		res.status(400).json({ error: "Error retrieving documents", detail: error.message });
	}
}

/**
 * GET /documents/deliveryPersons/:deliveryPersonId/documents/type/:documentType
 * @tag Documents
 * @summary Get documents for a delivery person by type
 * @description Retrieves documents of a specific type associated with a delivery person.
 * @operationId getDocumentsForDeliveryPersonByType
 * @pathParam {string} deliveryPersonId - The ID of the delivery person
 * @pathParam {string} documentType - The type of the documents
 * @response 200 - Successful operation, returns documents
 * @responseContent {Document[]} 200.application/json
 * @response 400 - Error retrieving documents
 */
async function getDocumentsForDeliveryPersonByDocumentType(req, res) {
	try {
		const { delivery_person_id, document_type } = req.params;
		const documents = await DocumentDao.getDocumentsForDeliveryPersonByType(delivery_person_id, document_type);
		res.status(200).json(documents);
	} catch (error) {
		console.error("Error getting documents for delivery person by type:", error);
		res.status(400).json({ error: "Error retrieving documents", detail: error.message });
	}
}

/**
 * GET /documents/vehicles/:vehicleId/documents/type/:documentType
 * @tag Documents
 * @summary Get documents for a vehicle by type
 * @description Retrieves documents of a specific type associated with a vehicle.
 * @operationId getDocumentsForVehicleByType
 * @pathParam {string} vehicleId - The ID of the vehicle
 * @pathParam {string} documentType - The type of the documents
 * @response 200 - Successful operation, returns documents
 * @responseContent {Document[]} 200.application/json
 * @response 400 - Error retrieving documents
 */
async function getDocumentsForVehicleByDocumentType(req, res) {
	try {
		const { vehicle_id, document_type } = req.params;
		const documents = await DocumentDao.getDocumentsForVehicleByType(vehicle_id, document_type);
		res.status(200).json(documents);
	} catch (error) {
		console.error("Error getting documents for vehicle by type:", error);
		res.status(400).json({ error: "Error retrieving documents", detail: error.message });
	}
}

/**
 * POST /documents/create/user/:user_id
 * @tag Documents
 * @summary Create a document for a user
 * @description Creates a new document and links it to a specific user.
 * @operationId createUserDocument
 * @pathParam {string} user_id - The ID of the user
 * @bodyContent {DocumentCreationRequest} application/json
 * @bodyRequired
 * @response 201 - Document created and linked successfully
 * @responseContent {Document} 201.application/json
 * @response 400 - Error creating or linking the document
 */
async function createUserDocument(req, res) {
	try {
		const { documentData, files } = req.body;
		const userId = req.params.user_id;
		const document = await DocumentDao.createDocument(documentData, files);
		if (!document) {
			return res.status(400).json({ error: "Error creating the document" });
		}
		await DocumentDao.linkDocumentToUser(document.document_id, userId);
		res.status(200).json(document);
	} catch (error) {
		res.status(400).json({ error: "Error creating user document or linking the document", detail: error.message });
	}
}

/**
 * POST /documents/create/business/:business_id
 * @tag Documents
 * @summary Create a document for a business
 * @description Creates a new document and links it to a specific business.
 * @operationId createBusinessDocument
 * @pathParam {string} business_id - The ID of the business
 * @bodyContent {DocumentCreationRequest} application/json
 * @bodyRequired
 * @response 201 - Document created and linked successfully
 * @responseContent {Document} 201.application/json
 * @response 400 - Error creating or linking the document
 */
async function createBusinessDocument(req, res) {
	try {
		const { documentData, files } = req.body;
		const businessId = req.params.business_id;
		const document = await DocumentDao.createDocument(documentData, files);
		if (!document) {
			return res.status(400).json({ error: "Error creating the document" });
		}
		await DocumentDao.linkDocumentToBusiness(document.document_id, businessId);
		res.status(200).json(document);
	} catch (error) {
		res.status(400).json({ error: "Error creating or linking the document", detail: error.message });
	}
}

/**
 * POST /documents/create/driver/:driver_id
 * @tag Documents
 * @summary Create a document for a driver
 * @description Creates a new document and links it to a specific driver.
 * @operationId createDriverDocument
 * @pathParam {string} driver_id - The ID of the driver
 * @bodyContent {DocumentCreationRequest} application/json
 * @bodyRequired
 * @response 201 - Document created and linked successfully
 * @responseContent {Document} 201.application/json
 * @response 400 - Error creating or linking the document
 */
async function createDriverDocument(req, res) {
	try {
		const { documentData, files } = req.body;
		const driverId = req.params.driver_id;
		const document = await DocumentDao.createDocument(documentData, files);
		if (!document) {
			return res.status(400).json({ error: "Error creating the document" });
		}
		await DocumentDao.linkDocumentToDriver(document.document_id, driverId);
		res.status(200).json(document);
	} catch (error) {
		res.status(400).json({ error: "Error creating or linking the document", detail: error.message });
	}
}

/**
 * POST /documents/create/vehicle/:vehicle_id
 * @tag Documents
 * @summary Create a document for a vehicle
 * @description Creates a new document and links it to a specific vehicle.
 * @operationId createVehicleDocument
 * @pathParam {string} vehicle_id - The ID of the vehicle
 * @bodyContent {DocumentCreationRequest} application/json
 * @bodyRequired
 * @response 201 - Document created and linked successfully
 * @responseContent {Document} 201.application/json
 * @response 400 - Error creating or linking the document
 */
async function createVehicleDocument(req, res) {
	try {
		const { documentData, files } = req.body;
		const vehicleId = req.params.vehicle_id;
		const document = await DocumentDao.createDocument(documentData, files);
		await DocumentDao.linkDocumentToVehicle(document.document_id, vehicleId);
		res.status(201).json(document);
	} catch (error) {
		console.error("Error creating document for vehicle:", error);
		res.status(400).json({ error: "Error creating vehicle document or linking the document", detail: error.message });
	}
}

/**
 * POST /documents/create/delivery_driver/:delivery_driver_id
 * @tag Documents
 * @summary Create a document for a delivery person
 * @description Creates a new document and links it to a specific delivery person.
 * @operationId createDeliveryPersonDocument
 * @pathParam {string} delivery_person_id - The ID of the delivery person
 * @bodyContent {DocumentCreationRequest} application/json
 * @bodyRequired
 * @response 201 - Document created and linked successfully
 * @responseContent {Document} 201.application/json
 * @response 400 - Error creating or linking the document
 */
async function createDeliveryPersonDocument(req, res) {
	try {
		const { documentData, files } = req.body;
		const deliveryPersonId = req.params.delivery_driver_id;
		const document = await DocumentDao.createDocument(documentData, files);
		if (!document) {
			return res.status(400).json({ error: "Error creating the document" });
		}
		await DocumentDao.linkDocumentToDeliveryDriver(document.document_id, deliveryPersonId);
		res.status(200).json(document);
	} catch (error) {
		res.status(400).json({ error: "Error creating delivery person document or linking the document", detail: error.message });
	}
}

/**
 * PATCH /documents/expirationDate
 * @tag Documents
 * @summary Update document's expiration date
 * @description Updates the expiration date of a specific document.
 * @operationId updateDocumentExpirationDate
 * @pathParam {string} document_id - The ID of the document to update
 * @bodyContent {UpdateExpirationDateRequest} application/json
 * @bodyRequired
 * @response 200 - Document expiration date updated successfully
 * @responseContent {Document} 200.application/json
 * @response 400 - Error updating document's expiration date
 */
async function updateDocumentExpirationDate(req, res) {
	try {
		const { document_id } = req.params;
		const { expirationDate } = req.body;
		const updatedDocument = await DocumentDao.updateDocumentExpirationDate(document_id, expirationDate);
		res.status(200).json(updatedDocument);
	} catch (error) {
		console.error("Error updating document's expiration date:", error);
		res.status(400).json({ error: "Error updating document's expiration date", detail: error.message });
	}
}

/**
 * PATCH /documents/issueDate
 * @tag Documents
 * @summary Update document's issue date
 * @description Updates the issue date of a specific document.
 * @operationId updateDocumentIssueDate
 * @pathParam {string} document_id - The ID of the document to update
 * @bodyContent {UpdateIssueDateRequest} application/json
 * @bodyRequired
 * @response 200 - Document issue date updated successfully
 * @responseContent {Document} 200.application/json
 * @response 400 - Error updating document's issue date
 */
async function updateDocumentIssueDate(req, res) {
	try {
		const { document_id } = req.params;
		const { issueDate } = req.body;
		const updatedDocument = await DocumentDao.updateDocumentIssueDate(document_id, issueDate);
		res.status(200).json(updatedDocument);
	} catch (error) {
		console.error("Error updating document's issue date:", error);
		res.status(400).json({ error: "Error updating document's issue date", detail: error.message });
	}
}

/**
 * PATCH /documents/files
 * @tag Documents
 * @summary Update document's files
 * @description Updates the files associated with a specific document.
 * @operationId updateDocumentFiles
 * @pathParam {string} document_id - The ID of the document to update
 * @bodyContent {UpdateFilesRequest} application/json
 * @bodyRequired
 * @response 200 - Document files updated successfully
 * @responseContent {Document} 200.application/json
 * @response 400 - Error updating document's files
 */
async function updateDocumentFiles(req, res) {
	try {
		const { document_id } = req.params;
		const { files } = req.body;
		const updatedDocument = await DocumentDao.updateDocumentFiles(document_id, files);
		res.status(200).json(updatedDocument);
	} catch (error) {
		console.error("Error updating document's files:", error);
		res.status(400).json({ error: "Error updating document's files", detail: error.message });
	}
}

/**
 * PATCH /documents/additionalInfo
 * @tag Documents
 * @summary Update document's additional info
 * @description Updates the additional information of a specific document.
 * @operationId updateDocumentAdditionalInfo
 * @pathParam {string} document_id - The ID of the document to update
 * @bodyContent {UpdateAdditionalInfoRequest} application/json
 * @bodyRequired
 * @response 200 - Document additional info updated successfully
 * @responseContent {Document} 200.application/json
 * @response 400 - Error updating document's additional info
 */
async function updateDocumentAdditionalInfo(req, res) {
	try {
		const { document_id } = req.params;
		const { jsonData } = req.body;
		const updatedDocument = await DocumentDao.updateDocumentAdditionalInfo(document_id, jsonData);
		res.status(200).json(updatedDocument);
	} catch (error) {
		console.error("Error updating document's additional info:", error);
		res.status(400).json({ error: "Error updating document's additional info", detail: error.message });
	}
}



module.exports = {
	listDocuments,
	getDocumentById,
	getDocumentsForUser,
	getDocumentsForVehicle,
	getDocumentsForDriver,
	getDocumentsForDeliveryPerson,
	getDocumentsForBusiness,
	getDocumentsByDocumentType,
	getDocumentsForBusinessByDocumentType,
	getDocumentsForDriverByDocumentType,
	getDocumentsForDeliveryPersonByDocumentType,
	getDocumentsForVehicleByDocumentType,
	getDocumentsForUserByDocumentType,
	createUserDocument,
	createBusinessDocument,
	createVehicleDocument,
	createDriverDocument,
	createDeliveryPersonDocument,
	updateDocumentExpirationDate,
	updateDocumentIssueDate,
	updateDocumentFiles,
	updateDocumentAdditionalInfo,
};