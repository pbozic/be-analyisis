import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { addressesWhereInputSchema } from '../inputTypeSchemas/addressesWhereInputSchema';

export const addressesDeleteManyArgsSchema: z.ZodType<Prisma.addressesDeleteManyArgs> = z
	.object({
		where: addressesWhereInputSchema.optional(),
	})
	.strict();

export default addressesDeleteManyArgsSchema;
