import type { PgColumnsBuilders } from "drizzle-orm/pg-core/columns/all";

export const metadata = (d: PgColumnsBuilders) => ({
  updatedAt: d.timestamp().notNull().defaultNow(),
  createdAt: d.timestamp().notNull().defaultNow(),
  createdById: d.varchar({ length: 255 }),
  updatedById: d.varchar({ length: 255 }),
});
