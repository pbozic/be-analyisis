import { z } from 'zod';

export const CategoriesScalarFieldEnumSchema = z.enum(['categories_id','name','description','tag','icon_file_id','category_type','parent_categories_id','translatable_id','created_at','updated_at','deleted_at']);

export default CategoriesScalarFieldEnumSchema;
