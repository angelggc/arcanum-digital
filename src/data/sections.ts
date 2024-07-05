export interface SectionsData {
  title: string;
  description: string;
  img: string;
}

const sections: SectionsData[] = [
  {
    title: "¿Qué es el Cosmere?",
    description:
      "El Cosmere es un cumulo de estrellas único dentro del Reino Físico que consta de entre cincuenta y cien estrellas, compuesto por múltiples sistemas estelares y planetarios, cada uno con su propia cultura, sistema mágico(tambien conocidos como Artes Investidas) e historia. Aunque estos mundos parecen dispares a simple vista, todos están intrínsecamente conectados por una historia y mitología común que los precede.",
    img: "https://coppermind.net/w/images/thumb/Cosmere_constellation_map.jpg/1280px-Cosmere_constellation_map.jpg",
  },
  {
    title: "La Historia del Cosmere",
    description:
      "En el principio, existía una entidad todopoderosa conocida como Adonalsium. La esencia y el propósito de Adonalsium siguen siendo uno de los mayores misterios del Cosmere. Lo que sí sabemos es que Adonalsium era la fuente de toda Investidura, la energía mágica que impregna todos los aspectos de nuestro universo. En un evento cataclísmico conocido como la Fragmentación, Adonalsium fue destruido, dividiéndose en dieciséis fragmentos, o Shards. Este evento, aunque de una magnitud inimaginable, sigue estando envuelto en misterio. ¿Qué motivó esta destrucción? ¿Quiénes fueron los artífices de tal acto?",
    img: "https://coppermind.net/w/images/Shattering_by_Connor_Chamberlain.jpg",
  },
];

export default sections;
