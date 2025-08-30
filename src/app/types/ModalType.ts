import { CSSProperties } from "react";

export interface InputField {
  key: string;
  title: string;
  placeHolderTxt: string;
  type?: "text" | "password";
  input?: string;
}

export interface ModalProps {
  onChange: (open: boolean) => void;
  submitBtnTxt?: string;
  page?: string;
}

export interface PostCardProps {
  author: string;
  time: string;
  content: string;
  styles?: {
    bold: boolean;
    italic: boolean;
    underline: boolean;
  };
}

export interface EntryCardProps {
  input: string;
  onInputChange: (val: string) => void;
  onSubmit: (data: { text: string; styles: Post["styles"] }) => void;
  isBold?: boolean;
  isItalic?: boolean;
  isUnderline?: boolean;
  setIsBold?: React.Dispatch<React.SetStateAction<boolean>>;
  setIsItalic?: React.Dispatch<React.SetStateAction<boolean>>;
  setIsUnderline?: React.Dispatch<React.SetStateAction<boolean>>;
  notImplemented?: () => void;
}

export interface Post {
  author: string;
  time: string;
  text: string;
  styles?: {
    bold?: boolean;
    italic?: boolean;
    underline?: boolean;
  } & CSSProperties;
}

export interface ModalBodyProps {
  inputObj: InputField[];
  modalType: string;
  handleInputChange: (key: string, value: string) => void;
  isLoggedIn: boolean;
  handleSubmit: () => void;
  formData: { [key: string]: string };
}
