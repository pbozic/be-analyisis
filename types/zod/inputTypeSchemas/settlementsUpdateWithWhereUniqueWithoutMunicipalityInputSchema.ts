import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { settlementsWhereUniqueInputSchema } from './settlementsWhereUniqueInputSchema';
import { settlementsUpdateWithoutMunicipalityInputSchema } from './settlementsUpdateWithoutMunicipalityInputSchema';
import { settlementsUncheckedUpdateWithoutMunicipalityInputSchema } from './settlementsUncheckedUpdateWithoutMunicipalityInputSchema';

export const settlementsUpdateWithWhereUniqueWithoutMunicipalityInputSchema: z.ZodType<Prisma.settlementsUpdateWithWhereUniqueWithoutMunicipalityInput> =
	z
		.object({
			where: z.lazy(() => settlementsWhereUniqueInputSchema),
			data: z.union([
				z.lazy(() => settlementsUpdateWithoutMunicipalityInputSchema),
				z.lazy(() => settlementsUncheckedUpdateWithoutMunicipalityInputSchema),
			]),
		})
		.strict();

export default settlementsUpdateWithWhereUniqueWithoutMunicipalityInputSchema;
