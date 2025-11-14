import { Response } from 'express';

import RolePermissionDao from '../../dao/roles/RolePermissions.ts';
import { ValidatedRequest } from '../../types/validatedRequest';
import {
	UpsertRolePermissionParams,
	DeleteRolePermissionParams,
	RolePermissionsMatrixBody,
} from '../../types/userRoles/RolePermission';

/**
 * GET /roles/:role_id/permissions
 * @tag RolePermissions
 * @summary Get all permissions assigned to a specific role by role ID
 * @operationId getRolePermissionsForRoleId
 * @response 201 - Role created
 * @responseContent {RolePermissionResponseBase[]} 201.application/json
 * @response 500 - Error creating role
 */
export async function getRolePermissionsForRoleId(
	req: ValidatedRequest<never, { role_id: string }>,
	res: Response
): Promise<void> {
	try {
		const { role_id } = req.params;
		const items = await RolePermissionDao.getRolePermissions(role_id);
		res.status(200).json(items);
	} catch (error) {
		res.status(500).json({ message: 'Error retrieving role permissions', error });
	}
}

/**
 * PUT /roles/:role_id/permissions/:permission_id
 * @tag RolePermissions
 * @summary Assign a permission to a role (idempotent)
 * @operationId upsertRolePermission
 * @response 200 - Permission assigned to role
 * @responseContent {RolePermissionResponseBase} 200.application/json
 * @response 500 - Error assigning role permission
 */
export async function upsertRolePermission(
	req: ValidatedRequest<never, UpsertRolePermissionParams>,
	res: Response
): Promise<void> {
	try {
		const { role_id, permission_id } = req.params;
		const created = await RolePermissionDao.createRolePermission({ role_id, permission_id });
		res.status(200).json(created);
	} catch (error) {
		res.status(500).json({ message: 'Error assigning role permission', error });
	}
}

/**
 * DELETE /roles/:role_id/permissions/:permission_id
 * @tag RolePermissions
 * @summary Remove a permission assignment from a role
 * @operationId deleteRolePermission
 * @response 204 - Permission removed from role
 * @response 500 - Error removing role permission
 */
export async function deleteRolePermission(
	req: ValidatedRequest<never, DeleteRolePermissionParams>,
	res: Response
): Promise<void> {
	try {
		const { role_id, permission_id } = req.params;
		await RolePermissionDao.deleteRolePermission({ role_id, permission_id });
		res.status(204).send();
	} catch (error) {
		res.status(500).json({ message: 'Error removing role permission', error });
	}
}

/**
 * POST /roles/permissions/matrix
 * @tag RolePermissions
 * @summary Get role-permissions matrix for multiple role IDs
 * @operationId getRolePermissionsMatrix
 * @bodyContent {RolePermissionsMatrixBody} application/json
 * @response 200 - Role-permissions matrix retrieved
 * @responseContent {RolePermissionResponseBase[]} 200.application/json
 * @response 500 - Error retrieving role-permissions matrix
 */
export async function getRolePermissionsMatrix(
	req: ValidatedRequest<RolePermissionsMatrixBody>,
	res: Response
): Promise<void> {
	try {
		const { role_ids } = req.body;
		const items = await RolePermissionDao.getRolePermissionsForRoles(role_ids);
		res.status(200).json(items);
	} catch (error) {
		res.status(500).json({ message: 'Error retrieving role-permissions matrix', error });
	}
}

export default { getRolePermissionsForRoleId, upsertRolePermission, deleteRolePermission, getRolePermissionsMatrix };
