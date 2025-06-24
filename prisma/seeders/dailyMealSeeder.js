import MenuDao from '../../dao/Menu.js';
import MenuItemDao from '../../dao/MenuItem.js';
import MenuCategoryDao from '../../dao/MenuCategory.js';
import CategoriesDao from '../../dao/Categories.js';

/**
 * Populates a business with daily meal menus for the next 14 days using 3 random menu items and 3 categories per day.
 * For each day:
 *   - Creates a daily meal menu.
 *   - Fetches the first 3 categories from the DB.
 *   - For each category, creates a menu category and adds one of the 3 random menu items to it.
 *
 * @param {string} business_id
 */
async function populateDailyMeals(business_id) {
	// Collect all menu items for the business
	const menuItems = await MenuItemDao.getMenuItemsByBusinessId(business_id);
	if (!Array.isArray(menuItems) || menuItems.length < 3) {
		console.error('Not enough menu items found.');
		return;
	}

	// Pick 3 random menu items
	const shuffledItems = menuItems.sort(() => 0.5 - Math.random());
	const selectedItems = shuffledItems.slice(0, 3);

	// Fetch the first 3 categories from the DB
	const categories = await CategoriesDao.getCategoriesByType('CUISINE');
	if (!Array.isArray(categories) || categories.length < 3) {
		console.error('Not enough categories found.');
		return;
	}
	const selectedCategories = categories.slice(0, 3);

	// For each of the next 14 days
	for (let i = 0; i < 14; i++) {
		const date = new Date();
		date.setDate(date.getDate() + i);

		// Create a daily meal menu for the date
		const dailyMenu = await MenuDao.createMenu(business_id, true, date);

		// For each of the 3 categories, add one of the 3 items
		for (let j = 0; j < 3; j++) {
			const category = selectedCategories[j];
			const item = selectedItems[j];

			// Create a new menu category for the daily menu, using the found category
			const menuCategory = await MenuCategoryDao.createMenuCategory(dailyMenu.menu_id, {
				business_id,
				category_ids: [category.categories_id],
			});

			// Prepare daily meal item data
			const newMenuData = {
				daily_date: date,
				names: item.names,
				description: item.description,
				unit_size: item.unit_size,
				spicy_level: item.spicy_level || 0,
				sides: item.sides || [],
				extras: item.extras || [],
				ingredients: item.ingredients || [],
				allergens: item.allergens || [],
				business_id,
				price: item.price,
				image: item.image,
				is_enabled: true,
			};

			// Create the daily meal menu item
			await MenuItemDao.createMenuItem(menuCategory.menu_category_id, newMenuData, true);
			console.log(
				`Created daily meal item for ${date.toISOString().slice(0, 10)}: ${item.names?.en || '[no name]'} in category ${category.name || category.categories_id}`
			);
		}
	}
}

// Example usage:
const business_id = 'b6842fce-5e7f-4ee6-9467-56b3654475cf'; //Soba room
populateDailyMeals(business_id)
	.then(() => console.log('Done!'))
	.catch((err) => console.error(err));
