'use client';

import Banner from './assests/Banner.jpg';
import { useState } from 'react';
import {
  BsChevronCompactLeft,
  BsChevronCompactRight,
  BsPlayCircle,
} from 'react-icons/bs';

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
            <div className="w-3/6 h-2/6 absolute top-[50%] -translate-x-[-50%] translate-y-[-50%] ">
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
            <div className="w-3/6 h-2/6 absolute top-[95%] -translate-x-[-50%] translate-y-[-50%] tracking-widest  ">
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
    </main>
  );
}

{
  /* <Image className="absolute -z-50 " src={Banner} alt={'Banner'} fill />
<h1>The Martian</h1> */
}
