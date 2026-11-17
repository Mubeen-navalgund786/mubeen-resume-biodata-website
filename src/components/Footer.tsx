import { IDENTITY, PageRoute } from '../data/portfolioData';

interface FooterProps {
  currentRoute: PageRoute;
  onNavigate: (route: PageRoute) => void;
}

export default function Footer({ currentRoute, onNavigate }: FooterProps) {
  const handleNav = (
    e: React.MouseEvent<HTMLAnchorElement>,
    route: PageRoute,
  ) => {
    e.preventDefault();
    onNavigate(route);
  };

  return (
    <footer className="no-print bg-white border-t border-[#E1E7ED] py-10 md:py-12">
      <div className="site-container">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 pb-8 border-b border-[#E1E7ED]">
          <div>
            <a
              href="/"
              onClick={(e) => handleNav(e, 'home')}
              className="inline-flex items-baseline text-lg font-bold tracking-wide text-[#142D4E] font-serif-display no-underline"
            >
              <span>MUBEEN</span>
              <span
                aria-hidden="true"
                className="inline-block w-1.5 h-1.5 rounded-full bg-[#142D4E] ml-0.5 mb-0.5"
              />
            </a>
            <p className="mt-2 text-sm font-medium text-[#202C3B]">
              {IDENTITY.fullName}
            </p>
            <p className="text-sm text-[#687584]">
              {IDENTITY.roleLine} &middot; {IDENTITY.location}
            </p>
          </div>

          <nav
            aria-label="Footer Navigation"
            className="flex flex-wrap items-center gap-6 text-sm"
          >
            <a
              href="/"
              onClick={(e) => handleNav(e, 'home')}
              className={`no-underline transition-colors ${
                currentRoute === 'home'
                  ? 'text-[#142D4E] font-semibold'
                  : 'text-[#687584] hover:text-[#142D4E]'
              }`}
            >
              Home
            </a>
            <a
              href="/resume"
              onClick={(e) => handleNav(e, 'resume')}
              className={`no-underline transition-colors ${
                currentRoute === 'resume'
                  ? 'text-[#142D4E] font-semibold'
                  : 'text-[#687584] hover:text-[#142D4E]'
              }`}
            >
              Resume
            </a>
            <a
              href="/biodata"
              onClick={(e) => handleNav(e, 'biodata')}
              className={`no-underline transition-colors ${
                currentRoute === 'biodata'
                  ? 'text-[#142D4E] font-semibold'
                  : 'text-[#687584] hover:text-[#142D4E]'
              }`}
            >
              Bio-data
            </a>
          </nav>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-xs text-[#8995A3]">
          <p>Copyright &copy; 2026 {IDENTITY.fullName}. All Rights Reserved.</p>
          <p>{IDENTITY.location}</p>
        </div>
      </div>
    </footer>
  );
}
