import {
	BusinessResponseDto,
	BusinessWithIncludesResponseDto,
	BusinessWithAddressAndUsersResponseDto,
} from './business.dto.js';
import { BusinessAdminResponseSchema } from './business.js';
import type {
	BusinessWithAllModulesResponseDto,
	BusinessResponseDto as BusinessResponseType,
	CrmModule,
	DailyMealsModule,
} from './business.dto.js';
import type {
	GetBusinessesPrisma,
	BusinessByIdPrisma,
	BusinessWithAddressAndUsersPrisma,
	BusinessAdminPrisma,
	BusinessWithAddressPrisma,
} from '../../../prisma/includes/business.ts';
import { BusinessWithDailyMealsResponseDto } from './business.dto.js';
import type { BusinessWithDailyMealsResponseDto as BusinessWithDailyMealsResponseType } from './business.dto.js';
import { toAddressResponse } from '../Address/address.mappers.ts';
import { toBusinessUserResponse } from '../BusinessUser/businessUser.mappers.ts';
import { toTransportModuleRef } from '../Transport/transport.mappers.ts';
import { toFoodDrinksRef } from '../FoodDrinks/foodDrinks.mappers.ts';
import { toStoreDetail } from '../Stores/store.mappers.ts';
import { toReservationModuleRef } from '../reservations/reservation-module/reservation-module.mappers.ts';
import { toBusinessClientResponse } from '../BusinessClient/businessClient.mappers.ts';
import { toTableReservationDetail } from '../TableReservation/tableReservation.mappers.ts';
import { toTableReservationModuleRef } from '../TableReservation/tableReservationsModule.mappers.ts';
import { toBusinessLocalLocationDetail } from '../Stores/localLocation.mappers.ts';
import { toDailyMealMenuList } from '../Menu/menu.mappers.ts';
import { toDriverRefOut } from '../Vehicles/vehicle.mappers.ts';

// Map a lightweight GetBusinessesPrisma payload to the public BusinessResponseDto
export function toGetBusinessResponse(row: GetBusinessesPrisma): BusinessResponseType {
	const r = row as GetBusinessesPrisma;
	const asRec = r as Record<string, any>;

	const businessDetails = asRec.business_details ?? {
		name: asRec.name ?? null,
		description: asRec.description ?? null,
		logo: asRec.logo?.url ?? null,
		banner: asRec.banner?.url ?? null,
	};

	return BusinessResponseDto.parse({
		business_id: r.business_id,
		business_details: businessDetails,
		tax_id: asRec.tax_id ?? null,
		registration_id: asRec.registration_id ?? null,
		email: asRec.email ?? null,
		telephone: asRec.telephone ?? null,
		telephone_code: asRec.telephone_code ?? null,
		website_url: asRec.website_url ?? null,
		working_hours: asRec.working_hours ?? null,
		is_business_unit: asRec.is_business_unit ?? null,
		business_group_name: asRec.business_group_name ?? null,
		parent_business_id: asRec.parent_business_id ?? null,
		stripe_account_id: asRec.stripe_account_id ?? null,
		stripe_customer_id: asRec.stripe_customer_id ?? null,
		word_buy_stripe_subscription_id: asRec.word_buy_stripe_subscription_id ?? null,
		first_activated_at: asRec.first_activated_at ? new Date(asRec.first_activated_at).toISOString() : undefined,
		active: asRec.active ?? null,
		sales_representative_id: asRec.sales_representative_id ?? null,
		address_id: asRec.address_id ?? null,
		created_at: asRec.created_at ? new Date(asRec.created_at).toISOString() : undefined,
		updated_at: asRec.updated_at ? new Date(asRec.updated_at).toISOString() : undefined,
		food_drinks_id: asRec.food_drinks_id ?? null,
		transport_module_id: asRec.transport_module_id ?? null,
		reservation_module_id: asRec.reservation_module_id ?? null,
		stores_id: asRec.stores_id ?? null,
	});
}

// Map a payload that includes address & business_users to the matching DTO
export function toBusinessWithAddressAndUsersResponse(row: BusinessWithAddressAndUsersPrisma) {
	const r = row as BusinessWithAddressAndUsersPrisma;
	const asRec = r as Record<string, any>;

	return BusinessWithAddressAndUsersResponseDto.parse({
		business_id: r.business_id,
		business_details: asRec.business_details ?? {
			name: asRec.name ?? null,
			description: asRec.description ?? null,
		},
		tax_id: asRec.tax_id ?? null,
		registration_id: asRec.registration_id ?? null,
		email: asRec.email ?? null,
		telephone: asRec.telephone ?? null,
		telephone_code: asRec.telephone_code ?? null,
		website_url: asRec.website_url ?? null,
		working_hours: asRec.working_hours ?? null,
		is_business_unit: asRec.is_business_unit ?? null,
		business_group_name: asRec.business_group_name ?? null,
		parent_business_id: asRec.parent_business_id ?? null,
		stripe_account_id: asRec.stripe_account_id ?? null,
		stripe_customer_id: asRec.stripe_customer_id ?? null,
		word_buy_stripe_subscription_id: asRec.word_buy_stripe_subscription_id ?? null,
		first_activated_at: asRec.first_activated_at ? new Date(asRec.first_activated_at).toISOString() : undefined,
		active: asRec.active ?? null,
		sales_representative_id: asRec.sales_representative_id ?? null,
		address_id: asRec.address_id ?? null,
		created_at: asRec.created_at ? new Date(asRec.created_at).toISOString() : undefined,
		updated_at: asRec.updated_at ? new Date(asRec.updated_at).toISOString() : undefined,
		food_drinks_id: asRec.food_drinks_id ?? null,
		transport_module_id: asRec.transport_module_id ?? null,
		reservation_module_id: asRec.reservation_module_id ?? null,
		stores_id: asRec.stores_id ?? null,
		address: asRec.address ? toAddressResponse(asRec.address) : null,
		delivery_address: asRec.delivery_address ? toAddressResponse(asRec.delivery_address) : null,
		business_users: asRec.business_users?.length ? asRec.business_users.map(toBusinessUserResponse) : [],
		parent_business: asRec.parent_business ? toBusinessMinimalResponse(asRec.parent_business) : null,
		child_businesses: asRec.child_businesses?.length ? asRec.child_businesses.map(toBusinessMinimalResponse) : [],
	});
}

// Map admin-focused payloads to BusinessAdminResponseSchema
export function toBusinessAdminResponse(row: BusinessAdminPrisma) {
	// Reuse legacy schema for admin response validation
	return BusinessAdminResponseSchema.parse(row);
}

// Map a rich BusinessByIdPrisma payload to the BusinessByIdResponse schema
export function toBusinessByIdResponse(row: BusinessByIdPrisma): BusinessWithAllModulesResponseDto {
	const r = row as BusinessByIdPrisma;
	const asRec = r as Record<string, any>;
	const businessDetails = asRec.business_details ?? {
		name: asRec.name ?? null,
		description: asRec.description ?? null,
	};

	return BusinessWithIncludesResponseDto.parse({
		// Base business fields
		business_id: r.business_id,
		business_details: businessDetails,
		tax_id: r.tax_id,
		registration_id: r.registration_id,
		email: r.email,
		telephone: r.telephone,
		telephone_code: r.telephone_code,
		website_url: r.website_url,
		working_hours: r.working_hours,
		is_business_unit: r.is_business_unit,
		business_group_name: r.business_group_name,
		parent_business_id: r.parent_business_id,
		stripe_account_id: r.stripe_account_id,
		stripe_customer_id: r.stripe_customer_id,
		word_buy_stripe_subscription_id: r.word_buy_stripe_subscription_id,
		first_activated_at: r.first_activated_at ? new Date(r.first_activated_at).toISOString() : undefined,
		active: r.active,
		sales_representative_id: r.sales_representative_id,
		address_id: r.address_id,
		created_at: r.created_at ? new Date(r.created_at).toISOString() : undefined,
		updated_at: r.updated_at ? new Date(r.updated_at).toISOString() : undefined,

		// Module relationships
		transport_module: r.transport_module ? toTransportModuleRef(r.transport_module) : null,
		transport_module_id: r.transport_module?.transport_module_id,
		food_drinks_module: r.food_drinks_module ? toFoodDrinksRef(r.food_drinks_module) : null,
		food_drinks_module_id:
			(asRec.food_drinks_module &&
				(asRec.food_drinks_module.food_drinks_module_id ?? asRec.food_drinks_module.food_drinks_id)) ??
			asRec.food_drinks_id ??
			null,
		stores_module: r.stores_module ? toStoreDetail(r.stores_module) : null,
		stores_module_id:
			(asRec.stores_module && (asRec.stores_module.stores_module_id ?? asRec.stores_module.stores_id)) ??
			asRec.stores_id ??
			null,
		reservation_module: r.reservation_module ? toReservationModuleRef(r.reservation_module) : null,
		reservation_module_id: r.reservation_module?.reservation_module_id,
		table_reservations_module: r.table_reservations_module
			? toTableReservationModuleRef(r.table_reservations_module)
			: null,
		table_reservations_module_id: r.table_reservations_module?.id,
		daily_meals_module: r.daily_meals_module ? toDailyMealsModuleResponse(r.daily_meals_module) : null,
		daily_meals_module_id: r.daily_meals_module?.id,
		crm_module: r.crm_module ? toCrmModuleResponse(r.crm_module) : null,
		crm_module_id: r.crm_module?.crm_module_id,

		// Address and User relationships
		business_users: r.business_users?.length ? r.business_users.map((bu) => toBusinessUserResponse(bu)) : [],

		// Computed/flattened fields
		business_local_locations: r.stores_module?.business_local_locations?.length
			? r.stores_module?.business_local_locations.map(toBusinessLocalLocationDetail)
			: [],
		business_clients: r.crm_module?.business_clients?.length
			? r.crm_module?.business_clients.map(toBusinessClientResponse)
			: [],
		reservations: r.table_reservations_module?.reservations?.length
			? r.table_reservations_module?.reservations.map(toTableReservationDetail)
			: [],
		daily_meals_delivery_mapping: r.daily_meals_module?.daily_meals_delivery_mapping,

		// Daily meals specific fields
		maximum_daily_meals_subscribers: r.daily_meals_module?.maximum_daily_meals_subscribers,
		daily_users_sorting_type: r.daily_meals_module?.daily_users_sorting_type,
		daily_users_sorted: r.daily_meals_module?.daily_users_sorted,

		// Module-specific logos (flattened)
		stores_logo: r.stores_module?.business_details?.logo?.url,
		food_drinks_logo: r.food_drinks_module?.business_details?.logo?.url,
		reservations_logo: r.reservation_module?.business_details?.logo?.url,

		// Module-specific banners (flattened)
		stores_banner: r.stores_module?.business_details?.banner?.url,
		food_drinks_banner: r.food_drinks_module?.business_details?.banner?.url,
		reservations_banner: r.reservation_module?.business_details?.banner?.url,
	});
}

// Mapper that validates businesses with daily meals module
export function parseBusinessWithDailyMeals(business: BusinessByIdPrisma): BusinessWithDailyMealsResponseType {
	const asRec = business;
	const businessMain = toGetBusinessResponse(business as GetBusinessesPrisma);
	const dto = {
		...businessMain,
		daily_meals_module: {
			...toDailyMealsModuleResponse(asRec.daily_meals_module),
			daily_meal_menus: asRec.daily_meals_module?.daily_meal_menus
				? toDailyMealMenuList(asRec.daily_meals_module.daily_meal_menus)
				: [],
			daily_meal_drivers: asRec.daily_meals_module?.daily_meal_drivers
				? asRec.daily_meals_module.daily_meal_drivers.map((d) => toDriverRefOut(d.driver))
				: [],
		},
	};
	return BusinessWithDailyMealsResponseDto.parse(dto);
}

// Map business with addressInclude (address + business_details) to BusinessResponseDto
export function toBusinessWithAddressResponse(row: BusinessWithAddressPrisma): BusinessResponseType {
	const r = row as BusinessWithAddressPrisma;
	const asRec = r as Record<string, any>;

	const businessDetails = asRec.business_details ?? {
		name: asRec.name ?? null,
		description: asRec.description ?? null,
		logo: asRec.logo?.url ?? null,
		banner: asRec.banner?.url ?? null,
	};

	return BusinessResponseDto.parse({
		business_id: r.business_id,
		business_details: businessDetails,
		tax_id: asRec.tax_id ?? null,
		registration_id: asRec.registration_id ?? null,
		email: asRec.email ?? null,
		telephone: asRec.telephone ?? null,
		telephone_code: asRec.telephone_code ?? null,
		website_url: asRec.website_url ?? null,
		working_hours: asRec.working_hours ?? null,
		is_business_unit: asRec.is_business_unit ?? null,
		business_group_name: asRec.business_group_name ?? null,
		parent_business_id: asRec.parent_business_id ?? null,
		stripe_account_id: asRec.stripe_account_id ?? null,
		stripe_customer_id: asRec.stripe_customer_id ?? null,
		word_buy_stripe_subscription_id: asRec.word_buy_stripe_subscription_id ?? null,
		first_activated_at: asRec.first_activated_at ? new Date(asRec.first_activated_at).toISOString() : undefined,
		active: asRec.active ?? null,
		sales_representative_id: asRec.sales_representative_id ?? null,
		address_id: asRec.address_id ?? null,
		created_at: asRec.created_at ? new Date(asRec.created_at).toISOString() : undefined,
		updated_at: asRec.updated_at ? new Date(asRec.updated_at).toISOString() : undefined,
		food_drinks_id: asRec.food_drinks_id ?? null,
		transport_module_id: asRec.transport_module_id ?? null,
		reservation_module_id: asRec.reservation_module_id ?? null,
		stores_id: asRec.stores_id ?? null,
	});
}

// Map business with minimal includes (address + business_details + business_users) to BusinessResponseDto
export function toBusinessMinimalResponse(row: any): BusinessResponseType {
	const r = row;
	const asRec = r as Record<string, any>;

	return BusinessResponseDto.parse({
		business_id: r.business_id,
		business_details: asRec.business_details ?? null,
		tax_id: asRec.tax_id ?? null,
		registration_id: asRec.registration_id ?? null,
		email: asRec.email ?? null,
		telephone: asRec.telephone ?? null,
		telephone_code: asRec.telephone_code ?? null,
		website_url: asRec.website_url ?? null,
		working_hours: asRec.working_hours ?? null,
		is_business_unit: asRec.is_business_unit ?? null,
		business_group_name: asRec.business_group_name ?? null,
		parent_business_id: asRec.parent_business_id ?? null,
		stripe_account_id: asRec.stripe_account_id ?? null,
		stripe_customer_id: asRec.stripe_customer_id ?? null,
		word_buy_stripe_subscription_id: asRec.word_buy_stripe_subscription_id ?? null,
		first_activated_at: asRec.first_activated_at ? new Date(asRec.first_activated_at).toISOString() : undefined,
		active: asRec.active ?? null,
		sales_representative_id: asRec.sales_representative_id ?? null,
		address_id: asRec.address_id ?? null,
		created_at: asRec.created_at ? new Date(asRec.created_at).toISOString() : undefined,
		updated_at: asRec.updated_at ? new Date(asRec.updated_at).toISOString() : undefined,
		food_drinks_id: asRec.food_drinks_module?.food_drinks_id ?? null,
		transport_module_id: asRec.transport_module?.transport_module_id ?? null,
		reservation_module_id: asRec.reservation_module?.reservation_module_id ?? null,
		stores_id: asRec.stores_id ?? null,
		stores_module_id: asRec.stores_module?.stores_module_id ?? null,
	});
}

export function toDailyMealsModuleResponse(row: any): DailyMealsModule {
	const r = row as Record<string, any>;
	return {
		id: r.id,
		created_at: r.created_at ? new Date().toISOString() : undefined,
		updated_at: r.updated_at ? new Date(r.updated_at).toISOString() : undefined,
		maximum_daily_meals_subscribers: r.maximum_daily_meals_subscribers,
		daily_meals_days: r.daily_meals_days,
		daily_users_sorting_type: r.daily_users_sorting_type,
		daily_users_sorted: r.daily_users_sorted,
		daily_meals_delivery_mapping: r.daily_meals_delivery_mapping,
	};
}

export function toCrmModuleResponse(row: any): CrmModule {
	const r = row as Record<string, any>;
	return {
		crm_module_id: r.crm_module_id,
		purchase_order_limit_amount: r.purchase_order_limit_amount,
		// business_clients: r.business_clients ?? [],
	};
}
