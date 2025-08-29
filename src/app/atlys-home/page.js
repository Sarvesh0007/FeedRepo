"use client";

import { useState } from "react";
import Modal from "../Components/Modal";

export default function HomePagege() {
  const [openModal, setOpenModal] = useState(false);

  function handlClick() {
    setOpenModal(true);
  }

  return (
    <div className="h-screen w-full flex justify-center items-center bg-white">
      <div className="cursor-pointer" onClick={handlClick}>
        Modalclick
      </div>
      {openModal && (
        <div className="fixed flex items-center justify-center backdrop-blur-lg bg-black/30 inset-0">
          <Modal onChange={setOpenModal} />
        </div>
      )}
    </div>
  );
}
