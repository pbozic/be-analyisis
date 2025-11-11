import prisma from '../prisma/prisma.js';
import type { CreateLostItemInput, UpdateLostItemInput, LostItem as LostItemDTO } from '../types/lostItems/LostItem.js';
import lostItemsDefaultInclude from '../prisma/includes/lostItems.js';
import type { LostItemsWithIncludesPrisma } from '../prisma/includes/lostItems.js';
import { toLostItemResponse, toLostItemList } from '../types/lostItems/LostItem.mappers.js';

/**
 * Report a found item; creates lost_items row and connects reporting user.
 *
 * @param {CreateLostItemInput} foundItemData - Payload for the lost item (title, description, etc.).
 * @param {{ user_id: string }} user - User object containing user_id.
 * @returns {Promise<LostItemDTO>} Created lost item.
 */
const reportFoundItem = async (foundItemData: CreateLostItemInput, user: { user_id: string }): Promise<LostItemDTO> => {
	try {
		const created = await prisma.lost_items.create({ data: { ...foundItemData, user: { connect: { user_id: user.user_id } } }, include: lostItemsDefaultInclude });
		return toLostItemResponse(created as LostItemsWithIncludesPrisma) as LostItemDTO;
	} catch (error) {
		console.error('Error adding found item:', error);
		throw new Error('Error adding found item');
	}
};

/**
 * Delete a lost item by ID.
 *
 * @param {string} lost_item_id - Lost item ID.
 * @returns {Promise<LostItemDTO>} Deleted lost item.
 */
const deleteFoundItem = async (lost_item_id: string): Promise<LostItemDTO> => {
	try {
		const deleted = await prisma.lost_items.delete({ where: { lost_item_id }, include: lostItemsDefaultInclude });
		return toLostItemResponse(deleted as LostItemsWithIncludesPrisma) as LostItemDTO;
	} catch (error: any) {
		console.error('Error deleting found item:', error);
		throw new Error(error?.message || 'Error deleting found item');
	}
};

/**
 * Get all lost items including documents and files, and the reporting user.
 *
 * @returns {Promise<LostItemDTO[]>} Lost items with related data.
 */
const getLostItems = async (): Promise<LostItemDTO[]> => {
	try {
		const rows = await prisma.lost_items.findMany({ include: lostItemsDefaultInclude });
		return toLostItemList(rows as LostItemsWithIncludesPrisma[] ) as LostItemDTO[];
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
 * @returns {Promise<LostItemDTO>} Updated lost item.
 */
const updateLostItem = async (lost_item_id: string, updateData: UpdateLostItemInput): Promise<LostItemDTO> => {
	try {
		const updated = await prisma.lost_items.update({ where: { lost_item_id }, data: updateData, include: lostItemsDefaultInclude });
		return toLostItemResponse(updated as LostItemsWithIncludesPrisma) as LostItemDTO;
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
