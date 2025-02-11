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

async function createCategory(data) {
    let translatable = await prisma.translatable.create();
    let translations = data.translations;
    let category = await prisma.categories.create({ 
        ...data,
        translatable: {
            connect: { 
                translatable_id: translatable.translatable_id
            }
        }
    });
    let translats = [];
    for (let translation of translations) {
        let trans = await prisma.translations.create({
            ...translation,
            translatable: {
                connect: {
                    translatable_id: translatable.translatable_id
                }
            }
        });
        translats.push(trans);
    }
    category.translations = translats;
    return category;
}

async function updateCategory(id, data) {
    let translations = data.translations;
    for (let translation of translations) 
        await prisma.translations.update({ where: { translations_id: translation.translations_id }, data: {
            translation: translation.translation,
        } });


    return await prisma.categories.update({ where: { categories_id: id }, data });
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