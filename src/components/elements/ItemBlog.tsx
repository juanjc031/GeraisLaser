import React from "react";
import { Button } from "../ui/button";

interface ItemBlogProps {
  img: string;
  type: string;
  title: string;
  desc: string;
  name: string;
  data: string;
  profile: string;
  href: string;
}

const ItemBlog: React.FC<ItemBlogProps> = ({
  img,
  type,
  title,
  desc,
  name,
  data,
  profile,
  href,
}) => {
  return (
    <div className="w-[30%] shadow-2xl rounded-2xl  flex flex-col">
      <img
        src={img}
        alt="Blog"
        className="rounded-t-2xl shadow-lg flex justify-end items-end object-cover w-full h-28"
      />
      <div className="flex flex-col justify-between p-4 gap-16">
        <div className="flex flex-col">
          <p className="px-2 bg-black rounded-xl font-medium shadow-xl text-md text-white w-fit my-2">
            {type}
          </p>
          <p className="text-xl font-bold">{title}</p>
          <p className="text-lg font-semibold">{desc}</p>
        </div>
        <div className="flex flex-col gap-3">
          <a href={href}>
            <Button variant="default" size="xs" className="w-fit">
              Mais informações
            </Button>
          </a>
          <div className="flex items-center gap-2">
            <img
              src={profile}
              alt="Blog"
              className="object-cover w-10 h-10 flex justify-center items-center rounded-full"
            />
            <div className="flex flex-col font-medium">
              <p className="">{name}</p>
              <p className="-mt-2">{data}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemBlog;
