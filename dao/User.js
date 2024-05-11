const prisma = require("../prisma/prisma");

const getUsers = async () => {
	return prisma.users.findMany();
};

const getUserById = async (user_id) => {
	return prisma.users.findUnique({
		where: {
			user_id: user_id,
		},
	});
};

const getUserByEmail = async (email, args) => {
	return prisma.users.findUnique({
		where: {
			email: email,
		},
		...args,
	});
};

const getUser = async (email) => {
	return prisma.users.findUnique({
		where: {
			email: email,
		},
	});
};

const updateUser = async (user_id, user) => {
	delete user.telephone;
	delete user.email;
	delete user.password;
	delete user.addresses;

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
