import prisma from '../prisma/prisma.js';
/**
 * Get all categories with translations, icon, and subcategories; flattens translations onto the result.
 *
 * @returns {Promise<object[]>} Array of category records with translations and relations.
 */
async function getCategories() {
	try {
		let categories = await prisma.categories.findMany({
			include: {
				translatable: {
					include: {
						translations: true,
					},
				},
				icon: true,
				sub_categories: true,
			},
		});
		for (let category of categories) {
			category.translations = category.translatable.translations;
			delete category.translatable;
		}
		return categories;
	} catch (error) {
		console.error('Error getting categories:', error);
		throw new Error('Failed to get categories');
	}
}
/**
 * Get categories by category_type with translations and relations.
 *
 * @param {string} type - Category type to filter by.
 * @returns {Promise<object[]>} Array of category records.
 */
async function getCategoriesByType(type) {
	try {
		let categories = await prisma.categories.findMany({
			where: {
				category_type: type,
			},
			include: {
				translatable: {
					include: {
						translations: true,
					},
				},
				icon: true,
				sub_categories: true,
			},
			orderBy: {
				name: 'asc',
			},
		});
		for (let category of categories) {
			category.translations = category.translatable.translations;
			delete category.translatable;
		}
		return categories;
	} catch (error) {
		console.error('Error getting categories:', error);
		throw new Error('Failed to get categories');
	}
}
/**
 * Get a single category by ID with translations and relations.
 *
 * @param {string} id - Category ID.
 * @returns {Promise<object>} The category record.
 */
async function getCategoryById(id) {
	try {
		let category = await prisma.categories.findUnique({
			where: {
				categories_id: id,
			},
			include: {
				translatable: {
					include: {
						translations: true,
					},
				},
				icon: true,
				sub_categories: true,
			},
		});
		if (!category) {
			throw new Error('Category not found');
		}
		category.translations = category.translatable.translations;
		delete category.translatable;
		return category;
	} catch (error) {
		console.error('Error getting category by ID:', error);
		throw error;
	}
}
/**
 * Create a new category with translations, optional parent, subcategories, and optional icon.
 *
 * @param {object} categoryData - Base category fields (tag, category_type, name, etc.).
 * @param {object[]} translations - Array of translation objects to insert.
 * @param {string[]} subcategories - Array of category IDs to connect as subcategories.
 * @param {string[]} words - Array of word IDs to connect (unused here but kept for signature compatibility).
 * @param {string|null} parent_categories_id - Optional parent category ID.
 * @param {object} [iconFileData={}] - Optional icon file metadata (file_type, mime_type).
 * @returns {Promise<object>} The created category with translations and icon included.
 */
async function createCategory(
	categoryData,
	translations,
	subcategories,
	words,
	parent_categories_id,
	iconFileData = {}
) {
	try {
		let categoryExists = await prisma.categories.findUnique({
			where: {
				tag_category_type: {
					tag: categoryData.tag,
					category_type: categoryData.category_type,
				},
			},
		});
		if (categoryExists) {
			throw new Error('Category already exists');
		}
		let translatable = await prisma.translatable.create({ data: {} });
		const { file_type, mime_type } = iconFileData || {};
		let category = await prisma.categories.create({
			data: {
				...categoryData,
				translatable: {
					connect: {
						translatable_id: translatable.translatable_id,
					},
				},
				sub_categories: {
					connect: subcategories ? subcategories.map((subcat_id) => ({ categories_id: subcat_id })) : [],
				},
				...(parent_categories_id
					? {
							parent_category: {
								connect: {
									categories_id: parent_categories_id,
								},
							},
						}
					: {}),
				...(file_type && mime_type
					? {
							icon: {
								create: {
									file_type,
									mime_type,
									public: true,
								},
							},
						}
					: {}),
			},
			include: { icon: true },
		});
		let translats = [];
		for (let translation of translations) {
			let trans = await prisma.translations.create({
				data: {
					...translation,
					translatable: {
						connect: {
							translatable_id: translatable.translatable_id,
						},
					},
				},
			});
			translats.push(trans);
		}
		category.translations = translats;
		return category;
	} catch (error) {
		console.error('Error creating category:', error);
		throw new Error('Failed to create category: ' + error.message);
	}
}
/**
 * Update a category and its translations, subcategories, parent, and optional icon.
 *
 * @param {string} id - Category ID to update.
 * @param {object} categoryData - Partial fields to update on category.
 * @param {object[]} translations - Translations to upsert by language.
 * @param {string[]|null} subcategories - New list of subcategory IDs (replaces existing when provided).
 * @param {string|null} parent_categories_id - New parent category ID or null to disconnect.
 * @param {object|null} [iconFileData=null] - Optional icon file metadata to set or update.
 * @returns {Promise<object>} The updated category with icon included.
 */
async function updateCategory(
	id,
	categoryData,
	translations,
	subcategories,
	parent_categories_id,
	iconFileData = null
) {
	try {
		return await prisma.$transaction(async (prisma) => {
			const category = await prisma.categories.findUnique({
				where: { categories_id: id },
				select: { translatable_id: true, icon_file_id: true },
			});
			if (!category) throw new Error('Category not found');
			for (let translation of translations) {
				const existingTranslation = await prisma.translations.findUnique({
					where: {
						translationPair: {
							translatable_id: category.translatable_id,
							language: translation.language,
						},
					},
				});
				if (!existingTranslation) {
					await prisma.translations.create({
						data: {
							...translation,
							translatable: {
								connect: {
									translatable_id: category.translatable_id,
								},
							},
						},
					});
				} else {
					await prisma.translations.update({
						where: {
							translationPair: {
								translatable_id: category.translatable_id,
								language: translation.language,
							},
						},
						data: { translation: translation.translation },
					});
				}
			}
			const updateData = { ...categoryData };
			if (parent_categories_id) {
				updateData.parent_category = {
					connect: { categories_id: parent_categories_id },
				};
			} else {
				updateData.parent_category = {
					disconnect: true,
				};
			}
			if (subcategories) {
				updateData.sub_categories = {
					set: subcategories.map((subId) => ({ categories_id: subId })),
				};
			}
			if (iconFileData) {
				const { file_type, mime_type } = iconFileData;
				updateData.icon = category.icon_file_id
					? {
							update: {
								data: {
									file_type,
									mime_type,
								},
							},
						}
					: {
							create: {
								file_type,
								mime_type,
								public: true,
							},
						};
			}
			return await prisma.categories.update({
				where: { categories_id: id },
				data: updateData,
				include: {
					icon: true,
				},
			});
		});
	} catch (error) {
		console.error('Error updating category:', error);
		throw new Error('Failed to update category: ' + error.message);
	}
}
/**
 * Delete a category by ID after disconnecting related words.
 *
 * @param {string} id - Category ID.
 * @returns {Promise<object>} The deleted category record.
 */
async function deleteCategory(id) {
	try {
		let category = await prisma.categories.findUnique({ where: { categories_id: id } });
		if (!category) {
			throw new Error('Category not found');
		}
		await prisma.categories.update({
			where: { categories_id: category.categories_id },
			data: {
				words: {
					disconnect: [], // Disconnect all related words
				},
			},
		});
		// await prisma.translations.deleteMany({ where: { translatable_id: category.translatable_id } });
		// await prisma.translatable.delete({ where: { translatable_id: category.translatable_id } });
		return await prisma.categories.delete({ where: { categories_id: id } });
	} catch (error) {
		console.error('Error deleting category:', error);
		throw new Error('Failed to delete category: ' + error.message);
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
