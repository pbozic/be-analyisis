# Elasticsearch in klikni-be

Elasticsearch is a distributed search and analytics engine designed for fast, full‑text search, faceting, aggregations, and geo queries. It stores documents in schema‑flexible indexes and lets you query across text, numbers, dates, and geospatial data with relevance scoring.

## Usage

- Index name: `business_index`
- One document per business. This document consolidates:
    - Core business info (name, description, status/flags, location)
    - Merchant module content (menus, categories, menu items)
    - Promo context (promo sections, word buys)
    - Local ordering windows (business_local_locations)
    - Reservation module content (locations and services)
- Indexer: `elasticsearch/indexes/businessIndex.js`
    - Creates/updates the index with mappings
    - Reads data from Postgres via Prisma and upserts documents with `_id = business_id`
- Search: `elasticsearch/searches/fullSearch.js`
    - Full‑text matching on name/description, nested menu item names/descriptions, and word buys
    - Geo filtering and distance‑based scoring using document `location`
    - Optional filters (categories via nested menus, promo sections, business type)
    - SPECIAL handling for LOCAL businesses: only show if a future local window exists in `business_local_locations`

---

## business_index

```mermaid
erDiagram
    business_index {
        keyword business_id
        string name
        string description
        boolean active
        boolean online
        object working_hours
        object delivery_address
        object address
        boolean overwhelmed
        geo_point location
    }
    types {
        string type
    }
    menus {
        boolean isDailyMeal
        date date
        keyword menu_category_id
        string menu_category_name
        string translations
    }
    menu_items {
        keyword menu_item_id
        string name
        string translations
        string description
    }
    promo_sections {
        keyword promo_sections_id
        integer tier
        date expires_at
    }
    word_buys {
        keyword word_id
        string word
        string translations
        double price
        date expires_at
    }
    business_local_locations {
        object address
        geo_point geo
        date time
    }
    reservation_locations {
        object address
        geo_point geo
    }
    reservation_services {
        keyword service_id
        string name
        string translations
        string description
        keyword service_category_id
    }
    reservation_service_categories {
        keyword service_category_id
        string name
        string translations
    }
    business_index ||--o{ business_local_locations : has
    business_index ||--|{ types : has
    business_index ||--o{ menus : has
    menus ||--o{ menu_items : contains
    business_index ||--o{ promo_sections : has
    business_index ||--o{ word_buys : has
    business_index ||--o{ reservation_locations : has
    business_index ||--o{ reservation_services : has
    business_index ||--o{ reservation_service_categories : has
    reservation_service_categories ||--o{ reservation_services : categorizes
```

## menu_item_index

Purpose

- A lean index optimized for menu item search.

Document shape

- One document per current menu item version

```mermaid
erDiagram
    menu_item_index {
        keyword   menu_item_id
        keyword   menu_category_id
        string    name
        string    translations
        string    description
    }
    menu_category {
        keyword   menu_category_id
        string    name
        string    translations
    }
    menu_category ||--o{ menu_item_index : categorizes
```

## service_index

Purpose

- Fast search for reservation services by name/description.

Document shape

- One document per service

```mermaid
erDiagram
    service_index {
        keyword   service_id
        keyword   service_category_id
        string    name
        string    translations
        string    description
    }
    service_category {
        keyword   service_category_id
        string    name
        string    translations
    }
    service_category ||--o{ service_index : categorizes
```
