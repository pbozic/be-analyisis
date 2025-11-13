# DTO Fix Checklist - ALL Folders

## Standard Structure Required
Each folder MUST have:
- `{entity}.dto.ts` - Response DTOs (Base, Ref, Response/Detail schemas)
- `{entity}.validators.ts` - ALL request schemas (body, query, params) used in routes with `validate()`
- `{entity}.mappers.ts` - Prisma response → DTO mappers (if needed)
- `index.ts` - Aggregates exports + registerSchemas

## Checklist

### ✅ COMPLETED
- [x] **Action** - ✅ Complete (dto.ts, validators.ts, mappers.ts, index.ts)
- [x] **Addon** - ✅ Complete (dto.ts, validators.ts, mappers.ts, index.ts)
- [x] **Auth** - ✅ Complete (Request.dto.ts, Response.dto.ts, index.ts)
- [x] **BusinessClient** - ✅ Complete (dto.ts, validators.ts, mappers.ts, index.ts)
- [x] **BusinessTeam** - ✅ Complete (dto.ts, validators.ts, mappers.ts, index.ts)
- [x] **BusinessUser** - ✅ Complete (dto.ts, validators.ts, mappers.ts, index.ts)
- [x] **Cashback** - ✅ Complete (dto.ts, index.ts) - needs validators.ts?
- [x] **Driver** - ✅ Complete (dto.ts, validators.ts, mappers.ts, index.ts)
- [x] **Document** - ✅ Complete (dto.ts, validators.ts, mappers.ts, index.ts)
- [x] **FavoriteBusinesses** - ✅ Complete (dto.ts, index.ts) - needs validators.ts?
- [x] **FavoriteDrivers** - ✅ Complete (dto.ts, index.ts) - needs validators.ts?
- [x] **LostItems** - ✅ Complete (dto.ts, index.ts) - needs splitting
- [x] **Vehicles** - ✅ Complete (dto.ts, index.ts) - needs splitting

### ⏳ TODO - Fix Each Folder

#### Phase 1: Folders with index.ts but need structure fixes
- [x] **DeliveryOrder** - ✅ Fixed - Consolidated into DeliveryOrders (dto.ts, validators.ts, mappers.ts, index.ts)
- [x] **Address** - ✅ Fixed (address.ts, userAddress.ts, validators.ts, mappers.ts, index.ts)
- [x] **Business** - ✅ Fixed (business.dto.ts, business.validators.ts, business.mappers.ts, business.ts legacy, index.ts)
- [x] **Category** - ✅ Fixed (dto.ts, validators.ts, mappers.ts, index.ts) - Consolidated Categories/ into Category/
- [x] **DeliveryDrivers** - ✅ Fixed (dto.ts, validators.ts, mappers.ts, index.ts)
- [x] **DeliveryOrders** - ✅ Fixed (dto.ts, validators.ts, mappers.ts, index.ts)
- [x] **DeviceAssignment** - ✅ Fixed (dto.ts, validators.ts, index.ts)
- [x] **ElectronicDevice** - ✅ Fixed (dto.ts, validators.ts, index.ts)
- [x] **Files** - ✅ Fixed (dto.ts, validators.ts, mappers.ts, index.ts)
- [x] **Group** - ✅ Fixed (dto.ts, validators.ts, mappers.ts, index.ts)
- [x] **Invoices** - ✅ Fixed (dto.ts, validators.ts, mappers.ts, index.ts)
- [x] **LateEvents** - ✅ Fixed (dto.ts, validators.ts, mappers.ts, index.ts)
- [x] **Menu** - ✅ Fixed (dto.ts, validators.ts, mappers.ts, index.ts) - Consolidated menu/menucategory/menuitem
- [x] **OrderLobby** - ✅ Fixed (dto.ts, validators.ts, mappers.ts, index.ts)
- [x] **Subscription** - ✅ Fixed (dto.ts, validators.ts, mappers.ts, index.ts)
- [x] **TaxiOrders** - ✅ Fixed (dto.ts, validators.ts, mappers.ts, index.ts)
- [x] **User** - ✅ Fixed (user.ts, user.validators.ts, transaction.ts, allowance.ts, index.ts) - Renamed UserRequest.dto.ts
- [x] **VehicleLink** - ✅ Fixed (validators.ts, index.ts) - Only has request schemas
- [x] **WalletFunds** - ✅ Fixed (dto.ts, validators.ts, index.ts)

#### Phase 2: Folders missing index.ts
- [x] **Blog** - ✅ Fixed (blog.dto.ts, blog.validators.ts, blog.dao.dto.ts, index.ts) - Consolidated blogpost/blogcategory/blogtag
- [x] **BusinessMoneyFlow** - ✅ Fixed (dto.ts, validators.ts, mappers.ts, index.ts)
- [x] **BusinessPremise** - ✅ Fixed (dto.ts, validators.ts, index.ts)
- [x] **Categories** - ✅ Consolidated into Category/
- [x] **DailyMeal** - ✅ Fixed (dto.ts, validators.ts, index.ts) - Moved DAO schemas to validators.ts
- [x] **DailyMealCategory** - ✅ Fixed (dto.ts, validators.ts, mappers.ts, index.ts) - Consolidated mappers
- [x] **DailyMealInstance** - ✅ Fixed (dto.ts, validators.ts, mappers.ts, index.ts)
- [x] **DailyMealSubscription** - ✅ Fixed (dto.ts, validators.ts, mappers.ts, index.ts)
- [x] **DeliveryOrder** - ✅ Consolidated into DeliveryOrders/
- [x] **FoodDrinks** - ✅ Fixed (dto.ts, validators.ts, mappers.ts, index.ts)
- [x] **GoogleMaps** - ✅ Fixed (dto.ts, index.ts) - No validators needed
- [x] **LineItems** - ✅ Fixed (dto.ts, validators.ts, mappers.ts, index.ts)
- [x] **LostItems** - ✅ Fixed (dto.ts, validators.ts, mappers.ts, index.ts)
- [x] **Overwatch** - ✅ Fixed (dto.ts, index.ts) - No validators needed
- [x] **PromoAnalytics** - ✅ Fixed (dto.ts, mappers.ts, index.ts)
- [x] **Referral** - ✅ Fixed (dto.ts, mappers.ts, index.ts)
- [x] **Reviews** - ✅ Fixed (dto.ts, validators.ts, mappers.ts, index.ts)
- [x] **ScoringPoints** - ✅ Fixed (dto.ts, validators.ts, mappers.ts, index.ts)
- [x] **Search** - ✅ Fixed (dto.ts renamed to validators.ts, index.ts)
- [x] **Stores** - ✅ Fixed (dto.ts, validators.ts, mappers.ts, index.ts)
- [x] **Stripe** - ✅ Fixed (event.dto.ts, webhookEvents.dto.ts, index.ts)
- [x] **TableReservation** - ✅ Fixed (dto.ts, validators.ts, mappers.ts, index.ts)
- [x] **Tax** - ✅ Fixed (dto.ts, validators.ts, mappers.ts, index.ts)
- [x] **Taxi** - ✅ Fixed (dto.ts, validators.ts, mappers.ts, index.ts)
- [x] **Tokens** - ✅ Fixed (dto.ts, mappers.ts, index.ts)
- [x] **Transport** - ✅ Fixed (dto.ts, mappers.ts, index.ts) - No validators needed (schemas in Business)
- [x] **Tutorials** - ✅ Fixed (dto.ts, validators.ts, mappers.ts, index.ts)
- [x] **UserAddress** - ✅ Fixed (dto.ts, validators.ts, mappers.ts, index.ts)
- [x] **UserFavoriteDriver** - ✅ Fixed (dto.ts, validators.ts, mappers.ts, index.ts)
- [x] **UserRoles** - ✅ Fixed (all files split into dto.ts/validators.ts, index.ts)
- [x] **Vehicles** - ✅ Fixed (dto.ts, validators.ts, mappers.ts, index.ts)
- [x] **Word** - ✅ Fixed (dto.ts, validators.ts, index.ts)

#### Phase 3: Special folders
- [ ] **common** - Shared DTOs - may not need standard structure
- [ ] **reservations** - Complex nested structure - needs review

## Notes
- `.validators.ts` should contain ALL schemas used in routes with `validate()` function
- `.dto.ts` should contain Response/Base/Ref schemas only
- `.mappers.ts` should contain Prisma → DTO transformation functions
- `index.ts` should aggregate all exports and call registerSchemas

