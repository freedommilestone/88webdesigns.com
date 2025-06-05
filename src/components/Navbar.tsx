import React, { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react'; // For mobile menu toggle

const navLinksData = [
  { href: "#how-it-works", label: "How It Works", isRouterLink: false },
  { href: "#features", label: "Features", isRouterLink: false },
  { href: "#pricing", label: "Pricing", isRouterLink: false },
  { href: "#faq", label: "FAQ", isRouterLink: false },
  { href: "/browse-designs", label: "Browse Designs", isRouterLink: true },
];

interface NavbarProps {
  minimal?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ minimal = false }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    if (!minimal) {
      setIsMobileMenuOpen(!isMobileMenuOpen);
    }
  };
  
  // Determine background based on scroll and mobile menu (if not minimal)
  let navBackgroundClass = 'bg-transparent py-5';
  if (isScrolled || (!minimal && isMobileMenuOpen)) {
    navBackgroundClass = 'bg-white shadow-lg py-3';
  }

  const navLinkClasses = (scrolled: boolean, mobileMenuOpen: boolean) => 
    `font-medium ${scrolled || (!minimal && mobileMenuOpen) ? 'text-gray-700 hover:text-blue-600' : 'text-gray-600 hover:text-gray-900'} transition-colors px-2 py-1 rounded-md`;

  const mobileNavLinkClasses = "block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors";

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${navBackgroundClass}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center h-12 ${minimal ? 'justify-start' : 'justify-between'}`}>
          <div className="flex-shrink-0">
            <RouterLink to="/" className={`text-2xl font-bold ${isScrolled || (!minimal && isMobileMenuOpen) ? 'text-blue-600' : 'text-gray-800 hover:text-blue-600'} transition-colors`}>
              LocalSite
            </RouterLink>
          </div>

          {!minimal && (
            <>
              {/* Desktop Navigation Links */}
              <div className="hidden md:flex md:items-center md:space-x-6 lg:space-x-8">
                {navLinksData.map(link => (
                  link.isRouterLink ? (
                    <RouterLink
                      key={link.label}
                      to={link.href}
                      className={navLinkClasses(isScrolled, isMobileMenuOpen)}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.label}
                    </RouterLink>
                  ) : (
                    <a 
                      key={link.label}
                      href={link.href} 
                      className={navLinkClasses(isScrolled, isMobileMenuOpen)}
                      onClick={() => setIsMobileMenuOpen(false)} 
                    >
                      {link.label}
                    </a>
                  )
                ))}
              </div>
              
              {/* CTA Button - Desktop */}
              <div className="hidden md:block">
                <RouterLink to="/claim-free-website">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 text-sm">
                    Claim Your Free Website
                  </Button>
                </RouterLink>
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden flex items-center">
                <button
                  onClick={toggleMobileMenu}
                  className={`p-2 rounded-md ${isScrolled || isMobileMenuOpen ? 'text-gray-700 hover:text-blue-600' : 'text-gray-600 hover:text-gray-900'} focus:outline-none transition-colors`}
                >
                  {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Mobile Menu Dropdown */} 
      {!minimal && isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg pb-4 pt-2">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinksData.map(link => (
              link.isRouterLink ? (
                <RouterLink 
                  key={link.label} 
                  to={link.href} 
                  className={mobileNavLinkClasses}
                  onClick={toggleMobileMenu} 
                >
                  {link.label}
                </RouterLink>
              ) : (
                <a 
                  key={link.label} 
                  href={link.href} 
                  className={mobileNavLinkClasses}
                  onClick={toggleMobileMenu} 
                >
                  {link.label}
                </a>
              )
            ))}
          </div>
          <div className="px-4 mt-3">
            <RouterLink to="/claim-free-website" className="block w-full">
              <Button 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                onClick={toggleMobileMenu}
              >
                Claim Your Free Website
              </Button>
            </RouterLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 