import React, { useState, useEffect } from "react";

const DarkModeSwitch = () => {
 
  const [isDarkMode, setIsDarkMode] = useState(true);

  const changeTheme = document.getElementById("changeTheme");
  const switch_toggle = document.getElementById("switch_toggle");

  // checkColor();
  //   const screenColor =
  //     window.matchMedia("(prefers-color-scheme: light)").matches === true

  useEffect(() => {
    const getLocal = localStorage.getItem("isDarkMode");
    if (getLocal === true) {
      let localDarkMode = JSON.parse(getLocal);
      setIsDarkMode(localDarkMode);
    } else {
      localStorage.setItem("isDarkMode", isDarkMode);
    }

    setTimeout(() => {
      changeThemeColor();
    }, 1);
  }, []);

  const handleThemeColor = () => {
    setIsDarkMode(!isDarkMode);
    changeThemeColor();
  };

  const changeThemeColor = () => {
    if (isDarkMode) {
      changeTheme.classList.add("dark");
      switch_toggle.classList.remove("bg-yellow-500", "-translate-x-2");
      switch_toggle.classList.add("bg-gray-500", "translate-x-full");
    } else {
      changeTheme.classList.remove("dark");
      switch_toggle.classList.remove("bg-gray-500", "translate-x-full");
      switch_toggle.classList.add("bg-yellow-500", "-translate-x-2");
    }
    localStorage.setItem("isDarkMode", isDarkMode);
  };

  return (
    <div>
      <button
        class="absolute  to-5 right-5 w-10 h-5 md:w-12 md:h-6 rounded-2xl bg-gray-300 flex  items-center transition duration-300 focus:outline-none shadow"
        onClick={() => handleThemeColor()}
      >
        <div
          id="switch_toggle"
          className="w-6 h-6 md:w-7 md:h-7 relative rounded-full transition duration-500 transform bg-gray-500 translate-x-full p-1 text-white"
        ></div>
      </button>
    </div>
  );
};

export default DarkModeSwitch;
