import { PrismaClient, MODULE_TYPE } from '@prisma/client';

const prisma = new PrismaClient();

export async function userHasPermission(
	userId: string,
	permissionName: string,
	module: MODULE_TYPE = 'reservations'
): Promise<boolean> {
	// Check direct user permissions
	const userPermission = await prisma.user_permission.findFirst({
		where: {
			user_id: userId,
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
