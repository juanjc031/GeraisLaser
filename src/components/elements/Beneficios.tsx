import React from "react";
import { PiSealCheckFill } from "react-icons/pi";

interface BeneficioProps {
  title: string;
  desc: string;
  left: boolean;
}

const Beneficio: React.FC<BeneficioProps> = ({ title, desc, left }) => {
  return (
    <div className={left ? `justify-start w-full flex` : `justify-end w-full flex`}>
      <div className="gap-4 justify-end flex w-3/4 bg-zinc-50 shadow-2xl rounded-2xl p-5 ">
        <div className="flex justify-between flex-col">
          <div className="w-full items-center flex gap-2">
            <PiSealCheckFill className="w-10 h-10" />
            <p className="font-bold text-3xl ">{title}</p>
          </div>
          <div>
            <p className="font-semibold text-2xl pt-4">{desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Beneficio;
