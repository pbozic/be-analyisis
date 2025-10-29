import BusinessTeamDao from '../dao/BusinessTeam.js';
/**
 * GET /business-teams/:business_id
 * @tag BusinessTeam
 * @summary Get all business teams for a business
 * @description Retrieves all business teams that belong to a given business.
 * @operationId getBusinessTeamsByBusinessId
 * @pathParam {string} business_id - The business ID
 * @response 200 - Business teams retrieved successfully
 * @responseContent {object} 200.application/json
 * @response 500 - Error retrieving business teams
 * @prisma_model business_teams
 */
const getBusinessTeamsByBusinessId = async (req, res) => {
	try {
		const businessTeams = await BusinessTeamDao.getBusinessTeamsForBusinessId(req.params.business_id);
		res.status(200).json(businessTeams);
	} catch (error) {
		console.error('Error retrieving business teams:', error);
		res.status(500).json({
			error: 'Error retrieving business teams',
			details: error.message,
		});
	}
};
/**
 * GET /business-teams/:business_teams_id
 * @tag BusinessTeam
 * @summary Get a business team by ID
 * @description Retrieves a single business team by its ID including users.
 * @operationId getBusinessTeamById
 * @pathParam {string} business_teams_id - The business team ID
 * @response 200 - Business team retrieved successfully
 * @responseContent {object} 200.application/json
 * @response 404 - Business team not found
 * @response 500 - Error retrieving business team
 * @prisma_model business_teams
 * @prisma_model users
 */
const getBusinessTeamById = async (req, res) => {
	try {
		const businessTeam = await BusinessTeamDao.getBusinessTeamById(req.params.business_teams_id);
		if (!businessTeam) {
			return res.status(404).json({ error: 'Business team not found' });
		}
		res.status(200).json(businessTeam);
	} catch (error) {
		console.error('Error retrieving business team:', error);
		res.status(500).json({
			error: 'Error retrieving business team',
			details: error.message,
		});
	}
};
/**
 * POST /business-teams/create
 * @tag BusinessTeam
 * @summary Create a new business team
 * @description Creates a new business team; optionally assigns initial users.
 * @operationId createBusinessTeam
 * @bodyContent {object} application/json
 * @bodyRequired
 * @response 201 - Business team created successfully
 * @responseContent {object} 201.application/json
 * @response 500 - Error creating business team
 * @prisma_model business_teams
 * @prisma_model users
 */
const createBusinessTeam = async (req, res) => {
	try {
		const { users, ...teamData } = req.body;
		const businessTeam = await BusinessTeamDao.createBusinessTeam(teamData);

		if (users && users.length > 0) {
			for (const user_id of users) {
				try {
					const addedUsers = await BusinessTeamDao.addUserToTeam(businessTeam.business_teams_id, user_id);
					businessTeam.users = addedUsers.users;
				} catch (e) {
					console.log(
						`Error adding user id: ${user_id} to team id: ${businessTeam.business_teams_id} - error:`,
						e
					);
				}
			}
		}
		res.status(201).json(businessTeam);
	} catch (error) {
		console.error('Error creating business team:', error);
		res.status(500).json({
			error: 'Error creating business team',
			details: error.message,
		});
	}
};
/**
 * PATCH /business-teams/:business_teams_id
 * @tag BusinessTeam
 * @summary Update an existing business team
 * @description Updates fields such as team name or limit per person.
 * @operationId updateBusinessTeam
 * @pathParam {string} business_teams_id - The business team ID
 * @bodyContent {object} application/json
 * @response 200 - Business team updated successfully
 * @responseContent {object} 200.application/json
 * @response 404 - Business team not found
 * @response 500 - Error updating business team
 * @prisma_model business_teams
 */
const updateBusinessTeam = async (req, res) => {
	try {
		const data = {
			business_teams_id: req.params.business_teams_id,
			...req.body,
		};
		const businessTeam = await BusinessTeamDao.updateBusinessTeam(data);
		if (!businessTeam) {
			return res.status(404).json({ error: 'Business team not found' });
		}
		res.status(200).json(businessTeam);
	} catch (error) {
		console.error('Error updating business team:', error);
		res.status(500).json({
			error: 'Error updating business team',
			details: error.message,
		});
	}
};

/**
 * POST /business-teams/users/:business_teams_id
 * @tag BusinessTeam
 * @summary Update users in a business team
 * @description Adds and/or removes users from the specified business team.
 * @operationId editBusinessTeamUsers
 * @pathParam {string} business_teams_id - The business team ID
 * @bodyContent {object} application/json
 * @response 200 - Business team users updated successfully
 * @responseContent {object} 200.application/json
 * @response 400 - Invalid request
 * @response 404 - Resource not found
 * @response 500 - Error updating business team users
 * @prisma_model business_teams
 * @prisma_model users
 */
const editBusinessTeamUsers = async (req, res) => {
	const usersToAdd = req.body.users_to_add;
	const usersToDelete = req.body.users_to_delete;
	const businessTeamId = req.params.business_teams_id;

	if (!businessTeamId) {
		return res.status(400).json({
			success: false,
			error: 'Business team ID is required',
		});
	}
	if (!usersToAdd && !usersToDelete) {
		return res.status(400).json({
			success: false,
			error: 'At least one of users_to_add or users_to_delete must be provided',
		});
	}

	try {
		if (usersToAdd && usersToAdd.length > 0) {
			for (const user_id of usersToAdd) {
				try {
					await BusinessTeamDao.addUserToTeam(businessTeamId, user_id);
				} catch (error) {
					console.log(`Error adding user id: ${user_id} to team id: ${businessTeamId} - error:`, error);
					if (error.message.includes('already assigned')) {
						return res.status(400).json({
							error: 'User is already assigned to a business team',
							details: error.message,
						});
					}
					if (error.message.includes('not found')) {
						return res.status(404).json({
							error: 'Resource not found',
							details: error.message,
						});
					}
					res.status(500).json({
						error: 'Error adding user to business team',
						details: error.message,
					});
				}
			}
		}
		if (usersToDelete && usersToDelete.length > 0) {
			for (const user_id of usersToDelete) {
				try {
					await BusinessTeamDao.removeUserFromTeam(user_id);
				} catch (error) {
					console.log(`Error removing user id: ${user_id} from team id: ${businessTeamId} - error:`, error);
					if (error.message.includes('not found')) {
						return res.status(404).json({
							error: 'User not found',
							details: error.message,
						});
					}
					if (error.message.includes('not assigned')) {
						return res.status(400).json({
							error: 'User is not assigned to any business team',
							details: error.message,
						});
					}
					res.status(500).json({
						error: 'Error deleting user from business team',
						details: error.message,
					});
				}
			}
		}
		res.status(200).json({ success: true, message: 'Business team users updated successfully' });
	} catch (e) {
		console.error('Error updating business team users:', e);
		res.status(500).json({
			success: false,
			error: 'Error updating business team users',
			details: e.message,
		});
	}
};
/**
 * PATCH /business-teams/:business_teams_id/limit_per_person
 * @tag BusinessTeam
 * @summary Update team limit per person
 * @description Updates the limit_per_person value for the team.
 * @operationId setBusinessTeamLimit
 * @pathParam {string} business_teams_id - The business team ID
 * @bodyContent {object} application/json
 * @response 200 - Team limit updated successfully
 * @responseContent {object} 200.application/json
 * @response 404 - Business team not found
 * @response 500 - Error updating team limit
 * @prisma_model business_teams
 */
const setBusinessTeamLimit = async (req, res) => {
	try {
		const { limit_per_person } = req.body;
		const data = {
			business_teams_id: req.params.business_teams_id,
			limit_per_person,
		};
		const businessTeam = await BusinessTeamDao.updateBusinessTeam(data);
		if (!businessTeam) {
			return res.status(404).json({ error: 'Business team not found' });
		}
		res.status(200).json(businessTeam);
	} catch (error) {
		console.error('Error updating business team limit_per_person:', error);
		res.status(500).json({
			error: 'Error updating business team limit_per_person',
			details: error.message,
		});
	}
};
/**
 * PATCH /business-teams/:business_teams_id/name
 * @tag BusinessTeam
 * @summary Update team name
 * @description Updates the team_name for the business team.
 * @operationId setBusinessTeamName
 * @pathParam {string} business_teams_id - The business team ID
 * @bodyContent {object} application/json
 * @response 200 - Team name updated successfully
 * @responseContent {object} 200.application/json
 * @response 404 - Business team not found
 * @response 500 - Error updating team name
 * @prisma_model business_teams
 */
const setBusinessTeamName = async (req, res) => {
	try {
		const { team_name } = req.body;
		const data = {
			business_teams_id: req.params.business_teams_id,
			team_name,
		};
		const businessTeam = await BusinessTeamDao.updateBusinessTeam(data);
		if (!businessTeam) {
			return res.status(404).json({ error: 'Business team not found' });
		}
		res.status(200).json(businessTeam);
	} catch (error) {
		console.error('Error updating business team name:', error);
		res.status(500).json({
			error: 'Error updating business team name',
			details: error.message,
		});
	}
};
/**
 * DELETE /business-teams/:business_teams_id
 * @tag BusinessTeam
 * @summary Delete a business team
 * @description Deletes the specified business team.
 * @operationId deleteBusinessTeam
 * @pathParam {string} business_teams_id - The business team ID
 * @response 200 - Business team deleted successfully
 * @responseContent {object} 200.application/json
 * @response 500 - Error deleting business team
 * @prisma_model business_teams
 */
const deleteBusinessTeam = async (req, res) => {
	try {
		await BusinessTeamDao.deleteBusinessTeam(req.params.business_teams_id);
		res.status(200).json({ success: true, message: 'Business team deleted successfully' });
	} catch (error) {
		console.error('Error deleting business team:', error);
		res.status(500).json({
			success: false,
			error: 'Error deleting business team',
			details: error.message,
		});
	}
};
/**
 * PATCH /business-teams/add_user
 * @tag BusinessTeam
 * @summary Add an unassigned user to a business team
 * @description Adds a user to the specified team.
 * @operationId addUserToTeam
 * @bodyContent {object} application/json
 * @response 200 - User added to team successfully
 * @responseContent {object} 200.application/json
 * @response 400 - Bad request
 * @response 404 - Resource not found
 * @response 500 - Error adding user to team
 * @prisma_model business_teams
 * @prisma_model users
 */
const addUserToTeam = async (req, res) => {
	try {
		const { user_id, business_teams_id } = req.body;
		if (!business_teams_id || !user_id) {
			return res.status(400).json({
				error: 'Both business_teams_id and user_id are required',
			});
		}
		const updatedTeam = await BusinessTeamDao.addUserToTeam(business_teams_id, user_id);
		res.status(200).json({
			message: 'User successfully added to business team',
			team: updatedTeam,
		});
	} catch (error) {
		console.error('Error adding user to business team:', error);
		if (error.message.includes('already assigned')) {
			return res.status(400).json({
				error: 'User is already assigned to a business team',
				details: error.message,
			});
		}
		if (error.message.includes('not found')) {
			return res.status(404).json({
				error: 'Resource not found',
				details: error.message,
			});
		}
		res.status(500).json({
			error: 'Error adding user to business team',
			details: error.message,
		});
	}
};
/**
 * PATCH /business-teams/remove_user
 * @tag BusinessTeam
 * @summary Remove a user from a business team
 * @description Removes a user from their current business team.
 * @operationId removeUserFromTeam
 * @response 200 - User removed from team successfully
 * @responseContent {object} 200.application/json
 * @response 400 - Bad request
 * @response 404 - Resource not found
 * @response 500 - Error removing user from team
 * @prisma_model business_teams
 * @prisma_model users
 */
const removeUserFromTeam = async (req, res) => {
	try {
		const { user_id } = req.params;
		if (!user_id) {
			return res.status(400).json({
				error: 'user_id is required',
			});
		}
		const updatedTeam = await BusinessTeamDao.removeUserFromTeam(user_id);
		res.status(200).json({
			message: 'User successfully removed from business team',
			team: updatedTeam,
		});
	} catch (error) {
		console.error('Error removing user from business team:', error);
		if (error.message.includes('not found')) {
			return res.status(404).json({
				error: 'User not found',
				details: error.message,
			});
		}
		if (error.message.includes('not assigned')) {
			return res.status(400).json({
				error: 'User is not assigned to any business team',
				details: error.message,
			});
		}
		res.status(500).json({
			error: 'Error removing user from business team',
			details: error.message,
		});
	}
};
/**
 * PATCH /business-teams/move_user
 * @tag BusinessTeam
 * @summary Move a user to a different business team
 * @description Moves a user from their current team (if any) to a new team.
 * @operationId moveUserToTeam
 * @bodyContent {object} application/json
 * @response 200 - User moved to new team successfully
 * @responseContent {object} 200.application/json
 * @response 400 - Bad request
 * @response 404 - Resource not found
 * @response 500 - Error moving user to new team
 * @prisma_model business_teams
 * @prisma_model users
 */
const moveUserToTeam = async (req, res) => {
	try {
		const { user_id, business_teams_id } = req.body;
		if (!user_id || !business_teams_id) {
			return res.status(400).json({
				error: 'Both user_id and new_team_id are required',
			});
		}
		const updatedTeam = await BusinessTeamDao.moveUserToTeam(user_id, business_teams_id);
		res.status(200).json({
			message: 'User successfully moved to new business team',
			team: updatedTeam,
		});
	} catch (error) {
		console.error('Error moving user to new team:', error);
		if (error.message.includes('already in this team')) {
			return res.status(400).json({
				error: 'User is already in this team',
				details: error.message,
			});
		}
		if (error.message.includes('not found')) {
			return res.status(404).json({
				error: 'Resource not found',
				details: error.message,
			});
		}
		res.status(500).json({
			error: 'Error moving user to new team',
			details: error.message,
		});
	}
};
export { getBusinessTeamsByBusinessId };
export { getBusinessTeamById };
export { createBusinessTeam };
export { updateBusinessTeam };
export { setBusinessTeamLimit };
export { setBusinessTeamName };
export { addUserToTeam };
export { removeUserFromTeam };
export { moveUserToTeam };
export { deleteBusinessTeam };
export { editBusinessTeamUsers };
export default {
	getBusinessTeamsByBusinessId,
	getBusinessTeamById,
	createBusinessTeam,
	updateBusinessTeam,
	setBusinessTeamLimit,
	setBusinessTeamName,
	addUserToTeam,
	removeUserFromTeam,
	moveUserToTeam,
	deleteBusinessTeam,
	editBusinessTeamUsers,
};
