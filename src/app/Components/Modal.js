import { useEffect, useRef } from "react";

export default function Modal({ onChange }) {
  const modalRef = useRef(null);

  useEffect(() => {
    function handleClickedOutside(event) {
      if (modalRef.current && !modalRef?.current?.contains(event.target)) {
        onChange(false);
      }
    }
    document.addEventListener("mousedown", handleClickedOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickedOutside);
  }, [onChange]);

  return (
    <div className="bg-gray-300 p-1 w-56 h-44 rounded-md pb-16" ref={modalRef}>
      <div className="bg-white rounded-md p-4 w-full h-full">xx</div>
    </div>
  );
}
