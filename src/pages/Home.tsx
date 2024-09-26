import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  const handleClick = () => { navigate('/verification'); };
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-600 to-blue-900 flex items-center justify-center font-sans p-4">
      <h1 className="text-5xl text-white font-bold font-['Montserrat'] mb-2 bottom-[31.5rem] absolute">Nowadays</h1>
      <p className="text-[1.15em] text-white font-medium font-['Montserrat'] bottom-[30rem] absolute">Studio that makes Future!</p>
      <p className="text-[0.75em] text-white font-medium font-['Montserrat'] opacity-50 bottom-[28.5rem] absolute">Developed by notqaltx & FlayDev</p>
      <a
          onClick={handleClick} target="_blank" rel="noopener noreferrer"
          className="absolute items-center justify-center space-x-2 bottom-[21rem] text-white font-normal font-['Montserrat'] bg-green-600 hover:bg-green-700 transition-colors py-3 px-9 rounded-lg mb-8 shadow-lg"
        >
          <span>Start Account Verification</span>
      </a>
      <a
          href="https://discord.gg/Y7GhqThPRb" target="_blank" rel="noopener noreferrer"
          className="absolute items-center justify-center space-x-2 bottom-[17rem] text-white font-normal font-['Montserrat'] bg-discordIdle hover:bg-discordHover transition-colors py-3 px-9 rounded-lg mb-8 shadow-lg"
        >
          <span>Our Discord Server</span>
      </a>
    </div>
  );
}

export default Home;
