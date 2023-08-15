import { FC, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Description } from '../components/Description';
import { useCalendar } from '../hooks/useCalendar';
import { websiteConfig } from '../website.config';
import { SocialLinksHorizontalBar } from './page-layout/SocialLinksHorizontalBar';
import { SocialLinksOffCanvas } from './page-layout/SocialLinksOffCanvas';

export const LandingPage: FC = () => {
  const { currentYear } = useCalendar();
  useEffect(() => {
    if (window) {
      window.onscroll = () => {
        const scrollY = window.scrollY;
        const burgerMenu = document.querySelector('nav#burger-menu');
        if (scrollY > 5 && burgerMenu) {
          burgerMenu.classList.add('navbar-scroll-theme');
          return;
        }
        if (burgerMenu) {
          burgerMenu.classList.remove('navbar-scroll-theme');
        }
      };
    }
  }, []);

  return (
    <>
      <nav
        id="burger-menu"
        className="navbar navbar-expand-md w-100 z-index-3 position-fixed"
        data-bs-theme="dark"
      >
        <a className="navbar-brand p-0 ms-4" href="/">
          <img
            id="logo"
            className="object-fit-fill rounded-circle img-thumbnail p-0 border-0"
            src="/images/logos/logo.png"
            alt="Logo"
            style={{ width: '4rem', height: '4rem', minWidth: '3rem', minHeight: '3rem' }}
          />
        </a>
        <button
          className="navbar-toggler collapsed border border-0 me-4"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Menu"
          title="Menu"
        >
          <span className="toggler-horizontal-bar"></span>
          <span className="toggler-horizontal-bar"></span>
          <span className="toggler-horizontal-bar"></span>
        </button>

        <div className="navbar-collapse collapse" id="navbarSupportedContent">
          <ul id="nav" className="navbar-nav ms-auto fw-bolder">
            <li className="nav-item ms-4">
              <a className="nav-link page-scroll active pb-2 text-light" href="#home">
                Home
              </a>
            </li>
            <li className="nav-item ms-4">
              <a className="nav-link page-scroll pb-2 text-light" href="#about">
                About
              </a>
            </li>
            <li className="nav-item ms-4">
              <a className="nav-link page-scroll pb-2 text-light" href="#services">
                Services
              </a>
            </li>
            <li className="nav-item ms-4">
              <a className="nav-link page-scroll pb-2 text-light" href="#portfolio">
                Gallery
              </a>
            </li>
            <li className="nav-item ms-4">
              <a className="nav-link page-scroll pb-2 text-light" href="#team">
                Team
              </a>
            </li>
            <li className="nav-item ms-4">
              <a className="nav-link page-scroll pb-2 text-light" href="#blog">
                Blog
              </a>
            </li>
            <li className="nav-item ms-4 me-4">
              <a className="nav-link page-scroll pb-2 text-light" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <section id="home" className="w-100" style={{ maxHeight: '100vh' }}>
        <div
          id="home-carousel"
          className="carousel slide carousel-fade w-100"
          data-bs-ride="carousel"
          data-bs-pause="false"
          data-bs-theme="dark"
        >
          <div className="carousel-indicators mb-0">
            <button
              className="active bg-white pt-1"
              type="button"
              data-bs-target="#home-carousel"
              data-bs-slide-to="0"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              className="ms-4 bg-white pt-1"
              type="button"
              data-bs-target="#home-carousel"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              className="ms-4 bg-white pt-1"
              type="button"
              data-bs-target="#home-carousel"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="3000">
              <div
                className="bg-overlay-50"
                style={{
                  backgroundImage: 'url(/images/backgrounds/landing-page.jpg)',
                  minHeight: '100vh',
                  maxHeight: '100vh',
                  backgroundPositionX: '29%',
                  backgroundPositionY: '29%',
                  backgroundSize: 'cover',
                  position: 'relative',
                  overflow: 'hidden',
                  backgroundRepeat: 'no-repeat',
                  zIndex: 1,
                }}
              >
                <div
                  className="d-flex flex-column justify-content-start align-items-center"
                  style={{ height: '100vh' }}
                >
                  <div className="flex-grow-half"></div>
                  <h1 className="font-mali text-light fw-bolder fs-1">Au coeur du bien-être</h1>
                  <div className="container row justify-content-center">
                    <div className="col-lg-8 col-md-10 text-center">
                      <p className="text-light font-playfair mt-4 ">
                        Un modèle de site web basé sur Bootstrap 5 et HTML5, comprenant tous les
                        éléments et fonctionnalités essentiels pour commencer son site web
                        professionnel.
                      </p>
                    </div>
                  </div>

                  <a
                    className="btn btn-outline-light fw-bolder w-75 mt-4 font-dancing-script fs-big-1 wow fadeInUp"
                    data-wow-duration="1.3s"
                    data-wow-delay="0.8s"
                    href="#bienvenue"
                  >
                    Bienvenue !
                  </a>
                </div>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="3000">
              <div
                className="bg-overlay-50"
                style={{
                  backgroundImage: 'url(/images/backgrounds/landing-page-2.jpg)',
                  minHeight: '100vh',
                  maxHeight: '100vh',
                  backgroundPositionX: '45%',
                  backgroundPositionY: '29%',
                  backgroundSize: 'cover',
                  position: 'relative',
                  overflow: 'hidden',
                  backgroundRepeat: 'no-repeat',
                  zIndex: 1,
                }}
              >
                <div
                  className="d-flex flex-column justify-content-start align-items-center"
                  style={{ height: '100vh' }}
                >
                  <div className="flex-grow-half"></div>
                  <h1 className="font-mali text-light fw-bolder fs-1">Au coeur de l'écoute</h1>
                  <div className="container row justify-content-center">
                    <div className="col-lg-8 col-md-10 text-center">
                      <p className="text-light font-playfair mt-4 ">
                        Un modèle de site web basé sur Bootstrap 5 et HTML5, comprenant tous les
                        éléments et fonctionnalités essentiels pour commencer son site web
                        professionnel.
                      </p>
                    </div>
                  </div>

                  <a
                    className="btn btn-outline-light fw-bolder w-75 mt-4 font-dancing-script fs-big-1 wow fadeInUp"
                    data-wow-duration="1.3s"
                    data-wow-delay="0.8s"
                    href="#bienvenue"
                  >
                    Bienvenue !
                  </a>
                </div>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="3000">
              <div
                className="bg-overlay-50"
                style={{
                  backgroundImage: 'url(/images/backgrounds/landing-page-3.png)',
                  minHeight: '100vh',
                  maxHeight: '100vh',
                  backgroundPositionX: '54%',
                  backgroundPositionY: '29%',
                  backgroundSize: 'cover',
                  position: 'relative',
                  overflow: 'hidden',
                  backgroundRepeat: 'no-repeat',
                  zIndex: 1,
                }}
              >
                <div
                  className="d-flex flex-column justify-content-start align-items-center"
                  style={{ height: '100vh' }}
                >
                  <div className="flex-grow-half"></div>
                  <h1 className="font-mali text-light fw-bolder fs-1">Au coeur de la vibration</h1>
                  <div className="container row justify-content-center">
                    <div className="col-lg-8 col-md-10 text-center">
                      <p className="text-light font-playfair mt-4 ">
                        Un modèle de site web basé sur Bootstrap 5 et HTML5, comprenant tous les
                        éléments et fonctionnalités essentiels pour commencer son site web
                        professionnel.
                      </p>
                    </div>
                  </div>

                  <a
                    className="btn btn-outline-light fw-bolder w-75 mt-4 font-dancing-script fs-big-1 wow fadeInUp"
                    data-wow-duration="1.3s"
                    data-wow-delay="0.8s"
                    href="#bienvenue"
                  >
                    Bienvenue !
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="bienvenue" className="w-100" style={{ backgroundColor: '#4f46e5' }}>
        <div className="container">
          <div className="d-flex flex-column text-start text-light font-dancing-script fs-3 pt-4">
            <div className="d-flex flex-row justify-content-center align-items-center">
              <div className="border-photo">
                <img
                  className="object-fit-fill rounded-circle img-thumbnail p-0 border-0 "
                  src="/images/portraits/portrait.png"
                  alt="Logo"
                  style={{ width: '8rem', minWidth: '8rem' }}
                />
              </div>
              <div className="w-100 ms-4">Je m'appelle Christina Evangelica</div>
            </div>
            <Description>
              Je vous reçois dans mon cabinet situé au sud-ouest de Nantes du lundi au samedi de 9h
              à 19h. Ma pratique repose sur une approche holistique, prenant en compte tous les
              aspects de votre être. Que vous cherchiez à surmonter le stress, à gérer l'anxiété, à
              améliorer vos relations ou à vous reconnecter avec vous-même, je suis là pour vous
              soutenir. Grâce à des techniques variées telles que l'énergétique traditionnelle
              chinoise, la méditation, la relaxation profonde, le massage tantrique, je vous
              guiderai avec bienveillance et respect vers la réalisation de vos objectifs de
              bien-être. Chaque parcours est unique, c'est pourquoi je m'engage à créer un espace
              sécurisé et accueillant où vous pourrez vous exprimer librement.
            </Description>
            <Link
              to="/qui-suis-je"
              className="text-decoration-none text-light"
              title="En savoir plus sur le monde de l'énergétique traditionnelle chinoise, de
              l'acupuncture, de l'aculifting, du massage Tuina et du massage tantrique"
              aria-label="En savoir plus sur le monde de l'énergétique traditionnelle chinoise, de
              l'acupuncture, de l'aculifting, du massage Tuina et du massage tantrique"
            >
              <span className="btn btn-outline-light fw-bolder my-4 font-playfair">
                En savoir plus
              </span>
            </Link>
          </div>
        </div>
      </section>

      <footer id="footer" className="w-100">
        <div className="container">
          <div className="d-flex flex-column align-items-center">
            {websiteConfig.displaySocialLinksInFooter && <SocialLinksHorizontalBar />}
            {websiteConfig.displaySocialLinksViaButton && <SocialLinksOffCanvas />}
            <span className="fs-7 fw-lighter mb-1">
              <i className="bi bi-c-circle me-2"></i>
              {`tous droits réservés ${websiteConfig.copyrightOwner} - ${currentYear}`}
            </span>
            <span className="fs-7 mb-2">
              <Link to="/mentions-legales" className="nav-link">
                <span className="">Mentions légales</span>
              </Link>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};

LandingPage.displayName = 'LandingPage';
