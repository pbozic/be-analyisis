// --- Controller: reservation/UserPermissionController.ts ---

import { Request, Response } from 'express';

import UserPermissionDao from '../../dao/roles/UserPermissions';
import { AuthenticatedRequest, ValidatedRequest } from '../../types/validatedRequest';
import { CreateUserPermissionInput, UpdateUserPermissionInput } from '../../types/userRoles/UserPermission';

/**
 * GET /roles/user-permissions
 * @tag Reservation
 * @summary Get all user permissions for current reservation module
 * @operationId getUserPermissions
 * @response 200 - List of user permissions
 * @responseContent {object} 200.application/json
 * @response 500 - Failed to fetch user permissions
 */
export async function getUserPermissions(req: AuthenticatedRequest, res: Response): Promise<void> {
	try {
		const reservationModuleId = req.user?.reservation_module_id || null;
		const userPermissions = await UserPermissionDao.getUserPermissions(reservationModuleId);
		res.status(200).json(userPermissions);
	} catch (error) {
		res.status(500).json({ message: 'Error retrieving user permissions', error });
	}
}

/**
 * POST /roles/user-permissions
 * @tag Reservation
 * @summary Create a user permission
 * @operationId createUserPermission
 * @requestBody {CreateUserPermissionInput} requestBody
 * @response 201 - User permission created
 * @responseContent {UserPermissionResponseBase} 201.application/json
 * @response 500 - Failed to create user permission
 */
export async function createUserPermission(
	req: ValidatedRequest<CreateUserPermissionInput>,
	res: Response
): Promise<void> {
	try {
		const permission = await UserPermissionDao.createUserPermission(req.body);
		res.status(201).json(permission);
	} catch (error) {
		res.status(500).json({ message: 'Error creating user permission', error });
	}
}

/**
 * PUT /roles/user-permissions/:user_permission_id
 * @tag Reservation
 * @summary Update a user permission
 * @operationId updateUserPermission
 * @pathParam {string} user_permission_id - ID of the user permission
 * @requestBody {UpdateUserPermissionInput} requestBody
 * @response 200 - User permission updated
 * @responseContent {UserPermissionResponseBase} 200.application/json
 * @response 500 - Failed to update user permission
 */
export async function updateUserPermission(
	req: ValidatedRequest<UpdateUserPermissionInput, { user_permission_id: string }>,
	res: Response
): Promise<void> {
	try {
		const permission = await UserPermissionDao.updateUserPermission(req.params.user_permission_id, req.body);
		res.status(200).json(permission);
	} catch (error) {
		res.status(500).json({ message: 'Error updating user permission', error });
	}
}

/**
 * DELETE /roles/user-permissions/:user_permission_id
 * @tag Reservation
 * @summary Delete a user permission
 * @operationId deleteUserPermission
 * @pathParam {string} user_permission_id - ID of the user permission
 * @response 204 - User permission deleted
 * @response 500 - Failed to delete user permission
 */
export async function deleteUserPermission(
	req: ValidatedRequest<null, { user_permission_id: string }>,
	res: Response
): Promise<void> {
	try {
		await UserPermissionDao.deleteUserPermission(req.params.user_permission_id);
		res.status(204).send();
	} catch (error) {
		res.status(500).json({ message: 'Error deleting user permission', error });
	}
}

/**
 * GET /roles/permissions
 * @tag Reservation
 * @summary Get all permissions definitions (used for UI assignment)
 * @operationId getAllPermissions
 * @response 200 - List of defined permissions
 * @responseContent {UserPermissionResponseBase[]} 200.application/json
 * @response 500 - Failed to fetch permissions
 */
export async function getAllPermissions(_req: Request, res: Response): Promise<void> {
	try {
		const permissions = await UserPermissionDao.getAllPermissions();
		res.status(200).json(permissions);
	} catch (error) {
		res.status(500).json({ message: 'Error retrieving all permissions', error });
	}
}

export default {
	getUserPermissions,
	createUserPermission,
	updateUserPermission,
	deleteUserPermission,
	getAllPermissions,
};
