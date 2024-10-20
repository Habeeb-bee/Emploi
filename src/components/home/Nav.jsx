import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import logo from "../img/logo.svg";
import vector from "../img/logoVector.svg";

const navigation = [
 
  { name: 'Find jobs', href: '#home', current: false },
  { name: 'Browse Companies', href: '#browse', current: false },
  { name: 'Latest jobs', href: '#latest', current: false },

]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Header= () => {
  return (

<Disclosure as="nav" className=" backdrop-blur-sm	bg-[#4640DE]/[.8]	  z-50 fixed w-screen">
      <div className="mx-auto max-w-full px-2 sm:px-6 lg:px-8 ">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 right-0 flex items-center md:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group flex  border border-solid border-[#D6DDEB]
             p-[8px] gap-[10px] w-[40px] h-[40px] bg-[#FFFFFF] right-0 mr-5  items-center justify-center rounded-[96px]
              text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
            </DisclosureButton>
          </div>
     
          <div className="absolute companyLogo inset-y-0  flex items-center  sm:static sm:inset-auto  sm:pr-0">
            <div  className="flex flex-shrink-0 items-center">
              
              <img
                alt="Your Company"
                src={logo}
                className="h-8 w-auto"
              />
                  <a href='#home'
           className="logo-name   text-[24px] font-bold leading-[150%] not-italic tracking-tighter
             h-[36px] pl-[3px] top-[13px] shadow-inner hover:text-gray-900 cursor-pointer font-logo ">
           Emploi
         </a>
            </div>
            <div className="hidden sm:ml-6 md:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'rounded-md px-3 py-2 text-sm font-medium',
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="hidden md:flex flex-1 items-center  justify-end  ">
          <button
               type="button"
               className=" flex flex-row justify-center pr-[5px]
               items-center text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
              <a>Login</a>
             </button>

             <div className="divider bg-[#D6DDEB] w-[25px] h-0 
              text-center border border-solid rotate-90 hidden md:inline	"> </div>

            <button
             type="button"
              className=" flex-row justify-center items-center 
              rounded-md bg-gray-800 py-[7px] px-[10px] text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
           <a>Sign Up</a>
           </button>
          </div>
         
        </div>
      </div>

      <DisclosurePanel className="md:hidden">
        <div className="space-y-1 px-[35px] pb-3 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                'block rounded-md px-3 py-2 text-base font-medium  ' ,
              )}
            >
              {item.name}
              
            </DisclosureButton>
          ))}
                    <div className="flex flex-1 items-center  px-3 md:hidden ">
          <button
               type="button"
               className=" flex flex-row justify-center pr-[5px]
               items-center text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
              <a>Login</a>
             </button>

             <div className="divider bg-[#D6DDEB] w-[25px] h-0 
              text-center border border-solid rotate-90  md:inline	"> </div>

            <button
             type="button"
              className=" flex-row justify-center items-center 
              rounded-md bg-gray-800 py-[7px] px-[10px] text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
           <a>Sign Up</a>
           </button>
          </div>
        </div>
      </DisclosurePanel>
    </Disclosure>








  //  <Disclosure as="nav" className=" backdrop-blur-sm	bg-[#4640DE]/[.8]	  z-50 fixed w-screen ">
  //     <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
  //       <div className="relative flex h-16 items-center justify-between">
  //         <div className="absolute  right-[16px] inset-y-0  flex items-center sm:hidden">
  //           {/* Mobile menu button*/}
  //           <DisclosureButton className="group
  //           flex  box-border  p-[8px] gap-[10px] w-[40px] h-[40px] bg-[#FFFFFF] rounded-[96px]
  //            border border-solid border-[#D6DDEB] relative inline-flex items-center justify-start  text-gray-400 hover:bg-gray-700 hover:text-white ">
  //             <span className="absolute -inset-0.5" />
  //             <span className="sr-only">Open main menu</span>
  //             <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
  //             <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
  //           </DisclosureButton>
  //         </div>
  //         <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-center">
  //           <div className="logo flex flex-shrink-0 w-[160px] h-[36px]  text-[#25324B] ">
  //             <img
  //               alt="Your Company"
  //               src={logo}
  //               className="absolute w-[32px] h-[32px] left-[16px] top-[15px] "
  //             />

  //        <p
  //         className="logo-name absolute  text-[24px] font-bold leading-[150%] not-italic tracking-tighter
  //          w-[120px] h-[36px]  left-[56px] top-[13px] shadow-inner hover:text-gray-900 cursor-pointer font-logo ">
  //         Emploi
  //       </p>
  //           </div>
  //           <div className="Menu  hidden sm:ml-6 sm:block">
  //             <div className="flex space-x-4">
  //               {navigation.map((item) => (
  //                 <a
  //                   key={item.name}
  //                   href={item.href}
  //                   aria-current={item.current ? 'page' : undefined}
  //                   className={classNames(
  //                     item.current ? '  hover:bg-slate-900 text-white' : 'text-gray-300  hover:text-white',
  //                     'rounded-md px-3 py-2 text-sm font-medium',
  //                   )}
  //                 >
  //                   {item.name}
  //                 </a>
  //               ))}
  //             </div>
  //           </div>

  //           <div className=" inset-y-0 right-0 flex flex-row justify-end gap-[16px] items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
  //           <button
  //             type="button"
  //             className=" flex flex-row justify-center items-center text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
  //            <a>Login</a>
  //           </button>

  //           <div className="divider bg-[#D6DDEB] w-[25px] h-0 
  //           border border-solid rotate-90	  ">

  //           </div>
  //           <button
  //             type="button"
  //             className=" flex-row justify-center items-center 
  //              rounded-md bg-gray-800 py-[7px] px-[10px] text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
  //           <a>Sign Up</a>
  //           </button>



  //         </div>
  //         </div>
         
  //       </div>
  //     </div>


      
       

  //     <DisclosurePanel className="sm:hidden z-50">
  //       <div className="space-y-1 px-2 pb-3 pt-2">
  //         {navigation.map((item) => (
  //           <DisclosureButton
  //             key={item.name}
  //             as="a"
  //             href={item.href}
  //             aria-current={item.current ? 'page' : undefined}
  //             className={classNames(
  //               item.current ? ' text-white' : 'text-gray-300  hover:text-white',
  //               'block rounded-md px-3 py-2 text-base font-medium',
  //             )}
  //           >
  //             {item.name}
  //           </DisclosureButton>
  //         ))}
  //       </div>
  //     </DisclosurePanel>
  //   </Disclosure>


      
       

    //   <DisclosurePanel className="sm:hidden z-50">
    //     <div className="space-y-1 px-2 pb-3 pt-2">
    //       {navigation.map((item) => (
    //         <DisclosureButton
    //           key={item.name}
    //           as="a"
    //           href={item.href}
    //           aria-current={item.current ? 'page' : undefined}
    //           className={classNames(
    //             item.current ? ' text-white' : 'text-gray-300  hover:text-white',
    //             'block rounded-md px-3 py-2 text-base font-medium',
    //           )}
    //         >
    //           {item.name}
    //         </DisclosureButton>
    //       ))}
    //     </div>
    //   </DisclosurePanel>
    // </Disclosure>
  )
}


export default Header