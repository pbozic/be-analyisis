const prisma = require("../prisma/prisma");

// Function to add new file(s) to a specific document
const addFilesToDocument = async (documentId, filesData) => {
	try {
		// Ensure filesData is treated as an array
		const filesArray = Array.isArray(filesData) ? filesData : [filesData];

		// Create files
		return await prisma.files.createMany({
			data: filesArray.map(file => ({
				...file,
				document_id: documentId // Ensure each file is associated with the documentId
			})),
			skipDuplicates: true, // Optional: Skip duplicates if necessary
		});
	} catch (error) {
		console.error("Error adding files to document:", error);
		return new Error(error);
	}
};

// Update a specific file under a document
const updateFileInDocument = async (fileId, updateData) => {
	try {
		return await prisma.files.update({
			where: { file_id: fileId },
			data: updateData,
		});
	} catch (error) {
		console.error("Error updating file in document:", error);
		return new Error(error);
	}
};

// Remove a specific file from a document by file ID
const removeFileFromDocument = async (fileId) => {
	try {
		return await prisma.files.delete({
			where: { file_id: fileId },
		});
	} catch (error) {
		console.error("Error removing file from document:", error);
		return new Error(error);
	}
};

// Remove all files from a document
const removeAllFilesFromDocument = async (documentId) => {
	try {
		return await prisma.files.deleteMany({
			where: { document_id: documentId },
		});
	} catch (error) {
		console.error("Error removing all files from document:", error);
		return new Error(error);
	}
};

module.exports = {
	addFilesToDocument,
	updateFileInDocument,
	removeFileFromDocument,
	removeAllFilesFromDocument,
};