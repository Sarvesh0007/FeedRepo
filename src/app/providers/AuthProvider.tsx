"use client";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { AuthContextType, StoredUser, User } from "../types/UserType";

const SESSION_KEY = "forum-user";
const USERS_KEY = "forum-users";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem(SESSION_KEY);
    if (storedUser) setUser(JSON.parse(storedUser));
    setLoading(false);
  }, []);

  // helpers
  const readUsers = (): StoredUser[] =>
    JSON.parse(localStorage.getItem(USERS_KEY) || "[]");

  const writeUsers = (users: StoredUser[]) =>
    localStorage.setItem(USERS_KEY, JSON.stringify(users));

  const login = (userData: User) => {
    localStorage.setItem(SESSION_KEY, JSON.stringify(userData));
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem(SESSION_KEY);
    setUser(null);
  };

  // register a user (persists to forum-users)
  const register = ({
    email,
    password,
    name,
  }: {
    email: string;
    password: string;
    name?: string;
  }) => {
    const users = readUsers();
    const exists = users.some((u) => u.email === email);
    if (exists) throw new Error("User already exists. Please sign in.");

    const newUser: StoredUser = {
      id: email,
      email,
      password,
      name: name || email.split("@")[0],
    };
    writeUsers([...users, newUser]);
  };

  const loginWithCredentials = (email: string, password: string) => {
    const users = readUsers();
    const testAccounts = [
      { email: "demo@example.com", password: "password123" },
      { email: "test@user.com", password: "testpass" },
    ];

    const found =
      users.find((u) => u.email === email && u.password === password) ||
      testAccounts.find((u) => u.email === email && u.password === password);

    if (!found) throw new Error("No user with these credentials found.");

    login({
      id: found.email,
      name: "name" in found ? (found as StoredUser).name : email.split("@")[0],
      email,
    });
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoggedIn: !!user,
        loading,
        login,
        logout,
        register,
        loginWithCredentials,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useContext doesn't exists!");
  return ctx;
}
