import express from 'express';

import WordController from '../../../controllers/WordController.js';
import { validate } from '../../../middleware/zod.ts';
import {
	CreateWordBuyRequestSchema,
	UpdateWordBuysRequestSchema,
	UpdateSingleWordBuyRequestSchema,
} from '../../../schemas/dto/Word/word.dto.ts';

const router = express.Router();

router.get('/', WordController.getAllWordBuys);
// router.get('/word/:word', WordController.getAllWordBuysBySection);
router.get('/business/:business_id', WordController.getWordBuysByBusiness);
// router.get('/tier/:tier', WordController.getAllWordBuysByTier);
// router.get('/stripeSub/:stripe_subscription_id', WordController.getAllWordBuysByStripeSub);
router.post('/', validate(CreateWordBuyRequestSchema), WordController.createWordBuy);
router.patch('/update', validate(UpdateWordBuysRequestSchema), WordController.updateWordBuys);
router.patch('/:id', validate(UpdateSingleWordBuyRequestSchema), WordController.updateWordBuy);
router.delete('/:id', WordController.deleteWordBuy);
router.get('/:id', WordController.getWordBuyById);

export default router;
