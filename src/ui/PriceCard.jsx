import Button from "./Button";

export default function PriceCard({title, description, price }) {
  return (
    <div className="max-w-[512px] h-[325px] p-5 md:p-10 bg-[#1a1a1a] rounded-lg shadow-lg flex justify-center gap-5 flex-col ">
        <div>
            <h3 className="small-heading mb-5">{title}</h3>
            <p className="text-peragraph">{description}</p>
        </div>
        <div>
            <h3 className="font-bold text-[20px] md:text-[24px]">$ {price}<span className="text-peragraph"> /month</span></h3>
        </div>
        <div className="flex justify-between items-center">
          <Button className={'bg-[#0a0a0a]'} btnText={'Get Free Trial'}/>
          

          <Button className={'bg-[#E50000]'} btnText={"Subscribe Plan"}/>
           

        </div>
    </div>
  )
}
