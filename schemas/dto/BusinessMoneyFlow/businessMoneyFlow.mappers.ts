import { BusinessMoneyFlowResponseSchema } from '../../../types/payments/BusinessMoneyFlow.js';
import type { BusinessMoneyFlowResponse } from '../../../types/payments/BusinessMoneyFlow.js';
import type {
	BusinessMoneyFlowWithBusinessPrisma,
	BusinessMoneyFlowDefaultPrisma,
} from '../../../prisma/includes/businessMoneyFlows.js';

function toIso(d: unknown) {
	return d ? new Date(d as any).toISOString() : undefined;
}

export function toBusinessMoneyFlowResponse(
	row: BusinessMoneyFlowWithBusinessPrisma | BusinessMoneyFlowDefaultPrisma
): BusinessMoneyFlowResponse {
	const r = row as any;

	return BusinessMoneyFlowResponseSchema.parse({
		balance_change_id: r.balance_change_id,
		business_id: r.business_id,
		amount: r.amount,
		stripe_fee: r.stripe_fee,
		type: r.type,
		payment_method: r.payment_method ?? null,
		created_at: toIso(r.created_at) ?? new Date().toISOString(),
		business: r.business ?? null,
	});
}

export function toBusinessMoneyFlowsList(
	rows: Array<BusinessMoneyFlowWithBusinessPrisma | BusinessMoneyFlowDefaultPrisma>
): BusinessMoneyFlowResponse[] {
	return rows.map((r) => toBusinessMoneyFlowResponse(r));
}

export default { toBusinessMoneyFlowResponse, toBusinessMoneyFlowsList };
