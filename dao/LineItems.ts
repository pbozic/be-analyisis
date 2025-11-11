import prisma from '../prisma/prisma.js';
import {
	UpdateLineItemBody,
	LineItemData,
	LineItemDetail,
	toLineItemDetail,
} from '../schemas/dto/LineItems/line-items.dto.js';
import lineItemsDefaultInclude from '../prisma/includes/lineItems.js';
import type { LineItemsWithIncludesPrisma } from '../prisma/includes/lineItems.js';
/**
 * Create many line items.
 *
 * @param {LineItemData} items
 * @returns {Promise<LineItemDetail[]>}
 */
export async function createManyLineItems(items: LineItemData[]): Promise<LineItemDetail[]> {
	try {
		// Prisma.createMany does not return created rows. Create items individually so we can return full details.
		const created = await Promise.all(
			(items || []).map(async (it) => {
				// Normalize potential nested menu_item_id shape { menu_item_id }
				const menu_item_id =
					(it as any).menu_item_id && typeof (it as any).menu_item_id === 'object'
						? (it as any).menu_item_id.menu_item_id
						: (it as any).menu_item_id;
				const data: any = { ...it, menu_item_id };
				const row = await prisma.line_items.create({ data });
				return row.line_item_id;
			})
		);
		// Fetch full rows with includes and map to DTOs
		const rows = await Promise.all(
			created.map(
				async (id) =>
					await prisma.line_items.findUnique({
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
