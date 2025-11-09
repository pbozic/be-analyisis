import prisma from '../prisma/prisma.js';
import { ACCOUNT_ACTIONS, BUSINESS_TYPE } from '../lib/constants.js';

const menuDefault = {
	menus: {
		include: {
			categories: {
				orderBy: {
					menu_order_index: 'asc',
				},
				include: {
					menu_items: {
						orderBy: {
							menu_category_order_index: 'asc',
						},
						include: {
							image_file: true,
							tax_rate: true,
						},
					},
					menu_categories_categories: {
						include: {
							category: true,
						},
					},
					daily_meal_category_price: true,
				},
			},
		},
	},
};

/**
 * Get a list of businesses with optional query/include arguments.
 *
 * @param {object} args - Additional Prisma query arguments (where, orderBy, include, etc.).
 * @returns {Promise<object[]>} A promise resolving to an array of business records.
 */
const getBusinesses = async (args) => {
	try {
		return await prisma.business.findMany({
			...args,
			include: {
				address: true,
				delivery_address: true,
				business_users: {
					include: {
						users: {
							include: {
								child_users: { include: { child_user: true } },
								parent_user: { include: { parent_user: true } },
							},
						},
					},
				},
				parent_business: true,
				child_businesses: true,
			},
		});
	} catch (error) {
		console.error('Error retrieving businesses:', error);
		throw new Error(error);
	}
};
/**
 * Get businesses that offer daily meals along with their daily meal drivers.
 *
 * @returns {Promise<object[]>} A promise resolving to an array of businesses with daily meal drivers.
 */
const getDailyMealBusinesses = async () => {
	try {
		const businesses = await prisma.business.findMany({
			where: {
				daily_meals_id: { not: null },
			},
			include: {
				food_drinks_module: {
					include: {
						daily_meals_module: {
							include: {
								daily_meal_drivers: true,
							},
						},
					},
				},
			},
		});
		return businesses.map((business) => ({
			...business,
			daily_meal_drivers: business.food_drinks_module.daily_meals_module.daily_meal_drivers,
		}));
	} catch (error) {
		console.error('Error retrieving daily meal businesses:', error);
		throw new Error(error);
	}
};
/**
 * Get a single business by its ID with rich related data.
 *
 * @param {string} business_id - The ID of the business to retrieve.
 * @returns {Promise<object|null>} A promise resolving to the business record or null if not found.
 */
const getBusinessById = async (business_id) => {
	try {
		const business = await prisma.business.findUnique({
			where: {
				business_id: business_id,
			},
			include: {
				address: true,
				delivery_address: true,
				stores_module: {
					include: {
						business_local_locations: {
							where: {
								time: {
									gte: new Date(),
								},
							},
							include: {
								local_location: {
									include: {
										address: true,
									},
								},
							},
							orderBy: {
								time: 'asc',
							},
						},
						...menuDefault,
						logo: true,
						banner: true,
					},
				},
				business_users: {
					include: {
						users: true,
					},
				},
				reservation_module: {
					include: {
						logo: true,
						banner: true,
					},
				},
				crm_module: {
					include: {
						business_clients: true,
					},
				},
				food_drinks_module: {
					include: {
						...menuDefault,
						table_reservations_module: {
							include: {
								reservations: {
									include: {
										user: true,
									},
								},
							},
						},
						daily_meals_module: true,
						logo: true,
						banner: true,
					},
				},
				transport_module: true,
				parent_business: true,
				child_businesses: true,
			},
		});
		return {
			...business,
			business_local_locations: business?.stores_module?.business_local_locations,
			business_clients: business?.crm_module?.business_clients,
			reservations: business?.food_drinks_module?.table_reservations_module?.reservations,
			daily_meals_delivery_mapping:
				business?.food_drinks_module?.daily_meals_module?.daily_meals_delivery_mapping,
			maximum_daily_meals_subscribers:
				business?.food_drinks_module?.daily_meals_module?.maximum_daily_meals_subscribers,
			daily_users_sorting_type: business?.food_drinks_module?.daily_meals_module?.daily_users_sorting_type,
			daily_users_sorted: business?.food_drinks_module?.daily_meals_module?.daily_users_sorted,
			stores_logo: business?.stores_module?.logo,
			stores_banner: business?.stores_module?.banner,
			food_drinks_logo: business?.food_drinks_module?.logo,
			food_drinks_banner: business?.food_drinks_module?.banner,
			reservations_logo: business?.reservation_module?.logo,
			reservations_banner: business?.reservation_module?.banner,
		};
	} catch (error) {
		console.error('Error retrieving business:', error);
		throw new Error(error);
	}
};
/**
 * Get a business by ID with admin-focused related data (users, words, promos, etc.).
 *
 * @param {string} business_id - The ID of the business to retrieve.
 * @returns {Promise<object|null>} A promise resolving to the business record or null if not found.
 */
const getBusinessAdminDataById = async (business_id) => {
	try {
		return await prisma.business.findUnique({
			where: {
				business_id: business_id,
			},
			include: {
				address: true,
				delivery_address: true,
				business_users: {
					include: {
						users: {
							include: {
								child_users: { include: { child_user: true } },
								parent_user: { include: { parent_user: true } },
							},
						},
					},
				},
				parent_business: true,
				child_businesses: true,
				word_buy_stripe_product: {
					include: {
						prices: true,
					},
				},
				word_buys: {
					include: {
						word: {
							include: {
								category: true,
								bundles: true,
							},
						},
					},
				},
				promo_sections: {
					include: {
						promo_section: true,
					},
				},
			},
		});
	} catch (error) {
		console.error('Error retrieving business:', error);
		throw new Error(error);
	}
};
/**
 * Get multiple businesses by IDs optimized for search results (selected fields only).
 *
 * @param {string|string[]} business_id - A single ID or array of business IDs.
 * @returns {Promise<object[]>} A promise resolving to a list of business search records.
 */
const getBusinessesForSearchById = async (business_id) => {
	try {
		if (!Array.isArray(business_id)) {
			business_id = [business_id];
		}
		let business = await prisma.business.findMany({
			where: {
				business_id: {
					in: business_id,
				},
			},
			select: {
				// ✅ Select specific fields from the root
				business_id: true,
				name: true,
				description: true,
				telephone: true,
				working_hours: true,
				// seats: true,
				// minimum_order: true,
				// offers_daily_meals: true,
				// daily_meals_days: true,
				// daily_meals_delivery_mapping: true,
				// maximum_daily_meals_subscribers: true,
				// popular: true,
				// new: true,
				// restaurant_overwhelmed: true,
				address: true, // Full object
				delivery_address: true, // Full object
				stores_module: {
					include: {
						business_local_locations: {
							where: {
								time: {
									gte: new Date(),
								},
							},
							include: {
								local_location: {
									include: {
										address: true,
									},
								},
							},
							orderBy: {
								time: 'asc',
							},
						},
						logo: true,
						banner: true,
					},
				},
				food_drinks_module: {
					include: {
						table_reservations_module: true,
						daily_meals_module: true,
						logo: true,
						banner: true,
					},
				},
				// menus: {
				// 	where: {
				// 		active: true,
				// 		isDailyMeal: false
				// 	},
				// 	include: {
				// 		categories: {
				// 			include: {
				// 				menu_items: {
				// 					include: {
				// 						documents: {
				// 							include: {
				// 								files: true
				// 							}
				// 						}
				// 					}
				// 				}
				// 			}
				// 		}
				// 	}
				// }
			},
		});
		return {
			...business,
			business_local_locations: business?.stores_module?.business_local_locations,
			reservations: business?.food_drinks_module?.table_reservations_module?.reservations,
			daily_meals_delivery_mapping:
				business?.food_drinks_module?.daily_meals_module?.daily_meals_delivery_mapping,
			maximum_daily_meals_subscribers:
				business?.food_drinks_module?.daily_meals_module?.maximum_daily_meals_subscribers,
			daily_meals_days: business?.food_drinks_module?.daily_meals_module?.daily_meals_days,
		};
	} catch (error) {
		console.error('Error retrieving business for search:', error);
		throw new Error(error);
	}
};
/**
 * Find a business by its email address.
 *
 * @param {string} email - The email address to search by.
 * @returns {Promise<object|null>} A promise resolving to the business or null if not found.
 */
const getBusinessByEmail = async (email) => {
	try {
		return await prisma.business.findUnique({
			where: {
				email: email,
			},
			include: {
				address: true,
				business_users: {
					include: {
						users: {
							include: {
								child_users: { include: { child_user: true } },
								parent_user: { include: { parent_user: true } },
							},
						},
					},
				},
				parent_business: true,
				child_businesses: true,
			},
		});
	} catch (error) {
		console.error('Error retrieving business by email:', error);
		throw new Error(error);
	}
};
/**
 * Find a business by its telephone number.
 *
 * @param {string} telephone - The full telephone number to search by.
 * @returns {Promise<object|null>} A promise resolving to the business or null if not found.
 */
const getBusinessByTelephone = async (telephone) => {
	try {
		return await prisma.business.findFirst({
			where: {
				telephone: telephone,
			},
			include: {
				address: true,
				business_users: {
					include: {
						users: {
							include: {
								child_users: { include: { child_user: true } },
								parent_user: { include: { parent_user: true } },
							},
						},
					},
				},
				parent_business: true,
				child_businesses: true,
			},
		});
	} catch (error) {
		console.error('Error retrieving business by telephone:', error);
		throw new Error(error);
	}
};
/**
 * Search businesses by name (case-insensitive contains).
 *
 * @param {string} search - The search term to match against business names.
 * @returns {Promise<object[]>} A promise resolving to matching businesses.
 */
const getBusinessesByNameSearch = async (search) => {
	try {
		return await prisma.business.findMany({
			where: {
				name: {
					contains: search,
					mode: 'insensitive', // This makes the search case-insensitive
				},
			},
			include: {
				address: true,
				business_users: {
					include: {
						users: {
							include: {
								child_users: { include: { child_user: true } },
								parent_user: { include: { parent_user: true } },
							},
						},
					},
				},
				parent_business: true,
				child_businesses: true,
			},
		});
	} catch (error) {
		console.error('Error retrieving businesses by name:', error);
		throw new Error(error);
	}
};
/**
 * Search businesses by group name (case-insensitive contains).
 *
 * @param {string} search - The search term to match against business group names.
 * @returns {Promise<object[]>} A promise resolving to matching businesses.
 */
const getBusinessesByGroupName = async (search) => {
	try {
		return await prisma.business.findMany({
			where: {
				business_group_name: {
					contains: search,
					mode: 'insensitive', // This makes the search case-insensitive
				},
			},
			include: {
				address: true,
				business_users: {
					include: {
						users: {
							include: {
								child_users: { include: { child_user: true } },
								parent_user: { include: { parent_user: true } },
							},
						},
					},
				},
				parent_business: true,
				child_businesses: true,
			},
		});
	} catch (error) {
		console.error('Error retrieving businesses by group name:', error);
		throw new Error(error);
	}
};
/**
 * List transfer businesses, returning only main information.
 *
 * @returns {Promise<object[]>} A promise resolving to matching businesses.
 */
const getTransferBusinessesMainInformation = async () => {
	try {
		return await prisma.business.findMany({
			where: {
				transport_module_id: {
					not: null,
				},
			},
		});
	} catch (error) {
		console.error(`Error retrieving transfer businesses`, error);
		throw new Error(error);
	}
};
/**
 * List stores, returning only main information.
 *
 * @returns {Promise<object[]>} A promise resolving to matching businesses.
 */
const getStoresMainInformation = async () => {
	try {
		return await prisma.business.findMany({
			where: {
				stores_module_id: {
					not: null,
				},
			},
		});
	} catch (error) {
		console.error(`Error retrieving stores`, error);
		throw new Error(error);
	}
};
/**
 * List food and drinks businesses, returning only main information.
 *
 * @returns {Promise<object[]>} A promise resolving to matching businesses.
 */
const getFoodDrinksMainInformation = async () => {
	try {
		return await prisma.business.findMany({
			where: {
				food_drinks_module_id: {
					not: null,
				},
			},
		});
	} catch (error) {
		console.error(`Error retrieving food and drinks businesses`, error);
		throw new Error(error);
	}
};
/**
 * List businesses by type(s) with rich related data, optionally filtered by extra args.
 *
 * @param {'BUSINESS' | 'TRANSPORT' | 'DELIVERY'} type - One or more business types.
 * @param {object} [args={}] - Additional Prisma where/ordering filters.
 * @returns {Promise<object[]>} A promise resolving to matching businesses with related data.
 */
const getBusinessesByType = async (type, args = {}) => {
	try {
		const includeOptions = {
			address: true,
			delivery_address: true,
			business_users: {
				include: {
					users: true,
				},
			},
			crm_module: {
				include: {
					business_clients: true,
				},
			},
			parent_business: true,
			child_businesses: true,
			stores_module: {
				include: {
					...menuDefault,
					logo: true,
					banner: true,
				},
			},
			food_drinks_module: {
				include: {
					...menuDefault,
					table_reservations_module: {
						include: {
							reservations: {
								include: {
									user: true,
								},
							},
						},
					},
					daily_meals_module: true,
					logo: true,
					banner: true,
				},
			},
			reservation_module: {
				include: {
					logo: true,
					banner: true,
				},
			},
		};
		let whereObject = {
			...args?.where,
		};
		if (type === 'BUSINESS') whereObject.crm_module_id = { not: null };
		if (type === 'TRANSPORT') whereObject.transport_module_id = { not: null };
		if (type === 'DELIVERY') {
			whereObject = {
				...whereObject,
				OR: [{ stores_module_id: { not: null } }, { food_drinks_module_id: { not: null } }],
			};
		}
		const businesses = await prisma.business.findMany({
			where: whereObject,
			include: includeOptions,
		});
		// Before returning, sort menus, and menu categories if applicable
		// return reorderMenusAndCategories(businesses);
		return businesses.map((business) => ({
			...business,
			business_clients: business?.crm_module?.business_clients,
		}));
	} catch (error) {
		console.error(`Error retrieving businesses by type ${type}:`, error);
		throw new Error(error);
	}
};
/**
 * Get the parent business for a given business ID.
 *
 * @param {string} business_id - The child business ID.
 * @returns {Promise<object|null>} A promise resolving to the parent business or null.
 */
const getParentBusiness = async (business_id) => {
	try {
		const business = await prisma.business.findUnique({
			where: { business_id },
			include: { parent_business: true },
		});
		return business.parent_business;
	} catch (error) {
		console.error('Error retrieving parent business:', error);
		throw new Error(error);
	}
};
/**
 * Get all child businesses for a parent business ID.
 *
 * @param {string} parent_business_id - The parent business ID.
 * @returns {Promise<object[]>} A promise resolving to child businesses.
 */
const getChildBusinesses = async (parent_business_id) => {
	try {
		return await prisma.business.findMany({
			where: { parent_business_id },
		});
	} catch (error) {
		console.error('Error retrieving child businesses:', error);
		throw new Error(error);
	}
};
/**
 * Update a business with provided data (certain protected fields are stripped).
 *
 * @param {string} business_id - The business ID to update.
 * @param {object} businessD - Partial business data to update.
 * @returns {Promise<object>} A promise resolving to the updated business.
 */
const updateBusiness = async (business_id, businessD) => {
	try {
		let businessData = {
			...businessD,
		};
		delete businessData.business_id;
		delete businessData.type;
		delete businessData.is_business_unit;
		delete businessData.business_group_name;
		delete businessData.address;
		delete businessData.delivery_address;
		delete businessData.email;
		delete businessData.telephone;
		delete businessData.telephone_code;
		delete businessData.telephone_number;
		delete businessData.working_hours;
		delete businessData.finances;
		delete businessData.popular;
		delete businessData.new;
		return await prisma.business.update({
			where: { business_id },
			data: { ...businessData },
		});
	} catch (error) {
		console.error('Error updating business:', error);
		throw new Error(error);
	}
};
/**
 * Update the business group name.
 *
 * @param {string} business_id - The business ID.
 * @param {string} business_group_name - The new group name.
 * @returns {Promise<object>} A promise resolving to the updated business.
 */
const updateBusinessGroupName = async (business_id, business_group_name) => {
	try {
		return await prisma.business.update({
			where: { business_id },
			data: { business_group_name },
		});
	} catch (error) {
		console.error('Error updating business group name:', error);
		throw new Error(error);
	}
};
/**
 * Update the business email.
 *
 * @param {string} business_id - The business ID.
 * @param {string} email - The new email.
 * @returns {Promise<object>} A promise resolving to the updated business.
 */
const updateBusinessEmail = async (business_id, email) => {
	try {
		return await prisma.business.update({
			where: { business_id },
			data: { email },
		});
	} catch (error) {
		console.error('Error updating business email:', error);
		throw new Error(error);
	}
};
/**
 * Update the business telephone information.
 *
 * @param {string} business_id - The business ID.
 * @param {string} telephone - Formatted telephone string.
 * @param {string} telephone_code - Country/area code.
 * @returns {Promise<object>} A promise resolving to the updated business.
 */
const updateBusinessTelephone = async (business_id, telephone, telephone_code) => {
	try {
		return await prisma.business.update({
			where: { business_id },
			data: { telephone, telephone_code },
		});
	} catch (error) {
		console.error('Error updating business telephone:', error);
		throw new Error(error);
	}
};
/**
 * Update the business working hours JSON.
 *
 * @param {string} business_id - The business ID.
 * @param {object} working_hours - Working hours object.
 * @returns {Promise<object>} A promise resolving to the updated business.
 */
const updateBusinessWorkingHours = async (business_id, working_hours) => {
	try {
		return await prisma.business.update({
			where: { business_id },
			data: { working_hours },
		});
	} catch (error) {
		console.error('Error updating business working hours:', error);
		throw new Error(error);
	}
};
/**
 * Create a new business.
 *
 * @param {object} business - The business data to create.
 * @param {object} [tx=prisma] - Optional Prisma transaction/client to use.
 * @returns {Promise<object>} A promise resolving to the created business.
 */
const createNewBusiness = async (business, tx = prisma) => {
	try {
		return await tx.business.create({
			data: business,
		});
	} catch (error) {
		console.error('Error creating new business:', error);
		throw new Error(error);
	}
};
/**
 * Delete a business by ID.
 *
 * @param {string} business_id - The ID of the business to delete.
 * @returns {Promise<object>} A promise resolving to the deleted business.
 */
const deleteBusiness = async (business_id) => {
	try {
		return await prisma.business.delete({
			where: { business_id },
		});
	} catch (error) {
		console.error('Error deleting business:', error);
		throw new Error(error);
	}
};
/**
 * Remove the parent relationship from a business.
 *
 * @param {string} business_id - The business ID.
 * @returns {Promise<object>} A promise resolving to the updated business.
 */
const removeParentBusiness = async (business_id) => {
	try {
		return await prisma.business.update({
			where: { business_id: business_id },
			data: { parent_business_id: null },
		});
	} catch (error) {
		console.error('Error removing child business:', error);
		throw new Error(error);
	}
};
/**
 * Set the scheduled users sorting type for daily meals.
 *
 * @param {string} type - Sorting type identifier.
 * @param {string} businessId - The business ID.
 * @returns {Promise<object>} A promise resolving to the updated business.
 */
const addScheduledUserSortingType = async (type, businessId) => {
	try {
		const business = await getBusinessById(businessId);
		const food_drinks_id = business.food_drinks_module?.food_drinks_id;
		await prisma.daily_meals_module.update({
			where: { food_drinks_id },
			data: { daily_users_sorting_type: type },
		});
		return { ...business, daily_users_sorting_type: type };
	} catch (error) {
		console.error('Error updating scheduled users sorting type:', error);
		throw new Error(error);
	}
};

/**
 * Manually set the order of scheduled users for a business.
 *
 * @param {string[]} [sorted_users=[]] - Ordered list of user IDs.
 * @param {string} businessId - The business ID.
 * @returns {Promise<object>} A promise resolving to the updated business.
 */
const manualSortScheduledUsers = async (sorted_users = [], businessId) => {
	try {
		const business = await getBusinessById(businessId);
		const food_drinks_id = business.food_drinks_module?.food_drinks_id;
		await prisma.daily_meals_module.update({
			where: { food_drinks_id },
			data: { daily_users_sorted: [...sorted_users] },
		});
		return { ...business, daily_users_sorted: [...sorted_users] };
	} catch (error) {
		console.error('Error updating sorted scheduled users:', error);
		throw new Error(error);
	}
};
/**
 * Get the Stripe account ID for a business.
 *
 * @param {string} business_id - The business ID.
 * @returns {Promise<string|null>} A promise resolving to the Stripe account ID or null.
 */
const getBusinessStripeByBusinessId = async (business_id) => {
	try {
		const business_data = await prisma.business.findUnique({
			where: {
				business_id: business_id,
			},
			select: {
				business_id: true,
				stripe_account_id: true,
			},
		});
		return business_data.stripe_account_id;
	} catch (error) {
		console.error('Error retrieving business stripe ID:', error);
		throw new Error(error);
	}
};
/**
 * Retrieves the Stripe account IDs for all businesses from the database.
 *
 * @returns {Promise<Array<{ business_id: number, stripe_account_id: string }>>}
 *          A promise that resolves to an array of objects containing business IDs and their corresponding Stripe account IDs.
 * @throws {Error} If there is an error fetching the Stripe IDs from the database.
 */
const getStripeIdsForAllBusinesses = async () => {
	try {
		return await prisma.business.findMany({
			select: {
				business_id: true,
				stripe_account_id: true,
			},
		});
	} catch (error) {
		console.error('Error fetching Stripe IDs for businesses:', error);
		throw new Error(error);
	}
};
/**
 * Activate a business and record an UNSUSPEND account action.
 *
 * @param {string} business_id - The business ID to activate.
 * @param {string} action_creator_user_id - The user ID performing the action.
 * @param {string} reason - Reason for activation change.
 * @returns {Promise<object>} A promise resolving to the updated business.
 */
async function activateBusiness(business_id, action_creator_user_id, reason) {
	try {
		return await prisma.$transaction(async (tx) => {
			const business = await tx.business.findUnique({
				where: { business_id },
				select: { first_activated_at: true },
			});
			const updateData = { active: true };
			if (!business.first_activated_at) {
				updateData.first_activated_at = new Date();
			}
			const updatedBusiness = await tx.business.update({
				where: { business_id },
				data: updateData,
			});
			await tx.account_actions.create({
				data: {
					business: { connect: { business_id } },
					action_creator: { connect: { user_id: action_creator_user_id } },
					reason: reason,
					action: ACCOUNT_ACTIONS.UNSUSPEND,
				},
			});
			return updatedBusiness;
		});
	} catch (error) {
		console.error('Error activating business:', error);
		throw new Error('Failed to activate business');
	}
}
/**
 * Deactivate a business and record a SUSPEND account action.
 *
 * @param {string} business_id - The business ID to deactivate.
 * @param {string} action_creator_user_id - The user ID performing the action.
 * @param {string} reason - Reason for deactivation.
 * @returns {Promise<object>} A promise resolving to the updated business.
 */
async function deactivateBusiness(business_id, action_creator_user_id, reason) {
	try {
		return await prisma.$transaction(async (tx) => {
			const updatedBusiness = await tx.business.update({
				where: { business_id },
				data: { active: false },
			});
			await tx.account_actions.create({
				data: {
					business: { connect: { business_id } },
					action_creator: { connect: { user_id: action_creator_user_id } },
					reason: reason,
					action: ACCOUNT_ACTIONS.SUSPEND,
				},
			});
			return updatedBusiness;
		});
	} catch (error) {
		console.error('Error deactivating business:', error);
		throw new Error('Failed to deactivate business');
	}
}
/**
 * Calculate the remaining purchase order limit amount for the current month.
 *
 * Aggregates this month's taxi orders linked to the business's users/clients and
 * subtracts from the business.purchase_order_limit_amount.
 *
 * @param {string} business_id - The business ID.
 * @returns {Promise<number>} A promise resolving to the remaining amount (>= 0).
 */
const getPurchaseOrderLimit = async (business_id) => {
	try {
		const business = await prisma.business.findUnique({
			where: { business_id },
			include: {
				business_users: true,
				crm_module: {
					business_clients: true,
				},
			},
		});
		// get all taxi orders for this business (this month) and check if the limit is reached
		const taxiOrders = await prisma.taxi_orders.findMany({
			where: {
				payment: {
					path: ['type'],
					equals: 'PURCHASE_ORDER',
				},
				updated_at: {
					gte: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
					lte: new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0),
				},
				OR: [
					{
						business_clients_id: {
							in: business.crm_module.business_clients.map((client) => client.business_clients_id),
						},
					},
					{
						business_users_id: {
							in: business.business_users.map((user) => user.business_users_id),
						},
					},
				],
			},
			select: {
				payment: true,
			},
		});
		const totalTaxiOrders = taxiOrders.reduce((acc, order) => acc + (parseFloat(order.payment.price) || 0), 0);
		if (business.purchase_order_limit_amount > 0) {
			return Math.max(0, business.purchase_order_limit_amount - totalTaxiOrders);
		}
		return 0;
	} catch (error) {
		console.error('Error retrieving purchase order limit:', error);
		throw error;
	}
};
const getLocalBusinesses = async () => {
	try {
		const stores = await prisma.business.findMany({
			where: {
				stores_module_id: {
					not: null,
				},
			},
		});
		return stores.filter((store) => store.types.some((type) => type === BUSINESS_TYPE.LOCAL));
	} catch (error) {
		console.error('Error retrieving local businesses:', error);
		throw new Error(error);
	}
};
export { getLocalBusinesses };
export { getDailyMealBusinesses };
export { getBusinesses };
export { getBusinessById };
export { getBusinessByEmail };
export { getBusinessByTelephone };
export { getBusinessesByType };
export { getBusinessesByNameSearch };
export { getBusinessesByGroupName };
export { getChildBusinesses };
export { getParentBusiness };
export { createNewBusiness };
export { updateBusiness };
export { deleteBusiness };
export { updateBusinessGroupName };
export { updateBusinessEmail };
export { updateBusinessTelephone };
export { updateBusinessWorkingHours };
export { removeParentBusiness };
export { addScheduledUserSortingType };
export { manualSortScheduledUsers };
export { getTransferBusinessesMainInformation };
export { getStoresMainInformation };
export { getFoodDrinksMainInformation };
export { getBusinessStripeByBusinessId };
export { getStripeIdsForAllBusinesses };
export { getBusinessesForSearchById };
export { activateBusiness };
export { deactivateBusiness };
export { getBusinessAdminDataById };
export { getPurchaseOrderLimit };
export default {
	getLocalBusinesses,
	getDailyMealBusinesses,
	getBusinesses,
	getBusinessById,
	getBusinessByEmail,
	getBusinessByTelephone,
	getBusinessesByType,
	getBusinessesByNameSearch,
	getBusinessesByGroupName,
	getChildBusinesses,
	getParentBusiness,
	createNewBusiness,
	updateBusiness,
	deleteBusiness,
	updateBusinessGroupName,
	updateBusinessEmail,
	updateBusinessTelephone,
	updateBusinessWorkingHours,
	removeParentBusiness,
	addScheduledUserSortingType,
	manualSortScheduledUsers,
	getTransferBusinessesMainInformation,
	getStoresMainInformation,
	getFoodDrinksMainInformation,
	getBusinessStripeByBusinessId,
	getStripeIdsForAllBusinesses,
	getBusinessesForSearchById,
	activateBusiness,
	deactivateBusiness,
	getBusinessAdminDataById,
	getPurchaseOrderLimit,
};
