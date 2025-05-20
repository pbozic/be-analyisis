import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersCreateWithoutReservationsInputSchema } from './usersCreateWithoutReservationsInputSchema';
import { usersUncheckedCreateWithoutReservationsInputSchema } from './usersUncheckedCreateWithoutReservationsInputSchema';
import { usersCreateOrConnectWithoutReservationsInputSchema } from './usersCreateOrConnectWithoutReservationsInputSchema';
import { usersUpsertWithoutReservationsInputSchema } from './usersUpsertWithoutReservationsInputSchema';
import { usersWhereUniqueInputSchema } from './usersWhereUniqueInputSchema';
import { usersUpdateToOneWithWhereWithoutReservationsInputSchema } from './usersUpdateToOneWithWhereWithoutReservationsInputSchema';
import { usersUpdateWithoutReservationsInputSchema } from './usersUpdateWithoutReservationsInputSchema';
import { usersUncheckedUpdateWithoutReservationsInputSchema } from './usersUncheckedUpdateWithoutReservationsInputSchema';

export const usersUpdateOneRequiredWithoutReservationsNestedInputSchema: z.ZodType<Prisma.usersUpdateOneRequiredWithoutReservationsNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => usersCreateWithoutReservationsInputSchema),
					z.lazy(() => usersUncheckedCreateWithoutReservationsInputSchema),
				])
				.optional(),
			connectOrCreate: z.lazy(() => usersCreateOrConnectWithoutReservationsInputSchema).optional(),
			upsert: z.lazy(() => usersUpsertWithoutReservationsInputSchema).optional(),
			connect: z.lazy(() => usersWhereUniqueInputSchema).optional(),
			update: z
				.union([
					z.lazy(() => usersUpdateToOneWithWhereWithoutReservationsInputSchema),
					z.lazy(() => usersUpdateWithoutReservationsInputSchema),
					z.lazy(() => usersUncheckedUpdateWithoutReservationsInputSchema),
				])
				.optional(),
		})
		.strict();

export default usersUpdateOneRequiredWithoutReservationsNestedInputSchema;
