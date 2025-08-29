export interface InputField {
  key: string;
  title: string;
  placeHolderTxt: string;
  type?: "text" | "password";
}

export interface ModalProps {
  onChange: (open: boolean) => void;
  title: string;
  desc: string;
  inputObj: InputField[];
  submitBtnTxt?: string;
}
