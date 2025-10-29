import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();
/**
 * Create a new business money flow.
 *
 * @param {Prisma.business_money_flowsCreateInput} data
 * @returns {Promise<Prisma.business_money_flowsGetPayload>}
 */
export async function createBusinessMoneyFlow(data: Prisma.business_money_flowsCreateInput) {
	return await prisma.business_money_flows.create({ data });
}
/**
 * Get business money flow by id.
 *
 * @param {string} id
 * @returns {Promise<Prisma.business_money_flowsGetPayload>}
 */
export async function getBusinessMoneyFlowById(id: string) {
	return await prisma.business_money_flows.findUnique({
		where: { balance_change_id: id },
	});
}
/**
 * Get business money flows by business id.
 *
 * @param {string} businessId
 * @returns {Promise<Prisma.business_money_flowsGetPayload[]>}
 */
export async function getBusinessMoneyFlowsByBusinessId(businessId: string) {
	return await prisma.business_money_flows.findMany({
		where: { business_id: businessId },
	});
}
/**
 * Get business money flows by date range.
 *
 * @param {Date} from
 * @param {Date} to
 * @returns {Promise<Prisma.business_money_flowsGetPayload[]>}
 */
export async function getBusinessMoneyFlowsByDateRange(from: Date, to: Date) {
	return await prisma.business_money_flows.findMany({
		where: {
			created_at: {
				gte: from,
				lte: to,
			},
		},
	});
}
/**
 * Get all business money flows.
 *
 * @returns {Promise<Prisma.business_money_flowsGetPayload[]>}
 */
export async function getAllBusinessMoneyFlows() {
	return await prisma.business_money_flows.findMany();
}

export default {
	createBusinessMoneyFlow,
	getBusinessMoneyFlowById,
	getBusinessMoneyFlowsByBusinessId,
	getBusinessMoneyFlowsByDateRange,
	getAllBusinessMoneyFlows,
};
