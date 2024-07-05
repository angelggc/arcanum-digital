import { Header } from "./header";

interface PropsWithChildren {
  children: React.ReactNode;
}

export function Landing({ children }: PropsWithChildren) {
  return (
    <>
      <img
        src="https://i.ytimg.com/vi/07WzyahRPBk/maxresdefault.jpg"
        alt=""
        className="fixed -z-10 top-0 w-full h-full object-cover"
      />
      <Header />
      {children}
    </>
  );
}
