import { Button } from "./Buttons";
import Modal from "./Modal";
import plansData from "../constants/plan.json";
import { useState } from "react";
import { PoundSterling } from "lucide-react";

interface Plan {
  id: number;
  title: string;
  price: string;
  features: string[];
}

const typedPlansData: Plan[] = plansData as Plan[];

const Banner = () => {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);

  return (
    <section className="bg-stone-50 flex flex-col pt-0 items-stretch pb-12">
      <div className="leading-[60px] tracking-tighter mt-14 mb-4">
        <h1 className="pl-5 lg:pl-24 md:pl-24 text-gray-700 text-3xl sm:font:small font-medium">
          Lorem ipsum dolor sit amet consectetur. Et at quam ac vitae.
        </h1>
      </div>

      <div className="flex justify-end mb-0 items-center w-full">
        <div className="max-w-[1440px] w-full flex justify-end pl-5 md:pl-24 lg:pl-24">
          <img
            src="/assets/images/image 2.png"
            alt="Description"
            className="object-contain h-auto w-full mr-1"
          />
        </div>
      </div>

      <div className="pl-5 lg:pl-80">
        <div className="text-gray-700 text-xs tracking-[2px] whitespace-nowrap lg:mt-40 mt-20">
          Subheading
        </div>
        <div className="text-gray-700 lg:mr-28 text-4xl leading-10 tracking-tighter mt-7">
          Lorem ipsum dolor sit amet consectetur. Nibh ut nullam senectus sit
          vitae vitae ultricies.
        </div>
        <div className="text-gray-700 lg:mr-28 text-sm font-light leading-7 mt-9">
          Lorem ipsum dolor sit amet consectetur. Lorem ut eu enim dolor in diam
          velit diam. Pretium nulla eget mattis feugiat vel neque augue nisl
          vitae. Egestas sed erat molestie cras accumsan purus tincidunt.
          Elementum ultrices quis est semper donec tortor. Lacus.
        </div>
        <div className="">
          <Button
            variant="ghost"
            className="bg-gray-500 hover:bg-green-600 text-white rounded-lg px-2 py-1 flex items-center"
            onClick={() => setModalOpen(true)}
          >
            <PoundSterling className="mr-2" /> Plans
          </Button>
        </div>
      </div>

      {isModalOpen && (
        <Modal open={isModalOpen} onClose={() => setModalOpen(false)}>
          {typedPlansData.map((plan, index) => (
            <div key={index} className="my-4">
              <h2 className="text-2xl font-bold">{plan.title}</h2>
              <p className="my-2">{plan.price}</p>
              <ul>
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="my-1">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </Modal>
      )}
    </section>
  );
};

export default Banner;
