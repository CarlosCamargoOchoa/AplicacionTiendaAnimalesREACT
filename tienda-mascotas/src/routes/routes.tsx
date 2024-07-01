import React from 'react';
import { Routes, Route } from 'react-router-dom';
import App from '../App';
import NotFound from '../components/not-found';
import Catalogo from '../pages/catalogo/catalogo';
import CodigosHttpGatos from '../pages/gatos-http-codigos/codigos-http-gatos';


const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/pages/catalogo" element={<Catalogo />} />
      <Route path="/pages/gatos-http-codigos" element={<CodigosHttpGatos />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;