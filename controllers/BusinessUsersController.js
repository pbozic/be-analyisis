import BusinessUsersDao from '../dao/BusinessUsers.js';
import AddressDao from '../dao/Address.js';
import GroupDao from '../dao/Group.js';
import UserDao from '../dao/User.js';
import Constants from '../lib/constants.js';
import elasticsearch from '../elasticsearch/index.js';
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
 */
async function getAllBusinessUsers(req, res) {
	try {
		const businessUsers = await BusinessUsersDao.getAllBusinessUsers();
		res.status(200).json(businessUsers);
	} catch (error) {
		console.error('Error retrieving all business users:', error);
		res.status(400).json({ error: 'Error retrieving all business users', detail: error.message });
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
 */
async function getBusinessUserByUserId(req, res) {
	try {
		const businessUser = await BusinessUsersDao.getBusinessUserByUserId(req.params.user_id);
		res.status(200).json(businessUser);
	} catch (error) {
		console.error('Error retrieving business user:', error);
		res.status(400).json({ error: 'Error retrieving business user', detail: error.message });
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
 */
async function getBusinessUsersByBusinessId(req, res) {
	try {
		const businessUsers = await BusinessUsersDao.getBusinessUsersByBusinessId(req.params.business_id);
		res.status(200).json(businessUsers);
	} catch (error) {
		console.error('Error retrieving business users by business ID:', error);
		res.status(400).json({ error: 'Error retrieving business users by business ID', detail: error.message });
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
 */
async function getBusinessUsersByBusinessType(req, res) {
	try {
		const businessUsers = await BusinessUsersDao.getBusinessUsersByBusinessType(req.params.type);
		res.status(200).json(businessUsers);
	} catch (error) {
		console.error('Error retrieving business users by business type:', error);
		res.status(400).json({ error: 'Error retrieving business users by business type', detail: error.message });
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
 */
async function getAllBusinessUsersForBusinessByCompanyRole(req, res) {
	try {
		const { business_id, company_role } = req.params;
		const businessUsers = await BusinessUsersDao.getAllBusinessUsersForBusinessByCompanyRole(
			business_id,
			company_role
		);
		res.status(200).json(businessUsers);
	} catch (error) {
		console.error('Error retrieving business users by company role:', error);
		res.status(400).json({ error: 'Error retrieving business users by company role', detail: error.message });
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
 */
async function createBusinessUser(req, res) {
	try {
		let userData = req.body.userData;
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
		res.status(400).json({ error: 'Error creating a business user', detail: error.message });
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
 */
async function removeBusinessUser(req, res) {
	try {
		await BusinessUsersDao.removeBusinessUser(req.params.business_users_id);
		res.status(200).json({ message: 'Business user removed successfully.' });
	} catch (error) {
		console.error('Error removing a business user:', error);
		res.status(400).json({ error: 'Error removing a business user', detail: error.message });
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
 */
async function addOperatingAddress(req, res) {
	try {
		console.log('addOperatingAddress', req.body);
		let address = await AddressDao.addAddress(req.body);
		console.log('address', address);
		let businessUserAddress = await BusinessUsersDao.addOperatingAddress(
			req.params.business_users_id,
			address.address_id
		);
		console.log('businessUserAddress', businessUserAddress);
		if (businessUserAddress) {
			return res.status(200).json(businessUserAddress);
		}
		res.status(400).json({ error: 'Error adding address' });
	} catch (e) {
		console.log(e);
		res.status(400).json({ error: 'Error adding address', detail: e.message });
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
 */
async function updateCompanyRole(req, res) {
	try {
		const { business_users_id } = req.params;
		const { company_role } = req.body;
		const updatedBusinessUser = await BusinessUsersDao.updateCompanyRole(business_users_id, company_role);
		res.status(200).json(updatedBusinessUser);
	} catch (error) {
		console.error('Error updating company role:', error);
		res.status(400).json({ error: 'Error updating company role', detail: error.message });
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
 */
async function updateBusinessUserOnlineStatus(req, res) {
	try {
		const { business_users_id, online } = req.body;
		const updatedBusinessUser = await BusinessUsersDao.updateBusinessUserOnlineStatus(business_users_id, online);
		if (
			updatedBusinessUser?.business?.type === Constants.BUSINESS_TYPE.MERCHANT ||
			updatedBusinessUser?.business?.type === Constants.BUSINESS_TYPE.LOCAL ||
			updatedBusinessUser?.business?.type === Constants.BUSINESS_TYPE.RESTAURANT
		) {
			businessIndex(updatedBusinessUser?.business_id);
		}
		res.status(200).json(updatedBusinessUser);
	} catch (error) {
		console.error('Error updating online status:', error);
		res.status(400).json({ error: 'Error updating business user online status', detail: error.message });
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
 */
async function getBusinessGroupsByBusinessId(req, res) {
	try {
		const businessUsers = await BusinessUsersDao.getBusinessUsersByBusinessId(req.params.business_id);
		const nested_groupUsers = [];
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
 */
async function setAllowance(req, res) {
	const { business_users_id, wallet, purchase_order, type } = req.body;
	try {
		let business_user = await BusinessUsersDao.updateAllowance(business_users_id, wallet, purchase_order, type);
		if (business_user) {
			return res.status(200).json(business_user);
		}
		res.status(400).json({ error: 'Error updating business user allowance' });
	} catch (e) {
		console.log(e);
		res.status(400).json({ error: 'Error updating business user allowance', e });
	}
}
export { updateCompanyRole };
export { getAllBusinessUsersForBusinessByCompanyRole };
export { getAllBusinessUsers };
export { getBusinessUserByUserId };
export { getBusinessUsersByBusinessId };
export { getBusinessUsersByBusinessType };
export { createBusinessUser };
export { addOperatingAddress };
export { removeBusinessUser };
export { updateBusinessUserOnlineStatus };
export { getBusinessGroupsByBusinessId };
export { setAllowance };
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
};
