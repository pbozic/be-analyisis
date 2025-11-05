import { z } from 'zod';
import { extendZodWithOpenApi, OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';
import { FILE_TYPE } from '@prisma/client';

import { UUID } from '../../primitives';

extendZodWithOpenApi(z);

// Shared refs
export const FileRefSchema = z
	.object({
		file_id: UUID,
		url: z.string().url().nullable().optional(),
	})
	.openapi('PromoFileRef');
export type FileRef = z.infer<typeof FileRefSchema>;

// Requests: Banners
export const ImageFileDataSchema = z
	.object({
		file_type: z.nativeEnum(FILE_TYPE).openapi({ example: 'IMAGE' }),
		mime_type: z.string(),
		base64: z.string().min(1),
	})
	.openapi('ImageFileData');

export const PromoBannerDataSchema = z
	.object({
		title: z.string().min(1),
		text: z.string().nullable().optional(),
		type: z.string().min(1).openapi({ example: 'IMAGE' }),
		size: z.string().min(1).openapi({ example: 'WIDE' }),
		promo_ads_id: UUID.nullable().optional(),
	})
	.openapi('PromoBannerData');

export const CreatePromoBannerRequestSchema = z
	.object({
		promoBannerData: PromoBannerDataSchema,
		imageFileData: ImageFileDataSchema.optional(),
	})
	.openapi('CreatePromoBannerRequest');
export type CreatePromoBannerRequest = z.infer<typeof CreatePromoBannerRequestSchema>;

export const UpdatePromoBannerRequestSchema = z
	.object({
		promoBannerData: PromoBannerDataSchema.partial().optional(),
		imageFileData: ImageFileDataSchema.optional(),
	})
	.openapi('UpdatePromoBannerRequest');
export type UpdatePromoBannerRequest = z.infer<typeof UpdatePromoBannerRequestSchema>;

// Responses: Banners
export const PromoBannerBaseSchema = z
	.object({
		promo_banners_id: UUID,
		type: z.string(),
		size: z.string().nullable().optional(),
		title: z.string(),
		text: z.string().nullable().optional(),
		promo_ads_id: UUID.nullable().optional(),
		file: FileRefSchema,
	})
	.openapi('PromoBannerBase');
export type PromoBannerBase = z.infer<typeof PromoBannerBaseSchema>;

export const PromoBannerDetailSchema = PromoBannerBaseSchema.openapi('PromoBannerDetail');
export type PromoBannerDetail = z.infer<typeof PromoBannerDetailSchema>;

export const PromoBannerRefSchema = z
	.object({
		promo_banners_id: UUID,
		type: z.string(),
		size: z.string().nullable().optional(),
		title: z.string(),
		text: z.string().nullable().optional(),
		file: FileRefSchema,
	})
	.openapi('PromoBannerRef');
export type PromoBannerRef = z.infer<typeof PromoBannerRefSchema>;

// Mappers
type PrismaFile = { file_id: string; url?: string | null };
type PrismaBanner = {
	promo_banners_id: string;
	type: string;
	size?: string | null;
	title: string;
	text?: string | null;
	file_id?: string;
	files?: PrismaFile;
	url?: string | null;
	promo_ads_id?: string | null;
};

export function toPromoBannerRef(row: unknown): PromoBannerRef {
	const b = row as PrismaBanner;
	const file = (b as { files?: PrismaFile }).files ||
		(b.file_id ? { file_id: b.file_id, url: (b as { url?: string | null }).url } : undefined) || {
			file_id: '',
			url: null,
		};
	const fileRef = FileRefSchema.parse({ file_id: file.file_id, url: file.url ?? null });
	return PromoBannerRefSchema.parse({
		promo_banners_id: b.promo_banners_id,
		type: b.type,
		size: b.size ?? null,
		title: b.title,
		text: b.text ?? null,
		file: fileRef,
	});
}

export function toPromoBannerDetail(row: unknown): PromoBannerDetail {
	const r = row as PrismaBanner & { promo_ads_id?: string | null };
	const file = (r as { files?: PrismaFile }).files ||
		(r.file_id ? { file_id: r.file_id, url: (r as { url?: string | null }).url } : undefined) || {
			file_id: '',
			url: null,
		};
	return PromoBannerDetailSchema.parse({
		promo_banners_id: r.promo_banners_id,
		type: r.type,
		size: r.size ?? null,
		title: r.title,
		text: r.text ?? null,
		promo_ads_id: r.promo_ads_id ?? null,
		file: FileRefSchema.parse({ file_id: file.file_id, url: file.url ?? null }),
	});
}

export function registerSchemas(registry: OpenAPIRegistry) {
	registry.register('PromoFileRef', FileRefSchema);
	registry.register('ImageFileData', ImageFileDataSchema);
	registry.register('PromoBannerData', PromoBannerDataSchema);
	registry.register('CreatePromoBannerRequest', CreatePromoBannerRequestSchema);
	registry.register('UpdatePromoBannerRequest', UpdatePromoBannerRequestSchema);
	registry.register('PromoBannerBase', PromoBannerBaseSchema);
	registry.register('PromoBannerDetail', PromoBannerDetailSchema);
	registry.register('PromoBannerRef', PromoBannerRefSchema);
}

export type { PrismaBanner };
