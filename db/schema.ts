import { pgTable, text, integer, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { z } from "zod";

const swedishOrgNumberSchema = z.string().refine(
  (val) => {
    // Remove any hyphens and whitespace
    const cleaned = val.replace(/[-\s]/g, '');
    
    // Must be exactly 10 digits
    if (!/^\d{10}$/.test(cleaned)) return false;
    
    // First 6 digits should form a valid date (YYMMDD)
    const year = parseInt(cleaned.slice(0, 2));
    const month = parseInt(cleaned.slice(2, 4));
    const day = parseInt(cleaned.slice(4, 6));
    
    const date = new Date(2000 + year, month - 1, day);
    if (
      date.getFullYear() - 2000 !== year ||
      date.getMonth() + 1 !== month ||
      date.getDate() !== day
    ) {
      return false;
    }
    
    return true;
  },
  { message: "Invalid Swedish organization number" }
);

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
  organizationNumber: text("organization_number").notNull(),
  categoryId: integer("category_id").references(() => categories.id),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertCategorySchema = createInsertSchema(categories);
export const selectCategorySchema = createSelectSchema(categories);
export type InsertCategory = z.infer<typeof insertCategorySchema>;
export type Category = z.infer<typeof selectCategorySchema>;

export const insertClubSchema = createInsertSchema(clubs, {
  organizationNumber: swedishOrgNumberSchema,
});
export const selectClubSchema = createSelectSchema(clubs);
export type InsertClub = z.infer<typeof insertClubSchema>;
export type Club = z.infer<typeof selectClubSchema>;
