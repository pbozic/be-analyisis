import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { vehicle_driversCreateWithoutDriverInputSchema } from './vehicle_driversCreateWithoutDriverInputSchema';
import { vehicle_driversUncheckedCreateWithoutDriverInputSchema } from './vehicle_driversUncheckedCreateWithoutDriverInputSchema';
import { vehicle_driversCreateOrConnectWithoutDriverInputSchema } from './vehicle_driversCreateOrConnectWithoutDriverInputSchema';
import { vehicle_driversCreateManyDriverInputEnvelopeSchema } from './vehicle_driversCreateManyDriverInputEnvelopeSchema';
import { vehicle_driversWhereUniqueInputSchema } from './vehicle_driversWhereUniqueInputSchema';

export const vehicle_driversUncheckedCreateNestedManyWithoutDriverInputSchema: z.ZodType<Prisma.vehicle_driversUncheckedCreateNestedManyWithoutDriverInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => vehicle_driversCreateWithoutDriverInputSchema),
					z.lazy(() => vehicle_driversCreateWithoutDriverInputSchema).array(),
					z.lazy(() => vehicle_driversUncheckedCreateWithoutDriverInputSchema),
					z.lazy(() => vehicle_driversUncheckedCreateWithoutDriverInputSchema).array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => vehicle_driversCreateOrConnectWithoutDriverInputSchema),
					z.lazy(() => vehicle_driversCreateOrConnectWithoutDriverInputSchema).array(),
				])
				.optional(),
			createMany: z.lazy(() => vehicle_driversCreateManyDriverInputEnvelopeSchema).optional(),
			connect: z
				.union([
					z.lazy(() => vehicle_driversWhereUniqueInputSchema),
					z.lazy(() => vehicle_driversWhereUniqueInputSchema).array(),
				])
				.optional(),
		})
		.strict();

export default vehicle_driversUncheckedCreateNestedManyWithoutDriverInputSchema;
