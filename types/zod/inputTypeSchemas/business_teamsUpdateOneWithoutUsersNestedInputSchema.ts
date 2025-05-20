import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { business_teamsCreateWithoutUsersInputSchema } from './business_teamsCreateWithoutUsersInputSchema';
import { business_teamsUncheckedCreateWithoutUsersInputSchema } from './business_teamsUncheckedCreateWithoutUsersInputSchema';
import { business_teamsCreateOrConnectWithoutUsersInputSchema } from './business_teamsCreateOrConnectWithoutUsersInputSchema';
import { business_teamsUpsertWithoutUsersInputSchema } from './business_teamsUpsertWithoutUsersInputSchema';
import { business_teamsWhereInputSchema } from './business_teamsWhereInputSchema';
import { business_teamsWhereUniqueInputSchema } from './business_teamsWhereUniqueInputSchema';
import { business_teamsUpdateToOneWithWhereWithoutUsersInputSchema } from './business_teamsUpdateToOneWithWhereWithoutUsersInputSchema';
import { business_teamsUpdateWithoutUsersInputSchema } from './business_teamsUpdateWithoutUsersInputSchema';
import { business_teamsUncheckedUpdateWithoutUsersInputSchema } from './business_teamsUncheckedUpdateWithoutUsersInputSchema';

export const business_teamsUpdateOneWithoutUsersNestedInputSchema: z.ZodType<Prisma.business_teamsUpdateOneWithoutUsersNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => business_teamsCreateWithoutUsersInputSchema),
					z.lazy(() => business_teamsUncheckedCreateWithoutUsersInputSchema),
				])
				.optional(),
			connectOrCreate: z.lazy(() => business_teamsCreateOrConnectWithoutUsersInputSchema).optional(),
			upsert: z.lazy(() => business_teamsUpsertWithoutUsersInputSchema).optional(),
			disconnect: z.union([z.boolean(), z.lazy(() => business_teamsWhereInputSchema)]).optional(),
			delete: z.union([z.boolean(), z.lazy(() => business_teamsWhereInputSchema)]).optional(),
			connect: z.lazy(() => business_teamsWhereUniqueInputSchema).optional(),
			update: z
				.union([
					z.lazy(() => business_teamsUpdateToOneWithWhereWithoutUsersInputSchema),
					z.lazy(() => business_teamsUpdateWithoutUsersInputSchema),
					z.lazy(() => business_teamsUncheckedUpdateWithoutUsersInputSchema),
				])
				.optional(),
		})
		.strict();

export default business_teamsUpdateOneWithoutUsersNestedInputSchema;
