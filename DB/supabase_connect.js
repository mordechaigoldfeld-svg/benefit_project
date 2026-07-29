import {createClient} from "@supabase/supabase-js"
import "dotenv/config"


const SUPABASE_KEY = process.env.SUPABASE_KEY

const SUPABASE_URI = process.env.SUPABASE_URI



export const client = createClient(SUPABASE_URI,SUPABASE_KEY)


