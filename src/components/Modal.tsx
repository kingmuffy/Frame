import React from "react";
import { Button } from "./Buttons";
import { X } from "lucide-react";

type propTypes = {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
};
const Modal: React.FC<propTypes> = ({ open, onClose, children }) => {
  return (
    <div
      className={`fixed inset-0 z-50 flex justify-center items-center 
          transition-opacity ${open ? "visible bg-black/30" : "invisible"}`}
      onClick={onClose}
    >
      <div
        className={`bg-white rounded-lg shadow-lg p-6 
            transition-transform sm:max-w-md max-w-2xl w-full mx-5
            ${open ? "scale-100 opacity-100" : "scale-110 opacity-0"}`}
        onClick={(e) => e.stopPropagation()}
      >
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 py-1 px-2 
              border border-neutral-200 rounded-md text-gray-400
              bg-white hover:bg-gray-50 hover:text-gray-600"
          onClick={onClose}
        >
          <X />
        </Button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
