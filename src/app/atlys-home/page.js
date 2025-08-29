"use client";

import { useEffect, useRef, useState } from "react";
import Modal from "../Components/Modal";

export default function HomePagege() {
  const [openModal, setOpenModal] = useState(false);

  const modalRef = useRef(null);

  function handlClick() {
    setOpenModal(true);
  }

  useEffect(() => {
    function handleClickedOutside(event) {
      if (modalRef.current && !modalRef?.current?.contains(event.target)) {
        setOpenModal(false);
      }
    }
    document.addEventListener("mousedown", handleClickedOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickedOutside);
  }, [openModal]);

  return (
    <div className="h-screen w-full flex justify-center items-center bg-white">
      <div className="cursor-pointer" onClick={handlClick}>
        Modalclick
      </div>
      {openModal && (
        <div className="fixed flex items-center justify-center backdrop-blur-lg bg-black/30 inset-0">
          <div
            ref={modalRef}
            className="bg-[#EBEBEB] px-3 pt-3 min-w-[498px] min-h-[572px] rounded-3xl"
          >
            <Modal
              inputObj={inputObj}
              onChange={setOpenModal}
              title="Sign in to continue"
              desc="Sign in to access all the features on this app"
            />
            <div className="flex items-center justify-center py-4">
              <span className="font-semibold text-xs text-[#979797] mr-3">
                Do you have a account
              </span>
              <span className="font-bold text-sm text-[#5057EA]">SignUp</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const inputObj = [
  {
    key: "email_key",
    title: "Email or username",
    placeHolderTxt: "Enter your email or username",
  },
  {
    key: "password_key",
    title: "Password",
    placeHolderTxt: "Enter your password",
  },
  {
    key: "repeat_password_key",
    title: "Repeat password",
    placeHolderTxt: "Enter your password again",
  },
];
