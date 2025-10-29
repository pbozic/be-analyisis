import prisma from '../prisma/prisma.js';
/**
 * Get flags with optional prisma args.
 *
 * @param {object} args - Prisma findMany args.
 * @returns {Promise<object[]>} Flags.
 */
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
/**
 * Get a single flag by id.
 *
 * @param {string} flag_id - Flag ID.
 * @returns {Promise<object|null>} Flag or null.
 */
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
/**
 * Create a flag and write history with the creating user and status.
 *
 * @param {object} flag - Flag payload (status, reason, etc.).
 * @param {object} user - User object with user_id.
 * @returns {Promise<object>} Created flag.
 */
const createFlag = async (flag, user) => {
	try {
		let Flag = await prisma.flags.create({
			data: {
				...flag,
			},
		});
		await prisma.flag_history.create({
			data: {
				flag: { connect: { flag_id: Flag.flag_id } },
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
/**
 * Update a flag by id and log the change to flag_history with user and status.
 *
 * @param {string} flag_id - Flag ID.
 * @param {object} flag - Fields to update (including status).
 * @param {object} user - User object with user_id.
 * @returns {Promise<object>} Updated flag.
 */
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
/**
 * Delete a flag by id.
 *
 * @param {string} flag_id - Flag ID.
 * @returns {Promise<object>} Deleted flag.
 */
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
export { getFlags };
export { getFlagById };
export { createFlag };
export { updateFlag };
export { deleteFlag };
export default {
	getFlags,
	getFlagById,
	createFlag,
	updateFlag,
	deleteFlag,
};
