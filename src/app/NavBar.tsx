import React from 'react';
<<<<<<< HEAD
import Image from 'next/image';
import Logo from './assests/Logo.png';
import Headshot from './assests/Headshot.jpg';

const NavBar = () => {
  return (
    <nav className="flex justify-between w-full p-7 fixed z-10 ">
      <div className=" w-1/6 relative overflow-hidden">
        <Image
          className="mr-auto"
          height={150}
          width={150}
          src={Logo}
          alt={'Logo'}
        />
      </div>
      <div className="flex justify-between items-center w-2/6 uppercase font-semibold text-white">
        <div className="text-yellow-500">Movies</div>
        <div>Celebs and Photos</div>
        <div>Community</div>
        <div>News</div>
      </div>
      <div className=" w-1/6 ">
        <div className="w-16 h-16 rounded-full relative overflow-hidden ml-auto">
          <Image
            src={Headshot}
            alt={'headshot'}
            objectFit="cover"
            fill={true}
          />
        </div>
      </div>
    </nav>
  );
=======

const NavBar = () => {
  return <div>NavBar</div>;
>>>>>>> ec66d97a93e2b94f62be041d02322501a8c915b0
};

export default NavBar;
