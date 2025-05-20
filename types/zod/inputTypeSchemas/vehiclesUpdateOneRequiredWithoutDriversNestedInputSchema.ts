import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { vehiclesCreateWithoutDriversInputSchema } from './vehiclesCreateWithoutDriversInputSchema';
import { vehiclesUncheckedCreateWithoutDriversInputSchema } from './vehiclesUncheckedCreateWithoutDriversInputSchema';
import { vehiclesCreateOrConnectWithoutDriversInputSchema } from './vehiclesCreateOrConnectWithoutDriversInputSchema';
import { vehiclesUpsertWithoutDriversInputSchema } from './vehiclesUpsertWithoutDriversInputSchema';
import { vehiclesWhereUniqueInputSchema } from './vehiclesWhereUniqueInputSchema';
import { vehiclesUpdateToOneWithWhereWithoutDriversInputSchema } from './vehiclesUpdateToOneWithWhereWithoutDriversInputSchema';
import { vehiclesUpdateWithoutDriversInputSchema } from './vehiclesUpdateWithoutDriversInputSchema';
import { vehiclesUncheckedUpdateWithoutDriversInputSchema } from './vehiclesUncheckedUpdateWithoutDriversInputSchema';

export const vehiclesUpdateOneRequiredWithoutDriversNestedInputSchema: z.ZodType<Prisma.vehiclesUpdateOneRequiredWithoutDriversNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => vehiclesCreateWithoutDriversInputSchema),
					z.lazy(() => vehiclesUncheckedCreateWithoutDriversInputSchema),
				])
				.optional(),
			connectOrCreate: z.lazy(() => vehiclesCreateOrConnectWithoutDriversInputSchema).optional(),
			upsert: z.lazy(() => vehiclesUpsertWithoutDriversInputSchema).optional(),
			connect: z.lazy(() => vehiclesWhereUniqueInputSchema).optional(),
			update: z
				.union([
					z.lazy(() => vehiclesUpdateToOneWithWhereWithoutDriversInputSchema),
					z.lazy(() => vehiclesUpdateWithoutDriversInputSchema),
					z.lazy(() => vehiclesUncheckedUpdateWithoutDriversInputSchema),
				])
				.optional(),
		})
		.strict();

export default vehiclesUpdateOneRequiredWithoutDriversNestedInputSchema;
