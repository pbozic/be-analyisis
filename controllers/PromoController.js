
const PromoDao = require('../dao/Promo');
const ProductDao = require('../dao/Product');
const BusinessUsersDao = require('../dao/BusinessUsers');
const BusinessDao = require('../dao/Business');
const stripe = require('../lib/stripe');
const discountRules = {
    2: 0,    // 0% discount (Full price for 1-2 units)
    4: 5,    // 5% discount for 3-4 units
    6: 10,   // 10% discount for 5-6 units
    8: 15    // 15% discount for 7+ units (inf)
};
function generateTiers(basePrice) {
    let tiers = [];
    let prevUpTo = 0;
  
    for (const [maxQuantity, discountPercentage] of Object.entries(discountRules)) {
      const discountedPrice = Math.round(basePrice * (1 - discountPercentage / 100)); // Apply discount
      tiers.push({
        up_to: parseInt(maxQuantity), // Convert to number
        unit_amount: discountedPrice
      });
      prevUpTo = parseInt(maxQuantity);
    }
  
    // Add the final "infinity" tier
    const finalDiscount = Math.round(basePrice * (1 - discountRules[prevUpTo] / 100));
    tiers.push({
      up_to: 'inf',
      unit_amount: finalDiscount
    });
  
    return tiers;
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
 *   "prices": {
 *     "t1Price": 1000, // Base price for tier 1
 *     "t2Price": 2000, // Base price for tier 2
 *     "t3Price": 3000  // Base price for tier 3
 *   }
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
 *   "stripe_product_id": "prod_12345",
 *   "prices": {
 *     "t1Price": {
 *       "stripe_price_id": "price_12345",
 *       "tier": "1"
 *     },
 *     "t2Price": {
 *       "stripe_price_id": "price_67890",
 *       "tier": "2"
 *     },
 *     "t3Price": {
 *       "stripe_price_id": "price_abcde",
 *       "tier": "3"
 *     }
 *   }
 * }
 * @response 500 - Error creating new promo section
 * @prisma_model promo_sections
 */

async function createPromoSection(req, res) {
    try {
        //TODO: create stripe product and pricing
        console.info(JSON.stringify(req.body,null,2))
        const { sectionData,translations } = req.body
        const prices = sectionData.prices

        let promoSection = await PromoDao.createPromoSection(sectionData,translations);
        if (!promoSection.canPurchase) {
            res.json(promoSection);
            return;
        }
        let product = await stripe.client.createProduct({
            name: "promo_section_" + promoSection.promo_sections_id,
            type: 'service',
            metadata: {
                promo_sections_id: promoSection.promo_sections_id
            }
        });
        let localProduct = await ProductDao.createProduct(
            {
                name: "promo_section_" + promoSection.promo_sections_id,
                currency: 'eur',
                description: promoSection.description,
                stripe_product_id: product.id
            }
        )

        let t1Price = await stripe.client.createPrice({
            currency: 'eur',
            product: product.id,
            tiers_mode: 'graduated',
            tiers: generateTiers(prices.t1Price),
            metadata: {
                promo_sections_id: promoSection.promo_sections_id,
                tier: "1"
            }

        });
        let localT1Price = await ProductDao.createPrice(
            {
                currency: 'eur',
                stripe_price_id: t1Price.id,
                stripe_product_id: product.id,
                product: {
                    connect: {
                        local_product_id: localProduct.local_product_id
                    }
                },
                tier: "1"
            }
        )
        let t2Price = await stripe.client.createPrice({
            currency: 'eur',
            product: product.id,
            tiers_mode: 'graduated',
            tiers: generateTiers(prices.t2Price),
            metadata: {
                promo_sections_id: promoSection.promo_sections_id,
                tier: "2"
            }

        })
        let localT2Price = await ProductDao.createPrice(
            {
                currency: 'eur',
                stripe_price_id: t2Price.id,
                stripe_product_id: product.id,
                product: {
                    connect: {
                        local_product_id: localProduct.local_product_id
                    }
                },
                 tier: "2"
            }
        )
        let t3Price = await stripe.client.createPrice({
            currency: 'eur',
            product: product.id,
            tiers_mode: 'graduated',
            tiers: generateTiers(prices.t3Price),
            metadata: {
                promo_sections_id: promoSection.promo_sections_id,
                tier: "3"
            }
        })
        let localT3Price = await ProductDao.createPrice(
            {
                currency: 'eur',
                stripe_price_id: t3Price.id,
                stripe_product_id: product.id,
                product: {
                    connect: {
                        local_product_id: localProduct.local_product_id
                    }
                },
                tier: "3"
            }
        )
        promoSection = await PromoDao.updatePromoSection(promoSection.promo_sections_id, {
            stripe_product_id: product.id
        });

        res.json(promoSection);
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: error.message });
    }
}

async function updatePromoSection(req, res) {
    try {
        const { sectionData,translations } = req.body

        let currentPromoSection = await PromoDao.getPromoSectionById(req.params.id);
        const promoSection = await PromoDao.updatePromoSection(req.params.id, sectionData,translations);
        if (!promoSection.canPurchase) {
            res.json(promoSection);
            return;
        }
        let needPriceUpdate = false;
        if (currentPromoSection.prices.t1Price !== promoSection.prices.t1Price) {
            needPriceUpdate = true;
        }
        if (currentPromoSection.prices.t2Price !== promoSection.prices.t2Price) {
            needPriceUpdate = true;
        }
        if (currentPromoSection.prices.t3Price !== promoSection.prices.t3Price) {
            needPriceUpdate = true;
        }

        if (needPriceUpdate) {
            let product = await stripe.client.retrieveProduct(currentPromoSection.stripe_product_id);
            let prices = await stripe.client.listPrices({ product: product.id });
            let t1Price = prices.data.find(price => price.metadata.tier === '1');
            let t2Price = prices.data.find(price => price.metadata.tier === '2');
            let t3Price = prices.data.find(price => price.metadata.tier === '3');
            let updatedT1Price = await stripe.client.updatePrice(t1Price.id, {
                tiers: generateTiers(promoSection.prices.t1Price)
            });
            let updatedT2Price = await stripe.client.updatePrice(t2Price.id, {
                tiers: generateTiers(promoSection.prices.t2Price)
            });
            let updatedT3Price = await stripe.client.updatePrice(t3Price.id, {
                tiers: generateTiers(promoSection.prices.t3Price)
            });
        }
        res.json(promoSection);
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
 * @responseExample 200.application/json {
 *   "promo_sections_id": 1,
 *   "description": "Description of the promo section",
 *   "canPurchase": true,
 *   "stripe_product_id": "prod_12345",
 *   "prices": {
 *     "t1Price": {
 *       "stripe_price_id": "price_12345",
 *       "tier": "1"
 *     },
 *     "t2Price": {
 *       "stripe_price_id": "price_67890",
 *       "tier": "2"
 *     },
 *     "t3Price": {
 *       "stripe_price_id": "price_abcde",
 *       "tier": "3"
 *     }
 *   }
 * }
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
        let product = await ProductDao.getProductByStripeId(promoSection.stripe_product_id);
        let prices = await ProductDao.getPricesByProductId(product.local_product_id);

        let priceMapObject = {
            t1Price: prices.find(p => p.tier === "1").stripe_price_id || null,
            t2Price: prices.find(p => p.tier === "2").stripe_price_id || null,
            t3Price: prices.find(p => p.tier === "3").stripe_price_id || null
        };
        let priceObject = {
            t1Price: await stripe.client.retrievePrice(priceMapObject.t1Price),
            t2Price: await stripe.client.retrievePrice(priceMapObject.t2Price),
            t3Price: await stripe.client.retrievePrice(priceMapObject.t3Price)
        }

        console.log(priceObject);

        res.json({
            ...promoSection,
            product: product,
            prices: priceObject,
            discountRules: discountRules
        });
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
        const promoAd = await PromoDao.createPromoAd(req.body);
        res.json(promoAd);
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: error.message });
    }
}

async function updatePromoAd(req, res) {
    try {
        const promoAd = await PromoDao.updatePromoAd(req.params.id, req.body);
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
        const promoAds = await PromoDao.getPromoAdsByServiceType(req.params.type);
        res.json(promoAds);
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: error.message });
    }
}

async function getPromoAdsByCategory  (req, res) {
    try {
        const promoAds = await PromoDao.getPromoAdsByCategory(req.params.category);
        res.json(promoAds);
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: error.message });
    }
}

async function createPromoBanner(req, res) {
    try {
        const promoBanner = await PromoDao.createPromoBanner(req.body);
        res.json(promoBanner);
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: error.message });
    }
}

async function updatePromoBanner(req, res) {
    try {
        const promoBanner = await PromoDao.updatePromoBanner(req.params.id, req.body);
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

async function getAllPromoBannersBySection(req, res) {
    try {
        const promoBanners = await PromoDao.getAllPromoBannersBySection(req.params.section);
        res.json(promoBanners);
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: error.message });
    }
}

async function getPromoBannersByServiceType  (req, res) {
    try {
        const promoBanners = await PromoDao.getPromoBannersByServiceType(req.params.type);
        res.json(promoBanners);
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: error.message });
    }
}

async function createCheckoutSession(req, res) {
    try {
        const { promo_sections_id, stripe_price_id, duration } = req.body;
        const userId = req.user.id;
        // Fetch promo section details (optional)
        const promoSection = await prisma.promo_sections.findUnique({
            where: { promo_sections_id: promo_sections_id }
        });
        const businessUser = await BusinessUsersDao.getBusinessUserByUserId(userId);
        const business = await BusinessDao.getBusinessById(businessUser.business_id);
        if (!promoSection) {
            return res.status(404).json({ error: "Promo section not found" });
        }

        // Create Stripe Checkout Session
        const session = await stripe.checkout.sessions.create({
            customer: business.stripe_customer_id,  // Business customer ID
            payment_method_types: ['card'],
            line_items: [
                {
                    price: stripe_price_id, // Stripe price ID
                    quantity: duration // Duration in months (e.g., 1, 2, 3...)
                }
            ],
            mode: 'payment', // One-time payment
            success_url: `https://yourdomain.com/success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `https://yourdomain.com/cancel`,
            metadata: {
                user_id: userId,
                promo_sections_id: promo_sections_id,
                duration: duration,
                promo_section_name: promoSection.name,
                business_id: businessUser.business_id,
                type: "promo_section"
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
