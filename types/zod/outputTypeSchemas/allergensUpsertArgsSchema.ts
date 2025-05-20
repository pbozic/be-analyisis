import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { allergensWhereUniqueInputSchema } from '../inputTypeSchemas/allergensWhereUniqueInputSchema';
import { allergensCreateInputSchema } from '../inputTypeSchemas/allergensCreateInputSchema';
import { allergensUncheckedCreateInputSchema } from '../inputTypeSchemas/allergensUncheckedCreateInputSchema';
import { allergensUpdateInputSchema } from '../inputTypeSchemas/allergensUpdateInputSchema';
import { allergensUncheckedUpdateInputSchema } from '../inputTypeSchemas/allergensUncheckedUpdateInputSchema';
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const allergensSelectSchema: z.ZodType<Prisma.allergensSelect> = z
	.object({
		allergen_id: z.boolean().optional(),
		name: z.boolean().optional(),
		description: z.boolean().optional(),
		code: z.boolean().optional(),
	})
	.strict();

export const allergensUpsertArgsSchema: z.ZodType<Prisma.allergensUpsertArgs> = z
	.object({
		select: allergensSelectSchema.optional(),
		where: allergensWhereUniqueInputSchema,
		create: z.union([allergensCreateInputSchema, allergensUncheckedCreateInputSchema]),
		update: z.union([allergensUpdateInputSchema, allergensUncheckedUpdateInputSchema]),
	})
	.strict();

export default allergensUpsertArgsSchema;
