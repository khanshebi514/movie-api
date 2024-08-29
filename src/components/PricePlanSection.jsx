import { PRICES } from "@/constant";
import PriceCard from "@/ui/PriceCard";
import SectionScetch from "@/ui/SectionScetch";

export default function PricePlanSection() {
    const heading = "Choose the plan that's right for you";
    const peraGraph = "Join StreamVibe and select from our flexible subscription options tailored to suit your viewing preferences. Get ready for non-stop entertainment!";

    let component = (
        <div className="max-w-[257px] h-[88px] flex justify-between items-center bg-[#0f0f0f] px-2 gap-3 rounded-lg">
      <div className="w-[156px] h-[56px] bg-[#1a1a1a] flex justify-center items-center rounded-md hover:bg-[#1f1f1f] cursor-pointer">
        Monthly
      </div>
      <div className="w-[156px] h-[56px] bg-[#030303] p-2 flex justify-center items-center rounded-md hover:bg-[#1f1f1f] cursor-pointer">
        Yearly
      </div>
    </div>
    )
  return (
    <section className="mt-10 md:mt-[100px]">
      <div className="container">
        <SectionScetch heading={heading} peragraph={peraGraph} component={component}>
            <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {PRICES.map((item)=>
                <PriceCard key={item.key} price={item.Price} description={item.description} title={item.title}/>
                )}
            </div>
        </SectionScetch>
      </div>
    </section>
  );
}
