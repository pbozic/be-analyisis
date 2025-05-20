const esClient = require('../client');

async function searchBusinesses(query) {
	const response = await esClient.search({
		index: 'business_index',
		body: {
			query: {
				multi_match: {
					query: query,
					fields: [
						'name^3',
						'description',
						'menus.menu_category_name^2',
						'menus.translations', // 🔥 Search menu category translations
						'menus.menu_items.name^1.5',
						'menus.menu_items.translations', // 🔥 Search menu item translations
						'menus.menu_items.description',
					],
					fuzziness: 'AUTO',
				},
			},
		},
	});
	console.log(
		response.hits.hits.map((hit) => ({
			business_id: hit._source.business_id,
			name: hit._source.name,
			menu_categories: hit._source.menu_categories,
		}))
	);
	return response.hits.hits.map((hit) => ({
		business_id: hit._source.business_id,
		name: hit._source.name,
		menu_categories: hit._source.menu_categories,
	}));
}

module.exports = searchBusinesses;
