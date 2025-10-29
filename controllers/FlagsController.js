import FlagDao from '../dao/Flags.js';
/**
 * GET /flags
 * @tag Flags
 * @summary List flags
 * @description Retrieves a list of flags with optional query filters.
 * @operationId getFlags
 * @response 200 - Flags retrieved successfully
 * @responseContent {object} 200.application/json
 * @response 500 - Error retrieving flags
 * @prisma_model flags
 */
const getFlags = async (req, res) => {
	try {
		let flags = await FlagDao.getFlags(req.query);
		res.status(200).json(flags);
	} catch (error) {
		console.error('Error retrieving flags:', error);
		res.status(500).send('Error retrieving flags');
	}
};
/**
 * GET /flags/:flag_id
 * @tag Flags
 * @summary Get flag by ID
 * @description Retrieves a single flag by its ID.
 * @operationId getFlagById
 * @pathParam {string} flag_id - The ID of the flag
 * @response 200 - Flag retrieved successfully
 * @responseContent {object} 200.application/json
 * @response 500 - Error retrieving flag
 * @prisma_model flags
 */
const getFlagById = async (req, res) => {
	try {
		let flag = await FlagDao.getFlagById(req.params.flag_id);
		res.status(200).json(flag);
	} catch (error) {
		console.error('Error retrieving flag:', error);
		res.status(500).send('Error retrieving flag');
	}
};
/**
 * POST /flags
 * @tag Flags
 * @summary Create a flag
 * @description Creates a new flag.
 * @operationId createFlag
 * @bodyDescription The flag details to create
 * @bodyContent {object} application/json
 * @bodyRequired
 * @response 200 - Flag created successfully
 * @responseContent {object} 200.application/json
 * @response 500 - Error creating flag
 * @prisma_model flags
 */
const createFlag = async (req, res) => {
	try {
		let flag = await FlagDao.createFlag(req.body, req.user);
		res.status(200).json(flag);
	} catch (error) {
		console.error('Error creating flag:', error);
		res.status(500).send('Error creating flag');
	}
};
/**
 * PATCH /flags/:flag_id
 * @tag Flags
 * @summary Update a flag
 * @description Updates an existing flag by ID.
 * @operationId updateFlag
 * @pathParam {string} flag_id - The ID of the flag
 * @bodyDescription Fields to update
 * @bodyContent {object} application/json
 * @bodyRequired
 * @response 200 - Flag updated successfully
 * @responseContent {object} 200.application/json
 * @response 500 - Error updating flag
 * @prisma_model flags
 */
const updateFlag = async (req, res) => {
	try {
		let flag = await FlagDao.updateFlag(req.params.flag_id, req.body, req.user);
		res.status(200).json(flag);
	} catch (error) {
		console.error('Error updating flag:', error);
		res.status(500).send('Error updating flag');
	}
};
/**
 * DELETE /flags/:flag_id
 * @tag Flags
 * @summary Delete a flag
 * @description Deletes a flag by its ID.
 * @operationId deleteFlag
 * @pathParam {string} flag_id - The ID of the flag
 * @response 200 - Flag deleted successfully
 * @responseContent {object} 200.application/json
 * @response 500 - Error deleting flag
 * @prisma_model flags
 */
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
