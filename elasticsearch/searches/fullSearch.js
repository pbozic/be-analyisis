import esClient from '../client.js';
import { ES_RADIUS_LIMIT_KM } from '../../lib/constants.js';
const SCORING_WEIGHTS = {
	bid_multiplier: 1, // Boost businesses bidding on words
	popularity_boost: 2, // Boost for popular businesses
	new_business_boost: 1.5, // Boost for new businesses
	distance_scale: '3km', // Max distance for full score
	distance_decay: 0.5, // Distance decay factor
	promo_section_boosts: {
		1: 2.5, // Boost for businesses in promo section 1
		2: 2, // Boost for businesses in promo section 2
		3: 1.5, // Boost for businesses in promo section 3
	},
	description_name_weight: 4, // Weight for matching name in description
	menu_item_name_weight: 2, // Weight for matching menu items
	menu_item_description_weight: 1, // Weight for matching menu item descriptions
};
/**
 * Search for businesses in Elasticsearch with comprehensive filtering and scoring
 * @param {string} query - Search query text
 * @param {number} userLat - User latitude for location-based scoring
 * @param {number} userLon - User longitude for location-based scoring
 * @param {Array} categoryIds - Array of category IDs to filter by
 * @param {number} radius - Search radius in kilometers
 * @param {string} filterOperator - 'AND' or 'OR' for category filtering
 * @param {boolean} isDailyMealSearch - Whether to filter for daily meals
 * @param {string} promoSectionId - Promo section ID to filter by
 * @param {number} page - Page number for pagination
 * @param {number} pageSize - Number of results per page
 * @param {Array} businessIds - Array of specific business IDs to filter by
 * @param {string} businessType - Business type to filter by (e.g., 'LOCAL', 'MERCHANT'). Note: LOCAL businesses are automatically filtered to only show those with available local locations.
 * @returns {Object} Search results with businesses and scoring details
 *
 * @example
 * // Search for LOCAL businesses only (automatically filtered for available local locations tomorrow or later)
 * const localBusinesses = await searchBusinesses('pizza', 46.063, 14.525, [], 10, 'OR', false, null, 1, 10, [], 'LOCAL');
 *
 * // Search for MERCHANT businesses only
 * const merchantBusinesses = await searchBusinesses('coffee', 46.063, 14.525, [], 10, 'OR', false, null, 1, 10, [], 'MERCHANT');
 *
 * // Search for all business types (LOCAL businesses automatically filtered for available locations)
 * const allBusinesses = await searchBusinesses('food', 46.063, 14.525, [], 10, 'OR', false, null, 1, 10, [], null);
 */
async function searchBusinesses(
	query,
	userLat = 46.0660617,
	userLon = 14.5098111,
	categoryIds = [],
	radius = null,
	filterOperator = 'OR',
	isDailyMealSearch = false,
	promoSectionId = null,
	page = 1,
	pageSize = 10,
	businessIds = [],
	businessType
) {
	try {
		userLat = userLat ?? 46.0660617;
		userLon = userLon ?? 14.5098111;
		categoryIds = categoryIds || [];
		filterOperator = filterOperator || 'OR';
		isDailyMealSearch = isDailyMealSearch || false;
		promoSectionId = promoSectionId || null;
		page = page || 1;
		pageSize = pageSize || 10;
		businessIds = businessIds || [];
		businessType = businessType || null;
		const from = (page - 1) * pageSize;
		const queryWords = query ? query.split(' ').filter((word) => word.trim() !== '') : [];
		const hasQuery = queryWords.length > 0;
		const hasCategories = categoryIds.length > 0;
		const hasPromoSection = promoSectionId !== null;
		const radius_limited = radius ? Math.min(radius, ES_RADIUS_LIMIT_KM) : ES_RADIUS_LIMIT_KM;
		const hasBusinessIds = Array.isArray(businessIds) && businessIds.length > 0;
		// console.log('latlng', userLat, userLon);

		// Base Query
		const boolQuery = {
			bool: {
				must: [],
				filter: [{ term: { active: true } }],
				should: [],
				must_not: [],
			},
		};
		if (hasBusinessIds) {
			boolQuery.bool.filter.push({
				terms: { business_id: businessIds },
			});
		}

		// **Filter by business type if provided**
		if (businessType) {
			boolQuery.bool.filter.push({
				term: { type: businessType },
			});
		}

		// **Always filter LOCAL businesses to only show those with available local locations**
		// This applies to all searches, regardless of businessType parameter
		boolQuery.bool.should.push({
			bool: {
				must_not: [{ term: { type: 'LOCAL' } }],
			},
		});

		const tomorrow = new Date();
		tomorrow.setDate(tomorrow.getDate() + 1);
		const tomorrowISOString = tomorrow.toISOString();

		boolQuery.bool.should.push({
			bool: {
				must: [
					{ term: { type: 'LOCAL' } },
					{
						nested: {
							path: 'business_local_locations',
							query: {
								range: {
									'business_local_locations.time': { gte: tomorrowISOString },
								},
							},
						},
					},
				],
			},
		});

		// Ensure at least one of the should clauses matches
		boolQuery.bool.minimum_should_match = 1;

		if (typeof isDailyMealSearch === 'boolean') {
			if (isDailyMealSearch) {
				// // Only daily meals with a date >= today
				// const now = new Date();
				// const todayStart = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()));
				// const todayISOString = todayStart.toISOString();
				boolQuery.bool.filter.push({
					nested: {
						path: 'menus',
						query: {
							bool: {
								must: [
									{ term: { 'menus.isDailyMeal': true } },
									// {
									// 	range: {
									// 		'menus.date': { gte: todayISOString },
									// 	},
									// },
								],
							},
						},
					},
				});
			} else {
				// Only non-daily meals (or where isDailyMeal is not true / missing)
				boolQuery.bool.filter.push({
					nested: {
						path: 'menus',
						query: {
							bool: {
								must_not: [{ term: { 'menus.isDailyMeal': true } }],
							},
						},
					},
				});
			}
		}
		// **Filter by promo section ID if provided**
		if (hasPromoSection) {
			boolQuery.bool.filter.push({
				nested: {
					path: 'promo_sections',
					query: {
						term: { 'promo_sections.promo_sections_id': promoSectionId },
					},
				},
			});
		}
		// **Text Search (if query exists)**
		if (hasQuery) {
			boolQuery.bool.should.push(
				{
					function_score: {
						weight: SCORING_WEIGHTS.description_name_weight,
						query: {
							multi_match: {
								query: query,
								fields: ['name', 'description'],
								fuzziness: 'AUTO',
							},
						},
						boost_mode: 'sum',
						score_mode: 'sum',
					},
				},
				{
					function_score: {
						weight: SCORING_WEIGHTS.menu_item_name_weight,
						query: {
							nested: {
								path: 'menus.menu_items',
								query: {
									multi_match: {
										query: query,
										fields: ['menus.menu_items.name'],
										fuzziness: 'AUTO',
									},
								},
								score_mode: 'max',
							},
						},
						boost_mode: 'sum',
						score_mode: 'sum',
					},
				},
				{
					function_score: {
						weight: SCORING_WEIGHTS.menu_item_description_weight,
						query: {
							nested: {
								path: 'menus.menu_items',
								query: {
									multi_match: {
										query: query,
										fields: ['menus.menu_items.description'],
										fuzziness: 'AUTO',
									},
								},
								score_mode: 'max',
							},
						},
						boost_mode: 'sum',
						score_mode: 'sum',
					},
				},
				{
					function_score: {
						weight: SCORING_WEIGHTS.bid_multiplier,
						query: {
							nested: {
								path: 'word_buys',
								query: {
									bool: {
										should: queryWords.map((word) => ({
											match: { 'word_buys.word': word },
										})),
									},
								},
								score_mode: 'sum',
							},
						},
						boost_mode: 'sum',
						score_mode: 'sum',
					},
				}
			);
		}
		// **Filter by category ID (if provided)**
		if (hasCategories) {
			if (filterOperator === 'AND') {
				// All categories must match
				categoryIds.forEach((categoryId) => {
					boolQuery.bool.filter.push({
						nested: {
							path: 'menus',
							query: {
								term: { 'menus.menu_category_id': categoryId },
							},
						},
					});
				});
			} else {
				// OR: Any of the categories can match
				boolQuery.bool.filter.push({
					nested: {
						path: 'menus',
						query: {
							terms: { 'menus.menu_category_id': categoryIds },
						},
					},
				});
			}
		}
		// **Filter by radius limited to max delivery radius**
		boolQuery.bool.filter.push({
			geo_distance: {
				distance: `${radius_limited}km`,
				location: {
					lat: userLat,
					lon: userLon,
				},
			},
		});
		// **Function Scoring (Maintains All Other Scoring)**
		let functionScoreQuery = {
			function_score: {
				query: boolQuery,
				functions: [
					{
						// Boost for businesses bidding on searched words
						filter: {
							nested: {
								path: 'word_buys',
								query: {
									exists: { field: 'word_buys.word' },
								},
							},
						},
						weight: SCORING_WEIGHTS.bid_multiplier,
					},
					{
						// Boost new businesses
						field_value_factor: {
							field: 'new',
							factor: SCORING_WEIGHTS.new_business_boost,
							missing: 0,
						},
					},
				],
				score_mode: 'sum',
				boost_mode: 'sum',
			},
		};
		if (userLat && userLon) {
			functionScoreQuery.function_score.functions.push({
				// Distance-based scoring
				gauss: {
					location: {
						origin: `${userLat},${userLon}`,
						scale: SCORING_WEIGHTS.distance_scale,
						decay: SCORING_WEIGHTS.distance_decay,
					},
				},
				weight: 5,
			});
		}
		// **Apply Promo Section Tier Boost (Only for Matched Section)**
		if (hasPromoSection) {
			functionScoreQuery.function_score.functions.push({
				script_score: {
					script: {
						source: `
                            def tiers = params.boosts;
                            def boostFactor = 0.0;
                            
                            // Access promo_sections from _source since it's nested
                            if (params._source.containsKey('promo_sections')) {
                                for (promo in params._source.promo_sections) {
                                    if (promo.promo_sections_id == params.promoId) {
                                        def tier = promo.tier;
                                        boostFactor = tiers[String.valueOf(tier)];
                                        break;
                                    }
                                }
                            }
        
                            return boostFactor;  // Exponential boost
                        `,
						params: {
							boosts: SCORING_WEIGHTS.promo_section_boosts,
							promoId: promoSectionId,
						},
					},
				},
			});
		}
		// **Execute Search**
		const esResponse = await esClient.search({
			index: 'business_index',
			body: {
				from,
				size: pageSize,
				explain: true,
				track_total_hits: true,
				query: functionScoreQuery,
				_source: [
					'business_id',
					'name',
					'description',
					'_score',
					'address',
					'delivery_address',
					'popular',
					'new',
					'working_hours',
					'seats',
					'restaurant_overwhelmed',
					'logo',
					'banner',
					'telephone',
					'promo_sections',
					'online',
					'type',
					'business_local_locations',
				],
				sort: [{ _score: 'desc' }],
			},
		});
		//console.log(JSON.stringify(esResponse, null, 4));
		return {
			total: esResponse.hits.total?.value || 0,
			max_score: esResponse.hits.max_score,
			took: esResponse.took,
			results: esResponse.hits.hits.map((hit) => {
				let scores = {
					name_score: 0,
					description_score: 0,
					menu_item_name_score: 0,
					menu_item_description_score: 0,
					location_score: 0,
					promo_score: 0,
					word_score: 0,
					popularity_score: 0,
					new_business_score: 0,
				};
				if (hit._explanation) {
					extractScores(hit._explanation, scores);
				}
				return {
					business_id: hit._source.business_id,
					online: hit._source.online,
					name: hit._source.name,
					description: hit._source.description,
					score: hit._score,
					address: hit._source.address,
					delivery_address: hit._source.delivery_address,
					popular: hit._source.popular,
					new: hit._source.new,
					working_hours: hit._source.working_hours,
					seats: hit._source.seats,
					restaurant_overwhelmed: hit._source.restaurant_overwhelmed,
					logo: hit._source.logo,
					banner: hit._source.banner,
					telephone: hit._source.telephone,
					promo_sections: hit._source.promo_sections,
					type: hit._source.type,
					business_local_locations: hit._source.business_local_locations,
					scores,
				};
			}),
		};
	} catch (error) {
		console.error('❌ Error in search:', error);
		return [];
	}
}
function extractScores(explanation, scores) {
	if (!explanation || !explanation.details) return;
	explanation.details.forEach((detail) => {
		const desc = detail.description.toLowerCase();
		if (desc.includes('match name')) {
			scores.name_score += detail.value;
		} else if (desc.includes('match description')) {
			scores.description_score += detail.value;
		} else if (desc.includes('menus.menu_items.name')) {
			scores.menu_item_name_score += detail.value;
		} else if (desc.includes('menus.menu_items.description')) {
			scores.menu_item_description_score += detail.value;
		} else if (desc.includes('gauss(location')) {
			scores.location_score += detail.value;
		} else if (desc.includes('script score')) {
			if (desc.includes('promo_sections')) {
				scores.promo_score += detail.value;
			}
		} else if (desc.includes('word_buys.word')) {
			scores.word_score += detail.value;
		}
		// **Handle Field Value Functions (like 'new', 'popular')**
		else if (desc.includes('field value function')) {
			if (desc.includes("doc['popular']")) {
				scores.popularity_score += detail.value;
			} else if (desc.includes("doc['new']")) {
				scores.new_business_score += detail.value;
			}
		}
		// **Check deeper nested scores**
		extractScores(detail, scores);
	});
}
export default searchBusinesses;
