import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Auth, Layout } from 'shared';
import { Home, Login, Register } from 'views';

export const App: React.FC = () => {
  const [isAuth, setIsAuth] = useState(true);

  // const login = () => {
  //   setIsAuth(true);
  // };

  const logout = () => {
    setIsAuth(false);
  };

  console.log(isAuth);
  return (
    <Routes>
      <Route path="/" element={<Layout auth={isAuth} />}>
        <Route index element={<Home logout={logout} />} />
      </Route>
      <Route path="/" element={<Auth isAuth={isAuth} />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
    </Routes>
  );
};
