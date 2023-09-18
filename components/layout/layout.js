import { useState } from "react";
import Header from "./header";
import HeaderTop from "./headerTop";
import SideBar from "./sidebar";
import classes from './styles.module.css'
import ShowCase from "./showCase";
useState
function Layout(props)
{
    return(
        <div className="flex">
            <SideBar />
            <div className={classes.container}>
            <HeaderTop />
            <ShowCase />
            <div className=" ">
                {props.children}
            </div>
            <div>
            <div className="mt-12 flex justify-center text-[#293964]">© 2023, made with ♡ by <span className="pb-4 font-semibold pl-1"> Muhammad Umer & Muhammad Anas
                </span> 
                </div>
            </div>
            </div>
        </div>
    );
}
export default Layout;