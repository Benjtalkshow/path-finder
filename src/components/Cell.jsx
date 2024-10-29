import React from "react";

const Cell = ({ isStart, isEnd, isPath, onClick }) => {
  const baseClass = "w-12 h-12 border border-gray-300 cursor-pointer";
  const startClass = "bg-green-500";
  const endClass = "bg-red-500";
  const pathClass = "bg-yellow-300";

  const className = `${baseClass} ${isStart ? startClass : ""} ${
    isEnd ? endClass : ""
  } ${isPath ? pathClass : ""}`;

  return <div className={className} onClick={onClick}></div>;
};

export default Cell;
