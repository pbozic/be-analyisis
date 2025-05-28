import prisma from '../prisma/prisma.js';
const cropped_user_columns = {
	first_name: true,
	last_name: true,
	user_id: true,
};
/**
 * Creates a new business team
 * @param {Object} data - The business team data
 * @returns {Promise} Created business team
 */
const createBusinessTeam = async (data) => {
	try {
		return await prisma.business_teams.create({
			data,
		});
	} catch (error) {
		console.error('Error creating business team:', error);
		throw error;
	}
};
/**
 * Updates an existing business team
 * @param {Object} data - The business team data with id
 * @returns {Promise} Updated business team
 */
const updateBusinessTeam = async (data) => {
	try {
		if (!data.business_teams_id) {
			throw new Error('business_teams_id is required for update');
		}
		return await prisma.business_teams.update({
			where: {
				business_teams_id: data.business_teams_id,
			},
			data,
		});
	} catch (error) {
		console.error('Error updating business team:', error);
		throw error;
	}
};
/**
 * Add a user to a business team
 * @param {string} business_teams_id - The ID of the business team
 * @param {string} user_id - The ID of the user to add
 * @returns {Promise} Updated user
 */
const addUserToTeam = async (business_teams_id, user_id) => {
	try {
		// First check if user exists and isn't already in a team
		const user = await prisma.users.findUnique({
			where: { user_id },
			select: { business_teams_id: true },
		});
		if (!user) {
			throw new Error('User not found');
		}
		if (user.business_teams_id) {
			throw new Error('User is already assigned to a business team');
		}
		// Check if business team exists
		const team = await prisma.business_teams.findUnique({
			where: { business_teams_id },
		});
		if (!team) {
			throw new Error('Business team not found');
		}
		// Connect user to business team using Prisma's connect
		return await prisma.business_teams.update({
			where: { business_teams_id },
			data: {
				users: {
					connect: { user_id },
				},
			},
			include: {
				users: {
					select: cropped_user_columns,
				},
			},
		});
	} catch (error) {
		console.error('Error adding user to business team:', error);
		throw error;
	}
};
/**
 * Remove a user from a business team
 * @param {string} user_id - The ID of the user to remove
 * @returns {Promise} Updated business team
 */
const removeUserFromTeam = async (user_id) => {
	try {
		// Check if user exists and is in a team
		const user = await prisma.users.findUnique({
			where: { user_id },
			select: { business_teams_id: true },
		});
		if (!user) {
			throw new Error('User not found');
		}
		if (!user.business_teams_id) {
			throw new Error('User is not assigned to any business team');
		}
		// Disconnect user from business team using Prisma's disconnect
		return await prisma.business_teams.update({
			where: { business_teams_id: user.business_teams_id },
			data: {
				users: {
					disconnect: { user_id },
				},
			},
			include: {
				users: {
					select: cropped_user_columns,
				},
			},
		});
	} catch (error) {
		console.error('Error removing user from business team:', error);
		throw error;
	}
};
/**
 * Move a user from their current team (if any) to a new team
 * @param {string} user_id - The ID of the user to move
 * @param {string} new_team_id - The ID of the team to move the user to
 * @returns {Promise} Updated new business team
 */
const moveUserToTeam = async (user_id, new_team_id) => {
	try {
		// Check if user exists
		const user = await prisma.users.findUnique({
			where: { user_id },
			select: {
				user_id: true,
				business_teams_id: true,
			},
		});
		if (!user) {
			throw new Error('User not found');
		}
		// Check if new team exists
		const newTeam = await prisma.business_teams.findUnique({
			where: { business_teams_id: new_team_id },
		});
		if (!newTeam) {
			throw new Error('Target business team not found');
		}
		// If user is in the same team, no need to move
		if (user.business_teams_id === new_team_id) {
			throw new Error('User is already in this team');
		}
		// Use a transaction to ensure both disconnect and connect operations succeed
		return await prisma.$transaction(async (prisma) => {
			// If user is in a team, disconnect from current team
			if (user.business_teams_id) {
				await prisma.business_teams.update({
					where: { business_teams_id: user.business_teams_id },
					data: {
						users: {
							disconnect: { user_id },
						},
					},
				});
			}
			// Connect to new team
			return await prisma.business_teams.update({
				where: { business_teams_id: new_team_id },
				data: {
					users: {
						connect: { user_id },
					},
				},
				include: {
					users: {
						select: cropped_user_columns,
					},
				},
			});
		});
	} catch (error) {
		console.error('Error moving user to new team:', error);
		throw error;
	}
};
/**
 * Retrieves a business team by its ID
 * @param {string} business_teams_id - The ID of the business team
 * @returns {Promise} Business team with associated users
 */
const getBusinessTeamById = async (business_teams_id) => {
	try {
		if (!business_teams_id) {
			throw new Error('business_teams_id is required');
		}
		return await prisma.business_teams.findUnique({
			where: {
				business_teams_id: business_teams_id,
			},
			include: {
				users: {
					select: cropped_user_columns,
				},
			},
		});
	} catch (error) {
		console.error('Error fetching business team by ID:', error);
		throw error;
	}
};
/**
 * Retrieves all business teams for a specific business
 * @param {string} business_id - The ID of the business
 * @returns {Promise} Array of business teams with associated users
 */
const getBusinessTeamsForBusinessId = async (business_id) => {
	try {
		if (!business_id) {
			throw new Error('business_id is required');
		}
		return await prisma.business_teams.findMany({
			where: {
				business_id: business_id,
			},
			include: {
				users: {
					select: cropped_user_columns,
				},
			},
		});
	} catch (error) {
		console.error('Error fetching business teams for business:', error);
		throw error;
	}
};
/**
 * Deletes a business team by its ID
 * @param {string} business_teams_id - The ID of the business team to delete
 * @returns {Promise} Deleted business team
 */
const deleteBusinessTeam = async (business_teams_id) => {
	try {
		if (!business_teams_id) {
			throw new Error('business_teams_id is required');
		}
		return await prisma.business_teams.delete({
			where: {
				business_teams_id: business_teams_id,
			},
		});
	} catch (error) {
		console.error('Error deleting business team:', error);
		throw error;
	}
};
export { createBusinessTeam };
export { updateBusinessTeam };
export { addUserToTeam };
export { removeUserFromTeam };
export { moveUserToTeam };
export { getBusinessTeamById };
export { getBusinessTeamsForBusinessId };
export { deleteBusinessTeam };
export default {
	createBusinessTeam,
	updateBusinessTeam,
	addUserToTeam,
	removeUserFromTeam,
	moveUserToTeam,
	getBusinessTeamById,
	getBusinessTeamsForBusinessId,
	deleteBusinessTeam,
};
