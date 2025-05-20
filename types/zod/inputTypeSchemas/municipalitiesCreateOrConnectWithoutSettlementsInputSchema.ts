import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { municipalitiesWhereUniqueInputSchema } from './municipalitiesWhereUniqueInputSchema';
import { municipalitiesCreateWithoutSettlementsInputSchema } from './municipalitiesCreateWithoutSettlementsInputSchema';
import { municipalitiesUncheckedCreateWithoutSettlementsInputSchema } from './municipalitiesUncheckedCreateWithoutSettlementsInputSchema';

export const municipalitiesCreateOrConnectWithoutSettlementsInputSchema: z.ZodType<Prisma.municipalitiesCreateOrConnectWithoutSettlementsInput> =
	z
		.object({
			where: z.lazy(() => municipalitiesWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => municipalitiesCreateWithoutSettlementsInputSchema),
				z.lazy(() => municipalitiesUncheckedCreateWithoutSettlementsInputSchema),
			]),
		})
		.strict();

export default municipalitiesCreateOrConnectWithoutSettlementsInputSchema;
