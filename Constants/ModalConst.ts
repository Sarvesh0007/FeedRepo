import { InputField } from "@/app/types/ModalType";
export const SIGN_UP_OBJ: InputField[] = [
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

export const LOGIN_OBJ: InputField[] = [
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
];
