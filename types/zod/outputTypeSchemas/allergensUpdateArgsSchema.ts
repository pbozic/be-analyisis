import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { allergensUpdateInputSchema } from '../inputTypeSchemas/allergensUpdateInputSchema';
import { allergensUncheckedUpdateInputSchema } from '../inputTypeSchemas/allergensUncheckedUpdateInputSchema';
import { allergensWhereUniqueInputSchema } from '../inputTypeSchemas/allergensWhereUniqueInputSchema';
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

export const allergensUpdateArgsSchema: z.ZodType<Prisma.allergensUpdateArgs> = z
	.object({
		select: allergensSelectSchema.optional(),
		data: z.union([allergensUpdateInputSchema, allergensUncheckedUpdateInputSchema]),
		where: allergensWhereUniqueInputSchema,
	})
	.strict();

export default allergensUpdateArgsSchema;
