import crypto from 'crypto';

import { Prisma, TokenType } from '@prisma/client';

import prisma from '../prisma/prisma.js';
import { TokenBase, TokenDetail } from '../schemas/dto/Tokens/token.dto.js';

/**
 * Find an active password reset token by token string.
 *
 * @param {string} token - Token string.
 * @returns {Promise<TokenBase|null>} Token row or null.
 */
export async function getPasswordToken(token: string): Promise<TokenBase | null> {
	try {
		return prisma.tokens.findFirst({
			where: {
				token,
				type: 'PASSWORD_RESET',
			},
		});
	} catch (error) {
		if (error instanceof Prisma.PrismaClientKnownRequestError) {
			// Known error with error code, e.g. unique constraint
			if (error.code === 'P2002') {
				console.error('Unique constraint failed on field:', error.meta?.target);
			}
		} else if (error instanceof Prisma.PrismaClientValidationError) {
			console.error('Validation error:', error.message);
		} else {
			console.error('Unexpected error:', error);
		}
		const message = error instanceof Error ? error.message : 'Unknown error';
		throw new Error(`Error fetching blog posts: ${message}`);
	}
}

/**
 * Get the active SMS verification token for a user (if any).
 *
 * @param {object} user - User object with user_id.
 * @returns {Promise<TokenBase|null>} Active token or null.
 */
export async function getActiveSMSToken(user: { user_id: string }): Promise<TokenBase | null> {
	try {
		return prisma.tokens.findFirst({
			where: {
				active: true,
				user_id: user.user_id,
				type: 'PHONE_VERIFICATION',
			},
		});
	} catch (error) {
		if (error instanceof Prisma.PrismaClientKnownRequestError) {
			// Known error with error code, e.g. unique constraint
			if (error.code === 'P2002') {
				console.error('Unique constraint failed on field:', error.meta?.target);
			}
		} else if (error instanceof Prisma.PrismaClientValidationError) {
			console.error('Validation error:', error.message);
		} else {
			console.error('Unexpected error:', error);
		}
		const message = error instanceof Error ? error.message : 'Unknown error';
		throw new Error(`Error fetching blog posts: ${message}`);
	}
}

/**
 * Update a token by id.
 *
 * @param {string} token_id - Token ID.
 * @param {object} data - Fields to update.
 * @returns {Promise<TokenBase>} Updated token.
 */
export const updateToken = async (token_id: string, data: Record<string, any>): Promise<TokenBase> => {
	try {
		return prisma.tokens.update({
			where: { token_id },
			data,
		});
	} catch (error) {
		if (error instanceof Prisma.PrismaClientKnownRequestError) {
			// Known error with error code, e.g. unique constraint
			if (error.code === 'P2002') {
				console.error('Unique constraint failed on field:', error.meta?.target);
			}
		} else if (error instanceof Prisma.PrismaClientValidationError) {
			console.error('Validation error:', error.message);
		} else {
			console.error('Unexpected error:', error);
		}
		const message = error instanceof Error ? error.message : 'Unknown error';
		throw new Error(`Error fetching blog posts: ${message}`);
	}
};

/**
 * Save a PHONE_VERIFICATION token for a user, deactivating previous ones.
 *
 * @param {object} token - Token payload (user_id, token, expires_at).
 * @returns {Promise<TokenBase>} Created token.
 */
export const saveSMSToken = async (token: { user_id: string }): Promise<TokenBase> => {
	try {
		await prisma.tokens.updateMany({
			where: { user_id: token.user_id, type: 'PHONE_VERIFICATION' },
			data: { active: false },
		});
		return prisma.tokens.create({
			data: { ...token, active: true, type: 'PHONE_VERIFICATION' },
		});
	} catch (error) {
		if (error instanceof Prisma.PrismaClientKnownRequestError) {
			// Known error with error code, e.g. unique constraint
			if (error.code === 'P2002') {
				console.error('Unique constraint failed on field:', error.meta?.target);
			}
		} else if (error instanceof Prisma.PrismaClientValidationError) {
			console.error('Validation error:', error.message);
		} else {
			console.error('Unexpected error:', error);
		}
		const message = error instanceof Error ? error.message : 'Unknown error';
		throw new Error(`Error fetching blog posts: ${message}`);
	}
};

/**
 * Save a PASSWORD_RESET token for a user, deactivating previous ones.
 *
 * @param {object} token - Token payload (user_id, token, expires_at).
 * @returns {Promise<any>} Created token.
 */
export const savePasswordResetToken = async (token: {
	user_id: string;
	token: string;
	expires_at: Date;
}): Promise<TokenBase> => {
	try {
		await prisma.tokens.updateMany({
			where: { user_id: token.user_id, type: 'PASSWORD_RESET' },
			data: { active: false },
		});
		return prisma.tokens.create({
			data: { ...token, active: true, type: 'PASSWORD_RESET' },
		});
	} catch (error) {
		if (error instanceof Prisma.PrismaClientKnownRequestError) {
			// Known error with error code, e.g. unique constraint
			if (error.code === 'P2002') {
				console.error('Unique constraint failed on field:', error.meta?.target);
			}
		} else if (error instanceof Prisma.PrismaClientValidationError) {
			console.error('Validation error:', error.message);
		} else {
			console.error('Unexpected error:', error);
		}
		const message = error instanceof Error ? error.message : 'Unknown error';
		throw new Error(`Error fetching blog posts: ${message}`);
	}
};

/**
 * Generate and persist a new SMS verification token for a user.
 *
 * @param {object} user - User object with user_id.
 * @returns {Promise<any>} Created token.
 */
export async function generateSMSVerificationToken(user_id: string): Promise<any> {
	let tokenObj = {
		user_id: user.user_id,
		token: (Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000).toString(),
		type: 'PHONE_VERIFICATION',
		expires_at: new Date(Date.now() + 3600000 * 2),
	};
	let token = await saveSMSToken(tokenObj);
	// TODO: send SMS
	return token;
}

/**
 * Generate a unique password reset token and persist it for a user.
 *
 * @param {object} user_id - User ID.
 * @returns {Promise<TokenBase>} Created token.
 */
export async function generatePasswordResetToken(user_id: string): Promise<TokenBase> {
	let tokenHash = crypto.randomBytes(20).toString('hex');
	const resetTokenExpires = Date.now() + 3600000 * 24;
	let existsToken = await prisma.tokens.findUnique({ where: { token: tokenHash } });
	while (existsToken) {
		tokenHash = crypto.randomBytes(20).toString('hex');
		existsToken = await prisma.tokens.findUnique({ where: { token: tokenHash } });
	}
	let tokenObj = {
		user_id,
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
 * @returns {Promise<TokenBase>} Created token.
 */
export async function generateRegistrationSessionToken(user: { user_id: string }): Promise<TokenBase> {
	try {
		let tokenObj = {
			user_id: user.user_id,
			token: crypto.randomBytes(20).toString('hex'),
			type: TokenType.BUSINESS_REGISTRATION,
			expires_at: new Date(Date.now() + 600000),
		};
		return await prisma.tokens.create({ data: tokenObj });
	} catch (error) {
		if (error instanceof Prisma.PrismaClientKnownRequestError) {
			// Known error with error code, e.g. unique constraint
			if (error.code === 'P2002') {
				console.error('Unique constraint failed on field:', error.meta?.target);
			}
		} else if (error instanceof Prisma.PrismaClientValidationError) {
			console.error('Validation error:', error.message);
		} else {
			console.error('Unexpected error:', error);
		}
		const message = error instanceof Error ? error.message : 'Unknown error';
		throw new Error(`Error fetching blog posts: ${message}`);
	}
}

/**
 * Validate a BUSINESS_REGISTRATION token string and return token including user->business_users->business.
 *
 * @param {string} tokenString - Token string to validate.
 * @returns {Promise<TokenDetail|null>} Token row or null if invalid/expired.
 */
export async function validateRegistrationSessionToken(tokenString: string): Promise<TokenDetail | null> {
	try {
		return await prisma.tokens.findFirst({
			where: { token: tokenString, type: TokenType.BUSINESS_REGISTRATION, expires_at: { gte: new Date() } },
			include: {
				users: {
					include: {
						business_users: { include: { business: true } },
					},
				},
			},
		});
	} catch (error) {
		if (error instanceof Prisma.PrismaClientKnownRequestError) {
			// Known error with error code, e.g. unique constraint
			if (error.code === 'P2002') {
				console.error('Unique constraint failed on field:', error.meta?.target);
			}
		} else if (error instanceof Prisma.PrismaClientValidationError) {
			console.error('Validation error:', error.message);
		} else {
			console.error('Unexpected error:', error);
		}
		const message = error instanceof Error ? error.message : 'Unknown error';
		throw new Error(`Error fetching blog posts: ${message}`);
	}
}

// Inline exported functions above are sufficient; remove duplicate named re-exports to avoid TS redeclaration errors.

export default {
	getActiveSMSToken,
	saveSMSToken,
	updateToken,
	savePasswordResetToken,
	generateSMSVerificationToken,
	generatePasswordResetToken,
	getPasswordToken,
	generateRegistrationSessionToken,
	validateRegistrationSessionToken,
};
