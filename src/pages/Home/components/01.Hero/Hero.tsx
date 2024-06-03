import { useState } from "react";
import videoHero from '../../../../assets/2_hero.webm'
import Search from "./SearchContainer";



export default function Hero() {
  const [showSearch, setShowSearch] = useState<boolean>(false);
  return (
    <div   className="rounded-xl animate-fade  bg-[#E4F2FF] shadow-lg shadow-[#d4dfea]  justify-between w-full flex flex-col gap-6  lg:flex-row px-8 md:px-16 pt-10 pb-8 ">
        <div className="flex flex-col justify-center  gap-3 w-full lg:w-1/2 ">
          <span className="text-[#347DC1] text-sm md:text-base font-medium text-center">
            Articles, videos and more
          </span>
          <p className="text-3xl sm:text-5xl md:text-4xl lg:text-5xl font-semibold text-center text-[#273A57] lg:leading-12 mb-2 tracking-wide" >
            Find the most relevant content in the IT world
          </p>

          <Search showSearch={showSearch} setShowSearch={setShowSearch}/>

          <p className="text-xs text-[#687382]">
            We care about your data in our{" "}
            <span className="underline underline-offset-[3px] cursor-pointer">
              privacy policy
            </span>
          </p>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center">
          <video autoPlay loop muted>
            <source src={videoHero} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    
  );
}
