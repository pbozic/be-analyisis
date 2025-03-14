const esClient = require("../client");

const SCORING_WEIGHTS = {
    bid_multiplier: 1, 
    popularity_boost: 1, 
    new_business_boost: 1, 
    distance_scale: "3km", 
    distance_decay: 0.5, 
    promo_section_boosts: {
        1: 2,    // Boost for businesses in promo section tier 1
        2: 1.5,  // Boost for businesses in promo section tier 2
        3: 1     // Boost for businesses in promo section tier 3
    }
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

        // **Filter by specific promo section**
        if (hasPromoSection) {
            boolQuery.bool.filter.push({
                nested: {
                    path: "promo_sections",
                    query: {
                        term: { "promo_sections.promo_sections_id": promoSectionId }
                    }
                }
            });
        }

        // **Function Scoring**
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
                        // Distance-based scoring
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

        // **Apply Promo Section Tier Boost**
        if (hasPromoSection) {
            functionScoreQuery.function_score.functions.push({
                filter: {
                    nested: {
                        path: "promo_sections",
                        query: {
                            term: { "promo_sections.promo_sections_id": promoSectionId }
                        }
                    }
                },
                script_score: {
                    script: {
                        source: `
                            def tiers = params.boosts;
                            def matchedTier = 1.0;
                            for (promo in params._source.promo_sections) {
                                if (promo.promo_sections_id == params.promoId) {
                                    matchedTier = tiers.containsKey(promo.tier) ? tiers.get(promo.tier) : 1.0;
                                    break;
                                }
                            }
                            return matchedTier;
                        `,
                        params: {
                            boosts: SCORING_WEIGHTS.promo_section_boosts,
                            promoId: promoSectionId
                        }
                    }
                }
            });
        }

        // **Execute Search**
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
