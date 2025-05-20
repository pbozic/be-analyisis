import { z } from 'zod';

export const MunicipalitiesScalarFieldEnumSchema = z.enum(['municipalities_id','name','geojson','requires_license','gis_sifra','eid_obcina','feature_id','created_at','updated_at']);

export default MunicipalitiesScalarFieldEnumSchema;
