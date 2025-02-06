const PromoDao = require('../dao/Promo');

async function createPromoSection(req, res) {
    try {
        const promoSection = await PromoDao.createPromoSection(req.body);
        res.json(promoSection);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function updatePromoSection(req, res) {
    try {
        const promoSection = await PromoDao.updatePromoSection(req.params.id, req.body);
        res.json(promoSection);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


async function deletePromoSection(req, res) {
    try {
        const promoSection = await PromoDao.deletePromoSection(req.params.id);
        res.json(promoSection);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


async function getPromoSectionById(req, res) {
    try {
        const promoSection = await PromoDao.getPromoSectionById(req.params.id);
        res.json(promoSection);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function getAllPromoSections(req, res) {
    try {
        const promoSections = await PromoDao.getAllPromoSections();
        res.json(promoSections);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function getAllPromoSectionsByServiceType(req, res) {
    try {
        const promoSections = await PromoDao.getAllPromoSectionsByServiceType(req.params.type);
        res.json(promoSections);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function createPromoAd(req, res) {
    try {
        const promoAd = await PromoDao.createPromoAd(req.body);
        res.json(promoAd);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function updatePromoAd(req, res) {
    try {
        const promoAd = await PromoDao.updatePromoAd(req.params.id, req.body);
        res.json(promoAd);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function deletePromoAd(req, res) {
    try {
        const promoAd = await PromoDao.deletePromoAd(req.params.id);
        res.json(promoAd);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function getPromoAdById(req, res) {
    try {
        const promoAd = await PromoDao.getPromoAdById(req.params.id);
        res.json(promoAd);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function getAllPromoAds(req, res) {
    try {
        const promoAds = await PromoDao.getAllPromoAds();
        res.json(promoAds);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function getPromoAdsByServiceType  (req, res) {
    try {
        const promoAds = await PromoDao.getPromoAdsByServiceType(req.params.type);
        res.json(promoAds);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function getPromoAdsByCategory  (req, res) {
    try {
        const promoAds = await PromoDao.getPromoAdsByCategory(req.params.category);
        res.json(promoAds);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

/*
createPromoBanner,
    updatePromoBanner,
    deletePromoBanner,
    getPromoBannerById,
    getAllPromoBanners,
    getAllPromoBannersByType,
    getAllPromoBannersBySize,
    getAllPromoBannersByAd,
    getAllPromoBannersBySection

*/
async function createPromoBanner(req, res) {
    try {
        const promoBanner = await PromoDao.createPromoBanner(req.body);
        res.json(promoBanner);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function updatePromoBanner(req, res) {
    try {
        const promoBanner = await PromoDao.updatePromoBanner(req.params.id, req.body);
        res.json(promoBanner);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function deletePromoBanner(req, res) {
    try {
        const promoBanner = await PromoDao.deletePromoBanner(req.params.id);
        res.json(promoBanner);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function getPromoBannerById(req, res) {
    try {
        const promoBanner = await PromoDao.getPromoBannerById(req.params.id);
        res.json(promoBanner);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function getAllPromoBanners(req, res) {
    try {
        const promoBanners = await PromoDao.getAllPromoBanners();
        res.json(promoBanners);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function getAllPromoBannersByType(req, res) {
    try {
        const promoBanners = await PromoDao.getAllPromoBannersByType(req.params.type);
        res.json(promoBanners);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function getAllPromoBannersBySize(req, res) {
    try {
        const promoBanners = await PromoDao.getAllPromoBannersBySize(req.params.size);
        res.json(promoBanners);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function getAllPromoBannersByAd(req, res) {
    try {
        const promoBanners = await PromoDao.getAllPromoBannersByAd(req.params.ad);
        res.json(promoBanners);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function getAllPromoBannersBySection(req, res) {
    try {
        const promoBanners = await PromoDao.getAllPromoBannersBySection(req.params.section);
        res.json(promoBanners);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function getPromoBannersByServiceType  (req, res) {
    try {
        const promoBanners = await PromoDao.getPromoBannersByServiceType(req.params.type);
        res.json(promoBanners);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function createPromoSectionBuy(req, res) {
   try {
     const promoSectionBuy = await PromoDao.createPromoSectionBuy(req.body);
     res.json(promoSectionBuy);
   } catch (error) {
     res.status(500).json({ error: error.message });
   }
}

async function updatePromoSectionBuy(req, res) {
    try {
        const promoSectionBuy = await PromoDao.updatePromoSectionBuy(req.params.id, req.body);
        res.json(promoSectionBuy);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function deletePromoSectionBuy(req, res) {
    try {
        const promoSectionBuy = await PromoDao.deletePromoSectionBuy(req.params.id);
        res.json(promoSectionBuy);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function getPromoSectionBuyById(req, res) {
    try {
        const promoSectionBuy = await PromoDao.getPromoSectionBuyById(req.params.id);
        res.json(promoSectionBuy);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function getAllPromoSectionBuys(req, res) {
    try {
        const promoSectionBuys = await PromoDao.getAllPromoSectionBuys();
        res.json(promoSectionBuys);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function getAllPromoSectionBuysBySection(req, res) {
    try {
        const promoSectionBuys = await PromoDao.getAllPromoSectionBuysBySection(req.params.section);
        res.json(promoSectionBuys);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function getAllPromoSectionBuysByBusiness(req, res) {
    try {
        const promoSectionBuys = await PromoDao.getAllPromoSectionBuysByBusiness(req.params.business_id);
        res.json(promoSectionBuys);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function getAllPromoSectionBuysByTier(req, res) {
    try {
        const promoSectionBuys = await PromoDao.getAllPromoSectionBuysByTier(req.params.tier);
        res.json(promoSectionBuys);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function getAllPromoSectionBuysByStripeSub(req, res) {
    try {
        const promoSectionBuys = await PromoDao.getAllPromoSectionBuysByStripeSub(req.params.stripe_subscription_id);
        res.json(promoSectionBuys);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function addStripeSubToPromoSectionBuy(req, res) {
    try {
        const promoSectionBuy = await PromoDao.addStripeSubToPromoSectionBuy(req.params.id, req.body.stripe_subscription_id);
        res.json(promoSectionBuy);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    createPromoSection,
    updatePromoSection,
    deletePromoSection,
    getPromoSectionById,
    getAllPromoSections,
    getAllPromoSectionsByServiceType,
    createPromoAd,
    updatePromoAd,
    deletePromoAd,
    getPromoAdById,
    getAllPromoAds,
    getPromoAdsByServiceType,
    getPromoAdsByCategory,
    createPromoBanner,
    updatePromoBanner,
    deletePromoBanner,
    getPromoBannerById,
    getAllPromoBanners,
    getAllPromoBannersByType,
    getAllPromoBannersBySize,
    getAllPromoBannersByAd,
    getAllPromoBannersBySection,
    getPromoBannersByServiceType,
    createPromoSectionBuy,
    updatePromoSectionBuy,
    deletePromoSectionBuy,
    getPromoSectionBuyById,
    getAllPromoSectionBuys,
    getAllPromoSectionBuysBySection,
    getAllPromoSectionBuysByBusiness,
    getAllPromoSectionBuysByTier,
    getAllPromoSectionBuysByStripeSub,
    addStripeSubToPromoSectionBuy
}
