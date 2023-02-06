import React from "react";

const Title = ({ title }) => {
  return (
    <>
      <h1 className="text-xl md:text-2xl lg:text-3xl text-center xl:text-left  md:m-2 md:my-3 dark:text-white pt-3">
        {title}
      </h1>
    </>
  );
};

export default Title;
