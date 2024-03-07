import { relations, sql } from "drizzle-orm";
import {
  bigint,
  boolean,
  index,
  int,
  mysqlTableCreator,
  primaryKey,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/mysql-core";
import { type AdapterAccount } from "next-auth/adapters";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const mysqlTable = mysqlTableCreator(
  (name) => `hr-auctions-platform_${name}`,
);

export const posts = mysqlTable(
  "post",
  {
    id: bigint("id", { mode: "number" }).primaryKey().autoincrement(),
    name: varchar("name", { length: 256 }),
    authorId: varchar("authorId", { length: 255 }).notNull(),
    createdAt: timestamp("created_at")
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp("updatedAt").onUpdateNow(),
  },
  (example) => ({
    authorIdIdx: index("authorId_idx").on(example.authorId),
    nameIndex: index("name_idx").on(example.name),
  }),
);

export const users = mysqlTable("user", {
  id: varchar("id", { length: 255 }).notNull().primaryKey(),
  name: varchar("name", { length: 255 }),
  email: varchar("email", { length: 255 }).notNull(),
  emailVerified: timestamp("emailVerified", {
    mode: "date",
    fsp: 3,
  }).default(sql`CURRENT_TIMESTAMP(3)`),
  image: varchar("image", { length: 255 }),
});

export const usersRelations = relations(users, ({ many }) => ({
  accounts: many(accounts),
  sessions: many(sessions),
  candidateProfiles: many(candidateProfiles),
  recruiterProfiles: many(recruiterProfiles),
}));

export const accounts = mysqlTable(
  "account",
  {
    userId: varchar("userId", { length: 255 }).notNull(),
    type: varchar("type", { length: 255 })
      .$type<AdapterAccount["type"]>()
      .notNull(),
    provider: varchar("provider", { length: 255 }).notNull(),
    providerAccountId: varchar("providerAccountId", { length: 255 }).notNull(),
    refresh_token: text("refresh_token"),
    access_token: text("access_token"),
    expires_at: int("expires_at"),
    token_type: varchar("token_type", { length: 255 }),
    scope: varchar("scope", { length: 255 }),
    id_token: text("id_token"),
    session_state: varchar("session_state", { length: 255 }),
  },
  (account) => ({
    compoundKey: primaryKey(account.provider, account.providerAccountId),
    userIdIdx: index("userId_idx").on(account.userId),
  }),
);

export const accountsRelations = relations(accounts, ({ one }) => ({
  user: one(users, { fields: [accounts.userId], references: [users.id] }),
}));

export const sessions = mysqlTable(
  "session",
  {
    sessionToken: varchar("sessionToken", { length: 255 })
      .notNull()
      .primaryKey(),
    userId: varchar("userId", { length: 255 }).notNull(),
    expires: timestamp("expires", { mode: "date" }).notNull(),
  },
  (session) => ({
    userIdIdx: index("userId_idx").on(session.userId),
  }),
);

export const sessionsRelations = relations(sessions, ({ one }) => ({
  user: one(users, { fields: [sessions.userId], references: [users.id] }),
}));

export const verificationTokens = mysqlTable(
  "verificationToken",
  {
    identifier: varchar("identifier", { length: 255 }).notNull(),
    token: varchar("token", { length: 255 }).notNull(),
    expires: timestamp("expires", { mode: "date" }).notNull(),
  },
  (vt) => ({
    compoundKey: primaryKey(vt.identifier, vt.token),
  }),
);

export const candidateProfiles = mysqlTable(
  "candidateProfile",
  {
    id: bigint("id", { mode: "number" }).primaryKey().autoincrement(),
    userId: varchar("userId", { length: 255 }).notNull(),
    headline: varchar("headline", { length: 255 }),
    description: text("description"),
    keyWords: varchar("key_words", { length: 255 }),
    minSalary: varchar("min_salary", { length: 255 }),
    minSalaryUnit: varchar("min_salary_unit", { length: 255 }),
  },
  (candidateProfile) => ({
    userIdIdx: index("userId_idx").on(candidateProfile.userId),
  }),
);

export const candidateProfilesRelations = relations(
  candidateProfiles,
  ({ one, many }) => ({
    user: one(users, {
      fields: [candidateProfiles.userId],
      references: [users.id],
    }),
    auctions: many(auctions),
  }),
);

export const recruiterProfiles = mysqlTable(
  "recruiterProfile",
  {
    id: bigint("id", { mode: "number" }).primaryKey().autoincrement(),
    userId: varchar("userId", { length: 255 }).notNull(),
    headline: varchar("headline", { length: 255 }),
    description: text("description"),
    company: varchar("profile_type", { length: 256 }),
    verified: boolean("verified"),
  },
  (recruiterProfile) => ({
    userIdIdx: index("userId_idx").on(recruiterProfile.userId),
  }),
);

export const recruiterProfilesRelations = relations(
  recruiterProfiles,
  ({ one }) => ({
    user: one(users, {
      fields: [recruiterProfiles.userId],
      references: [users.id],
    }),
  }),
);

export const auctions = mysqlTable(
  "auction",
  {
    id: bigint("id", { mode: "number" }).primaryKey().autoincrement(),
    title: varchar("title", { length: 256 }),
    description: text("description"),
    salary: varchar("salary", { length: 256 }),
    priceUnit: varchar("priceUnit", { length: 256 }),
    authorId: varchar("authorId", { length: 255 }).notNull(),
    createdAt: timestamp("created_at")
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp("updatedAt").onUpdateNow(),
  },
  (auction) => ({
    authorIdIdx: index("authorId_idx").on(auction.authorId),
    titleIndex: index("name_idx").on(auction.title),
  }),
);

export const auctionsRelations = relations(auctions, ({ one }) => ({
  candidateProfile: one(candidateProfiles, {
    fields: [auctions.authorId],
    references: [candidateProfiles.id],
  }),
}));

export const offers = mysqlTable(
  "offer",
  {
    id: bigint("id", { mode: "number" }).primaryKey().autoincrement(),
    auctionId: varchar("auctionId", { length: 255 }).notNull(),
    title: varchar("title", { length: 256 }),
    description: text("description"),
    price: varchar("price", { length: 256 }),
    priceUnit: varchar("name", { length: 256 }),
    authorId: varchar("authorId", { length: 255 }).notNull(),
    createdAt: timestamp("created_at")
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp("updatedAt").onUpdateNow(),
  },
  (offer) => ({
    auctionIdIdx: index("auctionId_idx").on(offer.auctionId),
    authorIdIdx: index("authorId_idx").on(offer.authorId),
    createdAtIdx: index("createdAt_idx").on(offer.createdAt),
  }),
);

export const offersRelations = relations(offers, ({ one }) => ({
  auction: one(auctions, {
    fields: [offers.auctionId],
    references: [auctions.id],
  }),
  author: one(users, { fields: [offers.authorId], references: [users.id] }),
}));
