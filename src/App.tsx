import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { UserContext, useUserContextInfo } from './contexts/userContext';
import { ContactFormSuccessfullySent } from './pages/ContactFormSuccessfullySent';
import { ErrorPage } from './pages/ErrorPage';
import { LandingPage } from './pages/LandingPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/contact/success',
    element: <ContactFormSuccessfullySent />,
  },
]);

function App() {
  const [userInfo] = useUserContextInfo();

  return (
    <div className="App">
      <UserContext.Provider value={userInfo}>
        <RouterProvider router={router} />
      </UserContext.Provider>
    </div>
  );
}

export default App;
