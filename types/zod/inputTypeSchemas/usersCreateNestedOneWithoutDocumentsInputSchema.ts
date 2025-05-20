import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersCreateWithoutDocumentsInputSchema } from './usersCreateWithoutDocumentsInputSchema';
import { usersUncheckedCreateWithoutDocumentsInputSchema } from './usersUncheckedCreateWithoutDocumentsInputSchema';
import { usersCreateOrConnectWithoutDocumentsInputSchema } from './usersCreateOrConnectWithoutDocumentsInputSchema';
import { usersWhereUniqueInputSchema } from './usersWhereUniqueInputSchema';

export const usersCreateNestedOneWithoutDocumentsInputSchema: z.ZodType<Prisma.usersCreateNestedOneWithoutDocumentsInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => usersCreateWithoutDocumentsInputSchema),
					z.lazy(() => usersUncheckedCreateWithoutDocumentsInputSchema),
				])
				.optional(),
			connectOrCreate: z.lazy(() => usersCreateOrConnectWithoutDocumentsInputSchema).optional(),
			connect: z.lazy(() => usersWhereUniqueInputSchema).optional(),
		})
		.strict();

export default usersCreateNestedOneWithoutDocumentsInputSchema;
