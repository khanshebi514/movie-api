export default function IconBadge({iconUrl, bageText}) {
  return (
    <div className="flex justify-start items-center gap-2">
        <div className="w-[72px] h-[72px] rounded-xl bg-[#141414] flex justify-center items-center">
            {iconUrl}
        </div>
        <div>
            <p className="text-[24px] font-medium">{bageText}</p>
        </div>
    </div>
  )
}
