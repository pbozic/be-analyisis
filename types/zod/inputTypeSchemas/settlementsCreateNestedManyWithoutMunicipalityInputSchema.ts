import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { settlementsCreateWithoutMunicipalityInputSchema } from './settlementsCreateWithoutMunicipalityInputSchema';
import { settlementsUncheckedCreateWithoutMunicipalityInputSchema } from './settlementsUncheckedCreateWithoutMunicipalityInputSchema';
import { settlementsCreateOrConnectWithoutMunicipalityInputSchema } from './settlementsCreateOrConnectWithoutMunicipalityInputSchema';
import { settlementsCreateManyMunicipalityInputEnvelopeSchema } from './settlementsCreateManyMunicipalityInputEnvelopeSchema';
import { settlementsWhereUniqueInputSchema } from './settlementsWhereUniqueInputSchema';

export const settlementsCreateNestedManyWithoutMunicipalityInputSchema: z.ZodType<Prisma.settlementsCreateNestedManyWithoutMunicipalityInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => settlementsCreateWithoutMunicipalityInputSchema),
					z.lazy(() => settlementsCreateWithoutMunicipalityInputSchema).array(),
					z.lazy(() => settlementsUncheckedCreateWithoutMunicipalityInputSchema),
					z.lazy(() => settlementsUncheckedCreateWithoutMunicipalityInputSchema).array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => settlementsCreateOrConnectWithoutMunicipalityInputSchema),
					z.lazy(() => settlementsCreateOrConnectWithoutMunicipalityInputSchema).array(),
				])
				.optional(),
			createMany: z.lazy(() => settlementsCreateManyMunicipalityInputEnvelopeSchema).optional(),
			connect: z
				.union([
					z.lazy(() => settlementsWhereUniqueInputSchema),
					z.lazy(() => settlementsWhereUniqueInputSchema).array(),
				])
				.optional(),
		})
		.strict();

export default settlementsCreateNestedManyWithoutMunicipalityInputSchema;
