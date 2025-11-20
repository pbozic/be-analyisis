import { TokenRefSchema, TokenDetailSchema } from './token.dto.js';
import type { TokenRef, TokenDetail } from './token.dto.js';
import { BasicUserDataSchema } from '../User/user.js';

export function toTokenRef(row: unknown): TokenRef {
	const r = row as { token_id?: string; token?: string };
	return TokenRefSchema.parse({ token_id: r.token_id, label: 'token' });
}

type BusinessLike = { business_id: string; name?: string | null };
type UserWithBusinesses = { business_users?: Array<{ business?: BusinessLike | null }> } | null;
type PrismaToken = {
	token_id?: string;
	user_id: string;
	token: string;
	type: string;
	active?: boolean | null;
	expires_at?: string | Date;
	created_at?: string | Date | null;
	updated_at?: string | Date | null;
	users?: UserWithBusinesses | undefined;
};

export function toTokenDetail(row: unknown): TokenDetail {
	const r = row as PrismaToken;
	const rawUser = (r as { users?: any }).users;
	const user = rawUser
		? BasicUserDataSchema.parse({
				first_name: rawUser.first_name ?? '',
				last_name: rawUser.last_name ?? '',
				email: rawUser.email ?? undefined,
				telephone: rawUser.telephone ?? undefined,
				telephone_code: rawUser.telephone_code ?? undefined,
				date_of_birth: rawUser.date_of_birth ?? undefined,
				language: rawUser.language ?? undefined,
			})
		: null;
	const businesses = Array.isArray(r?.users?.business_users)
		? (r.users!.business_users as Array<{ business?: BusinessLike | null }>)
				.map((bu) => bu.business)
				.filter((b): b is BusinessLike => !!b)
				.map((b) => ({
					business_id: b.business_id,
					name: b.name ?? undefined,
				}))
		: undefined;
	return TokenDetailSchema.parse({
		token_id: r.token_id ?? undefined,
		user_id: r.user_id,
		token: r.token,
		type: r.type,
		active: (r.active as boolean | null | undefined) ?? true,
		expires_at: r.expires_at ? new Date(r.expires_at as string | Date).toISOString() : new Date().toISOString(),
		created_at: r.created_at ? new Date(r.created_at as string | Date).toISOString() : undefined,
		updated_at: r.updated_at ? new Date(r.updated_at as string | Date).toISOString() : undefined,
		user,
		businesses,
	});
}
