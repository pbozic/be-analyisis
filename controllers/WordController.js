const WordDao = require('../dao/Word');


async function createWord(args) {
    return await WordDao.createWord(args);
}

async function updateWord(id, args) {
    return await WordDao.updateWord(id, args);
}

async function deleteWord(id) {
    return await WordDao.deleteWord(id);
}

async function getWordById(id) {
    return await WordDao.getWordById(id);
}

async function getAllWords() {
    return await WordDao.getAllWords();
}

async function getAllWordsByCategory(category) {
    return await WordDao.getAllWordsByCategory(category);
}

async function removeCategoryFromWord(id) {
    return await WordDao.removeCategoryFromWord(id);
}

async function addCategoryToWord(id, category) {
    return await WordDao.addCategoryToWord(id, category);
}

async function createWordBuy(args) {
    return await WordDao.createWordBuy(args);
}

async function getWordBuyById(id) {
    return await WordDao.getWordBuyById(id);
}

async function getAllWordBuys() {
    return await WordDao.getAllWordBuys();
}

async function deleteWordBuy(id) {
    return await WordDao.deleteWordBuy(id);
}

async function updateWordBuy(id, args) {
    return await WordDao.updateWordBuy(id, args);
}

async function getWordBuysByBusiness(user) {
    return await WordDao.getAllWordBuysByBusiness(user);
}

module.exports = {
    createWord,
    updateWord,
    deleteWord,
    getWordById,
    getAllWords,
    getAllWordsByCategory,
    removeCategoryFromWord,
    addCategoryToWord,
    createWordBuy,
    getWordBuyById,
    getAllWordBuys,
    deleteWordBuy,
    updateWordBuy,
    getWordBuysByBusiness
};
