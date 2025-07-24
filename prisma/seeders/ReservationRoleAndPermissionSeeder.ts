import { PrismaClient, MODULE_TYPE } from '@prisma/client';

const prisma = new PrismaClient();

const MODULE: MODULE_TYPE = 'reservations';

const PERMISSIONS: { name: string }[] = [
	{ name: 'view_dashboard' },
	{ name: 'manage_booking' },
	{ name: 'add_employee' },
	{ name: 'add_location' },
	{ name: 'add_service' },
	{ name: 'send_sms' },
];

const ROLES: {
	name: string;
	permissions: string[];
}[] = [
	{
		name: 'Owner',
		permissions: ['view_dashboard', 'manage_booking', 'add_employee', 'add_location', 'add_service', 'send_sms'],
	},
	{
		name: 'Manager',
		permissions: ['view_dashboard', 'manage_booking', 'add_employee', 'add_location', 'add_service'],
	},
	{
		name: 'Employee',
		permissions: ['view_dashboard', 'manage_booking'],
	},
];

export async function seedRolesAndPermissions(): Promise<void> {
	console.log('Seeding roles and permissions...');

	const actions = await prisma.action.findMany({
		where: { module: MODULE },
	});

	const actionMap = new Map(actions.map((a) => [a.name, a]));

	for (const role of ROLES) {
		const existingRole = await prisma.role.findFirst({
			where: {
				name: role.name,
				business_id: null,
			},
		});

		let roleRecord;
		if (existingRole) {
			roleRecord = existingRole;
		} else {
			roleRecord = await prisma.role.create({
				data: {
					name: role.name,
					module: MODULE,
					business_id: null,
				},
			});
		}

		for (const permName of role.permissions) {
			const action = actionMap.get(permName);

			if (action?.action_id) {
				const existingPermission = await prisma.permission.findFirst({
					where: {
						role_id: roleRecord.role_id,
						action_id: action.action_id,
					},
				});

				if (!existingPermission) {
					await prisma.permission.create({
						data: {
							role_id: roleRecord.role_id,
							module: MODULE,
							action_id: action.action_id,
						},
					});
				}
			} else {
				const existingPermission = await prisma.permission.findFirst({
					where: {
						role_id: roleRecord.role_id,
						name: permName,
						module: MODULE,
					},
				});

				if (!existingPermission) {
					await prisma.permission.create({
						data: {
							role_id: roleRecord.role_id,
							module: MODULE,
							name: permName,
						},
					});
				}
			}
		}
	}

	console.log('✅ Roles and permissions seeded.');
}
