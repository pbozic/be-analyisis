import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersCreateWithoutReferralInputSchema } from './usersCreateWithoutReferralInputSchema';
import { usersUncheckedCreateWithoutReferralInputSchema } from './usersUncheckedCreateWithoutReferralInputSchema';
import { usersCreateOrConnectWithoutReferralInputSchema } from './usersCreateOrConnectWithoutReferralInputSchema';
import { usersUpsertWithoutReferralInputSchema } from './usersUpsertWithoutReferralInputSchema';
import { usersWhereUniqueInputSchema } from './usersWhereUniqueInputSchema';
import { usersUpdateToOneWithWhereWithoutReferralInputSchema } from './usersUpdateToOneWithWhereWithoutReferralInputSchema';
import { usersUpdateWithoutReferralInputSchema } from './usersUpdateWithoutReferralInputSchema';
import { usersUncheckedUpdateWithoutReferralInputSchema } from './usersUncheckedUpdateWithoutReferralInputSchema';

export const usersUpdateOneRequiredWithoutReferralNestedInputSchema: z.ZodType<Prisma.usersUpdateOneRequiredWithoutReferralNestedInput> =
	z
		.object({
			create: z
				.union([
					z.lazy(() => usersCreateWithoutReferralInputSchema),
					z.lazy(() => usersUncheckedCreateWithoutReferralInputSchema),
				])
				.optional(),
			connectOrCreate: z.lazy(() => usersCreateOrConnectWithoutReferralInputSchema).optional(),
			upsert: z.lazy(() => usersUpsertWithoutReferralInputSchema).optional(),
			connect: z.lazy(() => usersWhereUniqueInputSchema).optional(),
			update: z
				.union([
					z.lazy(() => usersUpdateToOneWithWhereWithoutReferralInputSchema),
					z.lazy(() => usersUpdateWithoutReferralInputSchema),
					z.lazy(() => usersUncheckedUpdateWithoutReferralInputSchema),
				])
				.optional(),
		})
		.strict();

export default usersUpdateOneRequiredWithoutReferralNestedInputSchema;
