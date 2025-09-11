import express from 'express';

import WordController from '../../../controllers/WordController.js';
const router = express.Router();
router.get('/', WordController.getAllWordBuys);
// router.get('/word/:word', WordController.getAllWordBuysBySection);
router.get('/business/:business_id', WordController.getWordBuysByBusiness);
// router.get('/tier/:tier', WordController.getAllWordBuysByTier);
// router.get('/stripeSub/:stripe_subscription_id', WordController.getAllWordBuysByStripeSub);
router.post('/', WordController.createWordBuy);
router.patch('/update', WordController.updateWordBuys);
router.patch('/:id', WordController.updateWordBuy);
router.delete('/:id', WordController.deleteWordBuy);
router.get('/:id', WordController.getWordBuyById);
export default router;
