const BusinessUsersDao = require("../dao/BusinessUsers");
const AddressDao = require("../dao/Address");

/**
 * GET /business-users
 * @tag BusinessUsers
 * @summary Get a list of all business users
 * @description Returns a list of all business users.
 * @operationId getAllBusinessUsers
 * @response 200 - successful operation
 * @responseContent {BusinessUser[]} 200.application/json
 * @response 400 - Error occurred while obtaining the business user list
 * @responseContent {object} 400.application/json The error object
 */
async function getAllBusinessUsers(req, res) {
    try {
        const businessUsers = await BusinessUsersDao.getAllBusinessUsers();
        res.status(200).json(businessUsers);
    } catch (error) {
        console.error("Error retrieving all business users:", error);
        res.status(400).json({ error: "Error retrieving all business users", detail: error.message });
    }
}

/**
 * GET /business-users/{user_id}
 * @tag BusinessUsers
 * @summary Get a business user based on user ID
 * @description Returns a business user.
 * @operationId getBusinessUsersByUserId
 * @response 200 - successful operation
 * @responseContent {BusinessUser[]} 200.application/json
 * @response 400 - Error occurred while obtaining the business user
 * @responseContent {object} 400.application/json The error object
 */
async function getBusinessUserByUserId(req, res) {
    try {
        const businessUser = await BusinessUsersDao.getBusinessUserByUserId(req.params.user_id);
        res.status(200).json(businessUser);
    } catch (error) {
        console.error("Error retrieving business user:", error);
        res.status(400).json({ error: "Error retrieving business user", detail: error.message });
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
 * @responseContent {BusinessUser[]} 200.application/json
 * @response 400 - Error occurred while obtaining the business user list
 * @responseContent {object} 400.application/json The error object
 */
async function getBusinessUsersByBusinessId(req, res) {
    try {
        const businessUsers = await BusinessUsersDao.getBusinessUsersByBusinessId(req.params.business_id);
        res.status(200).json(businessUsers);
    } catch (error) {
        console.error("Error retrieving business users by business ID:", error);
        res.status(400).json({ error: "Error retrieving business users by business ID", detail: error.message });
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
 * @responseContent {BusinessUser[]} 200.application/json
 * @response 400 - Error occurred while obtaining the business user list
 * @responseContent {object} 400.application/json The error object
 */
async function getBusinessUsersByBusinessType(req, res) {
    try {
        const businessUsers = await BusinessUsersDao.getBusinessUsersByBusinessType(req.params.type);
        res.status(200).json(businessUsers);
    } catch (error) {
        console.error("Error retrieving business users by business type:", error);
        res.status(400).json({ error: "Error retrieving business users by business type", detail: error.message });
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
 * @responseContent {BusinessUser[]} 200.application/json
 * @response 400 - Error occurred while obtaining the business user list
 * @responseContent {object} 400.application/json The error object
 */
async function getAllBusinessUsersForBusinessByCompanyRole(req, res) {
    try {
        const { business_id, company_role } = req.params;
        const businessUsers = await BusinessUsersDao.getAllBusinessUsersForBusinessByCompanyRole(business_id, company_role);
        res.status(200).json(businessUsers);
    } catch (error) {
        console.error("Error retrieving business users by company role:", error);
        res.status(400).json({ error: "Error retrieving business users by company role", detail: error.message });
    }
}

/**
 * POST /business-users
 * @tag BusinessUsers
 * @summary Create a new business user
 * @description Creates a new business user and links it to a business.
 * @operationId createBusinessUser
 * @bodyDescription The data to create a new business user
 * @bodyContent {CreateBusinessUserRequest} application/json
 * @bodyRequired
 * @response 201 - Business user created successfully. Returns the created business user.
 * @responseContent {BusinessUser} 201.application/json
 * @response 400 - Error creating business user.
 */
async function createBusinessUser(req, res) {
    try {
        const businessUser = await BusinessUsersDao.createBusinessUser(req.body.userData, req.body.business_id);
        res.status(201).json(businessUser);
    } catch (error) {
        console.error("Error creating a business user:", error);
        res.status(400).json({ error: "Error creating a business user", detail: error.message });
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
 * @response 400 - Error removing business user.
 */
async function removeBusinessUser(req, res) {
    try {
        await BusinessUsersDao.removeBusinessUser(req.params.business_users_id);
        res.status(200).json({ message: "Business user removed successfully." });
    } catch (error) {
        console.error("Error removing a business user:", error);
        res.status(400).json({ error: "Error removing a business user", detail: error.message });
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
 * @bodyContent {Address} application/json
 * @bodyRequired
 * @response 200 - Address added successfully. Returns the updated business user's details.
 * @responseContent {BusinessUserAddress} 200.application/json
 * @response 400 - Error adding address.
 */
async function addOperatingAddress(req, res) {
    try {
        console.log("addOperatingAddress", req.body);
        let address = await AddressDao.addAddress(req.body);
        console.log("address", address);
        let businessUserAddress = await BusinessUsersDao.addOperatingAddress(req.params.business_users_id, address.address_id);
        console.log("businessUserAddress", businessUserAddress);
        if (businessUserAddress) {
            return res.status(200).json(businessUserAddress);
        }
        res.status(400).json({ error: "Error adding address" });
    } catch (e) {
        console.log(e);
        res.status(400).json({ error: "Error adding address", detail: e.message });
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
 * @response 400 - Error updating company role
 */
async function updateCompanyRole(req, res) {
    try {
        const { business_users_id } = req.params;
        const { company_role } = req.body;
        const updatedBusinessUser = await BusinessUsersDao.updateCompanyRole(business_users_id, company_role);
        res.status(200).json(updatedBusinessUser);
    } catch (error) {
        console.error("Error updating company role:", error);
        res.status(400).json({ error: "Error updating company role", detail: error.message });
    }
}

module.exports = {
    updateCompanyRole,
    getAllBusinessUsersForBusinessByCompanyRole,
    getAllBusinessUsers,
    getBusinessUserByUserId,
    getBusinessUsersByBusinessId,
    getBusinessUsersByBusinessType,
    createBusinessUser,
    addOperatingAddress,
    removeBusinessUser,
};

