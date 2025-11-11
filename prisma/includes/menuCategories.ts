import { Prisma } from '@prisma/client';

export const menuCategoriesDefaultInclude = Prisma.validator<Prisma.menu_categoriesInclude>()({
	menu_categories_categories: { include: { category: true } },
	menu_items: {
		orderBy: { menu_category_order_index: 'asc' },
		include: {
			image_file: true,
			tax_rate: true,
		},
	},
	daily_meal_category_price: true,
});

export type MenuCategoryWithIncludesPrisma = Prisma.menu_categoriesGetPayload<{
	include: typeof menuCategoriesDefaultInclude;
}>;

export default menuCategoriesDefaultInclude;
