const prisma = require("../prisma/prisma");

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

module.exports = {
	createDocument,
	getDocumentById,
	deleteDocument,
	updateDocumentFiles,
	updateDocumentExpirationDate,
	updateDocumentIssueDate,
};