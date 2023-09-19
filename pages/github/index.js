import { useEffect } from 'react';
import Link from 'next/link';
import Head from 'next/head';
function RedirectToGitHub() {
  

  return (
     <div className="border-black/12.5 shadow-soft-xl relative z-20 flex min-w-0 flex-col 
    break-words rounded-2xl border-2 shadow-lg border-solid bg-white bg-clip-border mb-4">
<div className=" flex-auto p-4">
<div className=" w-[100%]  flex justify-center h-[600px] py-4 pr-1 mb-4 ">
    <div className="w-[100%] min-h-[100%] ">
        {/* <iframe src="graph.html" style="margin: auto; width: 100%; height: 100%;"></iframe> */}
        <Head><title>My Github</title></Head>
      <Link  href='https://github.com/Muhammad1umer-tech/Python-project' legacyBehavior><a className='text-blue-500 text-3xl underline underline-offset-1'>Github</a></Link>
        </div>
    </div>
</div>
</div>
  );
}

export default RedirectToGitHub;
