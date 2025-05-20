import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersCreateWithoutOrdersInputSchema } from './usersCreateWithoutOrdersInputSchema';
import { usersUncheckedCreateWithoutOrdersInputSchema } from './usersUncheckedCreateWithoutOrdersInputSchema';
import { usersCreateOrConnectWithoutOrdersInputSchema } from './usersCreateOrConnectWithoutOrdersInputSchema';
import { usersUpsertWithoutOrdersInputSchema } from './usersUpsertWithoutOrdersInputSchema';
import { usersWhereInputSchema } from './usersWhereInputSchema';
import { usersWhereUniqueInputSchema } from './usersWhereUniqueInputSchema';
import { usersUpdateToOneWithWhereWithoutOrdersInputSchema } from './usersUpdateToOneWithWhereWithoutOrdersInputSchema';
import { usersUpdateWithoutOrdersInputSchema } from './usersUpdateWithoutOrdersInputSchema';
import { usersUncheckedUpdateWithoutOrdersInputSchema } from './usersUncheckedUpdateWithoutOrdersInputSchema';

export const usersUpdateOneWithoutOrdersNestedInputSchema: z.ZodType<Prisma.usersUpdateOneWithoutOrdersNestedInput> = z
	.object({
		create: z
			.union([
				z.lazy(() => usersCreateWithoutOrdersInputSchema),
				z.lazy(() => usersUncheckedCreateWithoutOrdersInputSchema),
			])
			.optional(),
		connectOrCreate: z.lazy(() => usersCreateOrConnectWithoutOrdersInputSchema).optional(),
		upsert: z.lazy(() => usersUpsertWithoutOrdersInputSchema).optional(),
		disconnect: z.union([z.boolean(), z.lazy(() => usersWhereInputSchema)]).optional(),
		delete: z.union([z.boolean(), z.lazy(() => usersWhereInputSchema)]).optional(),
		connect: z.lazy(() => usersWhereUniqueInputSchema).optional(),
		update: z
			.union([
				z.lazy(() => usersUpdateToOneWithWhereWithoutOrdersInputSchema),
				z.lazy(() => usersUpdateWithoutOrdersInputSchema),
				z.lazy(() => usersUncheckedUpdateWithoutOrdersInputSchema),
			])
			.optional(),
	})
	.strict();

export default usersUpdateOneWithoutOrdersNestedInputSchema;
