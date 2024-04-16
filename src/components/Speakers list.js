import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import SpeakerCard from './Speak.js';

const Speakers = () => {
  return (
<div id='Speakers' class="flex flex-col place-items-center justify-center my-4">
	<div class="mb-5">
		<span class="font-extrabold text-4xl flex justify-center items-center">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="currentColor"
				class="w-8 h-8 mr-3"
			>
				<path
					d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z"
				/>
			</svg>

			The Speakers
		</span>
    <p class="text-center text-zinc-600"></p>
	</div>

	<div class="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 items-center justify-center sm:items-center sm:min-h-[75px]">
	<SpeakerCard
			image="https://i.ibb.co/mtNhSf5/ella.jpg"
			title="Content Creator"
			name="Ella D'Verma"
			link="https://www.instagram.com/elladverma/?hl=en"
			disc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam, distinctio ad. Distinctio veritatis similique adipisci ut, animi numquam eveniet maxime! Voluptatem iure possimus quidem commodi facere eius aut necessitatibus amet."
		/>
		<SpeakerCard
			image="https://i.ibb.co/rHDQGkT/arth.jpg"
			title="Founder inside FPV"
			name="Arth Chowdhary"
			link="https://www.instagram.com/arth_chowdhary_/?hl=en"
			disc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam, distinctio ad. Distinctio veritatis similique adipisci ut, animi numquam eveniet maxime! Voluptatem iure possimus quidem commodi facere eius aut necessitatibus amet."
		/>
		<SpeakerCard
			image="https://i.ibb.co/L096G5m/BG-2.png"
			title="Music Band"
			name="Twin Strings"
			link="https://www.instagram.com/twinstringsofficial/?hl=en"
			disc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam, distinctio ad. Distinctio veritatis similique adipisci ut, animi numquam eveniet maxime! Voluptatem iure possimus quidem commodi facere eius aut necessitatibus amet."
		/>
    </div>
	<div class="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-2 py-5 sm:items-center sm:min-h-[75px]">
	<SpeakerCard
			image="https://i.ibb.co/R9qqzqY/1580952874809.jpg"
			title="Entrepreneur"
			name="Siddharth Sinha"
			link="https://www.linkedin.com/in/sinhasiddharth/?originalSubdomain=in"
			disc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam, distinctio ad. Distinctio veritatis similique adipisci ut, animi numquam eveniet maxime! Voluptatem iure possimus quidem commodi facere eius aut necessitatibus amet."
		/>
		<SpeakerCard
			image="https://i.ibb.co/4dGp9WG/Whats-App-Image-2023-04-26-at-4-47-52-AM-1.jpg"
			title="Self made Businessman"
			name="Jameel Shah"
			link="https://www.instagram.com/shahshoes/?hl=en"
			disc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam, distinctio ad. Distinctio veritatis similique adipisci ut, animi numquam eveniet maxime! Voluptatem iure possimus quidem commodi facere eius aut necessitatibus amet."
		/>

	</div>
</div>

  )
}

export default Speakers