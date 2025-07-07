import MenuDao from '../../dao/Menu.js';
import MenuItemDao from '../../dao/MenuItem.js';
import MenuCategoryDao from '../../dao/MenuCategory.js';
import DailyMealCategory from '../../dao/DailyMealCategory.js';

/**
 * Populates existing daily meal menus with menu items based on their existing menu categories.
 * For each existing menu:
 *   - Fetches existing menu categories
 *   - Gets the required number of random menu items (equal to number of active daily meal categories)
 *   - Creates menu items for categories that don't have any items yet
 *
 * @param {string} business_id
 */
async function populateDailyMeals(business_id) {
	// Get active daily meal categories count for this business
	const activeDailyMealCategories = await DailyMealCategory.getActiveDailyMealCategoriesForBusiness(business_id);
	const requiredItemsCount = activeDailyMealCategories.length;

	if (requiredItemsCount === 0) {
		console.error('No active daily meal categories found for this business.');
		return;
	}

	// Collect all menu items for the business
	const menuItems = await MenuItemDao.getMenuItemsByBusinessId(business_id);
	if (!Array.isArray(menuItems) || menuItems.length < requiredItemsCount) {
		console.error(`Not enough menu items found. Need ${requiredItemsCount}, found ${menuItems.length}.`);
		return;
	}

	// Pick random menu items equal to the number of active daily meal categories
	const shuffledItems = menuItems.sort(() => 0.5 - Math.random());
	const selectedItems = shuffledItems.slice(0, requiredItemsCount);

	// Get existing daily meal menus for this business
	const existingMenus = await MenuDao.getMenuByBusinessId(business_id, true);

	if (!Array.isArray(existingMenus) || existingMenus.length === 0) {
		console.error('No existing daily meal menus found for this business.');
		return;
	}

	for (const menu of existingMenus) {
		const categoriesToPopulate = menu.categories.filter(
			(category) => !category.menu_items || category.menu_items.length === 0
		);

		if (categoriesToPopulate.length === 0) {
			continue;
		}

		// For each empty category, add a menu item
		for (let j = 0; j < categoriesToPopulate.length && j < selectedItems.length; j++) {
			const category = categoriesToPopulate[j];
			const item = selectedItems[j % selectedItems.length]; // Cycle through items if needed

			// Prepare daily meal item data
			const newMenuData = {
				daily_date: menu.date,
				names: item.names,
				description: item.description,
				unit_size: item.unit_size,
				spicy_level: item.spicy_level || 0,
				sides: item.sides || [],
				extras: item.extras || [],
				ingredients: item.ingredients || [],
				allergens: item.allergens || [],
				business_id,
			};

			try {
				await MenuItemDao.createMenuItem(category.menu_category_id, newMenuData, true);
			} catch (error) {
				console.error(`Error creating menu item for category ${category.menu_category_id}:`, error);
			}
		}
	}
}

// Example usage:
const business_id = 'b6842fce-5e7f-4ee6-9467-56b3654475cf'; //Soba room
populateDailyMeals(business_id)
	.then(() => console.log('Done!'))
	.catch((err) => console.error(err));
