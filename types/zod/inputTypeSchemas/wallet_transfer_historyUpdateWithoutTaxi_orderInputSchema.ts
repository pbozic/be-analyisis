import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { FloatFieldUpdateOperationsInputSchema } from './FloatFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema';
import { delivery_ordersUpdateOneWithoutWallet_transferNestedInputSchema } from './delivery_ordersUpdateOneWithoutWallet_transferNestedInputSchema';

export const wallet_transfer_historyUpdateWithoutTaxi_orderInputSchema: z.ZodType<Prisma.wallet_transfer_historyUpdateWithoutTaxi_orderInput> =
	z
		.object({
			wallet_transfer_history_id: z
				.union([z.string().uuid(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
				.optional(),
			amount: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputSchema)]).optional(),
			created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
			updated_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
			success: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputSchema)]).optional(),
			delivery_order: z.lazy(() => delivery_ordersUpdateOneWithoutWallet_transferNestedInputSchema).optional(),
		})
		.strict();

export default wallet_transfer_historyUpdateWithoutTaxi_orderInputSchema;
