import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import khandaSymbol from "@/assets/khanda-symbol.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Live Kirtan", path: "/live-kirtan" },
  { name: "Donation", path: "/donation" },
  { name: "Gallery", path: "/gallery" },
  { name: "Calendar", path: "/calendar" },
  { name: "Marketplace", path: "/marketplace" },
  { name: "Contact", path: "/contact" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img src={khandaSymbol} alt="Gurudwara" className="h-12 w-12" />
            <div className="hidden sm:block">
              <h1 className="font-display text-xl font-bold text-primary">
                Gurudwara Sahib
              </h1>
              <p className="text-xs text-muted-foreground">
                ਵਾਹਿਗੁਰੂ ਜੀ ਕਾ ਖਾਲਸਾ
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive(link.path)
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-muted"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Donate Button - Desktop */}
          <Link to="/donation" className="hidden lg:block">
            <Button className="bg-gradient-saffron hover:opacity-90 text-primary-foreground font-semibold">
              Donate Now
            </Button>
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    isActive(link.path)
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground hover:bg-muted"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link to="/donation" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full mt-2 bg-gradient-saffron hover:opacity-90 text-primary-foreground font-semibold">
                  Donate Now
                </Button>
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
