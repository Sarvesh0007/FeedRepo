import React from "react";
import { PostCardProps } from "../types/ModalType";
import Image from "next/image";
import userIcon from "../../../public/userIcon.svg";
import { HeartIcon, ReplyIcon, ShareIcon } from "../../../public/Svgs/Svgs";

export default function PostCard({ author, time, content }: PostCardProps) {
  const notImplemented = () => alert("Function not implemented");

  return (
    <div className="w-[568px] px-1.5 pt-1.5 bg-[#00000008] border border-gray-200 shadow rounded-3xl">
      <div className="bg-white rounded-3xl border min-h-[164px] shadow border-[#D9D9D9] p-3">
        <div className="flex items-center gap-2">
          <Image
            alt="User Avatar"
            width="37"
            height="37"
            src={userIcon}
            quality={75}
            className="rounded-md object-cover"
          />
          <div className="flex flex-col items-start">
            <p className="font-semibold text-sm text-[#000000]">
              {author || "Sarvesh Mishra"}
            </p>
            <p className="text-xs font-medium text-[#0000005E]">
              {time || "5 mins"}
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3 pt-3">
          <div className="rounded-full relative flex items-center justify-center p-3 w-6 h-6 bg-[#F2F2F2]">
            <p>🤩</p>
          </div>

          <p className="text-[#000000D4] font-medium text-sm">{content}</p>
        </div>
      </div>
      <div className="flex items-center gap-3 px-5 py-2.5">
        <span className="cursor-pointer" onClick={notImplemented}>
          <HeartIcon />
        </span>
        <span className="cursor-pointer" onClick={notImplemented}>
          <ReplyIcon />
        </span>
        <span className="cursor-pointer" onClick={notImplemented}>
          <ShareIcon />
        </span>
      </div>
    </div>
  );
}
