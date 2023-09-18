import { useEffect } from 'react';
import { useRouter } from 'next/router';

function Home() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the dashboard page
    router.push('/dashboard');
  }, []);

  return null; // You can return null or some loading indicator
}

export default Home;
