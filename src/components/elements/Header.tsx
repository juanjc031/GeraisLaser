import React, { useState, useEffect } from "react";
import Linha from "./Linha.js";
import { FaInstagram } from "react-icons/fa6";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";
import logo from "../../assets/LogoGerais.png";
import { FiMenu } from "react-icons/fi";

/* import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose
} from "@/components/ui/sheet"; */

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Header = () => {
  const [shadow, setShadow] = useState(false);

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      className={
        shadow
          ? `w-full bg-white h-[78px] mmd:h-[60px] z-[100] fixed duration-700 shadow-xl`
          : `w-full bg-white h-[78px] mmd:h-[60px] z-[100] fixed`
      }
    >
      <div className="px-5 pt-2 pb-2 grid grid-cols-12 mmd:hidden w-full">
        <div className="col-span-3">
          <a href="/#home">
            <img
              src={logo}
              alt="GeraisLaser"
              className="cursor-pointer w-[78%] ml-10"
            ></img>
          </a>
        </div>
        <div className="col-span-7 flex items-center justify-center font-semibold text-xl gap-4">
          <a href="/#home">
            <p className="cursor-pointer hover:text-gray-700">Home</p>
          </a>
          <Linha />
          <a href="/#equipamentos">
            <p className="cursor-pointer hover:text-gray-700">Equipamentos</p>
          </a>
          <Linha />
          <a href="/#fidelidade">
            <p className="cursor-pointer hover:text-gray-700">
              Plano Fidelidade
            </p>
          </a>
          <Linha />
          {/* <a href="/#cursos">
            <p className="cursor-pointer hover:text-gray-700">Cursos</p>
          </a>
          <Linha /> */}
          <a href="/#blog">
            <p className="cursor-pointer hover:text-gray-700">Blog</p>
          </a>
          <Linha />
          <a href="/#contato">
            <p className="cursor-pointer hover:text-gray-700">Contato</p>
          </a>
        </div>
        <div className=" col-span-2 flex items-center justify-center gap-4">
          <a href="https://www.instagram.com/geraislaser/" target="_blank">
            <FaInstagram className="w-8 h-8 cursor-pointer hover:text-gray-700" />
          </a>
          <a
            href="https://wa.me/5531992235864?text=Ol%C3%A1%21+Vim+pelo+site+da+Gerais+Laser+e+quero+mais+informa%C3%A7%C3%B5es."
            target="_blank"
          >
            <FaWhatsapp className="w-8 h-8 cursor-pointer hover:text-gray-700" />
          </a>
          <a
            href="https://www.linkedin.com/company/gerais-laser/"
            target="_blank"
          >
            <AiOutlineLinkedin className="w-8 h-8 cursor-pointer hover:text-gray-700" />
          </a>
        </div>
      </div>
      <div className="w-full hidden mmd:flex justify-around items-center">
        <a href="/#home" className="w-[60%]">
          <img
            src={logo}
            alt="GeraisLaser"
            className="cursor-pointer w-full"
          ></img>
        </a>
        <Sheet>
          <SheetTrigger>
            <FiMenu className="cursor-pointer w-8 h-8" onClick={() => setShadow(false)}/>
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle className="mt-10"></SheetTitle>
              <SheetDescription className="flex flex-col items-center font-semibold text-xl text-black gap-4 pt-4">
                <SheetClose asChild>
                  <a href="/#home">
                    <p className="cursor-pointer hover:text-gray-700">Home</p>
                  </a>
                </SheetClose>
                <div className="w-full h-[1px] bg-black"></div>
                <SheetClose asChild>
                  <a href="/#equipamentos">
                    <p className="cursor-pointer hover:text-gray-700">
                      Equipamentos
                    </p>
                  </a>
                </SheetClose>
                <div className="w-full h-[1px] bg-black"></div>
                <SheetClose asChild>
                  <a href="/#fidelidade">
                    <p className="cursor-pointer hover:text-gray-700">
                      Plano Fidelidade
                    </p>
                  </a>
                </SheetClose>
                <div className="w-full h-[1px] bg-black"></div>
                <SheetClose asChild>
                  <a href="/#blog">
                    <p className="cursor-pointer hover:text-gray-700">Blog</p>
                  </a>
                </SheetClose>
                <div className="w-full h-[1px] bg-black"></div>
                <SheetClose asChild>
                  <a href="/#contato">
                    <p className="cursor-pointer hover:text-gray-700">
                      Contato
                    </p>
                  </a>
                </SheetClose>
                <div className="w-full h-[1px] bg-black"></div>
                <div className=" flex items-center justify-center gap-4">
                  <a
                    href="https://www.instagram.com/geraislaser/"
                    target="_blank"
                  >
                    <FaInstagram className="w-8 h-8 cursor-pointer hover:text-gray-700" />
                  </a>
                  <a
                    href="https://wa.me/5531992235864?text=Ol%C3%A1%21+Vim+pelo+site+da+Gerais+Laser+e+quero+mais+informa%C3%A7%C3%B5es."
                    target="_blank"
                  >
                    <FaWhatsapp className="w-8 h-8 cursor-pointer hover:text-gray-700" />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/gerais-laser/"
                    target="_blank"
                  >
                    <AiOutlineLinkedin className="w-8 h-8 cursor-pointer hover:text-gray-700" />
                  </a>
                </div>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>

        {/* <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline">Open</Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Edit profile</SheetTitle>
              <SheetDescription>
                Make changes to your profile here. Click save when you're done.
              </SheetDescription>
            </SheetHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4"></div>
              <div className="grid grid-cols-4 items-center gap-4">oi</div>
            </div>
            <SheetFooter>
              <SheetClose asChild>
                <Button type="submit">Save changes</Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet> */}
      </div>
      <div className="px-6 w-full mmd:hidden">
        <div className="flex justify-center border-b border-black"></div>
      </div>
    </div>
  );
};

export default Header;
