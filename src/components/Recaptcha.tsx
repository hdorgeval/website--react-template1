import { FC, useCallback, useEffect, useState } from 'react';
import { MyAnalyticsEvent } from '../hooks/useAnalytics';
import { websiteConfig } from '../website.config';

export interface RecaptchaOwnProps {
  analyticsEvent?: MyAnalyticsEvent;
  className?: string;
  invalidFeedbackClassName?: string;
  theme?: 'dark' | 'light';
}

export const Recaptcha: FC<RecaptchaOwnProps> = ({ theme, invalidFeedbackClassName }) => {
  const [hasLoadedRecaptchaApi, setHasLoadedRecaptchaApi] = useState(false);
  const [recaptchaResponse, setRecaptchaResponse] = useState<string>('');
  const [captchaId, setCaptchaId] = useState<number | null>(null);

  const captchaCallback = useCallback((response: string) => {
    setRecaptchaResponse(response);
  }, []);

  const expiredCaptchaCallback = useCallback(() => {
    setRecaptchaResponse('');
  }, []);
  useEffect(() => {
    if (grecaptcha && typeof captchaId === 'number') {
      return () => {
        if (grecaptcha && captchaId) {
          grecaptcha.reset(captchaId);
          setRecaptchaResponse('');
        }
      };
    }
  }, [captchaId]);

  useEffect(() => {
    if (!hasLoadedRecaptchaApi) {
      setTimeout(() => {
        if (grecaptcha) {
          setHasLoadedRecaptchaApi(true);
        }
      }, 3000);
    }
  }, [hasLoadedRecaptchaApi]);

  useEffect(() => {
    if (!hasLoadedRecaptchaApi) {
      return;
    }

    const captchaContainer = document.querySelector(
      'div[data-netlify-recaptcha="true"]',
    ) as HTMLDivElement;

    const hasRendered = captchaContainer?.hasChildNodes() ?? false;
    if (hasRendered) {
      return;
    }

    if (captchaContainer && grecaptcha) {
      try {
        const captchaId = grecaptcha.render(captchaContainer, {
          sitekey: websiteConfig.recaptchaV2.sitekey,
          callback: captchaCallback,
          'expired-callback': expiredCaptchaCallback,
          theme: theme ?? websiteConfig.recaptchaV2.theme,
          size: websiteConfig.recaptchaV2.size,
        });
        setCaptchaId(captchaId);

        setTimeout(() => {
          const captchaIframe = captchaContainer.querySelector('iframe[title="reCAPTCHA"]');
          if (captchaIframe) {
            const iframeWitdh = captchaIframe.getAttribute('width');
            const iframeHeight = captchaIframe.getAttribute('height');
            if (iframeWitdh && iframeHeight) {
              captchaIframe.setAttribute('width', `${Number(iframeWitdh) - 3}`);
              captchaIframe.setAttribute('height', `${Number(iframeHeight) - 3}`);
              captchaIframe.setAttribute('class', `rounded-3 border border-1`);
            }
          }
        }, 0);
      } catch (error) {
        /* empty */
      }
    }
  }, [captchaCallback, expiredCaptchaCallback, hasLoadedRecaptchaApi, theme]);

  return (
    <>
      <div className="g-recaptcha" data-netlify-recaptcha="true"></div>
      <input
        id="contact-field-recaptcha-response"
        className="form-control d-none"
        value={recaptchaResponse}
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        onChange={() => {}}
        required
      />
      <div
        className={`invalid-feedback mt-n2 ${
          invalidFeedbackClassName ? invalidFeedbackClassName : ''
        }`}
      >
        Vous devez indiquer que vous n'êtes pas un robot.
      </div>
    </>
  );
};

Recaptcha.displayName = 'Recaptcha';
