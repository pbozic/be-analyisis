import express from 'express';

import bannerRouter from './promo/banners.routes.js';
import adRouter from './promo/ads.routes.js';
import sectionRouter from './promo/sections.routes.js';
import sectionBuyRouter from './promo/section_buy.routes.js';
import wordRouter from './promo/words.routes.js';
import wordBuyRouter from './promo/word_buy.routes.js';
import authMiddleware from '../../middleware/auth.js';
const router = express.Router();
router.use('/banners', bannerRouter);
router.use('/ads', adRouter);
router.use('/sections', sectionRouter);
router.use('/section_buy', sectionBuyRouter);
router.use('/words', wordRouter);
router.use('/word_buy', [authMiddleware], wordBuyRouter);
export default router;
