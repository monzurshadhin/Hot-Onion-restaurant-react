import React, { createContext } from 'react';
import useFirebase from '../hooks/useFirebase';
import useFoods from '../hooks/useFoods';
import useHandleCart from '../hooks/useHandleCart';

export const AuthContext = createContext();
const AuthProvider = ({children}) => {
  const allContext = useFirebase();
  const allFoods= useFoods();
  const allHandles = useHandleCart();
  console.log(useFirebase)
    return (
        <div >
            <AuthContext.Provider value={{allContext,allFoods,allHandles}}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;