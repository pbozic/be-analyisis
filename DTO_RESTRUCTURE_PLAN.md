# DTO Restructure Plan

## Standard Structure

Each DTO folder should have:
```
{Entity}/
  ├── {entity}.dto.ts          # Response DTOs (Base, Ref, Response schemas)
  ├── {Entity}Request.dto.ts    # Request DTOs (for controllers)
  ├── {entity}.mappers.ts       # Mappers (if needed)
  ├── {entity}.validators.ts    # Validators (query/params, if needed)
  └── index.ts                   # Re-exports and registerSchemas aggregation
```

## Consolidations Needed

1. **Driver/Drivers** → `Driver/`
   - Merge `Driver/DriverRequest.dto.ts` + `Drivers/driver.dto.ts`
   - Keep mappers in `driver.mappers.ts`
   - Create `driver.validators.ts` if needed

2. **Document/Documents** → `Document/`
   - Merge `Document/document.dto.ts` (response) + `Documents/document.dto.ts` (request)
   - Keep mappers in `document.mappers.ts`

## Files to Create/Update

### Missing Files Analysis
- Folders with only `.dto.ts` but no `index.ts`
- Folders with only `.mappers.ts` but no `.dto.ts`
- Folders with validation files but wrong naming

