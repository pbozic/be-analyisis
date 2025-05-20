import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { promo_sectionsCreateWithoutTranslatableInputSchema } from './promo_sectionsCreateWithoutTranslatableInputSchema';
import { promo_sectionsUncheckedCreateWithoutTranslatableInputSchema } from './promo_sectionsUncheckedCreateWithoutTranslatableInputSchema';
import { promo_sectionsCreateOrConnectWithoutTranslatableInputSchema } from './promo_sectionsCreateOrConnectWithoutTranslatableInputSchema';
import { promo_sectionsUpsertWithWhereUniqueWithoutTranslatableInputSchema } from './promo_sectionsUpsertWithWhereUniqueWithoutTranslatableInputSchema';
import { promo_sectionsCreateManyTranslatableInputEnvelopeSchema } from './promo_sectionsCreateManyTranslatableInputEnvelopeSchema';
import { promo_sectionsWhereUniqueInputSchema } from './promo_sectionsWhereUniqueInputSchema';
import { promo_sectionsUpdateWithWhereUniqueWithoutTranslatableInputSchema } from './promo_sectionsUpdateWithWhereUniqueWithoutTranslatableInputSchema';
import { promo_sectionsUpdateManyWithWhereWithoutTranslatableInputSchema } from './promo_sectionsUpdateManyWithWhereWithoutTranslatableInputSchema';
import { promo_sectionsScalarWhereInputSchema } from './promo_sectionsScalarWhereInputSchema';

export const promo_sectionsUpdateManyWithoutTranslatableNestedInputSchema: z.ZodType<Prisma.promo_sectionsUpdateManyWithoutTranslatableNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => promo_sectionsCreateWithoutTranslatableInputSchema),
					z.lazy(() => promo_sectionsCreateWithoutTranslatableInputSchema).array(),
					z.lazy(() => promo_sectionsUncheckedCreateWithoutTranslatableInputSchema),
					z.lazy(() => promo_sectionsUncheckedCreateWithoutTranslatableInputSchema).array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => promo_sectionsCreateOrConnectWithoutTranslatableInputSchema),
					z.lazy(() => promo_sectionsCreateOrConnectWithoutTranslatableInputSchema).array(),
				])
				.optional(),
			upsert: z
				.union([
					z.lazy(() => promo_sectionsUpsertWithWhereUniqueWithoutTranslatableInputSchema),
					z.lazy(() => promo_sectionsUpsertWithWhereUniqueWithoutTranslatableInputSchema).array(),
				])
				.optional(),
			createMany: z.lazy(() => promo_sectionsCreateManyTranslatableInputEnvelopeSchema).optional(),
			set: z
				.union([
					z.lazy(() => promo_sectionsWhereUniqueInputSchema),
					z.lazy(() => promo_sectionsWhereUniqueInputSchema).array(),
				])
				.optional(),
			disconnect: z
				.union([
					z.lazy(() => promo_sectionsWhereUniqueInputSchema),
					z.lazy(() => promo_sectionsWhereUniqueInputSchema).array(),
				])
				.optional(),
			delete: z
				.union([
					z.lazy(() => promo_sectionsWhereUniqueInputSchema),
					z.lazy(() => promo_sectionsWhereUniqueInputSchema).array(),
				])
				.optional(),
			connect: z
				.union([
					z.lazy(() => promo_sectionsWhereUniqueInputSchema),
					z.lazy(() => promo_sectionsWhereUniqueInputSchema).array(),
				])
				.optional(),
			update: z
				.union([
					z.lazy(() => promo_sectionsUpdateWithWhereUniqueWithoutTranslatableInputSchema),
					z.lazy(() => promo_sectionsUpdateWithWhereUniqueWithoutTranslatableInputSchema).array(),
				])
				.optional(),
			updateMany: z
				.union([
					z.lazy(() => promo_sectionsUpdateManyWithWhereWithoutTranslatableInputSchema),
					z.lazy(() => promo_sectionsUpdateManyWithWhereWithoutTranslatableInputSchema).array(),
				])
				.optional(),
			deleteMany: z
				.union([
					z.lazy(() => promo_sectionsScalarWhereInputSchema),
					z.lazy(() => promo_sectionsScalarWhereInputSchema).array(),
				])
				.optional(),
		})
		.strict();

export default promo_sectionsUpdateManyWithoutTranslatableNestedInputSchema;
