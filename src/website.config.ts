export interface WebSiteConfig {
  copyrightOwner: string;
  hamburgerMenuPosition: 'left' | 'right';
  socialLinksMenuPosition: 'left' | 'right' | 'bottom';
  websiteSubTitle: string;
  websiteTitle: string;
  websiteShortTitle: string;
  websiteUrl: string;
  legalNotice: LegalNotice;
  links: Links;
  displayGuidedTour: boolean;
  displaySocialLinksInFooter: boolean;
  displaySocialLinksViaButton: boolean;
  displayAccountButtons: boolean;
}

export interface LegalNotice {
  lastUpdate: string; // date in ISO format : yyyy/mm/dd
}

export interface Link {
  show: boolean;
  url: string;
  title: string;
  label: string;
}
export interface Links {
  facebook: Link;
  instagram: Link;
  whatsApp: Link;
  youtube: Link;
  email: Link;
  phone: Link;
  linkedin: Link;
  rdv: Link;
  googleMaps: Link;
  waze: Link;
}

export const websiteConfig: WebSiteConfig = {
  copyrightOwner: 'John Doe',
  hamburgerMenuPosition: 'left',
  socialLinksMenuPosition: 'bottom',
  websiteSubTitle: 'Lorem ipsum dolor sit amet',
  websiteTitle: 'Au coeur du bien-être',
  websiteShortTitle: 'Au coeur du bien-être',
  websiteUrl: 'https://mon-site-web.com',
  legalNotice: {
    lastUpdate: '2023/06/21',
  },
  displayGuidedTour: false,
  displaySocialLinksInFooter: true,
  displaySocialLinksViaButton: true,
  displayAccountButtons: true,
  links: {
    phone: {
      url: '0123456789',
      title: "M'appeler au téléphone",
      label: 'Phone',
      show: true,
    },
    email: {
      url: 'john.doe@gmail.com',
      title: "M'envoyer un e-mail",
      label: 'Email',
      show: true,
    },
    youtube: {
      url: 'https://www.youtube.com/channel/0123456789',
      title: 'Voir mes vidéos sur Youtube',
      label: 'Youtube',
      show: true,
    },
    instagram: {
      url: 'https://www.instagram.com/john-doe/?hl=fr',
      title: 'Me contacter sur Instagram',
      label: 'Instagram',
      show: true,
    },
    facebook: {
      url: 'https://www.facebook.com/john-doe',
      title: 'Me contacter sur Facebook',
      label: 'Facebook',
      show: true,
    },
    linkedin: {
      url: 'https://www.linkedin.com/in/john-doe/',
      title: 'Me contacter sur Linkedin',
      label: 'Linkedin',
      show: false,
    },
    whatsApp: {
      url: 'https://wa.me/33123456789',
      title: 'Me contacter sur WhatsApp',
      label: 'WhatsApp',
      show: true,
    },
    rdv: {
      url: 'https://calendly.com/fr',
      title: 'Me contacter ou prendre un rendez-vous',
      label: 'Prendre un rendez-vous',
      show: true,
    },
    googleMaps: {
      url: 'https://goo.gl/maps/0123456789',
      title: 'Itinéraire via Google Maps',
      label: 'Itinéraire via G. Maps',
      show: true,
    },
    waze: {
      url: 'https://ul.waze.com/ul?ll=0%2C0&navigate=yes&zoom=17&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location',
      title: 'Itinéraire via Waze',
      label: 'Itinéraire via Waze',
      show: true,
    },
  },
};
