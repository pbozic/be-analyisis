import { config } from 'dotenv';

import LostItemsDao from '../dao/LostItems.js';
import DocumentDao from '../dao/Document.js';
import FileDao from '../dao/File.js';
import S3Helper from '../lib/s3.js';
config();
/**
 * GET /lost_items
 * @tag LostItems
 * @summary Get all lost items with their documents and files
 * @description Retrieves all lost items, including their associated documents and files.
 * @operationId getAllLostItems
 * @response 200 - Successful retrieval of lost items
 * @responseContent {LostItemsResponse[]} 200.application/json
 * @response 500 - Error retrieving lost items
 */
async function getAllLostItems(req, res) {
	try {
		const lostItems = await LostItemsDao.getLostItems();
		res.status(200).json(lostItems);
	} catch (e) {
		console.error('Error retrieving lost items:', e);
		res.status(500).json({ error: 'Error retrieving lost items', detail: e.message });
	}
}
/**
 * POST /lost_items/report
 * @tag LostItems
 * @summary Report a found item
 * @description Reports a found item and adds it to the database.
 * @operationId reportFoundItem
 * @bodyContent {FoundItem} application/json
 * @bodyRequired
 * @response 201 - Found item reported successfully
 * @responseContent {FoundItem} 201.application/json
 * @response 400 - Error reporting found item
 */
async function reportFoundItem(req, res) {
	const { description, found, images, user } = req.body;
	console.info('user', user);
	try {
		const foundItem = await LostItemsDao.reportFoundItem({ description, found }, user);
		if (images && images.files.length > 0) {
			const document = await DocumentDao.createDocument(images.documentData);
			for (const file of images.files) {
				let base64 = file.base64;
				delete file.base64;
				let fileData = await FileDao.addFileToDocument(document.document_id, file, document.public);
				let key = S3Helper.getFileKey(fileData.file_id, file.mime_type);
				await S3Helper.SaveObject(key, base64, file.mime_type, {}, fileData, document.public);
			}
			await DocumentDao.linkDocumentToLostItem(document.document_id, foundItem.lost_item_id);
		}
		res.status(201).json(foundItem);
	} catch (e) {
		console.error('Error reporting found item:', e);
		res.status(400).json({ error: 'Error reporting found item', detail: e.message });
	}
}
/**
 * DELETE /lost_items/delete/:lost_item_id
 * @tag LostItems
 * @summary Delete a found item
 * @description Deletes a found item from the database.
 * @operationId deleteFoundItem
 * @pathParam {string} lost_item_id - The ID of the found item to delete
 * @response 200 - Found item deleted successfully
 * @responseContent {LostItems} 200.application/json
 * @response 400 - Error deleting found item
 */
async function deleteFoundItem(req, res) {
	try {
		const { lost_item_id } = req.params;
		await DocumentDao.deleteDocumentsAndFiles('lost_item_id', lost_item_id);
		await LostItemsDao.deleteFoundItem(lost_item_id);
		res.status(200).json({ message: 'Found item deleted successfully' });
	} catch (e) {
		console.error('Error deleting found item:', e);
		res.status(400).json({ error: 'Error deleting found item', detail: e.message });
	}
}
/**
 * PATCH /lost_items/update/:lost_item_id
 * @tag LostItems
 * @summary Update a lost item
 * @description Updates the details of a lost item in the database.
 * @operationId updateLostItem
 * @pathParam {string} lost_item_id - The ID of the lost item to update
 * @bodyContent {UpdateLostItem} application/json
 * @bodyRequired
 * @response 200 - Lost item updated successfully
 * @responseContent {LostItem} 200.application/json
 * @response 400 - Error updating lost item
 */
async function updateLostItem(req, res) {
	const { lost_item_id } = req.params;
	const { description, status } = req.body;
	try {
		if (!description && !status) {
			return res.status(400).json({ error: 'No data provided to update' });
		}
		const updateData = {};
		if (description) updateData.description = description;
		if (status) updateData.status = status;
		const updatedLostItem = await LostItemsDao.updateLostItem(lost_item_id, updateData);
		if (!updatedLostItem) {
			return res.status(404).json({ error: 'Lost item not found' });
		}
		res.status(200).json(updatedLostItem);
	} catch (e) {
		console.error('Error updating lost item:', e);
		res.status(400).json({ error: 'Error updating lost item', detail: e.message });
	}
}
export { getAllLostItems };
export { reportFoundItem };
export { deleteFoundItem };
export { updateLostItem };
export default {
	getAllLostItems,
	reportFoundItem,
	deleteFoundItem,
	updateLostItem,
};
