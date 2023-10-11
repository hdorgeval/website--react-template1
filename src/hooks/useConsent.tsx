import { useCallback, useMemo } from 'react';
import useLocalStorageState from 'use-local-storage-state';
import { websiteConfig } from '../website.config';
import { useAnalytics } from './useAnalytics';
export interface ConsentData {
  status?: 'pending' | 'approved' | 'rejected' | 'custom';
}

const initialConsentData: ConsentData = {
  status: 'pending',
};

export const useConsent = () => {
  const { trackSimpleEvent } = useAnalytics();

  const [consent, setConsent] = useLocalStorageState<ConsentData>(
    `${websiteConfig.websiteUrl}.consent`,
    { defaultValue: initialConsentData },
  );

  const isPending = useMemo(() => {
    if (consent?.status === 'pending' || consent?.status === undefined) {
      return true;
    }

    return false;
  }, [consent]);

  const approve = useCallback(() => {
    setConsent({ ...consent, status: 'approved' });
    trackSimpleEvent('user-consent-approved');
  }, [consent, setConsent, trackSimpleEvent]);

  const reject = useCallback(() => {
    setConsent({ ...consent, status: 'rejected' });
    trackSimpleEvent('user-consent-rejected');
  }, [consent, setConsent, trackSimpleEvent]);

  return {
    isPending,
    approve,
    reject,
  };
};
