const prisma = require("../prisma/prisma");

const getUsers = async (args) => {
	try {
		return prisma.users.findMany({
			...args,
		});
	} catch (error) {
		return new Error(error);
	}
};

const getUserById = async (user_id, args) => {
	try {
		return prisma.users.findUnique({
			where: {
				user_id: user_id,
			},
			...args,
		});
	} catch (error) {
		return new Error(error);
	}
};

const getUserByEmail = async (email, args) => {
	try {
		return prisma.users.findUnique({
			where: {
				email: email,
			},
			...args,
		});
	} catch (error) {
		return new Error(error);
	}
};

const getUser = async (email, args) => {
	try {
		return prisma.users.findUnique({
			where: {
				email: email,
			},
			...args,
		});
	} catch (error) {
		return new Error(error);
	}
};

const updateUser = async (user_id, user) => {
	try {
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
	} catch (error) {
		return new Error(error);
	}
};

const updateEmail = async (user_id, email) => {
	try {
		return prisma.users.update({
			where: {
				user_id: user_id,
			},
			data: {
				email,
			},
		});
	} catch (error) {
		return new Error(error);
	}
};
const updateTelephone = async (user_id, telephone) => {
	try {
		return prisma.users.update({
			where: {
				user_id: user_id,
			},
			data: {
				...telephone,
			},
		});
	} catch (error) {
		return new Error(error);
	}
}
const updateUserPassword = async (user_id, password) => {
	try {
		return prisma.users.update({
			where: {
				user_id: user_id,
			},
			data: {
				password,
			},
		});
	} catch (error) {
		return new Error(error);
	}
};

const updateUserType = async (user_id, user_role) => {
	try {
		return prisma.users.update({
			where: {
				user_id: user_id,
			},
			data: {
				user_role,
			},
		});
	} catch (error) {
		return new Error(error);
	}
};

const createNewUser = async (user) => {
	try {
		return prisma.users.create({
			data: user,
		});
	} catch (error) {
		return new Error(error);
	}
};

module.exports = {
	getUsers,
	getUserById,
	getUserByEmail,
	getUser,
	updateUser,
	updateEmail,
	updateUserPassword,
	updateTelephone,
	updateUserType,
	createNewUser,
};
