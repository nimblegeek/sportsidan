import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import ClubGrid from "../components/ClubGrid";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";
import AddClubDialog from "../components/AddClubDialog";
import { fetchClubs, fetchCategories } from "../lib/api";

interface HomeProps {
  isAddClubOpen: boolean;
  setIsAddClubOpen: (open: boolean) => void;
}

export default function Home({ isAddClubOpen, setIsAddClubOpen }: HomeProps) {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);

  const { data: clubs, isLoading: isLoadingClubs } = useQuery({
    queryKey: ["clubs", search, selectedCategory],
    queryFn: () => fetchClubs(search, selectedCategory),
  });

  const { data: categories } = useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });

  return (
    <div>
      <header className="bg-gradient-to-r from-blue-600 to-blue-700 py-16 px-4 mt-[-1px]">
        <div className="container mx-auto max-w-7xl">
          <h1 className="text-4xl font-bold text-white mb-4">
            Community Sports Clubs
          </h1>
          <p className="text-blue-100 text-lg max-w-2xl">
            Find and join local sports clubs in your area. Whether you're looking
            for a new hobby or want to stay active, we've got you covered.
          </p>
        </div>
      </header>

      <main className="container mx-auto max-w-7xl px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-8">
          <div className="flex-1 w-full md:w-auto">
            <SearchBar value={search} onChange={setSearch} />
          </div>
          <Button
            onClick={() => setIsAddClubOpen(true)}
            className="w-full md:w-auto"
          >
            <PlusCircle className="mr-2 h-4 w-4" />
            Add Club
          </Button>
        </div>

        <CategoryFilter
          categories={categories || []}
          selected={selectedCategory}
          onChange={setSelectedCategory}
        />

        <ClubGrid clubs={clubs || []} isLoading={isLoadingClubs} />
      </main>

      <AddClubDialog
        open={isAddClubOpen}
        onOpenChange={setIsAddClubOpen}
        categories={categories || []}
      />
    </div>
  );
}
