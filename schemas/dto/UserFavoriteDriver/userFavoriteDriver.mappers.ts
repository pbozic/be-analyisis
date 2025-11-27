import { UserFavoriteDriverResponseSchema } from '../UserFavoriteDriver';
import { FavoriteDriverDetail } from '../FavoriteDrivers/favorite-drivers.dto.js';
import { toUserResponse } from '../User/user.mappers.js';
import { toDriverDetail } from '../Driver/driver.mappers.js';

export function toUserFavoriteDriverResponse(row: unknown): FavoriteDriverDetail {
	const r = row as Record<string, any>;
	const users = r.users ? toUserResponse(r.users as any) : undefined;
	const driver = r.driver ? toDriverDetail(r.driver as any) : undefined;
	const dto = {
		user_favorite_drivers_id: r.user_favorite_drivers_id,
		user_id: r.user_id,
		driver_id: r.driver_id,
		created_at: r.created_at ? new Date(r.created_at).toISOString() : new Date().toISOString(),
		updated_at: r.updated_at ? new Date(r.updated_at).toISOString() : new Date().toISOString(),
		users,
		driver,
	};
	return UserFavoriteDriverResponseSchema.parse(dto);
}

export function toUserFavoriteDriversList(rows: FavoriteDriverDetail[]): FavoriteDriverDetail[] {
	return rows.map((r) => toUserFavoriteDriverResponse(r));
}

export default { toUserFavoriteDriverResponse, toUserFavoriteDriversList };
