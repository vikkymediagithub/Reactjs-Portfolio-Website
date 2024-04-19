// AboutUs.js
import React from 'react';
import Title from '../layouts/Title';


const AboutUs = ({title, des}) => {
  return (
    <div className='text-center m-auto md:w-3/4 text-xl my-16'>
      <Title title={"ABOUT ME"} des={"Here you will find more information about me, what i do, and my current skills mostly in terms of programming and technology"} />
    </div>
  );
};

export default AboutUs;
