import type { Prisma } from '@prisma/client';

import prisma from '../prisma/prisma.js';
import {
	toBusinessMoneyFlowResponse,
	toBusinessMoneyFlowsList,
} from '../schemas/dto/BusinessMoneyFlow/businessMoneyFlow.mappers.js';
import type { BusinessMoneyFlowResponse } from '../types/payments/BusinessMoneyFlow.js';
import type { BusinessMoneyFlowWithBusinessPrisma } from '../prisma/includes/businessMoneyFlows.js';
/**
 * Create a new business money flow.
 *
 * @param {Prisma.business_money_flowsCreateInput} data
 * @returns {Promise<Prisma.business_money_flowsGetPayload>}
 */
export async function createBusinessMoneyFlow(
	data: Prisma.business_money_flowsCreateInput
): Promise<BusinessMoneyFlowResponse> {
	const row = await prisma.business_money_flows.create({ data, include: { business: true } });

	return toBusinessMoneyFlowResponse(row as BusinessMoneyFlowWithBusinessPrisma);
}
/**
 * Get business money flow by id.
 *
 * @param {string} id
 * @returns {Promise<Prisma.business_money_flowsGetPayload>}
 */
export async function getBusinessMoneyFlowById(id: string): Promise<BusinessMoneyFlowResponse | null> {
	const row = await prisma.business_money_flows.findUnique({
		where: { balance_change_id: id },
		include: { business: true },
	});

	return row ? toBusinessMoneyFlowResponse(row as BusinessMoneyFlowWithBusinessPrisma) : null;
}
/**
 * Get business money flows by business id.
 *
 * @param {string} businessId
 * @returns {Promise<Prisma.business_money_flowsGetPayload[]>}
 */
export async function getBusinessMoneyFlowsByBusinessId(businessId: string): Promise<BusinessMoneyFlowResponse[]> {
	const rows = await prisma.business_money_flows.findMany({
		where: { business_id: businessId },
		include: { business: true },
	});

	return toBusinessMoneyFlowsList(rows as BusinessMoneyFlowWithBusinessPrisma[]);
}
/**
 * Get business money flows by date range.
 *
 * @param {Date} from
 * @param {Date} to
 * @returns {Promise<Prisma.business_money_flowsGetPayload[]>}
 */
export async function getBusinessMoneyFlowsByDateRange(from: Date, to: Date): Promise<BusinessMoneyFlowResponse[]> {
	const rows = await prisma.business_money_flows.findMany({
		where: {
			created_at: {
				gte: from,
				lte: to,
			},
		},
		include: { business: true },
	});

	return toBusinessMoneyFlowsList(rows as BusinessMoneyFlowWithBusinessPrisma[]);
}
/**
 * Get all business money flows.
 *
 * @returns {Promise<Prisma.business_money_flowsGetPayload[]>}
 */
export async function getAllBusinessMoneyFlows(): Promise<BusinessMoneyFlowResponse[]> {
	const rows = await prisma.business_money_flows.findMany({ include: { business: true } });

	return toBusinessMoneyFlowsList(rows as BusinessMoneyFlowWithBusinessPrisma[]);
}

export default {
	createBusinessMoneyFlow,
	getBusinessMoneyFlowById,
	getBusinessMoneyFlowsByBusinessId,
	getBusinessMoneyFlowsByDateRange,
	getAllBusinessMoneyFlows,
};
