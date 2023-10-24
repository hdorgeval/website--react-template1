import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export interface UseHashToScrollIfNeededOptions {
  position: ScrollLogicalPosition;
}

export const useHashToScrollIfNeeded = (options: UseHashToScrollIfNeededOptions) => {
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.slice(1));
      if (el?.scrollIntoView) {
        el.scrollIntoView({ behavior: 'smooth', block: options.position });
        return;
      }
    }
  }, [location, location.hash, options.position]);
};
