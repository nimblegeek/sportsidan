import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Switch, Route } from "wouter";
import "./index.css";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Navbar from "./components/Navbar";
import { useState } from "react";

function Router() {
  const [isAddClubOpen, setIsAddClubOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navbar onAddClub={() => setIsAddClubOpen(true)} />
      <Switch>
        <Route 
          path="/" 
          component={() => (
            <Home isAddClubOpen={isAddClubOpen} setIsAddClubOpen={setIsAddClubOpen} />
          )} 
        />
        <Route path="/about" component={About} />
        <Route path="/blog" component={Blog} />
        <Route>
          <div className="container mx-auto max-w-7xl px-4 py-16 text-center">
            <h1 className="text-4xl font-bold mb-4">404 Page Not Found</h1>
            <p className="text-muted-foreground">The page you're looking for doesn't exist.</p>
          </div>
        </Route>
      </Switch>
    </div>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  </StrictMode>,
);
