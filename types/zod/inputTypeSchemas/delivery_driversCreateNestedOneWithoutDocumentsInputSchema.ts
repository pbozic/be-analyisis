import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { delivery_driversCreateWithoutDocumentsInputSchema } from './delivery_driversCreateWithoutDocumentsInputSchema';
import { delivery_driversUncheckedCreateWithoutDocumentsInputSchema } from './delivery_driversUncheckedCreateWithoutDocumentsInputSchema';
import { delivery_driversCreateOrConnectWithoutDocumentsInputSchema } from './delivery_driversCreateOrConnectWithoutDocumentsInputSchema';
import { delivery_driversWhereUniqueInputSchema } from './delivery_driversWhereUniqueInputSchema';

export const delivery_driversCreateNestedOneWithoutDocumentsInputSchema: z.ZodType<Prisma.delivery_driversCreateNestedOneWithoutDocumentsInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => delivery_driversCreateWithoutDocumentsInputSchema),
					z.lazy(() => delivery_driversUncheckedCreateWithoutDocumentsInputSchema),
				])
				.optional(),
			connectOrCreate: z.lazy(() => delivery_driversCreateOrConnectWithoutDocumentsInputSchema).optional(),
			connect: z.lazy(() => delivery_driversWhereUniqueInputSchema).optional(),
		})
		.strict();

export default delivery_driversCreateNestedOneWithoutDocumentsInputSchema;
