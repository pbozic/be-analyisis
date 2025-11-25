# DAO → Mapper Integration Tests

This directory contains integration tests that validate the complete data flow:

```
Mock Data (Prisma-shaped) → Mapper → Zod Schema Validation
```

## Purpose

These tests ensure that:
1. Mappers correctly transform Prisma data to DTO format
2. Zod schemas successfully validate the mapped output
3. There are no mismatches between Prisma types, mapper logic, and DTO schemas

**Note:** Tests use mock data instead of a real database for speed and reliability.

## Running Tests

```bash
# Run all integration tests
npm run test:integration

# Run specific test
npx jest tests/integration/example.test.ts

# Run with coverage
npm run test:integration -- --coverage
```

## Test Structure

Each test follows this pattern:

```typescript
it('mapper → schema validation', async () => {
  // 1. Import mapper and schema
  const { toGetBusinessResponse } = await import('../../schemas/dto/Business/business.mappers.ts');
  const { BusinessResponseDto } = await import('../../schemas/dto/Business/business.dto.ts');
  
  // 2. Use mock Prisma data
  const mockData = mockPrismaData.business;
  
  // 3. Map the result
  const mapped = toGetBusinessResponse(mockData);
  
  // 4. Validate with Zod schema
  const validated = BusinessResponseDto.parse(mapped);
  expect(validated).toBeDefined();
});
```

## Mock Data

Mock data is defined in `tests/integration/mock-prisma.ts` and represents typical Prisma query results including:
- Scalar fields
- Nested relations (address, business_details, etc.)
- Arrays of related objects
- Nullable fields

To add mock data for a new model:
1. Open `mock-prisma.ts`
2. Add sample data matching your Prisma schema
3. Update the `createMockPrisma()` function if needed

## Common Issues

### "No data in DB, skipping test"
The test database is empty. Seed it with test data or use fixtures.

### "Cannot find mapper for DAO function"
The generator couldn't match the DAO function to a mapper. Manually specify the mapper in the test.

### Zod validation fails
The mapper output doesn't match the schema. This indicates:
- Missing fields in the mapper
- Incorrect data types
- Missing Prisma includes in the DAO

Check the Zod error message for details on what's missing or incorrect.

## Next Steps

After fixing any failures:
1. Commit the passing tests
2. Add tests to CI/CD pipeline
3. Run before deploying to catch regressions
