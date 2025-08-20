/** biome-ignore-all lint/style/noNonNullAssertion: script should error if data is missing */
import "dotenv/config";
import { sql } from "drizzle-orm";
import { drizzle } from "drizzle-orm/node-postgres";
import { env } from "./src/env.js";
import z from "zod";


const db = drizzle(env.DATABASE_URL);

const tables = {

};

async function main() {
  // for (const tableName in tables) {
  //   const table = tables[tableName as keyof typeof tables];
  //   await db.delete(table).where(sql`1=1`);
  // }
}

main();
