const esClient = require("../client");

async function searchBusinessesByCategory(category, userLat, userLon, page = 1, pageSize = 10) {
    try {
        const from = (page - 1) * pageSize;

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
                                filter: [
                                    {
                                        nested: {
                                            path: "menus",
                                            query: {
                                                match: { "menus.menu_category_id": category }
                                            },
                                            score_mode: "none" // Ensures this is a filter, not a score factor
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
                                                should: [
                                                    { exists: { field: "word_buys.word" } }
                                                ]
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
        console.error("❌ Error in search by category:", error);
        return [];
    }
}

module.exports = searchBusinessesByCategory;
