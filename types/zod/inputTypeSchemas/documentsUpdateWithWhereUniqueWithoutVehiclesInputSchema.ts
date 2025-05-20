import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { documentsWhereUniqueInputSchema } from './documentsWhereUniqueInputSchema';
import { documentsUpdateWithoutVehiclesInputSchema } from './documentsUpdateWithoutVehiclesInputSchema';
import { documentsUncheckedUpdateWithoutVehiclesInputSchema } from './documentsUncheckedUpdateWithoutVehiclesInputSchema';

export const documentsUpdateWithWhereUniqueWithoutVehiclesInputSchema: z.ZodType<Prisma.documentsUpdateWithWhereUniqueWithoutVehiclesInput> =
	z
		.object({
			where: z.lazy(() => documentsWhereUniqueInputSchema),
			data: z.union([
				z.lazy(() => documentsUpdateWithoutVehiclesInputSchema),
				z.lazy(() => documentsUncheckedUpdateWithoutVehiclesInputSchema),
			]),
		})
		.strict();

export default documentsUpdateWithWhereUniqueWithoutVehiclesInputSchema;
