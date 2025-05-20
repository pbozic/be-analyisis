import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { promo_ads_categoryIncludeSchema } from '../inputTypeSchemas/promo_ads_categoryIncludeSchema';
import { promo_ads_categoryWhereInputSchema } from '../inputTypeSchemas/promo_ads_categoryWhereInputSchema';
import { promo_ads_categoryOrderByWithRelationInputSchema } from '../inputTypeSchemas/promo_ads_categoryOrderByWithRelationInputSchema';
import { promo_ads_categoryWhereUniqueInputSchema } from '../inputTypeSchemas/promo_ads_categoryWhereUniqueInputSchema';
import { Promo_ads_categoryScalarFieldEnumSchema } from '../inputTypeSchemas/Promo_ads_categoryScalarFieldEnumSchema';
import { promo_adsArgsSchema } from '../outputTypeSchemas/promo_adsArgsSchema';
import { categoriesArgsSchema } from '../outputTypeSchemas/categoriesArgsSchema';
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const promo_ads_categorySelectSchema: z.ZodType<Prisma.promo_ads_categorySelect> = z
	.object({
		promo_ads_category_id: z.boolean().optional(),
		promo_ads_id: z.boolean().optional(),
		categories_id: z.boolean().optional(),
		promo_ad: z.union([z.boolean(), z.lazy(() => promo_adsArgsSchema)]).optional(),
		category: z.union([z.boolean(), z.lazy(() => categoriesArgsSchema)]).optional(),
	})
	.strict();

export const promo_ads_categoryFindManyArgsSchema: z.ZodType<Prisma.promo_ads_categoryFindManyArgs> = z
	.object({
		select: promo_ads_categorySelectSchema.optional(),
		include: promo_ads_categoryIncludeSchema.optional(),
		where: promo_ads_categoryWhereInputSchema.optional(),
		orderBy: z
			.union([
				promo_ads_categoryOrderByWithRelationInputSchema.array(),
				promo_ads_categoryOrderByWithRelationInputSchema,
			])
			.optional(),
		cursor: promo_ads_categoryWhereUniqueInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		distinct: z
			.union([Promo_ads_categoryScalarFieldEnumSchema, Promo_ads_categoryScalarFieldEnumSchema.array()])
			.optional(),
	})
	.strict();

export default promo_ads_categoryFindManyArgsSchema;
