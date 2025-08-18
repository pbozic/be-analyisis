import crypto from 'crypto';

import { TokenType } from '@prisma/client';

import prisma from '../prisma/prisma.js';
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
async function generateRegistrationSessionToken(user) {
	let tokenObj = {
		user_id: user.user_id,
		token: crypto.randomBytes(20).toString('hex'),
		type: TokenType.BUSINESS_REGISTRATION,
		expires_at: new Date(Date.now() + 600000), // 10 minutes from now
	};
	return await prisma.tokens.create({ data: tokenObj });
}
async function validateRegistrationSessionToken(tokenString) {
	return await prisma.tokens.findFirst({
		where: {
			token: tokenString,
			type: TokenType.BUSINESS_REGISTRATION,
			expires_at: { gte: new Date() },
		},
		include: {
			user: {
				business_users: {
					business: true,
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
