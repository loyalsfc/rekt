/* eslint-disable react/jsx-filename-extension */
import Head from 'next/head';
import Image from 'next/image';
import { Input } from 'postcss';
import React, { useEffect } from 'react';
import images from '../public/assets';
import 'aos/dist/aos.css';
import Aos from 'aos';

function Home() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="flex bg-white relative bg-dark justify-center">
      <div className="relative  px-10 md:px-4">
        <div className="container bg-pepe-red rounded-3xl flex md:flex-col-reverse lg:flex-row items-center gap-12 minmd:mt-[15rem] lg:mt-[10rem]">
          <div data-aos="fade-up" className="flex flex-1  flex-col items-center lg:items-center">
            <h2 className="text-white text-3xl md:text-4 lg:text-4xl font-bold text-center mb-6 md:mb-0">
              EVERYONE - REKT
            </h2>
            <p className="text-white text-lg text-center md:text-sm lg:text-left mb-6">The only crypto tool that cares about you, Anon.</p>
            <div className="px-6 md:mb-10 justify-center flex-wrap gap-6">
              <button
                type="button"
                className="btn btn-red m-2 hover:bg-white hover:text-pepe-red"
                onClick={() => window.open('https://www.dextools.io/app/ether/pair-explorer/0xf7558e37e84e95f6f66ee8bc4a913f2bc426d635')}
              >
                BUY TOKEN
              </button>
              <button
                type="button"
                className="btn btn-white m-2 hover:bg-pepe-red hover:text-white"
                onClick={() => window.open('https://twitter.com/EveryoneRekt')}
              >
                FOLLOW REKT
              </button>
            </div>
          </div>
          <div data-aos="fade-right" className="flex justify-center flex-1 m-10 md:mb-16 z-1 rounded-2xl md:items-center md:justify-center">
            <Image
              src={images.logo}
              height={400}
              width={500}
              className="rounded-3xl"
              alt="logo"
            />
          </div>
        </div>
        <section className="py-20 mt-32 md:mt-5 ">
          <div className=" h-[15rem]  rounded-3xl w-5/6 mx-auto">
            <h1 data-aos="fade-right" className="text-7xl md:text-2xl font-bold uppercase text-center text-black">So many sad stories</h1>
            <p data-aos="fade-up" className="text-center text-xl md:text-sm text-black mt-4">
              Out too early, in too late, missed altogether. Withdrawals locked, stuck holding the ponzi that’s going to zero, blacklisted, liquidity gone, we all know the stories.
              Inflation soaring, manipulated charts, news headlines screaming, and all all the while being punished relentlessly by something we believed in.
              Everyone has felt the pain.
            </p>
          </div>
          <div className="relative rounded-3xl shadow-xl lg:mt-24 md:mt-20">
            <div data-aos="fade-right" className="container mt-20 flex md:flex-col flex-row md:items-center items-start justify-center gap-x-24">
              <div className="flex flex-1 justify-center z-1 mb-0 md:mb-10">
                <Image
                  src={images.pepe1}
                  width={300}
                  height={300}
                  alt="pepe"
                  className="sm:w-3/4 sm:h-3/4 md:w-full md:h-full"
                />
              </div>
              <div className="flex px-6 md:px-0 flex-1 flex-col md:items-center items-center  ">
                <h1 className="text-6xl uppercase md:text-2xl text-center font-bold text-pepe-red">
                  Up only!
                </h1>
                <p className="text-black my-4 text-center md:text-sm md:text-center sm:w-3/4 w-full">
                  We’ve heard about it but where is it? To most, it’s a mystery, some sort of fable. When is it our turn?
                  You know the good stories:
                  .08 ETH for some JPEGS of an Ape, sold for a small retirement fund some months later.
                  “He bought SHIB early and made 7 figs.”

                </p>

              </div>

            </div>

          </div>
          <div className="relative rounded-3xl shadow-xl minmd:mt-[10rem]  lg:mt-24 md:mt-20">
            <div data-aos="fade-right md:none" className="container flex md:flex-col-reverse flex-row items-center justify-center gap-x-24">
              <div className="flex px-6 md:px-0 flex-1 flex-col md:items-center items-center  ">
                <h1 className="text-6xl uppercase md:text-2xl text-center font-bold text-pepe-red">
                  We get your point
                </h1>
                <p className="text-black my-4 text-center md:text-sm md:text-center sm:w-3/4 w-full">
                  Aside from the chosen few who regale the masses with the tales of life changing money, most are dealing harshly with the bear market.
                  Many sit and think about all the missed opportunities, all the chances they didn’t take, all the times if they had just held a little longer. Next time will be different…
                  Nothing is pointing to a new bull run, but it would seem we are further from the top than the bottom. Mostly one direction to go from here.

                </p>

              </div>
              <div className="flex px-5 flex-1 justify-center z-1 mb-0 md:mb-10">
                <Image
                  src={images.pepe2}
                  width={600}
                  height={300}
                  alt="pepe"
                  className="sm:w-3/4 sm:h-3/4 md:w-full md:h-full"
                />
              </div>

            </div>

          </div>
          <div className="relative rounded-3xl shadow-xl minmd:mt-[10rem]  lg:mt-24 md:mt-20">
            <div data-aos="fade-right" className="container flex md:flex-col flex-row items-center justify-center gap-x-24">
              <div className="flex px-4 flex-1 justify-center z-1 mb-0 md:mb-10">
                <Image
                  src={images.pepe3}
                  width={500}
                  height={330}
                  alt="pepe"
                  className="sm:w-3/4 sm:h-3/4 md:w-full md:h-full"
                />
              </div>
              <div className="flex px-6 md:px-0 flex-1 flex-col md:items-center items-center  ">
                <h1 className="text-6xl md:text-2xl text-center font-bold uppercase text-pepe-red">
                  The focus has shifted
                </h1>
                <p className="text-black my-4 text-center md:text-sm md:text-center sm:w-3/4 w-full">
                  From the giants of the past, many have exited in silence or stayed too long only to be destroyed by their own creations. The ones who are left look to rebuild, and in the shadow of the once-great leaders a new generation is forming.
                  Surely this time CAN be different? We have to have learned something from all the stories, from all the pain.
                  Things move on, business as usual.
                  Coins are still launching, devs are still devving, new lending protocols are forming from the ashes, and people are still striking gold where they can find it.

                </p>

              </div>

            </div>

          </div>
        </section>
        <section className="mb-10 md:mb-20 minmd:mt-32 mt-20 md:mt-4 ">
          <div className="h-[15rem] rounded-3xl w-5/6 mx-auto">
            <h1 data-aos="fade-right" className="text-7xl md:text-2xl font-bold uppercase text-center text-black">Devoting effort to the right reasons, building utility.</h1>
            <p data-aos="fade-up" className="text-center text-xl md:text-sm text-black mt-4">
              This is the way forward.
              Out too early, in too late, missed altogether. Withdrawals locked, stuck holding the ponzi that’s going to zero, blacklisted, liquidity gone, we all know the stories.
              Inflation soaring, manipulated charts, news headlines screaming, and all all the while being punished relentlessly by something we believed in.
              Everyone has felt the pain.
            </p>
          </div>
        </section>
        <div className="container bg-pepe-red mb-20 rounded-3xl flex md:flex-col-reverse lg:flex-row items-center gap-12 minmd:mt-[15rem] lg:mt-[10rem]">
          <div data-aos="fade-up" className="flex mt-0 mb-10 flex-1 flex-col items-center lg:items-center">
            <h2 className="text-white text-3xl md:text-4 lg:text-4xl font-bold text-center mb-6 ">
              CONFESS TO REKT
            </h2>
            <p className="text-white text-lg text-center lg:text-left mb-6">It's time to change everything.</p>
            <div className="px-6 justify-center flex-wrap gap-6">
              <button
                type="button"
                className="btn btn-red m-2 hover:bg-white hover:text-pepe-red"
                onClick={() => window.open('https://t.me/EveryoneREKT')}
              >
                CHAT ROOM
              </button>
              <button
                type="button"
                className="btn btn-white m-2 hover:bg-pepe-red hover:text-white"
                onClick={() => window.open('https://www.dextools.io/app/ether/pair-explorer/0xf7558e37e84e95f6f66ee8bc4a913f2bc426d635')}
              >
                GET REKT
              </button>
            </div>
          </div>
          <div data-aos="fade-right" className="flex mr-0 justify-end items-end flex-1 py-2 px-0 md:mb-16 z-1 rounded-2xl md:items-center md:justify-center">
            <Image
              src={images.robot}
              height={300}
              width={500}
              className="rounded-3xl"
              alt="logo"
            />
          </div>
        </div>
        <div className="w-full md:mt-10  ">
          <div className="flex flex-col items-center">
            <div className=" text-black mb-10 sm:text-xs">
              2022. REKT. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
