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
    try {
      setRecaptchaResponse(response);
    } catch (error) {
      /* empty */
    }
  }, []);

  const expiredCaptchaCallback = useCallback(() => {
    try {
      setRecaptchaResponse('');
    } catch (error) {
      /* empty */
    }
  }, []);
  useEffect(() => {
    try {
      if (grecaptcha && typeof captchaId === 'number') {
        return () => {
          try {
            if (grecaptcha && typeof captchaId === 'number') {
              grecaptcha.reset(captchaId);
              setRecaptchaResponse('');
            }
          } catch (error) {
            /* empty */
          }
        };
      }
    } catch (error) {
      /* empty */
    }
  }, [captchaId]);

  useEffect(() => {
    try {
      if (!hasLoadedRecaptchaApi) {
        setTimeout(() => {
          try {
            if (grecaptcha) {
              setHasLoadedRecaptchaApi(true);
            }
          } catch (error) {
            /* empty */
          }
        }, 3000);
      }
    } catch (error) {
      /* empty */
    }
  }, [hasLoadedRecaptchaApi]);

  useEffect(() => {
    try {
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
    } catch (error) {
      /* empty */
    }
  }, [captchaCallback, expiredCaptchaCallback, hasLoadedRecaptchaApi, theme]);

  return (
    <>
      <div className="g-recaptcha" data-netlify-recaptcha="true"></div>
      <input
        id="contact-field-recaptcha-response"
        className="form-control d-none"
        value={recaptchaResponse}
        onChange={() => {}}
        required
      />
      <div className={`invalid-feedback mt-n2 ${invalidFeedbackClassName ?? ''}`}>
        Vous devez indiquer que vous n'êtes pas un robot.
      </div>
    </>
  );
};

Recaptcha.displayName = 'Recaptcha';
