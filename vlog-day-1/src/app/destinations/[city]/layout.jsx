import React from "react";

const layout = ({ children, cityinfo }) => {
  console.log("we are here in city layout");
  console.log(children);

  return (
    <div className="w-full h-screen flex items-center justify-center text-white">
      <div className="w-[50%]">{children}</div>
      <div className="w-[50%]">{cityinfo}</div>
    </div>
  );
};

export default layout;
