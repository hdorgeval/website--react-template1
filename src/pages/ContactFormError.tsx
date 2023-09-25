import { FC } from 'react';
import { Link } from 'react-router-dom';
import { OpenExternalLink } from '../components/OpenExternalLink';
import { websiteConfig } from '../website.config';

export const ContactFormError: FC = () => {
  return (
    <div
      className="container w-100 d-flex flex-column justify-content-center align-items-center"
      style={{ height: '100vh' }}
    >
      <h1>Oops!</h1>
      <p className="text-center mt-4">
        Une erreur est survenue lors de l'envoie de votre demande !!!
      </p>

      {websiteConfig.links.email.show && (
        <p className="text-center">
          Si l'erreur persiste, vous pouvez envoyer un e-mail
          <span className="fs-1 ms-3">
            <OpenExternalLink
              className="nav-link w-100"
              link={`mailto:${websiteConfig.links.email.url}`}
              relationship="nofollow"
              aria-label={websiteConfig.links.email.label}
              title={websiteConfig.links.email.title}
              analyticsEvent="envoie-mail"
            >
              <i className="bi bi-envelope-at"></i>
            </OpenExternalLink>
          </span>
        </p>
      )}

      <p>
        <Link to="/">
          <div className="w-100 d-flex flex-row justify-content-center align-items-center">
            <span>Retourner à la page d'acceuil</span>
            <i className="bi bi-box-arrow-in-right fs-1 ms-2"></i>
          </div>
        </Link>
      </p>
    </div>
  );
};

ContactFormError.displayName = 'ContactFormError';
