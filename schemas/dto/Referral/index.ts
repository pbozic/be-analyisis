import type { OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

// Import registerSchemas functions with aliases
import { registerSchemas as registerReferralSchemas } from './referral.dto.js';

// === Referral DTOs (Response) ===
export {
	ReferralBaseSchema,
	ReferralRefSchema,
	ReferralDetailSchema,
	type ReferralBase,
	type ReferralRef,
	type ReferralDetail,
} from './referral.dto.js';

// === Referral Mappers ===
export { toReferralRef, toReferralDetail } from './referral.mappers.js';

// === Schema Registration ===
export function registerSchemas(registry: OpenAPIRegistry) {
	registerReferralSchemas(registry);
}
