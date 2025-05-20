import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { fiscal_devicesCreateManyInputSchema } from '../inputTypeSchemas/fiscal_devicesCreateManyInputSchema';

export const fiscal_devicesCreateManyAndReturnArgsSchema: z.ZodType<Prisma.fiscal_devicesCreateManyAndReturnArgs> = z
	.object({
		data: z.union([fiscal_devicesCreateManyInputSchema, fiscal_devicesCreateManyInputSchema.array()]),
		skipDuplicates: z.boolean().optional(),
	})
	.strict();

export default fiscal_devicesCreateManyAndReturnArgsSchema;
