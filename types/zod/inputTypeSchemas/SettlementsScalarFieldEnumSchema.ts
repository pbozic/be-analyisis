import { z } from 'zod';

export const SettlementsScalarFieldEnumSchema = z.enum(['settlement_id','name','municipalities_id','eid_naselje','feature_id','geojson','created_at','updated_at']);

export default SettlementsScalarFieldEnumSchema;
