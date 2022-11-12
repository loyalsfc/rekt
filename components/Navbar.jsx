import React, { useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import Link from 'next/link';

import images from '../public/assets';

function MenuItems({ isMobile, active, setActive }) {
  const generateLink = (i) => {
    switch (i) {
      case 0: return '/';
      case 1: return 'https://twitter.com/EveryoneRekt';
      case 2: return 'https://t.me/EveryoneREKT';
      case 3: return 'https://www.dextools.io/app/ether/pair-explorer/0xf7558e37e84e95f6f66ee8bc4a913f2bc426d635';
      default: return '/';
    }
  };

  return (
    <ul className={`list-none flexCenter space-x-12 md:space-x-0 sm:space-x-0 flex-row ${isMobile && 'flex-col h-full'}`}>
      {['Home', 'Twitter', 'Telegram', 'Buy Now'].map((item, i) => (
        <li
          key={i}
          onClick={() => {
            setActive(item);
          }}
          className={`flex flex-row font-sf text-lg items-center font-poppins font-semibold text-base text-black hover:text-slate-600 mx-3 ${active === item ? 'text-nft-black' : 'text-white'}`}
        >
          <Link href={generateLink(i)}>
            {item}
          </Link>
        </li>
      ))}
    </ul>
  );
}

function Navbar() {
  const { theme, setTheme } = useTheme();
  const [active, setActive] = useState('Home');
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="flexBetween w-full bg-white fixed z-10 p-4 sm:p-2 flex-row ">
      <div className="flex sm:mt-1 flex-1 flex-row justify-start items-center ml-40 md:ml-10 nm:ml-10 sm:ml-8">
        <Link href="/">
          <div className="flexCenter cursor-pointer">
            <Image src={images.logo} width={60} height={60} className="rounded-3xl" />

          </div>
        </Link>
      </div>

      <div className="flex flex-initial  flex-row justify-end mr-[10rem] nm:mr-6 sm:mr-2 md:mr-4 nm:px-2 px-4">
        <div className="md:hidden flex">
          <ul className="list-none flexCenter flex-row ">
            <MenuItems active={active} setActive={setActive} router={router} />

          </ul>
        </div>
        <div className="hidden md:flex">
          {isOpen
            ? (
              <Image
                src={images.cross}
                objectFit="contain"
                width={20}
                height={20}
                alt="close"
                onClick={() => setIsOpen(false)}
              />
            ) : (
              <Image
                src={images.menu}
                objectFit="contain"
                width={25}
                height={25}
                alt="close"
                onClick={() => setIsOpen(true)}

              />
            )}

          {isOpen && (
          <div className="fixed bg-white h-screen inset-0 overflow-y-hidden top-10 md:top-12 z-10 nav-h flex justify-center items-center flex-col">
            <div className="flex-1 p-4">
              <MenuItems active={active} setActive={setActive} isMobile className="items-center" />
            </div>
            <div className="p-4 border-t" />
          </div>

          )}

        </div>
      </div>
    </nav>
  );
}

export default Navbar;
