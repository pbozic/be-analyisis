import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { businessUpdateManyMutationInputSchema } from '../inputTypeSchemas/businessUpdateManyMutationInputSchema';
import { businessUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/businessUncheckedUpdateManyInputSchema';
import { businessWhereInputSchema } from '../inputTypeSchemas/businessWhereInputSchema';

export const businessUpdateManyArgsSchema: z.ZodType<Prisma.businessUpdateManyArgs> = z
	.object({
		data: z.union([businessUpdateManyMutationInputSchema, businessUncheckedUpdateManyInputSchema]),
		where: businessWhereInputSchema.optional(),
	})
	.strict();

export default businessUpdateManyArgsSchema;
