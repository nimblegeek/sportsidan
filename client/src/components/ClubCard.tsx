import { Club } from "@db/schema";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MapPin, Globe, Phone, Mail } from "lucide-react";

interface ClubCardProps {
  club: Club;
}

export default function ClubCard({ club }: ClubCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="aspect-video relative overflow-hidden">
        <img
          src={club.imageUrl || "https://images.unsplash.com/photo-1571008887538-b36bb32f4571"}
          alt={club.name}
          className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardHeader>
        <CardTitle>{club.name}</CardTitle>
        <CardDescription className="flex items-center gap-2">
          <MapPin className="h-4 w-4" />
          {club.city}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-4">{club.description}</p>
        <div className="space-y-2 text-sm">
          {club.website && (
            <a
              href={club.website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-blue-600 hover:underline"
            >
              <Globe className="h-4 w-4" />
              Website
            </a>
          )}
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4" />
            {club.phone}
          </div>
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4" />
            {club.email}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
