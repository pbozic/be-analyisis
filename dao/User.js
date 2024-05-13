const prisma = require("../prisma/prisma");

const getUsers = async (args) => {
	return prisma.users.findMany({
		...args,
	});
};

const getUserById = async (user_id, args) => {
	return prisma.users.findUnique({
		where: {
			user_id: user_id,
		},
		...args,
	});
};

const getUserByEmail = async (email, args) => {
	console.log("dao:", email);
	return prisma.users.findUnique({
		where: {
			email: email,
		},
		...args,
	});
};

const getUser = async (email, args) => {
	return prisma.users.findUnique({
		where: {
			email: email,
		},
		...args,
	});
};

const updateUser = async (user_id, user) => {
	// We do not allow the user to update their email, password, telephone, user_role, or addresses in a general update
	// we handle those separately
	delete user.user_id;
	delete user.telephone;
	delete user.email;
	delete user.password;
	delete user.addresses;
	delete user.user_role;

	return prisma.users.update({
		where: {
			user_id: user_id,
		},
		data: {
			...user,
		},
	});
};

const updateEmail = async (user_id, email) => {
	return prisma.users.update({
		where: {
			user_id: user_id,
		},
		data: {
			email,
		},
	});
};

const updateUserPassword = async (user_id, password) => {
	return prisma.users.update({
		where: {
			user_id: user_id,
		},
		data: {
			password,
		},
	});
};

const updateUserTelephone = async (user_id, telephone) => {
	return prisma.users.update({
		where: {
			user_id: user_id,
		},
		data: {
			telephone,
		},
	});
};

const updateUserType = async (user_id, user_role) => {
	return prisma.users.update({
		where: {
			user_id: user_id,
		},
		data: {
			user_role,
		},
	});
};

const createNewUser = async (user) => {
	return prisma.users.create({
		data: user,
	});
};

module.exports = {
	getUsers,
	getUserById,
	getUserByEmail,
	getUser,
	updateUser,
	updateEmail,
	updateUserPassword,
	updateUserTelephone,
	updateUserType,
	createNewUser,
};
