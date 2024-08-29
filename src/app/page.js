import DevicesSection from "@/components/DevicesSection";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import PricePlanSection from "@/components/PricePlanSection";
import VideoCategories from "@/components/VideoCategories";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <Navbar/>
      <HeroSection/>
      <VideoCategories/>
      <DevicesSection/>
      <PricePlanSection/>
    </main>
  );
}
