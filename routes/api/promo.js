const express = require('express');
const router = express.Router();

const bannerRouter = require('./promo/banners');
const adRouter = require('./promo/ads');
const sectionRouter = require('./promo/sections');
const sectionBuyRouter = require('./promo/section_buy');
const wordRouter = require('./promo/words');
const wordBuyRouter = require('./promo/word_buy');


router.use('/banners', bannerRouter);
router.use('/ads', adRouter);
router.use('/sections', sectionRouter);
router.use('/section_buy', sectionBuyRouter);
router.use('/words',wordRouter)
router.use('/word_buy',wordBuyRouter)

module.exports = router;










