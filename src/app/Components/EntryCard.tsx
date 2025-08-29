import React from "react";
import {
  ArrowIcon,
  BinIcon,
  CodeBracket,
  HappyIcon,
  MicIcon,
  PlusIcon,
  SendButtonIcon,
  VideoIcon,
} from "../../../public/Svgs/Svgs";

export default function EntryCard() {
  return (
    <div className="bg-[#00000008] p-2 rounded-3xl h-[224px] w-[568px]">
      <div className="w-full flex justify-between flex-col rounded-3xl shadow-sm border border-[#D9D9D9] bg-white h-full">
        <div className="p-3">
          <div className="flex items-center justify-between">
            <div className="bg-[#00000008] p-1 rounded-md">
              <div className="flex items-center gap-4 justify-evenly">
                <span className="flex items-center gap-2.5 bg-white shadow p-1.5 rounded-md">
                  <p className="text-xs font-medium text-black">Paragraph</p>
                  <ArrowIcon />
                </span>
                <span className="flex items-center bg-white px-2 rounded-md">
                  <p className="font-bold text-black">B</p>
                </span>
                <span className="italic text-[#727272]/80">I</span>
                <span className="underline text-[#727272]/80">U</span>
                <div className="w-px h-7 bg-[#0000001A]" />
                <div className="flex flex-col gap-0.5">
                  {Array.from({ length: 3 }).map((_, index) => (
                    <div className="flex gap-0.5 items-center" key={index}>
                      <div className="w-0.5 h-0.5 rounded-full bg-[#727272]" />
                      <div className="w-1.5 h-px rounded-full bg-[#727272]" />
                    </div>
                  ))}
                </div>
                <div className="flex flex-col">
                  {Array.from({ length: 3 }).map((_, index) => (
                    <div className="flex gap-0.5 items-center" key={index}>
                      <p className="text-black text-[2px]">{index + 1}</p>
                      <div className="w-1.5 h-px rounded-full bg-[#727272]" />
                    </div>
                  ))}
                </div>
                <div className="w-px h-7 bg-[#0000001A]" />
                <span className="italic text-[#727272]/80">99</span>
                <span className="pr-3">
                  <CodeBracket />
                </span>
              </div>
            </div>
            <div className="bg-[#FF000026] rounded-md p-2.5">
              <BinIcon />
            </div>
          </div>
          <div className="flex items-center gap-1 mt-3.5">
            <HappyIcon />
            <p className="font-medium text-sm text-[#00000066]">
              How are you feeling today?
            </p>
          </div>
        </div>
        <div className="flex w-full border-t border-[#D9D9D9] justify-between px-3 items-center">
          <div className="flex items-center gap-3 my-2">
            <div className="bg-[#0000000F] p-1.5 rounded-md">
              <PlusIcon />
            </div>
            <MicIcon />
            <VideoIcon />
          </div>
          <SendButtonIcon />
        </div>
      </div>
    </div>
  );
}
