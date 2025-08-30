"use client";
import { useState } from "react";
import EntryCard from "./EntryCard";
import PostCard from "./PostCard";
import useAuth from "../hooks/useAuth";
import Modal from "./Modal";
import { motion, AnimatePresence } from "framer-motion";
import { usePosts } from "../providers/PostsProvider";

export default function HomeContainer() {
  const [input, setInput] = useState("");
  const { isLoggedIn } = useAuth();
  const [showAuthModal, setShowAuthModal] = useState(false);

  const { posts, addPost } = usePosts();

  const handleSubmit = (data: {
    text: string;
    styles?:
      | {
          bold?: boolean;
          italic?: boolean;
          underline?: boolean;
        }
      | undefined;
  }) => {
    if (!data.text.trim()) return;

    addPost({
      author: "You",
      time: "Just now",
      text: data.text,
      styles: data.styles ?? {},
    });
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

      <AnimatePresence>
        {posts.map((post, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: -20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            <PostCard
              author={post.author}
              time={post.time}
              content={post.text}
              styles={
                post?.styles
                  ? {
                      bold: post.styles.bold ?? false,
                      italic: post.styles.italic ?? false,
                      underline: post.styles.underline ?? false,
                    }
                  : undefined
              }
            />
          </motion.div>
        ))}
      </AnimatePresence>

      {showAuthModal && <Modal onChange={setShowAuthModal} />}
    </div>
  );
}
