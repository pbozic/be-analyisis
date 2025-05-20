import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { filesUpdateOneRequiredWithoutPromo_bannersNestedInputSchema } from './filesUpdateOneRequiredWithoutPromo_bannersNestedInputSchema';

export const promo_bannersUpdateWithoutPromo_adsInputSchema: z.ZodType<Prisma.promo_bannersUpdateWithoutPromo_adsInput> =
	z
		.object({
			promo_banners_id: z
				.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
				.optional(),
			type: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
			size: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			title: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
			text: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
			promo_section_buy_id: z
				.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)])
				.optional()
				.nullable(),
			files: z.lazy(() => filesUpdateOneRequiredWithoutPromo_bannersNestedInputSchema).optional(),
		})
		.strict();

export default promo_bannersUpdateWithoutPromo_adsInputSchema;
