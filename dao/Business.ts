import { ACCOUNT_ACTIONS, ACCOUNT_ACTIONS_REASON, Prisma, MODULE } from '@prisma/client';

import prisma from '../prisma/prisma.js';
import { BUSINESS_TYPE } from '../lib/constants.js';
import type {
	BusinessBase,
	BusinessResponseDto,
	BusinessSearchResponse,
	BusinessAdminResponse,
	BusinessWithDailyMealsResponseDto,
	BusinessWithAllModulesResponseDto,
} from '../schemas/dto/Business/index.js';
import { UUID } from '../schemas/primitives.js';
import { toBusinessByIdResponse, toGetBusinessResponse } from '../schemas/dto/Business/index.js';
import { parseBusinessWithDailyMeals } from '../schemas/dto/Business/business.mappers.js';
import { businessByIdInclude, getBusinessesInclude, BusinessFindManyArgs } from '../prisma/includes/business.js';

type PrismaTransactionClient = Prisma.TransactionClient;

/**
 * Get a list of businesses with optional query/include arguments.
 *
 * @param {any} args - Additional Prisma query arguments (where, orderBy, include, etc.).
 * @returns {Promise<BusinessResponse[]>} A promise resolving to an array of business records.
 */
const getBusinesses = async (args?: BusinessFindManyArgs): Promise<BusinessResponseDto[]> => {
	try {
		const include = {
			...getBusinessesInclude,
			...(args?.include ?? {}),
		} as Prisma.businessInclude; // single, contained cast

		const { include: _ignored, ...rest } = args ?? {};

		const rows = await prisma.business.findMany({
			...rest,
			include,
		});

		return rows.map(toGetBusinessResponse);
	} catch (error) {
		// centralize logging message, don’t leak internals
		console.error('Error retrieving businesses:', error);
		throw new Error(error instanceof Error ? error.message : 'Failed to get businesses');
	}
};

/**
 * Get businesses that offer daily meals along with their daily meal drivers.
 *
 * @returns {Promise<BusinessWithDailyMealsResponseDto[]>} A promise resolving to an array of businesses with daily meal drivers.
 */
const getDailyMealBusinesses = async (): Promise<BusinessWithDailyMealsResponseDto[]> => {
	try {
		const businesses = await prisma.business.findMany({
			where: {
				daily_meals_module: {
					isNot: null,
				},
			},
			include: {
				daily_meals_module: {
					include: {
						daily_meal_drivers: true,
					},
				},
			},
		});
		return businesses.map((business: any) => parseBusinessWithDailyMeals(business));
	} catch (error) {
		console.error('Error retrieving daily meal businesses:', error);
		throw new Error(error instanceof Error ? error.message : 'Failed to get daily meal businesses');
	}
};

/**
 * Get a single business by its ID with rich related data.
 *
 * @param {string} business_id - The ID of the business to retrieve.
 * @returns {Promise<BusinessWithAllModulesResponseDto | null>} A promise resolving to the business record or null if not found.
 */
const getBusinessById = async (business_id: string): Promise<BusinessWithAllModulesResponseDto | null> => {
	try {
		const business = await prisma.business.findUnique({
			where: {
				business_id: business_id,
			},
			include: businessByIdInclude,
		});
		if (!business) return null;

		return toBusinessByIdResponse(business);
	} catch (error) {
		console.error('Error retrieving business:', error);
		throw new Error(error instanceof Error ? error.message : 'Failed to get business by ID');
	}
};

/**
 * Get a business by ID with admin-focused related data (users, words, promos, etc.).
 *
 * @param {string} business_id - The ID of the business to retrieve.
 * @returns {Promise<BusinessAdminResponse | null>} A promise resolving to the admin business record or null if not found.
 */
const getBusinessAdminDataById = async (business_id: string): Promise<BusinessAdminResponse | null> => {
	try {
		return (await prisma.business.findUnique({
			where: {
				business_id: business_id,
			},
			include: {
				address: true,
				business_users: {
					include: {
						users: true,
					},
				},
				words: true,
				promo: true,
				parent_business: true,
				child_businesses: true,
			},
		})) as BusinessAdminResponse | null;
	} catch (error) {
		console.error('Error retrieving business admin data:', error);
		throw new Error(error instanceof Error ? error.message : 'Failed to get business admin data');
	}
};

/**
 * Get a business by ID for search purposes with minimal data.
 *
 * @param {string} business_id - The ID of the business to retrieve.
 * @returns {Promise<BusinessSearchResponse[] | []>} A promise resolving to the search business record or null if not found.
 */
const getBusinessesForSearchById = async (business_id: string): Promise<BusinessSearchResponse[] | []> => {
	try {
		return (await prisma.business.findUnique({
			where: {
				business_id: business_id,
			},
			select: {
				business_id: true,
				name: true,
				description: true,
				email: true,
				telephone: true,
				website_url: true,
				active: true,
				popular: true,
				new: true,
				address: true,
			},
		})) as BusinessSearchResponse[] | [];
	} catch (error) {
		console.error('Error retrieving business for search:', error);
		throw new Error(error instanceof Error ? error.message : 'Failed to get business for search');
	}
};

/**
 * Find a business by email.
 *
 * @param {string} email - The email to search for.
 * @returns {Promise<BusinessResponseDto | null>} A promise resolving to the business record or null if not found.
 */
const getBusinessByEmail = async (email: string): Promise<BusinessResponseDto | null> => {
	try {
		return (await prisma.business.findFirst({
			where: {
				email: email,
			},
			include: {
				address: true,
				business_users: true,
			},
		})) as BusinessResponseDto | null;
	} catch (error) {
		console.error('Error retrieving business by email:', error);
		throw new Error(error instanceof Error ? error.message : 'Failed to get business by email');
	}
};

/**
 * Search businesses by name.
 *
 * @param {string} search - The search term.
 * @returns {Promise<BusinessSearchResponse[]>} A promise resolving to matching businesses.
 */
const getBusinessesByNameSearch = async (search: string): Promise<BusinessSearchResponse[]> => {
	try {
		return (await prisma.business.findMany({
			where: {
				name: {
					contains: search,
					mode: 'insensitive',
				},
			},
			select: {
				business_id: true,
				name: true,
				description: true,
				email: true,
				telephone: true,
				website_url: true,
				active: true,
				popular: true,
				new: true,
				address: true,
			},
		})) as BusinessSearchResponse[];
	} catch (error) {
		console.error('Error searching businesses by name:', error);
		throw new Error(error instanceof Error ? error.message : 'Failed to search businesses by name');
	}
};

/**
 * Search businesses by group name.
 *
 * @param {string} search - The search term.
 * @returns {Promise<BusinessResponseDto[]>} A promise resolving to matching businesses.
 */
const getBusinessesByGroupName = async (search: string): Promise<BusinessResponseDto[]> => {
	try {
		return (await prisma.business.findMany({
			where: {
				business_group_name: {
					contains: search,
					mode: 'insensitive',
				},
			},
			include: {
				address: true,
				business_users: true,
			},
		})) as BusinessResponseDto[];
	} catch (error) {
		console.error('Error searching businesses by group name:', error);
		throw new Error(error instanceof Error ? error.message : 'Failed to search businesses by group name');
	}
};

/**
 * Get transfer businesses main information.
 *
 * @returns {Promise<BusinessResponse[]>} A promise resolving to transfer businesses.
 */
const getTransferBusinessesMainInformation = async (): Promise<BusinessResponseDto[]> => {
	try {
		const rows = await prisma.business.findMany({
			where: {
				transport_module: { isNot: null },
			},
			include: {
				address: true,
			},
		});
		// Validate/shape results through the Business mapper
		return rows.map(toGetBusinessResponse);
	} catch (error) {
		console.error('Error retrieving transfer businesses:', error);
		throw new Error(error instanceof Error ? error.message : 'Failed to get transfer businesses');
	}
};

/**
 * Get stores main information.
 *
 * @returns {Promise<BusinessResponse[]>} A promise resolving to store businesses.
 */
const getStoresMainInformation = async (): Promise<BusinessResponseDto[]> => {
	try {
		const rows = await prisma.business.findMany({
			where: {
				stores_module: { isNot: null },
			},
			include: {
				address: true,
			},
		});
		return rows.map(toGetBusinessResponse);
	} catch (error) {
		console.error('Error retrieving stores:', error);
		throw new Error(error instanceof Error ? error.message : 'Failed to get stores');
	}
};

/**
 * Get food & drinks businesses main information.
 *
 * @returns {Promise<BusinessResponse[]>} A promise resolving to food & drinks businesses.
 */
const getFoodDrinksMainInformation = async (): Promise<BusinessResponseDto[]> => {
	try {
		const rows = await prisma.business.findMany({
			where: {
				food_drinks_module: { isNot: null },
			},
			include: {
				address: true,
			},
		});
		return rows.map(toGetBusinessResponse);
	} catch (error) {
		console.error('Error retrieving food & drinks businesses:', error);
		throw new Error(error instanceof Error ? error.message : 'Failed to get food & drinks businesses');
	}
};

/**
 * Get businesses by type with optional additional arguments.
 *
 * @param {string} type - The business type.
 * @param {any} args - Additional Prisma query arguments.
 * @returns {Promise<BusinessResponseDto[]>} A promise resolving to businesses of the specified type.
 */
const getBusinessesByType = async (type: string, args: any = {}): Promise<BusinessResponseDto[]> => {
	try {
		const typeMapping: Record<string, any> = {
			MERCHANT: { food_drinks_module: { isNot: null } },
			TRANSFER: { transport_module: { isNot: null } },
			STORE: { stores_module: { isNot: null } },
		};

		const whereClause = typeMapping[type];
		if (!whereClause) {
			throw new Error(`Unknown business type: ${type}`);
		}

		const rows = await prisma.business.findMany({
			where: {
				...whereClause,
				...args.where,
			},
			include: {
				address: true,
				business_users: {
					include: {
						users: true,
					},
				},
				parent_business: true,
				child_businesses: true,
				...args.include,
			},
			...args,
		});
		return rows.map(toGetBusinessResponse);
	} catch (error) {
		console.error('Error retrieving businesses by type:', error);
		throw new Error(error instanceof Error ? error.message : 'Failed to get businesses by type');
	}
};

/**
 * Get parent business information.
 *
 * @param {string} business_id - The ID of the business whose parent to retrieve.
 * @returns {Promise<BusinessResponseDto | null>} A promise resolving to the parent business or null if none.
 */
const getParentBusiness = async (business_id: string): Promise<BusinessResponseDto | null> => {
	try {
		const business = await prisma.business.findUnique({
			where: { business_id },
			select: { parent_business_id: true },
		});

		if (!business?.parent_business_id) return null;

		const parent = await prisma.business.findUnique({
			where: { business_id: business.parent_business_id },
			include: {
				address: true,
				business_users: true,
			},
		});
		return parent ? toGetBusinessResponse(parent) : null;
	} catch (error) {
		console.error('Error retrieving parent business:', error);
		throw new Error(error instanceof Error ? error.message : 'Failed to get parent business');
	}
};

/**
 * Get child businesses of a parent business.
 *
 * @param {string} parent_business_id - The ID of the parent business.
 * @returns {Promise<BusinessResponseDto[]>} A promise resolving to child businesses.
 */
const getChildBusinesses = async (parent_business_id: string): Promise<BusinessResponseDto[]> => {
	try {
		const rows = await prisma.business.findMany({
			where: {
				parent_business_id: parent_business_id,
			},
			include: {
				address: true,
				business_users: true,
			},
		});
		return rows.map(toGetBusinessResponse);
	} catch (error) {
		console.error('Error retrieving child businesses:', error);
		throw new Error(error instanceof Error ? error.message : 'Failed to get child businesses');
	}
};

// Re-export include shapes and types for external mappers/controllers that need to build queries
export { businessByIdInclude, getBusinessesInclude };
export type { BusinessFindManyArgs };

/**
 * Update a business with new data.
 *
 * @param {string} business_id - The ID of the business to update.
 * @param {Partial<BusinessBase>} businessData - The business data to update.
 * @returns {Promise<BusinessResponseDto>} A promise resolving to the updated business.
 */
const updateBusiness = async (
	business_id: string,
	businessData: Partial<BusinessBase>
): Promise<BusinessResponseDto> => {
	try {
		// Remove fields that shouldn't be updated directly
		const updateData = { ...businessData };
		delete updateData.business_id;
		delete updateData.created_at;
		delete updateData.updated_at;

		return (await prisma.business.update({
			where: { business_id },
			data: updateData,
			include: {
				address: true,
				business_users: true,
			},
		})) as BusinessResponseDto;
	} catch (error) {
		console.error('Error updating business:', error);
		throw new Error(error instanceof Error ? error.message : 'Failed to update business');
	}
};

/**
 * Update business group name.
 *
 * @param {string} business_id - The ID of the business to update.
 * @param {string} business_group_name - The new group name.
 * @returns {Promise<BusinessResponseDto>} A promise resolving to the updated business.
 */
const updateBusinessGroupName = async (
	business_id: string,
	business_group_name: string
): Promise<BusinessResponseDto> => {
	try {
		return (await prisma.business.update({
			where: { business_id },
			data: { business_group_name },
		})) as BusinessResponseDto;
	} catch (error) {
		console.error('Error updating business group name:', error);
		throw new Error(error instanceof Error ? error.message : 'Failed to update business group name');
	}
};

/**
 * Update business email.
 *
 * @param {string} business_id - The ID of the business to update.
 * @param {string} email - The new email.
 * @returns {Promise<BusinessResponseDto>} A promise resolving to the updated business.
 */
const updateBusinessEmail = async (business_id: string, email: string): Promise<BusinessResponseDto> => {
	try {
		return (await prisma.business.update({
			where: { business_id },
			data: { email },
		})) as BusinessResponseDto;
	} catch (error) {
		console.error('Error updating business email:', error);
		throw new Error(error instanceof Error ? error.message : 'Failed to update business email');
	}
};

/**
 * Update business telephone.
 *
 * @param {string} business_id - The ID of the business to update.
 * @param {string} telephone - The new telephone.
 * @param {string} telephone_code - The new telephone code.
 * @returns {Promise<BusinessResponseDto>} A promise resolving to the updated business.
 */
const updateBusinessTelephone = async (
	business_id: string,
	telephone: string,
	telephone_code: string
): Promise<BusinessResponseDto> => {
	try {
		return (await prisma.business.update({
			where: { business_id },
			data: { telephone, telephone_code },
		})) as BusinessResponseDto;
	} catch (error) {
		console.error('Error updating business telephone:', error);
		throw new Error(error instanceof Error ? error.message : 'Failed to update business telephone');
	}
};

/**
 * Update business working hours.
 *
 * @param {string} business_id - The ID of the business to update.
 * @param {Record<string, any>} working_hours - The new working hours.
 * @returns {Promise<BusinessResponseDto>} A promise resolving to the updated business.
 */
const updateBusinessWorkingHours = async (
	business_id: string,
	working_hours: Record<string, any>
): Promise<BusinessResponseDto> => {
	try {
		return (await prisma.business.update({
			where: { business_id },
			data: { working_hours },
		})) as BusinessResponseDto;
	} catch (error) {
		console.error('Error updating business working hours:', error);
		throw new Error(error instanceof Error ? error.message : 'Failed to update business working hours');
	}
};

/**
 * Create a new business.
 *
 * @param {Partial<BusinessBase>} business - The business data.
 * @param {any} tx - Transaction client (optional).
 * @returns {Promise<BusinessResponseDto>} A promise resolving to the created business.
 */
const createNewBusiness = async (business: Partial<BusinessBase>, tx: any = prisma): Promise<BusinessResponseDto> => {
	try {
		// Remove fields that shouldn't be set on creation
		const createData = { ...business };
		delete createData.business_id;
		delete createData.created_at;
		delete createData.updated_at;

		return (await tx.business.create({
			data: createData,
			include: {
				address: true,
				business_users: true,
			},
		})) as BusinessResponseDto;
	} catch (error) {
		console.error('Error creating new business:', error);
		throw new Error(error instanceof Error ? error.message : 'Failed to create new business');
	}
};

/**
 * Delete a business by ID.
 *
 * @param {string} business_id - The business ID to delete.
 * @returns {Promise<BusinessResponseDto>} A promise resolving to the deleted business.
 */
const deleteBusiness = async (business_id: string): Promise<BusinessResponseDto> => {
	try {
		return (await prisma.business.delete({
			where: { business_id },
		})) as BusinessResponseDto;
	} catch (error) {
		console.error('Error deleting business:', error);
		throw new Error(error instanceof Error ? error.message : 'Failed to delete business');
	}
};

/**
 * Remove the parent relationship from a business.
 *
 * @param {string} business_id - The business ID.
 * @returns {Promise<BusinessResponseDto>} A promise resolving to the updated business.
 */
const removeParentBusiness = async (business_id: string): Promise<BusinessResponseDto> => {
	try {
		return (await prisma.business.update({
			where: { business_id: business_id },
			data: { parent_business_id: null },
		})) as BusinessResponseDto;
	} catch (error) {
		console.error('Error removing child business:', error);
		throw new Error(error instanceof Error ? error.message : 'Failed to remove parent business');
	}
};

/**
 * Set the scheduled users sorting type for daily meals.
 *
 * @param {string} type - Sorting type identifier.
 * @param {string} businessId - The business ID.
 * @returns {Promise<any>} A promise resolving to the updated business.
 */
const addScheduledUserSortingType = async (type: string, businessId: string): Promise<any> => {
	try {
		const business = await getBusinessById(businessId);
		if (!business) {
			throw new Error('Business not found');
		}
		const food_drinks_id = business.food_drinks_module?.food_drinks_id;
		await prisma.daily_meals_module.update({
			where: { food_drinks_id },
			data: { daily_users_sorting_type: type },
		});
		return { ...business, daily_users_sorting_type: type };
	} catch (error) {
		console.error('Error updating scheduled users sorting type:', error);
		throw new Error(error instanceof Error ? error.message : 'Failed to add scheduled user sorting type');
	}
};

/**
 * Manually set the order of scheduled users for a business.
 *
 * @param {string[]} [sorted_users=[]] - Ordered list of user IDs.
 * @param {string} businessId - The business ID.
 * @returns {Promise<any>} A promise resolving to the updated business.
 */
const manualSortScheduledUsers = async (sorted_users: string[] = [], businessId: string): Promise<any> => {
	try {
		const business = await getBusinessById(businessId);
		if (!business) {
			throw new Error('Business not found');
		}
		const food_drinks_id = business.food_drinks_module?.food_drinks_id;
		await prisma.daily_meals_module.update({
			where: { food_drinks_id },
			data: { daily_users_sorted: [...sorted_users] },
		});
		return { ...business, daily_users_sorted: [...sorted_users] };
	} catch (error) {
		console.error('Error updating sorted scheduled users:', error);
		throw new Error(error instanceof Error ? error.message : 'Failed to manually sort scheduled users');
	}
};

/**
 * Get the Stripe account ID for a business.
 *
 * @param {string} business_id - The business ID.
 * @returns {Promise<string | null>} A promise resolving to the Stripe account ID or null.
 */
const getBusinessStripeByBusinessId = async (business_id: string): Promise<string | null> => {
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
		return business_data?.stripe_account_id || null;
	} catch (error) {
		console.error('Error retrieving business stripe ID:', error);
		throw new Error(error instanceof Error ? error.message : 'Failed to get business Stripe ID');
	}
};

/**
 * Retrieves the Stripe account IDs for all businesses from the database.
 *
 * @returns {Promise<Array<{ business_id: string, stripe_account_id: string | null }>>}
 *          A promise that resolves to an array of objects containing business IDs and their corresponding Stripe account IDs.
 */
const getStripeIdsForAllBusinesses = async (): Promise<
	Array<{ business_id: string; stripe_account_id: string | null }>
> => {
	try {
		return await prisma.business.findMany({
			select: {
				business_id: true,
				stripe_account_id: true,
			},
		});
	} catch (error) {
		console.error('Error fetching Stripe IDs for businesses:', error);
		throw new Error(error instanceof Error ? error.message : 'Failed to get Stripe IDs for all businesses');
	}
};

/**
 * Activate a business and record an UNSUSPEND account action.
 *
 * @param {string} business_id - The business ID to activate.
 * @param {string} action_creator_user_id - The user ID performing the action.
 * @param {string} reason - Reason for activation change.
 * @returns {Promise<BusinessResponseDto>} A promise resolving to the updated business.
 */
const activateBusiness = async (
	business_id: string,
	action_creator_user_id: string,
	reason: string
): Promise<BusinessResponseDto> => {
	try {
		return (await prisma.$transaction(async (tx: PrismaTransactionClient) => {
			const business = await tx.business.findUnique({
				where: { business_id },
				select: { first_activated_at: true },
			});
			const updateData: any = { active: true };
			if (!business?.first_activated_at) {
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
					reason: reason as ACCOUNT_ACTIONS_REASON,
					action: ACCOUNT_ACTIONS.UNSUSPEND as ACCOUNT_ACTIONS,
				},
			});
			return updatedBusiness;
		})) as BusinessResponseDto;
	} catch (error) {
		console.error('Error activating business:', error);
		throw new Error(error instanceof Error ? error.message : 'Failed to activate business');
	}
};

/**
 * Deactivate a business and record a SUSPEND account action.
 *
 * @param {string} business_id - The business ID to deactivate.
 * @param {string} action_creator_user_id - The user ID performing the action.
 * @param {string} reason - Reason for deactivation.
 * @returns {Promise<BusinessResponseDto>} A promise resolving to the updated business.
 */
const deactivateBusiness = async (
	business_id: string,
	action_creator_user_id: string,
	reason: string
): Promise<BusinessResponseDto> => {
	try {
		return (await prisma.$transaction(async (tx: PrismaTransactionClient) => {
			const updatedBusiness = await tx.business.update({
				where: { business_id },
				data: { active: false },
			});
			await tx.account_actions.create({
				data: {
					business: { connect: { business_id } },
					action_creator: { connect: { user_id: action_creator_user_id } },
					reason: reason as ACCOUNT_ACTIONS_REASON,
					action: ACCOUNT_ACTIONS.SUSPEND as ACCOUNT_ACTIONS,
				},
			});
			return updatedBusiness;
		})) as BusinessResponseDto;
	} catch (error) {
		console.error('Error deactivating business:', error);
		throw new Error(error instanceof Error ? error.message : 'Failed to deactivate business');
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
const getPurchaseOrderLimit = async (business_id: string): Promise<number> => {
	try {
		const business = await prisma.business.findUnique({
			where: { business_id },
			include: {
				business_users: true,
				crm_module: {
					include: {
						business_clients: true,
					},
				},
			},
		});

		if (!business) {
			throw new Error('Business not found');
		}

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
							in:
								business.crm_module?.business_clients?.map(
									(client: any) => client.business_clients_id
								) || [],
						},
					},
					{
						business_users_id: {
							in: business.business_users.map((user: any) => user.business_users_id),
						},
					},
				],
			},
			select: {
				payment: true,
			},
		});

		const totalTaxiOrders = taxiOrders.reduce(
			(acc: number, order: any) => acc + (parseFloat(order.payment?.price as string) || 0),
			0
		);
		if ((business as any).purchase_order_limit_amount > 0) {
			return Math.max(0, (business as any).purchase_order_limit_amount - totalTaxiOrders);
		}
		return 0;
	} catch (error) {
		console.error('Error retrieving purchase order limit:', error);
		throw new Error(error instanceof Error ? error.message : 'Failed to get purchase order limit');
	}
};

/**
 * Get local businesses (stores with LOCAL business type).
 *
 * @returns {Promise<BusinessResponseDto[]>} A promise resolving to local businesses.
 */
const getLocalBusinesses = async (): Promise<BusinessResponseDto[]> => {
	try {
		const stores = await prisma.business.findMany({
			where: {
				stores_module_id: {
					not: null,
				},
			},
			include: {
				address: true,
				business_users: true,
			},
		});

		return stores.filter((store: any) =>
			store.types?.some((type: string) => type === BUSINESS_TYPE.LOCAL)
		) as BusinessResponseDto[];
	} catch (error) {
		console.error('Error retrieving local businesses:', error);
		throw new Error(error instanceof Error ? error.message : 'Failed to get local businesses');
	}
};

/**
 * Get a single business by its ID with rich related data.
 *
 * @param {string} business_id - The ID of the business to retrieve.
 * @returns {Promise<any | null>} A promise resolving to the business record or null if not found.
 */
const getBusinessStoreAndFoodDrinksModulesById = async (business_id: string): Promise<any | null> => {
	try {
		const business = await prisma.business.findUnique({
			where: {
				business_id: business_id,
			},
			include: {
				stores_module: true,
				food_drinks_module: true,
			},
		});

		if (!business) return null;
		return business;
	} catch (error) {
		console.error('Error retrieving business:', error);
		throw new Error(error instanceof Error ? error.message : 'Failed to get business by ID');
	}
};
/**
 * Resolve a module entry for a business and return the selected module payload.
 *
 * @param {string} business_id - Business UUID to lookup.
 * @param {MODULE} module - MODULE enum value indicating which module to resolve
 *                          (e.g. MODULE.STORES, MODULE.FOOD_DRINKS, MODULE.RESERVATIONS, etc.).
 * @returns {Promise<any|null>} Promise resolving to the selected nested module object (as returned by Prisma)
 *                             or null if the business/module is not found.
 */
const getModuleIdByBusinessId = async (business_id: UUID, module: MODULE) => {
	try {
		let moduleCondition;
		if (module === MODULE.STORES) {
			moduleCondition = {
				store_module: {
					select: {
						stores_id: true,
					},
				},
			};
		} else if (module === MODULE.FOOD_DRINKS) {
			moduleCondition = {
				food_drinks_module: {
					select: {
						food_drinks_module_id: true,
					},
				},
			};
		} else if (module === MODULE.RESERVATIONS) {
			moduleCondition = {
				reservation_module: {
					select: {
						reservation_module_id: true,
					},
				},
			};
		} else if (module === MODULE.TRANSPORT) {
			moduleCondition = {
				transport_module: {
					select: {
						transport_module_id: true,
					},
				},
			};
		} else if (module === MODULE.DAILY_MEALS) {
			moduleCondition = {
				daily_meals_module: {
					select: {
						id: true,
					},
				},
			};
		} else if (module === MODULE.TABLE_RESERVATION) {
			moduleCondition = {
				table_reservation_module: {
					select: {
						id: true,
					},
				},
			};
		}

		return await prisma.business.findFirst({
			where: {
				business_id: business_id,
			},
			select: moduleCondition,
		});
	} catch (error) {
		console.error('Error getting module ID by business ID:', error);
		throw new Error(error instanceof Error ? error.message : 'Failed to get module ID by business ID');
	}
};

export { getBusinesses };
export { getDailyMealBusinesses };
export { getBusinessById };
export { getBusinessAdminDataById };
export { getBusinessesForSearchById };
export { getBusinessByEmail };
export { getBusinessesByNameSearch };
export { getBusinessesByGroupName };
export { getTransferBusinessesMainInformation };
export { getStoresMainInformation };
export { getFoodDrinksMainInformation };
export { getBusinessesByType };
export { getParentBusiness };
export { getChildBusinesses };
export { updateBusiness };
export { updateBusinessGroupName };
export { updateBusinessEmail };
export { updateBusinessTelephone };
export { updateBusinessWorkingHours };
export { createNewBusiness };
export { deleteBusiness };
export { removeParentBusiness };
export { addScheduledUserSortingType };
export { manualSortScheduledUsers };
export { getBusinessStripeByBusinessId };
export { getStripeIdsForAllBusinesses };
export { activateBusiness };
export { deactivateBusiness };
export { getPurchaseOrderLimit };
export { getLocalBusinesses };
export { getBusinessStoreAndFoodDrinksModulesById };
export { getModuleIdByBusinessId };

export default {
	getBusinesses,
	getDailyMealBusinesses,
	getBusinessById,
	getBusinessAdminDataById,
	getBusinessesForSearchById,
	getBusinessByEmail,
	getBusinessesByNameSearch,
	getBusinessesByGroupName,
	getTransferBusinessesMainInformation,
	getStoresMainInformation,
	getFoodDrinksMainInformation,
	getBusinessesByType,
	getParentBusiness,
	getChildBusinesses,
	updateBusiness,
	updateBusinessGroupName,
	updateBusinessEmail,
	updateBusinessTelephone,
	updateBusinessWorkingHours,
	createNewBusiness,
	deleteBusiness,
	removeParentBusiness,
	addScheduledUserSortingType,
	manualSortScheduledUsers,
	getBusinessStripeByBusinessId,
	getStripeIdsForAllBusinesses,
	activateBusiness,
	deactivateBusiness,
	getPurchaseOrderLimit,
	getLocalBusinesses,
	getBusinessStoreAndFoodDrinksModulesById,
	getModuleIdByBusinessId,
};
