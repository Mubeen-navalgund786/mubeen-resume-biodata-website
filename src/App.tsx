import { useCallback, useEffect, useState } from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { PageRoute } from './data/portfolioData';
import BiodataPage from './pages/BiodataPage';
import HomePage from './pages/HomePage';
import ResumePage from './pages/ResumePage';

function parseRouteFromPath(pathname: string): PageRoute {
  const normalized = pathname.toLowerCase().replace(/\/+$/, '');
  if (normalized === '/resume' || normalized === '/resume.html') {
    return 'resume';
  }
  if (normalized === '/biodata' || normalized === '/biodata.html') {
    return 'biodata';
  }
  return 'home';
}

function getPathForRoute(route: PageRoute): string {
  switch (route) {
    case 'resume':
      return '/resume';
    case 'biodata':
      return '/biodata';
    default:
      return '/';
  }
}

function getTitleForRoute(route: PageRoute): string {
  switch (route) {
    case 'resume':
      return 'Resume | Mubeen Navalgund – Personal Portfolio';
    case 'biodata':
      return 'Bio-data | Mubeen Navalgund – Personal Portfolio';
    default:
      return 'Mubeen Navalgund – Personal Portfolio';
  }
}

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<PageRoute>(() =>
    parseRouteFromPath(window.location.pathname),
  );

  const navigate = useCallback((route: PageRoute) => {
    const targetPath = getPathForRoute(route);
    if (window.location.pathname !== targetPath) {
      window.history.pushState({ route }, '', targetPath);
    }
    setCurrentRoute(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    document.title = getTitleForRoute(currentRoute);
  }, [currentRoute]);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentRoute(parseRouteFromPath(window.location.pathname));
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#202C3B]">
      <Navbar currentRoute={currentRoute} onNavigate={navigate} />

      <main className="flex-1">
        {currentRoute === 'home' && <HomePage onNavigate={navigate} />}
        {currentRoute === 'resume' && <ResumePage onNavigate={navigate} />}
        {currentRoute === 'biodata' && <BiodataPage onNavigate={navigate} />}
      </main>

      <Footer currentRoute={currentRoute} onNavigate={navigate} />
    </div>
  );
}
