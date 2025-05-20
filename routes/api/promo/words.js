var express = require('express');
const router = express.Router();

// Middleware and validation schemas (if applicable)

const WordsController = require('../../../controllers/WordController');

router.get('/', WordsController.getAllWords);
router.post('/', WordsController.createWord);
router.patch('/:id', WordsController.updateWord);
router.delete('/:id', WordsController.deleteWord);
router.get('/:id', WordsController.getWordById);

module.exports = router;
