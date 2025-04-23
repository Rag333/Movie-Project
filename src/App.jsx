// App.js
import React, { useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Player from './pages/Player/Player';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import { ToastContainer, toast } from 'react-toastify';

const App = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      const currentPath = location.pathname;

      if (user && currentPath === '/login') {
        console.log('Already logged in, redirecting to home...');
        navigate('/', { replace: true });
      }

      if (!user && currentPath !== '/login') {
        console.log('Not logged in, redirecting to login...');
        navigate('/login', { replace: true });
      }
    });

    return () => unsubscribe();
  }, [location.pathname, navigate]);

  return (
    <div>
      <ToastContainer theme='dark' />
       <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/player/:id' element={<Player />} />
    </Routes>
    </div>
   
  );
};

export default App;
