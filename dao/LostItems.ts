import prisma from '../prisma/prisma.js';
import lostItemsDefaultInclude from '../prisma/includes/lostItems.js';
import type { LostItemsWithIncludesPrisma } from '../prisma/includes/lostItems.js';
import { toLostItemDetail as toLostItemResponse } from '../schemas/dto/LostItems/lostitem.mappers.js';
import { ReportFoundItemRequest } from '../schemas/dto/LostItems/lostitem.validators.js';
import { LostItemDetail, UpdateLostItem } from '../schemas/dto/LostItems/lostitem.dto.js';

/**
 * Report a found item; creates lost_items row and connects reporting user.
 *
 * @param {Partial<ReportFoundItemRequest>} foundItemData - Payload for the lost item (title, description, etc.).
 * @param {{ user_id: string }} user - User object containing user_id.
 * @returns {Promise<LostItemDetail>} Created lost item.
 */
const reportFoundItem = async (
	foundItemData: Partial<ReportFoundItemRequest>,
	user: { user_id: string }
): Promise<LostItemDetail> => {
	try {
		const created = await prisma.lost_items.create({
			data: { ...foundItemData, user: { connect: { user_id: user.user_id } } },
			include: lostItemsDefaultInclude,
		});
		return toLostItemResponse(created as LostItemsWithIncludesPrisma) as LostItemDetail;
	} catch (error) {
		console.error('Error adding found item:', error);
		throw new Error('Error adding found item');
	}
};

/**
 * Delete a lost item by ID.
 *
 * @param {string} lost_item_id - Lost item ID.
 * @returns {Promise<LostItemDetail>} Deleted lost item.
 */
const deleteFoundItem = async (lost_item_id: string): Promise<LostItemDetail> => {
	try {
		const deleted = await prisma.lost_items.delete({ where: { lost_item_id }, include: lostItemsDefaultInclude });
		return toLostItemResponse(deleted as LostItemsWithIncludesPrisma) as LostItemDetail;
	} catch (error: any) {
		console.error('Error deleting found item:', error);
		throw new Error(error?.message || 'Error deleting found item');
	}
};

/**
 * Get all lost items including documents and files, and the reporting user.
 *
 * @returns {Promise<LostItemDetail[]>} Lost items with related data.
 */
const getLostItems = async (): Promise<LostItemDetail[]> => {
	try {
		const rows = await prisma.lost_items.findMany({ include: lostItemsDefaultInclude });
		return rows?.map((row: LostItemsWithIncludesPrisma) => toLostItemResponse(row)) as LostItemDetail[];
	} catch (error) {
		console.error('Error fetching lost items with documents and files:', error);
		throw new Error('Could not retrieve lost items');
	}
};

/**
 * Update a lost item by ID.
 *
 * @param {string} lost_item_id - Lost item ID.
 * @param {UpdateLostItemInput} updateData - Fields to update.
 * @returns {Promise<LostItemDetail>} Updated lost item.
 */
const updateLostItem = async (lost_item_id: string, updateData: UpdateLostItem): Promise<LostItemDetail> => {
	try {
		const updated = await prisma.lost_items.update({
			where: { lost_item_id },
			data: updateData,
			include: lostItemsDefaultInclude,
		});
		return toLostItemResponse(updated as LostItemsWithIncludesPrisma) as LostItemDetail;
	} catch (error) {
		console.error('Error updating lost item:', error);
		throw new Error('Error updating lost item');
	}
};

export { reportFoundItem };
export { deleteFoundItem };
export { getLostItems };
export { updateLostItem };
export default {
	reportFoundItem,
	deleteFoundItem,
	getLostItems,
	updateLostItem,
};
