import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { driversWhereUniqueInputSchema } from './driversWhereUniqueInputSchema';
import { driversCreateWithoutDocumentsInputSchema } from './driversCreateWithoutDocumentsInputSchema';
import { driversUncheckedCreateWithoutDocumentsInputSchema } from './driversUncheckedCreateWithoutDocumentsInputSchema';

export const driversCreateOrConnectWithoutDocumentsInputSchema: z.ZodType<Prisma.driversCreateOrConnectWithoutDocumentsInput> =
	z
		.object({
			where: z.lazy(() => driversWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => driversCreateWithoutDocumentsInputSchema),
				z.lazy(() => driversUncheckedCreateWithoutDocumentsInputSchema),
			]),
		})
		.strict();

export default driversCreateOrConnectWithoutDocumentsInputSchema;
