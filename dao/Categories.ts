import prisma from '../prisma/prisma.js';
import type { CategoryBase, CategoryResponse } from '../schemas/dto/Category/index.js';

// Define common query arg types
interface FindManyArgs {
	where?: any;
	include?: any;
	orderBy?: any;
	skip?: number;
	take?: number;
}

interface FindUniqueArgs {
	where?: any;
	include?: any;
}

type PrismaTransactionClient = any;

interface TranslationData {
	language: string;
	translation: string;
}

interface IconFileData {
	file_type?: string;
	mime_type?: string;
}

/**
 * Get all categories with translations, icon, and subcategories; flattens translations onto the result.
 *
 * @param {FindManyArgs} args - Additional query args.
 * @returns {Promise<CategoryResponse[]>} Array of category records with translations and relations.
 */
const getCategories = async (args?: FindManyArgs): Promise<CategoryResponse[]> => {
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
			...args,
		});
		
		// Transform and flatten translations
		return categories.map((category: any) => {
			const { translatable, ...rest } = category;
			return {
				...rest,
				translations: translatable?.translations || [],
			};
		}) as CategoryResponse[];
	} catch (error) {
		console.error('Error getting categories:', error);
		throw new Error(error instanceof Error ? error.message : 'Failed to get categories');
	}
};

/**
 * Get categories by category_type with translations and relations.
 *
 * @param {string} type - Category type to filter by.
 * @param {FindManyArgs} args - Additional query args.
 * @returns {Promise<CategoryResponse[]>} Array of category records.
 */
const getCategoriesByType = async (type: string, args?: FindManyArgs): Promise<CategoryResponse[]> => {
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
			...args,
		});
		
		// Transform and flatten translations
		return categories.map((category: any) => {
			const { translatable, ...rest } = category;
			return {
				...rest,
				translations: translatable?.translations || [],
			};
		}) as CategoryResponse[];
	} catch (error) {
		console.error('Error getting categories:', error);
		throw new Error(error instanceof Error ? error.message : 'Failed to get categories');
	}
};

/**
 * Get a single category by ID with translations and relations.
 *
 * @param {string} id - Category ID.
 * @param {FindUniqueArgs} args - Additional query args.
 * @returns {Promise<CategoryResponse>} The category record.
 */
const getCategoryById = async (id: string, args?: FindUniqueArgs): Promise<CategoryResponse> => {
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
			...args,
		});
		
		if (!category) {
			throw new Error('Category not found');
		}
		
		// Transform and flatten translations
		const { translatable, ...rest } = category;
		return {
			...rest,
			translations: translatable?.translations || [],
		} as CategoryResponse;
	} catch (error) {
		console.error('Error getting category by ID:', error);
		throw error;
	}
};

/**
 * Create a new category with translations, optional parent, subcategories, and optional icon.
 *
 * @param {Partial<CategoryBase>} categoryData - Base category fields (tag, category_type, name, etc.).
 * @param {TranslationData[]} translations - Array of translation objects to insert.
 * @param {string[]} subcategories - Array of category IDs to connect as subcategories.
 * @param {string[]} words - Array of word IDs to connect (unused here but kept for signature compatibility).
 * @param {string|null} parent_categories_id - Optional parent category ID.
 * @param {IconFileData} iconFileData - Optional icon file metadata (file_type, mime_type).
 * @returns {Promise<CategoryResponse>} The created category with translations and icon included.
 */
const createCategory = async (
	categoryData: Partial<CategoryBase>,
	translations: TranslationData[],
	subcategories?: string[],
	words?: string[],
	parent_categories_id?: string | null,
	iconFileData: IconFileData = {}
): Promise<CategoryResponse> => {
	try {
		let categoryExists = await prisma.categories.findUnique({
			where: {
				tag_category_type: {
					tag: categoryData.tag!,
					category_type: categoryData.category_type!,
				},
			},
		});
		
		if (categoryExists) {
			throw new Error('Category already exists');
		}
		
		let translatable = await prisma.translatable.create({ data: {} });
		const { file_type, mime_type } = iconFileData;
		
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
			include: { 
				icon: true,
				translatable: {
					include: {
						translations: true,
					},
				},
			},
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
		
		// Transform and flatten translations
		const { translatable: translatableData, ...rest } = category;
		return {
			...rest,
			translations: translats,
		} as CategoryResponse;
	} catch (error) {
		console.error('Error creating category:', error);
		throw new Error('Failed to create category: ' + (error instanceof Error ? error.message : 'Unknown error'));
	}
};

/**
 * Update a category and its translations, subcategories, parent, and optional icon.
 *
 * @param {string} id - Category ID to update.
 * @param {Partial<CategoryBase>} categoryData - Partial fields to update on category.
 * @param {TranslationData[]} translations - Translations to upsert by language.
 * @param {string[]|null} subcategories - New list of subcategory IDs (replaces existing when provided).
 * @param {string|null} parent_categories_id - New parent category ID or null to disconnect.
 * @param {IconFileData|null} iconFileData - Optional icon file metadata to set or update.
 * @returns {Promise<CategoryResponse>} The updated category with icon included.
 */
const updateCategory = async (
	id: string,
	categoryData: Partial<CategoryBase>,
	translations: TranslationData[],
	subcategories?: string[] | null,
	parent_categories_id?: string | null,
	iconFileData: IconFileData | null = null
): Promise<CategoryResponse> => {
	try {
		return await prisma.$transaction(async (tx: PrismaTransactionClient) => {
			const category = await tx.categories.findUnique({
				where: { categories_id: id },
				select: { translatable_id: true, icon_file_id: true },
			});
			
			if (!category) throw new Error('Category not found');
			
			// Update translations
			for (let translation of translations) {
				const existingTranslation = await tx.translations.findUnique({
					where: {
						translationPair: {
							translatable_id: category.translatable_id,
							language: translation.language,
						},
					},
				});
				
				if (!existingTranslation) {
					await tx.translations.create({
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
					await tx.translations.update({
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
			
			const updateData: any = { ...categoryData };
			
			// Handle parent category
			if (parent_categories_id) {
				updateData.parent_category = {
					connect: { categories_id: parent_categories_id },
				};
			} else {
				updateData.parent_category = {
					disconnect: true,
				};
			}
			
			// Handle subcategories
			if (subcategories) {
				updateData.sub_categories = {
					set: subcategories.map((subId) => ({ categories_id: subId })),
				};
			}
			
			// Handle icon
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
			
			return await tx.categories.update({
				where: { categories_id: id },
				data: updateData,
				include: {
					icon: true,
					translatable: {
						include: {
							translations: true,
						},
					},
				},
			});
		}) as CategoryResponse;
	} catch (error) {
		console.error('Error updating category:', error);
		throw new Error('Failed to update category: ' + (error instanceof Error ? error.message : 'Unknown error'));
	}
};

/**
 * Delete a category by ID after disconnecting related words.
 *
 * @param {string} id - Category ID.
 * @returns {Promise<CategoryResponse>} The deleted category record.
 */
const deleteCategory = async (id: string): Promise<CategoryResponse> => {
	try {
		let category = await prisma.categories.findUnique({ where: { categories_id: id } });
		
		if (!category) {
			throw new Error('Category not found');
		}
		
		// Disconnect related words
		await prisma.categories.update({
			where: { categories_id: category.categories_id },
			data: {
				words: {
					disconnect: [], // Disconnect all related words
				},
			},
		});
		
		return await prisma.categories.delete({ 
			where: { categories_id: id },
			include: {
				icon: true,
				translatable: {
					include: {
						translations: true,
					},
				},
			},
		}) as CategoryResponse;
	} catch (error) {
		console.error('Error deleting category:', error);
		throw new Error('Failed to delete category: ' + (error instanceof Error ? error.message : 'Unknown error'));
	}
};

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