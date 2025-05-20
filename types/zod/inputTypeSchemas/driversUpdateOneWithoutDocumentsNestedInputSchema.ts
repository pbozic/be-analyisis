import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { driversCreateWithoutDocumentsInputSchema } from './driversCreateWithoutDocumentsInputSchema';
import { driversUncheckedCreateWithoutDocumentsInputSchema } from './driversUncheckedCreateWithoutDocumentsInputSchema';
import { driversCreateOrConnectWithoutDocumentsInputSchema } from './driversCreateOrConnectWithoutDocumentsInputSchema';
import { driversUpsertWithoutDocumentsInputSchema } from './driversUpsertWithoutDocumentsInputSchema';
import { driversWhereInputSchema } from './driversWhereInputSchema';
import { driversWhereUniqueInputSchema } from './driversWhereUniqueInputSchema';
import { driversUpdateToOneWithWhereWithoutDocumentsInputSchema } from './driversUpdateToOneWithWhereWithoutDocumentsInputSchema';
import { driversUpdateWithoutDocumentsInputSchema } from './driversUpdateWithoutDocumentsInputSchema';
import { driversUncheckedUpdateWithoutDocumentsInputSchema } from './driversUncheckedUpdateWithoutDocumentsInputSchema';

export const driversUpdateOneWithoutDocumentsNestedInputSchema: z.ZodType<Prisma.driversUpdateOneWithoutDocumentsNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => driversCreateWithoutDocumentsInputSchema),
					z.lazy(() => driversUncheckedCreateWithoutDocumentsInputSchema),
				])
				.optional(),
			connectOrCreate: z.lazy(() => driversCreateOrConnectWithoutDocumentsInputSchema).optional(),
			upsert: z.lazy(() => driversUpsertWithoutDocumentsInputSchema).optional(),
			disconnect: z.union([z.boolean(), z.lazy(() => driversWhereInputSchema)]).optional(),
			delete: z.union([z.boolean(), z.lazy(() => driversWhereInputSchema)]).optional(),
			connect: z.lazy(() => driversWhereUniqueInputSchema).optional(),
			update: z
				.union([
					z.lazy(() => driversUpdateToOneWithWhereWithoutDocumentsInputSchema),
					z.lazy(() => driversUpdateWithoutDocumentsInputSchema),
					z.lazy(() => driversUncheckedUpdateWithoutDocumentsInputSchema),
				])
				.optional(),
		})
		.strict();

export default driversUpdateOneWithoutDocumentsNestedInputSchema;
