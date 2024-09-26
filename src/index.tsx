import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import Routes from './Routes';
import Loading from './pages/Loading';
import reportWebVitals from './reportWebVitals';

const Index: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [showContent, setContent] = useState(true);
  return (
    <div className="min-h-screen relative">
      <div
        className={`absolute top-0 left-0 w-full h-full flex items-center justify-center transition-opacity duration-500 ${
          loading ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <Loading />
      </div>
      <div
        className={`transition-opacity duration-500 ${
          showContent ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <Routes />
      </div>
    </div>
  );
};
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>
);
reportWebVitals();
