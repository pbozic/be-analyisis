import { UserFavoriteDriverResponseSchema } from '../UserFavoriteDriver';
import { FavoriteDriverDetail } from '../FavoriteDrivers/favorite-drivers.dto.js';
import { UserResponseSchema } from '../User/index.js';
import { DriverBaseSchema } from '../Driver/driver.dto.js';

export function toUserFavoriteDriverResponse(row: unknown): FavoriteDriverDetail {
	const r = row as Record<string, any>;
	const users = r.users
		? UserResponseSchema.parse({
				user_id: r.users.user_id,
				first_name: r.users.first_name ?? null,
				last_name: r.users.last_name ?? null,
				email: r.users.email ?? null,
				telephone: r.users.telephone ?? '',
				telephone_code: r.users.telephone_code ?? '',
				date_of_birth: r.users.date_of_birth ?? null,
				user_role: r.users.user_role ?? '',
				phone_verified: r.users.phone_verified ?? false,
				notification_preferences: r.users.notification_preferences ?? null,
				taxi_preferences: r.users.taxi_preferences ?? null,
				spicy_preferences: r.users.spicy_preferences ?? null,
				transfer_preferences: r.users.transfer_preferences ?? null,
				radio_preferences: r.users.radio_preferences ?? null,
				allergies_preferences: r.users.allergies_preferences ?? null,
				delivery_push_notification_preferences: r.users.delivery_push_notification_preferences ?? null,
				transfer_push_notification_preferences: r.users.transfer_push_notification_preferences ?? null,
				taxi_push_notification_preferences: r.users.taxi_push_notification_preferences ?? null,
				profile_picture_id: r.users.profile_picture_id ?? null,
				reviewable_id: r.users.reviewable_id ?? null,
				review_complete: r.users.review_complete ?? false,
				one_signal_id: r.users.one_signal_id ?? null,
				stripe_customer_id: r.users.stripe_customer_id ?? null,
				wallet_balance: r.users.wallet_balance ?? 0,
				subscribed_to_daily_meals: r.users.subscribed_to_daily_meals ?? false,
				language: r.users.language ?? null,
				details: r.users.details ?? null,
				referral_code: r.users.referral_code ?? null,
				allow_marketing_push_notifications: r.users.allow_marketing_push_notifications ?? null,
				allow_ads_personalization: r.users.allow_ads_personalization ?? null,
				allow_newsletter: r.users.allow_newsletter ?? null,
				active: r.users.active ?? false,
				disabled: r.users.disabled ?? false,
				created_at: r.users.created_at ? new Date(r.users.created_at).toISOString() : new Date().toISOString(),
				updated_at: r.users.updated_at ? new Date(r.users.updated_at).toISOString() : new Date().toISOString(),
			})
		: undefined;
	const driver = r.driver
		? DriverBaseSchema.parse({
				driver_id: r.driver.driver_id,
				user_id: (r.driver as any).user_id ?? undefined,
				online: (r.driver as any).online ?? undefined,
				on_order: (r.driver as any).on_order ?? undefined,
				last_ping_at: (r.driver as any).last_ping_at
					? new Date((r.driver as any).last_ping_at).toISOString()
					: undefined,
				location: (r.driver as any).location ?? null,
				ride_requirements: (r.driver as any).ride_requirements ?? null,
				handles_taxi_orders: (r.driver as any).handles_taxi_orders ?? undefined,
				handles_transfer_orders: (r.driver as any).handles_transfer_orders ?? undefined,
				handles_delivery_orders: (r.driver as any).handles_delivery_orders ?? undefined,
				handles_courier_orders: (r.driver as any).handles_courier_orders ?? undefined,
				taxi_orders_toggled: (r.driver as any).taxi_orders_toggled ?? undefined,
				transfer_orders_toggled: (r.driver as any).transfer_orders_toggled ?? undefined,
				delivery_orders_toggled: (r.driver as any).delivery_orders_toggled ?? undefined,
				courier_orders_toggled: (r.driver as any).courier_orders_toggled ?? undefined,
				transport_module_id: (r.driver as any).transport_module_id ?? null,
				last_used_vehicle_id: (r.driver as any).last_used_vehicle_id ?? null,
				created_at: (r.driver as any).created_at
					? new Date((r.driver as any).created_at).toISOString()
					: undefined,
				updated_at: (r.driver as any).updated_at
					? new Date((r.driver as any).updated_at).toISOString()
					: undefined,
			})
		: undefined;
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
