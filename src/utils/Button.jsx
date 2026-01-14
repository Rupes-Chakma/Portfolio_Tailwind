import React from "react";

const Button = ({ style, title }) => {
  return (
    <div>
      <button className={`items-center gap-2 flex${style}`}>{title}</button>
    </div>
  );
};

export default Button;
