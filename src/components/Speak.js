import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import img from '../../public/image.png'
import Speaker_list from './Speakers list.js';

const Speakers = () => {
  return (
    <>
    <div className='py-16 w-auto'>
        <div className='max-w-auto p-8 mx-auto py-5'>
            
            <div className='justify-center flex text-3xl p-2 '><h2>Our Speakers</h2></div>
            
            <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 py-5 gap-8'>
                <Speaker_list title='Title 1' disc='Description' name = 'Speaker 1'image={img} link='/'/>
                <Speaker_list title='Title 2' disc='Description' name = 'Speaker 2'image={img} link='/'/>
                <Speaker_list title='Title 3' disc='Description' name = 'Speaker 3'image={img} link='/'/>
                <Speaker_list title='Title 4' disc='Description' name = 'Speaker 4'image={img} link='/'/>
            </div>
        </div>
    </div>

    </>
  )
}

export default Speakers