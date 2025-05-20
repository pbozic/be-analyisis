import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { driversWhereUniqueInputSchema } from './driversWhereUniqueInputSchema';
import { driversCreateWithoutDriver_municipalitiesInputSchema } from './driversCreateWithoutDriver_municipalitiesInputSchema';
import { driversUncheckedCreateWithoutDriver_municipalitiesInputSchema } from './driversUncheckedCreateWithoutDriver_municipalitiesInputSchema';

export const driversCreateOrConnectWithoutDriver_municipalitiesInputSchema: z.ZodType<Prisma.driversCreateOrConnectWithoutDriver_municipalitiesInput> =
	z
		.object({
			where: z.lazy(() => driversWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => driversCreateWithoutDriver_municipalitiesInputSchema),
				z.lazy(() => driversUncheckedCreateWithoutDriver_municipalitiesInputSchema),
			]),
		})
		.strict();

export default driversCreateOrConnectWithoutDriver_municipalitiesInputSchema;
