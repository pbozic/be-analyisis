import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { businessCreateWithoutAccount_actionsInputSchema } from './businessCreateWithoutAccount_actionsInputSchema';
import { businessUncheckedCreateWithoutAccount_actionsInputSchema } from './businessUncheckedCreateWithoutAccount_actionsInputSchema';
import { businessCreateOrConnectWithoutAccount_actionsInputSchema } from './businessCreateOrConnectWithoutAccount_actionsInputSchema';
import { businessWhereUniqueInputSchema } from './businessWhereUniqueInputSchema';

export const businessCreateNestedOneWithoutAccount_actionsInputSchema: z.ZodType<Prisma.businessCreateNestedOneWithoutAccount_actionsInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => businessCreateWithoutAccount_actionsInputSchema),
					z.lazy(() => businessUncheckedCreateWithoutAccount_actionsInputSchema),
				])
				.optional(),
			connectOrCreate: z.lazy(() => businessCreateOrConnectWithoutAccount_actionsInputSchema).optional(),
			connect: z.lazy(() => businessWhereUniqueInputSchema).optional(),
		})
		.strict();

export default businessCreateNestedOneWithoutAccount_actionsInputSchema;
