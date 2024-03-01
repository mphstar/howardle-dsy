"use client";
import { ThemeProvider } from "next-themes";
import React, { useState } from "react";

const Template = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider defaultTheme="dark" attribute="class">
      <div className="flex flex-col bg-white dark:bg-[#29283A] duration-300 ease-in-out">{children}</div>
    </ThemeProvider>
  );
};

export default Template;
