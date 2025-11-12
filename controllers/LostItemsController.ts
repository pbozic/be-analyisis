import { Request, Response } from 'express';
import { config } from 'dotenv';

import LostItemsDao from '../dao/LostItems.js';
import FileDao from '../dao/File.js';
import S3Helper from '../lib/s3.js';
import { ValidatedRequest } from '../types/validatedRequest.ts';
import type { CreateLostItemInput, UpdateLostItemInput } from '../types/lostItems/LostItem.js';
import { ReportFoundItemRequest } from '../schemas/dto/LostItems/lostitem.dto.ts';
config();

/**
 * GET /lost_items
 * @tag LostItems
 * @summary Get all lost items with their documents and files
 * @description Retrieves all lost items, including their associated documents and files.
 * @operationId getAllLostItems
 * @response 200 - Successful retrieval of lost items
 * @responseContent {object} 200.application/json
 * @response 500 - Error retrieving lost items
 * @prisma_model lost_items
 * @prisma_model documents
 * @prisma_model files
 */
export async function getAllLostItems(req: Request, res: Response): Promise<void> {
	try {
		const lostItems = await LostItemsDao.getLostItems();
		res.status(200).json(lostItems);
	} catch (e: any) {
		console.error('Error retrieving lost items:', e);
		res.status(500).json({ error: 'Error retrieving lost items', detail: e?.message ?? String(e) });
	}
}

/**
 * POST /lost_items/report
 * @tag LostItems
 * @summary Report a found item
 * @description Reports a found item and adds it to the database.
 * @operationId reportFoundItem
 * @bodyContent {object} application/json
 * @bodyRequired
 * @response 201 - Found item reported successfully
 * @responseContent {object} 201.application/json
 * @response 400 - Error reporting found item
 * @prisma_model lost_items
 * @prisma_model documents
 * @prisma_model files
 */
export async function reportFoundItem(req: ValidatedRequest<ReportFoundItemRequest>, res: Response): Promise<void> {
	const { description, found, images, user } = req.body;
	try {
		const foundItem = await LostItemsDao.reportFoundItem({ description, found } as CreateLostItemInput, user);
		if (images && images.files && images.files.length > 0) {
			for (const file of images.files) {
				const fileData = await FileDao.createFile(file.file_type, file.mime_type, true);
				const key = S3Helper.getFileKey(fileData.file_id, file.mime_type);
				await S3Helper.SaveObject(key, file.base64, file.mime_type, {}, fileData, fileData.public);
				await LostItemsDao.updateLostItem(foundItem.lost_item_id, {
					image: { connect: { image_id: fileData.file_id } },
				} as any);
			}
		}
		res.status(201).json(foundItem);
	} catch (e: any) {
		console.error('Error reporting found item:', e);
		res.status(400).json({ error: 'Error reporting found item', detail: e?.message ?? String(e) });
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
 * @responseContent {object} 200.application/json
 * @response 400 - Error deleting found item
 * @prisma_model lost_items
 * @prisma_model documents
 * @prisma_model files
 */
export async function deleteFoundItem(
	req: ValidatedRequest<never, { lost_item_id: string }>,
	res: Response
): Promise<void> {
	try {
		const { lost_item_id } = req.params as { lost_item_id: string };
		await LostItemsDao.deleteFoundItem(lost_item_id);
		res.status(200).json({ message: 'Found item deleted successfully' });
	} catch (e: any) {
		console.error('Error deleting found item:', e);
		res.status(400).json({ error: 'Error deleting found item', detail: e?.message ?? String(e) });
	}
}

/**
 * PATCH /lost_items/update/:lost_item_id
 * @tag LostItems
 * @summary Update a lost item
 * @description Updates the details of a lost item in the database.
 * @operationId updateLostItem
 * @pathParam {string} lost_item_id - The ID of the lost item to update
 * @bodyContent {object} application/json
 * @bodyRequired
 * @response 200 - Lost item updated successfully
 * @responseContent {object} 200.application/json
 * @response 400 - Error updating lost item
 * @prisma_model lost_items
 */
export async function updateLostItem(
	req: ValidatedRequest<UpdateLostItemInput, { lost_item_id: string }>,
	res: Response
): Promise<void> {
	const { lost_item_id } = req.params;
	const { description, status } = req.body;
	try {
		if (!description && !status) {
			res.status(400).json({ error: 'No data provided to update' });
			return;
		}
		const updateData: Partial<UpdateLostItemInput> = {};
		if (description) updateData.description = description;
		if (status) updateData.status = status;
		const updatedLostItem = await LostItemsDao.updateLostItem(lost_item_id, updateData as UpdateLostItemInput);
		if (!updatedLostItem) {
			res.status(404).json({ error: 'Lost item not found' });
			return;
		}
		res.status(200).json(updatedLostItem);
	} catch (e: any) {
		console.error('Error updating lost item:', e);
		res.status(400).json({ error: 'Error updating lost item', detail: e?.message ?? String(e) });
	}
}

export default {
	getAllLostItems,
	reportFoundItem,
	deleteFoundItem,
	updateLostItem,
};
