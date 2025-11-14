# Complete DTO Inventory & Fix Plan

## Standard Structure (Target)
```
{Entity}/
  ├── {entity}.dto.ts          # Response DTOs only (Base, Ref, Response)
  ├── {entity}.validators.ts   # ALL request validators (body, query, params)
  ├── {entity}.mappers.ts      # Mappers (if needed)
  └── index.ts                  # Re-exports + registerSchemas aggregation
```

## Inventory by Status

### ✅ CORRECT (Already Fixed)
- **Driver/** - ✅ Complete (driver.dto.ts, driver.mappers.ts, driver.validators.ts, index.ts)
- **Document/** - ✅ Complete (document.dto.ts, document.mappers.ts, document.validators.ts, index.ts)
- **Business/** - ✅ Complete (business.dto.ts, business.mappers.ts, business.validators.ts, index.ts)

### ⚠️ NEEDS FIXING

#### 1. Missing index.ts or incomplete index.ts
- **Action/** - Has action.ts (mixed response + request), action.mappers.ts, index.ts (just re-exports)
- **Addon/** - Has addon.ts, addon.mappers.ts, index.ts (needs check)
- **Address/** - Has address.ts, address.mappers.ts, index.ts (needs check)
- **Auth/** - Has AuthRequest.dto.ts, AuthResponse.dto.ts, NO index.ts
- **Blog/** - Multiple files, NO index.ts
- **BusinessClient/** - Has businessClient.dto.ts, businessClient.mappers.ts, BusinessClient.validation.ts (wrong name), index.ts
- **BusinessMoneyFlow/** - Only businessMoneyFlow.mappers.ts, missing dto.ts
- **BusinessPremise/** - Has businessPremise.dto.ts, index.ts (needs check)
- **BusinessTeam/** - Has businessTeam.dto.ts, businessTeam.mappers.ts, BusinessTeam.validation.ts (wrong name), index.ts
- **BusinessUser/** - Has businessUser.ts, businessUser.mappers.ts, BusinessUser.validation.ts (wrong name), BusinessUserRequest.dto.ts, index.ts
- **Cashback/** - Only cashback.dto.ts, missing index.ts
- **Categories/** - Only categories.dto.ts, missing index.ts
- **Category/** - Has category.dto.ts, category.mappers.ts, index.ts (needs check)
- **DailyMeal/** - Only dailymeal.dao.dto.ts, missing index.ts
- **DailyMealCategory/** - Has daily-meal-category.dto.ts, dailyMealCategory.mappers.ts, missing index.ts
- **DailyMealInstance/** - Has dailyMealInstance.dto.ts, dailyMealInstance.mappers.ts, missing index.ts
- **DailyMealSubscription/** - Only dailyMealSubscription.mappers.ts, missing dto.ts, index.ts
- **DeliveryDrivers/** - Has deliveryDriver.dto.ts, index.ts (needs check)
- **DeliveryOrder/** - Has DeliveryOrderRequest.dto.ts, missing index.ts
- **DeliveryOrders/** - Has deliveryOrder.dto.ts, index.ts (needs check)
- **DeviceAssignment/** - Has deviceAssignment.dto.ts, index.ts (needs check)
- **Documents/** - Has document.dto.ts (should be deleted, consolidated into Document/)
- **Drivers/** - Has driver.dto.ts, index.ts (should be deleted, consolidated into Driver/)
- **ElectronicDevice/** - Has electronicDevice.dto.ts, index.ts (needs check)
- **FavoriteBusinesses/** - Only favorite-businesses.dto.ts, missing index.ts
- **FavoriteDrivers/** - Only favorite-drivers.dto.ts, missing index.ts
- **Files/** - Has file.dto.ts, file.mappers.ts, index.ts (needs check)
- **FoodDrinks/** - Only food-drinks.dto.ts, missing index.ts
- **GoogleMaps/** - Only googlemaps.dto.ts, missing index.ts
- **Group/** - Has group.mappers.ts, groupUser.ts, requests.ts, index.ts (needs check)
- **Invoices/** - Has invoice.mappers.ts, index.ts, missing dto.ts
- **LateEvents/** - Has lateEvents.dto.ts, late-events.mappers.ts, index.ts (needs check)
- **LineItems/** - Only line-items.dto.ts, missing index.ts
- **LostItems/** - Only lostitem.dto.ts, missing index.ts
- **Menu/** - Has menu.dto.ts, menu.mappers.ts, menucategory.dto.ts, menuCategory.mappers.ts, menuitem.dto.ts, index.ts (needs check)
- **OrderLobby/** - Has multiple files, index.ts (needs check)
- **Overwatch/** - Only overwatch.dto.ts, missing index.ts
- **Payments/** - Multiple files, needs check
- **Promo/** - Multiple files, needs check
- **PromoAnalytics/** - Only promo-analytics.dto.ts, missing index.ts
- **Referral/** - Only referral.dto.ts, missing index.ts
- **Reviews/** - Multiple files, needs check
- **ScoringPoints/** - Multiple files, needs check
- **Search/** - Only search.dto.ts, missing index.ts
- **Stores/** - Multiple files, needs check
- **Stripe/** - Multiple files, needs check
- **Subscription/** - Multiple files, index.ts (needs check)
- **TableReservation/** - Multiple files, needs check
- **Tax/** - Multiple files, needs check
- **Taxi/** - Only taxiorder.dto.ts, missing index.ts
- **TaxiOrders/** - Multiple files, index.ts (needs check)
- **Tokens/** - Only token.dto.ts, missing index.ts
- **Transport/** - Multiple files, needs check
- **Tutorials/** - Multiple files, needs check
- **User/** - Multiple files, index.ts (needs check)
- **UserAddress/** - Multiple files, needs check
- **UserFavoriteDriver/** - Only userFavoriteDriver.mappers.ts, missing dto.ts, index.ts
- **UserRoles/** - Multiple files, needs check
- **VehicleLink/** - Multiple files, index.ts (needs check)
- **Vehicles/** - Only vehicle.dto.ts, missing index.ts
- **WalletFunds/** - Multiple files, index.ts (needs check)
- **Word/** - Only word.dto.ts, missing index.ts

#### 2. Wrong file naming
- **BusinessClient.validation.ts** → should be **businessClient.validators.ts**
- **BusinessTeam.validation.ts** → should be **businessTeam.validators.ts**
- **BusinessUser.validation.ts** → should be **businessUser.validators.ts**

#### 3. Mixed response + request in same file
- **Action/action.ts** - Has both response DTOs and request validators (should be split)

#### 4. Duplicate folders (to delete)
- **Drivers/** - Consolidated into Driver/
- **Documents/** - Consolidated into Document/

#### 5. Missing files
- Many folders missing index.ts
- Some folders missing dto.ts (only have mappers)
- Some folders missing validators.ts

## Fix Priority

### Phase 1: Critical (Duplicates & Wrong Naming)
1. Delete Drivers/ folder (consolidated)
2. Delete Documents/ folder (consolidated)
3. Rename validation.ts → validators.ts (3 files)

### Phase 2: High Priority (Missing Core Files)
4. Create missing index.ts files
5. Split mixed files (Action/action.ts)
6. Create missing dto.ts files where only mappers exist

### Phase 3: Standardization
7. Ensure all folders follow standard structure
8. Ensure all registerSchemas are aggregated
9. Fix all imports

