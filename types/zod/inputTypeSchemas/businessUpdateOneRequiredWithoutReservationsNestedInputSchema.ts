import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { businessCreateWithoutReservationsInputSchema } from './businessCreateWithoutReservationsInputSchema';
import { businessUncheckedCreateWithoutReservationsInputSchema } from './businessUncheckedCreateWithoutReservationsInputSchema';
import { businessCreateOrConnectWithoutReservationsInputSchema } from './businessCreateOrConnectWithoutReservationsInputSchema';
import { businessUpsertWithoutReservationsInputSchema } from './businessUpsertWithoutReservationsInputSchema';
import { businessWhereUniqueInputSchema } from './businessWhereUniqueInputSchema';
import { businessUpdateToOneWithWhereWithoutReservationsInputSchema } from './businessUpdateToOneWithWhereWithoutReservationsInputSchema';
import { businessUpdateWithoutReservationsInputSchema } from './businessUpdateWithoutReservationsInputSchema';
import { businessUncheckedUpdateWithoutReservationsInputSchema } from './businessUncheckedUpdateWithoutReservationsInputSchema';

export const businessUpdateOneRequiredWithoutReservationsNestedInputSchema: z.ZodType<Prisma.businessUpdateOneRequiredWithoutReservationsNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => businessCreateWithoutReservationsInputSchema),
					z.lazy(() => businessUncheckedCreateWithoutReservationsInputSchema),
				])
				.optional(),
			connectOrCreate: z.lazy(() => businessCreateOrConnectWithoutReservationsInputSchema).optional(),
			upsert: z.lazy(() => businessUpsertWithoutReservationsInputSchema).optional(),
			connect: z.lazy(() => businessWhereUniqueInputSchema).optional(),
			update: z
				.union([
					z.lazy(() => businessUpdateToOneWithWhereWithoutReservationsInputSchema),
					z.lazy(() => businessUpdateWithoutReservationsInputSchema),
					z.lazy(() => businessUncheckedUpdateWithoutReservationsInputSchema),
				])
				.optional(),
		})
		.strict();

export default businessUpdateOneRequiredWithoutReservationsNestedInputSchema;
