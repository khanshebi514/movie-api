export default function SectionScetch({heading, children, component, peragraph }) {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-[1fr_300px]">
        <div className="flex-col gap-2 p-5">
          <h1 className="medium-heading mb-5">{heading}</h1>
          <p className="text-peragraph text-wrap">{peragraph}</p>
        </div>
        <div className="hidden lg:block">
        {component}
        </div>
        
      </div>

      {children}
    </div>
  );
}
