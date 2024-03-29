import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { FaFacebookF, FaTwitter, FaReact } from "react-icons/fa";
import banner from '../../assets/images/banner.png';

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
            {/* Text and Icons left-side */}
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
                    <p>I'm proficient in popular frontend frameworks like React and Nextjs, which I use to build interactive and scalable web applications. I'm also well-versed in using frontend libraries like Bootstrap, Tailwindcss and Material-UI to ensure that the user interface is both aesthetically pleasing and responsive.</p>
                </div>
                <div className='flex justify-between'>
                    <div>
                        <h2 className='text-base uppercase font-titleFont mb-4'>Find me in</h2>
                        <div className='flex gap-4'>
                            <span className='bannerIcon'><FaFacebookF /></span>
                            <span className='bannerIcon'><FaTwitter /></span>
                            <span className='bannerIcon'><FaReact /></span>
                            
                        </div>
                    </div>
                    <div>
                    <h2 className='text-base uppercase font-titleFont mb-4'>Best Skill on</h2>
                        <div className='flex gap-4'>
                            <span className='bannerIcon'><FaFacebookF /></span>
                            <span className='bannerIcon'><FaTwitter /></span>
                            <span className='bannerIcon'><FaReact /></span>
                            
                        </div>
                    </div>
                </div>
            </div>
            {/* Image on the right-side */}
            <div className='w-1/2 flex justify-center items-center relative'>
            <img className='w-[350px] h-[500px] z-10' src={banner} alt='logo' />
            <div className='absolute bottom-0 w-[500px] h-[500px] bg-gradient-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center'></div>
            </div>
        </section>
    );
};

export default Banner;
