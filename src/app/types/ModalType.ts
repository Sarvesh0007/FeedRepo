export interface InputField {
  key: string;
  title: string;
  placeHolderTxt: string;
  type?: "text" | "password";
  input: string;
}

export interface ModalProps {
  onChange: (open: boolean) => void;
  title: string;
  desc: string;
  inputObj: InputField[];
  submitBtnTxt?: string;
}

export interface PostCardProps {
  author: string;
  time: string;
  content: string;
}

export interface EntryCardProps {
  input: string;
  onInputChange: (val: string) => void;
  onSubmit: () => void;
  notImplemented?: () => void;
}

export interface Post {
  author: string;
  time: string;
  text: string;
}
