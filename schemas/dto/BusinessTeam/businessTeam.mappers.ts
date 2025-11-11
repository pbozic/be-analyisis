import {
	BusinessTeamResponseSchema,
	BusinessTeamWithUsersResponseSchema,
	MinimumUserSchema,
} from './businessTeam.dto.js';
import type { BusinessTeamResponse, BusinessTeamWithUsersResponse } from './businessTeam.dto.js';
import type { BusinessTeamWithUsersPrisma, BusinessTeamDefaultPrisma } from '../../../prisma/includes/businessTeam.js';

function toIso(d: unknown) {
	return d ? new Date(d as any).toISOString() : undefined;
}

export function toBusinessTeamResponse(row: BusinessTeamDefaultPrisma): BusinessTeamResponse {
	const r = row as Record<string, any>;

	return BusinessTeamResponseSchema.parse({
		business_teams_id: r.business_teams_id,
		team_name: r.team_name,
		crm_module_id: r.crm_module_id,
		limit_per_person: r.limit_per_person ?? null,
		created_at: toIso(r.created_at) ?? new Date().toISOString(),
		updated_at: toIso(r.updated_at) ?? new Date().toISOString(),
	});
}

export function toBusinessTeamWithUsersResponse(row: BusinessTeamWithUsersPrisma): BusinessTeamWithUsersResponse {
	const r = row as Record<string, any>;

	const users = Array.isArray(r.users)
		? r.users.map((u: any) =>
				MinimumUserSchema.parse({
					user_id: u.user_id,
					first_name: u.first_name ?? null,
					last_name: u.last_name ?? null,
				})
			)
		: null;

	return BusinessTeamWithUsersResponseSchema.parse({
		business_teams_id: r.business_teams_id,
		team_name: r.team_name,
		crm_module_id: r.crm_module_id,
		limit_per_person: r.limit_per_person ?? null,
		created_at: toIso(r.created_at) ?? new Date().toISOString(),
		updated_at: toIso(r.updated_at) ?? new Date().toISOString(),
		users,
	});
}

export function toBusinessTeamList(rows: BusinessTeamWithUsersPrisma[]): BusinessTeamWithUsersResponse[] {
	return rows.map((r) => toBusinessTeamWithUsersResponse(r));
}

export default { toBusinessTeamResponse, toBusinessTeamWithUsersResponse, toBusinessTeamList };
