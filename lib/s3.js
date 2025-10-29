import { Buffer } from 'node:buffer';

import { config } from 'dotenv';
import {
	S3,
	PutObjectCommand,
	GetObjectCommand,
	HeadObjectCommand,
	GetObjectAclCommand,
	PutObjectAclCommand,
	DeleteObjectCommand,
} from '@aws-sdk/client-s3';
import mime from 'mime-types';
import s3RequestPresigner from '@aws-sdk/s3-request-presigner';
import client from '@prisma/client';

import prisma from '../prisma/prisma.js';
// Load the AWS SDK for Node.js
config();
const { getSignedUrl } = s3RequestPresigner;
const PrismaClient = client.PrismaClient;
let p = new PrismaClient();
const AWS_BUCKET = process.env.AWS_BUCKET;
const AWS_ENDPOINT = process.env.AWS_ENDPOINT;
const s3 = new S3({
	endpoint: process.env.AWS_ENDPOINT,
	credentials: {
		accessKeyId: process.env.AWS_ACCESS_KEY_ID,
		secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
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
const getFileKey = (key, mimeType) => {
	let extension = mime.extension(mimeType);
	return key + '.' + extension;
};
/**
 * Check if a user or business is allowed to access an S3 object based on stored metadata owners.
 *
 * @param {string} key - S3 object key.
 * @param {string} user_id - Requesting user id.
 * @param {string} business_id - Requesting business id.
 * @returns {Promise<boolean>} True if allowed, false otherwise.
 */
const isAllowedToSeeObject = async (key, user_id, business_id) => {
	const tagCommand = new HeadObjectCommand({
		Bucket: AWS_BUCKET,
		Key: key,
	});
	try {
		let response = await s3.send(tagCommand);
		console.log('tags', response);
		let owners = JSON.parse(response.Metadata.owners);
		if (!owners.users && !owners.businesses) {
			return true;
		}
		if (owners.users && Array.isArray(owners.users) && owners.users.includes(user_id)) {
			return true;
		}
		if (owners.businesses && Array.isArray(owners.businesses) && owners.businesses.includes(business_id)) {
			return true;
		}
		if (owners.users.includes(user_id) || owners.businesses.includes(business_id)) {
			return true;
		}
		return false;
	} catch (err) {
		throw new Error(`Error fetching object: ${err}`);
	}
};
/**
 * Get object URL or data. If isPublic and object ACL allows public-read, returns public URL; otherwise returns signed URL or base64 data.
 *
 * @param {string} key - S3 object key.
 * @param {boolean} isPublic - Whether to prefer public URL access.
 * @returns {Promise<string>} Signed URL, public URL, or data URI string.
 */
const GetObject = async (key, isPublic) => {
	const command = new GetObjectCommand({
		Bucket: AWS_BUCKET,
		Key: key,
	});
	if (!isPublic) {
		try {
			return await getSignedUrl(s3, command, { expiresIn: 604800 });
		} catch (err) {
			throw new Error(err);
		}
	} else {
		if (isObjectPublic(AWS_BUCKET, key)) {
			return `${AWS_ENDPOINT}${AWS_BUCKET}/${key}`;
		} else {
			const { Body, ContentType } = await s3.send(command);
			const streamToBase64 = (stream) =>
				new Promise((resolve, reject) => {
					const chunks = [];
					stream.on('data', (chunk) => chunks.push(chunk));
					stream.on('error', reject);
					stream.on('end', () => resolve(Buffer.concat(chunks).toString('base64')));
				});
			const base64String = await streamToBase64(Body);
			// Prepend the Base64 prefix with MIME type
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
const isObjectPublic = async (bucket, key) => {
	try {
		const { Grants } = await s3.send(new GetObjectAclCommand({ Bucket: bucket, Key: key }));
		// Check if public read permission exists
		const isPublic = Grants.some(
			(grant) =>
				grant.Grantee?.URI === 'http://acs.amazonaws.com/groups/global/AllUsers' && grant.Permission === 'READ'
		);
		return isPublic;
	} catch (err) {
		console.error('Error checking ACL:', err);
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
const SaveObject = async (key, data, mimeType, owners = {}, file, isPublic = false) => {
	console.log('SaveObject data', key, data.substring(0, 15));
	console.log('SaveObject file', file);
	const base64Data = data
		.replace(/^data:application\/pdf;base64,/, '')
		.replace(/^data:image\/\w+;base64,/, '')
		.replace(/^data:.*;base64,/, '');
	const buf = Buffer.from(base64Data, 'base64');
	console.log('SaveObject key', key);
	const command = new PutObjectCommand({
		Bucket: AWS_BUCKET,
		Key: key,
		Body: buf,
		ContentEncoding: 'base64',
		ContentType: mimeType,
		Metadata: {
			owners: JSON.stringify(owners),
		},
		ACL: isPublic ? 'public-read' : 'private',
		// Tagging: encodeURIComponent(JSON.stringify(owners.users.concat(owners.businesses)))
	});
	try {
		const response = await s3.send(command);
		if (isPublic) {
			if (file && file.file_id) {
				await p.files.update({
					where: {
						file_id: file.file_id,
					},
					data: {
						file_type: file.file_type,
						mime_type: mimeType,
						url: `${AWS_ENDPOINT}${AWS_BUCKET}/${key}`,
					},
				});
			}
		}
		return response;
	} catch (err) {
		throw new Error(err);
	}
};
/**
 * Iterate all DB files marked as public and ensure corresponding S3 objects have public-read ACL.
 *
 * @returns {Promise<void>}
 */
async function updateS3ACLForPublicFiles() {
	console.log('🔄 Fetching public files from the database...');
	// 1. Get all files that are marked as public
	const publicFiles = await prisma.files.findMany({
		where: { public: true }, // Only fetch files that should be public
		select: { file_id: true, mime_type: true }, // Select only necessary fields
	});
	console.log(`📂 Found ${publicFiles.length} public files.`);
	// 2. Loop through each file and update its S3 ACL
	for (const file of publicFiles) {
		try {
			console.log(`🌍 Updating S3 ACL for: ${file.file_id} in ${AWS_BUCKET}...`);
			// Send ACL update request
			await s3.send(
				new PutObjectAclCommand({
					Bucket: AWS_BUCKET, // Make sure your database stores the correct bucket name
					Key: getFileKey(file.file_id, file.mime_type), // Make sure your database stores the correct file key
					ACL: 'public-read', // Set to public
				})
			);
			console.log(` Successfully updated ${file.file_id} to public-read.`);
		} catch (error) {
			console.error(`❌ Failed to update ${file.file_id}:`, error.message);
		}
	}
	console.log('🎉 ACL update process completed.');
}

/**
 * Delete an object from S3 and remove the corresponding file record if present.
 *
 * @param {string} key - S3 object key to delete.
 * @returns {Promise<object>} S3 DeleteObject response.
 */
const DeleteObject = async (key) => {
	try {
		const command = new DeleteObjectCommand({
			Bucket: AWS_BUCKET,
			Key: key,
		});
		const response = await s3.send(command);
		console.log(`Successfully deleted object: ${key}`);

		const fileId = key.split('.')[0];
		try {
			await prisma.files.delete({
				where: { file_id: fileId },
			});
		} catch {
			console.log('File not found in database or already deleted:', fileId);
		}

		return response;
	} catch (err) {
		console.error(`Error deleting object ${key}:`, err);
		throw new Error(`Failed to delete object: ${err.message}`);
	}
};

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
};
