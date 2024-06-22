require("dotenv").config();
const bcrypt = require("bcrypt");

const BusinessDao = require("../dao/Business");
const ReviewDao = require("../dao/Review");
const Constants = require("../lib/constants");
const stripe = require("../lib/stripe");
const UserDao = require("../dao/User");
/**
 * GET /businesses
 * @tag Business
 * @summary Get a list of businesses
 * @description Returns a list of businesses.
 * @operationId getBusinesses
 * @response 200 - successful operation
 * @responseContent {User[]} 200.application/json
 * @response 400 - Error occurred while obtaining the business list
 * @responseContent {object} 400.application/json The error object
 */
async function listBusinesses(req, res) {
	try {
		let businesses = await BusinessDao.getBusinesses();
		if (businesses) {
			res.status(200).json(businesses);
		} else {
			res.status(400).json({
				error: "Error obtaining list of businesses..",
				users: businesses,
			});
		}
	} catch (e) {
		res.status(400).json({ error: "Error obtaining list of businesses..", e });
	}
}

/**
 * GET /businesses/merchants
 * @tag Business
 * @summary List all merchant businesses
 * @description Retrieves a list of all businesses classified as merchants.
 * @operationId listMerchantBusinesses
 * @response 200 - Successful operation, returns a list of merchant businesses
 * @responseContent {Business[]} 200.application/json
 * @response 400 - Error occurred while obtaining the merchant business list
 */
async function listMerchantBusinesses(req, res) {
	try {
		const merchantBusinesses = await BusinessDao.getBusinessesByType(Constants.BUSINESS_TYPE.MERCHANT);
		res.status(200).json(merchantBusinesses);
	} catch (e) {
		console.error("Error listing merchant businesses:", e);
		res.status(400).json({ error: "Error listing merchant businesses", e});
	}
}

/**
 * GET /businesses/taxis
 * @tag Business
 * @summary List all taxi businesses
 * @description Retrieves a list of all businesses classified as taxis (TRANSFER).
 * @operationId listTaxiBusinesses
 * @response 200 - Successful operation, returns a list of taxi businesses
 * @responseContent {Business[]} 200.application/json
 * @response 400 - Error occurred while obtaining the taxi business list
 */
async function listTransferBusinesses(req, res) {
	try {
		const taxiBusinesses = await BusinessDao.getBusinessesByType(Constants.BUSINESS_TYPE.TRANSFER);
		res.status(200).json(taxiBusinesses);
	} catch (e) {
		console.error("Error listing taxi businesses:", e);
		res.status(400).json({ error: "Error listing taxi businesses", e });
	}
}

/**
 * GET /business/:business_id
 * @tag Business
 * @summary Get a business by ID
 * @description Retrieves detailed information about a specific business by its ID.
 * @operationId getBusinessById
 * @pathParam {string} business_id - The ID of the business to retrieve
 * @response 200 - Successful operation, returns detailed business information
 * @responseContent {Business} 200.application/json
 * @response 404 - Business not found
 * @response 400 - Error retrieving business information
 */
async function getBusinessById(req, res) {
	try {
		const business = await BusinessDao.getBusinessById(req.params.business_id);
		if (business) {
			res.status(200).json(business);
		} else {
			res.status(404).json({ error: "Business not found" });
		}
	} catch (e) {
		console.error("Error retrieving business:", e);
		res.status(400).json({ error: "Error retrieving business information", e });
	}
}

/**
 * GET /business/parent/:business_id
 * @tag Business
 * @summary Get parent business
 * @description Retrieves the parent business of a specific business by its ID.
 * @operationId getParentBusiness
 * @pathParam {string} business_id - The ID of the child business
 * @response 200 - Successful operation, returns parent business information
 * @responseContent {Business} 200.application/json
 * @response 404 - Parent business not found
 * @response 400 - Error retrieving parent business information
 */
async function getParentBusiness(req, res) {
	try {
		const parentBusiness = await BusinessDao.getParentBusiness(req.params.business_id);
		if (parentBusiness) {
			res.status(200).json(parentBusiness);
		} else {
			res.status(404).json({ error: "Parent business not found" });
		}
	} catch (e) {
		console.error("Error retrieving parent business:", e);
		res.status(400).json({ error: "Error retrieving parent business information", e });
	}
}

/**
 * GET /business/children/:parent_business_id
 * @tag Business
 * @summary List child businesses
 * @description Retrieves a list of child businesses for a specific parent business ID.
 * @operationId getChildBusinesses
 * @pathParam {string} parent_business_id - The ID of the parent business
 * @response 200 - Successful operation, returns a list of child businesses
 * @responseContent {Business[]} 200.application/json
 * @response 400 - Error retrieving child businesses information
 */
async function getChildBusinesses(req, res) {
	try {
		const childBusinesses = await BusinessDao.getChildBusinesses(req.params.parent_business_id);
		res.status(200).json(childBusinesses);
	} catch (e) {
		console.error("Error retrieving child businesses:", e);
		res.status(400).json({ error: "Error retrieving child businesses information", e });
	}
}

/**
 * POST /business
 * @tag Business
 * @summary Create a new business
 * @description Creates a new business with the provided details.
 * @operationId createNewBusiness
 * @bodyDescription The business details to create
 * @bodyContent {BusinessCreateRequest} application/json
 * @bodyRequired
 * @response 201 - Business created successfully
 * @responseContent {Business} 201.application/json
 * @response 400 - Error creating new business
 */
async function createNewBusiness(req, res) {
	try {
		const newBusiness = await BusinessDao.createNewBusiness({
			...req.body,
			reviewable: {
				create: {
					
				},
			}
		});
		res.status(201).json(newBusiness);
	} catch (e) {
		console.error("Error creating new business:", e);
		res.status(400).json({ error: "Error creating new business", e });
	}
}

/**
 * PATCH /business/
 * @tag Business
 * @summary Updates the business details
 * @description This endpoint is used to update the business details.
 * @operationId updateBusiness
 		* @pathParam {string} businessId - The ID of the business to update
 * @bodyDescription The data to update for the business.
 * @bodyContent {UpdateBusinessRequest} application/json
 * @bodyRequired
 * @response 200 - Business updated successfully. Returns the updated business details.
 * @responseContent {Business} 200.application/json
 * @response 400 - Error updating business information.
 */
async function update(req, res) {
	console.log("update business", req.body);

	try {
		let business = await BusinessDao.updateBusiness(req.business.business_id, req.body);
		if (business) {
			if (req.socket)
				req.socket.emit("updateBusiness", business);
			return res.status(200).json(business);
		}
		res.status(400).json({ error: "Error updating business information" });
	} catch (e) {
		console.error("Error updating business information:", e);
		res.status(400).json({ error: "Error updating business information", e });
	}
}

/**
 * PATCH /business/type
 * @tag Business
 * @summary Updates a business's type
 * @description This endpoint is used to update a business's type.
 * @operationId updateBusinessType
 * @bodyDescription The new type for the business
 * @bodyContent {UpdateBusinessTypeRequest} application/json
 * @bodyRequired
 * @response 200 - Type updated successfully. Returns the updated business details.
 * @responseContent {Business} 200.application/json
 * @response 400 - Error updating business information.
 */
async function updateBusinessType(req, res) {
	try {
		let business = await BusinessDao.updateBusinessType(req.params.business_id, req.body.type);
		if (business) return res.status(200).json(business);
		res.status(400).json({ error: "Error updating business type" });
	} catch (e) {
		console.error("Error updating business type:", e);
		res.status(400).json({ error: "Error updating business type", e });
	}
}

/**
 * PATCH /business/business-unit
 * @tag Businesses
 * @summary Updates the business unit status
 * @description This endpoint is used to update whether a business is considered a business unit.
 * @operationId updateIsBusinessUnit
 * @bodyDescription The new business unit status
 * @bodyContent {UpdateIsBusinessUnitRequest} application/json
 * @bodyRequired
 * @response 200 - Business unit status updated successfully. Returns the updated business details.
 * @responseContent {Business} 200.application/json
 * @response 400 - Error updating business information.
 */
async function updateIsBusinessUnit(req, res) {
	try {
		let business = await BusinessDao.updateIsBusinessUnit(req.params.business_id, req.body.is_business_unit);
		if (business) return res.status(200).json(business);
		res.status(400).json({ error: "Error updating business unit status" });
	} catch (e) {
		console.error("Error updating business unit status:", e);
		res.status(400).json({ error: "Error updating business unit status", e });
	}
}

/**
 * PATCH /business/business-group-name
 * @tag Businesses
 * @summary Updates a business's group name
 * @description This endpoint is used to update a business's group name.
 * @operationId updateBusinessGroupName
 * @bodyDescription The new group name for the business
 * @bodyContent {UpdateBusinessGroupNameRequest} application/json
 * @bodyRequired
 * @response 200 - Group name updated successfully. Returns the updated business details.
 * @responseContent {Business} 200.application/json
 * @response 400 - Error updating business information.
 */
async function updateBusinessGroupName(req, res) {
	try {
		let business = await BusinessDao.updateBusinessGroupName(req.params.business_id, req.body.business_group_name);
		if (business) return res.status(200).json(business);
		res.status(400).json({ error: "Error updating business group name" });
	} catch (e) {
		console.error("Error updating business group name:", e);
		res.status(400).json({ error: "Error updating business group name", e });
	}
}

/**
 * PATCH /business/email/
 * @tag Business
 * @summary Updates a business's email
 * @description This endpoint is used to update a business's email address.
 * @operationId updateBusinessEmail
 * @pathParam {string} business_id - The ID of the business to update
 * @bodyDescription The new email for the business
 * @bodyContent {UpdateBusinessEmailRequest} application/json
 * @bodyRequired
 * @response 200 - Email updated successfully. Returns the updated business details.
 * @responseContent {Business} 200.application/json
 * @response 400 - Error updating business information.
 */
async function updateBusinessEmail(req, res) {
	try {
		let business = await BusinessDao.updateBusinessEmail(req.params.business_id, req.body.email);
		if (business) return res.status(200).json(business);
		res.status(400).json({ error: "Error updating business email" });
	} catch (e) {
		console.error("Error updating business email:", e);
		res.status(400).json({ error: "Error updating business email", e });
	}
}

/**
 * PATCH /business/telephone/
 * @tag Business
 * @summary Updates a business's telephone
 * @description This endpoint is used to update a business's telephone number.
 * @operationId updateBusinessTelephone
 * @pathParam {string} business_id - The ID of the business to update
 * @bodyDescription The new telephone details for the business
 * @bodyContent {UpdateBusinessTelephoneRequest} application/json
 * @bodyRequired
 * @response 200 - Telephone updated successfully. Returns the updated business details.
 * @responseContent {Business} 200.application/json
 * @response 400 - Error updating business information.
 */
async function updateBusinessTelephone(req, res) {
	try {
		let business = await BusinessDao.updateBusinessTelephone(req.params.business_id, req.body.telephone, req.body.telephone_code, req.body.telephone_number);
		if (business) return res.status(200).json(business);
		res.status(400).json({ error: "Error updating business telephone" });
	} catch (e) {
		console.error("Error updating business telephone:", e);
		res.status(400).json({ error: "Error updating business telephone", e });
	}
}

/**
 * PATCH /business/workingHours
 * @tag Business
 * @summary Updates a business's working hours
 * @description This endpoint is used to update a business's working hours.
 * @operationId updateBusinessWorkingHours
 * @pathParam {string} business_id - The ID of the business to update
 * @bodyDescription The new working hours for the business
 * @bodyContent {UpdateBusinessWorkingHoursRequest} application/json
 * @bodyRequired
 * @response 200 - Working hours updated successfully. Returns the updated business details.
 * @responseContent {Business} 200.application/json
 * @response 400 - Error updating business information.
 */
async function updateBusinessWorkingHours(req, res) {
	try {
		let business = await BusinessDao.updateBusinessWorkingHours(req.params.business_id, req.body.working_hours);
		if (business) return res.status(200).json(business);
		res.status(400).json({ error: "Error updating business working hours" });
	} catch (e) {
		console.error("Error updating business working hours:", e);
		res.status(400).json({ error: "Error updating business working hours", e});
	}
}

/**
 * PATCH /business/new
 * @tag Business
 * @summary Updates the new status of a business
 * @description This endpoint is used to update whether a business is considered new.
 * @operationId updateBusinessIsNew
 * @pathParam {string} business_id - The ID of the business to update
 * @bodyDescription The new status for the business
 * @bodyContent {UpdateBusinessIsNewRequest} application/json
 * @bodyRequired
 * @response 200 - New status updated successfully. Returns the updated business details.
 * @responseContent {Business} 200.application/json
 * @response 400 - Error updating business information.
 */
async function updateBusinessIsNew(req, res) {
	try {
		let business = await BusinessDao.updateBusinessIsNew(req.params.business_id, req.body.new);
		if (business) return res.status(200).json(business);
		res.status(400).json({ error: "Error updating business new status" });
	} catch (e) {
		console.error("Error updating business new status:", e);
		res.status(400).json({ error: "Error updating business new status", e });
	}
}

/**
 * PATCH /business/popular
 * @tag Business
 * @summary Updates the popularity status of a business
 * @description This endpoint is used to update whether a business is considered popular.
 * @operationId updateBusinessIsPopular
 * @pathParam {string} business_id - The ID of the business to update
 * @bodyDescription The popularity status for the business
 * @bodyContent {UpdateBusinessIsPopularRequest} application/json
 * @bodyRequired
 * @response 200 - Popularity status updated successfully. Returns the updated business details.
 * @responseContent {Business} 200.application/json
 * @response 400 - Error updating business information.
 */
async function updateBusinessIsPopular(req, res) {
	try {
		let business = await BusinessDao.updateBusinessIsPopular(req.params.business_id, req.body.popular);
		if (business) return res.status(200).json(business);
		res.status(400).json({ error: "Error updating business popularity" });
	} catch (e) {
		console.error("Error updating business popularity:", e);
		res.status(400).json({ error: "Error updating business popularity", e });
	}
}

/**
 * GET /business/business_group_name
 * @tag Business
 * @summary Search for businesses by business group name
 * @description Retrieves businesses whose business group names contain the given search term, case-insensitively.
 * @operationId getBusinessesByGroupName
 * @queryParam {string} search - The search term to look for in business group names
 * @response 200 - Successful operation, returns a list of matching businesses
 * @responseContent {Business[]} 200.application/json
 * @response 400 - Error occurred while searching for businesses by group name
 */
async function getBusinessesByGroupName(req, res) {
	const { search } = req.params;
	if (!search) {
		return res.status(400).json({ error: "Search term is required" });
	}
	try {
		const businesses = await BusinessDao.getBusinessesByGroupName(search);
		res.status(200).json(businesses);
	} catch (e) {
		console.error("Error searching businesses by group name:", e);
		res.status(400).json({ error: "Error occurred while searching for businesses by group name", e });
	}
}

/**
 * GET /businesses/search
 * @tag Business
 * @summary Search for businesses by name
 * @description Retrieves businesses whose names contain the given search term, case-insensitively.
 * @operationId getBusinessesByNameSearch
 * @queryParam {string} search - The search term to look for in business names
 * @response 200 - Successful operation, returns a list of matching businesses
 * @responseContent {Business[]} 200.application/json
 * @response 400 - Error occurred while searching for businesses by name
 */
async function getBusinessesByNameSearch(req, res) {
	const { search } = req.query;
	if (!search) {
		return res.status(400).json({ error: "Search term is required" });
	}
	try {
		const businesses = await BusinessDao.getBusinessesByNameSearch(search);
		res.status(200).json(businesses);
	} catch (e) {
		console.error("Error searching businesses by name:", e);
		res.status(400).json({ error: "Error occurred while searching for businesses by name", e });
	}
}


/**
 * POST /business/address/add
 * @tag Business
 * @summary Add an address to a business
 * @description Adds an address to a specific business.
 * @operationId addBusinessAddress
 * @pathParam {string} business_id - The ID of the business
 * @bodyContent {Address} application/json
 * @bodyRequired
 * @response 200 - Address added successfully
 * @response 400 - Error adding address
 */
async function addBusinessAddress(req, res) {
	try {
		const { business_id } = req.params;
		const addressData = req.body;
		const updatedBusiness = await BusinessDao.addBusinessAddress(business_id, addressData);
		res.status(200).json(updatedBusiness);
	} catch (error) {
		console.error("Error adding business address:", error);
		res.status(400).json({ error: "Error adding business address", detail: error.message });
	}
}

/**
 * POST /business/delivery-address/add
 * @tag Business
 * @summary Add a delivery address to a business
 * @description Adds a delivery address to a specific business.
 * @operationId addDeliveryAddress
 * @pathParam {string} business_id - The ID of the business
 * @bodyContent {Address} application/json
 * @bodyRequired
 * @response 200 - Delivery address added successfully
 * @response 400 - Error adding delivery address
 */
async function addDeliveryAddress(req, res) {
	try {
		const { business_id } = req.params;
		const addressData = req.body;
		const updatedBusiness = await BusinessDao.addDeliveryAddress(business_id, addressData);
		res.status(200).json(updatedBusiness);
	} catch (error) {
		console.error("Error adding delivery address:", error);
		res.status(400).json({ error: "Error adding delivery address", detail: error.message });
	}
}

/**
 * PATCH /business/parent/update
 * @tag Business
 * @summary Update parent business
 * @description Updates the parent business of a specific business by its ID.
 * @operationId updateParentBusiness
 * @pathParam {string} business_id - The ID of the business to update
 * @bodyDescription The ID of the new parent business
 * @bodyContent {UpdateParentBusinessRequest} application/json
 * @bodyRequired
 * @response 200 - Parent business updated successfully
 * @responseContent {Business} 200.application/json
 * @response 400 - Error updating parent business
 */
async function updateParentBusinessId(req, res) {
	try {
		const updatedBusiness = await BusinessDao.updateParentBusiness(req.params.business_id, req.body.parent_business_id);
		res.status(200).json(updatedBusiness);
	} catch (e) {
		console.error("Error updating parent business:", e);
		res.status(400).json({ error: "Error updating parent business", e });
	}
}

/**
 * PATCH /business/address/:business_id
 * @tag Business
 * @summary Updates a business's address
 * @description This endpoint is used to update a business's primary address.
 * @operationId updateBusinessAddress
 * @pathParam {string} business_id - The ID of the business to update
 * @bodyDescription The new address details for the business
 * @bodyContent {UpdateBusinessAddressRequest} application/json
 * @bodyRequired
 * @response 200 - Address updated successfully. Returns the updated business details.
 * @responseContent {Business} 200.application/json
 * @response 400 - Error updating business address.
 */
async function updateBusinessAddress(req, res) {
	try {
		const business = await BusinessDao.updateBusinessAddress(req.params.business_id, req.body);
		res.status(200).json(business);
	} catch (e) {
		console.error("Error updating business address:", e);
		res.status(400).json({ error: "Error updating business address", e });
	}
}

/**
 * PATCH /business/delivery-address/:business_id
 * @tag Business
 * @summary Updates a business's delivery address
 * @description This endpoint is used to update a business's delivery address.
 * @operationId updateBusinessDeliveryAddress
 * @pathParam {string} business_id - The ID of the business to update
 * @bodyDescription The new delivery address details for the business
 * @bodyContent {UpdateBusinessDeliveryAddressRequest} application/json
 * @bodyRequired
 * @response 200 - Delivery address updated successfully. Returns the updated business details.
 * @responseContent {Business} 200.application/json
 * @response 400 - Error updating business delivery address.
 */
async function updateBusinessDeliveryAddress(req, res) {
	try {
		const business = await BusinessDao.updateBusinessDeliveryAddress(req.params.business_id, req.body);
		res.status(200).json(business);
	} catch (e) {
		console.error("Error updating business delivery address:", e);
		res.status(400).json({ error: "Error updating business delivery address", e });
	}
}

/**
 * DELETE /business/:business_id
 * @tag Business
 * @summary Delete a business
 * @description Deletes a business by its ID.
 * @operationId deleteBusiness
 * @pathParam {string} business_id - The ID of the business to delete
 * @response 200 - Business deleted successfully
 * @response 400 - Error deleting business
 */
async function deleteBusiness(req, res) {
	try {
		await BusinessDao.deleteBusiness(req.params.business_id);
		res.status(200).json({ message: "Business deleted successfully" });
	} catch (e) {
		console.error("Error deleting business:", e);
		res.status(400).json({ error: "Error deleting business", e });
	}
}

/**
 * PATCH /business/parent/remove
 * @tag Business
 * @summary Remove a child business from its parent
 * @description Clears the parent business association for a given child business.
 * @operationId removeChildBusiness
 * @pathParam {string} business_id - The ID of the "child" business to remove from its parent
 * @response 200 - Child business removed from parent successfully
 * @responseContent {Business} 200.application/json
 * @response 400 - Error removing parent business from business
 */
async function removeParentBusinessId(req, res) {
	try {
		const updatedBusiness = await BusinessDao.removeParentBusiness(req.param.business_id);
		res.status(200).json(updatedBusiness);
	} catch (e) {
		console.error("Error removing child business:", e);
		res.status(400).json({ error: "Error removing child business from parent", e });
	}
}

/**
 * POST /business/review
 * @tag Business
 * @summary Review a business
 * @description This endpoint is used add a review of business.
 * @operationId reviewBusiness
 * @bodyDescription Conent of the review
 * @bodyContent {ReviewRequest} application/json
 * @bodyRequired
 * @response 200 - Primary address set successfully.
 * @response 400 - Error setting primary address.
 */
async function reviewBusiness(req, res) {
	try {
		let business = await UserDao.getUserById(req.body.business_id);
		let review = await ReviewDao.createReview({
			comment: req.body.comment,
			rating: req.body.rating,
			author: {
				connect: {
					user_id: req.user.user_id,
				},
			},
			reviewable: {
				connect: {
					reviewable_id: business.reviewable_id,
				},
			}
		});
		if (review) {
			return res.status(200).json(review);
		}
		res.status(400).json({ error: "Error adding review" });
	} catch (e) {
		console.log(e);
		res.status(400).json({ error: "Error adding review", e });
	}
}

async function confirmBusinessReview(req, res) {
	try {
	} catch (e) {
		console.log(e);
		res.status(400).json({ error: "Error confirming review", e });
	}
}
/**
 * POST /business/paymentIntent
 * @tag Business
 * @summary Create a payment intent
 * @description This endpoint is used to create a payment intent.
 * @operationId createPaymentIntent
 * @bodyDescription The amount, currency, and user_id of the payment.
 * @bodyContent {CreatePaymentIntentRequest} application/json
 * @bodyRequired
 * @response 200 - Payment Intent created successfully.
 * @response 400 - Error creating payment intent.
 */
async function createPaymentIntent(req, res) {
	try {
		const { amount, payment_method, user_id } = req.body;
		const user = await UserDao.getUserById(user_id);
		let paymentIntent = await stripe.createPaymentIntent(amount, payment_method, user.stripe_customer_id);
		res.status(200).json(paymentIntent);
	} catch (e) {
		console.log(e);
		res.status(400).json({ error: "Error creating payment intent", e });
	}
}
module.exports = {
	listBusinesses,
	listTransferBusinesses,
	listMerchantBusinesses,
	addBusinessAddress,
	addDeliveryAddress,
	update,
	createNewBusiness,
	getBusinessById,
	getParentBusiness,
	getChildBusinesses,
	getBusinessesByGroupName,
	getBusinessesByNameSearch,
	updateBusinessAddress,
	updateBusinessDeliveryAddress,
	updateBusinessType,
	updateIsBusinessUnit,
	updateBusinessGroupName,
	updateBusinessEmail,
	updateBusinessTelephone,
	updateBusinessWorkingHours,
	updateBusinessIsNew,
	updateBusinessIsPopular,
	updateParentBusinessId,
	removeParentBusinessId,
	deleteBusiness,
	reviewBusiness,
	createPaymentIntent
};

