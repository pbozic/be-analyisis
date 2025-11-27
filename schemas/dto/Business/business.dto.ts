import { z } from 'zod';
import { OpenAPIRegistry, extendZodWithOpenApi } from '@asteasolutions/zod-to-openapi';
import { SORTING_TYPE } from '@prisma/client';

import { TransportModuleBaseSchema } from '../Transport/transport.dto.js';
import { FoodDrinksBaseSchema } from '../FoodDrinks/index.js';
import { StoreBaseSchema } from '../Stores/store.dto.js';
import {
	ReservationModuleBaseSchema,
	ReservationModuleRefSchema,
} from '../reservations/reservation-module/reservation-module.dto.js';
import { BusinessClientBaseSchema } from '../BusinessClient/businessClient.dto.js';
import { MenuItemRefSchema, MenuCategoryRefSchema, DailyMealMenuBaseSchema, MenuBaseSchema } from '../Menu/menu.dto.js';
import { AddressRefSchema } from '../Address/index.js';
import { Timestamp, UUID } from '../../primitives';
import { BusinessUserDetailSchema, BusinessUserResponseSchema } from '../BusinessUser/businessUser.js';
import { TableReservationModuleResponseSchema } from '../TableReservation/tableReservationsModule.dto.js';
import { DriverRefOutSchema } from '../Vehicles/vehicle.dto.js';
extendZodWithOpenApi(z);

// TODO: Fix dto after deleting menu from prisma model etc...

// Schema used for create/update requests (omit created_at, updated_at)
export const BusinessCreateDto = z.object({
	address_id: UUID.nullable().optional().openapi({ example: null }),
	is_business_unit: z.boolean().optional().default(false).openapi({ example: false }),
	business_group_name: z.string().nullable().optional().openapi({ example: 'Acme Holdings' }),
	// 'name' and 'description' moved to `business_details` model in Prisma.
	// They are intentionally omitted here from the base create DTO.
	tax_id: z.string().openapi({ example: 'SI12345678901' }), // Slovenia tax id
	registration_id: z.string().openapi({ example: '1234567890' }),
	email: z.string().email().openapi({ example: 'info@klikni-web.eu' }),
	telephone: z.string().openapi({ example: '+38520123456' }),
	telephone_code: z.string().openapi({ example: '+385' }),
	website_url: z.string().url().nullable().optional().openapi({ example: 'https://klikni-web.eu' }),
	working_hours: z
		.any()
		.nullable()
		.optional()
		.openapi({
			example: {
				monday: { open: '08:00', close: '20:00' },
				tuesday: { open: '08:00', close: '20:00' },
			},
		}),
	// UI-only flags (e.g. 'popular'/'new') are intentionally omitted from the persisted DTOs.
	parent_business_id: UUID.nullable().optional(),
	stripe_account_id: z.string().nullable().optional(),
	stripe_customer_id: z.string().nullable().optional(),
	word_buy_stripe_subscription_id: z.string().nullable().optional(),
	sales_representative_id: z.string().nullable().optional(),
	first_activated_at: Timestamp.nullable().optional().openapi({ example: null }),
	active: z.boolean().optional().default(true).openapi({ example: true }),
});

// Full response schema including DB-managed fields
export const BusinessResponseDto = BusinessCreateDto.extend({
	business_id: UUID,
	// Keep business metadata inside `business_details` to match Prisma's normalized model.
	// We intentionally avoid flattening name/description to the root.
	business_details: z
		.object({
			name: z.string().optional(),
			description: z.string().nullable().optional(),
			// Optional file refs (IDs) — these fields are present on business_details in many setups.
			logo_id: UUID.nullable().optional(),
			banner_id: UUID.nullable().optional(),
		})
		.nullable()
		.optional(),
	created_at: Timestamp.openapi({ example: '2025-01-01T12:00:00.000Z' }),
	updated_at: Timestamp.openapi({ example: '2025-01-10T12:00:00.000Z' }),
	food_drinks_id: UUID.nullable().optional(),
	transport_module_id: UUID.nullable().optional(),
	reservation_module_id: UUID.nullable().optional(),
	stores_id: UUID.nullable().optional(),
	crm_module_id: UUID.nullable().optional(),
	address: z
		.lazy(() => AddressRefSchema)
		.nullable()
		.optional(),
}).openapi({
	example: {
		business_id: '3Afa85f64-5717-4562-b3fc-2c963f66afa6',
		address_id: null,
		is_business_unit: false,
		business_group_name: 'Acme Holdings',
		// name/description live on business_details in Prisma; omitted here.
		tax_id: 'HR12345678901',
		registration_id: '567890',
		email: 'info@klikni-web.eu',
		telephone: '+38520123456',
		telephone_code: '+385',
		website_url: 'https://klikni-web.eu',
		working_hours: {
			monday: { open: '08:00', close: '20:00' },
			tuesday: { open: '08:00', close: '20:00' },
		},
		parent_business_id: null,
		stripe_account_id: null,
		stripe_customer_id: null,
		word_buy_stripe_subscription_id: null,
		first_activated_at: null,
		active: false,
		sales_representative_id: null,
		created_at: '2025-01-01T12:00:00.000Z',
		updated_at: '2025-01-10T12:00:00.000Z',
	},
});

// CRM Module Ref (simplified from BusinessClient)
export const CrmModuleRefSchema = z
	.object({
		crm_module_id: UUID,
		business_id: UUID,
		purchase_order_limit_amount: z.number().nullable().optional(),
	})
	.openapi('CrmModuleRef');

export const CrmModuleFullSchema = CrmModuleRefSchema.extend({
	business_clients: z.array(z.lazy(() => BusinessClientBaseSchema)).optional(),
});

// Daily Meals subscription ref (simplified)
export const DailyMealsModuleSchema = z
	.object({
		id: UUID,
		business_id: UUID,
		public_link_hash: z
			.string()
			.nullable()
			.optional()
			.openapi({ example: 'DMabc123def45678', description: 'Public link hash' }),
		delivery_address_id: UUID.nullable().optional(),
		daily_meals_days: z.array(z.any()).optional().default([]),
		daily_meals_delivery_mapping: z.record(z.number()).nullable().optional(),
		maximum_daily_meals_subscribers: z.number().nullable().optional(),
		daily_users_sorted: z.array(UUID).optional().default([]),
		daily_users_sorting_type: z.nativeEnum(SORTING_TYPE).optional().default(SORTING_TYPE.AUTOMATIC),
		created_at: Timestamp.optional(),
		updated_at: Timestamp.optional(),
	})
	.openapi('DailyMealsModule');

// =======================
// Business Response with Individual Modules
// =======================

// Business with Transport Module
export const BusinessWithTransportResponseDto = BusinessResponseDto.extend({
	transport_module: z
		.lazy(() => TransportModuleBaseSchema)
		.nullable()
		.optional(),
}).openapi('BusinessWithTransportResponse');

export const BusinessWithDailyMealsResponseDto = BusinessResponseDto.extend({
	daily_meals_module: DailyMealsModuleSchema.extend({
		daily_meal_menus: z.lazy(() => z.array(DailyMealMenuBaseSchema)).optional(),
		daily_meal_drivers: z.lazy(() => z.array(DriverRefOutSchema)).optional(),
	})
		.nullable()
		.optional(),
}).openapi('BusinessWithDailyMealsResponse');

// Business with Food & Drinks Module
export const BusinessWithFoodDrinksResponseDto = BusinessResponseDto.extend({
	food_drinks_module: z
		.lazy(() => FoodDrinksBaseSchema)
		.nullable()
		.optional(),
	menus: z.lazy(() => z.array(MenuBaseSchema)).optional(),
	menu_items: z.array(z.lazy(() => MenuItemRefSchema)).optional(),
	menu_categories: z.array(z.lazy(() => MenuCategoryRefSchema)).optional(),
}).openapi('BusinessWithFoodDrinksResponse');

// Business with Food & Drinks Module + Daily Meals
export const BusinessWithFoodDrinksAndDailyMealsResponseDto = BusinessResponseDto.extend({
	food_drinks_module: z
		.lazy(() => FoodDrinksBaseSchema)
		.nullable()
		.optional(),
	menus: z.lazy(() => z.array(MenuBaseSchema)).optional(),
	menu_items: z.array(z.lazy(() => MenuItemRefSchema)).optional(),
	menu_categories: z.array(z.lazy(() => MenuCategoryRefSchema)).optional(),
	daily_meals_module: DailyMealsModuleSchema.nullable().optional(),
}).openapi('BusinessWithFoodDrinksAndDailyMealsResponse');

// Business with Stores Module
export const BusinessWithStoresResponseDto = BusinessResponseDto.extend({
	stores_module: z
		.lazy(() => StoreBaseSchema)
		.nullable()
		.optional(),
}).openapi('BusinessWithStoresResponse');

// Business with Reservation Module
export const BusinessWithReservationResponseDto = BusinessResponseDto.extend({
	reservation_module: z
		.lazy(() => ReservationModuleRefSchema)
		.nullable()
		.optional(),
}).openapi('BusinessWithReservationResponse');

// Business with CRM Module
export const BusinessWithCrmResponseDto = BusinessResponseDto.extend({
	crm_module: CrmModuleRefSchema.nullable().optional(),
}).openapi('BusinessWithCrmResponse');

// Business Ref Schema - minimal identity for embedding elsewhere
export const BusinessRefSchema = z
	.object({
		business_id: UUID.openapi({ example: '3fa85f64-5717-4562-b3fc-2c963f66afa6' }),
		name: z.string().openapi({ example: 'Klikni d.o.o.' }),
		email: z.string().email().optional().openapi({ example: 'info@klikni-web.eu' }),
		active: z.boolean().optional().openapi({ example: true }),
		logo_id: UUID.nullable().optional(),
		banner_id: UUID.nullable().optional(),
	})
	.openapi('BusinessRef');

// Business with Address and Business Users (common include used in many DAO functions)
export const BusinessWithAddressAndUsersResponseDto = BusinessResponseDto.extend({
	address: z
		.lazy(() => AddressRefSchema)
		.nullable()
		.optional(),
	delivery_address: z
		.lazy(() => AddressRefSchema)
		.nullable()
		.optional(),
	business_users: z.array(z.lazy(() => BusinessUserDetailSchema)).optional(),
	parent_business: BusinessRefSchema.nullable().optional(),
	child_businesses: z.array(BusinessRefSchema).optional(),
}).openapi('BusinessWithAddressAndUsersResponse');

// Business matching the `getBusinessesInclude` shape returned by DAO.getBusinesses
export const BusinessWithIncludesResponseDto = BusinessResponseDto.extend({
	// includes from getBusinessesInclude
	address: z
		.lazy(() => AddressRefSchema)
		.nullable()
		.optional(),
	delivery_address: z
		.lazy(() => AddressRefSchema)
		.nullable()
		.optional(),
	business_users: z.array(z.lazy(() => BusinessUserDetailSchema)).optional(),
	parent_business: BusinessRefSchema.nullable().optional(),
	child_businesses: z.array(BusinessRefSchema).optional(),
}).openapi('BusinessWithIncludesResponse');

// Business Search Response (matches DAO select used in search endpoints)
export const BusinessSearchResponseDto = z
	.object({
		business_id: UUID,
		name: z.string().optional(),
		description: z.string().nullable().optional(),
		email: z.string().email().optional(),
		telephone: z.string().optional(),
		website_url: z.string().url().nullable().optional(),
		active: z.boolean().optional(),
		popular: z.boolean().optional(),
		new: z.boolean().optional(),
		address: z
			.lazy(() => AddressRefSchema)
			.nullable()
			.optional(),
	})
	.openapi('BusinessSearchResponse');

// =======================
// Business Response with All Modules
// =======================

// Business with all modules connected
export const BusinessWithAllModulesResponseDto = BusinessWithIncludesResponseDto.extend({
	transport_module: z
		.lazy(() => TransportModuleBaseSchema)
		.nullable()
		.optional(),
	food_drinks_module: z
		.lazy(() => FoodDrinksBaseSchema)
		.nullable()
		.optional(),
	stores_module: z
		.lazy(() => StoreBaseSchema)
		.nullable()
		.optional(),
	reservation_module: z
		.lazy(() => ReservationModuleBaseSchema)
		.nullable()
		.optional(),
	crm_module: CrmModuleFullSchema.nullable().optional(),
	daily_meals_module: DailyMealsModuleSchema.nullable().optional(),
	table_reservations_module: z
		.lazy(() => TableReservationModuleResponseSchema)
		.nullable()
		.optional(),
}).openapi('BusinessWithAllModulesResponse');

// Business with all modules connected without business_users
export const BusinessWithAllModulesResponseDtoWithoutBusinessUsers = BusinessResponseDto.extend({
	// includes from getBusinessesInclude
	address: z
		.lazy(() => AddressRefSchema)
		.nullable()
		.optional(),
	delivery_address: z
		.lazy(() => AddressRefSchema)
		.nullable()
		.optional(),
	parent_business: BusinessRefSchema.nullable().optional(),
	child_businesses: z.array(BusinessRefSchema).optional(),
	transport_module: z
		.lazy(() => TransportModuleBaseSchema)
		.nullable()
		.optional(),
	food_drinks_module: z
		.lazy(() => FoodDrinksBaseSchema)
		.nullable()
		.optional(),
	stores_module: z
		.lazy(() => StoreBaseSchema)
		.nullable()
		.optional(),
	reservation_module: z
		.lazy(() => ReservationModuleBaseSchema)
		.nullable()
		.optional(),
	crm_module: CrmModuleFullSchema.nullable().optional(),
	daily_meals_module: DailyMealsModuleSchema.nullable().optional(),
	table_reservations_module: z
		.lazy(() => TableReservationModuleResponseSchema)
		.nullable()
		.optional(),
}).openapi('BusinessWithAllModulesResponseWithoutBusinessUsers');

export const BusinessAdminResponseSchema = BusinessResponseDto.extend({
	business_details: z.object({
		name: z.string().nullable(),
		description: z.string().nullable(),
	}),
	business_users: z.array(z.lazy(() => BusinessUserResponseSchema)).optional(),
	parent_business: z.lazy(() => BusinessRefSchema).nullable(),
	child_businesses: z
		.lazy(() => z.array(BusinessRefSchema))
		.optional()
		.default([]),
}).openapi('BusinessAdmin');
export type BusinessAdminResponse = z.infer<typeof BusinessAdminResponseSchema>;

// exported TS types
export type BusinessCreateDto = z.infer<typeof BusinessCreateDto>;
export type BusinessResponseDto = z.infer<typeof BusinessResponseDto>;
export type BusinessRefSchema = z.infer<typeof BusinessRefSchema>;

// Module response types
export type BusinessWithTransportResponseDto = z.infer<typeof BusinessWithTransportResponseDto>;
export type BusinessWithFoodDrinksResponseDto = z.infer<typeof BusinessWithFoodDrinksResponseDto>;
export type BusinessWithDailyMealsResponseDto = z.infer<typeof BusinessWithDailyMealsResponseDto>;
export type BusinessWithStoresResponseDto = z.infer<typeof BusinessWithStoresResponseDto>;
export type BusinessWithReservationResponseDto = z.infer<typeof BusinessWithReservationResponseDto>;
export type BusinessWithCrmResponseDto = z.infer<typeof BusinessWithCrmResponseDto>;
export type BusinessWithAllModulesResponseDto = z.infer<typeof BusinessWithAllModulesResponseDto>;
export type BusinessWithAllModulesResponseDtoWithoutBusinessUsers = z.infer<
	typeof BusinessWithAllModulesResponseDtoWithoutBusinessUsers
>;
export type BusinessWithAddressAndUsersResponseDto = z.infer<typeof BusinessWithAddressAndUsersResponseDto>;
export type BusinessWithIncludesResponseDto = z.infer<typeof BusinessWithIncludesResponseDto>;
export type BusinessSearchResponseDto = z.infer<typeof BusinessSearchResponseDto>;

// Module ref types
// Re-export module types for convenience
export type ReservationModuleRef = z.infer<typeof ReservationModuleRefSchema>;
export type CrmModuleRef = z.infer<typeof CrmModuleRefSchema>;
export type DailyMealsModule = z.infer<typeof DailyMealsModuleSchema>;
export type CrmModule = z.infer<typeof CrmModuleFullSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	// Register base business schemas
	registry.register('BusinessCreate', BusinessCreateDto);
	registry.register('BusinessResponse', BusinessResponseDto);
	registry.register('BusinessRef', BusinessRefSchema);

	// Register module ref schemas
	registry.register('CrmModuleRef', CrmModuleRefSchema);
	registry.register('CrmModule', CrmModuleFullSchema);
	registry.register('DailyMealsModule', DailyMealsModuleSchema);

	registry.register('BusinessAdmin', BusinessAdminResponseSchema);
	// Register business with individual modules
	registry.register('BusinessWithTransportResponse', BusinessWithTransportResponseDto);
	registry.register('BusinessWithFoodDrinksResponse', BusinessWithFoodDrinksResponseDto);
	registry.register('BusinessWithFoodDrinksAndDailyMealsResponse', BusinessWithFoodDrinksAndDailyMealsResponseDto);
	registry.register('BusinessWithStoresResponse', BusinessWithStoresResponseDto);
	registry.register('BusinessWithReservationResponse', BusinessWithReservationResponseDto);
	registry.register('BusinessWithCrmResponse', BusinessWithCrmResponseDto);

	// Register extra DAO-shaped responses
	registry.register('BusinessWithAddressAndUsersResponse', BusinessWithAddressAndUsersResponseDto);
	registry.register('BusinessWithIncludesResponse', BusinessWithIncludesResponseDto);

	// Register business with all modules
	registry.register('BusinessWithAllModulesResponse', BusinessWithAllModulesResponseDto);
	registry.register(
		'BusinessWithAllModulesResponseWithoutBusinessUsers',
		BusinessWithAllModulesResponseDtoWithoutBusinessUsers
	);
}
