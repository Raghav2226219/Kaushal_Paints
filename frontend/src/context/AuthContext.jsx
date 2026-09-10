import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import {
  signup as signupRequest,
  login as loginRequest,
  logout as logoutRequest,
  getMe,
} from "../services/authService";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const checkAuth = async () => {
    try {
      const data = await getMe();

      setUser(data.user);
    } catch (error) {
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  const signup = async (userData) => {
    const data = await signupRequest(userData);

    setUser(data.user);

    return data;
  };

  const login = async (credentials) => {
    const data = await loginRequest(credentials);

    setUser(data.user);

    return data;
  };

  const logout = async () => {
    await logoutRequest();

    setUser(null);
  };

  const isAuthenticated = Boolean(user);

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        isAuthenticated,
        signup,
        login,
        logout,
        checkAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(
      "useAuth must be used inside AuthProvider"
    );
  }

  return context;
};