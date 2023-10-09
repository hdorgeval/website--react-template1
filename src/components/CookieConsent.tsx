import { FC } from 'react';

export interface CookieConsentOwnProps {
  className?: string;
}

export const CookieConsent: FC<CookieConsentOwnProps> = () => {
  return (
    <nav className="navbar fixed-bottom bg-body-tertiary">
      <div className="container-fluid">Cookie Consent banner</div>
    </nav>
  );
};
