import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { business_usersWhereUniqueInputSchema } from './business_usersWhereUniqueInputSchema';
import { business_usersCreateWithoutAllowanceInputSchema } from './business_usersCreateWithoutAllowanceInputSchema';
import { business_usersUncheckedCreateWithoutAllowanceInputSchema } from './business_usersUncheckedCreateWithoutAllowanceInputSchema';

export const business_usersCreateOrConnectWithoutAllowanceInputSchema: z.ZodType<Prisma.business_usersCreateOrConnectWithoutAllowanceInput> =
	z
		.object({
			where: z.lazy(() => business_usersWhereUniqueInputSchema),
			create: z.union([
				z.lazy(() => business_usersCreateWithoutAllowanceInputSchema),
				z.lazy(() => business_usersUncheckedCreateWithoutAllowanceInputSchema),
			]),
		})
		.strict();

export default business_usersCreateOrConnectWithoutAllowanceInputSchema;
