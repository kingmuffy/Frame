const Photos = () => {
  return (
    <div className="flex flex-col pb-40 items-stretch ">
      <div className=" leading-[60px] tracking-tighter mt-5  mb-4"> </div>
      <div className="w-full px-5 lg:px-[100px] max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[67%] max-md:w-full max-md:ml-0">
            <img
              src="/assets/images/TopHat-485_Rugby Showhome_Park Facade_04.png"
              alt="des1"
              className="aspect-[1.56] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-5"
            />
          </div>
          <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
            <img
              src="/assets/images/2.png"
              alt="des2"
              className="aspect-[0.76] object-contain object-center w-full overflow-hidden grow max-md:mt-5"
            />
          </div>
        </div>
      </div>
      <img
        src="/assets/images/3.png"
        alt="desc3"
        className="aspect-[2.54] px-5 lg:px-[100px] object-contain object-center w-full overflow-hidden mt-5 max-md:max-w-full"
      />
      <div className="w-full mt-5 px-5 lg:px-[100px] max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
            <img
              src="/assets/images/4.png"
              alt="desc4"
              className="aspect-[0.91] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-5"
            />
          </div>
          <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
            <img
              src="/assets/images/5.png"
              alt="desc5"
              className="aspect-[0.91] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-5"
            />
          </div>
        </div>
      </div>
      <div className="w-full mt-5 px-5 lg:px-[100px] max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
            <img
              src="/assets/images/6.png"
              alt="desc6"
              className="aspect-[1.08] object-contain object-center w-full overflow-hidden grow max-md:mt-5"
            />
          </div>
          <div className="flex flex-col items-stretch w-[67%] ml-5 max-md:w-full max-md:ml-0">
            <img
              src="/assets/images/7.png"
              alt="desc7"
              className="aspect-[2.21] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-5"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Photos;
