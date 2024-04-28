import React from 'react'
import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="mb-6 flex flex-col items-center justify-center w-full pt-20">
        <div className="w-[95%] border-b-2 border-black"></div>
        <div className="w-[70%] flex justify-center items-center gap-1 pt-7">
          <FaRegCopyright className="w-5 h-5"/>
          <p className="font-semibold text-xl">
            Copyright 2024  |   Todos os Direitos
            Reservados   |   Desenvolvido por{" "}
            <span className="cursor-pointer font-bold"> WebWhiz</span>{" "}
          </p>
        </div>
      </div>
  )
}

export default Footer