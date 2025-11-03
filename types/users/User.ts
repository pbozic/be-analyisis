// Auto-generated shape by scripts/generate-dtos.js (mode: shape). Do not edit manually.

import type {
	USER_ROLES,
	account_actions,
	addresses,
	allergens,
	business,
	business_teams,
	business_users,
	cashback,
	delivery_orders,
	drivers,
	files,
	group_users,
	order_lobbies,
	payments,
	promo_analytics,
	promo_sections_buy,
	referrals,
	reviewable,
	reviews,
	scoring_points,
	service_links,
	table_reservations_module,
	taxi_orders,
	tokens,
	transactions,
	tutorial,
	user_money_flows,
	user_tutorial_state,
	wallet_funds,
} from '@prisma/client';

import type { UserRole } from '../userRoles/UserRole.js';
import type { BlogPost } from '../blog/BlogPost.js';
import type { DailyMealSubscription } from '../dailymeal/DailyMealSubscription.js';
import type { Customer } from '../reservation/Customer.js';
import type { Booking } from '../reservation/Booking.js';
import type { UserPermission } from '../userRoles/UserPermission.js';

export type User = {
	user_id: string;
	first_name?: string | null;
	last_name?: string | null;
	password: string;
	email?: string | null;
	telephone: string;
	telephone_code: string;
	date_of_birth?: string | null;
	created_at: string;
	updated_at: string;
	user_role: USER_ROLES;
	user_roles: UserRole[];
	addresses: addresses[];
	tokens: tokens[];
	phone_verified: boolean;
	notification_preferences?: unknown | null;
	taxi_preferences?: unknown | null;
	business_users: business_users[];
	driver?: drivers | null;
	orders: taxi_orders[];
	profile_picture_id?: string | null;
	profile_picture?: files | null;
	delivery_orders: delivery_orders[];
	reviewable_id?: string | null;
	reviewable?: reviewable | null;
	reviews: reviews[];
	review_complete: boolean;
	one_signal_id?: string | null;
	stripe_customer_id?: string | null;
	wallet_balance: number;
	transactions: transactions[];
	reservations: table_reservations_module[];
	transfer_preferences?: unknown | null;
	allergies_preferences?: unknown | null;
	spicy_preferences?: unknown | null;
	radio_preferences?: unknown | null;
	subscribed_to_daily_meals: boolean;
	daily_meal_preferences?: unknown | null;
	details?: unknown | null;
	taxi_push_notification_preferences?: unknown | null;
	transfer_push_notification_preferences?: unknown | null;
	delivery_push_notification_preferences?: unknown | null;
	spoken_languages?: unknown | null;
	lost_items: files[];
	daily_meal_day_preferences?: unknown | null;
	disabled: boolean;
	active: boolean;
	child_users: group_users[];
	parent_user?: group_users | null;
	language?: string | null;
	wallet_funds: wallet_funds[];
	apple_id?: string | null;
	google_id?: string | null;
	referral_code?: string | null;
	referrals_made: referrals[];
	referral?: referrals | null;
	cashback: cashback[];
	activated_at?: string | null;
	deactivated_at?: string | null;
	deactivated: boolean;
	business_teams_id?: string | null;
	business_teams?: business_teams | null;
	order_lobby_users: order_lobbies[];
	promo_section_buys: promo_sections_buy[];
	allow_marketing_push_notifications?: boolean | null;
	allow_ads_personalization?: boolean | null;
	allow_newsletter?: boolean | null;
	user_favorite_service_links: service_links[];
	user_favorite_drivers: drivers[];
	user_favorite_businesses: business[];
	scoring_points: scoring_points[];
	tutorials: tutorial[];
	user_tutorial_state?: user_tutorial_state | null;
	account_actions: account_actions[];
	created_account_actions: account_actions[];
	blog_posts: BlogPost[];
	payments: payments[];
	promo_analytics: promo_analytics[];
	daily_meal_subscriptions: DailyMealSubscription[];
	user_money_flows: user_money_flows[];
	customer: Customer[];
	booking_history_log: Booking[];
	roles: UserRole[];
	user_permissions: UserPermission[];
	user_allergens: allergens[];
};
