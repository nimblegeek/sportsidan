import { pgTable, text, integer, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { z } from "zod";

export const categories = pgTable("categories", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: text("name").notNull().unique(),
  imageUrl: text("image_url").notNull(),
});

export const clubs = pgTable("clubs", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  city: text("city").notNull(),
  address: text("address").notNull(),
  imageUrl: text("image_url"),
  website: text("website"),
  phone: text("phone").notNull(),
  email: text("email").notNull(),
  categoryId: integer("category_id").references(() => categories.id),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertCategorySchema = createInsertSchema(categories);
export const selectCategorySchema = createSelectSchema(categories);
export type InsertCategory = z.infer<typeof insertCategorySchema>;
export type Category = z.infer<typeof selectCategorySchema>;

export const insertClubSchema = createInsertSchema(clubs);
export const selectClubSchema = createSelectSchema(clubs);
export type InsertClub = z.infer<typeof insertClubSchema>;
export type Club = z.infer<typeof selectClubSchema>;
