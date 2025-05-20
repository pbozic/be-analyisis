import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { promo_sections_buyCreateWithoutBusinessInputSchema } from './promo_sections_buyCreateWithoutBusinessInputSchema';
import { promo_sections_buyUncheckedCreateWithoutBusinessInputSchema } from './promo_sections_buyUncheckedCreateWithoutBusinessInputSchema';
import { promo_sections_buyCreateOrConnectWithoutBusinessInputSchema } from './promo_sections_buyCreateOrConnectWithoutBusinessInputSchema';
import { promo_sections_buyUpsertWithWhereUniqueWithoutBusinessInputSchema } from './promo_sections_buyUpsertWithWhereUniqueWithoutBusinessInputSchema';
import { promo_sections_buyCreateManyBusinessInputEnvelopeSchema } from './promo_sections_buyCreateManyBusinessInputEnvelopeSchema';
import { promo_sections_buyWhereUniqueInputSchema } from './promo_sections_buyWhereUniqueInputSchema';
import { promo_sections_buyUpdateWithWhereUniqueWithoutBusinessInputSchema } from './promo_sections_buyUpdateWithWhereUniqueWithoutBusinessInputSchema';
import { promo_sections_buyUpdateManyWithWhereWithoutBusinessInputSchema } from './promo_sections_buyUpdateManyWithWhereWithoutBusinessInputSchema';
import { promo_sections_buyScalarWhereInputSchema } from './promo_sections_buyScalarWhereInputSchema';

export const promo_sections_buyUncheckedUpdateManyWithoutBusinessNestedInputSchema: z.ZodType<Prisma.promo_sections_buyUncheckedUpdateManyWithoutBusinessNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => promo_sections_buyCreateWithoutBusinessInputSchema),
					z.lazy(() => promo_sections_buyCreateWithoutBusinessInputSchema).array(),
					z.lazy(() => promo_sections_buyUncheckedCreateWithoutBusinessInputSchema),
					z.lazy(() => promo_sections_buyUncheckedCreateWithoutBusinessInputSchema).array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => promo_sections_buyCreateOrConnectWithoutBusinessInputSchema),
					z.lazy(() => promo_sections_buyCreateOrConnectWithoutBusinessInputSchema).array(),
				])
				.optional(),
			upsert: z
				.union([
					z.lazy(() => promo_sections_buyUpsertWithWhereUniqueWithoutBusinessInputSchema),
					z.lazy(() => promo_sections_buyUpsertWithWhereUniqueWithoutBusinessInputSchema).array(),
				])
				.optional(),
			createMany: z.lazy(() => promo_sections_buyCreateManyBusinessInputEnvelopeSchema).optional(),
			set: z
				.union([
					z.lazy(() => promo_sections_buyWhereUniqueInputSchema),
					z.lazy(() => promo_sections_buyWhereUniqueInputSchema).array(),
				])
				.optional(),
			disconnect: z
				.union([
					z.lazy(() => promo_sections_buyWhereUniqueInputSchema),
					z.lazy(() => promo_sections_buyWhereUniqueInputSchema).array(),
				])
				.optional(),
			delete: z
				.union([
					z.lazy(() => promo_sections_buyWhereUniqueInputSchema),
					z.lazy(() => promo_sections_buyWhereUniqueInputSchema).array(),
				])
				.optional(),
			connect: z
				.union([
					z.lazy(() => promo_sections_buyWhereUniqueInputSchema),
					z.lazy(() => promo_sections_buyWhereUniqueInputSchema).array(),
				])
				.optional(),
			update: z
				.union([
					z.lazy(() => promo_sections_buyUpdateWithWhereUniqueWithoutBusinessInputSchema),
					z.lazy(() => promo_sections_buyUpdateWithWhereUniqueWithoutBusinessInputSchema).array(),
				])
				.optional(),
			updateMany: z
				.union([
					z.lazy(() => promo_sections_buyUpdateManyWithWhereWithoutBusinessInputSchema),
					z.lazy(() => promo_sections_buyUpdateManyWithWhereWithoutBusinessInputSchema).array(),
				])
				.optional(),
			deleteMany: z
				.union([
					z.lazy(() => promo_sections_buyScalarWhereInputSchema),
					z.lazy(() => promo_sections_buyScalarWhereInputSchema).array(),
				])
				.optional(),
		})
		.strict();

export default promo_sections_buyUncheckedUpdateManyWithoutBusinessNestedInputSchema;
