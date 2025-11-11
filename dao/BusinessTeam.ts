import prisma from '../prisma/prisma.js';
import type { BusinessTeamResponse, BusinessTeamWithUsersResponse } from '../schemas/dto/BusinessTeam/index.js';
import {
	toBusinessTeamResponse,
	toBusinessTeamWithUsersResponse,
	toBusinessTeamList,
} from '../schemas/dto/BusinessTeam/businessTeam.mappers.js';
import type { BusinessTeamWithUsersPrisma, BusinessTeamDefaultPrisma } from '../prisma/includes/businessTeam.js';

const cropped_user_columns = {
	first_name: true,
	last_name: true,
	user_id: true,
} as const;

/**
 * Creates a new business team
 * @param {Object} data - The business team data
 * @returns {Promise<BusinessTeamResponse>} Created business team
 */
export async function createBusinessTeam(data: Record<string, any>): Promise<BusinessTeamResponse> {
	try {
		const row = await prisma.business_teams.create({ data });

		return toBusinessTeamResponse(row as BusinessTeamDefaultPrisma);
	} catch (error) {
		console.error('Error creating business team:', error);
		throw error;
	}
}

/**
 * Updates an existing business team
 * @param {Object} data - The business team data with id
 * @returns {Promise<BusinessTeamWithUsersResponse>} Updated business team
 */
export async function updateBusinessTeam(
	data: Record<string, any> & { business_teams_id: string }
): Promise<BusinessTeamWithUsersResponse> {
	try {
		if (!data.business_teams_id) {
			throw new Error('business_teams_id is required for update');
		}
		const row = await prisma.business_teams.update({
			where: { business_teams_id: data.business_teams_id },
			data,
			include: { users: { select: cropped_user_columns } },
		});

		return toBusinessTeamWithUsersResponse(row as BusinessTeamWithUsersPrisma);
	} catch (error) {
		console.error('Error updating business team:', error);
		throw error;
	}
}

/**
 * Add a user to a business team
 * @param {string} business_teams_id - The ID of the business team
 * @param {string} user_id - The ID of the user to add
 * @returns {Promise<BusinessTeamWithUsersResponse>} Updated user
 */
export async function addUserToTeam(
	business_teams_id: string,
	user_id: string
): Promise<BusinessTeamWithUsersResponse> {
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
		const row = await prisma.business_teams.update({
			where: { business_teams_id },
			data: { users: { connect: { user_id } } },
			include: { users: { select: cropped_user_columns } },
		});

		return toBusinessTeamWithUsersResponse(row as BusinessTeamWithUsersPrisma);
	} catch (error) {
		console.error('Error adding user to business team:', error);
		throw error;
	}
}

/**
 * Remove a user from a business team
 * @param {string} user_id - The ID of the user to remove
 * @returns {Promise<BusinessTeamWithUsersResponse>} Updated business team
 */
export async function removeUserFromTeam(user_id: string): Promise<BusinessTeamWithUsersResponse> {
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
		const row = await prisma.business_teams.update({
			where: { business_teams_id: user.business_teams_id },
			data: { users: { disconnect: { user_id } } },
			include: { users: { select: cropped_user_columns } },
		});

		return toBusinessTeamWithUsersResponse(row as BusinessTeamWithUsersPrisma);
	} catch (error) {
		console.error('Error removing user from business team:', error);
		throw error;
	}
}

/**
 * Move a user from their current team (if any) to a new team
 * @param {string} user_id - The ID of the user to move
 * @param {string} new_team_id - The ID of the team to move the user to
 * @returns {Promise<BusinessTeamWithUsersResponse>} Updated new business team
 */
export async function moveUserToTeam(user_id: string, new_team_id: string): Promise<BusinessTeamWithUsersResponse> {
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
		return await prisma.$transaction(async (tx: any) => {
			// If user is in a team, disconnect from current team
			if (user.business_teams_id) {
				await tx.business_teams.update({
					where: { business_teams_id: user.business_teams_id },
					data: {
						users: {
							disconnect: { user_id },
						},
					},
				});
			}

			// Connect to new team
			const row = await tx.business_teams.update({
				where: { business_teams_id: new_team_id },
				data: { users: { connect: { user_id } } },
				include: { users: { select: cropped_user_columns } },
			});

			return toBusinessTeamWithUsersResponse(row as BusinessTeamWithUsersPrisma);
		});
	} catch (error) {
		console.error('Error moving user to new team:', error);
		throw error;
	}
}

/**
 * Retrieves a business team by its ID
 * @param {string} business_teams_id - The ID of the business team
 * @returns {Promise<BusinessTeamWithUsersResponse | null>} Business team with associated users
 */
export async function getBusinessTeamById(business_teams_id: string): Promise<BusinessTeamWithUsersResponse | null> {
	try {
		if (!business_teams_id) {
			throw new Error('business_teams_id is required');
		}

		const row = await prisma.business_teams.findUnique({
			where: { business_teams_id: business_teams_id },
			include: { users: { select: cropped_user_columns } },
		});

		return row ? toBusinessTeamWithUsersResponse(row as BusinessTeamWithUsersPrisma) : null;
	} catch (error) {
		console.error('Error fetching business team by ID:', error);
		throw error;
	}
}

/**
 * Retrieves all business teams for a specific business
 * @param {string} business_id - The ID of the business
 * @returns {Promise<BusinessTeamWithUsersResponse[]>} Array of business teams with associated users
 */
export async function getBusinessTeamsForBusinessId(business_id: string): Promise<BusinessTeamWithUsersResponse[]> {
	try {
		if (!business_id) {
			throw new Error('business_id is required');
		}

		const rows = await prisma.business_teams.findMany({
			where: { business_id: business_id },
			include: { users: { select: cropped_user_columns } },
		});

		return toBusinessTeamList(rows as BusinessTeamWithUsersPrisma[]);
	} catch (error) {
		console.error('Error fetching business teams for business:', error);
		throw error;
	}
}

/**
 * Deletes a business team by its ID
 * @param {string} business_teams_id - The ID of the business team to delete
 * @returns {Promise<BusinessTeamResponse>} Deleted business team
 */
export async function deleteBusinessTeam(business_teams_id: string): Promise<BusinessTeamResponse> {
	try {
		if (!business_teams_id) {
			throw new Error('business_teams_id is required');
		}

		const row = await prisma.business_teams.delete({ where: { business_teams_id: business_teams_id } });

		return toBusinessTeamResponse(row as BusinessTeamDefaultPrisma);
	} catch (error) {
		console.error('Error deleting business team:', error);
		throw error;
	}
}

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
