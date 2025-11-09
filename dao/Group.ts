import prisma from '../prisma/prisma.js';
import { SERVICE_TYPE } from '../lib/constants.js';
import type {
    GroupUserResponse,
    GroupUserDetailResponse,
    GroupUserWithAllowanceResponse
} from '../schemas/dto/Group/index.js';

// Define common query arg types
interface FindUniqueArgs {
	where?: any;
	include?: any;
}

interface FindFirstArgs {
	where?: any;
	include?: any;
	orderBy?: any;
}

interface CreateGroupUserData {
	parent_user_id: string;
	child_user_id: string;
}

/**
 * Get group_users row by parent user id.
 *
 * @param {string} parent_id - Parent user ID.
 * @returns {Promise<GroupUserResponse | null>} group_users row or null.
 */
const getGroupUsersByParentId = async (parent_id: string): Promise<GroupUserResponse | null> => {
	try {
		return await prisma.group_users.findUnique({
			where: {
				parent_user_id: parent_id,
			},
		}) as GroupUserResponse | null;
	} catch (error) {
		console.error('Error retrieving group_users by parent_id:', error);
		throw new Error(error instanceof Error ? error.message : 'Failed to get group users by parent ID');
	}
};

/**
 * Get group_user by child user id with parent_user and allowance included.
 *
 * @param {string} child_id - Child user ID.
 * @returns {Promise<GroupUserDetailResponse | null>} group_user row or null.
 */
const getGroupUserByChildId = async (child_id: string): Promise<GroupUserDetailResponse | null> => {
	try {
		return await prisma.group_users.findFirst({
			where: {
				child_user_id: child_id,
			},
			include: { parent_user: true, allowance: true },
		}) as GroupUserDetailResponse | null;
	} catch (error) {
		console.error('Error retrieving group_user by child_id:', error);
		throw new Error(error instanceof Error ? error.message : 'Failed to get group user by child ID');
	}
};

/**
 * Create a group_user link between parent and child users and bootstrap allowance.
 *
 * @param {CreateGroupUserData} group_user_data - Contains parent_user_id and child_user_id.
 * @returns {Promise<GroupUserResponse>} Created group_user.
 */
const createGroupUser = async (group_user_data: CreateGroupUserData): Promise<GroupUserResponse> => {
	try {
		const group_user = await prisma.group_users.create({
			data: {
				parent_user: { connect: { user_id: group_user_data.parent_user_id } },
				child_user: { connect: { user_id: group_user_data.child_user_id } },
			},
		});
		
		await prisma.allowances.create({
			data: {
				user: {
					connect: {
						group_user_id: group_user.group_user_id,
					},
				},
			},
		});
		
		return group_user as GroupUserResponse;
	} catch (error) {
		console.error('Error creating group user:', error);
		throw new Error(error instanceof Error ? error.message : 'Failed to create group user');
	}
};

/**
 * Delete a group_user by id.
 *
 * @param {string} group_user_id - Group user ID.
 * @returns {Promise<GroupUserResponse>} Deleted group_user.
 */
const deleteGroupUser = async (group_user_id: string): Promise<GroupUserResponse> => {
	try {
		return await prisma.group_users.delete({
			where: { group_user_id: group_user_id },
		}) as GroupUserResponse;
	} catch (error) {
		console.error('Error deleting group user:', error);
		throw new Error(error instanceof Error ? error.message : 'Failed to delete group user');
	}
};

/**
 * Toggle a group_user enabled flag.
 *
 * @param {string} group_user_id - Group user ID.
 * @param {boolean} value - Enabled value.
 * @returns {Promise<GroupUserResponse>} Updated group_user.
 */
const updateGroupUserEnabled = async (group_user_id: string, value: boolean): Promise<GroupUserResponse> => {
	try {
		console.log('UPDATE ENABLED FOR GROUP_USER: ', group_user_id, ' TO VALUE: ', value);
		return await prisma.group_users.update({
			where: {
				group_user_id: group_user_id,
			},
			data: {
				enabled: value,
			},
		}) as GroupUserResponse;
	} catch (error) {
		console.error('Error updating group user enabled status:', error);
		throw new Error(error instanceof Error ? error.message : 'Failed to update group user enabled status');
	}
};

/**
 * Update allowance amounts for a group_user by service type; creates allowance if missing.
 *
 * @param {string} group_user_id - Group user ID.
 * @param {number} value - New allowance value.
 * @param {string} type - Service type (SERVICE_TYPE enum).
 * @returns {Promise<GroupUserWithAllowanceResponse>} group_user with allowance included.
 */
const updateGroupUserAllowance = async (group_user_id: string, value: number, type: string): Promise<GroupUserWithAllowanceResponse> => {
	try {
		const updateData: any = {};
		
		switch (type) {
			case SERVICE_TYPE.TAXI:
				updateData.amount_taxi_wallet = value;
				break;
			case SERVICE_TYPE.TRANSFER:
				updateData.amount_transfer_wallet = value;
				break;
			case SERVICE_TYPE.DELIVERY:
				updateData.amount_delivery_wallet = value;
				break;
			case SERVICE_TYPE.ANY:
				updateData.amount_any_wallet = value;
				break;
			default:
				throw new Error('Invalid allowance type given');
		}
		
		await prisma.allowances.upsert({
			where: { group_user_id },
			update: updateData,
			create: { group_user_id, ...updateData },
		});
		
		const result = await prisma.group_users.findUnique({
			where: { group_user_id },
			include: { allowance: true },
		});
		
		if (!result) {
			throw new Error('Group user not found after allowance update');
		}
		
		return result as GroupUserWithAllowanceResponse;
	} catch (error) {
		console.error('Error updating group user allowance:', error);
		throw new Error(error instanceof Error ? error.message : 'Failed to update group user allowance');
	}
};

export { getGroupUsersByParentId };
export { getGroupUserByChildId };
export { createGroupUser };
export { deleteGroupUser };
export { updateGroupUserEnabled };
export { updateGroupUserAllowance };

export default {
	getGroupUsersByParentId,
	getGroupUserByChildId,
	createGroupUser,
	deleteGroupUser,
	updateGroupUserEnabled,
	updateGroupUserAllowance,
};