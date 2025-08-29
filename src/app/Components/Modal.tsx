import { FC } from "react";
import LoginIcon from "../../../public/Svgs/LoginIcon";
import { ModalProps } from "../types/ModalType";

const Modal: FC<ModalProps> = ({
  onChange,
  title,
  desc,
  inputObj,
  submitBtnTxt,
}) => {
  function handleDismissModal() {
    onChange(false);
  }

  return (
    <div className="bg-white rounded-3xl p-4 w-full h-full">
      <div className="flex items-center justify-center mt-7 mb-4">
        <picture className="bg-[#F8F8F8] flex items-center justify-center w-12 rounded-full h-12">
          <LoginIcon />
        </picture>
      </div>
      <p className="font-bold text-xl pb-1.5 text-black text-center">{title}</p>
      <p className="text-sm font-normal text-center text-[#0000007A]">{desc}</p>

      <div className="px-10 mt-14 space-y-4">
        {inputObj?.map((item) => {
          return (
            <div key={item?.key}>
              <p className="text-black font-semibold text-sm pb-1">
                {item?.title}
              </p>
              <input
                className="bg-[#F4F4F4] font-normal text-sm outline-none w-full rounded-lg py-3 px-2"
                placeholder={item?.placeHolderTxt}
                type={item?.type === "password" ? "password" : "text"}
              />
            </div>
          );
        })}
        <div
          role="button"
          onClick={handleDismissModal}
          className="bg-[#5057EA] cursor-pointer rounded-xl p-3 mb-12 mt-5"
        >
          <p className="font-semibold text-sm text-center text-white">
            {submitBtnTxt || "Sign-up"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
