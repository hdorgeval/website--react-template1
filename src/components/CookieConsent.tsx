import { FC, useCallback } from 'react';
import { useConsent } from '../hooks/useConsent';

export interface CookieConsentOwnProps {
  className?: string;
}

export const CookieConsent: FC<CookieConsentOwnProps> = () => {
  const { isPending, approve, reject } = useConsent();
  const handleApprove = useCallback(() => {
    approve();
  }, [approve]);
  const handleReject = useCallback(() => {
    reject();
  }, [reject]);

  if (!isPending) {
    return null;
  }

  return (
    <nav className="navbar fixed-bottom bg-body-tertiary w-100">
      <div className="d-flex flex-column align-items-center text-light fs-6 pt-1">
        <p className="px-4">
          Nous utilisons Google reCAPTCHA pour s'assurer que vous n'êtes pas un robot. Nous
          utilisons aussi Google Analytics pour générer des données statistiques anonymes sur votre
          façon d'utiliser le site. En acceptant, vous nous aider à améliorer ce site. Vous pourrez
          à tout moment modifier votre consentement en allant dans le menu.
        </p>

        <div className="d-flex flex-row align-items-center">
          <button type="button" className="btn btn-success px-5 fw-bolder" onClick={handleApprove}>
            Accepter
          </button>
          <button type="button" className="btn btn-secondary ms-4 fw-bolder" onClick={handleReject}>
            Refuser
          </button>
        </div>
      </div>
    </nav>
  );
};
