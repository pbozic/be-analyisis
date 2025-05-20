import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { driversCreateWithoutDriver_history_locationsInputSchema } from './driversCreateWithoutDriver_history_locationsInputSchema';
import { driversUncheckedCreateWithoutDriver_history_locationsInputSchema } from './driversUncheckedCreateWithoutDriver_history_locationsInputSchema';
import { driversCreateOrConnectWithoutDriver_history_locationsInputSchema } from './driversCreateOrConnectWithoutDriver_history_locationsInputSchema';
import { driversWhereUniqueInputSchema } from './driversWhereUniqueInputSchema';

export const driversCreateNestedOneWithoutDriver_history_locationsInputSchema: z.ZodType<Prisma.driversCreateNestedOneWithoutDriver_history_locationsInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => driversCreateWithoutDriver_history_locationsInputSchema),
					z.lazy(() => driversUncheckedCreateWithoutDriver_history_locationsInputSchema),
				])
				.optional(),
			connectOrCreate: z.lazy(() => driversCreateOrConnectWithoutDriver_history_locationsInputSchema).optional(),
			connect: z.lazy(() => driversWhereUniqueInputSchema).optional(),
		})
		.strict();

export default driversCreateNestedOneWithoutDriver_history_locationsInputSchema;
