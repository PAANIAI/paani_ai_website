import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

export const useScrollRestoration = () => {
  const location = useLocation();
  const scrollPositions = useRef<{ [key: string]: number }>({});

  useEffect(() => {
    // Save current scroll position before navigation
    const saveScrollPosition = () => {
      scrollPositions.current[location.pathname] = window.scrollY;
    };

    // Restore scroll position after navigation
    const restoreScrollPosition = () => {
      const savedPosition = scrollPositions.current[location.pathname];
      if (savedPosition !== undefined) {
        window.scrollTo(0, savedPosition);
      } else {
        // If no saved position, scroll to top
        window.scrollTo(0, 0);
      }
    };

    // Add event listener for beforeunload to save position
    window.addEventListener('beforeunload', saveScrollPosition);

    // Restore scroll position after component mounts
    const timer = setTimeout(restoreScrollPosition, 0);

    return () => {
      window.removeEventListener('beforeunload', saveScrollPosition);
      clearTimeout(timer);
    };
  }, [location.pathname]);

  // Save scroll position when user scrolls
  useEffect(() => {
    const handleScroll = () => {
      scrollPositions.current[location.pathname] = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location.pathname]);
}; 