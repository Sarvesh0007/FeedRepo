import { Post } from "./ModalType";

export interface User {
  id: string;
  name: string;
  email: string;
}

export interface AuthContextType {
  user: User | null;
  isLoggedIn: boolean;
  loading: boolean;
  login: (userData: User) => void;
  logout: () => void;
  register: (payload: {
    email: string;
    password: string;
    name?: string;
  }) => void;
  loginWithCredentials: (email: string, password: string) => void;
}

export interface StoredUser {
  id: string;
  name: string;
  email: string;
  password: string;
}

export interface PostsContextType {
  posts: Post[];
  addPost: (post: Post) => void;
  clearPosts: () => void;
}
