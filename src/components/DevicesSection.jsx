import { DEVICES } from "@/constant";
import DeviceCard from "@/ui/DeviceCard";
import SectionScetch from "@/ui/SectionScetch";

export default function DevicesSection() {
  const heading = "We Provide you streaming experience across various devices.";
  const peragraph =
    "With StreamVibe, you can enjoy your favorite movies and TV shows anytime, anywhere. Our platform is designed to be compatible with a wide range of devices, ensuring that you never miss a moment of entertainment.";
  return (
    <section className="mt-10 md:mt-[100px]">
      <div className="container">
        <SectionScetch heading={heading} peragraph={peragraph}>
          <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center">
            {DEVICES.map((item) => (
              <DeviceCard
                key={item.key}
                iconUrl={item.iconUrl}
                bageText={item.bageText}
                peragraphText={item.description}
              />
            ))}
          </div>
        </SectionScetch>
      </div>
    </section>
  );
}
