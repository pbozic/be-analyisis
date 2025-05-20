import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { businessCreateWithoutWord_buysInputSchema } from './businessCreateWithoutWord_buysInputSchema';
import { businessUncheckedCreateWithoutWord_buysInputSchema } from './businessUncheckedCreateWithoutWord_buysInputSchema';
import { businessCreateOrConnectWithoutWord_buysInputSchema } from './businessCreateOrConnectWithoutWord_buysInputSchema';
import { businessUpsertWithoutWord_buysInputSchema } from './businessUpsertWithoutWord_buysInputSchema';
import { businessWhereUniqueInputSchema } from './businessWhereUniqueInputSchema';
import { businessUpdateToOneWithWhereWithoutWord_buysInputSchema } from './businessUpdateToOneWithWhereWithoutWord_buysInputSchema';
import { businessUpdateWithoutWord_buysInputSchema } from './businessUpdateWithoutWord_buysInputSchema';
import { businessUncheckedUpdateWithoutWord_buysInputSchema } from './businessUncheckedUpdateWithoutWord_buysInputSchema';

export const businessUpdateOneRequiredWithoutWord_buysNestedInputSchema: z.ZodType<Prisma.businessUpdateOneRequiredWithoutWord_buysNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => businessCreateWithoutWord_buysInputSchema),
					z.lazy(() => businessUncheckedCreateWithoutWord_buysInputSchema),
				])
				.optional(),
			connectOrCreate: z.lazy(() => businessCreateOrConnectWithoutWord_buysInputSchema).optional(),
			upsert: z.lazy(() => businessUpsertWithoutWord_buysInputSchema).optional(),
			connect: z.lazy(() => businessWhereUniqueInputSchema).optional(),
			update: z
				.union([
					z.lazy(() => businessUpdateToOneWithWhereWithoutWord_buysInputSchema),
					z.lazy(() => businessUpdateWithoutWord_buysInputSchema),
					z.lazy(() => businessUncheckedUpdateWithoutWord_buysInputSchema),
				])
				.optional(),
		})
		.strict();

export default businessUpdateOneRequiredWithoutWord_buysNestedInputSchema;
