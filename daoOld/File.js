import prisma from '../prisma/prisma.js';
/**
 * Create a single file and connect it to a document.
 *
 * @param {string} documentId - Document ID to connect the file to.
 * @param {object} fileData - File payload (url, mime_type, file_type, etc.).
 * @param {boolean} isPublic - Whether the file is public.
 * @returns {Promise<object>} Created file.
 */
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
/**
 * Create multiple files and connect them to a document.
 *
 * @param {string} documentId - Document ID to connect the files to.
 * @param {object|object[]} filesData - Single file payload or array of file payloads.
 * @returns {Promise<object[]>} Created files.
 */
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
/**
 * Update a single file by id and optionally set public flag.
 *
 * @param {string} fileId - File ID.
 * @param {object} updateData - Fields to update.
 * @param {boolean} isPublic - Whether the file is public.
 * @returns {Promise<object>} Updated file.
 */
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
/**
 * Disconnect a file from its document and delete it.
 *
 * @param {string} fileId - File ID.
 * @returns {Promise<object>} Deleted file.
 */
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
/**
 * Remove all files linked to a document (disconnect and delete).
 *
 * @param {string} documentId - Document ID.
 * @returns {Promise<object>} Result of deleteMany.
 */
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
/**
 * Get all files for a document.
 *
 * @param {string} document_id - Document ID.
 * @returns {Promise<object[]>} Files.
 */
async function getFilesByDocumentId(document_id) {
	return await prisma.files.findMany({
		where: {
			document_id: document_id,
		},
	});
}
/**
 * Create a standalone file row (not linked to a document).
 *
 * @param {string} file_type - Application file type enum.
 * @param {string} mime_type - MIME type.
 * @param {boolean} [isPublic=false] - Whether the file is public.
 * @returns {Promise<object>} Created file.
 */
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
/**
 * Get a single file by ID.
 *
 * @param {string} file_id - File ID.
 * @returns {Promise<object|null>} File or null.
 */
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
/**
 * Update file metadata by ID.
 *
 * @param {string} file_id - File ID.
 * @param {string} file_type - Application file type.
 * @param {string} mime_type - MIME type.
 * @param {string} url - File URL.
 * @returns {Promise<object>} Updated file.
 */
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
