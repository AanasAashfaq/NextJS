import { usePathname } from 'next/navigation'
import { useRouter } from "next/router";
import { useState } from 'react';
import { Disclosure } from '@headlessui/react';
import { GiHamburgerMenu } from 'react-icons/gi';
const menuItems = [
    {
        id: 'dashboard',
        path: '/dashboard',
        label: 'Dashboard',
        icon: 'icon1.png'
    },
    {
        id: 'Age',
        path: '/Age',
        label: 'Age Vs Balance',
        icon: 'icon2.png'
    },
    {
        id: 'Egd',
        path: '/Egd',
        label: 'Gender Distribution',
        icon: 'icon3.png'
    },
    {
        id: 'ModelInfo',
        path: '/ModelInformation',
        label: 'Model Information',
        icon: 'model.png'
    },


    {
        id: 'survery',
        path: '/survey',
        label: 'Custom Prediction',
        icon: 'icon4.png'
    },
    {
        id: 'keggle',
        path: '/keggle',
        label: 'Keggle',
        icon: 'letter-k.png'
    }, {
        id: 'github',
        path: '/github',
        label: 'github',
        icon: 'github.png'
    },
]

function SideBar() {
    const router = useRouter()
    const handleNav = (getMenu) => {
        router.push(getMenu.path)
    }
    const pathname = usePathname()
    return (
        
        // <Disclosure as="nav">
        //     <Disclosure.Button className="absolute top-4 right-4 inline-flex items-center peer justify-center
        //  rounded-md p-2 text-gray-800
        //  hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white group">
        //         <GiHamburgerMenu
        //             className=" block md:hidden h-6 w-6"
        //             aria-hidden="true"
        //         />
        //     </Disclosure.Button>
            <div className="pt-6  bg-[#fffefe] z-50  h-[100%]  fixed top-0 -left-52  lg:left-0  lg:w-[320px] 
         peer-focus:left-0 peer:transition ease-out delay-150 duration-200">
                <aside className="lg:pr-[0px] pr-[30px] lg:left-20 -left-96">
                    <div className="  h-screen pt-9   lg:left-20 -left-96">
                        <div className="flex  justify-left ml-10">
                            <img src="https://demos.creative-tim.com/soft-ui-dashboard-tailwind/assets/img/logo-ct.png" className="inline h-full max-w-full transition-all duration-200 ease-nav-brand max-h-8" alt="main_logo" />
                            <span className="ml-1 hidden lg:contents font-semibold transition-all duration-200 ease-nav-brand">Customer Bank Churn</span>
                        </div>
                        <nav className=" mt-10 w-72 h-[50%] m-2  absolute lg:left-0 left-44  ">
                            <div className=" items-center block  w-auto max-h-screen overflow-auto grow basis-full">
                                <ul className="mb-[10px] flex flex-col w-[100%] pl-0 ">
                                    {menuItems.map(menuItems => <li key={menuItems.id}>
                                        <label onClick={() => handleNav(menuItems)} onTouchStart={
                                            (e) => {
                                                e.preventDefault();
                                                handleNav(menuItems);
                                            }}
                                            className={` w-[80%] p-4 cursor-pointer py-2.7 text-sm ease-nav-brand rounded-md my-0 mx-4 flex items-center whitespace-nowrap px-4 transition-colors ${pathname.includes(menuItems.id) ? 'bg-none lg:bg-white drop-shadow-lg' : ''}`} >
                                            <div className={`shadow-soft-2xl mr-2 flex h-8 w-8 items-center shadow-md justify-center rounded-lg   
                                    stroke-0 text-center xl:p-2.5 ${pathname.includes(menuItems.id) ? 'bg-gradient-to-tl from-purple-700 to-pink-500' : ''}`}>
                                                <div className='  md:p-[0.5px] p-[10px]'>
                                                    <img src={`/images/${menuItems.icon}`} className='max-w-full' />
                                                </div>
                                            </div>
                                            <span className={`ml-1 hidden lg:contents duration-300 opacity-100 text-[#344767] pointer-events-none ease-soft  ${pathname.includes(menuItems.id) ? 'text-md  font-bold text-[0.95rem]' : ''}`}>{menuItems.label}</span>
                                        </label>
                                    </li>)}
                                </ul>
                            </div>
                        </nav>
                    </div>
                </aside>
            </div>
       
    );
}
export default SideBar;