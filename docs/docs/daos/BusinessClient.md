# BusinessClient DAO

<!-- DOCGEN:START getAllBusinessClients -->
### getAllBusinessClients

**Description**: Get all business clients

**Returns**: {Promise<Array>} - Array of business clients

<!-- DOCGEN:END getAllBusinessClients -->

<!-- DOCGEN:START getBusinessClientById -->
### getBusinessClientById

**Description**: Get a business client by ID

**Parameters**:
- businessClientsId: {string} - The ID of the business client to retrieve

**Returns**: {Promise<Object>} - The business client

<!-- DOCGEN:END getBusinessClientById -->

<!-- DOCGEN:START getBusinessClientsByBusinessId -->
### getBusinessClientsByBusinessId

**Description**: Get business clients by business ID

**Parameters**:
- businessId: {string} - The ID of the business

**Returns**: {Promise<Array>} - Array of business clients for the business

<!-- DOCGEN:END getBusinessClientsByBusinessId -->

<!-- DOCGEN:START createBusinessClient -->
### createBusinessClient

**Description**: Create a new business client

**Parameters**:
- clientData: {Object} - The data for the new business client

**Returns**: {Promise<Object>} - The created business client

<!-- DOCGEN:END createBusinessClient -->

<!-- DOCGEN:START updateBusinessClient -->
### updateBusinessClient

**Description**: Update a business client

**Parameters**:
- businessClientsId: {string} - The ID of the business client to update
- updates: {Object} - The data to update

**Returns**: {Promise<Object>} - The updated business client

<!-- DOCGEN:END updateBusinessClient -->

<!-- DOCGEN:START removeBusinessClient -->
### removeBusinessClient

**Description**: Delete a business client

**Parameters**:
- businessClientsId: {string} - The ID of the business client to delete

**Returns**: {Promise<Object>} - The deleted business client

<!-- DOCGEN:END removeBusinessClient -->

