const prisma = require("../prisma/prisma");
const AddressDao = require('./Address');
const DocumentDao = require('./Document');
const Constants = require("../lib/constants");
const { reorderMenusAndCategories } = require("../lib/businessHelpers");
const { ACCOUNT_ACTIONS_REASON, ACCOUNT_ACTIONS } = require("../lib/constants"); // Assuming Address.js exports are imported as AddressDao

const getBusinesses = async (args) => {
	try {
		return await prisma.business.findMany({
			...args,
			include: {
				address: true,
				finances: true,
				business_users: {
					include: {
						users: {
							include:{
								child_users:  { include:{child_user: true}},
								parent_user:  { include:{parent_user: true}},
							}
						},
					},
				},
				parent_business: true,
				child_businesses: true,
				documents: false,
				taxi_orders: false,
				delivery_orders: false,
			},
		});
	} catch (error) {
		console.error("Error retrieving businesses:", error);
		throw new Error(error);
	}
};

const getBusinessById = async (business_id) => {
	try {
		return await prisma.business.findUnique({
			where: {
				business_id: business_id,
			},
			include: {
				address: true,
				delivery_address: true,
				finances: true,
				business_users: {
					include: {
						users: true,
					},
				},
				business_clients: true,
				parent_business: true,
				child_businesses: true,
				documents: false,
				taxi_orders: false,
				delivery_orders: false,
			},
		});
	} catch (error) {
		console.error("Error retrieving business:", error);
		throw new Error(error);
	}
};

const getBusinessAdminDataById = async (business_id) => {
	try {
		return await prisma.business.findUnique({
			where: {
				business_id: business_id,
			},
			include: {
				address: true,
				delivery_address: true,
				finances: true,
				business_users: {
					include: {
						users: {
							include:{
								child_users: { include:{child_user: true}},
								parent_user: { include:{parent_user: true}},
							}
						},
					},
				},
				parent_business: true,
				child_businesses: true,
				documents: false,
				taxi_orders: false,
				delivery_orders: false,

				word_buy_stripe_product:{
					include: {
						prices:true
					}
				},
				word_buys: {
					include:{
						word:{
							include:{
								category:true,
								bundles:true
							}
						}
					}
				},
				promo_sections:{
					include: {
						promo_section:true
					}
				},
			},
		});
	} catch (error) {
		console.error("Error retrieving business:", error);
		throw new Error(error);
	}
};

const getBusinessesForSearchById = async (business_id) => {
	try {
		if (!Array.isArray(business_id)) {
			business_id = [business_id];
		}
		
		let business = await prisma.business.findMany({
			where: {
				business_id: {
					in: business_id
				}
			},
			select: {
				// ✅ Select specific fields from the root
				business_id: true,
				name: true,
				description: true,
				telephone: true,
				working_hours: true,
				seats: true,
				minimum_order: true,
				offers_daily_meals: true,
				offers_daily_meals_on_weekend: true,
				popular: true,
				new: true,
				restaurant_overwhelmed: true,
				address: true, // Full object
				delivery_address: true, // Full object
				documents: {
					include: {
						files: true // Full nested objects
					},
					where: {
						document_type: {
							in: ['BANNER', 'LOGO']
						}
					}
				},
				// menus: {
				// 	where: {
				// 		active: true,
				// 		isDailyMeal: false
				// 	},
				// 	include: {
				// 		categories: {
				// 			include: {
				// 				menu_items: {
				// 					include: {
				// 						documents: {
				// 							include: {
				// 								files: true
				// 							}
				// 						}
				// 					}
				// 				}
				// 			}
				// 		}
				// 	}
				// }
			}
		});
		return business
	} catch (error) {
		console.error("Error retrieving business for search:", error);
		throw new Error(error);
	}
}
const getBusinessForSearchById = async (business_id) => {
	try {
		
		let business = await prisma.business.findUnique({
			where: {
				business_id: business_id
			},
			select: {
				// ✅ Select specific fields from the root
				business_id: true,
				name: true,
				description: true,
				telephone: true,
				working_hours: true,
				seats: true,
				minimum_order: true,
				offers_daily_meals: true,
				offers_daily_meals_on_weekend: true,
				popular: true,
				new: true,
				restaurant_overwhelmed: true,
				address: true, // Full object
				delivery_address: true, // Full object
				documents: {
					include: {
						files: true // Full nested objects
					},
					where: {
						document_type: {
							in: ['BANNER', 'LOGO']
						}
					}
				},
				menus: {
					where: {
						active: true
					},
					include: {
						categories: {
							orderBy:{
								menu_order_index:'asc'
							},
							include: {
								menu_categories_categories: {
									include: {
										category: true
									}
								},
								menu_items: {
									orderBy:{
										menu_category_order_index:'asc'
									},
									include: {
										documents: {
											include: {
												files: true
											}
										}
									}
								}
							}
						}
					}
				}
			}
		});
		// for (let menu of business.menus) {
		// 	let order = menu.menu_categories_ordered;
		// 	if (order) {
		// 		order = order.split(",").map(String);
		// 		menu.categories = order.map((id) => menu.categories.find((cat) => cat.category_id === id));
		// 	}
		// }
		return business
	} catch (error) {
		console.error("Error retrieving business for search:", error);
		throw new Error(error);
	}
}
const getBusinessByEmail = async (email) => {
	try {
		return await prisma.business.findUnique({
			where: {
				email: email,
			},
			include: {
				address: true,
				finances: true,
				business_users: {
					include: {
						users: {
							include:{
								child_users: { include:{child_user: true}},
								parent_user: { include:{parent_user: true}},
							}
						},
					},
				},
				parent_business: true,
				child_businesses: true,
				documents: false,
				taxi_orders: false,
				delivery_orders: false,
			},
		});
	} catch (error) {
		console.error("Error retrieving business by email:", error);
		throw new Error(error);
	}
};

const getBusinessByTelephone = async (telephone_number) => {
	try {
		return await prisma.business.findFirst({
			where: {
				telephone_number: telephone_number,
			},
			include: {
				address: true,
				finances: true,
				business_users: {
					include: {
						users: {
							include:{
								child_users: { include:{child_user: true}},
								parent_user: { include:{parent_user: true}},
							}
						},
					},
				},
				parent_business: true,
				child_businesses: true,
				documents: false,
				taxi_orders: false,
				delivery_orders: false,
			},
		});
	} catch (error) {
		console.error("Error retrieving business by telephone:", error);
		throw new Error(error);
	}
};

const getBusinessesByNameSearch = async (search) => {
	try {
		return await prisma.business.findMany({
			where: {
				name: {
					contains: search,
					mode: 'insensitive', // This makes the search case-insensitive
				},
			},
			include: {
				address: true,
				finances: true,
				business_users: {
					include: {
						users: {
							include:{
								child_users: { include:{child_user: true}},
								parent_user: { include:{parent_user: true}},
							}
						},
					},
				},
				parent_business: true,
				child_businesses: true,
				documents: false,
				taxi_orders: false,
				delivery_orders: false,
			},
		});
	} catch (error) {
		console.error("Error retrieving businesses by name:", error);
		throw new Error(error);
	}
};

const getBusinessesByGroupName = async (search) => {
	try {
		return await prisma.business.findMany({
			where: {
				business_group_name: {
					contains: search,
					mode: 'insensitive', // This makes the search case-insensitive
				},
			},
			include: {
				address: true,
				finances: true,
				business_users: {
					include: {
						users: {
							include:{
								child_users: { include:{child_user: true}},
								parent_user: { include:{parent_user: true}},
							}
						},
					},
				},
				parent_business: true,
				child_businesses: true,
				documents: false,
				taxi_orders: false,
				delivery_orders: false,
			},
		});
	} catch (error) {
		console.error("Error retrieving businesses by group name:", error);
		throw new Error(error);
	}
};

const getBusinessesByTypeMainInformation = async (type) => {
	try {
		return await prisma.business.findMany({
			where: {
				type: type,
			},
		});
	} catch (error) {
		console.error(`Error retrieving businesses by type ${type}:`, error);
		throw new Error(error);
	}
}

const getBusinessesByType = async (type, args = {}) => {
    try {
        const includeOptions = {
            address: true,
			delivery_address: true,
			finances: true,
            business_users: {
                include: {
                    users: {
						include: {
							child_users: { include:{child_user: true}},
							parent_user: { include:{parent_user: true}},
						}
					},
                },
            },
            parent_business: true,
            child_businesses: true,
            documents: false,
            taxi_orders: false,
            delivery_orders: false,
        };
        if (type === Constants.BUSINESS_TYPE.MERCHANT) {
            includeOptions.menus = {
                include: {
                    categories: {
                        include: {
                            menu_items: {
                                include: {
                                    documents: {
                                        include: {
                                            files: true
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            };
        }

        const businesses = await prisma.business.findMany({
            where: {
                type: type,
                ...args,
            },
            include: includeOptions
        });

        // Before returning, sort menus, and menu categories if applicable
        return reorderMenusAndCategories(businesses);
    } catch (error) {
        console.error(`Error retrieving businesses by type ${type}:`, error);
        throw new Error(error);
    }
};

const getParentBusiness = async (business_id) => {
	try {
		const business = await prisma.business.findUnique({
			where: { business_id },
			include: { parent_business: true },
		});
		return business.parent_business;
	} catch (error) {
		console.error("Error retrieving parent business:", error);
		throw new Error(error);
	}
};

const getChildBusinesses = async (parent_business_id) => {
	try {
		return await prisma.business.findMany({
			where: { parent_business_id },
		});
	} catch (error) {
		console.error("Error retrieving child businesses:", error);
		throw new Error(error);
	}
};

const getFinanceRecordByBusinessId = async (business_id) => {
	try {
		const businessWithFinance = await prisma.business.findUnique({
			where: { business_id },
			include: {
				finances: true,
			},
		});
		if (!businessWithFinance) {
			console.log("Business not found");
			return null;
		}
		if (!businessWithFinance.finances) {
			console.log("No finance record found for the specified business");
			return null;
		}
		return businessWithFinance.finances;
	} catch (error) {
		console.error("Error retrieving finance record by business ID:", error);
		throw new Error(error);
	}
};

const updateBusiness = async (business_id, businessD) => {
	try {
		let businessData = {
			...businessD,
		}
		delete businessData.business_id;
		delete businessData.type;
		delete businessData.is_business_unit;
		delete businessData.business_group_name;
		delete businessData.address;
		delete businessData.delivery_address;
		delete businessData.email;
		delete businessData.telephone;
		delete businessData.telephone_code;
		delete businessData.telephone_number;
		delete businessData.working_hours;
		delete businessData.finances;
		delete businessData.popular;
		delete businessData.new;

		return await prisma.business.update({
			where: { business_id },
			data: { ...businessData },
		});
	} catch (error) {
		console.error("Error updating business:", error);
		throw new Error(error);
	}
};

const updateBusinessFinances = async (business_id, financesData) => {
    try {
        // First, retrieve the finance record associated with the business
        const business = await prisma.business.findUnique({
            where: { business_id },
            select: { finance_id: true }, // Select only the finance_id
        });

        if (!business || !business.finance_id) {
            throw new Error('No finance record found for the specified business');
        }

        // Use the upsert method to handle finance creation or retrieval
        const updatedFinances = await prisma.finances.update({
            where: {
                finance_id: business.finance_id, // Use the finance_id to find the record
            },
            data: {
                ...financesData, // Update the existing finance record with new data
            },
        });

        return updatedFinances; // Return the updated finance record
    } catch (error) {
        console.error("Error updating business finances:", error);
        throw new Error(error);
    }
};

const updateBusinessType = async (business_id, type) => {
	try {
		return await prisma.business.update({
			where: { business_id },
			data: { type },
		});
	} catch (error) {
		console.error("Error updating business type:", error);
		throw new Error(error);
	}
};

const updateIsBusinessUnit = async (business_id, is_business_unit) => {
	try {
		return await prisma.business.update({
			where: { business_id },
			data: { is_business_unit },
		});
	} catch (error) {
		console.error("Error updating is_business_unit:", error);
		throw new Error(error);
	}
};

const updateBusinessGroupName = async (business_id, business_group_name) => {
	try {
		return await prisma.business.update({
			where: { business_id },
			data: { business_group_name },
		});
	} catch (error) {
		console.error("Error updating business group name:", error);
		throw new Error(error);
	}
};

const updateBusinessEmail = async (business_id, email) => {
	try {
		return await prisma.business.update({
			where: { business_id },
			data: { email },
		});
	} catch (error) {
		console.error("Error updating business email:", error);
		throw new Error(error);
	}
};

const updateBusinessTelephone = async (business_id, telephone, telephone_code, telephone_number) => {
	try {
		return await prisma.business.update({
			where: { business_id },
			data: { telephone, telephone_code, telephone_number },
		});
	} catch (error) {
		console.error("Error updating business telephone:", error);
		throw new Error(error);
	}
};

const updateBusinessWorkingHours = async (business_id, working_hours) => {
	try {
		return await prisma.business.update({
			where: { business_id },
			data: { working_hours },
		});
	} catch (error) {
		console.error("Error updating business working hours:", error);
		throw new Error(error);
	}
};const updateRestaurantOverwhelmed = async (business_id, restaurant_overwhelmed) => {
	try {
		return await prisma.business.update({
			where: { business_id },
			data: { restaurant_overwhelmed },
		});
	} catch (error) {
		console.error("Error updating business overwhelmed:", error);
		throw new Error(error);
	}
};
const updateBusinessIsNew = async (business_id, isNew) => {
	try {
		return await prisma.business.update({
			where: { business_id },
			data: { new: isNew }, // Use 'new' property directly since 'new' is a reserved keyword in JavaScript, hence 'isNew' parameter name
		});
	} catch (error) {
		console.error("Error updating business new status:", error);
		throw new Error(error);
	}
};
const updateBusinessIsPopular = async (business_id, popular) => {
	try {
		return await prisma.business.update({
			where: { business_id },
			data: { popular },
		});
	} catch (error) {
		console.error("Error updating business popularity:", error);
		throw new Error(error);
	}
};


const createNewBusiness = async (business) => {
	try {
		return await prisma.business.create({
			data: business,
		});
	} catch (error) {
		console.error("Error creating new business:", error);
		throw new Error(error);
	}
};

const deleteBusiness = async (business_id) => {
	try {
		return await prisma.business.delete({
			where: { business_id },
		});
	} catch (error) {
		console.error("Error deleting business:", error);
		throw new Error(error);
	}
};

const updateParentBusiness = async (business_id, parent_business_id) => {
	try {
		return await prisma.business.update({
			where: { business_id },
			data: { parent_business_id },
		});
	} catch (error) {
		console.error("Error updating parent business:", error);
		throw new Error(error);
	}
};

const removeParentBusiness = async (business_id) => {
	try {
		return await prisma.business.update({
			where: { business_id: business_id },
			data: { parent_business_id: null },
		});
	} catch (error) {
		console.error("Error removing child business:", error);
		throw new Error(error);
	}
};

const addBusinessAddress = async (business_id, addressData) => {
	try {
		// Use the upsert method to handle address creation or retrieval
		const addressToUse = await prisma.addresses.upsert({
			where: {
				uniqueAddressIdentifier: {
					address: addressData.address,
					latitude: addressData.latitude,
					longitude: addressData.longitude,
				},
			},
			update: addressData,
			create: addressData,
		});

		// Update the business with the address
		return await prisma.business.update({
			where: { business_id },
			data: {
				address: {
					connect: {
						address_id: addressToUse.address_id
					}
				}
			}
		});
	} catch (error) {
		console.error("Error adding business address:", error);
		throw new Error(error);
	}
};

const addDeliveryAddress = async (business_id, addressData) => {
	try {
		// Use the upsert method to handle address creation or retrieval
		const addressToUse = await prisma.addresses.upsert({
			where: {
				uniqueAddressIdentifier: {
					address: addressData.address,
					latitude: addressData.latitude,
					longitude: addressData.longitude,
				},
			},
			update: addressData,
			create: addressData,
		});

		// Update the business with the delivery address
		return await prisma.business.update({
			where: { business_id },
			data: {
				delivery_address: {
					connect: {
						address_id: addressToUse.address_id
					}
				}
			}
		});
	} catch (error) {
		console.error("Error adding delivery address:", error);
		throw new Error(error);
	}
};

async function updateBusinessAddress(business_id, address) {
	try {
		const updatedAddress = await AddressDao.addAddress(address);
		if (!updatedAddress) {
			throw new Error('Failed to update or add address');
		}
		return await prisma.business.update({
			where: { business_id },
			data: { address_id: updatedAddress.address_id },
		});
	} catch (error) {
		console.error("Error updating business address:", error);
		throw new Error(error);
	}
}

async function updateBusinessDeliveryAddress(business_id, deliveryAddress) {
	try {
		const updatedDeliveryAddress = await AddressDao.addAddress(deliveryAddress);
		if (!updatedDeliveryAddress) {
			throw new Error('Failed to update or add delivery address');
		}
		// Update the business with the new delivery_address_id
		return await prisma.business.update({
			where: { business_id },
			data: { delivery_address_id: updatedDeliveryAddress.address_id },
		});
	} catch (error) {
		console.error("Error updating business delivery address:", error);
		throw new Error(error);
	}
}

const removeBusinessDeliveryAddress = async (business_id) => {
	try {
		return await prisma.business.update({
			where: { business_id },
			data: { delivery_address_id: null },
		});
	} catch (error) {
		console.error("Error removing business delivery address:", error);
		throw new Error(error);
	}
};

const addScheduledUserSortingType = async (type) => {
	try {
		return await prisma.business.updateMany({
			where: { type: 'MERCHANT' },
			data: { daily_users_sorting_type: type },
		});
	} catch (error) {
		console.error("Error updating scheduled users sorting type:", error);
		throw new Error(error);
	}
};

const manualSortScheduledUsers = async (sorted_users = []) => {
	try {
		return await prisma.business.updateMany({
			where: { type: 'MERCHANT' },
			data: { daily_users_sorted: [...sorted_users] },
		});
	} catch (error) {
		console.error("Error updating sorted scheduled users:", error);
		throw new Error(error);
	}
};

const getBusinessStripeByBusinessId = async (business_id) => {
	try {
		const business_data = await prisma.business.findUnique({
			where: {
				business_id: business_id,
			},
			select: {
				business_id:true,
				stripe_account_id:true
			}
		});
		return business_data.stripe_account_id;
	} catch (error) {
		console.error("Error retrieving business stripe ID:", error);
		throw new Error(error);
	}
};

/**
 * Retrieves the Stripe account IDs for all businesses from the database.
 *
 * @returns {Promise<Array<{ business_id: number, stripe_account_id: string }>>}
 *          A promise that resolves to an array of objects containing business IDs and their corresponding Stripe account IDs.
 * @throws {Error} If there is an error fetching the Stripe IDs from the database.
 */
const getStripeIdsForAllBusinesses = async () => {
	try {
		return await prisma.business.findMany({
			select: {
				business_id: true,
				stripe_account_id: true
			}
		});
	} catch (error) {
		console.error("Error fetching Stripe IDs for businesses:", error);
		throw new Error(error);
	}
}

async function activateBusiness( business_id, action_creator_user_id, reason ) {
	try {
		return await prisma.$transaction(async (tx) => {
			const business = await tx.business.findUnique({
				where: { business_id },
				select: { first_activated_at: true },
			});

			const updateData = { active: true };
			if (!business.first_activated_at) {
				updateData.first_activated_at = new Date();
			}

			const updatedBusiness = await tx.business.update({
				where: { business_id },
				data: updateData,
			});

			await tx.account_actions.create({
				data: {
					business: { connect: { business_id } },
					action_creator: { connect: { user_id: action_creator_user_id } },
					reason: reason,
					action: ACCOUNT_ACTIONS.UNSUSPEND,
				},
			});

			return updatedBusiness;
		});
	} catch (error) {
		console.error("Error activating business:", error);
		throw new Error("Failed to activate business");
	}
}

async function deactivateBusiness(business_id, action_creator_user_id, reason) {
	try {
		return await prisma.$transaction(async (tx) => {
			const updatedBusiness = await tx.business.update({
				where: { business_id },
				data: { active: false },
			});

			await tx.account_actions.create({
				data: {
					business: { connect: { business_id } },
					action_creator: { connect: { user_id: action_creator_user_id } },
					reason: reason,
					action: ACCOUNT_ACTIONS.SUSPEND,
				},
			});

			return updatedBusiness;
		});
	} catch (error) {
		console.error("Error deactivating business:", error);
		throw new Error("Failed to deactivate business");
	}
}

const getScheduledUsersByBusinessId = async (businessId) => {
	try {
		const business = await prisma.business.findUnique({
			where: {
				business_id: businessId,
				offers_daily_meals: true
			}
		});

		if (!business) {
			throw new Error('Business not found or does not offer daily meals');
		}

		return await prisma.users.findMany({
			where: {
				subscribed_to_daily_meals: true,
				user_id: {
					in: business.daily_users_sorted || []
				}
			},
			include: {
				addresses: {
					include: {
						address: true
					}
				}
			}
		});
	} catch (error) {
		console.error("Error fetching scheduled users:", error);
		throw error;
	}
};

const getPurchaseOrderLimit = async (business_id) => {
	try {
		const business = await prisma.business.findUnique({
			where: { business_id },
			select: { purchase_order_limit_amount: true },
		});
		// get all taxi orders for this business (this month) and check if the limit is reached
		const taxiOrders = await prisma.taxi_orders.findMany({
			where: {
				business_id: business_id,
				updated_at: {
					gte: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
					lte: new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0),
				},
			},
			select: {
				payment: true
			}
		});
		const totalTaxiOrders = taxiOrders.reduce((acc, order) => acc + order.payment.price, 0);
		if (business.purchase_order_limit > 0) {
			return totalTaxiOrders >= business.purchase_order_limit ? 0 : business.purchase_order_limit - totalTaxiOrders;
		} else {
			return 0;
		}
	} catch (error) {
		console.error("Error retrieving purchase order limit:", error);
		throw new Error(error);
	}
}

module.exports = {
	getScheduledUsersByBusinessId,
	getBusinesses,
	getBusinessById,
	getBusinessByEmail,
	getBusinessByTelephone,
	getBusinessesByType,
	getBusinessesByNameSearch,
	getBusinessesByGroupName,
	getChildBusinesses,
	getParentBusiness,
	getFinanceRecordByBusinessId,
	createNewBusiness,
	addBusinessAddress,
	addDeliveryAddress,
	updateBusiness,
	deleteBusiness,
	updateBusinessAddress,
	updateBusinessType,
	updateIsBusinessUnit,
	updateBusinessGroupName,
	updateBusinessEmail,
	updateBusinessTelephone,
	updateBusinessWorkingHours,
	updateRestaurantOverwhelmed,
	updateBusinessIsNew,
	updateBusinessIsPopular,
	updateParentBusiness,
	removeParentBusiness,
	updateBusinessDeliveryAddress,
	removeBusinessDeliveryAddress,
	addScheduledUserSortingType,
	manualSortScheduledUsers,
	getBusinessesByTypeMainInformation,
	updateBusinessFinances,
	getBusinessStripeByBusinessId,
	getStripeIdsForAllBusinesses,
	getBusinessesForSearchById,
	activateBusiness,
	deactivateBusiness,
	getBusinessForSearchById,
	getBusinessAdminDataById,
	getPurchaseOrderLimit,
};