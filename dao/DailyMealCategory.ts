import prisma from '../prisma/prisma.js';

export async function createDailyMealCategoryWithPrice({
	business_id,
	category_id,
	price,
	start_date,
}: {
	business_id: string;
	category_id: string;
	price: number;
	start_date: Date;
}) {
	const dmc = await prisma.daily_meal_categories.create({
		data: {
			business_id,
			category_id,
			start_date,
			daily_meal_category_prices: {
				create: {
					price,
					valid_from: start_date,
				},
			},
		},
		include: {
			category: true,
			daily_meal_category_prices: true,
		},
	});
	return dmc;
}

export async function getActiveDailyMealCategoriesForBusiness(business_id: string) {
	return await prisma.daily_meal_categories.findMany({
		where: { business_id },
		include: {
			category: true,
			daily_meal_category_prices: {
				orderBy: { valid_from: 'desc' },
				take: 1,
			},
		},
	});
}

export async function addPriceToDailyMealCategory({
	daily_meal_category_id,
	price,
	valid_from,
}: {
	daily_meal_category_id: string;
	price: number;
	valid_from: Date;
}) {
	return prisma.daily_meal_category_prices.create({
		data: {
			daily_meal_category_id,
			price,
			valid_from,
		},
	});
}

export async function deleteDailyMealCategory(daily_meal_category_id: string) {
	return prisma.daily_meal_categories.delete({
		where: { daily_meal_category_id },
	});
}

export default {
	createDailyMealCategoryWithPrice,
	getActiveDailyMealCategoriesForBusiness,
	addPriceToDailyMealCategory,
	deleteDailyMealCategory,
};
