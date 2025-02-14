const WordDao = require('../dao/Word');


async function createWord(req, res) {
    try {
        const result = await WordDao.createWord(req.body);
        res.status(201).json(result);
    } catch (error) {
        console.error('Error creating word:', error);
        res.status(500).json({ error: 'Failed to create word' });
    }
}

async function updateWord(req, res) {
    try {
        const { id } = req.params;
        const result = await WordDao.updateWord(id, req.body);
        if (!result) {
            return res.status(404).json({ error: 'Word not found' });
        }
        res.status(200).json(result);
    } catch (error) {
        console.error('Error updating word:', error);
        res.status(500).json({ error: 'Failed to update word' });
    }
}

async function deleteWord(req, res) {
    try {
        const { id } = req.params;
        const result = await WordDao.deleteWord(id);
        if (!result) {
            return res.status(404).json({ error: 'Word not found' });
        }
        res.status(200).json({ message: 'Word deleted successfully' });
    } catch (error) {
        console.error('Error deleting word:', error);
        res.status(500).json({ error: 'Failed to delete word' });
    }
}

async function getWordById(req, res) {
    try {
        const { id } = req.params;
        const result = await WordDao.getWordById(id);
        if (!result) {
            return res.status(404).json({ error: 'Word not found' });
        }
        res.status(200).json(result);
    } catch (error) {
        console.error('Error fetching word:', error);
        res.status(500).json({ error: 'Failed to fetch word' });
    }
}

async function getAllWords(req, res) {
    try {
        const result = await WordDao.getAllWords();
        res.status(200).json(result);
    } catch (error) {
        console.error('Error fetching all words:', error);
        res.status(500).json({ error: 'Failed to fetch words' });
    }
}

async function getAllWordsByCategory(req, res) {
    try {
        const { category } = req.params;
        const result = await WordDao.getAllWordsByCategory(category);
        res.status(200).json(result);
    } catch (error) {
        console.error('Error fetching words by category:', error);
        res.status(500).json({ error: 'Failed to fetch words by category' });
    }
}

async function removeCategoryFromWord(req, res) {
    try {
        const { id } = req.params;
        const result = await WordDao.removeCategoryFromWord(id);
        if (!result) {
            return res.status(404).json({ error: 'Word not found' });
        }
        res.status(200).json({ message: 'Category removed successfully' });
    } catch (error) {
        console.error('Error removing category from word:', error);
        res.status(500).json({ error: 'Failed to remove category from word' });
    }
}

async function addCategoryToWord(req, res) {
    try {
        const { id } = req.params;
        const { category } = req.body;
        const result = await WordDao.addCategoryToWord(id, category);
        if (!result) {
            return res.status(404).json({ error: 'Word not found' });
        }
        res.status(200).json(result);
    } catch (error) {
        console.error('Error adding category to word:', error);
        res.status(500).json({ error: 'Failed to add category to word' });
    }
}

async function createWordBuy(req, res) {
    try {
        const result = await WordDao.createWordBuy(req.body);
        res.status(201).json(result);
    } catch (error) {
        console.error('Error creating word buy:', error);
        res.status(500).json({ error: 'Failed to create word buy' });
    }
}

async function getWordBuyById(req, res) {
    try {
        const { id } = req.params;
        const result = await WordDao.getWordBuyById(id);
        if (!result) {
            return res.status(404).json({ error: 'Word buy not found' });
        }
        res.status(200).json(result);
    } catch (error) {
        console.error('Error fetching word buy:', error);
        res.status(500).json({ error: 'Failed to fetch word buy' });
    }
}

async function getAllWordBuys(req, res) {
    try {
        const result = await WordDao.getAllWordBuys();
        res.status(200).json(result);
    } catch (error) {
        console.error('Error fetching all word buys:', error);
        res.status(500).json({ error: 'Failed to fetch word buys' });
    }
}

async function deleteWordBuy(req, res) {
    try {
        const { id } = req.params;
        const result = await WordDao.deleteWordBuy(id);
        if (!result) {
            return res.status(404).json({ error: 'Word buy not found' });
        }
        res.status(200).json({ message: 'Word buy deleted successfully' });
    } catch (error) {
        console.error('Error deleting word buy:', error);
        res.status(500).json({ error: 'Failed to delete word buy' });
    }
}

async function updateWordBuy(req, res) {
    try {
        const { id } = req.params;
        const result = await WordDao.updateWordBuy(id, req.body);
        if (!result) {
            return res.status(404).json({ error: 'Word buy not found' });
        }
        res.status(200).json(result);
    } catch (error) {
        console.error('Error updating word buy:', error);
        res.status(500).json({ error: 'Failed to update word buy' });
    }
}

async function getWordBuysByBusiness(req, res) {
    try {
        const { user } = req.params;
        const result = await WordDao.getAllWordBuysByBusiness(user);
        res.status(200).json(result);
    } catch (error) {
        console.error('Error fetching word buys by business:', error);
        res.status(500).json({ error: 'Failed to fetch word buys by business' });
    }
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
