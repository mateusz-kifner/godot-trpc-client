import type { roleEnum } from "./schema";

export type UserRole = (typeof roleEnum.enumValues)[number];
