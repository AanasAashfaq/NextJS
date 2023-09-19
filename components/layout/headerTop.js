import classes from './headerTop.module.css'
function HeaderTop()
{
    return (<div className={classes.container}>
         <nav>
                    <ol className="flex flex-col w-[150px] flex-wrap pt-1 mr-12 bg-transparent rounded-lg sm:mr-16">
                        <li className="ml-[10px] mt-[12px] text-sm  leading-normal">
                            <a className="opacity-50 text-slate-700" href="javascript:;">Pages / Tables</a>
                        </li>
                        {/* <li class="ml-[10px] mt-[12px] text-sm pl-2 capitalize leading-normal text-slate-700 before:float-left before:pr-2 before:text-gray-600 before:content-['/']" aria-current="page">Tables</li> */}
                    </ol>
                </nav>

                <div className="flex items-center mt-2 grow sm:mt-0 sm:mr-6 md:mr-0 lg:flex lg:basis-auto">
                <div className="flex items-center md:ml-auto md:pr-4">
                        <div className="relative flex flex-wrap items-stretch w-full transition-all rounded-lg ease-soft">
                            <span className="text-sm ease-soft leading-5.6 absolute z-50 -ml-px flex h-full items-center whitespace-nowrap rounded-lg rounded-tr-none rounded-br-none border border-r-0 border-transparent bg-transparent py-2 px-2.5 text-center font-normal text-slate-500 transition-all">
                                <i className="fas fa-search" aria-hidden="true"></i>
                            </span>
                            <input type="text" className="pl-[20px] mr-3 text-sm focus:shadow-soft-primary-outline ease-soft w-1/100 leading-5.6 relative -ml-px block
                             min-w-0 flex-auto rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 pr-3 text-gray-700 transition-all placeholder:text-gray-500 focus:border-fuchsia-300
                             focus:outline-none focus:transition-shadow" placeholder="Type here..." />
                        </div>
                    </div>
                    <ul className="mr-32 flex flex-row justify-end pl-0 mb-0 list-none md-max:w-full">
                    <li className="flex items-center">          
                               <i className="fa fa-user sm:mr-1" aria-hidden="true"></i>
                                {/* <span className="hidden font-medium text-gray-400 sm:inline">sign In</span> */}
                        </li>
                        {/* <li className="flex items-center px-4">
                          <p>icon</p>
                        </li> */}
                    </ul>
                </div>
    </div>)
}
export default HeaderTop;