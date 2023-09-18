import { useEffect, useState } from 'react';
import Head from 'next/head';
function Egd() {
    const [htmlUrl, setHtmlUrl] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        fetch('/api/get-html',{
            method:'POST',
            body:JSON.stringify('Genderistribution.html'),
            headers:{
              'Content-Type':'application/json'
            }}) // Adjust the URL as needed
            .then((response) => response.json())
            .then((data) => {
                if (data.htmlUrl) {
                    setHtmlUrl(data.htmlUrl);
                }
            })
            .catch((error) => {
                console.error('Error fetching HTML URL:', error);
            }).finally(()=>{
                setIsLoading(false);
              });
    }, []);
    if(isLoading)
    {
        return <h1 className='z-50 text-5xl ml-10'>Loading...</h1>
    }
    return (
        <div className="m-2 ">
            <Head><title>EGD</title></Head>
            <div className=" border-black/12.5 shadow-soft-xl relative z-20 flex min-w-0 flex-col 
                        break-words rounded-2xl border-2 shadow-lg border-solid bg-white bg-clip-border mb-4">
                <div className=" flex-auto p-4">
                    <div className=" w-[100%]  flex justify-center h-[600px] py-4 pr-1 mb-4 ">
                        <div className="w-[100%] min-h-[100%] ">
                            {/* <iframe src="graph.html" style="margin: auto; width: 100%; height: 100%;"></iframe> */}
                            <div className="p-10 m-auto w-[100%] h-[100%] ">
                                {htmlUrl && (
                                    <iframe src={htmlUrl} width="100%" height="500px" />
                                )}
                            </div>
                        </div>
                    </div>
                    <h6 className="mt-6 mb-0 ml-2">Active Users</h6>
                    <p class="ml-2 leading-normal text-sm">( <span class="font-bold">+23%</span>) than last week </p>
                </div>
            </div>
        </div>
    );
}
export default Egd;