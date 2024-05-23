const prisma = require("../prisma/prisma");

// Function to add new file(s) to a specific document
const addFilesToDocument = async (documentId, filesData) => {
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
};

// Update a specific file under a document
const updateFileInDocument = async (fileId, updateData) => {
	return await prisma.files.update({
		where: { file_id: fileId },
		data: updateData,
	});
};

// Remove a specific file from a document by file ID
const removeFileFromDocument = async (fileId) => {
	return await prisma.files.delete({
		where: { file_id: fileId },
	});
};

// Remove all files from a document
const removeAllFilesFromDocument = async (documentId) => {
	return await prisma.files.deleteMany({
		where: { document_id: documentId },
	});
};

module.exports = {
	addFilesToDocument,
	updateFileInDocument,
	removeFileFromDocument,
	removeAllFilesFromDocument,
};