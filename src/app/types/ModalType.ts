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

export interface ModalBodyProps {
  inputObj: InputField[];
  modalType: string;
  handleInputChange: (key: string, value: string) => void;
  isLoggedIn: boolean;
  handleSubmit: () => void;
  formData: { [key: string]: string };
}
