const prisma = require('../prisma/prisma');

const getFlags = async (args) => {
	try {
		return await prisma.flags.findMany({
			...args,
		});
	} catch (error) {
		console.error('Error retrieving flags:', error);
		throw new Error(error);
	}
};

const getFlagById = async (flag_id) => {
	try {
		return await prisma.flags.findUnique({
			where: {
				flag_id: flag_id,
			},
		});
	} catch (error) {
		console.error('Error retrieving flag:', error);
		throw new Error(error);
	}
};

const createFlag = async (flag, user) => {
	try {
		let Flag = await prisma.flags.create({
			data: {
				...flag,
			},
		});
		await prisma.flag_history.create({
			data: {
				flag: {
					connect: {
						flag_id: flag_id,
					},
				},
				user: {
					connect: {
						user_id: user.user_id,
					},
				},
				status: flag.status,
			},
		});
		return Flag;
	} catch (error) {
		console.error('Error creating flag:', error);
		throw new Error(error);
	}
};

const updateFlag = async (flag_id, flag, user) => {
	try {
		let Flag = await prisma.flags.update({
			where: {
				flag_id: flag_id,
			},
			data: {
				...flag,
			},
		});

		await prisma.flag_history.create({
			data: {
				flag: {
					connect: {
						flag_id: flag_id,
					},
				},
				user: {
					connect: {
						user_id: user.user_id,
					},
				},
				status: flag.status,
			},
		});
		return Flag;
	} catch (error) {
		console.error('Error updating flag:', error);
		throw new Error(error);
	}
};

const deleteFlag = async (flag_id) => {
	try {
		return await prisma.flags.delete({
			where: {
				flag_id: flag_id,
			},
		});
	} catch (error) {
		console.error('Error deleting flag:', error);
		throw new Error(error);
	}
};

module.exports = {
	getFlags,
	getFlagById,
	createFlag,
	updateFlag,
	deleteFlag,
};
