import { SubscriptionResponseSchema, ActionBundleActionResponseSchema } from './subscription.dto.js';
import type { SubscriptionResponse, ActionBundleActionResponse } from './subscription.dto.js';
import type { SubscriptionWithIncludesPrisma } from '../../../prisma/includes/subscriptions.js';

/**
 * Map a Prisma action_bundle row (with includes) into the SubscriptionResponse DTO.
 */
export function toSubscriptionResponse(row: SubscriptionWithIncludesPrisma): SubscriptionResponse {
	const dto = {
		action_bundle_id: row.action_bundle_id,
		module: row.module,
		name: row.name,
		price_cents: row.price_cents,
		stripe_price_id: row.stripe_price_id,
		stripe_product_id: row.stripe_product_id,
		actions: Array.isArray(row.actions)
			? row.actions.map((a): ActionBundleActionResponse => {
					return ActionBundleActionResponseSchema.parse({
						action_bundle_action_id: a.action_bundle_action_id,
						action_bundle_id: a.action_bundle_id,
						action_id: a.action_id,
						module: a.module,
						limit: a.limit ?? null,
						action: a.action
							? {
									action_id: a.action.action_id,
									name: a.action.name,
									module: a.action.module,
								}
							: undefined,
					});
				})
			: undefined,
	};

	return SubscriptionResponseSchema.parse(dto);
}

export function toSubscriptionsList(rows: SubscriptionWithIncludesPrisma[]): SubscriptionResponse[] {
	return rows.map((r) => toSubscriptionResponse(r));
}

export default {
	toSubscriptionResponse,
	toSubscriptionsList,
};
