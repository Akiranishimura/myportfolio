import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-BaseColorbrighter border-MainColor flex h-[60px] w-full items-center border-b p-5 shadow-lg shadow-TextColor/25 sticky top-0" >
      <div className="text-Large font-medium ">
        <Link to="/" className="text-shadow">AkiraNishimura.me</Link>
      </div>
    </header>
  );
}
