import nomad from './Img/nomad.svg';
import dropbox from './Img/bd.svg';
import terraform from './Img/terraform.svg';
import packer from './Img/packer.svg';
import netlify from './Img/netlify.svg';
import maze from './Img/maze.svg';







const Latest = () =>{
    return (
        <div id='latest' className="latest w-screen h-[1508px] relative md:h-[877px]  ">
        <div className="content flex flex-col items-start 
        gap-[24px] absolute  w-full h-full px-[2vw]  top-[96px] ">
        
        <div className="title  h-[38px] ">
          <h3 className="text font-semibold font-serif	text-3xl text-[#25324B]">
          Latest <span className="text-[#26A4FF]">jobs open</span> 
          </h3>
        </div>

        <div className="list flex flex-col items-start p-0 
        gap-[16px] w-full h-[1310px] sm:w-[90vw] md:flex-row md:flex-wrap   ">

     {/* Nomad */}
        <div className="jobs flex flex-col items-start
        p-[16px] gap-[24px] w-full h-[205px] bg-gray-100 md:w-[45%]	  ">
       
       <img className='w-[48px] h-[48px] ' src={nomad} alt="" />
       <div className="title flex flex-col items-start
       p-0 gap-[8px] w-[268px] h-[101px] ">
        <h3 className="w-[228px] h-[24px] 
        text-xl font-semibold text-[#25324B] ">Social Media Assistant</h3>
         <div className="location flex flex-row justify-center 
                    items-center p-0 gap-[8px] w-[228px] h-[26px] ">
                        <div className="w-[59px] h-[26px]
                        font-semibold text-lg text-[#515B6F] ">Nomad</div>
                        <div className="rounded-full ml-3 mt-1 w-[4px] h-[2px] opacity-50
                        bg-[#515B6F] "></div>
                        <div className="madrid w-[228px] h-[26px]
                        font-semibold text-lg text-[#515B6F] ">Paris, France</div> 

                    </div>

           <div className="labels flex flex-row items-start
           p-0 gap-[8px] w-[268px] h-[34px]  ">

<div className="label flex flex-row justify-center items-center
 py-[6px] px-[10px] gap-[8px] 
  w-[83px] h-[34px] rounded-[80px] bg-[#56CDAD1A] ">

    <div className="caption h-[22px] font-semibold	
    text-sm	text-[#56CDAD]  ">Full-Time</div>
  </div>

  <div className="rect w-[1px] h-[34px] bg-[#D6DDEB] "></div>

  <div className="label  flex flex-row justify-center items-center
 py-[4px] px-[10px] gap-[8px] 
  w-[83px] h-[34px] box-border border border-solid border-[#FFB836]
   rounded-[80px] bg-[#EB85331A] ">

    <div className="caption h-[22px] font-semibold	
    text-sm	text-[#FFB836]  ">Marketing</div>
  </div>
  
  <div className="label flex flex-row justify-center items-center
 py-[6px] px-[10px] gap-[8px] 
  w-[83px] h-[34px] box-border border border-solid border-[#4640DE] 
   rounded-[80px] bg-[#56CDAD1A] ">

<div className="caption h-[22px] font-semibold	
    text-sm	text-[#4640DE]  ">Design</div>
  </div>

 

 
  
            </div>         
                    
       </div>
        </div>
{/* Dropbox */}
        <div className="jobs flex flex-col items-start
        p-[16px] gap-[24px] w-full h-[205px] bg-gray-100 md:w-[45%]	  ">
       
       <img className='w-[48px] h-[48px] ' src={dropbox} alt="" />
       <div className="title flex flex-col items-start
       p-0 gap-[8px] w-[268px] h-[101px] ">
        <h3 className="w-[228px] h-[24px] 
        text-xl font-semibold text-[#25324B] ">Brand Designer</h3>
         <div className="location flex flex-row justify-center 
                    items-center p-0 gap-[8px] w-[250px] h-[26px] ">
                        <div className="w-[59px] h-[26px]
                        font-semibold text-lg text-[#515B6F] ">Dropbox</div>
                        <div className="rounded-full ml-3 mt-1 w-[4px] h-[2px] opacity-50
                        bg-[#515B6F] "></div>
                        <div className="madrid w-[250px] h-[26px]
                        font-semibold text-lg text-[#515B6F] ">San Fransisco, USA</div> 

                    </div>

           <div className="labels flex flex-row items-start
           p-0 gap-[8px] w-[268px] h-[34px]  ">

<div className="label flex flex-row justify-center items-center
 py-[6px] px-[10px] gap-[8px] 
  w-[83px] h-[34px] rounded-[80px] bg-[#FF65501A] ">

    <div className="caption h-[22px] font-semibold	
    text-sm	text-[#FF6550]  ">Full-Time</div>
  </div>

  <div className="rect w-[1px] h-[34px] bg-[#D6DDEB] "></div>

  
  <div className="label flex flex-row justify-center items-center
 py-[6px] px-[10px] gap-[8px] 
  w-[83px] h-[34px] box-border border border-solid border-[#4640DE] 
   rounded-[80px] bg-[#56CDAD1A] ">

<div className="caption h-[22px] font-semibold	
    text-sm	text-[#4640DE]  ">Design</div>
  </div>

 

 
  
            </div>         
                    
       </div>
        </div>

        {/* Terraform */}
        <div className="jobs flex flex-col items-start
        p-[16px] gap-[24px] w-full h-[205px] bg-gray-100 md:w-[45%]	  ">
       
       <img className='w-[48px] h-[48px] ' src={terraform} alt="" />
       <div className="title flex flex-col items-start
       p-0 gap-[8px] w-[268px] h-[101px] ">
        <h3 className="w-[228px] h-[24px] 
        text-xl font-semibold text-[#25324B] ">Interactive Developer</h3>
         <div className="location flex flex-row justify-center 
                    items-center p-0 gap-[8px] w-[250px] h-[26px] ">
                        <div className="w-[59px] h-[26px]
                        font-semibold text-lg text-[#515B6F] ">Terraform</div>
                        <div className="rounded-full ml-3 mt-1 w-[4px] h-[2px] opacity-50
                        bg-[#515B6F] "></div>
                        <div className="madrid w-[250px] h-[26px]
                        font-semibold text-lg text-[#515B6F] ">Hamburg, Germany</div> 

                    </div>

           <div className="labels flex flex-row items-start
           p-0 gap-[8px] w-[268px] h-[34px]  ">

<div className="label flex flex-row justify-center items-center
 py-[6px] px-[10px] gap-[8px] 
  w-[83px] h-[34px] rounded-[80px] bg-[#EB85331A] ">

    <div className="caption h-[22px] font-semibold	
    text-sm	text-[#FFB836]  ">Full-Time</div>
  </div>

  <div className="rect w-[1px] h-[34px] bg-[#D6DDEB] "></div>

 
  
  <div className="label flex flex-row justify-center items-center
 py-[6px] px-[10px] gap-[8px] 
  w-[83px] h-[34px] box-border border border-solid border-[#4640DE] 
   rounded-[80px] bg-[#56CDAD1A] ">

<div className="caption h-[22px] font-semibold	
    text-sm	text-[#4640DE]  ">Developer</div>
  </div>

 

 
  
            </div>         
                    
       </div>
        </div>

        {/* Packer */}
        <div className="jobs flex flex-col items-start
        p-[16px] gap-[24px] w-full h-[205px] bg-gray-100 md:w-[45%]	  ">
       
       <img className='w-[48px] h-[48px] ' src={packer} alt="" />
       <div className="title flex flex-col items-start
       p-0 gap-[8px] w-[268px] h-[101px] ">
        <h3 className="w-[228px] h-[24px] 
        text-xl font-semibold text-[#25324B] ">HR Manager</h3>
         <div className="location flex flex-row justify-center 
                    items-center p-0 gap-[8px] w-[250px] h-[26px] ">
                        <div className="w-[59px] h-[26px]
                        font-semibold text-lg text-[#515B6F] ">Packer</div>
                        <div className="rounded-full ml-3 mt-1 w-[4px] h-[2px] opacity-50
                        bg-[#515B6F] "></div>
                        <div className="madrid w-[250px] h-[26px]
                        font-semibold text-lg text-[#515B6F] ">Lucern, Switzerland</div> 

                    </div>

           <div className="labels flex flex-row items-start
           p-0 gap-[8px] w-[298px] h-[34px]   ">

<div className="label flex flex-row justify-center items-center
 py-[6px] px-[10px] gap-[8px] 
  w-[83px] h-[34px] rounded-[80px] bg-[#56CDAD1A] ">

    <div className="caption h-[22px] font-semibold	
    text-sm	text-[#56CDAD]  ">Full-Time</div>
  </div>

  <div className="rect w-[1px] h-[34px] bg-[#D6DDEB] "></div>

  <div className="label  flex flex-row justify-center items-center
 py-[4px] px-[10px] gap-[8px] 
  w-[83px] h-[34px] box-border border border-solid border-[#FFB836]
   rounded-[80px] bg-[#EB85331A] ">

    <div className="caption h-[22px] font-semibold	
    text-sm	text-[#FFB836]  ">Marketing</div>
  </div>
  
  <div className="label flex flex-row justify-center items-center
 py-[6px] px-[10px] gap-[8px] 
  w-[93px] h-[34px] box-border border border-solid border-[#4640DE] 
   rounded-[80px] bg-[#56CDAD1A] ">

<div className="caption h-[22px] font-semibold	
    text-sm	text-[#4640DE]  ">Management</div>
  </div>

 

 
  
            </div>         
                    
       </div>
        </div>

        {/* Netlify */}
        <div className="jobs flex flex-col items-start
        p-[16px] gap-[24px] w-full h-[205px] bg-gray-100 md:w-[45%]	  ">
       
       <img className='w-[48px] h-[48px] ' src={netlify} alt="" />
       <div className="title flex flex-col items-start
       p-0 gap-[8px] w-[268px] h-[101px] ">
        <h3 className="w-[228px] h-[24px] 
        text-xl font-semibold text-[#25324B] ">Social Media Assistant</h3>
         <div className="location flex flex-row justify-center 
                    items-center p-0 gap-[8px] w-[228px] h-[26px] ">
                        <div className="w-[59px] h-[26px]
                        font-semibold text-lg text-[#515B6F] ">Netlify</div>
                        <div className="rounded-full ml-3 mt-1 w-[4px] h-[2px] opacity-50
                        bg-[#515B6F] "></div>
                        <div className="madrid w-[228px] h-[26px]
                        font-semibold text-lg text-[#515B6F] ">Paris, France</div> 

                    </div>

           <div className="labels flex flex-row items-start
           p-0 gap-[8px] w-[268px] h-[34px]  ">

<div className="label flex flex-row justify-center items-center
 py-[6px] px-[10px] gap-[8px] 
  w-[83px] h-[34px] rounded-[80px] bg-[#56CDAD1A] ">

    <div className="caption h-[22px] font-semibold	
    text-sm	text-[#56CDAD]  ">Full-Time</div>
  </div>

  <div className="rect w-[1px] h-[34px] bg-[#D6DDEB] "></div>

  <div className="label  flex flex-row justify-center items-center
 py-[4px] px-[10px] gap-[8px] 
  w-[83px] h-[34px] box-border border border-solid border-[#FFB836]
   rounded-[80px] bg-[#EB85331A] ">

    <div className="caption h-[22px] font-semibold	
    text-sm	text-[#FFB836]  ">Marketing</div>
  </div>
  


 

 
  
            </div>         
                    
       </div>
        </div>

         {/* Maze */}
         <div className="jobs flex flex-col items-start
        p-[16px] gap-[24px] w-full h-[205px] bg-gray-100 md:w-[45%]	  ">
       
       <img className='w-[48px] h-[48px] ' src={maze} alt="" />
       <div className="title flex flex-col items-start
       p-0 gap-[8px] w-[268px] h-[101px] ">
        <h3 className="w-[228px] h-[24px] 
        text-xl font-semibold text-[#25324B] ">Brand Designer</h3>
         <div className="location flex flex-row justify-center 
                    items-center p-0 gap-[8px] w-[240px] h-[26px] ">
                        <div className="w-[59px] h-[26px]
                        font-semibold text-lg text-[#515B6F] ">Maze</div>
                        <div className="rounded-full ml-3 mt-1 w-[4px] h-[2px] opacity-50
                        bg-[#515B6F] "></div>
                        <div className="madrid w-[240px] h-[26px]
                        font-semibold text-lg text-[#515B6F] ">San Fransisco, USA</div> 

                    </div>

           <div className="labels flex flex-row items-start
           p-0 gap-[8px] w-[268px] h-[34px]  ">

<div className="label flex flex-row justify-center items-center
 py-[6px] px-[10px] gap-[8px] 
  w-[83px] h-[34px] rounded-[80px] bg-[#56CDAD1A] ">

    <div className="caption h-[22px] font-semibold	
    text-sm	text-[#56CDAD]  ">Full-Time</div>
  </div>

  <div className="rect w-[1px] h-[34px] bg-[#D6DDEB] "></div>

  <div className="label  flex flex-row justify-center items-center
 py-[4px] px-[10px] gap-[8px] 
  w-[83px] h-[34px] box-border border border-solid border-[#FFB836]
   rounded-[80px] bg-[#EB85331A] ">

    <div className="caption h-[22px] font-semibold	
    text-sm	text-[#FFB836]  ">Marketing</div>
  </div>
  
  <div className="label flex flex-row justify-center items-center
 py-[6px] px-[10px] gap-[8px] 
  w-[83px] h-[34px] box-border border border-solid border-[#4640DE] 
   rounded-[80px] bg-[#56CDAD1A] ">

<div className="caption h-[22px] font-semibold	
    text-sm	text-[#4640DE]  ">Design</div>
  </div>

 

 
  
            </div>         
                    
       </div>
        </div>
        </div>



        </div>
        </div>
    )
}

export default Latest