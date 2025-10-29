import { line_items } from '@prisma/client';

import prisma from '../prisma/prisma.js';
/**
 * Create many line items.
 *
 * @param {line_items[]} items
 * @returns {Promise<Object>}
 */
export async function createManyLineItems(items: line_items[]) {
	try {
		return await prisma.line_items.createMany({ data: items, skipDuplicates: true });
	} catch (error: unknown) {
		console.error('Error creating line items:', error);
		throw new Error(String(error));
	}
}
/**
 * Update a line item.
 *
 * @param {string} line_item_id
 * @param {Partial<line_items>} data
 * @returns {Promise<Object>}
 */
export async function updateLineItem(
	line_item_id: string,
	data: Partial<line_items> & { quantity?: number; removed?: boolean }
) {
	try {
		return await prisma.line_items.update({ where: { line_item_id }, data });
	} catch (error: unknown) {
		console.error('Error updating line item:', error);
		throw new Error(String(error));
	}
}

export default { createManyLineItems, updateLineItem };
