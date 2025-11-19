import prisma from '../../prisma/prisma';
import { RoleBase } from '../../schemas/dto/UserRoles';

/**
 * Retrieves all roles for a given business ID.
 * If businessId is null, retrieves global roles.
 * @param {string | null} businessId - The ID of the business.
 * @returns {Promise<Role[]>} A promise that resolves to an array of roles.
 * @throws {Error} If there is an error retrieving the roles.
 */
export async function getRoles(businessId: string | null): Promise<RoleBase[]> {
	try {
		return await prisma.role.findMany({
			where: {
				business_id: businessId,
			},
			include: {
				permissions: true,
				users: true,
			},
		});
	} catch (error) {
		throw new Error(`Error retrieving roles: ${error}`);
	}
}

/** * Creates a new role.
 * @param {CreateRoleInput} data - The data for the new role.
 * @returns {Promise<Role>} A promise that resolves to the created role.
 * @throws {Error} If there is an error creating the role.
 */

export async function createRole(data: RoleBase): Promise<RoleBase> {
	try {
		return await prisma.role.create({
			data: {
				...data,
			},
		});
	} catch (error) {
		throw new Error(`Error creating role: ${error}`);
	}
}
/** Updates an existing role by its ID.
 * @param {string} roleId - The ID of the role to update.
 * @param {RoleBase} data - The data to update the role with.
 * @returns {Promise<Role>} A promise that resolves to the updated role.
 * @throws {Error} If there is an error updating the role.
 */
export async function updateRole(roleId: string, data: RoleBase): Promise<RoleBase> {
	try {
		return await prisma.role.update({
			where: { role_id: roleId },
			data,
		});
	} catch (error) {
		throw new Error(`Error updating role: ${error}`);
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
		throw new Error(`Error deleting role: ${error}`);
	}
}

export default {
	getRoles,
	createRole,
	updateRole,
	deleteRole,
};
