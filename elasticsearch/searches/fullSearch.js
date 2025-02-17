const esClient = require("../client");

const SCORING_WEIGHTS = {
	bid_multiplier: 1, // Boost businesses bidding on words
	popularity_boost: 1, // Boost for popular businesses
	new_business_boost: 1, // Boost for new businesses
	distance_scale: "3km", // Max distance for full score
	distance_decay: 0.5, // Distance decay factor
};

async function searchBusinesses(query, userLat, userLon, page = 1, pageSize = 10) {
	try {
		const from = (page - 1) * pageSize;
		const queryWords = query.split(" ").filter((word) => word.trim() !== "");

		const esResponse = await esClient.search({
            index: "business_index",
            body: {
                from,
                size: pageSize,
                explain: false,
                query: {
                    function_score: {
                        query: {
                            bool: {
                                should: [
                                    {
                                        function_score: {
                                            weight: 4,
                                            query: {
                                                multi_match: {
                                                    query: query,
                                                    fields: [
                                                        "name",                  // Boost business name
                                                        "description"           // Slightly boost description
                                                    ],
                                                    fuzziness: "AUTO"
                                                }
                                            },
                                            boost_mode: "sum",
                                            score_mode: "sum"
                                        }
                                    },
                                    {
                                        function_score: {
                                            weight: 1,
                                            query: {
                                                nested: {
                                                    path: "menus.menu_items",
                                                    query: {
                                                        multi_match: {
                                                            query: query,
                                                            fields: [
                                                                "menus.menu_items.name",         // Boost menu item names
                                                                "menus.menu_items.description" // Slight boost for descriptions
                                                            ],
                                                            fuzziness: "AUTO"
                                                        }
                                                    },
                                                    score_mode: "max"
                                                }
                                            },
                                            boost_mode: "sum",
                                            score_mode: "sum"
                                        }
                                    },
                                    {
                                        function_score: {
                                            weight: 3,
                                            query: {
                                                nested: {
                                                    path: "word_buys",
                                                    query: {
                                                        bool: {
                                                            should: queryWords.map((word) => ({
                                                                match: { "word_buys.word": word } // Boost words heavily
                                                            }))
                                                        }
                                                    },
                                                    score_mode: "sum"
                                                }
                                            },
                                            boost_mode: "sum",
                                            score_mode: "sum"
                                        }
                                    },
                                    {
                                        function_score: {
                                            weight: 10,
                                            query: {
                                                nested: {
                                                    path: "menus",
                                                    query: {
                                                        multi_match: {
                                                            query: query,
                                                            fields: [
                                                                "menus.menu_category_name",  // Heavily boost menu categories
                                                            ],
                                                            fuzziness: "AUTO"
                                                        }
                                                    },
                                                    score_mode: "sum"
                                                }
                                            },
                                            boost_mode: "sum",
                                            score_mode: "sum"
                                        }
                                    }
                                ]
                            }
                        },
                        functions: [
                            {
                                // Boost for businesses bidding on searched words
                                filter: {
                                    nested: {
                                        path: "word_buys",
                                        query: {
                                            bool: {
                                                should: queryWords.map((word) => ({
                                                    match: { "word_buys.word": word }
                                                }))
                                            }
                                        }
                                    }
                                },
                                weight: SCORING_WEIGHTS.bid_multiplier
                            },
                            {
                                // Boost based on popularity
                                field_value_factor: {
                                    field: "popular",
                                    factor: SCORING_WEIGHTS.popularity_boost,
                                    missing: 0
                                }
                            },
                            {
                                // Boost new businesses
                                field_value_factor: {
                                    field: "new",
                                    factor: SCORING_WEIGHTS.new_business_boost,
                                    missing: 0
                                }
                            },
                            {
                                // Distance-based scoring (applies only if location is provided)
                                gauss: {
                                    location: {
                                        origin: `${userLat},${userLon}`,
                                        scale: SCORING_WEIGHTS.distance_scale,
                                        decay: SCORING_WEIGHTS.distance_decay
                                    }
                                },
                                weight: 5
                            }
                        ],
                        score_mode: "sum",    // Ensures all score contributions are summed
                        boost_mode: "sum"     // Ensures query score + function score are summed instead of multiplied
                    }
                },
                _source: ["business_id", "name", "description", "_score"],
                sort: [{ _score: "desc" }]
            }
        });
        
        
		console.log(JSON.stringify(esResponse, null, 4));
		return esResponse.hits.hits.map((hit) => ({
			business_id: hit._source.business_id,
			name: hit._source.name,
			description: hit._source.description,
			score: hit._score,
		}));
	} catch (error) {
		console.error("❌ Error in search:", error);
		return [];
	}
}

module.exports = searchBusinesses;
