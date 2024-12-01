import type { Express } from "express";
import { db } from "../db";
import { clubs, categories } from "@db/schema";
import { eq, ilike } from "drizzle-orm";

export function registerRoutes(app: Express) {
  app.get("/api/clubs", async (req, res) => {
    const { search, category } = req.query;
    let query = db.select().from(clubs);
    
    if (search) {
      query = query.where(
        ilike(clubs.name, `%${search}%`)
      );
    }
    
    if (category) {
      query = query.where(eq(clubs.categoryId, Number(category)));
    }
    
    const result = await query;
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
