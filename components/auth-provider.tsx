'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';
import { User } from 'next-auth';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  signIn: () => void;
  signOut: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const { data: session, status } = useSession();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (status !== 'loading') {
      setLoading(false);
      
      // Save user data to Firebase when session is available
      if (session?.user) {
        const saveUserToFirebase = async () => {
          try {
            const response = await fetch('/api/user/save', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
            });
            
            if (!response.ok) {
              console.error('Failed to save user data to Firebase');
            }
          } catch (error) {
            console.error('Error saving user to Firebase:', error);
          }
        };
        
        saveUserToFirebase();
      }
    }
  }, [status, session])

  const handleSignIn = () => {
    signIn('google');
  };

  const handleSignOut = () => {
    signOut();
  };

  const value: AuthContextType = {
    user: session?.user || null,
    loading,
    signIn: handleSignIn,
    signOut: handleSignOut,
    isAuthenticated: !!session?.user,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
      
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
