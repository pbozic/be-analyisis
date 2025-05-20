import { z } from 'zod';

export const Lost_itemsScalarFieldEnumSchema = z.enum(['lost_item_id','user_id','status','description','found','created_at','updated_at']);

export default Lost_itemsScalarFieldEnumSchema;
