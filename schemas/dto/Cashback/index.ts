import type { OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

// Import registerSchemas functions with aliases
import { registerSchemas as registerCashbackSchemas } from './cashback.dto.js';

// === Cashback DTOs (Response) ===
export {
	CashbackBaseSchema,
	CashbackRefSchema,
	CashbackDetailSchema,
	toCashbackDetail,
	toCashbackRef,
	toOrderRef,
	type CashbackBase,
	type CashbackRef,
	type CashbackDetail,
} from './cashback.dto.js';

// === Schema Registration ===
export function registerSchemas(registry: OpenAPIRegistry) {
	registerCashbackSchemas(registry);
}
