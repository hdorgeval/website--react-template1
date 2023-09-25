import { FC } from 'react';
import { Link } from 'react-router-dom';

export const ContactFormSuccessfullySent: FC = () => {
  return (
    <div
      className="container w-100 d-flex flex-column justify-content-center"
      style={{ height: '100vh' }}
    >
      <h1 className="text-center">Votre demande a bien été envoyée !</h1>

      <div>
        <Link to="/">
          <div className="w-100 d-flex flex-row justify-content-center align-items-center">
            <span>Retourner à la page d'acceuil</span>
            <i className="bi bi-box-arrow-in-right fs-1 ms-2"></i>
          </div>
        </Link>
      </div>
    </div>
  );
};

ContactFormSuccessfullySent.displayName = 'ContactFormSuccessfullySent';
