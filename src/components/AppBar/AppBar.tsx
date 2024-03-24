import Image from "next/image";
import Link from "next/link";

import logoImg from "../../../assets/logo.png";
import NavLink from "../NavLink/NavLink";

export default function AppBar() {
  return (
    <header className="flex py-6 px-6 max-w-laptop m-margAuto">
      <NavLink
        className={
          "flex items-center gap-6 uppercase text-2xl mr-auto  font-bold hover:text-orange-500 duration-500 active:text-orange-500 focus:text-orange-500 hover:scale-105"
        }
        href="/"
      >
        <Image
          src={logoImg}
          alt="A plate with food on it"
          priority
          className="w-20 h-20 "
        />
        NextLevel Food
      </NavLink>
      <nav className=" flex items-center justify-center">
        <ul className="flex gap-10 items-center justify-center">
          <li>
            <NavLink
              href="/meals"
              className="flex text-2xl  font-bold hover:text-orange-500 duration-500 active:text-orange-500 focus:text-orange-500 hover:scale-105"
            >
              Browse Meals
            </NavLink>
          </li>
          <li>
            <NavLink
              href="/community"
              className="flex text-2xl  font-bold  hover:text-orange-500 duration-500 active:text-orange-500 focus:text-orange-500 hover:scale-105"
            >
              Foodies Community
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
