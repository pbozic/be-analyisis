import { z } from 'zod';

export const ReservationsScalarFieldEnumSchema = z.enum(['reservation_id','seats','date','time','datetime','created_at','updated_at','business_id','user_id','status','table']);

export default ReservationsScalarFieldEnumSchema;
