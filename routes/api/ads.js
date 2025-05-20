const dotenv = require('dotenv');
dotenv.config();
var express = require('express');

const router = express.Router();
const AdController = require('../../controllers/AdController');

router.get('/', AdController.listAds);
router.get('/active', AdController.listActiveAds);
router.get('/:ad_id', AdController.getAd);
router.post('/', AdController.createAd);
router.patch('/:ad_id', AdController.editAd);
router.delete('/:ad_id', AdController.deleteAd);

//activate and deactvivate ad
router.patch('/:ad_id/activate', AdController.activateAd);
router.patch('/:ad_id/deactivate', AdController.deactivateAd);

//get all ads for a user
router.get('/user/:user_id', AdController.getAdsByUserId);

//get all ads for a business
router.get('/business/:business_id', AdController.getAdsByBusinessId);

//get active ads by categroy array
router.post('/active/category', AdController.getAdsByCategory);

module.exports = router;
