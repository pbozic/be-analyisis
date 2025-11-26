import { Prisma } from '@prisma/client';

import {
	UserWithAddressesResponseSchema,
	UserListResponseSchema,
	UserWithParentUserResponseSchema,
	UserRefSchema,
} from './user.ts';
import type { UserWithAddressesResponse, UserListResponse, UserWithParentUserResponse, UserRef } from './user.ts';
import type { UserLoginResponse } from '../Auth/AuthResponse.dto.ts';
import {
	UserAddressesPrisma,
	UserAddressesAndConnectionsCreationPrisma,
	UserLoginPrisma,
	UserPrisma,
} from '../../../prisma/includes/user.ts';
import { toAddressResponse } from '../Address/address.mappers.ts';
import { toTransportModuleDetail } from '../Transport/transport.mappers.ts';
import { toFoodDrinksDetail } from '../FoodDrinks/foodDrinks.mappers.ts';
import { toStoreDetail } from '../Stores/store.mappers.ts';
import { toDailyMealsModuleResponse } from '../Business/business.mappers.ts';
import { toReservationModuleResponse } from '../reservations/reservation-module/reservation-module.mappers.ts';
import { toTableReservationModuleResponse } from '../TableReservation/tableReservationsModule.mappers.ts';
import { toVehicleRef } from '../Vehicles/vehicle.mappers.ts';
import { toUserAddressRef } from '../UserAddress/userAddress.mappers.ts';
/**
 * Convert date to ISO string, handling null/undefined.
 */
function toIso(d: unknown): string | undefined {
	return d ? new Date(d as any).toISOString() : undefined;
}

/**
 * Map user address from Prisma include to UserAddressRef.
 * UserAddressRefSchema expects: user_id, address_id, primary, type
 */
function mapUserAddressRef(addressRow: any): any {
	if (!addressRow) return null;
	return {
		user_id: addressRow.user_id,
		address_id: addressRow.address_id,
		primary: addressRow.primary ?? false,
		type: addressRow.type ?? 'HOME',
	};
}

/**
 * Map basic user from Prisma to UserResponse (no password, no relations).
 */
export function toUserResponse(row: Prisma.usersGetPayload<object>): UserWithParentUserResponse {
	const r = row as Record<string, any>;

	return UserWithParentUserResponseSchema.parse({
		user_id: r.user_id,
		first_name: r.first_name ?? null,
		last_name: r.last_name ?? null,
		email: r.email ?? null,
		telephone: r.telephone ?? '',
		telephone_code: r.telephone_code ?? '',
		date_of_birth: r.date_of_birth ? toIso(r.date_of_birth) : null,
		user_role: r.user_role ?? '',
		phone_verified: r.phone_verified ?? false,
		notification_preferences: r.notification_preferences ?? null,
		taxi_preferences: r.taxi_preferences ?? null,
		spicy_preferences: r.spicy_preferences ?? null,
		transfer_preferences: r.transfer_preferences ?? null,
		radio_preferences: r.radio_preferences ?? null,
		allergies_preferences: r.allergies_preferences ?? null,
		delivery_push_notification_preferences: r.delivery_push_notification_preferences ?? null,
		transfer_push_notification_preferences: r.transfer_push_notification_preferences ?? null,
		taxi_push_notification_preferences: r.taxi_push_notification_preferences ?? null,
		profile_picture_id: r.profile_picture_id ?? null,
		reviewable_id: r.reviewable_id ?? null,
		review_complete: r.review_complete ?? false,
		one_signal_id: r.one_signal_id ?? null,
		stripe_customer_id: r.stripe_customer_id ?? null,
		wallet_balance: r.wallet_balance ?? 0,
		subscribed_to_daily_meals: r.subscribed_to_daily_meals ?? false,
		language: r.language ?? null,
		referral_code: r.referral_code ?? null,
		allow_marketing_push_notifications: r.allow_marketing_push_notifications ?? null,
		allow_ads_personalization: r.allow_ads_personalization ?? null,
		allow_newsletter: r.allow_newsletter ?? null,
		active: r.active ?? false,
		disabled: r.disabled ?? false,
		// driver: r.driver ? toDriverDetail(r.driver) : null,
		// profile_picture: r.profile_picture ? toFileResponse(r.profile_picture) : null,
		// business_users:
		// 	r.business_users?.length > 0
		// 		? r.business_users.map((bu: any) => toBusinessUserWithBusinessResponse(bu))
		// 		: [],
		// parent_user: r.parent_user ?? null,
		created_at: toIso(r.created_at) ?? new Date().toISOString(),
		updated_at: toIso(r.updated_at) ?? new Date().toISOString(),
	});
}

/**
 * Map user with addresses from Prisma to UserWithAddressesResponse.
 */
export function toUserWithAddressesResponse(row: UserAddressesPrisma): UserWithAddressesResponse {
	const base = toUserResponse(row);
	const r = row as Record<string, any>;

	return UserWithAddressesResponseSchema.parse({
		...base,
		addresses: r.addresses ? r.addresses.map(toUserAddressRef) : null,
	});
}
let _UserLoginResponseSchema: typeof import('../Auth/AuthResponse.dto.ts').UserLoginResponseSchema;
function getUserLoginResponseSchema() {
	if (!_UserLoginResponseSchema) {
		_UserLoginResponseSchema = require('../Auth/AuthResponse.dto.ts').UserLoginResponseSchema;
	}
	return _UserLoginResponseSchema;
}

/**
 * Map user for login/registration with complex includes to UserLoginResponse.
 */
export function toUserLoginResponse(row: UserLoginPrisma): UserLoginResponse {
	const base = toUserResponse(row);
	const r = row as Record<string, any>;

	return getUserLoginResponseSchema().parse({
		...base,
		addresses: r.addresses
			? (r.addresses as any[]).map((addr) => mapUserAddressRef(addr)).filter((a) => a !== null)
			: null,
		driver: r.driver
			? {
					driver_id: r.driver.driver_id,
					online: (r.driver as any).online ?? false,
					on_order: (r.driver as any).on_order ?? false,
					ride_requirements: r.driver.ride_requirements ?? null,
					taxi_orders_toggled: r.driver.taxi_orders_toggled ?? false,
					transfer_orders_toggled: r.driver.transfer_orders_toggled ?? false,
					delivery_orders_toggled: r.driver.delivery_orders_toggled ?? false,
					courier_orders_toggled: r.driver.courier_orders_toggled ?? false,
					transport_module_id: r.driver.transport_module_id ?? null,
					last_used_vehicle_id: r.driver.last_used_vehicle_id ?? null,
					current_vehicle: r.driver.current_vehicle ? toVehicleRef(r.driver.current_vehicle) : null,
					vehicles: Array.isArray(r.driver.vehicles)
						? r.driver.vehicles.map((v: any) => toVehicleRef(v))
						: [],
					activity_logs: r.driver.activity_logs ?? [],
				}
			: null,
		child_users: r.child_users
			? (r.child_users as any[]).map((cu) => ({
					group_user_id: cu.group_user_id,
					child_user_id: cu.child_user_id,
					parent_user_id: cu.parent_user_id,
					enabled: cu.enabled ?? false,
					child_user: cu.child_user
						? {
								user_id: cu.child_user.user_id,
								first_name: cu.child_user.first_name,
								last_name: cu.child_user.last_name,
							}
						: null,
					allowance: cu.allowance ?? null,
				}))
			: null,
		parent_user: r.parent_user
			? {
					group_user_id: r.parent_user.group_user_id,
					child_user_id: r.parent_user.child_user_id,
					parent_user_id: r.parent_user.parent_user_id,
					enabled: r.parent_user.enabled ?? false,
					parent_user: r.parent_user.parent_user
						? {
								user_id: r.parent_user.parent_user.user_id,
								first_name: r.parent_user.parent_user.first_name,
								last_name: r.parent_user.parent_user.last_name,
								user_role: r.parent_user.parent_user.user_role,
							}
						: null,
					allowance: r.parent_user.allowance ?? null,
				}
			: null,
		referrals_made: r.referrals_made ?? null,
		referral: r.referral
			? {
					referral_id: r.referral.referral_id,
					referrer_user_id: r.referral.referrer_user_id,
					referred_user_id: r.referral.referred_user_id,
					referral_code: r.referral.referral_code,
					reward_claimed: r.referral.reward_claimed ?? false,
					referrer: r.referral.referrer
						? {
								first_name: r.referral.referrer.first_name,
								last_name: r.referral.referrer.last_name,
							}
						: null,
				}
			: null,
		user_roles: r.user_roles ?? [],
		business_users: r.business_users?.length
			? (r.business_users as any[]).map((bu) => ({
					business_users_id: bu.business_users_id,
					business_id: bu.business_id,
					user_id: bu.user_id,
					company_role: bu.company_role ?? null,
					online: bu.online ?? false,
					operating_address_id: bu.operating_address_id ?? null,
					created_at: toIso(bu.created_at) ?? new Date().toISOString(),
					updated_at: toIso(bu.updated_at) ?? new Date().toISOString(),
					business: bu.business
						? {
								business_id: bu.business.business_id,
								address: bu.business.address ? toAddressResponse(bu.business.address) : null,
								reservation_module: bu.business.reservation_module
									? toReservationModuleResponse(bu.business.reservation_module as any)
									: null,
								transport_module: bu.business.transport_module
									? toTransportModuleDetail(bu.business.transport_module as any)
									: null,
								food_drinks_module: bu.business.food_drinks_module
									? toFoodDrinksDetail(bu.business.food_drinks_module as any)
									: null,
								stores_module: bu.business.stores_module
									? toStoreDetail(bu.business.stores_module as any)
									: null,
								daily_meals_module: bu.business.daily_meals_module
									? toDailyMealsModuleResponse(bu.business.daily_meals_module as any)
									: null,
								table_reservations_module: bu.business.table_reservations_module
									? toTableReservationModuleResponse(bu.business.table_reservations_module as any)
									: null,
								business_details: bu.business.business_details ?? null,
							}
						: null,
					operating_address: bu.operating_address ?? null,
				}))
			: [],
		user_favorite_businesses: r.user_favorite_businesses ?? null,
		user_favorite_drivers: r.user_favorite_drivers ?? null,
		profile_picture: r.profile_picture ?? null,
	});
}

/**
 * Map array of users with addresses and connections to UserListResponse.
 */
export function toUsersListResponse(rows: UserAddressesAndConnectionsCreationPrisma[]): UserListResponse {
	const users = rows.map((row) => {
		const base = toUserResponse(row);
		const r = row as Record<string, any>;

		return {
			...base,
			addresses: r.addresses
				? (r.addresses as any[]).map((addr) => mapUserAddressRef(addr)).filter((a) => a !== null)
				: null,
			child_users: r.child_users
				? (r.child_users as any[]).map((cu) => ({
						group_user_id: cu.group_user_id,
						child_user_id: cu.child_user_id,
						parent_user_id: cu.parent_user_id,
						enabled: cu.enabled ?? false,
						child_user: cu.child_user
							? {
									user_id: cu.child_user.user_id,
									first_name: cu.child_user.first_name,
									last_name: cu.child_user.last_name,
								}
							: null,
					}))
				: null,
			parent_user: r.parent_user
				? {
						group_user_id: r.parent_user.group_user_id,
						child_user_id: r.parent_user.child_user_id,
						parent_user_id: r.parent_user.parent_user_id,
						enabled: r.parent_user.enabled ?? false,
						parent_user: r.parent_user.parent_user
							? {
									user_id: r.parent_user.parent_user.user_id,
									first_name: r.parent_user.parent_user.first_name,
									last_name: r.parent_user.parent_user.last_name,
									user_role: r.parent_user.parent_user.user_role,
								}
							: null,
					}
				: null,
		};
	});

	return UserListResponseSchema.parse({
		data: users,
		total: users.length,
	});
}

/**
 * Map user object to userRef
 */
export function toUserRef(row: UserPrisma): UserRef {
	const r = row as Record<string, any>;

	return UserRefSchema.parse({
		user_id: r.user_id,
		first_name: r.first_name ?? null,
		last_name: r.last_name ?? null,
		email: r.email ?? null,
		telephone: r.telephone ?? '',
		user_role: r.user_role ?? '',
	});
}

/**
 * Map array of users with addresses to UserWithAddressesResponse array.
 */
export function toUserWithAddressesResponseList(rows: UserAddressesPrisma[]): UserWithAddressesResponse[] {
	return rows.map(toUserWithAddressesResponse);
}

export default {
	toUserResponse,
	toUserWithAddressesResponse,
	toUserLoginResponse,
	toUsersListResponse,
	toUserWithAddressesResponseList,
};
