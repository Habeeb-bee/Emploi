import revoult from './Img/R.svg';
import dropbox from './Img/bd.svg';
import pitch from './Img/pitch.svg';
import blinkist from './Img/vd.svg';
import classpass from './Img/pd.svg';
import canva from './Img/canva.svg';
import godaddy from './Img/godaddy.svg';
import twitter from './Img/x.svg';
import button from './Img/button.svg';











const Featured = () => {
    return (
        <div className="featured flex flex-col items-start
        py-[40px] pl-[6.2%] gap-[24px]
        w-screen h-[475px] md:h-[1234px]
        lg:max-w-full 
        lg:py-[50px]    
        xl:h-[700px]   "> 

        <h3 className="disc  h-[38px]
        text-3xl font-semibold text-[#25324B] font-serif
         xl:pb-[50px] lg:text-5xl">Featured
         <span className="text-[#26A4FF] "> jobs</span></h3>

         <div className="list flex flex-row
         items-start p-0 gap-[16px] w-full h-[283px] overflow-x-scroll 
          hide-scrollbar  md:flex-wrap  md:overflow-visible 

          ">

        {/*Revolt */}
            <div className="list box-border	flex flex-col
            items-start p-[24px] gap-[16px] w-[326px]
            h-[283px] bg-[#fff] border border-solid	border-[#D6DDEB] ">

                <div className="head flex flex-row
                justify-between items-start p-0
                w-[268px] h-[48px] my-0 ">
         <img className='  w-[48px] h-[48px]
          ' src={revoult} alt="" />
          <div className="tag 
          box-border flex flex-row 
          justify-center items-center py-[4px]
          px-[12px] my-0  w-[91px] h-[34px]
          border border-solid border-[#4640DE]">
            <h4 className='w-[67px] h-[26px] 
            text-base font-normal text-center text-[#4640DE] '>Full Time</h4></div>
                </div>

                <div className="title
                flex flex-col itens-start gap-[2px]
                p-0 w-[184px] h-[57px] ">

                    <div className="email-marketing
                    w-[144px] h-[29px] font-semibold text-lg text-[#25324B]"> 
                    Email Marketing
                    </div>

                    <div className="location flex flex-row justify-center 
                    items-center p-0 gap-[8px] w-[250px] h-[26px] ">
                        <div className="w-[59px] h-[26px]
                        font-semibold text-lg text-[#515B6F] ">Revolt</div>
                        <div className="rounded-full ml-3 mt-1 w-[4px] h-[2px] opacity-50
                        bg-[#515B6F] "></div>
                        <div className="madrid w-[250px] h-[26px]
                        font-semibold text-lg text-[#515B6F] ">Madrid, Spain</div>

                    </div>

                </div>

                <div className="disc w-[286px] h-[52px] font-semibold text-lg text-[#7C8493]  ">
                Revolut is looking for Email Marketing to help team ma ...
                </div>
                <div className="list-label flex flex-row items-start p-0
                gap-[8px] w-[192px] h-[30px] ">
<div className="label flex flex-row justify-center
 py-[4px] px-[16px] gap-[8px] 
  w-[104px] h-[30px] rounded-[80px] bg-[#EB85331A] ">

    <div className="caption w-[72px] h-[22px] font-semibold	
    text-sm	text-[#FFB836]  ">Marketing</div>
  </div>

  <div className="label flex flex-row justify-center
 py-[4px] px-[16px] gap-[8px] 
  w-[80px] h-[30px] rounded-[80px] bg-[#56CDAD1A] ">

    <div className="caption w-[48px] h-[22px] font-semibold	
    text-sm	text-[#56CDAD]  ">Design</div>
  </div>
                </div>
            </div>
           
            {/*Dropbox */}
            <div className="list box-border	flex flex-col
            items-start p-[24px] gap-[16px] w-[326px]
            h-[283px] bg-[#fff] border border-solid	border-[#D6DDEB] ">

                <div className="head flex flex-row
                justify-between items-start p-0
                w-[268px] h-[48px] my-0 ">
         <img className='  w-[48px] h-[48px]
          ' src={dropbox} alt="" />
          <div className="tag 
          box-border flex flex-row 
          justify-center items-center py-[4px]
          px-[12px] my-0  w-[91px] h-[34px]
          border border-solid border-[#4640DE]">
            <h4 className='w-[67px] h-[26px] 
            text-base font-normal text-center text-[#4640DE] '>Full Time</h4></div>
                </div>

                <div className="title
                flex flex-col itens-start gap-[2px]
                p-0 w-[184px] h-[57px] ">

                    <div className="email-marketing
                    w-[144px] h-[29px] font-semibold text-lg text-[#25324B]"> 
                    Brand Designer
                    </div>

                    <div className="location flex flex-row justify-center 
                    items-center p-0 gap-[8px] w-[250px] h-[26px] ">
                        <div className="w-[59px] h-[26px]
                        font-semibold text-lg text-[#515B6F] ">Dropbox </div>
                        <div className="rounded-full ml-3 mt-1 w-[4px] h-[2px] opacity-50
                        bg-[#515B6F] "></div>
                        <div className="madrid w-[250px] h-[26px]
                        font-semibold text-lg text-[#515B6F] "> San Fransisco, US</div>

                    </div>

                </div>

                <div className="disc w-[286px] h-[52px] font-semibold text-lg text-[#7C8493]  ">
                Dropbox is looking for Brand Designer to help the team...
                </div>
                <div className="list-label flex flex-row items-start p-0
                gap-[8px] w-[192px] h-[30px] ">


  <div className="label flex flex-row justify-center
 py-[4px] px-[16px] gap-[8px] 
  w-[80px] h-[30px] rounded-[80px] bg-[#56CDAD1A] ">

    <div className="caption w-[48px] h-[22px] font-semibold	
    text-sm	text-[#56CDAD]  ">Design</div>
  </div>

  <div className="label flex flex-row justify-center
 py-[4px] px-[16px] gap-[8px] 
  w-[85px] h-[30px] rounded-[80px] bg-[#4640DE1A] ">

    <div className="caption w-[72px] h-[22px] font-semibold	
    text-sm	text-[#4640DE]  ">Business</div>
  </div>
                </div>
            </div>

            {/*Pitch */}
            <div className="list box-border	flex flex-col
            items-start p-[24px] gap-[16px] w-[326px]
            h-[283px] bg-[#fff] border border-solid	border-[#D6DDEB] ">

                <div className="head flex flex-row
                justify-between items-start p-0
                w-[268px] h-[48px] my-0 ">
         <img className='  w-[48px] h-[48px] rounded-full
          ' src={pitch} alt="" />
          <div className="tag 
          box-border flex flex-row 
          justify-center items-center py-[4px]
          px-[12px] my-0  w-[91px] h-[34px]
          border border-solid border-[#4640DE]">
            <h4 className='w-[67px] h-[26px] 
            text-base font-normal text-center text-[#4640DE] '>Full Time</h4></div>
                </div>

                <div className="title
                flex flex-col itens-start gap-[2px]
                p-0 w-[184px] h-[57px] ">

                    <div className="email-marketing
                    w-[144px] h-[29px] font-semibold text-lg text-[#25324B]"> 
                    Email Marketing
                    </div>

                    <div className="location flex flex-row justify-center 
                    items-center p-0 gap-[8px] w-[250px] h-[26px] ">
                        <div className="w-[59px] h-[26px]
                        font-semibold text-lg text-[#515B6F] ">Pitch</div>
                        <div className="rounded-full ml-3 mt-1 w-[4px] h-[2px] opacity-50
                        bg-[#515B6F] "></div>
                        <div className="madrid w-[250px] h-[26px]
                        font-semibold text-lg text-[#515B6F] ">Berlin, Germany</div>

                    </div>

                </div>

                <div className="disc w-[286px] h-[52px] font-semibold text-lg text-[#7C8493]  ">
                Blinkist is looking for Visual Designer to help team desi ...
                </div>
                <div className="list-label flex flex-row items-start p-0
                gap-[8px] w-[192px] h-[30px] ">
<div className="label flex flex-row justify-center
 py-[4px] px-[16px] gap-[8px] 
  w-[104px] h-[30px] rounded-[80px] bg-[#EB85331A] ">

    <div className="caption w-[72px] h-[22px] font-semibold	
    text-sm	text-[#FFB836]  ">Marketing</div>
  </div>

 
                </div>
            </div>

            {/* blinkist */}
            <div className="list box-border	flex flex-col
            items-start p-[24px] gap-[16px] w-[326px]
            h-[283px] bg-[#fff] border border-solid	border-[#D6DDEB] ">

                <div className="head flex flex-row
                justify-between items-start p-0
                w-[268px] h-[48px] my-0 ">
         <img className='  w-[48px] h-[48px]
          ' src={blinkist} alt="" />
          <div className="tag 
          box-border flex flex-row 
          justify-center items-center py-[4px]
          px-[12px] my-0  w-[91px] h-[34px]
          border border-solid border-[#4640DE]">
            <h4 className='w-[67px] h-[26px] 
            text-base font-normal text-center text-[#4640DE] '>Full Time</h4></div>
                </div>

                <div className="title
                flex flex-col itens-start gap-[2px]
                p-0 w-[184px] h-[57px] ">

                    <div className="email-marketing
                    w-[144px] h-[29px] font-semibold text-lg text-[#25324B]"> 
                    Visual Designer
                    </div>

                    <div className="location flex flex-row justify-center 
                    items-center p-0 gap-[8px] w-[250px] h-[26px] ">
                        <div className="w-[59px] h-[26px]
                        font-semibold text-lg text-[#515B6F] ">Blinkist</div>
                        <div className="rounded-full ml-3 mt-1 w-[4px] h-[2px] opacity-50
                        bg-[#515B6F] "></div>
                        <div className="madrid w-[250px] h-[26px]
                        font-semibold text-lg text-[#515B6F] ">Granada, Spain</div>

                    </div>

                </div>

                <div className="disc w-[286px] h-[52px] font-semibold text-lg text-[#7C8493]  ">
                Revolut is looking for Email Marketing to help team ma ...
                </div>
                <div className="list-label flex flex-row items-start p-0
                gap-[8px] w-[192px] h-[30px] ">


  <div className="label flex flex-row justify-center
 py-[4px] px-[16px] gap-[8px] 
  w-[80px] h-[30px] rounded-[80px] bg-[#56CDAD1A] ">

    <div className="caption w-[48px] h-[22px] font-semibold	
    text-sm	text-[#56CDAD]  ">Design</div>
  </div>
                </div>
            </div>

             {/*classpass */}
             <div className="list box-border	flex flex-col
            items-start p-[24px] gap-[16px] w-[326px]
            h-[283px] bg-[#fff] border border-solid	border-[#D6DDEB] ">

                <div className="head flex flex-row
                justify-between items-start p-0
                w-[268px] h-[48px] my-0 ">
         <img className='  w-[48px] h-[48px]
          ' src={classpass} alt="" />
          <div className="tag 
          box-border flex flex-row 
          justify-center items-center py-[4px]
          px-[12px] my-0  w-[91px] h-[34px]
          border border-solid border-[#4640DE]">
            <h4 className='w-[67px] h-[26px] 
            text-base font-normal text-center text-[#4640DE] '>Full Time</h4></div>
                </div>

                <div className="title
                flex flex-col itens-start gap-[2px]
                p-0 w-[184px] h-[57px] ">

                    <div className="email-marketing
                    w-[144px] h-[29px] font-semibold text-lg text-[#25324B]"> 
                    Product Designer
                    </div>

                    <div className="location flex flex-row justify-center 
                    items-center p-0 gap-[8px] w-[250px] h-[26px] ">
                        <div className="w-[59px] h-[26px]
                        font-semibold text-lg text-[#515B6F] ">ClassPass </div>
                        <div className="rounded-full ml-3 mt-1 w-[4px] h-[2px] opacity-50
                        bg-[#515B6F] "></div>
                        <div className="madrid w-[250px] h-[26px]
                        font-semibold text-lg text-[#515B6F] "> Manchester, UK</div>

                    </div>

                </div>

                <div className="disc w-[286px] h-[52px] font-semibold text-lg text-[#7C8493]  ">
                classPass is looking for Product Designer to help us ...
                </div>
                <div className="list-label flex flex-row items-start p-0
                gap-[8px] w-[192px] h-[30px] ">
<div className="label flex flex-row justify-center
 py-[4px] px-[16px] gap-[8px] 
  w-[104px] h-[30px] rounded-[80px] bg-[#EB85331A] ">

    <div className="caption w-[72px] h-[22px] font-semibold	
    text-sm	text-[#FFB836]  ">Marketing</div>
  </div>

  <div className="label flex flex-row justify-center
 py-[4px] px-[16px] gap-[8px] 
  w-[80px] h-[30px] rounded-[80px] bg-[#56CDAD1A] ">

    <div className="caption w-[48px] h-[22px] font-semibold	
    text-sm	text-[#56CDAD]  ">Design</div>
  </div>
                </div>
            </div>

             {/*Canva */}
             <div className="list box-border	flex flex-col
            items-start p-[24px] gap-[16px] w-[326px]
            h-[283px] bg-[#fff] border border-solid	border-[#D6DDEB] ">

                <div className="head flex flex-row
                justify-between items-start p-0
                w-[268px] h-[48px] my-0 ">
         <img className='  w-[48px] h-[48px]
          ' src={canva} alt="" />
          <div className="tag 
          box-border flex flex-row 
          justify-center items-center py-[4px]
          px-[12px] my-0  w-[91px] h-[34px]
          border border-solid border-[#4640DE]">
            <h4 className='w-[67px] h-[26px] 
            text-base font-normal text-center text-[#4640DE] '>Full Time</h4></div>
                </div>

                <div className="title
                flex flex-col itens-start gap-[2px]
                p-0 w-[184px] h-[57px] ">

                    <div className="email-marketing
                    w-[144px] h-[29px] font-semibold text-lg text-[#25324B]"> 
                    Lead Designer
                    </div>

                    <div className="location flex flex-row justify-center 
                    items-center p-0 gap-[8px] w-[250px] h-[26px] ">
                        <div className="w-[59px] h-[26px]
                        font-semibold text-lg text-[#515B6F] ">Canva</div>
                        <div className="rounded-full ml-3 mt-1 w-[4px] h-[2px] opacity-50
                        bg-[#515B6F] "></div>
                        <div className="madrid w-[250px] h-[26px]
                        font-semibold text-lg text-[#515B6F] ">Ontario, Canada</div>

                    </div>

                </div>

                <div className="disc w-[286px] h-[52px] font-semibold text-lg text-[#7C8493]  ">
                Canva is looking for Lead Engineer to help develop n...
                </div>
                <div className="list-label flex flex-row items-start p-0
                gap-[8px] w-[192px] h-[30px] ">


  <div className="label flex flex-row justify-center
 py-[4px] px-[16px] gap-[8px] 
  w-[80px] h-[30px] rounded-[80px] bg-[#56CDAD1A] ">

    <div className="caption w-[48px] h-[22px] font-semibold	
    text-sm	text-[#56CDAD]  ">Design</div>
  </div>

  <div className="label flex flex-row justify-center
 py-[4px] px-[16px] gap-[8px] 
  w-[85px] h-[30px] rounded-[80px] bg-[#4640DE1A] ">

    <div className="caption w-[72px] h-[22px] font-semibold	
    text-sm	text-[#4640DE]  ">Business</div>
  </div>
                </div>
            </div>

             {/*Godaddy */}
             <div className="list box-border	flex flex-col
            items-start p-[24px] gap-[16px] w-[326px]
            h-[283px] bg-[#fff] border border-solid	border-[#D6DDEB] ">

                <div className="head flex flex-row
                justify-between items-start p-0
                w-[268px] h-[48px] my-0 ">
         <img className='  w-[48px] h-[48px]
          ' src={godaddy} alt="" />
          <div className="tag 
          box-border flex flex-row 
          justify-center items-center py-[4px]
          px-[12px] my-0  w-[91px] h-[34px]
          border border-solid border-[#4640DE]">
            <h4 className='w-[67px] h-[26px] 
            text-base font-normal text-center text-[#4640DE] '>Full Time</h4></div>
                </div>

                <div className="title
                flex flex-col itens-start gap-[2px]
                p-0 w-[184px] h-[57px] ">

                    <div className="email-marketing
                    w-[144px] h-[29px] font-semibold text-lg text-[#25324B]"> 
                    Brand Strategist
                    </div>

                    <div className="location flex flex-row justify-center 
                    items-center p-0 gap-[8px] w-[250px] h-[26px] ">
                        <div className="w-[59px] h-[26px]
                        font-semibold text-lg text-[#515B6F] ">GoDaddy</div>
                        <div className="rounded-full ml-3 mt-1 w-[4px] h-[2px] opacity-50
                        bg-[#515B6F] "></div>
                        <div className="madrid w-[250px] h-[26px]
                        font-semibold text-lg text-[#515B6F] ">Marseille, France</div>

                    </div>

                </div>

                <div className="disc w-[286px] h-[52px] font-semibold text-lg text-[#7C8493]  ">
                GoDaddy is looking for Brand Strategist to join the team...
                </div>
                <div className="list-label flex flex-row items-start p-0
                gap-[8px] w-[192px] h-[30px] ">
<div className="label flex flex-row justify-center
 py-[4px] px-[16px] gap-[8px] 
  w-[104px] h-[30px] rounded-[80px] bg-[#EB85331A] ">

    <div className="caption w-[72px] h-[22px] font-semibold	
    text-sm	text-[#FFB836]  ">Marketing</div>
  </div>

 
                </div>
            </div>

             {/*Twitter */}
             <div className="list box-border	flex flex-col
            items-start p-[24px] gap-[16px] w-[326px]
            h-[283px] bg-[#fff] border border-solid	border-[#D6DDEB] ">

                <div className="head flex flex-row
                justify-between items-start p-0
                w-[268px] h-[48px] my-0 ">
         <img className='  w-[48px] h-[48px]
          ' src={twitter} alt="" />
          <div className="tag 
          box-border flex flex-row 
          justify-center items-center py-[4px]
          px-[12px] my-0  w-[91px] h-[34px]
          border border-solid border-[#4640DE]">
            <h4 className='w-[67px] h-[26px] 
            text-base font-normal text-center text-[#4640DE] '>Full Time</h4></div>
                </div>

                <div className="title
                flex flex-col itens-start gap-[2px]
                p-0 w-[184px] h-[57px] ">

                    <div className="email-marketing
                    w-[144px] h-[29px] font-semibold text-lg text-[#25324B]"> 
                    Data Analyst
                    </div>

                    <div className="location flex flex-row justify-center 
                    items-center p-0 gap-[8px] w-[250px] h-[26px] ">
                        <div className="w-[59px] h-[26px]
                        font-semibold text-lg text-[#515B6F] ">Twitter</div>
                        <div className="rounded-full ml-3 mt-1 w-[4px] h-[2px] opacity-50
                        bg-[#515B6F] "></div>
                        <div className="madrid w-[250px] h-[26px]
                        font-semibold text-lg text-[#515B6F] ">San Diego, US</div>

                    </div>

                </div>

                <div className="disc w-[286px] h-[52px] font-semibold text-lg text-[#7C8493]  ">
                Twitter is looking for Data Analyst to help team desi ...
                </div>
                <div className="list-label flex flex-row items-start p-0
                gap-[8px] w-[192px] h-[30px] ">
<div className="label flex flex-row justify-center
 py-[4px] px-[16px] gap-[8px] 
  w-[104px] h-[30px] rounded-[80px] bg-[#FF65501A] ">

    <div className="caption w-[72px] h-[22px] font-semibold	
    text-sm	text-[#FF6550]  ">Technology</div>
  </div>

  
                </div>
            </div>
         </div>

<div className="button flex flex-row justify-end items-center
p-0 gap-[16px] w-[144px] h-[26px] md:hidden ">
    <div className="text font-semibold	text-base text-center text-[#4640DE] ">Scroll Right</div>
    <img className='w-[24px] h-[24px] text-[#4640DE]
    animate-left-right ' src={button} alt="" />
</div>

<div className="button flex flex-row justify-end items-center
p-0 gap-[16px] w-[144px] h-[26px] hidden md:absolute md:right-[16px] md:flex
lg:right-[70px] ">
    <div className="text font-semibold	text-base text-center text-[#4640DE] ">See more</div>
    <img className='w-[24px] h-[24px] text-[#4640DE]
     ' src={button} alt="" />
</div>

         </div>


    )
}

export default Featured