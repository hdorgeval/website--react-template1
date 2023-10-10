import { FC } from 'react';

export interface CookieConsentOwnProps {
  className?: string;
}

export const CookieConsent: FC<CookieConsentOwnProps> = () => {
  return (
    <nav className="navbar fixed-bottom bg-body-tertiary w-100">
      <div className="d-flex flex-column align-items-center">
        <p className="px-4">
          Nous utilisons les cookies de Google Analytics pour générer des données statistiques
          anonymes sur votre façon d'utiliser le site. En acceptant, vous nous aider à améliorer ce
          site.
        </p>
        <div className="d-flex flex-row align-items-center">
          <button type="button" className="btn btn-success px-5">
            Accepter
          </button>
          <button type="button" className="btn btn-secondary ms-4">
            Refuser
          </button>
        </div>
      </div>
    </nav>
  );
};
