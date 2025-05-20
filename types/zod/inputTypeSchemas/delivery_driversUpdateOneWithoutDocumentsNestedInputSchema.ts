import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { delivery_driversCreateWithoutDocumentsInputSchema } from './delivery_driversCreateWithoutDocumentsInputSchema';
import { delivery_driversUncheckedCreateWithoutDocumentsInputSchema } from './delivery_driversUncheckedCreateWithoutDocumentsInputSchema';
import { delivery_driversCreateOrConnectWithoutDocumentsInputSchema } from './delivery_driversCreateOrConnectWithoutDocumentsInputSchema';
import { delivery_driversUpsertWithoutDocumentsInputSchema } from './delivery_driversUpsertWithoutDocumentsInputSchema';
import { delivery_driversWhereInputSchema } from './delivery_driversWhereInputSchema';
import { delivery_driversWhereUniqueInputSchema } from './delivery_driversWhereUniqueInputSchema';
import { delivery_driversUpdateToOneWithWhereWithoutDocumentsInputSchema } from './delivery_driversUpdateToOneWithWhereWithoutDocumentsInputSchema';
import { delivery_driversUpdateWithoutDocumentsInputSchema } from './delivery_driversUpdateWithoutDocumentsInputSchema';
import { delivery_driversUncheckedUpdateWithoutDocumentsInputSchema } from './delivery_driversUncheckedUpdateWithoutDocumentsInputSchema';

export const delivery_driversUpdateOneWithoutDocumentsNestedInputSchema: z.ZodType<Prisma.delivery_driversUpdateOneWithoutDocumentsNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => delivery_driversCreateWithoutDocumentsInputSchema),
					z.lazy(() => delivery_driversUncheckedCreateWithoutDocumentsInputSchema),
				])
				.optional(),
			connectOrCreate: z.lazy(() => delivery_driversCreateOrConnectWithoutDocumentsInputSchema).optional(),
			upsert: z.lazy(() => delivery_driversUpsertWithoutDocumentsInputSchema).optional(),
			disconnect: z.union([z.boolean(), z.lazy(() => delivery_driversWhereInputSchema)]).optional(),
			delete: z.union([z.boolean(), z.lazy(() => delivery_driversWhereInputSchema)]).optional(),
			connect: z.lazy(() => delivery_driversWhereUniqueInputSchema).optional(),
			update: z
				.union([
					z.lazy(() => delivery_driversUpdateToOneWithWhereWithoutDocumentsInputSchema),
					z.lazy(() => delivery_driversUpdateWithoutDocumentsInputSchema),
					z.lazy(() => delivery_driversUncheckedUpdateWithoutDocumentsInputSchema),
				])
				.optional(),
		})
		.strict();

export default delivery_driversUpdateOneWithoutDocumentsNestedInputSchema;
