import { Response } from 'express';

import BusinessTeamDao from '../dao/BusinessTeam.js';
import { ValidatedRequest } from '../types/validatedRequest.ts';
import {
	AddUserToTeamInput,
	CreateBusinessTeamInput,
	EditBusinessTeamUsersInput,
	MoveUserToTeamInput,
	SetBusinessTeamLimitInput,
	SetBusinessTeamNameInput,
} from '../schemas/dto/BusinessTeam/BusinessTeam.validation.ts';

/**
 * GET /business-teams/:business_id
 * @tag BusinessTeam
 * @summary Get all business teams for a business
 * @description Retrieves all business teams that belong to a given business.
 * @operationId getBusinessTeamsByBusinessId
 * @pathParam {string} business_id - The business ID
 * @response 200 - Business teams retrieved successfully
 * @responseContent {BusinessTeamWithUsersResponse[]} 200.application/json
 * @response 500 - Error retrieving business teams
 * @prisma_model business_teams
 */
export async function getBusinessTeamsByBusinessId(
	req: ValidatedRequest<never, { business_id: string }>,
	res: Response
): Promise<void> {
	try {
		const businessTeams = await BusinessTeamDao.getBusinessTeamsForBusinessId(req.params.business_id);
		res.status(200).json(businessTeams);
	} catch (error: any) {
		console.error('Error retrieving business teams:', error);
		res.status(500).json({
			error: 'Error retrieving business teams',
			details: error?.message ?? String(error),
		});
	}
}

/**
 * GET /business-teams/:business_teams_id
 * @tag BusinessTeam
 * @summary Get a business team by ID
 * @description Retrieves a single business team by its ID including users.
 * @operationId getBusinessTeamById
 * @pathParam {string} business_teams_id - The business team ID
 * @response 200 - Business team retrieved successfully
 * @responseContent {BusinessTeamWithUsersResponse} 200.application/json
 * @response 404 - Business team not found
 * @response 500 - Error retrieving business team
 * @prisma_model business_teams
 * @prisma_model users
 */
export async function getBusinessTeamById(
	req: ValidatedRequest<never, { business_teams_id: string }>,
	res: Response
): Promise<void> {
	try {
		const businessTeam = await BusinessTeamDao.getBusinessTeamById(req.params.business_teams_id);
		if (!businessTeam) {
			res.status(404).json({ error: 'Business team not found' });
			return;
		}
		res.status(200).json(businessTeam);
	} catch (error: any) {
		console.error('Error retrieving business team:', error);
		res.status(500).json({
			error: 'Error retrieving business team',
			details: error?.message ?? String(error),
		});
	}
}

/**
 * POST /business-teams/create
 * @tag BusinessTeam
 * @summary Create a new business team
 * @description Creates a new business team; optionally assigns initial users.
 * @operationId createBusinessTeam
 * @bodyContent {CreateBusinessTeam} application/json
 * @bodyRequired
 * @response 201 - Business team created successfully
 * @responseContent {BusinessTeamWithUsersResponse} 201.application/json
 * @response 500 - Error creating business team
 * @prisma_model business_teams
 * @prisma_model users
 */
export async function createBusinessTeam(req: ValidatedRequest<CreateBusinessTeamInput>, res: Response): Promise<void> {
	try {
		const { users, ...teamData } = req.body || {};
		const businessTeam = await BusinessTeamDao.createBusinessTeam(teamData);

		if (users && users.length > 0) {
			const addedUsers = await BusinessTeamDao.addUManyUsersToTeam(businessTeam.business_teams_id, users);
			res.status(201).json(addedUsers);
			return;
		}
		res.status(201).json(businessTeam);
	} catch (error: any) {
		console.error('Error creating business team:', error);
		res.status(500).json({
			error: 'Error creating business team',
			details: error?.message ?? String(error),
		});
	}
}

/**
 * PATCH /business-teams/:business_teams_id
 * @tag BusinessTeam
 * @summary Update an existing business team
 * @description Updates fields such as team name or limit per person.
 * @operationId updateBusinessTeam
 * @pathParam {string} business_teams_id - The business team ID
 * @bodyContent {BusinessTeamWithUsers} application/json
 * @response 200 - Business team updated successfully
 * @responseContent {BusinessTeamWithUsersResponse} 200.application/json
 * @response 404 - Business team not found
 * @response 500 - Error updating business team
 * @prisma_model business_teams
 */
export async function updateBusinessTeam(
	req: ValidatedRequest<EditBusinessTeamUsersInput, { business_teams_id: string }>,
	res: Response
): Promise<void> {
	try {
		const data = {
			business_teams_id: req.params.business_teams_id,
			...req.body,
		};
		const businessTeam = await BusinessTeamDao.updateBusinessTeam(data);
		if (!businessTeam) {
			res.status(404).json({ error: 'Business team not found' });
			return;
		}
		res.status(200).json(businessTeam);
	} catch (error: any) {
		console.error('Error updating business team:', error);
		res.status(500).json({
			error: 'Error updating business team',
			details: error?.message ?? String(error),
		});
	}
}

/**
 * POST /business-teams/users/:business_teams_id
 * @tag BusinessTeam
 * @summary Update users in a business team
 * @description Adds and/or removes users from the specified business team.
 * @operationId editBusinessTeamUsers
 * @pathParam {string} business_teams_id - The business team ID
 * @bodyContent {EditBusinessTeamUsersInput} application/json
 * @response 200 - Business team users updated successfully
 * @responseContent {BusinessTeamWithUsersResponse} 200.application/json
 * @response 400 - Invalid request
 * @response 404 - Resource not found
 * @response 500 - Error updating business team users
 * @prisma_model business_teams
 * @prisma_model users
 */
export async function editBusinessTeamUsers(
	req: ValidatedRequest<EditBusinessTeamUsersInput, { business_teams_id: string }>,
	res: Response
): Promise<void> {
	const usersToAdd = (req.body && req.body.users_to_add) || null;
	const usersToDelete = (req.body && req.body.users_to_delete) || null;
	const businessTeamId = (req.params && (req.params as any).business_teams_id) as string | undefined;

	if (!businessTeamId) {
		res.status(400).json({
			success: false,
			error: 'Business team ID is required',
		});
		return;
	}
	if (!usersToAdd && !usersToDelete) {
		res.status(400).json({
			success: false,
			error: 'At least one of users_to_add or users_to_delete must be provided',
		});
		return;
	}
	try {
		if (usersToAdd && usersToAdd.length > 0) {
			await BusinessTeamDao.addUManyUsersToTeam(businessTeamId, usersToAdd);
		}
		if (usersToDelete && usersToDelete.length > 0) {
			await BusinessTeamDao.removeManyUserFromTeam(businessTeamId, usersToDelete);
		}
		res.status(200).json({ success: true, message: 'Business team users updated successfully' });
	} catch (e: any) {
		console.error('Error updating business team users:', e);
		res.status(500).json({
			success: false,
			error: 'Error updating business team users',
			details: e?.message ?? String(e),
		});
	}
}

/**
 * PATCH /business-teams/:business_teams_id/limit
 * @tag BusinessTeam
 * @summary Update team limit per person
 * @description Updates the limit_per_person value for the team.
 * @operationId setBusinessTeamLimit
 * @pathParam {string} business_teams_id - The business team ID
 * @bodyContent {SetBusinessTeamLimit} application/json
 * @response 200 - Team limit updated successfully
 * @responseContent {BusinessTeamWithUsersResponse} 200.application/json
 * @response 404 - Business team not found
 * @response 500 - Error updating team limit
 * @prisma_model business_teams
 */
export async function setBusinessTeamLimit(
	req: ValidatedRequest<SetBusinessTeamLimitInput, { business_teams_id: string }>,
	res: Response
): Promise<void> {
	try {
		const { limit_per_person } = req.body;
		const data = {
			business_teams_id: req.params.business_teams_id,
			limit_per_person,
		};
		const businessTeam = await BusinessTeamDao.updateBusinessTeam(data);
		if (!businessTeam) {
			res.status(404).json({ error: 'Business team not found' });
			return;
		}
		res.status(200).json(businessTeam);
	} catch (error: any) {
		console.error('Error updating business team limit_per_person:', error);
		res.status(500).json({
			error: 'Error updating business team limit_per_person',
			details: error?.message ?? String(error),
		});
	}
}

/**
 * PATCH /business-teams/:business_teams_id/name
 * @tag BusinessTeam
 * @summary Update team name
 * @description Updates the team_name for the business team.
 * @operationId setBusinessTeamName
 * @pathParam {string} business_teams_id - The business team ID
 * @bodyContent {SetBusinessTeamName} application/json
 * @response 200 - Team name updated successfully
 * @responseContent {BusinessTeamWithUsersResponse} 200.application/json
 * @response 404 - Business team not found
 * @response 500 - Error updating team name
 * @prisma_model business_teams
 */
export async function setBusinessTeamName(
	req: ValidatedRequest<SetBusinessTeamNameInput, { business_teams_id: string }>,
	res: Response
): Promise<void> {
	try {
		const { team_name } = req.body as any;
		const data = {
			business_teams_id: req.params.business_teams_id,
			team_name,
		};
		const businessTeam = await BusinessTeamDao.updateBusinessTeam(data);
		if (!businessTeam) {
			res.status(404).json({ error: 'Business team not found' });
			return;
		}
		res.status(200).json(businessTeam);
	} catch (error: any) {
		console.error('Error updating business team name:', error);
		res.status(500).json({
			error: 'Error updating business team name',
			details: error?.message ?? String(error),
		});
	}
}

/**
 * DELETE /business-teams/:business_teams_id
 * @tag BusinessTeam
 * @summary Delete a business team
 * @description Deletes the specified business team.
 * @operationId deleteBusinessTeam
 * @pathParam {string} business_teams_id - The business team ID
 * @response 200 - Business team deleted successfully
 * @responseContent {BusinessTeamResponse} 200.application/json
 * @response 500 - Error deleting business team
 * @prisma_model business_teams
 */
export async function deleteBusinessTeam(
	req: ValidatedRequest<never, { business_teams_id: string }>,
	res: Response
): Promise<void> {
	try {
		await BusinessTeamDao.deleteBusinessTeam(req.params.business_teams_id);
		res.status(200).json({ success: true, message: 'Business team deleted successfully' });
	} catch (error: any) {
		console.error('Error deleting business team:', error);
		res.status(500).json({
			success: false,
			error: 'Error deleting business team',
			details: error?.message ?? String(error),
		});
	}
}

/**
 * PATCH /business-teams/add_user
 * @tag BusinessTeam
 * @summary Add an unassigned user to a business team
 * @description Adds a user to the specified team.
 * @operationId addUserToTeam
 * @bodyContent {AddUserToTeam} application/json
 * @response 200 - User added to team successfully
 * @responseContent {BusinessTeamWithUsersResponse} 200.application/json
 * @response 400 - Bad request
 * @response 404 - Resource not found
 * @response 500 - Error adding user to team
 * @prisma_model business_teams
 * @prisma_model users
 */
export async function addUserToTeam(req: ValidatedRequest<AddUserToTeamInput>, res: Response): Promise<void> {
	try {
		const { user_id, business_teams_id } = req.body || {};
		if (!business_teams_id || !user_id) {
			res.status(400).json({ error: 'Both business_teams_id and user_id are required' });
			return;
		}
		const updatedTeam = await BusinessTeamDao.addUserToTeam(business_teams_id, user_id);
		res.status(200).json({ message: 'User successfully added to business team', team: updatedTeam });
	} catch (error: any) {
		console.error('Error adding user to business team:', error);
		if (error.message && error.message.includes('already assigned')) {
			res.status(400).json({ error: 'User is already assigned to a business team', details: error.message });
			return;
		}
		if (error.message && error.message.includes('not found')) {
			res.status(404).json({ error: 'Resource not found', details: error.message });
			return;
		}
		res.status(500).json({ error: 'Error adding user to business team', details: error.message });
	}
}

/**
 * PATCH /business-teams/remove_user
 * @tag BusinessTeam
 * @summary Remove a user from a business team
 * @description Removes a user from their current business team.
 * @operationId removeUserFromTeam
 * @response 200 - User removed from team successfully
 * @responseContent {BusinessTeamWithUsersResponse} 200.application/json
 * @response 400 - Bad request
 * @response 404 - Resource not found
 * @response 500 - Error removing user from team
 * @prisma_model business_teams
 * @prisma_model users
 */
export async function removeUserFromTeam(
	req: ValidatedRequest<never, { user_id: string }>,
	res: Response
): Promise<void> {
	try {
		const { user_id } = req.params;
		if (!user_id) {
			res.status(400).json({ error: 'user_id is required' });
			return;
		}
		const updatedTeam = await BusinessTeamDao.removeUserFromTeam(user_id);
		res.status(200).json({ message: 'User successfully removed from business team', team: updatedTeam });
	} catch (error: any) {
		console.error('Error removing user from business team:', error);
		if (error.message && error.message.includes('not found')) {
			res.status(404).json({ error: 'User not found', details: error.message });
			return;
		}
		if (error.message && error.message.includes('not assigned')) {
			res.status(400).json({ error: 'User is not assigned to any business team', details: error.message });
			return;
		}
		res.status(500).json({ error: 'Error removing user from business team', details: error.message });
	}
}

/**
 * PATCH /business-teams/move_user
 * @tag BusinessTeam
 * @summary Move a user to a different business team
 * @description Moves a user from their current team (if any) to a new team.
 * @operationId moveUserToTeam
 * @bodyContent {MoveUserToTeam} application/json
 * @response 200 - User moved to new team successfully
 * @responseContent {BusinessTeamWithUsersResponse} 200.application/json
 * @response 400 - Bad request
 * @response 404 - Resource not found
 * @response 500 - Error moving user to new team
 * @prisma_model business_teams
 * @prisma_model users
 */
export async function moveUserToTeam(req: ValidatedRequest<MoveUserToTeamInput>, res: Response): Promise<void> {
	try {
		const { user_id, business_teams_id } = req.body || {};
		if (!user_id || !business_teams_id) {
			res.status(400).json({ error: 'Both user_id and new_team_id are required' });
			return;
		}
		const updatedTeam = await BusinessTeamDao.moveUserToTeam(user_id, business_teams_id);
		res.status(200).json({ message: 'User successfully moved to new business team', team: updatedTeam });
	} catch (error: any) {
		console.error('Error moving user to new team:', error);
		if (error.message && error.message.includes('already in this team')) {
			res.status(400).json({ error: 'User is already in this team', details: error.message });
			return;
		}
		if (error.message && error.message.includes('not found')) {
			res.status(404).json({ error: 'Resource not found', details: error.message });
			return;
		}
		res.status(500).json({ error: 'Error moving user to new team', details: error.message });
	}
}

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
