import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { business_clientsScalarWhereInputSchema } from './business_clientsScalarWhereInputSchema';
import { business_clientsUpdateManyMutationInputSchema } from './business_clientsUpdateManyMutationInputSchema';
import { business_clientsUncheckedUpdateManyWithoutBusinessInputSchema } from './business_clientsUncheckedUpdateManyWithoutBusinessInputSchema';

export const business_clientsUpdateManyWithWhereWithoutBusinessInputSchema: z.ZodType<Prisma.business_clientsUpdateManyWithWhereWithoutBusinessInput> =
	z
		.object({
			where: z.lazy(() => business_clientsScalarWhereInputSchema),
			data: z.union([
				z.lazy(() => business_clientsUpdateManyMutationInputSchema),
				z.lazy(() => business_clientsUncheckedUpdateManyWithoutBusinessInputSchema),
			]),
		})
		.strict();

export default business_clientsUpdateManyWithWhereWithoutBusinessInputSchema;
