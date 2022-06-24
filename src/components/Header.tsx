import { Logo } from "./Logo";

export function Header() {
  return (
    <header className="w-full mobile:h-14 desktop:h-16 laptop:py-5 mobile:pl-5 flex items-center laptop:justify-center bg-gray-700 border-b border-gray-600">
      <Logo />
      <div></div>
      {/* ADICIONAR BOTÃO HAMBURGUER PRO SIDEMENU */}
    </header>


  );
}