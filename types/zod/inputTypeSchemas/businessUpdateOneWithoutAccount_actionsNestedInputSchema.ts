import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { businessCreateWithoutAccount_actionsInputSchema } from './businessCreateWithoutAccount_actionsInputSchema';
import { businessUncheckedCreateWithoutAccount_actionsInputSchema } from './businessUncheckedCreateWithoutAccount_actionsInputSchema';
import { businessCreateOrConnectWithoutAccount_actionsInputSchema } from './businessCreateOrConnectWithoutAccount_actionsInputSchema';
import { businessUpsertWithoutAccount_actionsInputSchema } from './businessUpsertWithoutAccount_actionsInputSchema';
import { businessWhereInputSchema } from './businessWhereInputSchema';
import { businessWhereUniqueInputSchema } from './businessWhereUniqueInputSchema';
import { businessUpdateToOneWithWhereWithoutAccount_actionsInputSchema } from './businessUpdateToOneWithWhereWithoutAccount_actionsInputSchema';
import { businessUpdateWithoutAccount_actionsInputSchema } from './businessUpdateWithoutAccount_actionsInputSchema';
import { businessUncheckedUpdateWithoutAccount_actionsInputSchema } from './businessUncheckedUpdateWithoutAccount_actionsInputSchema';

export const businessUpdateOneWithoutAccount_actionsNestedInputSchema: z.ZodType<Prisma.businessUpdateOneWithoutAccount_actionsNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => businessCreateWithoutAccount_actionsInputSchema),
					z.lazy(() => businessUncheckedCreateWithoutAccount_actionsInputSchema),
				])
				.optional(),
			connectOrCreate: z.lazy(() => businessCreateOrConnectWithoutAccount_actionsInputSchema).optional(),
			upsert: z.lazy(() => businessUpsertWithoutAccount_actionsInputSchema).optional(),
			disconnect: z.union([z.boolean(), z.lazy(() => businessWhereInputSchema)]).optional(),
			delete: z.union([z.boolean(), z.lazy(() => businessWhereInputSchema)]).optional(),
			connect: z.lazy(() => businessWhereUniqueInputSchema).optional(),
			update: z
				.union([
					z.lazy(() => businessUpdateToOneWithWhereWithoutAccount_actionsInputSchema),
					z.lazy(() => businessUpdateWithoutAccount_actionsInputSchema),
					z.lazy(() => businessUncheckedUpdateWithoutAccount_actionsInputSchema),
				])
				.optional(),
		})
		.strict();

export default businessUpdateOneWithoutAccount_actionsNestedInputSchema;
