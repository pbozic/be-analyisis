import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { vehiclesCreateWithoutDocumentsInputSchema } from './vehiclesCreateWithoutDocumentsInputSchema';
import { vehiclesUncheckedCreateWithoutDocumentsInputSchema } from './vehiclesUncheckedCreateWithoutDocumentsInputSchema';
import { vehiclesCreateOrConnectWithoutDocumentsInputSchema } from './vehiclesCreateOrConnectWithoutDocumentsInputSchema';
import { vehiclesWhereUniqueInputSchema } from './vehiclesWhereUniqueInputSchema';

export const vehiclesCreateNestedOneWithoutDocumentsInputSchema: z.ZodType<Prisma.vehiclesCreateNestedOneWithoutDocumentsInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => vehiclesCreateWithoutDocumentsInputSchema),
					z.lazy(() => vehiclesUncheckedCreateWithoutDocumentsInputSchema),
				])
				.optional(),
			connectOrCreate: z.lazy(() => vehiclesCreateOrConnectWithoutDocumentsInputSchema).optional(),
			connect: z.lazy(() => vehiclesWhereUniqueInputSchema).optional(),
		})
		.strict();

export default vehiclesCreateNestedOneWithoutDocumentsInputSchema;
