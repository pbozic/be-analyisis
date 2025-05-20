import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { promo_bannersIncludeSchema } from '../inputTypeSchemas/promo_bannersIncludeSchema';
import { promo_bannersWhereInputSchema } from '../inputTypeSchemas/promo_bannersWhereInputSchema';
import { promo_bannersOrderByWithRelationInputSchema } from '../inputTypeSchemas/promo_bannersOrderByWithRelationInputSchema';
import { promo_bannersWhereUniqueInputSchema } from '../inputTypeSchemas/promo_bannersWhereUniqueInputSchema';
import { Promo_bannersScalarFieldEnumSchema } from '../inputTypeSchemas/Promo_bannersScalarFieldEnumSchema';
import { filesArgsSchema } from '../outputTypeSchemas/filesArgsSchema';
import { promo_adsArgsSchema } from '../outputTypeSchemas/promo_adsArgsSchema';
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const promo_bannersSelectSchema: z.ZodType<Prisma.promo_bannersSelect> = z
	.object({
		promo_banners_id: z.boolean().optional(),
		type: z.boolean().optional(),
		size: z.boolean().optional(),
		title: z.boolean().optional(),
		text: z.boolean().optional(),
		promo_section_buy_id: z.boolean().optional(),
		file_id: z.boolean().optional(),
		promo_ads_id: z.boolean().optional(),
		files: z.union([z.boolean(), z.lazy(() => filesArgsSchema)]).optional(),
		promo_ads: z.union([z.boolean(), z.lazy(() => promo_adsArgsSchema)]).optional(),
	})
	.strict();

export const promo_bannersFindFirstArgsSchema: z.ZodType<Prisma.promo_bannersFindFirstArgs> = z
	.object({
		select: promo_bannersSelectSchema.optional(),
		include: promo_bannersIncludeSchema.optional(),
		where: promo_bannersWhereInputSchema.optional(),
		orderBy: z
			.union([promo_bannersOrderByWithRelationInputSchema.array(), promo_bannersOrderByWithRelationInputSchema])
			.optional(),
		cursor: promo_bannersWhereUniqueInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		distinct: z.union([Promo_bannersScalarFieldEnumSchema, Promo_bannersScalarFieldEnumSchema.array()]).optional(),
	})
	.strict();

export default promo_bannersFindFirstArgsSchema;
