import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { weather_dataWhereUniqueInputSchema } from './weather_dataWhereUniqueInputSchema';
import { weather_dataCreateWithoutSettlementInputSchema } from './weather_dataCreateWithoutSettlementInputSchema';
import { weather_dataUncheckedCreateWithoutSettlementInputSchema } from './weather_dataUncheckedCreateWithoutSettlementInputSchema';

export const weather_dataCreateOrConnectWithoutSettlementInputSchema: z.ZodType<Prisma.weather_dataCreateOrConnectWithoutSettlementInput> =
	z
		.object({
			where: z.lazy(() => weather_dataWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => weather_dataCreateWithoutSettlementInputSchema),
				z.lazy(() => weather_dataUncheckedCreateWithoutSettlementInputSchema),
			]),
		})
		.strict();

export default weather_dataCreateOrConnectWithoutSettlementInputSchema;
