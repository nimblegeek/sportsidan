import { Category } from "@db/schema";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface CategoryFilterProps {
  categories: Category[];
  selected: number | null;
  onChange: (categoryId: number | null) => void;
}

export default function CategoryFilter({
  categories,
  selected,
  onChange,
}: CategoryFilterProps) {
  return (
    <div className="mb-8">
      <h2 className="text-lg font-semibold mb-4">Categories</h2>
      <div className="flex flex-wrap gap-2">
        <Button
          variant={selected === null ? "default" : "outline"}
          onClick={() => onChange(null)}
          className="rounded-full"
        >
          All
        </Button>
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={selected === category.id ? "default" : "outline"}
            onClick={() => onChange(category.id)}
            className={cn("rounded-full")}
          >
            {category.name}
          </Button>
        ))}
      </div>
    </div>
  );
}
