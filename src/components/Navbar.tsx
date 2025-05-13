
import { Link, useLocation } from 'react-router-dom';
import Button from './Button';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, LogOut, User, Leaf } from 'lucide-react';
import { useAuth, UserButton } from '@clerk/clerk-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const { isSignedIn } = useAuth();
  
  // Detect scroll to change navbar style
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when changing routes
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-background/80 backdrop-blur-lg shadow-sm" : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex items-center justify-between h-16 px-4 md:px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
            <Leaf className="w-4 h-4 text-white" />
          </div>
          <span className="font-bold text-xl hidden sm:inline-block">PlantViewer</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className={cn("hover:text-primary transition-colors", location.pathname === "/" && "text-primary font-medium")}>
            Home
          </Link>
          <Link to="/dashboard" className={cn("hover:text-primary transition-colors", location.pathname.startsWith("/dashboard") && "text-primary font-medium")}>
            Dashboard
          </Link>
          
          {isSignedIn ? (
            <div className="flex items-center gap-4">
              <UserButton 
                appearance={{
                  elements: {
                    userButtonAvatarBox: "w-8 h-8 rounded-full"
                  }
                }}
              />
            </div>
          ) : (
            <Button variant="gradient" to="/auth">
              Sign In
            </Button>
          )}
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 rounded-md hover:bg-muted"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <Menu className="w-5 h-5" />
        </button>
      </div>
      
      {/* Mobile Navigation */}
      <div className={cn(
        "md:hidden overflow-hidden transition-all duration-300 bg-background/95 backdrop-blur-lg",
        menuOpen ? "max-h-60" : "max-h-0"
      )}>
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          <Link to="/" className={cn("py-2 hover:text-primary transition-colors", location.pathname === "/" && "text-primary font-medium")}>
            Home
          </Link>
          <Link to="/dashboard" className={cn("py-2 hover:text-primary transition-colors", location.pathname.startsWith("/dashboard") && "text-primary font-medium")}>
            Dashboard
          </Link>
          
          {isSignedIn ? (
            <div className="flex items-center justify-between">
              <UserButton />
            </div>
          ) : (
            <Button variant="gradient" to="/auth" className="w-full">
              Sign In
            </Button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
