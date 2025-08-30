"use client";
import { useEffect, useRef, useState } from "react";
import Modal from "../Components/Modal";
import { useRouter } from "next/navigation";

export default function AuthPage() {
  const [openModal, setOpenModal] = useState(true);
  const modalRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        openModal &&
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setOpenModal(false);
        router.push("/");
      }
    }

    document.addEventListener("mouseup", handleClickOutside);
    return () => {
      document.removeEventListener("mouseup", handleClickOutside);
    };
  }, [openModal, router]);

  return (
    <main ref={modalRef}>
      {openModal && (
        <div>
          <Modal page="authPage" onChange={setOpenModal} />
        </div>
      )}
    </main>
  );
}
