const prisma = require('../prisma/prisma');

async function getCategories() {
    return await prisma.categories.findMany();
}

async function createCategory(data) {
    return await prisma.categories.create({ data });
}

async function updateCategory(id, data) {
    return await prisma.categories.update({ where: { categories_id: id }, data });
}

async function deleteCategory(id) {
    return await prisma.categories.delete({ where: { categories_id: id } });
}

module.exports = {
    getCategories,
    createCategory,
    updateCategory,
    deleteCategory
};