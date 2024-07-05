interface BoxSectionProps {
  title: string;
  description: string;
  img: string;
}

export function BoxSection({ title, description, img }: BoxSectionProps) {
  return (
    <div>
      <div className="mb-4 border-b border-custom-gold">
        <h2 className="p-1">{title}</h2>
      </div>
      <div className="flex pb-4">
        <p>{description}</p>
        <img src={img} alt="" className="w-[300px] border border-custom-gold" />
      </div>
    </div>
  );
}
