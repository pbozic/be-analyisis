# Documentation

## Whenever we request to generate docs in any file that is a part of the controllers folder please use the following instructions:

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


## Whenever writing dtos/types for models or controllers, please follow these rules:
1. Check schemas/primitives.ts and reuse those
2. Create THREE schema shapes per model:
   - Base: scalars only, no relations, no imports from other models.
   - Ref: minimal identity for embedding elsewhere (id + label [+ optional avatar/icon]).
   - Response/Detail: extends Base and embeds ONLY other models' Ref-variants.

3. Never import another model's Response schema. Import only its Ref.
4. Do not add relations to Ref schemas. Scalars only.
5. Do not include secrets or contact fields in public Ref; create Private variants if needed.
6. Use consistent naming: ModelBase, ModelRef, ModelResponse (or ModelDetail).
7. Provide mapper functions from Prisma payloads to DTOs. Validate with zod.parse.
8. Avoid z.lazy unless true recursion is required (trees). If recursion appears, isolate it.
9. No circular imports. If a cycle appears, replace nested Response with Ref variant.
10. No password in response DTOs. Ever.
11. Keep unknown blobs out; prefer versioned small objects or TODO:shape later.
12. put dtos in schemas/dtos/...folder structure according to model names.
13. If a dto file is too big split it into multiple files according to the schema shapes (Base, Ref, Response/Detail)
14. If a controller needs multiple models, check for existing dtos first, and if not found create new ones reusing existing dtos as much as possible.

15. Create a schemas/dto/ folder. For each model (User, Business, BusinessUser), create:
- schemas/dto/<model>/<model>.ts.

Example of schemas/dto/<model>/<model>.ts:
```/ schemas/dto/<model>/<model>.ts
import { z } from 'zod';

export const <Model>BaseSchema = z.object({
  <model>_id: z.string(),
  // scalar fields only, no relations
  created_at: z.string().datetime(),
  updated_at: z.string().datetime(),
});

export type <Model>Base = z.infer<typeof <Model>BaseSchema>;
```

### COPILOT: DTO REUSE CONTRACT
1. DTOs are controller-agnostic. Never add fields that are only needed by a single endpoint.
2. Shapes live in a central schemas/dto/ package. Controllers only consume; they never define DTOs.
3. Every model exports: Base, Ref, Detail. Relations in Detail must import other models' Ref only.
4. Reuse via composition (extend/merge), not copy. Use shared wrappers for pagination, meta, and expand.
5. No side effects or business logic in DTOs. No DB types, no services, no controller imports.
6. Keep outputs stable. If a one-off field is needed, create a dedicated “View” schema next to the controller, built from Base/Ref.
7. Date/time values are strings in ISO 8601. No raw Date in DTOs.
8. Sensitive fields are excluded by default. Add explicit Private variants if needed.
9. Prefer pick/omit from Base to keep consistency across controllers.
10. Avoid z.lazy unless real recursion. If recursion, isolate to that model’s tree schema.

ALSO ADD 

```
export function registerSchemas(registry: OpenAPIRegistry) {
	// Register request schemas
	registry.register('CreateBlogPost', CreateBlogPostSchema);
	registry.register('UpdateBlogPost', UpdateBlogPostSchema);
	registry.register('SearchBlogPosts', SearchBlogPostsSchema);

	// Register response schemas
	registry.register('BlogPost', BlogPostResponseSchema);

	// Register Editor.js schemas
	registry.register('EditorJSData', EditorJSDataSchema);
	registry.register('EditorJSBlock', EditorJSBlockSchemaKnown);
	registry.register('EditorJSUnknownBlock', fallbackBlockSchema);

	// Responses
	registry.register('BlogPostResponse', BlogPostResponseSchema);
}
``` 
to the bottom of the dto file registering all the schemas defined in that file.
<<<<<<< HEAD

=======
>>>>>>> df648d95 (fix: copilot instructions for daos and controllers)
## When asked to convert dao to typescript please follow these rules:
1. Always import dto types from schemas/dto/... and ignore types/
4. do not skip any functions from the original dao, list all functions from original and at the end check if it matches the new one
5. do not change any function logic
6. do not delete the original .js
7. export single functions inline with export async function functionName() { ... }
8. at the end export default { functionName, functionName2, ... }
9. use prisma types only when absolutely necessary, prefer dto types
10. if a function returns multiple items use dto type array, e.g. ModelResponse[]
11. we will use mappers to convert from prisma types to dto types
12. for create and update functions use dto types for input parameters
13. for functions that use filters or pagination create dto types for those inputs in schemas/dto
14. you can check prisma/includes to see how we type prisma returns in the dao functions and then use them in mapper,
15. also create mappers in schemas/dto/<model>/<model>Mapper.ts to convert from prisma types to dto types using the dto types defined in schemas/dto/<model>/<model>.ts and prisma/includes/<model>Include.ts for prisma return types


## When asked to convert controller to typescript please follow these rules:
1. Always import dto types from schemas/dto/... and ignore types/
2. use ValidatedRequest as in BlogController.ts for request validation
3. use AuthenticatedRequest from types/validatedRequest.ts for authenticated requests without any validation, check the routes that call the function to see if they are validated/authenticated
4. do not skip any functions from the original controller, list all functions from original and at the end check if it matches the new one
5. do not change any function logic
6. do not delete the original .js
7. export single functions inline with export async function functionName() { ... }
8. at the end export default { functionName, functionName2, ... }
<<<<<<< HEAD
9. if we use req.params also use ValidatedRequest with params, again check blogcontroller.ts for example
=======
>>>>>>> df648d95 (fix: copilot instructions for daos and controllers)
