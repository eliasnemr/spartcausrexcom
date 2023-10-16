import React from "react";
import useGetInnerHeight from "../../../hooks/index.js";
const Grid = ({ title, children, variant }) => {
  const innerHeight = useGetInnerHeight();
  let base = `grid grid-cols-[1fr_minmax(0,760px)_1fr] grid-rows-1 pt-8 bg-transparent`;
  if (variant === "sm") {
    base = "grid grid-cols-[1fr_minmax(0,560px)_1fr] grid-rows-1 pt-4";
  }

  return (
    <div className={`grid grid-cols-1 grid-rows-[56px,1fr] pb-4 `}>
      <header className="grid grid-cols-[1fr_minmax(0,760px)_1fr] grid-rows-1 p-4 bg-slate-200 text-black text-md items-center gap-2">
        <div />
        <div className="px-0 md:px-8">{title}</div>
        <div />
      </header>

      <main
        style={{ height: `${innerHeight - 56}px` }}
        className={`${base} overflow-y-scroll`}
      >
        <div />
        {children}
        <div />
      </main>
    </div>
  );
};

export default Grid;
