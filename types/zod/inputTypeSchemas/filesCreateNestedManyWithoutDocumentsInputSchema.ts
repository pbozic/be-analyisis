import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { filesCreateWithoutDocumentsInputSchema } from './filesCreateWithoutDocumentsInputSchema';
import { filesUncheckedCreateWithoutDocumentsInputSchema } from './filesUncheckedCreateWithoutDocumentsInputSchema';
import { filesCreateOrConnectWithoutDocumentsInputSchema } from './filesCreateOrConnectWithoutDocumentsInputSchema';
import { filesCreateManyDocumentsInputEnvelopeSchema } from './filesCreateManyDocumentsInputEnvelopeSchema';
import { filesWhereUniqueInputSchema } from './filesWhereUniqueInputSchema';

export const filesCreateNestedManyWithoutDocumentsInputSchema: z.ZodType<Prisma.filesCreateNestedManyWithoutDocumentsInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => filesCreateWithoutDocumentsInputSchema),
					z.lazy(() => filesCreateWithoutDocumentsInputSchema).array(),
					z.lazy(() => filesUncheckedCreateWithoutDocumentsInputSchema),
					z.lazy(() => filesUncheckedCreateWithoutDocumentsInputSchema).array(),
				])
				.optional(),
			connectOrCreate: z
				.union([
					z.lazy(() => filesCreateOrConnectWithoutDocumentsInputSchema),
					z.lazy(() => filesCreateOrConnectWithoutDocumentsInputSchema).array(),
				])
				.optional(),
			createMany: z.lazy(() => filesCreateManyDocumentsInputEnvelopeSchema).optional(),
			connect: z
				.union([z.lazy(() => filesWhereUniqueInputSchema), z.lazy(() => filesWhereUniqueInputSchema).array()])
				.optional(),
		})
		.strict();

export default filesCreateNestedManyWithoutDocumentsInputSchema;
