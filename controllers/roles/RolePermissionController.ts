import { Response } from 'express';

import RolePermissionDao from '../../dao/roles/RolePermissions.ts';
import { ValidatedRequest } from '../../types/validatedRequest';
import {
	UpsertRolePermissionParams,
	DeleteRolePermissionParams,
	RolePermissionsMatrixBody,
} from '../../types/userRoles/RolePermission';

export async function getRolePermissionsForRoleId(
	req: ValidatedRequest<null, { role_id: string }>,
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

export async function upsertRolePermission(
	req: ValidatedRequest<null, UpsertRolePermissionParams>,
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

export async function deleteRolePermission(
	req: ValidatedRequest<null, DeleteRolePermissionParams>,
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
