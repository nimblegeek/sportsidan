import { Link } from "wouter";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}

function NavLink({ href, children, onClick }: NavLinkProps) {
  return (
    <Link href={href}>
      <span
        onClick={onClick}
        className="cursor-pointer text-muted-foreground hover:text-foreground transition-colors"
      >
        {children}
      </span>
    </Link>
  );
}

interface NavbarProps {
  onAddClub?: () => void;
}

export default function Navbar({ onAddClub }: NavbarProps) {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-7xl items-center justify-between">
        <Link href="/">
          <span className="cursor-pointer font-bold text-xl bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
            Sportsidan
          </span>
        </Link>
        
        <div className="flex items-center space-x-6">
          <span
            onClick={onAddClub}
            className="cursor-pointer text-muted-foreground hover:text-foreground transition-colors"
          >
            Add Club
          </span>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/blog">Blog</NavLink>
        </div>
      </div>
    </nav>
  );
}
