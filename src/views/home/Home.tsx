import { useFirebaseAuth } from 'modules';
import React from 'react';

export const Home: React.FC = () => {
  const { handleSignOut } = useFirebaseAuth();

  return (
    <div>
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
};
