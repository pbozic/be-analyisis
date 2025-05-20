import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { documentsCreateWithoutLost_itemsInputSchema } from './documentsCreateWithoutLost_itemsInputSchema';
import { documentsUncheckedCreateWithoutLost_itemsInputSchema } from './documentsUncheckedCreateWithoutLost_itemsInputSchema';
import { documentsCreateOrConnectWithoutLost_itemsInputSchema } from './documentsCreateOrConnectWithoutLost_itemsInputSchema';
import { documentsCreateManyLost_itemsInputEnvelopeSchema } from './documentsCreateManyLost_itemsInputEnvelopeSchema';
import { documentsWhereUniqueInputSchema } from './documentsWhereUniqueInputSchema';

export const documentsCreateNestedManyWithoutLost_itemsInputSchema: z.ZodType<Prisma.documentsCreateNestedManyWithoutLost_itemsInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => documentsCreateWithoutLost_itemsInputSchema),
					z.lazy(() => documentsCreateWithoutLost_itemsInputSchema).array(),
					z.lazy(() => documentsUncheckedCreateWithoutLost_itemsInputSchema),
					z.lazy(() => documentsUncheckedCreateWithoutLost_itemsInputSchema).array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => documentsCreateOrConnectWithoutLost_itemsInputSchema),
					z.lazy(() => documentsCreateOrConnectWithoutLost_itemsInputSchema).array(),
				])
				.optional(),
			createMany: z.lazy(() => documentsCreateManyLost_itemsInputEnvelopeSchema).optional(),
			connect: z
				.union([
					z.lazy(() => documentsWhereUniqueInputSchema),
					z.lazy(() => documentsWhereUniqueInputSchema).array(),
				])
				.optional(),
		})
		.strict();

export default documentsCreateNestedManyWithoutLost_itemsInputSchema;
