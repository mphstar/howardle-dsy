"use client";

import { useTheme } from "next-themes";
import { MdNightlightRound, MdSunny } from "react-icons/md";

const LightModeToogle = () => {
  const { theme, setTheme } = useTheme();

  const toggleDarkMode = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="flex flex-col w-fit mt-8 pointer-events-auto">
      <span className="border-[1px] border-black dark:border-black/30 dark:text-white rounded-full px-2 py-1">
        {theme === "dark" ? 'Dark' : 'Light'} Mode
      </span>
      <div className="flex flex-row">
        <div
          onClick={toggleDarkMode}
          className={`border-[1px] dark:border-black/30 flex items-center justify-center border-[#080A1E] bg-[#080A1E] dark:bg-transparent rounded-full px-3 py-4 w-full`}
        >
          <MdSunny className="dark:fill-white fill-white" />
        </div>
        <div
          onClick={toggleDarkMode}
          className="border-[1px] dark:border-black/30 flex items-center justify-center border-[#080A1E] dark:bg-[#29283A] rounded-full px-3 py-4 w-full"
        >
          <MdNightlightRound className="dark:fill-white" />
        </div>
      </div>
    </div>
  );
};

export default LightModeToogle;
