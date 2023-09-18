import { useState } from "react";

function ShowCase() {
    const [loadedItems , setLoadedItems] = useState([]);
    fetch('https://python-project-zeta.vercel.app/').then((response)=>response.json()).then((data)=>setLoadedItems(data));
    return (
        <div className=" flex flex-wrap  removable">
            <div className="flex flex-wrap  text-[#3d5379] removable w-full">
                <div className="w-full max-w-full   p-[8px]  sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4 ">
                    <div className="relative flex  shadow-md flex-col min-w-0  break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border mb-4">
                        <div className="flex-auto p-4">
                            <div className="flex flex-row -mx-3">
                                <div className="flex-none w-2/3 max-w-full px-3" >
                                    <div>
                                        <p class="mb-0 font-sans font-semibold leading-normal text-sm">Avg Salary</p>
                                        <h1 id="avgSalary" className="mb-0 text-lg font-extrabold">${loadedItems.avg_Estimated_Salary1} <span className="leading-normal text-sm font-weight-bolder text-lime-500">+55%</span>
                                        </h1>
                                    </div>
                                </div>
                                <div className="px-3 text-right basis-1/3">
                                    <div className="inline-block w-12 h-12 text-center rounded-lg bg-gradient-to-tl from-purple-700 to-pink-500 shadow-soft-2xl">
                                    <img className="ni ni-money-coins text-lg leading-none relative p-3 text-white" src="/images/banknotes-64.png"></img>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full max-w-full  p-[6px] px-3 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4">
                    <div className="relative flex flex-col shadow-md min-w-0 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border mb-4">
                        <div className="flex-auto p-4">
                            <div className="flex flex-row -mx-3">
                                <div className="flex-none w-2/3 max-w-full px-3" >
                                    <div>
                                        <p class="mb-0 font-sans font-semibold leading-normal text-sm">Avg Age who left</p>
                                        <h5 id="avgSalary" className="mb-0 text-lg font-bold">{loadedItems.avg_age_who_Exited}  <span className="leading-normal text-sm font-weight-bolder text-lime-500">+4%</span>
                                        </h5>
                                    </div>
                                </div>
                                <div className="px-3 text-right basis-1/3">
                                    <div className="inline-block w-12 h-12 text-center rounded-lg bg-gradient-to-tl from-purple-700 to-pink-500 shadow-soft-2xl">
                                    <img className="ni ni-money-coins text-lg leading-none relative p-3 text-white" src="/images/exit-64.png"></img>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full  p-[6px] max-w-full px-3 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4">
                    <div className="relative flex flex-col min-w-0 shadow-md break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border mb-4">
                        <div className="flex-auto p-4">
                            <div className="flex flex-row -mx-3">
                                <div className="flex-none w-2/3 max-w-full px-3" >
                                    <div>
                                        <p class="mb-0 font-sans font-semibold leading-normal text-[0.7rem]">Avg Age who didn't left</p>
                                        <h5 id="avgSalary" className=" mb-0 text-lg font-bold">{loadedItems.avg_age_who_Not_Exited}  <span className="leading-normal text-sm font-weight-bolder text-lime-500">+5%</span>
                                        </h5>
                                    </div>
                                </div>
                                <div className="px-3 text-right basis-1/3">
                                    <div className="inline-block w-12 h-12 text-center rounded-lg bg-gradient-to-tl from-purple-700 to-pink-500 shadow-soft-2xl">
                                    <img className="ni ni-money-coins text-lg leading-none relative p-3 text-white" src="/images/x-mark-3-64.png"></img>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full p-[6px] max-w-full px-3 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4">
                    <div className="relative flex flex-col min-w-0 shadow-md break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border mb-4">
                        <div className="flex-auto p-4">
                            <div className="flex flex-row -mx-3">
                                <div className="flex-none w-2/3 max-w-full px-3" >
                                    <div>
                                        <p class="mb-0 font-sans font-semibold leading-normal text-sm">Avg Tenure</p>
                                        <h5 id="avgSalary" className="mb-0 text-lg font-bold">{loadedItems.avg_Tenure} <span className="leading-normal text-sm font-weight-bolder text-lime-500">+10%</span>
                                        </h5>
                                    </div>
                                </div>
                                <div className="px-3 text-right basis-1/3">
                                    <div className="inline-block w-12 h-12 text-center rounded-lg bg-gradient-to-tl from-purple-700 to-pink-500 shadow-soft-2xl">
                                        <img className="ni ni-money-coins text-lg leading-none relative p-3 text-white" src="/images/organization-64.png"></img>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ShowCase;