import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { municipalitiesWhereInputSchema } from './municipalitiesWhereInputSchema';
import { municipalitiesUpdateWithoutDriver_municipalitiesInputSchema } from './municipalitiesUpdateWithoutDriver_municipalitiesInputSchema';
import { municipalitiesUncheckedUpdateWithoutDriver_municipalitiesInputSchema } from './municipalitiesUncheckedUpdateWithoutDriver_municipalitiesInputSchema';

export const municipalitiesUpdateToOneWithWhereWithoutDriver_municipalitiesInputSchema: z.ZodType<Prisma.municipalitiesUpdateToOneWithWhereWithoutDriver_municipalitiesInput> =
	z
		.object({
			where: z.lazy(() => municipalitiesWhereInputSchema).optional(),
			data: z.union([
				z.lazy(() => municipalitiesUpdateWithoutDriver_municipalitiesInputSchema),
				z.lazy(() => municipalitiesUncheckedUpdateWithoutDriver_municipalitiesInputSchema),
			]),
		})
		.strict();

export default municipalitiesUpdateToOneWithWhereWithoutDriver_municipalitiesInputSchema;
