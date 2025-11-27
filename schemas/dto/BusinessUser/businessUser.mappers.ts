import {
	BusinessUserResponseSchema,
	BusinessUserWithBusinessResponseSchema,
	BusinessUserCreationResponseSchema,
	BusinessUserByIdResponseSchema,
} from './businessUser.ts';
import type {
	BusinessUserResponse,
	BusinessUserWithBusinessResponse,
	BusinessUserListResponse,
	BusinessUserCreationResponse,
	BusinessUserByIdResponse,
} from './businessUser.ts';
import type {
	BusinessUserWithBusinessPrisma,
	BusinessUserDefaultPrisma,
} from '../../../prisma/includes/businessUsers.js';
import { toPaymentList } from '../Payments/payments.mappers.js';
import { toUserResponse } from '../User/user.mappers.ts';
import { toAddressResponse } from '../Address/address.mappers.ts';
import { toBusinessByIdResponse } from '../Business/business.mappers.ts';
function toIso(d: unknown) {
	return d ? new Date(d as any).toISOString() : undefined;
}

export function toBusinessUserResponse(row: BusinessUserDefaultPrisma): BusinessUserResponse {
	const r = row as Record<string, any>;

	const operating_address = r.operating_address ? toAddressResponse(r.operating_address) : null;
	return BusinessUserResponseSchema.parse({
		business_users_id: r.business_users_id,
		business_id: r.business_id,
		user_id: r.user_id,
		company_role: r.company_role ?? null,
		online: r.online ?? false,
		operating_address_id: r.operating_address_id ?? null,
		created_at: toIso(r.created_at) ?? new Date().toISOString(),
		updated_at: toIso(r.updated_at) ?? new Date().toISOString(),
		users: r.users ? toUserResponse(r.users) : null,
		allowance: r.allowance
			? {
					...r.allowance,
					created_at: toIso(r.allowance.created_at) ?? new Date().toISOString(),
					updated_at: toIso(r.allowance.updated_at) ?? new Date().toISOString(),
				}
			: null,
		operating_address,
	});
}

export function toBusinessUserWithBusinessResponse(
	row: BusinessUserWithBusinessPrisma | unknown
): BusinessUserWithBusinessResponse | BusinessUserByIdResponse {
	const r = row as Record<string, any>;

	const operatingAddressRaw = (r as any).operating_address;
	const operating_address = operatingAddressRaw ? toAddressResponse(operatingAddressRaw) : null;
	const business = r.business ? toBusinessByIdResponse(r.business) : undefined;
	return BusinessUserWithBusinessResponseSchema.parse({
		business_users_id: r.business_users_id,
		business_id: r.business_id,
		user_id: r.user_id,
		company_role: r.company_role ?? null,
		online: r.online ?? false,
		operating_address_id: r.operating_address_id ?? null,
		created_at: toIso(r.created_at) ?? new Date().toISOString(),
		updated_at: toIso(r.updated_at) ?? new Date().toISOString(),
		stripe_customer_id: r.stripe_customer_id ?? null,
		payment_methods: toPaymentList(r.payment_methods ?? []),
		allowance: r.allowance
			? {
					...r.allowance,
					created_at: toIso(r.allowance.created_at) ?? new Date().toISOString(),
					updated_at: toIso(r.allowance.updated_at) ?? new Date().toISOString(),
				}
			: null,
		operating_address,
		business,
	});
}

export function toBusinessUserByIdResponse(row: unknown): BusinessUserByIdResponse {
	const r = row as Record<string, any>;

	const operatingAddressRaw = (r as any).operating_address;
	const operating_address = operatingAddressRaw ? toAddressResponse(operatingAddressRaw) : null;
	const business = r.business ? toBusinessByIdResponse(r.business) : undefined;
	return BusinessUserByIdResponseSchema.parse({
		business_users_id: r.business_users_id,
		business_id: r.business_id,
		user_id: r.user_id,
		company_role: r.company_role ?? null,
		online: r.online ?? false,
		operating_address_id: r.operating_address_id ?? null,
		created_at: toIso(r.created_at) ?? new Date().toISOString(),
		updated_at: toIso(r.updated_at) ?? new Date().toISOString(),
		stripe_customer_id: r.stripe_customer_id ?? null,
		payment_methods: toPaymentList(r.payment_methods ?? []),
		allowance: r.allowance
			? {
					...r.allowance,
					created_at: toIso(r.allowance.created_at) ?? new Date().toISOString(),
					updated_at: toIso(r.allowance.updated_at) ?? new Date().toISOString(),
				}
			: null,
		operating_address,
		business,
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
	toBusinessUserByIdResponse,
	toBusinessUsersList,
	toBusinessUserCreationResponse,
};
