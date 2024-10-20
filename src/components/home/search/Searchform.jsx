import { useState } from "react";
import { Country } from "country-state-city";
import searchImg from "../../Img/search.svg";
import locationImg from "../../Img/location.svg";

import './search.css'

const Searchform = () => {
  
  const countryData = Country.getAllCountries();
  const [active, setActive] = useState(false);
  const [jobTitle, inputTitle] = useState("")
  const [locationData, setLocationData] = useState("", false);
  const [results, setResults] = useState([]);


  const jobEvent = (value) => {
    inputTitle(value)
  }

  const changeEvent = (value) => {
    setLocationData(value); //passing the inputed value to the setLocationData
    console.log(value);

    const result = countryData.filter((inputLocation) => {
      return (
        inputLocation &&
        inputLocation.name &&
        inputLocation.name.toLowerCase().includes(value) ||
        inputLocation.name.toUpperCase().includes(value) &&
        inputLocation.name.toUpperCase().startsWith(value) ||
        inputLocation.name.toLowerCase().startsWith(value) 
 

      );
    }); //check if the data matches a country name

    setResults(result);
     

    if (value.trim().length === 0) {
      setActive(!active)
    }


  };


  const clickEvent = (locationClick) => {
    
setLocationData(locationClick);

setActive(!active);
  }


  



  const submitEvent = (event) => {
    event.preventDefault();
    setLocationData("");
    inputTitle("")
  };

  return (
    <div
      className="search absolute top-[300px] left-[4%] flex flex-col
    items-start p-0  gap-[16px] w-[90vw] h-[251px] mt-[40px] z-10
    lg:w-[852px] lg:h-[131px] lg:items-start  ">
      <form
        onSubmit={submitEvent}
        className="search-box bg-[#FFFFFF]  flex flex-col 
         justify-center items-center py-[7px] px-[16px] w-full h-[183px] shadow-SB lg:h-[89px] lg:flex-row ">
        <div
          className="job-title
flex flex-row items-center py-0 pr-[16px] pl-[8px]
             gap-[16px] w-full h-[47px] 
              	 ">
          <img className="job-icon w-[24px] h-[24px]" src={searchImg} alt="" />

          <div
            className="frame flex flex-col justify-between
             items-start w-full	 gap-10px ">
            <div
              className="search-frame flex flex-row justify-between items-center
                my-0 mx-auto w-full  ">
              <input
                className="job 	 
                   w-full h-[47px] pt-[20px] px-0 pb-0 text-base	font-normal leading-6	
                  	 "
                type="text"
                value={jobTitle}
                placeholder="Job title or keyword"
                onChange={(e) => jobEvent(e.target.value) }
              />
            </div>
            <hr className="rectangle my-0 mx-auto w-full h-[2px] bg-[#D6DDEB] " />
          </div>
        </div>

        <div
          className="location flex flex-row items-center py-0
           pr-[24px] pl-[8px] gap-[16px] w-full h-[47px]">
          <img className="w-[24px] h-[24px]" src={locationImg} alt="" />
          <div
            className="frame flex flex-col justify-between
            items-start	 gap-10px w-full">
            <div
              className="frame flex flex-row justify-between items-center
                my-0 mx-auto w-full ">
              <input
                className="location 	 
                   w-full h-[47px] pt-[20px] px-0 pb-0 text-base	font-normal leading-6	
                  	 "
                type="text"
                placeholder="Location"
                value={locationData}
                onChange={(e) => changeEvent(e.target.value)}
              />
            </div>
            <hr className="rectangle my-0 mx-auto w-full h-[2px] bg-[#D6DDEB] " />
          </div>
        </div>
        <div className={active ? 'hidden' : 'dropdown'}>
      
          {results.map((result, id) => {
           
            return <div className="py-[10px] px-[20px]"
            onClick={(e) => {clickEvent(result.name)}} key={id}>{result.name}</div>;
          })}

         </div>

        <button
          className="flex flex-row  justify-center
          items-center py-[14px] px-[27px] gap-[10px]
                       w-full h-[57px] bg-[#4640DE] mt-[10px] 
                       lg:w-[209px] "
          type="submit">
          <h2
            className="
                         w-[130px] h-[29px] 
                           font-bold font-great text-lg	leading-7	text-[#FFFFFF]">
            Search my job
          </h2>
        </button>
      </form>
      <div className="text w-full h-[52px] flex items-center text-[#202430]
      text-base	font-normal font-great opacity-70
       ">
      Popular : <br /> UI Designer, UX Researcher, Android, Admin
      </div>
    </div>
  );
};

export default Searchform;

