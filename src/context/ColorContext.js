import { createContext, useState } from 'react';

export const ColorContext = createContext();

const ColorContextProvider = ({ children }) => {
  const [color, setColor] = useState('');

  const changeColor = (c) => {
    setColor(!c);
  };

  return (
    <ColorContext.Provider value={{ color, changeColor }}>
      {children}
    </ColorContext.Provider>
  );
};

export default ColorContextProvider;
