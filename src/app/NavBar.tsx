import React from 'react';
import Image from 'next/image';
import Logo from './assests/Logo.png';
import Headshot from './assests/Headshot.jpg';

const NavBar = () => {
  return (
    <nav className="flex justify-between w-full p-5 ">
      <div className=" w-1/6 relative overflow-hidden">
        <Image
          className="mr-auto"
          height={150}
          width={150}
          src={Logo}
          alt={'Logo'}
        />
      </div>
      <div className="flex justify-between items-center w-2/6">
        <div>Movies</div>
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
};

export default NavBar;
