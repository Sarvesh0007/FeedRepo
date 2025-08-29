"use client";

import { useEffect, useRef, useState } from "react";
import { LOGIN_OBJ } from "../../../Constants/ModalConst";
import Modal from "../Components/Modal";
import { useRouter } from "next/navigation";

export default function AuthPagege() {
  const [openModal, setOpenModal] = useState<boolean>(true);

  const modalRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  //For better User experience I am adding the dismiss when clicked outside functionality here
  useEffect(() => {
    function handleClickedOutside(event: MouseEvent) {
      if (
        modalRef.current &&
        !modalRef?.current?.contains(event.target as Node)
      ) {
        router.push("/");
        setOpenModal(false);
      }
    }
    document.addEventListener("mousedown", handleClickedOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickedOutside);
  }, [openModal]);

  return (
    <main className="h-screen w-full flex justify-center items-center bg-white">
      {openModal && (
        <div className="fixed flex items-center justify-center backdrop-blur-lg bg-black/30 inset-0">
          <div
            ref={modalRef}
            className="bg-[#EBEBEB] px-3 pt-3 min-w-[498px] min-h-[572px] rounded-3xl"
          >
            <Modal
              inputObj={LOGIN_OBJ}
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
    </main>
  );
}
