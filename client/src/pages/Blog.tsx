export default function Blog() {
  return (
    <div className="container mx-auto max-w-7xl px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Sports Blog</h1>
      <div className="grid gap-8">
        {/* Placeholder blog posts */}
        <article className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-semibold mb-4">Getting Started with Local Sports</h2>
          <p className="text-muted-foreground mb-4">
            Discover the benefits of joining a local sports club and how to choose 
            the right one for you. We'll guide you through the process of finding 
            and joining a club that matches your interests and skill level.
          </p>
          <div className="text-sm text-muted-foreground">Published: December 1, 2024</div>
        </article>

        <article className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-semibold mb-4">Community Sports Events Calendar</h2>
          <p className="text-muted-foreground mb-4">
            Stay updated with upcoming sports events in your area. From local tournaments 
            to friendly matches, find opportunities to participate or support your 
            local sports community.
          </p>
          <div className="text-sm text-muted-foreground">Published: November 30, 2024</div>
        </article>
      </div>
    </div>
  );
}
