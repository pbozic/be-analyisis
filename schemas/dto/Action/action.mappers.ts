import { ActionResponseSchema } from './action.js';
import type { ActionResponse } from './action.js';
import type { ActionDefaultPrisma } from '../../../prisma/includes/action';

/**
 * Parse/validate a Prisma action row into the public ActionResponse DTO.
 * The mapper input is strictly typed from prisma/includes/action.ts (no any).
 */
export function toActionResponse(row: ActionDefaultPrisma): ActionResponse {
	const r = row;
	// DAO returns do not include relation arrays here, so provide empty arrays by default
	const dto = {
		action_id: r.action_id,
		module: r.module,
		name: r.name,
		action_bundle_actions: [],
		addon_actions: [],
		business_usages: [],
		permissions: [],
		user_permissions: [],
	};
	return ActionResponseSchema.parse(dto);
}

export function toActionsList(rows: ActionDefaultPrisma[]): ActionResponse[] {
	return rows.map((r) => toActionResponse(r));
}

export default {
	toActionResponse,
	toActionsList,
};
