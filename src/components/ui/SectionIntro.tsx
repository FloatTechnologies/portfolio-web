export function SectionIntro({
  index,
  label,
  title,
}: {
  index: string;
  label: string;
  title: React.ReactNode;
}) {
  return (
    <header className="mb-10 md:mb-14">
      <p className="section-index">
        <span>{index}</span> / {label}
      </p>
      <h2 className="heading-editorial mt-3">{title}</h2>
    </header>
  );
}
