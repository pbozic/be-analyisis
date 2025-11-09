import prisma from '../prisma/prisma.js';
/**
 * Create a promo section with translations; handles tier prices when canPurchase=true.
 *
 * @param {object} args - Section fields (name, tag, description, service_type, canPurchase, t1price, t2price, t3price).
 * @param {object[]} translations - Array of { language, translation }.
 * @returns {Promise<object>} Created promo section with translations.
 */
async function createPromoSection(args, translations) {
	// Create a new translatable record
	let translatable = await prisma.translatable.create({
		data: {},
	});
	const sectionData = {
		name: args.name,
		tag: args.tag,
		description: args.description,
		service_type: args.service_type,
		canPurchase: args.canPurchase,
		translatable: {
			connect: {
				translatable_id: translatable.translatable_id,
			},
		},
	};
	if (args.canPurchase) {
		sectionData.t1price = parseInt(parseFloat(args.t1price) * 100);
		sectionData.t2price = parseInt(parseFloat(args.t2price) * 100);
		sectionData.t3price = parseInt(parseFloat(args.t3price) * 100);
	}
	const new_promo_section = await prisma.promo_sections.create({
		data: sectionData,
	});
	// Create translations
	let translats = [];
	for (let translation of translations) {
		let trans = await prisma.translations.create({
			data: {
				translation: translation.translation,
				language: translation.language.toLowerCase(),
				translatable: {
					connect: {
						translatable_id: translatable.translatable_id,
					},
				},
			},
		});
		translats.push(trans);
	}
	// Attach translations to the response
	new_promo_section.translations = translats;
	return new_promo_section;
}
/**
 * Update a promo section and replace translations if provided.
 *
 * @param {string} id - promo_sections_id.
 * @param {object} args - Fields to update.
 * @param {object[]} [translations] - New translations to set.
 * @returns {Promise<object>} Updated promo section with translations.
 */
async function updatePromoSection(id, args, translations) {
	const sectionData = {
		name: args.name,
		tag: args.tag,
		description: args.description,
		service_type: args.service_type,
		canPurchase: args.canPurchase,
	};
	if (args.canPurchase) {
		sectionData.t1price = parseFloat(args.t1price);
		sectionData.t2price = parseFloat(args.t2price);
		sectionData.t3price = parseFloat(args.t3price);
	}
	const updated_promo_section = await prisma.promo_sections.update({
		where: {
			promo_sections_id: id,
		},
		data: sectionData,
		include: {
			translatable: true,
		},
	});
	if (translations && translations.length > 0) {
		// Delete existing translations
		await prisma.translations.deleteMany({
			where: {
				translatable_id: updated_promo_section.translatable_id,
			},
		});
		// Create new translations
		let translats = [];
		for (let translation of translations) {
			let trans = await prisma.translations.create({
				data: {
					translation: translation.translation,
					language: translation.language.toLowerCase(),
					translatable: {
						connect: {
							translatable_id: updated_promo_section.translatable_id,
						},
					},
				},
			});
			translats.push(trans);
		}
		updated_promo_section.translations = translats;
	}
	return updated_promo_section;
}
/**
 * Reorder promo sections by given list of ids; sets order by index.
 *
 * @param {string[]} promo_sections_ids - Ordered list of section ids.
 * @returns {Promise<object[]>} Updated promo sections.
 */
async function reorderPromoSections(promo_sections_ids) {
	try {
		return await prisma.$transaction(
			promo_sections_ids.map((promo_sections_id, index) =>
				prisma.promo_sections.update({
					where: { promo_sections_id },
					data: { order: index },
				})
			)
		);
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
async function deletePromoSection(id) {
	return await prisma.promo_sections.delete({
		where: {
			promo_sections_id: id,
		},
	});
}
/**
 * Get a promo section by id with translations and purchases; flattens translations.
 *
 * @param {string} id - promo_sections_id.
 * @returns {Promise<object>} Promo section with translations.
 */
async function getPromoSectionById(id) {
	const promo_section = await prisma.promo_sections.findUnique({
		where: {
			promo_sections_id: id,
		},
		include: {
			promo_section_buy: true,
			translatable: {
				include: {
					translations: true,
				},
			},
		},
	});
	if (!promo_section) {
		throw new Error('Promo Section not found');
	}
	promo_section.translations = promo_section.translatable.translations;
	delete promo_section.translatable;
	return promo_section;
}
/**
 * Get all promo sections with optional where args and flattened translations.
 *
 * @param {object} args - Where filters.
 * @returns {Promise<object[]>} Promo sections.
 */
async function getAllPromoSections(args) {
	const promo_sections = await prisma.promo_sections.findMany({
		where: { ...args },
		include: {
			promo_section_buy: true,
			translatable: {
				include: {
					translations: true,
				},
			},
		},
	});
	promo_sections.map((promo_section) => {
		promo_section.translations = promo_section.translatable.translations;
		delete promo_section.translatable;
		return promo_section;
	});
	return promo_sections;
}
/**
 * Get promo sections by service_type; includes purchases and translations.
 *
 * @param {string} type - Service type.
 * @returns {Promise<object[]>} Promo sections.
 */
async function getAllPromoSectionsByServiceType(type) {
	const promo_sections = await prisma.promo_sections.findMany({
		where: {
			service_type: type,
		},
		include: {
			promo_section_buy: true,
			translatable: {
				include: {
					translations: true,
				},
			},
		},
	});
	promo_sections.map((promo_section) => {
		promo_section.translations = promo_section.translatable.translations;
		delete promo_section.translatable;
		return promo_section;
	});
	return promo_sections;
}
/**
 * Create a promo ad and connect categories and banners.
 *
 * @param {object} promoAdData - Fields for promo ad (title, text, service_type, discount?).
 * @param {string[]} categories_ids - Category ids to connect.
 * @param {string[]} promo_banners_ids - Banner ids to connect.
 * @returns {Promise<object>} Created promo ad.
 */
async function createPromoAd(promoAdData, categories_ids, promo_banners_ids) {
	return await prisma.promo_ads.create({
		data: {
			title: promoAdData.title,
			text: promoAdData.text,
			tag: promoAdData.title.toLowerCase().trim().replace(/\s+/g, '_'),
			service_type: promoAdData.service_type,
			discount: promoAdData?.discount || 0,
			categories: {
				create: categories_ids
					? categories_ids.map((cat_id) => ({
							category: {
								connect: { categories_id: cat_id },
							},
						}))
					: [],
			},
			banner: {
				connect: promo_banners_ids
					? promo_banners_ids.map((banner_id) => ({
							promo_banners_id: banner_id,
						}))
					: [],
			},
		},
	});
}
/**
 * Update a promo ad; replaces category and banner relations.
 *
 * @param {string} id - promo_ads_id.
 * @param {object} promoAdData - Fields to update.
 * @param {string[]} categories_ids - Category ids to set.
 * @param {string[]} promo_banners_ids - Banner ids to set.
 * @returns {Promise<object>} Updated promo ad.
 */
async function updatePromoAd(id, promoAdData, categories_ids, promo_banners_ids) {
	return await prisma.promo_ads.update({
		where: {
			promo_ads_id: id,
		},
		data: {
			title: promoAdData.title,
			text: promoAdData.text,
			tag: promoAdData.title.toLowerCase().trim().replace(/\s+/g, '_'),
			service_type: promoAdData.service_type,
			discount: promoAdData?.discount || 0,
			categories: {
				deleteMany: {}, // Clear existing relations
				create: categories_ids
					? categories_ids.map((cat_id) => ({
							category: {
								connect: { categories_id: cat_id },
							},
						}))
					: [],
			},
			banner: {
				set: promo_banners_ids
					? promo_banners_ids.map((banner_id) => ({
							promo_banners_id: banner_id,
						}))
					: [],
			},
		},
	});
}
/**
 * Delete a promo ad and its category relations in a transaction.
 *
 * @param {string} id - promo_ads_id.
 * @returns {Promise<object[]>} Transaction results.
 */
async function deletePromoAd(id) {
	return await prisma.$transaction([
		prisma.promo_ads_category.deleteMany({
			where: {
				promo_ads_id: id,
			},
		}),
		prisma.promo_ads.delete({
			where: {
				promo_ads_id: id,
			},
		}),
	]);
}
/**
 * Get a promo ad by id including categories and banners.
 *
 * @param {string} id - promo_ads_id.
 * @returns {Promise<object|null>} Promo ad or null.
 */
async function getPromoAdById(id) {
	return await prisma.promo_ads.findUnique({
		where: {
			promo_ads_id: id,
		},
		include: {
			categories: true,
			banner: true,
		},
	});
}
/**
 * Get all promo ads including categories and banner files.
 *
 * @returns {Promise<object[]>} Promo ads.
 */
async function getAllPromoAds() {
	return await prisma.promo_ads.findMany({
		include: {
			categories: true,
			banner: {
				include: {
					files: true,
				},
			},
		},
	});
}
/**
 * Get promo ads by service_type including categories and banner files.
 *
 * @param {string} type - Service type.
 * @returns {Promise<object[]>} Promo ads.
 */
async function getAllPromoAdsByServiceType(type) {
	return await prisma.promo_ads.findMany({
		where: {
			service_type: type,
		},
		include: {
			categories: true,
			banner: {
				include: {
					files: true,
				},
			},
		},
	});
}
/**
 * Get promo ads by category id including categories and banner files.
 *
 * @param {string} category - categories_id filter.
 * @returns {Promise<object[]>} Promo ads.
 */
async function getAllPromoAdsByCategory(category) {
	return await prisma.promo_ads.findMany({
		where: {
			categories: {
				some: {
					categories_id: category,
				},
			},
		},
		include: {
			categories: true,
			banner: {
				include: {
					files: true,
				},
			},
		},
	});
}
/**
 * Create a promo banner and optionally create a public file; may connect to promo ad.
 *
 * @param {object} promoBannerData - Fields for banner (title, text, type, size, promo_ads_id?).
 * @param {object} [imageFileData] - Optional file fields (file_type, mime_type).
 * @returns {Promise<object>} Created promo banner with files.
 */
async function createPromoBanner(promoBannerData, imageFileData) {
	const { file_type, mime_type } = imageFileData || {};
	return await prisma.promo_banners.create({
		data: {
			title: promoBannerData.title,
			text: promoBannerData.text,
			type: promoBannerData.type,
			size: promoBannerData.size || null,
			...(promoBannerData.promo_ads_id
				? {
						promo_ads: {
							connect: {
								promo_ads_id: promoBannerData.promo_ads_id,
							},
						},
					}
				: {}),
			...(file_type && mime_type
				? {
						files: {
							create: {
								file_type,
								mime_type,
								public: true,
							},
						},
					}
				: {}),
		},
		include: {
			files: true,
		},
	});
}
/**
 * Update a promo banner; connect/disconnect promo_ad and optionally append a new file.
 *
 * @param {string} id - promo_banners_id.
 * @param {object} promoBannerData - Fields to update.
 * @param {object} [imageFileData] - Optional new file (file_type, mime_type).
 * @returns {Promise<object>} Updated promo banner with files.
 */
async function updatePromoBanner(id, promoBannerData, imageFileData) {
	try {
		return await prisma.$transaction(async (prisma) => {
			const updateData = { ...promoBannerData };
			delete updateData.promo_ads_id;
			if (promoBannerData.promo_ads_id) {
				updateData.promo_ads = {
					connect: {
						promo_ads_id: promoBannerData.promo_ads_id,
					},
				};
			} else {
				updateData.promo_ads = {
					disconnect: true,
				};
			}
			if (imageFileData) {
				const { file_type, mime_type } = imageFileData;
				updateData.files = {
					create: {
						file_type,
						mime_type,
						public: true,
					},
				};
			}
			return await prisma.promo_banners.update({
				where: {
					promo_banners_id: id,
				},
				data: updateData,
				include: {
					files: true,
				},
			});
		});
	} catch (error) {
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
async function deletePromoBanner(id) {
	return await prisma.promo_banners.delete({
		where: {
			promo_banners_id: id,
		},
	});
}
/**
 * Get a promo banner by id.
 *
 * @param {string} id - promo_banners_id.
 * @returns {Promise<object|null>} Promo banner or null.
 */
async function getPromoBannerById(id) {
	return await prisma.promo_banners.findUnique({
		where: {
			promo_banners_id: id,
		},
	});
}
/**
 * Get all promo banners including files and associated promo_ad categories.
 *
 * @returns {Promise<object[]>} Promo banners.
 */
async function getAllPromoBanners() {
	return await prisma.promo_banners.findMany({
		include: {
			files: true,
			promo_ads: {
				include: {
					categories: true,
				},
			},
		},
	});
}
/**
 * Get promo banners filtered by type including files and promo_ad categories.
 *
 * @param {string} type - Banner type.
 * @returns {Promise<object[]>} Promo banners.
 */
async function getAllPromoBannersByType(type) {
	return await prisma.promo_banners.findMany({
		where: {
			type: type,
		},
		include: {
			files: true,
			promo_ads: {
				include: {
					categories: true,
				},
			},
		},
	});
}
/**
 * Get promo banners filtered by size including files and promo_ad categories.
 *
 * @param {string} size - Banner size.
 * @returns {Promise<object[]>} Promo banners.
 */
async function getAllPromoBannersBySize(size) {
	return await prisma.promo_banners.findMany({
		where: {
			size: size,
		},
		include: {
			files: true,
			promo_ads: {
				include: {
					categories: true,
				},
			},
		},
	});
}
/**
 * Get promo banners for a specific promo_ad including files and categories.
 *
 * @param {string} ad - promo_ads_id.
 * @returns {Promise<object[]>} Promo banners.
 */
async function getAllPromoBannersByAd(ad) {
	return await prisma.promo_banners.findMany({
		where: {
			promo_ads_id: ad,
		},
		include: {
			files: true,
			promo_ads: {
				include: {
					categories: true,
				},
			},
		},
	});
}
// async function getAllPromoBannersBySection(section) {
//     return await prisma.promo_banners.findMany({
//         where: {
//             promo_sections_id: section
//         }
//     });
// }
/**
 * Create a promo_sections_buy linking business and promo section with optional activation/expires.
 *
 * @param {string} business_id - Business ID.
 * @param {string} promo_sections_id - Promo section ID.
 * @param {string|Date} [active_at] - Active from date.
 * @param {string|Date} [expires_at] - Expires at date.
 * @param {number} tier - Tier number.
 * @returns {Promise<object>} Created promo_sections_buy.
 */
async function createPromoSectionBuy(business_id, promo_sections_id, active_at, expires_at, tier) {
	const data = {
		business: {
			connect: {
				business_id: business_id,
			},
		},
		promo_section: {
			connect: {
				promo_sections_id: promo_sections_id,
			},
		},
		tier: tier,
	};

	if (active_at) {
		/* stripe */
		data.active_at = active_at;
	}
	if (expires_at) {
		/* stripe */
		data.expires_at = expires_at;
	}
	return await prisma.promo_sections_buy.create({ data });
}

/**
 * Get a promo_sections_buy by id.
 *
 * @param {string} id - promo_sections_buy_id.
 * @returns {Promise<object|null>} Row or null.
 */
async function getPromoSectionBuyById(id) {
	return await prisma.promo_sections_buy.findUnique({
		where: {
			promo_sections_buy_id: id,
		},
	});
}
/**
 * Get all promo_sections_buy rows.
 *
 * @returns {Promise<object[]>} Rows.
 */
async function getAllPromoSectionBuys() {
	return await prisma.promo_sections_buy.findMany();
}
/**
 * Get promo_sections_buy by section id.
 *
 * @param {string} section - promo_sections_id.
 * @returns {Promise<object[]>} Rows.
 */
async function getAllPromoSectionBuysBySection(section) {
	return await prisma.promo_sections_buy.findMany({
		where: {
			promo_sections_id: section,
		},
	});
}
/**
 * Get paid promo_sections_buy for a business with optional extra where filters; includes section translations.
 *
 * @param {string} business - Business ID.
 * @param {object} [whereObj={}] - Additional where clauses.
 * @returns {Promise<object[]>} Rows with section translations.
 */
async function getAllPromoSectionBuysByBusiness(business, whereObj = {}) {
	return await prisma.promo_sections_buy.findMany({
		where: {
			business: {
				business_id: business,
			},
			paid: true,
			...whereObj,
		},
		include: {
			promo_section: {
				include: {
					translatable: {
						include: {
							translations: true,
						},
					},
				},
			},
		},
	});
}
/**
 * Get promo_sections_buy by tier value.
 *
 * @param {number} tier - Tier.
 * @returns {Promise<object[]>} Rows.
 */
async function getAllPromoSectionBuysByTier(tier) {
	return await prisma.promo_sections_buy.findMany({
		where: {
			tier: tier,
		},
	});
}
/**
 * Update a promo_sections_buy row by id.
 *
 * @param {string} id - promo_sections_buy_id.
 * @param {object} args - Fields to update.
 * @returns {Promise<object>} Updated row.
 */
async function updatePromoSectionBuy(id, args) {
	return await prisma.promo_sections_buy.update({
		where: {
			promo_sections_buy_id: id,
		},
		data: args,
	});
}

/**
 * Get a promo_sections_buy by Stripe payment_intent_id.
 *
 * @param {string} payment_intent_id - Stripe payment intent id.
 * @returns {Promise<object|null>} Row or null.
 */
export async function getPromoSectionBuyByPaymentIntentId(payment_intent_id) {
	return await prisma.promo_sections_buy.findFirst({
		where: {
			payment_intent_id: payment_intent_id,
		},
	});
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
	getPromoSectionBuyByPaymentIntentId,
};
