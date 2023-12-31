import type { ImagesResults } from '@/models/Images'
import { ImagesSchemaWithPhotos } from '@/models/Images'
import env from './env'

export default async function fetchImages(url: string): Promise<ImagesResults | undefined> {
    try {
        const res = await fetch(url, {
            headers: {
                Authorization: env.Pexel_API_Key
            }
        })

        if(!res.ok) throw new Error("Image Fetch Error\n")

        const imagesResults: ImagesResults = await res.json()

        const parseData = ImagesSchemaWithPhotos.parse(imagesResults)

        if(parseData.total_results === 0) return undefined

        return parseData
    } catch (error) {
        if(error instanceof Error) console.log(error.stack)
    }
}