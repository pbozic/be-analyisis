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

## Rules for dto refactor
Full DTO / Mappers / Validators Refactor — Detailed Plan
Purpose

Standardize DTOs, mappers, validators, controllers and DAOs.
Keep route-level runtime body validation (middleware/zod.js).
Type params via zod z.infer and ValidatedRequest<BodySchema, ParamType> in controllers (no runtime param middleware).
DAOs return zod-validated DTOs only; expose reusable Prisma include constants for mapper typing.
Register every schema (public + DAO-only) with registerSchemas(registry).
Provide per-model index.ts aggregator to export DTOs, mappers, validators, and registration.
Contents

Branch / workflow
Discovery / inventory
File layout & naming conventions
DTO shape rules & registration
Validators rules (route runtime + param typing with z.infer)
Routes & controllers usage pattern
DAO include reuse & mapper typing
Mappers rules
Testing / CI
.js → .ts migration plan
Automation & scaffolding
Backwards-compatibility & TODOs
Progress tracking / example commit plan
Concrete examples (validator file, route use, controller signature, dao include, mapper, registerSchemas snippet)
1) Branch & workflow
Branch: feat/dtos-refactor
Make small per-model commits; present diffs for review before pushing.
Suggested flow:
git checkout -b feat/dtos-refactor
stage/commit per model
push & open PR for review at the end of all operations
2) Discovery / inventory
Scan dao for prisma calls and collect unique include/select shapes per model.
Commands:
rg "prisma.[a-zA-Z_]+.(findUnique|findMany|findFirst)" dao -n
Produce report: model → include permutations → files using them → prioritize by usage.
3) File layout & naming conventions (per model)
Folder: schemas/dto/<model>/
<model>.dto.ts — ModelBase, ModelRef, ModelResponse (split if big)
<model>.deep.dto.ts (opt.) — DAO-only deep shapes (if large)
<model>.mappers.ts — typed mappers
<model>.validators.ts — Create / Update / request schemas (AnyBody catch-all)
index.ts — re-exports + registerSchemas(registry) aggregator
DAO: dao/<Model>.ts — export const modelWithXInclude = { ... } as const; export type ModelWithXInclude = typeof modelWithXInclude;
4) DTO shape rules (strict)
Reuse primitives from primitives.ts.
Provide three canonical schemas per model:
<Model>Base — scalars only (no relations).
<Model>Ref — id + label(s) only (scalars).
<Model>Response — extends Base and embeds only other models' <OtherModel>Ref.
Never import another model’s Response. Use only Ref.
Dates in DTOs are ISO strings (string).
No secrets (passwords) in Response DTOs.
Avoid z.lazy unless true recursion; isolate tree recursion.
No circular imports; replace nested Response with Ref when needed.
Validate mapper outputs with zod.parse.
Register all schemas defined in the file using registerSchemas(registry) (include DAO-only deep schemas).
Example register block to include in dto file bottom (all schemas declared there must be registered):

5) Validators rules (exact)
Body validation: runtime on route only with validate(schema) from middleware/zod.js (do not move to controllers).
Params validation: do NOT add runtime param middleware. Instead:
Export a zod param schema in the validators file and export a TypeScript type via export type ParamType = z.infer<typeof ParamSchema>.
Use that ParamType in controller signature ValidatedRequest<BodySchema, ParamType>.
For ambiguous endpoints (controllers pass whole req.body to DAO), create:
export const AnyBodySchema = z.any(); // TODO: catch-all validator
Put validate(AnyBodySchema) on the route and mark TODO for stricter validation later.
When writing validators, inspect controller & DAO to derive the expected body shape.
6) Routes & controller usage pattern
Route: attach validate(BodySchema) middleware for body validation.
No runtime param middleware — controller uses typed ValidatedRequest<..., ParamType> and z.infer for param type.
Authenticated routes: use AuthenticatedRequest<BodySchema, ParamType> (appends user).
Controllers do not call schema.safeParse — route middleware already enforced validity; if controller still does safeParse, mark for cleanup.
Example route (body validation on route):

Example controller signature (params typed via z.infer exported type):

Note: first generic to ValidatedRequest can be typeof BodySchema (to keep compile-time knowledge of the zod schema shape), while the params generic is the z.infer exported type.

7) DAO include reuse & typing pattern
In DAO file export include constant typed as const and export its type:
Use include const in prisma calls and cast result:
Mapper will accept the same typed payload.
8) Mappers rules
Mappers in <model>.mappers.ts.
Each mapper parameter is exactly typed: Prisma.<model>GetPayload<{ include: typeof daoInclude }> (import include type from DAO).
Create the Include types in prisma/includes/*model.ts
Convert Dates → ISO strings; normalize nullable scalars; map children to Ref shapes unless mapper is DAO-specific deep response.
Validate output via zod.parse(TargetResponseSchema).
Provide:
toModelResponse (for shallow/ref includes)
toModelWithXResponse (DAO-specific deep)
Keep mappers pure and side-effect free.
Example mapper signature:

9) Validators file placement & content
File: schemas/dto/<model>/<model>.validators.ts
Export:
CreateModelSchema, UpdateModelSchema
Param zod schema(s) and export type via z.infer
AnyBodySchema = z.any() for ambiguous bodies (TODO)
registerSchemas(registry) to register these validator schemas for docs
Example:

10) Controllers
Controller handlers typed with ValidatedRequest<BodySchema, ParamType> where ParamType is z.infer exported from validators file.
Controllers should not call schema.safeParse for body (route-level middleware already did). If they still do, mark for future cleanup.
For authenticated endpoints use AuthenticatedRequest<BodySchema, ParamType>.
Example signature using z.infer for params:

11) Schema registration & index.ts aggregator
Each DTO folder must have index.ts that re-exports DTOs, mappers, validators and provides registerSchemas(registry) which calls all register functions for the folder (including DAO-only deep shapes).
This is required by your OpenAPI registry approach and the copilot-instructions.
Example:

12) Tests & CI
Unit tests for mappers: create typed mock Prisma payloads → call mapper → expect zod-validated DTO (dates ISO, null normalization).
Smoke tests for controllers: test route-level validate(schema) middleware + controller with stubbed DAO.
Run npx tsc --noEmit and tests before merging PR.
13) .js → .ts migration plan
After DTOs/mappers/validators stable:
Convert DAOs (they now use DTOs/mappers and exported include types).
Convert controllers (use ValidatedRequest / AuthenticatedRequest types).
Convert routes and remaining code.
Keep changes small; run typecheck after each step.
14) Automation & scaffolding
Create generator to scaffold DTOs/mappers/validators from prisma/schema.prisma.
Generate:
Base/Ref/Response zod schemas
validator stubs
mapper skeleton typed to DAO include
index.ts registerSchemas skeleton
Add helper utilities: toIsoString, mapIncludedArray, mapIncludedRef.
15) Backwards-compatibility & TODOs
Temporarily preserve legacy flattened props returned by DAOs; add // TODO: remove legacy flattened props once controllers migrated.
Use AnyBodySchema for ambiguous whole-body forwards; mark // TODO: catch-all validator.
Keep a per-model TODO list tracking remaining work.
16) Progress tracking (per-model checklist)
Scanned
DTO created
Mappers created
Validators created
DAO updated (include exported)
Routes updated (validate on route)
Controllers updated (ValidatedRequest + param type)
Tests added
.js → .ts conversion done
Done
17) Prioritization (first-pass)
Business (full example)
User / business_users
Menu / MenuItem / MenuCategory
Addon, Document, Booking, Reservation
Others by usage
18) Example commit plan for “go business”
Create feat/dtos-refactor branch
Add business.dto.ts and business.deep.dto.ts if needed
Add business.mappers.ts
Add business.validators.ts (includes AnyBodySchema where needed)
Add index.ts with registerSchemas
Update Business.ts to export businessWithStoresInclude and change getBusinessById to use typed Prisma payload and mapper
Update an example route/controller to use validate(schema) on route and ValidatedRequest<typeof BodySchema, ParamType> in controller signature (params typed via z.infer)
Run typecheck/tests and present diffs for review
19) OpenAPI / Controller docs (follow .github/copilot-instructions.md)
When generating docs in controller files:
Keep existing controller code unchanged.
Add OpenAPI-style block above handler (see examples in BlogController.ts).
Add @prisma_model <model> derived from the DAO (find await prisma.<model> in DAO).
For request body example, use prisma model columns (skip created_at/updated_at).
For response, include fields returned by DAO (including included relations — use their prisma models).
Always include ./prisma/schema.prisma reference in docs comment block.
Do not overwrite function code; only add/adjust doc comment block if missing.
20) Final notes & rules summary
Body validation remains on routes via validate(schema) (middleware/zod.js).
Params are typed via z.infer<typeof ParamSchema> and used in controller signatures (ValidatedRequest<..., ParamType>); no runtime param middleware.
Export AnyBodySchema = z.any() when controller/DAO patterns cannot be narrowed immediately; attach to route and mark TODO.
DAOs must export include consts (as const) and mappers must use those typeof types for strict typing.
Register all schemas (including DAO-only) via registerSchemas(registry) in each DTO folder.
Present diffs/commits per model before pushing.