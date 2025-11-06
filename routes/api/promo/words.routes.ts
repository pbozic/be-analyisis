import express from 'express';

import WordsController from '../../../controllers/WordController.js';
import { validate } from '../../../middleware/zod.ts';
import { CreateWordRequestSchema, UpdateWordRequestSchema } from '../../../schemas/dto/Word/word.dto.ts';

const router = express.Router();

router.get('/', WordsController.getAllWords);
router.post('/', validate(CreateWordRequestSchema), WordsController.createWord);
router.patch('/:id', validate(UpdateWordRequestSchema), WordsController.updateWord);
router.delete('/:id', WordsController.deleteWord);
router.get('/:id', WordsController.getWordById);

export default router;
