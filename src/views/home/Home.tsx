import React from 'react';

interface HomeProps {
  logout: () => void;
}

export const Home: React.FC<HomeProps> = ({ logout }) => {
  return (
    <div>
      <button onClick={logout}>Logout</button>
    </div>
  );
};
