const prisma = require('../prisma/prisma');

async function getCategories() {
    return await prisma.categories.findMany();
}

async function createCategory(data) {
    return await prisma.categories.create({ data });
}

async function updateCategory(id, data) {
    return await prisma.categories.update({ where: { category_id: id }, data });
}

async function deleteCategory(id) {
    return await prisma.categories.delete({ where: { category_id: id } });
}

module.exports = {
    getCategories,
    createCategory,
    updateCategory,
    deleteCategory
};