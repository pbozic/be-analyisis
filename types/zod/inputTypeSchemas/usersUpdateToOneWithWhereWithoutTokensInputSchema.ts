import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersWhereInputSchema } from './usersWhereInputSchema';
import { usersUpdateWithoutTokensInputSchema } from './usersUpdateWithoutTokensInputSchema';
import { usersUncheckedUpdateWithoutTokensInputSchema } from './usersUncheckedUpdateWithoutTokensInputSchema';

export const usersUpdateToOneWithWhereWithoutTokensInputSchema: z.ZodType<Prisma.usersUpdateToOneWithWhereWithoutTokensInput> =
	z
		.object({
			where: z.lazy(() => usersWhereInputSchema).optional(),
			data: z.union([
				z.lazy(() => usersUpdateWithoutTokensInputSchema),
				z.lazy(() => usersUncheckedUpdateWithoutTokensInputSchema),
			]),
		})
		.strict();

export default usersUpdateToOneWithWhereWithoutTokensInputSchema;
