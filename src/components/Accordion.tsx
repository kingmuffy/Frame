import React, { useRef, useEffect } from "react";
import { Plus, Minus } from "lucide-react";

interface AccordionProps {
  number: number;
  question: string;
  answer: string;
  isOpen: boolean;
  toggle: () => void;
}

const Accordion: React.FC<AccordionProps> = ({
  number,
  question,
  answer,
  isOpen,
  toggle,
}) => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.style.maxHeight = isOpen
        ? `${contentRef.current.scrollHeight}px`
        : "0px";
    }
  }, [isOpen]);

  return (
    <div className="self-stretch flex flex-col w-full mt-9">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="text-gray-700 text-sm font-light leading-7 my-auto">
            {number.toString().padStart(2, "0")}
          </div>
          <div className="lg:ml-24  ">
            <span className="ml-2 font-medium lg:font-semibold lg:text-xl text-sm text-grey-600 truncate">
              {question}
            </span>
          </div>
        </div>

        <button
          onClick={toggle}
          className="text-gray-700 text-3xl font-medium hover:text-grey-800 transition duration-300"
        >
          {isOpen ? <Minus /> : <Plus />}
        </button>
      </div>
      <div
        ref={contentRef}
        className="px-5 overflow-hidden text-left transition-all duration-500"
      >
        {isOpen && (
          <p className="py-1 lg:ml-24 ml-2  pr-5 lg:pr-8font-normal leading-normal text-justify whitespace-pre-line text-xs lg:text-lg">
            {answer}
          </p>
        )}
      </div>
    </div>
  );
};

export default Accordion;
