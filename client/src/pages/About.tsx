export default function About() {
  return (
    <div className="container mx-auto max-w-7xl px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">About Sportsidan</h1>
      <div className="prose prose-blue max-w-4xl">
        <p className="text-lg text-muted-foreground mb-6">
          Sportsidan is your gateway to discovering and connecting with local sports clubs across Sweden. 
          Our platform makes it easy for sports enthusiasts to find clubs that match their interests and 
          for clubs to reach potential new members.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-4">Our Mission</h2>
        <p className="text-muted-foreground mb-6">
          We believe in the power of sports to bring communities together and promote healthy, active 
          lifestyles. Our mission is to make sports more accessible to everyone by creating a 
          comprehensive directory of local sports clubs.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-4">Get Involved</h2>
        <p className="text-muted-foreground">
          Whether you're looking to join a club or want to list your sports organization, 
          Sportsidan is here to help. Browse our directory or register your club today to 
          become part of our growing community.
        </p>
      </div>
    </div>
  );
}
