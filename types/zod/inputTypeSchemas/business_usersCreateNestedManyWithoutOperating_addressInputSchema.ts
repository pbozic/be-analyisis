import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { business_usersCreateWithoutOperating_addressInputSchema } from './business_usersCreateWithoutOperating_addressInputSchema';
import { business_usersUncheckedCreateWithoutOperating_addressInputSchema } from './business_usersUncheckedCreateWithoutOperating_addressInputSchema';
import { business_usersCreateOrConnectWithoutOperating_addressInputSchema } from './business_usersCreateOrConnectWithoutOperating_addressInputSchema';
import { business_usersCreateManyOperating_addressInputEnvelopeSchema } from './business_usersCreateManyOperating_addressInputEnvelopeSchema';
import { business_usersWhereUniqueInputSchema } from './business_usersWhereUniqueInputSchema';

export const business_usersCreateNestedManyWithoutOperating_addressInputSchema: z.ZodType<Prisma.business_usersCreateNestedManyWithoutOperating_addressInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => business_usersCreateWithoutOperating_addressInputSchema),
					z.lazy(() => business_usersCreateWithoutOperating_addressInputSchema).array(),
					z.lazy(() => business_usersUncheckedCreateWithoutOperating_addressInputSchema),
					z.lazy(() => business_usersUncheckedCreateWithoutOperating_addressInputSchema).array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => business_usersCreateOrConnectWithoutOperating_addressInputSchema),
					z.lazy(() => business_usersCreateOrConnectWithoutOperating_addressInputSchema).array(),
				])
				.optional(),
			createMany: z.lazy(() => business_usersCreateManyOperating_addressInputEnvelopeSchema).optional(),
			connect: z
				.union([
					z.lazy(() => business_usersWhereUniqueInputSchema),
					z.lazy(() => business_usersWhereUniqueInputSchema).array(),
				])
				.optional(),
		})
		.strict();

export default business_usersCreateNestedManyWithoutOperating_addressInputSchema;
