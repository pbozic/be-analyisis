import { UserFavoriteDriverResponseSchema } from '../../../types/users/UserFavoriteDriver.js';
import type { UserFavoriteDriverResponse } from '../../../types/users/UserFavoriteDriver.js';

export function toUserFavoriteDriverResponse(row: unknown): UserFavoriteDriverResponse {
    const r = row as any;
    const dto = {
        user_favorite_drivers_id: r.user_favorite_drivers_id,
        user_id: r.user_id,
        driver_id: r.driver_id,
        created_at: r.created_at ? new Date(r.created_at).toISOString() : new Date().toISOString(),
        updated_at: r.updated_at ? new Date(r.updated_at).toISOString() : new Date().toISOString(),
        users: (r as any).users ?? undefined,
        drivers: (r as any).drivers ?? undefined,
    };

    return UserFavoriteDriverResponseSchema.parse(dto);
}

export function toUserFavoriteDriversList(rows: unknown[]): UserFavoriteDriverResponse[] {
    return rows.map((r) => toUserFavoriteDriverResponse(r));
}

export default { toUserFavoriteDriverResponse, toUserFavoriteDriversList };
