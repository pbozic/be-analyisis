import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

extendZodWithOpenApi(z);

/**
 * DTOs for a Stripe webhook "event" containing a SetupIntent payload.
 *
 * Created from provided example payload. Three shapes are provided:
 * - Base: scalars only
 * - Ref: minimal identity (id + object [+ type])
 * - Response: Base + nested Ref/Response embeddings
 *
 * Mapper helpers validate incoming payloads with zod.parse.
 */

/* SetupIntent shapes */

// Base: scalars only, no relations
export const SetupIntentBaseSchema = z
	.object({
		id: z.string(),
		object: z.string(),
		application: z.string().nullable().optional(),
		automatic_payment_methods: z.any().nullable().optional(),
		cancellation_reason: z.string().nullable().optional(),
		client_secret: z.string().nullable().optional(),
		created: z.number(),
		customer: z.string().nullable().optional(),
		description: z.string().nullable().optional(),
		flow_directions: z.any().nullable().optional(),
		last_setup_error: z.any().nullable().optional(),
		latest_attempt: z.any().nullable().optional(),
		livemode: z.boolean(),
		mandate: z.any().nullable().optional(),
		metadata: z.record(z.any()).optional(),
		next_action: z.any().nullable().optional(),
		on_behalf_of: z.any().nullable().optional(),
		payment_method: z.string().nullable().optional(),
		payment_method_options: z
			.object({
				acss_debit: z
					.object({
						currency: z.string(),
						mandate_options: z
							.object({
								interval_description: z.string().optional(),
								payment_schedule: z.string().optional(),
								transaction_type: z.string().optional(),
							})
							.optional(),
						verification_method: z.string().optional(),
					})
					.optional(),
			})
			.optional(),
		payment_method_types: z.array(z.string()).optional(),
		single_use_mandate: z.any().nullable().optional(),
		status: z.string().optional(),
		usage: z.string().optional(),
	})
	.openapi('StripeSetupIntentBase');

export const SetupIntentRefSchema = z
	.object({
		id: z.string(),
		object: z.string(),
	})
	.openapi('StripeSetupIntentRef');

export const SetupIntentResponseSchema = SetupIntentBaseSchema.extend({
	// no relations in this external model; keep full shape from base
}).openapi('StripeSetupIntentResponse');

export type SetupIntentBase = z.infer<typeof SetupIntentBaseSchema>;
export type SetupIntentRef = z.infer<typeof SetupIntentRefSchema>;
export type SetupIntentResponse = z.infer<typeof SetupIntentResponseSchema>;

/* Stripe Event shapes */

// Request payload sub-shape
export const StripeRequestSchema = z
	.object({
		id: z.string().nullable().optional(),
		idempotency_key: z.string().nullable().optional(),
	})
	.openapi('StripeEventRequest');

export const StripeEventBaseSchema = z
	.object({
		id: z.string(),
		object: z.string(),
		api_version: z.string().nullable().optional(),
		created: z.number(),
		livemode: z.boolean(),
		pending_webhooks: z.number(),
		request: StripeRequestSchema.optional(),
		type: z.string(),
	})
	.openapi('StripeEventBase');

export const StripeEventRefSchema = z
	.object({
		id: z.string(),
		object: z.string(),
		type: z.string().optional(),
	})
	.openapi('StripeEventRef');

// Full Response: includes data.object (SetupIntent)
export const StripeEventResponseSchema = StripeEventBaseSchema.extend({
	data: z.object({
		object: SetupIntentResponseSchema,
	}),
}).openapi('StripeEventResponse');

export type StripeEventBase = z.infer<typeof StripeEventBaseSchema>;
export type StripeEventRef = z.infer<typeof StripeEventRefSchema>;
export type StripeEventResponse = z.infer<typeof StripeEventResponseSchema>;

/* Mapper helpers - validate payloads */

export function parseSetupIntent(payload: unknown): SetupIntentResponse {
	return SetupIntentResponseSchema.parse(payload);
}

export function parseStripeEvent(payload: unknown): StripeEventResponse {
	return StripeEventResponseSchema.parse(payload);
}

/* OpenAPI schema registration */

export function registerSchemas(registry: OpenAPIRegistry) {
	// SetupIntent schemas
	registry.register('StripeSetupIntentBase', SetupIntentBaseSchema);
	registry.register('StripeSetupIntentRef', SetupIntentRefSchema);
	registry.register('StripeSetupIntentResponse', SetupIntentResponseSchema);

	// Stripe Event schemas
	registry.register('StripeEventRequest', StripeRequestSchema);
	registry.register('StripeEventBase', StripeEventBaseSchema);
	registry.register('StripeEventRef', StripeEventRefSchema);
	registry.register('StripeEventResponse', StripeEventResponseSchema);
}
