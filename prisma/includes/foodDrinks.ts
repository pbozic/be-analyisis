import { Prisma } from '@prisma/client';

export const foodDrinksDefaultInclude = Prisma.validator<Prisma.food_drinks_moduleInclude>()({
    // keep empty by default; add relations later if needed
	business: true,
});

export type FoodDrinksWithIncludesPrisma = Prisma.food_drinks_moduleGetPayload<{
    include: typeof foodDrinksDefaultInclude;
}>;

export default foodDrinksDefaultInclude;
