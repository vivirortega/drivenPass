import { credentials, users } from "@prisma/client";

export type CredentialData = Omit<credentials, "id" | "user_id">;

export type CredentialUserId = Omit<credentials, "id" | "user" | "user_id">;