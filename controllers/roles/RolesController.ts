import { Response } from 'express';

import { ValidatedRequest } from '../../types/validatedRequest.ts';
import RoleDao from '../../dao/roles/Role.ts';
import { CreateRoleInput, UpdateRoleInput } from '../../types/userRoles/Role.ts';

/**
 * GET /roles/roles
 * @tag Reservation
 * @summary Get all roles for the current reservation module
 * @operationId getReservationRoles
 * @response 200 - Roles retrieved
 * @responseContent {Role[]} 200.application/json
 * @response 500 - Error retrieving roles
 */
export async function getRoles(req: ValidatedRequest, res: Response): Promise<void> {
	try {
		let reservationModuleId = req.user?.reservation_module_id || null;
		let roles = await RoleDao.getRoles(reservationModuleId);
		res.status(200).json(roles);
	} catch (error) {
		res.status(500).json({ message: 'Error retrieving roles', error });
	}
}

/**
 * POST /roles/roles
 * @tag Reservation
 * @summary Create a new role
 * @operationId createReservationRole
 * @requestBody {CreateRoleInput} requestBody
 * @response 201 - Role created
 * @responseContent {Role} 201.application/json
 * @response 500 - Error creating role
 */
export async function createRole(req: ValidatedRequest<CreateRoleInput>, res: Response): Promise<void> {
	try {
		let role = await RoleDao.createRole(req.body);
		res.status(201).json(role);
	} catch (error) {
		res.status(500).json({ message: 'Error creating role', error });
	}
}

/**
 * PUT /roles/roles/{role_id}
 * @tag Reservation
 * @summary Update a role
 * @operationId updateReservationRole
 * @pathParam {string} role_id
 * @requestBody {UpdateRoleInput} requestBody
 * @response 200 - Role updated
 * @responseContent {Role} 200.application/json
 * @response 500 - Error updating role
 */
export async function updateRole(
	req: ValidatedRequest<UpdateRoleInput, { role_id: string }>,
	res: Response
): Promise<void> {
	try {
		let role = await RoleDao.updateRole(req.params.role_id, req.body);
		res.status(200).json(role);
	} catch (error) {
		res.status(500).json({ message: 'Error updating role', error });
	}
}

/**
 * DELETE /roles/roles/{role_id}
 * @tag Reservation
 * @summary Delete a role
 * @operationId deleteReservationRole
 * @pathParam {string} role_id
 * @response 204 - Role deleted
 * @response 500 - Error deleting role
 */
export async function deleteRole(req: ValidatedRequest<null, { role_id: string }>, res: Response): Promise<void> {
	try {
		await RoleDao.deleteRole(req.params.role_id);
		res.status(204).send();
	} catch (error) {
		res.status(500).json({ message: 'Error deleting role', error });
	}
}

export default {
	getRoles,
	createRole,
	updateRole,
	deleteRole,
};
