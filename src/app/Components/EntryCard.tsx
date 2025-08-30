import React from "react";
import {
  MicIcon,
  PlusIcon,
  SendButtonIcon,
  VideoIcon,
} from "../../../public/Svgs/Svgs";
import { EntryCardProps } from "../types/ModalType";
import EntryCardContainer from "./EntryCardContainer";

export default function EntryCard({
  input,
  onInputChange,
  onSubmit,
}: EntryCardProps) {
  const notImplemented = () => alert("Function not implemented");

  return (
    <div className="bg-[#00000008] p-2 rounded-3xl h-[224px] w-[568px]">
      <div className="w-full flex flex-col justify-between rounded-3xl shadow-sm border border-[#D9D9D9] bg-white h-full">
        <EntryCardContainer
          notImplemented={notImplemented}
          onSubmit={onSubmit}
          onInputChange={onInputChange}
          input={input}
        />

        <div className="flex w-full border-t border-[#D9D9D9] justify-between px-3 items-center">
          <div className="flex items-center gap-3 my-2">
            <div
              className="bg-[#0000000F] p-1.5 rounded-md cursor-pointer"
              onClick={notImplemented}
            >
              <PlusIcon />
            </div>
            <div onClick={notImplemented} className="cursor-pointer">
              <MicIcon />
            </div>
            <div onClick={notImplemented} className="cursor-pointer">
              <VideoIcon />
            </div>
          </div>
          <button
            className="cursor-pointer"
            disabled={input?.length <= 0}
            onClick={onSubmit}
          >
            <SendButtonIcon />
          </button>
        </div>
      </div>
    </div>
  );
}
