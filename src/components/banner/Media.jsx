import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { SiTailwindcss, SiFigma, SiGithub, SiNetlify  } from "react-icons/si";
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between" data-aos="fade-left" data-aos-anchor="#example-anchor" data-aos-offset="500"
    data-aos-duration="500">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <a href="https://web.facebook.com/victor.oke.5458" target="_blank" rel="noopener noreferrer" className="bannerIcon">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com/ayomide3622" target="_blank" rel="noopener noreferrer" className="bannerIcon">
              <FaTwitter />
            </a>
            <a href="https://www.linkedin.com/in/oke-victor-14a536261/" target="_blank" rel="noopener noreferrer" className="bannerIcon">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <a href="https://app.netlify.com/teams/victorjoseph/overview" target="_blank" rel="noopener noreferrer" className="bannerIcon">
              <SiNetlify />
            </a>
            <a href="https://github.com/vikkymediagithub" target="_blank" rel="noopener noreferrer" className="bannerIcon">
            <SiGithub  />
            </a>
            <a href="https://tailwindcss.com/docs/installation" target="_blank" rel="noopener noreferrer" className="bannerIcon">
              <SiTailwindcss />
            </a>
            <a href="https://www.figma.com/files/recents-and-sharing/recently-viewed?fuid=1223237921336515815" target="_blank" rel="noopener noreferrer" className="bannerIcon">
              <SiFigma />
            </a>
          </div>
        </div>
      </div>
  )
}

export default Media