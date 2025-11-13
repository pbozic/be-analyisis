import { Prisma } from '@prisma/client';

import prisma from '../prisma/prisma.js';
import { UpdateLineItemBody, LineItemData, LineItemDetail, toLineItemDetail } from '../schemas/dto/LineItems/index.js';
import lineItemsDefaultInclude from '../prisma/includes/lineItems.js';
import type { LineItemsWithIncludesPrisma } from '../prisma/includes/lineItems.js';
import { UUID } from '../schemas/primitives.js';
/**
 * Create many line items.
 *
 * @param {LineItemData[]} items
 * @param {UUID} order_id
 * @param {Prisma.TransactionClient} tx
 * @returns {Promise<LineItemDetail[]>}
 */
export async function createManyLineItems(
	items: LineItemData[],
	order_id: UUID,
	tx: Prisma.TransactionClient
): Promise<LineItemDetail[]> {
	try {
		const PrismaClient = tx || prisma;
		// Prisma.createMany does not return created rows. Create items individually so we can return full details.
		const created = await Promise.all(
			(items || []).map(async (it) => {
				const row = await PrismaClient.line_items.create({
					data: {
						quantity: it.quantity,
						comment: it.comment ?? null,
						order: { connect: { order_id } },
						menu_item_version: { connect: { menu_item_version_id: it.menu_item_version_id } },
					},
				});
				return row.line_item_id;
			})
		);
		// Fetch full rows with includes and map to DTOs
		const rows = await Promise.all(
			created.map(
				async (id) =>
					await PrismaClient.line_items.findUnique({
						where: { line_item_id: id },
						include: lineItemsDefaultInclude,
					})
			)
		);
		return (rows.filter(Boolean) as LineItemsWithIncludesPrisma[]).map((r) => toLineItemDetail(r));
	} catch (error: unknown) {
		console.error('Error creating line items:', error);
		throw new Error(String(error));
	}
}
/**
 * Update a line item.
 *
 * @param {string} line_item_id
 * @param {UpdateLineItemBody} data
 * @returns {LineItemDetail}
 */
export async function updateLineItem(line_item_id: string, data: UpdateLineItemBody): Promise<LineItemDetail> {
	try {
		const updated = await prisma.line_items.update({
			where: { line_item_id },
			data,
			include: lineItemsDefaultInclude,
		});
		return toLineItemDetail(updated as LineItemsWithIncludesPrisma);
	} catch (error: unknown) {
		console.error('Error updating line item:', error);
		throw new Error(String(error));
	}
}

export default { createManyLineItems, updateLineItem };
