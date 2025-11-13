import { Response } from 'express';

import BusinessUsersDao from '../dao/BusinessUsers.js';
import AddressDao from '../dao/Address.js';
import GroupDao from '../dao/Group.js';
import UserDao from '../dao/User.js';
import elasticsearch from '../elasticsearch/index.js';
import { AuthenticatedRequest, ValidatedRequest } from '../types/validatedRequest.js';
import {
	CreateBusinessUserRequest,
	AddOperatingAddressRequest,
	UpdateCompanyRoleRequest,
	UpdateBusinessUserOnlineStatusRequest,
	SetAllowanceRequest,
	InviteBusinessUserRequest,
	AcceptBusinessInvitationRequest,
} from '../schemas/dto/BusinessUser/BusinessUserRequest.dto.js';

const { businessIndex } = elasticsearch;

/**
 * GET /business-users
 * @tag BusinessUsers
 * @summary Get a list of all business users
 * @description Returns a list of all business users.
 * @operationId getAllBusinessUsers
 * @response 200 - successful operation
 * @responseContent {object} 200.application/json
 * @response 400 - Error occurred while obtaining the business user list
 * @responseContent {object} 400.application/json The error object
 * @prisma_model business_users
 */
async function getAllBusinessUsers(req: AuthenticatedRequest, res: Response): Promise<void> {
	try {
		const businessUsers = await BusinessUsersDao.getAllBusinessUsers();
		res.status(200).json(businessUsers);
	} catch (error) {
		console.error('Error retrieving all business users:', error);
		res.status(400).json({
			error: 'Error retrieving all business users',
			detail: error instanceof Error ? error.message : 'Unknown error',
		});
	}
}

/**
 * GET /business-users/{user_id}
 * @tag BusinessUsers
 * @summary Get a business user based on user ID
 * @description Returns a business user.
 * @operationId getBusinessUsersByUserId
 * @response 200 - successful operation
 * @responseContent {object} 200.application/json
 * @response 400 - Error occurred while obtaining the business user
 * @responseContent {object} 400.application/json The error object
 * @prisma_model business_users
 */
async function getBusinessUserByUserId(
	req: ValidatedRequest<never, { user_id: string }>,
	res: Response
): Promise<void> {
	try {
		const businessUser = await BusinessUsersDao.getBusinessUserByUserId(req.params.user_id);
		res.status(200).json(businessUser);
	} catch (error) {
		console.error('Error retrieving business user:', error);
		res.status(400).json({
			error: 'Error retrieving business user',
			detail: error instanceof Error ? error.message : 'Unknown error',
		});
	}
}

/**
 * GET /business-users/business/{business_id}
 * @tag BusinessUsers
 * @summary Get business users by business ID
 * @description Returns a list of business users for a specific business ID.
 * @operationId getBusinessUsersByBusinessId
 * @pathParam {string} business_id - The ID of the business
 * @response 200 - successful operation
 * @responseContent {object} 200.application/json
 * @response 400 - Error occurred while obtaining the business user list
 * @responseContent {object} 400.application/json The error object
 * @prisma_model business_users
 */
async function getBusinessUsersByBusinessId(
	req: ValidatedRequest<never, { business_id: string }>,
	res: Response
): Promise<void> {
	try {
		const businessUsers = await BusinessUsersDao.getBusinessUsersByBusinessId(req.params.business_id);
		res.status(200).json(businessUsers);
	} catch (error) {
		console.error('Error retrieving business users by business ID:', error);
		res.status(400).json({
			error: 'Error retrieving business users by business ID',
			detail: error instanceof Error ? error.message : 'Unknown error',
		});
	}
}

/**
 * GET /business-users/type/{type}
 * @tag BusinessUsers
 * @summary Get business users by business type
 * @description Returns a list of business users for a specific business type.
 * @operationId getBusinessUsersByBusinessType
 * @pathParam {string} type - The type of the business
 * @response 200 - successful operation
 * @responseContent {object} 200.application/json
 * @response 400 - Error occurred while obtaining the business user list
 * @responseContent {object} 400.application/json The error object
 * @prisma_model business_users
 */
async function getBusinessUsersByBusinessType(
	req: ValidatedRequest<never, { type: string }>,
	res: Response
): Promise<void> {
	try {
		const businessUsers = await BusinessUsersDao.getBusinessUsersByBusinessType(req.params.type);
		res.status(200).json(businessUsers);
	} catch (error) {
		console.error('Error retrieving business users by business type:', error);
		res.status(400).json({
			error: 'Error retrieving business users by business type',
			detail: error instanceof Error ? error.message : 'Unknown error',
		});
	}
}

/**
 * GET /business-users/business/{business_id}/company-role/{company_role}
 * @tag BusinessUsers
 * @summary Get business users by business ID and company role
 * @description Returns a list of business users for a specific business ID and company role.
 * @operationId getAllBusinessUsersForBusinessByCompanyRole
 * @pathParam {string} business_id - The ID of the business
 * @pathParam {string} company_role - The company role of the business users
 * @response 200 - successful operation
 * @responseContent {object} 200.application/json
 * @response 400 - Error occurred while obtaining the business user list
 * @responseContent {object} 400.application/json The error object
 * @prisma_model business_users
 */
async function getAllBusinessUsersForBusinessByCompanyRole(
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
	} catch (error) {
		console.error('Error retrieving business users by company role:', error);
		res.status(400).json({
			error: 'Error retrieving business users by company role',
			detail: error instanceof Error ? error.message : 'Unknown error',
		});
	}
}

/**
 * POST /business-users
 * @tag BusinessUsers
 * @summary Create a new business user
 * @description Creates a new business user and links it to a business.
 * @operationId createBusinessUser
 * @bodyDescription The data to create a new business user
 * @bodyContent {object} application/json
 * @bodyRequired
 * @response 201 - Business user created successfully. Returns the created business user.
 * @responseContent {object} 201.application/json
 * @response 400 - Error creating business user.
 * @responseContent {object} 400.application/json The error object
 * @prisma_model business_users
 */
async function createBusinessUser(req: ValidatedRequest<CreateBusinessUserRequest>, res: Response): Promise<void> {
	try {
		const userData = req.body.userData;
		const { newUser, businessUser } = await BusinessUsersDao.createBusinessUser(userData, req.body.business_id);

		const userRoles = req.body.userData.user_roles || [
			{ role: req.body.userData.user_role || 'PERSONAL', primary: true },
		];
		await UserDao.linkRolesToUser(newUser?.user_id, userRoles);

		let personal_address = null;
		if (userData.address) {
			personal_address = await AddressDao.addAddress(userData.address);
			await AddressDao.addUserAddress(businessUser.user_id, personal_address.address_id);
		}

		let operating_address = null;
		if (userData.operating_address) {
			operating_address = await AddressDao.addAddress(userData.operating_address);
			await AddressDao.addUserAddress(businessUser.user_id, operating_address.address_id);
		}

		await BusinessUsersDao.updateBusinessUser(businessUser.business_users_id, {
			operating_address_id: operating_address.address_id,
		});

		res.status(201).json(businessUser);
	} catch (error) {
		console.error('Error creating a business user:', error);
		res.status(400).json({
			error: 'Error creating a business user',
			detail: error instanceof Error ? error.message : 'Unknown error',
		});
	}
}

/**
 * DELETE /business-users/{business_users_id}
 * @tag BusinessUsers
 * @summary Remove a business user
 * @description Removes a business user by their ID.
 * @operationId removeBusinessUser
 * @pathParam {string} business_users_id - The ID of the business user to remove
 * @response 200 - Business user removed successfully.
 * @responseContent {object} 200.application/json
 * @response 400 - Error removing business user.
 * @responseContent {object} 400.application/json The error object
 * @prisma_model business_users
 */
async function removeBusinessUser(
	req: ValidatedRequest<never, { business_users_id: string }>,
	res: Response
): Promise<void> {
	try {
		await BusinessUsersDao.removeBusinessUser(req.params.business_users_id);
		res.status(200).json({ message: 'Business user removed successfully.' });
	} catch (error) {
		console.error('Error removing a business user:', error);
		res.status(400).json({
			error: 'Error removing a business user',
			detail: error instanceof Error ? error.message : 'Unknown error',
		});
	}
}

/**
 * POST /business-users/{business_users_id}/address/operating
 * @tag BusinessUsers
 * @summary Adds an operating address to a business user
 * @description This endpoint is used to add an operating address to a business user.
 * @operationId addOperatingAddress
 * @pathParam {string} business_users_id - The ID of the business user
 * @bodyDescription The address to add
 * @bodyContent {object} application/json
 * @bodyRequired
 * @response 200 - Address added successfully. Returns the updated business user's details.
 * @responseContent {object} 200.application/json
 * @response 400 - Error adding address.
 * @responseContent {object} 400.application/json The error object
 * @prisma_model addresses
 * @prisma_model business_users
 */
async function addOperatingAddress(
	req: ValidatedRequest<AddOperatingAddressRequest, { business_users_id: string }>,
	res: Response
): Promise<void> {
	try {
		console.log('addOperatingAddress', req.body);
		const address = await AddressDao.addAddress(req.body);
		console.log('address', address);
		const businessUserAddress = await BusinessUsersDao.addOperatingAddress(
			req.params.business_users_id,
			address.address_id
		);
		console.log('businessUserAddress', businessUserAddress);
		if (businessUserAddress) {
			res.status(200).json(businessUserAddress);
			return;
		}
		res.status(400).json({ error: 'Error adding address' });
	} catch (e) {
		console.log(e);
		res.status(400).json({
			error: 'Error adding address',
			detail: e instanceof Error ? e.message : 'Unknown error',
		});
	}
}

/**
 * PATCH /business-users/company-role
 * @tag BusinessUsers
 * @summary Update the company role of a business user
 * @description Updates the company role of a specific business user.
 * @operationId updateCompanyRole
 * @pathParam {string} business_users_id - The ID of the business user
 * @bodyContent {object} application/json
 * @bodyRequired
 * @response 200 - Company role updated successfully
 * @responseContent {object} 200.application/json
 * @response 400 - Error updating company role
 * @responseContent {object} 400.application/json The error object
 * @prisma_model business_users
 */
async function updateCompanyRole(
	req: ValidatedRequest<UpdateCompanyRoleRequest, { business_users_id: string }>,
	res: Response
): Promise<void> {
	try {
		const { business_users_id } = req.params;
		const { company_role } = req.body;
		const updatedBusinessUser = await BusinessUsersDao.updateCompanyRole(business_users_id, company_role);
		res.status(200).json(updatedBusinessUser);
	} catch (error) {
		console.error('Error updating company role:', error);
		res.status(400).json({
			error: 'Error updating company role',
			detail: error instanceof Error ? error.message : 'Unknown error',
		});
	}
}

/**
 * PATCH /business-users/online
 * @tag BusinessUsers
 * @summary Update the online status of a business user
 * @description Updates the online status of a specific business user.
 * @operationId updateBusinessUserOnlineStatus
 * @pathParam {string} business_users_id - The ID of the business user
 * @bodyContent {object} application/json
 * @bodyRequired
 * @response 200 - Company role updated successfully
 * @responseContent {object} 200.application/json
 * @response 400 - Error updating company role
 * @responseContent {object} 400.application/json The error object
 * @prisma_model business_users
 */
async function updateBusinessUserOnlineStatus(
	req: ValidatedRequest<UpdateBusinessUserOnlineStatusRequest>,
	res: Response
): Promise<void> {
	try {
		const { business_users_id, online } = req.body;
		const updatedBusinessUser = await BusinessUsersDao.updateBusinessUserOnlineStatus(business_users_id, online);
		if (updatedBusinessUser?.business?.stores_module_id || updatedBusinessUser?.business?.food_drinks_module_id) {
			businessIndex(updatedBusinessUser?.business_id);
		}
		res.status(200).json(updatedBusinessUser);
	} catch (error) {
		console.error('Error updating online status:', error);
		res.status(400).json({
			error: 'Error updating business user online status',
			detail: error instanceof Error ? error.message : 'Unknown error',
		});
	}
}

/**
 * GET /business-users/business/group-users/{business_id}
 * @tag GroupUsers
 * @summary Get nested group_users by business ID
 * @description Retrieves a list of user_id:group_users pairs for a specific business.
 * @operationId getGroupUsersByParentId
 * @pathParam {string} business_id - The ID of the business for which to list nested child users
 * @response 200 - Successful operation, returns an array containing all business_user user_ids for given business id and their respective child_users[]
 * @responseContent {object} 200.application/json
 * @response 400 - Error occurred while obtaining the menu list
 * @responseContent {object} 400.application/json The error object
 * @prisma_model business_users
 */
async function getBusinessGroupsByBusinessId(
	req: ValidatedRequest<never, { business_id: string }>,
	res: Response
): Promise<void> {
	try {
		const businessUsers = await BusinessUsersDao.getBusinessUsersByBusinessId(req.params.business_id);
		const nested_groupUsers: Array<Record<string, unknown>> = [];
		for (const business_user in businessUsers) {
			const group_users = await GroupDao.getGroupUsersByParentId(business_user.user_id);
			if (group_users.length > 0) {
				nested_groupUsers.push({
					user_id: business_user.user_id,
					child_users: group_users,
				});
			}
		}
		res.status(200).json(nested_groupUsers);
	} catch (e) {
		console.error('Error obtaining group_users for business', e);
		res.status(400).json({ error: 'Error obtaining group_users for business', e });
	}
}

/**
 * PATCH /business_users/allowance
 * @tag BusinessUsers
 * @summary Updates the allowance of the given child_user_id for the given service_type
 * @description This endpoint is used to update the allowance of the given child_user_id for the given service_type
 * @operationId updateChildUserAllowance
 * @bodyDescription The child's group_user_id and value to set for the child user's allowance for the given service type
 * @bodyContent {object} application/json
 * @bodyRequired
 * @response 200 - User allowance updated successfully. Returns the updated group_user.
 * @responseContent {object} 200.application/json
 * @response 400 - Error updating group user enabled status.
 * @responseContent {object} 400.application/json The error object
 * @prisma_model business_users
 */
async function setAllowance(req: ValidatedRequest<SetAllowanceRequest>, res: Response): Promise<void> {
	const { business_users_id, wallet, purchase_order, type } = req.body;
	try {
		const business_user = await BusinessUsersDao.updateAllowance(business_users_id, wallet, purchase_order, type);
		if (business_user) {
			return res.status(200).json(business_user);
		}
		res.status(400).json({ error: 'Error updating business user allowance' });
	} catch (e) {
		console.log(e);
		res.status(400).json({ error: 'Error updating business user allowance', e });
	}
}

/**
 * POST /business_users/invite
 * @tag BusinessUsers
 * @summary Invite business user
 * @description Sends an invitation to a business user via email or telephone.
 * @operationId inviteBusinessUser
 * @bodyDescription Invitation payload
 * @bodyContent {object} application/json
 * @bodyRequired
 * @response 200 - Invitation sent successfully
 * @responseContent {object} 200.application/json
 * @response 400 - Missing user id or contact information
 * @response 500 - Error inviting business user
 */
async function inviteBusinessUser(req: ValidatedRequest<InviteBusinessUserRequest>, res: Response): Promise<void> {
	try {
		const userId = req.user?.user_id;
		const { email, telephone } = req.body;
		if (!userId) {
			return res.status(400).json({ error: 'User ID is required' });
		}
		if (!email && !telephone) {
			return res.status(400).json({ error: 'Either email or telephone is required to send an invitation' });
		}
		// TODO: Implement the logic to send the invitation via email or SMS
		return res.status(200).json({ message: 'Family invitation sent successfully' });
	} catch (error) {
		return res.status(500).json({
			error: error instanceof Error ? error.message : 'Error inviting family member',
		});
	}
}

/**
 * POST /business_users/accept-invitation
 * @tag BusinessUsers
 * @summary Accept business invitation
 * @description Accepts a business invitation using the provided invitation code.
 * @operationId acceptBusinessInvitation
 * @bodyDescription Invitation acceptance payload
 * @bodyContent {object} application/json
 * @bodyRequired
 * @response 200 - Invitation accepted successfully
 * @responseContent {object} 200.application/json
 * @response 400 - Missing user id or invitation code
 * @response 500 - Error accepting business invitation
 * @prisma_model users
 * @prisma_model business_users
 */
async function acceptBusinessInvitation(
	req: ValidatedRequest<AcceptBusinessInvitationRequest>,
	res: Response
): Promise<void> {
	try {
		const userId = req.user?.user_id;
		const { invitationCode } = req.body;
		if (!userId) {
			return res.status(400).json({ error: 'User ID is required' });
		}
		if (!invitationCode) {
			return res.status(400).json({ error: 'Invitation code is required to accept an invitation' });
		}
		// TODO: Implement the logic to accept the invitation using the invitationCode
		return res.status(200).json({ message: 'Family invitation accepted successfully' });
	} catch (error) {
		return res.status(500).json({
			error: error instanceof Error ? error.message : 'Error accepting family invitation',
		});
	}
}

export {
	updateCompanyRole,
	getAllBusinessUsersForBusinessByCompanyRole,
	getAllBusinessUsers,
	getBusinessUserByUserId,
	getBusinessUsersByBusinessId,
	getBusinessUsersByBusinessType,
	createBusinessUser,
	addOperatingAddress,
	removeBusinessUser,
	updateBusinessUserOnlineStatus,
	getBusinessGroupsByBusinessId,
	setAllowance,
	inviteBusinessUser,
	acceptBusinessInvitation,
};

export default {
	updateCompanyRole,
	getAllBusinessUsersForBusinessByCompanyRole,
	getAllBusinessUsers,
	getBusinessUserByUserId,
	getBusinessUsersByBusinessId,
	getBusinessUsersByBusinessType,
	createBusinessUser,
	addOperatingAddress,
	removeBusinessUser,
	updateBusinessUserOnlineStatus,
	getBusinessGroupsByBusinessId,
	setAllowance,
	inviteBusinessUser,
	acceptBusinessInvitation,
};
