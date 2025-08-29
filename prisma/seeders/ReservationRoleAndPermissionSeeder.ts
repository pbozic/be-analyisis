import { PrismaClient, MODULE_TYPE } from '@prisma/client';

const prisma = new PrismaClient();

const MODULE: MODULE_TYPE = 'reservations';

type perm = {
	name: string;
	display_name?: string;
};

const PERMISSIONS: perm[] = [
	{ name: 'view_dashboard', display_name: 'View Dashboard' },
	{ name: 'manage_booking', display_name: 'Manage Booking' },
	{ name: 'add_employee', display_name: 'Add Employee' },
	{ name: 'add_location', display_name: 'Add Location' },
	{ name: 'add_service', display_name: 'Add Service' },
	{ name: 'send_sms', display_name: 'Send SMS' },
];

const ROLES: { name: string; permissions: string[]; isAdmin?: boolean }[] = [
	{
		name: 'Owner',
		isAdmin: true,
		permissions: ['view_dashboard', 'manage_booking', 'add_employee', 'add_location', 'add_service', 'send_sms'],
	},
	{
		name: 'Manager',
		permissions: ['view_dashboard', 'manage_booking', 'add_employee', 'add_location', 'add_service'],
	},
	{ name: 'Employee', permissions: ['view_dashboard', 'manage_booking'] },
];

export async function seedRolesAndPermissions(): Promise<void> {
	console.log('Seeding roles and permissions...');

	// Cache actions in this module (if some permissions map to actions)
	const actions = await prisma.action.findMany({ where: { module: MODULE } });
	const actionMap = new Map(actions.map((a) => [a.name, a]));

	// Cache existing permissions in this module for quick lookup
	const existingPerms = await prisma.permission.findMany({ where: { module: MODULE } });
	const permByActionId = new Map<string, (typeof existingPerms)[number]>();
	const permByName = new Map<string, (typeof existingPerms)[number]>(); // name-based (non-action)

	for (const p of existingPerms) {
		if (p.action_id) permByActionId.set(p.action_id, p);
		if (p.name) permByName.set(p.name, p);
	}

	// Helper: ensure a permission exists (action-based or name-based)
	async function ensurePermission(permName: string) {
		const action = actionMap.get(permName);
		const displayName = PERMISSIONS.find((p) => p.name === permName)?.display_name ?? permName;

		if (action) {
			// Action-based permission
			let perm = permByActionId.get(action.action_id);
			if (!perm) {
				perm = await prisma.permission.create({
					data: {
						module: MODULE,
						action_id: action.action_id,
						// name can stay null for action permissions
						display_name: displayName,
					},
				});
				permByActionId.set(action.action_id, perm);
			} else if (perm.display_name !== displayName) {
				perm = await prisma.permission.update({
					where: { permission_id: perm.permission_id },
					data: { display_name: displayName },
				});
				permByActionId.set(action.action_id, perm);
			}
			return perm;
		} else {
			// Name-based (non-action) permission
			let perm = permByName.get(permName);
			if (!perm) {
				perm = await prisma.permission.create({
					data: {
						module: MODULE,
						name: permName,
						display_name: displayName,
					},
				});
				permByName.set(permName, perm);
			} else {
				// keep display_name in sync
				if (perm.display_name !== displayName) {
					perm = await prisma.permission.update({
						where: { permission_id: perm.permission_id },
						data: { display_name: displayName },
					});
					permByName.set(permName, perm);
				}
			}
			return perm;
		}
	}

	for (const role of ROLES) {
		// Ensure role (global)
		let roleRecord = await prisma.role.findFirst({
			where: { name: role.name, business_id: null },
		});
		if (!roleRecord) {
			roleRecord = await prisma.role.create({
				data: { name: role.name, module: MODULE, business_id: null, is_admin: role.isAdmin ?? false },
			});
		}

		// Ensure role_permission links
		for (const permName of role.permissions) {
			const perm = await ensurePermission(permName);
			if (!perm) {
				console.warn(`Skipping missing permission ${permName}`);
				continue;
			}

			// Composite unique exists: @@unique([role_id, permission_id])
			await prisma.role_permission.upsert({
				where: {
					role_id_permission_id: {
						role_id: roleRecord.role_id,
						permission_id: perm.permission_id,
					},
				},
				update: {},
				create: {
					role_id: roleRecord.role_id,
					permission_id: perm.permission_id,
				},
			});
		}
	}

	console.log('✅ Roles and permissions seeded.');
}
