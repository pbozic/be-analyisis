import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { business_clientsUpdateManyMutationInputSchema } from '../inputTypeSchemas/business_clientsUpdateManyMutationInputSchema';
import { business_clientsUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/business_clientsUncheckedUpdateManyInputSchema';
import { business_clientsWhereInputSchema } from '../inputTypeSchemas/business_clientsWhereInputSchema';

export const business_clientsUpdateManyArgsSchema: z.ZodType<Prisma.business_clientsUpdateManyArgs> = z
	.object({
		data: z.union([business_clientsUpdateManyMutationInputSchema, business_clientsUncheckedUpdateManyInputSchema]),
		where: business_clientsWhereInputSchema.optional(),
	})
	.strict();

export default business_clientsUpdateManyArgsSchema;
