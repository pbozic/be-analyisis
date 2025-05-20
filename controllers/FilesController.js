const FileDao = require('../dao/File');
const S3Helper = require('../lib/s3');

async function createFileHelper(owner_id, fileData) {
	const { file_type, mime_type } = fileData;
	const isPublic = fileData.public || false;
	const new_file = await FileDao.createFile(file_type, mime_type, isPublic);
	let key = S3Helper.getFileKey(new_file.file_id, new_file.mime_type);
	await S3Helper.SaveObject(
		key,
		fileData.base64,
		new_file.mime_type,
		{ users: [owner_id] },
		new_file,
		new_file.public
	);
	return new_file;
}
async function updateFileByIdHelper(updater_id, file_id, fileData) {
	const { file_type, mime_type } = fileData;
	const updated_file = await FileDao.updateFileById(file_id, file_type, mime_type);
	let key = S3Helper.getFileKey(updated_file.file_id, updated_file.mime_type);
	await S3Helper.SaveObject(
		key,
		fileData.base64,
		updated_file.mime_type,
		{ users: [updater_id] },
		updated_file,
		updated_file.public
	);
	return updated_file;
}

async function upsertFileOnS3Helper(user_id, file, new_file_type, new_mime_type, new_base64) {
	let key = S3Helper.getFileKey(file.file_id, new_mime_type);
	await S3Helper.SaveObject(key, new_base64, new_mime_type, { users: [user_id] }, file, file.public);
}

async function createFile(req, res) {
	try {
		const user_id = req.user.user_id;
		const { fileData } = req.body;
		const new_file = await createFileHelper(user_id, fileData);

		res.status(200).json({
			message: 'File created successfully',
			new_file,
		});
	} catch (error) {
		console.error('Error creating file:', error);
		res.status(500).json({
			error: 'Failed to create file',
			detail: error.message,
		});
	}
}

async function updateFileById(req, res) {
	try {
		const user_id = req.user.user_id;
		const { file_id, fileData } = req.body;

		const existingFile = await FileDao.getFile(file_id);
		if (!existingFile) {
			return res.status(404).json({
				error: 'File not found',
			});
		}

		const updated_file = updateFileByIdHelper(user_id, file_id, fileData);

		res.status(200).json({
			message: 'File updated successfully',
			updated_file,
		});
	} catch (error) {
		console.error('Error updating file:', error);
		res.status(500).json({
			error: 'Failed to update file',
			detail: error.message,
		});
	}
}

module.exports = {
	createFile,
	updateFileById,
	createFileHelper,
	updateFileByIdHelper,
	upsertFileOnS3Helper,
};
