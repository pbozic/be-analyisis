import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { documentsCreateWithoutVehiclesInputSchema } from './documentsCreateWithoutVehiclesInputSchema';
import { documentsUncheckedCreateWithoutVehiclesInputSchema } from './documentsUncheckedCreateWithoutVehiclesInputSchema';
import { documentsCreateOrConnectWithoutVehiclesInputSchema } from './documentsCreateOrConnectWithoutVehiclesInputSchema';
import { documentsUpsertWithWhereUniqueWithoutVehiclesInputSchema } from './documentsUpsertWithWhereUniqueWithoutVehiclesInputSchema';
import { documentsCreateManyVehiclesInputEnvelopeSchema } from './documentsCreateManyVehiclesInputEnvelopeSchema';
import { documentsWhereUniqueInputSchema } from './documentsWhereUniqueInputSchema';
import { documentsUpdateWithWhereUniqueWithoutVehiclesInputSchema } from './documentsUpdateWithWhereUniqueWithoutVehiclesInputSchema';
import { documentsUpdateManyWithWhereWithoutVehiclesInputSchema } from './documentsUpdateManyWithWhereWithoutVehiclesInputSchema';
import { documentsScalarWhereInputSchema } from './documentsScalarWhereInputSchema';

export const documentsUncheckedUpdateManyWithoutVehiclesNestedInputSchema: z.ZodType<Prisma.documentsUncheckedUpdateManyWithoutVehiclesNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => documentsCreateWithoutVehiclesInputSchema),
					z.lazy(() => documentsCreateWithoutVehiclesInputSchema).array(),
					z.lazy(() => documentsUncheckedCreateWithoutVehiclesInputSchema),
					z.lazy(() => documentsUncheckedCreateWithoutVehiclesInputSchema).array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => documentsCreateOrConnectWithoutVehiclesInputSchema),
					z.lazy(() => documentsCreateOrConnectWithoutVehiclesInputSchema).array(),
				])
				.optional(),
			upsert: z
				.union([
					z.lazy(() => documentsUpsertWithWhereUniqueWithoutVehiclesInputSchema),
					z.lazy(() => documentsUpsertWithWhereUniqueWithoutVehiclesInputSchema).array(),
				])
				.optional(),
			createMany: z.lazy(() => documentsCreateManyVehiclesInputEnvelopeSchema).optional(),
			set: z
				.union([
					z.lazy(() => documentsWhereUniqueInputSchema),
					z.lazy(() => documentsWhereUniqueInputSchema).array(),
				])
				.optional(),
			disconnect: z
				.union([
					z.lazy(() => documentsWhereUniqueInputSchema),
					z.lazy(() => documentsWhereUniqueInputSchema).array(),
				])
				.optional(),
			delete: z
				.union([
					z.lazy(() => documentsWhereUniqueInputSchema),
					z.lazy(() => documentsWhereUniqueInputSchema).array(),
				])
				.optional(),
			connect: z
				.union([
					z.lazy(() => documentsWhereUniqueInputSchema),
					z.lazy(() => documentsWhereUniqueInputSchema).array(),
				])
				.optional(),
			update: z
				.union([
					z.lazy(() => documentsUpdateWithWhereUniqueWithoutVehiclesInputSchema),
					z.lazy(() => documentsUpdateWithWhereUniqueWithoutVehiclesInputSchema).array(),
				])
				.optional(),
			updateMany: z
				.union([
					z.lazy(() => documentsUpdateManyWithWhereWithoutVehiclesInputSchema),
					z.lazy(() => documentsUpdateManyWithWhereWithoutVehiclesInputSchema).array(),
				])
				.optional(),
			deleteMany: z
				.union([
					z.lazy(() => documentsScalarWhereInputSchema),
					z.lazy(() => documentsScalarWhereInputSchema).array(),
				])
				.optional(),
		})
		.strict();

export default documentsUncheckedUpdateManyWithoutVehiclesNestedInputSchema;
