const CategoriesDao = require('../dao/Categories');
const { upsertFileOnS3Helper } = require("./FilesController");

async function getCategories(req, res) {
    try {
        const categories = await CategoriesDao.getCategories();
        res.status(200).json(categories);
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: error.message });
    }
}

async function createCategory(req, res) {
    try {
        const user_id =  req.user.user_id
        const {categoryData,translations,subcategories,words,parent_categories_id,iconFileData} = req.body
        let tag = categoryData.name.replace(/\s/g, '-').toLowerCase()
        for (let translation of translations) { 
            if (translation.language === 'en') {
                tag = translation.translation.replace(/\s/g, '-').toLowerCase()
                break
            }
        }

        categoryData.tag = tag;
        const category = await CategoriesDao.createCategory(categoryData,translations,subcategories,words,parent_categories_id,iconFileData);
        if(iconFileData){
            const {file_type,mime_type, base64} = iconFileData
            await upsertFileOnS3Helper(null, category.icon, file_type,mime_type,base64)
        }
        res.status(201).json(category);
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: error.message });
    }
}

async function updateCategory(req, res) {
    try {
        const user_id = req.user.user_id
        const {categoryData,translations,subcategories,parent_categories_id,iconFileData} = req.body
        const category = await CategoriesDao.updateCategory(req.params.id, categoryData,translations,subcategories,parent_categories_id,iconFileData);
        if(iconFileData){
            const {file_type,mime_type, base64} = iconFileData
            await upsertFileOnS3Helper(user_id, category.icon, file_type, mime_type, base64)
        }
        res.status(200).json(category);
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: error.message });
    }
}

async function deleteCategory(req, res) {
    try {
        await CategoriesDao.deleteCategory(req.params.id);
        res.status(204).send();
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: error.message });
    }
}

async function getCategoryById(req, res) {
    try {
        const category = await CategoriesDao.getCategoryById(req.params.id);
        res.status(200).json(category);
    } catch (error) {
        console.error(error)
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