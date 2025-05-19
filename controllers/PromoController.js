
const PromoDao = require('../dao/Promo');
const ProductDao = require('../dao/Product');
const BusinessUsersDao = require('../dao/BusinessUsers');
const BusinessDao = require('../dao/Business');
const stripe = require('../lib/stripe');
const S3Helper = require("../lib/s3");
const discountRules = {
    2: 0,    // 0% discount (Full price for 1-2 units)
    4: 5,    // 5% discount for 3-4 units
    6: 10,   // 10% discount for 5-6 units
    8: 15    // 15% discount for 7+ units (inf)
};
function getDiscountedPricePerQuantity(basePrice, quantity) {
    let discount = 0;
    for (let rule in discountRules) {
        if (quantity >= rule) {
            discount = discountRules[rule];
        }
    }
    return basePrice - (basePrice * discount / 100);
}

/**
 * POST /promo-sections
 * @tag PromoSection
 * @summary Create a new promo section
 * @description Creates a new promo section and associated Stripe product and pricing.
 * @operationId createPromoSection
 * @bodyDescription The promo section details to create
 * @bodyContent {object} application/json
 * @bodyRequired
 * @bodyContentExample {
 *   "name": "Promo Section Name",
 *   "tag": "Promo Tag",
 *   "description": "Description of the promo section",
 *   "service_type": "Service Type",
 *   "canPurchase": true,
 *   "t1Price": 1000, // Base price for tier 1
 *   "t2Price": 2000, // Base price for tier 2
 *   "t3Price": 3000  // Base price for tier 3
 *   
 * }
 * @response 200 - Promo section created successfully
 * @responseContent {object} 200.application/json
 * @responseExample 200.application/json {
 *   "promo_sections_id": 1,
 *   "name": "Promo Section Name",
 *   "tag": "Promo Tag",
 *   "description": "Description of the promo section",
 *   "service_type": "Service Type",
 *   "canPurchase": true,
 *   "t1Price": 1000, // Base price for tier 1
 *   "t2Price": 2000, // Base price for tier 2
 *   "t3Price": 3000  // Base price for tier 3
 * }
 * @response 500 - Error creating new promo section
 * @prisma_model promo_sections
 */

async function createPromoSection(req, res) {
    try {
        //TODO: create stripe product and pricing
        console.info(JSON.stringify(req.body,null,2))
        const { sectionData,translations } = req.body

        let promoSection = await PromoDao.createPromoSection(sectionData, translations);
        
        res.json(promoSection);
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: error.message });
    }
}

async function updatePromoSection(req, res) {
    try {
        const { sectionData,translations } = req.body

        const promoSection = await PromoDao.updatePromoSection(req.params.id, sectionData,translations);
        if (!promoSection.canPurchase) {
            res.status(200).json(promoSection);
            return;
        }
        res.status(200).json(promoSection);
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: error.message });
    }
}

async function reorderPromoSections(req, res) {
    try {
        const { promo_sections_ids } = req.body

        const promoSections = await PromoDao.reorderPromoSections(promo_sections_ids);
        res.status(200).json(promoSections);
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: error.message });
    }
}


/**
 * DELETE /promo-sections/{id}
 * @tag PromoSection
 * @summary Delete a promo section
 * @description Deletes a promo section by its ID.
 * @operationId deletePromoSection
 * @pathParam {string} id - The ID of the promo section to delete
 * @response 200 - Promo section deleted successfully
 * @responseContent {object} 200.application/json
 * @responseExample 204.application/json 
 * @response 500 - Error deleting promo section
 */
async function deletePromoSection(req, res) {
    try {
        const promoSection = await PromoDao.deletePromoSection(req.params.id);
        res.json(promoSection);
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: error.message });
    }
}


async function getPromoSectionById(req, res) {
    try {
        const promoSection = await PromoDao.getPromoSectionById(req.params.id);
        let result = {
            ...promoSection,
            discountRules: discountRules
        }
        res.json(result);
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: error.message });
    }
}

async function getAllPromoSections(req, res) {
    try {
        const promoSections = await PromoDao.getAllPromoSections();
        res.json(promoSections);
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: error.message });
    }
}

async function getAllPromoSectionsByServiceType(req, res) {
    try {
        const promoSections = await PromoDao.getAllPromoSectionsByServiceType(req.params.type);
        res.json(promoSections);
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: error.message });
    }
}

async function createPromoAd(req, res) {
    try {
        const {promoAdData, categories_ids, promo_banners_ids} = req.body
        const promoAd = await PromoDao.createPromoAd(promoAdData, categories_ids, promo_banners_ids);
        res.json(promoAd);
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: error.message });
    }
}

async function updatePromoAd(req, res) {
    try {
        const {promoAdData, categories_ids, promo_banners_ids} = req.body

        const promoAd = await PromoDao.updatePromoAd(req.params.id, promoAdData, categories_ids, promo_banners_ids);
        res.json(promoAd);
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: error.message });
    }
}

async function deletePromoAd(req, res) {
    try {
        const promoAd = await PromoDao.deletePromoAd(req.params.id);
        res.json(promoAd);
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: error.message });
    }
}

async function getPromoAdById(req, res) {
    try {
        const promoAd = await PromoDao.getPromoAdById(req.params.id);
        res.json(promoAd);
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: error.message });
    }
}

async function getAllPromoAds(req, res) {
    try {
        const promoAds = await PromoDao.getAllPromoAds();
        res.json(promoAds);
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: error.message });
    }
}

async function getPromoAdsByServiceType  (req, res) {
    try {
        const promoAds = await PromoDao.getAllPromoAdsByServiceType(req.params.type);
        res.json(promoAds);
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: error.message });
    }
}

async function getPromoAdsByCategory  (req, res) {
    try {
        const promoAds = await PromoDao.getAllPromoAdsByCategory(req.params.category);
        res.json(promoAds);
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: error.message });
    }
}

async function createPromoBanner(req, res) {
    try {
        const {promoBannerData,imageFileData} = req.body
        const promoBanner = await PromoDao.createPromoBanner(promoBannerData,imageFileData);
        if(imageFileData?.base64){
            const file = promoBanner.files
            const key = S3Helper.getFileKey(file.file_id, file.mime_type);
            await S3Helper.SaveObject(key, imageFileData.base64, file.mime_type, {}, file, file.public);
        }
        res.json(promoBanner);
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: error.message });
    }
}

async function updatePromoBanner(req, res) {
    try {
        const {promoBannerData,imageFileData} = req.body
        const promoBanner = await PromoDao.updatePromoBanner(req.params.id, promoBannerData,imageFileData);
        if(imageFileData?.base64){
            const file = promoBanner.files
            const key = S3Helper.getFileKey(file.file_id, file.mime_type);
            await S3Helper.SaveObject(key, imageFileData.base64, file.mime_type, {}, file, file.public);
        }
        res.json(promoBanner);
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: error.message });
    }
}

async function deletePromoBanner(req, res) {
    try {
        const promoBanner = await PromoDao.deletePromoBanner(req.params.id);
        res.json(promoBanner);
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: error.message });
    }
}

async function getPromoBannerById(req, res) {
    try {
        const promoBanner = await PromoDao.getPromoBannerById(req.params.id);
        res.json(promoBanner);
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: error.message });
    }
}

async function getAllPromoBanners(req, res) {
    try {
        const promoBanners = await PromoDao.getAllPromoBanners();
        res.json(promoBanners);
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: error.message });
    }
}

async function getAllPromoBannersByType(req, res) {
    try {
        const promoBanners = await PromoDao.getAllPromoBannersByType(req.params.type);
        res.json(promoBanners);
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: error.message });
    }
}

async function getAllPromoBannersBySize(req, res) {
    try {
        const promoBanners = await PromoDao.getAllPromoBannersBySize(req.params.size);
        res.json(promoBanners);
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: error.message });
    }
}

async function getAllPromoBannersByAd(req, res) {
    try {
        const promoBanners = await PromoDao.getAllPromoBannersByAd(req.params.ad);
        res.json(promoBanners);
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: error.message });
    }
}
//
// async function getAllPromoBannersBySection(req, res) {
//     try {
//         const promoBanners = await PromoDao.getAllPromoBannersBySection(req.params.section);
//         res.json(promoBanners);
//     } catch (error) {
//         console.error(error)
//         res.status(500).json({ error: error.message });
//     }
// }

async function getPromoBannersByServiceType  (req, res) {
    try {
        const promoBanners = await PromoDao.getPromoBannersByServiceType(req.params.type);
        res.json(promoBanners);
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: error.message });
    }
}

async function createCheckoutSessionForPromoBuy(req, res) {
    try {
        const { promo_sections_id, duration, tier } = req.body;
        const userId = req.user.user_id;
        // Fetch promo section details (optional)
        const promoSection = await prisma.promo_sections.findUnique({
            where: { promo_sections_id: promo_sections_id }
        });
        const businessUser = await BusinessUsersDao.getBusinessUserByUserId(userId);
        const business = await BusinessDao.getBusinessById(businessUser.business_id);
        if (!promoSection) {
            return res.status(404).json({ error: "Promo section not found" });
        }
        let price = 0;
        switch (tier) {
            case 1:
                price = promoSection.t1Price;
                break;
            case 2:
                price = promoSection.t2Price;
                break;
            case 3:
                price = promoSection.t3Price;
                break;
            default:
                return res.status(400).json({ error: "Invalid tier" });
        }
        if (price === 0) {
            return res.status(400).json({ error: "Something went wrong" });
        }
        // Create Stripe Checkout Session
        const session = await stripe.checkout.sessions.create({
            customer: business.stripe_customer_id,  // Business customer ID
            payment_method_types: ['card'],
            line_items: [
                {
                    price_data: {
                        currency: 'eur',
                        product_data: {
                            name: promoSection.name, // ✅ Add custom name
                            description: `Promo Section Tier: ${tier} for ${duration * 30} days` // ✅ Add custom description
                        },
                        unit_amount: price * 100 // Convert to cents
                    },
                    quantity: duration
                }
            ],
            mode: 'payment', // One-time payment
            success_url: `${process.env.FRONTEND_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${process.env.FRONTEND_URL}/cancel`,
            metadata: {
                user_id: userId,
                promo_sections_id: promo_sections_id,
                duration: duration,
                promo_section_name: promoSection.name,
                business_id: businessUser.business_id,
                type: "promo_section",
                tier: tier
            }
        });

        res.json({ checkoutUrl: session.url });
    } catch (error) {
        console.error("Checkout Error:", error);
        res.status(500).json({ error: error.message });
    }

}

async function createPromoSectionBuy(req, res) {
   try {
    let business_id = req.body.business_id;
    let tier = req.body.tier;
    let promo_section_id = req.body.promo_section_id;
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
        console.error(error)
        res.status(500).json({ error: error.message });
    }
}

async function deletePromoSectionBuy(req, res) {
    try {
        const promoSectionBuy = await PromoDao.deletePromoSectionBuy(req.params.id);
        res.json(promoSectionBuy);
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: error.message });
    }
}

async function getPromoSectionBuyById(req, res) {
    try {
        const promoSectionBuy = await PromoDao.getPromoSectionBuyById(req.params.id);
        res.json(promoSectionBuy);
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: error.message });
    }
}

async function getAllPromoSectionBuys(req, res) {
    try {
        const promoSectionBuys = await PromoDao.getAllPromoSectionBuys();
        res.json(promoSectionBuys);
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: error.message });
    }
}

async function getAllPromoSectionBuysBySection(req, res) {
    try {
        const promoSectionBuys = await PromoDao.getAllPromoSectionBuysBySection(req.params.section);
        res.json(promoSectionBuys);
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: error.message });
    }
}

async function getAllPromoSectionBuysByBusiness(req, res) {
    try {
        const promoSectionBuys = await PromoDao.getAllPromoSectionBuysByBusiness(req.params.business_id);
        res.json(promoSectionBuys);
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: error.message });
    }
}

async function getAllPromoSectionBuysByTier(req, res) {
    try {
        const promoSectionBuys = await PromoDao.getAllPromoSectionBuysByTier(req.params.tier);
        res.json(promoSectionBuys);
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: error.message });
    }
}

async function getAllPromoSectionBuysByStripeSub(req, res) {
    try {
        const promoSectionBuys = await PromoDao.getAllPromoSectionBuysByStripeSub(req.params.stripe_subscription_id);
        res.json(promoSectionBuys);
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: error.message });
    }
}

async function addStripeSubToPromoSectionBuy(req, res) {
    try {
        const promoSectionBuy = await PromoDao.addStripeSubToPromoSectionBuy(req.params.id, req.body.stripe_subscription_id);
        res.json(promoSectionBuy);
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    createPromoSection,
    updatePromoSection,
    reorderPromoSections,
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
    // getAllPromoBannersBySection,
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
    addStripeSubToPromoSectionBuy,
    createCheckoutSessionForPromoBuy
}
