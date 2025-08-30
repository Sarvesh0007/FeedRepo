"use client";
import React, { useState } from "react";
import {
  ArrowIcon,
  BinIcon,
  CodeBracket,
  HappyIcon,
} from "../../../public/Svgs/Svgs";
import { EntryCardProps } from "../types/ModalType";

export default function EntryCardContainer({
  notImplemented,
  input,
  onSubmit,
  onInputChange,
}: EntryCardProps) {
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isUnderline, setIsUnderline] = useState(false);

  const getInputStyle = () => {
    const style: React.CSSProperties = {};
    if (isBold) style.fontWeight = "bold";
    if (isItalic) style.fontStyle = "italic";
    if (isUnderline) style.textDecoration = "underline";
    return style;
  };

  return (
    <div className="p-3">
      <div className="flex items-center justify-between">
        <div className="bg-[#00000008] p-1 rounded-md">
          <div className="flex items-center gap-4 justify-evenly">
            <span
              className="flex items-center gap-2.5 bg-white shadow p-1.5 rounded-md cursor-pointer"
              onClick={notImplemented}
            >
              <p className="text-xs font-medium text-black">Paragraph</p>
              <ArrowIcon />
            </span>

            <span
              className={`flex items-center px-2 rounded-md cursor-pointer ${
                isBold ? "bg-white shadow font-bold" : "font-medium"
              }`}
              onClick={() => setIsBold((prev) => !prev)}
            >
              <p className=" text-black">B</p>
            </span>

            <span
              className={`flex items-center px-2.5 rounded-md cursor-pointer ${
                isItalic ? "bg-white shadow font-bold" : "font-medium"
              }`}
              onClick={() => setIsItalic((prev) => !prev)}
            >
              <p className="italic text-[#727272]/80">I</p>
            </span>

            <span
              className={`flex items-center px-2 rounded-md cursor-pointer ${
                isUnderline ? "bg-white shadow font-bold" : "font-medium"
              }`}
              onClick={() => setIsUnderline((prev) => !prev)}
            >
              <p className="underline text-[#727272]/80">U</p>
            </span>

            <div className="w-px h-7 bg-[#0000001A]" />

            <div
              className="flex flex-col gap-0.5 cursor-pointer"
              onClick={notImplemented}
            >
              {Array.from({ length: 3 }).map((_, index) => (
                <div className="flex gap-0.5 items-center" key={index}>
                  <div className="w-0.5 h-0.5 rounded-full bg-[#727272]" />
                  <div className="w-1.5 h-px rounded-full bg-[#727272]" />
                </div>
              ))}
            </div>

            <div
              className="flex flex-col cursor-pointer"
              onClick={notImplemented}
            >
              {Array.from({ length: 3 }).map((_, index) => (
                <div className="flex gap-0.5 items-center" key={index}>
                  <p className="text-black text-[2px]">{index + 1}</p>
                  <div className="w-1.5 h-px rounded-full bg-[#727272]" />
                </div>
              ))}
            </div>

            <div className="w-px h-7 bg-[#0000001A]" />

            <span
              className="italic text-[#727272]/80 cursor-pointer"
              onClick={notImplemented}
            >
              99
            </span>

            <span className="pr-3 cursor-pointer" onClick={notImplemented}>
              <CodeBracket />
            </span>
          </div>
        </div>

        <div
          className="bg-[#FF000026] rounded-md p-2.5 cursor-pointer"
          onClick={notImplemented}
        >
          <BinIcon />
        </div>
      </div>

      <div className="flex items-center gap-1 mt-3.5">
        <HappyIcon />
        <input
          type="text"
          className="flex-1 outline-none text-sm text-black ml-2"
          placeholder="How are you feeling today?"
          value={input}
          onChange={(e) => onInputChange(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && onSubmit()}
          style={getInputStyle()}
        />
      </div>
    </div>
  );
}
