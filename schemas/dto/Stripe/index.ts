import type { OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

// === Stripe Event DTOs (Response) ===
export {
	SetupIntentBaseSchema,
	SetupIntentRefSchema,
	SetupIntentResponseSchema,
	StripeRequestSchema,
	StripeEventBaseSchema,
	StripeEventRefSchema,
	StripeEventResponseSchema,
	type SetupIntentBase,
	type SetupIntentRef,
	type SetupIntentResponse,
	type StripeEventBase,
	type StripeEventRef,
	type StripeEventResponse,
	parseSetupIntent,
	parseStripeEvent,
	registerSchemas as registerStripeEventSchemas,
} from './event.dto.js';

// === Stripe Webhook Metadata DTOs ===
export {
	WalletTopupMetadataSchema,
	OrderPaymentMetadataSchema,
	DailyMealsSubscriptionMetadataSchema,
	PromoSectionMetadataSchema,
	PromoSectionBulkMetadataSchema,
	StripeMetadataSchema,
	type WalletTopupMetadata,
	type OrderPaymentMetadata,
	type DailyMealsSubscriptionMetadata,
	type PromoSectionMetadata,
	type PromoSectionBulkMetadata,
	type StripeMetadata,
	registerSchemas as registerStripeWebhookSchemas,
} from './webhookEvents.dto.js';

// === Schema Registration ===
export function registerSchemas(registry: OpenAPIRegistry) {
	registerStripeEventSchemas(registry);
	registerStripeWebhookSchemas(registry);
}
