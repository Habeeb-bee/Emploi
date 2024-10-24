import design from './Img/design.svg';
import sales from './Img/sales.svg';
import marketing from './Img/marketing.svg';
import finance from './Img/finance.svg';
import tech from './Img/tech.svg';
import eng from './Img/eng.svg';
import business from './Img/business.svg';
import hr from './Img/hr.svg';
import arrow from './Img/arrow.svg';
import button from './Img/button.svg';






const Category = () => {
    return (
        <div className="category mt-[60px] flex flex-col items-start  px-[16px]
        py-[40px] gap-[24px] w-screen h-[936px] bg-[#fff] 
        sm:w-[95vw] md:h-[1036px] lg:max-w-[1180px] lg:h-[633px] lg:ml-[5%]	 ">
      <h3 className=" w-full h-[38px]
      font-semibold	text-3xl text-[#25324B] font-serif
      lg:text-5xl lg:ml-[1.5%] lg:w-[50%] ">Explore by 
      <span className="text-[#26A4FF]" > category</span> </h3> 

      <div className="list flex flex-col items-start p-0 gap-[16px] 
      w-full h-[784px] md:flex-row md:flex-wrap lg:mt-[35px] lg:w-[98%]
      lg:ml-[1.5%]  ">

     <div className="design box-border flex flex-row items-center p-[16px]
     gap-[32px] w-full h-[84px] border-2 border-solid border-[#D6DDEB] md:w-[274px] md:h-[214px]
     md:flex-col md:items-start md:p-[22px] hover:bg-[#4640DE]  ">
     <img className='Icon' src= {design} alt="" />
     <div className="category-title flex flex-col justify-center
     items-start p-0 w-full  h-[52px] ">

      <h5 className=' h-[24px] 
      font-semibold  text-xl text-[#25324B] cursor-default 	' >Design</h5>
      <div className="jobs-avaliable cursor-pointer	 flex flex-row
      justify-between items-center p-0 gap-[16px]
       h-[26px]  w-full ">
        <div className="text w-full h-[26px] 
        text-base	font-normal text-[#7C8493]	  ">235 jobs available</div>
        <img className=' my-0 mx-auto w-[24px] h-[24px] ' src={arrow} alt="" />
      </div>

     </div>
     </div>

     <div className="sales box-border flex flex-row items-center p-[16px]
     gap-[32px] w-full h-[84px] border-2 border-solid border-[#D6DDEB] md:w-[274px] md:h-[214px]
     md:flex-col md:items-start md:p-[22px]  ">
     <img className='Icon' src= {sales} alt="" />
     <div className="category-title flex flex-col justify-center
     items-start p-0 w-full h-[52px] ">

      <h5 className=' h-[24px]
      font-semibold  text-xl text-[#25324B] cursor-default	' >Sales</h5>
      <div className="jobs-avaliable cursor-pointer	 flex flex-row
      justify-between items-center p-0 gap-[16px]
      w-full h-[26px] ">
        <div className="text w-full h-[26px]
        text-base	font-normal text-[#7C8493]	  ">756 jobs available</div>
        <img className=' my-0 mx-auto w-[24px] h-[24px] ' src={arrow} alt="" />
      </div>

     </div>
     </div>

     <div className="marketing box-border flex flex-row items-center p-[16px]
     gap-[32px] w-full h-[84px] border-2 border-solid border-[#D6DDEB] md:w-[274px] md:h-[214px]
     md:flex-col md:items-start md:p-[22px]  ">
     <img className='Icon' src= {marketing} alt="" />
     <div className="category-title flex flex-col justify-center
     items-start p-0 w-full h-[52px] ">

      <h5 className=' h-[24px]
      font-semibold  text-xl text-[#25324B] cursor-default	' >Marketing</h5>
      <div className="jobs-avaliable cursor-pointer	 flex flex-row
      justify-between items-center p-0 gap-[16px]
      w-full h-[26px] ">
        <div className="text w-full h-[26px]
        text-base	font-normal text-[#7C8493]	  ">140 jobs available</div>
        <img className=' my-0 mx-auto w-[24px] h-[24px] ' src={arrow} alt="" />
      </div>

     </div>

     </div>

     <div className="finance box-border flex flex-row items-center p-[16px]
     gap-[32px] w-full h-[84px] border-2 border-solid border-[#D6DDEB] md:w-[274px] md:h-[214px]
     md:flex-col md:items-start md:p-[22px]  ">
     <img className='Icon' src= {finance} alt="" />
     <div className="category-title flex flex-col justify-center
     items-start p-0 w-full h-[52px] ">

      <h5 className=' h-[24px]
      font-semibold  text-xl text-[#25324B] cursor-default	' >Finance</h5>
      <div className="jobs-avaliable cursor-pointer	 flex flex-row
      justify-between items-center p-0 gap-[16px]
      w-full h-[26px] ">
        <div className="text w-full h-[26px]
        text-base	font-normal text-[#7C8493]	  ">325 jobs available</div>
        <img className=' my-0 mx-auto w-[24px] h-[24px] ' src={arrow} alt="" />
      </div>

     </div>

     </div>

     <div className="tech box-border flex flex-row items-center p-[16px]
     gap-[32px] w-full h-[84px] border-2 border-solid border-[#D6DDEB] md:w-[274px] md:h-[214px]
     md:flex-col md:items-start md:p-[22px]  ">
     <img className='Icon' src= {tech} alt="" />
     <div className="category-title flex flex-col justify-center
     items-start p-0 w-full h-[52px] ">

      <h5 className=' h-[24px]
      font-semibold  text-xl text-[#25324B] cursor-default	' >Technology</h5>
      <div className="jobs-avaliable cursor-pointer	 flex flex-row
      justify-between items-center p-0 gap-[16px]
      w-full h-[26px] ">
        <div className="text w-full h-[26px]
        text-base	font-normal text-[#7C8493]	  ">436 jobs available</div>
        <img className=' my-0 mx-auto w-[24px] h-[24px] ' src={arrow} alt="" />
      </div>

     </div>

     </div>

     <div className="eng box-border flex flex-row items-center p-[16px]
     gap-[32px] w-full h-[84px] border-2 border-solid border-[#D6DDEB] md:w-[274px] md:h-[214px]
     md:flex-col md:items-start md:p-[22px]  ">
     <img className='Icon' src= {eng} alt="" />
     <div className="category-title flex flex-col justify-center
     items-start p-0 w-full h-[52px] ">

      <h5 className=' h-[24px]
      font-semibold  text-xl text-[#25324B] cursor-default	' >Engineering</h5>
      <div className="jobs-avaliable cursor-pointer	 flex flex-row
      justify-between items-center p-0 gap-[16px]
      w-full h-[26px] ">
        <div className="text w-full h-[26px]
        text-base	font-normal text-[#7C8493]	  ">436 jobs available</div>
        <img className=' my-0 mx-auto w-[24px] h-[24px] ' src={arrow} alt="" />
      </div>

     </div>

     </div>

     <div className="business box-border flex flex-row items-center p-[16px]
     gap-[32px] w-full h-[84px] border-2 border-solid border-[#D6DDEB] md:w-[274px] md:h-[214px]
     md:flex-col md:items-start md:p-[22px]  ">
     <img className='Icon' src= {business} alt="" />
     <div className="category-title flex flex-col justify-center
     items-start p-0 w-full h-[52px] ">

      <h5 className=' h-[24px]
      font-semibold  text-xl text-[#25324B] cursor-default	' >Business</h5>
      <div className="jobs-avaliable cursor-pointer	 flex flex-row
      justify-between items-center p-0 gap-[16px]
      w-full h-[26px] ">
        <div className="text w-full h-[26px]
        text-base	font-normal text-[#7C8493]	  ">436 jobs available</div>
        <img className=' my-0 mx-auto w-[24px] h-[24px] ' src={arrow} alt="" />
      </div>

     </div>

     </div>

     <div className="hr box-border flex flex-row items-center p-[16px]
     gap-[32px] w-full h-[84px] border-2 border-solid border-[#D6DDEB] md:w-[274px] md:h-[214px]
     md:flex-col md:items-start md:p-[22px]  ">
     <img className='Icon' src= {hr} alt="" />
     <div className="category-title flex flex-col justify-center
     items-start p-0 w-full h-[52px] ">

      <h5 className=' h-[24px]
      font-semibold  text-xl text-[#25324B] cursor-default	' >Human Resources</h5>
      <div className="jobs-avaliable cursor-pointer	 flex flex-row
      justify-between items-center p-0 gap-[16px]
      w-full h-[26px] ">
        <div className="text w-full h-[26px]
        text-base	font-normal text-[#7C8493]	  ">436 jobs available</div>
        <img className=' my-0 mx-auto w-[24px] h-[24px] ' src={arrow} alt="" />
      </div>

     </div>

     </div>


      </div>
      <div className="button flex flex-row justify-end items-center
      p-0 gap-[16px] w-[144px] h-[26px] cursor-pointer md:absolute md:right-[16px] md:flex
      lg:right-[70px]  ">
        <div className="show w-[104px] h-[26px] font-semibold 	text-base	
        items-center text-[#4640DE] "> Show all jobs</div>
        <img className='w-[24px] h-[24px] ' src={button} alt="" /> </div>
        </div>

    
    )
}

export default Category