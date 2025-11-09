import { z } from 'zod';
import { FILE_TYPE } from '@prisma/client';

// =======================
// File Base, Ref, and Response Schemas
// =======================

/**
 * Base File schema with all scalar fields (no relations).
 */
export const FileBaseSchema = z.object({
  file_id: z.string().uuid(),
  url: z.string().nullable(),
  file_type: z.nativeEnum(FILE_TYPE),
  public: z.boolean(),
  mime_type: z.string(),
  created_at: z.string().datetime(),
  updated_at: z.string().datetime(),
  document_id: z.string().uuid().nullable(),
  user_id: z.string().uuid().nullable(),
  driver_id: z.string().uuid().nullable(),
  lost_item_id: z.string().uuid().nullable(),
  delivery_order_id: z.string().uuid().nullable(),
});

export type FileBase = z.infer<typeof FileBaseSchema>;

/**
 * File reference schema for embedding in other DTOs.
 */
export const FileRefSchema = z.object({
  file_id: z.string().uuid(),
  url: z.string().nullable(),
  file_type: z.nativeEnum(FILE_TYPE),
  mime_type: z.string(),
});

export type FileRef = z.infer<typeof FileRefSchema>;

/**
 * Full File response schema extending base with any computed fields.
 */
export const FileResponseSchema = FileBaseSchema;

export type FileResponse = z.infer<typeof FileResponseSchema>;

// =======================
// Export all schemas
// =======================

export * from './file.dto.js';