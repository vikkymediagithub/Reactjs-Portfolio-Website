import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { FaFacebookF, FaTwitter, FaReact } from "react-icons/fa";
// import { FafacebookF, Fatwitter, FaLinkdin, Fareact } from 'react-icons/fa6';
// import { SiTailwindcss, SiFigma, SiNextdotjs } from 'react-icons/si';

const Banner = () => {
    const [text] = useTypewriter({
        words: ['Frontend Developer.', 'Graphics Designer.', 'Freelancer.'],
        loop: true,
        deleteSpeed: 10,
        typeSpeed: 20,
        delaySpeed: 2000,
    });
    
    return (
        <section id='home' className='w-full font-titleFont py-20 flex items-center border-b-[1px] border-b-black'>
            <div className='w-1/2 flex flex-col gap-20'>
                <div className='flex flex-col gap-5'>
                    <h4 className='text-lg font-normal'>WELCOME TO MY WORLD</h4>
                    <h1 className='font-bold text-5xl text-white'>
                        Hi, I'M{" "}
                        <span className='text-designColor capitalize'>
                            Victor Joseph
                        </span>
                    </h1>
                    <h2 className='font-bold text-4xl text-white'>
                        a <span>{text}</span>
                        <Cursor cursorBlinking={false} cursorStyle='|' cursorColor='#ff014f'/>
                    </h2>
                    <p>In React Scroll, the component is used to create scrollable links. However, it should be used with a closing tag, not a self-closing tag as you did with. Also, to prop should be used instead of href.</p>
                </div>
                <div>
                    <h2 className='text-base uppercase font-titleFont mb-4'>Find me in</h2>
                    <div className='flex gap-4'>
                        <span className='bannerIcon'><FaFacebookF /></span>
                        <span className='bannerIcon'><FaTwitter /></span>
                        <span className='bannerIcon'><FaReact /></span>
                        {/* <span className='bannerIcon'><LinkedIn /></span> */}
                    </div>
                </div>
            </div>
            <div className='w-1/2'></div>
        </section>
    );
};

export default Banner;
