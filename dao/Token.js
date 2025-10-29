import crypto from 'crypto';

import { TokenType } from '@prisma/client';

import prisma from '../prisma/prisma.js';
/**
 * Find an active password reset token by token string.
 *
 * @param {string} token - Token string.
 * @returns {Promise<object|null>} Token row or null.
 */
async function getPasswordToken(token) {
	try {
		return prisma.tokens.findFirst({
			where: {
				token,
				type: 'PASSWORD_RESET',
			},
		});
	} catch (e) {
		return new Error(e);
	}
}
/**
 * Get the active SMS verification token for a user (if any).
 *
 * @param {object} user - User object with user_id.
 * @returns {Promise<object|null>} Active token or null.
 */
async function getActiveSMSToken(user) {
	try {
		return prisma.tokens.findFirst({
			where: {
				active: true,
				user_id: user.user_id,
				type: 'PHONE_VERIFICATION',
			},
		});
	} catch (e) {
		return new Error(e);
	}
}
/**
 * Update a token by id.
 *
 * @param {string} token_id - Token ID.
 * @param {object} data - Fields to update.
 * @returns {Promise<object>} Updated token.
 */
const updateToken = async (token_id, data) => {
	try {
		return prisma.tokens.update({
			where: {
				token_id,
			},
			data,
		});
	} catch (e) {
		return new Error(e);
	}
};
/**
 * Save a PHONE_VERIFICATION token for a user, deactivating previous ones.
 *
 * @param {object} token - Token payload (user_id, token, expires_at).
 * @returns {Promise<object>} Created token.
 */
const saveSMSToken = async (token) => {
	try {
		await prisma.tokens.updateMany({
			where: {
				user_id: token.user_id,
				type: 'PHONE_VERIFICATION',
			},
			data: {
				active: false,
			},
		});
		return prisma.tokens.create({
			data: {
				...token,
				active: true,
				type: 'PHONE_VERIFICATION',
			},
		});
	} catch (e) {
		return new Error(e);
	}
};
/**
 * Save a PASSWORD_RESET token for a user, deactivating previous ones.
 *
 * @param {object} token - Token payload (user_id, token, expires_at).
 * @returns {Promise<object>} Created token.
 */
const savePasswordResetToken = async (token) => {
	try {
		await prisma.tokens.updateMany({
			where: {
				user_id: token.user_id,
				type: 'PASSWORD_RESET',
			},
			data: {
				active: false,
			},
		});
		return prisma.tokens.create({
			data: {
				...token,
				active: true,
				type: 'PASSWORD_RESET',
			},
		});
	} catch (e) {
		return new Error(e);
	}
};
/**
 * Generate and persist a new SMS verification token for a user.
 *
 * @param {object} user - User object with user_id.
 * @returns {Promise<object>} Created token.
 */
async function generateSMSVerificationToken(user) {
	let tokenObj = {
		user_id: user.user_id,
		token: (Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000).toString(),
		type: 'PHONE_VERIFICATION',
		expires_at: new Date(Date.now() + 3600000 * 2), // 10 minutes from now
	};
	let token = await saveSMSToken(tokenObj);
	// TODO: send SMS
	return token;
}
/**
 * Generate a unique password reset token and persist it for a user.
 *
 * @param {object} user - User object with user_id.
 * @returns {Promise<object>} Created token.
 */
async function generatePaswordResetToken(user) {
	let tokenHash = crypto.randomBytes(20).toString('hex');
	const resetTokenExpires = Date.now() + 3600000 * 24; // 1 hour from now
	let existsToken = await prisma.tokens.findUnique({
		where: {
			token: tokenHash,
		},
	});
	while (existsToken) {
		tokenHash = crypto.randomBytes(20).toString('hex');
		existsToken = await prisma.tokens.findUnique({
			where: {
				token: tokenHash,
			},
		});
	}
	let tokenObj = {
		user_id: user.user_id,
		token: tokenHash,
		type: 'PASSWORD_RESET',
		expires_at: new Date(resetTokenExpires),
	};
	let token = await savePasswordResetToken(tokenObj);
	//TODO: send email
	return token;
}
/**
 * Generate a short-lived BUSINESS_REGISTRATION session token for a user.
 *
 * @param {object} user - User object with user_id.
 * @returns {Promise<object>} Created token.
 */
async function generateRegistrationSessionToken(user) {
	let tokenObj = {
		user_id: user.user_id,
		token: crypto.randomBytes(20).toString('hex'),
		type: TokenType.BUSINESS_REGISTRATION,
		expires_at: new Date(Date.now() + 600000), // 10 minutes from now
	};
	return await prisma.tokens.create({ data: tokenObj });
}
/**
 * Validate a BUSINESS_REGISTRATION token string and return token including user->business_users->business.
 *
 * @param {string} tokenString - Token string to validate.
 * @returns {Promise<object|null>} Token row or null if invalid/expired.
 */
async function validateRegistrationSessionToken(tokenString) {
	return await prisma.tokens.findFirst({
		where: {
			token: tokenString,
			type: TokenType.BUSINESS_REGISTRATION,
			expires_at: { gte: new Date() },
		},
		include: {
			users: {
				include: {
					business_users: {
						include: {
							business: true,
						},
					},
				},
			},
		},
	});
}

export { getActiveSMSToken };
export { saveSMSToken };
export { updateToken };
export { savePasswordResetToken };
export { generateSMSVerificationToken };
export { generatePaswordResetToken };
export { getPasswordToken };
export { generateRegistrationSessionToken };
export { validateRegistrationSessionToken };
export default {
	getActiveSMSToken,
	saveSMSToken,
	updateToken,
	savePasswordResetToken,
	generateSMSVerificationToken,
	generatePaswordResetToken,
	getPasswordToken,
	generateRegistrationSessionToken,
	validateRegistrationSessionToken,
};
