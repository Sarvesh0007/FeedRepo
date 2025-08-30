"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import { Post } from "../types/ModalType";
import { PostsContextType } from "../types/UserType";

const PostsContext = createContext<PostsContextType | undefined>(undefined);

export const PostsProvider = ({ children }: { children: React.ReactNode }) => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("posts");
    if (saved) setPosts(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(posts));
  }, [posts]);

  const addPost = (post: Post) => {
    setPosts((prev) => [post, ...prev]);
  };

  const clearPosts = () => {
    setPosts([]);
    localStorage.removeItem("posts");
  };

  return (
    <PostsContext.Provider value={{ posts, addPost, clearPosts }}>
      {children}
    </PostsContext.Provider>
  );
};

export const usePosts = () => {
  const ctx = useContext(PostsContext);
  if (!ctx) throw new Error("usePosts must be used inside PostsProvider");
  return ctx;
};
