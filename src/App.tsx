import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Auth, Layout } from 'shared/components';
import {
  CarSelector,
  ConfiguratorExterior,
  ConfiguratorInterior,
  ConfigurationView,
  ForgotPassword,
  Home,
  Login,
  Register,
  ConfiguratorSummary,
} from 'views';

export const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="select-car" element={<CarSelector />} />
        <Route path="configuration-view" element={<ConfigurationView />} />
        <Route
          path="configurator-exterior"
          element={<ConfiguratorExterior />}
        />
        <Route
          path="configurator-interior"
          element={<ConfiguratorInterior />}
        />
        <Route path="configurator-summary" element={<ConfiguratorSummary />} />
      </Route>
      <Route path="/" element={<Auth />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
      </Route>
    </Routes>
  );
};
