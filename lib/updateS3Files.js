import FileDao from '../dao/File.js';
import prisma from '../prisma/prisma.js';
import { GetObject, getFileKey } from './s3.js';
/**
 * Refresh public file URLs from S3 for all public files in the database.
 * Iterates files, generates URL via GetObject and updates file records.
 * @returns {Promise<void>}
 */
const updateS3Files = async () => {
	const files = await prisma.files.findMany();
	for (const file of files) {
		if (file.public) {
			const key = getFileKey(file.file_id, file.mime_type);
			let url = await GetObject(key, file.public);
			await FileDao.updateFileById(file.file_id, file.file_type, file.mime_type, url);
		}
	}
};
updateS3Files();
