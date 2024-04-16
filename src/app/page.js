
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import react from 'react';
import Speakers from '@/components/Speakers1';
import Head from 'next/head';
import About from '@/components/About';
// import Timer from '@/components/Timer';
import Speak from '@/components/Speak';


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
      <About/>
      <Speak/>
    
      {/* <Timer/> */}
      {/* <Speakers/> */}
      </div>
    </main>
  );
}
