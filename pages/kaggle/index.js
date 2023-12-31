import Link from 'next/link';
import { useEffect } from 'react';
import Head from 'next/head';
function RedirectTokaggle() {
  useEffect(() => {
    const openGitHubInNewTab = () => {
      setTimeout(()=>{
        window.open('https://www.kaggle.com/datasets/barelydedicated/bank-customer-churn-modeling', '_blank');
      })
    };

    openGitHubInNewTab();
  }, []);

  return (
    <div className="border-black/12.5 shadow-soft-xl relative z-20 flex min-w-0 flex-col 
    break-words rounded-2xl border-2 shadow-lg    border-solid bg-white bg-clip-border mb-4">
<div className=" flex-auto p-4">
<div className=" w-[100%]  flex justify-center h-[600px] m-auto py-4 pr-1 mb-4 ">
    <div className="w-[100%] min-h-[100%]  ">
        {/* <iframe src="graph.html" style="margin: auto; width: 100%; height: 100%;"></iframe> */}
        <Head><title>Kaggle Information</title></Head>
        <a href='https://www.kaggle.com/datasets/barelydedicated/bank-customer-churn-modeling' className='text-blue-500 m-auto text-3xl underline underline-offset-1'>Kaggle</a>
        </div>
    </div>
</div>
</div>
  );
}

export default RedirectTokaggle;
