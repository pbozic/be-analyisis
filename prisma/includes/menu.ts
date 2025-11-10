export const menuDefault = {
	menus: {
		include: {
			categories: {
				orderBy: {
					menu_order_index: 'asc',
				},
				include: {
					menu_items: {
						orderBy: {
							menu_category_order_index: 'asc',
						},
						include: {
							image_file: true,
							tax_rate: true,
						},
					},
					menu_categories_categories: {
						include: {
							category: true,
						},
					},
					daily_meal_category_price: true,
				},
			},
		},
	},
} as const;
