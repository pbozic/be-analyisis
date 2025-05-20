import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { businessCreateWithoutReservationsInputSchema } from './businessCreateWithoutReservationsInputSchema';
import { businessUncheckedCreateWithoutReservationsInputSchema } from './businessUncheckedCreateWithoutReservationsInputSchema';
import { businessCreateOrConnectWithoutReservationsInputSchema } from './businessCreateOrConnectWithoutReservationsInputSchema';
import { businessWhereUniqueInputSchema } from './businessWhereUniqueInputSchema';

export const businessCreateNestedOneWithoutReservationsInputSchema: z.ZodType<Prisma.businessCreateNestedOneWithoutReservationsInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => businessCreateWithoutReservationsInputSchema),
					z.lazy(() => businessUncheckedCreateWithoutReservationsInputSchema),
				])
				.optional(),
			connectOrCreate: z.lazy(() => businessCreateOrConnectWithoutReservationsInputSchema).optional(),
			connect: z.lazy(() => businessWhereUniqueInputSchema).optional(),
		})
		.strict();

export default businessCreateNestedOneWithoutReservationsInputSchema;
