import type { Prisma } from '@prisma/client';

import prisma from '../prisma/prisma.js';

/**
 * Create a new business type.
 *
 * @param {string} type
 * @returns {Promise<Prisma.business_typeGetPayload>}
 */
export async function createBusinessType(type: string) {
	try {
		return await prisma.business_type.create({
			data: { type },
		});
	} catch (error: unknown) {
		const message = error instanceof Error ? error.message : String(error);
		console.error('Error creating business type:', message);
		throw new Error(message);
	}
}

/**
 * Get business type by id.
 *
 * @param {string} type_id
 * @returns {Promise<Prisma.business_typeGetPayload>}
 */
export async function getBusinessTypeById(type_id: string) {
	try {
		return await prisma.business_type.findUnique({ where: { type_id } });
	} catch (error: unknown) {
		const message = error instanceof Error ? error.message : String(error);
		console.error('Error fetching business type:', message);
		throw new Error(message);
	}
}

/**
 * Set business types.
 *
 * @param {string} business_id
 * @param {string[]} type_ids
 * @returns {Promise<Prisma.business_to_typesGetPayload[]>}
 */
export async function setBusinessTypes(business_id: string, type_ids: string[] = []) {
	try {
		return await prisma.$transaction(async (tx: Prisma.TransactionClient) => {
			const existing = await tx.business_to_types.findMany({
				where: { business_id },
				select: { type_id: true },
			});
			const existingIds = new Set(existing.map((e: { type_id: string }) => e.type_id));
			const desiredIds = new Set(type_ids || []);

			const toAdd = [...desiredIds].filter((id) => !existingIds.has(id));
			const toRemove = [...existingIds].filter((id) => !desiredIds.has(id));

			if (toAdd.length) {
				await tx.business_to_types.createMany({
					data: toAdd.map((type_id) => ({ business_id, type_id })),
					skipDuplicates: true,
				});
			}
			if (toRemove.length) {
				await tx.business_to_types.deleteMany({
					where: { business_id, type_id: { in: toRemove } },
				});
			}

			return tx.business_to_types.findMany({
				where: { business_id },
				include: { business_type: true },
				orderBy: { type_id: 'asc' },
			});
		});
	} catch (error: unknown) {
		const message = error instanceof Error ? error.message : String(error);
		console.error('Error setting business types:', message);
		throw new Error(message);
	}
}

export default {
	createBusinessType,
	getBusinessTypeById,
	setBusinessTypes,
};
