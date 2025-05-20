import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { municipalitiesCreateWithoutDriver_municipalitiesInputSchema } from './municipalitiesCreateWithoutDriver_municipalitiesInputSchema';
import { municipalitiesUncheckedCreateWithoutDriver_municipalitiesInputSchema } from './municipalitiesUncheckedCreateWithoutDriver_municipalitiesInputSchema';
import { municipalitiesCreateOrConnectWithoutDriver_municipalitiesInputSchema } from './municipalitiesCreateOrConnectWithoutDriver_municipalitiesInputSchema';
import { municipalitiesUpsertWithoutDriver_municipalitiesInputSchema } from './municipalitiesUpsertWithoutDriver_municipalitiesInputSchema';
import { municipalitiesWhereUniqueInputSchema } from './municipalitiesWhereUniqueInputSchema';
import { municipalitiesUpdateToOneWithWhereWithoutDriver_municipalitiesInputSchema } from './municipalitiesUpdateToOneWithWhereWithoutDriver_municipalitiesInputSchema';
import { municipalitiesUpdateWithoutDriver_municipalitiesInputSchema } from './municipalitiesUpdateWithoutDriver_municipalitiesInputSchema';
import { municipalitiesUncheckedUpdateWithoutDriver_municipalitiesInputSchema } from './municipalitiesUncheckedUpdateWithoutDriver_municipalitiesInputSchema';

export const municipalitiesUpdateOneRequiredWithoutDriver_municipalitiesNestedInputSchema: z.ZodType<Prisma.municipalitiesUpdateOneRequiredWithoutDriver_municipalitiesNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => municipalitiesCreateWithoutDriver_municipalitiesInputSchema),
					z.lazy(() => municipalitiesUncheckedCreateWithoutDriver_municipalitiesInputSchema),
				])
				.optional(),
			connectOrCreate: z
				.lazy(() => municipalitiesCreateOrConnectWithoutDriver_municipalitiesInputSchema)
				.optional(),
			upsert: z.lazy(() => municipalitiesUpsertWithoutDriver_municipalitiesInputSchema).optional(),
			connect: z.lazy(() => municipalitiesWhereUniqueInputSchema).optional(),
			update: z
				.union([
					z.lazy(() => municipalitiesUpdateToOneWithWhereWithoutDriver_municipalitiesInputSchema),
					z.lazy(() => municipalitiesUpdateWithoutDriver_municipalitiesInputSchema),
					z.lazy(() => municipalitiesUncheckedUpdateWithoutDriver_municipalitiesInputSchema),
				])
				.optional(),
		})
		.strict();

export default municipalitiesUpdateOneRequiredWithoutDriver_municipalitiesNestedInputSchema;
