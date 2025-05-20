import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { promo_adsIncludeSchema } from '../inputTypeSchemas/promo_adsIncludeSchema';
import { promo_adsWhereInputSchema } from '../inputTypeSchemas/promo_adsWhereInputSchema';
import { promo_adsOrderByWithRelationInputSchema } from '../inputTypeSchemas/promo_adsOrderByWithRelationInputSchema';
import { promo_adsWhereUniqueInputSchema } from '../inputTypeSchemas/promo_adsWhereUniqueInputSchema';
import { Promo_adsScalarFieldEnumSchema } from '../inputTypeSchemas/Promo_adsScalarFieldEnumSchema';
import { promo_bannersFindManyArgsSchema } from '../outputTypeSchemas/promo_bannersFindManyArgsSchema';
import { promo_ads_categoryFindManyArgsSchema } from '../outputTypeSchemas/promo_ads_categoryFindManyArgsSchema';
import { Promo_adsCountOutputTypeArgsSchema } from '../outputTypeSchemas/Promo_adsCountOutputTypeArgsSchema';
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const promo_adsSelectSchema: z.ZodType<Prisma.promo_adsSelect> = z
	.object({
		promo_ads_id: z.boolean().optional(),
		title: z.boolean().optional(),
		text: z.boolean().optional(),
		tag: z.boolean().optional(),
		service_type: z.boolean().optional(),
		discount: z.boolean().optional(),
		active: z.boolean().optional(),
		code: z.boolean().optional(),
		created_at: z.boolean().optional(),
		active_at: z.boolean().optional(),
		active_until: z.boolean().optional(),
		banner: z.union([z.boolean(), z.lazy(() => promo_bannersFindManyArgsSchema)]).optional(),
		categories: z.union([z.boolean(), z.lazy(() => promo_ads_categoryFindManyArgsSchema)]).optional(),
		_count: z.union([z.boolean(), z.lazy(() => Promo_adsCountOutputTypeArgsSchema)]).optional(),
	})
	.strict();

export const promo_adsFindManyArgsSchema: z.ZodType<Prisma.promo_adsFindManyArgs> = z
	.object({
		select: promo_adsSelectSchema.optional(),
		include: promo_adsIncludeSchema.optional(),
		where: promo_adsWhereInputSchema.optional(),
		orderBy: z
			.union([promo_adsOrderByWithRelationInputSchema.array(), promo_adsOrderByWithRelationInputSchema])
			.optional(),
		cursor: promo_adsWhereUniqueInputSchema.optional(),
		take: z.number().optional(),
		skip: z.number().optional(),
		distinct: z.union([Promo_adsScalarFieldEnumSchema, Promo_adsScalarFieldEnumSchema.array()]).optional(),
	})
	.strict();

export default promo_adsFindManyArgsSchema;
