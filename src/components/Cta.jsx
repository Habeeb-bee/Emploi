import dashboard from "./Img/dashboard.svg";

const Cta = () => {
  return (
    <div
      className="cta relative w-screen h-[655px] bg-[#4640DE]
         [clip-path:polygon(30%_0%,100%_0%,100%_80%,65%_100%,0%_100%,0%_15%)] 
         text-center  xl:w-[90vw] xl:left-[5%] ">
      <div className="cta-section">
        <div
          className="text flex flex-col
       items-center text-center p-0 gap-[16px]  
        absolute w-full h-[184px] top-[88px] px-[16px]
        xl:absolute xl:items-start xl:gap-[24px] xl:w-[364px] 
        xl:h-[230px] xl:top-[165px] xl:left-[54px]
        2xl:left-[300px]  ">
          <h3
            className="  h-[76px] px-[10px] font-semibold font-serif text-3xl	flex items-center	
            text-center text-[#fff] xl:text-start xl:h-[106px] xl:w-[319px] xl:text-5xl xl:p-0  ">
            Start posting jobs today
          </h3>
          <h3
            className=" 
            h-[26px] font-medium font-great text-base 
            text-[#fff] flex items-center text-center
            xl:h-[26px] xl:w-[364px]   ">
            Start posting jobs for only $10.
          </h3>
          <div className="button flex
          flex-row items-center justify-center bg-[#fff]	
          py-[12px] px-[24px] w-[95%] 
          h-[50px] gap-[10px] sm:w-[75%] xl:w-[179px] ">
            <div className="caption 
            w-[131px] h-[26px] font-bold text-base text-center 
            text-[#4640DE]	">Sign up for free</div>
          </div>
        </div>
        <img
          className=" absolute  h-[246px] w-full justify-center top-[298px] px-[16px]
          sm:w-[95%] md:w-[92%] md:h-[341px]
          xl:flex  xl:flex-row xl:items-start xl:p-0 
          xl:w-[504px]  xl:h-[364px] xl:left-[604px] 
          xl:top-[140px] 
          2xl:left-[900px]
          2xl:left-[900px] "
          src={dashboard}
          alt=""
        />
      </div>
    </div>
   
 
  );
};

export default Cta;
