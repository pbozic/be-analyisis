import { Response } from 'express';

import CategoriesDao from '../dao/Categories.js';
import { upsertFileOnS3Helper } from './FilesController.js';
import { AuthenticatedRequest, ValidatedRequest } from '../types/validatedRequest.js';
import { CreateCategoryRequest, UpdateCategoryRequest } from '../schemas/dto/Category/category.validators.js';

/**
 * GET /categories
 * @tag Categories
 * @summary Get all categories
 * @description Retrieves all categories.
 * @operationId getCategories
 * @response 200 - Categories retrieved successfully
 * @responseContent {CategoryResponse[]} 200.application/json
 * @response 500 - Server error fetching categories
 * @prisma_model categories
 */
async function getCategories(req: AuthenticatedRequest, res: Response): Promise<void> {
	try {
		const categories = await CategoriesDao.getCategories();
		res.status(200).json(categories);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: error instanceof Error ? error.message : 'Unknown error' });
	}
}

/**
 * GET /categories/:category_type
 * @tag Categories
 * @summary Get categories by type
 * @description Retrieves categories by category type.
 * @operationId getCategoriesByType
 * @pathParam {string} category_type - The category type
 * @response 200 - Categories retrieved successfully
 * @responseContent {CategoryResponse[]} 200.application/json
 * @response 500 - Server error fetching category by type
 * @prisma_model categories
 */
async function getCategoriesByType(
	req: ValidatedRequest<never, { category_type: string }>,
	res: Response
): Promise<void> {
	try {
		const category = await CategoriesDao.getCategoriesByType(req.params.category_type);
		res.status(200).json(category);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: error instanceof Error ? error.message : 'Unknown error' });
	}
}

/**
 * POST /categories/category
 * @tag Categories
 * @summary Create a category
 * @description Creates a category with translations, subcategories and optional icon.
 * @operationId createCategory
 * @bodyDescription Category payload
 * @bodyContent {CreateCategoryRequest} application/json
 * @bodyRequired
 * @response 201 - Category created successfully
 * @responseContent {CategoryResponse} 201.application/json
 * @response 500 - Error creating category
 * @prisma_model categories
 * @prisma_model category_translations
 * @prisma_model files
 */
async function createCategory(req: ValidatedRequest<CreateCategoryRequest>, res: Response): Promise<void> {
	try {
		const { categoryData, translations, subcategories, words, parent_categories_id, iconFileData } = req.body;

		let tag = categoryData.name.replace(/\s/g, '-').toLowerCase();
		if (!translations) {
			res.status(400).json({ error: 'Translations are required' });
			return;
		}
		for (let translation of translations) {
			if (translation.language === 'en') {
				tag = translation.translation.replace(/\s/g, '-').toLowerCase();
				break;
			}
		}
		categoryData.tag = tag;

		const category = await CategoriesDao.createCategory(
			categoryData,
			translations,
			subcategories,
			words,
			parent_categories_id,
			iconFileData
		);

		if (iconFileData?.base64) {
			const { file_type, mime_type, base64 } = iconFileData;
			await upsertFileOnS3Helper(null, category.icon, file_type, mime_type, base64);
		}

		res.status(201).json(category);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: error instanceof Error ? error.message : 'Unknown error' });
	}
}

/**
 * PATCH /categories/category/:id
 * @tag Categories
 * @summary Update a category
 * @description Updates a category with translations, subcategories and optional icon.
 * @operationId updateCategory
 * @pathParam {string} id - The category id
 * @bodyDescription Category update payload
 * @bodyContent {UpdateCategoryRequest} application/json
 * @bodyRequired
 * @response 200 - Category updated successfully
 * @responseContent {CategoryResponse} 200.application/json
 * @response 500 - Error updating category
 * @prisma_model categories
 * @prisma_model category_translations
 * @prisma_model files
 */
async function updateCategory(
	req: ValidatedRequest<UpdateCategoryRequest, { id: string }>,
	res: Response
): Promise<void> {
	try {
		const user_id = req.user!.user_id;
		const { categoryData, translations, subcategories, parent_categories_id, iconFileData } = req.body;

		const category = await CategoriesDao.updateCategory(
			req.params.id,
			categoryData,
			translations as { language: string; translation: string }[],
			subcategories,
			parent_categories_id,
			iconFileData
		);

		if (iconFileData?.base64) {
			const { file_type, mime_type, base64 } = iconFileData;
			await upsertFileOnS3Helper(user_id, category.icon, file_type, mime_type, base64);
		}

		res.status(200).json(category);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: error instanceof Error ? error.message : 'Unknown error' });
	}
}

/**
 * DELETE /categories/category/:id
 * @tag Categories
 * @summary Delete a category
 * @description Deletes a category by id.
 * @operationId deleteCategory
 * @pathParam {string} id - The category id
 * @response 204 - Category deleted successfully
 * @response 500 - Error deleting category
 * @prisma_model categories
 */
async function deleteCategory(req: ValidatedRequest<never, { id: string }>, res: Response): Promise<void> {
	try {
		await CategoriesDao.deleteCategory(req.params.id);
		res.status(204).send();
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: error instanceof Error ? error.message : 'Unknown error' });
	}
}

/**
 * GET /categories/category/:id
 * @tag Categories
 * @summary Get category by id
 * @description Retrieves a category by id.
 * @operationId getCategoryById
 * @pathParam {string} id - The category id
 * @response 200 - Category retrieved successfully
 * @responseContent {CategoryResponse} 200.application/json
 * @response 500 - Error fetching category
 * @prisma_model categories
 */
async function getCategoryById(req: ValidatedRequest<never, { id: string }>, res: Response): Promise<void> {
	try {
		const category = await CategoriesDao.getCategoryById(req.params.id);
		res.status(200).json(category);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: error instanceof Error ? error.message : 'Unknown error' });
	}
}

export { getCategories, getCategoriesByType, createCategory, updateCategory, deleteCategory, getCategoryById };

export default {
	getCategories,
	getCategoriesByType,
	createCategory,
	updateCategory,
	deleteCategory,
	getCategoryById,
};
