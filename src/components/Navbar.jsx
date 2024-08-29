import Navitem from "@/ui/Navitem";
import Image from "next/image";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";

export default function Navbar() {
  return (
    <header className="h-[120px] fixed w-full z-10">
      <div className="container grid grid-cols-[100px_1fr_100px] md:grid-cols-[200px_1fr_200px] align-middle place-items-center">
        <div className="">
          <Image
            src="/home/Logo.png"
            width={199}
            height={60}
            alt="logo image"
          />
        </div>
        <div>
          <Navitem />
        </div>
        <div className="flex items-center gap-5">
          <IoIosSearch size={30}/>
          <IoIosNotificationsOutline size={30}/>
        </div>
      </div>
    </header>
  );
}
