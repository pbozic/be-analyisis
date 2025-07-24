import { Response } from 'express';

import UserRoleDao from '../../dao/roles/UserRoles.ts';
import { ValidatedRequest } from '../../types/validatedRequest';
import { AssignUserRoleInput } from '../../types/userRoles/UserRole';

/**
 * GET /roles/user-roles
 * @tag UserRoles
 * @summary Get all roles assigned to a user for a reservation module
 * @description Retrieves roles assigned to the user, optionally filtered by reservation module.
 * @operationId getUserRoles
 * @pathParam {string} user_id - The ID of the user.
 * @response 200 - Roles retrieved successfully
 * @responseContent {UserRole[]} 200.application/json
 * @response 500 - Error retrieving roles
 */
export async function getUserRoles(req: ValidatedRequest<null, { user_id: string }>, res: Response): Promise<void> {
	try {
		let reservationModuleId = req.user?.reservation_module_id as string;
		let roles = await UserRoleDao.getUserRoles(reservationModuleId);
		res.status(200).json(roles);
	} catch (error) {
		res.status(500).json({ message: 'Error retrieving user roles', error });
	}
}

/**
 * POST /roles/user-roles
 * @tag UserRoles
 * @summary Assign a role to a user
 * @description Assigns a role to the user, optionally scoped to a reservation module.
 * @operationId assignUserRole
 * @pathParam {string} user_id - The ID of the user.
 * @requestBody {AssignUserRoleInput} requestBody - The role assignment data
 * @response 201 - Role assigned successfully
 * @response 400 - Invalid input data
 * @response 500 - Error assigning role
 */
export async function assignUserRole(req: ValidatedRequest<AssignUserRoleInput>, res: Response): Promise<void> {
	try {
		let { role_id, user_id } = req.body;
		let reservationModuleId = req.user?.reservation_module_id as string;
		let role = await UserRoleDao.createUserRole({ user_id, role_id }, reservationModuleId);
		res.status(201).json(role);
	} catch (error) {
		res.status(500).json({ message: 'Error assigning role', error });
	}
}

/**
 * DELETE /roles/user-roles/{user_id}/roles/{role_id}
 * @tag UserRoles
 * @summary Remove a role from a user
 * @description Removes the specified role from the user.
 * @operationId removeUserRole
 * @pathParam {string} user_id - The ID of the user.
 * @pathParam {string} role_id - The ID of the role.
 * @queryParam {string} reservation_module_id - Optional module ID for scoped removal
 * @response 204 - Role removed successfully
 * @response 500 - Error removing role
 */
export async function removeUserRole(
	req: ValidatedRequest<null, { user_id: string; role_id: string }>,
	res: Response
): Promise<void> {
	try {
		let { user_id, role_id } = req.params;
		let reservationModuleId = req.user?.reservation_module_id as string;
		await UserRoleDao.deleteUserRole(user_id, role_id, reservationModuleId);
		res.status(204).send();
	} catch (error) {
		res.status(500).json({ message: 'Error removing user role', error });
	}
}

export default {
	getUserRoles,
	assignUserRole,
	removeUserRole,
};
