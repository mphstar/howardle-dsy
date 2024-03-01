import Image from "next/image";

const CardDoing = ({
  title,
  value,
  style = "light",
}: {
  title: String;
  value: String;
  style?: String;
}) => {
  return (
    <div data-aos="zoom-in" className="flex w-full sm:min-w-[110px] md:min-w-[120px] lg:min-w-[150px]">
      <div className="flex h-40 rounded-[30px]   relative border-[1px] border-white bg-[#E5E7F4]/30 backdrop-blur-md dark:bg-[#39384B]/30 dark:border-[#8A8AAB] duration-300 ease-in-out flex-col  w-full">
        <div className={`absolute top-3 right-3 p-3 ${style == "light" ? 'bg-[#C9F5B8]' : 'bg-[#080A1E] fill-white stroke-white'} rounded-full`}>
          <Image
            className="w-full h-full stroke-white"
            src={"/assets/icons/ic_arrow.svg"}
            width={24}
            height={24}
            alt="Arrow"
          />
        </div>
        <div className="z-10 px-4">
          <h1 className="pb-8 mt-6 text-[#8A8AAA] dark:text-white">{title}</h1>
          <div className="flex flex-row gap-2">
            <span className="text-3xl font-bold dark:text-white">{value}</span>
            <span className="text-xs mt-1 text-[#8A8AAA] dark:text-[#a3a3a3]">tasks</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDoing;
