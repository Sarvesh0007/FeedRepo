import { InputField } from "@/app/types/ModalType";

export const SIGN_UP_OBJ: InputField[] = [
  {
    key: "email",
    title: "Email or username",
    placeHolderTxt: "Enter your email or username",
  },
  {
    key: "password_key",
    title: "Password",
    placeHolderTxt: "Enter your password",
    type: "password",
  },
  {
    key: "repeat_password_key",
    title: "Repeat password",
    placeHolderTxt: "Enter your password again",
    type: "password",
  },
];

export const LOGIN_OBJ: InputField[] = [
  {
    key: "email",
    title: "Email or username",
    placeHolderTxt: "Enter your email or username",
  },
  {
    key: "password_key",
    title: "Password",
    placeHolderTxt: "Enter your password",
    type: "password",
  },
];
