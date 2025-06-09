import BusinessTeamDao from '../dao/BusinessTeam.js';
/**
 * Get all business teams for a business
 * @route GET /business-teams/:business_id
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
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
 * Get a business team by ID
 * @route GET /business-teams/:business_teams_id
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
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
 * Create a new business team
 * @route POST /business-teams/create
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @body {Object} req.body
 * @body {string} req.body.business_id - ID of the business this team belongs to
 * @body {string} req.body.team_name - Name of the business team
 * @body {Object} req.body.users - Array of user IDs to assign to the team
 * @body {number} [req.body.limit_per_person] - Optional user limit_per_person for the team
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
 * Update an existing business team
 * @route PATCH /business-teams/:business_teams_id
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @body {Object} req.body - Fields to update
 * @body {string} [req.body.team_name] - New team team_name
 * @body {number} [req.body.limit_per_person] - New team limit_per_person
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
 * Update users in a business team
 * @route POST /business-teams/users/:business_teams_id
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @body {Object} req.body - Two arrays to update
 * @body {Object} [req.body.users_to_add] - Array of ids of new users to add to the team
 * @body {Object} [req.body.users_to_delete] - Array of ids of users to delete from the team
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
 * Update an existing business team's limit_per_person
 * @route PATCH /business-teams/:business_teams_id/limit_per_person
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @body {Object} req.body
 * @body {number} req.body.limit_per_person - New user limit_per_person for the team
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
 * Update an existing business team's team_name
 * @route PATCH /business-teams/:business_teams_id/name
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @body {Object} req.body
 * @body {string} req.body.team_name - New name for the team
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
 * Delete a business team
 * @route DELETE /business-teams/:business_teams_id
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
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
 * Add an unassigned user to a business team
 * @route PATCH /business-teams/add_user
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @body {Object} req.body
 * @body {string} req.body.user_id - ID of the user to add
 * @body {string} req.body.business_teams_id - ID of the team to add the user to
 * @returns {Object} Updated team with new user
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
 * Remove a user from a business team
 * @route PATCH /business-teams/remove_user
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @body {Object} req.body
 * @body {string} req.body.user_id - ID of the user to remove
 * @returns {Object} Updated team without the removed user
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
 * Move a user to a different business team
 * @route PATCH /business-teams/move_user
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @body {Object} req.body
 * @body {string} req.body.user_id - ID of the user to move
 * @body {string} req.body.business_teams_id - ID of the destination team
 * @returns {Object} Updated destination team with the moved user
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
