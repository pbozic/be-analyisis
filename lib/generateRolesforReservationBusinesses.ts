import { PrismaClient } from '@prisma/client';

import prisma from '../prisma/prisma';

async function main() {
	await prisma.$transaction(async (tx: PrismaClient) => {
		let businesses = await tx.business.findMany({
			include: {
				reservation_module: true,
				business_details: true,
			},
		});
		for (const business of businesses) {
			if (!business.business_id) continue;
			if (!business.reservation_module) continue;
			await generateRolesForReservationBusiness(tx, {
				business_id: business.business_id,
				name: business.business_details?.name as string,
			});
		}
	});
}
/**
 * Generates default roles and permissions for a reservation business.
 *
 * @param {PrismaClient} tx
 * @param {Object} business
 * @param {string} business.business_id
 * @param {string} business.name
 * @returns {Promise<void>}
 */
async function generateRolesForReservationBusiness(tx: PrismaClient, business: { business_id: string; name: string }) {
	const permissions = await tx.permission.findMany({});
	const ROLES = [
		{
			name: 'Owner',
			isAdmin: true,
			permissions: [
				'view_dashboard',
				'manage_booking',
				'add_employee',
				'add_location',
				'add_service',
				'send_sms',
			],
		},
		{
			name: 'Manager',
			permissions: ['view_dashboard', 'manage_booking', 'add_employee', 'add_location', 'add_service'],
		},
		{ name: 'Employee', permissions: ['view_dashboard', 'manage_booking'] },
	];
	for (const role of ROLES) {
		const roleData = await tx.role.create({
			data: {
				business: {
					connect: {
						business_id: business.business_id,
					},
				},
				name: role.name,
				is_admin: role.isAdmin || false,
				module: 'reservations',
			},
		});
		for (const permissionName of role.permissions) {
			const permission = permissions.find((p) => p.name === permissionName);
			if (permission) {
				await tx.role_permission.create({
					data: {
						role: {
							connect: {
								role_id: roleData.role_id,
							},
						},
						permission: {
							connect: {
								permission_id: permission.permission_id,
							},
						},
					},
				});
			}
		}
	}
}

main();
