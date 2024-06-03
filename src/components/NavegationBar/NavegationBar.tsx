import logo from "../../assets/1_invgate-logo.png";
import langIcon from "../../assets/lang-icon.svg";
import { IoIosArrowDown } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import { RiMenuLine } from "react-icons/ri";
import {  useState } from "react";
import ResponsiveNavegationBar from "./ResponsiveNavegationBar";
import { NavBarlinks } from "../../mocks";

export default function NavegationBar() {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  
  
  return (
    <nav className={`flex justify-between bg-white z-50 animate-fade-down items-center h-16 lg:h-20  fixed top-0 w-full px-8 lg:px-16 xl:px-28 2xl:px-14 `}>
      {/* Responsive Navbar */}
      <ResponsiveNavegationBar showMenu={showMenu} links={NavBarlinks} />

      <div className="flex gap-7  items-center">
        <img src={logo} alt="logo" className="h-8 object-contain" />
        <div className="xl:flex items-center gap-3  hidden relative">
          {NavBarlinks.map((link) => (
            <div
              key={link.id}
              className=" flex items-center gap-2 cursor-pointer hover:bg-gray-200 transition-colors duration-300 p-1 px-2  rounded-lg group "
            >
              <span className="  font-medium  text-[#687382] leading-6 indent-0.5">
                {link.name}
              </span>
              {link.type === "select" && (
                <IoIosArrowDown className=" group-hover:rotate-180 transition-all duration-300" />
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-x-4 xl:gap-x-6 ">
        <span className=" sm:inline-flex hidden cursor-pointer font-medium  text-[#687382] leading-6 indent-0.5">
          Contact us
        </span>
        <button className="bg-[#08A1FF] hover:bg-[#367399]  sm:inline-flex hidden transition-colors duration-400 px-4 py-2 text-white cursor-pointer rounded-md">
          Subscribe
        </button>
        <span className="text-3xl text-neutral-400 font-light cursor-pointer">
          <img src={langIcon} alt="" />
        </span>
        <div
          className="block xl:hidden text-2xl"
          onClick={() => {
            setShowMenu(!showMenu);
          }}
        >
          {showMenu ? <IoCloseSharp /> : <RiMenuLine />}
        </div>
      </div>
    </nav>
  );
}
