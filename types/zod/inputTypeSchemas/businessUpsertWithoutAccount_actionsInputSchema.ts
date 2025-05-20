import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { businessUpdateWithoutAccount_actionsInputSchema } from './businessUpdateWithoutAccount_actionsInputSchema';
import { businessUncheckedUpdateWithoutAccount_actionsInputSchema } from './businessUncheckedUpdateWithoutAccount_actionsInputSchema';
import { businessCreateWithoutAccount_actionsInputSchema } from './businessCreateWithoutAccount_actionsInputSchema';
import { businessUncheckedCreateWithoutAccount_actionsInputSchema } from './businessUncheckedCreateWithoutAccount_actionsInputSchema';
import { businessWhereInputSchema } from './businessWhereInputSchema';

export const businessUpsertWithoutAccount_actionsInputSchema: z.ZodType<Prisma.businessUpsertWithoutAccount_actionsInput> =
	z
		.object({
			update: z.union([
				z.lazy(() => businessUpdateWithoutAccount_actionsInputSchema),
				z.lazy(() => businessUncheckedUpdateWithoutAccount_actionsInputSchema),
			]),
			create: z.union([
				z.lazy(() => businessCreateWithoutAccount_actionsInputSchema),
				z.lazy(() => businessUncheckedCreateWithoutAccount_actionsInputSchema),
			]),
			where: z.lazy(() => businessWhereInputSchema).optional(),
		})
		.strict();

export default businessUpsertWithoutAccount_actionsInputSchema;
