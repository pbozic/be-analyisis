import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { business_usersScalarWhereInputSchema } from './business_usersScalarWhereInputSchema';
import { business_usersUpdateManyMutationInputSchema } from './business_usersUpdateManyMutationInputSchema';
import { business_usersUncheckedUpdateManyWithoutBusinessInputSchema } from './business_usersUncheckedUpdateManyWithoutBusinessInputSchema';

export const business_usersUpdateManyWithWhereWithoutBusinessInputSchema: z.ZodType<Prisma.business_usersUpdateManyWithWhereWithoutBusinessInput> =
	z
		.object({
			where: z.lazy(() => business_usersScalarWhereInputSchema),
			data: z.union([
				z.lazy(() => business_usersUpdateManyMutationInputSchema),
				z.lazy(() => business_usersUncheckedUpdateManyWithoutBusinessInputSchema),
			]),
		})
		.strict();

export default business_usersUpdateManyWithWhereWithoutBusinessInputSchema;
