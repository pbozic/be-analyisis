import { BusinessResponseDto, BusinessByIdResponseSchema } from './business.dto.js';
import type { BusinessWithAllModulesResponseDto, BusinessResponseDto as BusinessResponseType } from './business.dto.js';
import type { GetBusinessesPrisma, BusinessByIdPrisma } from '../../../prisma/includes/business.ts';
import { BusinessWithDailyMealsResponseDto } from './business.dto.js';
import type { BusinessWithDailyMealsResponseDto as BusinessWithDailyMealsResponseType } from './business.dto.js';

// Map a lightweight GetBusinessesPrisma payload to the public BusinessResponseDto
export function toGetBusinessResponse(row: GetBusinessesPrisma): BusinessResponseType {
  const r = row as any;
  return BusinessResponseDto.parse({
    business_id: r.business_id,
    name: r.name,
    description: r.description,
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
    food_drinks_id: r.food_drinks_id ?? null,
    transport_module_id: r.transport_module_id ?? null,
    reservation_module_id: r.reservation_module_id ?? null,
    stores_id: r.stores_id ?? null,
  });
}

// Map a rich BusinessByIdPrisma payload to the BusinessByIdResponse schema
export function toBusinessByIdResponse(row: BusinessByIdPrisma): BusinessWithAllModulesResponseDto {
  const r = row as any;
  return BusinessByIdResponseSchema.parse({
    // Base business fields
    business_id: r.business_id,
    name: r.name,
    description: r.description,
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
    transport_module: r.transport_module,
    transport_module_id: r.transport_module?.transport_module_id,
    food_drinks_module: r.food_drinks_module,
    food_drinks_module_id: r.food_drinks_module?.food_drinks_module_id,
    stores_module: r.stores_module,
    stores_module_id: r.stores_module?.stores_module_id,
    reservation_module: r.reservation_module,
    reservation_module_id: r.reservation_module?.reservation_module_id,
    table_reservations_module: r.table_reservations_module,
    table_reservations_module_id: r.table_reservations_module?.id,
    daily_meals_module: r.daily_meals_module,
    daily_meals_module_id: r.daily_meals_module?.id,
    crm_module: r.crm_module,
    crm_module_id: r.crm_module?.crm_module_id,

    // Address and User relationships
    business_users: r.business_users,

    // File relationships
    logo: r.logo,
    banner: r.banner,

    // Computed/flattened fields
    business_local_locations: r.stores_module?.business_local_locations,
    business_clients: r.crm_module?.business_clients,
    reservations: r.table_reservations_module?.reservations,
    daily_meals_delivery_mapping: r.daily_meals_module?.daily_meals_delivery_mapping,

    // Daily meals specific fields
    maximum_daily_meals_subscribers: r.daily_meals_module?.maximum_daily_meals_subscribers,
    daily_users_sorting_type: r.daily_meals_module?.daily_users_sorting_type,
    daily_users_sorted: r.daily_meals_module?.daily_users_sorted,

    // Module-specific logos (flattened)
    stores_logo: r.stores_module?.logo,
    food_drinks_logo: r.food_drinks_module?.logo,
    reservations_logo: r.reservation_module?.logo,

    // Module-specific banners (flattened)
    stores_banner: r.stores_module?.banner,
    food_drinks_banner: r.food_drinks_module?.banner,
    reservations_banner: r.reservation_module?.banner,
  });
}

// Mapper that validates businesses with daily meals module
export function parseBusinessWithDailyMeals(business: any): BusinessWithDailyMealsResponseType {
  // Build DTO shape expected by the schema
  const dto = {
    ...business,
    daily_meal_drivers: business?.daily_meals_module?.daily_meal_drivers ?? [],
  };
  return BusinessWithDailyMealsResponseDto.parse(dto);
}
