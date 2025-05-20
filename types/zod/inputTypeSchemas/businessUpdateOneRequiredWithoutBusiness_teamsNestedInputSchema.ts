import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { businessCreateWithoutBusiness_teamsInputSchema } from './businessCreateWithoutBusiness_teamsInputSchema';
import { businessUncheckedCreateWithoutBusiness_teamsInputSchema } from './businessUncheckedCreateWithoutBusiness_teamsInputSchema';
import { businessCreateOrConnectWithoutBusiness_teamsInputSchema } from './businessCreateOrConnectWithoutBusiness_teamsInputSchema';
import { businessUpsertWithoutBusiness_teamsInputSchema } from './businessUpsertWithoutBusiness_teamsInputSchema';
import { businessWhereUniqueInputSchema } from './businessWhereUniqueInputSchema';
import { businessUpdateToOneWithWhereWithoutBusiness_teamsInputSchema } from './businessUpdateToOneWithWhereWithoutBusiness_teamsInputSchema';
import { businessUpdateWithoutBusiness_teamsInputSchema } from './businessUpdateWithoutBusiness_teamsInputSchema';
import { businessUncheckedUpdateWithoutBusiness_teamsInputSchema } from './businessUncheckedUpdateWithoutBusiness_teamsInputSchema';

export const businessUpdateOneRequiredWithoutBusiness_teamsNestedInputSchema: z.ZodType<Prisma.businessUpdateOneRequiredWithoutBusiness_teamsNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => businessCreateWithoutBusiness_teamsInputSchema),
					z.lazy(() => businessUncheckedCreateWithoutBusiness_teamsInputSchema),
				])
				.optional(),
			connectOrCreate: z.lazy(() => businessCreateOrConnectWithoutBusiness_teamsInputSchema).optional(),
			upsert: z.lazy(() => businessUpsertWithoutBusiness_teamsInputSchema).optional(),
			connect: z.lazy(() => businessWhereUniqueInputSchema).optional(),
			update: z
				.union([
					z.lazy(() => businessUpdateToOneWithWhereWithoutBusiness_teamsInputSchema),
					z.lazy(() => businessUpdateWithoutBusiness_teamsInputSchema),
					z.lazy(() => businessUncheckedUpdateWithoutBusiness_teamsInputSchema),
				])
				.optional(),
		})
		.strict();

export default businessUpdateOneRequiredWithoutBusiness_teamsNestedInputSchema;
