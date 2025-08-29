import EntryCard from "./Components/EntryCard";
import LoginIcon, { HomeIcon } from "../../public/Svgs/Svgs";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full p-5">
      <div className="flex items-center justify-between">
        <picture className="flex items-center gap-2">
          <HomeIcon />
          <p className="text-base font-bold text-black">foo-rum</p>
        </picture>
        <Link href={"/atlys-auth"}>
          <picture className="flex items-center gap-2">
            <p className="text-sm font-semibold text-black">Login</p>
            <LoginIcon />
          </picture>
        </Link>
      </div>
      <div className="mt-16 gap-2 place-content-center grid grid-rows">
        <EntryCard />
      </div>
    </div>
  );
}
