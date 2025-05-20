import { z } from 'zod';

export const AddressesScalarFieldEnumSchema = z.enum([
	'address_id',
	'address',
	'latitude',
	'longitude',
	'street',
	'house_number',
	'city',
	'country',
	'postal',
]);

export default AddressesScalarFieldEnumSchema;
