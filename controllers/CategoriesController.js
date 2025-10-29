import CategoriesDao from '../dao/Categories.js';
import { upsertFileOnS3Helper } from './FilesController.js';
/**
 * GET /categories
 * @tag Categories
 * @summary Get all categories
 * @description Retrieves all categories.
 * @operationId getCategories
 * @response 200 - Categories retrieved successfully
 * @responseContent {object} 200.application/json
 * @response 500 - Server error fetching categories
 * @prisma_model categories
 */
async function getCategories(req, res) {
	try {
		const categories = await CategoriesDao.getCategories();
		res.status(200).json(categories);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: error.message });
	}
}
/**
 * GET /categories/type/:category_type
 * @tag Categories
 * @summary Get categories by type
 * @description Retrieves categories by category type.
 * @operationId getCategoriesByType
 * @pathParam {string} category_type - The category type
 * @response 200 - Categories retrieved successfully
 * @responseContent {object} 200.application/json
 * @response 500 - Server error fetching category by type
 * @prisma_model categories
 */
async function getCategoriesByType(req, res) {
	try {
		const category = await CategoriesDao.getCategoriesByType(req.params.category_type);
		res.status(200).json(category);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: error.message });
	}
}
/**
 * POST /categories
 * @tag Categories
 * @summary Create a category
 * @description Creates a category with translations, subcategories and optional icon.
 * @operationId createCategory
 * @bodyDescription Category payload
 * @bodyContent {object} application/json
 * @bodyRequired
 * @response 201 - Category created successfully
 * @responseContent {object} 201.application/json
 * @response 500 - Error creating category
 * @prisma_model categories
 * @prisma_model category_translations
 * @prisma_model files
 */
async function createCategory(req, res) {
	try {
		const user_id = req.user.user_id;
		const { categoryData, translations, subcategories, words, parent_categories_id, iconFileData } = req.body;
		let tag = categoryData.name.replace(/\s/g, '-').toLowerCase();
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
		if (iconFileData) {
			const { file_type, mime_type, base64 } = iconFileData;
			await upsertFileOnS3Helper(null, category.icon, file_type, mime_type, base64);
		}
		res.status(201).json(category);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: error.message });
	}
}
/**
 * PATCH /categories/:id
 * @tag Categories
 * @summary Update a category
 * @description Updates a category with translations, subcategories and optional icon.
 * @operationId updateCategory
 * @pathParam {string} id - The category id
 * @bodyDescription Category update payload
 * @bodyContent {object} application/json
 * @bodyRequired
 * @response 200 - Category updated successfully
 * @responseContent {object} 200.application/json
 * @response 500 - Error updating category
 * @prisma_model categories
 * @prisma_model category_translations
 * @prisma_model files
 */
async function updateCategory(req, res) {
	try {
		const user_id = req.user.user_id;
		const { categoryData, translations, subcategories, parent_categories_id, iconFileData } = req.body;
		const category = await CategoriesDao.updateCategory(
			req.params.id,
			categoryData,
			translations,
			subcategories,
			parent_categories_id,
			iconFileData
		);
		if (iconFileData) {
			const { file_type, mime_type, base64 } = iconFileData;
			await upsertFileOnS3Helper(user_id, category.icon, file_type, mime_type, base64);
		}
		res.status(200).json(category);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: error.message });
	}
}
/**
 * DELETE /categories/:id
 * @tag Categories
 * @summary Delete a category
 * @description Deletes a category by id.
 * @operationId deleteCategory
 * @pathParam {string} id - The category id
 * @response 204 - Category deleted successfully
 * @response 500 - Error deleting category
 * @prisma_model categories
 */
async function deleteCategory(req, res) {
	try {
		await CategoriesDao.deleteCategory(req.params.id);
		res.status(204).send();
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: error.message });
	}
}
/**
 * GET /categories/:id
 * @tag Categories
 * @summary Get category by id
 * @description Retrieves a category by id.
 * @operationId getCategoryById
 * @pathParam {string} id - The category id
 * @response 200 - Category retrieved successfully
 * @responseContent {object} 200.application/json
 * @response 500 - Error fetching category
 * @prisma_model categories
 */
async function getCategoryById(req, res) {
	try {
		const category = await CategoriesDao.getCategoryById(req.params.id);
		res.status(200).json(category);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: error.message });
	}
}
export { getCategories };
export { getCategoriesByType };
export { createCategory };
export { updateCategory };
export { deleteCategory };
export { getCategoryById };
export default {
	getCategories,
	getCategoriesByType,
	createCategory,
	updateCategory,
	deleteCategory,
	getCategoryById,
};
