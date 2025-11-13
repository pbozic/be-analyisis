import { Prisma } from '@prisma/client';

export const serviceCategoryBase = Prisma.validator<Prisma.service_categoryDefaultArgs>()({
	select: {
		service_category_id: true,
		reservation_module_id: true,
		name: true,
		parent_id: true,
		color: true,
	},
});

export type ServiceCategoryBasePrisma = Prisma.service_categoryGetPayload<typeof serviceCategoryBase>;
