import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersCreateWithoutFlag_changesInputSchema } from './usersCreateWithoutFlag_changesInputSchema';
import { usersUncheckedCreateWithoutFlag_changesInputSchema } from './usersUncheckedCreateWithoutFlag_changesInputSchema';
import { usersCreateOrConnectWithoutFlag_changesInputSchema } from './usersCreateOrConnectWithoutFlag_changesInputSchema';
import { usersUpsertWithoutFlag_changesInputSchema } from './usersUpsertWithoutFlag_changesInputSchema';
import { usersWhereUniqueInputSchema } from './usersWhereUniqueInputSchema';
import { usersUpdateToOneWithWhereWithoutFlag_changesInputSchema } from './usersUpdateToOneWithWhereWithoutFlag_changesInputSchema';
import { usersUpdateWithoutFlag_changesInputSchema } from './usersUpdateWithoutFlag_changesInputSchema';
import { usersUncheckedUpdateWithoutFlag_changesInputSchema } from './usersUncheckedUpdateWithoutFlag_changesInputSchema';

export const usersUpdateOneRequiredWithoutFlag_changesNestedInputSchema: z.ZodType<Prisma.usersUpdateOneRequiredWithoutFlag_changesNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => usersCreateWithoutFlag_changesInputSchema),
					z.lazy(() => usersUncheckedCreateWithoutFlag_changesInputSchema),
				])
				.optional(),
			connectOrCreate: z.lazy(() => usersCreateOrConnectWithoutFlag_changesInputSchema).optional(),
			upsert: z.lazy(() => usersUpsertWithoutFlag_changesInputSchema).optional(),
			connect: z.lazy(() => usersWhereUniqueInputSchema).optional(),
			update: z
				.union([
					z.lazy(() => usersUpdateToOneWithWhereWithoutFlag_changesInputSchema),
					z.lazy(() => usersUpdateWithoutFlag_changesInputSchema),
					z.lazy(() => usersUncheckedUpdateWithoutFlag_changesInputSchema),
				])
				.optional(),
		})
		.strict();

export default usersUpdateOneRequiredWithoutFlag_changesNestedInputSchema;
