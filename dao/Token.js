async function getActiveSMSToken(user) {
	return prisma.tokens.findFirst({
		where: {
			active: true,
			user_id: user.user_id,
			type: "PHONE_VERIFICATION",
		},
	});
}
const updateToken = async (token_id, data) => {
	return prisma.tokens.update({
		where: {
			token_id,
		},
		data,
	});
};
const saveSMSToken = async (token) => {
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
};
const savePasswordResetToken = async (token) => {
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
