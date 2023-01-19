import { createContext, useContext } from 'react';

const EmailContext = createContext();

export const EmailProvider = ({ children }) => {
  return <EmailContext.Provider value={{}}>{children}</EmailContext.Provider>;
};

export const useEmailContext = () => {
  const context = useContext(EmailContext);
  return context;
};
