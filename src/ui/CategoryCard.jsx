import Image from "next/image";

export default function CategoryCard({imageUrl, title}) {
  return (
    <div className="w-[295px] h-[342px] p-5 rounded-xl cursor-pointer relative">
        <div>
            <Image src={imageUrl} width={295} height={295} alt={title}/>
        </div>
        <p className="text-lg text-white mt-1 ml-1">
            {title}
        </p>

        <div className="w-full h-full absolute top-0 left-0 bg-[#0000002f] opacity-0 hover:opacity-100">

        </div>
    </div>
  )
}
