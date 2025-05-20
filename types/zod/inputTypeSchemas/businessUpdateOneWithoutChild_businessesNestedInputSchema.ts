import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { businessCreateWithoutChild_businessesInputSchema } from './businessCreateWithoutChild_businessesInputSchema';
import { businessUncheckedCreateWithoutChild_businessesInputSchema } from './businessUncheckedCreateWithoutChild_businessesInputSchema';
import { businessCreateOrConnectWithoutChild_businessesInputSchema } from './businessCreateOrConnectWithoutChild_businessesInputSchema';
import { businessUpsertWithoutChild_businessesInputSchema } from './businessUpsertWithoutChild_businessesInputSchema';
import { businessWhereInputSchema } from './businessWhereInputSchema';
import { businessWhereUniqueInputSchema } from './businessWhereUniqueInputSchema';
import { businessUpdateToOneWithWhereWithoutChild_businessesInputSchema } from './businessUpdateToOneWithWhereWithoutChild_businessesInputSchema';
import { businessUpdateWithoutChild_businessesInputSchema } from './businessUpdateWithoutChild_businessesInputSchema';
import { businessUncheckedUpdateWithoutChild_businessesInputSchema } from './businessUncheckedUpdateWithoutChild_businessesInputSchema';

export const businessUpdateOneWithoutChild_businessesNestedInputSchema: z.ZodType<Prisma.businessUpdateOneWithoutChild_businessesNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => businessCreateWithoutChild_businessesInputSchema),
					z.lazy(() => businessUncheckedCreateWithoutChild_businessesInputSchema),
				])
				.optional(),
			connectOrCreate: z.lazy(() => businessCreateOrConnectWithoutChild_businessesInputSchema).optional(),
			upsert: z.lazy(() => businessUpsertWithoutChild_businessesInputSchema).optional(),
			disconnect: z.union([z.boolean(), z.lazy(() => businessWhereInputSchema)]).optional(),
			delete: z.union([z.boolean(), z.lazy(() => businessWhereInputSchema)]).optional(),
			connect: z.lazy(() => businessWhereUniqueInputSchema).optional(),
			update: z
				.union([
					z.lazy(() => businessUpdateToOneWithWhereWithoutChild_businessesInputSchema),
					z.lazy(() => businessUpdateWithoutChild_businessesInputSchema),
					z.lazy(() => businessUncheckedUpdateWithoutChild_businessesInputSchema),
				])
				.optional(),
		})
		.strict();

export default businessUpdateOneWithoutChild_businessesNestedInputSchema;
