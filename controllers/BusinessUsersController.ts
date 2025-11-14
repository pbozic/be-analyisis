import { Request, Response } from 'express';

import BusinessUsersDao from '../dao/BusinessUsers.js';
import AddressDao from '../dao/Address.js';
import GroupDao from '../dao/Group.js';
import elasticsearch from '../elasticsearch/index.js';
import { ValidatedRequest } from '../types/validatedRequest.ts';
import { AddAddressInput } from '../schemas/dto/Business/business.validators.ts';
import {
	UpdateCompanyRoleInput,
	UpdateOnlineStatusInput,
	UpdateAllowanceInput,
	InviteBusinessUserInput,
	AcceptBusinessInvitationInput,
} from '../schemas/dto/BusinessUser/businessUser.validators.ts';
const { businessIndex } = elasticsearch;

/**
 - GET /business-users
 - @tag BusinessUser
 - @summary Get all business users
 - @description Retrieves all business_user relations with included user, business and allowance.
 - @operationId getAllBusinessUsers
 - @response 200 - Business users retrieved successfully
 - @responseContent {BusinessUserListResponse} 200.application/json
 - @response 400 - Error retrieving business users
 - @prisma_model business_users
 - @prisma_schema ./prisma/schemas/business.prisma
 */
export async function getAllBusinessUsers(req: Request, res: Response): Promise<void> {
	try {
		const businessUsers = await BusinessUsersDao.getAllBusinessUsers();
		res.status(200).json(businessUsers);
	} catch (error: any) {
		console.error('Error retrieving all business users:', error);
		res.status(400).json({ error: 'Error retrieving all business users', detail: error?.message ?? String(error) });
	}
}

/**
 - GET /business-users/user/:user_id
 - @tag BusinessUser
 - @summary Get a business user by user ID
 - @description Retrieves the business_user relation for a given user, with related business context (business, allowance, operating_address).
 - @operationId getBusinessUserByUserId
 - @pathParam {string} user_id - The user ID to look up.
 - @response 200 - Business user retrieved successfully
 - @responseContent {BusinessUserWithBusinessResponse} 200.application/json
 - @response 404 - Business user not found
 - @response 400 - Error retrieving business user
 - @prisma_model business_users
 - @prisma_schema ./prisma/schemas/business.prisma
 */
export async function getBusinessUserByUserId(
	req: ValidatedRequest<never, { user_id: string }>,
	res: Response
): Promise<void> {
	try {
		const businessUser = await BusinessUsersDao.getBusinessUserByUserId(req.params.user_id);
		res.status(200).json(businessUser);
	} catch (error: any) {
		console.error('Error retrieving business user:', error);
		res.status(400).json({ error: 'Error retrieving business user', detail: error?.message ?? String(error) });
	}
}

/**
¸ - GET /business/:business_id/users
 - @tag BusinessUser
 - @summary Get business users by business ID
 - @description Lists business_users for a specific business. Each entry includes the related user.
 - @operationId getBusinessUsersByBusinessId
 - @pathParam {string} business_id - The business ID.
 - @response 200 - Business users retrieved successfully
 - @responseContent {BusinessUserListResponse} 200.application/json
 - @response 400 - Error retrieving business users by business ID
 - @prisma_model business_users
 - @prisma_schema ./prisma/schemas/business.prisma
 */
export async function getBusinessUsersByBusinessId(
	req: ValidatedRequest<never, { business_id: string }>,
	res: Response
): Promise<void> {
	try {
		const businessUsers = await BusinessUsersDao.getBusinessUsersByBusinessId(req.params.business_id);
		res.status(200).json(businessUsers);
	} catch (error: any) {
		console.error('Error retrieving business users by business ID:', error);
		res.status(400).json({
			error: 'Error retrieving business users by business ID',
			detail: error?.message ?? String(error),
		});
	}
}

/**
 - GET /business/:business_id/users/role/:company_role
 - @tag BusinessUser
 - @summary Get all business users for a business filtered by company role
 - @description Retrieves business_users for a given business and company_role. Includes user relation.
 - @operationId getAllBusinessUsersForBusinessByCompanyRole
 - @pathParam {string} business_id - The business ID.
 - @pathParam {string} company_role - Company role to filter by.
 - @response 200 - Business users retrieved successfully
 - @responseContent {BusinessUserListResponse} 200.application/json
 - @response 400 - Error retrieving business users by company role
 - @prisma_model business_users
 - @prisma_schema ./prisma/schemas/business.prisma
 */
export async function getAllBusinessUsersForBusinessByCompanyRole(
	req: ValidatedRequest<never, { business_id: string; company_role: string }>,
	res: Response
): Promise<void> {
	try {
		const { business_id, company_role } = req.params;
		const businessUsers = await BusinessUsersDao.getAllBusinessUsersForBusinessByCompanyRole(
			business_id,
			company_role
		);
		res.status(200).json(businessUsers);
	} catch (error: any) {
		console.error('Error retrieving business users by company role:', error);
		res.status(400).json({
			error: 'Error retrieving business users by company role',
			detail: error?.message ?? String(error),
		});
	}
}

/**
 - DELETE /business-users/:business_users_id
 - @tag BusinessUser
 - @summary Remove a business user
 - @description Removes a business_user relation by its ID and returns the deleted record.
 - @operationId removeBusinessUser
 - @pathParam {string} business_users_id - The ID of the business_user relation to delete.
 - @response 200 - Business user removed successfully
 - @responseContent {BusinessUserResponse} 200.application/json
 - @response 400 - Error removing business user
 - @prisma_model business_users
 - @prisma_schema ./prisma/schemas/business.prisma
 */
export async function removeBusinessUser(
	req: ValidatedRequest<never, { business_users_id: string }>,
	res: Response
): Promise<void> {
	try {
		await BusinessUsersDao.removeBusinessUser(req.params.business_users_id);
		res.status(200).json({ message: 'Business user removed successfully.' });
	} catch (error: any) {
		console.error('Error removing a business user:', error);
		res.status(400).json({ error: 'Error removing a business user', detail: error?.message ?? String(error) });
	}
}

/**
 - POST /business-users/:business_users_id/operating-address
 - @tag BusinessUser
 - @summary Add operating address to a business user
 - @description Adds an address and connects it as the operating_address for the given business_user.
 - @operationId addOperatingAddress
 - @pathParam {string} business_users_id - The business_user relation ID.
 - @requestBody {AddAddress} Address - address object passed to AddressDao.addAddress
 - @response 200 - Operating address added successfully
 - @responseContent {BusinessUserResponse} 200.application/json
 - @response 400 - Error adding operating address
 - @prisma_model business_users
 - @prisma_schema ./prisma/schemas/business.prisma
 */
export async function addOperatingAddress(
	req: ValidatedRequest<AddAddressInput, { business_users_id: string }>,
	res: Response
): Promise<void> {
	try {
		const address = await AddressDao.addAddress(req.body as any);
		if (address instanceof Error) {
			res.status(400).json({ error: 'Error adding address', detail: address.message });
			return;
		}
		const businessUserAddress = await BusinessUsersDao.addOperatingAddress(
			req.params.business_users_id,
			address.address_id
		);
		if (businessUserAddress) {
			res.status(200).json(businessUserAddress);
			return;
		}
		res.status(400).json({ error: 'Error adding address' });
	} catch (e: any) {
		console.error(e);
		res.status(400).json({ error: 'Error adding address', detail: e?.message ?? String(e) });
	}
}

/**
 - PATCH /business-users/:business_users_id/company-role
 - @tag BusinessUser
 - @summary Update company role for a business user
 - @description Updates the company_role field for a business_user relation.
 - @operationId updateCompanyRole
 - @pathParam {string} business_users_id - The business_user relation ID.
 - @requestBody {object} - { company_role: string }
 - @response 200 - Company role updated successfully
 - @responseContent {BusinessUserResponse} 200.application/json
 - @response 400 - Error updating company role
 - @prisma_model business_users
 - @prisma_schema ./prisma/schemas/business.prisma
 */
export async function updateCompanyRole(
	req: ValidatedRequest<UpdateCompanyRoleInput, { business_users_id: string }>,
	res: Response
): Promise<void> {
	try {
		const { business_users_id } = (req.params as any) || {};
		const { company_role } = (req.body as any) || {};
		const updatedBusinessUser = await BusinessUsersDao.updateCompanyRole(business_users_id, company_role);
		res.status(200).json(updatedBusinessUser);
	} catch (error: any) {
		console.error('Error updating company role:', error);
		res.status(400).json({ error: 'Error updating company role', detail: error?.message ?? String(error) });
	}
}

/**
 - PATCH /business-users/online-status
 - @tag BusinessUser
 - @summary Update online status for a business user
 - @description Toggles the online flag for a business_user and returns the updated record (includes business where applicable).
 - @operationId updateBusinessUserOnlineStatus
 - @requestBody {UpdateOnlineStatus} - { business_users_id: string, online: boolean }
 - @response 200 - Online status updated successfully
 - @responseContent {BusinessUserWithBusinessResponse} 200.application/json
 - @response 400 - Error updating business user online status
 - @prisma_model business_users
 - @prisma_schema ./prisma/schemas/business.prisma
 */
export async function updateBusinessUserOnlineStatus(
	req: ValidatedRequest<UpdateOnlineStatusInput, { business_users_id: string }>,
	res: Response
): Promise<void> {
	try {
		const { business_users_id, online } = (req.body as any) || {};
		const updatedBusinessUser = await BusinessUsersDao.updateBusinessUserOnlineStatus(business_users_id, online);
		if (updatedBusinessUser?.business || updatedBusinessUser?.business) {
			businessIndex(updatedBusinessUser?.business_id);
		}
		res.status(200).json(updatedBusinessUser);
	} catch (error: any) {
		console.error('Error updating online status:', error);
		res.status(400).json({
			error: 'Error updating business user online status',
			detail: error?.message ?? String(error),
		});
	}
}

/**
 - GET /business/:business_id/groups
 - @tag BusinessUser
 - @summary Get nested group users for a business
 - @description For each business_user in a business, fetches group child users (via GroupDao) and returns nested structures { user_id, child_users }.
 - @operationId getBusinessGroupsByBusinessId
 - @pathParam {string} business_id - The business ID.
 - @response 200 - Group users retrieved successfully
 - @responseContent {BusinessUserListResponse} 200.application/json
 - @response 400 - Error obtaining group users for business
 - @prisma_model business_users
 - @prisma_schema ./prisma/schemas/business.prisma
 */
export async function getBusinessGroupsByBusinessId(
	req: ValidatedRequest<never, { business_id: string }>,
	res: Response
): Promise<void> {
	try {
		const businessUsers: any[] = await BusinessUsersDao.getBusinessUsersByBusinessId(req.params.business_id);
		const nested_groupUsers: any[] = [];
		for (const business_user of businessUsers) {
			const group_users = await GroupDao.getGroupUsersByParentId((business_user as any).user_id);
			if (group_users.length > 0) {
				nested_groupUsers.push({ user_id: (business_user as any).user_id, child_users: group_users });
			}
		}
		res.status(200).json(nested_groupUsers);
	} catch (e: any) {
		console.error('Error obtaining group_users for business', e);
		res.status(400).json({ error: 'Error obtaining group_users for business', detail: e?.message ?? String(e) });
	}
}

/**
 - POST /business-users/allowance
 - @tag BusinessUser
 - @summary Update allowance for a business user
 - @description Upserts allowance amounts for a business_user depending on service type (TAXI, TRANSFER, DELIVERY, ANY) and returns the updated business_user with allowance.
 - @operationId setAllowance
 - @requestBody {UpdateAllowance} - { business_users_id: string, wallet: number, purchase_order: number, type: string }
 - @response 200 - Allowance updated successfully
 - @responseContent {object} 200.application/json
 - @response 400 - Error updating business user allowance
 - @responseContent {object} 400.application/json
 - @prisma_model allowances
 - @prisma_schema ./prisma/schemas/business.prisma
 */
export async function setAllowance(req: ValidatedRequest<UpdateAllowanceInput>, res: Response): Promise<void> {
	const { business_users_id, wallet, purchase_order, type } = (req.body as any) || {};
	try {
		const business_user = await BusinessUsersDao.updateAllowance(business_users_id, wallet, purchase_order, type);
		if (business_user) {
			res.status(200).json(business_user);
			return;
		}
		res.status(400).json({ error: 'Error updating business user allowance' });
	} catch (e: any) {
		console.error(e);
		res.status(400).json({ error: 'Error updating business user allowance', detail: e?.message ?? String(e) });
	}
}

/**
 - POST /business-users/invite
 - @tag BusinessUser
 - @summary Invite a business user by email or telephone
 - @description Sends an invitation to an email or telephone to add a family/business user. No DB changes performed in this endpoint.
 - @operationId inviteBusinessUser
 - @requestBody {InviteBusinessUser} - { email?: string, telephone?: string }
 - @response 200 - Invitation queued/sent
 - @responseContent {object} 200.application/json
 - @response 400 - Bad request (missing email/telephone)
 - @responseContent {object} 400.application/json
 */
export async function inviteBusinessUser(req: ValidatedRequest<InviteBusinessUserInput>, res: Response): Promise<void> {
	try {
		const userId = (req as any).user?.user_id;
		const { email, telephone } = (req.body as any) || {};
		if (!userId) {
			res.status(400).json({ error: 'User ID is required' });
			return;
		}
		if (!email && !telephone) {
			res.status(400).json({ error: 'Either email or telephone is required to send an invitation' });
			return;
		}
		// TODO: Implement the logic to send the invitation via email or SMS
		res.status(200).json({ message: 'Business user invitation sent successfully' });
	} catch (error: any) {
		res.status(500).json({ error: error?.message ?? 'Error inviting business user' });
	}
}

/**
 - POST /business-users/invite/accept
 - @tag BusinessUser
 - @summary Accept a business invitation
 - @description Accepts an invitation using an invitation code (no DB action in this stubbed endpoint).
 - @operationId acceptBusinessInvitation
 - @requestBody {AcceptBusinessInvitation} - { invitationCode: string }
 - @response 200 - Invitation accepted
 - @responseContent {object} 200.application/json
 - @response 400 - Bad request (missing user or invitationCode)
 - @responseContent {object} 400.application/json
 */
export async function acceptBusinessInvitation(
	req: ValidatedRequest<AcceptBusinessInvitationInput>,
	res: Response
): Promise<void> {
	try {
		const userId = (req as any).user?.user_id;
		const { invitationCode } = (req.body as any) || {};
		if (!userId) {
			res.status(400).json({ error: 'User ID is required' });
			return;
		}
		if (!invitationCode) {
			res.status(400).json({ error: 'Invitation code is required to accept an invitation' });
			return;
		}
		// TODO: Implement the logic to accept the invitation using the invitationCode
		res.status(200).json({ message: 'Business user invitation accepted successfully' });
	} catch (error: any) {
		res.status(500).json({ error: error?.message ?? 'Error accepting business user invitation' });
	}
}

export default {
	getAllBusinessUsers,
	getBusinessUserByUserId,
	getBusinessUsersByBusinessId,
	getAllBusinessUsersForBusinessByCompanyRole,
	removeBusinessUser,
	addOperatingAddress,
	updateCompanyRole,
	updateBusinessUserOnlineStatus,
	getBusinessGroupsByBusinessId,
	setAllowance,
	inviteBusinessUser,
	acceptBusinessInvitation,
};
