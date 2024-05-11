const { pool } = require("../pool/pool");
const prisma = require("../prisma/prisma");

pool.on("connect", () => {
	console.log("successfully connected to the DB..");
});

/* USER prisma queries */
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

/* RESET PASSWORD REQUEST */

const createNewResetRequest = async (user_id) => {
	return prisma.reset_requests.create({
		data: {
			user_id,
		},
	});
};

const getResetRequest = async (token) => {
	return prisma.reset_requests.findUnique({
		where: {
			token,
		},
	});
};

const expireResetRequest = async (token) => {
	return prisma.reset_requests.update({
		where: {
			token,
		},
		data: {
			active: false,
		},
	});
};

const getAllActiveResetRequestsOlderThan30Min = async () => {
	return prisma.reset_requests.findMany({
		where: {
			date_create: {
				lt: new Date(new Date() - 30 * 60000),
			},
			active: true,
		},
	});
};

/* FILES */

const getAllFiles = async () => {
	const query = `SELECT f.*
                    FROM public.files f
                    ORDER BY f.path ASC`;

	return await pool.query(query);
};

const getFiles = async (path) => {
	const query = `SELECT f.*
                    FROM public.files f
                    WHERE path = $1
                    ORDER BY f.name ASC`;

	return await pool.query(query, [path]);
};

const getFileById = async (file_id) => {
	const query = `SELECT dir.*
                    FROM public.files dir
                    WHERE file_id = $1`;

	return await pool.query(query, [file_id]);
};

const getFile = async (path) => {
	const query = `SELECT dir.*
                    FROM public.files dir
                    WHERE path = $1`;

	return await pool.query(query, [path]);
};

const createNewFile = async (folder_id, name, path, mime_type, user_groups) => {
	const query = `INSERT INTO public.files(folder_id, name, path, mime_type, user_groups)
                            VALUES ($1, $2, $3, $4, $5)
                            RETURNING *`;

	return await pool.query(query, [
		folder_id,
		name,
		path,
		mime_type,
		user_groups,
	]);
};

module.exports = {
	getResetRequest,
	expireResetRequest,
	getAllActiveResetRequestsOlderThan30Min,
	createNewResetRequest,
	createNewFile,
	getFiles,
	getAllFiles,
	getFileById,
	getFile,
	getUsers,
	getUser,
	getUserById,
	getUserByEmail,
	updateUserTelephone,
	updateUserType,
	updateUser,
	updateEmail,
	updateUserPassword,
	createNewUser,
};

//require('make-runnable');
