import prisma from '../prisma/prisma.js';
const addFileToDocument = async (documentId, fileData, isPublic) => {
	fileData.public = isPublic || false;
	try {
		return await prisma.files.create({
			data: {
				...fileData,
				documents: {
					connect: {
						document_id: documentId,
					},
				},
			},
		});
	} catch (error) {
		console.error('Error adding file to document:', error);
		return new Error(error);
	}
};
const addFilesToDocument = async (documentId, filesData) => {
	try {
		// Ensure filesData is treated as an array
		const filesArray = Array.isArray(filesData) ? filesData : [filesData];
		// Create files
		return await Promise.all(
			filesArray.map(async (file) => {
				return await prisma.files.create({
					data: {
						...file,
						documents: {
							connect: {
								document_id: documentId,
							},
						},
					},
				});
			})
		);
	} catch (error) {
		console.error('Error adding files to document:', error);
		throw new Error(error);
	}
};
const updateFileInDocument = async (fileId, updateData, isPublic) => {
	updateData.public = isPublic || false;
	try {
		return await prisma.files.update({
			where: { file_id: fileId },
			data: updateData,
		});
	} catch (error) {
		console.error('Error updating file in document:', error);
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
					disconnect: true,
				},
			},
		});
		// Then, delete the file
		return await prisma.files.delete({
			where: { file_id: fileId },
		});
	} catch (error) {
		console.error('Error removing file from document:', error);
		throw new Error(error);
	}
};
// Remove all files from a document
const removeAllFilesFromDocument = async (documentId) => {
	try {
		await prisma.files.updateMany({
			where: { document_id: documentId },
			data: {
				document_id: null,
			},
		});
		return await prisma.files.deleteMany({
			where: { document_id: documentId },
		});
	} catch (error) {
		console.error('Error removing all files from document:', error);
		throw new Error(error);
	}
};
async function getFilesByDocumentId(document_id) {
	return await prisma.files.findMany({
		where: {
			document_id: document_id,
		},
	});
}
async function createFile(file_type, mime_type, isPublic = false) {
	try {
		return await prisma.files.create({
			data: {
				file_type,
				public: isPublic,
				mime_type,
			},
		});
	} catch (error) {
		console.error('Error creating file:', error);
		throw new Error(error);
	}
}
async function getFile(file_id) {
	try {
		return await prisma.files.findUnique({
			where: {
				file_id: file_id,
			},
		});
	} catch (error) {
		console.error('Error getting file:', error);
		throw new Error(error);
	}
}
async function updateFileById(file_id, file_type, mime_type, url) {
	try {
		return await prisma.files.update({
			where: {
				file_id: file_id,
			},
			data: {
				file_type,
				mime_type,
				url,
			},
		});
	} catch (error) {
		console.error('Error updating file by id:', error);
		throw new Error(error);
	}
}
export { addFileToDocument };
export { addFilesToDocument };
export { updateFileInDocument };
export { removeFileFromDocument };
export { removeAllFilesFromDocument };
export { getFilesByDocumentId };
export { createFile };
export { updateFileById };
export { getFile };
export default {
	addFileToDocument,
	addFilesToDocument,
	updateFileInDocument,
	removeFileFromDocument,
	removeAllFilesFromDocument,
	getFilesByDocumentId,
	createFile,
	updateFileById,
	getFile,
};
