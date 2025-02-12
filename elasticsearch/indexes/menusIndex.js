const prisma = require('../../prisma/prisma');
const esClient = require('../client');

async function indexMenus() {
    const menus = await prisma.menus.findMany({
      include: {
        categories: {
          include: {
            menu_items: true,
            menu_categories_catgeories: {
              include: {
                category: {
                  include: {
                    translatable: {
                      include: {
                        translations: true // Fetch all translations
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
  
    const bulkOps = menus.flatMap(menu => [
      { index: { _index: 'menus_index', _id: menu.menu_id } },
      {
        menu_id: menu.menu_id,
        business_id: menu.business_id,
        active: menu.active,
        menu_categories_ordered: menu.menu_categories_ordered, // Stores ordered categories as JSON
        menu_categories: menu.categories.map(menuCategory => ({
          menu_category_id: menuCategory.menu_category_id,
          menu_category_name: menuCategory.names, // Localized names
          description: menuCategory.description, // Localized descriptions
          categories: menuCategory.menu_categories_catgeories.map(catLink => ({
            category_id: catLink.category.categories_id,
            name: catLink.category.name,
            description: catLink.category.description,
            translations: catLink.category.translatable
              ? catLink.category.translatable.translations.reduce((acc, t) => {
                  acc[t.language] = t.translation; // Store translations in key-value pairs
                  return acc;
                }, {})
              : {} // Store category translations
          })), 
          menu_items_ordered: menuCategory.menu_items_ordered, // Stores ordered items as JSON
          menu_items: menuCategory.menu_items.map(item => ({
            menu_item_id: item.menu_item_id,
            name: item.names, // Localized names
            description: item.description,
            image: item.image,
            allergens: item.allergens,
            spicy_level: item.spicy_level,
            unit_size: item.unit_size,
            price: item.price,
            discount: item.discount,
            sides: item.sides,
            extras: item.extras,
            ingredients: item.ingredients,
            availability: item.availability
          }))
        }))
      }
    ]);
  
    if (bulkOps.length > 0) {
      await esClient.bulk({ refresh: true, body: bulkOps });
    }
  
    console.log('Menus, Categories (with Translations), and Items indexed successfully');
  }

module.exports = indexMenus