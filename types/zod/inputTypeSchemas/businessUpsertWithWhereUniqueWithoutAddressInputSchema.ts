import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { businessWhereUniqueInputSchema } from './businessWhereUniqueInputSchema';
import { businessUpdateWithoutAddressInputSchema } from './businessUpdateWithoutAddressInputSchema';
import { businessUncheckedUpdateWithoutAddressInputSchema } from './businessUncheckedUpdateWithoutAddressInputSchema';
import { businessCreateWithoutAddressInputSchema } from './businessCreateWithoutAddressInputSchema';
import { businessUncheckedCreateWithoutAddressInputSchema } from './businessUncheckedCreateWithoutAddressInputSchema';

export const businessUpsertWithWhereUniqueWithoutAddressInputSchema: z.ZodType<Prisma.businessUpsertWithWhereUniqueWithoutAddressInput> =
	z
		.object({
			where: z.lazy(() => businessWhereUniqueInputSchema),
			update: z.union([
				z.lazy(() => businessUpdateWithoutAddressInputSchema),
				z.lazy(() => businessUncheckedUpdateWithoutAddressInputSchema),
			]),
			create: z.union([
				z.lazy(() => businessCreateWithoutAddressInputSchema),
				z.lazy(() => businessUncheckedCreateWithoutAddressInputSchema),
			]),
		})
		.strict();

export default businessUpsertWithWhereUniqueWithoutAddressInputSchema;
