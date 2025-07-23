import prisma from '../../prisma/prisma';
import type { CreateRoleInput, UpdateRoleInput, Role } from '../../types/userRoles/Role.ts';

export async function getRoles(reservationModuleId: string | null): Promise<Role[]> {
	try {
		return await prisma.role.findMany({
			where: {
				reservation_module_id: reservationModuleId,
			},
			include: {
				permissions: true,
				users: true,
			},
		});
	} catch (error) {
		throw new Error('Error retrieving roles');
	}
}

export async function createRole(data: CreateRoleInput): Promise<Role> {
	try {
		return await prisma.role.create({
			data: {
				...data,
			},
		});
	} catch (error) {
		throw new Error('Error creating role');
	}
}

export async function updateRole(roleId: string, data: UpdateRoleInput): Promise<Role> {
	try {
		return await prisma.role.update({
			where: { role_id: roleId },
			data,
		});
	} catch (error) {
		throw new Error('Error updating role');
	}
}

export async function deleteRole(roleId: string): Promise<void> {
	try {
		await prisma.role.delete({
			where: { role_id: roleId },
		});
	} catch (error) {
		throw new Error('Error deleting role');
	}
}

export default {
	getRoles,
	createRole,
	updateRole,
	deleteRole,
};
