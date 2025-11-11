import prisma from '../prisma/prisma.js';
import type {
	PromoSectionBase,
	PromoSectionDetail,
	PromoSectionBuyDetail,
	PromoSectionData,
	TranslationItem as PromoTranslationItem,
	PromoSectionBuyBase,
	UpdatePromoSectionBuyRequest,
	TranslationItem,
} from '../schemas/dto/Promo/promo-section.dto.js';
import { toPromoSectionDetail, toPromoSectionBuyDetail } from '../schemas/dto/Promo/promo-section.dto.js';
import type { PromoAdBase, PromoAdDetail, PromoAdData } from '../schemas/dto/Promo/promo-ad.dto.js';
import { toPromoAdDetail } from '../schemas/dto/Promo/promo-ad.dto.js';
import type { PromoBannerDetail, PromoBannerData, ImageFileData } from '../schemas/dto/Promo/promo-banner.dto.js';
import { toPromoBannerDetail } from '../schemas/dto/Promo/promo-banner.dto.js';
/**
 * Create a promo section with translations; handles tier prices when canPurchase=true.
 *
 * @param {PromoSectionData} args
 * @param {PromoTranslationItem[]} translations
 * @returns {Promise<PromoSectionDetail>} Created promo section with translations.
 */
async function createPromoSection(
	args: PromoSectionData,
	translations: PromoTranslationItem[]
): Promise<PromoSectionDetail> {
	// Create a new translatable record
	const translatable = await prisma.translatable.create({ data: {} });
	const sectionData: Record<string, unknown> = {
		name: args.name,
		tag: args.tag,
		description: args.description,
		service_type: args.service_type,
		canPurchase: args.canPurchase,
		translatable: { connect: { translatable_id: translatable.translatable_id } },
	};
	if (args.canPurchase) {
		sectionData.t1price = args.t1price == null ? null : Math.round(Number(args.t1price) * 100);
		sectionData.t2price = args.t2price == null ? null : Math.round(Number(args.t2price) * 100);
		sectionData.t3price = args.t3price == null ? null : Math.round(Number(args.t3price) * 100);
	}
	const new_promo_section = await prisma.promo_sections.create({ data: sectionData });
	// Create translations
	const translats: TranslationItem[] = [];
	for (const translation of translations) {
		const trans = await prisma.translations.create({
			data: {
				translation: translation.translation,
				language: translation.language.toLowerCase(),
				translatable: { connect: { translatable_id: translatable.translatable_id } },
			},
		});
		translats.push({ language: trans.language, translation: trans.translation });
	}
	new_promo_section.translations = translats;
	return toPromoSectionDetail(new_promo_section);
}

/**
 * Update a promo section and replace translations if provided.
 *
 * @param {string} id - promo_sections_id.
 * @param {Partial<PromoSectionData>} args - Fields to update.
 * @param {PromoTranslationItem[]} [translations] - New translations to set.
 * @returns {Promise<PromoSectionDetail>} Updated promo section with translations.
 */
async function updatePromoSection(
	id: string,
	args: Partial<PromoSectionData>,
	translations?: PromoTranslationItem[]
): Promise<PromoSectionDetail> {
	const sectionData: Record<string, unknown> = {
		name: args.name,
		tag: args.tag,
		description: args.description,
		service_type: args.service_type,
		canPurchase: args.canPurchase,
	};
	if (args.canPurchase) {
		sectionData.t1price = args.t1price == null ? null : Number(args.t1price);
		sectionData.t2price = args.t2price == null ? null : Number(args.t2price);
		sectionData.t3price = args.t3price == null ? null : Number(args.t3price);
	}
	const updated_promo_section = await prisma.promo_sections.update({
		where: { promo_sections_id: id },
		data: sectionData,
		include: { translatable: true },
	});
	if (translations && translations.length > 0) {
		await prisma.translations.deleteMany({ where: { translatable_id: updated_promo_section.translatable_id } });
		const translats: Array<{ language: string; translation: string }> = [];
		for (let translation of translations) {
			let trans = await prisma.translations.create({
				data: {
					translation: translation.translation,
					language: translation.language.toLowerCase(),
					translatable: { connect: { translatable_id: updated_promo_section.translatable_id } },
				},
			});
			translats.push({ language: trans.language, translation: trans.translation });
		}
		updated_promo_section.translations = translats;
	}
	return toPromoSectionDetail(updated_promo_section);
}

/**
 * Reorder promo sections by given list of ids; sets order by index.
 *
 * @param {string[]} promo_sections_ids - Ordered list of section ids.
 * @returns {Promise<PromoSectionBase[]>} Updated promo sections.
 */
async function reorderPromoSections(promo_sections_ids: string[]): Promise<PromoSectionBase[]> {
	try {
		const res: PromoSectionBase[] = [];
		await prisma.$transaction(
			promo_sections_ids.map(async (promo_sections_id, index) => {
				const section = await prisma.promo_sections.update({
					where: { promo_sections_id },
					data: { order: index },
				});
				res.push(section);
			})
		);
		return res;
	} catch (error) {
		console.error('Error updating promo sections order:', error);
		throw error;
	}
}

/**
 * Delete a promo section by id.
 *
 * @param {string} id - promo_sections_id.
 * @returns {Promise<object>} Deleted promo section.
 */
async function deletePromoSection(id: string): Promise<object> {
	return await prisma.promo_sections.delete({ where: { promo_sections_id: id } });
}

/**
 * Get a promo section by id with translations and purchases; flattens translations.
 *
 * @param {string} id - promo_sections_id.
 * @returns {Promise<PromoSectionDetail>} Promo section with translations.
 */
async function getPromoSectionById(id: string): Promise<PromoSectionDetail> {
	const promo_section: any = await prisma.promo_sections.findUnique({
		where: { promo_sections_id: id },
		include: {
			promo_section_buy: true,
			translatable: { include: { translations: true } },
		},
	});
	if (!promo_section) {
		throw new Error('Promo Section not found');
	}
	promo_section.translations = promo_section.translatable.translations;
	return toPromoSectionDetail(promo_section);
}

/**
 * Get all promo sections with optional where args and flattened translations.
 *
 * @param {Partial<PromoSectionBase>} args - Where filters.
 * @returns {Promise<PromoSectionDetail[]>} Promo sections.
 */
async function getAllPromoSections(args: Partial<PromoSectionBase>): Promise<PromoSectionDetail[]> {
	const promo_sections = await prisma.promo_sections.findMany({
		where: { ...args },
		include: {
			promo_section_buy: true,
			translatable: { include: { translations: true } },
		},
	});
	return promo_sections.map((r: unknown) => toPromoSectionDetail(r));
}

/**
 * Get promo sections by service_type; includes purchases and translations.
 *
 * @param {string} type - Service type.
 * @returns {Promise<PromoSectionDetail[]>} Promo sections.
 */
async function getAllPromoSectionsByServiceType(type: string): Promise<PromoSectionDetail[]> {
	const rows = await prisma.promo_sections.findMany({
		where: { service_type: type },
		include: {
			promo_section_buy: true,
			translatable: { include: { translations: true } },
		},
	});
	return rows.map((r: unknown) => toPromoSectionDetail(r));
}

/**
 * Create a promo ad and connect categories and banners.
 *
 * @param {PromoAdData} promoAdData - Fields for promo ad (title, text, service_type, discount?).
 * @param {string[]} categories_ids - Category ids to connect.
 * @param {string[]} promo_banners_ids - Banner ids to connect.
 * @returns {Promise<PromoAdBase>} Created promo ad.
 */
async function createPromoAd(
	promoAdData: PromoAdData,
	categories_ids: string[],
	promo_banners_ids: string[]
): Promise<PromoAdBase> {
	return await prisma.promo_ads.create({
		data: {
			title: promoAdData.title,
			text: promoAdData.text,
			tag: promoAdData.title.toLowerCase().trim().replace(/\s+/g, '_'),
			service_type: promoAdData.service_type,
			discount: promoAdData?.discount || 0,
			categories: {
				create: categories_ids
					? categories_ids.map((cat_id) => ({ category: { connect: { categories_id: cat_id } } }))
					: [],
			},
			banner: {
				connect: promo_banners_ids
					? promo_banners_ids.map((banner_id) => ({ promo_banners_id: banner_id }))
					: [],
			},
		},
	});
}

/**
 * Update a promo ad; replaces category and banner relations.
 *
 * @param {string} id - promo_ads_id.
 * @param {PromoAdData} promoAdData - Fields to update.
 * @param {string[]} categories_ids - Category ids to set.
 * @param {string[]} promo_banners_ids - Banner ids to set.
 * @returns {Promise<PromoAdBase>} Updated promo ad.
 */
async function updatePromoAd(
	id: string,
	promoAdData: PromoAdData,
	categories_ids: string[],
	promo_banners_ids: string[]
): Promise<PromoAdBase> {
	return await prisma.promo_ads.update({
		where: { promo_ads_id: id },
		data: {
			title: promoAdData.title,
			text: promoAdData.text,
			tag: promoAdData.title.toLowerCase().trim().replace(/\s+/g, '_'),
			service_type: promoAdData.service_type,
			discount: promoAdData?.discount || 0,
			categories: {
				deleteMany: {},
				create: categories_ids
					? categories_ids.map((cat_id) => ({ category: { connect: { categories_id: cat_id } } }))
					: [],
			},
			banner: {
				set: promo_banners_ids ? promo_banners_ids.map((banner_id) => ({ promo_banners_id: banner_id })) : [],
			},
		},
	});
}

/**
 * Delete a promo ad and its category relations in a transaction.
 *
 * @param {string} id - promo_ads_id.
 * @returns {Promise<[{ count: number }, PromoAdBase]>} Transaction results.
 */
async function deletePromoAd(id: string): Promise<[{ count: number }, PromoAdBase]> {
	return (await prisma.$transaction([
		prisma.promo_ads_category.deleteMany({ where: { promo_ads_id: id } }),
		prisma.promo_ads.delete({ where: { promo_ads_id: id } }),
	])) as [{ count: number }, PromoAdBase];
}

/**
 * Get a promo ad by id including categories and banners.
 *
 * @param {string} id - promo_ads_id.
 * @returns {Promise<PromoAdBase | null>} Promo ad or null.
 */
async function getPromoAdById(id: string): Promise<PromoAdDetail | null> {
	const row = await prisma.promo_ads.findUnique({
		where: { promo_ads_id: id },
		include: { categories: true, banner: { include: { files: true } } },
	});
	return row ? toPromoAdDetail(row) : null;
}

/**
 * Get all promo ads including categories and banner files.
 *
 * @returns {Promise<PromoAdDetail[]>} Promo ads.
 */
async function getAllPromoAds(): Promise<PromoAdDetail[]> {
	const rows = await prisma.promo_ads.findMany({
		include: { categories: true, banner: { include: { files: true } } },
	});
	return rows.map(toPromoAdDetail);
}

/**
 * Get promo ads by service_type including categories and banner files.
 *
 * @param {string} type - Service type.
 * @returns {Promise<PromoAdDetail[]>} Promo ads.
 */
async function getAllPromoAdsByServiceType(type: string): Promise<PromoAdDetail[]> {
	const rows = await prisma.promo_ads.findMany({
		where: { service_type: type },
		include: { categories: true, banner: { include: { files: true } } },
	});
	return rows.map(toPromoAdDetail);
}

/**
 * Get promo ads by category id including categories and banner files.
 *
 * @param {string} category - categories_id filter.
 * @returns {Promise<PromoAdDetail[]>} Promo ads.
 */
async function getAllPromoAdsByCategory(category: string): Promise<PromoAdDetail[]> {
	const rows = await prisma.promo_ads.findMany({
		where: { categories: { some: { categories_id: category } } },
		include: { categories: true, banner: { include: { files: true } } },
	});
	return rows.map(toPromoAdDetail);
}

/**
 * Create a promo banner and optionally create a public file; may connect to promo ad.
 *
 * @param {PromoBannerData} promoBannerData - Fields for banner (title, text, type, size, promo_ads_id?).
 * @param {ImageFileData} [imageFileData] - Optional image file to create.
 * @returns {Promise<PromoBannerDetail>} Created promo banner with files.
 */
async function createPromoBanner(
	promoBannerData: PromoBannerData,
	imageFileData?: ImageFileData
): Promise<PromoBannerDetail> {
	const { file_type, mime_type } = imageFileData || ({} as Record<string, never>);
	const row = await prisma.promo_banners.create({
		data: {
			title: promoBannerData.title,
			text: promoBannerData.text,
			type: promoBannerData.type,
			size: promoBannerData.size || null,
			...(promoBannerData.promo_ads_id
				? { promo_ads: { connect: { promo_ads_id: promoBannerData.promo_ads_id } } }
				: {}),
			...(file_type && mime_type ? { files: { create: { file_type, mime_type, public: true } } } : {}),
		},
		include: { files: true },
	});
	return toPromoBannerDetail(row);
}

/**
 * Update a promo banner; connect/disconnect promo_ad and optionally append a new file.
 *
 * @param {string} id - promo_banners_id.
 * @param {PromoBannerData} promoBannerData - Fields to update.
 * @param {ImageFileData} [imageFileData] - Optional new file.
 * @returns {Promise<PromoBannerDetail>} Updated promo banner with files.
 */
async function updatePromoBanner(
	id: string,
	promoBannerData: PromoBannerData,
	imageFileData?: ImageFileData
): Promise<PromoBannerDetail> {
	try {
		return await prisma.$transaction(async (tx: typeof prisma) => {
			const updateData: any = { ...promoBannerData };
			delete updateData.promo_ads_id;
			if (promoBannerData.promo_ads_id) {
				updateData.promo_ads = { connect: { promo_ads_id: promoBannerData.promo_ads_id } };
			} else {
				updateData.promo_ads = { disconnect: true };
			}
			if (imageFileData) {
				const { file_type, mime_type } = imageFileData;
				updateData.files = { create: { file_type, mime_type, public: true } };
			}
			const row = await tx.promo_banners.update({
				where: { promo_banners_id: id },
				data: updateData,
				include: { files: true },
			});
			return toPromoBannerDetail(row);
		});
	} catch (error: any) {
		console.error('Error updating promo banner:', error);
		throw new Error('Failed to update promo banner: ' + error.message);
	}
}

/**
 * Delete a promo banner by id.
 *
 * @param {string} id - promo_banners_id.
 * @returns {Promise<object>} Deleted banner.
 */
async function deletePromoBanner(id: string): Promise<object> {
	return await prisma.promo_banners.delete({ where: { promo_banners_id: id } });
}

/**
 * Get a promo banner by id.
 *
 * @param {string} id - promo_banners_id.
 * @returns {Promise<PromoBannerBase | null>} Promo banner or null.
 */
async function getPromoBannerById(id: string): Promise<PromoBannerDetail | null> {
	const row = await prisma.promo_banners.findUnique({
		where: { promo_banners_id: id },
		include: { files: true },
	});
	return row ? toPromoBannerDetail(row) : null;
}

/**
 * Get all promo banners including files and associated promo_ad categories.
 *
 * @returns {Promise<PromoBannerDetail[]>} Promo banners.
 */
async function getAllPromoBanners(): Promise<PromoBannerDetail[]> {
	const rows = await prisma.promo_banners.findMany({
		include: { files: true, promo_ads: { include: { categories: true } } },
	});
	return rows.map(toPromoBannerDetail);
}

/**
 * Get promo banners filtered by type including files and promo_ad categories.
 *
 * @param {string} type - Banner type.
 * @returns {Promise<PromoBannerDetail[]>} Promo banners.
 */
async function getAllPromoBannersByType(type: string): Promise<PromoBannerDetail[]> {
	const rows = await prisma.promo_banners.findMany({
		where: { type: type },
		include: { files: true, promo_ads: { include: { categories: true } } },
	});
	return rows.map(toPromoBannerDetail);
}

/**
 * Get promo banners filtered by size including files and promo_ad categories.
 *
 * @param {string} size - Banner size.
 * @returns {Promise<PromoBannerDetail[]>} Promo banners.
 */
async function getAllPromoBannersBySize(size: string): Promise<PromoBannerDetail[]> {
	const rows = await prisma.promo_banners.findMany({
		where: { size: size },
		include: { files: true, promo_ads: { include: { categories: true } } },
	});
	return rows.map(toPromoBannerDetail);
}

/**
 * Get promo banners for a specific promo_ad including files and categories.
 *
 * @param {string} ad - promo_ads_id.
 * @returns {Promise<PromoBannerDetail[]>} Promo banners.
 */
async function getAllPromoBannersByAd(ad: string): Promise<PromoBannerDetail[]> {
	const rows = await prisma.promo_banners.findMany({
		where: { promo_ads_id: ad },
		include: { files: true, promo_ads: { include: { categories: true } } },
	});
	return rows.map(toPromoBannerDetail);
}

/**
 * Create a promo_sections_buy linking business and promo section with optional activation/expires.
 *
 * @param {string} business_id - Business ID.
 * @param {string} promo_sections_id - Promo section ID.
 * @param {string|Date} [active_at] - Active from date.
 * @param {string|Date} [expires_at] - Expires at date.
 * @param {number} tier - Tier number.
 * @returns {Promise<PromoSectionBuyDetail>} Created promo_sections_buy.
 */
async function createPromoSectionBuy(
	business_id: string,
	promo_sections_id: string,
	active_at: string | Date | undefined,
	expires_at: string | Date | undefined,
	tier: number
): Promise<PromoSectionBuyDetail> {
	const data: any = {
		business: { connect: { business_id: business_id } },
		promo_section: { connect: { promo_sections_id: promo_sections_id } },
		tier: tier,
	};
	if (active_at) data.active_at = active_at;
	if (expires_at) data.expires_at = expires_at;
	const row = await prisma.promo_sections_buy.create({ data });
	return toPromoSectionBuyDetail(row);
}

/**
 * Get a promo_sections_buy by id.
 *
 * @param {string} id - promo_sections_buy_id.
 * @returns {Promise<PromoSectionBuyDetail | null>} Row or null.
 */
async function getPromoSectionBuyById(id: string): Promise<PromoSectionBuyDetail | null> {
	const row = await prisma.promo_sections_buy.findUnique({ where: { promo_sections_buy_id: id } });
	return row ? toPromoSectionBuyDetail(row) : null;
}

/**
 * Get all promo_sections_buy rows.
 *
 * @returns {Promise<PromoSectionBuyDetail[]>} Rows.
 */
async function getAllPromoSectionBuys(): Promise<PromoSectionBuyDetail[]> {
	const rows = await prisma.promo_sections_buy.findMany();
	return rows.map(toPromoSectionBuyDetail);
}

/**
 * Get promo_sections_buy by section id.
 *
 * @param {string} section - promo_sections_id.
 * @returns {Promise<PromoSectionBuyDetail[]>} Rows.
 */
async function getAllPromoSectionBuysBySection(section: string): Promise<PromoSectionBuyDetail[]> {
	const rows = await prisma.promo_sections_buy.findMany({ where: { promo_sections_id: section } });
	return rows.map(toPromoSectionBuyDetail);
}

/**
 * Get paid promo_sections_buy for a business with optional extra where filters; includes section translations.
 *
 * @param {string} business - Business ID.
 * @param {Partial<PromoSectionBuyBase>} [whereObj={}] - Additional where clauses.
 * @returns {Promise<PromoSectionBuyDetail[]>} Rows with section translations.
 */
async function getAllPromoSectionBuysByBusiness(
	business: string,
	whereObj: Partial<PromoSectionBuyBase> = {}
): Promise<PromoSectionBuyDetail[]> {
	const rows = await prisma.promo_sections_buy.findMany({
		where: {
			business: { business_id: business },
			paid: true,
			...whereObj,
		},
		include: {
			promo_section: { include: { translatable: { include: { translations: true } } } },
		},
	});
	return rows.map(toPromoSectionBuyDetail);
}

/**
 * Get promo_sections_buy by tier value.
 *
 * @param {number} tier - Tier.
 * @returns {Promise<PromoSectionBuyDetail[]>} Rows.
 */
async function getAllPromoSectionBuysByTier(tier: number): Promise<PromoSectionBuyDetail[]> {
	const rows = await prisma.promo_sections_buy.findMany({ where: { tier } });
	return rows.map(toPromoSectionBuyDetail);
}

/**
 * Update a promo_sections_buy row by id.
 *
 * @param {string} id - promo_sections_buy_id.
 * @param {UpdatePromoSectionBuyRequest} args - Fields to update.
 * @returns {Promise<PromoSectionBuyDetail>} Updated row.
 */
async function updatePromoSectionBuy(id: string, args: UpdatePromoSectionBuyRequest): Promise<PromoSectionBuyDetail> {
	const row = await prisma.promo_sections_buy.update({ where: { promo_sections_buy_id: id }, data: args as any });
	return toPromoSectionBuyDetail(row);
}

/**
 * Get a promo_sections_buy by Stripe payment_intent_id.
 *
 * @param {string} payment_intent_id - Stripe payment intent id.
 * @returns {Promise<PromoSectionBuyDetail | null>} Row or null.
 */
export async function getPromoSectionBuyByPaymentIntentId(
	payment_intent_id: string
): Promise<PromoSectionBuyDetail | null> {
	const row = await prisma.promo_sections_buy.findFirst({ where: { payment_intent_id } });
	return row ? toPromoSectionBuyDetail(row) : null;
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
export { getAllPromoAdsByServiceType };
export { getAllPromoAdsByCategory };
export { createPromoBanner };
export { updatePromoBanner };
export { deletePromoBanner };
export { getPromoBannerById };
export { getAllPromoBanners };
export { getAllPromoBannersByType };
export { getAllPromoBannersBySize };
export { getAllPromoBannersByAd };
export { createPromoSectionBuy };
export { getPromoSectionBuyById };
export { getAllPromoSectionBuys };
export { getAllPromoSectionBuysBySection };
export { getAllPromoSectionBuysByBusiness };
export { getAllPromoSectionBuysByTier };
export { updatePromoSectionBuy };

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
	getAllPromoAdsByServiceType,
	getAllPromoAdsByCategory,
	createPromoBanner,
	updatePromoBanner,
	deletePromoBanner,
	getPromoBannerById,
	getAllPromoBanners,
	getAllPromoBannersByType,
	getAllPromoBannersBySize,
	getAllPromoBannersByAd,
	createPromoSectionBuy,
	getPromoSectionBuyById,
	getAllPromoSectionBuys,
	getAllPromoSectionBuysBySection,
	getAllPromoSectionBuysByBusiness,
	getAllPromoSectionBuysByTier,
	updatePromoSectionBuy,
};
