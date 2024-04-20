import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["Frontend Developer.", "Freelancer.", "Graphics Designer."],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5" data-aos="fade-down"
     data-aos-easing="linear" data-aos-duration="1500">
        <h4 className=" text-2xl font-bold">WELCOME TO MY WORLD 👋</h4>
        <h1 className="text-5xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Victor Joseph</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
        I'm proficient in popular frontend framework like Reactjs, which I use to build interactive and scalable web applications. I'm also well-versed in using frontend libraries like Bootstrap, Tailwindcss and Material-UI to ensure that the user interface is both aesthetically pleasing and responsive.
        </p>
      </div>
     {/* Media */}
     <Media />
    </div>
  );
}

export default LeftBanner;