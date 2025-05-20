import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { driversWhereInputSchema } from './driversWhereInputSchema';
import { driversUpdateWithoutDriver_municipalitiesInputSchema } from './driversUpdateWithoutDriver_municipalitiesInputSchema';
import { driversUncheckedUpdateWithoutDriver_municipalitiesInputSchema } from './driversUncheckedUpdateWithoutDriver_municipalitiesInputSchema';

export const driversUpdateToOneWithWhereWithoutDriver_municipalitiesInputSchema: z.ZodType<Prisma.driversUpdateToOneWithWhereWithoutDriver_municipalitiesInput> =
	z
		.object({
			where: z.lazy(() => driversWhereInputSchema).optional(),
			data: z.union([
				z.lazy(() => driversUpdateWithoutDriver_municipalitiesInputSchema),
				z.lazy(() => driversUncheckedUpdateWithoutDriver_municipalitiesInputSchema),
			]),
		})
		.strict();

export default driversUpdateToOneWithWhereWithoutDriver_municipalitiesInputSchema;
