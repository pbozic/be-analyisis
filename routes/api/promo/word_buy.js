const express = require('express');

const router = express.Router();
const WordController = require('../../../controllers/WordController');

router.get('/', WordController.getAllWordBuys);
// router.get('/word/:word', WordController.getAllWordBuysBySection);
// router.get('/business/:business_id', WordController.getAllWordBuysByBusiness);
// router.get('/tier/:tier', WordController.getAllWordBuysByTier);
// router.get('/stripeSub/:stripe_subscription_id', WordController.getAllWordBuysByStripeSub);
router.post('/', WordController.createWordBuy);
router.put('/:id', WordController.updateWordBuy);
router.delete('/:id', WordController.deleteWordBuy);
router.get('/:id', WordController.getWordBuyById);
// router.post('/stripeSub/:id', WordController.addStripeSubToWordBuy);

module.exports = router;
