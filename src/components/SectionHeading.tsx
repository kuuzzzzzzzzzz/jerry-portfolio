type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      <p className="mb-3 text-[12px] font-medium uppercase tracking-[0.18em] text-[#e8553f]">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-normal leading-tight text-gray-950 sm:text-4xl">
        {title}
      </h2>
      <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
        {description}
      </p>
    </div>
  );
}
