
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import react from 'react';
import Speakers from '@/components/Speakers';
import Head from 'next/head';
// import Timer from '@/components/Timer';


export default function Home() {
  return (
    <main>
      <Head>
        <title lang="en">TEDxVITAP</title>
        <link rel="icon" href="././public/fav.png" />
        <meta name="TEDxVITAP" content="This is the website for TEDxVITAP"></meta>
      </Head>
      <div className='bg-image bg-center h-screen'>
      <Navbar />
      
      <Hero/>
    
      {/* <Timer/> */}
      {/* <Speakers/> */}
      </div>
    </main>
  );
}
