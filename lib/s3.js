import { config } from 'dotenv';
import * as clientS3 from '@aws-sdk/client-s3';
import * as mime from 'mime-types';
import s3RequestPresigner from '@aws-sdk/s3-request-presigner';
import client from '@prisma/client';

import prisma from '../prisma/prisma.js';
// Load the AWS SDK for Node.js
config();
const { S3, PutObjectCommand, GetObjectCommand, HeadObjectCommand, GetObjectAclCommand, PutObjectAclCommand } =
	clientS3;
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
const getFileKey = (key, mimeType) => {
	let extension = mime.extension(mimeType);
	return key + '.' + extension;
};
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
export { getSignedUrl };
export { GetObject };
export { SaveObject };
export { isAllowedToSeeObject };
export { getFileKey };
export { updateS3ACLForPublicFiles };
export default {
	getSignedUrl,
	GetObject,
	SaveObject,
	isAllowedToSeeObject,
	getFileKey,
	updateS3ACLForPublicFiles,
};
