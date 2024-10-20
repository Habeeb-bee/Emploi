 import amd from './Img/amd.svg';
 import intel from './Img/intel.svg';
 import talkit from './Img/talkit.svg';
 import tesla from './Img/tesla.svg';
 import vodafone from './Img/vodafone.svg';



const Company = () => {
    return (
    <div id='browse' className="company flex flex-col
    items-start py-[40px]
    px-[16px] gap-[32px] w-screen h-[317px] md:h-[170px] ">
        <h3 className="
        company-text
         h-[29px]
        text-lg	font-normal font-great	
        leading-7 text-[#202430]
        opacity-50	">Companies we helped grow</h3>

        <div className="featured-company 
        w-full h-[176px] ">

            <div className="companys-logos grid grid-cols-2 gap-[65px] 
            justify-around items-start p-0 md:grid-cols-5
            w-full h-[112px]  px-[16px] ">
        <div className="company-box grid place-items-center	 text-center transition-transform hover:-translate-y-1 ">
        <img className="   w-[154px] h-[40px]  " src={vodafone} alt="" />
        </div>

        <div className="skill-box grid place-items-center	 transition-transform hover:-translate-y-1">
        <img className="   h-[32px] w-[83px]   " src={intel} alt="" />
        </div>

        <div className="skill-box grid place-items-center	 transition-transform hover:-translate-y-1">
        <img className="   h-[32px] w-[109px]   " src={talkit} alt="" />
        </div>

        <div className="skill-box grid place-items-center	 transition-transform hover:-translate-y-1">
        <img className="   h-[28px] w-[117px]   " src={amd} alt="" />
        </div>

        <div className="skill-box grid place-items-center	 transition-transform hover:-translate-y-1">
        <img className="   w-[183px] h-[35px]  " src={tesla} alt="" />
        </div>

       

       
     </div>


             </div>
             
              </div>
   

    )
}

export default Company;