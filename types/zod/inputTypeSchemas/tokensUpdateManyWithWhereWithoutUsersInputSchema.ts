import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { tokensScalarWhereInputSchema } from './tokensScalarWhereInputSchema';
import { tokensUpdateManyMutationInputSchema } from './tokensUpdateManyMutationInputSchema';
import { tokensUncheckedUpdateManyWithoutUsersInputSchema } from './tokensUncheckedUpdateManyWithoutUsersInputSchema';

export const tokensUpdateManyWithWhereWithoutUsersInputSchema: z.ZodType<Prisma.tokensUpdateManyWithWhereWithoutUsersInput> =
	z
		.object({
			where: z.lazy(() => tokensScalarWhereInputSchema),
			data: z.union([
				z.lazy(() => tokensUpdateManyMutationInputSchema),
				z.lazy(() => tokensUncheckedUpdateManyWithoutUsersInputSchema),
			]),
		})
		.strict();

export default tokensUpdateManyWithWhereWithoutUsersInputSchema;
