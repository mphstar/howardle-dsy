import Image from "next/image";
import { IoIosNotifications } from "react-icons/io";

const RightHeader = () => {
  return (
    <div className="flex flex-row gap-3 items-center">
      <div data-aos="zoom-in" data-aos-duration="1000" className="bg-[#F5F5FB] dark:bg-[#39384B] duration-300 ease-in-out hover:bg-[#ececec] h-[40px] p-3 w-[40px] md:w-[45px] md:h-[45px] rounded-full flex justify-center items-center">
        <IoIosNotifications className="dark:fill-white duration-300 ease-in-out" />
      </div>
      <div data-aos="zoom-in" data-aos-duration="1000" className="bg-[#F5F5FB] dark:bg-[#39384B] duration-300 ease-in-out hover:bg-[#ececec] h-[40px] gap-4 pl-8 rounded-full flex justify-center items-center">
        <span className="text-sm dark:text-white duration-300 ease-in-out">Hi, Mphstar</span>
        <Image
          className="w-fit h-full rounded-full"
          src={"/assets/images/profile.png"}
          width={100}
          height={100}
          alt="Icons Profile"
        />
      </div>
      <div data-aos="zoom-in" data-aos-duration="1000" className="bg-[#C9F5B8] hover:bg-[#b5dda4] hidden h-[40px] gap-4 px-8 rounded-full md:flex justify-center items-center">
        <Image
          className=""
          src={"/assets/icons/ic_category.svg"}
          width={16}
          height={16}
          alt="Icons Category"
        />
        <span>Upgrade</span>
      </div>
    </div>
  );
};

export default RightHeader;
