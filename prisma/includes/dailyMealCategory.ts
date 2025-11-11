import { Prisma } from '@prisma/client';

export const dailyMealCategoryDefaultInclude = Prisma.validator<Prisma.daily_meal_categoriesInclude>()({
    category: true,
    daily_meal_category_prices: true,
});

export type DailyMealCategoryWithPricesPrisma = Prisma.daily_meal_categoriesGetPayload<{
    include: typeof dailyMealCategoryDefaultInclude;
}>;

export type DailyMealCategoryDefaultPrisma = Prisma.daily_meal_categoriesGetPayload<Record<string, never>>;

export default dailyMealCategoryDefaultInclude;
