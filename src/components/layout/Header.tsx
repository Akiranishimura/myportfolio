import { Link } from "react-router-dom";
import ThemeSwitchBtn from "./ThemeSwitchBtn";

export default function Header() {
  return (
    <header className="sticky top-0 flex h-[60px] w-full items-center justify-between border-b border-MainColor bg-BaseColorbrighter p-5 shadow-lg shadow-TextColor/25">
      <div className="text-Large font-medium ">
        <Link to="/" className="text-shadow">
          AkiraNishimura.me
        </Link>
      </div>
      <div className="justify-end mt-2">
        <ThemeSwitchBtn />
      </div>
    </header>
  );
}
