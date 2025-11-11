import { UserFavoriteServiceLinkResponseSchema } from '../../../types/users/UserFavoriteServiceLink.js';
import type { UserFavoriteServiceLinkResponse } from '../../../types/users/UserFavoriteServiceLink.js';

export function toUserFavoriteServiceLinkResponse(row: unknown): UserFavoriteServiceLinkResponse {
    const r = row as any;
    const dto = {
        id: r.id,
        user_id: r.user_id,
        service_id: r.service_id,
        created_at: r.created_at ? new Date(r.created_at).toISOString() : new Date().toISOString(),
        updated_at: r.updated_at ? new Date(r.updated_at).toISOString() : new Date().toISOString(),
        order_index: typeof r.order_index === 'number' ? r.order_index : 0,
        users: (r as any).users ?? undefined,
        services: (r as any).services ?? undefined,
    };

    return UserFavoriteServiceLinkResponseSchema.parse(dto);
}

export function toUserFavoriteServiceLinkList(rows: unknown[]): UserFavoriteServiceLinkResponse[] {
    return rows.map((r) => toUserFavoriteServiceLinkResponse(r));
}

export default { toUserFavoriteServiceLinkResponse, toUserFavoriteServiceLinkList };
