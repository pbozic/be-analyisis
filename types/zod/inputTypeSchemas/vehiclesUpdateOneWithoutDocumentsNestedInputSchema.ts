import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { vehiclesCreateWithoutDocumentsInputSchema } from './vehiclesCreateWithoutDocumentsInputSchema';
import { vehiclesUncheckedCreateWithoutDocumentsInputSchema } from './vehiclesUncheckedCreateWithoutDocumentsInputSchema';
import { vehiclesCreateOrConnectWithoutDocumentsInputSchema } from './vehiclesCreateOrConnectWithoutDocumentsInputSchema';
import { vehiclesUpsertWithoutDocumentsInputSchema } from './vehiclesUpsertWithoutDocumentsInputSchema';
import { vehiclesWhereInputSchema } from './vehiclesWhereInputSchema';
import { vehiclesWhereUniqueInputSchema } from './vehiclesWhereUniqueInputSchema';
import { vehiclesUpdateToOneWithWhereWithoutDocumentsInputSchema } from './vehiclesUpdateToOneWithWhereWithoutDocumentsInputSchema';
import { vehiclesUpdateWithoutDocumentsInputSchema } from './vehiclesUpdateWithoutDocumentsInputSchema';
import { vehiclesUncheckedUpdateWithoutDocumentsInputSchema } from './vehiclesUncheckedUpdateWithoutDocumentsInputSchema';

export const vehiclesUpdateOneWithoutDocumentsNestedInputSchema: z.ZodType<Prisma.vehiclesUpdateOneWithoutDocumentsNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => vehiclesCreateWithoutDocumentsInputSchema),
					z.lazy(() => vehiclesUncheckedCreateWithoutDocumentsInputSchema),
				])
				.optional(),
			connectOrCreate: z.lazy(() => vehiclesCreateOrConnectWithoutDocumentsInputSchema).optional(),
			upsert: z.lazy(() => vehiclesUpsertWithoutDocumentsInputSchema).optional(),
			disconnect: z.union([z.boolean(), z.lazy(() => vehiclesWhereInputSchema)]).optional(),
			delete: z.union([z.boolean(), z.lazy(() => vehiclesWhereInputSchema)]).optional(),
			connect: z.lazy(() => vehiclesWhereUniqueInputSchema).optional(),
			update: z
				.union([
					z.lazy(() => vehiclesUpdateToOneWithWhereWithoutDocumentsInputSchema),
					z.lazy(() => vehiclesUpdateWithoutDocumentsInputSchema),
					z.lazy(() => vehiclesUncheckedUpdateWithoutDocumentsInputSchema),
				])
				.optional(),
		})
		.strict();

export default vehiclesUpdateOneWithoutDocumentsNestedInputSchema;
