import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface AuthContextType {
  user: any | null; // Replace 'any' with your actual user type
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  signup: (email: string, password: string, username: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<any | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate checking for an existing session (e.g., from localStorage or a cookie)
    const checkSession = async () => {
      setLoading(true);
      try {
        // In a real app, make an API call to validate session/token
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
          setUser(JSON.parse(storedUser));
          setIsAuthenticated(true);
        }
      } catch (error) {
        console.error('Failed to restore session:', error);
        setUser(null);
        setIsAuthenticated(false);
      } finally {
        setLoading(false);
      }
    };
    checkSession();
  }, []);

  const login = async (email: string, password: string) => {
    // Simulate API call for login
    setLoading(true);
    return new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        if (email === 'test@example.com' && password === 'password') {
          const loggedInUser = { id: '1', email, username: 'TestUser' };
          setUser(loggedInUser);
          setIsAuthenticated(true);
          localStorage.setItem('user', JSON.stringify(loggedInUser));
          setLoading(false);
          resolve();
        } else {
          setLoading(false);
          reject(new Error('Invalid credentials'));
        }
      }, 1000);
    });
  };

  const logout = async () => {
    // Simulate API call for logout
    setLoading(true);
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        setUser(null);
        setIsAuthenticated(false);
        localStorage.removeItem('user');
        setLoading(false);
        resolve();
      }, 500);
    });
  };

  const signup = async (email: string, password: string, username: string) => {
    // Simulate API call for signup
    setLoading(true);
    return new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        if (email && password && username) {
          // In a real app, you'd create a new user in your backend
          console.log('Simulated signup for:', { email, username });
          setLoading(false);
          resolve();
        } else {
          setLoading(false);
          reject(new Error('Signup requires email, password, and username.'));
        }
      }, 1500);
    });
  };

  const value = {
    user,
    isAuthenticated,
    login,
    logout,
    signup,
  };

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading authentication...</div>;
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
