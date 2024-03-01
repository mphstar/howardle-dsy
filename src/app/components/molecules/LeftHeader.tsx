import Image from "next/image";

const LeftHeader = () => {
  return (
    <div data-aos="fade-right" data-aos-duration="1000" className="md:flex flex-row hidden items-center">
      <div className="bg-[#080A1E] z-[4] h-[45px] w-[45px] rounded-full flex justify-center items-center">
        <Image
          src={"/assets/icons/ic_search.svg"}
          width={24}
          height={24}
          alt="Icons Search"
        />
      </div>
      <div className="bg-[#F5F5FB] dark:bg-[#39384B] dark:text-white w-fit -translate-x-3 h-fit flex rounded-full px-8">
        <input
          className="outline-none bg-transparent py-3"
          placeholder="Task name, status..."
          type="text"
          name=""
          id=""
        />
      </div>
    </div>
  );
};

export default LeftHeader;
