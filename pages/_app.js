import Layout from '../components/layout/layout'
import '../styles/globals.css'
import FastClick from 'react-fastclick';

function MyApp({ Component, pageProps }) {
  
  return (
    
    <Layout>
    <Component {...pageProps} />
  </Layout>
    );
}

export default MyApp
