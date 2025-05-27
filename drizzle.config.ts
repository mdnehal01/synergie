import type { Config } from 'drizzle-kit';
import * as dotenv from 'dotenv';

dotenv.config({path: '.env'})

if(!process.env.DATABASE_URL){
    console.log("Cannot find Database Url");
}

export default {
    schema: './src/lib/supabase/schema.ts',
    out: './migrations',
    driver: 'pglite',
    dbCredentials: {
        // use Url
        connectionString: process.env.DATABASE_URL || "",
    }
} satisfies Config;