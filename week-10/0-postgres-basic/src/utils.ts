import { Client } from "pg";

export async function getClient() {
    const client = new Client(
        "postgresql://jayeshyadav8080:amjg1DYKF4HL@ep-sparkling-recipe-53751571.us-east-2.aws.neon.tech/100xDev?sslmode=require"
    );
    await client.connect();
    return client;
}
