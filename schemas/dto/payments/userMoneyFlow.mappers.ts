import { UserMoneyFlowResponseSchema } from '../../../types/payments/UserMoneyFlow.js';
import type { UserMoneyFlowResponse } from '../../../types/payments/UserMoneyFlow.js';
import type { UserMoneyFlowWithUserPrisma } from '../../../prisma/includes/userMoneyFlows.js';

export function toUserMoneyFlowResponse(row: UserMoneyFlowWithUserPrisma | unknown): UserMoneyFlowResponse {
	const r = row as any;
	const dto = {
		balance_change_id: r.balance_change_id,
		user_id: r.user_id,
		amount: r.amount,
		stripe_fee: r.stripe_fee,
		type: r.type,
		payment_method: r.payment_method ?? null,
		created_at: r.created_at ? new Date(r.created_at).toISOString() : new Date().toISOString(),
		user: (r as any).user ?? undefined,
	};

	return UserMoneyFlowResponseSchema.parse(dto);
}

export function toUserMoneyFlowList(rows: Array<UserMoneyFlowWithUserPrisma | unknown>): UserMoneyFlowResponse[] {
	return rows.map((r) => toUserMoneyFlowResponse(r));
}

export default { toUserMoneyFlowResponse, toUserMoneyFlowList };
