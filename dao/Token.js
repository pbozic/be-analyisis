const prisma = require("../prisma/prisma");
async function getActiveSMSToken(user) {
	try {
		return prisma.tokens.findFirst({
			where: {
				active: true,
				user_id: user.user_id,
				type: "PHONE_VERIFICATION",
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
				type: "PHONE_VERIFICATION",
			},
			data: {
				active: false,
			},
		});
		return prisma.tokens.create({
			data: {
				...token,
				active: true,
				type: "PHONE_VERIFICATION",
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
				type: "PASSWORD_RESET",
			},
			data: {
				active: false,
			},
		});
		return prisma.tokens.create({
			data: {
				...token,
				active: true,
				type: "PASSWORD_RESET",
			},
		});
	} catch (e) {
		return new Error(e);
	}
};

async function generateAndSendSMSVerificationToken(user) {
	let tokenObj = {
		user_id: user.user_id,
		token: "123456",
		type: "PHONE_VERIFICATION",
	};
	let token = await saveSMSToken(tokenObj);
	// TODO: send SMS
	return token;
}

async function generateAndSendPaswordResetToken(user) {
	let tokenObj = {
		user_id: user.user_id,
		token: "123456",
		type: "PASSWORD_RESET",
	};
	let token = await TokenDao.savePasswordResetToken(tokenObj);
	//TODO: send email
	return token;
}

module.exports = {
	getActiveSMSToken,
	saveSMSToken,
	updateToken,
	savePasswordResetToken,
	generateAndSendSMSVerificationToken,
	generateAndSendPaswordResetToken,
};
