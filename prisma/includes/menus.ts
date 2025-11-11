import { Prisma } from '@prisma/client';

export const menusDefaultInclude = Prisma.validator<Prisma.menusInclude>()({
	categories: {
		orderBy: { menu_order_index: 'asc' },
		include: {
			menu_items: {
				orderBy: { menu_category_order_index: 'asc' },
				include: {
					tax_rate: true,
				},
			},
			menu_categories_categories: { include: { category: true } },
			daily_meal_category_price: true,
		},
	},
});

export type MenuWithIncludesPrisma = Prisma.menusGetPayload<{ include: typeof menusDefaultInclude }>;

export const dailyMealMenuDefaultInclude = Prisma.validator<Prisma.daily_meal_menusInclude>()({
	categories: {
		include: {
			menu_items: { include: { tax_rate: true } },
			menu_categories_categories: { include: { category: true } },
		},
	},
});

export type DailyMealMenuWithIncludesPrisma = Prisma.daily_meal_menusGetPayload<{
	include: typeof dailyMealMenuDefaultInclude;
}>;

export default menusDefaultInclude;
