import { Buffer } from 'node:buffer';
import process from 'node:process';
import { Readable } from 'stream';

import { config } from 'dotenv';
import {
	S3,
	PutObjectCommand,
	GetObjectCommand,
	HeadObjectCommand,
	GetObjectAclCommand,
	PutObjectAclCommand,
	DeleteObjectCommand,
	type PutObjectCommandOutput,
	type DeleteObjectCommandOutput,
} from '@aws-sdk/client-s3';
import mime from 'mime-types';
import s3RequestPresigner from '@aws-sdk/s3-request-presigner';
import { FILE_TYPE } from '@prisma/client';

import FileDao from '../dao/File.js';
import prisma from '../prisma/prisma.js';

config();

const { getSignedUrl } = s3RequestPresigner;

const AWS_BUCKET = process.env.AWS_BUCKET as string;
const AWS_ENDPOINT = process.env.AWS_ENDPOINT as string;

const s3 = new S3({
	endpoint: process.env.AWS_ENDPOINT,
	credentials: {
		accessKeyId: process.env.AWS_ACCESS_KEY_ID as string,
		secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY as string,
	},
	region: 'global',
});

/**
 * Build an S3 object key with extension inferred from mime type.
 *
 * @param {string} key - Base key (typically file_id).
 * @param {string} mimeType - MIME type to infer file extension from.
 * @returns {string} Object key with extension.
 */
const getFileKey = (key: string, mimeType: string): string => {
	const extension = mime.extension(mimeType);
	return `${key}.${extension}`;
};

type Owners = { users?: string[]; businesses?: string[] };

/**
 * Check if a user or business is allowed to access an S3 object based on stored metadata owners.
 *
 * @param {string} key - S3 object key.
 * @param {string} user_id - Requesting user id.
 * @param {string} business_id - Requesting business id.
 * @returns {Promise<boolean>} True if allowed, false otherwise.
 */
const isAllowedToSeeObject = async (key: string, user_id: string, business_id: string): Promise<boolean> => {
	const tagCommand = new HeadObjectCommand({
		Bucket: AWS_BUCKET,
		Key: key,
	});
	try {
		const response = await s3.send(tagCommand);
		const owners = JSON.parse(response.Metadata?.owners ?? '{}') as Owners;
		if (!owners.users && !owners.businesses) return true;
		if (owners.users && Array.isArray(owners.users) && owners.users.includes(user_id)) return true;
		if (owners.businesses && Array.isArray(owners.businesses) && owners.businesses.includes(business_id))
			return true;
		if ((owners.users || []).includes(user_id) || (owners.businesses || []).includes(business_id)) return true;
		return false;
	} catch (err) {
		throw new Error(`Error fetching object: ${String(err)}`);
	}
};

/**
 * Get object URL or data. If isPublic and object ACL allows public-read, returns public URL; otherwise returns signed URL or base64 data.
 *
 * @param {string} key - S3 object key.
 * @param {boolean} isPublic - Whether to prefer public URL access.
 * @returns {Promise<string>} Signed URL, public URL, or data URI string.
 */
const GetObject = async (key: string, isPublic: boolean): Promise<string> => {
	const command = new GetObjectCommand({ Bucket: AWS_BUCKET, Key: key });
	if (!isPublic) {
		try {
			return await getSignedUrl(s3, command, { expiresIn: 604800 });
		} catch (err) {
			throw new Error(String(err));
		}
	} else {
		if (await isObjectPublic(AWS_BUCKET, key)) {
			return `${AWS_ENDPOINT}${AWS_BUCKET}/${key}`;
		} else {
			const { Body, ContentType } = await s3.send(command);
			const streamToBase64 = (stream: Readable) =>
				new Promise<string>((resolve, reject) => {
					const chunks: Buffer[] = [];
					stream.on('data', (chunk) => chunks.push(chunk as Buffer));
					stream.on('error', reject);
					stream.on('end', () => resolve(Buffer.concat(chunks).toString('base64')));
				});
			const base64String = await streamToBase64(Body as Readable);
			return `data:${ContentType};base64,${base64String}`;
		}
	}
};

/**
 * Check if an S3 object has public READ ACL.
 *
 * @param {string} bucket - Bucket name.
 * @param {string} key - Object key.
 * @returns {Promise<boolean>} True if public, false otherwise.
 */
const isObjectPublic = async (bucket: string, key: string): Promise<boolean> => {
	try {
		const { Grants } = await s3.send(new GetObjectAclCommand({ Bucket: bucket, Key: key }));
		const isPublic = (Grants || []).some(
			(grant) =>
				grant.Grantee?.URI === 'http://acs.amazonaws.com/groups/global/AllUsers' && grant.Permission === 'READ'
		);
		return isPublic;
	} catch (err) {
		console.error('Error checking ACL:', (err as Error).message);
		return false; // Assume private if an error occurs
	}
};

/**
 * Save a base64-encoded object to S3, store owners metadata, and optionally set ACL to public-read and update DB file record.
 *
 * @param {string} key - Object key to write.
 * @param {string} data - Base64-encoded data URI or raw base64 payload.
 * @param {string} mimeType - MIME type of the object.
 * @param {object} [owners={}] - Owners metadata with users and businesses arrays.
 * @param {object} [file] - Optional file record to update (expects file_id, file_type).
 * @param {boolean} [isPublic=false] - Whether to set ACL to public-read and set URL on file.
 * @returns {Promise<object>} S3 PutObject response.
 */
const SaveObject = async (
	key: string,
	data: string,
	mimeType: string,
	owners: Owners = {},
	file?: { file_id: string; file_type: FILE_TYPE },
	isPublic = false
): Promise<PutObjectCommandOutput> => {
	const base64Data = data
		.replace(/^data:application\/pdf;base64,/, '')
		.replace(/^data:image\/\w+;base64,/, '')
		.replace(/^data:.*;base64,/, '');
	const buf = Buffer.from(base64Data, 'base64');

	const command = new PutObjectCommand({
		Bucket: AWS_BUCKET,
		Key: key,
		Body: buf,
		ContentEncoding: 'base64',
		ContentType: mimeType,
		Metadata: { owners: JSON.stringify(owners) },
		ACL: isPublic ? 'public-read' : 'private',
	});
	try {
		const response = await s3.send(command);
		if (isPublic && file && file.file_id) {
			await prisma.files.update({
				where: { file_id: file.file_id },
				data: {
					file_type: file.file_type,
					mime_type: mimeType,
					url: `${AWS_ENDPOINT}${AWS_BUCKET}/${key}`,
				},
			});
		}
		return response;
	} catch (err) {
		throw new Error(String(err));
	}
};

/**
 * Iterate all DB files marked as public and ensure corresponding S3 objects have public-read ACL.
 *
 * @returns {Promise<void>}
 */
async function updateS3ACLForPublicFiles(): Promise<void> {
	const publicFiles = await prisma.files.findMany({
		where: { public: true },
		select: { file_id: true, mime_type: true },
	});
	for (const file of publicFiles) {
		try {
			await s3.send(
				new PutObjectAclCommand({
					Bucket: AWS_BUCKET,
					Key: getFileKey(file.file_id, file.mime_type),
					ACL: 'public-read',
				})
			);
		} catch (error) {
			console.error(`❌ Failed to update ${file.file_id}:`, (error as Error).message);
		}
	}
}
/**
 * Delete an object from S3 and remove the corresponding file record if present.
 *
 * @param {string} key - S3 object key to delete.
 * @returns {Promise<object>} S3 DeleteObject response.
 */
const DeleteObject = async (key: string): Promise<DeleteObjectCommandOutput> => {
	try {
		const command = new DeleteObjectCommand({ Bucket: AWS_BUCKET, Key: key });
		const response = await s3.send(command);
		const fileId = key.split('.')[0];
		try {
			await prisma.files.delete({ where: { file_id: fileId } });
		} catch {
			// ignore
		}
		return response;
	} catch (err) {
		console.error(`Error deleting object ${key}:`, err);
		throw new Error(`Failed to delete object: ${(err as Error).message}`);
	}
};

/**
 * Create a new file record and upload the corresponding object to S3.
 *
 * @param {string} owner_id - User id of the file owner.
 * @param {object} fileData - File data including type, mime type, base64 payload, and optional public flag.
 * @returns {Promise<object>} Created file record.
 */
export async function createFileHelper(
	owner_id: string,
	fileData: { file_type: FILE_TYPE; mime_type: string; base64: string; public?: boolean }
) {
	console.log('Creating file with data:', fileData);
	const { file_type, mime_type } = fileData;
	const isPublic = fileData.public || false;
	const new_file = await FileDao.createFile(file_type, mime_type, isPublic);
	let key = getFileKey(new_file.file_id, new_file.mime_type);
	await SaveObject(key, fileData.base64, new_file.mime_type, { users: [owner_id] }, new_file, new_file.public);
	return new_file;
}

/**
 * Update an existing file record and upload the new object to S3.
 *
 * @param {string} updater_id - User id performing the update.
 * @param {string} file_id - File id to update.
 * @param {object} fileData - New file data including type, mime type, base64 payload, and optional public flag.
 * @returns {Promise<object>} Updated file record.
 */
export async function updateFileByIdHelper(
	updater_id: string,
	file_id: string,
	fileData: { file_type: FILE_TYPE; mime_type: string; base64: string; public?: boolean }
) {
	const { file_type, mime_type } = fileData;
	const updated_file = await FileDao.updateFileById(file_id, file_type, mime_type);
	let key = getFileKey(updated_file.file_id, updated_file.mime_type);
	await SaveObject(
		key,
		fileData.base64,
		updated_file.mime_type,
		{ users: [updater_id] },
		updated_file,
		updated_file.public
	);
	return updated_file;
}

/**
 * Upsert a file on S3: create or update the object and file record as needed.
 *
 * @param {string} user_id - User id performing the upsert.
 * @param {object} file - Existing file record with id, type, mime type, and optional public flag.
 * @param {FILE_TYPE} new_file_type - New file type for the upsert.
 * @param {string} new_mime_type - New MIME type for the upsert.
 * @param {string} new_base64 - New base64-encoded data payload.
 * @returns {Promise<void>}
 */
export async function upsertFileOnS3Helper(
	user_id: string,
	file: { file_id: string; file_type: FILE_TYPE; mime_type: string; base64?: string; public?: boolean },
	new_file_type: FILE_TYPE,
	new_mime_type: string,
	new_base64: string
) {
	let key = getFileKey(file.file_id, new_mime_type);
	await SaveObject(key, new_base64, new_mime_type, { users: [user_id] }, file, file.public);
}

export { getSignedUrl };
export { GetObject };
export { SaveObject };
export { isAllowedToSeeObject };
export { getFileKey };
export { updateS3ACLForPublicFiles };
export { DeleteObject };
export default {
	getSignedUrl,
	GetObject,
	SaveObject,
	isAllowedToSeeObject,
	getFileKey,
	updateS3ACLForPublicFiles,
	DeleteObject,
	createFileHelper,
	updateFileByIdHelper,
	upsertFileOnS3Helper,
};
