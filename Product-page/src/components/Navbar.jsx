import { Menu } from "lucide-react";
import React from "react";
import Search from "./Search";
import Button from "./Button";

const Navbar = () => {
  return (
    <div className="w-full px-6 py-4 bg-[#F8D902] ">
      <div className="nav-top flex items-center justify-between">
        <div className="logo uppercase font-extrabold">
          <h4 className="leading-none text-2xl">bu</h4>
          <h4 className="leading-none text-2xl">dy</h4>
        </div>
        <div className="center hidden md:flex flex-1 md:justify-end">
          <ul className="flex items-center gap-12">
            <li>
              <a href="#">Products</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">News</a>
            </li>
            <li className="md:hidden lg:block">
              <Search />
            </li>
            <li>
              <Button text={"Login"}/>
            </li>
          </ul>
        </div>
        <div className="menu md:hidden">
          <Menu />
        </div>
      </div>
      <div className="bottom md:hidden flex items-center justify-center mt-2">
        <Search />
      </div>
    </div>
  );
};

export default Navbar;
