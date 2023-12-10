import React, { useState, useEffect } from "react";
import Accordion from "./Accordion";
import faqData from "../constants/faq.json";
import { ChevronDown, ChevronUp, Shuffle } from "lucide-react";
import { Button } from "./Buttons";

interface FAQItem {
  question: string;
  answer: string;
}

const Faq: React.FC = () => {
  const [faqs, setFaqs] = useState<FAQItem[]>([]);
  const [openFAQs, setOpenFAQs] = useState<boolean[]>(new Array(5).fill(false));

  const shuffleFAQs = () => {
    const shuffled = [...faqData].sort(() => 0.5 - Math.random());
    setFaqs(shuffled.slice(0, 5));
  };

  const toggleFAQ = (index: number) => {
    const updatedOpenFAQs = [...openFAQs];
    updatedOpenFAQs[index] = !updatedOpenFAQs[index];
    setOpenFAQs(updatedOpenFAQs);
  };

  const allOpen = openFAQs.every((open) => open);

  const toggleAllFAQs = () => {
    setOpenFAQs(new Array(5).fill(!allOpen));
  };

  useEffect(() => {
    shuffleFAQs();
  }, []);

  return (
    <div className="flex flex-col pb-14 lg:pb-36 px-5 lg:px-52">
      <div className="text-gray-700 text-5xl leading-[60px] tracking-tighter self-stretch w-full max-md:max-w-full max-md:text-4xl max-md:leading-[53px]">
        Heading text here...
      </div>
      <div className="text-gray-700 text-sm font-light leading-7 self-stretch w-full mt-7 max-md:max-w-full">
        Lorem ipsum dolor sit amet consectetur. Malesuada sit consequat
        tristique consectetur sit tristique amet in. Etiam egestas elit
        vestibulum commodo.
      </div>

      <div className="self-end my-4 flex items-center">
        <span className="mr-2">{allOpen ? "Close" : "Open"} All</span>
        <Button onClick={toggleAllFAQs} variant="ghost" size="icon">
          {allOpen ? <ChevronUp /> : <ChevronDown />}
        </Button>
      </div>

      {faqs.map((faq, index) => (
        <>
          <Accordion
            key={index}
            number={index + 1}
            question={faq.question}
            answer={faq.answer}
            isOpen={openFAQs[index]}
            toggle={() => toggleFAQ(index)}
          />
          <div className="h-[1px] bg-gray-300 my-2"></div>
        </>
      ))}

      <div className="mt-10">
        <Button
          onClick={shuffleFAQs}
          variant="shuffle"
          className="flex items-center"
        >
          <Shuffle />
          <span className="ml-2">Shuffle</span>
        </Button>
      </div>
    </div>
  );
};

export default Faq;
