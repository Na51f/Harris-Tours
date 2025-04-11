"use client";

import { div } from "framer-motion/client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <main className="w-screen h-screen">
      <div className="flex flex-row justify-between items-center m-8">
        <div className="flex flex-row gap-4">
          <button className="flex flex-col justify-center items-center gap-1.5 p-2 
            hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors">
            <div className="w-6 h-0.5 bg-current hover:grow"></div>
            <div className="w-6 h-0.5 bg-current"></div>
            <div className="w-6 h-0.5 bg-current"></div>
          </button>
          <div className="text-4xl uppercase font-semibold">Harris Tours</div>
        </div>
        <div className="flex flex-row gap-16 font-mono text-xl">
          <div>Tours</div>
          <div>About</div>
          <div>Policies</div>
          <div>More</div>
        </div>
        <div className="flex flex-row gap-4">
          <button
            onClick={toggleDarkMode}
            className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200 dark:bg-gray-800"
          >
            <span className="absolute inset-y-0 right-0 flex items-center pr-1.5">
              <svg
                className={`h-3 w-3 ${darkMode ? 'opacity-0' : 'text-amber-500'}`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" />
              </svg>
            </span>
            <span className="absolute inset-y-0 left-0 flex items-center pl-1.5">
              <svg
                className={`h-3 w-3 ${darkMode ? 'text-indigo-200' : 'opacity-0'}`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            </span>
            <span
              className={`${
                darkMode ? 'translate-x-6' : 'translate-x-1'
              } inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ease-in-out`}
            />
          </button>
          <svg xmlns="http://www.w3.org/2000/svg"
            width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg"
            width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        </div>
      </div>


      <div className="flex flex-row gap-8 w-full justify-center pt-32 min-w-sm">
        <div className="flex flex-col gap-4 min-w-3xs">
          <Image
            src="/amusement.jpg"
            alt="Amusement park rides"
            width={500}
            height={300}
            className="rounded-2xl opacity-70 transition duration-100 ease-in-out hover:opacity-100"
          />
          <Image
            src="/gokarts.jpg"
            alt="Go kart racing"
            width={500}
            height={300}
            className="rounded-2xl opacity-70 transition duration-100 ease-in-out hover:opacity-100"
          />
        </div>

        <div className="text-8xl text-wrap font-semibold justify-self-center">
          <span className="bg-linear-to-br from-purple-700 to-fuchsia-500 text-white
          border-r-purple-700 border-b-purple-700 
          border-t-fuchsia-500 border-l-fuchsia-500 border-4 rounded-2xl drop-shadow-lg px-5">
            Affordable
          </span> Road Trips For Students
        </div>

        <div className="flex flex-col gap-8 min-w-3xs">
          <Image
            src="/arcade.jpg"
            alt="Arcade games"
            width={500}
            height={300}
            className="rounded-2xl opacity-70 transition duration-100 ease-in-out hover:opacity-100"
          />
          <Image
            src="/horse.jpg"
            alt="Horse riding"
            width={500}
            height={300}
            className="rounded-2xl opacity-70 transition duration-100 ease-in-out hover:opacity-100"
          />
        </div>
      </div>
    </main>
  );
}
