import prisma from '../../prisma/prisma';
import type { CreateRoleInput, UpdateRoleInput, Role } from '../../types/userRoles/Role.ts';

/**
 * Retrieves all roles for a given reservation module ID.
 * If reservationModuleId is null, retrieves global roles.
 * @param {string | null} reservationModuleId - The ID of the reservation module.
 * @returns {Promise<Role[]>} A promise that resolves to an array of roles.
 * @throws {Error} If there is an error retrieving the roles.
 */
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

/** * Creates a new role.
 * @param {CreateRoleInput} data - The data for the new role.
 * @returns {Promise<Role>} A promise that resolves to the created role.
 * @throws {Error} If there is an error creating the role.
 */

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
/** Updates an existing role by its ID.
 * @param {string} roleId - The ID of the role to update.
 * @param {UpdateRoleInput} data - The data to update the role with.
 * @returns {Promise<Role>} A promise that resolves to the updated role.
 * @throws {Error} If there is an error updating the role.
 */
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
/**
 * Deletes a role by its ID.
 * @param roleId - The ID of the role to delete.
 * @returns {Promise<void>} A promise that resolves when the role is deleted.
 * @throws {Error} If there is an error deleting the role.
 */
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
