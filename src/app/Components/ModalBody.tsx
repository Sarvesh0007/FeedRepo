import { ModalBodyProps } from "../types/ModalType";

export default function ModalBody({
  inputObj,
  modalType,
  handleInputChange,
  isLoggedIn,
  handleSubmit,
  formData,
}: ModalBodyProps) {
  return (
    <div className="px-6 mt-10 space-y-4">
      {inputObj?.map((item) => (
        <div key={item.key}>
          <p className="text-black font-semibold text-sm pb-1">{item.title}</p>
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
  );
}
