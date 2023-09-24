import zod from 'zod'

const BasicImageSchema = zod.object({
    page: zod.number(),
    per_page: zod.number(),
    prev_page: zod.string().optional(),
    next_page: zod.string().optional(),
    total_results: zod.number()
})

const PhotoSchema = zod.object({
    id: zod.number(),
    width: zod.number(),
    height: zod.number(),
    url: zod.string(),
    src: zod.object({
        large: zod.string()
    }),
    alt: zod.string(),
    blurredDataUrl: zod.string().optional()
})

export const ImagesSchemaWithPhotos = BasicImageSchema.extend({
    photos: zod.array(PhotoSchema)
})

export type Photo = zod.infer<typeof PhotoSchema>

export type ImagesResults = zod.infer<typeof ImagesSchemaWithPhotos>