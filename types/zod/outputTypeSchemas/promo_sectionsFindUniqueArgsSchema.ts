import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { promo_sectionsIncludeSchema } from '../inputTypeSchemas/promo_sectionsIncludeSchema';
import { promo_sectionsWhereUniqueInputSchema } from '../inputTypeSchemas/promo_sectionsWhereUniqueInputSchema';
import { promo_sections_buyFindManyArgsSchema } from '../outputTypeSchemas/promo_sections_buyFindManyArgsSchema';
import { translatableArgsSchema } from '../outputTypeSchemas/translatableArgsSchema';
import { Promo_sectionsCountOutputTypeArgsSchema } from '../outputTypeSchemas/Promo_sectionsCountOutputTypeArgsSchema';
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const promo_sectionsSelectSchema: z.ZodType<Prisma.promo_sectionsSelect> = z
	.object({
		promo_sections_id: z.boolean().optional(),
		name: z.boolean().optional(),
		tag: z.boolean().optional(),
		active: z.boolean().optional(),
		description: z.boolean().optional(),
		prices: z.boolean().optional(),
		limits: z.boolean().optional(),
		stripe_product_id: z.boolean().optional(),
		canPurchase: z.boolean().optional(),
		t1price: z.boolean().optional(),
		t2price: z.boolean().optional(),
		t3price: z.boolean().optional(),
		order: z.boolean().optional(),
		service_type: z.boolean().optional(),
		promo_duration_days: z.boolean().optional(),
		translatable_id: z.boolean().optional(),
		display_cards_per_page: z.boolean().optional(),
		promo_section_buy: z.union([z.boolean(), z.lazy(() => promo_sections_buyFindManyArgsSchema)]).optional(),
		translatable: z.union([z.boolean(), z.lazy(() => translatableArgsSchema)]).optional(),
		_count: z.union([z.boolean(), z.lazy(() => Promo_sectionsCountOutputTypeArgsSchema)]).optional(),
	})
	.strict();

export const promo_sectionsFindUniqueArgsSchema: z.ZodType<Prisma.promo_sectionsFindUniqueArgs> = z
	.object({
		select: promo_sectionsSelectSchema.optional(),
		include: promo_sectionsIncludeSchema.optional(),
		where: promo_sectionsWhereUniqueInputSchema,
	})
	.strict();

export default promo_sectionsFindUniqueArgsSchema;
