import { Prisma } from '@prisma/client';

import dailyMealSubscriptionsDefaultInclude from './dailyMealSubscriptions';

export const dailyMealInstanceDefaultInclude = Prisma.validator<Prisma.daily_meal_instancesInclude>()({
	subscription: { include: dailyMealSubscriptionsDefaultInclude },
	customer: true,
	menu_category: {
		include: {
			menu_categories_categories: { include: { category: true } },
			menu_items: { include: { tax_rate: true } },
		},
	},
	daily_meal_category_price: true,
});

export type DailyMealInstanceWithIncludesPrisma = Prisma.daily_meal_instancesGetPayload<{
	include: typeof dailyMealInstanceDefaultInclude;
}>;

export default dailyMealInstanceDefaultInclude;
