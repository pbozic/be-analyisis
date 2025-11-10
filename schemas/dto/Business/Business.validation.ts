import z from 'zod';
import { ACCOUNT_ACTIONS_REASON, MODULE } from '@prisma/client';

import { Email, PhoneNumber, PositiveInt, Timestamp, UUID } from '../../primitives';
import { CreateAddressSchema } from '../../../types/addresses/Address';
import { UpdateBusinessSchema as UpdateBusinessSchemaType } from '../../../types/business/Business';
// Forward compatibility wrapper: re-export the new standardized validators implementation
export * from './business.validators.js';
// =======================
export const GetBusinessAnalyticsSchema = z
	.object({
		type: z.number().min(0).max(4).optional(),
		start_date: Timestamp.optional(),
		end_date: Timestamp.optional(),
	})
	.openapi('GetBusinessOverallAnalytics');
export type GetBusinessAnalyticsInput = z.infer<typeof GetBusinessAnalyticsSchema>;

// =======================
// Toggle Transport Module - PATCH /:business_id/transport-module
// =======================
export const ToggleTransportModuleSchema = z
	.object({
		enabled: z.boolean().openapi({ example: true }),
	})
	.openapi('ToggleTransportModule');
export type ToggleTransportModuleInput = z.infer<typeof ToggleTransportModuleSchema>;

// =======================
// Business ID Params - For routes with :business_id parameter
// =======================
export const BusinessIdParamsSchema = z
	.object({
		business_id: UUID,
	})
	.openapi('BusinessIdParams');
export type BusinessIdParamsInput = z.infer<typeof BusinessIdParamsSchema>;

// =======================
// Get Business For Search - POST /business/search/:business_id
// =======================
export const GetBusinessForSearchSchema = z
	.object({
		ANALYTICS_PARAM_PROMO_WORDS: z.array(z.string()).optional(),
		ANALYTICS_PARAM_PROMO_SECTION: UUID.optional(),
		ANALYTICS_PARAM_PROMO_AD: UUID.optional(),
		module: z.nativeEnum(MODULE),
	})
	.openapi('GetBusinessForSearch');
export type GetBusinessForSearchInput = z.infer<typeof GetBusinessForSearchSchema>;

// =======================
// Parent Business ID Params - For routes with :parent_business_id parameter
// =======================
export const ParentBusinessIdParamsSchema = z
	.object({
		parent_business_id: UUID,
	})
	.openapi('ParentBusinessIdParams');
export type ParentBusinessIdParamsInput = z.infer<typeof ParentBusinessIdParamsSchema>;

// =======================
// Create New Business - POST /business
// =======================
export const CreateBusinessSchema = z
	.object({
		name: z.string(),
		description: z.string().optional(),
		tax_id: z.string(),
		registration_id: z.string(),
		email: Email,
		telephone: PhoneNumber,
		telephone_code: z.string().default('+385'),
		website_url: z.string().url().optional(),
		working_hours: z.record(z.any()).optional(),
		is_business_unit: z.boolean().default(false),
		business_group_name: z.string().optional(),
		parent_business_id: UUID.optional(),
	})
	.openapi('CreateBusiness');
export type CreateBusinessInput = z.infer<typeof CreateBusinessSchema>;
