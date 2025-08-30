"use client";

import { FC, useState, useEffect, useRef } from "react";
import LoginIcon from "../../../public/Svgs/Svgs";
import { ModalProps } from "../types/ModalType";
import { useRouter } from "next/navigation";
import useAuth from "../hooks/useAuth";
import { LOGIN_OBJ, SIGN_UP_OBJ } from "../../../Constants/ModalConst";

const Modal: FC<ModalProps> = ({ onChange }) => {
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

  const inputObj = modalType === "signIn" ? LOGIN_OBJ : SIGN_UP_OBJ;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm z-50">
      <div ref={modalRef} className="bg-[#EBEBEB] pt-2 px-2 rounded-3xl">
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

          <div className="px-6 mt-10 space-y-4">
            {inputObj.map((item) => (
              <div key={item.key}>
                <p className="text-black font-semibold text-sm pb-1">
                  {item.title}
                </p>
                <input
                  className="bg-[#F4F4F4] font-normal text-sm outline-none w-full rounded-lg py-3 px-2"
                  placeholder={item.placeHolderTxt}
                  type={item.type === "password" ? "password" : "text"}
                  value={formData[item.key] || ""}
                  onChange={(e) => handleInputChange(item.key, e.target.value)}
                  disabled={isLoggedIn}
                />
              </div>
            ))}

            <div
              role="button"
              onClick={!isLoggedIn ? handleSubmit : undefined}
              className={`${
                isLoggedIn
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-[#5057EA] cursor-pointer"
              } rounded-xl p-3 mb-6 mt-6`}
            >
              <p className="font-semibold text-sm text-center text-white">
                {isLoggedIn
                  ? "Already Signed In"
                  : modalType === "signIn"
                  ? "Sign In"
                  : "Sign Up"}
              </p>
            </div>
          </div>
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
              onClick={() =>
                setModalType((p) => (p === "signIn" ? "signUp" : "signIn"))
              }
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
      </div>
    </div>
  );
};

export default Modal;
