import {
  EllipsisHorizontalIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { VideoCameraIcon } from "@heroicons/react/24/solid";
import React from "react";
import Contact from "./Contact";

const Widgets = () => {
  const contacts = [
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROB4Ugmsv_2srPaTUmVG-MtRbDbszbIzppbA&usqp=CAU",
      name: "BTS",
    },
    {
      src: "https://pbs.twimg.com/profile_images/1339192504382590976/2WxMn8cm_400x400.jpg",
      name: "Sonny Sangha",
    },
    {
      src: "https://pbs.twimg.com/media/FPfovhpWUAIshD_.jpg",
      name: "Elon Musk",
    },
  ];

  return (
    <div className="hidden lg:flex flex-col w-60 p-2 mt-5">
      <div className="flex justify-between items-center text-gray-500 mb-5">
        <h2 className="text-xl">Contacts</h2>
        <div className="flex space-x-2">
          <VideoCameraIcon className="h-6" />
          <MagnifyingGlassIcon className="h-6" />
          <EllipsisHorizontalIcon className="h-6" />
        </div>
      </div>
      {contacts.map((contact) => (
        <Contact key={contact.src} src={contact.src} name={contact.name} />
      ))}
    </div>
  );
};
export default Widgets;
