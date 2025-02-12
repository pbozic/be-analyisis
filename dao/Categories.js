const prisma = require('../prisma/prisma');

async function getCategories() {
    let categories = await prisma.categories.findMany({
        include: {
            translatable: {
                include: {
                    translations: true
                }
            }
        }
    });

    for (let category of categories) {
        category.translations = category.translatable.translations;
        delete category.translatable;
    }

    return categories;

}

async function getCategoryById(id) {

    let category = await prisma.categories.findUnique({
        where: {
            categories_id: id
        },
        include: {
            translatable: {
                include: {
                    translations: true
                }
            }
        }
    });
    category.translations = category.translatable.translations;
    delete category.translatable;

    return category;
}

async function createCategory(categoryData,translations,subcategories) {
    let translatable = await prisma.translatable.create({data:{}});
    let category = await prisma.categories.create(
        {
            data: {
                ...categoryData,
                translatable: {
                    connect: {
                        translatable_id: translatable.translatable_id
                    }
                },
                sub_categories: {
                    connect: subcategories ? subcategories.map(subcat_id => ({ categories_id: subcat_id })) : []
                },
                ...(categoryData?.parent_category_id
                        ? {
                            parent_category: {
                                connect: {
                                    categories_id: categoryData?.parent_category
                                }
                            }
                        } : {}
                )
            }
        });
    let translats = [];
    for (let translation of translations) {
        let trans = await prisma.translations.create({
            data: {
                ...translation,
                translatable: {
                    connect: {
                        translatable_id: translatable.translatable_id
                    }
                }
            }
        });
        translats.push(trans);
    }
    category.translations = translats;
    return category;
}

async function updateCategory(id, categoryData, translations, subcategories) {
    return await prisma.$transaction(async (prisma) => {
        // Fetch the current translatable_id for this category
        const category = await prisma.categories.findUnique({
            where: { categories_id: id },
            select: { translatable_id: true },
        });
        if (!category) throw new Error("Category not found");

        for (let translation of translations) {
            await prisma.translations.update({
                where: {
                    translatable_id: category.translatable_id,
                    language: translation.language,
                },
                data: { translation: translation.translation },
            });
        }

        // Prepare category update data
        const updateData = { ...categoryData };

        // Handle parent category connection if provided
        if (categoryData.parent_categories_id) {
            updateData.parent_category = {
                connect: { categories_id: categoryData.parent_categories_id },
            };
        } else {
            updateData.parent_category = {
                disconnect: true, // Remove existing parent if no new one is provided
            };
        }

        if (subcategories) {
            updateData.sub_categories = {
                set: subcategories.map((subId) => ({ categories_id: subId })), // Replace subcategories
            };
        }

        return await prisma.categories.update({
            where: { categories_id: id },
            data: updateData,
        });
    });
}


async function deleteCategory(id) {
    let category = await prisma.categories.findUnique({ where: { categories_id: id } });
    await prisma.translations.deleteMany({ where: { translatable_id: category.translatable_id } });
    await prisma.translatable.delete({ where: { translatable_id: category.translatable_id } });
    return await prisma.categories.delete({ where: { categories_id: id } });
}

module.exports = {
    getCategories,
    createCategory,
    updateCategory,
    deleteCategory,
    getCategoryById
};