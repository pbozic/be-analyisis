import MenuDao from '../../dao/Menu.js';
import MenuItemDao from '../../dao/MenuItem.js';
import DmcDao from '../../dao/DailyMealCategory.js';
import { MenuItemDetail } from '../../schemas/dto/Menu/menu.dto.js';
import { MenuCategoryDetail } from '../../dao/MenuCategory.js';

/**
 * Populates existing daily meal menus with menu items based on their existing menu categories.
 * For each existing menu:
 *   - Fetches existing menu categories
 *   - Gets the required number of random menu items (equal to number of active daily meal categories)
 *   - Creates menu items for categories that don't have any items yet
 *
 * @param {string} business_id
 */
async function populateDailyMeals(business_id: string): Promise<void> {
	// Get active daily meal categories count for this business
	const activeDailyMealCategories = await DmcDao.getActiveDailyMealCategoriesForBusiness(business_id);
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
	const existingMenus = await MenuDao.getDailyMenusByBusinessId(business_id);
	if (!Array.isArray(existingMenus) || existingMenus.length === 0) {
		console.error('No existing daily meal menus found for this business.');
		return;
	}

	console.log(`Found ${existingMenus.length} existing daily meal menus to populate.`);

	for (const menu of existingMenus) {
		console.log(`Processing menu for date: ${menu.date?.slice(0, 10) || 'no date'}`);

		const categoriesToPopulate = menu.categories?.filter(
			(category: any) => !category.menu_items || category.menu_items.length === 0
		);

		if (categoriesToPopulate?.length) {
			console.log(
				`Found ${categoriesToPopulate.length} empty categories to populate for ${menu.date?.slice(0, 10)}`
			);

			// For each empty category, add a menu item
			for (let j = 0; j < categoriesToPopulate.length && j < selectedItems.length; j++) {
				const category = categoriesToPopulate[j] as MenuCategoryDetail;
				const item = selectedItems[j % selectedItems.length] as MenuItemDetail;

				// Double-check that this category really doesn't have items
				if (category.menu_items && category.menu_items.length > 0) {
					console.log(`Category ${category.menu_category_id} already has items, skipping...`);
					continue;
				}

				const newMenuData = {
					daily_date: menu.date as string,
					// names: item.names,
					// description: item.description,
					unit_size: item.unit_size,
					spicy_level: item.spicy_level || 0,
					sides: item.sides || [],
					extras: item.extras || [],
					ingredients: item.ingredients || [],
					allergens: item.allergens || [],
					business_id,
				};

				try {
					await MenuItemDao.createMenuItem(category.menu_category_id, item.tax_rates_id!, newMenuData, true);
				} catch (error) {
					console.error(`Error creating menu item for category ${category.menu_category_id}:`, error);
				}
			}
		}
	}
}

// Example usage:
const business_id = 'b6842fce-5e7f-4ee6-9467-56b3654475cf'; //Soba room
populateDailyMeals(business_id)
	.then(() => console.log('Done!'))
	.catch((err) => console.error(err));
