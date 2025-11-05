import prisma from '../prisma/prisma.js';
import { UpdateLineItemBody, LineItemData, LineItemDetail } from '../schemas/dto/LineItems/line-items.dto.js';
/**
 * Create many line items.
 *
 * @param {LineItemData} items
 * @returns {Promise<LineItemDetail[]>}
 */
export async function createManyLineItems(items: LineItemData[]): Promise<LineItemDetail[]> {
	try {
		const lineItems: LineItemDetail[] = await prisma.line_items.createMany({ data: items, skipDuplicates: true });
		return lineItems;
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
		return await prisma.line_items.update({ where: { line_item_id }, data });
	} catch (error: unknown) {
		console.error('Error updating line item:', error);
		throw new Error(String(error));
	}
}

export default { createManyLineItems, updateLineItem };
