import { BoxSection } from "../components/box-section";
import sections from "../data/sections";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8 bg-black/70">
      {sections.map((s) => (
        <BoxSection title={s.title} description={s.description} img={s.img} />
      ))}
    </div>
  );
}
