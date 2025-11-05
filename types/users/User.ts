import { USER_ROLES } from '@prisma/client';
import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';

import type { UserRole } from '../userRoles/UserRole.js';
import type { UserAddress } from './UserAddress.js';
import type { Token } from './Token.js';
import type { BusinessUser } from '../businessUsers/BusinessUser.js';
import type { Driver } from '../drivers/Driver.js';
import type { TaxiOrder } from '../taxiOrders/TaxiOrder.js';
import type { File } from '../files/File.js';
import type { DeliveryOrder } from '../deliveryOrders/DeliveryOrder.js';
import type { Reviewable } from '../reviews/Reviewable.js';
import type { Review } from '../reviews/Review.js';
import type { Transaction } from '../payments/Transaction.js';
import type { Reservation } from '../tableReservations/Reservation.js';
import type { LostItem } from '../lostItems/LostItem.js';
import type { GroupUser } from '../familyUsers/GroupUser.js';
import type { WalletFund } from '../wallet/WalletFund.js';
import type { Referral } from '../referral/Referral.js';
import type { Cashback } from '../cashback/Cashback.js';
import type { BusinessTeam } from '../crm/BusinessTeam.js';
import type { OrderLobbyUser } from '../orderLobbies/OrderLobbyUser.js';
import type { PromoSectionsBuy } from '../promoSections/PromoSectionsBuy.js';
import type { ScoringPoint } from '../general/ScoringPoint.js';
import type { UserTutorialState } from './UserTutorialState.js';
import type { AccountAction } from '../general/AccountAction.js';
import type { BlogPost } from '../blog/BlogPost.js';
import type { Payment } from '../payments/Payment.js';
import type { PromoAnalytic } from '../promoAnalytics/PromoAnalytic.js';
import type { DailyMealSubscription } from '../dailymeal/DailyMealSubscription.js';
import type { UserMoneyFlow } from '../payments/UserMoneyFlow.js';
import type { Customer } from '../reservations/Customer.js';
import type { BookingHistoryLog } from '../reservations/BookingHistoryLog.js';
import type { UserPermission } from '../userRoles/UserPermission.js';
import type { UserFavoriteServiceLink } from './UserFavoriteServiceLink.js';
import type { UserFavoriteDriver } from './UserFavoriteDriver.js';
import type { UserFavoriteBusiness } from './UserFavoriteBusiness.js';
import type { UserTutorial } from './UserTutorial.js';
import type { UserAllergen } from './UserAllergen.js';
import { UserRoleResponseSchema } from '../userRoles/UserRole';
import { UserAddressResponseBaseSchema } from './UserAddress';
import { TokenResponseSchema } from './Token';
import { BusinessUserResponseBaseSchema } from '../businessUsers/BusinessUser';
import { DriverResponseSchema } from '../drivers/Driver';
import { TaxiOrderResponseSchema } from '../taxiOrders/TaxiOrder';
import { FileResponseSchema } from '../files/File';
import { DeliveryOrderResponseSchema } from '../deliveryOrders/DeliveryOrder';
import { ReviewableResponseSchema } from '../reviews/Reviewable';
import { ReviewResponseSchema } from '../reviews/Review';
import { TransactionResponseSchema } from '../payments/Transaction';
import { ReservationResponseSchema } from '../tableReservations/Reservation';
import { LostItemResponseSchema } from '../lostItems/LostItem';
import { GroupUserResponseSchema } from '../familyUsers/GroupUser';
import { WalletFundResponseSchema } from '../wallet/WalletFund';
import { ReferralResponseSchema } from '../referral/Referral';
import { CashbackResponseSchema } from '../cashback/Cashback';
import { BusinessTeamResponseSchema } from '../crm/BusinessTeam';
import { OrderLobbyUserResponseSchema } from '../orderLobbies/OrderLobbyUser';
import { PromoSectionsBuyResponseSchema } from '../promoSections/PromoSectionsBuy';
import { UserFavoriteServiceLinkResponseSchema } from './UserFavoriteServiceLink';
import { UserFavoriteDriverResponseSchema } from './UserFavoriteDriver';
import { UserFavoriteBusinessResponseSchema } from './UserFavoriteBusiness';
import { ScoringPointResponseSchema } from '../general/ScoringPoint';
import { UserTutorialResponseSchema } from './UserTutorial';
import { UserTutorialStateResponseSchema } from './UserTutorialState';
import { AccountActionResponseSchema } from '../general/AccountAction';
import { BlogPostResponseSchema } from '../blog/BlogPost';
import { PaymentResponseSchema } from '../payments/Payment';
import { PromoAnalyticResponseSchema } from '../promoAnalytics/PromoAnalytic';
import { DailyMealSubscriptionResponseSchema } from '../dailymeal/DailyMealSubscription';
import { UserMoneyFlowResponseSchema } from '../payments/UserMoneyFlow';
import { CustomerResponseBaseSchema } from '../reservations/Customer';
import { BookingHistoryLogResponseBaseSchema } from '../reservations/BookingHistoryLog';
import { UserPermissionResponseSchema } from '../userRoles/UserPermission';
import { UserAllergenResponseSchema } from './UserAllergen';

extendZodWithOpenApi(z);

// Auto-generated shape by scripts/generate-dtos.js (mode: shape). Do not edit manually.

export const CreateUserSchema = z
	.object({
		user_id: z.string().uuid(),
		first_name: z.string().nullable().optional(),
		last_name: z.string().nullable().optional(),
		password: z.string(),
		email: z.string().nullable().optional(),
		telephone: z.string(),
		telephone_code: z.string(),
		date_of_birth: z.unknown().nullable().optional(),
		user_role: z.nativeEnum(USER_ROLES),
		phone_verified: z.boolean(),
		notification_preferences: z.unknown().nullable().optional(),
		taxi_preferences: z.unknown().nullable().optional(),
		profile_picture_id: z.string().uuid().nullable().optional(),
		reviewable_id: z.string().uuid().nullable().optional(),
		review_complete: z.boolean(),
		one_signal_id: z.string().uuid().nullable().optional(),
		stripe_customer_id: z.string().uuid().nullable().optional(),
		wallet_balance: z.number(),
		transfer_preferences: z.unknown().nullable().optional(),
		allergies_preferences: z.unknown().nullable().optional(),
		spicy_preferences: z.unknown().nullable().optional(),
		radio_preferences: z.unknown().nullable().optional(),
		subscribed_to_daily_meals: z.boolean(),
		daily_meal_preferences: z.unknown().nullable().optional(),
		details: z.unknown().nullable().optional(),
		taxi_push_notification_preferences: z.unknown().nullable().optional(),
		transfer_push_notification_preferences: z.unknown().nullable().optional(),
		delivery_push_notification_preferences: z.unknown().nullable().optional(),
		spoken_languages: z.unknown().nullable().optional(),
		daily_meal_day_preferences: z.unknown().nullable().optional(),
		disabled: z.boolean(),
		active: z.boolean(),
		language: z.string().nullable().optional(),
		apple_id: z.string().uuid().nullable().optional(),
		google_id: z.string().uuid().nullable().optional(),
		referral_code: z.string().nullable().optional(),
		activated_at: z.unknown().nullable().optional(),
		deactivated_at: z.unknown().nullable().optional(),
		deactivated: z.boolean(),
		business_teams_id: z.string().uuid().nullable().optional(),
		allow_marketing_push_notifications: z.boolean().nullable().optional(),
		allow_ads_personalization: z.boolean().nullable().optional(),
		allow_newsletter: z.boolean().nullable().optional(),
	})
	.openapi('CreateUser');

export type CreateUserInput = z.infer<typeof CreateUserSchema>;

export const UpdateUserSchema = CreateUserSchema.partial().openapi('UpdateUser');
export type UpdateUserInput = z.infer<typeof UpdateUserSchema>;

export const UserResponseBaseSchema = z
	.object({
		user_id: z.string(),
		first_name: z.string().nullable().optional(),
		last_name: z.string().nullable().optional(),
		password: z.string(),
		email: z.string().nullable().optional(),
		telephone: z.string(),
		telephone_code: z.string(),
		date_of_birth: z.string().datetime().nullable().optional(),
		created_at: z.string().datetime(),
		updated_at: z.string().datetime(),
		user_role: z.nativeEnum(USER_ROLES),
		phone_verified: z.boolean(),
		notification_preferences: z.unknown().nullable().optional(),
		taxi_preferences: z.unknown().nullable().optional(),
		profile_picture_id: z.string().nullable().optional(),
		reviewable_id: z.string().nullable().optional(),
		review_complete: z.boolean(),
		one_signal_id: z.string().nullable().optional(),
		stripe_customer_id: z.string().nullable().optional(),
		wallet_balance: z.number(),
		transfer_preferences: z.unknown().nullable().optional(),
		allergies_preferences: z.unknown().nullable().optional(),
		spicy_preferences: z.unknown().nullable().optional(),
		radio_preferences: z.unknown().nullable().optional(),
		subscribed_to_daily_meals: z.boolean(),
		daily_meal_preferences: z.unknown().nullable().optional(),
		details: z.unknown().nullable().optional(),
		taxi_push_notification_preferences: z.unknown().nullable().optional(),
		transfer_push_notification_preferences: z.unknown().nullable().optional(),
		delivery_push_notification_preferences: z.unknown().nullable().optional(),
		spoken_languages: z.unknown().nullable().optional(),
		daily_meal_day_preferences: z.unknown().nullable().optional(),
		disabled: z.boolean(),
		active: z.boolean(),
		language: z.string().nullable().optional(),
		apple_id: z.string().nullable().optional(),
		google_id: z.string().nullable().optional(),
		referral_code: z.string().nullable().optional(),
		activated_at: z.string().datetime().nullable().optional(),
		deactivated_at: z.string().datetime().nullable().optional(),
		deactivated: z.boolean(),
		business_teams_id: z.string().nullable().optional(),
		allow_marketing_push_notifications: z.boolean().nullable().optional(),
		allow_ads_personalization: z.boolean().nullable().optional(),
		allow_newsletter: z.boolean().nullable().optional(),
	})
	.openapi('UserResponseBase');

export const UserResponseSchema = UserResponseBaseSchema.extend({
	user_roles: z.array(UserRoleResponseSchema),
	addresses: z.array(UserAddressResponseBaseSchema),
	tokens: z.array(TokenResponseSchema),
	business_users: z.array(BusinessUserResponseBaseSchema),
	driver: DriverResponseSchema.nullable().optional(),
	orders: z.array(TaxiOrderResponseSchema),
	profile_picture: FileResponseSchema.nullable().optional(),
	delivery_orders: z.array(DeliveryOrderResponseSchema),
	reviewable: ReviewableResponseSchema.nullable().optional(),
	reviews: z.array(ReviewResponseSchema),
	transactions: z.array(TransactionResponseSchema),
	reservations: z.array(ReservationResponseSchema),
	lost_items: z.array(LostItemResponseSchema),
	child_users: z.array(GroupUserResponseSchema),
	parent_user: GroupUserResponseSchema.nullable().optional(),
	wallet_funds: z.array(WalletFundResponseSchema),
	referrals_made: z.array(ReferralResponseSchema),
	referral: ReferralResponseSchema.nullable().optional(),
	cashback: z.array(CashbackResponseSchema),
	business_teams: BusinessTeamResponseSchema.nullable().optional(),
	order_lobby_users: z.array(OrderLobbyUserResponseSchema),
	promo_section_buys: z.array(PromoSectionsBuyResponseSchema),
	user_favorite_service_links: z.array(UserFavoriteServiceLinkResponseSchema),
	user_favorite_drivers: z.array(UserFavoriteDriverResponseSchema),
	user_favorite_businesses: z.array(UserFavoriteBusinessResponseSchema),
	scoring_points: z.array(ScoringPointResponseSchema),
	tutorials: z.array(UserTutorialResponseSchema),
	user_tutorial_state: UserTutorialStateResponseSchema.nullable().optional(),
	account_actions: z.array(AccountActionResponseSchema),
	created_account_actions: z.array(AccountActionResponseSchema),
	blog_posts: z.array(BlogPostResponseSchema),
	payments: z.array(PaymentResponseSchema),
	promo_analytics: z.array(PromoAnalyticResponseSchema),
	daily_meal_subscriptions: z.array(DailyMealSubscriptionResponseSchema),
	user_money_flows: z.array(UserMoneyFlowResponseSchema),
	customer: z.array(CustomerResponseBaseSchema),
	booking_history_log: z.array(BookingHistoryLogResponseBaseSchema),
	roles: z.array(UserRoleResponseSchema),
	user_permissions: z.array(UserPermissionResponseSchema),
	user_allergens: z.array(UserAllergenResponseSchema),
}).openapi('UserResponse');

export type UserBase = z.infer<typeof UserResponseBaseSchema>;
export type UserResponse = z.infer<typeof UserResponseSchema>;

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('CreateUser', CreateUserSchema);
	registry.register('UpdateUser', UpdateUserSchema);
	registry.register('UserResponseBase', UserResponseBaseSchema);
	registry.register('UserResponse', UserResponseSchema);
}

export type User = {
	user_id: string;
	first_name?: string | null;
	last_name?: string | null;
	password: string;
	email?: string | null;
	telephone: string;
	telephone_code: string;
	date_of_birth?: Date | null;
	created_at: Date;
	updated_at: Date;
	user_role: USER_ROLES;
	user_roles?: UserRole[];
	addresses?: UserAddress[];
	tokens?: Token[];
	phone_verified: boolean;
	notification_preferences?: unknown | null;
	taxi_preferences?: unknown | null;
	business_users?: BusinessUser[];
	driver?: Driver | null;
	orders?: TaxiOrder[];
	profile_picture_id?: string | null;
	profile_picture?: File | null;
	delivery_orders?: DeliveryOrder[];
	reviewable_id?: string | null;
	reviewable?: Reviewable | null;
	reviews?: Review[];
	review_complete: boolean;
	one_signal_id?: string | null;
	stripe_customer_id?: string | null;
	wallet_balance: number;
	transactions?: Transaction[];
	reservations?: Reservation[];
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
	lost_items?: LostItem[];
	daily_meal_day_preferences?: unknown | null;
	disabled: boolean;
	active: boolean;
	child_users?: GroupUser[];
	parent_user?: GroupUser | null;
	language?: string | null;
	wallet_funds?: WalletFund[];
	apple_id?: string | null;
	google_id?: string | null;
	referral_code?: string | null;
	referrals_made?: Referral[];
	referral?: Referral | null;
	cashback?: Cashback[];
	activated_at?: Date | null;
	deactivated_at?: Date | null;
	deactivated: boolean;
	business_teams_id?: string | null;
	business_teams?: BusinessTeam | null;
	order_lobby_users?: OrderLobbyUser[];
	promo_section_buys?: PromoSectionsBuy[];
	allow_marketing_push_notifications?: boolean | null;
	allow_ads_personalization?: boolean | null;
	allow_newsletter?: boolean | null;
	user_favorite_service_links?: UserFavoriteServiceLink[];
	user_favorite_drivers?: UserFavoriteDriver[];
	user_favorite_businesses?: UserFavoriteBusiness[];
	scoring_points?: ScoringPoint[];
	tutorials?: UserTutorial[];
	user_tutorial_state?: UserTutorialState | null;
	account_actions?: AccountAction[];
	created_account_actions?: AccountAction[];
	blog_posts?: BlogPost[];
	payments?: Payment[];
	promo_analytics?: PromoAnalytic[];
	daily_meal_subscriptions?: DailyMealSubscription[];
	user_money_flows?: UserMoneyFlow[];
	customer?: Customer[];
	booking_history_log?: BookingHistoryLog[];
	roles?: UserRole[];
	user_permissions?: UserPermission[];
	user_allergens?: UserAllergen[];
};
