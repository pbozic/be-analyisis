import type { Request, Response } from 'express';

import PromoDao from '../dao/Promo.js';
import BusinessUserDao from '../dao/BusinessUsers.js';
import BusinessDao from '../dao/Business.js';
import stripe from '../lib/stripe.js';
import S3Helper from '../lib/s3.js';
import prisma from '../prisma/prisma.js';
import type {
	CreatePromoSectionRequest,
	UpdatePromoSectionRequest,
	ReorderPromoSectionsRequest,
	PurchasableQuery,
	CreatePaymentIntentForPromoBuyRequest,
	CreatePromoSectionBuyRequest,
	UpdatePromoSectionBuyRequest,
	PromoSectionData,
} from '../schemas/dto/Promo/promo-section.dto';
import type { CreatePromoAdRequest, PromoAdData, UpdatePromoAdRequest } from '../schemas/dto/Promo/promo-ad.dto';
import type {
	CreatePromoBannerRequest,
	PromoBannerData,
	UpdatePromoBannerRequest,
} from '../schemas/dto/Promo/promo-banner.dto';
import { ValidatedRequest } from '../types/validatedRequest.js';
const discountRules: Record<string, number> = {
	2: 0, // 0% discount (Full price for 1-2 units)
	4: 5, // 5% discount for 3-4 units
	6: 10, // 10% discount for 5-6 units
	8: 15, // 15% discount for 7+ units (inf)
};
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getDiscountedPricePerQuantity(basePrice: number, quantity: number): number {
	let discount: number = 0;
	for (let rule of Object.keys(discountRules)) {
		if (quantity >= parseInt(rule)) {
			discount = discountRules[rule] as number;
		}
	}
	return basePrice - (basePrice * discount) / 100;
}
/**
 *
 * POST /promo/sections
 * @tag PromoSection
 * @summary Create a new promo section
 * @description Creates a new promo section and translations. If canPurchase is true, tier prices are expected.
 * @operationId createPromoSection
 * @bodyDescription The promo section details to create with optional tier prices and translations
 * @bodyContent {} application/json
 * @bodyRequired
 * @response 200 - Promo section created successfully
 * @responseContent {PromoSectionDetail} 200.application/json
 * @response 500 - Error creating new promo section
 * @prisma_model promo_sections
 * @prisma_model translatable
 * @prisma_model translations
 *
 * ./prisma/schema.prisma
 */
async function createPromoSection(req: ValidatedRequest<CreatePromoSectionRequest>, res: Response): Promise<void> {
	try {
		//TODO: create stripe product and pricing
		console.info(JSON.stringify(req.body, null, 2));
		const { sectionData, translations } = req.body;
		let promoSection = await PromoDao.createPromoSection(sectionData, translations);
		res.json(promoSection);
	} catch (error: unknown) {
		console.error(error);
		res.status(500).json({ error: (error as Error).message });
	}
}
/**
 *
 * PATCH /promo/sections/:id
 * @tag PromoSection
 * @summary Update a promo section
 * @description Updates fields and translations of a promo section by ID.
 * @operationId updatePromoSection
 * @pathParam {string} id - Promo section ID
 * @bodyDescription Fields to update and optional translations
 * @bodyContent {UpdatePromoSectionRequest} application/json
 * @bodyRequired
 * @response 200 - Promo section updated
 * @responseContent {PromoSectionDetail} 200.application/json
 * @response 500 - Error updating promo section
 * @prisma_model promo_sections
 * @prisma_model translations
 *
 * ./prisma/schema.prisma
 */
async function updatePromoSection(
	req: ValidatedRequest<UpdatePromoSectionRequest, { id: string }>,
	res: Response
): Promise<void> {
	try {
		const { sectionData, translations } = req.body;
		const promoSection = await PromoDao.updatePromoSection(
			req.params.id,
			sectionData as PromoSectionData,
			translations
		);
		if (!promoSection.canPurchase) {
			res.status(200).json(promoSection);
			return;
		}
		res.status(200).json(promoSection);
	} catch (error: unknown) {
		console.error(error);
		res.status(500).json({ error: (error as Error).message });
	}
}
/**
 *
 * PATCH /promo/sections/reorder
 * @tag PromoSection
 * @summary Reorder promo sections
 * @description Sets the display order of promo sections by their IDs.
 * @operationId reorderPromoSections
 * @bodyDescription Ordered array of promo_sections_id
 * @bodyContent {ReorderPromoSectionsRequest} application/json
 * @bodyRequired
 * @response 200 - Reordered successfully
 * @responseContent {PromoSectionBase[]} 200.application/json
 * @response 500 - Error reordering promo sections
 * @prisma_model promo_sections
 *
 * ./prisma/schema.prisma
 */
async function reorderPromoSections(req: ValidatedRequest<ReorderPromoSectionsRequest>, res: Response): Promise<void> {
	try {
		const { promo_sections_ids } = req.body;
		const promoSections = await PromoDao.reorderPromoSections(promo_sections_ids);
		res.status(200).json(promoSections);
	} catch (error: unknown) {
		console.error(error);
		res.status(500).json({ error: (error as Error).message });
	}
}
/**
 *
 * DELETE /promo/sections/:id
 * @tag PromoSection
 * @summary Delete a promo section
 * @description Deletes a promo section by its ID.
 * @operationId deletePromoSection
 * @pathParam {string} id - The ID of the promo section to delete
 * @response 200 - Promo section deleted successfully
 * @responseContent {object} 200.application/json
 * @response 500 - Error deleting promo section
 * @prisma_model promo_sections
 *
 * ./prisma/schema.prisma
 */
async function deletePromoSection(req: ValidatedRequest<never, { id: string }>, res: Response): Promise<void> {
	try {
		const promoSection = await PromoDao.deletePromoSection(req.params.id);
		res.json(promoSection);
	} catch (error: unknown) {
		console.error(error);
		res.status(500).json({ error: (error as Error).message });
	}
}
/**
 *
 * GET /promo/sections/:id
 * @tag PromoSection
 * @summary Get promo section by ID
 * @description Returns a promo section with translations and buys.
 * @operationId getPromoSectionById
 * @pathParam {string} id - Promo section ID
 * @response 200 - Found promo section
 * @responseContent {PromoSectionDetail} 200.application/json
 * @response 500 - Error fetching promo section
 * @prisma_model promo_sections
 * @prisma_model translations
 * @prisma_model promo_sections_buy
 *
 * ./prisma/schema.prisma
 */
async function getPromoSectionById(req: ValidatedRequest<never, { id: string }>, res: Response): Promise<void> {
	try {
		const promoSection = await PromoDao.getPromoSectionById(req.params.id);
		let result = {
			...promoSection,
			discountRules: discountRules,
		};
		res.json(result);
	} catch (error: unknown) {
		console.error(error);
		res.status(500).json({ error: (error as Error).message });
	}
}
/**
 * GET /promo/sections
 *
 * @tag PromoSection
 * @summary List promo sections
 * @description Returns all active promo sections. Optional query: ?purchasable=true to filter.
 * @operationId getAllPromoSections
 * @response 200 - List of promo sections
 * @responseContent {PromoSectionDetail[]} 200.application/json
 * @response 500 - Error fetching promo sections
 * @prisma_model promo_sections
 * @prisma_model translations
 *
 * ./prisma/schema.prisma
 */
async function getAllPromoSections(
	req: ValidatedRequest<never, never, PurchasableQuery>,
	res: Response
): Promise<void> {
	try {
		const promoSections = await PromoDao.getAllPromoSections({
			active: true,
			...(req.query.purchasable && { canPurchase: true }),
		});
		res.json(promoSections);
	} catch (error: unknown) {
		console.error(error);
		res.status(500).json({ error: (error as Error).message });
	}
}
/**
 *
 * GET /promo/sections/type/:type
 * @tag PromoSection
 * @summary List promo sections by service type
 * @description Returns all promo sections filtered by service type.
 * @operationId getAllPromoSectionsByServiceType
 * @pathParam {string} type - Service type
 * @response 200 - List of promo sections by type
 * @responseContent {PromoSectionDetail[]} 200.application/json
 * @response 500 - Error fetching promo sections by type
 * @prisma_model promo_sections
 * @prisma_model translations
 *
 * ./prisma/schema.prisma
 */
async function getAllPromoSectionsByServiceType(
	req: ValidatedRequest<never, { type: string }>,
	res: Response
): Promise<void> {
	try {
		const promoSections = await PromoDao.getAllPromoSectionsByServiceType(req.params.type);
		res.json(promoSections);
	} catch (error: unknown) {
		console.error(error);
		res.status(500).json({ error: (error as Error).message });
	}
}
/**
 *
 * POST /promo/ads
 * @tag PromoAd
 * @summary Create a promo ad
 * @description Creates a promo ad with optional category and banner relations.
 * @operationId createPromoAd
 * @bodyDescription Promo ad details with optional related IDs
 * @bodyContent {CreatePromoAdRequest} application/json
 * @bodyRequired
 * @response 200 - Promo ad created
 * @responseContent {PromoAdBase} 200.application/json
 * @response 500 - Error creating promo ad
 * @prisma_model promo_ads
 * @prisma_model promo_ads_category
 * @prisma_model promo_banners
 * @prisma_model categories
 *
 * ./prisma/schema.prisma
 */
async function createPromoAd(req: ValidatedRequest<CreatePromoAdRequest>, res: Response): Promise<void> {
	try {
		const { promoAdData, categories_ids, promo_banners_ids } = req.body;
		const promoAd = await PromoDao.createPromoAd(
			promoAdData,
			categories_ids as string[] | null,
			promo_banners_ids as string[] | null
		);
		res.json(promoAd);
	} catch (error: unknown) {
		console.error(error);
		res.status(500).json({ error: (error as Error).message });
	}
}
/**
 *
 * PUT /promo/ads/:id
 * @tag PromoAd
 * @summary Update a promo ad
 * @description Updates a promo ad and resets its relations.
 * @operationId updatePromoAd
 * @pathParam {string} id - Promo ad ID
 * @bodyDescription Fields to update and relation IDs
 * @bodyContent {UpdatePromoAdRequest} application/json
 * @bodyRequired
 * @response 200 - Promo ad updated
 * @responseContent {PromoAdBase} 200.application/json
 * @response 500 - Error updating promo ad
 * @prisma_model promo_ads
 * @prisma_model promo_ads_category
 * @prisma_model promo_banners
 * @prisma_model categories
 *
 * ./prisma/schema.prisma
 */
async function updatePromoAd(
	req: ValidatedRequest<UpdatePromoAdRequest, { id: string }>,
	res: Response
): Promise<void> {
	try {
		const { promoAdData, categories_ids, promo_banners_ids } = req.body;
		const promoAd = await PromoDao.updatePromoAd(
			req.params.id,
			promoAdData as PromoAdData,
			categories_ids as string[] | null,
			promo_banners_ids as string[] | null
		);
		res.json(promoAd);
	} catch (error: unknown) {
		console.error(error);
		res.status(500).json({ error: (error as Error).message });
	}
}
/**
 *
 * DELETE /promo/ads/:id
 * @tag PromoAd
 * @summary Delete a promo ad
 * @description Deletes a promo ad and its relations.
 * @operationId deletePromoAd
 * @pathParam {string} id - Promo ad ID
 * @response 200 - Deleted
 * @responseContent {SuccessMessage} 200.application/json
 * @response 500 - Error deleting promo ad
 * @prisma_model promo_ads
 * @prisma_model promo_ads_category
 *
 * ./prisma/schema.prisma
 */
async function deletePromoAd(req: ValidatedRequest<never, { id: string }>, res: Response): Promise<void> {
	try {
		await PromoDao.deletePromoAd(req.params.id);
		res.json({ message: 'Promo ad deleted successfully' });
	} catch (error: unknown) {
		console.error(error);
		res.status(500).json({ error: (error as Error).message });
	}
}
/**
 *
 * GET /promo/ads/:id
 * @tag PromoAd
 * @summary Get promo ad by ID
 * @description Returns promo ad with categories and banners.
 * @operationId getPromoAdById
 * @pathParam {string} id - Promo ad ID
 * @response 200 - Found promo ad
 * @responseContent {object} 200.application/json
 * @response 500 - Error fetching promo ad
 * @prisma_model promo_ads
 * @prisma_model promo_ads_category
 * @prisma_model promo_banners
 *
 * ./prisma/schema.prisma
 */
async function getPromoAdById(req: ValidatedRequest<never, { id: string }>, res: Response): Promise<void> {
	try {
		const promoAd = await PromoDao.getPromoAdById(req.params.id);
		res.json(promoAd);
	} catch (error: unknown) {
		console.error(error);
		res.status(500).json({ error: (error as Error).message });
	}
}
/**
 *
 * GET /promo/ads
 * @tag PromoAd
 * @summary List promo ads
 * @description Returns all promo ads with categories and banners.
 * @operationId getAllPromoAds
 * @response 200 - List of promo ads
 * @responseContent {PromoAdDetail[]} 200.application/json
 * @response 500 - Error fetching promo ads
 * @prisma_model promo_ads
 * @prisma_model promo_banners
 * @prisma_model categories
 *
 * ./prisma/schema.prisma
 */
async function getAllPromoAds(req: Request, res: Response): Promise<void> {
	try {
		const promoAds = await PromoDao.getAllPromoAds();
		res.json(promoAds);
	} catch (error: unknown) {
		console.error(error);
		res.status(500).json({ error: (error as Error).message });
	}
}
/**
 * GET /promo/ads/type/:type
 *
 * @tag PromoAd
 * @summary List promo ads by service type
 * @description Returns all promo ads filtered by service type.
 * @operationId getPromoAdsByServiceType
 * @pathParam {string} type - Service type
 * @response 200 - List of promo ads by type
 * @responseContent {PromoAdDetail[]} 200.application/json
 * @response 500 - Error fetching promo ads by type
 * @prisma_model promo_ads
 *
 * ./prisma/schema.prisma
 */
async function getPromoAdsByServiceType(req: ValidatedRequest<never, { type: string }>, res: Response): Promise<void> {
	try {
		//TODO: add logPromoAnalytics when connected with businesses
		const promoAds = await PromoDao.getAllPromoAdsByServiceType(req.params.type);
		res.json(promoAds);
	} catch (error: unknown) {
		console.error(error);
		res.status(500).json({ error: (error as Error).message });
	}
}
/**
 *
 * GET /promo/ads/category/:category
 * @tag PromoAd
 * @summary List promo ads by category
 * @description Returns all promo ads that have the given category.
 * @operationId getPromoAdsByCategory
 * @pathParam {string} category - Category ID
 * @response 200 - List of promo ads by category
 * @responseContent {PromoAdDetail[]} 200.application/json
 * @response 500 - Error fetching promo ads by category
 * @prisma_model promo_ads
 * @prisma_model categories
 *
 * ./prisma/schema.prisma
 */
async function getPromoAdsByCategory(req: ValidatedRequest<never, { category: string }>, res: Response): Promise<void> {
	try {
		const promoAds = await PromoDao.getAllPromoAdsByCategory(req.params.category);
		res.json(promoAds);
	} catch (error: unknown) {
		console.error(error);
		res.status(500).json({ error: (error as Error).message });
	}
}
/**
 *
 * POST /promo/banners
 * @tag PromoBanner
 * @summary Create a promo banner
 * @description Creates a promo banner with optional file and promo ad relation; uploads image to S3 when base64 provided.
 * @operationId createPromoBanner
 * @bodyDescription Banner fields and optional image file
 * @bodyContent {CreatePromoBannerRequest} application/json
 * @bodyRequired
 * @response 200 - Promo banner created
 * @responseContent {PromoBannerDetail} 200.application/json
 * @response 500 - Error creating promo banner
 * @prisma_model promo_banners
 * @prisma_model files
 *
 * ./prisma/schema.prisma
 */
async function createPromoBanner(req: ValidatedRequest<CreatePromoBannerRequest>, res: Response): Promise<void> {
	try {
		const { promoBannerData, imageFileData } = req.body;
		const promoBanner = await PromoDao.createPromoBanner(promoBannerData, imageFileData);
		if (imageFileData?.base64) {
			const file: any = promoBanner.file;
			const key = S3Helper.getFileKey(file.file_id, file.mime_type);
			await S3Helper.SaveObject(key, imageFileData.base64, file.mime_type, {}, file, file.public);
		}
		res.json(promoBanner);
	} catch (error: unknown) {
		console.error(error);
		res.status(500).json({ error: (error as Error).message });
	}
}
/**
 *
 * PUT /promo/banners/:id
 * @tag PromoBanner
 * @summary Update a promo banner
 * @description Updates a promo banner and optionally creates a new file when imageFileData is provided.
 * @operationId updatePromoBanner
 * @pathParam {string} id - Promo banner ID
 * @bodyDescription Banner fields and optional new image file
 * @bodyContent {UpdatePromoBannerRequest} application/json
 * @bodyRequired false
 * @response 200 - Promo banner updated
 * @responseContent {PromoBannerDetail} 200.application/json
 * @response 500 - Error updating promo banner
 * @prisma_model promo_banners
 * @prisma_model files
 *
 * ./prisma/schema.prisma
 */
async function updatePromoBanner(
	req: ValidatedRequest<UpdatePromoBannerRequest, { id: string }>,
	res: Response
): Promise<void> {
	try {
		const { promoBannerData, imageFileData } = req.body;
		const promoBanner = await PromoDao.updatePromoBanner(
			req.params.id,
			promoBannerData as PromoBannerData,
			imageFileData
		);
		if (imageFileData?.base64) {
			const file: any = promoBanner.file;
			const key = S3Helper.getFileKey(file.file_id, file.mime_type);
			await S3Helper.SaveObject(key, imageFileData.base64, file.mime_type, {}, file, file.public);
		}
		res.json(promoBanner);
	} catch (error: unknown) {
		console.error(error);
		res.status(500).json({ error: (error as Error).message });
	}
}
/**
 *
 * DELETE /promo/banners/:id
 * @tag PromoBanner
 * @summary Delete a promo banner
 * @description Deletes a promo banner by ID.
 * @operationId deletePromoBanner
 * @pathParam {string} id - Promo banner ID
 * @response 200 - Deleted
 * @responseContent {SuccessMessage} 200.application/json
 * @response 500 - Error deleting promo banner
 * @prisma_model promo_banners
 *
 * ./prisma/schema.prisma
 */
async function deletePromoBanner(req: ValidatedRequest<never, { id: string }>, res: Response): Promise<void> {
	try {
		await PromoDao.deletePromoBanner(req.params.id);
		res.json({ message: 'Promo banner deleted successfully' });
	} catch (error: unknown) {
		console.error(error);
		res.status(500).json({ error: (error as Error).message });
	}
}
/**
 *
 * GET /promo/banners/:id
 * @tag PromoBanner
 * @summary Get promo banner by ID
 * @description Returns a promo banner by ID.
 * @operationId getPromoBannerById
 * @pathParam {string} id - Promo banner ID
 * @response 200 - Found promo banner
 * @responseContent {PromoBannerDetail} 200.application/json
 * @response 404 - Promo banner not found
 * @response 500 - Error fetching promo banner
 * @prisma_model promo_banners
 *
 * ./prisma/schema.prisma
 */
async function getPromoBannerById(req: ValidatedRequest<never, { id: string }>, res: Response): Promise<void> {
	try {
		const promoBanner = await PromoDao.getPromoBannerById(req.params.id);
		if (!promoBanner) {
			res.status(404).json({ error: 'Promo banner not found' });
			return;
		}
		res.json(promoBanner);
	} catch (error: unknown) {
		console.error(error);
		res.status(500).json({ error: (error as Error).message });
	}
}
/**
 *
 * GET /promo/banners
 * @tag PromoBanner
 * @summary List promo banners
 * @description Returns all promo banners including files and promo ad categories.
 * @operationId getAllPromoBanners
 * @response 200 - List of promo banners
 * @responseContent {PromoBannerDetail[]} 200.application/json
 * @response 500 - Error fetching promo banners
 * @prisma_model promo_banners
 * @prisma_model files
 * @prisma_model promo_ads
 * @prisma_model categories
 *
 * ./prisma/schema.prisma
 */
async function getAllPromoBanners(req: Request, res: Response): Promise<void> {
	try {
		const promoBanners = await PromoDao.getAllPromoBanners();
		res.json(promoBanners);
	} catch (error: unknown) {
		console.error(error);
		res.status(500).json({ error: (error as Error).message });
	}
}
/**
 *
 * GET /promo/banners/type/:type
 * @tag PromoBanner
 * @summary List promo banners by type
 * @description Returns promo banners filtered by type.
 * @operationId getAllPromoBannersByType
 * @pathParam {string} type - Banner type
 * @response 200 - List of promo banners by type
 * @responseContent {PromoBannerDetail[]} 200.application/json
 * @response 500 - Error fetching promo banners by type
 * @prisma_model promo_banners
 *
 * ./prisma/schema.prisma
 */
async function getAllPromoBannersByType(req: ValidatedRequest<never, { type: string }>, res: Response): Promise<void> {
	try {
		const promoBanners = await PromoDao.getAllPromoBannersByType(req.params.type);
		res.json(promoBanners);
	} catch (error: unknown) {
		console.error(error);
		res.status(500).json({ error: (error as Error).message });
	}
}
/**
 *
 * GET /promo/banners/size/:size
 * @tag PromoBanner
 * @summary List promo banners by size
 * @description Returns promo banners filtered by size.
 * @operationId getAllPromoBannersBySize
 * @pathParam {string} size - Banner size
 * @response 200 - List of promo banners by size
 * @responseContent {PromoBannerDetail[]} 200.application/json
 * @response 500 - Error fetching promo banners by size
 * @prisma_model promo_banners
 *
 * ./prisma/schema.prisma
 */
async function getAllPromoBannersBySize(req: ValidatedRequest<never, { size: string }>, res: Response): Promise<void> {
	try {
		const promoBanners = await PromoDao.getAllPromoBannersBySize(req.params.size);
		res.json(promoBanners);
	} catch (error: unknown) {
		console.error(error);
		res.status(500).json({ error: (error as Error).message });
	}
}
/**
 *
 * GET /promo/banners/ad/:ad
 * @tag PromoBanner
 * @summary List promo banners by ad
 * @description Returns promo banners filtered by promo ad ID.
 * @operationId getAllPromoBannersByAd
 * @pathParam {string} ad - Promo ad ID
 * @response 200 - List of promo banners by ad
 * @responseContent {PromoBannerDetail[]} 200.application/json
 * @response 500 - Error fetching promo banners by ad
 * @prisma_model promo_banners
 * @prisma_model promo_ads
 *
 * ./prisma/schema.prisma
 */
async function getAllPromoBannersByAd(req: ValidatedRequest<never, { ad: string }>, res: Response): Promise<void> {
	try {
		const promoBanners = await PromoDao.getAllPromoBannersByAd(req.params.ad);
		res.json(promoBanners);
	} catch (error: unknown) {
		console.error(error);
		res.status(500).json({ error: (error as Error).message });
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
// async function getPromoBannersByServiceType(req: Request, res: Response): Promise<void> {
// 	try {
// 		const promoBanners = await PromoDao.getPromoBannersByServiceType(req.params.serviceType);
// 		res.json(promoBanners);
// 	} catch (error) {
// 		console.error(error);
// 		res.status(500).json({ error: error.message });
// 	}
//}

/**
 * POST /promo/section_buy/request
 * @tag PromoSectionBuy
 * @summary Create payment intent for promo section buys
 * @description Creates a Stripe PaymentIntent for purchasing multiple promo sections and creates pending promo_sections_buy records.
 * @operationId createPaymentIntentForPromoBuy
 * @bodyDescription Promo sections to purchase with duration, activeTier, and activePrice per day
 * @bodyContent {CreatePaymentIntentForPromoBuyRequest} application/json
 * @bodyRequired
 * @response 200 - Created payment intent for promo section buys
 * @responseContent {PromoBuyClientSecretResponse} 200.application/json
 * @response 400 - Validation error
 * @response 401 - Unauthorized
 * @response 404 - Business user not found
 * @response 500 - Error creating promo section buy payment intent
 * @prisma_model promo_sections_buy
 */
export async function createPaymentIntentForPromoBuy(
	req: ValidatedRequest<never, CreatePaymentIntentForPromoBuyRequest>,
	res: Response
): Promise<void> {
	try {
		const { promoSections } = req.body as CreatePaymentIntentForPromoBuyRequest;
		const userId = req.user?.user_id;
		if (!userId) {
			res.status(401).json({ error: 'Unauthorized' });
			return;
		}
		if (!Array.isArray(promoSections) || promoSections.length === 0) {
			res.status(400).json({ error: 'promoSections must be a non-empty array' });
			return;
		}

		const businessUser = await prisma.business_users.findUnique({ where: { user_id: userId } });
		if (!businessUser) {
			res.status(404).json({ error: 'Business user not found' });
			return;
		}

		const business = await prisma.business.findUnique({ where: { business_id: businessUser.business_id } });
		if (!business?.stripe_customer_id) {
			res.status(400).json({ error: 'No Stripe customer on file' });
			return;
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

		await Promise.all(
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

		res.status(200).json({ clientSecret: paymentIntent.client_secret });
	} catch (error: unknown) {
		console.error('createPaymentIntentForPromoBuy:', error);
		res.status(500).json({ error: (error as Error).message });
	}
}

/**
 * POST /promo/section_buy
 * @tag PromoSectionBuy
 * @summary Create promo section buys and payment intent
 * @description Creates pending promo section buy records (unpaid) and a Stripe PaymentIntent for all of them. On successful webhook confirmation the buys become active.
 * @operationId createPromoSectionBuy
 * @bodyDescription Promo sections to purchase with tier, duration (days) and activePrice per day
 * @bodyContent {CreatePromoSectionBuyRequest} application/json
 * @bodyRequired
 * @response 200 - Created payment intent for promo section buys
 * @responseContent {CreatePromoSectionBuyResponse} 200.application/json
 * @response 400 - Validation error
 * @response 401 - Unauthorized
 * @response 404 - Business user or promo section not found
 * @response 500 - Error creating promo section buy payment intent
 * @prisma_model promo_sections_buy
 */
async function createPromoSectionBuy(
	req: ValidatedRequest<CreatePromoSectionBuyRequest>,
	res: Response
): Promise<void> {
	try {
		const { promoSections } = req.body;
		const userId = req.user?.user_id;
		if (!userId) {
			res.status(401).json({ error: 'Unauthorized' });
			return;
		}
		if (!Array.isArray(promoSections) || promoSections.length === 0) {
			res.status(400).json({ error: 'promoSections must be a non-empty array' });
			return;
		}
		const businessUser = await BusinessUserDao.getBusinessUserByUserId(userId);
		if (!businessUser) {
			res.status(404).json({ error: 'Business user not found' });
			return;
		}
		const business = await BusinessDao.getBusinessById(businessUser.business_id);
		if (!business?.stripe_customer_id) {
			res.status(400).json({ error: 'No Stripe customer on file' });
			return;
		}
		let totalAmountCents = 0;
		const createdBuys = [];
		for (const section of promoSections) {
			const { promo_sections_id, tier, duration, activePrice } = section;
			if (!promo_sections_id || typeof tier !== 'number' || !duration || !activePrice) {
				res.status(400).json({
					error: 'Each promo section requires promo_sections_id, tier, duration, activePrice',
				});
				return;
			}
			const promoSection = await prisma.promo_sections.findUnique({ where: { promo_sections_id } });
			if (!promoSection) {
				res.status(404).json({ error: `Promo section not found: ${promo_sections_id}` });
				return;
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
		res.status(200).json({ clientSecret: paymentIntent.client_secret, promo_section_buy_ids: ids });
	} catch (error: unknown) {
		console.error('createPromoSectionBuy:', error);
		res.status(500).json({ error: (error as Error).message });
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
 * @bodyContent {UpdatePromoSectionBuyRequest} application/json
 * @bodyRequired
 * @response 200 - Promo section buy updated
 * @responseContent {PromoSectionBuyDetail} 200.application/json
 * @response 500 - Error updating promo section buy
 * @prisma_model promo_sections_buy
 *
 * ./prisma/schema.prisma
 */
async function updatePromoSectionBuy(
	req: ValidatedRequest<UpdatePromoSectionBuyRequest, { id: string }>,
	res: Response
) {
	try {
		const promoSectionBuy = await PromoDao.updatePromoSectionBuy(req.params.id, req.body);
		res.json(promoSectionBuy);
	} catch (error: unknown) {
		console.error(error);
		res.status(500).json({ error: (error as Error).message });
	}
}

// async function deletePromoSectionBuy(req: Request, res: Response): Promise<void> {
// 	try {
// 		const promoSectionBuy = await PromoDao.deletePromoSectionBuy(req.params.id);
// 		res.json(promoSectionBuy);
// 	} catch (error) {
// 		console.error(error);
// 		res.status(500).json({ error: error.message });
// 	}
// }

/**
 * GET /promo/section_buy/:id
 * @tag PromoSectionBuy
 * @summary Get promo section buy by ID
 * @description Returns a promo section buy by its ID.
 * @operationId getPromoSectionBuyById
 * @pathParam {string} id - Promo section buy ID
 * @response 200 - Found promo section buy
 * @responseContent {PromoSectionBuyDetail} 200.application/json
 * @response 404 - Promo section buy not found
 * @response 500 - Error fetching promo section buy
 * @prisma_model promo_sections_buy
 *
 * ./prisma/schema.prisma
 */
async function getPromoSectionBuyById(req: ValidatedRequest<never, { id: string }>, res: Response): Promise<void> {
	try {
		const promoSectionBuy = await PromoDao.getPromoSectionBuyById(req.params.id);
		if (!promoSectionBuy) {
			res.status(404).json({ error: 'Promo section buy not found' });
			return;
		}
		res.json(promoSectionBuy);
	} catch (error: unknown) {
		console.error(error);
		res.status(500).json({ error: (error as Error).message });
	}
}
/**
 * GET /promo/section_buy
 * @tag PromoSectionBuy
 * @summary List all promo section buys
 * @description Returns all promo section buys.
 * @operationId getAllPromoSectionBuys
 * @response 200 - List of promo section buys
 * @responseContent {PromoSectionBuyDetail[]} 200.application/json
 * @response 500 - Error fetching promo section buys
 * @prisma_model promo_sections_buy
 *
 * ./prisma/schema.prisma
 */
async function getAllPromoSectionBuys(req: Request, res: Response): Promise<void> {
	try {
		const promoSectionBuys = await PromoDao.getAllPromoSectionBuys();
		res.json(promoSectionBuys);
	} catch (error: unknown) {
		console.error(error);
		res.status(500).json({ error: (error as Error).message });
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
 * @responseContent {PromoSectionBuyDetail[]} 200.application/json
 * @response 500 - Error fetching promo section buys by section
 * @prisma_model promo_sections_buy
 *
 * ./prisma/schema.prisma
 */
async function getAllPromoSectionBuysBySection(
	req: ValidatedRequest<never, { section: string }>,
	res: Response
): Promise<void> {
	try {
		const promoSectionBuys = await PromoDao.getAllPromoSectionBuysBySection(req.params.section);
		res.json(promoSectionBuys);
	} catch (error: unknown) {
		console.error(error);
		res.status(500).json({ error: (error as Error).message });
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
 * @responseContent {PromoSectionBuyDetail[]} 200.application/json
 * @response 500 - Error fetching promo section buys by business
 * @prisma_model promo_sections_buy
 *
 * ./prisma/schema.prisma
 */
async function getAllPromoSectionBuysByBusiness(
	req: ValidatedRequest<never, { business_id: string }>,
	res: Response
): Promise<void> {
	try {
		const promoSectionBuys = await PromoDao.getAllPromoSectionBuysByBusiness(req.params.business_id);
		res.json(promoSectionBuys);
	} catch (error: unknown) {
		console.error(error);
		res.status(500).json({ error: (error as Error).message });
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
 * @responseContent {PromoSectionBuyDetail[]} 200.application/json
 * @response 500 - Error fetching promo section buys by tier
 * @prisma_model promo_sections_buy
 *
 * ./prisma/schema.prisma
 */
async function getAllPromoSectionBuysByTier(
	req: ValidatedRequest<never, { tier: string }>,
	res: Response
): Promise<void> {
	try {
		const tierNumber = parseInt(req.params.tier, 10);
		const promoSectionBuys = await PromoDao.getAllPromoSectionBuysByTier(tierNumber);
		res.json(promoSectionBuys);
	} catch (error: unknown) {
		console.error(error);
		res.status(500).json({ error: (error as Error).message });
	}
}

// async function getAllPromoSectionBuysByStripeSub(req: Request, res: Response): Promise<void> {
// 	try {
// 		const promoSectionBuys = await PromoDao.getAllPromoSectionBuysByStripeSub(req.params.stripe_subscription_id);
// 		res.json(promoSectionBuys);
// 	} catch (error) {
// 		console.error(error);
// 		res.status(500).json({ error: error.message });
// 	}
// }
// async function addStripeSubToPromoSectionBuy(req: Request, res: Response): Promise<void> {
// 	try {
// 		const body = req.body as AddStripeSubToPromoSectionBuyRequest;
// 		const promoSectionBuy = await PromoDao.addStripeSubToPromoSectionBuy(
// 			req.params.id,
// 			body.stripe_subscription_id
// 		);
// 		res.json(promoSectionBuy);
// 	} catch (error) {
// 		console.error(error);
// 		res.status(500).json({ error: error.message });
// 	}
// }

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
export { createPromoSectionBuy };
export { updatePromoSectionBuy };
export { getPromoSectionBuyById };
export { getAllPromoSectionBuys };
export { getAllPromoSectionBuysBySection };
export { getAllPromoSectionBuysByBusiness };
export { getAllPromoSectionBuysByTier };
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
	createPromoSectionBuy,
	updatePromoSectionBuy,
	getPromoSectionBuyById,
	getAllPromoSectionBuys,
	getAllPromoSectionBuysBySection,
	getAllPromoSectionBuysByBusiness,
	getAllPromoSectionBuysByTier,
	createPaymentIntentForPromoBuy,
};
