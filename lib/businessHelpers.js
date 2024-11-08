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


module.exports = {
	reorderMenusAndCategories
};