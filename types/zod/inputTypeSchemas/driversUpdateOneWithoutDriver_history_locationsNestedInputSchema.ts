import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { driversCreateWithoutDriver_history_locationsInputSchema } from './driversCreateWithoutDriver_history_locationsInputSchema';
import { driversUncheckedCreateWithoutDriver_history_locationsInputSchema } from './driversUncheckedCreateWithoutDriver_history_locationsInputSchema';
import { driversCreateOrConnectWithoutDriver_history_locationsInputSchema } from './driversCreateOrConnectWithoutDriver_history_locationsInputSchema';
import { driversUpsertWithoutDriver_history_locationsInputSchema } from './driversUpsertWithoutDriver_history_locationsInputSchema';
import { driversWhereInputSchema } from './driversWhereInputSchema';
import { driversWhereUniqueInputSchema } from './driversWhereUniqueInputSchema';
import { driversUpdateToOneWithWhereWithoutDriver_history_locationsInputSchema } from './driversUpdateToOneWithWhereWithoutDriver_history_locationsInputSchema';
import { driversUpdateWithoutDriver_history_locationsInputSchema } from './driversUpdateWithoutDriver_history_locationsInputSchema';
import { driversUncheckedUpdateWithoutDriver_history_locationsInputSchema } from './driversUncheckedUpdateWithoutDriver_history_locationsInputSchema';

export const driversUpdateOneWithoutDriver_history_locationsNestedInputSchema: z.ZodType<Prisma.driversUpdateOneWithoutDriver_history_locationsNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => driversCreateWithoutDriver_history_locationsInputSchema),
					z.lazy(() => driversUncheckedCreateWithoutDriver_history_locationsInputSchema),
				])
				.optional(),
			connectOrCreate: z.lazy(() => driversCreateOrConnectWithoutDriver_history_locationsInputSchema).optional(),
			upsert: z.lazy(() => driversUpsertWithoutDriver_history_locationsInputSchema).optional(),
			disconnect: z.union([z.boolean(), z.lazy(() => driversWhereInputSchema)]).optional(),
			delete: z.union([z.boolean(), z.lazy(() => driversWhereInputSchema)]).optional(),
			connect: z.lazy(() => driversWhereUniqueInputSchema).optional(),
			update: z
				.union([
					z.lazy(() => driversUpdateToOneWithWhereWithoutDriver_history_locationsInputSchema),
					z.lazy(() => driversUpdateWithoutDriver_history_locationsInputSchema),
					z.lazy(() => driversUncheckedUpdateWithoutDriver_history_locationsInputSchema),
				])
				.optional(),
		})
		.strict();

export default driversUpdateOneWithoutDriver_history_locationsNestedInputSchema;
