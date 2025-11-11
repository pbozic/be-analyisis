import PromoDao from '../dao/Promo.js';
import BusinessUserDao from '../dao/BusinessUsers.js';
import BusinessDao from '../dao/Business.js';
import stripe from '../lib/stripe.js';
import S3Helper from '../lib/s3.js';
import prisma from '../prisma/prisma.js';
const discountRules = {
	2: 0, // 0% discount (Full price for 1-2 units)
	4: 5, // 5% discount for 3-4 units
	6: 10, // 10% discount for 5-6 units
	8: 15, // 15% discount for 7+ units (inf)
};
function getDiscountedPricePerQuantity(basePrice, quantity) {
	let discount = 0;
	for (let rule in discountRules) {
		if (quantity >= rule) {
			discount = discountRules[rule];
		}
	}
	return basePrice - (basePrice * discount) / 100;
}
/**
 *
 * - POST /promo/sections
 * - @tag PromoSection
 * - @summary Create a new promo section
 * - @description Creates a new promo section and translations. If canPurchase is true, tier prices are expected.
 * - @operationId createPromoSection
 * - @bodyDescription The promo section details to create with optional tier prices and translations
 * - @bodyContent {
 *   "sectionData": {
 *     "name": "Homepage Top Slots",
 *     "tag": "homepage_top",
 *     "description": "Top homepage promo slots",
 *     "service_type": "DELIVERY",
 *     "canPurchase": true,
 *     "t1price": 100,
 *     "t2price": 80,
 *     "t3price": 60
 *   },
 *   "translations": [
 *     { "language": "en", "translation": "Homepage Top Slots" },
 *     { "language": "sl", "translation": "Glavni vrh" }
 *   ]
 * } application/json
 * - @bodyRequired
 * - @response 200 - Promo section created successfully
 * - @responseContent {object} 200.application/json
 * - @responseExample 200.application/json {
 *   "promo_sections_id": "uuid",
 *   "name": "Homepage Top Slots",
 *   "tag": "homepage_top",
 *   "description": "Top homepage promo slots",
 *   "service_type": "DELIVERY",
 *   "canPurchase": true,
 *   "t1price": 10000,
 *   "t2price": 8000,
 *   "t3price": 6000,
 *   "translations": [ { "language": "en", "translation": "Homepage Top Slots" } ]
 * }
 * - @response 500 - Error creating new promo section
 * - @prisma_model promo_sections
 * - @prisma_model translatable
 * - @prisma_model translations
 *
 * ./prisma/schema.prisma
 */
async function createPromoSection(req, res) {
	try {
		//TODO: create stripe product and pricing
		console.info(JSON.stringify(req.body, null, 2));
		const { sectionData, translations } = req.body;
		let promoSection = await PromoDao.createPromoSection(sectionData, translations);
		res.json(promoSection);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: error.message });
	}
}
/**
 *
 * - PATCH /promo/sections/:id
 * - @tag PromoSection
 * - @summary Update a promo section
 * - @description Updates fields and translations of a promo section by ID.
 * - @operationId updatePromoSection
 * - @pathParam {string} id - Promo section ID
 * - @bodyDescription Fields to update and optional translations
 * - @bodyContent {
 *   "sectionData": {
 *     "name": "Homepage Top Slots",
 *     "description": "Updated description",
 *     "service_type": "DELIVERY",
 *     "canPurchase": true,
 *     "t1price": 120,
 *     "t2price": 90,
 *     "t3price": 70
 *   },
 *   "translations": [
 *     { "language": "en", "translation": "Homepage Top Slots" }
 *   ]
 * } application/json
 * - @bodyRequired
 * - @response 200 - Promo section updated
 * - @responseContent {object} 200.application/json
 * - @response 500 - Error updating promo section
 * - @prisma_model promo_sections
 * - @prisma_model translations
 *
 * ./prisma/schema.prisma
 */
async function updatePromoSection(req, res) {
	try {
		const { sectionData, translations } = req.body;
		const promoSection = await PromoDao.updatePromoSection(req.params.id, sectionData, translations);
		if (!promoSection.canPurchase) {
			res.status(200).json(promoSection);
			return;
		}
		res.status(200).json(promoSection);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: error.message });
	}
}
/**
 *
 * - PATCH /promo/sections/reorder
 * - @tag PromoSection
 * - @summary Reorder promo sections
 * - @description Sets the display order of promo sections by their IDs.
 * - @operationId reorderPromoSections
 * - @bodyDescription Ordered array of promo_sections_id
 * - @bodyContent { "promo_sections_ids": ["uuid1", "uuid2", "uuid3"] } application/json
 * - @bodyRequired
 * - @response 200 - Reordered successfully
 * - @responseContent {object} 200.application/json
 * - @response 500 - Error reordering promo sections
 * - @prisma_model promo_sections
 *
 * ./prisma/schema.prisma
 */
async function reorderPromoSections(req, res) {
	try {
		const { promo_sections_ids } = req.body;
		const promoSections = await PromoDao.reorderPromoSections(promo_sections_ids);
		res.status(200).json(promoSections);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: error.message });
	}
}
/**
 *
 * - DELETE /promo/sections/:id
 * - @tag PromoSection
 * - @summary Delete a promo section
 * - @description Deletes a promo section by its ID.
 * - @operationId deletePromoSection
 * - @pathParam {string} id - The ID of the promo section to delete
 * - @response 200 - Promo section deleted successfully
 * - @responseContent {object} 200.application/json
 * - @response 500 - Error deleting promo section
 * - @prisma_model promo_sections
 *
 * ./prisma/schema.prisma
 */
async function deletePromoSection(req, res) {
	try {
		const promoSection = await PromoDao.deletePromoSection(req.params.id);
		res.json(promoSection);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: error.message });
	}
}
/**
 *
 * - GET /promo/sections/:id
 * - @tag PromoSection
 * - @summary Get promo section by ID
 * - @description Returns a promo section with translations and buys.
 * - @operationId getPromoSectionById
 * - @pathParam {string} id - Promo section ID
 * - @response 200 - Found promo section
 * - @responseContent {object} 200.application/json
 * - @response 500 - Error fetching promo section
 * - @prisma_model promo_sections
 * - @prisma_model translations
 * - @prisma_model promo_sections_buy
 *
 * ./prisma/schema.prisma
 */
async function getPromoSectionById(req, res) {
	try {
		const promoSection = await PromoDao.getPromoSectionById(req.params.id);
		let result = {
			...promoSection,
			discountRules: discountRules,
		};
		res.json(result);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: error.message });
	}
}
/**
 *
 * - GET /promo/sections
 * - @tag PromoSection
 * - @summary List promo sections
 * - @description Returns all active promo sections. Optional query: ?purchasable=true to filter.
 * - @operationId getAllPromoSections
 * - @response 200 - List of promo sections
 * - @responseContent {object} 200.application/json
 * - @response 500 - Error fetching promo sections
 * - @prisma_model promo_sections
 * - @prisma_model translations
 *
 * ./prisma/schema.prisma
 */
async function getAllPromoSections(req, res) {
	try {
		const promoSections = await PromoDao.getAllPromoSections({
			active: true,
			...(req.query.purchasable && { canPurchase: true }),
		});
		res.json(promoSections);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: error.message });
	}
}
/**
 *
 * - GET /promo/sections/type/:type
 * - @tag PromoSection
 * - @summary List promo sections by service type
 * - @description Returns all promo sections filtered by service type.
 * - @operationId getAllPromoSectionsByServiceType
 * - @pathParam {string} type - Service type
 * - @response 200 - List of promo sections by type
 * - @responseContent {object} 200.application/json
 * - @response 500 - Error fetching promo sections by type
 * - @prisma_model promo_sections
 * - @prisma_model translations
 *
 * ./prisma/schema.prisma
 */
async function getAllPromoSectionsByServiceType(req, res) {
	try {
		const promoSections = await PromoDao.getAllPromoSectionsByServiceType(req.params.type);
		res.json(promoSections);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: error.message });
	}
}
/**
 *
 * - POST /promo/ads
 * - @tag PromoAd
 * - @summary Create a promo ad
 * - @description Creates a promo ad with optional category and banner relations.
 * - @operationId createPromoAd
 * - @bodyDescription Promo ad details with optional related IDs
 * - @bodyContent {
 *   "promoAdData": {
 *     "title": "Summer discount",
 *     "text": "-20% on selected items",
 *     "service_type": "DELIVERY",
 *     "discount": 20
 *   },
 *   "categories_ids": ["uuid1"],
 *   "promo_banners_ids": ["uuidB"]
 * } application/json
 * - @bodyRequired
 * - @response 200 - Promo ad created
 * - @responseContent {object} 200.application/json
 * - @response 500 - Error creating promo ad
 * - @prisma_model promo_ads
 * - @prisma_model promo_ads_category
 * - @prisma_model promo_banners
 * - @prisma_model categories
 *
 * ./prisma/schema.prisma
 */
async function createPromoAd(req, res) {
	try {
		const { promoAdData, categories_ids, promo_banners_ids } = req.body;
		const promoAd = await PromoDao.createPromoAd(promoAdData, categories_ids, promo_banners_ids);
		res.json(promoAd);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: error.message });
	}
}
/**
 *
 * - PUT /promo/ads/:id
 * - @tag PromoAd
 * - @summary Update a promo ad
 * - @description Updates a promo ad and resets its relations.
 * - @operationId updatePromoAd
 * - @pathParam {string} id - Promo ad ID
 * - @bodyDescription Fields to update and relation IDs
 * - @bodyContent {
 *   "promoAdData": {
 *     "title": "Summer discount updated",
 *     "text": "-25%",
 *     "service_type": "DELIVERY",
 *     "discount": 25
 *   },
 *   "categories_ids": ["uuid1"],
 *   "promo_banners_ids": ["uuidB"]
 * } application/json
 * - @bodyRequired
 * - @response 200 - Promo ad updated
 * - @responseContent {object} 200.application/json
 * - @response 500 - Error updating promo ad
 * - @prisma_model promo_ads
 * - @prisma_model promo_ads_category
 * - @prisma_model promo_banners
 * - @prisma_model categories
 *
 * ./prisma/schema.prisma
 */
async function updatePromoAd(req, res) {
	try {
		const { promoAdData, categories_ids, promo_banners_ids } = req.body;
		const promoAd = await PromoDao.updatePromoAd(req.params.id, promoAdData, categories_ids, promo_banners_ids);
		res.json(promoAd);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: error.message });
	}
}
/**
 *
 * - DELETE /promo/ads/:id
 * - @tag PromoAd
 * - @summary Delete a promo ad
 * - @description Deletes a promo ad and its relations.
 * - @operationId deletePromoAd
 * - @pathParam {string} id - Promo ad ID
 * - @response 200 - Deleted
 * - @responseContent {object} 200.application/json
 * - @response 500 - Error deleting promo ad
 * - @prisma_model promo_ads
 * - @prisma_model promo_ads_category
 *
 * ./prisma/schema.prisma
 */
async function deletePromoAd(req, res) {
	try {
		const promoAd = await PromoDao.deletePromoAd(req.params.id);
		res.json(promoAd);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: error.message });
	}
}
/**
 *
 * - GET /promo/ads/:id
 * - @tag PromoAd
 * - @summary Get promo ad by ID
 * - @description Returns promo ad with categories and banners.
 * - @operationId getPromoAdById
 * - @pathParam {string} id - Promo ad ID
 * - @response 200 - Found promo ad
 * - @responseContent {object} 200.application/json
 * - @response 500 - Error fetching promo ad
 * - @prisma_model promo_ads
 * - @prisma_model promo_ads_category
 * - @prisma_model promo_banners
 *
 * ./prisma/schema.prisma
 */
async function getPromoAdById(req, res) {
	try {
		const promoAd = await PromoDao.getPromoAdById(req.params.id);
		res.json(promoAd);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: error.message });
	}
}
/**
 *
 * - GET /promo/ads
 * - @tag PromoAd
 * - @summary List promo ads
 * - @description Returns all promo ads with categories and banners.
 * - @operationId getAllPromoAds
 * - @response 200 - List of promo ads
 * - @responseContent {object} 200.application/json
 * - @response 500 - Error fetching promo ads
 * - @prisma_model promo_ads
 * - @prisma_model promo_banners
 * - @prisma_model categories
 *
 * ./prisma/schema.prisma
 */
async function getAllPromoAds(req, res) {
	try {
		const promoAds = await PromoDao.getAllPromoAds();
		res.json(promoAds);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: error.message });
	}
}
/**
 *
 * - GET /promo/ads/type/:type
 * - @tag PromoAd
 * - @summary List promo ads by service type
 * - @description Returns all promo ads filtered by service type.
 * - @operationId getPromoAdsByServiceType
 * - @pathParam {string} type - Service type
 * - @response 200 - List of promo ads by type
 * - @responseContent {object} 200.application/json
 * - @response 500 - Error fetching promo ads by type
 * - @prisma_model promo_ads
 *
 * ./prisma/schema.prisma
 */
async function getPromoAdsByServiceType(req, res) {
	try {
		//TODO: add logPromoAnalytics when connected with businesses
		const promoAds = await PromoDao.getAllPromoAdsByServiceType(req.params.type);
		res.json(promoAds);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: error.message });
	}
}
/**
 *
 * - GET /promo/ads/category/:category
 * - @tag PromoAd
 * - @summary List promo ads by category
 * - @description Returns all promo ads that have the given category.
 * - @operationId getPromoAdsByCategory
 * - @pathParam {string} category - Category ID
 * - @response 200 - List of promo ads by category
 * - @responseContent {object} 200.application/json
 * - @response 500 - Error fetching promo ads by category
 * - @prisma_model promo_ads
 * - @prisma_model categories
 *
 * ./prisma/schema.prisma
 */
async function getPromoAdsByCategory(req, res) {
	try {
		const promoAds = await PromoDao.getAllPromoAdsByCategory(req.params.category);
		res.json(promoAds);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: error.message });
	}
}
/**
 *
 * - POST /promo/banners
 * - @tag PromoBanner
 * - @summary Create a promo banner
 * - @description Creates a promo banner with optional file and promo ad relation; uploads image to S3 when base64 provided.
 * - @operationId createPromoBanner
 * - @bodyDescription Banner fields and optional image file
 * - @bodyContent {
 *   "promoBannerData": {
 *     "title": "Header banner",
 *     "text": "New arrivals",
 *     "type": "IMAGE",
 *     "size": "WIDE",
 *     "promo_ads_id": "uuid"
 *   },
 *   "imageFileData": {
 *     "file_type": "IMAGE",
 *     "mime_type": "image/png",
 *     "base64": "..."
 *   }
 * } application/json
 * - @bodyRequired
 * - @response 200 - Promo banner created
 * - @responseContent {object} 200.application/json
 * - @response 500 - Error creating promo banner
 * - @prisma_model promo_banners
 * - @prisma_model files
 *
 * ./prisma/schema.prisma
 */
async function createPromoBanner(req, res) {
	try {
		const { promoBannerData, imageFileData } = req.body;
		const promoBanner = await PromoDao.createPromoBanner(promoBannerData, imageFileData);
		if (imageFileData?.base64) {
			const file = promoBanner.files;
			const key = S3Helper.getFileKey(file.file_id, file.mime_type);
			await S3Helper.SaveObject(key, imageFileData.base64, file.mime_type, {}, file, file.public);
		}
		res.json(promoBanner);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: error.message });
	}
}
/**
 *
 * - PUT /promo/banners/:id
 * - @tag PromoBanner
 * - @summary Update a promo banner
 * - @description Updates a promo banner and optionally creates a new file when imageFileData is provided.
 * - @operationId updatePromoBanner
 * - @pathParam {string} id - Promo banner ID
 * - @bodyDescription Banner fields and optional new image file
 * - @bodyContent {
 *   "promoBannerData": {
 *     "title": "Header banner",
 *     "text": "Updated text",
 *     "type": "IMAGE",
 *     "size": "WIDE",
 *     "promo_ads_id": "uuid"
 *   },
 *   "imageFileData": { "file_type": "IMAGE", "mime_type": "image/png", "base64": "..." }
 * } application/json
 * - @bodyRequired false
 * - @response 200 - Promo banner updated
 * - @responseContent {object} 200.application/json
 * - @response 500 - Error updating promo banner
 * - @prisma_model promo_banners
 * - @prisma_model files
 *
 * ./prisma/schema.prisma
 */
async function updatePromoBanner(req, res) {
	try {
		const { promoBannerData, imageFileData } = req.body;
		const promoBanner = await PromoDao.updatePromoBanner(req.params.id, promoBannerData, imageFileData);
		if (imageFileData?.base64) {
			const file = promoBanner.files;
			const key = S3Helper.getFileKey(file.file_id, file.mime_type);
			await S3Helper.SaveObject(key, imageFileData.base64, file.mime_type, {}, file, file.public);
		}
		res.json(promoBanner);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: error.message });
	}
}
/**
 *
 * - DELETE /promo/banners/:id
 * - @tag PromoBanner
 * - @summary Delete a promo banner
 * - @description Deletes a promo banner by ID.
 * - @operationId deletePromoBanner
 * - @pathParam {string} id - Promo banner ID
 * - @response 200 - Deleted
 * - @responseContent {object} 200.application/json
 * - @response 500 - Error deleting promo banner
 * - @prisma_model promo_banners
 *
 * ./prisma/schema.prisma
 */
async function deletePromoBanner(req, res) {
	try {
		const promoBanner = await PromoDao.deletePromoBanner(req.params.id);
		res.json(promoBanner);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: error.message });
	}
}
/**
 *
 * - GET /promo/banners/:id
 * - @tag PromoBanner
 * - @summary Get promo banner by ID
 * - @description Returns a promo banner by ID.
 * - @operationId getPromoBannerById
 * - @pathParam {string} id - Promo banner ID
 * - @response 200 - Found promo banner
 * - @responseContent {object} 200.application/json
 * - @response 500 - Error fetching promo banner
 * - @prisma_model promo_banners
 *
 * ./prisma/schema.prisma
 */
async function getPromoBannerById(req, res) {
	try {
		const promoBanner = await PromoDao.getPromoBannerById(req.params.id);
		res.json(promoBanner);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: error.message });
	}
}
/**
 *
 * - GET /promo/banners
 * - @tag PromoBanner
 * - @summary List promo banners
 * - @description Returns all promo banners including files and promo ad categories.
 * - @operationId getAllPromoBanners
 * - @response 200 - List of promo banners
 * - @responseContent {object} 200.application/json
 * - @response 500 - Error fetching promo banners
 * - @prisma_model promo_banners
 * - @prisma_model files
 * - @prisma_model promo_ads
 * - @prisma_model categories
 *
 * ./prisma/schema.prisma
 */
async function getAllPromoBanners(req, res) {
	try {
		const promoBanners = await PromoDao.getAllPromoBanners();
		res.json(promoBanners);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: error.message });
	}
}
/**
 *
 * - GET /promo/banners/type/:type
 * - @tag PromoBanner
 * - @summary List promo banners by type
 * - @description Returns promo banners filtered by type.
 * - @operationId getAllPromoBannersByType
 * - @pathParam {string} type - Banner type
 * - @response 200 - List of promo banners by type
 * - @responseContent {object} 200.application/json
 * - @response 500 - Error fetching promo banners by type
 * - @prisma_model promo_banners
 *
 * ./prisma/schema.prisma
 */
async function getAllPromoBannersByType(req, res) {
	try {
		const promoBanners = await PromoDao.getAllPromoBannersByType(req.params.type);
		res.json(promoBanners);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: error.message });
	}
}
/**
 *
 * - GET /promo/banners/size/:size
 * - @tag PromoBanner
 * - @summary List promo banners by size
 * - @description Returns promo banners filtered by size.
 * - @operationId getAllPromoBannersBySize
 * - @pathParam {string} size - Banner size
 * - @response 200 - List of promo banners by size
 * - @responseContent {object} 200.application/json
 * - @response 500 - Error fetching promo banners by size
 * - @prisma_model promo_banners
 *
 * ./prisma/schema.prisma
 */
async function getAllPromoBannersBySize(req, res) {
	try {
		const promoBanners = await PromoDao.getAllPromoBannersBySize(req.params.size);
		res.json(promoBanners);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: error.message });
	}
}
/**
 *
 * - GET /promo/banners/ad/:ad
 * - @tag PromoBanner
 * - @summary List promo banners by ad
 * - @description Returns promo banners filtered by promo ad ID.
 * - @operationId getAllPromoBannersByAd
 * - @pathParam {string} ad - Promo ad ID
 * - @response 200 - List of promo banners by ad
 * - @responseContent {object} 200.application/json
 * - @response 500 - Error fetching promo banners by ad
 * - @prisma_model promo_banners
 * - @prisma_model promo_ads
 *
 * ./prisma/schema.prisma
 */
async function getAllPromoBannersByAd(req, res) {
	try {
		const promoBanners = await PromoDao.getAllPromoBannersByAd(req.params.ad);
		res.json(promoBanners);
	} catch (error) {
		console.error(error);
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
/**
 * GET /promo/banners/serviceType/:serviceType
 * @tag PromoBanner
 * @summary List promo banners by service type
 * @description Returns promo banners filtered by service type.
 * @operationId getPromoBannersByServiceType
 * @pathParam {string} serviceType - Service type
 * @response 200 - List of promo banners by service type
 * @responseContent {object} 200.application/json
 * @response 500 - Error fetching promo banners by service type
 * @prisma_model promo_banners
 *
 * ./prisma/schema.prisma
 */
async function getPromoBannersByServiceType(req, res) {
	try {
		const promoBanners = await PromoDao.getPromoBannersByServiceType(req.params.serviceType);
		res.json(promoBanners);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: error.message });
	}
}
/**
 * POST /promo/section_buy/request
 * @tag PromoSectionBuy
 * @summary Create payment intent for promo section buys
 * @description Creates a Stripe PaymentIntent for purchasing multiple promo sections and creates pending promo_sections_buy records.
 * @operationId createPaymentIntentForPromoBuy
 * @bodyDescription Promo sections to purchase with duration, activeTier, and activePrice per day
 * @bodyContent {object} application/json
 * @bodyRequired
 * @response 200 - Created payment intent for promo section buys
 * @responseContent {object} 200.application/json
 * @response 400 - Validation error
 * @response 500 - Error creating promo section buy payment intent
 * @prisma_model promo_sections_buy
 */
export async function createPaymentIntentForPromoBuy(req, res) {
	try {
		const { promoSections } = req.body;
		const userId = req.user.user_id;

		if (!Array.isArray(promoSections) || promoSections.length === 0) {
			return res.status(400).json({ error: 'promoSections must be a non-empty array' });
		}

		const businessUser = await prisma.business_users.findUnique({ where: { user_id: userId } });
		if (!businessUser) {
			return res.status(404).json({ error: 'Business user not found' });
		}

		const business = await prisma.business.findUnique({ where: { business_id: businessUser.business_id } });
		if (!business?.stripe_customer_id) {
			return res.status(400).json({ error: 'No Stripe customer on file' });
		}

		let totalAmountCents = 0;

		const enrichedPromoSections = await Promise.all(
			promoSections.map(async ({ promo_sections_id, duration, activeTier, activePrice }) => {
				const promoSection = await prisma.promo_sections.findUnique({ where: { promo_sections_id } });
				if (!promoSection) {
					throw new Error(`Promo section not found: ${promo_sections_id}`);
				}

				const amountCents = activePrice * 100 * duration;
				totalAmountCents += amountCents;

				return {
					promo_sections_id,
					duration,
					activeTier,
					activePrice,
					promoSectionName: promoSection.name,
					amountCents,
				};
			})
		);

		const paymentIntent = await stripe.client.paymentIntents.create({
			amount: totalAmountCents,
			currency: 'eur',
			customer: business.stripe_customer_id,
			metadata: {
				user_id: userId,
				business_id: businessUser.business_id,
				type: 'promo_section_bulk',
				promo_sections_count: promoSections.length.toString(),
			},
		});

		const results = await Promise.all(
			enrichedPromoSections.map(async ({ promo_sections_id, activeTier }) => {
				await prisma.promo_sections_buy.create({
					data: {
						promo_sections_id,
						business_id: businessUser.business_id,
						user_id: userId,
						tier: activeTier,
						payment_intent_id: paymentIntent.id,
					},
				});
			})
		);

		return res.status(200).json({ clientSecret: paymentIntent.client_secret });
	} catch (error) {
		console.error('createPaymentIntentForPromoBuy:', error);
		return res.status(500).json({ error: error.message });
	}
}

/**
 * POST /promo/section_buy
 * @tag PromoSectionBuy
 * @summary Create promo section buys and payment intent
 * @description Creates pending promo section buy records (unpaid) and a Stripe PaymentIntent for all of them. On successful webhook confirmation the buys become active.
 * @operationId createPromoSectionBuy
 * @bodyDescription Promo sections to purchase with tier, duration (days) and activePrice per day
 * @bodyContent {object} application/json
 * @bodyRequired
 * @response 200 - Created payment intent for promo section buys
 * @responseContent {object} 200.application/json
 * @response 400 - Validation error
 * @response 500 - Error creating promo section buy payment intent
 * @prisma_model promo_sections_buy
 */
async function createPromoSectionBuy(req, res) {
	try {
		const { promoSections } = req.body;
		const userId = req.user?.user_id;
		if (!Array.isArray(promoSections) || promoSections.length === 0) {
			return res.status(400).json({ error: 'promoSections must be a non-empty array' });
		}
		const businessUser = await BusinessUserDao.getBusinessUserByUserId(userId);
		if (!businessUser) {
			return res.status(404).json({ error: 'Business user not found' });
		}
		const business = await BusinessDao.getBusinessById(businessUser.business_id);
		if (!business?.stripe_customer_id) {
			return res.status(400).json({ error: 'No Stripe customer on file' });
		}
		let totalAmountCents = 0;
		const createdBuys = [];
		for (const section of promoSections) {
			const { promo_sections_id, tier, duration, activePrice } = section;
			if (!promo_sections_id || typeof tier !== 'number' || !duration || !activePrice) {
				return res
					.status(400)
					.json({ error: 'Each promo section requires promo_sections_id, tier, duration, activePrice' });
			}
			const promoSection = await prisma.promo_sections.findUnique({ where: { promo_sections_id } });
			if (!promoSection) {
				return res.status(404).json({ error: `Promo section not found: ${promo_sections_id}` });
			}
			const amountCents = Math.round(activePrice * 100 * (duration / promoSection.promo_duration_days));
			totalAmountCents += amountCents;
			const buy = await prisma.promo_sections_buy.create({
				data: {
					promo_sections_id,
					business_id: business.business_id,
					user_id: userId,
					tier: tier,
					duration: duration,
				},
			});
			createdBuys.push({ id: buy.promo_sections_buy_id, duration, amountCents });
		}
		const ids = createdBuys.map((b) => b.id);
		const paymentIntent = await stripe.client.paymentIntents.create({
			amount: totalAmountCents,
			currency: 'eur',
			customer: business.stripe_customer_id,
			metadata: {
				user_id: userId,
				business_id: business.business_id,
				type: 'promo_section_bulk',
				promo_section_buy_ids: JSON.stringify(ids),
			},
		});
		await prisma.promo_sections_buy.updateMany({
			where: { promo_sections_buy_id: { in: ids } },
			data: { payment_intent_id: paymentIntent.id },
		});
		return res.status(200).json({ clientSecret: paymentIntent.client_secret, promo_section_buy_ids: ids });
	} catch (error) {
		console.error('createPromoSectionBuy:', error);
		res.status(500).json({ error: error.message });
	}
}
/**
 * PUT /promo/section_buy/:id
 * @tag PromoSectionBuy
 * @summary Update a promo section buy
 * @description Updates a promo section buy by ID.
 * @operationId updatePromoSectionBuy
 * @pathParam {string} id - Promo section buy ID
 * @bodyDescription Fields to update
 * @bodyContent {object} application/json
 * @bodyRequired
 * @response 200 - Promo section buy updated
 * @responseContent {object} 200.application/json
 * @response 500 - Error updating promo section buy
 * @prisma_model promo_sections_buy
 *
 * ./prisma/schema.prisma
 */
async function updatePromoSectionBuy(req, res) {
	try {
		const promoSectionBuy = await PromoDao.updatePromoSectionBuy(req.params.id, req.body);
		res.json(promoSectionBuy);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: error.message });
	}
}
/**
 * DELETE /promo/section_buy/:id
 * @tag PromoSectionBuy
 * @summary Delete a promo section buy
 * @description Deletes a promo section buy by ID.
 * @operationId deletePromoSectionBuy
 * @pathParam {string} id - Promo section buy ID
 * @response 200 - Promo section buy deleted successfully
 * @responseContent {object} 200.application/json
 * @response 500 - Error deleting promo section buy
 * @prisma_model promo_sections_buy
 *
 * ./prisma/schema.prisma
 */
async function deletePromoSectionBuy(req, res) {
	try {
		const promoSectionBuy = await PromoDao.deletePromoSectionBuy(req.params.id);
		res.json(promoSectionBuy);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: error.message });
	}
}
/**
 * GET /promo/section_buy/:id
 * @tag PromoSectionBuy
 * @summary Get promo section buy by ID
 * @description Returns a promo section buy by its ID.
 * @operationId getPromoSectionBuyById
 * @pathParam {string} id - Promo section buy ID
 * @response 200 - Found promo section buy
 * @responseContent {object} 200.application/json
 * @response 500 - Error fetching promo section buy
 * @prisma_model promo_sections_buy
 *
 * ./prisma/schema.prisma
 */
async function getPromoSectionBuyById(req, res) {
	try {
		const promoSectionBuy = await PromoDao.getPromoSectionBuyById(req.params.id);
		res.json(promoSectionBuy);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: error.message });
	}
}
/**
 * GET /promo/section_buy
 * @tag PromoSectionBuy
 * @summary List all promo section buys
 * @description Returns all promo section buys.
 * @operationId getAllPromoSectionBuys
 * @response 200 - List of promo section buys
 * @responseContent {object} 200.application/json
 * @response 500 - Error fetching promo section buys
 * @prisma_model promo_sections_buy
 *
 * ./prisma/schema.prisma
 */
async function getAllPromoSectionBuys(req, res) {
	try {
		const promoSectionBuys = await PromoDao.getAllPromoSectionBuys();
		res.json(promoSectionBuys);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: error.message });
	}
}
/**
 * GET /promo/section_buy/section/:section
 * @tag PromoSectionBuy
 * @summary List promo section buys by section
 * @description Returns all promo section buys filtered by section ID.
 * @operationId getAllPromoSectionBuysBySection
 * @pathParam {string} section - Promo section ID
 * @response 200 - List of promo section buys by section
 * @responseContent {object} 200.application/json
 * @response 500 - Error fetching promo section buys by section
 * @prisma_model promo_sections_buy
 *
 * ./prisma/schema.prisma
 */
async function getAllPromoSectionBuysBySection(req, res) {
	try {
		const promoSectionBuys = await PromoDao.getAllPromoSectionBuysBySection(req.params.section);
		res.json(promoSectionBuys);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: error.message });
	}
}
/**
 * GET /promo/section_buy/business/:business_id
 * @tag PromoSectionBuy
 * @summary List promo section buys by business
 * @description Returns all promo section buys filtered by business ID.
 * @operationId getAllPromoSectionBuysByBusiness
 * @pathParam {string} business_id - Business ID
 * @response 200 - List of promo section buys by business
 * @responseContent {object} 200.application/json
 * @response 500 - Error fetching promo section buys by business
 * @prisma_model promo_sections_buy
 *
 * ./prisma/schema.prisma
 */
async function getAllPromoSectionBuysByBusiness(req, res) {
	try {
		const promoSectionBuys = await PromoDao.getAllPromoSectionBuysByBusiness(req.params.business_id);
		res.json(promoSectionBuys);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: error.message });
	}
}
/**
 * GET /promo/section_buy/tier/:tier
 * @tag PromoSectionBuy
 * @summary List promo section buys by tier
 * @description Returns all promo section buys filtered by tier.
 * @operationId getAllPromoSectionBuysByTier
 * @pathParam {string} tier - Tier
 * @response 200 - List of promo section buys by tier
 * @responseContent {object} 200.application/json
 * @response 500 - Error fetching promo section buys by tier
 * @prisma_model promo_sections_buy
 *
 * ./prisma/schema.prisma
 */
async function getAllPromoSectionBuysByTier(req, res) {
	try {
		const promoSectionBuys = await PromoDao.getAllPromoSectionBuysByTier(req.params.tier);
		res.json(promoSectionBuys);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: error.message });
	}
}
/**
 * GET /promo/section_buy/stripeSub/:stripe_subscription_id
 * @tag PromoSectionBuy
 * @summary List promo section buys by Stripe subscription ID
 * @description Returns all promo section buys filtered by Stripe subscription ID.
 * @operationId getAllPromoSectionBuysByStripeSub
 * @pathParam {string} stripe_subscription_id - Stripe subscription ID
 * @response 200 - List of promo section buys by Stripe subscription ID
 * @responseContent {object} 200.application/json
 * @response 500 - Error fetching promo section buys by Stripe subscription ID
 * @prisma_model promo_sections_buy
 *
 * ./prisma/schema.prisma
 */
async function getAllPromoSectionBuysByStripeSub(req, res) {
	try {
		const promoSectionBuys = await PromoDao.getAllPromoSectionBuysByStripeSub(req.params.stripe_subscription_id);
		res.json(promoSectionBuys);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: error.message });
	}
}
/**
 * PUT /promo/section_buy/stripeSub/:id
 * @tag PromoSectionBuy
 * @summary Add Stripe subscription ID to promo section buy
 * @description Adds a Stripe subscription ID to a promo section buy by ID.
 * @operationId addStripeSubToPromoSectionBuy
 * @pathParam {string} id - Promo section buy ID
 * @bodyDescription Stripe subscription ID to add
 * @bodyContent { "stripe_subscription_id": "sub_12345" } application/json
 * @bodyRequired
 * @response 200 - Promo section buy updated with Stripe subscription ID
 * @responseContent {object} 200.application/json
 * @response 500 - Error adding Stripe subscription ID to promo section buy
 * @prisma_model promo_sections_buy
 *
 * ./prisma/schema.prisma
 */
async function addStripeSubToPromoSectionBuy(req, res) {
	try {
		const promoSectionBuy = await PromoDao.addStripeSubToPromoSectionBuy(
			req.params.id,
			req.body.stripe_subscription_id
		);
		res.json(promoSectionBuy);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: error.message });
	}
}

export { createPromoSection };
export { updatePromoSection };
export { reorderPromoSections };
export { deletePromoSection };
export { getPromoSectionById };
export { getAllPromoSections };
export { getAllPromoSectionsByServiceType };
export { createPromoAd };
export { updatePromoAd };
export { deletePromoAd };
export { getPromoAdById };
export { getAllPromoAds };
export { getPromoAdsByServiceType };
export { getPromoAdsByCategory };
export { createPromoBanner };
export { updatePromoBanner };
export { deletePromoBanner };
export { getPromoBannerById };
export { getAllPromoBanners };
export { getAllPromoBannersByType };
export { getAllPromoBannersBySize };
export { getAllPromoBannersByAd };
export { getPromoBannersByServiceType };
export { createPromoSectionBuy };
export { updatePromoSectionBuy };
export { deletePromoSectionBuy };
export { getPromoSectionBuyById };
export { getAllPromoSectionBuys };
export { getAllPromoSectionBuysBySection };
export { getAllPromoSectionBuysByBusiness };
export { getAllPromoSectionBuysByTier };
export { getAllPromoSectionBuysByStripeSub };
export { addStripeSubToPromoSectionBuy };
export default {
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
	createPaymentIntentForPromoBuy,
};
