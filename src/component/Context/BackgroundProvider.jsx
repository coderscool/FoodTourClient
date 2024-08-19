import React, { createContext, useState } from 'react';

export const BackgroundContext = createContext();

const BackgroundProvider = ({ children }) => {
  const [globalColor, setGlobalColor] = useState('white');

  return (
    <BackgroundContext.Provider value={{ globalColor, setGlobalColor }}>
      {children}
    </BackgroundContext.Provider>
  );
};

export default BackgroundProvider