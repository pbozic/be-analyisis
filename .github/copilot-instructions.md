
# Documentation 
Whenerver we request genereate docs in any file that is a part of the controllers folder please use the following instructions:

1. generate docs in an openapi style like the example below, also include the ./prisma/schema.prisma

/**
 * POST /promo-sections
 * @tag PromoSection
 * @summary Create a new promo section
 * @description Creates a new promo section and associated Stripe product and pricing.
 * @operationId createPromoSection
 * @bodyDescription The promo section details to create
 * @bodyContent {
 *   "key": "value",
 *      ....
 * } application/json
 * @bodyRequired
 * @response 200 - Promo section created successfully
 * @responseContent {object} 200.application/json
 * @responseExample 200.application/json {
 *   "key": "value",
 *      ....
 * }
 * @response 500 - Error creating new promo section
 */

2. Check the dao functions that are called and add @prisma_model to the docs, the prisma model should be visible from the dao functions await prisma.[model_name] the prisma models are defined in ./prisma/schema.prisma

3. to get request body example check the prisma model specification, and include all columns defined there, you can skip created_at and updated_at

4. some values might be calcuclated in the controller function itself so keep a track of that

5. for response you can also check the prisma model of that function we will usualy return all fields, if we include (relations) you can check that prisma model that was included and also include all fields from there

6. please do not overwrite the code of the function when doing all this