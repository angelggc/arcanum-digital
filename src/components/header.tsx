export function Header() {
  return (
    <div>
      <header className="bg-custom-gold flex flex-row justify-between p-4 static top-0 left-0 w-full">
        <a href="./index.html">
          <div className="flex items-center gap-[10px]">
            <img
              className="w-[50px]"
              src="https://www.17thshard.com/uploads/monthly_2016_11/cosmere_symbol.png.6e4715593bec01929a850170904f5a4d.png"
              alt="Logo del cosmere"
            />
            <span className="font-bebas-neue font-bold text-2xl">
              Arcanum digital
            </span>
          </div>
        </a>

        <nav className="flex items-center">
          <ul className="flex flex-row items-center list-none gap-5">
            <li>
              <a href="./in-progress.html">Mapa estelar</a>
            </li>
            <li>
              <a href="./in-progress.html">Teoría Realmática</a>
            </li>
            <li>
              <a href="./in-progress.html">Investidura</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
