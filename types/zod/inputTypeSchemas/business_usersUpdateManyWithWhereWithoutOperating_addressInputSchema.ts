import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { business_usersScalarWhereInputSchema } from './business_usersScalarWhereInputSchema';
import { business_usersUpdateManyMutationInputSchema } from './business_usersUpdateManyMutationInputSchema';
import { business_usersUncheckedUpdateManyWithoutOperating_addressInputSchema } from './business_usersUncheckedUpdateManyWithoutOperating_addressInputSchema';

export const business_usersUpdateManyWithWhereWithoutOperating_addressInputSchema: z.ZodType<Prisma.business_usersUpdateManyWithWhereWithoutOperating_addressInput> =
	z
		.object({
			where: z.lazy(() => business_usersScalarWhereInputSchema),
			data: z.union([
				z.lazy(() => business_usersUpdateManyMutationInputSchema),
				z.lazy(() => business_usersUncheckedUpdateManyWithoutOperating_addressInputSchema),
			]),
		})
		.strict();

export default business_usersUpdateManyWithWhereWithoutOperating_addressInputSchema;
