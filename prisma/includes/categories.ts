import { Prisma } from '@prisma/client';

export const categoriesDefaultInclude = Prisma.validator<Prisma.categoriesInclude>()({
	icon: true,
	translatable: {
		include: { translations: true },
	},
	sub_categories: true,
	parent_category: true,
});

export type CategoryWithIncludesPrisma = Prisma.categoriesGetPayload<{
	include: typeof categoriesDefaultInclude;
}>;

export type CategoryDefaultPrisma = Prisma.categoriesGetPayload<Record<string, never>>;

export default categoriesDefaultInclude;
