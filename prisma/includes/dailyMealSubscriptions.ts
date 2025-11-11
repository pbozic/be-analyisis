import { Prisma } from '@prisma/client';

export const dailyMealSubscriptionsDefaultInclude = Prisma.validator<Prisma.daily_meal_subscriptionsInclude>()({
    user: true,
    daily_meals_module: true,
    delivery_address: true,
    customers: true,
    days: true,
    weekdays: true,
    daily_meal_instances: {
        include: {
            menu_category: {
                include: {
                    menu_categories_categories: {
                        include: { category: true },
                    },
                    menu_items: {
                        include: { tax_rate: true },
                    },
                },
            },
            customer: true,
            daily_meal_category_price: true,
        },
    },
    driver: { include: { user: true } },
});

export type DailyMealSubscriptionWithIncludesPrisma = Prisma.daily_meal_subscriptionsGetPayload<{
    include: typeof dailyMealSubscriptionsDefaultInclude;
}>;

export type DailyMealSubscriptionDefaultPrisma = Prisma.daily_meal_subscriptionsGetPayload<Record<string, never>>;

export default dailyMealSubscriptionsDefaultInclude;
