import Link from 'next/link';
import { useEffect } from 'react';
import Head from 'next/head';
function RedirectToGitHub() {
  useEffect(() => {
    // Open the GitHub link in a new tab
    const openGitHubInNewTab = () => {
      window.open('https://www.kaggle.com/datasets/barelydedicated/bank-customer-churn-modeling', '_blank');
    };

    openGitHubInNewTab();
  }, []);

  return (
    <div>
      <Head><title>Keggle Info</title></Head>
      <Link  href='https://www.kaggle.com/datasets/barelydedicated/bank-customer-churn-modeling' legacyBehavior><a className='text-blue-500 underline-offset-1'>Keggle</a></Link>
    </div>
  );
}

export default RedirectToGitHub;
