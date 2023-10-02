import { useEffect } from 'react';
export const useModalBackdropRemover = () => {
  useEffect(() => {
    if (!document) {
      return;
    }

    const modalBackdrop = document.querySelector('div.modal-backdrop.fade.show');
    if (modalBackdrop) {
      modalBackdrop.remove();
    }

    const body = document.querySelector('body');
    if (body) {
      body.style.overflow = 'inherit';
    }
  }, []);
};
