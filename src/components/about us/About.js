// AboutUs.js
import React from 'react';
import Title from '../layouts/Title';
import Skills from '../../public/Skills.js';


const AboutUs = ({title, des}) => {
  return (
    <div className='m-auto md:w-3/4 text-xl my-16   mx-w-7xl mx-auto my-14 md:py-8 px-7'>
      <Title title={"ABOUT ME"} des={"Here you will find more information about me, what i do, and my current skills mostly in terms of programming and technology"} />

      {/* About Content */}
      <div className='flex flex-col md:flex-row items-start justify-start'>
        {/* Left Side */}
        <div className='md:w-1/2 my-8'>
          <h4 className='text-2xl font-bold mb-8'>Get To Know Me</h4>
          <div className='md:10/12 text-lg mb-8'>
          <p className='mb-5'>I'm a <strong className='text-designColor'>Frontend Developer</strong> building the Front-end of a website and Web Appliation that leads to the success of the overall product. Check out some work in the project section.</p>
          <p className='mb-5'>I also like sharing content related to the stuff that i have learn for so many years. I am doing and u can also follow my <a href='./' className='text-green-300'>Linkdin</a> .</p>
          <p className='mb-5'>I'm a Frontend Web Developer building the Front-end of a website and Web Appliation that leads to the success of the overall product. Check out some work in the project section.</p>
          </div>
        </div>

        {/* Right Side */}
        <div className='md:w-1/2 my-8'>
          <h4 className='text-2xl font-bold mb-8'>My Skill</h4>
          <div>
            {
              skills.map(skill => <p>{skill.title}</p>)
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
