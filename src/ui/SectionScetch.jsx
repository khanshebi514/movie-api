export default function SectionScetch({heading, children, component, peragraph }) {
  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="flex-col gap-2 p-5">
          <h1 className="medium-heading">{heading}</h1>
          <p className="peragraph-text">{peragraph}</p>
        </div>
        {component}
      </div>

      {children}
    </div>
  );
}
