import { FC, FormEvent, useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MyAnalyticsEvent, useAnalytics } from '../hooks/useAnalytics';
import { websiteConfig } from '../website.config';

export interface ContactFormOwnProps {
  analyticsEvent?: MyAnalyticsEvent;
  className?: string;
}

export const ContactForm: FC<ContactFormOwnProps> = ({ analyticsEvent }) => {
  const navigate = useNavigate();
  const [hasLoadedRecaptchaApi, setHasLoadedRecaptchaApi] = useState(false);
  const [recaptchaResponse, setRecaptchaResponse] = useState<string>('');
  const [captchaId, setCaptchaId] = useState<number | null>(null);
  const { trackSimpleEvent } = useAnalytics();

  const handleSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      const targetForm = event?.currentTarget;
      event.preventDefault();
      if (!targetForm?.checkValidity()) {
        event.stopPropagation();
        targetForm.classList.add('was-validated');
        return;
      }

      targetForm.classList.add('was-validated');
      const formData = new FormData(targetForm);
      const convertedFormEntries = Array.from(formData, ([key, value]) => [
        key,
        typeof value === 'string' ? value : value.name,
      ]);

      if (analyticsEvent) {
        trackSimpleEvent(analyticsEvent);
      }

      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(convertedFormEntries).toString(),
      })
        .then(() => navigate('/contact/success'))
        .catch(() => navigate('/contact/error'))
        .finally(() => {
          if (grecaptcha && typeof captchaId === 'number') {
            grecaptcha.reset(captchaId);
            setRecaptchaResponse('');
          }
        });
    },
    [analyticsEvent, captchaId, navigate, trackSimpleEvent],
  );

  const captchaCallback = useCallback((response: string) => {
    setRecaptchaResponse(response);
  }, []);

  const expiredCaptchaCallback = useCallback(() => {
    setRecaptchaResponse('');
  }, []);

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
          theme: websiteConfig.recaptchaV2.theme,
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
  }, [captchaCallback, expiredCaptchaCallback, hasLoadedRecaptchaApi]);

  return (
    <form
      className="row g-3 align-items-center needs-validation"
      name="Contact"
      method="POST"
      data-netlify="true"
      data-netlify-recaptcha="true"
      netlify-honeypot="bot-field"
      noValidate
      onSubmit={handleSubmit}
    >
      <div className="col-12 col-lg-4">
        <label className="visually-hidden" htmlFor="contact-field-name">
          Nom
        </label>
        <input
          type="text"
          name="Nom"
          id="contact-field-name"
          className="form-control"
          placeholder="Votre nom"
          autoComplete="name"
          maxLength={80}
          required
        />
        <div className="invalid-feedback">Vous devez saisir votre nom.</div>
      </div>
      <div className="col-12 col-lg-4">
        <label className="visually-hidden" htmlFor="contact-field-email">
          E-mail
        </label>
        <div className="input-group">
          <div className="input-group-text">@</div>
          <input
            type="email"
            name="Email"
            className="form-control"
            id="contact-field-email"
            placeholder="E-mail"
            autoComplete="email"
            maxLength={30}
            required
          />
          <div className="invalid-feedback">Vous devez saisir votre email.</div>
        </div>
      </div>

      <div className="col-12 col-lg-4">
        <label className="visually-hidden" htmlFor="contact-field-phone">
          Portable
        </label>
        <div className="input-group">
          <div className="input-group-text">
            <i className="bi bi-telephone-inbound"></i>
          </div>
          <input
            type="tel"
            name="Portable"
            className="form-control"
            id="contact-field-phone"
            placeholder="Numéro de portable"
            autoComplete="tel"
            maxLength={15}
            required
          />
          <div className="invalid-feedback">Vous devez saisir un numéro de téléphone.</div>
        </div>
      </div>

      <div className="col-12 col-lg-4">
        <label className="visually-hidden" htmlFor="contact-field-subject">
          Sujet
        </label>
        <select name="Sujet" className="form-select" id="contact-field-subject" required>
          <option value="" disabled selected hidden>
            Sujet...
          </option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="autre">Autre</option>
        </select>
        <div className="invalid-feedback">Vous devez sélectionner un sujet.</div>
      </div>

      <div className="col-12">
        <label className="visually-hidden" htmlFor="contact-field-message">
          Votre message
        </label>
        <textarea
          className="form-control"
          name="Message"
          id="contact-field-message"
          rows={3}
          placeholder="Votre message (Veuillez également indiquer vos disponibilités)"
          required
        ></textarea>
        <div className="invalid-feedback">
          Vous devez saisir un message en indiquant vos disponibilités.
        </div>
      </div>

      <div className="col-12 ">
        <div className="g-recaptcha" data-netlify-recaptcha="true"></div>
        <input
          className="form-control d-none"
          value={recaptchaResponse}
          onChange={() => {}}
          required
        />
        <div className="invalid-feedback mt-n2">
          Vous devez indiquer que vous n'êtes pas un robot.
        </div>
      </div>
      <div className="col-12">
        <button type="submit" className="btn btn-primary">
          Envoyer
        </button>
      </div>
      <input type="hidden" name="form-name" value="Contact" />
      <input type="hidden" name="subject" value="Demande de contact" />
      <p className="visually-hidden">
        <label>
          <input name="bot-field" />
        </label>
      </p>
    </form>
  );
};
