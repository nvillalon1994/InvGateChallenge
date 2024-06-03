import React, { useEffect, useState } from "react";
import { LuSearch } from "react-icons/lu";
import ResultsSearch from "./ResultsSearch";


export default function Search({
  showSearch,
  setShowSearch,
}: {
  showSearch: boolean;
  setShowSearch: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [searchValue, setSeachValue] = useState<string>("");
  const handleSearch = (e: any) => {
    const value: string = e.target.value;
    setSeachValue(value);
  };
  useEffect(() => {
    const handleScroll = () => {
      if (searchValue.length !== 0) {
        window.scrollTo(0, 0);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: false });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [searchValue]);

  return (
    <div
      className={` left-0 mb-1  ${
        showSearch
          ? "z-20 fixed h-full w-screen overflow-x-hidden sm:top-20 top-16  left-0 flex flex-col items-center sm:py-20 sm:px-28 py-4 px-10 bg-white bg-opacity-90 backdrop-blur-md "
          : "static w-auto top-[320px] "
      } transition-all ease-in-out duration-1000   overflow-auto no-scroll-bar`}
    >
      <div
        className={`relative  shadow-sm shadow-neutral-300 h-fit  rounded-lg ${
          showSearch ? "w-full mx-60 sm:max-w-[55%] " : "w-full lg:w-3/4 mx-0"
        } transition-transform duration-1000 ease-in-out`}
      >
        <div className="absolute z-10 cursor-pointer hover:bg-[#95d4ff] inset-y-0 flex items-center px-4 rounded-l-lg  bg-[#08A1FF] text-white text-xl transition-all duration-300">
          <LuSearch />
        </div>
        <input
          onChange={(e: any) => {
            handleSearch(e);
            if (e.target.value.length !== 0) {
              setShowSearch(true);
            } else {
              setShowSearch(false);
            }
          }}
          autoComplete="off"
          type="search"
          id="default-search"
          className="block w-full px-4 py-1.5 md:py-2.5 ps-16  text-gray-900 border  rounded-lg bg-gray-50  focus:outline-none"
          placeholder="I’m looking for…"
        />
      </div>
      <ResultsSearch searchValue={searchValue} />
    </div>
  );
}
