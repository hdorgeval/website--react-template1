import { useCallback } from 'react';
import { useConsent } from './useConsent';

export type MyAnalyticsEvent =
  | 'appel-telephone'
  | 'bienvenue'
  | 'contact-form'
  | 'envoie-mail'
  | 'has-completed-guided-tour'
  | 'open-external-link'
  | 'open-google-maps'
  | 'open-my-facebook'
  | 'open-my-instagram'
  | 'open-my-linkedin'
  | 'open-my-whatsapp'
  | 'open-my-youtube'
  | 'open-waze'
  | 'rdv-entretien-prealable'
  | 'rdv-ou-contact'
  | 'user-consent-approved'
  | 'user-consent-rejected';

export type CommandType = 'js' | 'config' | 'event';
declare global {
  interface Window {
    gtag: (command: CommandType, event: MyAnalyticsEvent, params?: Record<string, string>) => void;
  }
}

export const useAnalytics = () => {
  const { isPending, isRejected } = useConsent();

  const shouldTrack = useCallback(
    (myEvent: MyAnalyticsEvent): boolean => {
      if (myEvent === 'user-consent-rejected' || myEvent === 'user-consent-approved') {
        return true;
      }
      if (isPending || isRejected) {
        return false;
      }

      return true;
    },
    [isPending, isRejected],
  );

  const trackSimpleEvent = useCallback(
    (myEvent: MyAnalyticsEvent) => {
      try {
        if (shouldTrack(myEvent)) {
          window.gtag('event', myEvent);
        }
      } catch (error) {
        // no op
      }
    },
    [shouldTrack],
  );

  const trackOpenExternalLinkEvent = useCallback(
    (url: string) => {
      try {
        if (shouldTrack('open-external-link')) {
          window.gtag('event', 'open-external-link', { url });
        }
      } catch (error) {
        // no op
      }
    },
    [shouldTrack],
  );
  return { trackSimpleEvent, trackOpenExternalLinkEvent };
};
