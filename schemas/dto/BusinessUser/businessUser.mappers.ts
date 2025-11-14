import {
	BusinessUserResponseSchema,
	BusinessUserWithBusinessResponseSchema,
	BusinessUserCreationResponseSchema,
} from './businessUser.ts';
import type {
	BusinessUserResponse,
	BusinessUserWithBusinessResponse,
	BusinessUserListResponse,
	BusinessUserCreationResponse,
} from './businessUser.ts';
import type {
	BusinessUserWithBusinessPrisma,
	BusinessUserDefaultPrisma,
} from '../../../prisma/includes/businessUsers.js';
import { toPaymentList } from '../Payments/payments.mappers.js';
function toIso(d: unknown) {
	return d ? new Date(d as any).toISOString() : undefined;
}

export function toBusinessUserResponse(row: BusinessUserDefaultPrisma): BusinessUserResponse {
	const r = row as Record<string, any>;

	return BusinessUserResponseSchema.parse({
		business_users_id: r.business_users_id,
		business_id: r.business_id,
		user_id: r.user_id,
		company_role: r.company_role ?? null,
		online: r.online ?? false,
		operating_address_id: r.operating_address_id ?? null,
		created_at: toIso(r.created_at) ?? new Date().toISOString(),
		updated_at: toIso(r.updated_at) ?? new Date().toISOString(),
		users: (r as any).users,
		allowance: (r as any).allowance ?? null,
		operating_address: (r as any).operating_address ?? null,
	});
}

export function toBusinessUserWithBusinessResponse(
	row: BusinessUserWithBusinessPrisma
): BusinessUserWithBusinessResponse {
	const r = row as Record<string, any>;

	return BusinessUserWithBusinessResponseSchema.parse({
		business_users_id: r.business_users_id,
		business_id: r.business_id,
		user_id: r.user_id,
		company_role: r.company_role ?? null,
		online: r.online ?? false,
		operating_address_id: r.operating_address_id ?? null,
		created_at: toIso(r.created_at) ?? new Date().toISOString(),
		updated_at: toIso(r.updated_at) ?? new Date().toISOString(),
		users: (r as any).users,
		stripe_customer_id: r.stripe_customer_id ?? null,
		payment_methods: toPaymentList(r.payment_methods ?? []),
		allowance: (r as any).allowance ?? null,
		operating_address: (r as any).operating_address ?? null,
		business: (r as any).business ?? null,
	});
}

export function toBusinessUsersList(
	rows: BusinessUserDefaultPrisma[] | BusinessUserWithBusinessPrisma[]
): BusinessUserListResponse {
	return (rows as any[]).map((r) => toBusinessUserResponse(r));
}

export function toBusinessUserCreationResponse(
	user: any,
	businessUser: BusinessUserDefaultPrisma
): BusinessUserCreationResponse {
	return BusinessUserCreationResponseSchema.parse({ user, businessUser: toBusinessUserResponse(businessUser) });
}

export default {
	toBusinessUserResponse,
	toBusinessUserWithBusinessResponse,
	toBusinessUsersList,
	toBusinessUserCreationResponse,
};
