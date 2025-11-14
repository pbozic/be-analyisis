import esClient from '../client.js';
import prisma from '../../prisma/prisma.js';
import Constants from '../../lib/constants.js';
async function createBusinessIndex(force = false) {
	try {
		const indexExists = await esClient.indices.exists({ index: 'business_index' });
		if (indexExists) {
			console.log("⚠️ Index 'business_index' already exists. Deleting...");
			if (force) {
				await esClient.indices.delete({ index: 'business_index' });
			} else {
				console.log('🚫 Skipping index creation. Use --force to override.');
				return;
			}
		}
		console.log('🚀 Creating business_index with optimized mappings...');
		await esClient.indices.create({
			index: 'business_index',
			body: {
				settings: {
					analysis: {
						analyzer: {
							custom_text_analyzer: {
								type: 'standard',
								stopwords: '_english_',
							},
						},
					},
				},
				mappings: {
					properties: {
						business_id: { type: 'keyword' },
						name: { type: 'text', analyzer: 'custom_text_analyzer' },
						description: { type: 'text', analyzer: 'custom_text_analyzer' },
						location: { type: 'geo_point' }, // Allows geo-based queries
						types: {
							type: 'nested',
							properties: {
								type: { type: 'keyword' },
							},
						},
						active: { type: 'boolean' },
						online: { type: 'boolean' },
						working_hours: { type: 'object' },
						delivery_address: { type: 'object' },
						address: { type: 'object' },
						overwhelmed: { type: 'boolean' },
						// telephone: { type: 'text' },
						menus: {
							type: 'nested',
							properties: {
								isDailyMeal: { type: 'boolean' },
								date: { type: 'date' },
								menu_category_id: { type: 'keyword' },
								menu_category_name: {
									type: 'text',
									analyzer: 'custom_text_analyzer',
								},
								translations: {
									type: 'text',
									analyzer: 'custom_text_analyzer', // 🔥 Add translation support
								},
								menu_items: {
									type: 'nested',
									properties: {
										menu_item_id: { type: 'keyword' },
										name: { type: 'text', analyzer: 'custom_text_analyzer' },
										translations: { type: 'text', analyzer: 'custom_text_analyzer' }, // 🔥 Handle translations
										description: { type: 'text', analyzer: 'custom_text_analyzer' },
									},
								},
							},
						},
						promo_sections: {
							type: 'nested',
							properties: {
								promo_sections_id: { type: 'keyword' },
								tier: { type: 'integer' },
								expires_at: { type: 'date' },
							},
						},
						word_buys: {
							type: 'nested',
							properties: {
								word_id: { type: 'keyword' },
								word: { type: 'text', analyzer: 'custom_text_analyzer' },
								translations: { type: 'text', analyzer: 'custom_text_analyzer' },
								price: { type: 'double' },
								expires_at: { type: 'date' },
							},
						},
						business_local_locations: {
							type: 'nested',
							properties: {
								address: { type: 'object' },
								geo: { type: 'geo_point' },
								time: { type: 'date' },
							},
						},
						reservation_locations: {
							type: 'nested',
							properties: {
								address: { type: 'object' },
								geo: { type: 'geo_point' },
							},
						},
						reservation_services: {
							type: 'nested',
							properties: {
								service_id: { type: 'keyword' },
								name: { type: 'text', analyzer: 'custom_text_analyzer' },
								translations: { type: 'text', analyzer: 'custom_text_analyzer' },
								description: { type: 'text', analyzer: 'custom_text_analyzer' },
								service_category_id: { type: 'keyword' },
							},
						},
						reservation_service_categories: {
							type: 'nested',
							properties: {
								service_category_id: { type: 'keyword' },
								name: { type: 'text', analyzer: 'custom_text_analyzer' },
								translations: { type: 'text', analyzer: 'custom_text_analyzer' },
							},
						},
					},
				},
			},
		});
		console.log(' business_index created successfully.');
	} catch (error) {
		console.error('❌ Error creating business_index:', error);
	}
}
interface BusinessUser {
	online?: boolean;
}

interface Address {
	address_id: string;
	address: string;
	latitude: string | null;
	longitude: string | null;
	street: string | null;
	house_number: string | null;
	city: string | null;
	country: string | null;
	postal: string | null;
}

interface Translation {
	translation: string;
}

interface Translatable {
	translations: Translation[];
}

interface Category {
	translatable?: Translatable;
}

interface MenuCategoryRelation {
	categories_id: string;
	category: Category;
}

interface Word {
	word?: string;
	translatable?: Translatable;
}

interface WordBuy {
	word_buy_id: string;
	word_id: string;
	price: number | string;
	expires_at: Date | null;
	deleted_at: Date | null;
	word?: Word;
}

interface TaxRate {
	// Define tax rate properties as needed
}

interface MenuItem {
	menu_item_id: string;
	names: Record<string, string>;
	description: Record<string, string>;
	tax_rate?: TaxRate;
	menu_category?: {
		menu_categories_categories: MenuCategoryRelation[];
	};
}

interface MenuCategory {
	names?: Record<string, string>;
	menu_items: MenuItem[];
	menu_categories_categories: MenuCategoryRelation[];
}

interface Menu {
	isDailyMeal?: boolean;
	date?: Date | null;
	categories: MenuCategory[];
}

interface DocumentFile {
	url: string;
}

interface Document {
	document_type: string;
	files: DocumentFile[];
}

interface PromoSection {
	name: string;
}

interface BusinessPromoSection {
	promo_sections_id: string;
	tier: number;
	expires_at: Date | null;
	promo_section: PromoSection;
}

interface LocalLocation {
	local_location_id: string;
	address_id: string;
	address: Address;
}

interface BusinessLocalLocation {
	business_local_location_id: string;
	local_location_id: string;
	time: Date | null;
	local_location: LocalLocation;
}

interface Business {
	business_id: string;
	name: string;
	active: boolean;
	description?: string;
	popular?: boolean;
	new?: boolean;
	working_hours?: Record<string, any>;
	delivery_address?: Address;
	address?: Address;
	seats?: number;
	restaurant_overwhelmed?: boolean;
	type?: string;
	telephone?: string;
	business_users?: BusinessUser[];
	menus: Menu[];
	documents: Document[];
	word_buys?: WordBuy[];
	promo_sections: BusinessPromoSection[];
	business_local_locations: BusinessLocalLocation[];
}

interface IndexedWordBuy {
	word_buy_id: string;
	word_id: string;
	word: string | null;
	translations: string;
	price: number;
	expires_at: Date | null;
}

interface IndexedMenuItem {
	menu_item_id: string;
	name: string[];
	translations?: string[];
	description: string[];
}

interface IndexedMenu {
	menu_category_name: string[];
	menu_category_id: string[];
	translations: string[];
	menu_items: IndexedMenuItem[];
	isDailyMeal?: boolean;
	date?: Date;
}

interface IndexedPromoSection {
	name: string;
	promo_sections_id: string;
	tier: number;
	expires_at: Date | null;
}

interface IndexedLocalLocation {
	business_local_location_id: string;
	local_location_id: string;
	time: Date | null;
	local_location: {
		local_location_id: string;
		address_id: string;
		address: {
			address_id: string;
			address: string;
			latitude: string | null;
			longitude: string | null;
			street: string | null;
			house_number: string | null;
			city: string | null;
			country: string | null;
			postal: string | null;
		};
	};
}

interface IndexedBusiness {
	business_id: string;
	name: string;
	online?: boolean;
	active: boolean;
	description?: string;
	popular?: boolean;
	new?: boolean;
	working_hours?: Record<string, any>;
	delivery_address?: Address;
	address?: Address;
	seats?: number;
	restaurant_overwhelmed?: boolean;
	logo?: string;
	type?: string;
	banner?: string;
	telephone?: string;
	location: {
		lat: number;
		lon: number;
	};
	menus: IndexedMenu[];
	promo_sections: IndexedPromoSection[];
	business_local_locations: IndexedLocalLocation[];
	word_buys: IndexedWordBuy[];
}

async function indexBusinesses(business_id: string | null = null, force: boolean = false): Promise<void> {
	//TODO: Set up indexing for reservation businesses and change for merchants
	//- Call this function on:
	//  - App startup
	//  - Business creation
	//  - Business update
	//  - Business deletion
	//  - Menu creation
	//  - Menu update
	//  - Menu deletion
	//  - Word buy creation
	//  - Word buy update
	//  - Word buy deletion
	//  - Address update
	//  - Delivery address update
	//  - Business popularity change
	//  - Business new status change
	//  - Business location change
	//  - Business description change
	//  - Business name change
	//  - Menu category name change
	//  - Menu item name change
	//  - Menu item description change
	//  - Word update
	try {
		await createBusinessIndex(force);
		console.log('🚀 Fetching businesses from database...');
		const whereClause: any = {
			OR: [{ stores_module_id: { not: null } }, { food_drinks_module_id: { not: null } }],
		};
		if (business_id) {
			whereClause.business_id = business_id;
		}
		const businesses: Business[] = await prisma.business.findMany({
			where: whereClause,
			include: {
				business_users: true,
				address: true,
				delivery_address: true,
				word_buys: {
					where: {
						expires_at: {
							gt: new Date(), // Only include word_buys where expires_at is greater than now
						},
					},
					include: {
						word: {
							include: {
								translatable: {
									include: {
										translations: true,
									},
								},
							},
						},
					},
				},
				menus: {
					include: {
						categories: {
							include: {
								menu_items: {
									include: {
										tax_rate: true,
									},
								},
								menu_categories_categories: {
									include: {
										category: {
											include: {
												translatable: {
													include: {
														translations: true,
													},
												},
											},
										},
									},
								},
							},
						},
					},
				},
				documents: {
					include: {
						files: true, // Full nested objects
					},
					where: {
						document_type: {
							in: ['BANNER', 'LOGO'],
						},
					},
				},
				promo_sections: {
					include: {
						promo_section: true,
					},
				},
				business_local_locations: {
					include: {
						local_location: {
							include: {
								address: true,
							},
						},
					},
				},
			},
		});
		console.log(`Found ${businesses.length} businesses. Preparing data for indexing...`);
		const bulkOps: any[] = [];
		for (const business of businesses) {
			// console.log(JSON.parse(JSON.stringify(business)))
			if (!business.menus || business.menus.length === 0) {
				console.warn(`⚠️ Skipping ${business.name} (No menus found)`);
				continue;
			}
			let logo: string | undefined, banner: string | undefined;
			for (let doc of business.documents) {
				if (doc.document_type === Constants.DOCUMENT_TYPE.LOGO) {
					logo = doc.files[0]?.url;
				}
				if (doc.document_type === Constants.DOCUMENT_TYPE.BANNER) {
					banner = doc.files[0]?.url;
				}
			}
			//fs.writeFileSync('business.json', JSON.stringify(business, null, 2))
			const doc: IndexedBusiness = {
				business_id: business.business_id,
				name: business.name,
				online: business.business_users?.some((user) => user.online),
				active: business.active,
				description: business.description,
				popular: business.popular,
				new: business.new,
				working_hours: business.working_hours,
				delivery_address: business.delivery_address,
				address: business.address,
				seats: business.seats,
				restaurant_overwhelmed: business.restaurant_overwhelmed,
				logo: logo,
				type: business.type,
				banner: banner,
				telephone: business.telephone,
				location: business.delivery_address
					? {
							lat: parseFloat(business?.delivery_address?.latitude || '0'),
							lon: parseFloat(business?.delivery_address?.longitude || '0'),
						}
					: {
							lat: parseFloat(business?.address?.latitude || '0'), // TODO: handle LOCAL (no delivery address)
							lon: parseFloat(business?.address?.longitude || '0'), // TODO: handle LOCAL (no delivery address)
						},
				menus: business.menus
					.filter((menu) => {
						if (!menu.isDailyMeal) return true;

						if (menu.date) {
							const menuDate = new Date(menu.date);
							menuDate.setHours(0, 0, 0, 0);
							const today = new Date();
							today.setHours(0, 0, 0, 0);
							return menuDate >= today;
						}
						return false; // Skip daily meals with no date
					})
					.map((menu): IndexedMenu => {
						const menuCategoryIds: string[] = [];
						menu.categories.forEach((category) => {
							if (category.menu_categories_categories.length > 0) {
								for (let cat of category.menu_categories_categories) {
									menuCategoryIds.push(cat.categories_id);
								}
							}
						});
						let menu1: IndexedMenu = {
							menu_category_name: menu.categories.flatMap((cat) => {
								if (!cat.names) return [];
								return Object.values(cat.names).filter((value) => value !== '') || [];
							}),
							menu_category_id: menuCategoryIds,
							translations: menu.categories.flatMap((cat) =>
								cat.menu_categories_categories.flatMap(
									(rel) => rel.category.translatable?.translations.map((t) => t.translation) || []
								)
							),
							menu_items: menu.categories.flatMap((cat) =>
								cat.menu_items.map(
									(item): IndexedMenuItem => ({
										menu_item_id: item.menu_item_id,
										name: Object.values(item.names).filter((value) => value !== ''),
										translations: item.menu_category?.menu_categories_categories.flatMap(
											(rel) =>
												rel.category.translatable?.translations.map((t) => t.translation) || []
										),
										description: Object.values(item.description).filter((value) => value !== ''),
									})
								)
							),
						};
						if (menu.isDailyMeal) {
							menu1.isDailyMeal = true;
							menu1.date = menu.date || undefined;
						}
						return menu1;
					}),
				promo_sections: business.promo_sections.map((section): IndexedPromoSection => {
					return {
						name: section.promo_section.name,
						promo_sections_id: section.promo_sections_id,
						tier: section.tier,
						expires_at: section.expires_at,
					};
				}),
				business_local_locations: business.business_local_locations.map(
					(localLocation): IndexedLocalLocation => {
						return {
							business_local_location_id: localLocation.business_local_location_id,
							local_location_id: localLocation.local_location_id,
							time: localLocation.time,
							local_location: {
								local_location_id: localLocation.local_location.local_location_id,
								address_id: localLocation.local_location.address_id,
								address: {
									address_id: localLocation.local_location.address.address_id,
									address: localLocation.local_location.address.address,
									latitude: localLocation.local_location.address.latitude,
									longitude: localLocation.local_location.address.longitude,
									street: localLocation.local_location.address.street,
									house_number: localLocation.local_location.address.house_number,
									city: localLocation.local_location.address.city,
									country: localLocation.local_location.address.country,
									postal: localLocation.local_location.address.postal,
								},
							},
						};
					}
				),
				word_buys: (business.word_buys || []).map((wb) => mapWordBuyForIndex(wb)).filter(Boolean), // remove nulls from dead/expired buys
			};
			bulkOps.push(
				{ update: { _index: 'business_index', _id: business.business_id } }, // Use business_id as _id
				{ doc, doc_as_upsert: true } // Update if exists, create if not
			);
		}
		if (bulkOps.length > 0) {
			console.log(`📤 Sending ${bulkOps.length / 2} businesses to Elasticsearch...`);
			const bulkResponse = await esClient.bulk({ refresh: true, body: bulkOps });
			if (bulkResponse.errors) {
				console.error('❌ Some bulk operations failed!');
				const failedOps: any[] = [];
				bulkResponse.items.forEach((item: any, index: number) => {
					const operation = Object.keys(item)[0]; // "index" or "update"
					const result = item[operation];
					if (result.error) {
						console.error(`🚨 Error in ${operation} at index ${index}:`, result.error);
						failedOps.push(bulkOps[index * 2]); // Retry failed operations
						failedOps.push(bulkOps[index * 2 + 1]);
					}
				});
				if (failedOps.length > 0) {
					console.log(`🔁 Retrying ${failedOps.length / 2} failed documents...`);
					await esClient.bulk({ refresh: true, body: failedOps });
				}
			} else {
				console.log(` Successfully indexed ${bulkOps.length / 2} businesses!`);
			}
		} else {
			console.log('⚠️ No businesses to index.');
		}
	} catch (error) {
		console.error('❌ Error indexing businesses:', error);
	}
}

function mapWordBuyForIndex(dbWordBuy) {
	// Skip dead/expired buys at index time (faster queries)
	if (dbWordBuy.deleted_at) return null;
	if (dbWordBuy.expires_at && new Date(dbWordBuy.expires_at) <= new Date()) return null;

	const baseWord = dbWordBuy.word?.word || null;
	const translationsArr =
		dbWordBuy.word?.translatable?.translations?.map((t) => t.translation)?.filter(Boolean) || [];
	const dedupTranslations = Array.from(new Set(translationsArr));

	return {
		word_buy_id: dbWordBuy.word_buy_id,
		word_id: dbWordBuy.word_id,
		word: baseWord,
		translations: dedupTranslations.join(' '), // index as a single text blob
		price: Number(dbWordBuy.price) || 0,
		expires_at: dbWordBuy.expires_at || null,
	};
}

export default indexBusinesses;
