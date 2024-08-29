export default function Button({className,iconUrl, btnText, ...props}) {
    let cssClass = "text-white px-3 py-2 flex justify-center items-center gap-3 rounded-md"
  return (
    <button className={`${cssClass} ${" "} ${className}`} {...props}>
        {iconUrl}
        {btnText}
    </button>
  )
}
