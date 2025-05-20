import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { businessCreateWithoutAddressInputSchema } from './businessCreateWithoutAddressInputSchema';
import { businessUncheckedCreateWithoutAddressInputSchema } from './businessUncheckedCreateWithoutAddressInputSchema';
import { businessCreateOrConnectWithoutAddressInputSchema } from './businessCreateOrConnectWithoutAddressInputSchema';
import { businessCreateManyAddressInputEnvelopeSchema } from './businessCreateManyAddressInputEnvelopeSchema';
import { businessWhereUniqueInputSchema } from './businessWhereUniqueInputSchema';

export const businessCreateNestedManyWithoutAddressInputSchema: z.ZodType<Prisma.businessCreateNestedManyWithoutAddressInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => businessCreateWithoutAddressInputSchema),
					z.lazy(() => businessCreateWithoutAddressInputSchema).array(),
					z.lazy(() => businessUncheckedCreateWithoutAddressInputSchema),
					z.lazy(() => businessUncheckedCreateWithoutAddressInputSchema).array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => businessCreateOrConnectWithoutAddressInputSchema),
					z.lazy(() => businessCreateOrConnectWithoutAddressInputSchema).array(),
				])
				.optional(),
			createMany: z.lazy(() => businessCreateManyAddressInputEnvelopeSchema).optional(),
			connect: z
				.union([
					z.lazy(() => businessWhereUniqueInputSchema),
					z.lazy(() => businessWhereUniqueInputSchema).array(),
				])
				.optional(),
		})
		.strict();

export default businessCreateNestedManyWithoutAddressInputSchema;
