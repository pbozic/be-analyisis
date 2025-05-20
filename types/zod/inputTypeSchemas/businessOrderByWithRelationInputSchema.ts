import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { addressesOrderByWithRelationInputSchema } from './addressesOrderByWithRelationInputSchema';
import { financesOrderByWithRelationInputSchema } from './financesOrderByWithRelationInputSchema';
import { business_usersOrderByRelationAggregateInputSchema } from './business_usersOrderByRelationAggregateInputSchema';
import { documentsOrderByRelationAggregateInputSchema } from './documentsOrderByRelationAggregateInputSchema';
import { businessOrderByRelationAggregateInputSchema } from './businessOrderByRelationAggregateInputSchema';
import { taxi_ordersOrderByRelationAggregateInputSchema } from './taxi_ordersOrderByRelationAggregateInputSchema';
import { delivery_ordersOrderByRelationAggregateInputSchema } from './delivery_ordersOrderByRelationAggregateInputSchema';
import { menusOrderByRelationAggregateInputSchema } from './menusOrderByRelationAggregateInputSchema';
import { reviewableOrderByWithRelationInputSchema } from './reviewableOrderByWithRelationInputSchema';
import { local_productsOrderByWithRelationInputSchema } from './local_productsOrderByWithRelationInputSchema';
import { word_buyOrderByRelationAggregateInputSchema } from './word_buyOrderByRelationAggregateInputSchema';
import { reservationsOrderByRelationAggregateInputSchema } from './reservationsOrderByRelationAggregateInputSchema';
import { promo_sections_buyOrderByRelationAggregateInputSchema } from './promo_sections_buyOrderByRelationAggregateInputSchema';
import { business_teamsOrderByRelationAggregateInputSchema } from './business_teamsOrderByRelationAggregateInputSchema';
import { order_lobbiesOrderByRelationAggregateInputSchema } from './order_lobbiesOrderByRelationAggregateInputSchema';
import { user_favorite_businessesOrderByRelationAggregateInputSchema } from './user_favorite_businessesOrderByRelationAggregateInputSchema';
import { scoring_pointsOrderByRelationAggregateInputSchema } from './scoring_pointsOrderByRelationAggregateInputSchema';
import { delivery_driversOrderByRelationAggregateInputSchema } from './delivery_driversOrderByRelationAggregateInputSchema';
import { late_eventsOrderByRelationAggregateInputSchema } from './late_eventsOrderByRelationAggregateInputSchema';
import { fiscal_devicesOrderByWithRelationInputSchema } from './fiscal_devicesOrderByWithRelationInputSchema';
import { daily_meals_subscriptionsOrderByRelationAggregateInputSchema } from './daily_meals_subscriptionsOrderByRelationAggregateInputSchema';
import { account_actionsOrderByRelationAggregateInputSchema } from './account_actionsOrderByRelationAggregateInputSchema';
import { business_clientsOrderByRelationAggregateInputSchema } from './business_clientsOrderByRelationAggregateInputSchema';

export const businessOrderByWithRelationInputSchema: z.ZodType<Prisma.businessOrderByWithRelationInput> = z
	.object({
		business_id: z.lazy(() => SortOrderSchema).optional(),
		address_id: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
		delivery_address_id: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
		finance_id: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
		type: z.lazy(() => SortOrderSchema).optional(),
		is_business_unit: z.lazy(() => SortOrderSchema).optional(),
		business_group_name: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
		name: z.lazy(() => SortOrderSchema).optional(),
		description: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
		tax_id: z.lazy(() => SortOrderSchema).optional(),
		registration_id: z.lazy(() => SortOrderSchema).optional(),
		email: z.lazy(() => SortOrderSchema).optional(),
		telephone: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
		telephone_code: z.lazy(() => SortOrderSchema).optional(),
		telephone_number: z.lazy(() => SortOrderSchema).optional(),
		website_url: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
		working_hours: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
		seats: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
		minimum_order: z.lazy(() => SortOrderSchema).optional(),
		offers_daily_meals: z.lazy(() => SortOrderSchema).optional(),
		offers_daily_meals_on_weekend: z.lazy(() => SortOrderSchema).optional(),
		popular: z.lazy(() => SortOrderSchema).optional(),
		new: z.lazy(() => SortOrderSchema).optional(),
		created_at: z.lazy(() => SortOrderSchema).optional(),
		updated_at: z.lazy(() => SortOrderSchema).optional(),
		parent_business_id: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
		reviewable_id: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
		stripe_account_id: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
		stripe_customer_id: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
		word_buy_stripe_product_id: z
			.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
			.optional(),
		word_buy_stripe_subscription_id: z
			.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
			.optional(),
		daily_users_sorted: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
		daily_users_sorting_type: z.lazy(() => SortOrderSchema).optional(),
		restaurant_overwhelmed: z.lazy(() => SortOrderSchema).optional(),
		first_activated_at: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
		active: z.lazy(() => SortOrderSchema).optional(),
		sales_representative_id: z
			.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
			.optional(),
		fiscal_devices_id: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
		purchase_order_limit_amount: z
			.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)])
			.optional(),
		address: z.lazy(() => addressesOrderByWithRelationInputSchema).optional(),
		delivery_address: z.lazy(() => addressesOrderByWithRelationInputSchema).optional(),
		finances: z.lazy(() => financesOrderByWithRelationInputSchema).optional(),
		business_users: z.lazy(() => business_usersOrderByRelationAggregateInputSchema).optional(),
		documents: z.lazy(() => documentsOrderByRelationAggregateInputSchema).optional(),
		parent_business: z.lazy(() => businessOrderByWithRelationInputSchema).optional(),
		child_businesses: z.lazy(() => businessOrderByRelationAggregateInputSchema).optional(),
		taxi_orders: z.lazy(() => taxi_ordersOrderByRelationAggregateInputSchema).optional(),
		delivery_orders: z.lazy(() => delivery_ordersOrderByRelationAggregateInputSchema).optional(),
		menus: z.lazy(() => menusOrderByRelationAggregateInputSchema).optional(),
		reviewable: z.lazy(() => reviewableOrderByWithRelationInputSchema).optional(),
		word_buy_stripe_product: z.lazy(() => local_productsOrderByWithRelationInputSchema).optional(),
		word_buys: z.lazy(() => word_buyOrderByRelationAggregateInputSchema).optional(),
		reservations: z.lazy(() => reservationsOrderByRelationAggregateInputSchema).optional(),
		promo_sections: z.lazy(() => promo_sections_buyOrderByRelationAggregateInputSchema).optional(),
		business_teams: z.lazy(() => business_teamsOrderByRelationAggregateInputSchema).optional(),
		business_order_lobbies: z.lazy(() => order_lobbiesOrderByRelationAggregateInputSchema).optional(),
		user_favorite_businesses: z.lazy(() => user_favorite_businessesOrderByRelationAggregateInputSchema).optional(),
		scoring_points: z.lazy(() => scoring_pointsOrderByRelationAggregateInputSchema).optional(),
		daily_meal_drivers: z.lazy(() => delivery_driversOrderByRelationAggregateInputSchema).optional(),
		late_events: z.lazy(() => late_eventsOrderByRelationAggregateInputSchema).optional(),
		fiscal_device: z.lazy(() => fiscal_devicesOrderByWithRelationInputSchema).optional(),
		daily_meals_subscribers: z.lazy(() => daily_meals_subscriptionsOrderByRelationAggregateInputSchema).optional(),
		account_actions: z.lazy(() => account_actionsOrderByRelationAggregateInputSchema).optional(),
		business_clients: z.lazy(() => business_clientsOrderByRelationAggregateInputSchema).optional(),
	})
	.strict();

export default businessOrderByWithRelationInputSchema;
