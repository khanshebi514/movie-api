import Button from "@/ui/Button";
import Image from "next/image";
import { FaPlay } from "react-icons/fa";

export default function HeroSection() {
  return (
    <section className="">
      <div className="flex justify-center items-center flex-col">
        <Image src="/home/sub Container.png" width={1900} height={1000} quality={80} loading="eager" alt="hero image" className="w-full"/>
        <div className="w-full md:w-[70%] space-y-3 flex justify-center items-center gap-3 flex-col">
            <h1 className="main-heading text-wrap md:text-nowrap mb-5">The Best Streaming Experience</h1>
            <p className="text-peragraph text-center">StreamVibe is the best streaming experience for watching your favorite movies and shows on demand, anytime, anywhere. With StreamVibe, you can enjoy a wide variety of content, including the latest blockbusters, classic movies, popular TV shows, and more. You can also create your own watchlists, so you can easily find the content you want to watch.</p>
            <div className="flex justify-center items-center">
                <Button iconUrl={<FaPlay/>} btnText={"Watch Now"} className={'bg-[#E50000]'}/>
            </div>
        </div>
      </div>
    </section>
  );
}
