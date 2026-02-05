import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
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
  const { user } = useAuth();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-royal/95 backdrop-blur-md border-b border-gold/30">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img src={khandaSymbol} alt="Gurudwara" className="h-12 w-12" />
            <div className="hidden sm:block">
              <h1 className="font-display text-xl font-bold text-gold">
                Gurudwara Sahib
              </h1>
              <p className="text-xs text-gold/70">
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
                    ? "bg-gold text-royal"
                    : "text-gold/80 hover:bg-gold/20 hover:text-gold"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right side buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Link to={user ? "/account" : "/auth"}>
              <Button
                variant="outline"
                className="border-gold/50 text-gold hover:bg-gold/20"
              >
                <User className="h-4 w-4 mr-2" />
                {user ? "My Account" : "Sign In"}
              </Button>
            </Link>
            <Link to="/donation">
              <Button className="bg-gradient-saffron hover:opacity-90 text-primary-foreground font-semibold">
                Donate Now
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gold" />
            ) : (
              <Menu className="h-6 w-6 text-gold" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-gold/30 animate-fade-in">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    isActive(link.path)
                      ? "bg-gold text-royal"
                      : "text-gold/80 hover:bg-gold/20"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link to={user ? "/account" : "/auth"} onClick={() => setIsMenuOpen(false)}>
                <Button
                  variant="outline"
                  className="w-full mt-2 border-gold/50 text-gold hover:bg-gold/20"
                >
                  <User className="h-4 w-4 mr-2" />
                  {user ? "My Account" : "Sign In"}
                </Button>
              </Link>
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
