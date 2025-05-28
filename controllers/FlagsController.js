import FlagDao from '../dao/Flags.js';
const getFlags = async (req, res) => {
	try {
		let flags = await FlagDao.getFlags(req.query);
		res.status(200).json(flags);
	} catch (error) {
		console.error('Error retrieving flags:', error);
		res.status(500).send('Error retrieving flags');
	}
};
const getFlagById = async (req, res) => {
	try {
		let flag = await FlagDao.getFlagById(req.params.flag_id);
		res.status(200).json(flag);
	} catch (error) {
		console.error('Error retrieving flag:', error);
		res.status(500).send('Error retrieving flag');
	}
};
const createFlag = async (req, res) => {
	try {
		let flag = await FlagDao.createFlag(req.body, req.user);
		res.status(200).json(flag);
	} catch (error) {
		console.error('Error creating flag:', error);
		res.status(500).send('Error creating flag');
	}
};
const updateFlag = async (req, res) => {
	try {
		let flag = await FlagDao.updateFlag(req.params.flag_id, req.body, req.user);
		res.status(200).json(flag);
	} catch (error) {
		console.error('Error updating flag:', error);
		res.status(500).send('Error updating flag');
	}
};
const deleteFlag = async (req, res) => {
	try {
		await FlagDao.deleteFlag(req.params.flag_id);
		res.status(200).send('Flag deleted successfully');
	} catch (error) {
		console.error('Error deleting flag:', error);
		res.status(500).send('Error deleting flag');
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
