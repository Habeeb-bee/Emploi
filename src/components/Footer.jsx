import logo from './img/logo.svg';
import facebook from './img/facebook.svg';
import instagram from './img/instagram.svg';
import dribble from './img/dribble.svg';
import linkedin from './img/linkedin.svg';
import twitter from './img/twitter.svg';



const Footer = () => {
    return (
       <div className=" footer flex flex-col items-start
        py-[40px] px-[16px] gap-[24px] w-screen h-[858px] bg-[#202430] md:mt-[100px]" >
<div className="disc flex flex-col flex-start
 p-0 gap-[32px] w-full h-[146px] relative ">
     <div className="logo  w-[160px] h-[36px]" >
        <img
          className="logo-img absolute w-[32px] h-[32px] top-[2px] "
          src={logo}
          alt=""
        />
        <p
          className="logo-name absolute text-2xl font-bold font-serif leading-[150%] not-italic tracking-tighter
          text-[#fff] w-[120px] h-[36px]  left-[40px] top-[2px] ">
          Emploi
        </p>
         </div>
         <p
        className="absolute w-full  h-[87px] 
         bottom-[1px] text-lg	  
        font-normal	text-[#D6DDEB] ">
        Great platform for the job seeker that searching for new career heights
        and passionate about startups.
      </p>
 </div>

 <div className="menu flex flex-row items-start p-0 
 gap-[96px] w-full h-[241px]  ">                                                                                                                                                     
      
      <div className="first-col relative w-[105px] h-[241px]  ">

     <h3 className="about absolute w-[55px] h-[29px] left-[1px] text-[#fff] text-lg 
     font-semibold font-great	">
        About
     </h3>

     <div className="disc flex flex-col items-start p-0 
     gap-[16px] absolute w-[105px] h-[194px]  top-[47px] ">
        <h4 className=' w-[89px] h-[26px] font-normal
        text-[#D6DDEB] text-base cursor-pointer	 ' > Companies</h4>
        <h4 className=' w-[89px] h-[26px] font-normal
        text-[#D6DDEB] text-base cursor-pointer	 ' > Pricing</h4>
        <h4 className=' w-[89px] h-[26px] font-normal
        text-[#D6DDEB] text-base cursor-pointer	 ' > Term</h4>
        <h4 className=' w-[89px] h-[26px] font-normal
        text-[#D6DDEB] text-base cursor-pointer	 ' > Advice</h4>
        <h4 className=' w-[105px] h-[26px] font-normal
        text-[#D6DDEB] text-base cursor-pointer	 ' > Privacy Policy</h4>
     </div>
      </div>

    
      <div className="second-col relative w-[97px] h-[220px]  ">

<h3 className="about absolute w-[55px] h-[29px] left-[1px] text-[#fff] text-lg 
font-semibold font-great	">
   Resources
</h3>

<div className="disc flex flex-col items-start p-0 
gap-[16px] absolute w-[105px] h-[194px]  top-[47px] ">
   <h4 className=' w-[89px] h-[26px] font-normal
   text-[#D6DDEB] text-base	cursor-pointer ' > Help docs</h4>
   <h4 className=' w-[89px] h-[26px] font-normal
   text-[#D6DDEB] text-base	cursor-pointer ' > Guide</h4>
   <h4 className=' w-[89px] h-[26px] font-normal
   text-[#D6DDEB] text-base	cursor-pointer ' > Update</h4>
   <h4 className=' w-[89px] h-[26px] font-normal
   text-[#D6DDEB] text-base	cursor-pointer ' > Contact Us</h4>
   
</div>
 
      </div>
 </div>

<div className="notification flex flex-col items-start p-0 mt-9
w-full h-[213px]   ">

    <div className="disc felx flex-col items-start 
    p-0 gap-[8px]   w-full h-[89px] ">

        <h3 className='w-[188px] h-[29px] text-[#FFFFFF]
        font-semibold font-great text-lg 	 ' >
            Get job notification
        </h3>

<h4 className='h-[52px] text-base font-normal text-[#D6DDEB]' >

The latest job news, articles, sent to your inbox weekly. 
</h4>
    </div>


    <div className="mail flex flex-col items-start p-0
    gap-[8px] w-full h-[108px]  ">

<input className="input bg-[#fff] box-border flex items-center py-[12px]
px-[16px] gap-[10px] w-[80%]
sm:w-[70%]  "  placeholder='Email Address' />
<div className="button cursor-pointer bg-[#4640DE] flex flex-row font-great justify-center
py-[12px] px-[24px] gap-[10px] w-[131px] h-[50px] text-[#fff] ">
    Subscribe
</div>

    </div>
</div>
     
     
     <div className="copyright  flex flex-col items-start p-0 
     gap-[24px] h-[106px] w-full ">
          
          <div className="divider w-[95%] items-center 
          h-0 border-2 border-solid	border-white opacity-10	 "></div>

          <div className="text flex flex-col items-center p-0 
          gap-[24px] w-full h-[82px] ">

            <div className="w-[295px] h-[26px]  " >
            <h3 className=' text-[#fff] ml-[24px] font-medium	text-base opacity-50'>2021 @Emploi. All rights reserved.</h3> 
            </div>

       <div className="media flex flex-row gap-[16px] w-[256px] h-[32px] ml-[24px]
       	">
        
        <img className='cursor-pointer rounded-full hover:bg-[#4640DE]  ' src={facebook} alt="" />
        <img className='cursor-pointer rounded-full hover:bg-[#4640DE]	' src={instagram} alt="" />
        <img className='cursor-pointer rounded-full hover:bg-[#4640DE]	' src={dribble} alt="" />
        <img className='cursor-pointer rounded-full hover:bg-[#4640DE]	' src={twitter} alt="" />
        <img className='cursor-pointer rounded-full hover:bg-[#4640DE]	' src={linkedin} alt="" />




       </div>
          </div>
     </div>
     
        </div>
    )
}
export default Footer