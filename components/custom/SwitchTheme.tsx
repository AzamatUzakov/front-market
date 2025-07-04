"use client";

import { ToggleContext } from "@/context/ToggleContext";
import { useContext, useEffect, useState } from "react";

const SwitchTheme = () => {
    const context = useContext(ToggleContext)

    if (!context) return null

    const {isDark, setIsDark} = context


    useEffect(() => {
        const userPrefersDark =
            localStorage.theme === "dark" ||
            (!("theme" in localStorage) &&
                window.matchMedia("(prefers-color-scheme: dark)").matches);

        setIsDark(userPrefersDark);
        document.documentElement.classList.toggle("dark", userPrefersDark);
    }, []);

    const toggleTheme = () => {
        const newTheme = isDark ? "light" : "dark";
        localStorage.theme = newTheme;
        document.documentElement.classList.toggle("dark", newTheme === "dark");
        setIsDark(!isDark);
    };

    return (
        <button onClick={toggleTheme} className="w-[45px] h-[45px] rounded-[8px] bg-[#F5F2F0] flex justify-center items-center  cursor-pointer">
            {isDark ? (
                <img src="/moon.png" className="w-5" alt="moon" />
            ) : (
                <img src="/sun.png" alt="sun" />
            )}
        </button>
    );
};

export default SwitchTheme;
