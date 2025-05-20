import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { driversUpdateManyMutationInputSchema } from '../inputTypeSchemas/driversUpdateManyMutationInputSchema';
import { driversUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/driversUncheckedUpdateManyInputSchema';
import { driversWhereInputSchema } from '../inputTypeSchemas/driversWhereInputSchema';

export const driversUpdateManyArgsSchema: z.ZodType<Prisma.driversUpdateManyArgs> = z
	.object({
		data: z.union([driversUpdateManyMutationInputSchema, driversUncheckedUpdateManyInputSchema]),
		where: driversWhereInputSchema.optional(),
	})
	.strict();

export default driversUpdateManyArgsSchema;
