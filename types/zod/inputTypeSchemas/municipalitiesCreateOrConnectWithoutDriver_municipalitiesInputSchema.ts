import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { municipalitiesWhereUniqueInputSchema } from './municipalitiesWhereUniqueInputSchema';
import { municipalitiesCreateWithoutDriver_municipalitiesInputSchema } from './municipalitiesCreateWithoutDriver_municipalitiesInputSchema';
import { municipalitiesUncheckedCreateWithoutDriver_municipalitiesInputSchema } from './municipalitiesUncheckedCreateWithoutDriver_municipalitiesInputSchema';

export const municipalitiesCreateOrConnectWithoutDriver_municipalitiesInputSchema: z.ZodType<Prisma.municipalitiesCreateOrConnectWithoutDriver_municipalitiesInput> =
	z
		.object({
			where: z.lazy(() => municipalitiesWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => municipalitiesCreateWithoutDriver_municipalitiesInputSchema),
				z.lazy(() => municipalitiesUncheckedCreateWithoutDriver_municipalitiesInputSchema),
			]),
		})
		.strict();

export default municipalitiesCreateOrConnectWithoutDriver_municipalitiesInputSchema;
