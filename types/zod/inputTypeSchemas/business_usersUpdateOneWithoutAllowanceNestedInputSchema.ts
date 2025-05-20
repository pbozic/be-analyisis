import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { business_usersCreateWithoutAllowanceInputSchema } from './business_usersCreateWithoutAllowanceInputSchema';
import { business_usersUncheckedCreateWithoutAllowanceInputSchema } from './business_usersUncheckedCreateWithoutAllowanceInputSchema';
import { business_usersCreateOrConnectWithoutAllowanceInputSchema } from './business_usersCreateOrConnectWithoutAllowanceInputSchema';
import { business_usersUpsertWithoutAllowanceInputSchema } from './business_usersUpsertWithoutAllowanceInputSchema';
import { business_usersWhereInputSchema } from './business_usersWhereInputSchema';
import { business_usersWhereUniqueInputSchema } from './business_usersWhereUniqueInputSchema';
import { business_usersUpdateToOneWithWhereWithoutAllowanceInputSchema } from './business_usersUpdateToOneWithWhereWithoutAllowanceInputSchema';
import { business_usersUpdateWithoutAllowanceInputSchema } from './business_usersUpdateWithoutAllowanceInputSchema';
import { business_usersUncheckedUpdateWithoutAllowanceInputSchema } from './business_usersUncheckedUpdateWithoutAllowanceInputSchema';

export const business_usersUpdateOneWithoutAllowanceNestedInputSchema: z.ZodType<Prisma.business_usersUpdateOneWithoutAllowanceNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => business_usersCreateWithoutAllowanceInputSchema),
					z.lazy(() => business_usersUncheckedCreateWithoutAllowanceInputSchema),
				])
				.optional(),
			connectOrCreate: z.lazy(() => business_usersCreateOrConnectWithoutAllowanceInputSchema).optional(),
			upsert: z.lazy(() => business_usersUpsertWithoutAllowanceInputSchema).optional(),
			disconnect: z.union([z.boolean(), z.lazy(() => business_usersWhereInputSchema)]).optional(),
			delete: z.union([z.boolean(), z.lazy(() => business_usersWhereInputSchema)]).optional(),
			connect: z.lazy(() => business_usersWhereUniqueInputSchema).optional(),
			update: z
				.union([
					z.lazy(() => business_usersUpdateToOneWithWhereWithoutAllowanceInputSchema),
					z.lazy(() => business_usersUpdateWithoutAllowanceInputSchema),
					z.lazy(() => business_usersUncheckedUpdateWithoutAllowanceInputSchema),
				])
				.optional(),
		})
		.strict();

export default business_usersUpdateOneWithoutAllowanceNestedInputSchema;
