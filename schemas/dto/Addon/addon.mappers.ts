import { AddonResponseSchema, AddonWithActionsResponseSchema } from './addon.js';
import type { AddonResponse, AddonWithActionsResponse } from './addon.js';
import type {
	AddonDefaultPrisma,
	AddonWithActionsPrisma,
	AddonWithActionsAndUsagesPrisma,
	BusinessAddonWithAddonPrisma,
} from '../../../prisma/includes/addon.js';

/**
 * Map a minimal Prisma addon row (scalars only) into the public AddonResponse DTO.
 * Input type is derived from `prisma/includes/addon.ts` to avoid `any`.
 */
export function toAddonResponse(row: AddonDefaultPrisma): AddonResponse {
	const dto = {
		addon_id: row.addon_id,
		module: row.module,
		name: row.name,
		price_cents: row.price_cents,
		stripe_price_id: row.stripe_price_id,
		stripe_product_id: row.stripe_product_id,
		// DAO minimal rows do not include relations; provide empty arrays by default
		actions: [],
	};

	return AddonResponseSchema.parse(dto);
}

export function toAddonsList(rows: AddonDefaultPrisma[]): AddonResponse[] {
	return rows.map((r) => toAddonResponse(r));
}

/**
 * Map an addon row that includes actions and nested business_addons -> AddonWithActionsResponse
 */
export function toAddonWithActionsResponse(row: AddonWithActionsPrisma): AddonWithActionsResponse {
	const dto = {
		addon_id: row.addon_id,
		module: row.module,
		name: row.name,
		price_cents: row.price_cents,
		stripe_price_id: row.stripe_price_id,
		stripe_product_id: row.stripe_product_id,
		// `actions` on addon can be join rows (addon_action). If the join includes the nested `action` relation
		// we map to ActionRef; otherwise omit those entries (we can't fabricate action.name/module).
		actions: (row.actions || [])
			.map((a: any) =>
				a && a.action ? { action_id: a.action.action_id, name: a.action.name, module: a.action.module } : null
			)
			.filter(Boolean),
	};

	return AddonWithActionsResponseSchema.parse(dto);
}

export function toAddonsWithActionsList(rows: AddonWithActionsPrisma[]): AddonWithActionsResponse[] {
	return rows.map((r) => toAddonWithActionsResponse(r));
}

/**
 * Map an addon row that includes actions and usages/reservation_module into the same AddonWithActionsResponse shape.
 */
export function toAddonWithActionsAndUsagesResponse(row: AddonWithActionsAndUsagesPrisma): AddonWithActionsResponse {
	// Reuse the actions mapping; we ignore usages at the addon-level DTO (they live on business_addons)
	return toAddonWithActionsResponse(row as AddonWithActionsPrisma);
}

/**
 * Map a business_addon row that includes the nested addon (with actions) into an AddonWithActionsResponse
 */
export function toAddonFromBusinessAddon(row: BusinessAddonWithAddonPrisma): AddonWithActionsResponse {
	return toAddonWithActionsResponse(row.addon as AddonWithActionsPrisma);
}

export default {
	toAddonResponse,
	toAddonsList,
	toAddonWithActionsResponse,
	toAddonsWithActionsList,
	toAddonWithActionsAndUsagesResponse,
	toAddonFromBusinessAddon,
};
