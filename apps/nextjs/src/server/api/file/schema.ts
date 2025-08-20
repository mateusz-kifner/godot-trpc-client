import { metadata } from "@/server/db/_metadata";
import { createTable } from "@/server/db/tableCreator";

type MimeTypes =
  | "image/jpeg"
  | "image/png"
  | "image/gif"
  | "image/svg+xml"
  | "image/webp"
  | "audio/mpeg"
  | "audio/wav"
  | "video/mp4"
  | "video/webm"
  | "application/pdf"
  | "application/msword"
  | "application/vnd.ms-excel"
  | "application/vnd.ms-powerpoint"
  | "text/plain"
  | "text/html"
  | "application/json"
  | "application/zip"
  | "application/gzip";

export const files = createTable("files", (d) => ({
  id: d
    .varchar({ length: 255 })
    .notNull()
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  name: d.varchar({ length: 255 }).notNull(),
  mimeType: d.varchar({ length: 255 }).$type<MimeTypes>().notNull(),
  size: d.integer().notNull(),
  url: d.varchar({ length: 255 }).notNull(),
  hash: d.varchar("hash", { length: 10 }),
  metadata: d
    .json()
    .$type<{
      width?: number;
      height?: number;
      [key: string]: string | number | boolean | undefined | null;
    }>()
    .default({}),
  ...metadata(d),
}));
