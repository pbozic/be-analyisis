import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { menusCreateWithoutBusinessInputSchema } from './menusCreateWithoutBusinessInputSchema';
import { menusUncheckedCreateWithoutBusinessInputSchema } from './menusUncheckedCreateWithoutBusinessInputSchema';
import { menusCreateOrConnectWithoutBusinessInputSchema } from './menusCreateOrConnectWithoutBusinessInputSchema';
import { menusUpsertWithWhereUniqueWithoutBusinessInputSchema } from './menusUpsertWithWhereUniqueWithoutBusinessInputSchema';
import { menusCreateManyBusinessInputEnvelopeSchema } from './menusCreateManyBusinessInputEnvelopeSchema';
import { menusWhereUniqueInputSchema } from './menusWhereUniqueInputSchema';
import { menusUpdateWithWhereUniqueWithoutBusinessInputSchema } from './menusUpdateWithWhereUniqueWithoutBusinessInputSchema';
import { menusUpdateManyWithWhereWithoutBusinessInputSchema } from './menusUpdateManyWithWhereWithoutBusinessInputSchema';
import { menusScalarWhereInputSchema } from './menusScalarWhereInputSchema';

export const menusUpdateManyWithoutBusinessNestedInputSchema: z.ZodType<Prisma.menusUpdateManyWithoutBusinessNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => menusCreateWithoutBusinessInputSchema),
					z.lazy(() => menusCreateWithoutBusinessInputSchema).array(),
					z.lazy(() => menusUncheckedCreateWithoutBusinessInputSchema),
					z.lazy(() => menusUncheckedCreateWithoutBusinessInputSchema).array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => menusCreateOrConnectWithoutBusinessInputSchema),
					z.lazy(() => menusCreateOrConnectWithoutBusinessInputSchema).array(),
				])
				.optional(),
			upsert: z
				.union([
					z.lazy(() => menusUpsertWithWhereUniqueWithoutBusinessInputSchema),
					z.lazy(() => menusUpsertWithWhereUniqueWithoutBusinessInputSchema).array(),
				])
				.optional(),
			createMany: z.lazy(() => menusCreateManyBusinessInputEnvelopeSchema).optional(),
			set: z
				.union([z.lazy(() => menusWhereUniqueInputSchema), z.lazy(() => menusWhereUniqueInputSchema).array()])
				.optional(),
			disconnect: z
				.union([z.lazy(() => menusWhereUniqueInputSchema), z.lazy(() => menusWhereUniqueInputSchema).array()])
				.optional(),
			delete: z
				.union([z.lazy(() => menusWhereUniqueInputSchema), z.lazy(() => menusWhereUniqueInputSchema).array()])
				.optional(),
			connect: z
				.union([z.lazy(() => menusWhereUniqueInputSchema), z.lazy(() => menusWhereUniqueInputSchema).array()])
				.optional(),
			update: z
				.union([
					z.lazy(() => menusUpdateWithWhereUniqueWithoutBusinessInputSchema),
					z.lazy(() => menusUpdateWithWhereUniqueWithoutBusinessInputSchema).array(),
				])
				.optional(),
			updateMany: z
				.union([
					z.lazy(() => menusUpdateManyWithWhereWithoutBusinessInputSchema),
					z.lazy(() => menusUpdateManyWithWhereWithoutBusinessInputSchema).array(),
				])
				.optional(),
			deleteMany: z
				.union([z.lazy(() => menusScalarWhereInputSchema), z.lazy(() => menusScalarWhereInputSchema).array()])
				.optional(),
		})
		.strict();

export default menusUpdateManyWithoutBusinessNestedInputSchema;
