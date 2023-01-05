import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import PromotionPage from './pages/promotions';
import Layout from './components/layouts';
import SportsPage from './pages/sports';
import SlotsPage from './pages/slots';
import CasinosPage from './pages/casinos';
import ContactsPage from './pages/contacts';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
    ,
  },
  {
    path: "/sports",
    element: <SportsPage />
    ,
  },
  {
    path: "/slots",
    element: <SlotsPage />
    ,
  },
  {
    path: "/casinos",
    element: <CasinosPage />
    ,
  },
  {
    path: "/contacts",
    element: <ContactsPage />
    ,
  },
  {
    path: "/promotions",
    element: <PromotionPage />
    ,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Layout>
        <RouterProvider router={router} />
    </Layout>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
