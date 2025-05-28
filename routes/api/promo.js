import * as express from 'express';

import bannerRouter from './promo/banners.js';
import adRouter from './promo/ads.js';
import sectionRouter from './promo/sections.js';
import sectionBuyRouter from './promo/section_buy.js';
import wordRouter from './promo/words.js';
import wordBuyRouter from './promo/word_buy.js';
const router = express.Router();
router.use('/banners', bannerRouter);
router.use('/ads', adRouter);
router.use('/sections', sectionRouter);
router.use('/section_buy', sectionBuyRouter);
router.use('/words', wordRouter);
router.use('/word_buy', wordBuyRouter);
export default router;
