import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersCreateWithoutParent_userInputSchema } from './usersCreateWithoutParent_userInputSchema';
import { usersUncheckedCreateWithoutParent_userInputSchema } from './usersUncheckedCreateWithoutParent_userInputSchema';
import { usersCreateOrConnectWithoutParent_userInputSchema } from './usersCreateOrConnectWithoutParent_userInputSchema';
import { usersUpsertWithoutParent_userInputSchema } from './usersUpsertWithoutParent_userInputSchema';
import { usersWhereUniqueInputSchema } from './usersWhereUniqueInputSchema';
import { usersUpdateToOneWithWhereWithoutParent_userInputSchema } from './usersUpdateToOneWithWhereWithoutParent_userInputSchema';
import { usersUpdateWithoutParent_userInputSchema } from './usersUpdateWithoutParent_userInputSchema';
import { usersUncheckedUpdateWithoutParent_userInputSchema } from './usersUncheckedUpdateWithoutParent_userInputSchema';

export const usersUpdateOneRequiredWithoutParent_userNestedInputSchema: z.ZodType<Prisma.usersUpdateOneRequiredWithoutParent_userNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => usersCreateWithoutParent_userInputSchema),
					z.lazy(() => usersUncheckedCreateWithoutParent_userInputSchema),
				])
				.optional(),
			connectOrCreate: z.lazy(() => usersCreateOrConnectWithoutParent_userInputSchema).optional(),
			upsert: z.lazy(() => usersUpsertWithoutParent_userInputSchema).optional(),
			connect: z.lazy(() => usersWhereUniqueInputSchema).optional(),
			update: z
				.union([
					z.lazy(() => usersUpdateToOneWithWhereWithoutParent_userInputSchema),
					z.lazy(() => usersUpdateWithoutParent_userInputSchema),
					z.lazy(() => usersUncheckedUpdateWithoutParent_userInputSchema),
				])
				.optional(),
		})
		.strict();

export default usersUpdateOneRequiredWithoutParent_userNestedInputSchema;
