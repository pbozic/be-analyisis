const prisma = require('../prisma/prisma');

async function getCategories() {
    try {
        let categories = await prisma.categories.findMany({
            include: {
                translatable: {
                    include: {
                        translations: true
                    }
                },
                icon: true
            }
        });

        for (let category of categories) {
            category.translations = category.translatable.translations;
            delete category.translatable;
        }

        return categories;
    } catch (error) {
        console.error("Error getting categories:", error);
        throw new Error("Failed to get categories");
    }
}

async function getCategoryById(id) {
    try {
        let category = await prisma.categories.findUnique({
            where: {
                categories_id: id
            },
            include: {
                translatable: {
                    include: {
                        translations: true
                    }
                },
                icon: true
            }
        });

        if (!category) {
            throw new Error("Category not found");
        }

        category.translations = category.translatable.translations;
        delete category.translatable;

        return category;
    } catch (error) {
        console.error("Error getting category by ID:", error);
        throw error;
    }
}

async function createCategory(categoryData, translations, subcategories, parent_categories_id, iconFileData={}) {
    try {
        let translatable = await prisma.translatable.create({data:{}});

        const {file_type, mime_type} = iconFileData;

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
                    ...(parent_categories_id
                            ? {
                                parent_category: {
                                    connect: {
                                        categories_id: parent_categories_id
                                    }
                                }
                            } : {}
                    ),
                    ...(iconFileData ? {
                        icon: {
                            create: {
                                file_type,
                                mime_type,
                                public:true
                            }
                        }
                    }:{})
                },
                include:{icon:true}
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
    } catch (error) {
        console.error("Error creating category:", error);
        throw new Error("Failed to create category: " + error.message);
    }
}

async function updateCategory(id, categoryData, translations, subcategories, parent_categories_id, iconFileData=null) {
    try {
        return await prisma.$transaction(async (prisma) => {
            const category = await prisma.categories.findUnique({
                where: { categories_id: id },
                select: { translatable_id: true, icon_file_id:true}
            });

            if (!category) throw new Error("Category not found");

            for (let translation of translations) {
                await prisma.translations.update({
                    where: {
                        translationPair:{
                            translatable_id: category.translatable_id,
                            language: translation.language,
                        }
                    },
                    data: { translation: translation.translation },
                });
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

            if(iconFileData){
                const {file_type, mime_type} = iconFileData;
                updateData.icon = category.icon_file_id ? {
                    update: {
                        data: {
                            file_type,
                            mime_type
                        }
                    }
                } : {
                    create: {
                        file_type,
                        mime_type,
                        public: true
                    }
                }
            }

            return await prisma.categories.update({
                where: { categories_id: id },
                data: updateData,
                include:{
                    icon:true
                }
            });
        });
    } catch (error) {
        console.error("Error updating category:", error);
        throw new Error("Failed to update category: " + error.message);
    }
}

async function deleteCategory(id) {
    try {
        let category = await prisma.categories.findUnique({ where: { categories_id: id } });

        if (!category) {
            throw new Error("Category not found");
        }

        await prisma.translations.deleteMany({ where: { translatable_id: category.translatable_id } });
        await prisma.translatable.delete({ where: { translatable_id: category.translatable_id } });
        return await prisma.categories.delete({ where: { categories_id: id } });
    } catch (error) {
        console.error("Error deleting category:", error);
        throw new Error("Failed to delete category: " + error.message);
    }
}

module.exports = {
    getCategories,
    createCategory,
    updateCategory,
    deleteCategory,
    getCategoryById
};