import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import type { Address } from '../addresses/Address.js';
import type { Document } from '../documents/Document.js';
import type { WordBuy } from '../promoWords/WordBuy.js';
import type { PromoSectionsBuy } from '../promoSections/PromoSectionsBuy.js';
import type { PromoAnalytic } from '../promoAnalytics/PromoAnalytic.js';
import type { ScoringPoint } from '../general/ScoringPoint.js';
import type { AccountAction } from '../general/AccountAction.js';
import type { BusinessMoneyFlow } from '../payments/BusinessMoneyFlow.js';
import type { Role } from '../userRoles/Role.js';
import type { BusinessUser } from '../businessUsers/BusinessUser.js';
import type { ReservationModule } from '../reservations/ReservationModule.js';
import type { TransportModule } from '../transport/TransportModule.js';
import type { StoresModule } from '../stores/StoresModule.js';
import type { FoodDrinksModule } from '../foodDrinks/FoodDrinksModule.js';
import type { CrmModule } from '../crm/CrmModule.js';
import type { UserFavoriteBusiness } from '../users/UserFavoriteBusiness.js';
import type { BusinessToType } from './BusinessToType.js';
import { AddressResponseBaseSchema } from '../addresses/Address';
import { DocumentResponseSchema } from '../documents/Document';
import { WordBuyResponseSchema } from '../promoWords/WordBuy';
import { PromoSectionsBuyResponseSchema } from '../promoSections/PromoSectionsBuy';
import { PromoAnalyticResponseSchema } from '../promoAnalytics/PromoAnalytic';
import { UserFavoriteBusinessResponseSchema } from '../users/UserFavoriteBusiness';
import { ScoringPointResponseSchema } from '../general/ScoringPoint';
import { AccountActionResponseSchema } from '../general/AccountAction';
import { BusinessMoneyFlowResponseSchema } from '../payments/BusinessMoneyFlow';
import { RoleResponseSchema } from '../userRoles/Role';
import { BusinessUserResponseBaseSchema } from '../businessUsers/BusinessUser';
import { BusinessToTypeResponseSchema } from './BusinessToType';
import { ReservationModuleResponseBaseSchema } from '../reservations/ReservationModule';
import { TransportModuleResponseSchema } from '../transport/TransportModule';
import { StoresModuleResponseSchema } from '../stores/StoresModule';
import { FoodDrinksModuleResponseSchema } from '../foodDrinks/FoodDrinksModule';
import { CrmModuleResponseSchema } from '../crm/CrmModule';

extendZodWithOpenApi(z);

// Auto-generated shape by scripts/generate-dtos.js (mode: map). Do not edit manually.

export const CreateBusinessSchema = z
	.object({
		business_id: z.string().uuid(),
		address_id: z.string().uuid().nullable().optional(),
		is_business_unit: z.boolean(),
		business_group_name: z.string().nullable().optional(),
		name: z.string(),
		description: z.string().nullable().optional(),
		tax_id: z.string().uuid(),
		registration_id: z.string().uuid(),
		email: z.string(),
		telephone: z.string(),
		telephone_code: z.string(),
		website_url: z.string().nullable().optional(),
		working_hours: z.unknown().nullable().optional(),
		popular: z.boolean(),
		new: z.boolean(),
		parent_business_id: z.string().uuid().nullable().optional(),
		parent_business: z.unknown().nullable().optional(),
		child_businesses: z.array(z.unknown()),
		stripe_account_id: z.string().uuid().nullable().optional(),
		stripe_customer_id: z.string().uuid().nullable().optional(),
		word_buy_stripe_subscription_id: z.string().uuid().nullable().optional(),
		first_activated_at: z.unknown().nullable().optional(),
		active: z.boolean(),
		sales_representative_id: z.string().uuid().nullable().optional(),
	})
	.openapi('CreateBusiness');

export type CreateBusinessInput = z.infer<typeof CreateBusinessSchema>;

export const UpdateBusinessSchema = CreateBusinessSchema.partial().openapi('UpdateBusiness');
export type UpdateBusinessInput = z.infer<typeof UpdateBusinessSchema>;

export const baseBusinessResponseSchema = z
	.object({
		business_id: z.string().uuid(),
		address_id: z.string().uuid().nullable().optional(),
		is_business_unit: z.boolean(),
		business_group_name: z.string().nullable().optional(),
		name: z.string(),
		description: z.string().nullable().optional(),
		tax_id: z.string().uuid(),
		registration_id: z.string().uuid(),
		email: z.string(),
		telephone: z.string(),
		telephone_code: z.string(),
		website_url: z.string().nullable().optional(),
		working_hours: z.unknown().nullable().optional(),
		popular: z.boolean(),
		new: z.boolean(),
		created_at: z.string().datetime(),
		updated_at: z.string().datetime(),
		address: AddressResponseBaseSchema.nullable().optional(),
		documents: z.array(DocumentResponseSchema),
		parent_business_id: z.string().uuid().nullable().optional(),
		stripe_account_id: z.string().uuid().nullable().optional(),
		stripe_customer_id: z.string().uuid().nullable().optional(),
		word_buy_stripe_subscription_id: z.string().uuid().nullable().optional(),
		word_buys: z.array(WordBuyResponseSchema),
		promo_sections: z.array(PromoSectionsBuyResponseSchema),
		analytics: z.array(PromoAnalyticResponseSchema),
		first_activated_at: z.string().datetime().nullable().optional(),
		active: z.boolean(),
		sales_representative_id: z.string().uuid().nullable().optional(),
		user_favorite_businesses: z.array(UserFavoriteBusinessResponseSchema),
		scoring_points: z.array(ScoringPointResponseSchema),
		account_actions: z.array(AccountActionResponseSchema),
		business_money_flows: z.array(BusinessMoneyFlowResponseSchema),
		roles: z.array(RoleResponseSchema),
		business_users: z.array(BusinessUserResponseBaseSchema),
		types: z.array(BusinessToTypeResponseSchema),
		reservation_module: ReservationModuleResponseBaseSchema.nullable().optional(),
		transport_module: TransportModuleResponseSchema.nullable().optional(),
		stores_module: StoresModuleResponseSchema.nullable().optional(),
		food_drinks_module: FoodDrinksModuleResponseSchema.nullable().optional(),
		crm_module: CrmModuleResponseSchema.nullable().optional(),
	})
	.openapi('BusinessResponse');

type BusinessRes = z.infer<typeof baseBusinessResponseSchema> & {
	child_businesses: BusinessRes[];
};

export const BusinessResponseSchema: z.ZodType<BusinessRes> = baseBusinessResponseSchema
	.extend({
		parent_business: z
			.lazy(() => BusinessResponseSchema)
			.nullable()
			.optional(),
		child_businesses: z.array(z.lazy(() => BusinessResponseSchema)),
	})
	.openapi('BusinessResponse');

export type BusinessResponse = z.infer<typeof BusinessResponseSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('CreateBusiness', CreateBusinessSchema);
	registry.register('UpdateBusiness', UpdateBusinessSchema);
	registry.register('BusinessResponse', BusinessResponseSchema);
}

export type Business = {
	business_id: string;
	address_id?: string | null;
	is_business_unit: boolean;
	business_group_name?: string | null;
	name: string;
	description?: string | null;
	tax_id: string;
	registration_id: string;
	email: string;
	telephone: string;
	telephone_code: string;
	website_url?: string | null;
	working_hours?: unknown | null;
	popular: boolean;
	new: boolean;
	created_at: Date;
	updated_at: Date;
	address?: Address | null;
	documents?: Document[];
	parent_business_id?: string | null;
	parent_business?: Business | null;
	child_businesses?: Business[];
	stripe_account_id?: string | null;
	stripe_customer_id?: string | null;
	word_buy_stripe_subscription_id?: string | null;
	word_buys?: WordBuy[];
	promo_sections?: PromoSectionsBuy[];
	analytics?: PromoAnalytic[];
	first_activated_at?: Date | null;
	active: boolean;
	sales_representative_id?: string | null;
	user_favorite_businesses?: UserFavoriteBusiness[];
	scoring_points?: ScoringPoint[];
	account_actions?: AccountAction[];
	business_money_flows?: BusinessMoneyFlow[];
	roles?: Role[];
	business_users?: BusinessUser[];
	types?: BusinessToType[];
	reservation_module?: ReservationModule | null;
	transport_module?: TransportModule | null;
	stores_module?: StoresModule | null;
	food_drinks_module?: FoodDrinksModule | null;
	crm_module?: CrmModule | null;
};
