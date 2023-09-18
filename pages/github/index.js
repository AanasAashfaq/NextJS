import { useEffect } from 'react';
import Link from 'next/link';
import Head from 'next/head';
function RedirectToGitHub() {
  useEffect(() => {
    const openGitHubInNewTab = () => {
      window.open('https://github.com/Muhammad1umer-tech/Python-project', '_blank');
    };

    openGitHubInNewTab();
  }, []);

  return (
    <div>
      <Head><title>My Github</title></Head>
      <Link  href='https://github.com/Muhammad1umer-tech/Python-project' legacyBehavior><a className='text-blue-500 underline-offset-1'>Github</a></Link>
    </div>
  );
}

export default RedirectToGitHub;
