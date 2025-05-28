const SCORING_WEIGHTS = {
	bid_multiplier: 5, // How much to boost businesses bidding on words
	popularity_boost: 2, // Popular businesses get double weight
	new_business_boost: 1.5, // New businesses get a small boost
	distance_scale: '2km', // Businesses within this range get full score
	distance_decay: 0.5, // Decay factor for distance
};
const BUSINESS_QUERY = (query, userLat, userLon) => ({
	function_score: {
		query: {
			bool: {
				must: [
					{ term: { _index: 'business_index' } },
					{
						multi_match: {
							query: query,
							fields: ['name^3', 'description'],
							fuzziness: 'AUTO',
						},
					},
				],
			},
		},
		functions: [
			{
				// Apply distance-based scoring only to `business_index`
				filter: { term: { _index: 'business_index' } },
				gauss: {
					location: {
						origin: `${userLat},${userLon}`,
						scale: SCORING_WEIGHTS.distance_scale,
						decay: SCORING_WEIGHTS.distance_decay,
					},
				},
			},
			{
				// Apply bid-based scoring only to `business_index`
				script_score: {
					script: {
						source: `
                            double maxBid = 0;
                            for (def bid : params._source.bids) {
                                if (params.words.contains(bid.word)) {
                                    maxBid = Math.max(maxBid, bid.amount);
                                }
                                for (def translation : bid.translations) {
                                    if (params.words.contains(translation)) {
                                        maxBid = Math.max(maxBid, bid.amount);
                                    }
                                }
                            }
                            return maxBid * params.weight;
                        `,
						params: {
							weight: SCORING_WEIGHTS.bid_multiplier, // Bid multiplier
							words: query.split(' '),
						},
					},
				},
			},
			{
				field_value_factor: {
					field: 'popular',
					factor: SCORING_WEIGHTS.popularity_boost,
					missing: 0,
				},
			},
			{
				field_value_factor: {
					field: 'new',
					factor: SCORING_WEIGHTS.new_business_boost,
					missing: 0,
				},
			},
		],
		score_mode: 'sum',
		boost_mode: 'multiply',
	},
});
const MENUS_QUERY = (query) => ({
	function_score: {
		query: {
			bool: {
				must: [
					{ term: { _index: 'menus_index' } },
					{
						multi_match: {
							query: query,
							fields: [
								'menu_categories.menu_category_name^2',
								'menu_categories.categories.name',
								'menu_categories.menu_items.name^1.5',
								'menu_categories.menu_items.description',
							],
							fuzziness: 'AUTO',
						},
					},
				],
			},
		},
		score_mode: 'sum',
		boost_mode: 'multiply',
	},
});
export { MENUS_QUERY };
export { BUSINESS_QUERY };
export { SCORING_WEIGHTS };
export default {
	MENUS_QUERY,
	BUSINESS_QUERY,
	SCORING_WEIGHTS,
};
