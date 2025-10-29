import { PrismaClient, MODULE_TYPE } from '@prisma/client';

const prisma = new PrismaClient();

/**
 * Check if a user has a specific permission within a module.
 *
 * @param {string} userId - The ID of the user to check.
 * @param {string} permissionName - The name of the permission to check.
 * @param {MODULE_TYPE} [module='reservations'] - The module to check the permission in.
 * @returns {Promise<boolean>} - Returns true if the user has the permission, false otherwise.
 */
export async function userHasPermission(
	userId: string,
	permissionName: string,
	module: MODULE_TYPE = 'reservations'
): Promise<boolean> {
	// Check if user has an explicitly blocked permission
	const blocked = await prisma.user_permission.findFirst({
		where: {
			user_id: userId,
			module,
			is_blocked: true,
			OR: [
				{ name: permissionName },
				{
					action: {
						name: permissionName,
					},
				},
			],
		},
	});

	if (blocked) return false;

	// Check direct user permissions (non-blocked)
	const userPermission = await prisma.user_permission.findFirst({
		where: {
			user_id: userId,
			module,
			is_blocked: false,
			OR: [
				{ name: permissionName },
				{
					action: {
						name: permissionName,
					},
				},
			],
		},
		include: {
			action: true,
		},
	});

	if (userPermission) return true;

	// Check permissions through roles
	const rolePermissions = await prisma.user_role.findMany({
		where: {
			user_id: userId,
		},
		select: {
			role: {
				select: {
					permissions: {
						where: {
							module,
							OR: [
								{ name: permissionName },
								{
									action: {
										name: permissionName,
									},
								},
							],
						},
						select: {
							permission_id: true,
						},
					},
				},
			},
		},
	});

	const hasViaRole = rolePermissions.some((ur) => ur.role.permissions.length > 0);

	return hasViaRole;
}
