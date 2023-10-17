import { useCallback, useMemo } from 'react';
import useLocalStorageState from 'use-local-storage-state';
import { websiteConfig } from '../website.config';
export interface ConsentData {
  status?: 'pending' | 'approved' | 'rejected' | 'custom';
  dateApproved?: string;
  dateRejected?: string;
}

const initialConsentData: ConsentData = {
  status: 'pending',
};

function toIsoDate(value: Date): string {
  const year = new Intl.DateTimeFormat('fr', { year: 'numeric' }).format(value);
  const day = new Intl.DateTimeFormat('fr', { day: '2-digit' }).format(value);
  const month = new Intl.DateTimeFormat('fr', { month: '2-digit' }).format(value);

  return `${year}/${month}/${day}`;
}

export interface ConsentHookProps {
  isPending: boolean;
  isApproved: boolean;
  isRejected: boolean;
  approve: () => void;
  reject: () => void;
}
export const useConsent = (): ConsentHookProps => {
  const [consent, setConsent] = useLocalStorageState<ConsentData>(
    `${websiteConfig.websiteUrl}.consent`,
    { defaultValue: initialConsentData },
  );

  const isPending = useMemo((): boolean => {
    if (consent?.status === 'pending' || consent?.status === undefined) {
      return true;
    }

    return false;
  }, [consent]);

  const isApproved = useMemo((): boolean => {
    if (consent?.status === 'approved') {
      return true;
    }

    return false;
  }, [consent]);

  const isRejected = useMemo((): boolean => {
    if (consent?.status === 'rejected') {
      return true;
    }

    return false;
  }, [consent]);

  const approve = useCallback(() => {
    setConsent({ ...consent, status: 'approved', dateApproved: toIsoDate(new Date()) });
  }, [consent, setConsent]);

  const reject = useCallback(() => {
    setConsent({ ...consent, status: 'rejected', dateRejected: toIsoDate(new Date()) });
  }, [consent, setConsent]);

  return {
    isPending,
    isApproved,
    isRejected,
    approve,
    reject,
  };
};
