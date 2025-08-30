"use client";
import React, { useState } from "react";
import EntryCard from "./EntryCard";
import PostCard from "./PostCard";
import { Post } from "../types/ModalType";
import useAuth from "../hooks/useAuth";
import Modal from "./Modal";

export default function HomeContainer() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [input, setInput] = useState("");
  const { isLoggedIn } = useAuth();
  const [showAuthModal, setShowAuthModal] = useState(false);

  const handleSubmit = () => {
    if (!input.trim()) return;
    setPosts([{ author: "You", time: "Just now", text: input }, ...posts]);
    setInput("");
  };

  const handleEntryClick = () => {
    if (!isLoggedIn) {
      setShowAuthModal(true);
    }
  };

  return (
    <div className="mt-16 flex flex-col items-center gap-4">
      <div onClick={handleEntryClick} className="w-fit">
        <EntryCard
          input={input}
          onInputChange={setInput}
          onSubmit={handleSubmit}
        />
      </div>

      {posts?.map((post, idx) => (
        <PostCard
          key={idx}
          author={post.author}
          time={post.time}
          content={post.text}
        />
      ))}

      {showAuthModal && <Modal onChange={setShowAuthModal} />}
    </div>
  );
}
