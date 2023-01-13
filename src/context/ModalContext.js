import { createContext, React, useContext, useEffect, useState } from "react";


const ModalContext = createContext();



export const ModalProvider = ({ children }) => {
    const [isRegisterModal, ToogleRegisterModal] = useState(false);
    const [isLoginModal, ToogleLoginModal] = useState(false);

    useEffect(()=>{ToogleLoginModal(true)},[])



    const values = {
      isLoginModal,
      isRegisterModal,
      ToogleLoginModal,
      ToogleRegisterModal,
    };

    return (
      <ModalContext.Provider value={values}>
        {children}
      </ModalContext.Provider>
    );
};

export const useModalContext = () => {
    const context = useContext(ModalContext);
    return context;
}