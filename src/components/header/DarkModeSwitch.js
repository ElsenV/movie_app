import React from "react";

const DarkModeSwitch = () => {
  const changeTheme = document.getElementById("changeTheme");

  const handleDarkMode = () => {
    
  };

  return (
    <div>
      <button
        class="rounded py-4 px-2 bg-indigo-600 hover:bg-indigo-900"
        onClick={() => handleDarkMode()}
      >
        Submit
      </button>
    </div>
  );
};

export default DarkModeSwitch;
