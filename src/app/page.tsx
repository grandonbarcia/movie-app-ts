'use client';

import Image from 'next/image';

import Banner from './assests/Banner.jpg';
import { useState } from 'react';
import {
  BsChevronCompactLeft,
  BsChevronCompactRight,
  BsPlayCircle,
} from 'react-icons/bs';
import { RiArrowDownSFill } from 'react-icons/ri';
import { AiOutlineStar } from 'react-icons/ai';
import { TbGridDots } from 'react-icons/tb';
import { MdOutlineSubject } from 'react-icons/md';
import { HiOutlineMagnifyingGlass } from 'react-icons/hi2';
import { AiOutlineHeart } from 'react-icons/ai';

import Poster from './assests/Poster.jpg';

export default function Home() {
  const slides = [
    {
      url: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80',
    },
    {
      url: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
    },
    {
      url: 'https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80',
    },

    {
      url: 'https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80',
    },
    {
      url: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;

    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;

    setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;

    setCurrentIndex(newIndex);
  };

  return (
    <main>
      <section className="h-screen ">
        <div className="w-full h-[780px] m-auto relative group">
          <div
            style={{ backgroundImage: `url(${Banner.src})` }}
            className="w-full h-full  bg-center bg-cover duration-500"
          >
            <div className="w-full h-full bg-gradient-radial from-transparent to-gray-500 opacity-60"></div>
            <div className="w-4/6 h-2/6 absolute top-[50%] -translate-x-[-25%] translate-y-[-50%] ">
              <div className="h-3/6">
                <h1 className="text-6xl uppercase tracking-widest font-bold text-white opacity-100 pb-4 ">
                  The Martian
                </h1>
                <div className="w-2/6 flex justify-between uppercase text-white font-semibold text-sm">
                  <div>adventure</div>
                  <div>sci-fi</div>
                  <div>thriller</div>
                </div>
              </div>
              <div className="h-3/6">
                <button className="w-1/5 bg-amber-400 hover:bg-amber-500 text-black font-bold py-4 px-6 rounded-full flex items-center justify-between">
                  Watch Trailer <BsPlayCircle size={24} />
                </button>
              </div>
            </div>
            <div className="w-4/6 h-2/6 absolute top-[95%] -translate-x-[-25%] translate-y-[-50%] tracking-widest  ">
              <div className="text-white text-xl">In theaters</div>
              <div className="text-amber-400 text-xl">15 Oct, 2015 (USA)</div>
            </div>
          </div>

          <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <BsChevronCompactLeft onClick={prevSlide} />
          </div>
          <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <BsChevronCompactRight onClick={nextSlide} />
          </div>
        </div>
      </section>
      <section className="w-[1280px] h-screen bg-white mx-auto top-[40%] -translate-x-0 translate-y-[-25%] px-11 pt-5 pb-5">
        <div className="w-full flex uppercase font-semibold">
          <div className="w-4/6 flex justify-between items-center border-b-2 pb-5">
            <div className="text-yellow-500">in theaters</div>
            <div>coming soon</div>
            <div>charts</div>
            <div>tv series </div>
            <div>trailers</div>
            <div className="flex items-center">
              more <RiArrowDownSFill size={18} />
            </div>
          </div>
          <div className="w-2/6  text-right border-b-2 pb-5">
            <button
              type="button"
              className=" w-1/4 inline-block rounded bg-yellow-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#e4a11b] transition duration-150 ease-in-out hover:bg-warning-600 hover:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.3),0_4px_18px_0_rgba(228,161,27,0.2)] focus:bg-warning-600 focus:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.3),0_4px_18px_0_rgba(228,161,27,0.2)] focus:outline-none focus:ring-0 active:bg-warning-700 active:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.3),0_4px_18px_0_rgba(228,161,27,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(228,161,27,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.2),0_4px_18px_0_rgba(228,161,27,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.2),0_4px_18px_0_rgba(228,161,27,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.2),0_4px_18px_0_rgba(228,161,27,0.1)]"
            >
              <div className="w-full flex justify-between items-center">
                <AiOutlineStar size={18} /> <span className="text-sm">129</span>
              </div>
            </button>
          </div>
        </div>
        <div className="flex items-center py-10">
          <div className="">
            <MdOutlineSubject size={24} />
          </div>
          <div className="pl-6">
            <TbGridDots size={24} />
          </div>
          <div className="w-full pl-6 ">
            <div className="flex justify-between">
              <label className="block text-sm font-medium text-gray-900 dark:text-white">
                IMDb Rating
              </label>
              <HiOutlineMagnifyingGlass size={24} />
            </div>
            <input
              id="small-range"
              type="range"
              className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer range-sm dark:bg-gray-700"
            />
          </div>
        </div>
        <div className="h-full">
          <div className="h-5/6 w-1/3 ">
            <div className="h-5/6 w-full relative">
              <Image src={Poster} fill={true} alt="poster" />
            </div>
            <div>Akria</div>
            <div>Anime Sci-Fi Adventure</div>
            <div>
              <AiOutlineHeart size={32} />
            </div>
            <div>8.3</div>
          </div>
        </div>
      </section>
    </main>
  );
}

{
  /* <Image className="absolute -z-50 " src={Banner} alt={'Banner'} fill />
<h1>The Martian</h1> */
}
