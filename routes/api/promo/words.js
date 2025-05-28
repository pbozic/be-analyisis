import express from 'express';

import WordsController from '../../../controllers/WordController.js';
const router = express.Router();
router.get('/', WordsController.getAllWords);
router.post('/', WordsController.createWord);
router.patch('/:id', WordsController.updateWord);
router.delete('/:id', WordsController.deleteWord);
router.get('/:id', WordsController.getWordById);
export default router;
