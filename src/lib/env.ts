import { cleanEnv, str } from 'envalid'

const env = cleanEnv(process.env, {
    Pexel_API_Key: str(),
})

export default env