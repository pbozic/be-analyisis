import prisma from '../../prisma/prisma';
import type { UserRole } from '../../schemas/dto/UserRoles/userrole.dto.js';
import type { CreateUserRoleInput, UpdateUserRoleInput } from '../../schemas/dto/UserRoles/userrole.validators.js';

/**
 * Retrieves user roles for a given reservation module.
 * @param {string} reservationModuleId - The ID of the reservation module.
 * @returns {Promise<UserRole[]>} - List of user roles.
 */
export async function getUserRoles(reservationModuleId: string): Promise<UserRole[]> {
	return prisma.user_role.findMany({
		where: { reservation_module_id: reservationModuleId },
		include: {
			user: true,
			role: true,
		},
	});
}

/**
 * Creates a user role assignment.
 * @param {CreateUserRoleInput} data - The user role input data.
 * @returns {Promise<UserRole>} - The created user role.
 */
export async function createUserRole(data: CreateUserRoleInput, reservationModuleId: string): Promise<UserRole> {
	return prisma.user_role.create({
		data: {
			user: { connect: { user_id: data.user_id } },
			role: { connect: { role_id: data.role_id } },
			reservation_module: reservationModuleId
				? { connect: { reservation_module_id: reservationModuleId } }
				: undefined,
		},
		include: {
			user: true,
			role: true,
		},
	});
}

/**
 * Updates a user role (by deleting and re-creating it with new role).
 * @param {string} userId - The user ID.
 * @param {string} roleId - The original role ID.
 * @param {UpdateUserRoleInput} data - The updated user role data.
 * @returns {Promise<UserRole>} - The updated user role.
 */
export async function updateUserRole(
	userId: string,
	roleId: string,
	data: UpdateUserRoleInput,
	reservationModuleId: string
): Promise<UserRole> {
	await prisma.user_role.delete({
		where: {
			user_id_role_id_reservation_module_id: {
				user_id: userId,
				role_id: roleId,
				reservation_module_id: reservationModuleId,
			},
		},
	});

	return createUserRole(
		{
			user_id: userId,
			role_id: data.role_id,
		},
		reservationModuleId
	);
}

/**
 * Deletes a user role assignment.
 * @param {string} userId - The user ID.
 * @param {string} roleId - The role ID.
 * @param {string | null} reservationModuleId - The reservation module ID.
 * @returns {Promise<void>} - Resolves when deleted.
 */
export async function deleteUserRole(
	userId: string,
	roleId: string,
	reservationModuleId: string | null
): Promise<void> {
	await prisma.user_role.delete({
		where: {
			user_id_role_id_reservation_module_id: {
				user_id: userId,
				role_id: roleId,
				reservation_module_id: reservationModuleId,
			},
		},
	});
}

export default {
	getUserRoles,
	createUserRole,
	updateUserRole,
	deleteUserRole,
};
