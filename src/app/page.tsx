"use client";

import { useState } from "react";
import EntryCard from "./Components/EntryCard";
import PostCard from "./Components/PostCard";
import LoginIcon, { HomeIcon } from "../../public/Svgs/Svgs";
import Link from "next/link";
import { Post } from "./types/ModalType";

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    if (!input.trim()) return;
    setPosts([{ author: "You", time: "Just now", text: input }, ...posts]);
    setInput("");
  };

  return (
    <div className="w-full p-5">
      <div className="flex items-center justify-between">
        <picture className="flex items-center gap-2">
          <HomeIcon />
          <p className="text-base font-bold text-black">foo-rum</p>
        </picture>
        <Link href={"/atlys-auth"}>
          <picture className="flex items-center gap-2 cursor-pointer">
            <p className="text-sm font-semibold text-black">Login</p>
            <LoginIcon />
          </picture>
        </Link>
      </div>

      <div className="mt-16 flex flex-col items-center gap-4">
        <EntryCard
          input={input}
          onInputChange={setInput}
          onSubmit={handleSubmit}
        />

        {posts?.map((post, idx) => (
          <PostCard
            key={idx}
            author={post.author}
            time={post.time}
            content={post.text}
          />
        ))}
      </div>
    </div>
  );
}
