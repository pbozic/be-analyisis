import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { settlementsWhereUniqueInputSchema } from './settlementsWhereUniqueInputSchema';
import { settlementsCreateWithoutWeather_dataInputSchema } from './settlementsCreateWithoutWeather_dataInputSchema';
import { settlementsUncheckedCreateWithoutWeather_dataInputSchema } from './settlementsUncheckedCreateWithoutWeather_dataInputSchema';

export const settlementsCreateOrConnectWithoutWeather_dataInputSchema: z.ZodType<Prisma.settlementsCreateOrConnectWithoutWeather_dataInput> =
	z
		.object({
			where: z.lazy(() => settlementsWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => settlementsCreateWithoutWeather_dataInputSchema),
				z.lazy(() => settlementsUncheckedCreateWithoutWeather_dataInputSchema),
			]),
		})
		.strict();

export default settlementsCreateOrConnectWithoutWeather_dataInputSchema;
