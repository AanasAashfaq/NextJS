// // components/Header.js
// import Link from 'next/link';
// import { use, useState } from 'react';

// const Header = () => {
//   const [isHomeActive, setIsHomeActive] = useState(true);
//   const [isAboutActive, setIsAboutActive] = useState(false);
//   const [isDashboardActive, setIsDashboardActive] = useState(false);

//   const handleHomeClick = () => {
//     setIsHomeActive(true);
//     setIsAboutActive(false)
//     setIsDashboardActive(false);
//   };
//   const handleAboutClick = () => {
//     setIsAboutActive(true);
//     setIsHomeActive(false);
//     setIsDashboardActive(false)
//   };
//   const handleDashClick = () => {
//     setIsDashboardActive(true);
//     setIsAboutActive(false);
//     setIsHomeActive(false);
//   };

//   return (
//     <header className="bg-white p-4">
//       <nav>
//         <ul className="flex space-x-4">
//           <li>
//             <Link href="/" legacyBehavior>
//               <a
//                 onClick={handleHomeClick}
//                 className={`${
//                   isHomeActive ? 'bg-blue-500 font-bold' : ''
//                 } text-black hover:text-blue-500 transition-all duration-300`}
//               >
//                 Home
//               </a>
//             </Link>
//           </li>
//           <Link href="/dashboard" legacyBehavior>
//             <a onClick={handleDashClick}>
//           <li className={`${isDashboardActive ? 'drop-shadow-md drop-shadow-md border-blue border-solid border-2' :'' } mt-0.5 w-full`}>
//                     <div id="dashboard" className="py-2.7  text-sm ease-nav-brand my-0 mx-4 flex items-center whitespace-nowrap px-4 transition-colors" >
//                         <div id="dashboards" className="drop-shadow-md bg-blue-200 shadow-soft-2xl mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-center stroke-0 text-center xl:p-2.5">
//                       {/* svg */}
//                         </div>
//                         <span className="ml-1 duration-300 text-red-500 opacity-100 pointer-events-none ease-soft">Dashboard</span>
//                     </div>
//                 </li>
//                 </a>
//           </Link>
//           <Link href="/about" legacyBehavior>
//             <a onClick={handleAboutClick}>
//           <li className={`${isAboutActive ? 'drop-shadow-md drop-shadow-md border-blue border-solid border-2' :'' } mt-0.5 w-full`}>
//                     <div id="dashboard" className="py-2.7  text-sm ease-nav-brand my-0 mx-4 flex items-center whitespace-nowrap px-4 transition-colors" >
//                         <div id="dashboards" className="drop-shadow-md bg-blue-200 shadow-soft-2xl mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-center stroke-0 text-center xl:p-2.5">
//                       {/* svg */}
//                         </div>
//                         <span className="ml-1 duration-300 text-red-500 opacity-100 pointer-events-none ease-soft">Age Vs Balance</span>
//                     </div>
//                 </li>
//                 </a>
//           </Link>
          
//         </ul>
//       </nav>
//     </header>
//   );
// };

// export default Header;


import HeaderTop from "./headerTop";
import SideBar from "./sidebar";

function Header()
{
    return(
        <div className="flex">
     
       </div>
    );
}
export default Header;