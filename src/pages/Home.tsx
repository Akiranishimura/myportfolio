import Profile from "../components/Home/Profile";
import Works from "../components/Home/Works";

export default function Home() {
  return (
    <>
      <div className="">
        <h1>Akira Nishimura</h1>
        <Profile />
        <hr className="mx-auto mt-4 h-0.5 rounded border-0 bg-TextColor/20 md:mt-10" />
        <Works />
        {/* <hr className="mx-auto mt-4 h-0.5 rounded border-0 bg-TextColor/20 md:mt-10" /> */}
      </div>
    </>
  );
}
