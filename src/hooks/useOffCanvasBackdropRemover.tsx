import { useEffect } from 'react';
export const useOffCanvasBackdropRemover = () => {
  useEffect(() => {
    if (!document) {
      return;
    }

    const offcanvasBackdrop = document.querySelector('div.offcanvas-backdrop.fade.show');
    if (offcanvasBackdrop) {
      offcanvasBackdrop.remove();
    }
  }, []);
};
