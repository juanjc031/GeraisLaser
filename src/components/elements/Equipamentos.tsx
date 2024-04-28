import React from "react";
import { Button } from "@/components/ui/button";
import { FaExternalLinkAlt } from "react-icons/fa";

interface EquipamentosProps {
  img: string;
  title: string;
  subTitle: string;
  desc: string;
  href:string;
}

const Equipamentos: React.FC<EquipamentosProps> = ({ img, title, subTitle, desc,href }) => {
  return (
    <div className="col-span-6 grid gap-4 grid-cols-12 bg-zinc-50 justify-center shadow-2xl rounded-2xl p-5 ">
      <div className="col-span-5 shadow-xl rounded-2xl">
        <img
          src={img}
          className="flex justify-center items-center rounded-2xl w-full h-full"
          alt="Equipamento"
        ></img>
      </div>
      <div className="col-span-7 flex justify-between flex-col">
        <div>
          <p className="font-bold text-2xl ">{title}</p>
          <p className="font-bold text-xl ">{subTitle}</p>
          <p className="font-semibold text-lg pt-4">
            {desc}
          </p>
        </div>
        <a href={href}>
        <Button variant="default" className="flex gap-3 w-fit">
          Mais informações  <FaExternalLinkAlt className="w-5 h-5" /> 
        </Button>
        </a>
      </div>
    </div>
  );
};

export default Equipamentos;
