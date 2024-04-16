'use client'
import React,{useRef, useEffect} from 'react';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

const Speakers = () => {

  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);


  useEffect(() => {

    const pin = gsap.fromTo(sectionRef.current, {
      translateX : 0
    },{
      transalteX: "-300vw",
      ease: 'none',
      duration: 1,
      ScrollTrigger : {
        trigger: triggerRef.current,
        start: "top top",
        end: "2000 top",
        scrub: 0.6,
        pin: true
      }
    })



    return () => {

      pin.kill();
      
    }
  },{})

  return (
    <section className='overflow-hidden '>
        <div ref={triggerRef}>
            <div ref={sectionRef} className='h-screen flex flex-row relative' id='scroll-section-inner'>
                <div className=''>Speaker 1</div>
                <div className=''>Speaker 2</div>
                <div className=''>Speaker 3</div>
                <div className=''>Speaker 4</div>
                <div className=''>Speaker 5</div>
            </div>
        </div>
    </section>
  )
}

export default Speakers
