import { useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { PageRoute } from '../data/portfolioData';

interface NavbarProps {
  currentRoute: PageRoute;
  onNavigate: (route: PageRoute) => void;
}

const NAV_ITEMS: { route: PageRoute; label: string; href: string }[] = [
  { route: 'home', label: 'Home', href: '/' },
  { route: 'resume', label: 'Resume', href: '/resume' },
  { route: 'biodata', label: 'Bio-data', href: '/biodata' },
];

export default function Navbar({ currentRoute, onNavigate }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (
        mobileMenuOpen &&
        headerRef.current &&
        !headerRef.current.contains(e.target as Node)
      ) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [mobileMenuOpen]);

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    route: PageRoute,
  ) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    onNavigate(route);
  };

  return (
    <header
      ref={headerRef}
      className="no-print sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-[#E1E7ED]"
    >
      <div className="site-container flex items-center justify-between h-16">
        {/* Brand Logo */}
        <a
          href="/"
          onClick={(e) => handleLinkClick(e, 'home')}
          className="inline-flex items-baseline gap-0.5 text-xl font-bold tracking-tight text-[#142D4E] whitespace-nowrap shrink-0 no-underline"
          aria-label="Mubeen Navalgund Home"
        >
          <span className="font-serif-display tracking-wide">MUBEEN</span>
          <span
            aria-hidden="true"
            className="inline-block w-1.5 h-1.5 rounded-full bg-[#142D4E] ml-0.5 mb-0.5"
          />
        </a>

        {/* Desktop Navigation */}
        <nav
          aria-label="Primary Navigation"
          className="hidden md:flex items-center gap-8"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = currentRoute === item.route;
            return (
              <a
                key={item.route}
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.route)}
                data-active={isActive ? 'true' : 'false'}
                aria-current={isActive ? 'page' : undefined}
                className="nav-link-item no-underline"
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation-menu"
          aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg text-[#142D4E] hover:bg-[#EAF0F6] transition-colors cursor-pointer"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Dropdown Navigation */}
      <div
        id="mobile-navigation-menu"
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-200 ease-out bg-white border-b border-[#E1E7ED] ${
          mobileMenuOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0 border-b-0'
        }`}
      >
        <nav aria-label="Mobile Navigation" className="site-container py-3 flex flex-col gap-1">
          {NAV_ITEMS.map((item) => {
            const isActive = currentRoute === item.route;
            return (
              <a
                key={item.route}
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.route)}
                aria-current={isActive ? 'page' : undefined}
                className={`flex items-center justify-between min-h-[44px] px-3 rounded-lg text-[15px] no-underline transition-colors ${
                  isActive
                    ? 'bg-[#EAF0F6] text-[#142D4E] font-semibold'
                    : 'text-[#202C3B] hover:bg-[#F7F9FB]'
                }`}
              >
                <span>{item.label}</span>
                {isActive && (
                  <span
                    aria-hidden="true"
                    className="w-1.5 h-1.5 rounded-full bg-[#142D4E]"
                  />
                )}
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
