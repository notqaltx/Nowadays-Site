import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Loading from './pages/Loading';
import Home from './pages/Home';
import Verification from './pages/Verification';

const AppRoutes: React.FC = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    setLoading(true); setFadeOut(false);
    const timer = setTimeout(() => { setFadeOut(true);
      setTimeout(() => {setLoading(false);}, 500);
    }, 700);
    return () => clearTimeout(timer);
  }, [location.pathname]);
  return (
    <div className="min-h-screen relative">
      {loading && <Loading />}
      <div
        className={`transition-opacity duration-500 ${
          !loading ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/verification" element={<Verification />} />
        </Routes>
      </div>
    </div>
  );
};
const MainApp: React.FC = () => {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
};
export default MainApp;
