import prisma from '../prisma/prisma.js';
import AddressDao from './Address.js';
import Constants from '../lib/constants.js';
import { reorderMenusAndCategories } from '../lib/businessHelpers.js';
import { ACCOUNT_ACTIONS } from '../lib/constants.js';
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
				daily_meal_drivers: {
					include: {
						subscriptions: true,
					},
				},
			},
		});
	} catch (error) {
		console.error('Error retrieving businesses:', error);
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
		return await prisma.business.findUnique({
			where: {
				business_id: business_id,
			},
			include: {
				address: true,
				delivery_address: true,
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
										documents: {
											include: {
												files: true,
											},
										},
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
				business_users: {
					include: {
						users: true,
					},
				},
				reservations: {
					include: {
						user: true,
					},
				},
				reservation_module: true,
				business_clients: true,
				parent_business: true,
				child_businesses: true,
			},
		});
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
				seats: true,
				minimum_order: true,
				offers_daily_meals: true,
				daily_meals_days: true,
				daily_meals_delivery_mapping: true,
				maximum_daily_meals_subscribers: true,
				popular: true,
				new: true,
				restaurant_overwhelmed: true,
				address: true, // Full object
				delivery_address: true, // Full object
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
		return business;
	} catch (error) {
		console.error('Error retrieving business for search:', error);
		throw new Error(error);
	}
};
/**
 * Get a single business by ID optimized for search display (selected fields only).
 *
 * @param {string} business_id - The ID of the business to retrieve.
 * @returns {Promise<object|null>} A promise resolving to the business search record or null if not found.
 */
const getBusinessForSearchById = async (business_id) => {
	try {
		const tomorrow = new Date();
		tomorrow.setDate(tomorrow.getDate() + 1);
		let business = await prisma.business.findUnique({
			where: {
				business_id: business_id,
			},
			select: {
				// ✅ Select specific fields from the root
				business_id: true,
				name: true,
				active: true,
				type: true,
				description: true,
				telephone: true,
				working_hours: true,
				seats: true,
				minimum_order: true,
				offers_daily_meals: true,
				daily_meals_days: true,
				daily_meals_delivery_mapping: true,
				maximum_daily_meals_subscribers: true,
				popular: true,
				new: true,
				restaurant_overwhelmed: true,
				address: true, // Full object
				delivery_address: true, // Full object
				business_local_locations: {
					where: {
						time: {
							gte: tomorrow,
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
				menus: {
					where: {
						active: true,
					},
					include: {
						categories: {
							orderBy: {
								menu_order_index: 'asc',
							},
							include: {
								menu_categories_categories: {
									include: {
										category: true,
									},
								},
								menu_items: {
									orderBy: {
										menu_category_order_index: 'asc',
									},
									include: {
										documents: {
											include: {
												files: true,
											},
										},
										tax_rate: true,
									},
									where: {
										stock: {
											gt: 0, // Only include items with stock greater than 0
										},
										is_enabled: true, // Only include enabled items
									},
								},
							},
						},
					},
				},
			},
		});
		// for (let menu of business.menus) {
		// 	let order = menu.menu_categories_ordered;
		// 	if (order) {
		// 		order = order.split(",").map(String);
		// 		menu.categories = order.map((id) => menu.categories.find((cat) => cat.category_id === id));
		// 	}
		// }
		return business;
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
 * List businesses by type(s), returning only main information.
 *
 * @param {string|string[]} type - One or more business types.
 * @returns {Promise<object[]>} A promise resolving to matching businesses.
 */
const getBusinessesByTypeMainInformation = async (type) => {
	if (!Array.isArray(type)) {
		type = [type];
	}
	try {
		return await prisma.business.findMany({
			where: {
				type: {
					in: type,
				},
			},
		});
	} catch (error) {
		console.error(`Error retrieving businesses by type ${type}:`, error);
		throw new Error(error);
	}
};
/**
 * List businesses by type(s) with rich related data, optionally filtered by extra args.
 *
 * @param {string|string[]} type - One or more business types.
 * @param {object} [args={}] - Additional Prisma where/ordering filters.
 * @returns {Promise<object[]>} A promise resolving to matching businesses with related data.
 */
const getBusinessesByType = async (type, args = {}) => {
	if (!Array.isArray(type)) {
		type = [type];
	}
	try {
		const includeOptions = {
			address: true,
			delivery_address: true,
			business_users: {
				include: {
					users: true,
				},
			},
			business_clients: true,
			parent_business: true,
			child_businesses: true,
		};
		if (
			type.includes(Constants.BUSINESS_TYPE.MERCHANT) ||
			type.includes(Constants.BUSINESS_TYPE.RESTAURANT) ||
			type.includes(Constants.BUSINESS_TYPE.LOCAL)
		) {
			includeOptions.menus = {
				include: {
					categories: {
						include: {
							menu_items: {
								include: {
									documents: {
										include: {
											files: true,
										},
									},
									tax_rate: true,
								},
							},
						},
					},
				},
			};
		}
		const businesses = await prisma.business.findMany({
			where: {
				type: {
					in: type,
				},
				...args,
			},
			include: includeOptions,
		});
		// Before returning, sort menus, and menu categories if applicable
		return reorderMenusAndCategories(businesses);
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
 * Retrieve the finance record associated with a business.
 *
 * @param {string} business_id - The business ID.
 * @returns {Promise<object|null>} A promise resolving to the finance record or null if none exists.
 */
const getFinanceRecordByBusinessId = async (business_id) => {
	try {
		const businessWithFinance = await prisma.business.findUnique({
			where: { business_id },
			include: {
				finances: true,
			},
		});
		if (!businessWithFinance) {
			console.log('Business not found');
			return null;
		}
		if (!businessWithFinance.finances) {
			console.log('No finance record found for the specified business');
			return null;
		}
		return businessWithFinance.finances;
	} catch (error) {
		console.error('Error retrieving finance record by business ID:', error);
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
 * Update the finances entity linked to a business.
 *
 * @param {string} business_id - The business ID whose finance record should be updated.
 * @param {object} financesData - Fields to update on the finance record.
 * @returns {Promise<object>} A promise resolving to the updated finance record.
 */
const updateBusinessFinances = async (business_id, financesData) => {
	try {
		// First, retrieve the finance record associated with the business
		const business = await prisma.business.findUnique({
			where: { business_id },
			select: { finance_id: true }, // Select only the finance_id
		});
		if (!business || !business.finance_id) {
			throw new Error('No finance record found for the specified business');
		}
		// Use the upsert method to handle finance creation or retrieval
		const updatedFinances = await prisma.finances.update({
			where: {
				finance_id: business.finance_id, // Use the finance_id to find the record
			},
			data: {
				...financesData, // Update the existing finance record with new data
			},
		});
		return updatedFinances; // Return the updated finance record
	} catch (error) {
		console.error('Error updating business finances:', error);
		throw new Error(error);
	}
};
/**
 * Update the business type.
 *
 * @param {string} business_id - The business ID.
 * @param {string} type - New business type.
 * @returns {Promise<object>} A promise resolving to the updated business.
 */
const updateBusinessType = async (business_id, type) => {
	try {
		return await prisma.business.update({
			where: { business_id },
			data: { type },
		});
	} catch (error) {
		console.error('Error updating business type:', error);
		throw new Error(error);
	}
};
/**
 * Update whether the business is a business unit.
 *
 * @param {string} business_id - The business ID.
 * @param {boolean} is_business_unit - New flag value.
 * @returns {Promise<object>} A promise resolving to the updated business.
 */
const updateIsBusinessUnit = async (business_id, is_business_unit) => {
	try {
		return await prisma.business.update({
			where: { business_id },
			data: { is_business_unit },
		});
	} catch (error) {
		console.error('Error updating is_business_unit:', error);
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
 * Update the restaurant_overwhelmed flag for a business.
 *
 * @param {string} business_id - The business ID.
 * @param {boolean} restaurant_overwhelmed - Whether the restaurant is overwhelmed.
 * @returns {Promise<object>} A promise resolving to the updated business.
 */
const updateRestaurantOverwhelmed = async (business_id, restaurant_overwhelmed) => {
	try {
		return await prisma.business.update({
			where: { business_id },
			data: { restaurant_overwhelmed },
		});
	} catch (error) {
		console.error('Error updating business overwhelmed:', error);
		throw new Error(error);
	}
};
/**
 * Update the "new" flag for a business.
 *
 * @param {string} business_id - The business ID.
 * @param {boolean} isNew - Whether the business is new.
 * @returns {Promise<object>} A promise resolving to the updated business.
 */
const updateBusinessIsNew = async (business_id, isNew) => {
	try {
		return await prisma.business.update({
			where: { business_id },
			data: { new: isNew }, // Use 'new' property directly since 'new' is a reserved keyword in JavaScript, hence 'isNew' parameter name
		});
	} catch (error) {
		console.error('Error updating business new status:', error);
		throw new Error(error);
	}
};
/**
 * Update the "popular" flag for a business.
 *
 * @param {string} business_id - The business ID.
 * @param {boolean} popular - Whether the business is popular.
 * @returns {Promise<object>} A promise resolving to the updated business.
 */
const updateBusinessIsPopular = async (business_id, popular) => {
	try {
		return await prisma.business.update({
			where: { business_id },
			data: { popular },
		});
	} catch (error) {
		console.error('Error updating business popularity:', error);
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
 * Set the parent business for a business.
 *
 * @param {string} business_id - Child business ID.
 * @param {string} parent_business_id - Parent business ID.
 * @returns {Promise<object>} A promise resolving to the updated business.
 */
const updateParentBusiness = async (business_id, parent_business_id) => {
	try {
		return await prisma.business.update({
			where: { business_id },
			data: { parent_business_id },
		});
	} catch (error) {
		console.error('Error updating parent business:', error);
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
 * Add or connect an address to a business (upsert address by unique fields).
 *
 * @param {string} business_id - The business ID.
 * @param {object} addressData - Address fields used for upsert and connect.
 * @returns {Promise<object>} A promise resolving to the updated business.
 */
const addBusinessAddress = async (business_id, addressData) => {
	try {
		// Use the upsert method to handle address creation or retrieval
		const addressToUse = await prisma.addresses.upsert({
			where: {
				uniqueAddressIdentifier: {
					address: addressData.address,
					latitude: addressData.latitude,
					longitude: addressData.longitude,
				},
			},
			update: addressData,
			create: addressData,
		});
		// Update the business with the address
		return await prisma.business.update({
			where: { business_id },
			data: {
				address: {
					connect: {
						address_id: addressToUse.address_id,
					},
				},
			},
		});
	} catch (error) {
		console.error('Error adding business address:', error);
		throw new Error(error);
	}
};
/**
 * Add or connect a delivery address to a business (upsert address by unique fields).
 *
 * @param {string} business_id - The business ID.
 * @param {object} addressData - Address fields used for upsert and connect.
 * @returns {Promise<object>} A promise resolving to the updated business.
 */
const addDeliveryAddress = async (business_id, addressData) => {
	try {
		// Use the upsert method to handle address creation or retrieval
		const addressToUse = await prisma.addresses.upsert({
			where: {
				uniqueAddressIdentifier: {
					address: addressData.address,
					latitude: addressData.latitude,
					longitude: addressData.longitude,
				},
			},
			update: addressData,
			create: addressData,
		});
		// Update the business with the delivery address
		return await prisma.business.update({
			where: { business_id },
			data: {
				delivery_address: {
					connect: {
						address_id: addressToUse.address_id,
					},
				},
			},
		});
	} catch (error) {
		console.error('Error adding delivery address:', error);
		throw new Error(error);
	}
};
/**
 * Update a business's main address by creating or using an existing address.
 *
 * @param {string} business_id - The business ID.
 * @param {object} address - Address data to add/connect.
 * @returns {Promise<object>} A promise resolving to the updated business.
 */
async function updateBusinessAddress(business_id, address) {
	try {
		const updatedAddress = await AddressDao.addAddress(address);
		if (!updatedAddress) {
			throw new Error('Failed to update or add address');
		}
		return await prisma.business.update({
			where: { business_id },
			data: { address_id: updatedAddress.address_id },
		});
	} catch (error) {
		console.error('Error updating business address:', error);
		throw new Error(error);
	}
}
/**
 * Update a business's delivery address by creating or using an existing address.
 *
 * @param {string} business_id - The business ID.
 * @param {object} deliveryAddress - Address data to add/connect as delivery address.
 * @returns {Promise<object>} A promise resolving to the updated business.
 */
async function updateBusinessDeliveryAddress(business_id, deliveryAddress) {
	try {
		const updatedDeliveryAddress = await AddressDao.addAddress(deliveryAddress);
		if (!updatedDeliveryAddress) {
			throw new Error('Failed to update or add delivery address');
		}
		// Update the business with the new delivery_address_id
		return await prisma.business.update({
			where: { business_id },
			data: { delivery_address_id: updatedDeliveryAddress.address_id },
		});
	} catch (error) {
		console.error('Error updating business delivery address:', error);
		throw new Error(error);
	}
}
/**
 * Remove the delivery address relationship from a business.
 *
 * @param {string} business_id - The business ID.
 * @returns {Promise<object>} A promise resolving to the updated business.
 */
const removeBusinessDeliveryAddress = async (business_id) => {
	try {
		return await prisma.business.update({
			where: { business_id },
			data: { delivery_address_id: null },
		});
	} catch (error) {
		console.error('Error removing business delivery address:', error);
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
		return await prisma.business.update({
			where: { business_id: businessId },
			data: { daily_users_sorting_type: type },
		});
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
		return await prisma.business.update({
			where: { business_id: businessId },
			data: { daily_users_sorted: [...sorted_users] },
		});
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
 * Get users scheduled for daily meals for a given business (based on daily_users_sorted).
 *
 * @param {string} businessId - The business ID.
 * @returns {Promise<object[]>} A promise resolving to an array of user records with addresses.
 */
const getScheduledUsersByBusinessId = async (businessId) => {
	try {
		const business = await prisma.business.findUnique({
			where: {
				business_id: businessId,
				offers_daily_meals: true,
			},
		});
		if (!business) {
			throw new Error('Business not found or does not offer daily meals');
		}
		return await prisma.users.findMany({
			where: {
				subscribed_to_daily_meals: true,
				user_id: {
					in: business.daily_users_sorted || [],
				},
			},
			include: {
				addresses: {
					include: {
						address: true,
					},
				},
			},
		});
	} catch (error) {
		console.error('Error fetching scheduled users:', error);
		throw error;
	}
};
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
			include: { business_users: true, business_clients: true },
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
							in: business.business_clients.map((client) => client.business_clients_id),
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
export { getScheduledUsersByBusinessId };
export { getBusinesses };
export { getBusinessById };
export { getBusinessByEmail };
export { getBusinessByTelephone };
export { getBusinessesByType };
export { getBusinessesByNameSearch };
export { getBusinessesByGroupName };
export { getChildBusinesses };
export { getParentBusiness };
export { getFinanceRecordByBusinessId };
export { createNewBusiness };
export { addBusinessAddress };
export { addDeliveryAddress };
export { updateBusiness };
export { deleteBusiness };
export { updateBusinessAddress };
export { updateBusinessType };
export { updateIsBusinessUnit };
export { updateBusinessGroupName };
export { updateBusinessEmail };
export { updateBusinessTelephone };
export { updateBusinessWorkingHours };
export { updateRestaurantOverwhelmed };
export { updateBusinessIsNew };
export { updateBusinessIsPopular };
export { updateParentBusiness };
export { removeParentBusiness };
export { updateBusinessDeliveryAddress };
export { removeBusinessDeliveryAddress };
export { addScheduledUserSortingType };
export { manualSortScheduledUsers };
export { getBusinessesByTypeMainInformation };
export { updateBusinessFinances };
export { getBusinessStripeByBusinessId };
export { getStripeIdsForAllBusinesses };
export { getBusinessesForSearchById };
export { activateBusiness };
export { deactivateBusiness };
export { getBusinessForSearchById };
export { getBusinessAdminDataById };
export { getPurchaseOrderLimit };
export default {
	getScheduledUsersByBusinessId,
	getBusinesses,
	getBusinessById,
	getBusinessByEmail,
	getBusinessByTelephone,
	getBusinessesByType,
	getBusinessesByNameSearch,
	getBusinessesByGroupName,
	getChildBusinesses,
	getParentBusiness,
	getFinanceRecordByBusinessId,
	createNewBusiness,
	addBusinessAddress,
	addDeliveryAddress,
	updateBusiness,
	deleteBusiness,
	updateBusinessAddress,
	updateBusinessType,
	updateIsBusinessUnit,
	updateBusinessGroupName,
	updateBusinessEmail,
	updateBusinessTelephone,
	updateBusinessWorkingHours,
	updateRestaurantOverwhelmed,
	updateBusinessIsNew,
	updateBusinessIsPopular,
	updateParentBusiness,
	removeParentBusiness,
	updateBusinessDeliveryAddress,
	removeBusinessDeliveryAddress,
	addScheduledUserSortingType,
	manualSortScheduledUsers,
	getBusinessesByTypeMainInformation,
	updateBusinessFinances,
	getBusinessStripeByBusinessId,
	getStripeIdsForAllBusinesses,
	getBusinessesForSearchById,
	activateBusiness,
	deactivateBusiness,
	getBusinessForSearchById,
	getBusinessAdminDataById,
	getPurchaseOrderLimit,
};
