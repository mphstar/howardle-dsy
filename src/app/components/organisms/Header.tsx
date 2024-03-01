import Image from "next/image";
import LeftHeader from "../molecules/LeftHeader";
import RightHeader from "../molecules/RightHeader";

const Header = () => {
  return (
    <div className="flex flex-row py-6 sticky items-center top-0 z-[99] backdrop-blur-lg px-8">
      <LeftHeader />
      <div className="flex-1 items-center flex justify-start md:justify-center">
      </div>
      <RightHeader />
    </div>
  );
};

export default Header;
