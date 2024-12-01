import type { Express } from "express";
import { db } from "../db";
import { clubs, categories } from "@db/schema";
import { eq, ilike, and, sql } from "drizzle-orm";

export function registerRoutes(app: Express) {
  app.get("/api/clubs", async (req, res) => {
    const { search, category } = req.query;
    const conditions = [];
    
    if (search && typeof search === 'string') {
      conditions.push(ilike(clubs.name, `%${search}%`));
    }
    
    if (category && typeof category === 'string') {
      conditions.push(eq(clubs.categoryId, Number(category)));
    }
    
    const result = await db.select()
      .from(clubs)
      .where(conditions.length > 0 ? and(...conditions) : undefined);
      
    res.json(result);
  });

  app.get("/api/categories", async (req, res) => {
    const result = await db.select().from(categories);
    res.json(result);
  });

  app.post("/api/clubs", async (req, res) => {
    try {
      const newClub = await db.insert(clubs).values(req.body).returning();
      res.json(newClub[0]);
    } catch (error) {
      res.status(400).json({ error: "Invalid club data" });
    }
  });
}
