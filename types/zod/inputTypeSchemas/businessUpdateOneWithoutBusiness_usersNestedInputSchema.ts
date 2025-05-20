import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { businessCreateWithoutBusiness_usersInputSchema } from './businessCreateWithoutBusiness_usersInputSchema';
import { businessUncheckedCreateWithoutBusiness_usersInputSchema } from './businessUncheckedCreateWithoutBusiness_usersInputSchema';
import { businessCreateOrConnectWithoutBusiness_usersInputSchema } from './businessCreateOrConnectWithoutBusiness_usersInputSchema';
import { businessUpsertWithoutBusiness_usersInputSchema } from './businessUpsertWithoutBusiness_usersInputSchema';
import { businessWhereInputSchema } from './businessWhereInputSchema';
import { businessWhereUniqueInputSchema } from './businessWhereUniqueInputSchema';
import { businessUpdateToOneWithWhereWithoutBusiness_usersInputSchema } from './businessUpdateToOneWithWhereWithoutBusiness_usersInputSchema';
import { businessUpdateWithoutBusiness_usersInputSchema } from './businessUpdateWithoutBusiness_usersInputSchema';
import { businessUncheckedUpdateWithoutBusiness_usersInputSchema } from './businessUncheckedUpdateWithoutBusiness_usersInputSchema';

export const businessUpdateOneWithoutBusiness_usersNestedInputSchema: z.ZodType<Prisma.businessUpdateOneWithoutBusiness_usersNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => businessCreateWithoutBusiness_usersInputSchema),
					z.lazy(() => businessUncheckedCreateWithoutBusiness_usersInputSchema),
				])
				.optional(),
			connectOrCreate: z.lazy(() => businessCreateOrConnectWithoutBusiness_usersInputSchema).optional(),
			upsert: z.lazy(() => businessUpsertWithoutBusiness_usersInputSchema).optional(),
			disconnect: z.union([z.boolean(), z.lazy(() => businessWhereInputSchema)]).optional(),
			delete: z.union([z.boolean(), z.lazy(() => businessWhereInputSchema)]).optional(),
			connect: z.lazy(() => businessWhereUniqueInputSchema).optional(),
			update: z
				.union([
					z.lazy(() => businessUpdateToOneWithWhereWithoutBusiness_usersInputSchema),
					z.lazy(() => businessUpdateWithoutBusiness_usersInputSchema),
					z.lazy(() => businessUncheckedUpdateWithoutBusiness_usersInputSchema),
				])
				.optional(),
		})
		.strict();

export default businessUpdateOneWithoutBusiness_usersNestedInputSchema;
