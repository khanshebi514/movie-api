import Navitem from "@/ui/Navitem";
import Image from "next/image";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { FiMenu } from "react-icons/fi";

export default function Navbar() {
  return (
    <header className="h-[120px] fixed w-full z-10">
      <div className="container grid grid-cols-3 md:grid-cols-[200px_1fr_200px] align-middle place-items-center">
        <div className="">
          <Image
            src="/home/Logo.png"
            width={199}
            height={60}
            alt="logo image"
            className="w-full"
          />
        </div>
        <div className="hidden md:block">
          <Navitem />
        </div>
        <div className="block md:hidden">
          <FiMenu size={30}/>
        </div>
        <div className="flex items-center gap-5">
          <IoIosSearch size={30}/>
          <IoIosNotificationsOutline size={30}/>
        </div>
      </div>
    </header>
  );
}
