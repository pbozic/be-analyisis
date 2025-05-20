const esClient = require('../client');

async function listAllBusinessesWithScoring(userLat, userLon, page = 1, pageSize = 10) {
	try {
		const from = (page - 1) * pageSize;

		const esResponse = await esClient.search({
			index: 'business_index',
			body: {
				from,
				size: pageSize,
				explain: false,
				query: {
					function_score: {
						query: {
							match_all: {}, //  Get all businesses without filtering
						},
						functions: [
							{
								// Boost for businesses bidding on searched words
								filter: {
									nested: {
										path: 'word_buys',
										query: {
											exists: { field: 'word_buys.word' }, //  Boost businesses with word bids
										},
									},
								},
								weight: SCORING_WEIGHTS.bid_multiplier,
							},
							{
								// Boost based on popularity
								field_value_factor: {
									field: 'popular',
									factor: SCORING_WEIGHTS.popularity_boost,
									missing: 0,
								},
							},
							{
								// Boost new businesses
								field_value_factor: {
									field: 'new',
									factor: SCORING_WEIGHTS.new_business_boost,
									missing: 0,
								},
							},
							{
								// Distance-based scoring (if location provided)
								gauss: {
									location: {
										origin: `${userLat},${userLon}`,
										scale: SCORING_WEIGHTS.distance_scale,
										decay: SCORING_WEIGHTS.distance_decay,
									},
								},
								weight: 5,
							},
						],
						score_mode: 'sum', // Sum all scoring contributions
						boost_mode: 'sum', // Sum function scores and query score
					},
				},
				_source: ['business_id', 'name', 'description', '_score'],
				sort: [{ _score: 'desc' }], // Sort by highest score
			},
		});

		console.log(JSON.stringify(esResponse, null, 4));
		return esResponse.hits.hits.map((hit) => ({
			business_id: hit._source.business_id,
			name: hit._source.name,
			description: hit._source.description,
			score: hit._score,
		}));
	} catch (error) {
		console.error('❌ Error in listing businesses:', error);
		return [];
	}
}

module.exports = listAllBusinessesWithScoring;
