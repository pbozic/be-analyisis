const prisma = require("../prisma/prisma");

const getDocumentsForBusiness = async (businessId) => {
	return await prisma.documents.findMany({
		where: { business_id: businessId },
		include: {
			files: true, // Include related files if needed
		},
	});
};

const getDocumentsForDeliveryPerson = async (deliveryPersonId) => {
	return await prisma.documents.findMany({
		where: { delivery_person_id: deliveryPersonId },
		include: {
			files: true, // Include related files if needed
		},
	});
};

const getDocumentsForDriver = async (driverId) => {
	return await prisma.documents.findMany({
		where: { driver_id: driverId },
		include: {
			files: true, // Include related files if needed
		},
	});
};

const getDocumentsForVehicle = async (vehicleId) => {
	return await prisma.documents.findMany({
		where: { vehicle_id: vehicleId },
		include: {
			files: true, // Include related files if needed
		},
	});
};

// Create a new document with associated files
const createDocument = async (documentData, filesData) => {
	return await prisma.documents.create({
		data: {
			...documentData,
			files: {
				create: filesData,
			},
		},
		include: {
			files: true,
		},
	});
};

// Retrieve a document by ID, including its files
const getDocumentById = async (documentId) => {
	return await prisma.documents.findUnique({
		where: { document_id: documentId },
		include: {
			files: true,
		},
	});
};

// Delete a document
const deleteDocument = async (documentId) => {
	return await prisma.documents.delete({
		where: { document_id: documentId },
	});
};

// Update document's expiration date
const updateDocumentExpirationDate = async (documentId, expirationDate) => {
	return await prisma.documents.update({
		where: { document_id: documentId },
		data: {
			expiration_date: expirationDate,
		},
	});
};

// Update document's issue date
const updateDocumentIssueDate = async (documentId, issueDate) => {
	return await prisma.documents.update({
		where: { document_id: documentId },
		data: {
			issue_date: issueDate,
		},
	});
};


// Update document's files
const updateDocumentFiles = async (documentId, filesData) => {
	return await prisma.documents.update({
		where: { document_id: documentId },
		data: {
			files: {
				deleteMany: [{ document_id: documentId }], // Deletes all files associated with the document
				create: filesData, // Creates new file entries
			},
		},
		include: {
			files: true,
		},
	});
};

const updateDocumentAdditionalInfo = async (documentId, jsonData) => {
	return await prisma.documents.update({
		where: { document_id: documentId },
		data: { additional_info: jsonData },
	});
};

const getDocumentsForUser = async (userId) => {
	return await prisma.documents.findMany({
		where: { user_id: userId },
		include: {
			files: true, // Include related files if needed
		},
	});
};

module.exports = {
	createDocument,
	getDocumentById,
	deleteDocument,
	updateDocumentFiles,
	updateDocumentExpirationDate,
	updateDocumentIssueDate,
	getDocumentsForUser,
	getDocumentsForBusiness,
	getDocumentsForDeliveryPerson,
	getDocumentsForDriver,
	getDocumentsForVehicle,
	updateDocumentAdditionalInfo
};