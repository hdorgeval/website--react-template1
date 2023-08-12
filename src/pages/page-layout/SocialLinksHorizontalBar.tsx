import { FC } from 'react';
import { OpenExternalLink } from '../../components/OpenExternalLink';
import { websiteConfig } from '../../website.config';

export const SocialLinksHorizontalBar: FC = () => {
  return (
    <div className="d-flex p-4 flex-row align-items-center">
      {websiteConfig.links.linkedin.show && (
        <span className="fs-1">
          <OpenExternalLink
            className="nav-link"
            link={websiteConfig.links.linkedin.url}
            relationship="nofollow"
            aria-label={websiteConfig.links.linkedin.label}
            title={websiteConfig.links.linkedin.title}
            analyticsEvent="open-my-linkedin"
          >
            <i className="bi bi-linkedin"></i>
          </OpenExternalLink>
        </span>
      )}
      {websiteConfig.links.facebook.show && (
        <span className="fs-1 ms-3">
          <OpenExternalLink
            className="nav-link"
            link={websiteConfig.links.facebook.url}
            relationship="nofollow"
            aria-label={websiteConfig.links.facebook.label}
            title={websiteConfig.links.facebook.title}
            analyticsEvent="open-my-facebook"
          >
            <i className="bi bi-facebook"></i>
          </OpenExternalLink>
        </span>
      )}
      {websiteConfig.links.whatsApp.show && (
        <span className="fs-1 ms-3">
          <OpenExternalLink
            className="nav-link"
            link={websiteConfig.links.whatsApp.url}
            relationship="nofollow"
            aria-label={websiteConfig.links.whatsApp.label}
            title={websiteConfig.links.whatsApp.title}
            analyticsEvent="open-my-whatsapp"
          >
            <i className="bi bi-whatsapp"></i>
          </OpenExternalLink>
        </span>
      )}
      {websiteConfig.links.youtube.show && (
        <span className="fs-1 ms-3">
          <OpenExternalLink
            className="nav-link"
            link={websiteConfig.links.youtube.url}
            relationship="nofollow"
            aria-label={websiteConfig.links.youtube.label}
            title={websiteConfig.links.youtube.title}
            analyticsEvent="open-my-youtube"
          >
            <i className="bi bi-youtube"></i>
          </OpenExternalLink>
        </span>
      )}

      {websiteConfig.links.instagram.show && (
        <span className="fs-1 ms-3">
          <OpenExternalLink
            className="nav-link"
            link={websiteConfig.links.instagram.url}
            relationship="nofollow"
            aria-label={websiteConfig.links.instagram.label}
            title={websiteConfig.links.instagram.title}
            analyticsEvent="open-my-instagram"
          >
            <i className="bi bi-instagram"></i>
          </OpenExternalLink>
        </span>
      )}
      {websiteConfig.links.phone.show && (
        <span className="fs-1 ms-3">
          <OpenExternalLink
            className="nav-link"
            link={`tel:${websiteConfig.links.phone.url}`}
            relationship="nofollow"
            aria-label={websiteConfig.links.phone.label}
            title={websiteConfig.links.phone.title}
            analyticsEvent="appel-telephone"
          >
            <i className="bi bi-telephone-outbound"></i>
          </OpenExternalLink>
        </span>
      )}
      {websiteConfig.links.email.show && (
        <span className="fs-1 ms-3">
          <OpenExternalLink
            className="nav-link"
            link={`mailto:${websiteConfig.links.email.url}`}
            relationship="nofollow"
            aria-label={websiteConfig.links.email.label}
            title={websiteConfig.links.email.title}
            analyticsEvent="envoie-mail"
          >
            <i className="bi bi-envelope-at"></i>
          </OpenExternalLink>
        </span>
      )}
    </div>
  );
};

SocialLinksHorizontalBar.displayName = 'SocialLinksHorizontalBar';
