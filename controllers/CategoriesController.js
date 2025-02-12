const CategoriesDao = require('../dao/Categories');

async function getCategories(req, res) {
    try {
        const categories = await CategoriesDao.getCategories();
        res.status(200).json(categories);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function createCategory(req, res) {
    try {
        const {categoryData,translations,subcategories,parent_categories_id} = req.body
        const category = await CategoriesDao.createCategory(categoryData,translations,subcategories,parent_categories_id);
        res.status(201).json(category);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function updateCategory(req, res) {
    try {
        const {categoryData,translations,subcategories,parent_categories_id} = req.body
        const category = await CategoriesDao.updateCategory(req.params.id, categoryData,translations,subcategories,parent_categories_id);
        res.status(200).json(category);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function deleteCategory(req, res) {
    try {
        await CategoriesDao.deleteCategory(req.params.id);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function getCategoryById(req, res) {
    try {
        const category = await CategoriesDao.getCategoryById(req.params.id);
        res.status(200).json(category);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    getCategories,
    createCategory,
    updateCategory,
    deleteCategory,
    getCategoryById
};