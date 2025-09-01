import prisma from '../../prisma/prisma';
import type { RolePermission } from '../../types/userRoles/RolePermission.ts';

export async function getRolePermissions(roleId: string): Promise<RolePermission[]> {
	return prisma.role_permission.findMany({
		where: { role_id: roleId },
		include: { permission: true, role: true },
	});
}

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

export async function deleteRolePermission(data: { role_id: string; permission_id: string }): Promise<void> {
	await prisma.role_permission.deleteMany({
		where: {
			role_id: data.role_id,
			permission_id: data.permission_id,
		},
	});
}

export async function getRolePermissionsForRoles(roleIds: string[]): Promise<RolePermission[]> {
	return prisma.role_permission.findMany({
		where: { role_id: { in: roleIds } },
		select: { role_id: true, permission_id: true },
	});
}

export default { getRolePermissions, createRolePermission, deleteRolePermission, getRolePermissionsForRoles };
