import prisma from '../../prisma/prisma';
import type { RolePermission } from '../../schemas/dto/UserRoles';
/**
 * Get all permissions for a given role
 *
 * @param {string} roleId
 * @returns {Promise<RolePermission[]>} Found role permissions.
 */
export async function getRolePermissions(roleId: string): Promise<RolePermission[]> {
	return prisma.role_permission.findMany({
		where: { role_id: roleId },
		include: { permission: true, role: true },
	});
}
/**
 * Create a new role permission.
 *
 * @param {object} data
 * @returns {Promise<RolePermission>} Created role permission.
 */
export async function createRolePermission(data: { role_id: string; permission_id: string }): Promise<RolePermission> {
	return prisma.role_permission.upsert({
		where: {
			role_id_permission_id: {
				role_id: data.role_id,
				permission_id: data.permission_id,
			},
		},
		create: {
			role: {
				connect: { role_id: data.role_id },
			},
			permission: {
				connect: { permission_id: data.permission_id },
			},
		},
		update: {},
		include: { permission: true, role: true },
	});
}
/**
 * Delete a role permission.
 *
 * @param {object} data
 * @returns {Promise<void>}
 */
export async function deleteRolePermission(data: { role_id: string; permission_id: string }): Promise<void> {
	await prisma.role_permission.deleteMany({
		where: {
			role_id: data.role_id,
			permission_id: data.permission_id,
		},
	});
}
/**
 * Get role permissions for multiple roles.
 *
 * @param {string[]} roleIds
 * @returns {Promise<RolePermission[]>} Found role permissions.
 */
export async function getRolePermissionsForRoles(roleIds: string[]): Promise<RolePermission[]> {
	return prisma.role_permission.findMany({
		where: { role_id: { in: roleIds } },
		select: { role_id: true, permission_id: true },
	});
}

export default { getRolePermissions, createRolePermission, deleteRolePermission, getRolePermissionsForRoles };
