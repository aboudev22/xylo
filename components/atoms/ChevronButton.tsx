"use client";

import { ChevronUp } from "lucide-react";

export const ChevronButton = () => {
  return (
    <div className="group relative text-white flex items-center gap-2 font-bold cursor-pointer">
      <p>En savoir plus</p>

      <div className="transition-transform duration-300 group-hover:rotate-180">
        <ChevronUp />
      </div>

      <section
        className="
          absolute top-10 left-0
          hidden group-hover:grid
          p-5 text-black grid-cols-2 grid-rows-4
          w-120 h-80
          border-2 border-blue-300 bg-white rounded-2xl
        "
      >
        <p className="row-start-1 col-start-1">xylo</p>
        <p className="row-start-2 col-start-1">Hackaverse v3.0</p>
        <p className="row-start-3 col-start-1">Collaboration</p>
        <p className="row-start-4 col-start-1">Notre equipe</p>

        <aside className="row-start-1 row-span-4 col-start-2 bg-blue-300" />
      </section>
    </div>
  );
};
