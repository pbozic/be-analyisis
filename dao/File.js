const prisma = require("../prisma/prisma");
const addFileToDocument = async (documentId, fileData) => { 
	try {
		return await prisma.files.create({
			data: {
				...fileData,
				documents: {
					connect: {
						document_id: documentId
					}
				}
			}
		});
	} catch (error) {
		console.error("Error adding file to document:", error);
		return new Error(error);
	}

}
const addFilesToDocument = async (documentId, filesData) => {
	try {
		// Ensure filesData is treated as an array
		const filesArray = Array.isArray(filesData) ? filesData : [filesData];

		// Create files
		return await Promise.all(filesArray.map(async (file) => {
			return await prisma.files.create({
				data: {
					...file,
					documents: {
						connect: {
							document_id: documentId
						}
					}
				}
			});
		}));
	} catch (error) {
		console.error("Error adding files to document:", error);
		throw new Error(error);
	}
};

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

const removeFileFromDocument = async (fileId) => {
	try {
		// First, disconnect the file from the document
		await prisma.files.update({
			where: { file_id: fileId },
			data: {
				documents: {
					disconnect: true
				}
			}
		});

		// Then, delete the file
		return await prisma.files.delete({
			where: { file_id: fileId },
		});
	} catch (error) {
		console.error("Error removing file from document:", error);
		throw new Error(error);
	}
};

// Remove all files from a document
const removeAllFilesFromDocument = async (documentId) => {
	try {
		await prisma.files.updateMany({
			where: { document_id: documentId },
			data: {
				document_id: null
			}
		});

		return await prisma.files.deleteMany({
			where: { document_id: documentId },
		});
	} catch (error) {
		console.error("Error removing all files from document:", error);
		throw new Error(error);
	}
};


module.exports = {
	addFileToDocument,
	addFilesToDocument,
	updateFileInDocument,
	removeFileFromDocument,
	removeAllFilesFromDocument,
};