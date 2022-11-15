import Image from "next/image";
import HeaderIcon from "./HeaderIcon";
import {
  Bars3Icon,
  ComputerDesktopIcon,
  HomeIcon,
  MagnifyingGlassIcon,
  UserGroupIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";

import {
  ChatBubbleLeftIcon,
  SquaresPlusIcon,
  BellIcon,
} from "@heroicons/react/24/solid";
import { signOut, useSession } from "next-auth/react";

const Header = () => {
  const { data: session } = useSession();
  return (
    <div className="sticky top-0 z-50 bg-white flex items-center p-2 shadow-md h-14">
      {/* Left */}
      <div className="flex items-center">
        <Image
          src="https://cdn0.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-facebook-2019-circle-512.png"
          width={40}
          height={40}
          layout="fixed"
        />
        <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2">
          <MagnifyingGlassIcon className="h-5 text-gray-600" />
          <input
            type="text"
            placeholder="Facebook 검색"
            className="hidden lg:inline-flex bg-transparent items-center ml-2 outline-none placeholder-gray-500 flex-shrink"
          />
        </div>
      </div>
      {/* Center */}
      <div className="flex justify-center flex-grow">
        <div className="flex space-x-6 md:space-x-2">
          <HeaderIcon active Icon={HomeIcon} />
          <HeaderIcon Icon={UsersIcon} />
          <HeaderIcon Icon={ComputerDesktopIcon} />
          <HeaderIcon Icon={UserGroupIcon} />
          <HeaderIcon Icon={Bars3Icon} />
        </div>
      </div>
      {/* Right */}
      <div className="flex items-center space-x-2 justify-end">
        {/* Profile pic */}
        {
          <Image
            onClick={signOut}
            className="rounded-full cursor-pointer"
            src={session.user.image}
            width="40"
            height="40"
            layout="fixed"
          />
        }
        <p className="whitespace-nowrap font-semibold pr-3">
          {session.user.name}
        </p>
        <SquaresPlusIcon className="icon" />
        <ChatBubbleLeftIcon className="icon" />
        <BellIcon className="icon" />
      </div>
    </div>
  );
};

export default Header;
