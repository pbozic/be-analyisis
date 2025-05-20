import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersCreateWithoutTokensInputSchema } from './usersCreateWithoutTokensInputSchema';
import { usersUncheckedCreateWithoutTokensInputSchema } from './usersUncheckedCreateWithoutTokensInputSchema';
import { usersCreateOrConnectWithoutTokensInputSchema } from './usersCreateOrConnectWithoutTokensInputSchema';
import { usersWhereUniqueInputSchema } from './usersWhereUniqueInputSchema';

export const usersCreateNestedOneWithoutTokensInputSchema: z.ZodType<Prisma.usersCreateNestedOneWithoutTokensInput> = z
	.object({
		create: z
			.union([
				z.lazy(() => usersCreateWithoutTokensInputSchema),
				z.lazy(() => usersUncheckedCreateWithoutTokensInputSchema),
			])
			.optional(),
		connectOrCreate: z.lazy(() => usersCreateOrConnectWithoutTokensInputSchema).optional(),
		connect: z.lazy(() => usersWhereUniqueInputSchema).optional(),
	})
	.strict();

export default usersCreateNestedOneWithoutTokensInputSchema;
