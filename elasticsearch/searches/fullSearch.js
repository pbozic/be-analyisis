const esClient = require("../client");

const SCORING_WEIGHTS = {
    bid_multiplier: 5,       // Boost businesses bidding on words
    popularity_boost: 2,     // Boost for popular businesses
    new_business_boost: 1.5, // Boost for new businesses
    distance_scale: "2km",   // Max distance for full score
    distance_decay: 0.5      // Distance decay factor
};

async function searchBusinesses(query, userLat, userLon, page = 1, pageSize = 10) {
    try {
        const from = (page - 1) * pageSize;
        const queryWords = query.split(" ").filter(word => word.trim() !== "");

        const esResponse = await esClient.search({
            index: 'business_index',
            body: {
                from,
                size: pageSize,
                explain: true,
                query: {
                    function_score: {
                        query: {
                            bool: {
                                should: [
                                    {
                                        multi_match: {
                                            query: query,
                                            fields: [
                                                "name^3",
                                                "description",
                                                "menus.menu_category_name^2",
                                                "menus.translations^2" // 🔥 Search translated menu categories
                                            ],
                                            fuzziness: "AUTO"
                                        }
                                    },
                                    {
                                        nested: {
                                            path: "menus.menu_items",
                                            query: {
                                                bool: {
                                                    should: [
                                                        { match: { "menus.menu_items.name": query } },
                                                        { match: { "menus.menu_items.translations": query } },
                                                        { match: { "menus.menu_items.description": query } }
                                                    ]
                                                }
                                            },
                                            score_mode: "max"
                                        }
                                    },
                                    {
                                        nested: {
                                            path: "word_buys",
                                            query: {
                                                bool: {
                                                    should: queryWords.map(word => ({
                                                        match: { "word_buys.word": word }
                                                    }))
                                                }
                                            },
                                            score_mode: "max"
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
                                                should: queryWords.map(word => ({
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
                                }
                            }
                        ],
                        score_mode: "sum",
                        boost_mode: "multiply"
                    }
                },
                sort: [{ "_score": "desc" }]
            }
        });
        console.log(JSON.stringify(esResponse, null, 4))
        return esResponse.hits.hits.map(hit => ({
            business_id: hit._source.business_id,
            name: hit._source.name,
            description: hit._source.description,
            score: hit._score
        }));

    } catch (error) {
        console.error("❌ Error in search:", error);
        return [];
    }
}

module.exports = searchBusinesses;
