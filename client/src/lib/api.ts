import type { Club, Category } from "@db/schema";

export async function fetchClubs(
  search?: string,
  categoryId?: number | null,
): Promise<Club[]> {
  const params = new URLSearchParams();
  if (search) params.append("search", search);
  if (categoryId) params.append("category", categoryId.toString());

  const response = await fetch(`/api/clubs?${params.toString()}`);
  if (!response.ok) throw new Error("Failed to fetch clubs");
  return response.json();
}

export async function fetchCategories(): Promise<Category[]> {
  const response = await fetch("/api/categories");
  if (!response.ok) throw new Error("Failed to fetch categories");
  return response.json();
}
