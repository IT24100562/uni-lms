import { createContext, useContext, useEffect, useMemo, useState } from "react";

export type UserRole = "admin" | "lecturer" | "student";

interface AuthState {
  role: UserRole | null;
}

interface AuthContextValue {
  role: UserRole | null;
  isAuthenticated: boolean;
  loginAs: (role: UserRole) => void;
  logout: () => void;
}

const STORAGE_KEY = "auth-session-v1";
const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<AuthState>(() => {
    if (typeof window === "undefined") {
      return { role: null };
    }

    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return { role: null };
    }

    try {
      return JSON.parse(raw) as AuthState;
    } catch {
      return { role: null };
    }
  });

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [state]);

  const loginAs = (role: UserRole) => {
    setState({ role });
  };

  const logout = () => {
    setState({ role: null });
  };

  const value = useMemo(
    () => ({
      role: state.role,
      isAuthenticated: state.role !== null,
      loginAs,
      logout,
    }),
    [state.role]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }

  return context;
}
