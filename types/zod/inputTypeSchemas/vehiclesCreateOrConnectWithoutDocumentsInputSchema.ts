import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { vehiclesWhereUniqueInputSchema } from './vehiclesWhereUniqueInputSchema';
import { vehiclesCreateWithoutDocumentsInputSchema } from './vehiclesCreateWithoutDocumentsInputSchema';
import { vehiclesUncheckedCreateWithoutDocumentsInputSchema } from './vehiclesUncheckedCreateWithoutDocumentsInputSchema';

export const vehiclesCreateOrConnectWithoutDocumentsInputSchema: z.ZodType<Prisma.vehiclesCreateOrConnectWithoutDocumentsInput> =
	z
		.object({
			where: z.lazy(() => vehiclesWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => vehiclesCreateWithoutDocumentsInputSchema),
				z.lazy(() => vehiclesUncheckedCreateWithoutDocumentsInputSchema),
			]),
		})
		.strict();

export default vehiclesCreateOrConnectWithoutDocumentsInputSchema;
