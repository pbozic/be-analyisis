import WordDao from '../dao/Word.js';
import { updateUserSubscription } from '../dao/Word.js';

/**
 * POST /promo/words
 * @tag Word
 * @summary Create a new word
 * @description Creates a word with category and translations.
 * @operationId createWord
 * @bodyContent {object} application/json
 * @bodyRequired
 * @response 201 - Word created successfully
 * @responseContent {object} 201.application/json
 * @response 500 - Error creating word
 * @prisma_model words
 * @prisma_model translations
 * @prisma_model categories
 */
async function createWord(req, res) {
	try {
		const { wordData, translations } = req.body;
		const result = await WordDao.createWord(wordData.word, wordData.categories_id, translations);
		res.status(201).json(result);
	} catch (error) {
		console.error('Error creating word:', error);
		res.status(500).json({ error: 'Failed to create word' });
	}
}
/**
 * PATCH /promo/words/:id
 * @tag Word
 * @summary Update a word
 * @description Updates word value, category, and translations.
 * @operationId updateWord
 * @pathParam {string} id - The word ID
 * @bodyContent {object} application/json
 * @response 200 - Word updated successfully
 * @responseContent {object} 200.application/json
 * @response 404 - Word not found
 * @response 500 - Error updating word
 * @prisma_model words
 * @prisma_model translations
 * @prisma_model categories
 */
async function updateWord(req, res) {
	try {
		const { id } = req.params;
		const { wordData, translations } = req.body;
		const result = await WordDao.updateWord(id, wordData.word, wordData.categories_id, translations);
		if (!result) {
			return res.status(404).json({ error: 'Word not found' });
		}
		res.status(200).json(result);
	} catch (error) {
		console.error('Error updating word:', error);
		res.status(500).json({ error: 'Failed to update word' });
	}
}
/**
 * DELETE /promo/words/:id
 * @tag Word
 * @summary Delete a word
 * @description Deletes a word by ID.
 * @operationId deleteWord
 * @pathParam {string} id - The word ID
 * @response 200 - Word deleted successfully
 * @responseContent {object} 200.application/json
 * @response 404 - Word not found
 * @response 500 - Error deleting word
 * @prisma_model words
 */
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
/**
 * GET /promo/words/:id
 * @tag Word
 * @summary Get a word by ID
 * @description Retrieves a word with its translations and category.
 * @operationId getWordById
 * @pathParam {string} id - The word ID
 * @response 200 - Word retrieved successfully
 * @responseContent {object} 200.application/json
 * @response 404 - Word not found
 * @response 500 - Error fetching word
 * @prisma_model words
 * @prisma_model translations
 * @prisma_model categories
 */
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
/**
 * GET /promo/words
 * @tag Word
 * @summary List all words
 * @description Retrieves all words with translations and categories.
 * @operationId getAllWords
 * @response 200 - Words retrieved successfully
 * @responseContent {object} 200.application/json
 * @response 500 - Error fetching words
 * @prisma_model words
 * @prisma_model translations
 * @prisma_model categories
 */
async function getAllWords(req, res) {
	try {
		const result = await WordDao.getAllWords();
		res.status(200).json(result);
	} catch (error) {
		console.error('Error fetching all words:', error);
		res.status(500).json({ error: 'Failed to fetch words' });
	}
}
/**
 * DELETE /words/{id}/category
 * @tag Word
 * @summary Remove category from word
 * @description Disconnects the category from the specified word.
 * @operationId removeCategoryFromWord
 * @pathParam {string} id - The word ID
 * @response 200 - Category removed successfully
 * @responseContent {object} 200.application/json
 * @response 404 - Word not found
 * @response 500 - Error removing category from word
 * @prisma_model words
 * @prisma_model categories
 */
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
/**
 * POST /promo/word_buy
 * @tag WordBuy
 * @summary Create word buy subscription items
 * @description Creates word buy entries and ensures a Stripe subscription is active or updated.
 * @operationId createWordBuy
 * @bodyContent {object} application/json
 * @bodyRequired
 * @response 200 - Word buy created successfully
 * @responseContent {object} 200.application/json
 * @response 500 - Error creating word buy
 * @prisma_model word_buy
 * @prisma_model business
 * @prisma_model words
 */
async function createWordBuy(req, res) {
	try {
		let { words, business_id } = req.body;
		let userId = req.user?.user_id;
		const result = await WordDao.createWordBuySubscription(words, business_id, userId);
		res.status(200).json(result);
	} catch (error) {
		console.error('Error creating word buy:', error);
		res.status(500).json({ error: 'Failed to create word buy' });
	}
}
/**
 * GET /promo/word_buy/:id
 * @tag WordBuy
 * @summary Get word buy by ID
 * @description Retrieves a single word buy entry by its ID.
 * @operationId getWordBuyById
 * @pathParam {string} id - The word buy ID
 * @response 200 - Word buy retrieved successfully
 * @responseContent {object} 200.application/json
 * @response 404 - Word buy not found
 * @response 500 - Error fetching word buy
 * @prisma_model word_buy
 */
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
/**
 * GET /promo/word_buy
 * @tag WordBuy
 * @summary List all word buys
 * @description Retrieves all word buys.
 * @operationId getAllWordBuys
 * @response 200 - Word buys retrieved successfully
 * @responseContent {object} 200.application/json
 * @response 500 - Error fetching word buys
 * @prisma_model word_buy
 */
async function getAllWordBuys(req, res) {
	try {
		const result = await WordDao.getAllWordBuys();
		res.status(200).json(result);
	} catch (error) {
		console.error('Error fetching all word buys:', error);
		res.status(500).json({ error: 'Failed to fetch word buys' });
	}
}
/**
 * DELETE /promo/word_buy/:id
 * @tag WordBuy
 * @summary Delete a word buy
 * @description Soft-deletes a word buy and updates user subscription state.
 * @operationId deleteWordBuy
 * @pathParam {string} id - The word buy ID
 * @response 200 - Word buy deleted successfully
 * @responseContent {object} 200.application/json
 * @response 500 - Error deleting word buy
 * @prisma_model word_buy
 * @prisma_model business
 */
async function deleteWordBuy(req, res) {
	try {
		const { id } = req.params;
		const result = await WordDao.deleteWordBuy(id);
		await updateUserSubscription(req.user?.user_id);
		res.status(200).json({ message: 'Word buy subscription id deleted successfully', result });
	} catch (error) {
		console.error('Error deleting word buy:', error);
		res.status(500).json({ error: 'Failed to delete word buy' });
	}
}
/**
 * PATCH /promo/word_buy/:id
 * @tag WordBuy
 * @summary Update a word buy
 * @description Updates fields on a word buy, such as price.
 * @operationId updateWordBuy
 * @pathParam {string} id - The word buy ID
 * @bodyContent {object} application/json
 * @response 200 - Word buy updated successfully
 * @responseContent {object} 200.application/json
 * @response 404 - Word buy not found
 * @response 500 - Error updating word buy
 * @prisma_model word_buy
 */
async function updateWordBuy(req, res) {
	try {
		const { id } = req.params;
		const { price } = req.body;
		const result = await WordDao.updateWordBuy(id, { price });
		if (!result) {
			return res.status(404).json({ error: 'Word buy not found' });
		}
		res.status(200).json(result);
	} catch (error) {
		console.error('Error updating word buy:', error);
		res.status(500).json({ error: 'Failed to update word buy' });
	}
}
/**
 * PATCH /promo/word_buy/update
 * @tag WordBuy
 * @summary Bulk create/update word buys
 * @description Creates or updates multiple word buys and updates Stripe subscription accordingly.
 * @operationId updateWordBuys
 * @bodyContent {object} application/json
 * @response 200 - Word buys updated successfully
 * @responseContent {object} 200.application/json
 * @response 500 - Error updating word buys
 * @prisma_model word_buy
 * @prisma_model business
 */
async function updateWordBuys(req, res) {
	try {
		const user_id = req.user?.user_id;
		const { word_buys, business_id } = req.body;
		const result = await WordDao.createWordBuySubscription(word_buys, business_id, user_id);
		res.status(200).json(result);
	} catch (error) {
		console.error('Error updating word buy:', error);
		res.status(500).json({ error: 'Failed to update word buy' });
	}
}
/**
 * GET /promo/word_buy/business/:business_id
 * @tag WordBuy
 * @summary Get active word buys for a business
 * @description Retrieves active word buys for the specified business.
 * @operationId getWordBuysByBusiness
 * @pathParam {string} business_id - The business ID
 * @response 200 - Active word buys retrieved successfully
 * @responseContent {object} 200.application/json
 * @response 500 - Error fetching word buys by business
 * @prisma_model word_buy
 * @prisma_model business
 */
async function getWordBuysByBusiness(req, res) {
	try {
		const { business_id } = req.params;
		const result = await WordDao.getActiveWordBuysByBusiness(business_id);
		res.status(200).json(result);
	} catch (error) {
		console.error('Error fetching active word buys by business:', error);
		res.status(500).json({ error: 'Failed to fetch word buys by business' });
	}
}

export { createWord };
export { updateWord };
export { deleteWord };
export { getWordById };
export { getAllWords };
export { removeCategoryFromWord };
export { createWordBuy };
export { getWordBuyById };
export { getAllWordBuys };
export { deleteWordBuy };
export { updateWordBuy };
export { updateWordBuys };
export { getWordBuysByBusiness };
export default {
	createWord,
	updateWord,
	deleteWord,
	getWordById,
	getAllWords,
	removeCategoryFromWord,
	createWordBuy,
	getWordBuyById,
	getAllWordBuys,
	deleteWordBuy,
	updateWordBuy,
	updateWordBuys,
	getWordBuysByBusiness,
};
