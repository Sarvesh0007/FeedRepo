"use client";

import { FC, useState, useEffect, useRef } from "react";
import LoginIcon from "../../../public/Svgs/Svgs";
import { ModalProps } from "../types/ModalType";
import { useRouter } from "next/navigation";
import useAuth from "../hooks/useAuth";
import { LOGIN_OBJ, SIGN_UP_OBJ } from "../../../Constants/ModalConst";
import ModalBody from "./ModalBody";
import { AnimatePresence, motion } from "framer-motion";

const Modal: FC<ModalProps> = ({ onChange, page }) => {
  const router = useRouter();
  const { user, isLoggedIn, register, loginWithCredentials } = useAuth();
  const modalRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState<Record<string, string>>({});
  const [modalType, setModalType] = useState<"signIn" | "signUp">("signIn");

  useEffect(() => {
    if (isLoggedIn && user) {
      setFormData({
        email: user.email,
        password_key: "",
        repeat_password_key: "",
      });
    } else {
      const lastEmail = localStorage.getItem("last-login-email");
      if (lastEmail && modalType === "signIn") {
        setFormData((prev) => ({ ...prev, email: lastEmail }));
      }
    }
  }, [modalType, isLoggedIn, user]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onChange(false);
        router.push("/");
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onChange, router]);

  function handleInputChange(key: string, value: string) {
    setFormData((prev) => ({ ...prev, [key]: value }));
  }

  async function handleSubmit() {
    try {
      if (modalType === "signIn") {
        if (!formData.email || !formData.password_key) {
          alert("Email and password are required.");
          return;
        }
        loginWithCredentials(formData.email, formData.password_key);
        onChange(false);
        router.push("/");
      } else {
        // sign up
        if (
          !formData.email ||
          !formData.password_key ||
          !formData.repeat_password_key
        ) {
          alert("All fields are required for sign up.");
          return;
        }
        if (formData.password_key !== formData.repeat_password_key) {
          alert("Passwords do not match.");
          return;
        }

        await Promise.resolve(
          register({
            email: formData.email,
            password: formData.password_key,
          })
        );

        localStorage.setItem("last-login-email", formData.email);
        alert("Sign-up successful! Please sign in with your new account.");
        setModalType("signIn");
        setFormData({
          email: formData.email,
          password_key: "",
          repeat_password_key: "",
        });
      }
    } catch (e: unknown) {
      if (typeof e === "object" && e !== null && "message" in e) {
        alert(
          (e as { message?: string }).message ||
            "Something went wrong. Please try again."
        );
      } else {
        alert("Something went wrong. Please try again.");
      }
    }
  }

  const handleFormSubmit = () => {
    setModalType((p) => (p === "signIn" ? "signUp" : "signIn"));
  };

  const inputObj = modalType === "signIn" ? LOGIN_OBJ : SIGN_UP_OBJ;

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-black/30s backdrop-blur-sms zs-50 ${
        page === "authPage" ? "" : "bg-black/30 backdrop-blur-sm z-50"
      }`}
    >
      <AnimatePresence></AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -20, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.3 }}
        ref={modalRef}
        className="bg-[#EBEBEB] pt-2 px-2 rounded-3xl"
      >
        <div className="bg-white rounded-3xl p-6 w-[420px] min-h-[400px] shadow-lg">
          <div className="flex items-center justify-center mt-4 mb-6">
            <picture className="bg-[#F8F8F8] flex items-center justify-center w-12 rounded-full h-12">
              <LoginIcon />
            </picture>
          </div>

          <p className="font-bold text-xl pb-1.5 text-black text-center">
            {modalType === "signIn"
              ? "Sign in to continue"
              : "Create an account to continue"}
          </p>
          <p className="text-sm font-normal text-center text-[#0000007A]">
            {modalType === "signIn"
              ? "Sign in to access all the features on this app"
              : "Create an account to access all the features on this app"}
          </p>

          <ModalBody
            formData={formData}
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
            inputObj={inputObj}
            isLoggedIn={isLoggedIn}
            modalType={modalType}
          />
        </div>

        {!isLoggedIn ? (
          <div className="flex items-center gap-2 justify-center py-4">
            <p className="text-[#00000099] font-medium text-sm">
              {modalType === "signIn"
                ? "Don't have an account?"
                : "Already have an account?"}
            </p>
            <button
              className="font-semibold cursor-pointer text-sm text-[#5057EA]"
              onClick={handleFormSubmit}
              onKeyDown={(e) => e.key === "Enter" && handleFormSubmit()}
            >
              {modalType === "signIn" ? "Sign Up" : "Sign In"}
            </button>
          </div>
        ) : (
          <div className="flex items-center opacity-20 gap-2 justify-center py-4">
            <button className="font-bold text-sm text-red-500">
              Welcome back! You are already logged in 🔥
            </button>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default Modal;
