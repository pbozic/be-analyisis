import { z } from 'zod';

export const DocumentsScalarFieldEnumSchema = z.enum([
	'document_id',
	'document_type',
	'created_at',
	'updated_at',
	'expiration_date',
	'issue_date',
	'additional_info',
	'public',
	'driver_id',
	'delivery_driver_id',
	'business_id',
	'user_id',
	'vehicle_id',
	'menu_item_id',
	'lost_item_id',
	'transaction_id',
]);

export default DocumentsScalarFieldEnumSchema;
