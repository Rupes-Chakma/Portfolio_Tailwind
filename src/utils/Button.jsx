import React from "react";

const Button = ({ style, title, arrow }) => {
  return (
    <div>
      <button className={`items-center gap-2 flex ${style}`}>
        {title}
        {arrow}
      </button>
    </div>
  );
};

export default Button;
