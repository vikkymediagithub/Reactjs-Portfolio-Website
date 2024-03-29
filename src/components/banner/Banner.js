import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

const Banner = () => {
    const [text] = useTypewriter({
        words: ['Frontend Developer.', 'Graphics Designer.', 'Freelancer.'],
        loop: true,
        deleteSpeed: 10,
        typeSpeed: 20,
        delaySpeed: 2000,
    });
    
    return (
        <section id='home' className='w-full font-titleFont pt-10 pb-20 flex items-center border-b-[1px] border-b-black'>
            <div className='w-1/2'>
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
            </div>
            <div className='w-1/2'></div>
        </section>
    );
};

export default Banner;
