import React from 'react';
import Title from '../layouts/Title';
import skills from './skills';

const AboutUs = ({ title, des }) => {
  return (
    <div className='mx-w-7xl mx-auto my-14 md:py-8 px-7' id='about'>
      <Title title={"ABOUT ME"} des={"Here you will find more information about me mostly in terms of programming and technology"} />

      {/* About Content */}
      <div className='flex flex-col md:flex-row items-start justify-start'>
        {/* Left Side */}
        <div className='md:w-1/2 my-8'>
          <h4 className='text-2xl font-bold mb-8 bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne text-white py-2 px-4 rounded'>Curious About Me? Here you have it:</h4>
          <div className='md:w-10/12 text-lg mb-8'>
            <p className='mb-5'> I'm a front-end web developer who builds the front-end of websites and web applications and contributes to the overall success of the  product.</p>
            
            <p className='mb-5'>Check out some of my work in the "Projects" section. I also enjoy helping others in the developer community by sharing content related to what I've learned over the years in his web development..</p>
            
            <p className='mb-5'> Connect with me or follow me on GitHub where I post useful content related to web development and programming. I welcome work opportunities where I can contribute, learn and grow Please feel free to contact me if there are any opportunities that match my skills and experience..</p>
          </div>
        </div>

        {/* Right Side */}
        <div className='md:w-1/2 my-8'>
          <h4 className='text-2xl font-bold mb-8 bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne text-white py-2 px-4 rounded uppercase'>My Skills</h4>
          <div className='flex flex-wrap gap-3 md:w-10/12'>
            {skills.map(skill => (
              <p key={skill.id} className='bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne text-white py-2 px-4 rounded'>{skill.title}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

