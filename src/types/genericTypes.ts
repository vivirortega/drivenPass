import { credentials, users, notes, cards } from "@prisma/client";

export type CredentialData = Omit<credentials, "id" | "user_id">;

export type CredentialUserId = Omit<credentials, "id" | "user" | "user_id">;

export type NoteService = Omit<notes, "id" | "user_id" | "created_at">;

export type IdService = Omit<users, "email" | "password" | "created_at">;

export type CardService = Omit<cards, "id" | "user_id" | "created_at">;