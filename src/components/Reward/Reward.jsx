import React from "react";

const Reward = () => {
  return (
    <div className="container">
      <div className="grid lg:grid-cols-3 mt-20 gap-10 font-poppins">
        <div className="grid-cols-1">
          <h2 className="text-[48px] font-semibold text-[#00B760]">80+</h2>
          <p className="text-[28px] text-[#000] font-normal ">
            satisfied clients
          </p>
        </div>
        <div className="grid-cols-1">
          <h2 className="text-[48px] font-semibold text-[#00B760]">200+</h2>
          <p className="text-[28px] text-[#000]  font-normal ">
            Project Completed
          </p>
        </div>
        <div className="grid-cols-1">
          <h2 className="text-[48px] font-semibold text-[#00B760]">99+</h2>
          <p className="text-[28px] text-[#000] font-normal  ">
            Reviews Given{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Reward;
