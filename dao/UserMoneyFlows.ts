import { Prisma } from '@prisma/client';
import prisma from '../prisma/prisma.js';
import { toUserMoneyFlowResponse, toUserMoneyFlowList } from '../schemas/dto/payments/userMoneyFlow.mappers.js';
import type { UserMoneyFlowResponse } from '../types/payments/UserMoneyFlow.js';
import type { UserMoneyFlowWithUserPrisma } from '../prisma/includes/userMoneyFlows.js';

// reuse the shared prisma client
// const prisma = new PrismaClient();
/**
 * Create a new user money flow record.
 *
 * @param {Prisma.user_money_flowsCreateInput} data - The data for the new user money flow.
 * @returns {Promise<object>} The created user money flow record.
 */
export async function createUserMoneyFlow(data: Prisma.user_money_flowsCreateInput): Promise<UserMoneyFlowResponse> {
	const row = await prisma.user_money_flows.create({ data, include: { user: true } });
	return toUserMoneyFlowResponse(row as UserMoneyFlowWithUserPrisma);
}
/**
 * Get a user money flow record by its ID.
 *
 * @param {string} id - The ID of the user money flow record.
 * @returns {Promise<object|null>} The user money flow record or null if not found.
 */
export async function getUserMoneyFlowById(id: string): Promise<UserMoneyFlowResponse | null> {
	const row = await prisma.user_money_flows.findUnique({ where: { balance_change_id: id }, include: { user: true } });
	return row ? toUserMoneyFlowResponse(row as UserMoneyFlowWithUserPrisma) : null;
}
/**
 * Get all user money flow records for a specific user.
 *
 * @param {string} userId - The ID of the user.
 * @returns {Promise<object[]>} The user money flow records.
 */
export async function getUserMoneyFlowsByUserId(userId: string): Promise<UserMoneyFlowResponse[]> {
	const rows = await prisma.user_money_flows.findMany({ where: { user_id: userId }, include: { user: true }, orderBy: { created_at: 'desc' } });
	return toUserMoneyFlowList(rows as UserMoneyFlowWithUserPrisma[]);
}
/**
 * Get user money flow records within a specific date range.
 *
 * @param {Date} from - The start date of the range.
 * @param {Date} to - The end date of the range.
 * @returns {Promise<object[]>} The user money flow records within the date range.
 */
export async function getUserMoneyFlowsByDateRange(from: Date, to: Date): Promise<UserMoneyFlowResponse[]> {
	const rows = await prisma.user_money_flows.findMany({ where: { created_at: { gte: from, lte: to } }, include: { user: true }, orderBy: { created_at: 'desc' } });
	return toUserMoneyFlowList(rows as UserMoneyFlowWithUserPrisma[]);
}

export async function getAllUserMoneyFlows(): Promise<UserMoneyFlowResponse[]> {
	const rows = await prisma.user_money_flows.findMany({ include: { user: true }, orderBy: { created_at: 'desc' } });
	return toUserMoneyFlowList(rows as UserMoneyFlowWithUserPrisma[]);
}

export default {
	createUserMoneyFlow,
	getUserMoneyFlowById,
	getUserMoneyFlowsByUserId,
	getUserMoneyFlowsByDateRange,
	getAllUserMoneyFlows,
};
