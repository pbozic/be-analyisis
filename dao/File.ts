import type { Prisma } from '@prisma/client';

import prisma from '../prisma/prisma.js';
import type { FileBase, FileResponse } from '../schemas/dto/Files/index.js';
import filesDefaultInclude from '../prisma/includes/files.js';
import type { FileWithIncludesPrisma } from '../prisma/includes/files.js';
import { toFileResponse, toFileList } from '../schemas/dto/Files/file.mappers.js';

// Use Prisma-provided arg types for better typing
type FindManyArgs = Prisma.filesFindManyArgs;
type FindUniqueArgs = Prisma.filesFindUniqueArgs;

/**
 * Create a single file and connect it to a document.
 *
 * @param {string} documentId - Document ID to connect the file to.
 * @param {Partial<FileBase>} fileData - File payload (url, mime_type, file_type, etc.).
 * @param {boolean} isPublic - Whether the file is public.
 * @returns {Promise<FileResponse>} Created file.
 */
const addFileToDocument = async (
	documentId: string,
	fileData: Partial<FileBase>,
	isPublic?: boolean
): Promise<FileResponse> => {
	const data = { ...fileData, public: isPublic || false };
	try {
		const created = await prisma.files.create({
			data: {
				...data,
				documents: {
					connect: {
						document_id: documentId,
					},
				},
			},
			include: filesDefaultInclude,
		});
		return toFileResponse(created as FileWithIncludesPrisma);
	} catch (error) {
		console.error('Error adding file to document:', error);
		throw new Error(error instanceof Error ? error.message : 'Failed to add file to document');
	}
};

/**
 * Create multiple files and connect them to a document.
 *
 * @param {string} documentId - Document ID to connect the files to.
 * @param {Partial<FileBase>|Partial<FileBase>[]} filesData - Single file payload or array of file payloads.
 * @returns {Promise<FileResponse[]>} Created files.
 */
const addFilesToDocument = async (
	documentId: string,
	filesData: Partial<FileBase> | Partial<FileBase>[]
): Promise<FileResponse[]> => {
	try {
		// Ensure filesData is treated as an array
		const filesArray = Array.isArray(filesData) ? filesData : [filesData];
		// Create files
		const created = await Promise.all(
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
					include: filesDefaultInclude,
				});
			})
		);
		return toFileList(created as FileWithIncludesPrisma[]);
	} catch (error) {
		console.error('Error adding files to document:', error);
		throw new Error(error instanceof Error ? error.message : 'Failed to add files to document');
	}
};

/**
 * Update a single file by id and optionally set public flag.
 *
 * @param {string} fileId - File ID.
 * @param {Partial<FileBase>} updateData - Fields to update.
 * @param {boolean} isPublic - Whether the file is public.
 * @returns {Promise<FileResponse>} Updated file.
 */
const updateFileInDocument = async (
	fileId: string,
	updateData: Partial<FileBase>,
	isPublic?: boolean
): Promise<FileResponse> => {
	const data = { ...updateData, public: isPublic || false };
	try {
		const updated = await prisma.files.update({ where: { file_id: fileId }, data, include: filesDefaultInclude });
		return toFileResponse(updated as FileWithIncludesPrisma);
	} catch (error) {
		console.error('Error updating file in document:', error);
		throw new Error(error instanceof Error ? error.message : 'Failed to update file in document');
	}
};

/**
 * Disconnect a file from its document and delete it.
 *
 * @param {string} fileId - File ID.
 * @returns {Promise<FileResponse>} Deleted file.
 */
const removeFileFromDocument = async (fileId: string): Promise<FileResponse> => {
	try {
		// First, disconnect the file from the document
		await prisma.files.update({ where: { file_id: fileId }, data: { documents: { disconnect: true } } });
		// Then, delete the file
		const deleted = await prisma.files.delete({ where: { file_id: fileId }, include: filesDefaultInclude });
		return toFileResponse(deleted as FileWithIncludesPrisma);
	} catch (error) {
		console.error('Error removing file from document:', error);
		throw new Error(error instanceof Error ? error.message : 'Failed to remove file from document');
	}
};

/**
 * Remove all files linked to a document (disconnect and delete).
 *
 * @param {string} documentId - Document ID.
 * @returns {Promise<{ count: number }>} Result of deleteMany.
 */
const removeAllFilesFromDocument = async (documentId: string): Promise<{ count: number }> => {
	try {
		await prisma.files.updateMany({ where: { document_id: documentId }, data: { document_id: null } });
		return await prisma.files.deleteMany({ where: { document_id: documentId } });
	} catch (error) {
		console.error('Error removing all files from document:', error);
		throw new Error(error instanceof Error ? error.message : 'Failed to remove all files from document');
	}
};

/**
 * Get all files for a document.
 *
 * @param {string} document_id - Document ID.
 * @param {FindManyArgs} args - Additional query args.
 * @returns {Promise<FileResponse[]>} Files.
 */
const getFilesByDocumentId = async (document_id: string, args?: FindManyArgs): Promise<FileResponse[]> => {
	try {
		const rows = await prisma.files.findMany({ where: { document_id: document_id }, ...(args as FindManyArgs) });
		return toFileList(rows as FileWithIncludesPrisma[]);
	} catch (error) {
		console.error('Error getting files by document ID:', error);
		throw new Error(error instanceof Error ? error.message : 'Failed to get files by document ID');
	}
};

/**
 * Create a standalone file row (not linked to a document).
 *
 * @param {string} file_type - Application file type enum.
 * @param {string} mime_type - MIME type.
 * @param {boolean} [isPublic=false] - Whether the file is public.
 * @returns {Promise<FileResponse>} Created file.
 */
const createFile = async (file_type: string, mime_type: string, isPublic: boolean = false): Promise<FileResponse> => {
	try {
		const created = await prisma.files.create({
			data: { file_type, public: isPublic, mime_type },
			include: filesDefaultInclude,
		});
		return toFileResponse(created as FileWithIncludesPrisma);
	} catch (error) {
		console.error('Error creating file:', error);
		throw new Error(error instanceof Error ? error.message : 'Failed to create file');
	}
};

/**
 * Get a single file by ID.
 *
 * @param {string} file_id - File ID.
 * @param {FindUniqueArgs} args - Additional query args.
 * @returns {Promise<FileResponse | null>} File or null.
 */
const getFile = async (file_id: string, args?: FindUniqueArgs): Promise<FileResponse | null> => {
	try {
		// Merge provided args with a default include so mappers receive the expected relations.
		// Ensure 'where' is specified only once: start from args, add include, then set/merge the where
		const mergedArgs: FindUniqueArgs = { ...(args as FindUniqueArgs), include: filesDefaultInclude };
		// Merge any provided where with the file_id, letting file_id take precedence
		mergedArgs.where = { ...((mergedArgs.where as object) || {}), file_id } as any;
		const row = await prisma.files.findUnique(mergedArgs);
		if (!row) return null;
		return toFileResponse(row as FileWithIncludesPrisma);
	} catch (error) {
		console.error('Error getting file:', error);
		throw new Error(error instanceof Error ? error.message : 'Failed to get file');
	}
};

/**
 * Update file metadata by ID.
 *
 * @param {string} file_id - File ID.
 * @param {string} file_type - Application file type.
 * @param {string} mime_type - MIME type.
 * @param {string} url - File URL.
 * @returns {Promise<FileResponse>} Updated file.
 */
const updateFileById = async (
	file_id: string,
	file_type?: string,
	mime_type?: string,
	url?: string
): Promise<FileResponse> => {
	try {
		const data: Record<string, unknown> = {};
		if (file_type !== undefined) data.file_type = file_type;
		if (mime_type !== undefined) data.mime_type = mime_type;
		if (url !== undefined) data.url = url;

		const updated = await prisma.files.update({
			where: { file_id: file_id },
			data: data as any,
			include: filesDefaultInclude,
		});
		return toFileResponse(updated as FileWithIncludesPrisma);
	} catch (error) {
		console.error('Error updating file by id:', error);
		throw new Error(error instanceof Error ? error.message : 'Failed to update file by ID');
	}
};

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
