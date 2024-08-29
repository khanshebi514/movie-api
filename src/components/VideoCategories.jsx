import { CATEGORIES } from "@/constant";
import CategoryCard from "@/ui/CategoryCard";
import SectionScetch from "@/ui/SectionScetch";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import { IoRemoveOutline } from "react-icons/io5";

export default function VideoCategories() {
  const heading = "Explore our wide variety of categories";
  const peragraph =
    "Whether you are looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new";
  let component = (
    <div className="max-w-[257px] h-[88px] flex justify-between items-center bg-[#0f0f0f] px-2 rounded-lg">
      <div className="w-[56px] h-[56px] bg-[#1a1a1a] flex justify-center items-center rounded-md hover:bg-[#1f1f1f] cursor-pointer">
        <FaLongArrowAltLeft />
      </div>
      <div className="flex justify-center items-center gap-1">
        <IoRemoveOutline className="text-red-600" /> <IoRemoveOutline />{" "}
        <IoRemoveOutline /> <IoRemoveOutline />
      </div>
      <div className="w-[56px] h-[56px] bg-[#1a1a1a] p-2 flex justify-center items-center rounded-md hover:bg-[#1f1f1f] cursor-pointer">
        <FaLongArrowAltRight />
      </div>
    </div>
  );
  return (
    <section className="mt-10 md:mt-[100px]">
        <div className="container">
        <SectionScetch
        heading={heading}
        component={component}
        peragraph={peragraph}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 justify-between">
          {CATEGORIES.map((item) => (
            <CategoryCard
              key={item.key}
              imageUrl={item.imageUrl}
              title={item.title}
            />
          ))}
        </div>
      </SectionScetch>
        </div>
      
    </section>
  );
}
