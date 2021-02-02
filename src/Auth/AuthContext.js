import { useState, createContext, useContext } from 'react';

const localStorageKey = 'AUTH_USER';
const AuthContext = createContext();

export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return (
    <AuthContext.Provider value={auth}>
      {children}
    </AuthContext.Provider>
  );
}
  
export function useProvideAuth() {
  const localStorageUser = localStorage.getItem(localStorageKey);
  const [user, setUser] = useState(localStorageUser ? JSON.parse(localStorageUser) : null);

    const signin = (user, remeber = false) => {
        setUser(user);
        if(remeber) {
          localStorage.setItem(localStorageKey,JSON.stringify(user))
        }
    };

    const signout = () => {
        setUser(null);
        localStorage.removeItem(localStorageKey)
    };

    return {
        user,
        signin,
        signout
    };
}

export function useAuth() {
    return useContext(AuthContext);
}