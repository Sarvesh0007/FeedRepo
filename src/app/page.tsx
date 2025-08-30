import Link from "next/link";
import LoginIcon, { HomeIcon } from "../../public/Svgs/Svgs";
import HomeContainer from "./Components/HomeContainer";

export default function Home() {
  return (
    <div className="w-full p-5">
      <div className="flex items-center justify-between">
        <picture className="flex items-center gap-2">
          <HomeIcon />
          <p className="text-base font-bold text-black">foo-rum</p>
        </picture>
        <Link href={"/atlys-auth"}>
          <picture className="flex items-center gap-2 cursor-pointer">
            <p className="text-sm font-semibold text-black">Login</p>
            <LoginIcon />
          </picture>
        </Link>
      </div>

      <HomeContainer />
    </div>
  );
}
