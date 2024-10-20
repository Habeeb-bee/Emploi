import { useState } from 'react';
import Searchform from "./search/Searchform";
import vector from "../img/titleVector.svg";
import dot from "../img/dotVector.svg";
import man from "../Img/homeBg.svg"



const Title = () => {

  return (
    <section 
      className="title  absolute flex flex-col items-start w-screen	 h-[641.58px] 
         pt-[16px] pb-[32px] px-[4%] gap-[23px] left-0 right-0 top-[70px] bottom-[1.44%]
         lg:w-1/2 lg:left-[5%] lg:top-[90px]  ">
      <div className="discover absolute w-[95%] h-[159px] left-[4%] top-[16px] 
      lg: ">
        <h2
          className="not-italic font-serif not-italic font-semibold text-5xl leading-[53px]
            text-[#25324B] sm:text-6xl	  ">
          Discover <br /> more than <br />
          <span className="text-[#26A4FF]">5000+ Jobs</span>
        </h2>
      </div>
      <img
        className="vector max-w-[90%] absolute h-[39.58px]  left-[4%]  top-[186px] 
         sm:top-[200px] "
        src={vector}
        alt=""
      />
      <img
        className="dot absolute w-[10.54px] h-[10.02px] left-[41.93px] top-[223.56px]
        sm:top-[243.56px] "
        src={dot}
        alt=""
      />

      <p
        className="absolute w-[95%] h-[87px] top-[265.58px]
         opacity-70 left-[4%] bottom-[1px] text-lg	  
        font-normal font-great	text-[#515B6F] 
        lg:w-[512px]  ">
        Great platform for the job seeker that searching for new career heights
        and passionate about startups.
      </p>
     
     <Searchform  />

     <img className=' sm:hiddden md:hidden lg:flex   absolute w-[501px]
      h-[567px] left-[692px] top-[10px] animate-up-down ease-in-out duration-300 ' src={man} alt="" />
     


      </section>
  );
};

export default Title;
