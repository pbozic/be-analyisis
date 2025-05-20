import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { translatableCreateWithoutWordsInputSchema } from './translatableCreateWithoutWordsInputSchema';
import { translatableUncheckedCreateWithoutWordsInputSchema } from './translatableUncheckedCreateWithoutWordsInputSchema';
import { translatableCreateOrConnectWithoutWordsInputSchema } from './translatableCreateOrConnectWithoutWordsInputSchema';
import { translatableUpsertWithoutWordsInputSchema } from './translatableUpsertWithoutWordsInputSchema';
import { translatableWhereUniqueInputSchema } from './translatableWhereUniqueInputSchema';
import { translatableUpdateToOneWithWhereWithoutWordsInputSchema } from './translatableUpdateToOneWithWhereWithoutWordsInputSchema';
import { translatableUpdateWithoutWordsInputSchema } from './translatableUpdateWithoutWordsInputSchema';
import { translatableUncheckedUpdateWithoutWordsInputSchema } from './translatableUncheckedUpdateWithoutWordsInputSchema';

export const translatableUpdateOneRequiredWithoutWordsNestedInputSchema: z.ZodType<Prisma.translatableUpdateOneRequiredWithoutWordsNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => translatableCreateWithoutWordsInputSchema),
					z.lazy(() => translatableUncheckedCreateWithoutWordsInputSchema),
				])
				.optional(),
			connectOrCreate: z.lazy(() => translatableCreateOrConnectWithoutWordsInputSchema).optional(),
			upsert: z.lazy(() => translatableUpsertWithoutWordsInputSchema).optional(),
			connect: z.lazy(() => translatableWhereUniqueInputSchema).optional(),
			update: z
				.union([
					z.lazy(() => translatableUpdateToOneWithWhereWithoutWordsInputSchema),
					z.lazy(() => translatableUpdateWithoutWordsInputSchema),
					z.lazy(() => translatableUncheckedUpdateWithoutWordsInputSchema),
				])
				.optional(),
		})
		.strict();

export default translatableUpdateOneRequiredWithoutWordsNestedInputSchema;
