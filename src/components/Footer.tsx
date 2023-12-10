import { navLinks } from "../constants/index";
const Footer = () => {
  return (
    <div className="flex flex-col items-stretch pb-6   mx-5 lg:mx-16 bg-stone-00">
      <div className="h-[1px] bg-gray-300 my-4 mx-5 lg:mx-5"></div>
      <div className="flex flex-col md:flex-row w-full justify-between mt-16 px-5 items-start max-md:flex-wrap max-md:mt-10">
        <div className="text-gray-700 text-sm font-bold leading-7 tracking-[3px] mb-4 md:mb-0 md:grow whitespace-nowrap">
          COTTAGE RETREAT
        </div>

        <div className="flex flex-col md:flex-row self-stretch   md:justify-between gap-5">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-gray-700 text-sm font-light leading-7 whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      <div className="flex flex-col-reverse lg:flex-row w-full mt-28 px-5 items-start max-md:flex-wrap max-md:mt-10">
        <div className="flex grow basis-[0%] flex-col items-stretch mt-2.5 lg:mt-0">
          <div className="text-gray-700 text-xs font-light leading-4 whitespace-nowrap">
            Company name © 2023. All rights Reserved.
          </div>
          <div className="flex mt-2 pr-12 items-center max-md:pr-5">
            <div className="text-gray-700 text-xs font-light leading-4 mr-2">
              Design by
            </div>
            <div className="text-gray-700 font-bold  text-xs leading-4">
              Framework
            </div>
          </div>
        </div>

        <div className="text-gray-700 text-sm font-light leading-7 grow shrink basis-auto lg:text-right mb-8 lg:mb-0">
          <div className="mb-5 lg:mb-0">Privacy</div>
          <div>Terms & Conditions</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
