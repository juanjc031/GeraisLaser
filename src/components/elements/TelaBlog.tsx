import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { Button } from "@/components/ui/button";

interface TelaBlogProps {
  img: string;
  title: string;
  text: string;
  profile: string;
  name: string;
  title2: string;
  data: string;
}

const TelaBlog: React.FC<TelaBlogProps> = ({
  img,
  title,
  text,
  profile,
  name,
  data,
  title2,
}) => {
  return (
    <div className="h-full flex justify-center pt-28 w-full">
      <div className="w-[65%] flex flex-col gap-6 justify-start items-center">
        <p className="text-4xl font-bold">{title}</p>
        <img
          src={img}
          className="flex justify-center items-center rounded-2xl shadow-xl w-full"
          alt="Blog"
        ></img>
        <div className="flex w-full justify-start">
          <div className="flex items-center gap-2">
            <img
              src={profile}
              alt="Blog"
              className="object-cover w-16 h-16 flex justify-center items-center rounded-full"
            />
            <div className="flex flex-col font-medium">
              <p className="text-xl">{name}</p>
              <p className="-mt-2 text-xl">{data}</p>
            </div>
          </div>
        </div>
        <div className="w-full h-[3px] bg-black -mt-2"></div>

        <div className="flex w-full justify-start pt-6">
          <p className="text-2xl font-semibold">{title2}</p>
        </div>
        <p className="text-xl font-medium">{text}</p>
        <div className="flex w-full justify-start">
          <a href="/">
            <Button variant="outline" size="lg" className="flex gap-3 w-fit">
              Página principal
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TelaBlog;
