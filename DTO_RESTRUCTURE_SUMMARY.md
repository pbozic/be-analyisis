# DTO Restructure Summary

## Completed ✅

### 1. Driver/Drivers Consolidation
- ✅ Created `schemas/dto/Driver/driver.dto.ts` (response DTOs)
- ✅ Created `schemas/dto/Driver/driver.mappers.ts` (moved mappers)
- ✅ Created `schemas/dto/Driver/driver.validators.ts` (query/param validators)
- ✅ Updated `schemas/dto/Driver/DriverRequest.dto.ts` (added missing schemas)
- ✅ Created `schemas/dto/Driver/index.ts` (aggregated exports)
- ✅ Updated imports in:
  - `dao/Driver.ts`
  - `controllers/AuthController.ts`
  - `lib/helpersLib.ts`
  - `lib/driverHelpers.ts`
  - `lib/dailyMealHelpers.ts`
  - `dao/DeliveryOrder.ts`

### 2. Document/Documents Consolidation
- ✅ Created `schemas/dto/Document/DocumentRequest.dto.ts` (request DTOs)
- ✅ Created `schemas/dto/Document/index.ts` (aggregated exports)
- ✅ Updated imports in:
  - `controllers/DocumentsController.ts`
  - `dao/Document.ts`

## Next Steps

### 3. Delete Old Folders
After verifying everything works, delete:
- `schemas/dto/Drivers/` (consolidated into `Driver/`)
- `schemas/dto/Documents/` (consolidated into `Document/`)

### 4. Standardize Other Folders

Folders that need restructuring (similar pattern):

**Folders with only `.dto.ts` but missing structure:**
- `Auth/` - Has `AuthRequest.dto.ts` and `AuthResponse.dto.ts` but no `index.ts`
- `Blog/` - Multiple DTO files, no `index.ts`
- `Cashback/` - Only `cashback.dto.ts`, no `index.ts`
- `Categories/` - Only `categories.dto.ts`, no `index.ts`
- `FavoriteDrivers/` - Only `favorite-drivers.dto.ts`, no `index.ts`
- `FoodDrinks/` - Only `food-drinks.dto.ts`, no `index.ts`
- `GoogleMaps/` - Only `googlemaps.dto.ts`, no `index.ts`
- `LostItems/` - Only `lostitem.dto.ts`, no `index.ts`
- `Overwatch/` - Only `overwatch.dto.ts`, no `index.ts`
- `Referral/` - Only `referral.dto.ts`, no `index.ts`
- `Reviews/` - Only `review.dto.ts`, no `index.ts`
- `Search/` - Only `search.dto.ts`, no `index.ts`
- `Stores/` - Multiple files, check structure
- `Tax/` - Multiple files, check structure
- `Tokens/` - Only `token.dto.ts`, no `index.ts`
- `Tutorials/` - Multiple files, check structure
- `WalletFunds/` - Only `walletFunds.dto.ts`, no `index.ts`
- `Word/` - Only `word.dto.ts`, no `index.ts`

**Folders with mappers but missing DTOs:**
- `BusinessMoneyFlow/` - Only `businessMoneyFlow.mappers.ts`
- `DailyMealSubscription/` - Only `dailyMealSubscription.mappers.ts`
- `Invoices/` - Has `invoice.mappers.ts`, check for DTOs

**Folders with validation files but wrong naming:**
- `BusinessClient/` - Has `BusinessClient.validation.ts` (should be `.validators.ts`)
- `BusinessTeam/` - Has `BusinessTeam.validation.ts` (should be `.validators.ts`)

### 5. Create Central Registry

Create `schemas/dto/index.ts` that aggregates all `registerSchemas` functions:

```typescript
import type { OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';
import { registerSchemas as registerPrimitives } from './primitives.js';
import { registerSchemas as registerDriverSchemas } from './Driver/index.js';
import { registerSchemas as registerDocumentSchemas } from './Document/index.js';
// ... import all others

export function registerAllSchemas(registry: OpenAPIRegistry) {
  registerPrimitives(registry);
  registerDriverSchemas(registry);
  registerDocumentSchemas(registry);
  // ... register all others
}
```

## Standard Structure Template

Each DTO folder should follow this structure:

```
{Entity}/
  ├── {entity}.dto.ts          # Response DTOs (Base, Ref, Response schemas)
  ├── {Entity}Request.dto.ts    # Request DTOs (for controllers)
  ├── {entity}.mappers.ts       # Mappers (if needed)
  ├── {entity}.validators.ts    # Validators (query/params, if needed)
  └── index.ts                   # Re-exports and registerSchemas aggregation
```

## Import Pattern

Always import from `index.ts`:
```typescript
// ✅ GOOD
import { DriverDetail, toDriverDetail } from '../schemas/dto/Driver/index.js';

// ❌ BAD
import { DriverDetail } from '../schemas/dto/Driver/driver.dto.js';
```

## Notes

- All imports should use `.js` extension (ESM requirement)
- All schemas should be registered in OpenAPI via `registerSchemas` function
- Each folder's `index.ts` should aggregate all `registerSchemas` calls
- Mappers should validate output with `Schema.parse()`

