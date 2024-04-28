import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { Button } from "@/components/ui/button";

interface TelaEquipamentoProps {
  img: string;
  title: string;
  desc: string;
  text: string;
  href: string;
}

const TelaEquipamento: React.FC<TelaEquipamentoProps> = ({
  img,
  title,
  desc,
  text,
  href,
}) => {
  return (
    <div className="h-full flex justify-center pt-20 w-full">
      <div className="w-[80%] flex gap-10">
        <div className="bg-zinc-50 p-4 flex flex-col rounded-2xl shadow-2xl w-[60%]">
          <img
            src={img}
            className="flex justify-center items-center rounded-2xl w-[full]"
            alt="Equipamento"
          ></img>
          <p className="text-3xl font-bold">{title}</p>
          <p className="text-2xl font-semibold">{desc}</p>
        </div>
        <div className="p-10 flex flex-col justify-between w-full">
          <div className="flex flex-col">
          <p className="text-4xl font-bold">{title}</p>
          <p className="text-3xl font-semibold">{desc}</p>
          </div>
          <p className="text-xl font-semibold py-4">{text}</p>
          <div className="flex gap-6">
            <a href={href}>
              <Button variant="default" size="lg" className="flex gap-3 w-fit">
                Locar {title} <FaWhatsapp className="w-7 h-7" />
              </Button>
            </a>
            <a href="/">
              <Button variant="outline" size="lg" className="flex gap-3 w-fit">
                Página principal
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TelaEquipamento;
