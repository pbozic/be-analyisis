import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { menusCreateManyInputSchema } from '../inputTypeSchemas/menusCreateManyInputSchema';

export const menusCreateManyArgsSchema: z.ZodType<Prisma.menusCreateManyArgs> = z
	.object({
		data: z.union([menusCreateManyInputSchema, menusCreateManyInputSchema.array()]),
		skipDuplicates: z.boolean().optional(),
	})
	.strict();

export default menusCreateManyArgsSchema;
