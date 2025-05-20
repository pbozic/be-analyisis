import { z } from 'zod';

export const Scoring_pointsScalarFieldEnumSchema = z.enum(['scoring_points_id','business_id','user_id','delivery_order_id','taxi_order_id','points','isPenalty','reason','expiration_date','created_at','updated_at']);

export default Scoring_pointsScalarFieldEnumSchema;
