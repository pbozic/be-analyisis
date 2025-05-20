import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { documentsCreateWithoutMenu_itemsInputSchema } from './documentsCreateWithoutMenu_itemsInputSchema';
import { documentsUncheckedCreateWithoutMenu_itemsInputSchema } from './documentsUncheckedCreateWithoutMenu_itemsInputSchema';
import { documentsCreateOrConnectWithoutMenu_itemsInputSchema } from './documentsCreateOrConnectWithoutMenu_itemsInputSchema';
import { documentsCreateManyMenu_itemsInputEnvelopeSchema } from './documentsCreateManyMenu_itemsInputEnvelopeSchema';
import { documentsWhereUniqueInputSchema } from './documentsWhereUniqueInputSchema';

export const documentsCreateNestedManyWithoutMenu_itemsInputSchema: z.ZodType<Prisma.documentsCreateNestedManyWithoutMenu_itemsInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => documentsCreateWithoutMenu_itemsInputSchema),
					z.lazy(() => documentsCreateWithoutMenu_itemsInputSchema).array(),
					z.lazy(() => documentsUncheckedCreateWithoutMenu_itemsInputSchema),
					z.lazy(() => documentsUncheckedCreateWithoutMenu_itemsInputSchema).array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => documentsCreateOrConnectWithoutMenu_itemsInputSchema),
					z.lazy(() => documentsCreateOrConnectWithoutMenu_itemsInputSchema).array(),
				])
				.optional(),
			createMany: z.lazy(() => documentsCreateManyMenu_itemsInputEnvelopeSchema).optional(),
			connect: z
				.union([
					z.lazy(() => documentsWhereUniqueInputSchema),
					z.lazy(() => documentsWhereUniqueInputSchema).array(),
				])
				.optional(),
		})
		.strict();

export default documentsCreateNestedManyWithoutMenu_itemsInputSchema;
