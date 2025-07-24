import prisma from '../../prisma/prisma';
import type {
	CreateUserPermissionInput,
	UpdateUserPermissionInput,
	UserPermission,
} from '../../types/userRoles/UserPermission.ts';
import type { Permission } from '../../types/userRoles/Permission.ts';

/**
 * Retrieves all user-specific permissions for a given reservation module.
 * If `reservationModuleId` is null, retrieves global user permissions.
 * @param {string | null} reservationModuleId
 * @returns {Promise<UserPermission[]>}
 */
export async function getUserPermissions(reservationModuleId: string | null): Promise<UserPermission[]> {
	try {
		return await prisma.user_permission.findMany({
			where: {
				reservation_module_id: reservationModuleId,
			},
			include: {
				user: true,
				action: true,
			},
		});
	} catch (error) {
		throw new Error('Error retrieving user permissions');
	}
}

/**
 * Creates a new user permission.
 * @param {CreateUserPermissionInput} data
 * @returns {Promise<UserPermission>}
 */
export async function createUserPermission(data: CreateUserPermissionInput): Promise<UserPermission> {
	try {
		const action = await prisma.action.findFirst({
			where: {
				name: data.name,
			},
		});

		// Ensure we do not pass both name and action_id
		const { name, ...rest } = data;

		return await prisma.user_permission.create({
			data: {
				...rest,
				// if action found, connect it; otherwise, use name
				...(action ? { action: { connect: { action_id: action.action_id } } } : { name }),
			},
			include: {
				user: true,
				action: true,
			},
		});
	} catch (error) {
		console.error(error);
		throw new Error('Error creating user permission');
	}
}

/**
 * Updates an existing user permission by its ID.
 * @param {string} userPermissionId
 * @param {UpdateUserPermissionInput} data
 * @returns {Promise<UserPermission>}
 */
export async function updateUserPermission(
	userPermissionId: string,
	data: UpdateUserPermissionInput
): Promise<UserPermission> {
	try {
		return await prisma.user_permission.update({
			where: {
				user_permission_id: userPermissionId,
			},
			data,
			include: {
				user: true,
				action: true,
			},
		});
	} catch (error) {
		throw new Error('Error updating user permission');
	}
}

/**
 * Deletes a user permission by its ID.
 * @param {string} userPermissionId
 * @returns {Promise<void>}
 */
export async function deleteUserPermission(userPermissionId: string): Promise<void> {
	try {
		await prisma.user_permission.delete({
			where: {
				user_permission_id: userPermissionId,
			},
		});
	} catch (error) {
		throw new Error('Error deleting user permission');
	}
}

/**
 * Retrieves all available permissions (template permissions to assign).
 * @returns {Promise<Permission[]>}
 */
export async function getAllPermissions(): Promise<Permission[]> {
	try {
		return await prisma.permission.findMany({
			include: {
				action: true,
			},
		});
	} catch (error) {
		throw new Error('Error retrieving permissions');
	}
}

export default {
	getUserPermissions,
	createUserPermission,
	updateUserPermission,
	deleteUserPermission,
	getAllPermissions,
};
