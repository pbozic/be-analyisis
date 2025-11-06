import express from 'express';

import bannerRouter from './promo/banners.routes.ts';
import adRouter from './promo/ads.routes.ts';
import sectionRouter from './promo/sections.routes.ts';
import sectionBuyRouter from './promo/section_buy.routes.ts';
import wordRouter from './promo/words.routes.ts';
import wordBuyRouter from './promo/word_buy.routes.ts';
import authMiddleware from '../../middleware/auth.js';

const router = express.Router();
router.use('/banners', bannerRouter);
router.use('/ads', adRouter);
router.use('/sections', sectionRouter);
router.use('/section_buy', [authMiddleware], sectionBuyRouter);
router.use('/words', wordRouter);
router.use('/word_buy', [authMiddleware], wordBuyRouter);
export default router;
