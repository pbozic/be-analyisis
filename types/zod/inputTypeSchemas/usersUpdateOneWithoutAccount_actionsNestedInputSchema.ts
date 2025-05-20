import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersCreateWithoutAccount_actionsInputSchema } from './usersCreateWithoutAccount_actionsInputSchema';
import { usersUncheckedCreateWithoutAccount_actionsInputSchema } from './usersUncheckedCreateWithoutAccount_actionsInputSchema';
import { usersCreateOrConnectWithoutAccount_actionsInputSchema } from './usersCreateOrConnectWithoutAccount_actionsInputSchema';
import { usersUpsertWithoutAccount_actionsInputSchema } from './usersUpsertWithoutAccount_actionsInputSchema';
import { usersWhereInputSchema } from './usersWhereInputSchema';
import { usersWhereUniqueInputSchema } from './usersWhereUniqueInputSchema';
import { usersUpdateToOneWithWhereWithoutAccount_actionsInputSchema } from './usersUpdateToOneWithWhereWithoutAccount_actionsInputSchema';
import { usersUpdateWithoutAccount_actionsInputSchema } from './usersUpdateWithoutAccount_actionsInputSchema';
import { usersUncheckedUpdateWithoutAccount_actionsInputSchema } from './usersUncheckedUpdateWithoutAccount_actionsInputSchema';

export const usersUpdateOneWithoutAccount_actionsNestedInputSchema: z.ZodType<Prisma.usersUpdateOneWithoutAccount_actionsNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => usersCreateWithoutAccount_actionsInputSchema),
					z.lazy(() => usersUncheckedCreateWithoutAccount_actionsInputSchema),
				])
				.optional(),
			connectOrCreate: z.lazy(() => usersCreateOrConnectWithoutAccount_actionsInputSchema).optional(),
			upsert: z.lazy(() => usersUpsertWithoutAccount_actionsInputSchema).optional(),
			disconnect: z.union([z.boolean(), z.lazy(() => usersWhereInputSchema)]).optional(),
			delete: z.union([z.boolean(), z.lazy(() => usersWhereInputSchema)]).optional(),
			connect: z.lazy(() => usersWhereUniqueInputSchema).optional(),
			update: z
				.union([
					z.lazy(() => usersUpdateToOneWithWhereWithoutAccount_actionsInputSchema),
					z.lazy(() => usersUpdateWithoutAccount_actionsInputSchema),
					z.lazy(() => usersUncheckedUpdateWithoutAccount_actionsInputSchema),
				])
				.optional(),
		})
		.strict();

export default usersUpdateOneWithoutAccount_actionsNestedInputSchema;
