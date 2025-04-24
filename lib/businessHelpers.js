const prisma = require("../prisma/prisma");
const { SCORING_POINTS_REASON } = require("./constants");

function reorderMenusAndCategories(businesses) {
	 return businesses.map(business => {
		if (business.menus) {
			// For each business menu sort categories if business has set manual order of categories
			business.menus.forEach(menu => {
				if (menu.menu_categories_ordered) {
					const orderedCategoryIds = JSON.parse(menu.menu_categories_ordered);
					menu.categories.sort((a, b) => {
						return orderedCategoryIds.indexOf(a.menu_category_id) - orderedCategoryIds.indexOf(b.menu_category_id);
					});
				} else {
					console.log("No menu categories ordered");
					// return menu.categories;
				}

				// For each menu category sort items if business has set manual order of items
				menu.categories.forEach(category => {
					if (category.menu_items_ordered) {
						const orderedItemIds = JSON.parse(category.menu_items_ordered);
						category.menu_items.sort((a, b) => {
							return orderedItemIds.indexOf(a.menu_item_id) - orderedItemIds.indexOf(b.menu_item_id);
						});
					} else {
						console.log('No menu items ordered');
						return category.menu_items;
					}

					// Create a deep copy of menu_items to avoid circular references
					const menuCopy = JSON.parse(JSON.stringify(menu));

					//fix item extras and sides to be actual menu_item[]
					category.menu_items.forEach(item => {
						if (item.sides) {
							item.sides = item.sides.map(sideId => {
								const side_item = getItemFromMenuByItemId(menuCopy,sideId) || {}
								if(!side_item) console.warn("There was a missing side in item "+item.menu_item_id);
								return side_item;
							});
						}
						if (item.extras) {
							item.extras = item.extras.map(extraId => {
								const extra_item = getItemFromMenuByItemId(menuCopy,extraId) || {}
								if(!extra_item) console.warn("There was a missing extra in item "+item.menu_item_id);
								return extra_item;
							});
						}
					});
				});
			});
		}
		return business
	});
}

// Get item in menu by menu item id
function getItemFromMenuByItemId(menu, itemId) {
	for (let i = 0; i < menu.categories.length; i++) {
		const category = menu.categories[i];
		for (let j = 0; j < category.menu_items.length; j++) {
			const item = category.menu_items[j];
			if (item.menu_item_id === itemId) {
				return item
			}
		}
	}
	return null
}


async function setNewBusinesses() {
	// get all businesses where first_activated_at is not null, 
	// and first_activated_at is more than 14 days ago 
	// and new is true and 
	// update new to false
	const businesses = await prisma.businesses.findMany({
		where: {
			first_activated_at: {
				lt: new Date(new Date().getTime() - 15 * 24 * 60 * 60 * 1000)
			},
			new: true
		}
	});
	if (businesses.length > 0) {
		await prisma.businesses.updateMany({
			where: {
				business_id: {
					in: businesses.map(business => business.business_id)
				}
			},
			data: {
				new: false
			}
		});
	}

}

async function aggregateLateEvents(){
	// Fetch unaggregated late events grouped by business_id and user_id
	const unaggregatedLateEvents = await prisma.late_events.groupBy({
		by: ['business_id', 'user_id'],
		where: {
			scoring_points_id: null
		},
		_sum: {
			seconds: true
		}
	});

	// Iterate over each group to create and connect scoring points
	for (const group of unaggregatedLateEvents) {
		const { business_id, user_id, _sum: { seconds } } = group;
		const penaltyPoints = Math.floor(seconds / 60);

		if (penaltyPoints > 0) {
			await prisma.$transaction(async (tx) => {
				const newScoringPoints = await tx.scoring_points.create({
					data: {
						businesses: { connect: { business_id: business_id } },
						users: { connect: { user_id: user_id } },
						points: penaltyPoints,
						isPenalty: true,
						reason: SCORING_POINTS_REASON.LATE
					}
				});

				await tx.late_events.updateMany({
					where: {
						business_id: business_id,
						user_id: user_id,
						scoring_points_id: null
					},
					data: {
						scoring_points: { connect: { scoring_points_id: newScoringPoints.scoring_points_id } }
					}
				});
			});

			console.info(`Created and connected scoring points for business_id: ${business_id}, user_id: ${user_id}`);
		}
	}
}


async function aggregateAutoRejectedOrders(){
	const recentOrders = await prisma.delivery_orders.findMany({
		where: {
			created_at: {
				gte: new Date(Date.now() - 24 * 60 * 60 * 1000), // last 24 hours
			},
		},
		select: {
			business_id: true,
			timeline: true,
		},
	});

	const grouped = {};

	for (const order of recentOrders) {
		if (
			Array.isArray(order.timeline) &&
			order.timeline.some(event => event.status === 'AUTO_REJECTED')
		) {
			const businessId = order.business_id;
			grouped[businessId] = (grouped[businessId] || 0) + 1;
		}
	}

	for (const [business_id, N_autorejected] of Object.entries(grouped)) {
		const penaltyPoints = Math.floor(N_autorejected / 3);

		if (penaltyPoints > 0) {
			const newScoringPoints = await prisma.scoring_points.create({
				data: {
					businesses: { connect: { business_id: business_id } },
					points: penaltyPoints,
					isPenalty: true,
					reason: SCORING_POINTS_REASON.AUTO_REJECTED
				}
			});
			console.info(`Created and connected scoring points for business_id: ${business_id}`);
		}
	}
}

async function aggregateScoringPoints() {
	try {
		await aggregateAutoRejectedOrders()
		await aggregateLateEvents()
	} catch (error) {
		console.error("Error aggregating scoring points:", error);
		throw error;
	}
}

module.exports = {
	reorderMenusAndCategories,
	setNewBusinesses,
	aggregateScoringPoints,
};