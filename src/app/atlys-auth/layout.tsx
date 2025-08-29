import Link from "next/link";
import { ReactNode } from "react";
import { HomeIcon } from "../../../public/Svgs/Svgs";

interface LoginLayoutProps {
  children: ReactNode;
}

export default function LoginLayout({ children }: LoginLayoutProps) {
  return (
    <div className="w-full p-5">
      <div className="flex items-center justify-between">
        <picture className="flex items-center gap-2">
          <HomeIcon />
          <p className="text-base font-bold text-black">foo-rum</p>
        </picture>
        <Link href={`/`}>
          <p className="text-sm cursor-pointer font-semibold text-black">
            Back to Home
          </p>
        </Link>
      </div>
      {children}
    </div>
  );
}
