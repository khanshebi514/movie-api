import IconBadge from "./IconBadge";

export default function DeviceCard({iconUrl, bageText, peragraphText}) {
  return (
    <div className="max-w-[512px] h-[282px] redish-black-grad rounded-lg shadow-md flex gap-3 flex-col p-3 md:p-5 lg:p-10">
        <IconBadge iconUrl={iconUrl} bageText={bageText}/>
        <p className="peragraph-text mt-5">
            {peragraphText}
        </p>
    </div>
  )
}
