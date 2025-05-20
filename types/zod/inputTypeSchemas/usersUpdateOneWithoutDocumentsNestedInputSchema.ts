import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersCreateWithoutDocumentsInputSchema } from './usersCreateWithoutDocumentsInputSchema';
import { usersUncheckedCreateWithoutDocumentsInputSchema } from './usersUncheckedCreateWithoutDocumentsInputSchema';
import { usersCreateOrConnectWithoutDocumentsInputSchema } from './usersCreateOrConnectWithoutDocumentsInputSchema';
import { usersUpsertWithoutDocumentsInputSchema } from './usersUpsertWithoutDocumentsInputSchema';
import { usersWhereInputSchema } from './usersWhereInputSchema';
import { usersWhereUniqueInputSchema } from './usersWhereUniqueInputSchema';
import { usersUpdateToOneWithWhereWithoutDocumentsInputSchema } from './usersUpdateToOneWithWhereWithoutDocumentsInputSchema';
import { usersUpdateWithoutDocumentsInputSchema } from './usersUpdateWithoutDocumentsInputSchema';
import { usersUncheckedUpdateWithoutDocumentsInputSchema } from './usersUncheckedUpdateWithoutDocumentsInputSchema';

export const usersUpdateOneWithoutDocumentsNestedInputSchema: z.ZodType<Prisma.usersUpdateOneWithoutDocumentsNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => usersCreateWithoutDocumentsInputSchema),
					z.lazy(() => usersUncheckedCreateWithoutDocumentsInputSchema),
				])
				.optional(),
			connectOrCreate: z.lazy(() => usersCreateOrConnectWithoutDocumentsInputSchema).optional(),
			upsert: z.lazy(() => usersUpsertWithoutDocumentsInputSchema).optional(),
			disconnect: z.union([z.boolean(), z.lazy(() => usersWhereInputSchema)]).optional(),
			delete: z.union([z.boolean(), z.lazy(() => usersWhereInputSchema)]).optional(),
			connect: z.lazy(() => usersWhereUniqueInputSchema).optional(),
			update: z
				.union([
					z.lazy(() => usersUpdateToOneWithWhereWithoutDocumentsInputSchema),
					z.lazy(() => usersUpdateWithoutDocumentsInputSchema),
					z.lazy(() => usersUncheckedUpdateWithoutDocumentsInputSchema),
				])
				.optional(),
		})
		.strict();

export default usersUpdateOneWithoutDocumentsNestedInputSchema;
