"use client";

import { useTheme } from "next-themes";
import { FaGithub, FaInstagram, FaUser, FaWeebly } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdNightlight, MdSunny } from "react-icons/md";

const Sidebar = () => {
  const { theme, setTheme } = useTheme();

  const toggleDarkMode = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <>
      <a href="https://github.com/mphstar" target="_blank">
        <div
          data-aos="zoom-in"
          className="flex bg-[#E5E7F466]/30 hover:bg-[#E5E7F466]/100 dark:hover:bg-[#E5E7F466]/10 duration-300 backdrop-blur-md p-3 w-fit rounded-full"
        >
          <FaGithub className="dark:fill-white" />
        </div>
      </a>
      <a href="https://www.linkedin.com/in/mphstar/" target="_blank">
        <div
          data-aos="zoom-in"
          className="flex bg-[#E5E7F466]/30 hover:bg-[#E5E7F466]/100 dark:hover:bg-[#E5E7F466]/10 duration-300 backdrop-blur-md p-3 w-fit rounded-full"
        >
          <FaLinkedin className="dark:fill-white" />
        </div>
      </a>
      <a href="https://www.instagram.com/mphstar._" target="_blank">
        <div
          data-aos="zoom-in"
          className="flex bg-[#E5E7F466]/30 hover:bg-[#E5E7F466]/100 dark:hover:bg-[#E5E7F466]/10 duration-300 backdrop-blur-md p-3 w-fit rounded-full"
        >
          <FaInstagram className="dark:fill-white" />
        </div>
      </a>
      <a href="https://mphstar.my.id" target="_blank">
        <div
          data-aos="zoom-in"
          className="flex bg-[#E5E7F466]/30 hover:bg-[#E5E7F466]/100 dark:hover:bg-[#E5E7F466]/10 duration-300 backdrop-blur-md p-3 w-fit rounded-full"
        >
          <FaUser className="dark:fill-white" />
        </div>
      </a>
      <div
        data-aos="zoom-in"
        onClick={toggleDarkMode}
        className="flex md:hidden bg-[#E5E7F466]/30 hover:bg-[#E5E7F466]/100 dark:hover:bg-[#E5E7F466]/10 duration-300 backdrop-blur-md p-3 w-fit rounded-full"
      >
        {theme !== "dark" ? (
          <MdNightlight className="dark:fill-white" />
        ) : (
          <MdSunny className="dark:fill-white" />
        )}
      </div>
    </>
  );
};

export default Sidebar;
