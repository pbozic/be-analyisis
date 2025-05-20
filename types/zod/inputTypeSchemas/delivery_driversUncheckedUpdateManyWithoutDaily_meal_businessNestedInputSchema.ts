import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { delivery_driversCreateWithoutDaily_meal_businessInputSchema } from './delivery_driversCreateWithoutDaily_meal_businessInputSchema';
import { delivery_driversUncheckedCreateWithoutDaily_meal_businessInputSchema } from './delivery_driversUncheckedCreateWithoutDaily_meal_businessInputSchema';
import { delivery_driversCreateOrConnectWithoutDaily_meal_businessInputSchema } from './delivery_driversCreateOrConnectWithoutDaily_meal_businessInputSchema';
import { delivery_driversUpsertWithWhereUniqueWithoutDaily_meal_businessInputSchema } from './delivery_driversUpsertWithWhereUniqueWithoutDaily_meal_businessInputSchema';
import { delivery_driversCreateManyDaily_meal_businessInputEnvelopeSchema } from './delivery_driversCreateManyDaily_meal_businessInputEnvelopeSchema';
import { delivery_driversWhereUniqueInputSchema } from './delivery_driversWhereUniqueInputSchema';
import { delivery_driversUpdateWithWhereUniqueWithoutDaily_meal_businessInputSchema } from './delivery_driversUpdateWithWhereUniqueWithoutDaily_meal_businessInputSchema';
import { delivery_driversUpdateManyWithWhereWithoutDaily_meal_businessInputSchema } from './delivery_driversUpdateManyWithWhereWithoutDaily_meal_businessInputSchema';
import { delivery_driversScalarWhereInputSchema } from './delivery_driversScalarWhereInputSchema';

export const delivery_driversUncheckedUpdateManyWithoutDaily_meal_businessNestedInputSchema: z.ZodType<Prisma.delivery_driversUncheckedUpdateManyWithoutDaily_meal_businessNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => delivery_driversCreateWithoutDaily_meal_businessInputSchema),
					z.lazy(() => delivery_driversCreateWithoutDaily_meal_businessInputSchema).array(),
					z.lazy(() => delivery_driversUncheckedCreateWithoutDaily_meal_businessInputSchema),
					z.lazy(() => delivery_driversUncheckedCreateWithoutDaily_meal_businessInputSchema).array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => delivery_driversCreateOrConnectWithoutDaily_meal_businessInputSchema),
					z.lazy(() => delivery_driversCreateOrConnectWithoutDaily_meal_businessInputSchema).array(),
				])
				.optional(),
			upsert: z
				.union([
					z.lazy(() => delivery_driversUpsertWithWhereUniqueWithoutDaily_meal_businessInputSchema),
					z.lazy(() => delivery_driversUpsertWithWhereUniqueWithoutDaily_meal_businessInputSchema).array(),
				])
				.optional(),
			createMany: z.lazy(() => delivery_driversCreateManyDaily_meal_businessInputEnvelopeSchema).optional(),
			set: z
				.union([
					z.lazy(() => delivery_driversWhereUniqueInputSchema),
					z.lazy(() => delivery_driversWhereUniqueInputSchema).array(),
				])
				.optional(),
			disconnect: z
				.union([
					z.lazy(() => delivery_driversWhereUniqueInputSchema),
					z.lazy(() => delivery_driversWhereUniqueInputSchema).array(),
				])
				.optional(),
			delete: z
				.union([
					z.lazy(() => delivery_driversWhereUniqueInputSchema),
					z.lazy(() => delivery_driversWhereUniqueInputSchema).array(),
				])
				.optional(),
			connect: z
				.union([
					z.lazy(() => delivery_driversWhereUniqueInputSchema),
					z.lazy(() => delivery_driversWhereUniqueInputSchema).array(),
				])
				.optional(),
			update: z
				.union([
					z.lazy(() => delivery_driversUpdateWithWhereUniqueWithoutDaily_meal_businessInputSchema),
					z.lazy(() => delivery_driversUpdateWithWhereUniqueWithoutDaily_meal_businessInputSchema).array(),
				])
				.optional(),
			updateMany: z
				.union([
					z.lazy(() => delivery_driversUpdateManyWithWhereWithoutDaily_meal_businessInputSchema),
					z.lazy(() => delivery_driversUpdateManyWithWhereWithoutDaily_meal_businessInputSchema).array(),
				])
				.optional(),
			deleteMany: z
				.union([
					z.lazy(() => delivery_driversScalarWhereInputSchema),
					z.lazy(() => delivery_driversScalarWhereInputSchema).array(),
				])
				.optional(),
		})
		.strict();

export default delivery_driversUncheckedUpdateManyWithoutDaily_meal_businessNestedInputSchema;
