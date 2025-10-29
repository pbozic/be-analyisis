import prisma from '../prisma/prisma.js';
/**
 * Report a found item; creates lost_items row and connects reporting user.
 *
 * @param {object} foundItemData - Payload for the lost item (title, description, etc.).
 * @param {object} user - User object containing user_id.
 * @returns {Promise<object>} Created lost item.
 */
const reportFoundItem = async (foundItemData, user) => {
	try {
		return await prisma.lost_items.create({
			data: {
				...foundItemData,
				user: {
					connect: { user_id: user.user_id },
				},
			},
		});
	} catch (error) {
		console.error('Error adding found item:', error);
		throw new Error('Error adding found item');
	}
};
/**
 * Delete a lost item by ID.
 *
 * @param {string} lost_item_id - Lost item ID.
 * @returns {Promise<object>} Deleted lost item.
 */
const deleteFoundItem = async (lost_item_id) => {
	try {
		// Disconnect the user from the lost item
		// await prisma.lost_items.update({
		// 	where: { lost_item_id },
		// 	data: { user: { disconnect: true } }
		// });
		return await prisma.lost_items.delete({
			where: { lost_item_id },
		});
	} catch (error) {
		console.error('Error deleting found item:', error);
		throw new Error(error);
	}
};
/**
 * Get all lost items including documents and files, and the reporting user.
 *
 * @returns {Promise<object[]>} Lost items with related data.
 */
const getLostItems = async () => {
	try {
		return await prisma.lost_items.findMany({
			include: {
				documents: {
					include: {
						files: true,
					},
				},
				user: true,
			},
		});
	} catch (error) {
		console.error('Error fetching lost items with documents and files:', error);
		throw new Error('Could not retrieve lost items');
	}
};
/**
 * Update a lost item by ID.
 *
 * @param {string} lost_item_id - Lost item ID.
 * @param {object} updateData - Fields to update.
 * @returns {Promise<object>} Updated lost item.
 */
const updateLostItem = async (lost_item_id, updateData) => {
	try {
		return await prisma.lost_items.update({
			where: { lost_item_id },
			data: updateData,
		});
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
