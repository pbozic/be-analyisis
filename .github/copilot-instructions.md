# Documentation

Whenever we request to generate docs in any file that is a part of the controllers folder please use the following instructions:

1. generate docs in an openapi style like the example below, also include the ./prisma/schema.prisma

/\*\*

- GET /promo-sections/:id
- @tag PromoSection
- @summary Get a promo section by ID
- @description Retrieves a promo section by its ID.
- @operationId getPromoSectionById
- @pathParam {string} id - The ID of the promo section to retrieve.
- @response 200 - Promo section retrieved successfully
- @responseContent {object} 200.application/json
- @response 404 - Promo section not found
- @responseContent {object} 404.application/json
- @response 500 - Error retrieving promo section
- @responseContent {object} 500.application/json
- @prisma_model promo_section
  \*/

2. Check the dao functions that are called and add @prisma_model to the docs, the prisma model should be visible from the dao functions await prisma.[model_name] the prisma models are defined in ./prisma/schema.prisma

3. to get request body example check the prisma model specification, and include all columns defined there, you can skip created_at and updated_at

4. some values might be calculated in the controller function itself so keep a track of that

5. for response you can also check the prisma model of that function we will usually return all fields, if we include (relations) you can check that prisma model that was included and also include all fields from there

6. please do not overwrite the code of the function when doing all this
