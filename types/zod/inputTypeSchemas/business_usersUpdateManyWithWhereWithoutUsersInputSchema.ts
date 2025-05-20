import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { business_usersScalarWhereInputSchema } from './business_usersScalarWhereInputSchema';
import { business_usersUpdateManyMutationInputSchema } from './business_usersUpdateManyMutationInputSchema';
import { business_usersUncheckedUpdateManyWithoutUsersInputSchema } from './business_usersUncheckedUpdateManyWithoutUsersInputSchema';

export const business_usersUpdateManyWithWhereWithoutUsersInputSchema: z.ZodType<Prisma.business_usersUpdateManyWithWhereWithoutUsersInput> =
	z
		.object({
			where: z.lazy(() => business_usersScalarWhereInputSchema),
			data: z.union([
				z.lazy(() => business_usersUpdateManyMutationInputSchema),
				z.lazy(() => business_usersUncheckedUpdateManyWithoutUsersInputSchema),
			]),
		})
		.strict();

export default business_usersUpdateManyWithWhereWithoutUsersInputSchema;
