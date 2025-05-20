import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { menu_categoriesCreateWithoutMenuInputSchema } from './menu_categoriesCreateWithoutMenuInputSchema';
import { menu_categoriesUncheckedCreateWithoutMenuInputSchema } from './menu_categoriesUncheckedCreateWithoutMenuInputSchema';
import { menu_categoriesCreateOrConnectWithoutMenuInputSchema } from './menu_categoriesCreateOrConnectWithoutMenuInputSchema';
import { menu_categoriesUpsertWithWhereUniqueWithoutMenuInputSchema } from './menu_categoriesUpsertWithWhereUniqueWithoutMenuInputSchema';
import { menu_categoriesCreateManyMenuInputEnvelopeSchema } from './menu_categoriesCreateManyMenuInputEnvelopeSchema';
import { menu_categoriesWhereUniqueInputSchema } from './menu_categoriesWhereUniqueInputSchema';
import { menu_categoriesUpdateWithWhereUniqueWithoutMenuInputSchema } from './menu_categoriesUpdateWithWhereUniqueWithoutMenuInputSchema';
import { menu_categoriesUpdateManyWithWhereWithoutMenuInputSchema } from './menu_categoriesUpdateManyWithWhereWithoutMenuInputSchema';
import { menu_categoriesScalarWhereInputSchema } from './menu_categoriesScalarWhereInputSchema';

export const menu_categoriesUpdateManyWithoutMenuNestedInputSchema: z.ZodType<Prisma.menu_categoriesUpdateManyWithoutMenuNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => menu_categoriesCreateWithoutMenuInputSchema),
					z.lazy(() => menu_categoriesCreateWithoutMenuInputSchema).array(),
					z.lazy(() => menu_categoriesUncheckedCreateWithoutMenuInputSchema),
					z.lazy(() => menu_categoriesUncheckedCreateWithoutMenuInputSchema).array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => menu_categoriesCreateOrConnectWithoutMenuInputSchema),
					z.lazy(() => menu_categoriesCreateOrConnectWithoutMenuInputSchema).array(),
				])
				.optional(),
			upsert: z
				.union([
					z.lazy(() => menu_categoriesUpsertWithWhereUniqueWithoutMenuInputSchema),
					z.lazy(() => menu_categoriesUpsertWithWhereUniqueWithoutMenuInputSchema).array(),
				])
				.optional(),
			createMany: z.lazy(() => menu_categoriesCreateManyMenuInputEnvelopeSchema).optional(),
			set: z
				.union([
					z.lazy(() => menu_categoriesWhereUniqueInputSchema),
					z.lazy(() => menu_categoriesWhereUniqueInputSchema).array(),
				])
				.optional(),
			disconnect: z
				.union([
					z.lazy(() => menu_categoriesWhereUniqueInputSchema),
					z.lazy(() => menu_categoriesWhereUniqueInputSchema).array(),
				])
				.optional(),
			delete: z
				.union([
					z.lazy(() => menu_categoriesWhereUniqueInputSchema),
					z.lazy(() => menu_categoriesWhereUniqueInputSchema).array(),
				])
				.optional(),
			connect: z
				.union([
					z.lazy(() => menu_categoriesWhereUniqueInputSchema),
					z.lazy(() => menu_categoriesWhereUniqueInputSchema).array(),
				])
				.optional(),
			update: z
				.union([
					z.lazy(() => menu_categoriesUpdateWithWhereUniqueWithoutMenuInputSchema),
					z.lazy(() => menu_categoriesUpdateWithWhereUniqueWithoutMenuInputSchema).array(),
				])
				.optional(),
			updateMany: z
				.union([
					z.lazy(() => menu_categoriesUpdateManyWithWhereWithoutMenuInputSchema),
					z.lazy(() => menu_categoriesUpdateManyWithWhereWithoutMenuInputSchema).array(),
				])
				.optional(),
			deleteMany: z
				.union([
					z.lazy(() => menu_categoriesScalarWhereInputSchema),
					z.lazy(() => menu_categoriesScalarWhereInputSchema).array(),
				])
				.optional(),
		})
		.strict();

export default menu_categoriesUpdateManyWithoutMenuNestedInputSchema;
