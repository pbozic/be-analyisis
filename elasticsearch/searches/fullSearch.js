const esClient = require("../client");

const SCORING_WEIGHTS = {
	bid_multiplier: 1, // Boost businesses bidding on words
	popularity_boost: 1, // Boost for popular businesses
	new_business_boost: 1, // Boost for new businesses
	distance_scale: "3km", // Max distance for full score
	distance_decay: 0.5, // Distance decay factor
};

async function searchBusinesses(query, userLat, userLon, categoryIds = [], radius = null, promoSectionId = null, page = 1, pageSize = 10) {
    try {
        const from = (page - 1) * pageSize;
        const queryWords = query ? query.split(" ").filter((word) => word.trim() !== "") : [];
        const hasQuery = queryWords.length > 0;
        const hasCategories = categoryIds.length > 0;
        const hasRadius = radius !== null;
        const hasPromoSection = promoSectionId !== null;

        // Base Query
        const boolQuery = {
            bool: {
                must: [],
                filter: [],
                should: [],
                must_not: []
            }
        };

        // Filter by promo section ID if provided
        if (hasPromoSection) {
            boolQuery.bool.filter.push({
                terms: { promo_sections: [promoSectionId] } // Ensures only businesses with the given promo_section ID are included
            });
        }

        // Add Text Search Only If Query Exists
        if (hasQuery) {
            boolQuery.bool.should.push(
                {
                    function_score: {
                        weight: 4,
                        query: {
                            multi_match: {
                                query: query,
                                fields: ["name", "description"],
                                fuzziness: "AUTO"
                            }
                        },
                        boost_mode: "sum",
                        score_mode: "sum"
                    }
                },
                {
                    function_score: {
                        weight: 2,
                        query: {
                            nested: {
                                path: "menus.menu_items",
                                query: {
                                    multi_match: {
                                        query: query,
                                        fields: ["menus.menu_items.name"],
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
                        weight: 1,
                        query: {
                            nested: {
                                path: "menus.menu_items",
                                query: {
                                    multi_match: {
                                        query: query,
                                        fields: ["menus.menu_items.description"],
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
                                            match: { "word_buys.word": word }
                                        }))
                                    }
                                },
                                score_mode: "sum"
                            }
                        },
                        boost_mode: "sum",
                        score_mode: "sum"
                    }
                }
            );
        }

        // Add Category ID Filter If Provided
        if (hasCategories) {
            boolQuery.bool.filter.push({
                nested: {
                    path: "menus",
                    query: {
                        terms: { "menus.menu_category_id": categoryIds } // Filter by category IDs
                    }
                }
            });
        }

        // Add Radius Filter If Provided
        if (hasRadius) {
            boolQuery.bool.filter.push({
                geo_distance: {
                    distance: `${radius}km`, // Filters businesses within the given radius
                    location: {
                        lat: userLat,
                        lon: userLon
                    }
                }
            });
        }

        // Function Scoring (Applies Always)
        const functionScoreQuery = {
            function_score: {
                query: boolQuery,
                functions: [
                    {
                        // Boost for businesses bidding on searched words
                        filter: {
                            nested: {
                                path: "word_buys",
                                query: {
                                    exists: { field: "word_buys.word" }
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
                        // Distance-based scoring (if location provided)
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
                score_mode: "sum",
                boost_mode: "sum"
            }
        };

        // Execute Search
        const esResponse = await esClient.search({
            index: "business_index",
            body: {
                from,
                size: pageSize,
                explain: false,
                query: functionScoreQuery,
                _source: [
                    "business_id", "name", "description", "_score", "address", "delivery_address",
                    "popular", "new", "working_hours", "seats", "restaurant_overwhelmed",
                    "logo", "banner", "telephone", "promo_sections"
                ],
                sort: [{ _score: "desc" }]
            }
        });

        console.log(JSON.stringify(esResponse, null, 4));

        return esResponse.hits.hits.map((hit) => ({
            business_id: hit._source.business_id,
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
            promo_sections: hit._source.promo_sections
        }));
    } catch (error) {
        console.error("❌ Error in search:", error);
        return [];
    }
}

module.exports = searchBusinesses;


module.exports = searchBusinesses;


